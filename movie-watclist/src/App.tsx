
import { useEffect, useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import StatsSummary from "./components/StatsSummary";
import Login from "./components/Login";
import { MovieList } from "./component/MovieList";
import type { Movie } from "./types/Movie";
import { getMovies, addMovie } from "./services/movieApi";
import "./App.css";

type MovieFilter = "all" | "watched" | "unwatched";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<MovieFilter>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch movies from Mock API when the application starts
  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const data = await getMovies();
        setMovies(data);
        setError("");
      } catch (err) {
        console.error("Error loading movies:", err);
        setError("Unable to load movies. Please check that the Mock API is running.");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  // Add movie to Mock API
  const handleAddMovie = async (newMovie: Omit<Movie, "id">) => {
    try {
      const savedMovie = await addMovie(newMovie);

      setMovies((previousMovies) => [
        ...previousMovies,
        savedMovie,
      ]);

      setSelectedMovieId(savedMovie.id);
      setError("");
    } catch (err) {
      console.error("Error adding movie:", err);
      setError("Could not add movie. Please try again.");
    }
  };

  // Filter movies
  const filteredMovies = movies.filter((movie) => {
    if (activeFilter === "watched") return movie.watched;
    if (activeFilter === "unwatched") return !movie.watched;
    return true;
  });

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovieId(movie.id);
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div className="brand">
          <div className="brand-icon">🎬</div>
          <div>
            <h1>MovieWatchlist</h1>
            <p>Your personal movie collection</p>
          </div>
        </div>

        <button
          className="sign-out-button"
          onClick={() => setIsLoggedIn(false)}
        >
          Sign Out
        </button>
      </header>

      <section className="dashboard-intro">
        <div>
          <p className="welcome-label">YOUR PERSONAL DASHBOARD</p>
          <h2>Welcome to your movie collection.</h2>
          <p>
            Keep track of the movies you love and discover what to watch next.
          </p>
        </div>
      </section>

      {error && (
        <p role="alert" style={{ color: "#ef4444", padding: "12px" }}>
          {error}
        </p>
      )}

      <StatsSummary movies={movies} />

      <AddMovieForm onAddMovie={handleAddMovie} />

      <section className="watchlist-section">
        <div className="watchlist-heading">
          <div>
            <h2>My Movies</h2>
            <p>Your personal movie library</p>
          </div>

          <span className="movie-count">
            {movies.length} {movies.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 my-5">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-[#22222e] text-slate-300"
            }`}
          >
            All ({movies.length})
          </button>

          <button
            onClick={() => setActiveFilter("watched")}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === "watched"
                ? "bg-indigo-600 text-white"
                : "bg-[#22222e] text-slate-300"
            }`}
          >
            Watched ({movies.filter((movie) => movie.watched).length})
          </button>

          <button
            onClick={() => setActiveFilter("unwatched")}
            className={`px-4 py-2 rounded-lg ${
              activeFilter === "unwatched"
                ? "bg-indigo-600 text-white"
                : "bg-[#22222e] text-slate-300"
            }`}
          >
            To Watch ({movies.filter((movie) => !movie.watched).length})
          </button>
        </div>

        {loading ? (
          <p>Loading your movies...</p>
        ) : (
          <MovieList
            title={
              activeFilter === "all"
                ? "All Movies"
                : activeFilter === "watched"
                  ? "Watched Movies"
                  : "Movies To Watch"
            }
            movies={filteredMovies}
            selectedId={selectedMovieId}
            onSelectMovie={handleSelectMovie}
          />
        )}
      </section>

      <footer className="dashboard-footer">
        <p>MovieWatchlist • Your next favourite movie starts here.</p>
      </footer>
    </main>
  );
}

export default App;

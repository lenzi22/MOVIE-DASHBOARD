
import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import StatsSummary from "./components/StatsSummary";
import Login from "./components/Login";
import type { Movie } from "./types/Movie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddMovie = (newMovie: Omit<Movie, "id">) => {
    const movieWithId: Movie = {
      ...newMovie,
      id: Date.now(),
    };

    setMovies((previousMovies) => [
      ...previousMovies,
      movieWithId,
    ]);
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <main className="dashboard-page">

      {/* DASHBOARD HEADER */}
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

      {/* WELCOME SECTION */}
      <section className="dashboard-intro">
        <div>
          <p className="welcome-label">YOUR PERSONAL DASHBOARD</p>
          <h2>Welcome to your movie collection.</h2>
          <p>
            Keep track of the movies you love and discover what to watch next.
          </p>
        </div>
      </section>

      {/* MOVIE STATISTICS */}
      <StatsSummary movies={movies} />

      {/* ADD MOVIE FORM */}
      <AddMovieForm onAddMovie={handleAddMovie} />

      {/* MOVIE COLLECTION */}
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

        {movies.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎞️</div>
            <h3>Your collection is waiting</h3>
            <p>
              You haven't added any movies yet.
              Start building your collection using the form above.
            </p>
          </div>
        ) : (
          <div className="movie-list">
            {movies.map((movie) => (
              <article className="movie-card" key={movie.id}>
                {movie.poster && (
                  <img
                    src={movie.poster}
                    alt={`${movie.title} poster`}
                  />
                )}

                <div className="movie-card-content">
                  <h3>{movie.title}</h3>
                  <p>{movie.genre} • {movie.year}</p>
                  <p className="movie-rating">
                    ★ {movie.rating}/10
                  </p>

                  <span
                    className={
                      movie.watched
                        ? "movie-status watched"
                        : "movie-status pending"
                    }
                  >
                    {movie.watched ? "Watched" : "To Watch"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="dashboard-footer">
        <p>MovieWatchlist • Your next favourite movie starts here.</p>
      </footer>

    </main>
  );
}

export default App;

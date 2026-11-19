
import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import type { Movie } from "./types/Movie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

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

  return (
    <main>
      <h1>Movie Watchlist Dashboard</h1>

      <AddMovieForm onAddMovie={handleAddMovie} />

      <section>
        <h2>My Movies ({movies.length})</h2>

        {movies.length === 0 ? (
          <p>No movies added yet. Add your first movie above.</p>
        ) : (
          <div className="movie-list">
            {movies.map((movie) => (
              <article key={movie.id}>
                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  width="150"
                />

                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
                <p>Year: {movie.year}</p>
                <p>Rating: {movie.rating}/10</p>
                <p>
                  Status: {movie.watched ? "Watched" : "Not Watched"}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

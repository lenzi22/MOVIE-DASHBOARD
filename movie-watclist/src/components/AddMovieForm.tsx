
import { useState } from "react";
import type { FormEvent } from "react";
import type { Movie } from "../types/Movie";

interface AddMovieFormProps {
  onAddMovie: (movie: Omit<Movie, "id">) => void;
}

function AddMovieForm({ onAddMovie }: AddMovieFormProps) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newMovie: Omit<Movie, "id"> = {
      title: title.trim(),
      genre: genre.trim(),
      year: Number(year),
      rating: Number(rating),
      poster: poster.trim(),
      watched: false,
    };

    onAddMovie(newMovie);

    setTitle("");
    setGenre("");
    setYear("");
    setRating("");
    setPoster("");
  };

  return (
    <section className="add-movie-section">
      <div className="add-movie-heading">
        <div className="add-movie-icon">+</div>

        <div>
          <h2>Add a New Movie</h2>
          <p>Expand your collection with your next favourite movie.</p>
        </div>
      </div>

      <form className="add-movie-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Movie Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. The Dark Knight"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            placeholder="e.g. Action, Drama"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="year">Release Year</label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="e.g. 2024"
            min="1888"
            max={new Date().getFullYear() + 5}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="rating">Movie Rating</label>
          <input
            id="rating"
            type="number"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            placeholder="Rate from 0 to 10"
            min="0"
            max="10"
            step="0.1"
            required
          />
        </div>

        <div className="form-field full-width">
          <label htmlFor="poster">Movie Poster URL</label>
          <input
            id="poster"
            type="url"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
            placeholder="Paste your movie poster image URL"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="add-movie-button">
            + Add Movie to Collection
          </button>

          <span>Complete the details above to add your movie.</span>
        </div>
      </form>
    </section>
  );
}

export default AddMovieForm;

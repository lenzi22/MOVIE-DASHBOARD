
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
      genre,
      year: Number(year),
      rating: Number(rating),
      poster: poster.trim(),
      watched: false,
    };

    onAddMovie(newMovie);

    // Clear the form after adding the movie
    setTitle("");
    setGenre("");
    setYear("");
    setRating("");
    setPoster("");
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Movie Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter movie title"
            required
          />
        </div>

        <div>
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            placeholder="Enter movie genre"
            required
          />
        </div>

        <div>
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

        <div>
          <label htmlFor="rating">Rating (0–10)</label>
          <input
            id="rating"
            type="number"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            placeholder="e.g. 8.5"
            min="0"
            max="10"
            step="0.1"
            required
          />
        </div>

        <div>
          <label htmlFor="poster">Poster URL</label>
          <input
            id="poster"
            type="url"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
            placeholder="Paste poster image URL"
            required
          />
        </div>

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;

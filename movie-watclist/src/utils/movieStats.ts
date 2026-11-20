
import type { Movie } from "../types/Movie";

export interface MovieStats {
  totalMovies: number;
  watchedMovies: number;
  toWatchMovies: number;
  averageRating: number;
}

export function calculateMovieStats(movies: Movie[]): MovieStats {
  const totalMovies = movies.length;

  const watchedMovies = movies.filter(
    (movie) => movie.watched === true
  ).length;

  const toWatchMovies = totalMovies - watchedMovies;

  const ratedMovies = movies.filter(
    (movie) =>
      typeof movie.rating === "number" &&
      Number.isFinite(movie.rating) &&
      movie.rating >= 0 &&
      movie.rating <= 10
  );

  const totalRating = ratedMovies.reduce(
    (sum, movie) => sum + movie.rating,
    0
  );

  const averageRating =
    ratedMovies.length > 0
      ? Number((totalRating / ratedMovies.length).toFixed(1))
      : 0;

  return {
    totalMovies,
    watchedMovies,
    toWatchMovies,
    averageRating,
  };
}

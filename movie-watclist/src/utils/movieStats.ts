
import type { Movie } from '../types/Movie';

export interface MovieStats {
  totalMovies: number;
  watchedMovies: number;
  toWatchMovies: number;
  averageRating: number;
}

export function calculateMovieStats(movies: Movie[]): MovieStats {
  const totalMovies = movies.length;

  // Count movies marked as watched.
  const watchedMovies = movies.filter(
    (movie) => movie.status === true
  ).length;

  // Calculate movies that are still waiting to be watched.
  const toWatchMovies = totalMovies - watchedMovies;

  // Include only valid ratings between 0 and 10.
  const ratedMovies = movies.filter(
    (movie) =>
      typeof movie.rating === 'number' &&
      Number.isFinite(movie.rating) &&
      movie.rating >= 0 &&
      movie.rating <= 10
  );

  const totalRating = ratedMovies.reduce(
    (sum, movie) => sum + (movie.rating ?? 0),
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

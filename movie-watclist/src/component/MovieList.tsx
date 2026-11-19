import { ArrowRight } from 'lucide-react';
import type { Movie } from '../types';
import { MovieCard } from './MovieCard';

interface MovieListProps {
  title: string;
  movies: Movie[];
  selectedId: string;
  onViewAll?: () => void;
  onSelectMovie: (movie: Movie) => void;
}

export function MovieList({
  title,
  movies,
  selectedId,
  onViewAll,
  onSelectMovie,
}: MovieListProps) {
  return (
    <section className="mt-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h3>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition cursor-pointer"
          >
            View All <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {movies.length === 0 ? (
        <div className="bg-[#16182b] border border-white/[0.06] rounded-2xl p-8 text-center text-sm text-slate-400">
          No movies found in this section.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isSelected={movie.id === selectedId}
              onSelect={onSelectMovie}
            />
          ))}
        </div>
      )}
    </section>
  );
}
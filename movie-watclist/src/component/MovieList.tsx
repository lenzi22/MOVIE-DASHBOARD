
import { ArrowRight } from "lucide-react";
import type { Movie } from "../types/Movie";
import { MovieCard } from "./MovieCard";

interface MovieListProps {
  title: string;
  movies: Movie[];
  selectedId: number | null;
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
    <section className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Explore your movie collection
          </p>
        </div>

        {onViewAll && (
          <button
            onClick={onViewAll}
            className="flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
          >
            View All <ArrowRight size={16} />
          </button>
        )}
      </div>

      {movies.length === 0 ? (
        <div className="bg-[#17192d] border border-white/10 rounded-2xl p-12 text-center">
          <div className="text-4xl mb-3">🎬</div>
          <h4 className="text-white font-semibold">
            No movies found
          </h4>
          <p className="text-sm text-slate-400 mt-2">
            Add a movie or select another filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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

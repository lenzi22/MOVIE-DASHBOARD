
import { Star } from "lucide-react";
import type { Movie } from "../types/Movie";

interface MovieCardProps {
  movie: Movie;
  isSelected: boolean;
  onSelect: (movie: Movie) => void;
}

export function MovieCard({
  movie,
  isSelected,
  onSelect,
}: MovieCardProps) {
  return (
    <article
      onClick={() => onSelect(movie)}
      className={`group overflow-hidden rounded-2xl bg-[#17192d] border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 ${
        isSelected
          ? "border-indigo-500 ring-2 ring-indigo-500/30"
          : "border-white/10 hover:border-indigo-400/50"
      }`}
    >
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden bg-[#22243a]">
        {movie.poster ? (
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            No poster available
          </div>
        )}

        {/* Rating */}
        <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/75 px-3 py-1.5 text-xs font-bold text-amber-400 backdrop-blur">
          <Star size={13} fill="currentColor" />
          {movie.rating}
        </span>

        {/* Watch status */}
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1.5 text-[10px] font-semibold backdrop-blur ${
            movie.watched
              ? "bg-emerald-500/90 text-white"
              : "bg-black/75 text-slate-200"
          }`}
        >
          {movie.watched ? "✓ Watched" : "To Watch"}
        </span>
      </div>

      {/* Movie Information */}
      <div className="p-4">
        <h4 className="truncate text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
          {movie.title}
        </h4>

        <p className="mt-2 text-xs text-slate-400">
          {movie.year} <span className="mx-1">•</span> {movie.genre}
        </p>
      </div>
    </article>
  );
}

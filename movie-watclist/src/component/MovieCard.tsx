import { Star } from 'lucide-react';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  isSelected: boolean;
  onSelect: (movie: Movie) => void;
}

export function MovieCard({ movie, isSelected, onSelect }: MovieCardProps) {
  const isWatched = movie.status === 'watched';

  return (
    <div
      onClick={() => onSelect(movie)}
      className={`group relative rounded-2xl overflow-hidden bg-[#17192d] border transition-all duration-300 cursor-pointer aspect-[16/10] ${
        isSelected
          ? 'border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg shadow-indigo-500/10'
          : 'border-white/[0.07] hover:border-indigo-400/50'
      }`}
    >
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d18] via-[#0b0d18]/35 to-transparent" />

      {/* Top-left rating badge */}
      <span className="absolute top-3 left-3 flex items-center gap-1 bg-[#101222]/85 backdrop-blur-md text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/10">
        <Star className="w-3 h-3 fill-amber-400" />
        {movie.rating}
      </span>

      {/* Top-right status pill */}
      <span
        className={`absolute top-3 right-3 backdrop-blur-md text-[11px] font-medium px-3 py-1 rounded-full border capitalize ${
          isWatched
            ? 'bg-emerald-950/85 text-emerald-300 border-emerald-500/30'
            : 'bg-[#101222]/85 text-slate-200 border-white/15'
        }`}
      >
        {movie.status}
      </span>

      {/* Title, Year & Review Preview */}
      <div className="absolute bottom-3 left-3.5 right-3.5">
        <h4 className="font-semibold text-sm text-white truncate drop-shadow">
          {movie.title}
        </h4>
        <p className="text-[11px] text-slate-400">
          {movie.year} • {movie.genre}
        </p>
        <p className="text-[11px] text-slate-300/80 truncate mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          &ldquo;{movie.review}&rdquo;
        </p>
      </div>
    </div>
  );
}

import React from "react";
import "./StatsSummary.css";
import { calculateMovieStats } from "../utils/movieStats";
import type { Movie } from "../types/Movie";

interface StatsSummaryProps {
  movies: Movie[];
}

const StatsSummary: React.FC<StatsSummaryProps> = ({ movies }) => {
  const stats = calculateMovieStats(movies);

  return (
    <section className="stats-summary">
      <h2>Watchlist Summary</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Movies</span>
          <span className="stat-value">{stats.totalMovies}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Watched</span>
          <span className="stat-value">{stats.watchedMovies}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">To Watch</span>
          <span className="stat-value">{stats.toWatchMovies}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Average Rating</span>
          <span className="stat-value">{stats.averageRating} / 10</span>
        </div>
      </div>
    </section>
  );
};

export default StatsSummary;

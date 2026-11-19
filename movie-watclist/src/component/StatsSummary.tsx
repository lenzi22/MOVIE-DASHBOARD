import './StatsSummary.css';
import React from 'react';
import { calculateMovieStats,  type Movie } from '../utils/movieStats';
// 1. Define the props this component expects to receive from its parent (e.g., App.tsx)
interface StatsSummaryProps {
  movies: Movie[];
}

// 2. Create the functional React component using PascalCase
const StatsSummary: React.FC<StatsSummaryProps> = ({ movies }) => {
  // 3. Pass the movies prop into your utility function to get the calculated numbers
  const stats = calculateMovieStats(movies);

  // 4. Return the JSX (HTML-like UI) to display on screen
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
          <span className="stat-value">{stats.watchedCount}</span>
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

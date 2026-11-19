
import type { CSSProperties } from 'react';
import type { Movie } from '../types/Movie';
import { calculateMovieStats } from '../utils/movieStats';

interface StatsSummaryProps {
  movies: Movie[];
}

function StatsSummary({ movies }: StatsSummaryProps) {
  const stats = calculateMovieStats(movies);

  const statCards = [
    {
      title: 'Total Movies',
      value: stats.totalMovies,
      icon: '🎬',
      color: '#A78BFA',
      description: 'Movies in your collection',
    },
    {
      title: 'Watched',
      value: stats.watchedMovies,
      icon: '✓',
      color: '#22C55E',
      description: 'Movies you have watched',
    },
    {
      title: 'To Watch',
      value: stats.toWatchMovies,
      icon: '▣',
      color: '#F59E0B',
      description: 'Movies on your watchlist',
    },
    {
      title: 'Average Rating',
      value: stats.averageRating.toFixed(1),
      icon: '★',
      color: '#FBBF24',
      description: 'Average movie rating',
    },
  ];

  const containerStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
    gap: '20px',
    width: '100%',
  };

  const cardStyle: CSSProperties = {
    backgroundColor: '#1D1D2A',
    border: '1px solid #2B2B3A',
    borderRadius: '14px',
    padding: '22px',
    minHeight: '145px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '12px',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
  };

  return (
    <section className="stats-summary">
      <div style={{ marginBottom: '20px' }}>
        <h2
          style={{
            color: '#FFFFFF',
            fontSize: '21px',
            fontWeight: 700,
            margin: '0 0 6px',
          }}
        >
          Your Movie Statistics
        </h2>

        <p
          style={{
            color: '#A1A1AA',
            fontSize: '14px',
            margin: 0,
          }}
        >
          Here's an overview of your movie collection.
        </p>
      </div>

      <div style={containerStyle}>
        {statCards.map((card) => (
          <div
            key={card.title}
            style={cardStyle}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = 'translateY(-4px)';
              event.currentTarget.style.borderColor = card.color;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = 'translateY(0)';
              event.currentTarget.style.borderColor = '#2B2B3A';
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  color: '#A1A1AA',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {card.title}
              </span>

              <span
                style={{
                  color: card.color,
                  fontSize: '23px',
                  fontWeight: 700,
                }}
              >
                {card.icon}
              </span>
            </div>

            <div>
              <h3
                style={{
                  color: '#FFFFFF',
                  fontSize: '30px',
                  fontWeight: 700,
                  margin: '0 0 6px',
                }}
              >
                {card.value}
              </h3>

              <p
                style={{
                  color: '#777785',
                  fontSize: '12px',
                  margin: 0,
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSummary;

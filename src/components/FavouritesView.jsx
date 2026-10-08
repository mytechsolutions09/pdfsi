import React from 'react';
import { Star, ArrowUpRight, Layers } from 'lucide-react';

export default function FavouritesView({ favourites, tools, onSelectTool, onToggleFavourite }) {
  const favTools = tools.filter((t) => favourites.includes(t.id));

  return (
    <section>
      <div className="section-heading">
        <h2>Your favourite tools</h2>
        <span>{favTools.length} tools pinned</span>
      </div>

      {favTools.length === 0 ? (
        <div style={{ padding: '60px 20px', textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <Star size={40} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '6px' }}>No favourite tools yet</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Click the star icon next to any of the 70 tools to pin it here for instant one-click access.
          </p>
        </div>
      ) : (
        <div className="popular-grid">
          {favTools.map((tool) => (
            <div
              key={tool.id}
              className="popular-card"
              onClick={() => onSelectTool(tool)}
            >
              <div className="popular-icon">
                <Layers size={22} />
              </div>
              <div className="popular-content">
                <div className="popular-title-row">
                  <strong>{tool.title}</strong>
                </div>
                <p className="popular-desc">{tool.description}</p>
              </div>
              <button
                className="star-btn starred"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavourite(tool.id);
                }}
                title="Unstar tool"
              >
                <Star size={14} fill="currentColor" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

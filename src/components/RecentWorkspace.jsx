import React from 'react';
import { Clock3, Trash2, FileText, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function RecentWorkspace({ recentList, onClearRecent, onSelectToolById }) {
  return (
    <section>
      <div className="section-heading">
        <h2>Recent workspace</h2>
        {recentList.length > 0 && (
          <button 
            className="btn-secondary" 
            style={{ padding: '4px 10px', fontSize: '0.78rem' }}
            onClick={onClearRecent}
          >
            <Trash2 size={13} /> Clear history
          </button>
        )}
      </div>

      {recentList.length === 0 ? (
        <div style={{ padding: '60px 20px', textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
          <Clock3 size={40} style={{ color: 'var(--text-muted)', marginBottom: '12px' }} />
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '6px' }}>No recent workspace files</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Files and tasks you process in your browser will be listed here for quick access.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {recentList.map((item) => (
            <div 
              key={item.id} 
              className="popular-card" 
              style={{ padding: '14px 18px', alignItems: 'center' }}
              onClick={() => onSelectToolById(item.toolId)}
            >
              <div className="popular-icon" style={{ width: '36px', height: '36px' }}>
                <FileText size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ fontSize: '0.92rem', color: 'var(--text-heading)' }}>{item.fileName}</strong>
                <div style={{ display: 'flex', gap: '12px', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  <span>{item.toolTitle}</span>
                  <span>•</span>
                  <span>{item.size}</span>
                  <span>•</span>
                  <span>{item.timestamp}</span>
                </div>
              </div>
              <ArrowUpRight size={16} className="arrow-icon" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

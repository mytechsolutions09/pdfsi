import React, { useState } from 'react';
import { 
  Layers, 
  PenLine, 
  FileOutput, 
  ArrowLeftRight, 
  ShieldCheck, 
  Sparkles, 
  Receipt, 
  Share2, 
  ImageMinus, 
  ArrowUpRight, 
  Star, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/tools';

const CAT_ICONS = {
  all: Layers,
  pages: Layers,
  edit: PenLine,
  convert_to: FileOutput,
  convert_from: ArrowLeftRight,
  security: ShieldCheck,
  ai: Sparkles,
  business: Receipt,
  share: Share2,
  images: ImageMinus,
};

export default function ToolsDirectory({ 
  tools, 
  selectedCategory, 
  favourites, 
  onToggleFavourite, 
  onSelectTool 
}) {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleExpand = (catId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const categoriesToRender = TOOL_CATEGORIES.filter((c) => {
    if (c.id === 'all') return false;
    if (selectedCategory !== 'all' && selectedCategory !== c.id) return false;
    return true;
  });

  return (
    <section className="directory">
      <div className="section-heading">
        <h2>Your complete toolkit</h2>
        <span>70 free client-side tools</span>
      </div>

      <div className="directory-grid">
        {categoriesToRender.map((cat) => {
          const catTools = tools.filter((t) => t.category === cat.id);
          if (catTools.length === 0) return null;

          const Icon = CAT_ICONS[cat.id] || Layers;
          const isExpanded = !!expandedCategories[cat.id] || selectedCategory !== 'all';
          const displayedTools = isExpanded ? catTools : catTools.slice(0, 4);
          const hasMore = catTools.length > 4 && selectedCategory === 'all';

          return (
            <div key={cat.id} className="tool-group">
              <div className="tool-group-header">
                <Icon size={18} style={{ color: 'var(--brand-red)' }} />
                <h3>{cat.name}</h3>
                <span className="count-badge">{catTools.length}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {displayedTools.map((tool) => {
                  const isStarred = favourites.includes(tool.id);

                  return (
                    <div key={tool.id} className="tool-line">
                      <div 
                        className="tool-line-main" 
                        onClick={() => onSelectTool(tool)}
                      >
                        <div className="tool-info">
                          <strong>{tool.title}</strong>
                          <small>{tool.description}</small>
                        </div>
                        <ArrowUpRight size={14} style={{ opacity: 0.5, flexShrink: 0, marginLeft: '8px' }} />
                      </div>

                      <button
                        className={`star-btn ${isStarred ? 'starred' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavourite(tool.id);
                        }}
                        title={isStarred ? 'Remove from favourites' : 'Add to favourites'}
                        aria-label={`Star ${tool.title}`}
                      >
                        <Star size={13} fill={isStarred ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  );
                })}
              </div>

              {hasMore && (
                <button 
                  className="view-more-btn" 
                  onClick={() => toggleExpand(cat.id)}
                >
                  <span>{isExpanded ? 'Show less' : `View all ${catTools.length} tools`}</span>
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

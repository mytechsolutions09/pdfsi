import React from 'react';
import { 
  Layers, 
  PenLine, 
  ImageMinus, 
  Eraser, 
  FileText, 
  Scissors, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const ICON_MAP = {
  'upscale-image': Sparkles,
  'compress-pdf': Layers,
  'edit-pdf': PenLine,
  'sign-pdf': PenLine,
  'remove-background': ImageMinus,
  'remove-pdf-watermark': Eraser,
  'remove-image-watermark': ImageMinus,
  'merge-pdf': Layers,
  'pdf-to-word': FileText,
  'split-pdf': Scissors,
};

export default function PopularGrid({ tools, onSelectTool }) {
  const popularTools = tools.filter((t) => t.popular);

  return (
    <section className="popular">
      <div className="section-heading">
        <h2>Popular tools</h2>
        <span>Frequently used by thousands</span>
      </div>

      <div className="popular-grid">
        {popularTools.map((tool) => {
          const Icon = ICON_MAP[tool.id] || Layers;
          const isAttention = tool.id === 'compress-pdf' || tool.id === 'merge-pdf';

          return (
            <div
              key={tool.id}
              className={`popular-card ${isAttention ? 'attention-border' : ''}`}
              onClick={() => onSelectTool(tool)}
            >
              <div className="popular-icon">
                <Icon size={22} strokeWidth={1.75} />
              </div>

              <div className="popular-content">
                <div className="popular-title-row">
                  <strong>{tool.title}</strong>
                  {tool.badge && <span className="badge-tag">{tool.badge}</span>}
                </div>
                <p className="popular-desc">{tool.description}</p>
              </div>

              <ArrowUpRight size={17} className="arrow-icon" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

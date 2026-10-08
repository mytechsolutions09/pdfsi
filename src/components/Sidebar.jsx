import React from 'react';
import { 
  LayoutDashboard, 
  Clock3, 
  Star, 
  Layers, 
  PenLine, 
  FileOutput, 
  ArrowLeftRight, 
  ShieldCheck, 
  Sparkles, 
  Receipt, 
  Share2, 
  ImageMinus, 
  Search, 
  Lock 
} from 'lucide-react';
import { TOOL_CATEGORIES } from '../data/tools';

const CATEGORY_ICON_MAP = {
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

export default function Sidebar({ 
  currentView, 
  onSelectView, 
  selectedCategory, 
  onSelectCategory, 
  favouriteCount, 
  recentCount, 
  onOpenSearch, 
  onOpenPrivacy,
  isOpen,
  onCloseMobile
}) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <a 
          href="#" 
          className="brand" 
          onClick={(e) => { 
            e.preventDefault(); 
            onSelectView('dashboard'); 
            onSelectCategory('all');
            if (onCloseMobile) onCloseMobile();
          }}
          title="pdfsi — pdf - Super Intelligence"
        >
          <div className="brand-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
              <defs>
                <linearGradient id="pdfsi-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00ff87" />
                  <stop offset="0.6" stopColor="#10b981" />
                  <stop offset="1" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="sparkle-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#ffffff" />
                  <stop offset="1" stopColor="#a7f3d0" />
                </linearGradient>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <rect width="32" height="32" rx="9" fill="url(#pdfsi-grad)" />
              {/* Document contour in deep obsidian */}
              <path d="M8 7.5C8 6.67 8.67 6 9.5 6H18.5L23.5 11V24.5C23.5 25.33 22.83 26 22 26H9.5C8.67 26 8 25.33 8 24.5V7.5Z" fill="rgba(6, 28, 19, 0.7)" />
              {/* Corner fold */}
              <path d="M18.5 6V11H23.5" stroke="rgba(0, 255, 135, 0.7)" strokeWidth="1.2" strokeLinejoin="round" />
              {/* Super Intelligence AI Sparkle / Neural Core */}
              <path d="M15.5 10.5L16.8 14.2L20.5 15.5L16.8 16.8L15.5 20.5L14.2 16.8L10.5 15.5L14.2 14.2L15.5 10.5Z" fill="url(#sparkle-grad)" filter="url(#neon-glow)" />
              <circle cx="20" cy="11.5" r="1.3" fill="#ffffff" />
            </svg>
          </div>
          <div className="brand-text-wrap">
            <div className="brand-title">
              <strong>PDF<span className="brand-si">SI</span></strong>
              <span className="brand-dot">.</span>
            </div>
            <span className="brand-sub">PDF - SUPER INTELLIGENCE</span>
          </div>
        </a>
      </div>

      <button className="sidebar-search-btn" onClick={onOpenSearch}>
        <Search size={15} />
        <span>Find a tool</span>
        <kbd>Ctrl K</kbd>
      </button>

      <nav className="sidebar-nav">
        <button 
          className={`nav-link ${currentView === 'dashboard' && selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => {
            onSelectView('dashboard');
            onSelectCategory('all');
            if (onCloseMobile) onCloseMobile();
          }}
        >
          <LayoutDashboard size={16} />
          <span>Dashboard</span>
        </button>

        <button 
          className={`nav-link ${currentView === 'recent' ? 'active' : ''}`}
          onClick={() => {
            onSelectView('recent');
            if (onCloseMobile) onCloseMobile();
          }}
        >
          <Clock3 size={16} />
          <span>Recent workspace</span>
          {recentCount > 0 && <span className="badge-count">{recentCount}</span>}
        </button>

        <button 
          className={`nav-link ${currentView === 'favourites' ? 'active' : ''}`}
          onClick={() => {
            onSelectView('favourites');
            if (onCloseMobile) onCloseMobile();
          }}
        >
          <Star size={16} />
          <span>Favourites</span>
          {favouriteCount > 0 && <span className="badge-count">{favouriteCount}</span>}
        </button>

        <p className="nav-label">TOOLKIT</p>

        {TOOL_CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICON_MAP[cat.id] || Layers;
          const isCatActive = currentView === 'category' && selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              className={`nav-link ${isCatActive ? 'active' : ''}`}
              onClick={() => {
                onSelectView('category');
                onSelectCategory(cat.id);
                if (onCloseMobile) onCloseMobile();
              }}
            >
              <Icon size={16} />
              <span>{cat.name}</span>
              {cat.count && <span className="badge-count">{cat.count}</span>}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="privacy-pill-btn" onClick={onOpenPrivacy}>
          <ShieldCheck size={16} />
          <span>Privacy & local data</span>
        </button>
        <div className="privacy-tagline">
          <span className="pulse-dot"></span>
          <span>Your files. Your device. 100% local.</span>
        </div>
      </div>
    </aside>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Upload, 
  Sparkles, 
  ArrowUpRight, 
  Star, 
  FileText 
} from 'lucide-react';
import { ALL_TOOLS, TOOL_CATEGORIES } from './data/tools';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import CommandPalette from './components/CommandPalette';
import PrivacyModal from './components/PrivacyModal';
import AISettingsModal from './components/AISettingsModal';
import ToolStudio from './components/ToolStudio';
import WorkflowBuilder from './components/WorkflowBuilder';
import RecentWorkspace from './components/RecentWorkspace';
import FavouritesView from './components/FavouritesView';
import PopularGrid from './components/PopularGrid';
import ToolsDirectory from './components/ToolsDirectory';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pdfsi.theme') || localStorage.getItem('damnpdfs.theme') || 'dark';
  });

  // Views & Category navigation
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'recent' | 'favourites' | 'category' | 'workflow'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filterTab, setFilterTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Panels
  const [activeTool, setActiveTool] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAISettingsOpen, setIsAISettingsOpen] = useState(false);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Local Storage State: Favourites & Recent
  const [favourites, setFavourites] = useState(() => {
    try {
      const saved = localStorage.getItem('pdfsi.favourites') || localStorage.getItem('damnpdfs.favourites');
      return saved ? JSON.parse(saved) : ['compress-pdf', 'merge-pdf', 'sign-pdf', 'edit-pdf'];
    } catch {
      return ['compress-pdf', 'merge-pdf'];
    }
  });

  const [recentList, setRecentList] = useState(() => {
    try {
      const saved = localStorage.getItem('pdfsi.recent') || localStorage.getItem('damnpdfs.recent');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('pdfsi.theme', theme);
  }, [theme]);

  // Persist favourites
  useEffect(() => {
    localStorage.setItem('pdfsi.favourites', JSON.stringify(favourites));
  }, [favourites]);

  // Persist recent list
  useEffect(() => {
    localStorage.setItem('pdfsi.recent', JSON.stringify(recentList));
  }, [recentList]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleFavourite = (toolId) => {
    setFavourites((prev) =>
      prev.includes(toolId) ? prev.filter((id) => id !== toolId) : [...prev, toolId]
    );
  };

  const addRecent = (recentItem) => {
    setRecentList((prev) => [recentItem, ...prev.filter((r) => r.id !== recentItem.id)].slice(0, 30));
  };

  const clearRecent = () => {
    setRecentList([]);
  };

  const handleOpenTool = (tool) => {
    setActiveTool(tool);
    setIsMobileMenuOpen(false);
  };

  const handleOpenToolById = (toolId) => {
    const found = ALL_TOOLS.find((t) => t.id === toolId);
    if (found) setActiveTool(found);
  };

  // Quick "Open files" button on homepage
  const handleDirectFileUpload = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const first = files[0];
      if (files.length > 1) {
        // Multiple files -> open Merge PDF
        const mergeTool = ALL_TOOLS.find((t) => t.id === 'merge-pdf');
        setActiveTool(mergeTool);
      } else if (first.type.startsWith('image/')) {
        // Image -> open Remove Background or Images to PDF
        const imgTool = ALL_TOOLS.find((t) => t.id === 'remove-background');
        setActiveTool(imgTool);
      } else {
        // Default to Compress PDF
        const defaultTool = ALL_TOOLS.find((t) => t.id === 'compress-pdf');
        setActiveTool(defaultTool);
      }
    }
  };

  // Filtered tools based on search and tab
  const displayedTools = ALL_TOOLS.filter((tool) => {
    // Tab filter
    if (filterTab !== 'all') {
      if (filterTab === 'pages' && tool.category !== 'pages') return false;
      if (filterTab === 'edit' && tool.category !== 'edit') return false;
      if (filterTab === 'convert' && !['convert_to', 'convert_from'].includes(tool.category)) return false;
      if (filterTab === 'ai' && tool.category !== 'ai') return false;
      if (filterTab === 'images' && tool.category !== 'images') return false;
      if (filterTab === 'security' && tool.category !== 'security') return false;
      if (filterTab === 'business' && tool.category !== 'business') return false;
    }

    // Category filter from sidebar
    if (currentView === 'category' && selectedCategory !== 'all') {
      if (tool.category !== selectedCategory) return false;
    }

    // Text search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = tool.title.toLowerCase().includes(q);
      const matchDesc = tool.description.toLowerCase().includes(q);
      const matchTags = tool.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTags;
    }

    return true;
  });

  const selectedCategoryObj = TOOL_CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <Sidebar
        currentView={currentView}
        onSelectView={(v) => {
          setCurrentView(v);
          setSearchQuery('');
        }}
        selectedCategory={selectedCategory}
        onSelectCategory={(c) => {
          setSelectedCategory(c);
          setSearchQuery('');
        }}
        favouriteCount={favourites.length}
        recentCount={recentList.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        isOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Body */}
      <div className="main-content">
        <Topbar
          currentView={currentView}
          activeTool={activeTool}
          selectedCategoryName={selectedCategoryObj?.name}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onOpenAISettings={() => setIsAISettingsOpen(true)}
          onOpenWorkflow={() => setIsWorkflowOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="page-container">
          {/* VIEW: Recent Workspace */}
          {currentView === 'recent' && (
            <RecentWorkspace
              recentList={recentList}
              onClearRecent={clearRecent}
              onSelectToolById={handleOpenToolById}
            />
          )}

          {/* VIEW: Favourites */}
          {currentView === 'favourites' && (
            <FavouritesView
              favourites={favourites}
              tools={ALL_TOOLS}
              onSelectTool={handleOpenTool}
              onToggleFavourite={toggleFavourite}
            />
          )}

          {/* VIEW: Dashboard / Category Directory */}
          {(currentView === 'dashboard' || currentView === 'category') && (
            <>
              {/* Hero Banner */}
              {currentView === 'dashboard' && (
                <div className="hero">
                  <div className="hero-badge">
                    <Sparkles size={14} className="hero-badge-sparkle" />
                    <span><strong>PDFSI</strong> — PDF - SUPER INTELLIGENCE</span>
                    <span className="hero-badge-tag">70 Local AI Tools</span>
                  </div>
                  <h1>Free online tools<br />for PDFs & files.</h1>
                  <p>
                    Edit, sign, merge and convert your files with local super-intelligence. <strong>No watermarks. No account needed. 100% private.</strong>
                  </p>
                </div>
              )}

              {/* Fast Search & Open Files Dropzone */}
              <div className="search-row">
                <div className="search-box">
                  <Search size={18} />
                  <input
                    type="text"
                    placeholder="Find a tool (or press Ctrl K)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <kbd>Ctrl K</kbd>
                </div>

                <label className="open-files-btn">
                  <Upload size={16} />
                  <span>Open files</span>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,image/*,.docx,.xlsx,.csv,text/*"
                    onChange={handleDirectFileUpload}
                  />
                </label>
              </div>

              {/* Filter Tabs */}
              <div className="filter-tabs">
                {[
                  { id: 'all', label: 'All tools' },
                  { id: 'pages', label: 'Pages' },
                  { id: 'edit', label: 'Edit' },
                  { id: 'convert', label: 'Convert' },
                  { id: 'ai', label: 'AI & Analysis' },
                  { id: 'images', label: 'Images' },
                  { id: 'security', label: 'Security' },
                  { id: 'business', label: 'Business' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`filter-pill ${filterTab === tab.id ? 'active' : ''}`}
                    onClick={() => {
                      setFilterTab(tab.id);
                      if (currentView === 'category') setCurrentView('dashboard');
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Popular Tools Grid (Shown on Dashboard when not searching) */}
              {currentView === 'dashboard' && !searchQuery && filterTab === 'all' && (
                <PopularGrid tools={ALL_TOOLS} onSelectTool={handleOpenTool} />
              )}

              {/* Complete Toolkit Directory */}
              <ToolsDirectory
                tools={displayedTools}
                selectedCategory={currentView === 'category' ? selectedCategory : 'all'}
                favourites={favourites}
                onToggleFavourite={toggleFavourite}
                onSelectTool={handleOpenTool}
              />
            </>
          )}
        </main>
      </div>

      {/* MODALS */}
      {/* 1. Command Palette Ctrl+K */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTool={handleOpenTool}
      />

      {/* 2. Privacy & Local Data Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* 3. AI Settings Modal */}
      <AISettingsModal
        isOpen={isAISettingsOpen}
        onClose={() => setIsAISettingsOpen(false)}
      />

      {/* 4. Workflow Builder Modal */}
      <WorkflowBuilder
        isOpen={isWorkflowOpen}
        onClose={() => setIsWorkflowOpen(false)}
      />

      {/* 5. Tool Studio Workspace */}
      {activeTool && (
        <ToolStudio
          tool={activeTool}
          onClose={() => setActiveTool(null)}
          onSaveRecent={addRecent}
        />
      )}
    </div>
  );
}

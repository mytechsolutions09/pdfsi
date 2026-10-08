import React from 'react';
import { Menu, Sparkles, Workflow, Sun, Moon } from 'lucide-react';

export default function Topbar({ 
  currentView, 
  activeTool, 
  selectedCategoryName, 
  onToggleMobileMenu, 
  onOpenAISettings, 
  onOpenWorkflow, 
  theme, 
  onToggleTheme 
}) {
  let breadcrumbTitle = 'Dashboard';
  if (activeTool) {
    breadcrumbTitle = activeTool.title;
  } else if (currentView === 'recent') {
    breadcrumbTitle = 'Recent workspace';
  } else if (currentView === 'favourites') {
    breadcrumbTitle = 'Favourites';
  } else if (currentView === 'category') {
    breadcrumbTitle = selectedCategoryName || 'Toolkit';
  } else if (currentView === 'workflow') {
    breadcrumbTitle = 'Workflow Builder';
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button 
          className="mobile-toggle icon-btn" 
          onClick={onToggleMobileMenu} 
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>
        <div className="breadcrumb">
          <span>Workspace</span>
          <span>/</span>
          <strong>{breadcrumbTitle}</strong>
        </div>
      </div>

      <div className="topbar-right">
        <button 
          className="btn-action-quiet" 
          onClick={onOpenWorkflow}
          title="Chain PDF tools into a custom automated batch workflow"
        >
          <Workflow size={15} />
          <span>Workflow Builder</span>
        </button>

        <button 
          className="btn-action-quiet" 
          onClick={onOpenAISettings}
          title="Configure AI model and API keys"
        >
          <Sparkles size={15} />
          <span>AI settings</span>
        </button>

        <button 
          className="icon-btn" 
          onClick={onToggleTheme} 
          aria-label="Toggle theme"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </header>
  );
}

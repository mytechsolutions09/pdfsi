import React, { useState, useEffect } from 'react';
import { Sparkles, Key, Check, X, ShieldAlert } from 'lucide-react';
import { getAISettings, saveAISettings } from '../services/aiEngine';

export default function AISettingsModal({ isOpen, onClose }) {
  const [settings, setSettings] = useState({
    provider: 'local',
    apiKey: '',
    model: 'gemini-1.5-flash',
  });
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSettings(getAISettings());
      setSavedStatus(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    saveAISettings(settings);
    setSavedStatus(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  return (
    <div className="studio-overlay" onClick={onClose}>
      <div className="studio-container" style={{ maxWidth: '540px' }} onClick={(e) => e.stopPropagation()}>
        <div className="studio-header">
          <div className="studio-title">
            <div className="studio-title-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--accent-purple)' }}>
              <Sparkles size={20} />
            </div>
            <div>
              <h2>AI Intelligence Settings</h2>
              <p>Configure local heuristics or Bring-Your-Own-Key (BYOK)</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} style={{ border: 'none', background: 'transparent' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSave} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div className="control-group">
            <label>AI Mode & Engine</label>
            <select
              className="control-input"
              value={settings.provider}
              onChange={(e) => setSettings({ ...settings, provider: e.target.value })}
            >
              <option value="local">Local Extractive NLP (100% Offline, No API key needed)</option>
              <option value="gemini">Google Gemini 1.5 Flash (BYOK)</option>
              <option value="openai">OpenAI GPT-4o-mini (BYOK)</option>
              <option value="groq">Groq Llama 3.3 (Fastest BYOK)</option>
            </select>
            <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '4px' }}>
              By default, DamnPDFs uses built-in extractive semantic analysis running directly in your browser.
            </small>
          </div>

          {settings.provider !== 'local' && (
            <>
              <div className="control-group">
                <label>API Key</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="password"
                    className="control-input"
                    style={{ width: '100%', paddingLeft: '32px' }}
                    placeholder={settings.provider === 'gemini' ? 'AIzaSy...' : 'sk-...'}
                    value={settings.apiKey}
                    onChange={(e) => setSettings({ ...settings, apiKey: e.target.value })}
                  />
                  <Key size={14} style={{ position: 'absolute', left: '10px', top: '11px', color: 'var(--text-muted)' }} />
                </div>
                <small style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginTop: '4px' }}>
                  Your key is stored strictly in browser local storage and never transmitted to our servers.
                </small>
              </div>

              <div className="control-group">
                <label>Model Name</label>
                <input
                  type="text"
                  className="control-input"
                  value={settings.model}
                  onChange={(e) => setSettings({ ...settings, model: e.target.value })}
                  placeholder="e.g. gemini-1.5-flash"
                />
              </div>
            </>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
            <ShieldAlert size={16} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              All chats and summaries run in privacy-first sandboxed mode.
            </span>
          </div>

          <div className="studio-footer" style={{ margin: '8px -24px -24px', padding: '16px 24px' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {savedStatus ? <Check size={16} /> : null}
              {savedStatus ? 'Saved!' : 'Save preferences'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

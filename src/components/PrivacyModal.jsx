import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Cpu, DatabaseZap, X } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="studio-overlay" onClick={onClose}>
      <div className="studio-container" style={{ maxWidth: '580px' }} onClick={(e) => e.stopPropagation()}>
        <div className="studio-header">
          <div className="studio-title">
            <div className="studio-title-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--accent-green)' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2>Privacy & Local Device Processing</h2>
              <p>Your documents never leave your browser</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} style={{ border: 'none', background: 'transparent' }}>
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '14px' }}>
            <Cpu size={24} style={{ color: 'var(--brand-red)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>100% Client-Side Engine</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                All PDF transformations, compression, image background cutouts, and signing take place strictly inside your browser memory via WebAssembly and JavaScript. Zero files are uploaded to any server.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <Lock size={24} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>No Accounts, No Tracking, No Watermarks</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                No sign-up or credit card required. We do not store, view, or log your personal financial documents, IDs, or contracts.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <DatabaseZap size={24} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>Local Storage Only</strong>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                Your favourites and recent workspace history are kept solely inside your browser's local sandbox (`localStorage`). You can clear them at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="studio-footer" style={{ justifyContent: 'flex-end' }}>
          <button className="btn-primary" onClick={onClose}>
            Got it, continue
          </button>
        </div>
      </div>
    </div>
  );
}

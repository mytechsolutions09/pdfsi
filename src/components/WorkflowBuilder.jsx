import React, { useState } from 'react';
import { Workflow, Plus, Trash2, ArrowRight, Play, CheckCircle2, Download, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { mergePDFs, compressPDF, addWatermarkPDF, downloadBlob } from '../services/pdfEngine';

export default function WorkflowBuilder({ isOpen, onClose }) {
  const [pipeline, setPipeline] = useState([
    { id: '1', action: 'merge', title: '1. Merge Files into Single Document' },
    { id: '2', action: 'compress', title: '2. Optimize & Compress Stream' },
    { id: '3', action: 'watermark', title: '3. Stamp Watermark (Confidential)' }
  ]);
  const [workflowFiles, setWorkflowFiles] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [workflowResult, setWorkflowResult] = useState(null);

  if (!isOpen) return null;

  const handleAddStep = (action, title) => {
    setPipeline((prev) => [
      ...prev,
      { id: String(Date.now()), action, title: `${prev.length + 1}. ${title}` }
    ]);
  };

  const handleRemoveStep = (id) => {
    setPipeline((prev) => prev.filter((p) => p.id !== id));
  };

  const runWorkflow = async () => {
    if (workflowFiles.length === 0) {
      alert('Please upload files to execute the workflow pipeline.');
      return;
    }

    setIsExecuting(true);
    setWorkflowResult(null);

    try {
      let currentBlob = null;

      for (const step of pipeline) {
        if (step.action === 'merge') {
          currentBlob = await mergePDFs(workflowFiles);
        } else if (step.action === 'compress') {
          const fileToCompress = currentBlob 
            ? new File([currentBlob], 'temp.pdf', { type: 'application/pdf' })
            : workflowFiles[0];
          currentBlob = await compressPDF(fileToCompress);
        } else if (step.action === 'watermark') {
          const fileToWatermark = currentBlob
            ? new File([currentBlob], 'temp.pdf', { type: 'application/pdf' })
            : workflowFiles[0];
          currentBlob = await addWatermarkPDF(fileToWatermark, { text: 'WORKFLOW VERIFIED' });
        }
      }

      setWorkflowResult(currentBlob);
      confetti({ particleCount: 70, spread: 60 });
    } catch (err) {
      alert('Workflow execution error: ' + err.message);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="studio-overlay" onClick={onClose}>
      <div className="studio-container" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <div className="studio-header">
          <div className="studio-title">
            <div className="studio-title-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent-blue)' }}>
              <Workflow size={20} />
            </div>
            <div>
              <h2>Visual Workflow Pipeline Builder</h2>
              <p>Chain multiple tools together into an automated batch sequence</p>
            </div>
          </div>
          <button className="icon-btn" onClick={onClose} style={{ border: 'none', background: 'transparent' }}>
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Configured Pipeline Steps
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              {pipeline.map((step, idx) => (
                <div 
                  key={step.id} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '12px 16px', 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-subtle)', 
                    borderRadius: 'var(--radius-md)' 
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--brand-red)', color: '#fff', fontSize: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                      {idx + 1}
                    </span>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-heading)' }}>{step.title}</strong>
                  </div>
                  <button 
                    className="icon-btn" 
                    onClick={() => handleRemoveStep(step.id)}
                    style={{ border: 'none', background: 'transparent' }}
                  >
                    <Trash2 size={15} style={{ color: 'var(--text-muted)' }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => handleAddStep('compress', 'Compress & Shrink Size')}>
              <Plus size={14} /> Add Compress Step
            </button>
            <button className="btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => handleAddStep('watermark', 'Apply Legal Watermark')}>
              <Plus size={14} /> Add Watermark Step
            </button>
          </div>

          {/* Workflow dropzone */}
          <div style={{ border: '1px dashed var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '20px', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}>
            <label className="btn-primary" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span>Upload PDF Files for Workflow</span>
              <input 
                type="file" 
                multiple 
                accept=".pdf" 
                style={{ display: 'none' }} 
                onChange={(e) => setWorkflowFiles(Array.from(e.target.files || []))}
              />
            </label>
            {workflowFiles.length > 0 && (
              <p style={{ marginTop: '10px', fontSize: '0.82rem', color: 'var(--accent-green)' }}>
                {workflowFiles.length} file(s) selected: {workflowFiles.map((f) => f.name).join(', ')}
              </p>
            )}
          </div>
        </div>

        <div className="studio-footer">
          <button className="btn-secondary" onClick={onClose}>
            Close
          </button>
          {workflowResult ? (
            <button 
              className="btn-primary" 
              style={{ background: 'var(--accent-green)' }}
              onClick={() => downloadBlob(workflowResult, `workflow-output-${Date.now()}.pdf`)}
            >
              <Download size={16} />
              <span>Download Pipeline Output</span>
            </button>
          ) : (
            <button className="btn-primary" onClick={runWorkflow} disabled={isExecuting}>
              <Play size={16} />
              <span>{isExecuting ? 'Running Pipeline...' : 'Execute Entire Workflow'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

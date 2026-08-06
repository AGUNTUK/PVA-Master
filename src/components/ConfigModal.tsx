import React, { useState } from 'react';
import { AppConfig } from '../types';
import { Code, Copy, Check, Save, RefreshCw, X, FileJson, Info } from 'lucide-react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
  onUpdateConfig: (newConfig: AppConfig) => void;
  onResetDefault: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  onResetDefault,
}) => {
  const [jsonText, setJsonText] = useState<string>(JSON.stringify(config, null, 2));
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (!parsed.whatsappNumber || !parsed.defaultMessage) {
        setErrorMsg('Error: "whatsappNumber" and "defaultMessage" are required fields in config.json!');
        return;
      }
      setErrorMsg(null);
      onUpdateConfig(parsed);
      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
      }, 1000);
    } catch (err: any) {
      setErrorMsg(`JSON Syntax Error: ${err.message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <FileJson className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Dynamic config.json Editor</h3>
              <p className="text-xs text-slate-400">Test live dynamic link bindings across the page</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Modifying the values below live-updates all WhatsApp, Telegram, and Email links on this page instantly without touching HTML/JS code!
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
              <span>config.json (Live React State / Local Storage)</span>
              <span>JSON Format</span>
            </div>
            <textarea
              value={jsonText}
              onChange={(e) => {
                setJsonText(e.target.value);
                setErrorMsg(null);
              }}
              rows={12}
              className="w-full font-mono text-xs sm:text-sm p-4 rounded-xl bg-slate-950 border border-slate-800 text-emerald-300 focus:outline-none focus:border-emerald-500 transition-colors leading-relaxed"
            />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 font-mono">
              {errorMsg}
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-slate-950 border-t border-slate-800">
          <button
            onClick={onResetDefault}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy JSON'}</span>
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-md shadow-emerald-500/20"
            >
              {savedSuccess ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess ? 'Updated Live!' : 'Apply Changes'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

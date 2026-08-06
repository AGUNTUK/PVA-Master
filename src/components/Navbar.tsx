import React, { useState } from 'react';
import { AppConfig } from '../types';
import { MessageSquare, RefreshCw, Bookmark, Sparkles, Check, Code } from 'lucide-react';

interface NavbarProps {
  config: AppConfig;
  whatsappUrl: string;
  onOpenConfigEditor: () => void;
  onBookmark: () => void;
  isBookmarked: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  whatsappUrl,
  onOpenConfigEditor,
  onBookmark,
  isBookmarked,
}) => {
  const [copiedNumber, setCopiedNumber] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(`+${config.whatsappNumber}`);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0b0f17]/85 border-b border-emerald-950/60 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-slate-950 font-extrabold shadow-md shadow-emerald-500/20 group">
            <MessageSquare className="w-6 h-6 fill-current text-slate-950 transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight">
                {config.businessName || 'PVA Master Services'}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                Official
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Online & Ready</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Response: {config.responseRate || '< 2 mins'}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onBookmark}
            title="Bookmark Page"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 text-xs font-medium transition-all"
          >
            {isBookmarked ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Bookmark className="w-3.5 h-3.5 text-emerald-400" />
            )}
            <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>

          <button
            onClick={handleCopyNumber}
            title="Copy WhatsApp Number"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 text-xs font-medium transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-emerald-400 ${copiedNumber ? 'animate-spin' : ''}`} />
            <span>{copiedNumber ? 'Copied Number!' : `+${config.whatsappNumber}`}</span>
          </button>

          <button
            onClick={onOpenConfigEditor}
            title="View & Test config.json"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-700/60 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/50 text-xs font-medium transition-all"
          >
            <Code className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xs:inline">config.json</span>
          </button>

          {/* Primary Navbar CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

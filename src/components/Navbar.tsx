import React, { useState } from 'react';
import { AppConfig } from '../types';
import { MessageSquare, RefreshCw, Bookmark, Check } from 'lucide-react';

interface NavbarProps {
  config: AppConfig;
  whatsappUrl: string;
  onBookmark: () => void;
  isBookmarked: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  whatsappUrl,
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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0b0f17]/90 border-b border-emerald-950/60 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 text-slate-950 font-extrabold shadow-md shadow-emerald-500/20 group shrink-0">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-slate-950 transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-sm sm:text-lg text-white tracking-tight line-clamp-1">
                {config.businessName || 'PVA Master Services'}
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 shrink-0">
                Official
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Online & Ready</span>
              <span className="hidden xs:inline text-slate-600">•</span>
              <span className="hidden xs:inline text-slate-400">Response: {config.responseRate || '< 2 mins'}</span>
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

          {/* Primary Navbar CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-950" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { Bookmark, Pin, Copy, Check, Info, Sparkles } from 'lucide-react';

interface NoticeCardProps {
  customNotice?: string;
  onBookmark: () => void;
  isBookmarked: boolean;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({
  customNotice,
  onBookmark,
  isBookmarked,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const defaultText =
    "📌 Bookmark (Ctrl + D) this page link! If our WhatsApp contact changes, you will always find our latest running WhatsApp here.";
  const noticeText = customNotice || defaultText;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
  const shortcutText = isMac ? 'Cmd + D' : 'Ctrl + D';

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="relative rounded-2xl bg-gradient-to-r from-amber-950/40 via-emerald-950/40 to-slate-900 border border-amber-500/30 p-6 sm:p-7 shadow-xl shadow-black/40 overflow-hidden group">
        
        {/* Subtle Ambient Accent Light */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          
          {/* Left Icon & Text */}
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 shadow-inner">
              <Pin className="w-6 h-6 text-amber-400 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-500/30 px-2.5 py-0.5 rounded-md">
                  Important Buyer Security Notice
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Info className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Single Source of Truth</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-100 font-semibold leading-relaxed">
                {noticeText}
              </p>
            </div>
          </div>

          {/* Right Interactive Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto shrink-0 border-t md:border-t-0 border-slate-800 pt-4 md:pt-0">
            <button
              onClick={onBookmark}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm transition-all"
            >
              {isBookmarked ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Bookmarked ({shortcutText})</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4 text-amber-400" />
                  <span>Bookmark ({shortcutText})</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyLink}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-all"
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Page Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Page URL</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

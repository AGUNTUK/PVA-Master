import React from 'react';
import { AppConfig } from '../types';
import { MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  config: AppConfig;
  whatsappUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ config, whatsappUrl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#070a10] border-t border-slate-800/80 pt-12 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-bold text-white text-base">
                {config.businessName || 'PVA Master Services'}
              </span>
              <p className="text-xs text-slate-400">
                Verified Phone Accounts & High Quality Digital Solutions
              </p>
            </div>
          </div>

          {/* Real-time Status Indicator */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Status: Online & Ready</span>
          </div>

          {/* Quick Footer Links */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`https://t.me/${config.telegramUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              Telegram
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`mailto:${config.supportEmail}`}
              className="hover:text-emerald-400 transition-colors"
            >
              Email Support
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-400">
          <p>© {currentYear} {config.businessName || 'PVA Master Services'}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Genuine Phone Verified Accounts</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { AppConfig } from '../types';
import { Send, Mail, Copy, Check, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';

interface BackupChannelsProps {
  config: AppConfig;
}

export const BackupChannels: React.FC<BackupChannelsProps> = ({ config }) => {
  const [copiedTg, setCopiedTg] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const telegramUrl = `https://t.me/${config.telegramUsername}`;
  const mailUrl = `mailto:${config.supportEmail}`;

  const handleCopyTg = () => {
    navigator.clipboard.writeText(`@${config.telegramUsername}`);
    setCopiedTg(true);
    setTimeout(() => setCopiedTg(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(config.supportEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-3 border border-slate-700">
          <ShieldAlert className="w-3.5 h-3.5 text-sky-400" />
          <span>Always Stay Connected</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          Secondary & Backup Contact Channels
        </h2>
        <p className="text-slate-400 text-sm">
          In case WhatsApp is temporarily slow or under maintenance, reach us via Telegram or Email.
        </p>
      </div>

      {/* Grid of 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Telegram Card */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-sky-500/30 p-6 sm:p-7 hover:border-sky-400/60 transition-all shadow-lg flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Telegram Official</h3>
                  <p className="text-xs text-sky-400 font-mono">@{config.telegramUsername}</p>
                </div>
              </div>

              <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-sky-950 text-sky-300 border border-sky-500/30">
                Instant Chat
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Connect directly with our primary Telegram support handle for automated PVA catalog dumps, TData file transfers, and bulk sales queries.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-sky-500/20"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>Open Telegram Chat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyTg}
              title="Copy Telegram Username"
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
            >
              {copiedTg ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        </div>

        {/* Support Email Card */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-emerald-500/30 p-6 sm:p-7 hover:border-emerald-400/60 transition-all shadow-lg flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Email Desk</h3>
                  <p className="text-xs text-emerald-400 font-mono">{config.supportEmail}</p>
                </div>
              </div>

              <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                24h Response
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Ideal for corporate invoicing, high-volume contract orders, custom API integration requests, or formal warranty claims.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
            <a
              href={mailUrl}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Send Support Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyEmail}
              title="Copy Support Email"
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

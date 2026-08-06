import React from 'react';
import { AppConfig } from '../types';
import { MessageSquare, ShieldCheck, Zap, Clock, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  config: AppConfig;
  whatsappUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config, whatsappUrl }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Radial Gradient Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-inner shadow-emerald-950/50 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Official Verified Channel</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">24/7 PVA Dispatch Ready</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Connect with Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">
            Official WhatsApp
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Always active for verified PVA accounts & instant support.
        </p>

        {/* Prominent Animated WhatsApp CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-lg font-extrabold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 rounded-2xl shadow-[0_0_40px_rgba(37,211,102,0.35)] hover:shadow-[0_0_60px_rgba(37,211,102,0.55)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 overflow-hidden"
          >
            {/* Shimmer effect overlay */}
            <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
            
            <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/15">
              <MessageSquare className="w-5 h-5 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" />
            </span>
            <span className="relative tracking-wide">🟢 Chat on WhatsApp Now</span>
            <ExternalLink className="relative w-5 h-5 text-slate-950 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Key Quick Benefits Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300 text-xs sm:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Real SIM PVA</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300 text-xs sm:text-sm font-medium">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Instant Dispatch</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Replacement Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 text-slate-300 text-xs sm:text-sm font-medium">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>24/7 Global Response</span>
          </div>
        </div>

      </div>
    </section>
  );
};

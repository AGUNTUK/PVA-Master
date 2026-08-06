import React from 'react';
import { Zap, ShieldCheck, RefreshCw, Headset, CheckCircle2 } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      id: 'instant',
      title: 'Instant Delivery',
      icon: Zap,
      badge: 'Lightning Speed',
      description: 'Get your PVA credentials immediately upon payment verification via automated dispatch or direct WhatsApp agent.',
      highlights: ['Under 5-minute dispatch', 'Txt, CSV or JSON format', 'Bulk orders handled fast']
    },
    {
      id: 'verified',
      title: '100% Verified Accounts',
      icon: ShieldCheck,
      badge: 'Genuine Numbers',
      description: 'Created using genuine non-VoIP SIM numbers and residential clean proxies for maximum longevity and zero ban rate.',
      highlights: ['Real physical SIMs', 'Unique IP creation', 'Recovery email included']
    },
    {
      id: 'guarantee',
      title: 'Replacement Guarantee',
      icon: RefreshCw,
      badge: 'Risk-Free',
      description: 'Enjoy a strict 24 to 72-hour login guarantee. If any account fails on first access, we replace it instantly with no hassle.',
      highlights: ['24h - 72h warranty', '1-click replacement', 'Tested before delivery']
    },
    {
      id: 'support',
      title: '24/7 Global Support',
      icon: Headset,
      badge: 'Always Online',
      description: 'Direct human support available round-the-clock on WhatsApp and Telegram for custom orders, issues, or advice.',
      highlights: ['Dedicated account rep', 'Custom volume rates', 'Multi-language support']
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
          Why Top Buyers Trust Our PVA Services
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Built for marketers, agencies, developers, and businesses requiring reliable, long-lasting phone-verified accounts.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className="relative group rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-950/30 flex flex-col justify-between"
            >
              {/* Top Card Section */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-emerald-400 border border-emerald-500/20">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-slate-800/80">
                <ul className="space-y-2">
                  {feature.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

import React, { useState } from 'react';
import { PlatformItem, AppConfig } from '../types';
import { Mail, MessageSquare, PhoneCall, MailCheck, Share2, Camera, ShoppingBag, ArrowRight, MessageCircle } from 'lucide-react';

interface PvaCatalogProps {
  config: AppConfig;
  onSelectPlatform: (platformName: string) => void;
}

export const PvaCatalog: React.FC<PvaCatalogProps> = ({ config, onSelectPlatform }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    Mail: Mail,
    MessageSquare: MessageSquare,
    PhoneCall: PhoneCall,
    MailCheck: MailCheck,
    Share2: Share2,
    Camera: Camera,
  };

  const platforms = config.platforms || [];

  const getWhatsappOrderUrl = (platformName: string) => {
    const text = `Hi, I want to order ${platformName} PVA accounts. Please share current stock & bulk price list.`;
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Available In Stock Now</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Popular PVA Account Platforms
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            All accounts are 100% verified, clean IP created, and covered by warranty.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          <span className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold">
            Live Dispatch
          </span>
          <span className="px-2 text-slate-300">Updated Daily</span>
        </div>
      </div>

      {/* Platform Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((platform) => {
          const IconComp = iconMap[platform.icon] || Mail;
          const orderUrl = getWhatsappOrderUrl(platform.name);

          return (
            <div
              key={platform.id}
              className="group rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-emerald-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-xs text-emerald-400 font-semibold">{platform.startingPrice}</p>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    {platform.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-slate-800/80">
                <a
                  href={orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Order on WhatsApp</span>
                </a>

                <button
                  onClick={() => onSelectPlatform(platform.name)}
                  title="Customize order quantity"
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-all"
                >
                  Calc
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { AppConfig } from '../types';
import { Calculator, MessageSquare, ExternalLink, Sparkles, Check, Send } from 'lucide-react';

interface OrderCustomizerProps {
  config: AppConfig;
  preselectedPlatform?: string;
}

export const OrderCustomizer: React.FC<OrderCustomizerProps> = ({
  config,
  preselectedPlatform,
}) => {
  const [platform, setPlatform] = useState<string>('Gmail / Google PVA');
  const [quantity, setQuantity] = useState<number>(20);
  const [accountType, setAccountType] = useState<string>('Fresh 2026 PVA');
  const [customNote, setCustomNote] = useState<string>('');

  useEffect(() => {
    if (preselectedPlatform) {
      setPlatform(preselectedPlatform);
    }
  }, [preselectedPlatform]);

  const platformOptions = [
    'Gmail / Google PVA',
    'Telegram PVA',
    'WhatsApp PVA',
    'Outlook / Hotmail PVA',
    'X / Twitter PVA',
    'Instagram / FB PVA',
    'Voice / Custom Country PVA'
  ];

  // Dynamic message construction
  const generatedMessage = `Hi! I want to order ${quantity} units of ${platform} (${accountType}).${
    customNote ? ` Note: ${customNote}.` : ''
  } Please send available stock and payment options.`;

  const customWhatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    generatedMessage
  )}`;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-8">
      <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl shadow-emerald-950/20 backdrop-blur-md relative overflow-hidden">
        
        {/* Glow Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Quick Order WhatsApp Link Generator</span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                Instant
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Customize your inquiry to get an instant tailored message directly sent to our WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Select Platform */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Select PVA Platform
            </label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            >
              {platformOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Select Account Type */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Account Variety
            </label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option value="Fresh 2026 PVA">Fresh Verified PVA</option>
              <option value="Aged 1-Year+ PVA">Aged 1-Year+ PVA</option>
              <option value="High Quality Residential IP">High Quality Residential IP</option>
              <option value="Recovery Email Included">Recovery Email Included</option>
              <option value="Bulk Pack (50+) Discount">Bulk Pack (50+) Discount</option>
            </select>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Quantity Needed (Accounts)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={5}
                max={5000}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <div className="flex gap-1.5 shrink-0">
                {[10, 50, 100].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuantity(num)}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                      quantity === num
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Note */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Custom Requirements (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. US numbers, TData format, or specific country"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>

        </div>

        {/* Message Preview Box */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-semibold text-slate-300">Generated WhatsApp Message Preview:</span>
            <span className="text-emerald-400 font-mono text-[11px]">+{config.whatsappNumber}</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-300/90 font-mono leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
            "{generatedMessage}"
          </p>
        </div>

        {/* Submit Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            ⚡ Direct link will launch WhatsApp app or WhatsApp web immediately.
          </div>

          <a
            href={customWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4 fill-slate-950" />
            <span>Send Custom Order on WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

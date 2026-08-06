import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How fast will I receive my PVA accounts after payment?',
      a: 'Dispatch is immediate. As soon as you confirm payment on our WhatsApp or Telegram channel, our automated dispatch queue delivers your credentials within 2 to 5 minutes in your preferred format (TXT, CSV, JSON, or TData).'
    },
    {
      q: 'What is the replacement guarantee policy?',
      a: 'We offer a strict 24-hour to 72-hour replacement warranty depending on account type. If any delivered account fails during initial login due to phone verification issues, send us the log file on WhatsApp and we will replace it free of charge.'
    },
    {
      q: 'How do I ensure this website is your official WhatsApp contact?',
      a: 'This domain/landing page is our official verified web portal. Please bookmark this URL (Ctrl + D / Cmd + D). If our WhatsApp phone number ever updates, it will immediately reflect on this live page.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept Crypto (USDT TRC20/BEP20, BTC, ETH, LTC), Wise, Payoneer, Perfect Money, Binanace Pay, and local mobile banking methods depending on your country.'
    },
    {
      q: 'Can I order custom aged or specific country accounts in bulk?',
      a: 'Yes! We specialize in bulk custom PVA accounts (US, UK, CA, DE, BD, IN, BR, etc.). Click our WhatsApp CTA button and specify your target country and quantity for custom wholesale pricing.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/60">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs font-semibold mb-3 border border-slate-700">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          PVA Buyer FAQs
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/90 border border-slate-800/90 overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:text-emerald-300 transition-colors focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { AppConfig } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NoticeCard } from './components/NoticeCard';
import { FeatureGrid } from './components/FeatureGrid';
import { PvaCatalog } from './components/PvaCatalog';
import { OrderCustomizer } from './components/OrderCustomizer';
import { BackupChannels } from './components/BackupChannels';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Check, Loader2 } from 'lucide-react';

const DEFAULT_CONFIG: AppConfig = {
  whatsappNumber: '8801916400512',
  defaultMessage: 'Hi, I came from your website for PVA services.',
  telegramUsername: 'yourusername',
  supportEmail: 'support@example.com',
  businessName: 'PVA Master Services',
  responseRate: '< 2 Mins',
  noticeMessage:
    '📌 Bookmark (Ctrl + D) this page link! If our WhatsApp contact changes, you will always find our latest running WhatsApp here.',
};

export default function App() {
  const [config, setConfig] = useState<AppConfig>(DEFAULT_CONFIG);
  const [loading, setLoading] = useState<boolean>(true);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [selectedPlatformForCalc, setSelectedPlatformForCalc] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Fetch config.json on mount directly
  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch('/config.json');
        if (response.ok) {
          const data = await response.json();
          setConfig(data);
        } else {
          // Fallback to /public/config.json if path differs
          const fallbackRes = await fetch('/public/config.json');
          if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            setConfig(fallbackData);
          }
        }
      } catch (err) {
        console.error('Error fetching config.json, using default fallback:', err);
      } finally {
        setLoading(false);
      }
    }

    loadConfig();
  }, []);

  // Compute dynamic WhatsApp URL from config.json
  const encodedMsg = encodeURIComponent(config.defaultMessage || DEFAULT_CONFIG.defaultMessage);
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodedMsg}`;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleBookmark = () => {
    setIsBookmarked(true);
    showToast('📌 Page bookmarked! Press Ctrl + D (or Cmd + D) to save to browser bookmarks.');
  };

  const handleSelectPlatformForCalc = (platformName: string) => {
    setSelectedPlatformForCalc(platformName);
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0f17] flex flex-col items-center justify-center text-white p-4">
        <Loader2 className="w-10 h-10 text-emerald-400 animate-spin mb-4" />
        <p className="text-sm font-mono text-emerald-300">Loading config.json...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between overflow-x-hidden">
      
      <div>
        {/* Navigation Bar */}
        <Navbar
          config={config}
          whatsappUrl={whatsappUrl}
          onBookmark={handleBookmark}
          isBookmarked={isBookmarked}
        />

        {/* Hero Section */}
        <HeroSection config={config} whatsappUrl={whatsappUrl} />

        {/* Important Notice Card (Bookmark Alert) */}
        <NoticeCard
          customNotice={config.noticeMessage}
          onBookmark={handleBookmark}
          isBookmarked={isBookmarked}
        />

        {/* 4 Feature Cards Grid */}
        <FeatureGrid />

        {/* Platform Catalog */}
        <PvaCatalog
          config={config}
          onSelectPlatform={handleSelectPlatformForCalc}
        />

        {/* Interactive Order & Link Calculator */}
        <div id="calculator">
          <OrderCustomizer
            config={config}
            preselectedPlatform={selectedPlatformForCalc}
          />
        </div>

        {/* Backup Channels (Telegram & Email) */}
        <BackupChannels config={config} />

        {/* FAQs */}
        <FaqSection />
      </div>

      {/* Footer */}
      <Footer config={config} whatsappUrl={whatsappUrl} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 border border-emerald-500/50 text-white text-xs sm:text-sm font-semibold shadow-2xl shadow-black animate-slide-up">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}

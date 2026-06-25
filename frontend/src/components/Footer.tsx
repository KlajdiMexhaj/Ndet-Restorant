import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/menu';

interface FooterProps {
  currentLang: Language;
  currentPage: 'home' | 'menu';
  navigateTo: (page: 'home' | 'menu', sectionId?: string) => void;
}

export default function Footer({ currentLang, currentPage, navigateTo }: FooterProps) {
  const handleLogoClick = () => {
    navigateTo('home', 'home');
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-brand-dark border-t border-brand-primary/20 py-12 text-brand-cream/80 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Block: Logo & tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <button
              onClick={handleLogoClick}
              className="font-serif text-xl font-bold tracking-widest text-brand-accent focus:outline-none cursor-pointer"
            >
              N'DET
            </button>
            <p className="font-display tracking-widest uppercase text-[9px] text-brand-bg/60">
              {UI_TRANSLATIONS.footerTagline[currentLang]}
            </p>
          </div>

          {/* Center Block: Quick copyright info */}
          <div className="text-center space-y-1">
            <p className="font-sans text-brand-bg/85">
              &copy; {new Date().getFullYear()} N'Det Restaurant. {UI_TRANSLATIONS.footerRights[currentLang]}
            </p>
            <p className="font-mono text-[10px] text-brand-accent/50">
              {currentLang === 'en'
                ? 'Gourmet Seafood & Mediterranean Craftsmanship'
                : 'Kulinari Deti & Mjeshtëri Mesdhetare'}
            </p>
          </div>

          {/* Right Block: Back to Top & Socials */}
          <div className="flex items-center gap-4">
            {/* Minimalist Instagram link */}
            <a
              href="https://www.instagram.com/ndet_bar_restaurant?igsh=MXdzM3V4MDk3MGkxbg=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-brand-primary/30 hover:bg-brand-accent hover:text-brand-dark rounded-full transition-colors border border-brand-primary/40 text-brand-accent"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={handleBackToTop}
              className="p-2.5 bg-brand-primary/30 hover:bg-brand-accent hover:text-brand-dark rounded-full transition-colors border border-brand-primary/40 text-brand-accent cursor-pointer flex items-center justify-center"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

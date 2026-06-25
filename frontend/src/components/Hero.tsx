import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/menu';

interface HeroProps {
  currentLang: Language;
  navigateTo: (page: 'home' | 'menu', sectionId?: string) => void;
}

export default function Hero({ currentLang, navigateTo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark m-0 p-0"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1920&q=80"
          alt="Coastal Fine Dining Vibe"
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_8s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend colors into the earthy aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-primary/40 to-brand-dark z-10" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-brand-dark/50 to-brand-dark z-10" />
      </div>

      {/* Hero Content - Changed mt-16 to pt-16 to prevent white margin collapse */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-brand-cream pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Accent Line indicator */}
          <span className="h-1 w-12 bg-brand-accent mb-6 rounded-full" />

          {/* Golden tag */}
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-brand-accent font-display font-medium mb-4">
            {currentLang === 'en' ? 'FINE DINING EXPERIENCE' : 'PËRJETIM ELITË GATIMI'}
          </p>

          {/* Display Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-brand-cream leading-[1.1] mb-6 max-w-4xl">
            {UI_TRANSLATIONS.heroTitle[currentLang]}
          </h1>

          {/* Subtitle description */}
          <p className="text-base md:text-lg lg:text-xl font-light text-brand-bg/90 max-w-2xl leading-relaxed mb-10 font-sans">
            {UI_TRANSLATIONS.heroSubtitle[currentLang]}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('home', 'contact')}
              className="group flex items-center gap-3 bg-brand-primary border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark px-8 py-4 rounded-lg font-display text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-xl cursor-pointer"
            >
              {UI_TRANSLATIONS.heroCTA[currentLang]}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => navigateTo('menu')}
              className="group flex items-center gap-2 bg-transparent border border-brand-bg/30 text-brand-cream hover:border-brand-accent px-8 py-4 rounded-lg font-display text-xs tracking-widest uppercase font-semibold transition-all duration-300 cursor-pointer hover:bg-brand-cream/5"
            >
              {currentLang === 'en' ? 'EXPLORE MENU' : 'EKSPLORO MENUNË'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-brand-bg/50 font-display mb-2">
          {currentLang === 'en' ? 'SCROLL DOWN' : 'SHKROLLO'}
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </div>
    </section>
  );
}
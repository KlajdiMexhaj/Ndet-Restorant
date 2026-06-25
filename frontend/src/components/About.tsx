import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/menu';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 bg-brand-light relative overflow-hidden"
    >
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-bg/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Typography block */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-brand-primary">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="font-display text-xs tracking-[0.3em] uppercase font-bold text-brand-primary">
                  {currentLang === 'en' ? 'OUR HERITAGE' : 'TRASHËGIMIA JONË'}
                </span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
                {UI_TRANSLATIONS.aboutTitle[currentLang]}
              </h2>
              
              <p className="text-lg font-serif italic text-brand-primary opacity-90">
                {UI_TRANSLATIONS.aboutSubtitle[currentLang]}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-brand-dark/85 font-sans leading-relaxed text-sm md:text-base"
            >
              <p>{UI_TRANSLATIONS.aboutText1[currentLang]}</p>
              <p>{UI_TRANSLATIONS.aboutText2[currentLang]}</p>
            </motion.div>

            {/* Philosophy callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-6 md:p-8 bg-brand-bg/50 border-l-4 border-brand-primary rounded-r-xl"
            >
              <h3 className="font-display text-xs tracking-[0.2em] uppercase font-bold text-brand-primary mb-2">
                {UI_TRANSLATIONS.aboutPhilosophyTitle[currentLang]}
              </h3>
              <p className="font-sans text-xs md:text-sm text-brand-dark/90 leading-relaxed italic">
                "{UI_TRANSLATIONS.aboutPhilosophyText[currentLang]}"
              </p>
            </motion.div>
          </div>

          {/* Right Side: Visual Image Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4">
            
            {/* Top-left image (smaller) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="col-span-5 aspect-[3/4] overflow-hidden rounded-xl shadow-md border border-brand-primary/10"
            >
              <img
                src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=500&q=80"
                alt="Seafood Prep"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Main right image (larger) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-7 aspect-[4/5] overflow-hidden rounded-xl shadow-lg border border-brand-primary/10"
            >
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80"
                alt="Fine Dining Culinary Masterpiece"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Wide bottom image spanning across */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-12 h-44 overflow-hidden rounded-xl shadow-md border border-brand-primary/10 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="N'Det Elegant Coastal Dining Setting"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20 backdrop-brightness-75 flex items-end p-4">
                <span className="text-xs uppercase tracking-widest text-brand-cream font-display font-medium">
                  {currentLang === 'en' ? 'SOCIALLY CONNECTED SANCTUARY' : 'AMBJENT ELEGANT I DIZENJUAR'}
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

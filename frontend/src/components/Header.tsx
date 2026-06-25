import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/menu';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  currentPage: 'home' | 'menu';
  activeSection: string;
  navigateTo: (page: 'home' | 'menu', sectionId?: string) => void;
}

export default function Header({
  currentLang,
  setLang,
  currentPage,
  activeSection,
  navigateTo,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: UI_TRANSLATIONS.navHome[currentLang] },
    { id: 'about', label: UI_TRANSLATIONS.navAbout[currentLang] },
    { id: 'menu', label: UI_TRANSLATIONS.navMenu[currentLang] },
    { id: 'contact', label: UI_TRANSLATIONS.navContact[currentLang] },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (id === 'menu') {
      navigateTo('menu');
    } else {
      navigateTo('home', id);
    }
  };

  return (
    <>
      {/* Header wrapper - Added bg-transparent and removed any potential margins */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ${
          isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div 
            className={`flex items-center justify-between transition-all duration-500 px-4 py-2 md:px-8 md:py-3 rounded-full md:rounded-2xl ${
              isScrolled || isOpen
                ? 'bg-brand-dark/90 shadow-2xl backdrop-blur-lg border border-brand-accent/10'
                : 'bg-brand-dark/40 backdrop-blur-sm border border-white/5'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex flex-col items-start focus:outline-none group cursor-pointer"
            >
              <span className="font-serif text-xl md:text-2xl lg:text-3xl font-bold tracking-widest text-brand-accent transition-colors">
                N'DET
              </span>
              <span className="hidden md:block text-[9px] tracking-[0.2em] uppercase text-brand-bg font-display opacity-80 group-hover:text-brand-accent transition-colors">
                {UI_TRANSLATIONS.footerTagline[currentLang]}
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-display text-sm tracking-widest uppercase font-medium">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 transition-colors duration-300 cursor-pointer hover:text-brand-accent ${
                    activeSection === item.id
                      ? 'text-brand-accent font-semibold'
                      : 'text-brand-cream/90'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent" />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center bg-brand-primary/40 border border-brand-accent/20 rounded-full p-1 text-xs">
                <Globe className="w-3.5 h-3.5 text-brand-accent mx-2" />
                <button onClick={() => setLang('sq')} className={`px-2.5 py-1 rounded-full font-display font-medium uppercase transition-all duration-200 cursor-pointer ${currentLang === 'sq' ? 'bg-brand-accent text-brand-primary' : 'text-brand-cream'}`}>AL</button>
                <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-full font-display font-medium uppercase transition-all duration-200 cursor-pointer ${currentLang === 'en' ? 'bg-brand-accent text-brand-primary' : 'text-brand-cream'}`}>EN</button>
              </div>
              <button onClick={() => handleNavClick('contact')} className="flex items-center gap-2 bg-brand-accent text-brand-dark px-5 py-2 rounded-lg font-display text-xs tracking-widest uppercase font-semibold transition-all transform hover:-translate-y-0.5 cursor-pointer">
                <Phone className="w-3.5 h-3.5" />
                {UI_TRANSLATIONS.navReservations[currentLang]}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-2">
              <div className="flex items-center bg-brand-primary/30 rounded-full p-0.5 border border-white/5">
                {['sq', 'en'].map((l) => (
                  <button key={l} onClick={() => setLang(l as Language)} className={`px-3 py-1.5 rounded-full text-[10px] font-display font-bold uppercase transition-all ${currentLang === l ? 'bg-brand-accent text-brand-dark shadow-lg' : 'text-brand-cream/60'}`}>
                    {l === 'sq' ? 'AL' : 'EN'}
                  </button>
                ))}
              </div>
              <button onClick={() => setIsOpen(!isOpen)} className={`p-2.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-brand-accent text-brand-dark rotate-90' : 'bg-brand-accent/10 text-brand-accent'}`}>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay (No changes to style) */}
      <div className={`fixed inset-0 z-[45] md:hidden transition-all duration-700 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-2xl" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03] select-none pointer-events-none">
          <span className="font-serif text-[40vw] font-bold leading-none">N'DET</span>
        </div>
        <div className="relative h-full flex flex-col justify-center px-10">
          <nav className="space-y-8">
            {navItems.map((item, index) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className="group block w-full text-left">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-brand-accent/40">0{index + 1}</span>
                  <span className={`text-4xl font-display uppercase tracking-[0.2em] transition-all duration-500 ${activeSection === item.id ? 'text-brand-accent translate-x-4' : 'text-brand-cream/80'}`}>{item.label}</span>
                </div>
              </button>
            ))}
          </nav>
          <div className="absolute bottom-12 left-10 right-10">
            <div className="h-[1px] w-full bg-brand-accent/20 mb-8" />
            <p className="font-serif text-lg italic text-brand-accent/90 mb-8">{currentLang === 'en' ? 'Savor the deep soul of the sea.' : 'Shijoni shpirtin e thellë të detit.'}</p>
            <button onClick={() => handleNavClick('contact')} className="w-full flex items-center justify-center gap-3 bg-brand-accent text-brand-dark py-5 rounded-2xl font-display text-xs tracking-[0.2em] uppercase font-bold shadow-2xl active:scale-95 transition-transform"><Phone className="w-4 h-4" />{UI_TRANSLATIONS.navReservations[currentLang]}</button>
          </div>
        </div>
      </div>
    </>
  );
}
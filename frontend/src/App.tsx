import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialFloating from './components/SocialFloating';
import { Language } from './types';

export default function App() {
  const [currentLang, setLang] = useState<Language>('sq'); // Default to Albanian for local authenticity
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');
  const [activeSection, setActiveSection] = useState('home');

  // Custom multi-page routing and scroll helper
  const navigateTo = (page: 'home' | 'menu', sectionId?: string) => {
    setCurrentPage(page);
    setActiveSection(sectionId || (page === 'menu' ? 'menu' : 'home'));
    
    if (page === 'menu') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  // Set up active section observer for scroll tracking (only relevant on home page)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = ['home', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger early

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-brand-cream/20 flex flex-col justify-between selection:bg-brand-accent selection:text-brand-dark">
      {/* Structural Header Navigation */}
      <Header
        currentLang={currentLang}
        setLang={setLang}
        currentPage={currentPage}
        activeSection={activeSection}
        navigateTo={navigateTo}
      />
<SocialFloating />
      {/* Main Semantic Core */}
      <main className="flex-grow pt-[70px]">
        {currentPage === 'home' ? (
          <>
            {/* Cinematic Hero Block */}
            <Hero
              currentLang={currentLang}
              navigateTo={navigateTo}
            />

            {/* Story & About Block */}
            <About
              currentLang={currentLang}
            />

            {/* Instant Booking & Socials Block */}
            <Contact
              currentLang={currentLang}
            />
          </>
        ) : (
          /* Dynamic Complete Bilingual Menu Page */
          <Menu
            currentLang={currentLang}
          />
        )}
      </main>

      {/* Beautiful cohesive Footer */}
      <Footer
        currentLang={currentLang}
        currentPage={currentPage}
        navigateTo={navigateTo}
      />
    </div>
  );
}

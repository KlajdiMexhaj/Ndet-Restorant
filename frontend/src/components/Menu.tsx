import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Heart, Utensils, X } from 'lucide-react';
import { Language, MenuItem } from '../types';
import { MENU_ITEMS, UI_TRANSLATIONS } from '../data/menu';

interface MenuProps {
  currentLang: Language;
}

export default function Menu({ currentLang }: MenuProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = [
    { id: 'all', label: UI_TRANSLATIONS.menuFilterAll[currentLang] },
    { id: 'breakfast', label: UI_TRANSLATIONS.menuFilterBreakfast[currentLang] },
    { id: 'salads', label: UI_TRANSLATIONS.menuFilterSalads[currentLang] },
    { id: 'starters', label: UI_TRANSLATIONS.menuFilterStarters[currentLang] },
    { id: 'soup', label: UI_TRANSLATIONS.menuFilterSoup[currentLang] },
    { id: 'pasta', label: UI_TRANSLATIONS.menuFilterPasta[currentLang] },
    { id: 'risotto', label: UI_TRANSLATIONS.menuFilterRisotto[currentLang] },
    { id: 'seafood', label: UI_TRANSLATIONS.menuFilterSeafood[currentLang] },
    { id: 'wild_fish', label: UI_TRANSLATIONS.menuFilterWildFish[currentLang] },
    { id: 'fish', label: UI_TRANSLATIONS.menuFilterFish[currentLang] },
    { id: 'meat', label: UI_TRANSLATIONS.menuFilterMeat[currentLang] },
    { id: 'pizza', label: UI_TRANSLATIONS.menuFilterPizza[currentLang] },
  ];

  // Search and filter logic (matches across names and ingredients in both languages)
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const nameMatch =
        item.name.en.toLowerCase().includes(query) ||
        item.name.sq.toLowerCase().includes(query);

      const ingredientMatch = item.ingredients?.some(
        (ing) =>
          ing.en.toLowerCase().includes(query) ||
          ing.sq.toLowerCase().includes(query)
      ) || false;

      return matchesCategory && (nameMatch || ingredientMatch);
    });
  }, [searchQuery, activeCategory]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Helper to get localized category name
  const getCategoryLabel = (catId: string) => {
    const found = categories.find(c => c.id === catId);
    return found ? found.label : catId;
  };

  return (
    <section id="menu" className="py-12 bg-brand-cream/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full text-brand-primary">
            <Utensils className="w-3.5 h-3.5 animate-bounce" />
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              {currentLang === 'en' ? 'BILINGUAL MENU' : 'MENY E DYGJUHSHME'}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-brand-dark">
            {UI_TRANSLATIONS.menuTitle[currentLang]}
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-dark/75 leading-relaxed">
            {UI_TRANSLATIONS.menuSubtitle[currentLang]}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-col gap-6 justify-between items-center bg-brand-light p-4 rounded-2xl border border-brand-primary/5 shadow-sm">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full scrollbar-thin scrollbar-thumb-brand-accent/25">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs tracking-wider uppercase font-display font-medium transition-all duration-200 shrink-0 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-brand-primary text-brand-cream shadow-md scale-102'
                      : 'bg-brand-bg/50 hover:bg-brand-bg/90 text-brand-dark'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full border-t border-brand-primary/5 pt-4">
              {/* Search Input */}
              <div className="relative w-full sm:w-96">
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? 'Search ingredients or dishes...' : 'Kërko përbërës ose pjata...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-brand-bg/30 rounded-lg border border-brand-primary/10 focus:border-brand-primary focus:outline-none text-xs font-sans text-brand-dark placeholder:text-brand-primary/45 transition-all"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-primary/45" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-primary/45 hover:text-brand-primary cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Results Count Summary */}
              <div className="text-xs font-display text-brand-primary/70 tracking-wider flex items-center gap-4">
                <span>
                  {currentLang === 'en'
                    ? `Showing ${filteredItems.length} of ${MENU_ITEMS.length} dishes`
                    : `Po shfaqen ${filteredItems.length} nga ${MENU_ITEMS.length} pjata`}
                </span>
                {favorites.length > 0 && (
                  <span className="flex items-center gap-1 text-red-700 font-semibold bg-red-50 px-2 py-1 rounded">
                    <Heart className="w-3 h-3 fill-current" />
                    {favorites.length}
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-brand-light rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-brand-primary/5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Section */}
                {item.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
                    <img
                      src={item.image}
                      alt={item.name[currentLang]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Subtle overlay gradient for style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Favorite button toggle */}
                    <button
                      onClick={(e) => toggleFavorite(item.id, e)}
                      className="absolute top-3 right-3 p-2 bg-brand-light/90 backdrop-blur-sm rounded-full shadow-md text-brand-dark hover:text-red-600 transition-all cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform active:scale-125 ${
                          favorites.includes(item.id)
                            ? 'text-red-600 fill-current'
                            : 'text-brand-dark/70'
                        }`}
                      />
                    </button>

                    {/* Price Tag directly over the image */}
                    <div className="absolute bottom-3 right-3 bg-brand-primary/95 text-brand-accent font-display text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-brand-accent/20">
                      {item.price}
                    </div>
                  </div>
                )}

                {/* Body Content Section (Fully visible info, no details model needed) */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      {/* Category Label */}
                      <span className="text-[10px] tracking-wider uppercase text-brand-accent bg-brand-primary px-2.5 py-1 rounded-full font-display font-medium">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>

                    {/* Recipe Titles */}
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                        {item.name[currentLang]}
                      </h3>
                      <p className="text-xs italic text-brand-primary/60 font-sans mt-0.5">
                        {currentLang === 'en' ? item.name.sq : item.name.en}
                      </p>
                    </div>

                    {/* Ingredients displayed directly on the card */}
                    {item.ingredients && item.ingredients.length > 0 && (
                      <div className="pt-2.5 border-t border-brand-primary/5">
                        <span className="text-[10px] font-display font-bold text-brand-primary/80 uppercase block mb-1">
                          {UI_TRANSLATIONS.recipeIngredientsLabel[currentLang]}
                        </span>
                        <p className="text-xs text-brand-dark/80 font-sans leading-relaxed">
                          {item.ingredients.map((ing) => ing[currentLang]).join(', ')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State when no recipes match query */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-brand-light rounded-2xl border border-dashed border-brand-primary/20 max-w-lg mx-auto mt-12">
            <Utensils className="w-12 h-12 text-brand-primary/30 mx-auto mb-4" />
            <h3 className="font-serif text-lg text-brand-dark font-medium">
              {currentLang === 'en' ? 'No dishes matched your search' : 'Asnjë pjatë nuk përputhet me kërkimin tuaj'}
            </h3>
            <p className="text-xs text-brand-primary/60 mt-1 font-sans">
              {currentLang === 'en' ? 'Try searching different ingredients or filters.' : 'Provoni të kërkoni me përbërës të tjerë ose filtra.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-6 px-4 py-2 bg-brand-primary text-brand-cream font-display text-xs uppercase tracking-wider rounded-lg cursor-pointer"
            >
              {currentLang === 'en' ? 'Reset All Filters' : 'Rivendos të gjitha'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

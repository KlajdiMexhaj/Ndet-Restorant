export interface Translation {
  en: string;
  sq: string;
}

export interface MenuItem {
  id: string;
  name: Translation;
  ingredients?: Translation[];
  price: string;
  category: 'breakfast' | 'salads' | 'starters' | 'soup' | 'pasta' | 'risotto' | 'seafood' | 'wild_fish' | 'fish' | 'meat' | 'pizza';
  image?: string;
  tags?: {
    en: string[];
    sq: string[];
  };
  isChefSpecial?: boolean;
}

export type Language = 'en' | 'sq';

export interface UIContent {
  navHome: Translation;
  navAbout: Translation;
  navMenu: Translation;
  navContact: Translation;
  navReservations: Translation;
  heroTitle: Translation;
  heroSubtitle: Translation;
  heroCTA: Translation;
  aboutTitle: Translation;
  aboutSubtitle: Translation;
  aboutText1: Translation;
  aboutText2: Translation;
  aboutPhilosophyTitle: Translation;
  aboutPhilosophyText: Translation;
  menuTitle: Translation;
  menuSubtitle: Translation;
  menuFilterAll: Translation;
  menuFilterBreakfast: Translation;
  menuFilterSalads: Translation;
  menuFilterStarters: Translation;
  menuFilterSoup: Translation;
  menuFilterPasta: Translation;
  menuFilterRisotto: Translation;
  menuFilterSeafood: Translation;
  menuFilterWildFish: Translation;
  menuFilterFish: Translation;
  menuFilterMeat: Translation;
  menuFilterPizza: Translation;
  recipeIngredientsLabel: Translation;
  contactTitle: Translation;
  contactSubtitle: Translation;
  contactPhone: Translation;
  contactWhatsApp: Translation;
  contactAddress: Translation;
  contactHours: Translation;
  contactHoursWeekdays: Translation;
  contactHoursWeekend: Translation;
  reservationTitle: Translation;
  reservationText: Translation;
  reservationCTAWhatsApp: Translation;
  reservationCTAPhone: Translation;
  footerRights: Translation;
  footerTagline: Translation;
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Send, Sparkles, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/menu';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '20:00',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Predefined phone & whatsapp number
  const phoneNumber = '+355697465960'; 
  const cleanPhoneForWhatsApp = '+355697465960';

  // Construct WhatsApp reservation text dynamically based on form input!
  const getWhatsAppLink = () => {
    const baseText = currentLang === 'en'
      ? `Hello N'Det! I would like to request a table reservation. \n\n• Name: ${formData.name || 'Valued Guest'}\n• Phone: ${formData.phone || 'N/A'}\n• Guests: ${formData.guests}\n• Date: ${formData.date || 'To be confirmed'}\n• Time: ${formData.time}\n• Notes: ${formData.notes || 'None'}\n\nThank you!`
      : `Përshëndetje N'Det! Dëshiroj të bëj një rezervim tavoline. \n\n• Emri: ${formData.name || 'Mysafir i Nderuar'}\n• Cel: ${formData.phone || 'N/A'}\n• Persona: ${formData.guests}\n• Data: ${formData.date || 'Për t\'u konfirmuar'}\n• Ora: ${formData.time}\n• Shënime: ${formData.notes || 'Asnjë'}\n\nJu faleminderit!`;
    
    return `https://wa.me/${cleanPhoneForWhatsApp}?text=${encodeURIComponent(baseText)}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Open WhatsApp link in a new tab to complete the actual real-world reservation
    setTimeout(() => {
      window.open(getWhatsAppLink(), '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Visual glowing ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/15 rounded-full text-brand-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-display text-xs tracking-widest uppercase font-semibold">
              {currentLang === 'en' ? 'RESERVATIONS & VISIT' : 'REZERVIME & VIZITA'}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-brand-accent">
            {UI_TRANSLATIONS.contactTitle[currentLang]}
          </h2>
          <p className="font-sans text-sm md:text-base text-brand-bg/80 leading-relaxed">
            {UI_TRANSLATIONS.contactSubtitle[currentLang]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info & Map Placeholder (Lg: 5/12 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick dial/chat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="p-5 bg-brand-primary/30 hover:bg-brand-primary/50 border border-brand-accent/20 rounded-2xl flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <div className="p-3 bg-brand-accent text-brand-dark rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-display text-xs tracking-wider uppercase font-bold text-brand-accent">
                  {UI_TRANSLATIONS.contactPhone[currentLang]}
                </span>
                <span className="text-xs text-brand-bg font-mono">
                  {phoneNumber}
                </span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-brand-primary/30 hover:bg-brand-primary/50 border border-brand-accent/20 rounded-2xl flex flex-col items-center text-center space-y-3 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <div className="p-3 bg-green-500 text-white rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-display text-xs tracking-wider uppercase font-bold text-brand-accent">
                  {UI_TRANSLATIONS.contactWhatsApp[currentLang]}
                </span>
                <span className="text-xs text-brand-bg font-sans">
                  {currentLang === 'en' ? 'Open Chat' : 'Hap bisedën'}
                </span>
              </a>
            </div>

            {/* Address & Hours */}
            <div className="p-6 bg-brand-primary/20 border border-brand-primary/40 rounded-2xl space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <span className="font-display font-bold uppercase text-brand-accent text-xs tracking-wider block">
                    {currentLang === 'en' ? 'LOCATION' : 'VENDNDODHJA'}
                  </span>
                  <p className="text-brand-bg/95 font-sans leading-relaxed">
                    {UI_TRANSLATIONS.contactAddress[currentLang]}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="space-y-1.5 text-sm">
                  <span className="font-display font-bold uppercase text-brand-accent text-xs tracking-wider block">
                    {UI_TRANSLATIONS.contactHours[currentLang]}
                  </span>
                  <p className="text-brand-bg/90 font-sans text-xs">
                    {UI_TRANSLATIONS.contactHoursWeekdays[currentLang]}
                  </p>
                  <p className="text-brand-bg/90 font-sans text-xs">
                    {UI_TRANSLATIONS.contactHoursWeekend[currentLang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Elegant Minimalist Vector Coastal Map */}
            <div className="bg-brand-primary/20 border border-brand-primary/40 rounded-3xl overflow-hidden aspect-[16/10] relative shadow-lg group">
              <div className="absolute inset-0 bg-brand-dark/40 z-10 pointer-events-none" />
              {/* Custom Vector Drawing represent seaside road */}
              <svg className="absolute inset-0 w-full h-full bg-[#321c19] text-[#5d2b24]" viewBox="0 0 400 250">
                {/* Coastal Sea Area */}
                <path d="M0 160 Q 150 140, 400 180 L 400 250 L 0 250 Z" fill="#203d42" opacity="0.8" />
                {/* Sea waves decoration */}
                <path d="M20 180 Q 80 175, 140 185 T 320 190" stroke="#ffc378" strokeWidth="0.5" fill="none" opacity="0.3" />
                <path d="M0 210 Q 100 200, 250 220 T 400 210" stroke="#ffc378" strokeWidth="0.5" fill="none" opacity="0.2" />
                {/* Shoreline path */}
                <path d="M0 160 Q 150 140, 400 180" stroke="#e5d4c0" strokeWidth="4" fill="none" strokeDasharray="3 3" opacity="0.5" />
                {/* Coastal Road (Rruga Detare) */}
                <path d="M0 130 Q 150 115, 400 150" stroke="#ffc378" strokeWidth="8" fill="none" opacity="0.4" />
                <path d="M0 130 Q 150 115, 400 150" stroke="#faf5ef" strokeWidth="1" fill="none" strokeDasharray="5 5" opacity="0.8" />
                {/* Surrounding blocks */}
                <rect x="40" y="40" width="60" height="40" rx="4" fill="#5d2b24" opacity="0.3" />
                <rect x="140" y="50" width="70" height="30" rx="4" fill="#5d2b24" opacity="0.3" />
                <rect x="260" y="30" width="90" height="50" rx="4" fill="#5d2b24" opacity="0.3" />
                {/* Pine trees / landscape */}
                <circle cx="115" cy="110" r="8" fill="#465c40" opacity="0.6" />
                <circle cx="230" cy="100" r="10" fill="#465c40" opacity="0.6" />
                <circle cx="245" cy="105" r="7" fill="#465c40" opacity="0.6" />
                {/* The Restaurant Pin (N'Det) */}
                <g transform="translate(190, 110)">
                  <circle cx="0" cy="0" r="12" fill="#ffc378" className="animate-ping" opacity="0.4" />
                  <circle cx="0" cy="0" r="6" fill="#ffc378" />
                  <path d="M-6 -18 L6 -18 L0 -10 Z" fill="#ffc378" />
                </g>
                {/* Map labels */}
                <text x="180" y="85" fill="#ffc378" fontSize="10" fontFamily="Playfair Display" fontWeight="bold" letterSpacing="1">N'DET RESTAURANT</text>
                <text x="10" y="240" fill="#ffc378" fontSize="8" fontFamily="Space Grotesk" opacity="0.5">ADRIATIC SEA / DETI ADRIATIK</text>
                <text x="300" y="130" fill="#e5d4c0" fontSize="7" fontFamily="Space Grotesk" transform="rotate(7 300 130)" opacity="0.7">RRUGA DETARE</text>
              </svg>

              <div className="absolute bottom-4 left-4 right-4 z-20 bg-brand-primary/95 backdrop-blur-md p-3 rounded-xl border border-brand-accent/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-cream">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 animate-bounce" />
                  <span className="text-[10px] font-display font-semibold tracking-wider">
                    {currentLang === 'en' ? 'SEA-FRONT SHËNGJIN ' : 'Ndet Bar-Restaurant, SHËNGJIN'}
                  </span>
                </div>
                <a
                  href={`https://maps.google.com/maps/place/Ndet+Bar-Restaurant/@41.8106832,19.5931715,17z/data=!3m1!4b1!4m6!3m5!1s0x1351e1c7e6457ba3:0x724ca2767bb01a86!8m2!3d41.8106792!4d19.5957464!16s%2Fg%2F11yd86mw0s?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-display font-bold uppercase text-brand-accent hover:underline flex items-center gap-1"
                >
                  {currentLang === 'en' ? 'OPEN MAP' : 'HAP HARTËN'}
                </a>
              </div>
            </div>

            {/* Social Media Row */}
            <div className="space-y-3 pt-2">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-brand-accent/70 block">
                {currentLang === 'en' ? 'FOLLOW OUR ADRIATIC SOUL' : 'NDIQNI SHPIRTIN TONË BREGDETAR'}
              </span>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ndet_bar_restaurant?igsh=MXdzM3V4MDk3MGkxbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-primary/40 hover:bg-brand-accent hover:text-brand-dark border border-brand-accent/20 px-4 py-2.5 rounded-xl font-display text-xs tracking-wider transition-all duration-300 cursor-pointer"
                >
                  <Instagram className="w-4 h-4 text-brand-accent group-hover:text-brand-dark" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@ndet.bar.restaurant?_r=1&_t=ZS-97V1mp7w6kC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-brand-primary/40 hover:bg-brand-accent hover:text-brand-dark border border-brand-accent/20 px-4 py-2.5 rounded-xl font-display text-xs tracking-wider transition-all duration-300 cursor-pointer"
                >
                  {/* TikTok Icon representation using standard lucide path or custom stylish layout */}
                  <svg className="w-4 h-4 fill-current text-brand-accent group-hover:text-brand-dark" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.96 1.15 2.29 1.93 3.73 2.23v3.96c-1.35-.11-2.67-.58-3.82-1.31-.41-.26-.8-.57-1.15-.91v6.84c.03 2.11-.64 4.23-1.99 5.86-1.55 1.83-3.9 2.92-6.29 3.03-2.66.11-5.36-.88-6.99-2.98C.16 18.5-.47 15.54.34 12.83c.69-2.45 2.51-4.52 4.93-5.33.65-.22 1.33-.35 2.02-.37v3.9c-.84.14-1.63.57-2.18 1.23-.74.88-.93 2.15-.49 3.24.42 1.09 1.48 1.86 2.66 1.92 1.17.06 2.3-.57 2.82-1.61.22-.44.31-.94.3-1.43V0h2.125z" />
                  </svg>
                  <span>TikTok</span>
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Digital Table Reservation Request Widget (Lg: 7/12 cols) */}
          <div className="lg:col-span-7 bg-brand-primary/10 border border-brand-primary/40 rounded-3xl p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-brand-accent">
                {UI_TRANSLATIONS.reservationTitle[currentLang]}
              </h3>
              <p className="text-xs text-brand-bg/85 font-sans leading-relaxed">
                {UI_TRANSLATIONS.reservationText[currentLang]}
              </p>
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                    {currentLang === 'en' ? 'FULL NAME' : 'EMRI MBIEMRI'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={currentLang === 'en' ? 'e.g. John Doe' : 'p.sh. Klajdi Mexhaj'}
                    className="w-full bg-brand-primary/20 border border-brand-primary/30 focus:border-brand-accent focus:outline-none px-4 py-3 rounded-xl text-xs font-sans text-brand-cream"
                  />
                </div>

                {/* Phone contact input */}
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                    {currentLang === 'en' ? 'CONTACT NUMBER' : 'NUMRI I CELULARIT'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +355 69..."
                    className="w-full bg-brand-primary/20 border border-brand-primary/30 focus:border-brand-accent focus:outline-none px-4 py-3 rounded-xl text-xs font-sans text-brand-cream"
                  />
                </div>

                {/* Guests counter selection */}
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                    {currentLang === 'en' ? 'NUMBER OF GUESTS' : 'NUMRI I PERSONAVE'}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-brand-primary/20 border border-brand-primary/30 focus:border-brand-accent focus:outline-none px-4 py-3 rounded-xl text-xs font-sans text-brand-cream select-custom"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num} className="bg-brand-dark text-brand-cream">
                        {num} {num === 1 ? (currentLang === 'en' ? 'Guest' : 'Person') : (currentLang === 'en' ? 'Guests' : 'Persona')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Booking Date */}
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                    {currentLang === 'en' ? 'RESERVATION DATE' : 'DATA E REZERVIMIT'}
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-brand-primary/20 border border-brand-primary/30 focus:border-brand-accent focus:outline-none px-4 py-3 rounded-xl text-xs font-sans text-brand-cream text-left"
                  />
                </div>

              </div>

              {/* Booking Time Selection */}
              <div className="space-y-1.5">
                <label className="font-display text-[10px] font-bold uppercase tracking-wider text-brand-accent block">
                  {currentLang === 'en' ? 'PREFERRED TIME' : 'ORA E PREFERUAR'}
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {['12:30', '13:30', '18:00', '19:00', '20:00', '21:00', '22:00'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`py-2 rounded-lg text-[11px] font-mono tracking-wider transition-all duration-150 cursor-pointer ${
                        formData.time === time
                          ? 'bg-brand-accent text-brand-dark font-bold border border-brand-accent'
                          : 'bg-brand-primary/25 border border-brand-primary/30 text-brand-bg hover:border-brand-accent/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes or special seafood requirements */}
              <div className="space-y-1.5">
                <label className="font-display text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                  {currentLang === 'en' ? 'SPECIAL REQUESTS / DIETARY NOTES' : 'KËRKESA TË VEÇANTA / SHËNIME'}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={currentLang === 'en' ? 'e.g. Sea-view table, gluten allergies, high chair for kids' : 'p.sh. Tavolinë me pamje nga deti, alergji ndaj glutenit, etj.'}
                  className="w-full bg-brand-primary/20 border border-brand-primary/30 focus:border-brand-accent focus:outline-none px-4 py-3 rounded-xl text-xs font-sans text-brand-cream resize-none"
                />
              </div>

              {/* Informational warning */}
              <div className="flex items-start gap-2.5 p-3.5 bg-brand-accent/5 border border-brand-accent/10 rounded-xl text-[11px] text-brand-bg/85 font-sans leading-relaxed">
                <AlertCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span>
                  {currentLang === 'en'
                    ? 'Note: Submit button generates a formatted request. It will redirect to WhatsApp to finish the instant booking securely with our host.'
                    : 'Shënim: Klikimi i butonit më poshtë gjeneron kërkesën dhe ju ridrejton në WhatsApp për të konfirmuar rezervimin me stafin tonë.'}
                </span>
              </div>

              {/* Form submit CTA buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent/95 text-brand-dark py-4 rounded-xl font-display text-xs tracking-widest uppercase font-bold transition-all duration-200 cursor-pointer shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  {UI_TRANSLATIONS.reservationCTAWhatsApp[currentLang]}
                </button>
                
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 bg-transparent border border-brand-bg/30 hover:border-brand-accent text-brand-cream py-4 px-6 rounded-xl font-display text-xs tracking-widest uppercase font-semibold transition-all duration-200 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {UI_TRANSLATIONS.reservationCTAPhone[currentLang]}
                </a>
              </div>

              {formSubmitted && (
                <div className="text-center text-xs font-display text-brand-accent animate-pulse">
                  {currentLang === 'en' ? 'Redirecting to WhatsApp...' : 'Duke ju ridrejtuar në WhatsApp...'}
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

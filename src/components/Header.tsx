import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS, LANGUAGES_SUPPORTED } from '../data/content';

interface HeaderProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenConsultation: () => void;
  onOpenTranslationModal: () => void;
  customLogo?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenConsultation,
  onOpenTranslationModal,
  customLogo,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = TRANSLATIONS[currentLang as SupportedLanguage] || TRANSLATIONS['it'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Track active section for underline indicator
      const sections = ['home', 'art-18-ter', 'chi-siamo', 'servizi', 'come-funziona', 'team', 'lingue', 'recensioni', 'ufficio', 'contatti'];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', href: '#home', label: t.nav.home },
    { id: 'art-18-ter', href: '#art-18-ter', label: 'Art. 18-ter Sfruttamento', isEmergency: true },
    { id: 'servizi', href: '#servizi', label: t.nav.services },
    { id: 'team', href: '#team', label: t.nav.team },
    { id: 'chi-siamo', href: '#chi-siamo', label: 'Chi Siamo' },
    { id: 'come-funziona', href: '#come-funziona', label: t.nav.howItWorks },
    { id: 'lingue', href: '#lingue', label: t.nav.languages },
    { id: 'recensioni', href: '#recensioni', label: 'Recensioni' },
    { id: 'ufficio', href: '#ufficio', label: t.nav.office },
    { id: 'contatti', href: '#contatti', label: t.nav.contact },
  ];

  const currentLangObj = LANGUAGES_SUPPORTED.find((l) => l.code === currentLang) || {
    code: currentLang,
    name: currentLang.toUpperCase(),
    flag: '🌐',
    nativeName: currentLang.toUpperCase(),
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D16]/98 backdrop-blur-md shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-[#080D16]/98 via-[#080D16]/75 to-transparent'
      }`}
    >
      {/* Top Priority Announcement Banner for Labor Exploitation & Art. 18-ter */}
      <div className="bg-gradient-to-r from-[#7D2918] via-[#A83D26] to-[#7D2918] text-white px-3 sm:px-6 py-1.5 text-[11px] sm:text-xs font-medium border-b border-white/15">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/40 font-bold uppercase tracking-wider text-[10px] text-[#FDE68A] shrink-0 border border-white/15">
              ⚖️ ART. 18-TER
            </span>
            <span className="truncate text-white/95">
              Se il tuo datore di lavoro fa <strong>sfruttamento lavorativo</strong>, ti aiutiamo ad avere i <strong>documenti regolari</strong> anche senza status legale in Italia.
            </span>
          </div>
          <a
            href="#art-18-ter"
            className="shrink-0 inline-flex items-center gap-1 text-[11px] font-bold text-[#FDE68A] hover:text-white underline decoration-[#FDE68A] transition-colors ml-2"
          >
            <span>Protezione & Permesso</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-6">
          {/* Brand Lockup: Logo crest + Two-line site name 'ITALIA IMMIGRAZIONE' */}
          <a
            href="#home"
            className="flex items-center gap-3.5 text-white group focus-visible:outline-none shrink-0"
            title="Italia Immigrazione - Milano"
          >
            {/* Official Logo Emblem */}
            <div className="relative flex items-center justify-center shrink-0">
              <img
                src={customLogo || '/logo.png'}
                alt="Logo Italia Immigrazione"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/logo.svg')) {
                    target.src = '/logo.svg';
                  }
                }}
              />
            </div>

            {/* Elegant vertical divider line */}
            <div className="h-8 w-[1px] bg-white/30" />

            {/* Two-line Law Firm Wordmark with requested site name */}
            <div className="flex flex-col justify-center">
              <span className="font-law text-sm sm:text-base tracking-[0.2em] text-white font-semibold uppercase leading-tight">
                ITALIA IMMIGRAZIONE
              </span>
              <span className="text-[9px] sm:text-[9.5px] tracking-[0.24em] text-[#C5A880] uppercase font-medium mt-0.5">
                STUDIO IMMIGRAZIONE & TUTELA LEGALE · MILANO
              </span>
            </div>
          </a>

          {/* Navigation Links (With Active Underline indicator) */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-[#E7DED4]/90">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
                    link.isEmergency
                      ? 'text-[#FDE68A] font-semibold bg-[#B45F42]/30 px-2.5 py-1 rounded border border-[#B45F42]/60 hover:bg-[#B45F42]/50'
                      : isActive
                      ? 'text-white'
                      : 'text-[#E7DED4]/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && !link.isEmergency && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone: Language Quick Switcher + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Language Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xs text-xs font-medium text-[#E7DED4] hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                aria-expanded={langDropdownOpen}
                aria-label="Seleziona lingua rapida"
              >
                <span>{currentLangObj.flag}</span>
                <span className="text-[11px] font-mono uppercase">{currentLangObj.code.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 text-white/60" />
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-[#10263D] border border-white/15 rounded-xs shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#E7DED4]/60 font-semibold border-b border-white/10">
                    Lingua
                  </div>
                  {LANGUAGES_SUPPORTED.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code as SupportedLanguage);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-white/10 transition-colors ${
                        currentLang === lang.code ? 'text-white font-bold bg-white/10' : 'text-[#E7DED4]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="text-[11px] opacity-70" dir={lang.rtl ? 'rtl' : 'ltr'}>
                        {lang.nativeName}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solid White Luxury CTA matching Joseph Law in screenshot */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-all duration-200 shadow-lg active:scale-98 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile buttons: hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 rounded-xs"
              aria-label={mobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#10263D]/98 backdrop-blur-xl border border-white/15 rounded-xs shadow-2xl space-y-3">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-xs transition-colors flex items-center justify-between ${
                    link.isEmergency
                      ? 'text-[#FDE68A] font-semibold bg-[#B45F42]/30 border border-[#B45F42]/60'
                      : 'text-[#E7DED4] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.isEmergency && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-[#FDE68A]">
                      TUTELA
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/15 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTranslationModal();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-white bg-white/10 border border-white/25 rounded-xs flex items-center justify-center gap-2"
              >
                <Globe className="w-4 h-4 text-[#E7DED4]" />
                <span>Traduci il sito multilingue</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold tracking-wider text-white bg-[#0e2338] border border-white/30 rounded-xs transition-colors shadow"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

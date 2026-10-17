import React from 'react';
import { Globe2, ArrowRight } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { LANGUAGES_SUPPORTED } from '../data/content';

interface LanguagesSectionProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenConsultation: () => void;
  onOpenTranslationModal?: () => void;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  currentLang,
  onLanguageChange,
  onOpenConsultation,
  onOpenTranslationModal,
}) => {
  return (
    <section id="lingue" className="py-10 sm:py-12 bg-[#0B111B] text-white border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span>COMUNICAZIONE SENZA BARRIERE</span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-white leading-tight">
              Parliamo la tua lingua madre, senza intermediari né malintesi.
            </h2>

            <p className="text-xs sm:text-sm text-[#E7DED4]/80 leading-relaxed font-light">
              Nelle procedure di immigrazione ogni parola conta: i nostri consulenti e mediatori ti assistono direttamente in italiano, inglese, urdu, arabo, francese, punjabi e hindi, per spiegarti ogni documento con assoluta chiarezza prima dell'inoltro in Questura e Prefettura.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-all shadow-md"
              >
                <span>Richiedi colloquio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#080D16]" />
              </button>

              {onOpenTranslationModal && (
                <button
                  type="button"
                  onClick={onOpenTranslationModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880] bg-white/5 hover:bg-white/10 border border-[#C5A880]/30 rounded-xs transition-colors"
                >
                  <Globe2 className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Traduci Sito (100+ Lingue)</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Interactive Language Cards */}
          <div className="lg:col-span-7">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880] mb-3 flex items-center justify-between">
              <span>LINGUE DI STUDIO DISPONIBILI</span>
              <span>CLICCA PER CAMBIARE</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {LANGUAGES_SUPPORTED.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.name}
                    type="button"
                    onClick={() => {
                      onLanguageChange(lang.code as SupportedLanguage);
                    }}
                    className={`p-3 rounded-lg border text-left transition-all duration-200 flex items-center gap-2.5 ${
                      isActive
                        ? 'bg-[#121E31] border-[#C5A880] ring-1 ring-[#C5A880] text-white shadow-md'
                        : 'bg-[#080D16] border-white/10 hover:border-[#C5A880]/40 text-[#E7DED4]'
                    }`}
                  >
                    <span className="text-xl shrink-0">{lang.flag}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">{lang.name}</p>
                      <p className="text-[10px] text-[#DFC7A5] truncate" dir={lang.rtl ? 'rtl' : 'ltr'}>
                        {lang.nativeName}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

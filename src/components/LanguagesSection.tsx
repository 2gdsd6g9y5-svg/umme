import React from 'react';
import { Globe2, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { LANGUAGES_SUPPORTED, TRANSLATIONS } from '../data/content';

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
  const t = TRANSLATIONS[currentLang as SupportedLanguage] || TRANSLATIONS['it'];

  return (
    <section id="lingue" className="py-28 bg-[#0B111B] text-white border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span>COMUNICAZIONE SENZA BARRIERE</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight text-balance">
              Parliamo la tua lingua. Nessun malinteso nei tuoi documenti.
            </h2>

            <p className="text-base sm:text-lg text-[#E7DED4]/80 leading-relaxed font-light">
              Nelle procedure di immigrazione in Italia, anche una singola parola tradotta in modo errato o un'inesatta interpretazione anagrafica può bloccare un fascicolo per mesi o causare preavvisi di rigetto.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Traduzioni e legalizzazioni certificate</p>
                  <p className="text-xs text-[#E7DED4]/70 font-light">Adeguamento di certificati di nascita, matrimonio, casellari giudiziali e titoli di studio.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Colloqui diretti nella tua lingua madre</p>
                  <p className="text-xs text-[#E7DED4]/70 font-light">Interpreti madrelingua per arabo (classico, egiziano, darija), urdu, francese e inglese.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-white">Chiarezza totale sui moduli da firmare</p>
                  <p className="text-xs text-[#E7DED4]/70 font-light">Ti spieghiamo clausola per clausola ogni modulo prima di qualsiasi inoltro formale.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-all shadow-xl"
              >
                <span>Richiedi colloquio nella tua lingua</span>
                <ArrowRight className="w-4 h-4 text-[#080D16]" />
              </button>

              {onOpenTranslationModal && (
                <button
                  type="button"
                  onClick={onOpenTranslationModal}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#C5A880] bg-white/5 hover:bg-white/10 border border-[#C5A880]/30 rounded-xs transition-colors"
                >
                  <Globe2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Traduci Sito (100+ Lingue)</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Interactive Language Cards */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-4 flex items-center justify-between">
              <span>LINGUE DELLO STUDIO</span>
              <span>SELEZIONA</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LANGUAGES_SUPPORTED.map((lang) => {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.name}
                    type="button"
                    onClick={() => {
                      onLanguageChange(lang.code as SupportedLanguage);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#121E31] border-[#C5A880] ring-1 ring-[#C5A880] text-white shadow-xl'
                        : 'bg-[#080D16] border-white/10 hover:border-[#C5A880]/40 text-[#E7DED4]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{lang.flag}</span>
                        <div>
                          <p className="text-sm font-bold text-white">{lang.name}</p>
                          <p className="text-xs text-[#DFC7A5] font-medium" dir={lang.rtl ? 'rtl' : 'ltr'}>
                            {lang.nativeName}
                          </p>
                        </div>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-[#C5A880] text-[#080D16] font-bold px-2 py-0.5 rounded">
                          Attiva
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#E7DED4]/70 mt-1 line-clamp-1 font-light" dir={lang.rtl ? 'rtl' : 'ltr'}>
                      {lang.note}
                    </p>
                  </button>
                );
              })}

              {/* 100+ Languages Global Trigger Card */}
              {onOpenTranslationModal && (
                <button
                  type="button"
                  onClick={onOpenTranslationModal}
                  className="p-4 rounded-xl border border-dashed border-[#C5A880]/50 bg-[#C5A880]/5 hover:bg-[#C5A880]/15 text-white transition-all sm:col-span-2 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880]">
                      <Globe2 className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white group-hover:text-[#DFC7A5] transition-colors">
                        Non trovi la tua lingua?
                      </div>
                      <div className="text-[11px] text-[#E7DED4]/70">
                        Clicca qui per attivare il traduttore istantaneo in oltre 100 lingue mondiali
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

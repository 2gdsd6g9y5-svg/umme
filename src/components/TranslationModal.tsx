import React, { useState, useMemo } from 'react';
import { X, Search, Globe, Check, Sparkles, AlertCircle } from 'lucide-react';
import { GLOBAL_LANGUAGES, TOP_POPULAR_LANGUAGES } from '../data/languages';
import { SupportedLanguage } from '../types';

interface TranslationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: SupportedLanguage;
  onSelectLanguage: (langCode: string) => void;
}

export const TranslationModal: React.FC<TranslationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectLanguage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'popular' | 'all'>('popular');

  const filteredLanguages = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      return activeTab === 'popular' ? TOP_POPULAR_LANGUAGES : GLOBAL_LANGUAGES;
    }
    return GLOBAL_LANGUAGES.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.nativeName.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q)
    );
  }, [searchQuery, activeTab]);

  if (!isOpen) return null;

  const handleSelect = (code: string) => {
    onSelectLanguage(code);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#10263D]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] border border-[#E7DED4] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-6 py-5 bg-[#10263D] text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
              <Globe className="w-5 h-5 text-[#E7DED4]" />
            </div>
            <div>
              <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium">
                Traduci il Sito · Choose Language
              </h3>
              <p className="text-xs text-[#E7DED4]/80 mt-0.5">
                Traduzione istantanea completa per oltre 100 lingue internazionali
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Chiudi finestra traduzione"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Tabs */}
        <div className="p-5 border-b border-[#E7DED4] bg-white shrink-0 space-y-3.5">
          <div className="relative">
            <Search className="w-4 h-4 text-[#536176] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca qualsiasi lingua del mondo (es. Urdu, العربية, Tagalog, Shqip, বাংলা, Pashto...)"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FCFAF6] border border-[#E7DED4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10263D] focus:border-transparent text-[#10263D] placeholder-[#536176]/70"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#536176] hover:text-[#10263D] px-1.5 py-0.5 rounded"
              >
                Cancella
              </button>
            )}
          </div>

          {/* Quick Filter Tabs */}
          {!searchQuery && (
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('popular')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'popular'
                      ? 'bg-[#10263D] text-white shadow-xs'
                      : 'bg-[#FCFAF6] text-[#536176] hover:text-[#10263D] border border-[#E7DED4]'
                  }`}
                >
                  ⭐ Principali Comunità in Italia ({TOP_POPULAR_LANGUAGES.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                    activeTab === 'all'
                      ? 'bg-[#10263D] text-white shadow-xs'
                      : 'bg-[#FCFAF6] text-[#536176] hover:text-[#10263D] border border-[#E7DED4]'
                  }`}
                >
                  🌐 Tutte le Lingue del Mondo ({GLOBAL_LANGUAGES.length})
                </button>
              </div>
              <span className="text-[11px] text-[#536176] hidden sm:inline">
                Supporto RTL & multilingue attivo
              </span>
            </div>
          )}
        </div>

        {/* Language Grid */}
        <div className="p-5 overflow-y-auto flex-1 bg-[#FCFAF6]">
          {filteredLanguages.length === 0 ? (
            <div className="py-12 text-center text-[#536176] space-y-2">
              <AlertCircle className="w-8 h-8 text-[#B45F42] mx-auto opacity-80" />
              <p className="text-sm font-medium">Nessuna lingua trovata per &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-xs text-[#536176]/80">Prova a cercare in italiano, in inglese o con il nome nativo.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {filteredLanguages.map((lang) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang.code)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all group ${
                      isSelected
                        ? 'bg-[#10263D] border-[#10263D] text-white shadow-md'
                        : 'bg-white border-[#E7DED4] hover:border-[#10263D]/40 hover:bg-white/90 text-[#10263D] hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xl shrink-0" role="img" aria-label={lang.name}>
                        {lang.flag}
                      </span>
                      <div className="min-w-0">
                        <div
                          className={`text-sm font-semibold truncate ${
                            isSelected ? 'text-white' : 'text-[#10263D]'
                          }`}
                        >
                          {lang.name}
                        </div>
                        <div
                          className={`text-xs truncate ${
                            isSelected ? 'text-[#E7DED4]' : 'text-[#536176]'
                          }`}
                          dir={lang.isRtl ? 'rtl' : 'ltr'}
                        >
                          {lang.nativeName}
                        </div>
                      </div>
                    </div>

                    {isSelected ? (
                      <Check className="w-4 h-4 text-white shrink-0 ml-2" />
                    ) : (
                      <span className="text-[10px] uppercase font-mono font-bold text-[#536176]/60 group-hover:text-[#10263D] shrink-0 ml-2">
                        {lang.code.toUpperCase()}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info banner */}
        <div className="px-6 py-3.5 bg-white border-t border-[#E7DED4] flex items-center justify-between text-xs text-[#536176] shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B45F42]" />
            <span>Traduzione immediata di tutta la pagina, testi legali e moduli</span>
          </div>
          <button
            type="button"
            onClick={() => handleSelect('it')}
            className="text-xs font-semibold text-[#10263D] hover:text-[#B45F42] underline underline-offset-2"
          >
            Ripristina Italiano
          </button>
        </div>
      </div>
    </div>
  );
};

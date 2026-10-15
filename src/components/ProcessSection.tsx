import React from 'react';
import { CheckCircle, FileSearch, Send, RefreshCw, ArrowRight } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { PROCESS_STEPS, TRANSLATIONS } from '../data/content';

interface ProcessSectionProps {
  currentLang: SupportedLanguage;
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  currentLang,
  onOpenConsultation,
}) => {
  const t = TRANSLATIONS[currentLang];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileSearch className="w-5 h-5 text-[#C5A880]" />;
      case 1:
        return <CheckCircle className="w-5 h-5 text-[#C5A880]" />;
      case 2:
        return <Send className="w-5 h-5 text-[#C5A880]" />;
      case 3:
        return <RefreshCw className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section id="come-funziona" className="py-28 bg-[#080D16] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span>METODO DI LAVORO</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight text-balance">
            Quattro passaggi chiari, nessun imprevisto
          </h2>

          <p className="text-base sm:text-lg text-[#E7DED4]/80 leading-relaxed font-light">
            Dalla prima valutazione preliminare al conseguimento dell'obiettivo: seguiamo un metodo rigoroso e collaudato per azzerare gli errori e prevenire dinieghi o ritardi.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between p-7 rounded-xl bg-[#0D1624] border border-white/10 hover:border-[#C5A880]/60 transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Header step index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded bg-[#080D16] border border-white/10 group-hover:border-[#C5A880]/40 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-mono text-2xl font-light text-[#C5A880]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#DFC7A5] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#E7DED4]/70 leading-relaxed mb-4 font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-[#C5A880] font-mono">
                <span className="text-white/60 font-sans">Focus: </span>
                <span>{step.details}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fast CTA strip */}
        <div className="mt-16 p-7 sm:p-9 rounded-xl bg-[#0D1624] border border-[#C5A880]/30 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-editorial text-xl sm:text-2xl font-medium text-white">
              Hai una pratica bloccata o desideri presentare una nuova istanza?
            </h4>
            <p className="text-xs sm:text-sm text-[#E7DED4]/80 font-light">
              Prenota una prima analisi orientativa per verificare i requisiti previsti dal Testo Unico Immigrazione.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-all whitespace-nowrap shadow-xl active:scale-95 shrink-0"
          >
            <span>{t.nav.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

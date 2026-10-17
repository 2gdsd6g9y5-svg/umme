import React from 'react';
import { CheckCircle, FileSearch, Send, RefreshCw } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  currentLang: SupportedLanguage;
  onOpenConsultation?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileSearch className="w-4 h-4 text-[#C5A880]" />;
      case 1:
        return <CheckCircle className="w-4 h-4 text-[#C5A880]" />;
      case 2:
        return <Send className="w-4 h-4 text-[#C5A880]" />;
      case 3:
        return <RefreshCw className="w-4 h-4 text-[#C5A880]" />;
      default:
        return <CheckCircle className="w-4 h-4 text-[#C5A880]" />;
    }
  };

  return (
    <section id="come-funziona" className="py-10 sm:py-12 bg-[#080D16] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span>METODO DI LAVORO</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            Quattro passaggi chiari, nessun imprevisto
          </h2>

          <p className="text-xs sm:text-sm text-[#E7DED4]/80 leading-relaxed font-light">
            Dalla prima valutazione preliminare al rilascio del documento: metodo rigoroso e collaudato per azzerare errori e prevenire ritardi con Questura e Prefettura.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between p-5 rounded-xl bg-[#0D1624] border border-white/10 hover:border-[#C5A880]/60 transition-all duration-200 shadow-md group"
            >
              <div>
                {/* Header step index */}
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/10">
                  <div className="p-2 rounded bg-[#080D16] border border-white/10 group-hover:border-[#C5A880]/40 transition-colors">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-mono text-xl font-light text-[#C5A880]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-editorial text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#DFC7A5] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-[#E7DED4]/70 leading-relaxed mb-3 font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10 text-[11px] text-[#C5A880] font-mono">
                <span className="text-white/60 font-sans">Focus: </span>
                <span>{step.details}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

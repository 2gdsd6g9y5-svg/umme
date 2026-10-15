import React from 'react';
import { ShieldCheck, Scale, FileLock2, HeartHandshake } from 'lucide-react';
import { ETHICS_POINTS } from '../data/content';

export const EthicsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#080D16] text-white border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span className="font-law">DEONTOLOGIA & RIGORE GIURIDICO</span>
          </div>

          <h2 className="font-law text-3xl sm:text-4xl font-semibold text-white leading-tight tracking-[0.06em]">
            Esperienza, trasparenza e collaborazione con professionisti legali
          </h2>

          <p className="text-base text-[#E7DED4]/80 leading-relaxed font-light">
            Rifiutiamo qualsiasi promessa ingannevole o scorciatoia burocratica. Il nostro impegno si fonda sul rispetto rigoroso della legge italiana e sulla sicurezza giuridica della tua persona e della tua famiglia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ETHICS_POINTS.map((pt, idx) => {
            const icons = [
              <Scale key={0} className="w-5 h-5 text-[#C5A880]" />,
              <ShieldCheck key={1} className="w-5 h-5 text-[#C5A880]" />,
              <FileLock2 key={2} className="w-5 h-5 text-[#C5A880]" />,
              <HeartHandshake key={3} className="w-5 h-5 text-[#C5A880]" />,
            ];

            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0D1624] border border-white/10 hover:border-[#C5A880]/50 transition-colors shadow-lg"
              >
                <div className="p-2.5 rounded-lg bg-[#080D16] border border-white/10 w-fit mb-4">
                  {icons[idx]}
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-white mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#E7DED4]/70 leading-relaxed font-light">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

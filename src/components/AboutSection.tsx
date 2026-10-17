import React from 'react';
import { Shield, Scale, Clock, Award, Building } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../data/content';

const elegantOfficeImg = '/images/elegant_law_office.jpg';

interface AboutSectionProps {
  currentLang: SupportedLanguage;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['it'];

  const pillars = [
    {
      icon: <Scale className="w-4 h-4 text-[#C5A880]" />,
      title: 'Rigore Giuridico',
      desc: 'Pratiche istruite nel rispetto del T.U. Immigrazione (D.Lgs. 286/98).',
    },
    {
      icon: <Shield className="w-4 h-4 text-[#C5A880]" />,
      title: 'Tutela Deontologica',
      desc: 'Supervisione procedurale e massimo segreto professionale.',
    },
    {
      icon: <Award className="w-4 h-4 text-[#C5A880]" />,
      title: 'Trasparenza Reale',
      desc: 'Valutazione preventiva onesta sui requisiti di reddito e documenti.',
    },
    {
      icon: <Clock className="w-4 h-4 text-[#C5A880]" />,
      title: 'Presidio Locale',
      desc: 'Interlocuzione diretta con Prefettura e Questura di Milano.',
    },
  ];

  return (
    <section id="chi-siamo" className="py-10 sm:py-12 bg-[#0D1624] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="font-law">STUDIO IMMIGRAZIONE · MILANO</span>
            </div>

            <h2 className="font-law text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-[0.04em]">
              {t.about.title}
            </h2>

            <p className="text-sm sm:text-base text-[#DFC7A5] font-light leading-relaxed font-editorial italic">
              {t.about.lead}
            </p>

            <div className="text-xs sm:text-sm text-[#E7DED4]/85 leading-relaxed font-light space-y-2">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>

          {/* Right Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#C5A880]/30 bg-[#080D16] group">
              <img
                src={elegantOfficeImg}
                alt="Studio legale prestigioso a Milano"
                className="w-full h-full object-cover aspect-[16/10] filter brightness-[0.95] contrast-[1.05] transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes('office_interior_real.jpg')) {
                    target.src = '/images/office_interior_real.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="font-cinzel text-sm sm:text-base font-semibold text-white">
                  Sede Operativa Milano · Ricevimento su Appuntamento
                </div>
                <div className="mt-1 text-xs text-[#E7DED4]/80 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Consulenze individuali, pratiche per famiglie e imprese</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars in a Sleek Horizontal Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {pillars.map((p, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#080D16] border border-white/10 hover:border-[#C5A880]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                {p.icon}
                <h4 className="font-semibold text-xs text-white">{p.title}</h4>
              </div>
              <p className="text-[11px] text-[#E7DED4]/70 leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Compass, FileCheck, Users, Award, Building2, ShieldAlert, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem, SupportedLanguage } from '../types';
import { SERVICES, TRANSLATIONS } from '../data/content';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  currentLang: SupportedLanguage;
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onOpenConsultationWithService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = TRANSLATIONS[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C5A880]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#C5A880]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#C5A880]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#C5A880]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#C5A880]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <FileCheck className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section id="servizi" className="py-28 bg-[#0B111B] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span className="font-law">STUDIO IMMIGRAZIONE · AREE DI PRATICA</span>
          </div>

          <h2 className="font-law text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[0.06em]">
            {t.servicesHeading.title}
          </h2>

          <p className="text-base sm:text-lg text-[#E7DED4]/80 leading-relaxed font-light">
            {t.servicesHeading.subtitle}
          </p>
        </div>

        {/* 6 Services Grid in Luxury Dark Directory Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-xl bg-[#0F1827] hover:bg-[#131F33] border border-white/10 hover:border-[#C5A880]/60 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Top index and icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded bg-[#080D16] border border-white/10 group-hover:border-[#C5A880]/50 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs tracking-widest text-[#C5A880] uppercase">
                      SETTORE {service.code}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">MILANO</span>
                </div>

                {/* Service Title */}
                <h3 className="font-editorial text-2xl font-bold text-white mb-2 group-hover:text-[#DFC7A5] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-medium text-[#C5A880] mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#E7DED4]/80 leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Bullet list of key features */}
                <ul className="space-y-2 mb-6 border-t border-white/10 pt-4">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#E7DED4]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to open Details Modal */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#DFC7A5] transition-colors focus-visible:outline-none py-1"
                >
                  <span>Requisiti & Normativa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenConsultationWithService(service.title)}
                  className="text-xs text-[#C5A880] hover:text-white underline underline-offset-4 transition-colors font-medium"
                >
                  Avvia Pratica
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectForConsultation={onOpenConsultationWithService}
        />
      )}
    </section>
  );
};

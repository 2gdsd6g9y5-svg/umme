import React from 'react';
import { Shield, Scale, Clock, Award, Building, Check, Users, FileCheck2, HeartHandshake } from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../data/content';

const elegantOfficeImg = '/images/elegant_law_office.jpg';
const immigrantFamilyImg = '/images/immigrants_citizenship.jpg';
const multiculturalProfessionalsImg = '/images/multicultural_work.jpg';

interface AboutSectionProps {
  currentLang: SupportedLanguage;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['it'];

  return (
    <section id="chi-siamo" className="py-28 bg-[#0D1624] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Top Block: Office & Legal Rigor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="font-law">STUDIO IMMIGRAZIONE · MILANO</span>
            </div>

            <h2 className="font-law text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[0.08em]">
              {t.about.title}
            </h2>

            <p className="text-lg text-[#DFC7A5] font-light leading-relaxed font-editorial italic">
              {t.about.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#E7DED4]/85 leading-relaxed font-light">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* 4 Pillars Grid in Dark Luxury Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#080D16] border border-white/10 hover:border-[#C5A880]/40 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-white/5 text-[#C5A880]">
                    <Scale className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <h4 className="font-semibold text-sm text-white font-cinzel">Rigore Giuridico</h4>
                </div>
                <p className="text-xs text-[#E7DED4]/70 leading-relaxed font-light">
                  Pratiche istruite nel rispetto del Testo Unico sull'Immigrazione (D.Lgs. 286/98) e Legge 91/92 sulla Cittadinanza.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#080D16] border border-white/10 hover:border-[#C5A880]/40 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-white/5 text-[#C5A880]">
                    <Shield className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <h4 className="font-semibold text-sm text-white font-cinzel">Tutela Deontologica</h4>
                </div>
                <p className="text-xs text-[#E7DED4]/70 leading-relaxed font-light">
                  Supervisione procedurale e conformità ai più elevati canoni di etica e riservatezza forense.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#080D16] border border-white/10 hover:border-[#C5A880]/40 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-white/5 text-[#C5A880]">
                    <Clock className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <h4 className="font-semibold text-sm text-white font-cinzel">Interlocuzione Istituzionale</h4>
                </div>
                <p className="text-xs text-[#E7DED4]/70 leading-relaxed font-light">
                  Monitoraggio tempestivo dei fascicoli presso Prefettura e Questura di Milano.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#080D16] border border-white/10 hover:border-[#C5A880]/40 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-white/5 text-[#C5A880]">
                    <Award className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <h4 className="font-semibold text-sm text-white font-cinzel">Trasparenza Assoluta</h4>
                </div>
                <p className="text-xs text-[#E7DED4]/70 leading-relaxed font-light">
                  Valutazione preventiva reale sui requisiti di reddito, residenza e documenti del paese d'origine.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Frame: Ultra Elegant Law Office */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C5A880]/40 bg-[#080D16] group">
              <img
                src={elegantOfficeImg}
                alt="Studio legale prestigioso e sala riunioni con vista a Milano"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[16/11] filter brightness-[0.95] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes('office_interior_real.jpg')) {
                    target.src = '/images/office_interior_real.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-[#080D16]/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-[10px] font-law tracking-widest text-[#C5A880] mb-1">
                  SEDE OPERATIVA · MILANO
                </div>
                <div className="font-cinzel text-lg sm:text-xl font-semibold text-white">
                  Sala Consultazione & Consiglio
                </div>
                <div className="mt-2 text-xs text-[#E7DED4]/85 flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Via Ampère 126 · Ricevimento Riservato su Appuntamento</span>
                </div>
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#080D16] border border-[#C5A880]/40 p-4 rounded-xl shadow-2xl items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] shrink-0">
                <Check className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white font-cinzel">Sede Istituzionale a Milano</div>
                <div className="text-[10px] text-[#E7DED4]/70">Consulenze legali e documentali dedicate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Block: Photos Representing Foreigners and Italy (Immigrants, Integration & Citizenship) */}
        <div className="pt-12 border-t border-white/10">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880] mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="font-law">STRANIERI IN ITALIA · INTEGRAZIONE E CITTADINANZA</span>
            </div>
            <h3 className="font-law text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-[0.06em]">
              Accompagniamo gli Stranieri nel loro Percorso di Vita in Italia
            </h3>
            <p className="text-[#E7DED4]/80 text-sm sm:text-base font-light mt-3 leading-relaxed">
              Dall'ingresso per lavoro e studio al ricongiungimento dei propri cari, fino al traguardo solenne del giuramento per la Cittadinanza Italiana. Storie autentiche di integrazione, dignità e serenità giuridica sul territorio italiano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Immigrant Family with Italian Citizenship & Residency Documents */}
            <div className="group rounded-2xl overflow-hidden border border-[#C5A880]/30 bg-[#080D16] shadow-2xl flex flex-col transition-all duration-300 hover:border-[#C5A880]/60">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={immigrantFamilyImg}
                  alt="Famiglia straniera in Italia con documenti di soggiorno e cittadinanza italiana"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.96]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.includes('immigrant_family.jpg')) {
                      target.src = '/images/immigrant_family.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#080D16]/90 border border-[#C5A880]/40 rounded text-[10px] font-law tracking-wider text-[#DFC7A5]">
                  CITTADINANZA & FAMIGLIA
                </span>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-mono mb-1.5">
                    <HeartHandshake className="w-4 h-4 text-[#C5A880]" />
                    <span>COESIONE FAMILIARE & IUS SANGUINIS / RESIDENZA</span>
                  </div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-semibold text-white">
                    Il Futuro della Tua Famiglia in Italia
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E7DED4]/75 font-light leading-relaxed mt-2">
                    Curiamo ogni dettaglio delle istanze di ricongiungimento familiare e di acquisto della cittadinanza italiana per residenza decennale, matrimonio o discendenza, verificando preventivamente redditi, alloggio e assenza di carichi pendenti.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#DFC7A5]">
                  <span className="inline-flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-[#C5A880]" />
                    <span>Conformità Ministero dell'Interno</span>
                  </span>
                  <span className="font-mono text-[11px] text-white/50">LECCE 91/1992</span>
                </div>
              </div>
            </div>

            {/* Card 2: Diverse Foreign Professionals & Community in Milan */}
            <div className="group rounded-2xl overflow-hidden border border-[#C5A880]/30 bg-[#080D16] shadow-2xl flex flex-col transition-all duration-300 hover:border-[#C5A880]/60">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={multiculturalProfessionalsImg}
                  alt="Gruppo di giovani lavoratori e professionisti stranieri a Milano"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.96]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.includes('immigrants_diverse_group.jpg')) {
                      target.src = '/images/immigrants_diverse_group.jpg';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#080D16]/90 border border-[#C5A880]/40 rounded text-[10px] font-law tracking-wider text-[#DFC7A5]">
                  LAVORO, STUDIO & FLUSSI
                </span>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-mono mb-1.5">
                    <Users className="w-4 h-4 text-[#C5A880]" />
                    <span>PERMESSI LAVORO SUBORDINATO, AUTONOMO & CONVERSIONI</span>
                  </div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-semibold text-white">
                    Integrazione Professionale & Talenti Internazionali a Milano
                  </h4>
                  <p className="text-xs sm:text-sm text-[#E7DED4]/75 font-light leading-relaxed mt-2">
                    Assistiamo professionisti stranieri, neolaureati e lavoratori specializzati nelle procedure del Decreto Flussi, Carta Blu UE, conversione del permesso di studio in lavoro subordinato e aperture di posizioni professionali in Italia.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#DFC7A5]">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C5A880]" />
                    <span>Diritto di soggiorno e lavoro regolare</span>
                  </span>
                  <span className="font-mono text-[11px] text-white/50">D.LGS 286/1998</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

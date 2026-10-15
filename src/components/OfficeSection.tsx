import React from 'react';
import { MapPin, Navigation, Train, Clock, ExternalLink, Building2, Landmark } from 'lucide-react';
import { CONTACT_INFO, TRANSLATIONS } from '../data/content';
import { SupportedLanguage } from '../types';

const officeFacadeImg = '/images/milan_street_palazzi.jpg';
const milanDuomoImg = '/images/milan_duomo.jpg';

interface OfficeSectionProps {
  currentLang: SupportedLanguage;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['it'];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT_INFO.address
  )}`;

  return (
    <section id="ufficio" className="py-28 bg-[#0D1624] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office description & Transit info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="font-law">STUDIO IMMIGRAZIONE · MILANO</span>
            </div>

            <h2 className="font-law text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[0.06em]">
              {t.officeHeading.title}
            </h2>

            <p className="text-base text-[#E7DED4]/85 leading-relaxed font-light">
              Il nostro ufficio a Milano si trova nella prestigiosa e tranquilla zona di Città Studi, facilmente raggiungibile con la metropolitana e con tutti i principali mezzi pubblici. Riceviamo su appuntamento per dedicare a ciascun fascicolo il tempo e l'attenzione necessari.
            </p>

            {/* Address & Quick Cards in Dark Luxury Theme */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#080D16] border border-white/10 flex items-start gap-3.5 shadow-lg">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-law tracking-wider text-[#C5A880]">Indirizzo dello Studio</span>
                  <p className="text-sm font-semibold text-white">{CONTACT_INFO.address}</p>
                  <p className="text-xs text-[#E7DED4]/70">Zona Città Studi / Piola - Milano Est</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080D16] border border-white/10 flex items-start gap-3.5 shadow-lg">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-law tracking-wider text-[#C5A880]">Orari di Ricevimento</span>
                  <p className="text-xs text-[#E7DED4]/80 leading-relaxed">{CONTACT_INFO.hours}</p>
                  <p className="text-[11px] text-[#DFC7A5]">Si raccomanda la prenotazione anticipata dell'appuntamento.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080D16] border border-white/10 flex items-start gap-3.5 shadow-lg">
                <Train className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-law tracking-wider text-[#C5A880]">Trasporti e Collegamenti</span>
                  <ul className="text-xs text-[#E7DED4]/80 space-y-1 font-light">
                    <li><strong className="text-white">Metropolitana:</strong> Linea M2 (Verde) — Stazioni Piola (5 min) o Lambrate FS (7 min a piedi).</li>
                    <li><strong className="text-white">Treno:</strong> Stazione FS Milano Lambrate (collegamenti regionali e suburbani).</li>
                    <li><strong className="text-white">Linee bus & tram:</strong> Linee 39, 54, 62, 93 a pochi passi.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-all shadow-xl"
              >
                <Navigation className="w-4 h-4 text-[#080D16]" />
                <span>Apri indicazioni su Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Building Facade Photograph & Map embed */}
          <div className="lg:col-span-6 space-y-6">
            {/* Building Photo */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#C5A880]/30 bg-[#080D16]">
              <img
                src={officeFacadeImg}
                alt="Elegante via storica di Milano con splendidi palazzi d'epoca e architettura classica"
                className="w-full h-72 sm:h-84 object-cover filter brightness-[0.96] contrast-[1.02] hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes('milan_facade_real.jpg')) {
                    target.src = '/images/milan_facade_real.jpg';
                  }
                }}
              />
              <div className="p-4 bg-[#080D16] text-white flex items-center justify-between text-xs border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#C5A880]" />
                  <span className="font-semibold text-white">{CONTACT_INFO.address}</span>
                </div>
                <span className="text-[#C5A880] font-law text-[11px] font-semibold tracking-wider">MILANO · CITTÀ STUDI</span>
              </div>
            </div>

            {/* Map Frame (OpenStreetMap embed for Milan, Via Ampère) */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#080D16]">
              <div className="p-3 bg-[#080D16] border-b border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-white font-cinzel">Mappa dello Studio · Via Ampère 126</span>
                <span className="text-[11px] text-[#C5A880] font-mono">Milano Lambrate / Città Studi</span>
              </div>
              <iframe
                title="Mappa Sede Studio Immigrazione Milano"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.222%2C45.478%2C9.238%2C45.488&amp;layer=mapnik&amp;marker=45.4831%2C9.2304"
              />
            </div>
          </div>
        </div>

        {/* Milan Spotlight Banner with Milan Photo */}
        <div className="relative rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-2xl bg-[#080D16]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative h-72 lg:h-96">
              <img
                src={milanDuomoImg}
                alt="Piazza del Duomo a Milano al tramonto"
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes('milan_hero_real.jpg')) {
                    target.src = '/images/milan_hero_real.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#080D16]/30 to-[#080D16] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-transparent lg:hidden" />
            </div>
            <div className="lg:col-span-5 p-8 lg:p-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-law tracking-widest uppercase text-[#C5A880]">
                <Landmark className="w-4 h-4 text-[#C5A880]" />
                <span>PRESENZA TERRITORIALE · MILANO</span>
              </div>
              <h3 className="font-law text-2xl sm:text-3xl font-semibold text-white tracking-[0.06em]">
                Nel Cuore Istituzionale della Città di Milano
              </h3>
              <p className="text-sm text-[#E7DED4]/80 leading-relaxed font-light">
                Operiamo a stretto contatto con gli uffici competenti di Milano (Prefettura, Questura - Ufficio Immigrazione di Via Montebello e Commissariati di zona, Tribunale Ordinario e Sezione Specializzata in Materia di Immigrazione).
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-[#DFC7A5] font-cinzel">
                  Prefettura di Milano
                </span>
                <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-[#DFC7A5] font-cinzel">
                  Questura di Milano
                </span>
                <span className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-[#DFC7A5] font-cinzel">
                  Sportello Unico Immigrazione (SUI)
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

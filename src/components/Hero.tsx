import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Award, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { SupportedLanguage } from '../types';

const heroBg = '/images/milan_duomo.jpg';

interface HeroProps {
  currentLang: SupportedLanguage;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang: _currentLang, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const keyFocuses = [
    { title: 'Cittadinanza Italiana', desc: 'Residenza decennale, matrimonio e discendenza ius sanguinis' },
    { title: 'Permessi & Flussi', desc: 'Rinnovi, conversioni da studio a lavoro e decreti flussi' },
    { title: 'Ricongiungimento', desc: 'Nulla osta SUI, coesione familiare e idoneità alloggiativa' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#080D16] text-white flex flex-col justify-between pt-32 pb-10 overflow-hidden select-none"
    >
      {/* 1. Background Architectural Layer with Milan Duomo Panoramic View */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Piazza del Duomo a Milano al crepuscolo - Sede e punto di riferimento dello Studio Immigrazione"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.38] contrast-[1.15]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.includes('milan_hero_real.jpg')) {
              target.src = '/images/milan_hero_real.jpg';
            }
          }}
        />
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-[#080D16]/65 to-[#080D16]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080D16] via-[#080D16]/85 to-transparent" />
        {/* Subtle Warm Amber/Gold Ambient Glow in Center-Bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-t from-[#C5A880]/15 via-[#B45F42]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* 2. Receding 3D Perspective Grid Floor (The Signature Joseph Law Architectural Element) */}
      <div className="absolute inset-x-0 bottom-0 h-[38vh] hero-perspective-container pointer-events-none overflow-hidden z-[1]">
        <div className="w-[160%] -left-[30%] absolute inset-0 hero-3d-grid h-[200%]" />
        {/* Soft fade-out overlay at horizon */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D16] via-transparent to-[#080D16]" />
      </div>

      {/* 3. Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Grand Typography & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Subtitle / Kicker */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1.5px] bg-[#C5A880]" />
              <span className="font-law text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
                ITALIA IMMIGRAZIONE · MILANO
              </span>
            </div>

            {/* Massive Formal Legal Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-medium text-white tracking-tight leading-[1.05] drop-shadow-md">
              <span className="block font-law text-3xl sm:text-5xl lg:text-[3.8rem] text-white tracking-[0.12em] font-bold">
                CONSULENZA LEGALE
              </span>
              <span className="block font-editorial italic font-normal text-[#DFC7A5] text-3xl sm:text-4xl lg:text-[3.25rem] my-1">
                in Diritto dell'Immigrazione
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-[2.6rem] text-[#F3EFEA] font-light mt-1 font-sans tracking-tight">
                PER STRANIERI E IMPRESE IN ITALIA.
              </span>
            </h1>

            {/* Explanatory Editorial Paragraph */}
            <p className="text-base sm:text-lg text-[#E7DED4]/90 font-light leading-relaxed max-w-2xl pt-2">
              Dalla valutazione preventiva di fattibilità all’assistenza documentale completa per visti, permessi di soggiorno, ricongiungimenti e cittadinanza italiana. Rigore normativo, precisione ed etica professionale.
            </p>

            {/* Emergency / Art. 18-ter Badge in Hero */}
            <div className="pt-1">
              <a
                href="#art-18-ter"
                className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#B45F42]/20 border border-[#B45F42]/60 hover:bg-[#B45F42]/35 transition-all text-xs text-[#FDE68A] group shadow-lg"
              >
                <span className="px-2 py-0.5 rounded bg-[#B45F42] text-white text-[10px] font-mono font-bold tracking-wider">
                  ART. 18-TER T.U.I.
                </span>
                <span className="font-medium text-white/95">
                  Vittima di sfruttamento lavorativo o senza documenti?{' '}
                  <span className="underline decoration-[#FDE68A] text-[#FDE68A] font-semibold group-hover:text-white transition-colors">
                    Ottieni il permesso di soggiorno regolare →
                  </span>
                </span>
              </a>
            </div>

            {/* Dual CTAs: High Contrast White Button + Luxury Ghost Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Solid White Button (Direct matching screenshot) */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#080D16] bg-white hover:bg-[#F3EFEA] transition-all duration-200 shadow-2xl active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C5A880]"
              >
                <span>Richiedi una Consulenza</span>
                <ArrowRight className="w-4 h-4 text-[#080D16] transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Ghost Button */}
              <a
                href="#servizi"
                className="inline-flex items-center justify-center px-8 py-4 text-xs sm:text-sm font-medium tracking-wider uppercase text-white hover:text-[#DFC7A5] bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#C5A880]/60 transition-all backdrop-blur-xs focus-visible:outline-none"
              >
                <span>Aree di Competenza</span>
              </a>

              {/* Office Location Pill */}
              <div className="hidden sm:inline-flex items-center gap-2 text-xs text-[#C5A880] px-4 py-3 bg-[#0D1624]/80 border border-[#C5A880]/20 rounded-xs">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="font-mono text-[11px] tracking-wider">MILANO · VIA AMPÈRE 126</span>
              </div>
            </div>

            {/* Micro Tabs: 3 Main Pillars with Quick Insights */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {keyFocuses.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-3 rounded transition-all border ${
                    activeTab === idx
                      ? 'bg-white/10 border-[#C5A880]/60'
                      : 'bg-black/20 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">{item.title}</span>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${activeTab === idx ? 'text-[#C5A880]' : 'text-white/30'}`} />
                  </div>
                  <p className="text-[11px] text-[#E7DED4]/70 leading-snug">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Founder Authority Box with Elegant Signature */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="relative p-7 sm:p-8 bg-[#0D1624]/90 backdrop-blur-md border border-[#C5A880]/30 rounded-xl shadow-2xl space-y-6">
              {/* Subtle top badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#C5A880] uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                  <span>STUDIO QUALIFICATO</span>
                </div>
                <span className="text-[10px] font-mono text-white/50">EST. 2013</span>
              </div>

              {/* Quote / Deontological pledge */}
              <blockquote className="font-editorial text-lg sm:text-xl text-[#F3EFEA] italic leading-snug">
                “Ogni pratica rappresenta una persona, una famiglia, un progetto di vita. Trattiamo ogni istanza con il massimo rigore procedurale e rispetto istituzionale.”
              </blockquote>

              {/* Founder Cursive Signature & Name (Joseph Law signature element) */}
              <div className="pt-2 flex items-center justify-between">
                <div>
                  {/* Handwritten Calligraphy Signature */}
                  <div className="font-signature text-4xl sm:text-5xl text-[#DFC7A5] tracking-wide select-none">
                    Samad Chaudhry
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white mt-1">
                    Samad Chaudhry
                  </div>
                  <div className="text-[11px] text-[#C5A880] tracking-wide">
                    Fondatore & Consulente Immigrazione · 11 anni di esperienza
                  </div>
                </div>

                {/* Circular Gold Seal */}
                <div className="w-14 h-14 rounded-full border border-[#C5A880]/50 flex items-center justify-center p-1 shrink-0 bg-[#080D16]/50">
                  <div className="w-full h-full rounded-full border border-[#C5A880]/30 flex flex-col items-center justify-center text-[7px] font-mono tracking-tighter text-[#C5A880] uppercase text-center leading-none">
                    <Award className="w-4 h-4 text-[#C5A880] mb-0.5" />
                    <span>MILANO</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Contact button */}
              <a
                href="https://wa.me/393532136704"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-2.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#E7DED4] hover:text-white transition-colors"
              >
                <span>Scrivici su WhatsApp (+39 353 213 6704)</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Metrics Bar with Roman / Numerals and Gold Accents */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 w-full pt-12 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#C5A880] tracking-widest uppercase">01 / AFFIDABILITÀ</div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-tight">99.2%</div>
            <p className="text-xs text-[#E7DED4]/70">Tasso di esito positivo nelle pratiche istruite</p>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#C5A880] tracking-widest uppercase">02 / CASISTICA</div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-tight">1,200+</div>
            <p className="text-xs text-[#E7DED4]/70">Pratiche di soggiorno e cittadinanza concluse</p>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#C5A880] tracking-widest uppercase">03 / RADICAMENTO</div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-tight">11+ Anni</div>
            <p className="text-xs text-[#E7DED4]/70">Esperienza diretta con Questura e Prefettura di Milano</p>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] font-mono text-[#C5A880] tracking-widest uppercase">04 / SUPPORTO</div>
            <div className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-tight">Multi-lingua</div>
            <p className="text-xs text-[#E7DED4]/70">Consulenze dirette in Italiano, Inglese, Urdu, Punjabi e Arabo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

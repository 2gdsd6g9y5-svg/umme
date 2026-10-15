import React from 'react';
import { Phone, Mail, MapPin, Scale, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../data/content';
import { SupportedLanguage } from '../types';

interface FooterProps {
  currentLang: SupportedLanguage;
  onOpenConsultation: () => void;
  isAdmin?: boolean;
  onOpenAdmin?: () => void;
  onLogoutAdmin?: () => void;
  onOpenSitemap?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang: _currentLang,
  onOpenConsultation,
  isAdmin = false,
  onOpenAdmin,
  onLogoutAdmin,
  onOpenSitemap,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080E] text-[#E7DED4] border-t border-white/10">
      {/* Upper Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Overview (Col 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo Italia Immigrazione"
                className="w-10 h-10 object-contain drop-shadow-md"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('/logo.svg')) {
                    target.src = '/logo.svg';
                  }
                }}
              />
              <div className="flex flex-col">
                <span className="font-law text-xl font-semibold text-white tracking-[0.16em] uppercase leading-tight">
                  Italia Immigrazione
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#C5A880]">
                  MILANO · TUTELA LEGALE & DIRITTO DELL'IMMIGRAZIONE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E7DED4]/70 leading-relaxed font-light">
              Orientamento specialistico, tutela delle vittime di sfruttamento lavorativo con Art. 18-ter, supporto documentale e assistenza nelle procedure di immigrazione, visti, permessi di soggiorno, ricongiungimenti e cittadinanza italiana a Milano.
            </p>

            <div className="pt-2 text-xs space-y-2.5">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-center gap-2.5 text-white hover:text-[#C5A880] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="font-mono tabular-nums">{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 text-white hover:text-[#C5A880] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span className="font-mono">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2.5 text-[#E7DED4]/70">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              Navigazione
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li>
                <a href="#art-18-ter" className="text-[#DFC7A5] font-semibold hover:text-white transition-colors">
                  Art. 18-ter Sfruttamento
                </a>
              </li>
              <li><a href="#chi-siamo" className="hover:text-white transition-colors">Chi siamo</a></li>
              <li><a href="#servizi" className="hover:text-white transition-colors">Aree di Pratica</a></li>
              <li><a href="#come-funziona" className="hover:text-white transition-colors">Metodo di lavoro</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">I Nostri Professionisti</a></li>
              <li><a href="#lingue" className="hover:text-white transition-colors">Lingue dello Studio</a></li>
              <li><a href="#recensioni" className="hover:text-white transition-colors text-[#C5A880]">Storie di Successo & Recensioni</a></li>
              <li><a href="#ufficio" className="hover:text-white transition-colors">Sede di Milano</a></li>
              <li><a href="#contatti" className="hover:text-white transition-colors">Contatti</a></li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenSitemap}
                  className="text-[#C5A880] hover:text-white transition-colors flex items-center gap-1.5 font-medium group text-left"
                >
                  <span className="underline underline-offset-2">Mappa del Sito (Sitemap XML)</span>
                  <span className="text-[9px] px-1 py-0.2 bg-[#C5A880]/20 text-[#DFC7A5] rounded border border-[#C5A880]/30 font-mono">
                    SEO Milano
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              Aree di Competenza
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#servizi" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening & Consultation CTA (Col 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              Studio & Ricevimento
            </h4>
            <p className="text-xs text-[#E7DED4]/70 leading-relaxed font-light">
              Ricevimento su appuntamento presso la nostra sede di Milano (Città Studi / M2 Piola).
            </p>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-colors text-center shadow-lg"
            >
              Richiedi appuntamento
            </button>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-[#E7DED4]/60 font-mono">Lun-Sab 09:30-18:30</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 rounded bg-white/5 hover:bg-white/10 text-white transition-colors"
                aria-label="Torna in cima alla pagina"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Deontological Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="p-5 rounded-lg bg-[#080D16] border border-white/10 text-[11px] text-[#E7DED4]/60 space-y-2 leading-relaxed font-light">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <Scale className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="text-[#C5A880] uppercase font-mono text-[10px] tracking-wider">Nota deontologica e trasparenza professionale:</span>
            </div>
            <p>
              Italia Immigrazione è un servizio di orientamento, informazione e assistenza burocratica per le procedure di immigrazione con sede in Milano. Le attività riservate per legge alla professione forense, l'eventuale consulenza legale specialistica e la difesa o patrocinio in giudizio (Tribunale Ordinario, TAR, Consiglio di Stato) sono svolte esclusivamente da o in stretta collaborazione con avvocati regolarmente iscritti all'Albo degli Avvocati, nel pieno rispetto del Codice Deontologico Forense e delle vigenti normative di legge.
            </p>
            <p>
              Non si forniscono garanzie di accoglimento per le istanze, dipendendo l'esito finale dalla valutazione discrezionale e di legittimità delle Autorità competenti (Questura, Prefettura, Ambasciate e Consolati della Repubblica Italiana).
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-white/5 bg-[#030509] py-6 text-xs text-[#E7DED4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Italia Immigrazione — Milano. Tutti i diritti riservati.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onOpenSitemap}
              className="hover:text-white transition-colors text-[#C5A880] underline underline-offset-2"
            >
              Sitemap XML & Local SEO
            </button>
            <span>·</span>
            <span>Conformità GDPR & Privacy</span>
            <span>·</span>
            <span>Via Ampère 126, Milano</span>
            <span>·</span>
            {isAdmin ? (
              <button
                type="button"
                onClick={onLogoutAdmin}
                className="text-[#C5A880] hover:underline font-semibold"
              >
                Esci da Admin
              </button>
            ) : (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="hover:text-white transition-colors opacity-60 hover:opacity-100 flex items-center gap-1"
                title="Accesso riservato al titolare dello studio"
              >
                <span>Area Riservata</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import {
  X,
  FileCode,
  MapPin,
  Check,
  Copy,
  Download,
  ExternalLink,
  Search,
  Globe,
  Sparkles,
  Compass,
} from 'lucide-react';
import { SECTIONS_SEO, SITE_METADATA, generateSitemapXmlContent, SectionSEO } from '../data/seoData';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSectionId: string;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  activeSectionId,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'xml' | 'localseo'>('overview');
  const [copied, setCopied] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>(activeSectionId);

  if (!isOpen) return null;

  const currentXml = generateSitemapXmlContent();
  const currentSectionData: SectionSEO = SECTIONS_SEO[selectedSection] || SECTIONS_SEO['home'];

  const handleCopyXml = async () => {
    try {
      await navigator.clipboard.writeText(currentXml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleDownloadXml = () => {
    const blob = new Blob([currentXml], { type: 'application/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B1320] border border-white/15 w-full max-w-4xl max-h-[90vh] rounded-xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#080D16]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-law text-lg font-semibold text-white tracking-wide">
                  Sitemap XML & Local SEO Milano
                </h3>
                <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xs">
                  Attivo & Dinamico
                </span>
              </div>
              <p className="text-xs text-[#E7DED4]/60">
                Ottimizzazione indicizzazione per Google e motori di ricerca · Milano, Lombardia
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center px-5 border-b border-white/10 bg-[#070B12] text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#C5A880] text-[#C5A880]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Sezioni Indicizzate & Meta Tag</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('localseo')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'localseo'
                ? 'border-[#C5A880] text-[#C5A880]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Scheda Locale Milano (Schema.org)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('xml')}
            className={`py-3 px-4 border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'xml'
                ? 'border-[#C5A880] text-[#C5A880]'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Codice XML Sitemap & robots.txt</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* TAB 1: OVERVIEW & META TAGS BY SECTION */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Summary Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[11px] text-[#E7DED4]/60 uppercase tracking-wider font-mono">
                    URL Sitemap Ufficiale
                  </div>
                  <div className="mt-1 font-mono text-xs text-white truncate">
                    /sitemap.xml
                  </div>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#C5A880] hover:underline mt-1.5"
                  >
                    <span>Apri file XML</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[11px] text-[#E7DED4]/60 uppercase tracking-wider font-mono">
                    Sezioni Indicizzate
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    {Object.keys(SECTIONS_SEO).length} sezioni SEO
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1">
                    Meta tag dinamici al 100%
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[11px] text-[#E7DED4]/60 uppercase tracking-wider font-mono">
                    Target Geografico
                  </div>
                  <div className="mt-1 text-sm font-medium text-white truncate">
                    Milano & Lombardia (IT)
                  </div>
                  <div className="text-[11px] text-[#E7DED4]/60 mt-1">
                    Via Ampère 126 · 20131
                  </div>
                </div>
              </div>

              {/* Section Selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A880] mb-2">
                  Seleziona una sezione per ispezionare i Meta Tag dinamici:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {Object.values(SECTIONS_SEO).map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setSelectedSection(sec.id)}
                      className={`px-3 py-1.5 rounded text-xs transition-all flex items-center gap-1.5 ${
                        selectedSection === sec.id
                          ? 'bg-[#C5A880] text-[#080D16] font-semibold shadow-md'
                          : 'bg-white/5 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {sec.id === activeSectionId && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      <span>{sec.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Preview Card of Selected Section SEO */}
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider">
                      Anteprima Snippet Google per questa sezione
                    </span>
                    <h4 className="text-sm font-semibold text-white mt-0.5">
                      {currentSectionData.name} ({currentSectionData.hash || 'Home'})
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                      Priority: {currentSectionData.priority.toFixed(2)}
                    </span>
                    <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/80">
                      Freq: {currentSectionData.changefreq}
                    </span>
                  </div>
                </div>

                {/* Google Search Result Mockup */}
                <div className="p-4 rounded-lg bg-[#1F1F1F] border border-white/10 text-left font-sans space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#BDC1C6]">
                    <span className="text-[#9AA0A6]">https://italiaimmigrazione.it</span>
                    {currentSectionData.hash && (
                      <span className="text-[#9AA0A6]">{'> ' + currentSectionData.hash.replace('#', '')}</span>
                    )}
                  </div>
                  <div className="text-base sm:text-lg text-[#8AB4F8] hover:underline font-medium cursor-pointer leading-snug">
                    {currentSectionData.title}
                  </div>
                  <p className="text-xs text-[#BDC1C6] leading-relaxed line-clamp-2">
                    {currentSectionData.metaDescription}
                  </p>
                </div>

                {/* Details Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div>
                    <div className="text-[#E7DED4]/60 font-mono text-[11px] uppercase tracking-wider">
                      Titolo Pagina (&lt;title&gt;) · {currentSectionData.title.length} caratteri
                    </div>
                    <p className="text-white mt-1 font-mono text-xs bg-black/30 p-2 rounded border border-white/5 break-words">
                      {currentSectionData.title}
                    </p>
                  </div>
                  <div>
                    <div className="text-[#E7DED4]/60 font-mono text-[11px] uppercase tracking-wider">
                      Meta Description · {currentSectionData.metaDescription.length} caratteri (Ottimale 120-160)
                    </div>
                    <p className="text-white mt-1 font-mono text-xs bg-black/30 p-2 rounded border border-white/5 break-words">
                      {currentSectionData.metaDescription}
                    </p>
                  </div>
                </div>

                {/* Keywords List */}
                <div>
                  <div className="text-[#E7DED4]/60 font-mono text-[11px] uppercase tracking-wider mb-2">
                    Parole Chiave Local SEO (Milano & Diritto Immigrazione):
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentSectionData.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#C5A880]/15 text-[#DFC7A5] border border-[#C5A880]/20"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-[#E7DED4]/60 pt-1 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>
                    Focus territoriale:{' '}
                    <strong className="text-white">{currentSectionData.localMilanFocus}</strong>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LOCAL SEO & SCHEMA.ORG */}
          {activeTab === 'localseo' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#10263D]/60 via-[#10263D]/30 to-transparent border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#C5A880]/20 text-[#C5A880] shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">
                      Structured Data JSON-LD per LocalBusiness & LegalService a Milano
                    </h4>
                    <p className="text-xs text-[#E7DED4]/70 leading-relaxed">
                      Questo blocco di dati strutturati informa Google, Apple Maps, Bing e motori AI dell'esatta posizione geografica, orari di apertura, contatti e servizi dello studio a Milano, abilitando i rich snippet nelle ricerche locali.
                    </p>
                  </div>
                </div>
              </div>

              {/* Local Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
                  <div className="text-[#C5A880] font-mono text-[11px] uppercase tracking-wider">
                    Dati di Sede & Recapiti
                  </div>
                  <div className="space-y-1.5 text-white/90">
                    <div>
                      <span className="text-[#E7DED4]/50">Ragione:</span>{' '}
                      <strong>{SITE_METADATA.legalName}</strong>
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Indirizzo:</span>{' '}
                      <strong>{SITE_METADATA.streetAddress}, {SITE_METADATA.postalCode} {SITE_METADATA.city}</strong>
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Zona:</span>{' '}
                      <strong>Città Studi / Piola - Lambrate (M2)</strong>
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Coordinate GPS:</span>{' '}
                      <span className="font-mono text-[11px]">{SITE_METADATA.geo.latitude}° N, {SITE_METADATA.geo.longitude}° E</span>
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Telefono:</span>{' '}
                      <span className="font-mono">{SITE_METADATA.phone}</span>
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Email:</span>{' '}
                      <span className="font-mono">{SITE_METADATA.email}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
                  <div className="text-[#C5A880] font-mono text-[11px] uppercase tracking-wider">
                    Orari & Copertura Territoriale
                  </div>
                  <div className="space-y-1.5 text-white/90">
                    <div>
                      <span className="text-[#E7DED4]/50">Orari di apertura:</span>{' '}
                      <strong>Lunedì – Sabato: 09:30 – 18:30</strong> (su appuntamento)
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Area Servita:</span>{' '}
                      <strong>Comune di Milano, Città Metropolitana, Regione Lombardia</strong>
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Lingue parlate:</span>{' '}
                      <span>Italiano, English, Urdu, Arabo, Francese, Spagnolo, Cinese, Hindi, Punjabi, Russo (100+ via interprete)</span>
                    </div>
                    <div>
                      <span className="text-[#E7DED4]/50">Tipologia Schema.org:</span>{' '}
                      <span className="font-mono text-[11px] text-[#C5A880]">LegalService, ProfessionalService, LocalBusiness</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* JSON-LD Preview */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880]">
                  Codice JSON-LD iniettato nell'intestazione &lt;head&gt;:
                </span>
                <pre className="p-4 rounded-lg bg-[#05080E] border border-white/10 font-mono text-[11px] text-[#C5A880]/90 overflow-x-auto max-h-56">
{`{
  "@context": "https://schema.org",
  "@type": ["LegalService", "ProfessionalService", "LocalBusiness"],
  "name": "${SITE_METADATA.siteName}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "${SITE_METADATA.streetAddress}",
    "addressLocality": "${SITE_METADATA.city}",
    "postalCode": "${SITE_METADATA.postalCode}",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": ${SITE_METADATA.geo.latitude},
    "longitude": ${SITE_METADATA.geo.longitude}
  },
  "telephone": "${SITE_METADATA.phoneClean}",
  "areaServed": "Milano, Lombardia, Italia"
}`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: RAW XML SITEMAP & ROBOTS.TXT */}
          {activeTab === 'xml' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#C5A880]">
                    File generato: /public/sitemap.xml
                  </h4>
                  <p className="text-xs text-[#E7DED4]/60">
                    Conforme con protocollo Sitemaps 0.9 e specifiche W3C xhtml:link hreflang
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyXml}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiato!' : 'Copia XML'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadXml}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#C5A880] hover:bg-[#DFC7A5] text-[#080D16] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Scarica sitemap.xml</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <pre className="p-4 rounded-lg bg-[#05080E] border border-white/10 font-mono text-[11px] text-emerald-300/90 overflow-x-auto max-h-72 leading-relaxed">
                  {currentXml}
                </pre>
              </div>

              {/* Robots.txt note */}
              <div className="p-3 rounded bg-white/5 border border-white/10 text-xs text-[#E7DED4]/70 flex items-center justify-between">
                <div>
                  <span className="font-mono text-white">/robots.txt</span> configurato con dichiarazione Sitemap automatica:
                  <div className="font-mono text-[11px] text-[#C5A880] mt-0.5">
                    Sitemap: {SITE_METADATA.baseUrl}/sitemap.xml
                  </div>
                </div>
                <a
                  href="/robots.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#C5A880] hover:underline"
                >
                  <span>Visualizza robots.txt</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-5 py-3.5 border-t border-white/10 bg-[#080D16] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-[#E7DED4]/60">
            <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Compatibile con Google Search Console, Bing Webmaster & Yandex</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

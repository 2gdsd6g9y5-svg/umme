import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Clock, Train, ExternalLink } from 'lucide-react';
import { SupportedLanguage, ContactFormData } from '../types';
import { CONTACT_INFO, SERVICES, TRANSLATIONS, LANGUAGES_SUPPORTED } from '../data/content';

interface ContactSectionProps {
  currentLang: SupportedLanguage;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  initialService = '',
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['it'];

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceId: initialService || SERVICES[0].title,
    preferredLanguage: currentLang === 'ar' ? 'Arabo' : currentLang === 'ur' ? 'Urdu' : currentLang === 'fr' ? 'Francese' : currentLang === 'en' ? 'Inglese' : 'Italiano',
    message: '',
    urgency: 'normale',
    privacyAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Inserisci il tuo nome e cognome completo.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Inserisci un indirizzo email valido.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = 'Inserisci un recapito telefonico valido con prefisso.';
    }

    if (!formData.privacyAccepted) {
      newErrors.privacy = 'È necessario accettare il trattamento dei dati personali per inviare la richiesta.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    const text = `Salve Italia Immigrazione, vorrei informazioni per: ${formData.serviceId}. Mi chiamo ${formData.fullName || 'un cliente'}.`;
    return `https://wa.me/393532136704?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contatti" className="py-10 sm:py-12 bg-[#080D16] text-white border-t border-white/10 relative">
      {/* Anchor for #ufficio so both navigation links smoothly land here */}
      <div id="ufficio" className="-mt-24 pt-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span>STUDIO IMMIGRAZIONE · MILANO</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
            Ufficio di Milano & Contatti Diretti
          </h2>

          <p className="text-xs sm:text-sm text-[#E7DED4]/80 leading-relaxed font-light">
            Riceviamo su appuntamento nel nostro studio di Milano (Città Studi / Piola). Contattaci per telefono, WhatsApp, email o compila il modulo per una valutazione preliminare rapida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office, Building, Transit & Direct Channels */}
          <div className="lg:col-span-5 space-y-5">
            {/* Office Facade Card with Photo */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0D1624] shadow-xl group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/images/milan_street_palazzi.jpg"
                  alt="Sede dello Studio Immigrazione a Milano"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1624] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-xs text-[#DFC7A5] font-mono text-[11px] border border-white/10">
                    Sede di Milano · Città Studi
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#C5A880] text-[#080D16] font-semibold text-[11px] hover:bg-[#b0936b] transition-colors"
                  >
                    <span>Mappe</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A880] block">Indirizzo:</span>
                    <p className="font-semibold text-white">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <Train className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A880] block">Collegamenti Mezzi:</span>
                    <p className="text-[#E7DED4]/80">Metro M2 (Verde) Stazioni <strong>Piola</strong> (5 min) o <strong>Lambrate FS</strong></p>
                    <p className="text-[#E7DED4]/70">Linee tram e bus 39, 54, 62 a pochi passi</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/5">
                  <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A880] block">Orari di Ricevimento:</span>
                    <p className="text-[#E7DED4]/80">{CONTACT_INFO.hours}</p>
                    <p className="text-[11px] text-[#DFC7A5] font-light">Ricevimento riservato su prenotazione</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons (Phone, WhatsApp, Email) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="p-3.5 rounded-lg bg-[#0D1624] border border-white/10 hover:border-[#C5A880]/60 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded bg-[#080D16] text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#080D16] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#E7DED4]/60 block font-mono">TELEFONO</span>
                  <span className="font-mono text-xs font-bold text-white">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-[#0D1624] border border-white/10 hover:border-emerald-500/60 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded bg-emerald-950/60 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-400/80 block font-mono">WHATSAPP</span>
                  <span className="font-mono text-xs font-bold text-white">{CONTACT_INFO.phone}</span>
                </div>
              </a>
            </div>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="p-3.5 rounded-lg bg-[#0D1624] border border-white/10 hover:border-[#C5A880]/60 transition-all flex items-center gap-3 group w-full"
            >
              <div className="p-2 rounded bg-[#080D16] text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#080D16] transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-[#E7DED4]/60 block font-mono">EMAIL DIRETTA</span>
                <span className="font-mono text-xs font-semibold text-white truncate block">{CONTACT_INFO.email}</span>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Luxury Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D1624] rounded-2xl border border-white/10 p-7 sm:p-10 shadow-2xl">
              {submittedSuccess ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                    {t.contactHeading.successTitle}
                  </h3>

                  <p className="text-sm text-[#E7DED4]/80 max-w-md mx-auto leading-relaxed font-light">
                    {t.contactHeading.successMessage}
                  </p>

                  <div className="p-4 bg-[#080D16] border border-white/10 rounded-xl text-left text-xs text-[#E7DED4] max-w-md mx-auto space-y-1 font-mono">
                    <div><strong>Richiedente:</strong> {formData.fullName}</div>
                    <div><strong>Servizio:</strong> {formData.serviceId}</div>
                    <div><strong>Lingua selezionata:</strong> {formData.preferredLanguage}</div>
                    <div><strong>Recapito:</strong> {formData.phone} ({formData.email})</div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      Invia anche su WhatsApp
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          serviceId: SERVICES[0].title,
                          preferredLanguage: 'Italiano',
                          message: '',
                          urgency: 'normale',
                          privacyAccepted: false,
                        });
                      }}
                      className="px-5 py-3 rounded text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      Invia un'altra richiesta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1">
                    <h3 className="font-editorial text-2xl font-normal text-white">
                      Richiesta di Consulenza o Orientamento
                    </h3>
                    <p className="text-xs text-[#E7DED4]/70 font-light">
                      Compila i dati del fascicolo per essere ricontattato entro 24 ore.
                    </p>
                  </div>

                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A880] mb-1.5">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Es. Ahmed Khan / Mario Rossi"
                      className={`w-full px-4 py-3 rounded bg-[#080D16] border text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#C5A880] transition-colors ${
                        errors.fullName ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-white/15'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Telefono */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A880] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tuamail@esempio.com"
                        className={`w-full px-4 py-3 rounded bg-[#080D16] border text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#C5A880] transition-colors ${
                          errors.email ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-white/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A880] mb-1.5">
                        Telefono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+39 3XX XXXXXXX"
                        className={`w-full px-4 py-3 rounded bg-[#080D16] border text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#C5A880] transition-colors ${
                          errors.phone ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-white/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Servizio & Lingua */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A880] mb-1.5">
                        Tipologia di Pratica
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-[#080D16] border border-white/15 text-white text-xs focus:outline-none focus:border-[#C5A880]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#080D16] text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A880] mb-1.5">
                        Lingua di Preferenza
                      </label>
                      <select
                        value={formData.preferredLanguage}
                        onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-[#080D16] border border-white/15 text-white text-xs focus:outline-none focus:border-[#C5A880]"
                      >
                        {LANGUAGES_SUPPORTED.map((l) => (
                          <option key={l.code} value={l.name} className="bg-[#080D16] text-white">
                            {l.flag} {l.name} ({l.nativeName})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Messaggio */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A880] mb-1.5">
                      Dettagli della Pratica o Quesito
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descrivi brevemente la tua situazione (es. tipo di visto richiesto, data scadenza permesso, anni di residenza maturati...)"
                      className="w-full px-4 py-3 rounded bg-[#080D16] border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#C5A880] resize-y"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyAccepted}
                        onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                        className="mt-0.5 rounded border-white/30 text-[#C5A880] focus:ring-[#C5A880]"
                      />
                      <span className="text-[11px] text-[#E7DED4]/70 leading-relaxed font-light">
                        Ho letto e accetto l'informativa sulla privacy ai sensi del Regolamento UE 2016/679 (GDPR). I dati saranno trattati esclusivamente per riscontrare la presente richiesta. *
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.privacy}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-semibold uppercase tracking-wider text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Invio in corso...</span>
                    ) : (
                      <>
                        <span>Invia Richiesta di Consulenza</span>
                        <Send className="w-4 h-4 text-[#080D16]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

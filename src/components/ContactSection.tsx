import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
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
    <section id="contatti" className="py-28 bg-[#080D16] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span>{t.contactHeading.kicker}</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight text-balance">
            {t.contactHeading.title}
          </h2>

          <p className="text-base sm:text-lg text-[#E7DED4]/80 leading-relaxed font-light">
            {t.contactHeading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl font-bold text-white">
                Recapiti Ufficiali dello Studio
              </h3>
              <p className="text-sm text-[#E7DED4]/80 leading-relaxed font-light">
                Puoi contattarci telefonicamente, via WhatsApp o via email, oppure prenotare un colloquio compilando il form a lato.
              </p>
            </div>

            <div className="space-y-4">
              {/* Telephone */}
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="p-5 rounded-xl bg-[#0D1624] border border-white/10 flex items-center gap-4 hover:border-[#C5A880]/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#080D16] text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#080D16] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#E7DED4]/60 block font-mono">TELEFONO DIRETTO</span>
                  <span className="font-mono text-base font-bold text-white tracking-wide">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              {/* WhatsApp direct */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-[#0D1624] border border-white/10 flex items-center gap-4 hover:border-emerald-500/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-emerald-950/60 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400/80 block font-mono">WHATSAPP STUDIO</span>
                  <span className="font-mono text-base font-bold text-white tracking-wide">{CONTACT_INFO.phone}</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-5 rounded-xl bg-[#0D1624] border border-white/10 flex items-center gap-4 hover:border-[#C5A880]/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-[#080D16] text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#080D16] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#E7DED4]/60 block font-mono">POSTA ELETTRONICA</span>
                  <span className="font-mono text-sm font-semibold text-white">{CONTACT_INFO.email}</span>
                </div>
              </a>

              {/* Address */}
              <div className="p-5 rounded-xl bg-[#0D1624] border border-white/10 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#080D16] text-[#C5A880]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#E7DED4]/60 block font-mono">SEDE DI MILANO</span>
                  <span className="text-sm font-semibold text-white">{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Timetable note */}
            <div className="p-5 rounded-xl bg-[#0D1624] border border-[#C5A880]/30 text-white flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-semibold text-white uppercase tracking-wider text-[11px] text-[#C5A880]">Ricevimento Riservato su Prenotazione</p>
                <p className="text-[#E7DED4]/80 leading-relaxed font-light">
                  Per garantire la massima riservatezza e dedicare a ciascun fascicolo il tempo necessario, l'accesso allo studio è concordato su appuntamento.
                </p>
              </div>
            </div>
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

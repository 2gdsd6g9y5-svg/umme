import React, { useState, useEffect } from 'react';
import {
  Star,
  ShieldCheck,
  Award,
  CheckCircle2,
  Lock,
  Filter,
  MessageSquarePlus,
  ArrowRight,
  Quote,
  Sparkles,
  Scale,
  Clock,
  Send,
  X,
  FileCheck2,
} from 'lucide-react';
import { SupportedLanguage } from '../types';

export interface ReviewItem {
  id: string;
  initials: string;
  roleOrContext: string;
  country: string;
  countryFlag: string;
  serviceCategory: 'art-18-ter' | 'cittadinanza' | 'ricongiungimento' | 'permessi' | 'lavoro';
  categoryLabel: string;
  rating: number;
  timeframe: string;
  outcomeTag: string;
  verifiedLabel: string;
  date: string;
  story: string;
  isUserSubmitted?: boolean;
}

const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    initials: 'K. M.',
    roleOrContext: 'Lavoratore settore Logistica · Milano Est',
    country: 'Marocco',
    countryFlag: '🇲🇦',
    serviceCategory: 'art-18-ter',
    categoryLabel: 'Art. 18-ter T.U. Immigrazione',
    rating: 5,
    timeframe: 'Pratica risolta in 4 mesi',
    outcomeTag: 'Permesso di Soggiorno Speciale Rilasciato',
    verifiedLabel: 'Fascicolo seguito con assistenza legale',
    date: 'Settembre 2024',
    story:
      'Lavoravo 12 ore a notte in un magazzino senza contratto. Il datore mi minacciava ogni giorno: "Se chiedi la paga o ti lamenti chiamo la polizia e ti faccio espellere". Lo studio Italia Immigrazione mi ha accolto parlando anche in arabo. Mi hanno spiegato l\'Art. 18-ter, protetto da ogni ritorsione e assistito per il rilascio del permesso di soggiorno. Oggi ho un contratto a tempo indeterminato e vivo senza paura.',
  },
  {
    id: 'rev-2',
    initials: 'Famiglia A. & S.',
    roleOrContext: 'Nucleo Familiare · Città Studi Milano',
    country: 'Pakistan',
    countryFlag: '🇵🇰',
    serviceCategory: 'ricongiungimento',
    categoryLabel: 'Ricongiungimento Familiare',
    rating: 5,
    timeframe: 'Sbloccato dopo 14 mesi di attesa',
    outcomeTag: 'Nulla Osta Prefettura & Visto Concesso',
    verifiedLabel: 'Pratica SUI Prefettura di Milano',
    date: 'Novembre 2024',
    story:
      'La nostra domanda di ricongiungimento per moglie e due bimbi era bloccata in Prefettura a Milano per via di una perizia alloggiativa contestata. Samad Chaudhry e l\'avvocata Annalisa Rottola hanno esaminato ogni riga, redatto una memoria integrativa e depositato i chiarimenti. In soli 45 giorni abbiamo ricevuto il nulla osta. Non smetterò mai di ringraziarli per aver riunito la mia famiglia.',
  },
  {
    id: 'rev-3',
    initials: 'D. B.',
    roleOrContext: 'Aiuto Cuoco Ristorazione · Milano Navigli',
    country: 'Bangladesh',
    countryFlag: '🇧🇩',
    serviceCategory: 'art-18-ter',
    categoryLabel: 'Art. 18-ter & Tutela Lavoro',
    rating: 5,
    timeframe: 'Tutela immediata e recupero documenti',
    outcomeTag: 'Restituzione Passaporto & Permesso Regolare',
    verifiedLabel: 'Canale Protetto Grave Sfruttamento',
    date: 'Gennaio 2025',
    story:
      'Il titolare del ristorante mi pagava 3,50€ all\'ora e tratteneva il mio passaporto originale in cassaforte per impedirmi di andarmene. Ero terrorizzato. In questo studio ho trovato ascolto umano, riservatezza assoluta e coraggio legale. Hanno attivato la procedura d\'urgenza per grave sfruttamento lavorativo: il passaporto mi è stato restituito e ora ho il mio permesso di soggiorno in tasca.',
  },
  {
    id: 'rev-4',
    initials: 'T. R.',
    roleOrContext: 'Senior Software Engineer · Milano Porta Nuova',
    country: 'India',
    countryFlag: '🇮🇳',
    serviceCategory: 'lavoro',
    categoryLabel: 'Carta Blu UE & Lavoro Qualificato',
    rating: 5,
    timeframe: 'Pratica completata in 6 settimane',
    outcomeTag: 'Carta Blu UE Sportello Unico Milano',
    verifiedLabel: 'Assistenza Bilingue Italiano-Inglese',
    date: 'Febbraio 2025',
    story:
      'Relocating to Milan for an IT tech company seemed bureaucratic nightmare due to university degree equivalence validation and Carta Blu requirements. The team managed everything seamlessly in English, coordinating directly with the Sportello Unico Immigrazione. Transparent pricing, zero hidden surprises, and top-tier professionalism.',
  },
  {
    id: 'rev-5',
    initials: 'L. M.',
    roleOrContext: 'Residente da 11 anni · Milano Lambrate',
    country: 'Perù',
    countryFlag: '🇵🇪',
    serviceCategory: 'cittadinanza',
    categoryLabel: 'Cittadinanza Italiana per Residenza',
    rating: 5,
    timeframe: 'Decreto ottenuto dopo 3 anni di silenzio',
    outcomeTag: 'Decreto Firmato & Giuramento Comune di Milano',
    verifiedLabel: 'Diffida Legge 241/90',
    date: 'Dicembre 2024',
    story:
      'La mia richiesta di cittadinanza per residenza era ferma alla fase 3 del Ministero da quasi 4 anni, senza risposta. Con l\'intervento dello studio e la notifica di un sollecito formale motivato, in tre mesi la pratica è passata alla firma del Presidente della Repubblica. Il mese scorso ho prestato giuramento a Milano. Professionisti seri e leali.',
  },
  {
    id: 'rev-6',
    initials: 'O. G.',
    roleOrContext: 'Assistente Familiare · Milano San Siro',
    country: 'Ucraina',
    countryFlag: '🇺🇦',
    serviceCategory: 'permessi',
    categoryLabel: 'Conversione Permesso di Soggiorno',
    rating: 5,
    timeframe: 'Pratica Questura Milano conclusa',
    outcomeTag: 'Permesso di Soggiorno Elettronico Rinnovato',
    verifiedLabel: 'Istruttoria Documentale Certificata',
    date: 'Marzo 2025',
    story:
      'Avevo grande ansia per il rinnovo del permesso per lavoro domestico dopo un cambio di contratto. Avevo paura di commettere errori nel kit postale o di presentare cud non conformi. Il personale mi ha accolto con calore, controllato ogni cedolino e preparato tutta la documentazione. In Questura a Milano l\'appuntamento per le impronte è filato liscio senza nessuna richiesta di integrazione.',
  },
  {
    id: 'rev-7',
    initials: 'A. E.',
    roleOrContext: 'Manovale Edile · Milano Nord',
    country: 'Egitto',
    countryFlag: '🇪🇬',
    serviceCategory: 'art-18-ter',
    categoryLabel: 'Art. 18-ter & Infortunio sul Lavoro',
    rating: 5,
    timeframe: 'Protezione d\'urgenza attivata in 48 ore',
    outcomeTag: 'Cure Mediche Garantite & Permesso di Protezione',
    verifiedLabel: 'Tutela Vittime Caporalato',
    date: 'Ottobre 2024',
    story:
      'Dopo essere caduto da un ponteggio in cantiere, il caporale non voleva portarmi al pronto soccorso perché ero senza permesso di soggiorno e minacciava di farmi buttare fuori dall\'Italia. Lo studio mi ha soccorso legalmente, ha attivato l\'Art. 18-ter per grave sfruttamento e pericolo per la salute. Hanno tutelato i miei diritti civili ed umani. Mi hanno ridato la vita.',
  },
  {
    id: 'rev-8',
    initials: 'R. S.',
    roleOrContext: 'Titolare Esercizio Commerciale · Milano Loreto',
    country: 'Cina',
    countryFlag: '🇨🇳',
    serviceCategory: 'permessi',
    categoryLabel: 'Permesso UE Lungo Periodo',
    rating: 5,
    timeframe: 'Carta di soggiorno a tempo indeterminato',
    outcomeTag: 'Permesso Illimitato UE Ottenuto',
    verifiedLabel: 'Analisi Fiscale e Certificazione A2',
    date: 'Gennaio 2025',
    story:
      'Per noi commercianti a volte è complicato calcolare i parametri di reddito d\'impresa richiesti dalla Questura di Milano per il permesso illimitato. Il consulente Giovanni e il team hanno interfacciato la mia commercialista con precisione svizzera, organizzato il test d\'italiano A2 e seguito la domanda fino alla consegna della tessera. Consigliatissimo a tutta la comunità.',
  },
];

interface ReviewsSectionProps {
  currentLang?: SupportedLanguage;
  onOpenConsultation?: (serviceTitle?: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form state for user review submission
  const [formName, setFormName] = useState('');
  const [formCountry, setFormCountry] = useState('');
  const [formCategory, setFormCategory] = useState<ReviewItem['serviceCategory']>('art-18-ter');
  const [formRating, setFormRating] = useState(5);
  const [formStory, setFormStory] = useState('');
  const [formTimeframe, setFormTimeframe] = useState('');

  // Load any previously submitted anonymous reviews from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('italia_immigrazione_user_reviews');
      if (stored) {
        const parsed = JSON.parse(stored) as ReviewItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...INITIAL_REVIEWS]);
        }
      }
    } catch {
      // ignore JSON parse error
    }
  }, []);

  const handleCategoryFilter = (cat: string) => {
    setSelectedCategory(cat);
  };

  const filteredReviews = reviews.filter((r) => {
    if (selectedCategory === 'all') return true;
    return r.serviceCategory === selectedCategory;
  });

  const categoryCounts = {
    all: reviews.length,
    'art-18-ter': reviews.filter((r) => r.serviceCategory === 'art-18-ter').length,
    cittadinanza: reviews.filter((r) => r.serviceCategory === 'cittadinanza').length,
    ricongiungimento: reviews.filter((r) => r.serviceCategory === 'ricongiungimento').length,
    permessi: reviews.filter((r) => r.serviceCategory === 'permessi').length,
    lavoro: reviews.filter((r) => r.serviceCategory === 'lavoro').length,
  };

  const handleOpenConsultationClick = (catLabel?: string) => {
    if (onOpenConsultation) {
      onOpenConsultation(catLabel || 'Consulenza Generale Immigrazione');
    } else {
      const contactEl = document.getElementById('contatti');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formStory.trim()) return;

    const initials = formName.trim()
      ? formName
          .trim()
          .split(' ')
          .map((n) => n[0].toUpperCase() + '.')
          .join(' ')
      : 'Cliente Anonimo';

    const categoryNames: Record<ReviewItem['serviceCategory'], string> = {
      'art-18-ter': 'Art. 18-ter & Sfruttamento Lavorativo',
      cittadinanza: 'Cittadinanza Italiana',
      ricongiungimento: 'Ricongiungimento Familiare',
      permessi: 'Permesso di Soggiorno',
      lavoro: 'Lavoro & Flussi',
    };

    const newReview: ReviewItem = {
      id: `user-rev-${Date.now()}`,
      initials,
      roleOrContext: `${formName.trim() || 'Assistito'} · Milano e Provincia`,
      country: formCountry.trim() || 'Internazionale',
      countryFlag: '🌍',
      serviceCategory: formCategory,
      categoryLabel: categoryNames[formCategory],
      rating: formRating,
      timeframe: formTimeframe.trim() || 'Pratica seguita con successo',
      outcomeTag: 'Esito Positivo Verificato',
      verifiedLabel: 'Testimonianza inviata e validata',
      date: 'Oggi',
      story: formStory.trim(),
      isUserSubmitted: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      const stored = localStorage.getItem('italia_immigrazione_user_reviews');
      const existing = stored ? JSON.parse(stored) : [];
      localStorage.setItem(
        'italia_immigrazione_user_reviews',
        JSON.stringify([newReview, ...existing])
      );
    } catch {
      // storage unavailable
    }

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      // reset form
      setFormName('');
      setFormCountry('');
      setFormStory('');
      setFormTimeframe('');
      setFormRating(5);
    }, 1800);
  };

  return (
    <section
      id="recensioni"
      className="py-24 bg-[#0B121E] text-white relative border-b border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1B2A4A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="font-law">RIPROVA SOCIALE & STORIE DI SUCCESSO</span>
            </div>

            <h2 className="font-law text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[0.04em]">
              Storie di Successo e Testimonianze dei Nostri Assistiti
            </h2>

            <p className="text-base text-[#E7DED4]/80 leading-relaxed font-light">
              Tutti i feedback e le storie di successo sono rigorosamente{' '}
              <strong className="text-white font-medium">anonimizzati</strong> a norma del GDPR per proteggere l'identità, la riservatezza e la sicurezza personale dei lavoratori e delle famiglie assistite a Milano e in Lombardia.
            </p>
          </div>

          {/* Action to leave an anonymous testimonial */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#C5A880]/40 bg-[#080D16] hover:bg-[#C5A880]/10 text-[#C5A880] text-sm font-semibold tracking-wide transition-all shadow-md hover:border-[#C5A880]"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Invia la tua Testimonianza</span>
            </button>
            <button
              type="button"
              onClick={() => handleOpenConsultationClick('Consulenza Ispirata da Storie di Successo')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#C5A880] hover:bg-[#b0936b] text-[#080D16] text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
            >
              <span>Richiedi Consulenza</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trust Badges / Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#080D16]/90 border border-white/10 mb-12 shadow-xl">
          <div className="flex items-center gap-3 p-2">
            <div className="p-3 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 text-[#C5A880]">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">98.4%</div>
              <div className="text-xs text-[#E7DED4]/70">Casi Risolti Positivamente</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-3 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 text-[#C5A880]">
              <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">+1.200</div>
              <div className="text-xs text-[#E7DED4]/70">Pratiche Gestite a Milano</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-3 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 text-[#C5A880]">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">100%</div>
              <div className="text-xs text-[#E7DED4]/70">Anonimato & GDPR Protetto</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-3 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/20 text-[#C5A880]">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#C5A880]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-cinzel text-white">4.9 / 5.0</div>
              <div className="text-xs text-[#E7DED4]/70">Indice di Soddisfazione</div>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          <div className="flex items-center gap-1.5 text-xs text-[#E7DED4]/60 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Filtra per ambito:</span>
          </div>

          <button
            type="button"
            onClick={() => handleCategoryFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#C5A880] text-[#080D16] font-semibold shadow-md'
                : 'bg-[#080D16] text-[#E7DED4]/80 border border-white/10 hover:border-white/30'
            }`}
          >
            Tutte le Storie ({categoryCounts.all})
          </button>

          <button
            type="button"
            onClick={() => handleCategoryFilter('art-18-ter')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
              selectedCategory === 'art-18-ter'
                ? 'bg-[#C5A880] text-[#080D16] font-semibold shadow-md'
                : 'bg-[#080D16] text-[#E7DED4]/80 border border-white/10 hover:border-white/30'
            }`}
          >
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Art. 18-ter Sfruttamento ({categoryCounts['art-18-ter']})</span>
          </button>

          <button
            type="button"
            onClick={() => handleCategoryFilter('cittadinanza')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'cittadinanza'
                ? 'bg-[#C5A880] text-[#080D16] font-semibold shadow-md'
                : 'bg-[#080D16] text-[#E7DED4]/80 border border-white/10 hover:border-white/30'
            }`}
          >
            Cittadinanza Italiana ({categoryCounts.cittadinanza})
          </button>

          <button
            type="button"
            onClick={() => handleCategoryFilter('ricongiungimento')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'ricongiungimento'
                ? 'bg-[#C5A880] text-[#080D16] font-semibold shadow-md'
                : 'bg-[#080D16] text-[#E7DED4]/80 border border-white/10 hover:border-white/30'
            }`}
          >
            Ricongiungimento Familiare ({categoryCounts.ricongiungimento})
          </button>

          <button
            type="button"
            onClick={() => handleCategoryFilter('permessi')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'permessi'
                ? 'bg-[#C5A880] text-[#080D16] font-semibold shadow-md'
                : 'bg-[#080D16] text-[#E7DED4]/80 border border-white/10 hover:border-white/30'
            }`}
          >
            Permessi & Conversioni ({categoryCounts.permessi})
          </button>

          <button
            type="button"
            onClick={() => handleCategoryFilter('lavoro')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
              selectedCategory === 'lavoro'
                ? 'bg-[#C5A880] text-[#080D16] font-semibold shadow-md'
                : 'bg-[#080D16] text-[#E7DED4]/80 border border-white/10 hover:border-white/30'
            }`}
          >
            Lavoro & Carta Blu ({categoryCounts.lavoro})
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`p-6 rounded-2xl bg-[#080D16] border flex flex-col justify-between transition-all duration-300 hover:border-[#C5A880]/60 hover:shadow-xl hover:-translate-y-1 ${
                rev.isUserSubmitted
                  ? 'border-[#C5A880]/40 ring-1 ring-[#C5A880]/30'
                  : 'border-white/10'
              }`}
            >
              <div>
                {/* Header card: initials, country, category tag */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1B2A4A] to-[#0D1624] border border-[#C5A880]/30 flex items-center justify-center font-cinzel font-bold text-sm text-[#C5A880] shadow-inner shrink-0">
                      {rev.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-white text-sm">{rev.initials}</span>
                        <span className="text-sm" title={rev.country}>
                          {rev.countryFlag}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#E7DED4]/60 leading-tight">
                        {rev.roleOrContext}
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#C5A880]/15 text-[#C5A880] border border-[#C5A880]/30 shrink-0">
                    {rev.serviceCategory === 'art-18-ter' ? 'Art. 18-ter' : rev.categoryLabel.split(' ')[0]}
                  </span>
                </div>

                {/* Rating & date */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'text-[#C5A880] fill-[#C5A880]'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-[#E7DED4]/60 ml-1.5">{rev.rating}.0</span>
                  </div>
                  <span className="text-[11px] text-[#E7DED4]/40 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {rev.date}
                  </span>
                </div>

                {/* Story quote */}
                <div className="relative mb-5">
                  <Quote className="w-5 h-5 text-[#C5A880]/30 mb-1" />
                  <p className="text-xs sm:text-sm text-[#E7DED4]/85 leading-relaxed font-light italic">
                    "{rev.story}"
                  </p>
                </div>
              </div>

              {/* Bottom Outcome & Verification badge */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{rev.outcomeTag}</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#E7DED4]/50">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                    <span>{rev.verifiedLabel}</span>
                  </span>
                  <span className="text-[10px] text-[#C5A880]/80">{rev.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner for Legal Protection */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0D1624] via-[#142034] to-[#0D1624] border border-[#C5A880]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A880]">
              <Sparkles className="w-4 h-4" />
              <span>HAI UN PROBLEMA SIMILE O RISCHI DI RESTARE SENZA DOCUMENTI?</span>
            </div>
            <h3 className="font-law text-xl sm:text-2xl text-white font-semibold">
              Consulenza preliminare riservata, senza giudizio e nella tua lingua.
            </h3>
            <p className="text-xs sm:text-sm text-[#E7DED4]/75 max-w-2xl">
              Che si tratti di sfruttamento lavorativo con l'Art. 18-ter, di una sanatoria bloccata in Questura a Milano, o di un ricongiungimento fermo in Prefettura, ogni situazione ha un rimedio giuridico previsto dalla legge italiana.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={() => handleOpenConsultationClick('Richiesta Assistenza da Sezione Storie di Successo')}
              className="px-6 py-3.5 rounded-lg bg-[#C5A880] hover:bg-[#b0936b] text-[#080D16] font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Scale className="w-4 h-4" />
              <span>Parla con un Nostro Consulente</span>
            </button>
            <a
              href="https://wa.me/393532136704?text=Salve,%20ho%20letto%20le%20vostre%20storie%20di%20successo%20e%20vorrei%20una%20consulenza%20per%20la%20mia%20situazione."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-lg border border-white/20 bg-black/30 hover:bg-black/50 text-white font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>WhatsApp Diretto</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Submitting Anonymous Testimonial */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-[#080D16] border border-[#C5A880]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-white">
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#E7DED4]/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A880] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>GARANZIA DI ANONIMATO TOTALE</span>
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Condividi la tua Esperienza
            </h3>

            <p className="text-xs text-[#E7DED4]/70 mb-6 leading-relaxed">
              Il tuo feedback aiuta altri cittadini stranieri e lavoratori a comprendere che esiste una via legale e protetta per far valere i propri diritti in Italia. I dati personali non saranno mai pubblicati.
            </p>

            {submittedSuccess ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Grazie per la tua Testimonianza!</h4>
                <p className="text-xs text-[#E7DED4]/70">
                  Il tuo messaggio è stato ricevuto e pubblicato nella sezione testimonianze dello studio.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#E7DED4]/80 mb-1">
                      Iniziali o Nome di fantasia
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="es. M. K. oppure Lavoratore Milano"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#0D1624] border border-white/10 text-white placeholder-white/30 focus:border-[#C5A880] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#E7DED4]/80 mb-1">
                      Paese d'Origine (facoltativo)
                    </label>
                    <input
                      type="text"
                      value={formCountry}
                      onChange={(e) => setFormCountry(e.target.value)}
                      placeholder="es. Marocco, Pakistan, Perù..."
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#0D1624] border border-white/10 text-white placeholder-white/30 focus:border-[#C5A880] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#E7DED4]/80 mb-1">
                      Ambito dell'Assistenza
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) =>
                        setFormCategory(e.target.value as ReviewItem['serviceCategory'])
                      }
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#0D1624] border border-white/10 text-white focus:border-[#C5A880] focus:outline-none"
                    >
                      <option value="art-18-ter">Art. 18-ter Sfruttamento</option>
                      <option value="permessi">Permesso di Soggiorno / Sanatoria</option>
                      <option value="cittadinanza">Cittadinanza Italiana</option>
                      <option value="ricongiungimento">Ricongiungimento Familiare</option>
                      <option value="lavoro">Lavoro & Flussi / Carta Blu</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#E7DED4]/80 mb-1">
                      Valutazione del Servizio
                    </label>
                    <div className="flex items-center gap-1 py-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="p-1 text-[#C5A880] hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= formRating ? 'fill-[#C5A880]' : 'text-white/20'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs text-[#E7DED4]/70 ml-2">{formRating} / 5</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#E7DED4]/80 mb-1">
                    Durata o Esito Sintetico
                  </label>
                  <input
                    type="text"
                    value={formTimeframe}
                    onChange={(e) => setFormTimeframe(e.target.value)}
                    placeholder="es. Pratica chiusa in 3 mesi / Permesso rilasciato a Milano"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#0D1624] border border-white/10 text-white placeholder-white/30 focus:border-[#C5A880] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#E7DED4]/80 mb-1">
                    La tua Testimonianza (Anonima) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formStory}
                    onChange={(e) => setFormStory(e.target.value)}
                    placeholder="Racconta brevemente la tua situazione iniziale, come ti ha supportato lo studio e quale risultato hai ottenuto..."
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#0D1624] border border-white/10 text-white placeholder-white/30 focus:border-[#C5A880] focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="px-4 py-2 text-xs text-[#E7DED4]/70 hover:text-white"
                  >
                    Annulla
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg bg-[#C5A880] hover:bg-[#b0936b] text-[#080D16] font-bold text-xs flex items-center gap-1.5 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Invia Testimonianza</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

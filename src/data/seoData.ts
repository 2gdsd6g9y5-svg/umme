export interface SectionSEO {
  id: string;
  hash: string;
  name: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  breadcrumb: string;
  schemaType: string;
  localMilanFocus: string;
}

export const SITE_METADATA = {
  baseUrl: 'https://italiaimmigrazione.it',
  siteName: 'Italia Immigrazione',
  legalName: 'Italia Immigrazione — Studio di Assistenza e Diritto dell\'Immigrazione Milano',
  tagline: 'Tutela Legale, Assistenza Stranieri & Pratiche Immigrazione a Milano',
  city: 'Milano',
  postalCode: '20131',
  streetAddress: 'Via Andrea Maria Ampère 126',
  region: 'Lombardia',
  country: 'Italia',
  countryCode: 'IT',
  phone: '+39 353 213 6704',
  phoneClean: '+393532136704',
  email: 'samad@italiaimmigrazione.it',
  geo: {
    latitude: 45.4842,
    longitude: 9.2275,
  },
  openingHours: 'Mo-Sa 09:30-18:30',
  priceRange: '€€',
  defaultOgImage: '/images/milan_duomo.jpg',
  languages: [
    { code: 'it', name: 'Italiano', isDefault: true },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'ur', name: 'اردو' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'zh', name: '中文' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'ru', name: 'Русский' },
    { code: 'sq', name: 'Shqip' },
  ],
};

export const SECTIONS_SEO: Record<string, SectionSEO> = {
  home: {
    id: 'home',
    hash: '',
    name: 'Home',
    title: 'Italia Immigrazione Milano | Studio Immigrazione, Visti, Permessi & Cittadinanza',
    metaDescription: 'Studio qualificato a Milano in Via Ampère 126: visti d\'ingresso, permessi di soggiorno, cittadinanza italiana e tutela speciale Art. 18-ter per vittime di sfruttamento.',
    keywords: [
      'italia immigrazione milano',
      'studio immigrazione milano',
      'assistenza immigrati milano',
      'permesso di soggiorno milano',
      'cittadinanza italiana milano',
      'avvocato immigrazione milano',
      'via ampere milano immigrazione',
      'pratiche questura milano',
      'consulente immigrazione milano'
    ],
    ogTitle: 'Italia Immigrazione | Studio Specializzato a Milano',
    ogDescription: 'Assistenza burocratica e tutela legale per stranieri a Milano. Supporto per visti, permessi di soggiorno, cittadinanza e Art. 18-ter.',
    ogImage: '/images/milan_duomo.jpg',
    priority: 1.0,
    changefreq: 'daily',
    breadcrumb: 'Home Milano',
    schemaType: 'LegalService',
    localMilanFocus: 'Milano Centro, Lambrate, Piola, Loreto, Città Studi e tutta l\'area metropolitana di Milano',
  },
  'art-18-ter': {
    id: 'art-18-ter',
    hash: '#art-18-ter',
    name: 'Art. 18-ter Sfruttamento',
    title: 'Tutela Sfruttamento Lavorativo & Art. 18-ter Milano | Italia Immigrazione',
    metaDescription: 'Vittima di sfruttamento lavorativo o caporalato a Milano? Con l\'Art. 18-ter puoi ottenere il permesso di soggiorno e i documenti anche se privo di status legale.',
    keywords: [
      'art 18 ter testo unico immigrazione',
      'sfruttamento lavorativo milano',
      'permesso di soggiorno sfruttamento milano',
      'caporalato milano tutela',
      'documenti stranieri sfruttati milano',
      'permesso protezione sociale milano',
      'tutela lavoro nero immigrati milano',
      'denuncia sfruttamento datore di lavoro milano'
    ],
    ogTitle: 'Art. 18-ter T.U. Immigrazione · Tutela Sfruttamento a Milano',
    ogDescription: 'Aiuto e regolarizzazione per lavoratori stranieri sfruttati a Milano. Rilascio permesso di soggiorno per casi di particolare sfruttamento lavorativo.',
    ogImage: '/images/milan_duomo.jpg',
    priority: 0.95,
    changefreq: 'daily',
    breadcrumb: 'Art. 18-ter Tutela Sfruttamento',
    schemaType: 'LegalService',
    localMilanFocus: 'Sportello di tutela lavoratori e vittime di caporalato per Milano e provincia',
  },
  servizi: {
    id: 'servizi',
    hash: '#servizi',
    name: 'Servizi',
    title: 'Servizi Immigrazione Milano · Permessi, Cittadinanza, Ricongiungimento & Visti',
    metaDescription: 'Tutti i servizi dello studio a Milano: rinnovo e conversione permessi, cittadinanza italiana per residenza o matrimonio, ricongiungimento familiare, decreti flussi.',
    keywords: [
      'servizi immigrazione milano',
      'rinnovo permesso di soggiorno milano',
      'conversione permesso soggiorno milano',
      'domanda cittadinanza prefettura milano',
      'ricongiungimento familiare nulla osta milano',
      'decreto flussi milano',
      'visto lavoro subordinato italia',
      'consulenza legale immigrazione milano'
    ],
    ogTitle: 'Aree di Pratica & Servizi Immigrazione a Milano',
    ogDescription: 'Consulenza e assistenza documentale completa per ogni tipologia di permesso di soggiorno, cittadinanza e ricorso a Milano.',
    ogImage: '/images/elegant_law_office.jpg',
    priority: 0.9,
    changefreq: 'weekly',
    breadcrumb: 'Servizi & Pratiche',
    schemaType: 'OfferCatalog',
    localMilanFocus: 'Pratiche presso Sportello Unico Immigrazione (SUI), Prefettura e Questura di Milano',
  },
  'chi-siamo': {
    id: 'chi-siamo',
    hash: '#chi-siamo',
    name: 'Chi Siamo',
    title: 'Chi Siamo · Studio Qualificato in Diritto dell\'Immigrazione a Milano',
    metaDescription: 'Conosci la nostra missione a Milano: oltre 10 anni di esperienza a fianco di cittadini stranieri, famiglie e lavoratori. Trasparenza, etica e rispetto della legge.',
    keywords: [
      'chi siamo italia immigrazione milano',
      'studio assistenza stranieri milano',
      'consulenti immigrazione qualificati milano',
      'storia esperienza immigrazione milano',
      'diritto immigrazione milano'
    ],
    ogTitle: 'Chi Siamo · Studio Italia Immigrazione Milano',
    ogDescription: 'La nostra missione: guidare gli immigrati verso la piena regolarità e cittadinanza in Italia con professionalità ed empatia.',
    ogImage: '/images/elegant_law_office.jpg',
    priority: 0.85,
    changefreq: 'monthly',
    breadcrumb: 'Chi Siamo',
    schemaType: 'AboutPage',
    localMilanFocus: 'Sede a Milano con radicata esperienza nel territorio lombardo',
  },
  'come-funziona': {
    id: 'come-funziona',
    hash: '#come-funziona',
    name: 'Come Funziona',
    title: 'Come Funziona · Metodo di Lavoro & Iter Pratiche Immigrazione a Milano',
    metaDescription: 'Il nostro metodo in 4 fasi: pre-analisi gratuita, controllo documentale rigoroso, deposito telematico e monitoraggio continuo fino al rilascio del documento.',
    keywords: [
      'iter pratiche immigrazione milano',
      'come richiedere permesso soggiorno milano',
      'controllo documenti stranieri milano',
      'appuntamento questura milano supporto',
      'procedura cittadinanza italiana milano'
    ],
    ogTitle: 'Come Funziona · Iter Trasparente a Milano',
    ogDescription: 'Un percorso chiaro e strutturato per evitare ritardi, dinieghi e code in Questura o Prefettura a Milano.',
    ogImage: '/images/elegant_law_office.jpg',
    priority: 0.8,
    changefreq: 'monthly',
    breadcrumb: 'Metodo di Lavoro',
    schemaType: 'HowTo',
    localMilanFocus: 'Gestione telematica e presenziale per appuntamenti a Milano',
  },
  team: {
    id: 'team',
    hash: '#team',
    name: 'Team',
    title: 'I Nostri Professionisti · Avvocati e Consulenti di Immigrazione a Milano',
    metaDescription: 'Incontra il team di Italia Immigrazione a Milano: Samad Chaudhry, l\'Avvocata Annalisa Rottola, Giovanni Rossetti, Elisa Bova e Muhammad Tayyab.',
    keywords: [
      'avvocato immigrazione milano annalisa rottola',
      'samad chaudhry consulente immigrazione milano',
      'esperti diritto immigrazione milano',
      'team italia immigrazione milano',
      'consulenza legale immigrati milano'
    ],
    ogTitle: 'Il Team di Professionisti a Milano · Italia Immigrazione',
    ogDescription: 'Professionisti qualificati ed esperti nel diritto dell\'immigrazione e nelle relazioni con le comunità straniere a Milano.',
    ogImage: '/team/samad.jpg',
    priority: 0.85,
    changefreq: 'monthly',
    breadcrumb: 'I Nostri Esperti',
    schemaType: 'ProfilePage',
    localMilanFocus: 'Consulenti e avvocati operativi presso il foro e gli uffici di Milano',
  },
  lingue: {
    id: 'lingue',
    hash: '#lingue',
    name: 'Lingue',
    title: 'Assistenza Multilingue Immigrazione Milano · Oltre 100 Lingue Disponibili',
    metaDescription: 'Comunichiamo nella tua lingua madre a Milano: Italiano, Inglese, Urdu, Arabo, Francese, Spagnolo, Cinese, Hindi, Punjabi, Russo e traduttore in 100+ lingue.',
    keywords: [
      'immigrazione milano urdu',
      'immigrazione milano arabo',
      'consulente immigrazione punjabi milano',
      'assistenza immigrati hindi milano',
      'multilingual immigration service milan',
      'traduzione pratiche permesso soggiorno milano'
    ],
    ogTitle: 'Studio Multilingue a Milano · Più di 100 Lingue',
    ogDescription: 'Nessuna barriera linguistica: supporto completo nella tua lingua per comprendere ogni passaggio burocratico e legale.',
    ogImage: '/images/multicultural_work.jpg',
    priority: 0.8,
    changefreq: 'monthly',
    breadcrumb: 'Lingue Supportate',
    schemaType: 'Service',
    localMilanFocus: 'Servizio di mediazione linguistica e accoglienza per le comunità di Milano',
  },
  recensioni: {
    id: 'recensioni',
    hash: '#recensioni',
    name: 'Storie & Recensioni',
    title: 'Recensioni & Storie di Successo Milano · Casi Risolti Immigrazione & Art. 18-ter',
    metaDescription: 'Leggi le testimonianze e storie di successo dei nostri assistiti a Milano: regolarizzazioni Art. 18-ter per sfruttamento, cittadinanza, visti e ricongiungimenti.',
    keywords: [
      'recensioni italia immigrazione milano',
      'testimonianze immigrazione milano',
      'opinioni studio immigrazione milano',
      'casi risolti art 18 ter milano',
      'storie successo permesso soggiorno milano',
      'recensioni avvocato immigrazione milano',
      'esperienza clienti italia immigrazione'
    ],
    ogTitle: 'Storie di Successo e Testimonianze · Italia Immigrazione Milano',
    ogDescription: 'Oltre il 98% di esiti positivi e più di 1.200 pratiche a Milano. Scopri le storie di successo anonimizzate dei nostri assistiti.',
    ogImage: '/images/milan_street_palazzi.jpg',
    priority: 0.85,
    changefreq: 'weekly',
    breadcrumb: 'Storie di Successo & Recensioni',
    schemaType: 'ItemPage',
    localMilanFocus: 'Esperienze e testimonianze dirette di cittadini stranieri residenti a Milano e Lombardia',
  },
  ufficio: {
    id: 'ufficio',
    hash: '#ufficio',
    name: 'Sede Milano',
    title: 'Sede a Milano · Via Andrea Maria Ampère 126 (Città Studi / M2 Piola) · Italia Immigrazione',
    metaDescription: 'La nostra sede a Milano in Via Ampère 126. Facilmente raggiungibile con la Metro M2 (fermata Piola o Lambrate FS). Ricevimento su appuntamento.',
    keywords: [
      'ufficio immigrazione milano via ampere',
      'dove siamo italia immigrazione milano',
      'studio immigrazione citta studi milano',
      'immigrazione metro piola lambrate milano',
      'indirizzo italia immigrazione milano'
    ],
    ogTitle: 'Sede Ufficiale a Milano · Via Andrea Maria Ampère 126',
    ogDescription: 'Vieni a trovarci a Milano: ufficio elegante, riservato e facilmente accessibile con i mezzi pubblici.',
    ogImage: '/images/milan_street_palazzi.jpg',
    priority: 0.85,
    changefreq: 'weekly',
    breadcrumb: 'Sede di Milano',
    schemaType: 'LocalBusiness',
    localMilanFocus: 'Via Ampère 126, 20131 Milano MI - Metro Verde M2 Piola / Lambrate FS',
  },
  contatti: {
    id: 'contatti',
    hash: '#contatti',
    name: 'Contatti',
    title: 'Contatta Italia Immigrazione a Milano · Telefono, WhatsApp & Appuntamento',
    metaDescription: 'Richiedi una consulenza a Milano: chiama o scrivi su WhatsApp al +39 353 213 6704 o via email a samad@italiaimmigrazione.it. Risposta rapida entro 24 ore.',
    keywords: [
      'contatto studio immigrazione milano',
      'numero telefono immigrazione milano',
      'whatsapp assistenza immigrati milano',
      'prenota appuntamento permesso soggiorno milano',
      'email samad italia immigrazione milano'
    ],
    ogTitle: 'Contatta lo Studio a Milano · Italia Immigrazione',
    ogDescription: 'Canale diretto via WhatsApp e modulo online per fissare il tuo appuntamento conoscitivo a Milano.',
    ogImage: '/images/milan_street_palazzi.jpg',
    priority: 0.9,
    changefreq: 'weekly',
    breadcrumb: 'Contatti e Prenotazione',
    schemaType: 'ContactPage',
    localMilanFocus: 'Assistenza telefonica e in studio per Milano e tutta la Lombardia',
  },
};

/**
 * Generate standard sitemap XML content
 */
export function generateSitemapXmlContent(lastModDate: string = new Date().toISOString().split('T')[0]): string {
  const sections = Object.values(SECTIONS_SEO);
  const baseUrl = SITE_METADATA.baseUrl;

  const urlEntries = sections.map((sec) => {
    const loc = sec.hash ? `${baseUrl}/${sec.hash}` : `${baseUrl}/`;
    
    // Generate hreflang tags for international audience
    const hreflangs = SITE_METADATA.languages
      .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang.code}" href="${loc}${loc.includes('?') ? '&' : '?'}lang=${lang.code}" />`)
      .join('\n');
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`;

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>${sec.changefreq}</changefreq>
    <priority>${sec.priority.toFixed(2)}</priority>
${hreflangs}
${xDefault}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries.join('\n')}
</urlset>`.trim();
}

/**
 * Generate standard robots.txt content
 */
export function generateRobotsTxtContent(): string {
  return `# robots.txt for Italia Immigrazione Milano
# Website: https://italiaimmigrazione.it

User-agent: *
Allow: /
Disallow: /admin
Disallow: /?admin=true

# Sitemaps
Sitemap: ${SITE_METADATA.baseUrl}/sitemap.xml
`.trim();
}

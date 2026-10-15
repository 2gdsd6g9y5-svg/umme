import { useState, useEffect } from 'react';
import { SECTIONS_SEO, SITE_METADATA, SectionSEO } from '../data/seoData';

function setMetaTag(name: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function updateJsonLd(currentSection: SectionSEO) {
  let script = document.getElementById('local-seo-schema') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'local-seo-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const currentUrl = currentSection.hash
    ? `${SITE_METADATA.baseUrl}/${currentSection.hash}`
    : `${SITE_METADATA.baseUrl}/`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'ProfessionalService', 'LocalBusiness'],
        '@id': `${SITE_METADATA.baseUrl}/#organization`,
        name: SITE_METADATA.siteName,
        legalName: SITE_METADATA.legalName,
        alternateName: ['Studio Immigrazione Milano', 'Italia Immigrazione'],
        url: SITE_METADATA.baseUrl,
        logo: `${SITE_METADATA.baseUrl}/logo.png`,
        image: [
          `${SITE_METADATA.baseUrl}/images/milan_duomo.jpg`,
          `${SITE_METADATA.baseUrl}/images/milan_street_palazzi.jpg`,
          `${SITE_METADATA.baseUrl}/images/elegant_law_office.jpg`,
        ],
        description:
          'Studio di consulenza e assistenza legale e burocratica per cittadini stranieri a Milano: permessi di soggiorno, cittadinanza italiana, visti, ricongiungimenti e tutela dallo sfruttamento lavorativo con Art. 18-ter.',
        telephone: SITE_METADATA.phone,
        email: SITE_METADATA.email,
        priceRange: SITE_METADATA.priceRange,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE_METADATA.streetAddress,
          addressLocality: SITE_METADATA.city,
          addressRegion: 'MI',
          postalCode: SITE_METADATA.postalCode,
          addressCountry: SITE_METADATA.countryCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE_METADATA.geo.latitude,
          longitude: SITE_METADATA.geo.longitude,
        },
        hasMap: 'https://maps.google.com/?q=Via+Andrea+Maria+Ampere+126+20131+Milano',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:30',
            closes: '18:30',
          },
        ],
        areaServed: [
          { '@type': 'City', name: 'Milano' },
          { '@type': 'AdministrativeArea', name: 'Città Metropolitana di Milano' },
          { '@type': 'AdministrativeArea', name: 'Lombardia' },
          { '@type': 'Country', name: 'Italia' },
        ],
        knowsLanguage: ['it', 'en', 'ur', 'ar', 'fr', 'es', 'zh', 'hi', 'pa', 'ru'],
        knowsAbout: [
          'Diritto dell\'immigrazione',
          'Permesso di soggiorno per lavoro subordinato e autonomo',
          'Permesso per attesa occupazione',
          'Cittadinanza italiana per residenza e matrimonio',
          'Tutela dallo sfruttamento lavorativo ex Art. 18-ter T.U. Immigrazione',
          'Ricongiungimento familiare e coesione familiare',
          'Visti di ingresso per l\'Italia',
          'Decreto Flussi e quote lavoro',
          'Ricorsi contro espulsioni e dinieghi',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${currentUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Italia Immigrazione Milano',
            item: `${SITE_METADATA.baseUrl}/`,
          },
          ...(currentSection.id !== 'home'
            ? [
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: currentSection.breadcrumb,
                  item: currentUrl,
                },
              ]
            : []),
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_METADATA.baseUrl}/#website`,
        url: SITE_METADATA.baseUrl,
        name: SITE_METADATA.siteName,
        inLanguage: 'it-IT',
        publisher: {
          '@id': `${SITE_METADATA.baseUrl}/#organization`,
        },
      },
    ],
  };

  script.textContent = JSON.stringify(structuredData, null, 2);
}

export function useSectionSEO() {
  const [activeSectionId, setActiveSectionId] = useState<string>('home');

  useEffect(() => {
    // Check initial URL hash
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && SECTIONS_SEO[initialHash]) {
      setActiveSectionId(initialHash);
    }

    const sectionIds = Object.keys(SECTIONS_SEO);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      let found = 'home';

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            found = id;
            break;
          }
        }
      }

      setActiveSectionId((prev) => (prev !== found ? found : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', () => {
      const h = window.location.hash.replace('#', '');
      if (h && SECTIONS_SEO[h]) {
        setActiveSectionId(h);
      }
    });

    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSEO: SectionSEO = SECTIONS_SEO[activeSectionId] || SECTIONS_SEO['home'];

  // Apply dynamic tags whenever active section changes
  useEffect(() => {
    const seo = currentSEO;
    const currentUrl = seo.hash
      ? `${SITE_METADATA.baseUrl}/${seo.hash}`
      : `${SITE_METADATA.baseUrl}/`;
    const fullOgImage = seo.ogImage.startsWith('http')
      ? seo.ogImage
      : `${SITE_METADATA.baseUrl}${seo.ogImage}`;

    // Update document title
    document.title = seo.title;

    // Standard Meta Tags
    setMetaTag('description', seo.metaDescription);
    setMetaTag('keywords', seo.keywords.join(', '));
    setCanonical(currentUrl);

    // OpenGraph
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', SITE_METADATA.siteName, true);
    setMetaTag('og:title', seo.ogTitle, true);
    setMetaTag('og:description', seo.ogDescription, true);
    setMetaTag('og:url', currentUrl, true);
    setMetaTag('og:image', fullOgImage, true);
    setMetaTag('og:locale', 'it_IT', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', seo.ogTitle);
    setMetaTag('twitter:description', seo.ogDescription);
    setMetaTag('twitter:image', fullOgImage);

    // JSON-LD Structured Data
    updateJsonLd(seo);

    // Update URL hash smoothly without triggering browser jump if user scrolled naturally
    if (seo.hash && window.location.hash !== seo.hash && window.scrollY > 100) {
      window.history.replaceState(null, '', seo.hash);
    } else if (!seo.hash && window.location.hash && window.scrollY < 200) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, [currentSEO]);

  return {
    activeSectionId,
    currentSEO,
    allSections: SECTIONS_SEO,
    siteMetadata: SITE_METADATA,
  };
}

/**
 * Sitemap & Robots.txt Generator for Italia Immigrazione Milano
 * Automatically generates public/sitemap.xml and public/robots.txt at build time.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.resolve(rootDir, 'public');

const BASE_URL = 'https://italiaimmigrazione.it';
const TODAY = new Date().toISOString().split('T')[0];

const LANGUAGES = [
  'it', 'en', 'ar', 'ur', 'fr', 'es', 'zh', 'hi', 'bn', 'pa', 'ru', 'sq'
];

const SECTIONS = [
  {
    hash: '',
    changefreq: 'daily',
    priority: 1.0,
    title: 'Italia Immigrazione Milano - Home & Servizi Principali',
  },
  {
    hash: '#art-18-ter',
    changefreq: 'daily',
    priority: 0.95,
    title: 'Tutela Sfruttamento Lavorativo & Art. 18-ter T.U. Immigrazione Milano',
  },
  {
    hash: '#servizi',
    changefreq: 'weekly',
    priority: 0.90,
    title: 'Servizi Pratiche Immigrazione a Milano: Permessi, Cittadinanza, Visti',
  },
  {
    hash: '#chi-siamo',
    changefreq: 'monthly',
    priority: 0.85,
    title: 'Chi Siamo - Studio Immigrazione Qualificato a Milano',
  },
  {
    hash: '#come-funziona',
    changefreq: 'monthly',
    priority: 0.80,
    title: 'Come Funziona - Metodo di Lavoro & Iter Burocratico a Milano',
  },
  {
    hash: '#team',
    changefreq: 'monthly',
    priority: 0.85,
    title: 'Il Nostro Team - Consulenti e Avvocati di Immigrazione a Milano',
  },
  {
    hash: '#lingue',
    changefreq: 'monthly',
    priority: 0.80,
    title: 'Assistenza Multilingue Immigrazione Milano - Oltre 100 Lingue',
  },
  {
    hash: '#recensioni',
    changefreq: 'weekly',
    priority: 0.85,
    title: 'Recensioni e Storie di Successo Milano - Casi Risolti Immigrazione & Art. 18-ter',
  },
  {
    hash: '#ufficio',
    changefreq: 'weekly',
    priority: 0.85,
    title: 'Sede a Milano - Via Andrea Maria Ampere 126 (Citta Studi / M2 Piola)',
  },
  {
    hash: '#contatti',
    changefreq: 'weekly',
    priority: 0.90,
    title: 'Contatti Studio Immigrazione Milano - Telefono, WhatsApp e Prenotazione',
  },
];

function generateSitemap() {
  const urlEntries = SECTIONS.map((sec) => {
    const loc = sec.hash ? `${BASE_URL}/${sec.hash}` : `${BASE_URL}/`;

    const hreflangLinks = LANGUAGES.map((lang) => {
      const sep = loc.includes('?') ? '&' : '?';
      return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}${sep}lang=${lang}" />`;
    }).join('\n');

    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`;

    return `  <!-- ${sec.title} -->
  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${sec.changefreq}</changefreq>
    <priority>${sec.priority.toFixed(2)}</priority>
${hreflangLinks}
${xDefault}
  </url>`;
  }).join('\n\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>
`;
}

function generateRobots() {
  return `# robots.txt for Italia Immigrazione Milano
# Website: https://italiaimmigrazione.it
# Generated automatically on build

User-agent: *
Allow: /
Disallow: /admin
Disallow: /?admin=true

# Host & Sitemaps for Googlebot, Bingbot, Yandex, DuckDuckGo
Host: https://italiaimmigrazione.it
Sitemap: ${BASE_URL}/sitemap.xml
`;
}

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Write sitemap.xml
const sitemapPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapPath, generateSitemap(), 'utf-8');
console.log(`[SEO] Successfully generated sitemap with ${SECTIONS.length} sections and ${LANGUAGES.length} language variants: ${sitemapPath}`);

// 2. Write robots.txt
const robotsPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsPath, generateRobots(), 'utf-8');
console.log(`[SEO] Successfully generated robots.txt: ${robotsPath}`);

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SupportedLanguage } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LaborExploitationSection } from './components/LaborExploitationSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { LanguagesSection } from './components/LanguagesSection';
import { EthicsSection } from './components/EthicsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OfficeSection } from './components/OfficeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminAuthModal } from './components/AdminAuthModal';
import { TranslationModal } from './components/TranslationModal';
import { SitemapModal } from './components/SitemapModal';
import { useSectionSEO } from './hooks/useSectionSEO';
import { applyGoogleTranslateLanguage } from './utils/translation';
import { Shield, LogOut, Globe, Check, FileCode } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('it');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isTranslationModalOpen, setIsTranslationModalOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [customLogo, setCustomLogo] = useState<string>('');

  // Dynamic Local SEO & Meta Tags per section
  const { activeSectionId } = useSectionSEO();

  // Check admin state and custom logo on load
  useEffect(() => {
    try {
      const savedAdmin = localStorage.getItem('italia_immigrazione_admin') === 'true';
      const params = new URLSearchParams(window.location.search);
      if (params.get('admin') === 'true' || savedAdmin) {
        if (savedAdmin) {
          setIsAdmin(true);
        } else {
          setIsAdminModalOpen(true);
        }
      }

      const savedLogo = localStorage.getItem('italia_immigrazione_custom_logo');
      if (savedLogo) {
        setCustomLogo(savedLogo);
      }
    } catch {
      // ignore
    }
  }, []);

  // Handle dynamic text direction (RTL for Arabic, Urdu, Persian, Pashto, Hebrew)
  useEffect(() => {
    const rtlLanguages = ['ar', 'ur', 'fa', 'ps', 'he'];
    const isRtl = rtlLanguages.includes(currentLang);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    applyGoogleTranslateLanguage(langCode);
  };

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    } else {
      setConsultationService('');
    }
    setIsConsultationOpen(true);
  };

  const handleLogoutAdmin = () => {
    try {
      localStorage.removeItem('italia_immigrazione_admin');
    } catch {
      // ignore
    }
    setIsAdmin(false);
  };

  return (
    <div className="min-h-screen bg-[#080D16] text-[#F3EFEA] flex flex-col selection:bg-[#C5A880]/30 selection:text-white">
      {/* Top Banner ONLY visible when Owner is authenticated as Admin */}
      {isAdmin && (
        <div className="bg-[#B45F42] text-white py-2 px-4 text-xs flex items-center justify-between sticky top-0 z-50 shadow-md">
          <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>Modalità Amministratore attiva (I normali visitatori non vedono i pulsanti di modifica)</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSitemapOpen(true)}
                className="inline-flex items-center gap-1 bg-black/20 hover:bg-black/30 px-2.5 py-1 rounded-xs transition-colors"
                title="Gestione sitemap.xml e verifica Local SEO per Milano"
              >
                <FileCode className="w-3 h-3 text-[#C5A880]" />
                <span>Sitemap & Local SEO</span>
              </button>
              <button
                type="button"
                onClick={handleLogoutAdmin}
                className="inline-flex items-center gap-1 bg-black/20 hover:bg-black/30 px-2.5 py-1 rounded-xs transition-colors"
              >
                <LogOut className="w-3 h-3" />
                <span>Esci da Admin</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Header with official logo crest and 100+ languages trigger */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenTranslationModal={() => setIsTranslationModalOpen(true)}
        customLogo={customLogo}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Cinematic Hero with Real Milan Architectural Photography */}
        <Hero
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 2. Sfruttamento Lavorativo & Art. 18-ter T.U. Immigrazione (Tutela & Documenti Regolari) */}
        <LaborExploitationSection
          currentLang={currentLang}
          onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
        />

        {/* 3. Chi Siamo / Mission with Real Legal Studio Interior Photography */}
        <AboutSection currentLang={currentLang} />

        {/* 3. Servizi (6 core areas with deep document checklist modal) */}
        <ServicesSection
          currentLang={currentLang}
          onOpenConsultationWithService={(serviceTitle) => handleOpenConsultation(serviceTitle)}
        />

        {/* 4. Come funziona (4-step workflow) */}
        <ProcessSection
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 5. Team di 5 persone (With exact original unedited photos) */}
        <TeamSection
          currentLang={currentLang}
          isAdmin={isAdmin}
        />

        {/* 6. Lingue & Comunicazione with 100+ Languages global modal trigger */}
        <LanguagesSection
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenTranslationModal={() => setIsTranslationModalOpen(true)}
        />

        {/* 7. Esperienza e Collaborazione Legale */}
        <EthicsSection />

        {/* 8. Recensioni & Storie di Successo (Riprova Sociale e Casi Anonimizzati) */}
        <ReviewsSection
          currentLang={currentLang}
          onOpenConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
        />

        {/* 9. Ufficio di Milano with Real Milan Architectural Facade */}
        <OfficeSection currentLang={currentLang} />

        {/* 9. Contatti & Form di Richiesta */}
        <ContactSection
          currentLang={currentLang}
          initialService={consultationService}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenConsultation={() => handleOpenConsultation()}
        isAdmin={isAdmin}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onLogoutAdmin={handleLogoutAdmin}
        onOpenSitemap={() => setIsSitemapOpen(true)}
      />

      {/* Floating WhatsApp Quick Link */}
      <FloatingWhatsApp />

      {/* Fast Consultation Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />

      {/* Owner Admin Auth Modal */}
      <AdminAuthModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onAuthenticated={() => setIsAdmin(true)}
      />

      {/* Global Translation Modal for 100+ World Languages */}
      <TranslationModal
        isOpen={isTranslationModalOpen}
        onClose={() => setIsTranslationModalOpen(false)}
        currentLang={currentLang}
        onSelectLanguage={handleLanguageChange}
      />

      {/* Sitemap & Local SEO Modal */}
      <SitemapModal
        isOpen={isSitemapOpen}
        onClose={() => setIsSitemapOpen(false)}
        activeSectionId={activeSectionId}
      />
    </div>
  );
}

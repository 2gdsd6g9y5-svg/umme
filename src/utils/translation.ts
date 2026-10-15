/**
 * Helper to programmatically trigger Google Translate for all 100+ world languages
 */
export function applyGoogleTranslateLanguage(langCode: string) {
  try {
    if (langCode === 'it') {
      // Clear cookie
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
      
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
      if (combo) {
        combo.value = 'it';
        combo.dispatchEvent(new Event('change'));
      }
      return;
    }

    const val = `/it/${langCode}`;
    document.cookie = `googtrans=${val}; path=/;`;
    document.cookie = `googtrans=${val}; path=/; domain=${window.location.hostname};`;

    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (combo) {
      combo.value = langCode;
      combo.dispatchEvent(new Event('change'));
    }
  } catch (err) {
    console.error('Error applying global translation:', err);
  }
}

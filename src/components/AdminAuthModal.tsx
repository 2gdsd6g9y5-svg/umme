import React, { useState } from 'react';
import { Lock, X, KeyRound, AlertCircle, CheckCircle } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticated: () => void;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onAuthenticated,
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin password for the site owner
    if (password === 'samad2026' || password === 'admin2026' || password === 'italia2026') {
      localStorage.setItem('italia_immigrazione_admin', 'true');
      setError(false);
      setPassword('');
      onAuthenticated();
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-xl shadow-2xl border border-[#E7DED4] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#10263D] text-white p-5 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white p-1"
            aria-label="Chiudi"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-4 h-4 text-[#B45F42]" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#E7DED4]/70">
              AREA RISERVATA AMMINISTRATORE
            </span>
          </div>
          <h3 id="admin-modal-title" className="font-editorial text-xl font-bold">
            Accesso Gestione Sito
          </h3>
          <p className="text-xs text-[#E7DED4]/80 mt-1">
            Solo il proprietario del sito può modificare le foto e i contenuti del team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#10263D] mb-1.5">
              Password Amministratore
            </label>
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Inserisci la password di amministrazione"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#E7DED4] bg-[#FCFAF6] focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B45F42]"
              />
              <KeyRound className="w-4 h-4 text-[#536176] absolute right-3 top-2.5" />
            </div>
            {error && (
              <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Password errata. Riprova.</span>
              </p>
            )}
          </div>

          <div className="text-[11px] text-[#536176] bg-[#FCFAF6] p-2.5 rounded border border-[#E7DED4]/80">
            <strong>Nota di sicurezza:</strong> I normali visitatori del sito vedono solo la versione pubblica e non possono modificare alcuna foto o dato.
          </div>

          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-[#536176] hover:text-[#10263D]"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#B45F42] hover:bg-[#9a4f35] rounded transition-colors shadow-sm"
            >
              Accedi come Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

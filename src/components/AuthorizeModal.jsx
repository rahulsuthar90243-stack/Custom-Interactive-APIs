import React, { useState, useEffect } from 'react';
import { ShieldCheck, ShieldAlert, KeyRound, X, Trash2, CheckCircle2, Info } from 'lucide-react';

export default function AuthorizeModal({ isOpen, onClose, token, onSaveToken, onClearToken }) {
  const [inputToken, setInputToken] = useState(token || '');
  const [decoded, setDecoded] = useState(null);

  useEffect(() => {
    setInputToken(token || '');
  }, [token, isOpen]);

  useEffect(() => {
    if (!inputToken.trim()) {
      setDecoded(null);
      return;
    }
    try {
      const parts = inputToken.trim().split('.');
      if (parts.length === 3) {
        const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
        setDecoded(payload);
      } else {
        setDecoded(null);
      }
    } catch {
      setDecoded(null);
    }
  }, [inputToken]);

  if (!isOpen) return null;

  const handleSave = () => {
    let cleaned = inputToken.trim();
    if (cleaned.toLowerCase().startsWith('bearer ')) {
      cleaned = cleaned.substring(7).trim();
    }
    onSaveToken(cleaned);
    onClose();
  };

  const handleClear = () => {
    setInputToken('');
    setDecoded(null);
    onClearToken();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5 text-slate-800">
            <KeyRound className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold">Available Authorizations</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-800 text-sm">bearerAuth</span>
                <span className="text-xs text-slate-500 ml-2">(http, Bearer)</span>
              </div>
              {token ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Authorized
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300">
                  Not Authorized
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600">
              Enter your JWT Bearer token below. It will automatically be included in the <code className="font-mono bg-slate-200 px-1 py-0.5 rounded text-slate-700">Authorization: Bearer &lt;token&gt;</code> header on all authenticated endpoints.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Value (JWT Token):
              </label>
              <textarea
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                rows={3}
                className="w-full text-xs font-mono p-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 bg-white"
              />
            </div>

            {/* Decoded Token Preview */}
            {decoded && (
              <div className="p-3 bg-indigo-50/70 border border-indigo-200 rounded-md text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-indigo-900">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  Decoded Token Claims:
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-700 font-mono text-[11px] mt-1">
                  <div>
                    <span className="font-semibold text-slate-900">User ID:</span> {decoded.id || decoded.userid || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Role:</span>{" "}
                    <span className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold uppercase text-[10px]">
                      {decoded.role || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Company ID:</span> {decoded.companyId || "N/A"}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Expires:</span>{" "}
                    {decoded.exp ? new Date(decoded.exp * 1000).toLocaleTimeString() : "N/A"}
                  </div>
                </div>
              </div>
            )}

            {/* Quick helper note */}
            <div className="flex items-start gap-2 p-2.5 rounded bg-amber-50/80 border border-amber-200 text-amber-900 text-xs">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed">
                <strong>Tip:</strong> You can obtain a valid JWT token by testing the <code className="font-mono font-semibold">POST /login</code> or <code className="font-mono font-semibold">POST /company</code> endpoint below and copying the returned token, or log in via the BMP UI.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <div>
            {token && (
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear Token
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200/70 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
            >
              Authorize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


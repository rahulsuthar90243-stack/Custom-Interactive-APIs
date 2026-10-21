import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Lock, Copy, Check } from 'lucide-react';
import EndpointDetail from './EndpointDetail.jsx';

export const METHOD_CONFIG = {
  get: {
    bg: 'bg-sky-50',
    border: 'border-sky-300',
    hoverBorder: 'hover:border-sky-400',
    badgeBg: 'bg-sky-600',
    textColor: 'text-sky-950',
    accentText: 'text-sky-700',
  },
  post: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    hoverBorder: 'hover:border-emerald-400',
    badgeBg: 'bg-emerald-600',
    textColor: 'text-emerald-950',
    accentText: 'text-emerald-700',
  },
  put: {
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    hoverBorder: 'hover:border-amber-400',
    badgeBg: 'bg-amber-600',
    textColor: 'text-amber-950',
    accentText: 'text-amber-700',
  },
  patch: {
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    hoverBorder: 'hover:border-amber-400',
    badgeBg: 'bg-amber-500',
    textColor: 'text-amber-950',
    accentText: 'text-amber-700',
  },
  delete: {
    bg: 'bg-rose-50',
    border: 'border-rose-300',
    hoverBorder: 'hover:border-rose-400',
    badgeBg: 'bg-rose-600',
    textColor: 'text-rose-950',
    accentText: 'text-rose-700',
  },
};

export default function EndpointRow({
  path,
  method,
  endpoint,
  isExpanded,
  onToggle,
  serverUrl,
  token,
}) {
  const [copied, setCopied] = useState(false);
  const lowerMethod = method.toLowerCase();
  const config = METHOD_CONFIG[lowerMethod] || METHOD_CONFIG.get;
  const isProtected = endpoint.security && endpoint.security.length > 0;

  const handleCopyUrl = (e) => {
    e.stopPropagation();
    const cleanServer = serverUrl.replace(/\/+$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    navigator.clipboard.writeText(`${cleanServer}${cleanPath}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render path highlighting {param}
  const renderStyledPath = (p) => {
    const parts = p.split(/(\{[^}]+\})/g);
    return parts.map((part, i) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return (
          <span key={i} className="text-indigo-600 font-bold">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div
      className={`rounded-lg border transition-all overflow-hidden mb-3 shadow-2xs ${
        config.border
      } ${isExpanded ? 'ring-2 ring-indigo-500/10' : config.hoverBorder}`}
    >
      {/* COMPACT ROW HEADER */}
      <div
        onClick={onToggle}
        className={`flex items-center justify-between gap-3 px-3.5 py-2.5 cursor-pointer select-none transition-colors ${
          config.bg
        } hover:brightness-98`}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Method badge */}
          <span
            className={`w-18 shrink-0 text-center py-1 rounded text-xs font-bold text-white tracking-wide uppercase font-mono shadow-2xs ${
              config.badgeBg
            }`}
          >
            {method.toUpperCase()}
          </span>

          {/* Path */}
          <span className="font-mono text-xs md:text-sm font-semibold text-slate-800 truncate">
            {renderStyledPath(path)}
          </span>

          {/* Short description */}
          <span className="hidden sm:inline-block text-xs text-slate-500 truncate max-w-md">
            {endpoint.summary}
          </span>
        </div>

        {/* Right side controls: Security lock, Copy URL, Expand arrow */}
        <div className="flex items-center gap-2 shrink-0">
          {isProtected && (
            <span
              title="Requires Bearer JWT Authorization"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-white/80 border border-slate-200 px-2 py-0.5 rounded shadow-2xs"
            >
              <Lock className="w-3 h-3 text-amber-600" />
              <span className="hidden md:inline">Protected</span>
            </span>
          )}

          <button
            type="button"
            onClick={handleCopyUrl}
            title="Copy API Endpoint URL"
            className="p-1.5 rounded text-slate-400 hover:text-slate-700 hover:bg-white/70 transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          <button
            type="button"
            className="p-1 rounded text-slate-500 hover:text-slate-900 transition-transform"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* EXPANDED DETAILS */}
      {isExpanded && (
        <EndpointDetail
          endpoint={endpoint}
          path={path}
          method={method}
          serverUrl={serverUrl}
          token={token}
          methodColor={config}
        />
      )}
    </div>
  );
}


import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function JsonViewer({ data, maxMaxHeight = "max-h-96" }) {
  const [copied, setCopied] = useState(false);

  const jsonString = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Colorize JSON tokens
  const renderHighlightedJson = (text) => {
    if (!text) return null;
    try {
      const parsed = JSON.parse(text);
      const formatted = JSON.stringify(parsed, null, 2);
      
      const parts = formatted.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        (match) => {
          let cls = 'text-sky-300'; // number
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'text-indigo-300 font-medium'; // key
            } else {
              cls = 'text-emerald-300'; // string
            }
          } else if (/true|false/.test(match)) {
            cls = 'text-amber-300'; // boolean
          } else if (/null/.test(match)) {
            cls = 'text-rose-300'; // null
          }
          return `<span class="${cls}">${match}</span>`;
        }
      );

      return <div dangerouslySetInnerHTML={{ __html: parts }} />;
    } catch {
      return <div>{text}</div>;
    }
  };

  return (
    <div className="relative group rounded-md overflow-hidden bg-slate-900 border border-slate-800 text-slate-100 text-xs font-mono">
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800/80 border-b border-slate-700/60 text-slate-400">
        <span className="text-[11px] font-medium tracking-wide">application/json</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] hover:text-white hover:bg-slate-700/80 transition-colors"
          title="Copy JSON"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className={`p-3.5 overflow-x-auto ${maxMaxHeight} custom-scrollbar leading-relaxed`}>
        <pre>{renderHighlightedJson(jsonString)}</pre>
      </div>
    </div>
  );
}


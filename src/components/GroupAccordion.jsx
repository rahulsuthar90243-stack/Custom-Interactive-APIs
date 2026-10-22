import React from 'react';
import { ChevronDown, ChevronRight, Layers } from 'lucide-react';
import EndpointRow from './EndpointRow.jsx';

export default function GroupAccordion({
  tag,
  endpoints,
  isOpen,
  onToggle,
  expandedEndpoints,
  onToggleEndpoint,
  serverUrl,
  token,
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs mb-5 transition-shadow hover:shadow-sm">
      {/* GROUP HEADER ACCORDION BAR */}
      <div
        onClick={onToggle}
        className="flex items-center justify-between px-5 py-4 bg-slate-50/80 hover:bg-slate-100/80 cursor-pointer select-none border-b border-slate-200 transition-colors"
      >
        <div className="flex items-center gap-3">
          <button className="text-slate-500 hover:text-slate-800 transition-transform">
            {isOpen ? (
              <ChevronDown className="w-5 h-5 text-indigo-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-slate-400" />
            )}
          </button>
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                {tag.name}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {endpoints.length} {endpoints.length === 1 ? 'endpoint' : 'endpoints'}
              </span>
            </div>
            {tag.description && (
              <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
                {tag.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ENDPOINTS LIST */}
      {isOpen && (
        <div className="p-4 md:p-5 bg-slate-50/30 space-y-2">
          {endpoints.length === 0 ? (
            <div className="text-center py-6 text-xs text-slate-400">
              No endpoints found matching your search in this group.
            </div>
          ) : (
            endpoints.map(({ path, method, endpoint }) => {
              const endpointKey = `${method}-${path}`;
              const isExpanded = !!expandedEndpoints[endpointKey];

              return (
                <EndpointRow
                  key={endpointKey}
                  path={path}
                  method={method}
                  endpoint={endpoint}
                  isExpanded={isExpanded}
                  onToggle={() => onToggleEndpoint(endpointKey)}
                  serverUrl={serverUrl}
                  token={token}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
}


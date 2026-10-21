import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check, Clock, Server, Send, AlertCircle, ChevronDown, ChevronRight } from 'lucide-react';
import JsonViewer from './JsonViewer.jsx';

export default function EndpointDetail({
  endpoint,
  path,
  method,
  serverUrl,
  token,
  methodColor,
}) {
  const [isTryItOut, setIsTryItOut] = useState(false);
  const [parameters, setParameters] = useState(() => {
    const initial = {};
    if (endpoint.parameters) {
      endpoint.parameters.forEach((param) => {
        initial[param.name] = param.schema?.example ?? '';
      });
    }
    return initial;
  });

  const [requestBody, setRequestBody] = useState(() => {
    if (endpoint.requestBody?.content?.['application/json']?.example) {
      return JSON.stringify(
        endpoint.requestBody.content['application/json'].example,
        null,
        2
      );
    }
    return '';
  });

  const [bodyError, setBodyError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [activeTab, setActiveTab] = useState('example'); // 'example' | 'schema'
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [showHeaders, setShowHeaders] = useState(false);

  const handleParamChange = (name, value) => {
    setParameters((prev) => ({ ...prev, [name]: value }));
  };

  const handleBodyChange = (value) => {
    setRequestBody(value);
    if (!value.trim()) {
      setBodyError(null);
      return;
    }
    try {
      JSON.parse(value);
      setBodyError(null);
    } catch (err) {
      setBodyError(err.message);
    }
  };

  const handleResetBody = () => {
    if (endpoint.requestBody?.content?.['application/json']?.example) {
      setRequestBody(
        JSON.stringify(
          endpoint.requestBody.content['application/json'].example,
          null,
          2
        )
      );
      setBodyError(null);
    }
  };

  // Build the live URL
  const constructUrl = () => {
    let resolvedPath = path;
    const queryParams = new URLSearchParams();

    if (endpoint.parameters) {
      endpoint.parameters.forEach((param) => {
        const val = parameters[param.name] || param.schema?.example || `{${param.name}}`;
        if (param.in === 'path') {
          resolvedPath = resolvedPath.replace(`{${param.name}}`, encodeURIComponent(val));
        } else if (param.in === 'query' && parameters[param.name]) {
          queryParams.append(param.name, parameters[param.name]);
        }
      });
    }

    const cleanServer = serverUrl.replace(/\/+$/, '');
    const cleanPath = resolvedPath.startsWith('/') ? resolvedPath : `/${resolvedPath}`;
    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';

    return `${cleanServer}${cleanPath}${queryString}`;
  };

  // Generate curl command
  const generateCurl = () => {
    const url = constructUrl();
    const upperMethod = method.toUpperCase();
    let curl = `curl -X '${upperMethod}' \\\n  '${url}'`;

    curl += ` \\\n  -H 'accept: application/json'`;

    if (['POST', 'PUT', 'PATCH'].includes(upperMethod) && requestBody) {
      curl += ` \\\n  -H 'Content-Type: application/json'`;
    }

    if (token) {
      curl += ` \\\n  -H 'Authorization: Bearer ${token}'`;
    }

    if (['POST', 'PUT', 'PATCH'].includes(upperMethod) && requestBody.trim()) {
      const minified = requestBody.replace(/'/g, `'\\''`);
      curl += ` \\\n  -d '${minified}'`;
    }

    return curl;
  };

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(generateCurl());
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const handleExecute = async () => {
    if (bodyError) return;

    setIsLoading(true);
    const url = constructUrl();
    const upperMethod = method.toUpperCase();

    const headers = {
      Accept: 'application/json',
    };

    if (['POST', 'PUT', 'PATCH'].includes(upperMethod) && requestBody) {
      headers['Content-Type'] = 'application/json';
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const startTime = performance.now();

    try {
      const fetchOptions = {
        method: upperMethod,
        headers,
        credentials: 'include', // Allows HTTP-only cookies
      };

      if (['POST', 'PUT', 'PATCH'].includes(upperMethod) && requestBody.trim()) {
        fetchOptions.body = requestBody;
      }

      const response = await fetch(url, fetchOptions);
      const duration = Math.round(performance.now() - startTime);

      const responseHeaders = {};
      response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
      });

      let responseData;
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      setExecutionResult({
        status: response.status,
        statusText: response.statusText,
        duration,
        headers: responseHeaders,
        data: responseData,
        requestUrl: url,
        curl: generateCurl(),
        error: false,
      });
    } catch (err) {
      const duration = Math.round(performance.now() - startTime);
      setExecutionResult({
        status: 0,
        statusText: 'Network / Connection Error',
        duration,
        headers: {},
        data: {
          error: err.message,
          hint: 'Ensure your BMP Backend server is running at ' + serverUrl + ' and CORS allows origin.',
        },
        requestUrl: url,
        curl: generateCurl(),
        error: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status) => {
    if (status >= 200 && status < 300) return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (status >= 300 && status < 400) return 'bg-sky-100 text-sky-800 border-sky-300';
    if (status >= 400 && status < 500) return 'bg-amber-100 text-amber-800 border-amber-300';
    if (status >= 500) return 'bg-rose-100 text-rose-800 border-rose-300';
    return 'bg-slate-200 text-slate-800 border-slate-300';
  };

  return (
    <div className="p-4 md:p-6 bg-white border-t border-slate-200 space-y-6 text-sm">
      {/* Top summary & Try it out button */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-100">
        <p className="text-slate-600 text-xs md:text-sm max-w-2xl leading-relaxed">
          {endpoint.description || endpoint.summary}
        </p>
        <div>
          {!isTryItOut ? (
            <button
              onClick={() => setIsTryItOut(true)}
              className="px-4 py-1.5 text-xs font-semibold rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors"
            >
              Try it out
            </button>
          ) : (
            <button
              onClick={() => {
                setIsTryItOut(false);
                setExecutionResult(null);
              }}
              className="px-4 py-1.5 text-xs font-semibold rounded-md border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* PARAMETERS SECTION */}
      {endpoint.parameters && endpoint.parameters.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Parameters
          </h4>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50/50">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-600 font-semibold">
                  <th className="py-2.5 px-3 w-40">Name</th>
                  <th className="py-2.5 px-3">Description</th>
                  {isTryItOut && <th className="py-2.5 px-3 w-56">Value</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {endpoint.parameters.map((param) => (
                  <tr key={param.name} className="hover:bg-white/80 transition-colors">
                    <td className="py-3 px-3 align-top font-mono">
                      <div className="font-semibold text-slate-900">{param.name}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {param.schema?.type || 'string'}
                        {param.required && (
                          <span className="text-rose-600 font-bold ml-1">* required</span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400">({param.in})</div>
                    </td>
                    <td className="py-3 px-3 align-top text-slate-600">
                      <p>{param.description || 'No description provided.'}</p>
                      {param.schema?.example && !isTryItOut && (
                        <div className="mt-1 text-[11px]">
                          <span className="text-slate-400">Example: </span>
                          <code className="px-1 py-0.5 bg-slate-200/80 rounded font-mono text-slate-700">
                            {param.schema.example}
                          </code>
                        </div>
                      )}
                    </td>
                    {isTryItOut && (
                      <td className="py-3 px-3 align-top">
                        <input
                          type="text"
                          value={parameters[param.name] ?? ''}
                          onChange={(e) => handleParamChange(param.name, e.target.value)}
                          placeholder={param.schema?.example ?? param.name}
                          className="w-full px-2.5 py-1.5 text-xs font-mono rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                        />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* REQUEST BODY SECTION */}
      {endpoint.requestBody && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Request Body
              {endpoint.requestBody.required && (
                <span className="text-rose-600 font-bold ml-1">* required</span>
              )}
            </h4>
            {isTryItOut && (
              <button
                type="button"
                onClick={handleResetBody}
                className="inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Sample
              </button>
            )}
          </div>

          {isTryItOut ? (
            <div className="space-y-1.5">
              <textarea
                value={requestBody}
                onChange={(e) => handleBodyChange(e.target.value)}
                rows={8}
                className={`w-full font-mono text-xs p-3 rounded-lg border bg-slate-900 text-emerald-300 custom-scrollbar focus:outline-none focus:ring-2 ${
                  bodyError
                    ? 'border-rose-500 focus:ring-rose-500/30'
                    : 'border-slate-800 focus:ring-indigo-500/30'
                }`}
              />
              {bodyError && (
                <div className="flex items-center gap-1.5 text-xs text-rose-600">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Invalid JSON: {bodyError}</span>
                </div>
              )}
            </div>
          ) : (
            <JsonViewer
              data={
                endpoint.requestBody.content?.['application/json']?.example ||
                endpoint.requestBody.content?.['application/json']?.schema ||
                {}
              }
            />
          )}
        </div>
      )}

      {/* EXECUTE / TRIGGER BUTTON */}
      {isTryItOut && (
        <div className="pt-2">
          <button
            onClick={handleExecute}
            disabled={isLoading || !!bodyError}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold text-xs text-white shadow-sm transition-all inline-flex items-center justify-center gap-2 ${
              isLoading || !!bodyError
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-98'
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Executing Request...
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                Execute
              </>
            )}
          </button>
        </div>
      )}

      {/* EXECUTION RESULTS SECTION */}
      {executionResult && (
        <div className="space-y-4 pt-4 border-t-2 border-slate-200">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Server className="w-4 h-4 text-indigo-600" />
              Live Server Response
            </h4>
            <button
              onClick={() => setExecutionResult(null)}
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              Clear Response
            </button>
          </div>

          {/* Request summary URL & cURL */}
          <div className="space-y-2 text-xs">
            <div className="bg-slate-100 p-2.5 rounded-md border border-slate-200 flex flex-wrap items-center justify-between gap-2">
              <div className="font-mono text-slate-800 truncate">
                <span className="font-semibold text-slate-500 uppercase mr-2">{method}</span>
                {executionResult.requestUrl}
              </div>
              <button
                onClick={handleCopyCurl}
                className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-[11px] font-medium transition-colors"
              >
                {copiedCurl ? (
                  <Check className="w-3 h-3 text-emerald-600" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                <span>{copiedCurl ? 'cURL Copied' : 'Copy cURL'}</span>
              </button>
            </div>
          </div>

          {/* Status and timing badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-3 py-1 rounded-md text-xs font-bold border ${getStatusColor(
                executionResult.status
              )}`}
            >
              {executionResult.status} {executionResult.statusText}
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700">
              <Clock className="w-3 h-3 text-slate-400" />
              {executionResult.duration} ms
            </span>

            {token ? (
              <span className="text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Authenticated with Bearer Token
              </span>
            ) : (
              <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                No Token (Public / Cookie Auth)
              </span>
            )}
          </div>

          {/* Response Body */}
          <div className="space-y-1.5">
            <div className="text-xs font-semibold text-slate-700">Response Body:</div>
            <JsonViewer data={executionResult.data} maxMaxHeight="max-h-[28rem]" />
          </div>

          {/* Response Headers Collapsible */}
          {Object.keys(executionResult.headers).length > 0 && (
            <div className="border border-slate-200 rounded-md overflow-hidden bg-slate-50">
              <button
                type="button"
                onClick={() => setShowHeaders(!showHeaders)}
                className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <span>Response Headers ({Object.keys(executionResult.headers).length})</span>
                {showHeaders ? (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                )}
              </button>
              {showHeaders && (
                <div className="p-3 border-t border-slate-200 bg-white font-mono text-[11px] space-y-1 text-slate-600 max-h-48 overflow-y-auto custom-scrollbar">
                  {Object.entries(executionResult.headers).map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="font-semibold text-slate-800">{k}:</span>
                      <span className="truncate">{v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* DOCUMENTED RESPONSES SECTION (from OpenAPI) */}
      {!executionResult && endpoint.responses && (
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Documented Responses
          </h4>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-600 font-semibold">
                  <th className="py-2.5 px-3 w-28">Code</th>
                  <th className="py-2.5 px-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {Object.entries(endpoint.responses).map(([code, resp]) => (
                  <tr key={code} className="hover:bg-slate-50/50">
                    <td className="py-2.5 px-3 align-top">
                      <span
                        className={`inline-block px-2 py-0.5 rounded font-mono font-bold text-xs border ${getStatusColor(
                          parseInt(code, 10)
                        )}`}
                      >
                        {code}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 align-top text-slate-700">
                      <p className="font-medium">{resp.description}</p>
                      {resp.content?.['application/json']?.example && (
                        <div className="mt-2">
                          <JsonViewer
                            data={resp.content['application/json'].example}
                            maxMaxHeight="max-h-48"
                          />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}


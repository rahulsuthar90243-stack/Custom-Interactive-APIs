(function () {
  const E = document.createElement("link").relList;
  if (E && E.supports && E.supports("modulepreload")) return;
  for (const M of document.querySelectorAll('link[rel="modulepreload"]')) d(M);
  new MutationObserver((M) => {
    for (const Y of M)
      if (Y.type === "childList")
        for (const K of Y.addedNodes)
          K.tagName === "LINK" && K.rel === "modulepreload" && d(K);
  }).observe(document, { childList: !0, subtree: !0 });
  function C(M) {
    const Y = {};
    return (
      M.integrity && (Y.integrity = M.integrity),
      M.referrerPolicy && (Y.referrerPolicy = M.referrerPolicy),
      M.crossOrigin === "use-credentials"
        ? (Y.credentials = "include")
        : M.crossOrigin === "anonymous"
          ? (Y.credentials = "omit")
          : (Y.credentials = "same-origin"),
      Y
    );
  }
  function d(M) {
    if (M.ep) return;
    M.ep = !0;
    const Y = C(M);
    fetch(M.href, Y);
  }
})();
function gm(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default")
    ? b.default
    : b;
}
var xf = { exports: {} },
  iu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im;
function B1() {
  if (im) return iu;
  im = 1;
  var b = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.fragment");
  function C(d, M, Y) {
    var K = null;
    if (
      (Y !== void 0 && (K = "" + Y),
      M.key !== void 0 && (K = "" + M.key),
      "key" in M)
    ) {
      Y = {};
      for (var W in M) W !== "key" && (Y[W] = M[W]);
    } else Y = M;
    return (
      (M = Y.ref),
      { $$typeof: b, type: d, key: K, ref: M !== void 0 ? M : null, props: Y }
    );
  }
  return ((iu.Fragment = E), (iu.jsx = C), (iu.jsxs = C), iu);
}
var cm;
function w1() {
  return (cm || ((cm = 1), (xf.exports = B1())), xf.exports);
}
var s = w1(),
  Sf = { exports: {} },
  k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sm;
function Y1() {
  if (sm) return k;
  sm = 1;
  var b = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    Y = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    W = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    ie = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    j = Symbol.for("react.view_transition"),
    de = Symbol.iterator;
  function te(r) {
    return r === null || typeof r != "object"
      ? null
      : ((r = (de && r[de]) || r["@@iterator"]),
        typeof r == "function" ? r : null);
  }
  var ge = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    xe = {};
  function Ue(r, N, B) {
    ((this.props = r),
      (this.context = N),
      (this.refs = xe),
      (this.updater = B || ge));
  }
  ((Ue.prototype.isReactComponent = {}),
    (Ue.prototype.setState = function (r, N) {
      if (typeof r != "object" && typeof r != "function" && r != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, r, N, "setState");
    }),
    (Ue.prototype.forceUpdate = function (r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    }));
  function Ct() {}
  Ct.prototype = Ue.prototype;
  function ke(r, N, B) {
    ((this.props = r),
      (this.context = N),
      (this.refs = xe),
      (this.updater = B || ge));
  }
  var $e = (ke.prototype = new Ct());
  (($e.constructor = ke), R($e, Ue.prototype), ($e.isPureReactComponent = !0));
  var qe = Array.isArray;
  function $() {}
  var le = { H: null, A: null, T: null, S: null },
    dt = Object.prototype.hasOwnProperty;
  function it(r, N, B) {
    var H = B.ref;
    return {
      $$typeof: b,
      type: r,
      key: N,
      ref: H !== void 0 ? H : null,
      props: B,
    };
  }
  function We(r, N) {
    return it(r.type, N, r.props);
  }
  function G(r) {
    return typeof r == "object" && r !== null && r.$$typeof === b;
  }
  function oe(r) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      r.replace(/[=:]/g, function (B) {
        return N[B];
      })
    );
  }
  var Fe = /\/+/g;
  function Se(r, N) {
    return typeof r == "object" && r !== null && r.key != null
      ? oe("" + r.key)
      : N.toString(36);
  }
  function _(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (
          (typeof r.status == "string"
            ? r.then($, $)
            : ((r.status = "pending"),
              r.then(
                function (N) {
                  r.status === "pending" &&
                    ((r.status = "fulfilled"), (r.value = N));
                },
                function (N) {
                  r.status === "pending" &&
                    ((r.status = "rejected"), (r.reason = N));
                },
              )),
          r.status)
        ) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function X(r, N, B, H, ae) {
    var he = typeof r;
    (he === "undefined" || he === "boolean") && (r = null);
    var ye = !1;
    if (r === null) ye = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case b:
            case E:
              ye = !0;
              break;
            case z:
              return ((ye = r._init), X(ye(r._payload), N, B, H, ae));
          }
      }
    if (ye)
      return (
        (ae = ae(r)),
        (ye = H === "" ? "." + Se(r, 0) : H),
        qe(ae)
          ? ((B = ""),
            ye != null && (B = ye.replace(Fe, "$&/") + "/"),
            X(ae, N, B, "", function (ul) {
              return ul;
            }))
          : ae != null &&
            (G(ae) &&
              (ae = We(
                ae,
                B +
                  (ae.key == null || (r && r.key === ae.key)
                    ? ""
                    : ("" + ae.key).replace(Fe, "$&/") + "/") +
                  ye,
              )),
            N.push(ae)),
        1
      );
    ye = 0;
    var q = H === "" ? "." : H + ":";
    if (qe(r))
      for (var J = 0; J < r.length; J++)
        ((H = r[J]), (he = q + Se(H, J)), (ye += X(H, N, B, he, ae)));
    else if (((J = te(r)), typeof J == "function"))
      for (r = J.call(r), J = 0; !(H = r.next()).done; )
        ((H = H.value), (he = q + Se(H, J++)), (ye += X(H, N, B, he, ae)));
    else if (he === "object") {
      if (typeof r.then == "function") return X(_(r), N, B, H, ae);
      throw (
        (N = String(r)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(r).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ye;
  }
  function L(r, N, B) {
    if (r == null) return r;
    var H = [],
      ae = 0;
    return (
      X(r, H, "", "", function (he) {
        return N.call(B, he, ae++);
      }),
      H
    );
  }
  function ce(r) {
    if (r._status === -1) {
      var N = r._result,
        B = N();
      (B.then(
        function (H) {
          (r._status === 0 || r._status === -1) &&
            ((r._status = 1),
            (r._result = H),
            B.status === void 0 && ((B.status = "fulfilled"), (B.value = H)));
        },
        function (H) {
          (r._status === 0 || r._status === -1) &&
            ((r._status = 2),
            (r._result = H),
            B.status === void 0 && ((B.status = "rejected"), (B.reason = H)));
        },
      ),
        r._status === -1 && ((r._status = 0), (r._result = B)));
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var A =
    typeof reportError == "function"
      ? reportError
      : function (r) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof r == "object" &&
                r !== null &&
                typeof r.message == "string"
                  ? String(r.message)
                  : String(r),
              error: r,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", r);
            return;
          }
          console.error(r);
        };
  function V(r) {
    var N = le.T,
      B = {};
    ((B.types = N !== null ? N.types : null), (le.T = B));
    try {
      var H = r(),
        ae = le.S;
      (ae !== null && ae(B, H),
        typeof H == "object" &&
          H !== null &&
          typeof H.then == "function" &&
          H.then($, A));
    } catch (he) {
      A(he);
    } finally {
      (N !== null && B.types !== null && (N.types = B.types), (le.T = N));
    }
  }
  function P(r) {
    var N = le.T;
    if (N !== null) {
      var B = N.types;
      B === null ? (N.types = [r]) : B.indexOf(r) === -1 && B.push(r);
    } else V(P.bind(null, r));
  }
  var De = {
    map: L,
    forEach: function (r, N, B) {
      L(
        r,
        function () {
          N.apply(this, arguments);
        },
        B,
      );
    },
    count: function (r) {
      var N = 0;
      return (
        L(r, function () {
          N++;
        }),
        N
      );
    },
    toArray: function (r) {
      return (
        L(r, function (N) {
          return N;
        }) || []
      );
    },
    only: function (r) {
      if (!G(r))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return r;
    },
  };
  return (
    (k.Activity = p),
    (k.Children = De),
    (k.Component = Ue),
    (k.Fragment = C),
    (k.Profiler = M),
    (k.PureComponent = ke),
    (k.StrictMode = d),
    (k.Suspense = Q),
    (k.ViewTransition = j),
    (k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = le),
    (k.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (r) {
        return le.H.useMemoCache(r);
      },
    }),
    (k.addTransitionType = P),
    (k.cache = function (r) {
      return function () {
        return r.apply(null, arguments);
      };
    }),
    (k.cacheSignal = function () {
      return null;
    }),
    (k.cloneElement = function (r, N, B) {
      if (r == null)
        throw Error(
          "The argument must be a React element, but you passed " + r + ".",
        );
      var H = R({}, r.props),
        ae = r.key;
      if (N != null)
        for (he in (N.key !== void 0 && (ae = "" + N.key), N))
          !dt.call(N, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && N.ref === void 0) ||
            (H[he] = N[he]);
      var he = arguments.length - 2;
      if (he === 1) H.children = B;
      else if (1 < he) {
        for (var ye = Array(he), q = 0; q < he; q++) ye[q] = arguments[q + 2];
        H.children = ye;
      }
      return it(r.type, ae, H);
    }),
    (k.createContext = function (r) {
      return (
        (r = {
          $$typeof: K,
          _currentValue: r,
          _currentValue2: r,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (r.Provider = r),
        (r.Consumer = { $$typeof: Y, _context: r }),
        r
      );
    }),
    (k.createElement = function (r, N, B) {
      var H,
        ae = {},
        he = null;
      if (N != null)
        for (H in (N.key !== void 0 && (he = "" + N.key), N))
          dt.call(N, H) &&
            H !== "key" &&
            H !== "__self" &&
            H !== "__source" &&
            (ae[H] = N[H]);
      var ye = arguments.length - 2;
      if (ye === 1) ae.children = B;
      else if (1 < ye) {
        for (var q = Array(ye), J = 0; J < ye; J++) q[J] = arguments[J + 2];
        ae.children = q;
      }
      if (r && r.defaultProps)
        for (H in ((ye = r.defaultProps), ye))
          ae[H] === void 0 && (ae[H] = ye[H]);
      return it(r, he, ae);
    }),
    (k.createRef = function () {
      return { current: null };
    }),
    (k.forwardRef = function (r) {
      return { $$typeof: W, render: r };
    }),
    (k.isValidElement = G),
    (k.lazy = function (r) {
      return { $$typeof: z, _payload: { _status: -1, _result: r }, _init: ce };
    }),
    (k.memo = function (r, N) {
      return { $$typeof: ie, type: r, compare: N === void 0 ? null : N };
    }),
    (k.startTransition = V),
    (k.unstable_useCacheRefresh = function () {
      return le.H.useCacheRefresh();
    }),
    (k.use = function (r) {
      return le.H.use(r);
    }),
    (k.useActionState = function (r, N, B) {
      return le.H.useActionState(r, N, B);
    }),
    (k.useCallback = function (r, N) {
      return le.H.useCallback(r, N);
    }),
    (k.useContext = function (r) {
      return le.H.useContext(r);
    }),
    (k.useDebugValue = function () {}),
    (k.useDeferredValue = function (r, N) {
      return le.H.useDeferredValue(r, N);
    }),
    (k.useEffect = function (r, N) {
      return le.H.useEffect(r, N);
    }),
    (k.useEffectEvent = function (r) {
      return le.H.useEffectEvent(r);
    }),
    (k.useId = function () {
      return le.H.useId();
    }),
    (k.useImperativeHandle = function (r, N, B) {
      return le.H.useImperativeHandle(r, N, B);
    }),
    (k.useInsertionEffect = function (r, N) {
      return le.H.useInsertionEffect(r, N);
    }),
    (k.useLayoutEffect = function (r, N) {
      return le.H.useLayoutEffect(r, N);
    }),
    (k.useMemo = function (r, N) {
      return le.H.useMemo(r, N);
    }),
    (k.useOptimistic = function (r, N) {
      return le.H.useOptimistic(r, N);
    }),
    (k.useReducer = function (r, N, B) {
      return le.H.useReducer(r, N, B);
    }),
    (k.useRef = function (r) {
      return le.H.useRef(r);
    }),
    (k.useState = function (r) {
      return le.H.useState(r);
    }),
    (k.useSyncExternalStore = function (r, N, B) {
      return le.H.useSyncExternalStore(r, N, B);
    }),
    (k.useTransition = function () {
      return le.H.useTransition();
    }),
    (k.version = "19.3.1"),
    k
  );
}
var fm;
function Cf() {
  return (fm || ((fm = 1), (Sf.exports = Y1())), Sf.exports);
}
var re = Cf();
const G1 = gm(re);
var Tf = { exports: {} },
  cu = {},
  Nf = { exports: {} },
  Ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var om;
function X1() {
  return (
    om ||
      ((om = 1),
      (function (b) {
        function E(_, X) {
          var L = _.length;
          _.push(X);
          e: for (; 0 < L; ) {
            var ce = (L - 1) >>> 1,
              A = _[ce];
            if (0 < M(A, X)) ((_[ce] = X), (_[L] = A), (L = ce));
            else break e;
          }
        }
        function C(_) {
          return _.length === 0 ? null : _[0];
        }
        function d(_) {
          if (_.length === 0) return null;
          var X = _[0],
            L = _.pop();
          if (L !== X) {
            _[0] = L;
            e: for (var ce = 0, A = _.length, V = A >>> 1; ce < V; ) {
              var P = 2 * (ce + 1) - 1,
                De = _[P],
                r = P + 1,
                N = _[r];
              if (0 > M(De, L))
                r < A && 0 > M(N, De)
                  ? ((_[ce] = N), (_[r] = L), (ce = r))
                  : ((_[ce] = De), (_[P] = L), (ce = P));
              else if (r < A && 0 > M(N, L))
                ((_[ce] = N), (_[r] = L), (ce = r));
              else break e;
            }
          }
          return X;
        }
        function M(_, X) {
          var L = _.sortIndex - X.sortIndex;
          return L !== 0 ? L : _.id - X.id;
        }
        if (
          ((b.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var Y = performance;
          b.unstable_now = function () {
            return Y.now();
          };
        } else {
          var K = Date,
            W = K.now();
          b.unstable_now = function () {
            return K.now() - W;
          };
        }
        var Q = [],
          ie = [],
          z = 1,
          p = null,
          j = 3,
          de = !1,
          te = !1,
          ge = !1,
          R = !1,
          xe = typeof setTimeout == "function" ? setTimeout : null,
          Ue = typeof clearTimeout == "function" ? clearTimeout : null,
          Ct = typeof setImmediate < "u" ? setImmediate : null;
        function ke(_) {
          for (var X = C(ie); X !== null; ) {
            if (X.callback === null) d(ie);
            else if (X.startTime <= _)
              (d(ie), (X.sortIndex = X.expirationTime), E(Q, X));
            else break;
            X = C(ie);
          }
        }
        function $e(_) {
          if (((ge = !1), ke(_), !te))
            if (C(Q) !== null) ((te = !0), qe || ((qe = !0), G()));
            else {
              var X = C(ie);
              X !== null && Se($e, X.startTime - _);
            }
        }
        var qe = !1,
          $ = -1,
          le = 5,
          dt = -1;
        function it() {
          return R ? !0 : !(b.unstable_now() - dt < le);
        }
        function We() {
          if (((R = !1), qe)) {
            var _ = b.unstable_now();
            dt = _;
            var X = !0;
            try {
              e: {
                ((te = !1), ge && ((ge = !1), Ue($), ($ = -1)), (de = !0));
                var L = j;
                try {
                  t: {
                    for (
                      ke(_), p = C(Q);
                      p !== null && !(p.expirationTime > _ && it());
                    ) {
                      var ce = p.callback;
                      if (typeof ce == "function") {
                        ((p.callback = null), (j = p.priorityLevel));
                        var A = ce(p.expirationTime <= _);
                        if (((_ = b.unstable_now()), typeof A == "function")) {
                          ((p.callback = A), ke(_), (X = !0));
                          break t;
                        }
                        (p === C(Q) && d(Q), ke(_));
                      } else d(Q);
                      p = C(Q);
                    }
                    if (p !== null) X = !0;
                    else {
                      var V = C(ie);
                      (V !== null && Se($e, V.startTime - _), (X = !1));
                    }
                  }
                  break e;
                } finally {
                  ((p = null), (j = L), (de = !1));
                }
                X = void 0;
              }
            } finally {
              X ? G() : (qe = !1);
            }
          }
        }
        var G;
        if (typeof Ct == "function")
          G = function () {
            Ct(We);
          };
        else if (typeof MessageChannel < "u") {
          var oe = new MessageChannel(),
            Fe = oe.port2;
          ((oe.port1.onmessage = We),
            (G = function () {
              Fe.postMessage(null);
            }));
        } else
          G = function () {
            xe(We, 0);
          };
        function Se(_, X) {
          $ = xe(function () {
            _(b.unstable_now());
          }, X);
        }
        ((b.unstable_IdlePriority = 5),
          (b.unstable_ImmediatePriority = 1),
          (b.unstable_LowPriority = 4),
          (b.unstable_NormalPriority = 3),
          (b.unstable_Profiling = null),
          (b.unstable_UserBlockingPriority = 2),
          (b.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (b.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (le = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (b.unstable_getCurrentPriorityLevel = function () {
            return j;
          }),
          (b.unstable_next = function (_) {
            switch (j) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = j;
            }
            var L = j;
            j = X;
            try {
              return _();
            } finally {
              j = L;
            }
          }),
          (b.unstable_requestPaint = function () {
            R = !0;
          }),
          (b.unstable_runWithPriority = function (_, X) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var L = j;
            j = _;
            try {
              return X();
            } finally {
              j = L;
            }
          }),
          (b.unstable_scheduleCallback = function (_, X, L) {
            var ce = b.unstable_now();
            switch (
              (typeof L == "object" && L !== null
                ? ((L = L.delay),
                  (L = typeof L == "number" && 0 < L ? ce + L : ce))
                : (L = ce),
              _)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = L + A),
              (_ = {
                id: z++,
                callback: X,
                priorityLevel: _,
                startTime: L,
                expirationTime: A,
                sortIndex: -1,
              }),
              L > ce
                ? ((_.sortIndex = L),
                  E(ie, _),
                  C(Q) === null &&
                    _ === C(ie) &&
                    (ge ? (Ue($), ($ = -1)) : (ge = !0), Se($e, L - ce)))
                : ((_.sortIndex = A),
                  E(Q, _),
                  te || de || ((te = !0), qe || ((qe = !0), G()))),
              _
            );
          }),
          (b.unstable_shouldYield = it),
          (b.unstable_wrapCallback = function (_) {
            var X = j;
            return function () {
              var L = j;
              j = X;
              try {
                return _.apply(this, arguments);
              } finally {
                j = L;
              }
            };
          }));
      })(Ef)),
    Ef
  );
}
var rm;
function Q1() {
  return (rm || ((rm = 1), (Nf.exports = X1())), Nf.exports);
}
var jf = { exports: {} },
  ut = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dm;
function L1() {
  if (dm) return ut;
  dm = 1;
  var b = Cf();
  function E(z) {
    var p = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        p += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      z +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function C() {}
  var d = {
      d: {
        f: C,
        r: function () {
          throw Error(E(522));
        },
        D: C,
        C,
        L: C,
        m: C,
        X: C,
        S: C,
        M: C,
      },
      p: 0,
      findDOMNode: null,
    },
    M = Symbol.for("react.portal"),
    Y = Symbol.for("react.recoverable"),
    K = Symbol.for("react.optimistic_key");
  function W(z, p, j) {
    var de =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: M,
      key: de == null ? null : de === K ? K : "" + de,
      children: z,
      containerInfo: p,
      implementation: j,
    };
  }
  var Q = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ie(z, p) {
    if (z === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (ut.browser = function (z) {
      return { $$typeof: Y, _reason: z };
    }),
    (ut.createPortal = function (z, p) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(E(299));
      return W(z, p, null, j);
    }),
    (ut.flushSync = function (z) {
      var p = Q.T,
        j = d.p;
      try {
        if (((Q.T = null), (d.p = 2), z)) return z();
      } finally {
        ((Q.T = p), (d.p = j), d.d.f());
      }
    }),
    (ut.preconnect = function (z, p) {
      typeof z == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        d.d.C(z, p));
    }),
    (ut.prefetchDNS = function (z) {
      typeof z == "string" && d.d.D(z);
    }),
    (ut.preinit = function (z, p) {
      if (typeof z == "string" && p && typeof p.as == "string") {
        var j = p.as,
          de = ie(j, p.crossOrigin),
          te = typeof p.integrity == "string" ? p.integrity : void 0,
          ge = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        j === "style"
          ? d.d.S(z, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: de,
              integrity: te,
              fetchPriority: ge,
            })
          : j === "script" &&
            d.d.X(z, {
              crossOrigin: de,
              integrity: te,
              fetchPriority: ge,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ut.preinitModule = function (z, p) {
      if (typeof z == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var j = ie(p.as, p.crossOrigin);
            d.d.M(z, {
              crossOrigin: j,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
              fetchPriority:
                typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
            });
          }
        } else p == null && d.d.M(z);
    }),
    (ut.preload = function (z, p) {
      if (
        typeof z == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var j = p.as,
          de = ie(j, p.crossOrigin);
        d.d.L(z, j, {
          crossOrigin: de,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ut.preloadModule = function (z, p) {
      if (typeof z == "string")
        if (p) {
          var j = ie(p.as, p.crossOrigin);
          d.d.m(z, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: j,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority:
              typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          });
        } else d.d.m(z);
    }),
    (ut.requestFormReset = function (z) {
      d.d.r(z);
    }),
    (ut.unstable_batchedUpdates = function (z, p) {
      return z(p);
    }),
    (ut.useFormState = function (z, p, j) {
      return Q.H.useFormState(z, p, j);
    }),
    (ut.useFormStatus = function () {
      return Q.H.useHostTransitionStatus();
    }),
    (ut.version = "19.3.1"),
    ut
  );
}
var mm;
function Z1() {
  if (mm) return jf.exports;
  mm = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (E) {
        console.error(E);
      }
  }
  return (b(), (jf.exports = L1()), jf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hm;
function V1() {
  if (hm) return cu;
  hm = 1;
  var b = Q1(),
    E = Cf(),
    C = Z1();
  function d(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function M(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Y(e) {
    for (var t = e, l = t; l && !l.alternate; )
      ((t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return));
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function K(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function W(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Q(e) {
    if (Y(e) !== e) throw Error(d(188));
  }
  function ie(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Y(e)), t === null)) throw Error(d(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return (Q(n), e);
          if (u === a) return (Q(n), t);
          u = u.sibling;
        }
        throw Error(d(188));
      }
      if (l.return !== a.return) ((l = n), (a = u));
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === l) {
            ((i = !0), (l = n), (a = u));
            break;
          }
          if (c === a) {
            ((i = !0), (a = n), (l = u));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === l) {
              ((i = !0), (l = u), (a = n));
              break;
            }
            if (c === a) {
              ((i = !0), (a = u), (l = n));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (l.alternate !== a) throw Error(d(190));
    }
    if (l.tag !== 3) throw Error(d(188));
    return l.stateNode.current === l ? e : t;
  }
  function z(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = z(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  function p(e, t, l, a, n, u) {
    for (; e !== null; ) {
      if (
        ((e.tag === 5 || e.tag === 27 || e.tag === 6) && l(e, a, n, u)) ||
        ((e.tag !== 22 || e.memoizedState === null) &&
          (t || (e.tag !== 5 && e.tag !== 27)) &&
          p(e.child, t, l, a, n, u))
      )
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function j(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function de(e) {
    var t = !1;
    for (
      e = e.return;
      e !== null &&
      (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27));
    )
      e = e.return;
    return t;
  }
  function te(e) {
    var t = [null, null],
      l = j(e);
    return (l === null || ge(t, e, l.child, { foundSelf: !1 }), t);
  }
  function ge(e, t, l, a) {
    for (; l !== null; ) {
      if (l === t) a.foundSelf = !0;
      else if (l.tag === 5 || l.tag === 27 || l.tag === 6) {
        if (a.foundSelf) return ((e[1] = l), !0);
        e[0] = l;
      } else if (
        (l.tag !== 22 || l.memoizedState === null) &&
        ge(e, t, l.child, a)
      )
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function R(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(d(559));
    }
  }
  var xe = null,
    Ue = null;
  function Ct(e, t, l) {
    return e === l ? !0 : e === t ? ((xe = e), !0) : !1;
  }
  function ke(e, t, l) {
    return e === l
      ? ((Ue = e), !1)
      : e === t
        ? (Ue !== null && (xe = e), !0)
        : !1;
  }
  function $e(e) {
    if (e === null) return null;
    do e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function qe(e, t, l) {
    for (var a = 0, n = e; n; n = l(n)) a++;
    n = 0;
    for (var u = t; u; u = l(u)) n++;
    for (; 0 < a - n; ) ((e = l(e)), a--);
    for (; 0 < n - a; ) ((t = l(t)), n--);
    for (; a--; ) {
      if (e === t || (t !== null && e === t.alternate)) return e;
      ((e = l(e)), (t = l(t)));
    }
    return null;
  }
  var $ = Object.assign,
    le = Symbol.for("react.element"),
    dt = Symbol.for("react.transitional.element"),
    it = Symbol.for("react.portal"),
    We = Symbol.for("react.fragment"),
    G = Symbol.for("react.strict_mode"),
    oe = Symbol.for("react.profiler"),
    Fe = Symbol.for("react.consumer"),
    Se = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    L = Symbol.for("react.suspense_list"),
    ce = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    V = Symbol.for("react.activity"),
    P = Symbol.for("react.legacy_hidden"),
    De = Symbol.for("react.memo_cache_sentinel"),
    r = Symbol.for("react.view_transition"),
    N = Symbol.for("react.recoverable"),
    B = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (B && e[B]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ae = Symbol.for("react.client.reference");
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case We:
        return "Fragment";
      case oe:
        return "Profiler";
      case G:
        return "StrictMode";
      case X:
        return "Suspense";
      case L:
        return "SuspenseList";
      case V:
        return "Activity";
      case r:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case it:
          return "Portal";
        case Se:
          return e.displayName || "Context";
        case Fe:
          return (e._context.displayName || "Context") + ".Consumer";
        case _:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ce:
          return (
            (t = e.displayName || null),
            t !== null ? t : he(e.type) || "Memo"
          );
        case A:
          ((t = e._payload), (e = e._init));
          try {
            return he(e(t));
          } catch {}
      }
    return null;
  }
  var ye = Array.isArray,
    q = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ul = { pending: !1, data: null, method: null, action: null },
    wi = [],
    xa = -1;
  function Kt(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > xa || ((e.current = wi[xa]), (wi[xa] = null), xa--);
  }
  function _e(e, t) {
    (xa++, (wi[xa] = e.current), (e.current = t));
  }
  var Jt = Kt(null),
    dn = Kt(null),
    Sl = Kt(null),
    su = Kt(null);
  function fu(e, t) {
    switch ((_e(Sl, t), _e(dn, e), _e(Jt, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? y0(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = y0(t)), (e = v0(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Ie(Jt), _e(Jt, e));
  }
  function Sa() {
    (Ie(Jt), Ie(dn), Ie(Sl));
  }
  function Yi(e) {
    var t = e.memoizedState;
    (t !== null && ((fn._currentValue = t.memoizedState), _e(su, e)),
      (t = Jt.current));
    var l = v0(t, e.type);
    t !== l && (_e(dn, e), _e(Jt, l));
  }
  function ou(e) {
    (dn.current === e && (Ie(Jt), Ie(dn)),
      su.current === e && (Ie(su), (fn._currentValue = ul)));
  }
  var Gi, Hf;
  function Tl(e) {
    if (Gi === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((Gi = (t && t[1]) || ""),
          (Hf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Gi +
      e +
      Hf
    );
  }
  var Xi = !1;
  function Qi(e, t) {
    if (!e || Xi) return "";
    Xi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (O) {
                  var m = O;
                }
                Reflect.construct(e, [], T);
              } else {
                try {
                  T.call();
                } catch (O) {
                  m = O;
                }
                T = !1;
                try {
                  var g = Object.getOwnPropertyDescriptor(e.prototype, "props");
                  (Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (T = !0),
                    new e());
                } finally {
                  T &&
                    (g !== void 0
                      ? Object.defineProperty(e.prototype, "props", g)
                      : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                m = O;
              }
              (T = e()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (O) {
            if (O && m && typeof O.stack == "string") return [O.stack, m.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        c = u[1];
      if (i && c) {
        var f = i.split(`
`),
          y = c.split(`
`);
        for (
          n = a = 0;
          a < f.length && !f[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === f.length || n === y.length)
          for (
            a = f.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && f[a] !== y[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || f[a] !== y[n])) {
                  var x =
                    `
` + f[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", e.displayName)),
                    x
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Xi = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? Tl(l) : "";
  }
  function Xm(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Tl(e.type);
      case 16:
        return Tl("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Tl("Suspense Fallback")
          : Tl("Suspense");
      case 19:
        return Tl("SuspenseList");
      case 0:
      case 15:
        return Qi(e.type, !1);
      case 11:
        return Qi(e.type.render, !1);
      case 1:
        return Qi(e.type, !0);
      case 31:
        return Tl("Activity");
      case 30:
        return Tl("ViewTransition");
      default:
        return "";
    }
  }
  function qf(e) {
    try {
      var t = "",
        l = null;
      do ((t += Xm(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Li = Object.prototype.hasOwnProperty,
    Zi = b.unstable_scheduleCallback,
    Vi = b.unstable_cancelCallback,
    Qm = b.unstable_shouldYield,
    Lm = b.unstable_requestPaint,
    bt = b.unstable_now,
    Zm = b.unstable_getCurrentPriorityLevel,
    Bf = b.unstable_ImmediatePriority,
    wf = b.unstable_UserBlockingPriority,
    ru = b.unstable_NormalPriority,
    Vm = b.unstable_LowPriority,
    Yf = b.unstable_IdlePriority,
    Km = b.log,
    Jm = b.unstable_setDisableYieldValue,
    mn = null,
    xt = null;
  function Nl(e) {
    if (
      (typeof Km == "function" && Jm(e),
      xt && typeof xt.setStrictMode == "function")
    )
      try {
        xt.setStrictMode(mn, e);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Wm,
    km = Math.log,
    $m = Math.LN2;
  function Wm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((km(e) / $m) | 0)) | 0);
  }
  var du = 256,
    mu = 262144,
    hu = 4194304;
  function Wl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function yu(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~u),
          a !== 0
            ? (n = Wl(a))
            : ((i &= c),
              i !== 0
                ? (n = Wl(i))
                : l || ((l = c & ~e), l !== 0 && (n = Wl(l)))))
        : ((c = a & ~u),
          c !== 0
            ? (n = Wl(c))
            : i !== 0
              ? (n = Wl(i))
              : l || ((l = a & ~e), l !== 0 && (n = Wl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & u) === 0 &&
            ((u = n & -n),
            (l = t & -t),
            u >= l || (u === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function hn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Gf(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - St(l),
          n = 1 << a;
        ((t |= e[a]), (l &= ~n));
      }
    return t;
  }
  function Fm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xf() {
    var e = hu;
    return ((hu <<= 1), (hu & 62914560) === 0 && (hu = 4194304), e);
  }
  function Ki(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function yn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Im(e, t, l, a, n, u) {
    var i = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var c = e.entanglements,
      f = e.expirationTimes,
      y = e.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var x = 31 - St(l),
        T = 1 << x;
      ((c[x] = 0), (f[x] = -1));
      var m = y[x];
      if (m !== null)
        for (y[x] = null, x = 0; x < m.length; x++) {
          var g = m[x];
          g !== null && (g.lane &= -536870913);
        }
      l &= ~T;
    }
    (a !== 0 && Qf(e, a, 0),
      u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t)));
  }
  function Qf(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - St(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function Lf(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - St(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function Zf(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : Ji(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function Ji(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ki(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Vf() {
    var e = J.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : P0(e.type));
  }
  function Kf(e, t) {
    var l = J.p;
    try {
      return ((J.p = e), t());
    } finally {
      J.p = l;
    }
  }
  var il = Math.random().toString(36).slice(2),
    Pe = "__reactFiber$" + il,
    mt = "__reactProps$" + il,
    Ta = "__reactContainer$" + il,
    Jf = "__reactEvents$" + il,
    Pm = "__reactListeners$" + il,
    eh = "__reactHandles$" + il,
    kf = "__reactResources$" + il,
    vn = "__reactMarker$" + il,
    vu = "__reactLoad$" + il;
  function gu(e) {
    (delete e[Pe], delete e[mt], delete e[Pm], delete e[eh]);
  }
  function Fl(e) {
    var t;
    if ((t = e[Pe])) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Ta] || l[Pe])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = U0(e); e !== null; ) {
            if ((l = e[Pe])) return l;
            e = U0(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function Na(e) {
    if ((e = e[Pe] || e[Ta])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function gn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Ea(e) {
    var t = e[kf];
    return (
      t ||
        (t = e[kf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ze(e) {
    e[vn] = !0;
  }
  function $f(e) {
    e[vu] = void 0;
  }
  var Wf = new Set(),
    Ff = {};
  function Il(e, t) {
    (ja(e, t), ja(e + "Capture", t));
  }
  function ja(e, t) {
    for (Ff[e] = t, e = 0; e < t.length; e++) Wf.add(t[e]);
  }
  var th = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    If = {},
    Pf = {};
  function lh(e) {
    return Li.call(Pf, e)
      ? !0
      : Li.call(If, e)
        ? !1
        : th.test(e)
          ? (Pf[e] = !0)
          : ((If[e] = !0), !1);
  }
  var ve = !1;
  function eo() {
    var e = ve;
    return ((ve = !1), e);
  }
  function pu(e, t, l) {
    if (lh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, l);
      }
  }
  function bu(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, l);
    }
  }
  function cl(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, a);
    }
  }
  function Tt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function to(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ah(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((l = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (i) {
            l = "" + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function $i(e) {
    if (!e._valueTracker) {
      var t = to(e) ? "checked" : "value";
      e._valueTracker = ah(e, t, "" + e[t]);
    }
  }
  function lo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = to(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  var nh = /[\n"\\]/g;
  function Dt(e) {
    return e.replace(nh, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wi(e, t, l, a, n, u, i, c) {
    ((e.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (e.type = i)
        : e.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Tt(t))
          : e.value !== "" + Tt(t) && (e.value = "" + Tt(t))
        : (i !== "submit" && i !== "reset") || e.removeAttribute("value"),
      t != null
        ? i === "number" && e.value == t
          ? Fi(e, Tt(e.value))
          : Fi(e, Tt(t))
        : l != null
          ? Fi(e, Tt(l))
          : a != null && e.removeAttribute("value"),
      n == null && u != null && (e.defaultChecked = !!u),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.name = "" + Tt(c))
        : e.removeAttribute("name"));
  }
  function ao(e, t, l, a, n, u, i, c) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || l != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        $i(e);
        return;
      }
      ((l = l != null ? "" + Tt(l) : ""),
        (t = t != null ? "" + Tt(t) : l),
        c || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = c ? e.checked : !!a),
      (e.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.name = i),
      $i(e));
  }
  function Fi(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function Aa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + Tt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function no(e, t, l) {
    if (
      t != null &&
      ((t = "" + Tt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Tt(l) : "";
  }
  function uo(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(d(92));
        if (ye(a)) {
          if (1 < a.length) throw Error(d(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = Tt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a),
      $i(e));
  }
  function _a(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var uh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function io(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || uh.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function co(e, t, l) {
    if (t != null && typeof t != "object") throw Error(d(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""),
          (ve = !0));
      for (var n in t)
        ((a = t[n]),
          t.hasOwnProperty(n) && l[n] !== a && (io(e, n, a), (ve = !0)));
    } else for (var u in t) t.hasOwnProperty(u) && io(e, u, t[u]);
  }
  function Ii(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ih = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ch =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xu(e) {
    return ch.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function kt() {}
  var Pi = null;
  function ec(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var za = null,
    Oa = null;
  function so(e) {
    var t = Na(e);
    if (t && (e = t.stateNode)) {
      var l = e[mt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Wi(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Dt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[mt] || null;
                if (!n) throw Error(d(90));
                Wi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && lo(a));
          }
          break e;
        case "textarea":
          no(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && Aa(e, !!l.multiple, t, !1));
      }
    }
  }
  var tc = !1;
  function fo(e, t, l) {
    if (tc) return e(t, l);
    tc = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((tc = !1),
        (za !== null || Oa !== null) &&
          (xi(), za && ((t = za), (e = Oa), (Oa = za = null), so(t), e)))
      )
        for (t = 0; t < e.length; t++) so(e[t]);
    }
  }
  function pn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[mt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(d(231, t, typeof l));
    return l;
  }
  var sl = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    lc = !1;
  if (sl)
    try {
      var bn = {};
      (Object.defineProperty(bn, "passive", {
        get: function () {
          lc = !0;
        },
      }),
        window.addEventListener("test", bn, bn),
        window.removeEventListener("test", bn, bn));
    } catch {
      lc = !1;
    }
  var El = null,
    ac = null,
    Su = null;
  function oo() {
    if (Su) return Su;
    var e,
      t = ac,
      l = t.length,
      a,
      n = "value" in El ? El.value : El.textContent,
      u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var i = l - e;
    for (a = 1; a <= i && t[l - a] === n[u - a]; a++);
    return (Su = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Tu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Nu() {
    return !0;
  }
  function ro() {
    return !1;
  }
  function st(e) {
    function t(l, a, n, u, i) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in e)
        e.hasOwnProperty(c) && ((l = e[c]), (this[c] = l ? l(u) : u[c]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Nu
          : ro),
        (this.isPropagationStopped = ro),
        this
      );
    }
    return (
      $(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Nu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Nu));
        },
        persist: function () {},
        isPersistent: Nu,
      }),
      t
    );
  }
  var jl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Eu = st(jl),
    xn = $({}, jl, { view: 0, detail: 0 }),
    sh = st(xn),
    nc,
    uc,
    Sn,
    ju = $({}, xn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: cc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Sn &&
              (Sn && e.type === "mousemove"
                ? ((nc = e.screenX - Sn.screenX), (uc = e.screenY - Sn.screenY))
                : (uc = nc = 0),
              (Sn = e)),
            nc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : uc;
      },
    }),
    mo = st(ju),
    fh = $({}, ju, { dataTransfer: 0 }),
    oh = st(fh),
    rh = $({}, xn, { relatedTarget: 0 }),
    ic = st(rh),
    dh = $({}, jl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mh = st(dh),
    hh = $({}, jl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    yh = st(hh),
    vh = $({}, jl, { data: 0 }),
    ho = st(vh),
    gh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    ph = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    bh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = bh[e])
        ? !!t[e]
        : !1;
  }
  function cc() {
    return xh;
  }
  var Sh = $({}, xn, {
      key: function (e) {
        if (e.key) {
          var t = gh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Tu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ph[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: cc,
      charCode: function (e) {
        return e.type === "keypress" ? Tu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Tu(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Th = st(Sh),
    Nh = $({}, ju, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yo = st(Nh),
    Eh = $({}, jl, { submitter: 0 }),
    jh = st(Eh),
    Ah = $({}, xn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: cc,
    }),
    _h = st(Ah),
    zh = $({}, jl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Oh = st(zh),
    Ch = $({}, ju, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Dh = st(Ch),
    Mh = $({}, jl, { newState: 0, oldState: 0, source: 0 }),
    Uh = st(Mh),
    Rh = [9, 13, 27, 32],
    sc = sl && "CompositionEvent" in window,
    Tn = null;
  sl && "documentMode" in document && (Tn = document.documentMode);
  var Hh = sl && "TextEvent" in window && !Tn,
    vo = sl && (!sc || (Tn && 8 < Tn && 11 >= Tn)),
    go = " ",
    po = !1;
  function bo(e, t) {
    switch (e) {
      case "keyup":
        return Rh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xo(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ca = !1;
  function qh(e, t) {
    switch (e) {
      case "compositionend":
        return xo(t);
      case "keypress":
        return t.which !== 32 ? null : ((po = !0), go);
      case "textInput":
        return ((e = t.data), e === go && po ? null : e);
      default:
        return null;
    }
  }
  function Bh(e, t) {
    if (Ca)
      return e === "compositionend" || (!sc && bo(e, t))
        ? ((e = oo()), (Su = ac = El = null), (Ca = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return vo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var wh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function So(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wh[e.type] : t === "textarea";
  }
  function To(e, t, l, a) {
    (za ? (Oa ? Oa.push(a) : (Oa = [a])) : (za = a),
      (t = Ai(t, "onChange")),
      0 < t.length &&
        ((l = new Eu("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var Nn = null,
    En = null;
  function Yh(e) {
    f0(e, 0);
  }
  function Au(e) {
    var t = gn(e);
    if (lo(t)) return e;
  }
  function No(e, t) {
    if (e === "change") return t;
  }
  var Eo = !1;
  if (sl) {
    var fc;
    if (sl) {
      var oc = "oninput" in document;
      if (!oc) {
        var jo = document.createElement("div");
        (jo.setAttribute("oninput", "return;"),
          (oc = typeof jo.oninput == "function"));
      }
      fc = oc;
    } else fc = !1;
    Eo = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    Nn && (Nn.detachEvent("onpropertychange", _o), (En = Nn = null));
  }
  function _o(e) {
    if (e.propertyName === "value" && Au(En)) {
      var t = [];
      (To(t, En, e, ec(e)), fo(Yh, t));
    }
  }
  function Gh(e, t, l) {
    e === "focusin"
      ? (Ao(), (Nn = t), (En = l), Nn.attachEvent("onpropertychange", _o))
      : e === "focusout" && Ao();
  }
  function Xh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Au(En);
  }
  function Qh(e, t) {
    if (e === "click") return Au(t);
  }
  function Lh(e, t) {
    if (e === "input" || e === "change") return Au(t);
  }
  function Zh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nt = typeof Object.is == "function" ? Object.is : Zh;
  function jn(e, t) {
    if (Nt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Li.call(t, n) || !Nt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function rc(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Oo(e, t) {
    var l = zo(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = zo(l);
    }
  }
  function Co(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Co(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Do(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = rc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = rc(e.document);
    }
    return t;
  }
  function dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Vh = sl && "documentMode" in document && 11 >= document.documentMode,
    Da = null,
    mc = null,
    An = null,
    hc = !1;
  function Mo(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    hc ||
      Da == null ||
      Da !== rc(a) ||
      ((a = Da),
      "selectionStart" in a && dc(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (An && jn(An, a)) ||
        ((An = a),
        (a = Ai(mc, "onSelect")),
        0 < a.length &&
          ((t = new Eu("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = Da))));
  }
  function Pl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var Ma = {
      animationend: Pl("Animation", "AnimationEnd"),
      animationiteration: Pl("Animation", "AnimationIteration"),
      animationstart: Pl("Animation", "AnimationStart"),
      transitionrun: Pl("Transition", "TransitionRun"),
      transitionstart: Pl("Transition", "TransitionStart"),
      transitioncancel: Pl("Transition", "TransitionCancel"),
      transitionend: Pl("Transition", "TransitionEnd"),
    },
    yc = {},
    Uo = {};
  sl &&
    ((Uo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ma.animationend.animation,
      delete Ma.animationiteration.animation,
      delete Ma.animationstart.animation),
    "TransitionEvent" in window || delete Ma.transitionend.transition);
  function ea(e) {
    if (yc[e]) return yc[e];
    if (!Ma[e]) return e;
    var t = Ma[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Uo) return (yc[e] = t[l]);
    return e;
  }
  var Ro = ea("animationend"),
    Ho = ea("animationiteration"),
    qo = ea("animationstart"),
    Kh = ea("transitionrun"),
    Jh = ea("transitionstart"),
    kh = ea("transitioncancel"),
    Bo = ea("transitionend"),
    wo = new Map(),
    vc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  vc.push("scrollEnd");
  function Gt(e, t) {
    (wo.set(e, t), Il(t, [e]));
  }
  var $h = 0;
  function fl(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Zt.identifierPrefix;
    var l = $h++;
    return ((e = "_" + e + "t_" + l.toString(32) + "_"), (t.autoName = e));
  }
  function Yo(e) {
    if (e == null || typeof e == "string") return e;
    var t = null,
      l = Ia;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = e[l[a]];
        if (n != null) {
          if (n === "none") return "none";
          t = t == null ? n : t + (" " + n);
        }
      }
    return t ?? e.default;
  }
  function ol(e, t) {
    return (
      (e = Yo(e)),
      (t = Yo(t)),
      t == null ? (e === "auto" ? null : e) : t === "auto" ? null : t
    );
  }
  var _u =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Mt = [],
    Ua = 0,
    gc = 0;
  function zu() {
    for (var e = Ua, t = (gc = Ua = 0); t < e; ) {
      var l = Mt[t];
      Mt[t++] = null;
      var a = Mt[t];
      Mt[t++] = null;
      var n = Mt[t];
      Mt[t++] = null;
      var u = Mt[t];
      if (((Mt[t++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && Go(l, n, u);
    }
  }
  function Ou(e, t, l, a) {
    ((Mt[Ua++] = e),
      (Mt[Ua++] = t),
      (Mt[Ua++] = l),
      (Mt[Ua++] = a),
      (gc |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function pc(e, t, l, a) {
    return (Ou(e, t, l, a), Cu(e));
  }
  function ta(e, t) {
    return (Ou(e, null, null, t), Cu(e));
  }
  function Go(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      ((u.childLanes |= l),
        (a = u.alternate),
        a !== null && (a.childLanes |= l),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - St(l)),
          (e = u.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        u)
      : null;
  }
  function Cu(e) {
    if (50 < kn) throw ((kn = 0), (bi = null), Error(d(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ra = {};
  function Wh(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ht(e, t, l, a) {
    return new Wh(e, t, l, a);
  }
  function bc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function rl(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = ht(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 1206910976),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Xo(e, t) {
    e.flags &= 1206910978;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Du(e, t, l, a, n, u) {
    var i = 0;
    if (((a = e), typeof a == "function")) bc(a) && (i = 1);
    else if (typeof a == "string")
      i = E1(e, l, Jt.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (a) {
        case V:
          return ((e = ht(31, l, t, n)), (e.elementType = V), (e.lanes = u), e);
        case We:
          return la(l.children, n, u, t);
        case G:
          ((i = 8), (n |= 24));
          break;
        case oe:
          return (
            (e = ht(12, l, t, n | 2)),
            (e.elementType = oe),
            (e.lanes = u),
            e
          );
        case X:
          return ((e = ht(13, l, t, n)), (e.elementType = X), (e.lanes = u), e);
        case L:
          return ((e = ht(19, l, t, n)), (e.elementType = L), (e.lanes = u), e);
        case P:
        case r:
          return (
            (e = n | 32),
            (e = ht(30, l, t, e)),
            (e.elementType = r),
            (e.lanes = u),
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            e
          );
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case Se:
                i = 10;
                break e;
              case Fe:
                i = 9;
                break e;
              case _:
                i = 11;
                break e;
              case ce:
                i = 14;
                break e;
              case A:
                ((i = 16), (a = null));
                break e;
            }
          ((i = 29),
            (l = Error(d(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = ht(i, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = u),
      t
    );
  }
  function la(e, t, l, a) {
    return ((e = ht(7, e, a, t)), (e.lanes = l), e);
  }
  function xc(e, t, l) {
    return ((e = ht(6, e, null, t)), (e.lanes = l), e);
  }
  function Qo(e) {
    var t = ht(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Sc(e, t, l) {
    return (
      (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Lo = new WeakMap();
  function Ut(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Lo.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: qf(t) }), Lo.set(e, t), t);
    }
    return { value: e, source: t, stack: qf(t) };
  }
  var Ha = [],
    qa = 0,
    Mu = null,
    _n = 0,
    Rt = [],
    Ht = 0,
    Al = null,
    $t = 1,
    Wt = "";
  function dl(e, t) {
    ((Ha[qa++] = _n), (Ha[qa++] = Mu), (Mu = e), (_n = t));
  }
  function Zo(e, t, l) {
    ((Rt[Ht++] = $t), (Rt[Ht++] = Wt), (Rt[Ht++] = Al), (Al = e));
    var a = $t;
    e = Wt;
    var n = 32 - St(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var u = 32 - St(t) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        ($t = (1 << (32 - St(t) + n)) | (l << n) | a),
        (Wt = u + e));
    } else (($t = (1 << u) | (l << n) | a), (Wt = e));
  }
  function Uu(e) {
    e.return !== null && (dl(e, 1), Zo(e, 1, 0));
  }
  function Tc(e) {
    for (; e === Mu; )
      ((Mu = Ha[--qa]), (Ha[qa] = null), (_n = Ha[--qa]), (Ha[qa] = null));
    for (; e === Al; )
      ((Al = Rt[--Ht]),
        (Rt[Ht] = null),
        (Wt = Rt[--Ht]),
        (Rt[Ht] = null),
        ($t = Rt[--Ht]),
        (Rt[Ht] = null));
  }
  function Vo(e, t) {
    ((Rt[Ht++] = $t),
      (Rt[Ht++] = Wt),
      (Rt[Ht++] = Al),
      ($t = t.id),
      (Wt = t.overflow),
      (Al = e));
  }
  var Ve = null,
    ze = null,
    ee = !1,
    _l = null,
    qt = !1,
    Nc = Error(d(519));
  function zl(e) {
    var t = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (zn(Ut(t, e)), Nc);
  }
  function Ko(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Pe] = e), (t[mt] = a), l)) {
      case "dialog":
        (ue("cancel", t), ue("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ue("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Wn.length; l++) ue(Wn[l], t);
        break;
      case "source":
        ue("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ue("error", t), ue("load", t));
        break;
      case "details":
        ue("toggle", t);
        break;
      case "input":
        (ue("invalid", t),
          ao(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        ue("invalid", t);
        break;
      case "textarea":
        (ue("invalid", t), uo(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      m0(t.textContent, l)
        ? (a.popover != null && (ue("beforetoggle", t), ue("toggle", t)),
          a.onScroll != null && ue("scroll", t),
          a.onScrollEnd != null && ue("scrollend", t),
          a.onClick != null && (t.onclick = kt),
          (t = !0))
        : (t = !1),
      t || zl(e, !0));
  }
  function Ru(e) {
    for (Ve = e.return; Ve; )
      switch (Ve.tag) {
        case 5:
        case 31:
        case 13:
          qt = !1;
          return;
        case 27:
        case 3:
          qt = !0;
          return;
        default:
          Ve = Ve.return;
      }
  }
  function Ba(e) {
    if (e !== Ve) return !1;
    if (!ee) return (Ru(e), (ee = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || Ps(e.type, e.memoizedProps))),
        (l = !l)),
      l && ze && zl(e),
      Ru(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      ze = M0(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      ze = M0(e);
    } else
      t === 27
        ? ((t = ze), Zl(e.type) ? ((e = ff), (ff = null), (ze = e)) : (ze = t))
        : (ze = Ve ? wt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function aa() {
    ((ze = Ve = null), (ee = !1));
  }
  function Ec() {
    var e = _l;
    return (
      e !== null &&
        (gt === null ? (gt = e) : gt.push.apply(gt, e), (_l = null)),
      e
    );
  }
  function zn(e) {
    _l === null ? (_l = [e]) : _l.push(e);
  }
  var jc = Kt(null),
    na = null,
    ml = null;
  function Ol(e, t, l) {
    (_e(jc, t._currentValue), (t._currentValue = l));
  }
  function hl(e) {
    ((e._currentValue = jc.current), Ie(jc));
  }
  function Hu(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Ac(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ((u.lanes |= l),
                (c = u.alternate),
                c !== null && (c.lanes |= l),
                Hu(u.return, l, e),
                a || (i = null));
              break e;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(d(341));
        ((i.lanes |= l),
          (u = i.alternate),
          u !== null && (u.lanes |= l),
          Hu(i, l, e),
          (i = null));
      } else
        n.tag === 13 &&
        n.memoizedState !== null &&
        n.memoizedState.dehydrated === null
          ? ((n.lanes |= l),
            (i = n.alternate),
            i !== null && (i.lanes |= l),
            Hu(n.return, l, e),
            (i = n.child),
            (i = i !== null ? i.sibling : null))
          : (i = n.child);
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ua(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = n.type;
          Nt(n.pendingProps.value, i.value) ||
            (e !== null ? e.push(c) : (e = [c]));
        }
      } else if (n === su.current) {
        if (((i = n.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(fn) : (e = [fn]));
      }
      n = n.return;
    }
    return (e !== null && Ac(t, e, l, a), (t.flags |= 262144), e !== null);
  }
  function qu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ia(e) {
    ((na = e),
      (ml = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function et(e) {
    return Jo(na, e);
  }
  function Bu(e, t) {
    return (na === null && ia(e), Jo(e, t));
  }
  function Jo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), ml === null)) {
      if (e === null) throw Error(d(308));
      ((ml = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ml = ml.next = t;
    return l;
  }
  var Fh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    Ih = b.unstable_scheduleCallback,
    Ph = b.unstable_NormalPriority,
    we = {
      $$typeof: Se,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function _c() {
    return { controller: new Fh(), data: new Map(), refCount: 0 };
  }
  function On(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Ih(Ph, function () {
          e.controller.abort();
        }));
  }
  function ko(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var l = e.transitionTypes;
      for (
        l === null && (l = e.transitionTypes = []), e = 0;
        e < t.length;
        e++
      ) {
        var a = t[e];
        l.indexOf(a) === -1 && l.push(a);
      }
    }
  }
  var Cn = null;
  function ey(e) {
    var t = e.transitionTypes;
    return ((e.transitionTypes = null), t);
  }
  var Dn = null,
    zc = 0,
    ca = 0,
    wa = null;
  function ty(e, t) {
    if (Dn === null) {
      var l = (Dn = []);
      ((zc = 0),
        (ca = Zs()),
        (wa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (zc++, t.then($o, $o), t);
  }
  function $o() {
    if (--zc === 0 && ((Cn = null), Dn !== null)) {
      wa !== null && (wa.status = "fulfilled");
      var e = Dn;
      ((Dn = null), (ca = 0), (wa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function ly(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var Wo = q.S;
  q.S = function (e, t) {
    if (
      ((Qd = bt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        ty(e, t),
      Cn !== null)
    )
      for (var l = ln; l !== null; ) (ko(l, Cn), (l = l.next));
    if (((l = e.types), l !== null)) {
      for (var a = ln; a !== null; ) (ko(a, l), (a = a.next));
      if (ca !== 0) {
        ((a = Cn), a === null && (a = Cn = []));
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    Wo !== null && Wo(e, t);
  };
  var sa = Kt(null);
  function Oc() {
    var e = sa.current;
    return e !== null ? e : Ae.pooledCache;
  }
  function wu(e, t) {
    t === null ? _e(sa, sa.current) : _e(sa, t.pool);
  }
  function Fo() {
    var e = Oc();
    return e === null ? null : { parent: we._currentValue, pool: e };
  }
  var Ya = Error(d(460)),
    Cc = Error(d(474)),
    Yu = Error(d(542)),
    Gu = { then: function () {} };
  function Io(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Po(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(kt, kt), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw (
          (e = t.reason),
          tr(e),
          e === void 0 && !("reason" in t) ? Error(d(600)) : e
        );
      default:
        if (typeof t.status == "string") t.then(kt, kt);
        else {
          if (((e = Ae), e !== null && 100 < e.shellSuspendCounter))
            throw Error(d(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), tr(e), e);
        }
        throw ((oa = t), Ya);
    }
  }
  function fa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((oa = l), Ya)
        : l;
    }
  }
  var oa = null;
  function er() {
    if (oa === null) throw Error(d(459));
    var e = oa;
    return ((oa = null), e);
  }
  function tr(e) {
    if (e === Ya || e === Yu) throw Error(d(483));
  }
  var Ga = null,
    Mn = 0;
  function Xu(e) {
    var t = Mn;
    return ((Mn += 1), Ga === null && (Ga = []), Po(Ga, e, t));
  }
  function Cl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Qu(e, t) {
    throw t.$$typeof === le
      ? Error(d(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          d(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function lr(e) {
    function t(h, o) {
      if (e) {
        var v = h.deletions;
        v === null ? ((h.deletions = [o]), (h.flags |= 16)) : v.push(o);
      }
    }
    function l(h, o) {
      if (!e) return null;
      for (; o !== null; ) (t(h, o), (o = o.sibling));
      return null;
    }
    function a(h) {
      for (var o = new Map(); h !== null; )
        (h.key === null ? o.set(h.index, h) : o.set(h.key, h), (h = h.sibling));
      return o;
    }
    function n(h, o) {
      return ((h = rl(h, o)), (h.index = 0), (h.sibling = null), h);
    }
    function u(h, o, v) {
      return (
        (h.index = v),
        e
          ? ((v = h.alternate),
            v !== null
              ? ((v = v.index), v < o ? ((h.flags |= 2), o) : v)
              : ((h.flags |= 134217730), o))
          : ((h.flags |= 1048576), o)
      );
    }
    function i(h) {
      return (e && h.alternate === null && (h.flags |= 134217730), h);
    }
    function c(h, o, v, S) {
      return o === null || o.tag !== 6
        ? ((o = xc(v, h.mode, S)), (o.return = h), o)
        : ((o = n(o, v)), (o.return = h), o);
    }
    function f(h, o, v, S) {
      var D = v.type;
      return D === We
        ? ((h = x(h, o, v.props.children, S, v.key)), Cl(h, v), h)
        : o !== null &&
            (o.elementType === D ||
              (typeof D == "object" &&
                D !== null &&
                D.$$typeof === A &&
                fa(D) === o.type))
          ? ((o = n(o, v.props)), Cl(o, v), (o.return = h), o)
          : ((o = Du(v.type, v.key, v.props, null, h.mode, S)),
            Cl(o, v),
            (o.return = h),
            o);
    }
    function y(h, o, v, S) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== v.containerInfo ||
        o.stateNode.implementation !== v.implementation
        ? ((o = Sc(v, h.mode, S)), (o.return = h), o)
        : ((o = n(o, v.children || [])), (o.return = h), o);
    }
    function x(h, o, v, S, D) {
      return o === null || o.tag !== 7
        ? ((o = la(v, h.mode, S, D)), (o.return = h), o)
        : ((o = n(o, v)), (o.return = h), o);
    }
    function T(h, o, v) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return ((o = xc("" + o, h.mode, v)), (o.return = h), o);
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case dt:
            return (
              (v = Du(o.type, o.key, o.props, null, h.mode, v)),
              Cl(v, o),
              (v.return = h),
              v
            );
          case it:
            return ((o = Sc(o, h.mode, v)), (o.return = h), o);
          case A:
            return ((o = fa(o)), T(h, o, v));
        }
        if (ye(o) || H(o))
          return ((o = la(o, h.mode, v, null)), (o.return = h), o);
        if (typeof o.then == "function") return T(h, Xu(o), v);
        if (o.$$typeof === Se) return T(h, Bu(h, o), v);
        Qu(h, o);
      }
      return null;
    }
    function m(h, o, v, S) {
      var D = o !== null ? o.key : null;
      if (
        (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
      )
        return D !== null ? null : c(h, o, "" + v, S);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case dt:
            return v.key === D ? f(h, o, v, S) : null;
          case it:
            return v.key === D ? y(h, o, v, S) : null;
          case A:
            return ((v = fa(v)), m(h, o, v, S));
        }
        if (ye(v) || H(v)) return D !== null ? null : x(h, o, v, S, null);
        if (typeof v.then == "function") return m(h, o, Xu(v), S);
        if (v.$$typeof === Se) return m(h, o, Bu(h, v), S);
        Qu(h, v);
      }
      return null;
    }
    function g(h, o, v, S, D) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((h = h.get(v) || null), c(o, h, "" + S, D));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case dt:
            return (
              (h = h.get(S.key === null ? v : S.key) || null),
              f(o, h, S, D)
            );
          case it:
            return (
              (h = h.get(S.key === null ? v : S.key) || null),
              y(o, h, S, D)
            );
          case A:
            return ((S = fa(S)), g(h, o, v, S, D));
        }
        if (ye(S) || H(S)) return ((h = h.get(v) || null), x(o, h, S, D, null));
        if (typeof S.then == "function") return g(h, o, v, Xu(S), D);
        if (S.$$typeof === Se) return g(h, o, v, Bu(o, S), D);
        Qu(o, S);
      }
      return null;
    }
    function O(h, o, v, S) {
      for (
        var D = null, fe = null, w = o, Z = (o = 0), Xe = null;
        w !== null && Z < v.length;
        Z++
      ) {
        w.index > Z ? ((Xe = w), (w = null)) : (Xe = w.sibling);
        var me = m(h, w, v[Z], S);
        if (me === null) {
          w === null && (w = Xe);
          break;
        }
        (e && w && me.alternate === null && t(h, w),
          (o = u(me, o, Z)),
          fe === null ? (D = me) : (fe.sibling = me),
          (fe = me),
          (w = Xe));
      }
      if (Z === v.length) return (l(h, w), ee && dl(h, Z), D);
      if (w === null) {
        for (; Z < v.length; Z++)
          ((w = T(h, v[Z], S)),
            w !== null &&
              ((o = u(w, o, Z)),
              fe === null ? (D = w) : (fe.sibling = w),
              (fe = w)));
        return (ee && dl(h, Z), D);
      }
      for (w = a(w); Z < v.length; Z++)
        ((Xe = g(w, h, Z, v[Z], S)),
          Xe !== null &&
            (e &&
              ((me = Xe.alternate),
              me !== null && w.delete(me.key === null ? Z : me.key)),
            (o = u(Xe, o, Z)),
            fe === null ? (D = Xe) : (fe.sibling = Xe),
            (fe = Xe)));
      return (
        e &&
          w.forEach(function ($l) {
            return t(h, $l);
          }),
        ee && dl(h, Z),
        D
      );
    }
    function U(h, o, v, S) {
      if (v == null) throw Error(d(151));
      for (
        var D = null, fe = null, w = o, Z = (o = 0), Xe = null, me = v.next();
        w !== null && !me.done;
        Z++, me = v.next()
      ) {
        w.index > Z ? ((Xe = w), (w = null)) : (Xe = w.sibling);
        var $l = m(h, w, me.value, S);
        if ($l === null) {
          w === null && (w = Xe);
          break;
        }
        (e && w && $l.alternate === null && t(h, w),
          (o = u($l, o, Z)),
          fe === null ? (D = $l) : (fe.sibling = $l),
          (fe = $l),
          (w = Xe));
      }
      if (me.done) return (l(h, w), ee && dl(h, Z), D);
      if (w === null) {
        for (; !me.done; Z++, me = v.next())
          ((me = T(h, me.value, S)),
            me !== null &&
              ((o = u(me, o, Z)),
              fe === null ? (D = me) : (fe.sibling = me),
              (fe = me)));
        return (ee && dl(h, Z), D);
      }
      for (w = a(w); !me.done; Z++, me = v.next())
        ((me = g(w, h, Z, me.value, S)),
          me !== null &&
            (e &&
              ((Xe = me.alternate),
              Xe !== null && w.delete(Xe.key === null ? Z : Xe.key)),
            (o = u(me, o, Z)),
            fe === null ? (D = me) : (fe.sibling = me),
            (fe = me)));
      return (
        e &&
          w.forEach(function (q1) {
            return t(h, q1);
          }),
        ee && dl(h, Z),
        D
      );
    }
    function I(h, o, v, S) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === We &&
          v.key === null &&
          v.props.ref === void 0 &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case dt:
            e: {
              for (var D = v.key; o !== null; ) {
                if (o.key === D) {
                  if (((D = v.type), D === We)) {
                    if (o.tag === 7) {
                      (l(h, o.sibling),
                        (S = n(o, v.props.children)),
                        Cl(S, v),
                        (S.return = h),
                        (h = S));
                      break e;
                    }
                  } else if (
                    o.elementType === D ||
                    (typeof D == "object" &&
                      D !== null &&
                      D.$$typeof === A &&
                      fa(D) === o.type)
                  ) {
                    (l(h, o.sibling),
                      (S = n(o, v.props)),
                      Cl(S, v),
                      (S.return = h),
                      (h = S));
                    break e;
                  }
                  l(h, o);
                  break;
                } else t(h, o);
                o = o.sibling;
              }
              v.type === We
                ? ((S = la(v.props.children, h.mode, S, v.key)),
                  Cl(S, v),
                  (S.return = h),
                  (h = S))
                : ((S = Du(v.type, v.key, v.props, null, h.mode, S)),
                  Cl(S, v),
                  (S.return = h),
                  (h = S));
            }
            return i(h);
          case it:
            e: {
              for (D = v.key; o !== null; ) {
                if (o.key === D)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === v.containerInfo &&
                    o.stateNode.implementation === v.implementation
                  ) {
                    (l(h, o.sibling),
                      (S = n(o, v.children || [])),
                      (S.return = h),
                      (h = S));
                    break e;
                  } else {
                    l(h, o);
                    break;
                  }
                else t(h, o);
                o = o.sibling;
              }
              ((S = Sc(v, h.mode, S)), (S.return = h), (h = S));
            }
            return i(h);
          case A:
            return ((v = fa(v)), I(h, o, v, S));
        }
        if (ye(v)) return O(h, o, v, S);
        if (H(v)) {
          if (((D = H(v)), typeof D != "function")) throw Error(d(150));
          return ((v = D.call(v)), U(h, o, v, S));
        }
        if (typeof v.then == "function") return I(h, o, Xu(v), S);
        if (v.$$typeof === Se) return I(h, o, Bu(h, v), S);
        Qu(h, v);
      }
      return (typeof v == "string" && v !== "") ||
        typeof v == "number" ||
        typeof v == "bigint"
        ? ((v = "" + v),
          o !== null && o.tag === 6
            ? (l(h, o.sibling), (S = n(o, v)), (S.return = h), (h = S))
            : (l(h, o), (S = xc(v, h.mode, S)), (S.return = h), (h = S)),
          i(h))
        : l(h, o);
    }
    return function (h, o, v, S) {
      try {
        Mn = 0;
        var D = I(h, o, v, S);
        return ((Ga = null), D);
      } catch (w) {
        if (w === Ya || w === Yu) throw w;
        var fe = ht(29, w, null, h.mode);
        return ((fe.lanes = S), (fe.return = h), fe);
      } finally {
      }
    };
  }
  var ra = lr(!0),
    ar = lr(!1),
    Dl = !1;
  function Dc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Ml(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ul(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (pe & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Cu(e)),
        Go(e, null, l),
        t
      );
    }
    return (Ou(e, a, t, l), Cu(e));
  }
  function Un(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Lf(e, l));
    }
  }
  function Uc(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        u = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (l = l.next));
        } while (l !== null);
        u === null ? (n = u = t) : (u = u.next = t);
      } else n = u = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Rc = !1;
  function Rn() {
    if (Rc) {
      var e = wa;
      if (e !== null) throw e;
    }
  }
  function Hn(e, t, l, a) {
    Rc = !1;
    var n = e.updateQueue;
    Dl = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var f = c,
        y = f.next;
      ((f.next = null), i === null ? (u = y) : (i.next = y), (i = f));
      var x = e.alternate;
      x !== null &&
        ((x = x.updateQueue),
        (c = x.lastBaseUpdate),
        c !== i &&
          (c === null ? (x.firstBaseUpdate = y) : (c.next = y),
          (x.lastBaseUpdate = f)));
    }
    if (u !== null) {
      var T = n.baseState;
      ((i = 0), (x = y = f = null), (c = u));
      do {
        var m = c.lane & -536870913,
          g = m !== c.lane;
        if (g ? (se & m) === m : (a & m) === m) {
          (m !== 0 && m === ca && (Rc = !0),
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var O = e,
              U = c;
            m = t;
            var I = l;
            switch (U.tag) {
              case 1:
                if (((O = U.payload), typeof O == "function")) {
                  T = O.call(I, T, m);
                  break e;
                }
                T = O;
                break e;
              case 3:
                O.flags = (O.flags & -65537) | 128;
              case 0:
                if (
                  ((O = U.payload),
                  (m = typeof O == "function" ? O.call(I, T, m) : O),
                  m == null)
                )
                  break e;
                T = $({}, T, m);
                break e;
              case 2:
                Dl = !0;
            }
          }
          ((m = c.callback),
            m !== null &&
              ((e.flags |= 64),
              g && (e.flags |= 8192),
              (g = n.callbacks),
              g === null ? (n.callbacks = [m]) : g.push(m)));
        } else
          ((g = {
            lane: m,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            x === null ? ((y = x = g), (f = T)) : (x = x.next = g),
            (i |= m));
        if (((c = c.next), c === null)) {
          if (((c = n.shared.pending), c === null)) break;
          ((g = c),
            (c = g.next),
            (g.next = null),
            (n.lastBaseUpdate = g),
            (n.shared.pending = null));
        }
      } while (!0);
      (x === null && (f = T),
        (n.baseState = f),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = x),
        u === null && (n.shared.lanes = 0),
        (Gl |= i),
        (e.lanes = i),
        (e.memoizedState = T));
    }
  }
  function nr(e, t) {
    if (typeof e != "function") throw Error(d(191, e));
    e.call(t);
  }
  function ur(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) nr(l[e], t);
  }
  var Rl = Kt(null),
    Lu = Kt(0);
  function ir(e, t) {
    ((e = bl), _e(Lu, e), _e(Rl, t), (bl = e | t.baseLanes));
  }
  function Hc() {
    (_e(Lu, bl), _e(Rl, Rl.current));
  }
  function qc() {
    ((bl = Lu.current), Ie(Rl), Ie(Lu));
  }
  var tt = Kt(null),
    ct = null;
  function Hl(e) {
    var t = e.alternate;
    (_e(lt, lt.current & 1),
      _e(tt, e),
      ct === null &&
        (t === null || Rl.current !== null || t.memoizedState !== null) &&
        (ct = e));
  }
  function Bc(e) {
    (_e(lt, lt.current), _e(tt, e), ct === null && (ct = e));
  }
  function cr(e) {
    e.tag === 22
      ? (_e(lt, lt.current), _e(tt, e), ct === null && (ct = e))
      : ql();
  }
  function ql() {
    (_e(lt, lt.current), _e(tt, tt.current));
  }
  function Et(e) {
    (Ie(tt), ct === e && (ct = null), Ie(lt));
  }
  var lt = Kt(0);
  function qn(e, t) {
    (_e(tt, tt.current), _e(lt, t));
  }
  function wc(e) {
    (Ie(lt), Ie(tt), ct === e && (ct = null));
  }
  function Zu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || cf(l) || sf(l)))
          return t;
      } else if (
        t.tag === 19 &&
        t.memoizedProps.revealOrder !== "independent"
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var yl = 0,
    F = null,
    je = null,
    Ye = null,
    Vu = !1,
    Xa = !1,
    da = !1,
    Ku = 0,
    Bn = 0,
    Qa = null,
    ay = 0;
  function Re() {
    throw Error(d(321));
  }
  function Yc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Nt(e[l], t[l])) return !1;
    return !0;
  }
  function Gc(e, t, l, a, n, u) {
    return (
      (yl = u),
      (F = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? Zr : Vr),
      (da = !1),
      (u = l(a, n)),
      (da = !1),
      Xa && (u = fr(t, l, a, n)),
      sr(e),
      u
    );
  }
  function sr(e) {
    q.H = Pu;
    var t = je !== null && je.next !== null;
    if (((yl = 0), (Ye = je = F = null), (Vu = !1), (Bn = 0), (Qa = null), t))
      throw Error(d(300));
    e === null ||
      Ge ||
      ((e = e.dependencies), e !== null && qu(e) && (Ge = !0));
  }
  function fr(e, t, l, a) {
    F = e;
    var n = 0;
    do {
      if ((Xa && (Qa = null), (Bn = 0), (Xa = !1), 25 <= n))
        throw Error(d(301));
      if (((n += 1), (Ye = je = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((q.H = ry), (u = t(l, a)));
    } while (Xa);
    return u;
  }
  function ny() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? wn(t) : t),
      (e = e.useState()[0]),
      (je !== null ? je.memoizedState : null) !== e && (F.flags |= 1024),
      t
    );
  }
  function Xc() {
    var e = Ku !== 0;
    return ((Ku = 0), e);
  }
  function Qc(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function Lc(e) {
    if (Vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Vu = !1;
    }
    ((yl = 0), (Ye = je = F = null), (Xa = !1), (Bn = Ku = 0), (Qa = null));
  }
  function ft() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ye === null ? (F.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye);
  }
  function Be() {
    if (je === null) {
      var e = F.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = je.next;
    var t = Ye === null ? F.memoizedState : Ye.next;
    if (t !== null) ((Ye = t), (je = e));
    else {
      if (e === null)
        throw F.alternate === null ? Error(d(467)) : Error(d(310));
      ((je = e),
        (e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null,
        }),
        Ye === null ? (F.memoizedState = Ye = e) : (Ye = Ye.next = e));
    }
    return Ye;
  }
  function Ju() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wn(e) {
    var t = Bn;
    return (
      (Bn += 1),
      Qa === null && (Qa = []),
      (e = Po(Qa, e, t)),
      (t = F),
      (Ye === null ? t.memoizedState : Ye.next) === null &&
        ((t = t.alternate),
        (q.H = t === null || t.memoizedState === null ? Zr : Vr)),
      e
    );
  }
  function ku(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wn(e);
      if (e.$$typeof === N) return;
      if (e.$$typeof === Se) return et(e);
    }
    throw Error(d(438, String(e)));
  }
  function Zc(e) {
    var t = null,
      l = F.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = F.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Ju()), (F.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = De;
    return (t.index++, l);
  }
  function vl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function $u(e) {
    var t = Be();
    return Vc(t, je, e);
  }
  function Vc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(d(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((t.baseQueue = n = u), (a.pending = null));
    }
    if (((u = e.baseState), n === null)) e.memoizedState = u;
    else {
      t = n.next;
      var c = (i = null),
        f = null,
        y = t,
        x = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (se & T) === T : (yl & T) === T) {
          var m = y.revertLane;
          if (m === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              T === ca && (x = !0));
          else if ((yl & m) === m) {
            ((y = y.next), m === ca && (x = !0));
            continue;
          } else
            ((T = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              f === null ? ((c = f = T), (i = u)) : (f = f.next = T),
              (F.lanes |= m),
              (Gl |= m));
          ((T = y.action),
            da && l(u, T),
            (u = y.hasEagerState ? y.eagerState : l(u, T)));
        } else
          ((m = {
            lane: T,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            f === null ? ((c = f = m), (i = u)) : (f = f.next = m),
            (F.lanes |= T),
            (Gl |= T));
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (f === null ? (i = u) : (f.next = c),
        !Nt(u, e.memoizedState) && ((Ge = !0), x && ((l = wa), l !== null)))
      )
        throw l;
      ((e.memoizedState = u),
        (e.baseState = i),
        (e.baseQueue = f),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Kc(e) {
    var t = Be(),
      l = t.queue;
    if (l === null) throw Error(d(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = (n = n.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== n);
      (Nt(u, t.memoizedState) || (Ge = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (l.lastRenderedState = u));
    }
    return [u, a];
  }
  function or(e, t, l) {
    var a = F,
      n = Be(),
      u = ee;
    if (u) {
      if (l === void 0) throw Error(d(407));
      l = l();
    } else l = t();
    var i = !Nt((je || n).memoizedState, l);
    if (
      (i && ((n.memoizedState = l), (Ge = !0)),
      (n = n.queue),
      $c(mr.bind(null, a, n, e), [e]),
      (e =
        n.getSnapshot !== t ||
        i ||
        (Ye !== null && (Ye.memoizedState.tag & 1) !== 0)),
      La(e ? 9 : 8, { destroy: void 0 }, dr.bind(null, a, n, l, t), null),
      e)
    ) {
      if (((a.flags |= 2048), Ae === null)) throw Error(d(349));
      u || (yl & 127) !== 0 || rr(a, t, l);
    }
    return l;
  }
  function rr(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = F.updateQueue),
      t === null
        ? ((t = Ju()), (F.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function dr(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), hr(t) && yr(e));
  }
  function mr(e, t, l) {
    return l(function () {
      hr(t) && yr(e);
    });
  }
  function hr(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Nt(e, l);
    } catch {
      return !0;
    }
  }
  function yr(e) {
    var t = ta(e, 2);
    t !== null && pt(t, e, 2);
  }
  function Jc(e) {
    var t = ft();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), da)) {
        Nl(!0);
        try {
          l();
        } finally {
          Nl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vl,
        lastRenderedState: e,
      }),
      t
    );
  }
  function vr(e, t, l, a) {
    return ((e.baseState = l), Vc(e, je, typeof a == "function" ? a : vl));
  }
  function uy(e, t, l, a, n) {
    if (Iu(e)) throw Error(d(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (q.T !== null ? l(!0) : (u.isTransition = !1),
        a(u),
        (l = t.pending),
        l === null
          ? ((u.next = t.pending = u), gr(t, u))
          : ((u.next = l.next), (t.pending = l.next = u)));
    }
  }
  function gr(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var u = q.T,
        i = {};
      ((i.types = u !== null ? u.types : null), (q.T = i));
      try {
        var c = l(n, a),
          f = q.S;
        (f !== null && f(i, c), pr(e, t, c));
      } catch (y) {
        kc(e, t, y);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (q.T = u));
      }
    } else
      try {
        ((u = l(n, a)), pr(e, t, u));
      } catch (y) {
        kc(e, t, y);
      }
  }
  function pr(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            br(e, t, a);
          },
          function (a) {
            return kc(e, t, a);
          },
        )
      : br(e, t, l);
  }
  function br(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      xr(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), gr(e, l))));
  }
  function kc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), xr(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function xr(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Sr(e, t) {
    return t;
  }
  function Tr(e, t) {
    if (ee) {
      var l = Ae.formState;
      if (l !== null) {
        e: {
          var a = F;
          if (ee) {
            if (ze) {
              t: {
                for (var n = ze, u = qt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (((n = wt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((ze = wt(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            zl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = ft()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sr,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Xr.bind(null, F, a)),
      (a.dispatch = l),
      (a = Jc(!1)),
      (u = es.bind(null, F, !1, a.queue)),
      (a = ft()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = uy.bind(null, F, n, u, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function Nr(e) {
    var t = Be();
    return Er(t, je, e);
  }
  function Er(e, t, l) {
    if (
      ((t = Vc(e, t, Sr)[0]),
      (e = $u(vl)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = wn(t);
      } catch (i) {
        throw i === Ya ? Yu : i;
      }
    else a = t;
    t = Be();
    var n = t.queue,
      u = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((F.flags |= 2048),
        La(9, { destroy: void 0 }, iy.bind(null, n, l), null)),
      [a, u, e]
    );
  }
  function iy(e, t) {
    e.action = t;
  }
  function jr(e) {
    var t = Be(),
      l = je;
    if (l !== null) return Er(t, l, e);
    (Be(), (t = t.memoizedState), (l = Be()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function La(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = F.updateQueue),
      t === null && ((t = Ju()), (F.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Ar() {
    return Be().memoizedState;
  }
  function Wu(e, t, l, a) {
    var n = ft();
    ((F.flags |= e),
      (n.memoizedState = La(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a,
      )));
  }
  function Fu(e, t, l, a) {
    var n = Be();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    je !== null && a !== null && Yc(a, je.memoizedState.deps)
      ? (n.memoizedState = La(t, u, l, a))
      : ((F.flags |= e), (n.memoizedState = La(1 | t, u, l, a)));
  }
  function _r(e, t) {
    Wu(8390656, 8, e, t);
  }
  function $c(e, t) {
    Fu(2048, 8, e, t);
  }
  function cy(e) {
    F.flags |= 4;
    var t = F.updateQueue;
    if (t === null) ((t = Ju()), (F.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function zr(e) {
    var t = Be().memoizedState;
    return (
      cy({ ref: t, nextImpl: e }),
      function () {
        if ((pe & 2) !== 0) throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Or(e, t) {
    return Fu(4, 2, e, t);
  }
  function Cr(e, t) {
    return Fu(4, 4, e, t);
  }
  function Dr(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Mr(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), Fu(4, 4, Dr.bind(null, t, e), l));
  }
  function Wc() {}
  function Ur(e, t) {
    var l = Be();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Yc(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Rr(e, t) {
    var l = Be();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Yc(t, a[1])) return a[0];
    if (((a = e()), da)) {
      Nl(!0);
      try {
        e();
      } finally {
        Nl(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function Fc(e, t, l) {
    return l === void 0 || ((yl & 1073741824) !== 0 && (se & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Zd()), (F.lanes |= e), (Gl |= e), l);
  }
  function Hr(e, t, l, a) {
    return Nt(l, t)
      ? l
      : Rl.current !== null
        ? ((e = Fc(e, l, a)), Nt(e, t) || (Ge = !0), e)
        : (yl & 106) === 0 || ((yl & 1073741824) !== 0 && (se & 261930) === 0)
          ? ((Ge = !0), (e.memoizedState = l))
          : ((e = Zd()), (F.lanes |= e), (Gl |= e), t);
  }
  function qr(e, t, l, a, n) {
    var u = J.p;
    J.p = u !== 0 && 8 > u ? u : 8;
    var i = q.T,
      c = {};
    ((c.types = i !== null ? i.types : null), (q.T = c), es(e, !1, t, l));
    try {
      var f = n(),
        y = q.S;
      if (
        (y !== null && y(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var x = ly(f, a);
        Yn(e, t, x, zt(e));
      } else Yn(e, t, a, zt(e));
    } catch (T) {
      Yn(e, t, { then: function () {}, status: "rejected", reason: T }, zt());
    } finally {
      ((J.p = u),
        i !== null && c.types !== null && (i.types = c.types),
        (q.T = i));
    }
  }
  function sy() {}
  function Ic(e, t, l, a) {
    if (e.tag !== 5) throw Error(d(476));
    var n = Br(e).queue;
    qr(
      e,
      n,
      t,
      ul,
      l === null
        ? sy
        : function () {
            return (wr(e), l(a));
          },
    );
  }
  function Br(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ul,
      baseState: ul,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vl,
        lastRenderedState: ul,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: vl,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function wr(e) {
    var t = Br(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Yn(e, t.next.queue, {}, zt()));
  }
  function Pc() {
    return et(fn);
  }
  function Yr() {
    return Be().memoizedState;
  }
  function Gr() {
    return Be().memoizedState;
  }
  function fy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = zt();
          e = Ml(l);
          var a = Ul(t, e, l);
          (a !== null && (pt(a, t, l), Un(a, t, l)),
            (t = { cache: _c() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function oy(e, t, l) {
    var a = zt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Iu(e)
        ? Qr(t, l)
        : ((l = pc(e, t, l, a)), l !== null && (pt(l, e, a), Lr(l, t, a))));
  }
  function Xr(e, t, l) {
    var a = zt();
    Yn(e, t, l, a);
  }
  function Yn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Iu(e)) Qr(t, n);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = u(i, l);
          if (((n.hasEagerState = !0), (n.eagerState = c), Nt(c, i)))
            return (Ou(e, t, n, 0), Ae === null && zu(), !1);
        } catch {
        } finally {
        }
      if (((l = pc(e, t, n, a)), l !== null))
        return (pt(l, e, a), Lr(l, t, a), !0);
    }
    return !1;
  }
  function es(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Zs(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Iu(e))
    ) {
      if (t) throw Error(d(479));
    } else ((t = pc(e, l, a, 2)), t !== null && pt(t, e, 2));
  }
  function Iu(e) {
    var t = e.alternate;
    return e === F || (t !== null && t === F);
  }
  function Qr(e, t) {
    Xa = Vu = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Lr(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Lf(e, l));
    }
  }
  var Pu = {
      readContext: et,
      use: ku,
      useCallback: Re,
      useContext: Re,
      useEffect: Re,
      useImperativeHandle: Re,
      useLayoutEffect: Re,
      useInsertionEffect: Re,
      useMemo: Re,
      useReducer: Re,
      useRef: Re,
      useState: Re,
      useDebugValue: Re,
      useDeferredValue: Re,
      useTransition: Re,
      useSyncExternalStore: Re,
      useId: Re,
      useHostTransitionStatus: Re,
      useFormState: Re,
      useActionState: Re,
      useOptimistic: Re,
      useMemoCache: Re,
      useCacheRefresh: Re,
      useEffectEvent: Re,
    },
    Zr = {
      readContext: et,
      use: ku,
      useCallback: function (e, t) {
        return ((ft().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: et,
      useEffect: _r,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          Wu(4194308, 4, Dr.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return Wu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Wu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = ft();
        t = t === void 0 ? null : t;
        var a = e();
        if (da) {
          Nl(!0);
          try {
            e();
          } finally {
            Nl(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = ft();
        if (l !== void 0) {
          var n = l(t);
          if (da) {
            Nl(!0);
            try {
              l(t);
            } finally {
              Nl(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = oy.bind(null, F, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ft();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Jc(e);
        var t = e.queue,
          l = Xr.bind(null, F, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Wc,
      useDeferredValue: function (e, t) {
        var l = ft();
        return Fc(l, e, t);
      },
      useTransition: function () {
        var e = Jc(!1);
        return (
          (e = qr.bind(null, F, e.queue, !0, !1)),
          (ft().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = F,
          n = ft();
        if (ee) {
          if (l === void 0) throw Error(d(407));
          l = l();
        } else {
          if (((l = t()), Ae === null)) throw Error(d(349));
          (se & 127) !== 0 || rr(a, t, l);
        }
        n.memoizedState = l;
        var u = { value: l, getSnapshot: t };
        return (
          (n.queue = u),
          _r(mr.bind(null, a, u, e), [e]),
          (a.flags |= 2048),
          La(9, { destroy: void 0 }, dr.bind(null, a, u, l, t), null),
          l
        );
      },
      useId: function () {
        var e = ft(),
          t = Ae.identifierPrefix;
        if (ee) {
          var l = Wt,
            a = $t;
          ((l = (a & ~(1 << (32 - St(a) - 1))).toString(32) + l),
            (t = "_" + t + "R_" + l),
            (l = Ku++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "_"));
        } else ((l = ay++), (t = "_" + t + "r_" + l.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Pc,
      useFormState: Tr,
      useActionState: Tr,
      useOptimistic: function (e) {
        var t = ft();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = es.bind(null, F, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Zc,
      useCacheRefresh: function () {
        return (ft().memoizedState = fy.bind(null, F));
      },
      useEffectEvent: function (e) {
        var t = ft(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((pe & 2) !== 0) throw Error(d(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Vr = {
      readContext: et,
      use: ku,
      useCallback: Ur,
      useContext: et,
      useEffect: $c,
      useImperativeHandle: Mr,
      useInsertionEffect: Or,
      useLayoutEffect: Cr,
      useMemo: Rr,
      useReducer: $u,
      useRef: Ar,
      useState: function () {
        return $u(vl);
      },
      useDebugValue: Wc,
      useDeferredValue: function (e, t) {
        var l = Be();
        return Hr(l, je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = $u(vl)[0],
          t = Be().memoizedState;
        return [typeof e == "boolean" ? e : wn(e), t];
      },
      useSyncExternalStore: or,
      useId: Yr,
      useHostTransitionStatus: Pc,
      useFormState: Nr,
      useActionState: Nr,
      useOptimistic: function (e, t) {
        var l = Be();
        return vr(l, je, e, t);
      },
      useMemoCache: Zc,
      useCacheRefresh: Gr,
      useEffectEvent: zr,
    },
    ry = {
      readContext: et,
      use: ku,
      useCallback: Ur,
      useContext: et,
      useEffect: $c,
      useImperativeHandle: Mr,
      useInsertionEffect: Or,
      useLayoutEffect: Cr,
      useMemo: Rr,
      useReducer: Kc,
      useRef: Ar,
      useState: function () {
        return Kc(vl);
      },
      useDebugValue: Wc,
      useDeferredValue: function (e, t) {
        var l = Be();
        return je === null ? Fc(l, e, t) : Hr(l, je.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Kc(vl)[0],
          t = Be().memoizedState;
        return [typeof e == "boolean" ? e : wn(e), t];
      },
      useSyncExternalStore: or,
      useId: Yr,
      useHostTransitionStatus: Pc,
      useFormState: jr,
      useActionState: jr,
      useOptimistic: function (e, t) {
        var l = Be();
        return je !== null
          ? vr(l, je, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: Zc,
      useCacheRefresh: Gr,
      useEffectEvent: zr,
    };
  function ts(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : $({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var ls = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = zt(),
        n = Ml(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = Ul(e, n, a)),
        t !== null && (pt(t, e, a), Un(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = zt(),
        n = Ml(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = Ul(e, n, a)),
        t !== null && (pt(t, e, a), Un(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = zt(),
        a = Ml(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Ul(e, a, l)),
        t !== null && (pt(t, e, l), Un(t, e, l)));
    },
  };
  function Kr(e, t, l, a, n, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, u, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !jn(l, a) || !jn(n, u)
          : !0
    );
  }
  function Jr(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && ls.enqueueReplaceState(t, t.state, null));
  }
  function ma(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = $({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function kr(e) {
    _u(e);
  }
  function $r(e) {
    console.error(e);
  }
  function Wr(e) {
    _u(e);
  }
  function ei(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Fr(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function as(e, t, l) {
    return (
      (l = Ml(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        ei(e, t);
      }),
      l
    );
  }
  function Ir(e) {
    return ((e = Ml(e)), (e.tag = 3), e);
  }
  function Pr(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((e.payload = function () {
        return n(u);
      }),
        (e.callback = function () {
          Fr(t, l, a);
        }));
    }
    var i = l.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (e.callback = function () {
        (Fr(t, l, a),
          typeof n != "function" &&
            (Xl === null ? (Xl = new Set([this])) : Xl.add(this)));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function dy(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && ua(t, l, n, !0),
        (l = tt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
          case 19:
            return (
              ct === null ? Si() : l.alternate === null && He === 0 && (He = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === Gu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Xs(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Gu
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Xs(e, a, n)),
              !1
            );
        }
        throw Error(d(435, l.tag));
      }
      return (Xs(e, a, n), Si(), !1);
    }
    if (ee)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Nc && ((e = Error(d(422), { cause: a })), zn(Ut(e, l))))
          : (a !== Nc && ((t = Error(d(423), { cause: a })), zn(Ut(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = Ut(a, l)),
            (n = as(e.stateNode, a, n)),
            Uc(e, n),
            He !== 4 && (He = 2)),
        !1
      );
    var u = Error(d(520), { cause: a });
    if (
      ((u = Ut(u, l)),
      Jn === null ? (Jn = [u]) : Jn.push(u),
      He !== 4 && (He = 2),
      t === null)
    )
      return !0;
    ((a = Ut(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = as(l.stateNode, a, e)),
            Uc(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (u = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Xl === null || !Xl.has(u)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Ir(n)),
              Pr(n, e, l, a),
              Uc(l, n),
              !1
            );
          break;
        case 22:
          if (l.memoizedState !== null) return ((l.flags |= 65536), !1);
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ns = Error(d(461)),
    Ge = !1;
  function Le(e, t, l, a) {
    t.child = e === null ? ar(t, null, l, a) : ra(t, e.child, l, a);
  }
  function ed(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      ia(t),
      (a = Gc(e, t, l, i, u, n)),
      (c = Xc()),
      e !== null && !Ge
        ? (Qc(e, t, n), gl(e, t, n))
        : (ee && c && Uu(t), (t.flags |= 1), Le(e, t, a, n), t.child)
    );
  }
  function td(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" &&
        !bc(u) &&
        u.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = u), ld(e, t, u, a, n))
        : ((e = Du(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !ds(e, n))) {
      var i = u.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : jn), l(i, a) && e.ref === t.ref)
      )
        return gl(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = rl(u, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ld(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (jn(u, a) && e.ref === t.ref)
        if (((Ge = !1), (t.pendingProps = a = u), ds(e, n)))
          (e.flags & 131072) !== 0 && (Ge = !0);
        else return ((t.lanes = e.lanes), gl(e, t, n));
    }
    return us(e, t, l, a, n);
  }
  function ad(e, t, l, a) {
    var n = a.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (t.child = null));
        return nd(e, t, u, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && wu(t, u !== null ? u.cachePool : null),
          u !== null ? ir(t, u) : Hc(),
          cr(t));
      else
        return (
          (a = t.lanes = 536870912),
          nd(e, t, u !== null ? u.baseLanes | l : l, l, a)
        );
    } else
      u !== null
        ? (wu(t, u.cachePool), ir(t, u), ql(), (t.memoizedState = null))
        : (e !== null && wu(t, null), Hc(), ql());
    return (Le(e, t, n, l), t.child);
  }
  function Gn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function nd(e, t, l, a, n) {
    var u = Oc();
    return (
      (u = u === null ? null : { parent: we._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: l, cachePool: u }),
      e !== null && wu(t, null),
      Hc(),
      cr(t),
      e !== null && ua(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function ti(e, t) {
    return (
      (t = li({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ud(e, t, l) {
    return (
      ra(t, e.child, null, l),
      (e = ti(t, t.pendingProps)),
      (e.flags |= 2),
      Et(t),
      (t.memoizedState = null),
      e
    );
  }
  function my(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ee) {
        if (a.mode === "hidden")
          return (
            (e = ti(t, a)),
            (t.lanes = 536870912),
            (e.memoizedState = { baseLanes: 0, cachePool: null }),
            Gn(null, e)
          );
        if (
          (Bc(t),
          (e = ze)
            ? ((e = D0(e, qt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Al !== null ? { id: $t, overflow: Wt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Qo(e)),
                (l.return = t),
                (t.child = l),
                (Ve = t),
                (ze = null)))
            : (e = null),
          e === null)
        )
          throw zl(t);
        return ((t.lanes = 536870912), null);
      }
      return ti(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((Bc(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = ud(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(d(558));
      else if (
        (Ge || ua(e, t, l, !1), (n = (l & e.childLanes) !== 0), Ge || n)
      ) {
        if (Rl.current === null) {
          if (
            ((a = Ae),
            a !== null && ((i = Zf(a, l)), i !== 0 && i !== u.retryLane))
          )
            throw ((u.retryLane = i), ta(e, i), pt(a, e, i), ns);
          Si();
        }
        t = ud(e, t, l);
      } else
        ((e = u.treeContext),
          (ze = wt(i.nextSibling)),
          (Ve = t),
          (ee = !0),
          (_l = null),
          (qt = !1),
          e !== null && Vo(t, e),
          (t = ti(t, a)),
          (t.flags |= 134221824));
      return t;
    }
    return (
      (e = rl(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Za(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(d(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function us(e, t, l, a, n) {
    return (
      ia(t),
      (l = Gc(e, t, l, a, void 0, n)),
      (a = Xc()),
      e !== null && !Ge
        ? (Qc(e, t, n), gl(e, t, n))
        : (ee && a && Uu(t), (t.flags |= 1), Le(e, t, l, n), t.child)
    );
  }
  function id(e, t, l, a, n, u) {
    return (
      ia(t),
      (t.updateQueue = null),
      (l = fr(t, a, l, n)),
      sr(e),
      (a = Xc()),
      e !== null && !Ge
        ? (Qc(e, t, u), gl(e, t, u))
        : (ee && a && Uu(t), (t.flags |= 1), Le(e, t, l, u), t.child)
    );
  }
  function cd(e, t, l, a, n) {
    if ((ia(t), t.stateNode === null)) {
      var u = Ra,
        i = l.contextType;
      (typeof i == "object" && i !== null && (u = et(i)),
        (u = new l(a, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = ls),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = a),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Dc(t),
        (i = l.contextType),
        (u.context = typeof i == "object" && i !== null ? et(i) : Ra),
        (u.state = t.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == "function" && (ts(t, l, i, a), (u.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && ls.enqueueReplaceState(u, u.state, null),
          Hn(t, a, u, n),
          Rn(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      u = t.stateNode;
      var c = t.memoizedProps,
        f = ma(l, c);
      u.props = f;
      var y = u.context,
        x = l.contextType;
      ((i = Ra), typeof x == "object" && x !== null && (i = et(x)));
      var T = l.getDerivedStateFromProps;
      ((x =
        typeof T == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        x ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((c || y !== i) && Jr(t, u, a, i)),
        (Dl = !1));
      var m = t.memoizedState;
      ((u.state = m),
        Hn(t, a, u, n),
        Rn(),
        (y = t.memoizedState),
        c || m !== y || Dl
          ? (typeof T == "function" && (ts(t, l, T, a), (y = t.memoizedState)),
            (f = Dl || Kr(t, l, f, a, m, y, i))
              ? (x ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (u.props = a),
            (u.state = y),
            (u.context = i),
            (a = f))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = t.stateNode),
        Mc(e, t),
        (i = t.memoizedProps),
        (x = ma(l, i)),
        (u.props = x),
        (T = t.pendingProps),
        (m = u.context),
        (y = l.contextType),
        (f = Ra),
        typeof y == "object" && y !== null && (f = et(y)),
        (c = l.getDerivedStateFromProps),
        (y =
          typeof c == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== T || m !== f) && Jr(t, u, a, f)),
        (Dl = !1),
        (m = t.memoizedState),
        (u.state = m),
        Hn(t, a, u, n),
        Rn());
      var g = t.memoizedState;
      i !== T ||
      m !== g ||
      Dl ||
      (e !== null && e.dependencies !== null && qu(e.dependencies))
        ? (typeof c == "function" && (ts(t, l, c, a), (g = t.memoizedState)),
          (x =
            Dl ||
            Kr(t, l, x, a, m, g, f) ||
            (e !== null && e.dependencies !== null && qu(e.dependencies)))
            ? (y ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, g, f),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, g, f)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = g)),
          (u.props = a),
          (u.state = g),
          (u.context = f),
          (a = x))
        : (typeof u.componentDidUpdate != "function" ||
            (i === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      Za(e, t),
      (a = (t.flags & 128) !== 0),
      u || a
        ? ((u = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ra(t, e.child, null, n)),
              (t.child = ra(t, null, l, n)))
            : Le(e, t, l, n),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = gl(e, t, n)),
      e
    );
  }
  function sd(e, t, l, a) {
    return (aa(), (t.flags |= 256), Le(e, t, l, a), t.child);
  }
  var is = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function cs(e) {
    return { baseLanes: e, cachePool: Fo() };
  }
  function ss(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= _t), e);
  }
  function fd(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      u = (t.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (lt.current & 2) !== 0),
      i && ((n = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ee) {
        if (
          (n ? Hl(t) : ql(),
          (e = ze)
            ? ((e = D0(e, qt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Al !== null ? { id: $t, overflow: Wt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Qo(e)),
                (l.return = t),
                (t.child = l),
                (Ve = t),
                (ze = null)))
            : (e = null),
          e === null)
        )
          throw zl(t);
        return (sf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      return (
        (u = a.children),
        (a = a.fallback),
        n
          ? (ql(),
            (n = t.mode),
            (u = li({ mode: "hidden", children: u }, n)),
            (a = la(a, n, l, null)),
            (u.return = t),
            (a.return = t),
            (u.sibling = a),
            (t.child = u),
            (a = t.child),
            (a.memoizedState = cs(l)),
            (a.childLanes = ss(e, i, l)),
            (t.memoizedState = is),
            Gn(null, a))
          : (Hl(t), fs(t, u))
      );
    }
    var c = e.memoizedState;
    if (c !== null) {
      var f = c.dehydrated;
      if (f !== null) return hy(e, t, u, i, a, f, c, l);
    }
    return n
      ? (ql(),
        (n = a.fallback),
        (u = t.mode),
        (c = e.child),
        (f = c.sibling),
        (a = rl(c, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = c.subtreeFlags & 1206910976),
        f !== null ? (n = rl(f, n)) : ((n = la(n, u, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        Gn(null, a),
        (a = t.child),
        (n = e.child.memoizedState),
        n === null
          ? (n = cs(l))
          : ((u = n.cachePool),
            u !== null
              ? ((c = we._currentValue),
                (u = u.parent !== c ? { parent: c, pool: c } : u))
              : (u = Fo()),
            (n = { baseLanes: n.baseLanes | l, cachePool: u })),
        (a.memoizedState = n),
        (a.childLanes = ss(e, i, l)),
        (t.memoizedState = is),
        Gn(e.child, a))
      : (Hl(t),
        (l = e.child),
        (e = l.sibling),
        (l = rl(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function fs(e, t) {
    return (
      (t = li({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function li(e, t) {
    return ((e = ht(22, e, null, t)), (e.lanes = 0), e);
  }
  function ai(e, t, l) {
    return (
      ra(t, e.child, null, l),
      (e = fs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function hy(e, t, l, a, n, u, i, c) {
    if (l)
      return t.flags & 256
        ? (Hl(t), (t.flags &= -257), ai(e, t, c))
        : t.memoizedState !== null
          ? (ql(), (t.child = e.child), (t.flags |= 128), null)
          : (ql(),
            (u = n.fallback),
            (i = t.mode),
            (n = li({ mode: "visible", children: n.children }, i)),
            (u = la(u, i, c, null)),
            (u.flags |= 2),
            (n.return = t),
            (u.return = t),
            (n.sibling = u),
            (t.child = n),
            ra(t, e.child, null, c),
            (n = t.child),
            (n.memoizedState = cs(c)),
            (n.childLanes = ss(e, a, c)),
            (t.memoizedState = is),
            Gn(null, n));
    if ((Hl(t), sf(u))) {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var f = a.dgst;
      return (
        (a = f),
        a !== "" &&
          ((n = Error(d(419))),
          (n.stack = ""),
          (n.digest = a),
          zn({ value: n, source: null, stack: null })),
        ai(e, t, c)
      );
    }
    if ((Ge || ua(e, t, c, !1), (a = (c & e.childLanes) !== 0), Ge || a)) {
      if (Rl.current !== null) return ai(e, t, c);
      if (
        ((a = Ae), a !== null && ((n = Zf(a, c)), n !== 0 && n !== i.retryLane))
      )
        throw ((i.retryLane = n), ta(e, n), pt(a, e, n), ns);
      return (cf(u) || Si(), ai(e, t, c));
    }
    return cf(u)
      ? ((t.flags |= 192), (t.child = e.child), null)
      : ((e = i.treeContext),
        (ze = wt(u.nextSibling)),
        (Ve = t),
        (ee = !0),
        (_l = null),
        (qt = !1),
        e !== null && Vo(t, e),
        (t = fs(t, n.children)),
        (t.flags |= 134221824),
        t);
  }
  function od(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Hu(e.return, t, l));
  }
  function rd(e) {
    for (var t = null; e !== null; ) {
      var l = e.alternate;
      (l !== null && Zu(l) === null && (t = e), (e = e.sibling));
    }
    return t;
  }
  function ni(e, t, l, a, n, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function os(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var l = t.sibling;
      ((t.sibling = e.child), (e.child = t), (t = l));
    }
  }
  function rs(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = lt.current;
    if (t.flags & 128) return (qn(t, i), null);
    var c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      qn(t, i),
      n === "backwards" && e !== null
        ? (os(e), Le(e, t, a, l), os(e))
        : Le(e, t, a, l),
      (a = ee ? _n : 0),
      !c && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && od(e, l, t);
        else if (e.tag === 19) od(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case "backwards":
        ((l = rd(t.child)),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null), os(t)),
          ni(t, !0, n, null, u, a));
        break;
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Zu(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        ni(t, !0, l, null, u, a);
        break;
      case "together":
        ni(t, !1, null, null, void 0, a);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        ((l = rd(t.child)),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          ni(t, !1, n, l, u, a));
    }
    return t.child;
  }
  function dd(e, t, l) {
    var a = t.pendingProps;
    return (Ol(t, t.type, a.value), Le(e, t, a.children, l), t.child);
  }
  function gl(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Gl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ua(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(d(153));
    if (t.child !== null) {
      for (
        e = t.child, l = rl(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = rl(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function ds(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && qu(e)));
  }
  function yy(e, t, l) {
    switch (t.tag) {
      case 3:
        (fu(t, t.stateNode.containerInfo),
          Ol(t, we, e.memoizedState.cache),
          aa());
        break;
      case 27:
      case 5:
        Yi(t);
        break;
      case 4:
        fu(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ol(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Bc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null) return (Hl(t), (t.flags |= 128), null);
          a = ua(e, t, l, !1);
          var n = t.child.childLanes;
          return a || (l & n) !== 0
            ? fd(e, t, l)
            : (Hl(t), (e = gl(e, t, l)), e !== null ? e.sibling : null);
        }
        Hl(t);
        break;
      case 19:
        if (t.flags & 128) return rs(e, t, l);
        if (
          ((n = (e.flags & 128) !== 0),
          (a = (l & t.childLanes) !== 0),
          a || (ua(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return rs(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          qn(t, lt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), ad(e, t, l, t.pendingProps));
      case 24:
        Ol(t, we, e.memoizedState.cache);
    }
    return gl(e, t, l);
  }
  function md(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ge = !0;
      else {
        if (!ds(e, l) && (t.flags & 128) === 0) return ((Ge = !1), yy(e, t, l));
        Ge = (e.flags & 131072) !== 0;
      }
    else ((Ge = !1), ee && (t.flags & 1048576) !== 0 && Zo(t, _n, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = fa(t.elementType)), (t.type = e), typeof e == "function"))
            bc(e)
              ? ((a = ma(e, a)), (t.tag = 1), (t = cd(null, t, e, a, l)))
              : ((t.tag = 0), (t = us(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === _) {
                ((t.tag = 11), (t = ed(null, t, e, a, l)));
                break e;
              } else if (n === ce) {
                ((t.tag = 14), (t = td(null, t, e, a, l)));
                break e;
              } else if (n === Se) {
                ((t.tag = 10), (t.type = e), (t = dd(null, t, l)));
                break e;
              }
            }
            throw ((t = he(e) || e), Error(d(306, t, "")));
          }
        }
        return t;
      case 0:
        return us(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = ma(a, t.pendingProps)), cd(e, t, a, n, l));
      case 3:
        e: {
          if ((fu(t, t.stateNode.containerInfo), e === null))
            throw Error(d(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          ((n = u.element), Mc(e, t), Hn(t, a, null, l));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            Ol(t, we, a),
            a !== u.cache && Ac(t, [we], l, !0),
            Rn(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = sd(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = Ut(Error(d(424)), t)), zn(n), (t = sd(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                ze = wt(e.firstChild),
                  Ve = t,
                  ee = !0,
                  _l = null,
                  qt = !0,
                  l = ar(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 134221824), (l = l.sibling));
            }
          else {
            if ((aa(), a === n)) {
              t = gl(e, t, l);
              break e;
            }
            Le(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Za(e, t),
          e === null
            ? (l = w0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ee || (t.stateNode = g0(t.type, t.pendingProps, Sl.current, t))
            : (t.memoizedState = w0(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Yi(t),
          e === null &&
            ee &&
            ((a = t.stateNode = R0(t.type, t.pendingProps, Sl.current)),
            (Ve = t),
            (qt = !0),
            (n = ze),
            Zl(t.type) ? ((ff = n), (ze = wt(a.firstChild))) : (ze = n)),
          Le(e, t, t.pendingProps.children, l),
          Za(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ee &&
            ((n = a = ze) &&
              ((a = f1(a, t.type, t.pendingProps, qt)),
              a !== null
                ? ((t.stateNode = a),
                  (Ve = t),
                  (ze = wt(a.firstChild)),
                  (qt = !1),
                  (n = !0))
                : (n = !1)),
            n || zl(t)),
          Yi(t),
          (n = t.type),
          (u = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (a = u.children),
          Ps(n, u) ? (a = null) : i !== null && Ps(n, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Gc(e, t, ny, null, null, l)), (fn._currentValue = n)),
          Za(e, t),
          Le(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ee &&
            ((e = l = ze) &&
              ((l = o1(l, t.pendingProps, qt)),
              l !== null
                ? ((t.stateNode = l), (Ve = t), (ze = null), (e = !0))
                : (e = !1)),
            e || zl(t)),
          null
        );
      case 13:
        return fd(e, t, l);
      case 4:
        return (
          fu(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ra(t, null, a, l)) : Le(e, t, a, l),
          t.child
        );
      case 11:
        return ed(e, t, t.type, t.pendingProps, l);
      case 7:
        return ((a = t.pendingProps), Za(e, t), Le(e, t, a, l), t.child);
      case 8:
        return (Le(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Le(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return dd(e, t, l);
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          ia(t),
          (n = et(n)),
          (a = a(n)),
          (t.flags |= 1),
          Le(e, t, a, l),
          t.child
        );
      case 14:
        return td(e, t, t.type, t.pendingProps, l);
      case 15:
        return ld(e, t, t.type, t.pendingProps, l);
      case 19:
        return rs(e, t, l);
      case 31:
        return my(e, t, l);
      case 22:
        return ad(e, t, l, t.pendingProps);
      case 24:
        return (
          ia(t),
          (a = et(we)),
          e === null
            ? ((n = Oc()),
              n === null &&
                ((n = Ae),
                (u = _c()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= l),
                (n = u)),
              (t.memoizedState = { parent: a, cache: n }),
              Dc(t),
              Ol(t, we, n))
            : ((e.lanes & l) !== 0 && (Mc(e, t), Hn(t, null, null, l), Rn()),
              (n = e.memoizedState),
              (u = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  Ol(t, we, a))
                : ((a = u.cache),
                  Ol(t, we, a),
                  a !== n.cache && Ac(t, [we], l, !0))),
          Le(e, t, t.pendingProps.children, l),
          t.child
        );
      case 30:
        return (
          t.stateNode === null &&
            (t.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (a = t.pendingProps),
          a.name != null && a.name !== "auto"
            ? (t.flags |= e === null ? 18882560 : 18874368)
            : ee && Uu(t),
          e !== null && e.memoizedProps.name !== a.name
            ? (t.flags |= 4194816)
            : Za(e, t),
          Le(e, t, a.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(d(156, t.tag));
  }
  function pl(e) {
    e.flags |= 4;
  }
  function ms(e, t, l, a, n) {
    var u;
    if (
      ((u = (e.mode & 32) !== 0) &&
        (u =
          l === null
            ? Q0(t, a)
            : Q0(t, a) && (a.src !== l.src || a.srcSet !== l.srcSet)),
      u)
    ) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (kd()) e.flags |= 8192;
        else throw ((oa = Gu), Cc);
    } else e.flags &= -16777217;
  }
  function hd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !L0(t)))
      if (kd()) e.flags |= 8192;
      else throw ((oa = Gu), Cc);
  }
  function ui(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Xf() : 536870912), (e.lanes |= t), ($a |= t)));
  }
  function Xn(e, t) {
    if (!ee)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var l = e.tail, a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
          break;
        default:
          for (t = e.tail, l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
      }
  }
  function Oe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 1206910976),
          (a |= n.flags & 1206910976),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function vy(e, t, l) {
    var a = t.pendingProps;
    switch ((Tc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Oe(t), null);
      case 1:
        return (Oe(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          hl(we),
          Sa(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Ba(t)
              ? pl(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ec())),
          Oe(t),
          null
        );
      case 26:
        var n = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (pl(t),
              u !== null ? (Oe(t), hd(t, u)) : (Oe(t), ms(t, n, null, a, l)))
            : u
              ? u !== e.memoizedState
                ? (pl(t), Oe(t), hd(t, u))
                : (Oe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && pl(t),
                Oe(t),
                ms(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (ou(t),
          (l = Sl.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && pl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return (Oe(t), (t.subtreeFlags &= -33554433), null);
          }
          ((e = Jt.current),
            Ba(t) ? Ko(t) : ((e = R0(n, a, l)), (t.stateNode = e), pl(t)));
        }
        return (Oe(t), (t.subtreeFlags &= -33554433), null);
      case 5:
        if ((ou(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && pl(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(d(166));
            return (Oe(t), (t.subtreeFlags &= -33554433), null);
          }
          if (((u = Jt.current), Ba(t))) Ko(t);
          else {
            var i = In(Sl.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[Pe] = t), (u[mt] = a));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            e: switch ((nt(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && pl(t);
          }
        }
        return (
          Oe(t),
          (t.subtreeFlags &= -33554433),
          ms(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && pl(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(d(166));
          if (((e = Sl.current), Ba(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Ve),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[Pe] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                m0(e.nodeValue, l)
              )),
              e || zl(t, !0));
          } else
            ((e = In(e).createTextNode(a)), (e[Pe] = t), (t.stateNode = e));
        }
        return (Oe(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = Ba(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(d(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(d(557));
              e[Pe] = t;
            } else
              (aa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Oe(t), (e = !1));
          } else
            ((l = Ec()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0) throw Error(d(558));
        }
        return (Oe(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = Ba(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(d(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(d(317));
              n[Pe] = t;
            } else
              (aa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Oe(t), (n = !1));
          } else
            ((n = Ec()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return (
          Et(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              ui(t, t.updateQueue),
              Oe(t),
              null)
        );
      case 4:
        return (
          Sa(),
          e === null && ks(t.stateNode.containerInfo),
          (t.flags |= 67108864),
          Oe(t),
          null
        );
      case 10:
        return (hl(t.type), Oe(t), null);
      case 19:
        if ((wc(t), (a = t.memoizedState), a === null)) return (Oe(t), null);
        if (((n = (t.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) Xn(a, !1);
          else {
            if (He !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Zu(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Xn(a, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      ui(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (Xo(l, e), (l = l.sibling));
                  return (
                    qn(t, (lt.current & 1) | 2),
                    ee && dl(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              bt() > gi &&
              ((t.flags |= 128), (n = !0), Xn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = Zu(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ui(t, e),
                Xn(a, !0),
                a.tail === null &&
                  a.tailMode !== "collapsed" &&
                  a.tailMode !== "visible" &&
                  !u.alternate &&
                  !ee)
              )
                return (Oe(t), null);
            } else
              2 * bt() - a.renderingStartTime > gi &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), Xn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = a.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (a.last = u));
        }
        if (a.tail !== null) {
          e = a.tail;
          e: {
            for (l = e; l !== null; ) {
              if (l.alternate !== null) {
                l = !1;
                break e;
              }
              l = l.sibling;
            }
            l = !0;
          }
          return (
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = bt()),
            (e.sibling = null),
            (u = lt.current),
            (u = n ? (u & 1) | 2 : u & 1),
            a.tailMode === "visible" || a.tailMode === "collapsed" || !l || ee
              ? qn(t, u)
              : ((l = u), _e(tt, t), _e(lt, l), ct === null && (ct = t)),
            ee && dl(t, a.treeForkCount),
            e
          );
        }
        return (Oe(t), null);
      case 22:
      case 23:
        return (
          Et(t),
          qc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Oe(t),
          (l = t.updateQueue),
          l !== null && ui(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && Ie(sa),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          hl(we),
          Oe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return ((t.flags |= 33554432), Oe(t), null);
    }
    throw Error(d(156, t.tag));
  }
  function gy(e, t) {
    switch ((Tc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          hl(we),
          Sa(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ou(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Et(t), t.alternate === null)) throw Error(d(340));
          aa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Et(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(d(340));
          aa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (
          wc(t),
          (e = t.flags),
          e & 65536
            ? ((t.flags = (e & -65537) | 128),
              (e = t.memoizedState),
              e !== null && ((e.rendering = null), (e.tail = null)),
              (t.flags |= 4),
              t)
            : null
        );
      case 4:
        return (Sa(), null);
      case 10:
        return (hl(t.type), null);
      case 22:
      case 23:
        return (
          Et(t),
          qc(),
          e !== null && Ie(sa),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (hl(we), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yd(e, t) {
    switch ((Tc(t), t.tag)) {
      case 3:
        (hl(we), Sa());
        break;
      case 26:
      case 27:
      case 5:
        ou(t);
        break;
      case 4:
        Sa();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        wc(t);
        break;
      case 10:
        hl(t.type);
        break;
      case 22:
      case 23:
        (Et(t), qc(), e !== null && Ie(sa));
        break;
      case 24:
        hl(we);
    }
  }
  function Qn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            ((a = u()), (i.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (c) {
      Ne(t, t.return, c);
    }
  }
  function Bl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (n = t));
              var f = l,
                y = c;
              try {
                y();
              } catch (x) {
                Ne(n, f, x);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (x) {
      Ne(t, t.return, x);
    }
  }
  function vd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        ur(t, l);
      } catch (a) {
        Ne(e, e.return, a);
      }
    }
  }
  function gd(e, t, l) {
    ((l.props = ma(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ne(e, t, a);
    }
  }
  function Ft(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            var n = e.stateNode,
              u = fl(e.memoizedProps, n);
            ((n.ref === null || n.ref.name !== u) && (n.ref = E0(u)),
              (a = n.ref));
            break;
          case 7:
            if (e.stateNode === null) {
              var i = new Ot(e);
              (p(e.child, !1, c1, i, void 0, void 0), (e.stateNode = i));
            }
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (c) {
      Ne(e, t, c);
    }
  }
  function at(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ne(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Ne(e, t, n);
        }
      else l.current = null;
  }
  function ii(e, t) {
    if (
      (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
      e.alternate === null &&
      t !== null
    )
      for (var l = 0; l < t.length; l++) C0(e.stateNode, t[l]);
  }
  function pd(e) {
    for (
      var t = e.return;
      t !== null && (ys(t) && C0(e.stateNode, t.stateNode), !hs(t));
    )
      t = t.return;
  }
  function Ln(e) {
    for (
      var t = e.return;
      t !== null && (ys(t) && s1(e.stateNode, t.stateNode), !hs(t));
    )
      t = t.return;
  }
  function hs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function ys(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function vs(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Ne(e, e.return, n);
    }
  }
  function gs(e, t, l) {
    try {
      var a = e.stateNode;
      (Ly(a, e.type, l, t), (a[mt] = t));
    } catch (n) {
      Ne(e, e.return, n);
    }
  }
  function bd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Zl(e.type)) ||
      e.tag === 4
    );
  }
  function ps(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || bd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Zl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bs(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((n = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(n, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(n),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = kt)),
        ii(e, a),
        (ve = !0));
    else if (
      n !== 4 &&
      (n === 27 &&
        (ii(e, a), (a = null), Zl(e.type) && ((l = e.stateNode), (t = null))),
      (e = e.child),
      e !== null)
    )
      for (bs(e, t, l, a), e = e.sibling; e !== null; )
        (bs(e, t, l, a), (e = e.sibling));
  }
  function ci(e, t, l, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((n = e.stateNode),
        t ? l.insertBefore(n, t) : l.appendChild(n),
        ii(e, a),
        (ve = !0));
    else if (
      n !== 4 &&
      (n === 27 && (ii(e, a), (a = null), Zl(e.type) && (l = e.stateNode)),
      (e = e.child),
      e !== null)
    )
      for (ci(e, t, l, a), e = e.sibling; e !== null; )
        (ci(e, t, l, a), (e = e.sibling));
  }
  function xd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (nt(t, a, l), (t[Pe] = e), (t[mt] = l));
    } catch (u) {
      Ne(e, e.return, u);
    }
  }
  var si = !1,
    jt = null;
  function Sd(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (si = !0);
  }
  var It = null;
  function Td() {
    var e = It;
    return ((It = null), e);
  }
  var yt = 0;
  function Va(e, t, l, a, n) {
    return ((yt = 0), Nd(e.child, t, l, a, n));
  }
  function Nd(e, t, l, a, n) {
    for (var u = !1; e !== null; ) {
      if (e.tag === 5) {
        var i = e.stateNode;
        if (a !== null) {
          var c = lf(i);
          (a.push(c), c.view && (u = !0));
        } else u || (lf(i).view && (u = !0));
        ((si = !0), T0(i, yt === 0 ? t : t + "_" + yt, l), yt++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && n) || (Nd(e.child, t, l, a, n) && (u = !0)));
      e = e.sibling;
    }
    return u;
  }
  function Pt(e, t) {
    for (; e !== null; )
      (e.tag === 5
        ? N0(e.stateNode, e.memoizedProps)
        : (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && t) || Pt(e.child, t)),
        (e = e.sibling));
  }
  function fi(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (
          (e.tag !== 22 || e.memoizedState === null) &&
          (fi(e),
          e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)
        ) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto") throw Error(d(544));
          var l = t.name;
          ((t = ol(t.default, t.share)),
            t !== "none" && (Va(e, l, t, null, !1) || Pt(e.child, !1)));
        }
        e = e.sibling;
      }
  }
  function xs(e, t) {
    if (e.tag === 30) {
      var l = e.stateNode,
        a = e.memoizedProps,
        n = fl(a, l),
        u = ol(a.default, l.paired ? a.share : a.enter);
      u !== "none"
        ? Va(e, n, u, null, !1)
          ? (fi(e), l.paired || t || Pa(e, a.onEnter))
          : Pt(e.child, !1)
        : fi(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; ) (xs(e, t), (e = e.sibling));
    else fi(e);
  }
  function Ss(e) {
    if (jt !== null && jt.size !== 0) {
      var t = jt;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var l = e.memoizedProps,
                a = l.name;
              if (a != null && a !== "auto") {
                var n = t.get(a);
                if (n !== void 0) {
                  var u = ol(l.default, l.share);
                  if (
                    (u !== "none" &&
                      (Va(e, a, u, null, !1)
                        ? ((u = e.stateNode),
                          (n.paired = u),
                          (u.paired = n),
                          Pa(e, l.onShare))
                        : Pt(e.child, !1)),
                    t.delete(a),
                    t.size === 0)
                  )
                    break;
                }
              }
            }
            Ss(e);
          }
          e = e.sibling;
        }
    }
  }
  function Ts(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps,
        l = fl(t, e.stateNode),
        a = jt !== null ? jt.get(l) : void 0,
        n = ol(t.default, a !== void 0 ? t.share : t.exit);
      (n !== "none" &&
        (Va(e, l, n, null, !1)
          ? a !== void 0
            ? ((n = e.stateNode),
              (a.paired = n),
              (n.paired = a),
              jt.delete(l),
              Pa(e, t.onShare))
            : Pa(e, t.onExit)
          : Pt(e.child, !1)),
        jt !== null && Ss(e));
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; ) (Ts(e), (e = e.sibling));
    else jt !== null && Ss(e);
  }
  function Ed(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          l = fl(t, e.stateNode);
        ((t = ol(t.default, t.update)),
          (e.flags &= -5),
          t !== "none" && Va(e, l, t, (e.memoizedState = []), !1));
      } else (e.subtreeFlags & 33554432) !== 0 && Ed(e);
      e = e.sibling;
    }
  }
  function Ns(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && ((t.paired = null), Pt(e.child, !1));
          }
          Ns(e);
        }
        e = e.sibling;
      }
  }
  function oi(e) {
    if (e.tag === 30) ((e.stateNode.paired = null), Pt(e.child, !1), Ns(e));
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; ) (oi(e), (e = e.sibling));
    else Ns(e);
  }
  function jd(e) {
    for (e = e.child; e !== null; )
      (e.tag === 30
        ? Pt(e.child, !1)
        : (e.subtreeFlags & 33554432) !== 0 && jd(e),
        (e = e.sibling));
  }
  function Es(e, t, l, a, n, u, i) {
    for (var c = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (u !== null && yt < u.length) {
          var y = u[yt],
            x = lf(f);
          (y.view || x.view) && (c = !0);
          var T;
          if ((T = (e.flags & 4) === 0))
            if (x.clip) T = !0;
            else {
              T = y.rect;
              var m = x.rect;
              T =
                T.y !== m.y ||
                T.x !== m.x ||
                T.height !== m.height ||
                T.width !== m.width;
            }
          (T && (e.flags |= 4),
            x.abs
              ? (x = !y.abs)
              : ((y = y.rect),
                (x = x.rect),
                (x = y.height !== x.height || y.width !== x.width)),
            x && (e.flags |= 32));
        } else e.flags |= 32;
        ((e.flags & 4) !== 0 && T0(f, yt === 0 ? l : l + "_" + yt, n),
          (c && (e.flags & 4) !== 0) ||
            (It === null && (It = []),
            It.push(f, yt === 0 ? a : a + "_" + yt, t.memoizedProps)),
          yt++);
      } else
        (t.tag !== 22 || t.memoizedState === null) &&
          (t.tag === 30 && i
            ? (e.flags |= t.flags & 32)
            : Es(e, t.child, l, a, n, u, i) && (c = !0));
      t = t.sibling;
    }
    return c;
  }
  function Ad(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var l = e.memoizedProps,
          a = e.stateNode,
          n = fl(l, a),
          u = ol(l.default, l.update),
          i;
        ((i = e.memoizedState), (e.memoizedState = null), (a = e));
        var c = e.child;
        ((yt = 0),
          (n = Es(a, c, n, n, u, i, !1)),
          (e.flags & 4) !== 0 && n && Pa(e, l.onUpdate));
      } else (e.subtreeFlags & 33554432) !== 0 && Ad(e);
      e = e.sibling;
    }
  }
  var Ke = !1,
    be = !1,
    el = !1,
    js = !1,
    _d = typeof WeakSet == "function" ? WeakSet : Set,
    Je = null,
    tl = !1,
    Zn = !1,
    ri = !1,
    As = !1;
  function py(e, t, l) {
    if (((e = e.containerInfo), (Fs = on), (e = Do(e)), dc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var u = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, i.nodeType);
            } catch {
              a = null;
              break e;
            }
            var c = 0,
              f = -1,
              y = -1,
              x = 0,
              T = 0,
              m = e,
              g = null;
            t: for (;;) {
              for (
                var O;
                m !== a || (u !== 0 && m.nodeType !== 3) || (f = c + u),
                  m !== i || (n !== 0 && m.nodeType !== 3) || (y = c + n),
                  m.nodeType === 3 && (c += m.nodeValue.length),
                  (O = m.firstChild) !== null;
              )
                ((g = m), (m = O));
              for (;;) {
                if (m === e) break t;
                if (
                  (g === a && ++x === u && (f = c),
                  g === i && ++T === n && (y = c),
                  (O = m.nextSibling) !== null)
                )
                  break;
                ((m = g), (g = m.parentNode));
              }
              m = O;
            }
            a = f === -1 || y === -1 ? null : { start: f, end: y };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Is = { focusedElem: e, selectionRange: a },
        on = !1,
        l = (l & 335544064) === l,
        Je = t,
        t = l ? 9270 : 1024;
      Je !== null;
    ) {
      if (((e = Je), l && ((a = e.deletions), a !== null)))
        for (u = 0; u < a.length; u++) l && Ts(a[u]);
      if (e.alternate === null && (e.flags & 2) !== 0) (l && Sd(e), di(l));
      else {
        if (e.tag === 22) {
          if (((a = e.alternate), e.memoizedState !== null)) {
            (a !== null && a.memoizedState === null && l && Ts(a), di(l));
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            (l && Sd(e), di(l));
            continue;
          }
        }
        ((a = e.child),
          (e.subtreeFlags & t) !== 0 && a !== null
            ? ((a.return = e), (Je = a))
            : (l && Ed(e), di(l)));
      }
    }
    jt = null;
  }
  function di(e) {
    for (; Je !== null; ) {
      var t = Je,
        l = e,
        a = t.alternate,
        n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && a !== null) {
            ((l = void 0), (n = a.memoizedProps), (a = a.memoizedState));
            var u = t.stateNode;
            try {
              var i = ma(t.type, n);
              ((l = u.getSnapshotBeforeUpdate(i, a)),
                (u.__reactInternalSnapshotBeforeUpdate = l));
            } catch (c) {
              Ne(t, t.return, c);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (((a = t.stateNode.containerInfo), (l = a.nodeType), l === 9))
              uf(a);
            else if (l === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  uf(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          l &&
            a !== null &&
            ((l = fl(a.memoizedProps, a.stateNode)),
            (n = t.memoizedProps),
            (n = ol(n.default, n.update)),
            n !== "none" && Va(a, l, n, (a.memoizedState = []), !0));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(d(163));
      }
      if (((a = t.sibling), a !== null)) {
        ((a.return = t.return), (Je = a));
        break;
      }
      Je = t.return;
    }
  }
  function zd(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ll(e, l), a & 4 && Qn(5, l));
        break;
      case 1:
        if ((ll(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (i) {
              Ne(l, l.return, i);
            }
          else {
            var n = ma(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              Ne(l, l.return, i);
            }
          }
        (a & 64 && vd(l), a & 512 && Ft(l, l.return));
        break;
      case 3:
        if ((ll(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            ur(e, t);
          } catch (i) {
            Ne(l, l.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && xd(l);
      case 26:
      case 5:
        (ll(e, l), t === null && a & 4 && vs(l), a & 512 && Ft(l, l.return));
        break;
      case 12:
        ll(e, l);
        break;
      case 31:
        (ll(e, l), a & 4 && Md(e, l));
        break;
      case 13:
        (ll(e, l),
          a & 4 && Ud(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = Cy.bind(null, l)), r1(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ke), !a)) {
          var u = (t !== null && t.memoizedState !== null) || be;
          ((t = Ke),
            (n = be),
            (Ke = a),
            (be = u) && !n
              ? ((a = 2),
                (l.subtreeFlags & 8772) !== 0 && (a |= 1),
                Lt(e, l, a))
              : ll(e, l),
            (Ke = t),
            (be = n));
        }
        break;
      case 30:
        (ll(e, l), a & 512 && Ft(l, l.return));
        break;
      case 7:
        a & 512 && Ft(l, l.return);
      default:
        ll(e, l);
    }
  }
  function _s(e, t) {
    for (e = e.child; e !== null; ) (Od(e, t), (e = e.sibling));
  }
  function Od(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var l = e.stateNode;
          if (t) {
            var a = l.style;
            typeof a.setProperty == "function"
              ? a.setProperty("display", "none", "important")
              : (a.display = "none");
          } else {
            var n = e.stateNode,
              u = e.memoizedProps.style,
              i = u != null && u.hasOwnProperty("display") ? u.display : null;
            n.style.display =
              i == null || typeof i == "boolean" ? "" : ("" + i).trim();
          }
        } catch (f) {
          Ne(e, e.return, f);
        }
        zs(e, t);
        break;
      case 6:
        try {
          ((e.stateNode.nodeValue = t ? "" : e.memoizedProps), (ve = !0));
        } catch (f) {
          Ne(e, e.return, f);
        }
        break;
      case 18:
        try {
          var c = e.stateNode;
          t ? S0(c, !0) : S0(e.stateNode, !1);
        } catch (f) {
          Ne(e, e.return, f);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && _s(e, t);
        break;
      default:
        _s(e, t);
    }
  }
  function zs(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var l = e,
            a = t;
          switch (l.tag) {
            case 4:
              Od(l, a);
              break e;
            case 22:
              l.memoizedState === null && zs(l, a);
              break e;
            default:
              zs(l, a);
          }
        }
        e = e.sibling;
      }
  }
  function Cd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Cd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && gu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ce = null,
    vt = !1;
  function Xt(e, t, l) {
    for (l = l.child; l !== null; ) (Dd(e, t, l), (l = l.sibling));
  }
  function Dd(e, t, l) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(mn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (be || at(l, t),
          Xt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode &&
              !be &&
              ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        (be || at(l, t), Ln(l));
        var a = Ce,
          n = vt;
        (Zl(l.type) && ((Ce = l.stateNode), (vt = !1)),
          Xt(e, t, l),
          H0(l.stateNode, l.type, l.memoizedProps),
          (Ce = a),
          (vt = n));
        break;
      case 5:
        (be || at(l, t), Ln(l));
      case 6:
        if (
          (l.tag === 6 && Ln(l),
          (a = Ce),
          (n = vt),
          (Ce = null),
          Xt(e, t, l),
          (Ce = a),
          (vt = n),
          Ce !== null)
        )
          if (vt)
            try {
              ((Ce.nodeType === 9
                ? Ce.body
                : Ce.nodeName === "HTML"
                  ? Ce.ownerDocument.body
                  : Ce
              ).removeChild(l.stateNode),
                (ve = !0));
            } catch (u) {
              Ne(l, t, u);
            }
          else
            try {
              (Ce.removeChild(l.stateNode), (ve = !0));
            } catch (u) {
              Ne(l, t, u);
            }
        break;
      case 18:
        Ce !== null &&
          (vt
            ? ((e = Ce),
              x0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              rn(e))
            : x0(Ce, l.stateNode));
        break;
      case 4:
        ((a = Ce),
          (n = vt),
          (Ce = l.stateNode.containerInfo),
          (vt = !0),
          Xt(e, t, l),
          (Ce = a),
          (vt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Bl(2, l, t), be || Bl(4, l, t), Xt(e, t, l));
        break;
      case 1:
        (be ||
          (at(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && gd(l, t, a)),
          Xt(e, t, l));
        break;
      case 21:
        Xt(e, t, l);
        break;
      case 22:
        ((be = (a = be) || l.memoizedState !== null), Xt(e, t, l), (be = a));
        break;
      case 30:
        (at(l, t), Xt(e, t, l));
        break;
      case 7:
        (be || at(l, t), Xt(e, t, l));
        break;
      default:
        Xt(e, t, l);
    }
  }
  function Md(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        rn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
    }
  }
  function Ud(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        rn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
  }
  function by(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new _d()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new _d()),
          t
        );
      default:
        throw Error(d(435, e.tag));
    }
  }
  function mi(e, t) {
    var l = by(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Dy.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ot(e, t, l) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var u = a[n],
          i = e,
          c = t,
          f = c;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Zl(f.type)) {
                ((Ce = f.stateNode), (vt = !1));
                break e;
              }
              break;
            case 5:
              ((Ce = f.stateNode), (vt = !1));
              break e;
            case 3:
            case 4:
              ((Ce = f.stateNode.containerInfo), (vt = !0));
              break e;
          }
          f = f.return;
        }
        if (Ce === null) throw Error(d(160));
        (Dd(i, c, u),
          (Ce = null),
          (vt = !1),
          (i = u.alternate),
          i !== null && (i.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Rd(t, e, l), (t = t.sibling));
  }
  var Qt = null;
  function Rd(e, t, l) {
    var a = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          n & 4 &&
          ((a = e.updateQueue), (a = a !== null ? a.events : null), a !== null)
        )
          for (var u = 0; u < a.length; u++) {
            var i = a[u];
            i.ref.impl = i.nextImpl;
          }
        (ot(t, e, l),
          rt(e),
          n & 4 && (Bl(3, e, e.return), Qn(3, e), Bl(5, e, e.return)));
        break;
      case 1:
        (ot(t, e, l),
          rt(e),
          n & 512 && (be || a === null || at(a, a.return)),
          n & 64 &&
            Ke &&
            ((e = e.updateQueue),
            e !== null &&
              ((t = e.callbacks),
              t !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? t : l.concat(t))))));
        break;
      case 26:
        if (
          ((u = Qt),
          ot(t, e, l),
          rt(e),
          n & 512 && (be || a === null || at(a, a.return)),
          n & 4)
        )
          if (
            ((n = a !== null ? a.memoizedState : null),
            (l = e.memoizedState),
            a === null)
          )
            if (l === null)
              if (e.stateNode === null)
                if (Ke)
                  e.stateNode = g0(e.type, e.memoizedProps, t.containerInfo, e);
                else {
                  e: {
                    ((t = e.type),
                      (l = e.memoizedProps),
                      (n = u.ownerDocument || u));
                    t: switch (t) {
                      case "title":
                        ((a = n.getElementsByTagName("title")[0]),
                          (!a ||
                            a[vn] ||
                            a[Pe] ||
                            a.namespaceURI === "http://www.w3.org/2000/svg" ||
                            a.hasAttribute("itemprop")) &&
                            ((a = n.createElement(t)),
                            n.head.insertBefore(
                              a,
                              n.querySelector("head > title"),
                            )),
                          nt(a, t, l),
                          (a[Pe] = e),
                          Ze(a),
                          (t = a));
                        break e;
                      case "link":
                        if (
                          (u = X0("link", "href", n).get(t + (l.href || "")))
                        ) {
                          for (i = 0; i < u.length; i++)
                            if (
                              ((a = u[i]),
                              a.getAttribute("href") ===
                                (l.href == null || l.href === ""
                                  ? null
                                  : l.href) &&
                                a.getAttribute("rel") ===
                                  (l.rel == null ? null : l.rel) &&
                                a.getAttribute("title") ===
                                  (l.title == null ? null : l.title) &&
                                a.getAttribute("crossorigin") ===
                                  (l.crossOrigin == null
                                    ? null
                                    : l.crossOrigin))
                            ) {
                              u.splice(i, 1);
                              break t;
                            }
                        }
                        ((a = n.createElement(t)),
                          nt(a, t, l),
                          n.head.appendChild(a));
                        break;
                      case "meta":
                        if (
                          (u = X0("meta", "content", n).get(
                            t + (l.content || ""),
                          ))
                        ) {
                          for (i = 0; i < u.length; i++)
                            if (
                              ((a = u[i]),
                              a.getAttribute("content") ===
                                (l.content == null ? null : "" + l.content) &&
                                a.getAttribute("name") ===
                                  (l.name == null ? null : l.name) &&
                                a.getAttribute("property") ===
                                  (l.property == null ? null : l.property) &&
                                a.getAttribute("http-equiv") ===
                                  (l.httpEquiv == null ? null : l.httpEquiv) &&
                                a.getAttribute("charset") ===
                                  (l.charSet == null ? null : l.charSet))
                            ) {
                              u.splice(i, 1);
                              break t;
                            }
                        }
                        ((a = n.createElement(t)),
                          nt(a, t, l),
                          n.head.appendChild(a));
                        break;
                      default:
                        throw Error(d(468, t));
                    }
                    ((a[Pe] = e), Ze(a), (t = a));
                  }
                  e.stateNode = t;
                }
              else Ke || mf(u, e.type, e.stateNode);
            else e.stateNode = G0(u, l, e.memoizedProps);
          else
            n !== l
              ? (n === null
                  ? ((t = a.stateNode),
                    t === null || be || t.parentNode.removeChild(t))
                  : n.count--,
                l === null
                  ? Ke || mf(u, e.type, e.stateNode)
                  : G0(u, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                gs(e, e.memoizedProps, a.memoizedProps);
        break;
      case 27:
        (ot(t, e, l),
          rt(e),
          n & 512 && (be || a === null || at(a, a.return)),
          a !== null && n & 4 && gs(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ((u = el),
          (el = !1),
          ot(t, e, l),
          (el = u),
          rt(e),
          n & 512 && (be || a === null || at(a, a.return)),
          e.flags & 32)
        ) {
          t = e.stateNode;
          try {
            (_a(t, ""), (ve = !0));
          } catch (x) {
            Ne(e, e.return, x);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((t = e.memoizedProps), gs(e, t, a !== null ? a.memoizedProps : t)),
          n & 1024 && (js = !0));
        break;
      case 6:
        if ((ot(t, e, l), rt(e), n & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          ((t = e.memoizedProps), (l = e.stateNode));
          try {
            ((l.nodeValue = t), (ve = !0));
          } catch (x) {
            Ne(e, e.return, x);
          }
        }
        break;
      case 3:
        if (
          ((ve = !1),
          (zi = null),
          (u = Qt),
          (Qt = Pn(t.containerInfo)),
          ot(t, e, l),
          (Qt = u),
          rt(e),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            rn(t.containerInfo);
          } catch (x) {
            Ne(e, e.return, x);
          }
        (js && ((js = !1), Hd(e)), (ve = !1));
        break;
      case 4:
        ((n = el),
          (el = Ke),
          (a = eo()),
          (u = Qt),
          (Qt = Pn(e.stateNode.containerInfo)),
          ot(t, e, l),
          rt(e),
          (Qt = u),
          ve && Zn && (ri = !0),
          (ve = a),
          (el = n));
        break;
      case 12:
        (ot(t, e, l), rt(e));
        break;
      case 31:
        (ot(t, e, l),
          rt(e),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), mi(e, t))));
        break;
      case 13:
        (ot(t, e, l),
          rt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (vi = bt()),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), mi(e, t))));
        break;
      case 22:
        ((u = e.memoizedState !== null),
          (i = a !== null && a.memoizedState !== null));
        var c = Ke,
          f = be,
          y = el;
        ((Ke = c || u),
          (el = y || u),
          (be = f || i),
          ot(t, e, l),
          (be = f),
          (el = y),
          (Ke = c),
          rt(e),
          n & 8192 &&
            ((t = e.stateNode),
            (t._visibility = u ? t._visibility & -2 : t._visibility | 1),
            !u ||
              a === null ||
              i ||
              Ke ||
              be ||
              ((t = i || be),
              (l = Ke),
              (a = be),
              (Ke = u || Ke),
              (be = t),
              wl(e, 2),
              (Ke = l),
              (be = a)),
            (!u && el) || _s(e, u)),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null &&
              ((l = t.retryQueue),
              l !== null && ((t.retryQueue = null), mi(e, l)))));
        break;
      case 19:
        (ot(t, e, l),
          rt(e),
          n & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), mi(e, t))));
        break;
      case 30:
        (n & 512 && (be || a === null || at(a, a.return)),
          (n = eo()),
          (u = Zn),
          (i = (l & 335544064) === l),
          (c = e.memoizedProps),
          (Zn = i && ol(c.default, c.update) !== "none"),
          ot(t, e, l),
          rt(e),
          i && a !== null && ve && (e.flags |= 4),
          (Zn = u),
          (ve = n));
        break;
      case 21:
        break;
      case 7:
        (n & 512 && (be || a === null || at(a, a.return)),
          a && a.stateNode !== null && (a.stateNode._fragmentFiber = e));
      default:
        (ot(t, e, l), rt(e));
    }
  }
  function rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (bd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var n = e.return; n !== null; ) {
          if (ys(n)) {
            var u = n.stateNode;
            a === null ? (a = [u]) : a.push(u);
          }
          if (hs(n)) break;
          n = n.return;
        }
        var i = a;
        if (l == null) throw Error(d(160));
        switch (l.tag) {
          case 27:
            var c = l.stateNode,
              f = ps(e);
            ci(e, f, c, i);
            break;
          case 5:
            var y = l.stateNode;
            l.flags & 32 && (_a(y, ""), (l.flags &= -33));
            var x = ps(e);
            ci(e, x, y, i);
            break;
          case 3:
          case 4:
            var T = l.stateNode.containerInfo,
              m = ps(e);
            bs(e, m, T, i);
            break;
          default:
            throw Error(d(161));
        }
      } catch (g) {
        Ne(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Hd(t),
          t.tag === 5 &&
            t.flags & 1024 &&
            ((t = t.stateNode), (on = !0), t.reset(), (on = !1)),
          (e = e.sibling));
      }
  }
  function Ka(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; ) (qd(t, e), (t = t.sibling));
    else Ad(t);
  }
  function qd(e, t) {
    var l = e.alternate;
    if (l === null) xs(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (((As = tl = !1), Td(), Ka(t, e), !tl && !ri)) {
            if (((e = It), e !== null))
              for (var a = 0; a < e.length; a += 3) {
                l = e[a];
                var n = e[a + 1];
                (N0(l, e[a + 2]),
                  (l = l.ownerDocument.documentElement),
                  l !== null &&
                    l.animate(
                      { opacity: [0, 0], pointerEvents: ["none", "none"] },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + n + ")",
                      },
                    ));
              }
            ((e = t.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.documentElement
                  : e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === "" &&
                ((e.style.viewTransitionName = "none"),
                e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                e.animate(
                  { width: [0, 0], height: [0, 0] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (As = !0));
          }
          It = null;
          break;
        case 5:
          Ka(t, e);
          break;
        case 4:
          ((a = tl), (tl = !1), Ka(t, e), tl && (ri = !0), (tl = a));
          break;
        case 22:
          e.memoizedState === null &&
            (l.memoizedState !== null ? xs(e, !1) : Ka(t, e));
          break;
        case 30:
          ((a = tl), (n = Td()), (tl = !1), Ka(t, e), tl && (e.flags |= 4));
          var u = e.memoizedProps,
            i = e.stateNode;
          ((t = fl(u, i)), (i = fl(l.memoizedProps, i)));
          var c = ol(u.default, u.update);
          (c === "none"
            ? (t = !1)
            : ((u = l.memoizedState),
              (l.memoizedState = null),
              (l = e.child),
              (yt = 0),
              (t = Es(e, l, t, i, c, u, !0)),
              yt !== (u === null ? 0 : u.length) && (e.flags |= 32)),
            (e.flags & 4) !== 0 && t
              ? (Pa(e, e.memoizedProps.onUpdate), (It = n))
              : n !== null && (n.push.apply(n, It), (It = n)),
            (tl = (e.flags & 32) !== 0 ? !0 : a));
          break;
        default:
          Ka(t, e);
      }
  }
  function ll(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (zd(e, t.alternate, t), (t = t.sibling));
  }
  function wl(e, t) {
    for (e = e.child; e !== null; ) {
      var l = e,
        a = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Bl(4, l, l.return), wl(l, a));
          break;
        case 1:
          at(l, l.return);
          var n = l.stateNode;
          (typeof n.componentWillUnmount == "function" && gd(l, l.return, n),
            wl(l, a));
          break;
        case 27:
          (a & 2) !== 0 && H0(l.stateNode, l.type, l.memoizedProps);
        case 5:
          (at(l, l.return), (l.tag !== 5 && l.tag !== 27) || Ln(l), wl(l, a));
          break;
        case 6:
          Ln(l);
          break;
        case 26:
          (at(l, l.return),
            (n = l.stateNode),
            l.memoizedState !== null ||
              n === null ||
              be ||
              n.parentNode.removeChild(n),
            wl(l, a));
          break;
        case 22:
          l.memoizedState === null && wl(l, a);
          break;
        case 30:
          (at(l, l.return), wl(l, a));
          break;
        case 7:
          at(l, l.return);
        default:
          wl(l, a);
      }
      e = e.sibling;
    }
  }
  function Lt(e, t, l) {
    for (
      l = (t.subtreeFlags & 8772) !== 0 ? l : l & -2, t = t.child;
      t !== null;
    ) {
      var a = t.alternate,
        n = e,
        u = t,
        i = u.flags,
        c = (l & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Lt(n, u, l), Qn(4, u));
          break;
        case 1:
          if (
            (Lt(n, u, l),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (x) {
              Ne(a, a.return, x);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)
                  nr(y[n], f);
            } catch (x) {
              Ne(a, a.return, x);
            }
          }
          (c && i & 64 && vd(u), Ft(u, u.return));
          break;
        case 27:
          (l & 2) !== 0 && xd(u);
        case 5:
          ((u.tag !== 5 && u.tag !== 27) || pd(u),
            Lt(n, u, l),
            c && a === null && i & 4 && vs(u),
            Ft(u, u.return));
          break;
        case 6:
          pd(u);
          break;
        case 26:
          ((f = u.stateNode),
            u.memoizedState !== null ||
              f === null ||
              Ke ||
              mf(Pn(f.ownerDocument), u.type, f),
            Lt(n, u, l),
            c && a === null && i & 4 && vs(u),
            Ft(u, u.return));
          break;
        case 12:
          Lt(n, u, l);
          break;
        case 31:
          (Lt(n, u, l), c && i & 4 && Md(n, u));
          break;
        case 13:
          (Lt(n, u, l), c && i & 4 && Ud(n, u));
          break;
        case 22:
          (u.memoizedState === null && Lt(n, u, l), Ft(u, u.return));
          break;
        case 30:
          (Lt(n, u, l), Ft(u, u.return));
          break;
        case 7:
          Ft(u, u.return);
        default:
          Lt(n, u, l);
      }
      t = t.sibling;
    }
  }
  function Os(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && On(l)));
  }
  function Cs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && On(e)));
  }
  function Bt(e, t, l, a) {
    var n = (l & 335544064) === l;
    if (t.subtreeFlags & (n ? 10262 : 10256))
      for (t = t.child; t !== null; ) (Bd(e, t, l, a), (t = t.sibling));
    else n && jd(t);
  }
  function Bd(e, t, l, a) {
    var n = (l & 335544064) === l;
    n &&
      t.alternate === null &&
      t.return !== null &&
      t.return.alternate !== null &&
      oi(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Bt(e, t, l, a), u & 2048 && Qn(9, t));
        break;
      case 1:
        Bt(e, t, l, a);
        break;
      case 3:
        (Bt(e, t, l, a),
          n &&
            As &&
            ((e = e.containerInfo),
            (e =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            e.style.viewTransitionName === "root" &&
              (e.style.viewTransitionName = ""),
            (e = e.ownerDocument.documentElement),
            e !== null &&
              e.style.viewTransitionName === "none" &&
              (e.style.viewTransitionName = "")),
          u & 2048 &&
            ((u = null),
            t.alternate !== null && (u = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== u && (t.refCount++, u != null && On(u))));
        break;
      case 12:
        if (u & 2048) {
          (Bt(e, t, l, a), (u = t.stateNode));
          try {
            var i = t.memoizedProps,
              c = i.id,
              f = i.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                u.passiveEffectDuration,
                -0,
              );
          } catch (y) {
            Ne(t, t.return, y);
          }
        } else Bt(e, t, l, a);
        break;
      case 31:
        Bt(e, t, l, a);
        break;
      case 13:
        Bt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? (n && c !== null && c.memoizedState === null && oi(c),
              i._visibility & 2 ? Bt(e, t, l, a) : Vn(e, t))
            : (n && c !== null && c.memoizedState !== null && oi(t),
              i._visibility & 2
                ? Bt(e, t, l, a)
                : ((i._visibility |= 2),
                  Ja(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1))),
          u & 2048 && Os(c, t));
        break;
      case 24:
        (Bt(e, t, l, a), u & 2048 && Cs(t.alternate, t));
        break;
      case 30:
        (n &&
          ((u = t.alternate), u !== null && (Pt(u.child, !0), Pt(t.child, !0))),
          Bt(e, t, l, a));
        break;
      default:
        Bt(e, t, l, a);
    }
  }
  function Ja(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        i = t,
        c = l,
        f = a,
        y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Ja(u, i, c, f, n), Qn(8, i));
          break;
        case 23:
          break;
        case 22:
          var x = i.stateNode;
          (i.memoizedState !== null
            ? x._visibility & 2
              ? Ja(u, i, c, f, n)
              : Vn(u, i)
            : ((x._visibility |= 2), Ja(u, i, c, f, n)),
            n && y & 2048 && Os(i.alternate, i));
          break;
        case 24:
          (Ja(u, i, c, f, n), n && y & 2048 && Cs(i.alternate, i));
          break;
        default:
          Ja(u, i, c, f, n);
      }
      t = t.sibling;
    }
  }
  function Vn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Vn(l, a), n & 2048 && Os(a.alternate, a));
            break;
          case 24:
            (Vn(l, a), n & 2048 && Cs(a.alternate, a));
            break;
          default:
            Vn(l, a);
        }
        t = t.sibling;
      }
  }
  var ha = 8192;
  function ya(e, t, l) {
    if (e.subtreeFlags & ha)
      for (e = e.child; e !== null; ) (wd(e, t, l), (e = e.sibling));
  }
  function wd(e, t, l) {
    switch (e.tag) {
      case 26:
        (ya(e, t, l),
          e.flags & ha &&
            (e.memoizedState !== null
              ? j1(l, Qt, e.memoizedState, e.memoizedProps)
              : ((e = e.stateNode), (t & 335544128) === t && V0(l, e))));
        break;
      case 5:
        (ya(e, t, l),
          e.flags & ha &&
            ((e = e.stateNode), (t & 335544128) === t && V0(l, e)));
        break;
      case 3:
      case 4:
        var a = Qt;
        ((Qt = Pn(e.stateNode.containerInfo)), ya(e, t, l), (Qt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = ha), (ha = 16777216), ya(e, t, l), (ha = a))
            : ya(e, t, l));
        break;
      case 30:
        if (
          (e.flags & ha) !== 0 &&
          ((a = e.memoizedProps.name), a != null && a !== "auto")
        ) {
          var n = e.stateNode;
          ((n.paired = null), jt === null && (jt = new Map()), jt.set(a, n));
        }
        ya(e, t, l);
        break;
      default:
        ya(e, t, l);
    }
  }
  function Yd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Kn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Je = a), Xd(a, e));
        }
      Yd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Gd(e), (e = e.sibling));
  }
  function Gd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Kn(e), e.flags & 2048 && Bl(9, e, e.return));
        break;
      case 3:
        Kn(e);
        break;
      case 12:
        Kn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), hi(e))
          : Kn(e);
        break;
      default:
        Kn(e);
    }
  }
  function hi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Je = a), Xd(a, e));
        }
      Yd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Bl(8, t, t.return), hi(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), hi(t)));
          break;
        default:
          hi(t);
      }
      e = e.sibling;
    }
  }
  function Xd(e, t) {
    for (; Je !== null; ) {
      var l = Je;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Bl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          On(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Je = a));
      else
        e: for (l = e; Je !== null; ) {
          a = Je;
          var n = a.sibling,
            u = a.return;
          if ((Cd(a), a === l)) {
            Je = null;
            break e;
          }
          if (n !== null) {
            ((n.return = u), (Je = n));
            break e;
          }
          Je = u;
        }
    }
  }
  var xy = {
      getCacheForType: function (e) {
        var t = et(we),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return et(we).controller.signal;
      },
    },
    Sy = typeof WeakMap == "function" ? WeakMap : Map,
    pe = 0,
    Ae = null,
    ne = null,
    se = 0,
    Te = 0,
    At = null,
    Yl = !1,
    ka = !1,
    Ds = !1,
    bl = 0,
    He = 0,
    Gl = 0,
    va = 0,
    yi = 0,
    _t = 0,
    $a = 0,
    Jn = null,
    gt = null,
    Ms = !1,
    vi = 0,
    Qd = 0,
    gi = 1 / 0,
    pi = null,
    Xl = null,
    Me = 0,
    Zt = null,
    ga = null,
    al = 0,
    Us = 0,
    Rs = null,
    Ld = null,
    Wa = null,
    Fa = null,
    Ia = null,
    kn = 0,
    bi = null;
  function zt() {
    return (pe & 2) !== 0 && se !== 0 ? se & -se : q.T !== null ? Zs() : Vf();
  }
  function Zd() {
    if (_t === 0)
      if ((se & 536870912) === 0 || ee) {
        var e = mu;
        ((mu <<= 1), (mu & 3932160) === 0 && (mu = 262144), (_t = e));
      } else _t = 536870912;
    return ((e = tt.current), e !== null && (e.flags |= 32), _t);
  }
  function Pa(e, t) {
    if (t != null) {
      var l = e.stateNode,
        a = l.ref;
      (a === null && (a = l.ref = E0(fl(e.memoizedProps, l))),
        Fa === null && (Fa = []),
        Fa.push(t.bind(null, a)));
    }
  }
  function pt(e, t, l) {
    (((e === Ae && (Te === 2 || Te === 9)) || e.cancelPendingCommit !== null) &&
      (en(e, 0), Ql(e, se, _t, !1)),
      yn(e, l),
      ((pe & 2) === 0 || e !== Ae) &&
        (e === Ae &&
          ((pe & 2) === 0 && (va |= l), He === 4 && Ql(e, se, _t, !1)),
        nl(e)));
  }
  function Vd(e, t, l) {
    if ((pe & 6) !== 0) throw Error(d(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || hn(e, t),
      n = a ? Ey(e, t) : qs(e, t, !0),
      u = a;
    do {
      if (n === 0) {
        ka && !a && Ql(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), u && !Ty(l))) {
          ((n = qs(e, t, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            e: {
              var c = e;
              n = Jn;
              var f = c.current.memoizedState.isDehydrated;
              if (
                (f && (en(c, i).flags |= 256),
                (i = qs(c, i, !1)),
                i !== 2 && i !== 6)
              ) {
                if (Ds && !f) {
                  ((c.errorRecoveryDisabledLanes |= u), (va |= u), (n = 4));
                  break e;
                }
                ((u = gt),
                  (gt = n),
                  u !== null &&
                    (gt === null ? (gt = u) : gt.push.apply(gt, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (en(e, 0), Ql(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (u = n), u)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Ql(a, t, _t, !Yl);
              break e;
            case 2:
              gt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((t & 62914560) === t && ((n = vi + 300 - bt()), 10 < n)) {
            if ((Ql(a, t, _t, !Yl), yu(a, 0, !0) !== 0)) break e;
            ((al = t),
              (a.timeoutHandle = tf(
                Kd.bind(
                  null,
                  a,
                  l,
                  gt,
                  pi,
                  Ms,
                  t,
                  _t,
                  va,
                  $a,
                  Yl,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break e;
          }
          Kd(a, l, gt, pi, Ms, t, _t, va, $a, Yl, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    nl(e);
  }
  function Kd(e, t, l, a, n, u, i, c, f, y, x, T, m, g) {
    e.timeoutHandle = -1;
    var O = t.subtreeFlags,
      U = (u & 335544064) === u;
    if (
      ((T = null),
      (U || O & 8192 || (O & 16785408) === 16785408) &&
        ((T = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: kt,
        }),
        (jt = null),
        wd(t, u, T),
        U &&
          ((O = T),
          (U = e.containerInfo),
          (U = (U.nodeType === 9 ? U : U.ownerDocument).__reactViewTransition),
          U != null &&
            (O.count++,
            (O.waitingForViewTransition = !0),
            (O = lu.bind(O)),
            U.finished.then(O, O))),
        (O =
          (u & 62914560) === u
            ? vi - bt()
            : (u & 4194048) === u
              ? Qd - bt()
              : 0),
        (O = A1(T, O)),
        O !== null))
    ) {
      ((al = u),
        (e.cancelPendingCommit = O(
          e0.bind(null, e, t, u, l, a, n, i, c, f, y, x, T, null, m, g),
        )),
        Ql(e, u, i, !y));
      return;
    }
    e0(e, t, u, l, a, n, i, c, f, y, x, T);
  }
  function Ty(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!Nt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Ql(e, t, l, a) {
    ((t = Gf(e, t)),
      (t &= ~yi),
      (t &= ~va),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var u = 31 - St(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    l !== 0 && Qf(e, l, t);
  }
  function xi() {
    return (pe & 6) === 0 ? ($n(0), !1) : !0;
  }
  function Hs() {
    if (ne !== null) {
      if (Te === 0) var e = ne.return;
      else ((e = ne), (ml = na = null), Lc(e), (Ga = null), (Mn = 0), (e = ne));
      for (; e !== null; ) (yd(e.alternate, e), (e = e.return));
      ne = null;
    }
  }
  function en(e, t) {
    var l = e.timeoutHandle;
    return (
      l !== -1 && ((e.timeoutHandle = -1), Ky(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (al = 0),
      Hs(),
      (Ae = e),
      (ne = l = rl(e.current, null)),
      (se = t),
      (Te = 0),
      (At = null),
      (Yl = !1),
      (ka = hn(e, t)),
      (Ds = !1),
      ($a = _t = yi = va = Gl = He = 0),
      (gt = Jn = null),
      (Ms = !1),
      (bl = Gf(e, t)),
      zu(),
      l
    );
  }
  function Jd(e, t) {
    ((F = null),
      (q.H = Pu),
      t === Ya || t === Yu
        ? ((t = er()), (Te = 3))
        : t === Cc
          ? ((t = er()), (Te = 4))
          : (Te =
              t === ns
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (At = t),
      ne === null && ((He = 1), ei(e, Ut(t, e.current))));
  }
  function kd() {
    var e = tt.current;
    return e === null
      ? !0
      : (se & 4194048) === se
        ? ct === null
        : (se & 62914560) === se || (se & 536870912) !== 0
          ? e === ct
          : !1;
  }
  function $d() {
    var e = q.H;
    return ((q.H = Pu), e === null ? Pu : e);
  }
  function Wd() {
    var e = q.A;
    return ((q.A = xy), e);
  }
  function Si() {
    ((He = 4),
      Yl || ((se & 4194048) !== se && tt.current !== null) || (ka = !0),
      ((Gl & 134217727) === 0 && (va & 134217727) === 0) ||
        Ae === null ||
        Ql(Ae, se, _t, !1));
  }
  function qs(e, t, l) {
    var a = pe;
    pe |= 2;
    var n = $d(),
      u = Wd();
    ((Ae !== e || se !== t) && ((pi = null), en(e, t)), (t = !1));
    var i = He;
    e: do
      try {
        if (Te !== 0 && ne !== null) {
          var c = ne,
            f = At;
          switch (Te) {
            case 8:
              (Hs(), (i = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var y = Te;
              if (((Te = 0), (At = null), tn(e, c, f, y), l && ka)) {
                i = 0;
                break e;
              }
              break;
            default:
              ((y = Te), (Te = 0), (At = null), tn(e, c, f, y));
          }
        }
        (Ny(), (i = He));
        break;
      } catch (x) {
        Jd(e, x);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ml = na = null),
      (pe = a),
      (q.H = n),
      (q.A = u),
      ne === null && ((Ae = null), (se = 0), zu()),
      i
    );
  }
  function Ny() {
    for (; ne !== null; ) Fd(ne);
  }
  function Ey(e, t) {
    var l = pe;
    pe |= 2;
    var a = $d(),
      n = Wd();
    Ae !== e || se !== t
      ? ((pi = null), (gi = bt() + 500), en(e, t))
      : (ka = hn(e, t));
    e: do
      try {
        if (Te !== 0 && ne !== null) {
          t = ne;
          var u = At;
          t: switch (Te) {
            case 1:
              ((Te = 0), (At = null), tn(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Io(u)) {
                ((Te = 0), (At = null), Id(t));
                break;
              }
              ((t = function () {
                ((Te !== 2 && Te !== 9) || Ae !== e || (Te = 7), nl(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Te = 7;
              break e;
            case 4:
              Te = 5;
              break e;
            case 7:
              Io(u)
                ? ((Te = 0), (At = null), Id(t))
                : ((Te = 0), (At = null), tn(e, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (ne.tag) {
                case 26:
                  i = ne.memoizedState;
                case 5:
                case 27:
                  var c = ne;
                  if (i ? L0(i) : c.stateNode.complete) {
                    ((Te = 0), (At = null));
                    var f = c.sibling;
                    if (f !== null) ne = f;
                    else {
                      var y = c.return;
                      y !== null ? ((ne = y), Ti(y)) : (ne = null);
                    }
                    break t;
                  }
              }
              ((Te = 0), (At = null), tn(e, t, u, 5));
              break;
            case 6:
              ((Te = 0), (At = null), tn(e, t, u, 6));
              break;
            case 8:
              (Hs(), (He = 6));
              break e;
            default:
              throw Error(d(462));
          }
        }
        jy();
        break;
      } catch (x) {
        Jd(e, x);
      }
    while (!0);
    return (
      (ml = na = null),
      (q.H = a),
      (q.A = n),
      (pe = l),
      ne !== null ? 0 : ((Ae = null), (se = 0), zu(), He)
    );
  }
  function jy() {
    for (; ne !== null && !Qm(); ) Fd(ne);
  }
  function Fd(e) {
    var t = md(e.alternate, e, bl);
    ((e.memoizedProps = e.pendingProps), t === null ? Ti(e) : (ne = t));
  }
  function Id(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = id(l, t, t.pendingProps, t.type, void 0, se);
        break;
      case 11:
        t = id(l, t, t.pendingProps, t.type.render, t.ref, se);
        break;
      case 5:
        Lc(t);
        var a = t;
        a === Ve &&
          (ee
            ? (Ru(a), a.tag === 5 && a.stateNode != null && (ze = a.stateNode))
            : (Ru(a), (ee = !0)));
      default:
        (yd(l, t), (t = ne = Xo(t, bl)), (t = md(l, t, bl)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ti(e) : (ne = t));
  }
  function tn(e, t, l, a) {
    ((ml = na = null), Lc(t), (Ga = null), (Mn = 0));
    var n = t.return;
    try {
      if (dy(e, n, t, l, se)) {
        ((He = 1), ei(e, Ut(l, e.current)), (ne = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((ne = n), u);
      ((He = 1), ei(e, Ut(l, e.current)), (ne = null));
      return;
    }
    t.flags & 32768
      ? (ee || a === 1
          ? (e = !0)
          : ka || (se & 536870912) !== 0
            ? (e = !1)
            : ((Yl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = tt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Pd(t, e))
      : Ti(t);
  }
  function Ti(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Pd(t, Yl);
        return;
      }
      e = t.return;
      var l = vy(t.alternate, t, bl);
      if (l !== null) {
        ne = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ne = t;
        return;
      }
      ne = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function Pd(e, t) {
    do {
      var l = gy(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (ne = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ne = e;
        return;
      }
      ne = e = l;
    } while (e !== null);
    ((He = 6), (ne = null));
  }
  function e0(e, t, l, a, n, u, i, c, f, y, x, T) {
    e.cancelPendingCommit = null;
    do Ni();
    while (Me !== 0);
    if ((pe & 6) !== 0) throw Error(d(327));
    if (t !== null) {
      if (t === e.current) throw Error(d(177));
      (e === Ae && ((ne = Ae = null), (se = 0)),
        (ga = t),
        (Zt = e),
        (al = l),
        (Rs = n),
        (Ld = a),
        Ay(e, t, l, i, c, f, T));
    }
  }
  function Ay(e, t, l, a, n, u, i) {
    var c = t.lanes | t.childLanes;
    if (
      ((Us = c),
      (c |= gc),
      Im(e, l, c, a, n, u),
      (Fa = null),
      (l & 335544064) === l
        ? ((Ia = ey(e)), (a = 10262))
        : ((Ia = null), (a = 10256)),
      (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          My(ru, function () {
            return (Gs(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (si = !1),
      (a = (t.flags & 13878) !== 0),
      (t.subtreeFlags & 13878) !== 0 || a)
    ) {
      ((a = q.T), (q.T = null), (n = J.p), (J.p = 2), (u = pe), (pe |= 4));
      try {
        py(e, t, l);
      } finally {
        ((pe = u), (J.p = n), (q.T = a));
      }
    }
    ((Me = 1),
      si
        ? (Wa = Iy(i, e.containerInfo, Ia, Bs, ws, zy, Ys, Gs, _y))
        : (Bs(), ws(), Ys()));
  }
  function _y(e) {
    if (Me !== 0) {
      var t = Zt.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function zy() {
    Me === 3 && ((Me = 0), qd(ga, Zt), (Me = 4));
  }
  function Bs() {
    if (Me === 1) {
      Me = 0;
      var e = Zt,
        t = ga,
        l = al,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = q.T), (q.T = null));
        var n = J.p;
        J.p = 2;
        var u = pe;
        pe |= 4;
        try {
          ((Zn = ri = !1), Rd(t, e, l), (l = Is));
          var i = Do(e.containerInfo),
            c = l.focusedElem,
            f = l.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            Co(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && dc(c)) {
              var y = f.start,
                x = f.end;
              if ((x === void 0 && (x = y), "selectionStart" in c))
                ((c.selectionStart = y),
                  (c.selectionEnd = Math.min(x, c.value.length)));
              else {
                var T = c.ownerDocument || document,
                  m = (T && T.defaultView) || window;
                if (m.getSelection) {
                  var g = m.getSelection(),
                    O = c.textContent.length,
                    U = Math.min(f.start, O),
                    I = f.end === void 0 ? U : Math.min(f.end, O);
                  !g.extend && U > I && ((i = I), (I = U), (U = i));
                  var h = Oo(c, U),
                    o = Oo(c, I);
                  if (
                    h &&
                    o &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== h.node ||
                      g.anchorOffset !== h.offset ||
                      g.focusNode !== o.node ||
                      g.focusOffset !== o.offset)
                  ) {
                    var v = T.createRange();
                    (v.setStart(h.node, h.offset),
                      g.removeAllRanges(),
                      U > I
                        ? (g.addRange(v), g.extend(o.node, o.offset))
                        : (v.setEnd(o.node, o.offset), g.addRange(v)));
                  }
                }
              }
            }
            for (T = [], g = c; (g = g.parentNode); )
              g.nodeType === 1 &&
                T.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < T.length;
              c++
            ) {
              var S = T[c];
              ((S.element.scrollLeft = S.left), (S.element.scrollTop = S.top));
            }
          }
          ((on = !!Fs), (Is = Fs = null));
        } finally {
          ((pe = u), (J.p = n), (q.T = a));
        }
      }
      ((e.current = t), (Me = 2));
    }
  }
  function ws() {
    if (Me === 2) {
      Me = 0;
      var e = Zt,
        t = ga,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = q.T), (q.T = null));
        var a = J.p;
        J.p = 2;
        var n = pe;
        pe |= 4;
        try {
          zd(e, t.alternate, t);
        } finally {
          ((pe = n), (J.p = a), (q.T = l));
        }
      }
      Me = 3;
    }
  }
  function Ys() {
    if (Me === 4 || Me === 3) {
      Me = 0;
      var e = Wa;
      ((Wa = null), Lm());
      var t = Zt,
        l = ga,
        a = al,
        n = Ld,
        u = (a & 335544064) === a ? 10262 : 10256;
      if (
        ((l.subtreeFlags & u) !== 0 || (l.flags & u) !== 0
          ? (Me = 5)
          : ((Me = 0), (ga = Zt = null), t0(t, t.pendingLanes)),
        (u = t.pendingLanes),
        u === 0 && (Xl = null),
        ki(a),
        (l = l.stateNode),
        xt && typeof xt.onCommitFiberRoot == "function")
      )
        try {
          xt.onCommitFiberRoot(mn, l, void 0, (l.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((l = q.T), (u = J.p), (J.p = 2), (q.T = null));
        try {
          for (var i = t.onRecoverableError, c = 0; c < n.length; c++) {
            var f = n[c];
            i(f.value, { componentStack: f.stack });
          }
        } finally {
          ((q.T = l), (J.p = u));
        }
      }
      if (
        ((n = Fa),
        (i = Ia),
        (Ia = null),
        n !== null && ((Fa = null), i === null && (i = []), e !== null))
      )
        for (f = 0; f < n.length; f++)
          ((l = (0, n[f])(i)), l !== void 0 && e.finished.finally(l));
      ((al & 3) !== 0 && Ni(),
        nl(t),
        (u = t.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? t === bi
            ? kn++
            : ((kn = 0), (bi = t))
          : ((kn = 0), (bi = null)),
        $n(0));
    }
  }
  function t0(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), On(t)));
  }
  function Ni() {
    return (
      Wa !== null && (Wa.skipTransition(), (Wa = null)),
      Bs(),
      ws(),
      Ys(),
      Gs()
    );
  }
  function Gs() {
    if (Me !== 5) return !1;
    var e = Zt,
      t = Us;
    Us = 0;
    var l = ki(al),
      a = q.T,
      n = J.p;
    try {
      ((J.p = 32 > l ? 32 : l), (q.T = null), (l = Rs), (Rs = null));
      var u = Zt,
        i = al;
      if (((Me = 0), (ga = Zt = null), (al = 0), (pe & 6) !== 0))
        throw Error(d(331));
      var c = pe;
      if (
        ((pe |= 4),
        Gd(u.current),
        Bd(u, u.current, i, l),
        (pe = c),
        $n(0, !1),
        xt && typeof xt.onPostCommitFiberRoot == "function")
      )
        try {
          xt.onPostCommitFiberRoot(mn, u);
        } catch {}
      return !0;
    } finally {
      ((J.p = n), (q.T = a), t0(e, t));
    }
  }
  function l0(e, t, l) {
    ((t = Ut(l, t)),
      (t = as(e.stateNode, t, 2)),
      (e = Ul(e, t, 2)),
      e !== null && (yn(e, 2), nl(e)));
  }
  function Ne(e, t, l) {
    if (e.tag === 3) l0(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          l0(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Xl === null || !Xl.has(a)))
          ) {
            ((e = Ut(l, e)),
              (l = Ir(2)),
              (a = Ul(t, l, 2)),
              a !== null && (Pr(l, a, t, e), yn(a, 2), nl(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Xs(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Sy();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((Ds = !0), n.add(l), (e = Oy.bind(null, e, t, l)), t.then(e, e));
  }
  function Oy(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Ae === e &&
        (se & l) === l &&
        ((He === 4 ||
          (He === 3 && (se & 62914560) === se && 300 > bt() - vi)) &&
        (pe & 2) === 0
          ? en(e, 0)
          : (yi |= l),
        $a === se && ($a = 0)),
      nl(e));
  }
  function a0(e, t) {
    (t === 0 && (t = Xf()), (e = ta(e, t)), e !== null && (yn(e, t), nl(e)));
  }
  function Cy(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), a0(e, l));
  }
  function Dy(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (a !== null && a.delete(t), a0(e, l));
  }
  function My(e, t) {
    return Zi(e, t);
  }
  var ln = null,
    an = null,
    Qs = !1,
    Ei = !1,
    Ls = !1,
    Ll = 0;
  function nl(e) {
    (e !== an &&
      e.next === null &&
      (an === null ? (ln = an = e) : (an = an.next = e)),
      (Ei = !0),
      Qs || ((Qs = !0), Ry()));
  }
  function $n(e, t) {
    if (!Ls && Ei) {
      Ls = !0;
      do
        for (var l = !1, a = ln; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              ((u = (1 << (31 - St(42 | e) + 1)) - 1),
                (u &= n & ~(i & ~c)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((l = !0), c0(a, u));
          } else
            ((u = se),
              (u = yu(
                a,
                a === Ae ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || hn(a, u) || ((l = !0), c0(a, u)));
          a = a.next;
        }
      while (l);
      Ls = !1;
    }
  }
  function Uy() {
    n0();
  }
  function n0() {
    Ei = Qs = !1;
    var e = 0;
    Ll !== 0 && Vy() && (e = Ll);
    for (var t = bt(), l = null, a = ln; a !== null; ) {
      var n = a.next,
        u = u0(a, t);
      (u === 0
        ? ((a.next = null),
          l === null ? (ln = n) : (l.next = n),
          n === null && (an = l))
        : ((l = a), (e !== 0 || (u & 3) !== 0) && (Ei = !0)),
        (a = n));
    }
    ((Me !== 0 && Me !== 5) || $n(e), Ll !== 0 && (Ll = 0));
  }
  function u0(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - St(u),
        c = 1 << i,
        f = n[i];
      (f === -1
        ? ((c & l) === 0 || (c & a) !== 0) && (n[i] = Fm(c, t))
        : f <= t && (e.expiredLanes |= c),
        (u &= ~c));
    }
    if (
      ((t = Ae),
      (l = se),
      (l = yu(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (Te === 2 || Te === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Vi(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || hn(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Vi(a), ki(l))) {
        case 2:
        case 8:
          l = wf;
          break;
        case 32:
          l = ru;
          break;
        case 268435456:
          l = Yf;
          break;
        default:
          l = ru;
      }
      return (
        (a = i0.bind(null, e)),
        (l = Zi(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Vi(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function i0(e, t) {
    if (Me !== 0 && Me !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Ni() && e.callbackNode !== l) return null;
    var a = se;
    return (
      (a = yu(
        e,
        e === Ae ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Vd(e, a, t),
          u0(e, bt()),
          e.callbackNode != null && e.callbackNode === l
            ? i0.bind(null, e)
            : null)
    );
  }
  function c0(e, t) {
    if (Ni()) return null;
    Vd(e, t, !0);
  }
  function Ry() {
    Jy(function () {
      (pe & 6) !== 0 ? Zi(Bf, Uy) : n0();
    });
  }
  function Zs() {
    if (Ll === 0) {
      var e = ca;
      (e === 0 && ((e = du), (du <<= 1), (du & 261888) === 0 && (du = 256)),
        (Ll = e));
    }
    return Ll;
  }
  function s0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : xu(e);
  }
  function Hy(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = s0((n[mt] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[mt] || null)
          ? s0(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((u = t), (i = null)));
      var c = new Eu("action", "action", null, a, n);
      e.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Ll !== 0) {
                  var f = new FormData(n, i);
                  Ic(
                    l,
                    { pending: !0, data: f, method: n.method, action: u },
                    null,
                    f,
                  );
                }
              } else
                typeof u == "function" &&
                  (c.preventDefault(),
                  (f = new FormData(n, i)),
                  Ic(
                    l,
                    { pending: !0, data: f, method: n.method, action: u },
                    u,
                    f,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Vs = 0; Vs < vc.length; Vs++) {
    var Ks = vc[Vs],
      qy = Ks.toLowerCase(),
      By = Ks[0].toUpperCase() + Ks.slice(1);
    Gt(qy, "on" + By);
  }
  (Gt(Ro, "onAnimationEnd"),
    Gt(Ho, "onAnimationIteration"),
    Gt(qo, "onAnimationStart"),
    Gt("dblclick", "onDoubleClick"),
    Gt("focusin", "onFocus"),
    Gt("focusout", "onBlur"),
    Gt(Kh, "onTransitionRun"),
    Gt(Jh, "onTransitionStart"),
    Gt(kh, "onTransitionCancel"),
    Gt(Bo, "onTransitionEnd"),
    ja("onMouseEnter", ["mouseout", "mouseover"]),
    ja("onMouseLeave", ["mouseout", "mouseover"]),
    ja("onPointerEnter", ["pointerout", "pointerover"]),
    ja("onPointerLeave", ["pointerout", "pointerover"]),
    Il(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Il(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Il("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Il(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Il(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Il(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Wn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    wy = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Wn),
    );
  function f0(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              f = c.instance,
              y = c.currentTarget;
            if (((c = c.listener), f !== u && n.isPropagationStopped()))
              break e;
            ((u = c), (n.currentTarget = y));
            try {
              u(n);
            } catch (x) {
              _u(x);
            }
            ((n.currentTarget = null), (u = f));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (f = c.instance),
              (y = c.currentTarget),
              (c = c.listener),
              f !== u && n.isPropagationStopped())
            )
              break e;
            ((u = c), (n.currentTarget = y));
            try {
              u(n);
            } catch (x) {
              _u(x);
            }
            ((n.currentTarget = null), (u = f));
          }
      }
    }
  }
  function ue(e, t) {
    var l = t[Jf];
    l === void 0 && (l = t[Jf] = new Set());
    var a = e + "__bubble";
    l.has(a) || (o0(t, e, 2, !1), l.add(a));
  }
  function Js(e, t, l) {
    var a = 0;
    (t && (a |= 4), o0(l, e, a, t));
  }
  var ji = "_reactListening" + Math.random().toString(36).slice(2);
  function ks(e) {
    if (!e[ji]) {
      ((e[ji] = !0),
        Wf.forEach(function (l) {
          l !== "selectionchange" && (wy.has(l) || Js(l, !1, e), Js(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ji] || ((t[ji] = !0), Js("selectionchange", !1, t));
    }
  }
  function o0(e, t, l, a) {
    switch (P0(t)) {
      case 2:
        var n = C1;
        break;
      case 8:
        n = D1;
        break;
      default:
        n = yf;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !lc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function $s(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Fl(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = u = i;
              continue e;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    fo(function () {
      var y = u,
        x = ec(l),
        T = [];
      e: {
        var m = wo.get(e);
        if (m !== void 0) {
          var g = Eu,
            O = e;
          switch (e) {
            case "keypress":
              if (Tu(l) === 0) break e;
            case "keydown":
            case "keyup":
              g = Th;
              break;
            case "focusin":
              ((O = "focus"), (g = ic));
              break;
            case "focusout":
              ((O = "blur"), (g = ic));
              break;
            case "beforeblur":
            case "afterblur":
              g = ic;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = mo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = oh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = _h;
              break;
            case Ro:
            case Ho:
            case qo:
              g = mh;
              break;
            case Bo:
              g = Oh;
              break;
            case "scroll":
            case "scrollend":
              g = sh;
              break;
            case "wheel":
              g = Dh;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = yh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = yo;
              break;
            case "submit":
              g = jh;
              break;
            case "toggle":
            case "beforetoggle":
              g = Uh;
          }
          var U = (t & 4) !== 0,
            I = !U && (e === "scroll" || e === "scrollend"),
            h = U ? (m !== null ? m + "Capture" : null) : m;
          U = [];
          for (var o = y, v; o !== null; ) {
            var S = o;
            if (
              ((v = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                v === null ||
                h === null ||
                ((S = pn(o, h)), S != null && U.push(Fn(o, S, v))),
              I)
            )
              break;
            o = o.return;
          }
          0 < U.length &&
            ((m = new g(m, O, null, l, x)), T.push({ event: m, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((g = e === "mouseover" || e === "pointerover"),
            (m = e === "mouseout" || e === "pointerout"),
            g &&
              l !== Pi &&
              (O = l.relatedTarget || l.fromElement) &&
              (Fl(O) || O[Ta]))
          )
            break e;
          (m || g) &&
            ((O =
              x.window === x
                ? x
                : (g = x.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            m
              ? ((g = l.relatedTarget || l.toElement),
                (m = y),
                (g = g ? Fl(g) : null),
                g !== null &&
                  ((I = Y(g)),
                  (U = g.tag),
                  g !== I || (U !== 5 && U !== 27 && U !== 6)) &&
                  (g = null))
              : ((m = null), (g = y)),
            m !== g &&
              ((U = mo),
              (S = "onMouseLeave"),
              (h = "onMouseEnter"),
              (o = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((U = yo),
                (S = "onPointerLeave"),
                (h = "onPointerEnter"),
                (o = "pointer")),
              (I = m == null ? O : gn(m)),
              (v = g == null ? O : gn(g)),
              (O = new U(S, o + "leave", m, l, x)),
              (O.target = I),
              (O.relatedTarget = v),
              (S = null),
              Fl(x) === y &&
                ((U = new U(h, o + "enter", g, l, x)),
                (U.target = v),
                (U.relatedTarget = I),
                (S = U)),
              (I = S),
              (U = m && g ? qe(m, g, Yy) : null),
              m !== null && r0(T, O, m, U, !1),
              g !== null && I !== null && r0(T, I, g, U, !0)));
        }
        e: {
          if (
            ((m = y ? gn(y) : window),
            (g = m.nodeName && m.nodeName.toLowerCase()),
            g === "select" || (g === "input" && m.type === "file"))
          )
            var D = No;
          else if (So(m))
            if (Eo) D = Lh;
            else {
              D = Xh;
              var fe = Gh;
            }
          else
            ((g = m.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? y && Ii(y.elementType) && (D = No)
                : (D = Qh));
          if (D && (D = D(e, y))) {
            To(T, D, l, x);
            break e;
          }
          fe && fe(e, m, y);
        }
        switch (((fe = y ? gn(y) : window), e)) {
          case "focusin":
            (So(fe) || fe.contentEditable === "true") &&
              ((Da = fe), (mc = y), (An = null));
            break;
          case "focusout":
            An = mc = Da = null;
            break;
          case "mousedown":
            hc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((hc = !1), Mo(T, l, x));
            break;
          case "selectionchange":
            if (Vh) break;
          case "keydown":
          case "keyup":
            Mo(T, l, x);
        }
        var w;
        if (sc)
          e: {
            switch (e) {
              case "compositionstart":
                var Z = "onCompositionStart";
                break e;
              case "compositionend":
                Z = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Z = "onCompositionUpdate";
                break e;
            }
            Z = void 0;
          }
        else
          Ca
            ? bo(e, l) && (Z = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (Z = "onCompositionStart");
        (Z &&
          (vo &&
            l.locale !== "ko" &&
            (Ca || Z !== "onCompositionStart"
              ? Z === "onCompositionEnd" && Ca && (w = oo())
              : ((El = x),
                (ac = "value" in El ? El.value : El.textContent),
                (Ca = !0))),
          (fe = Ai(y, Z)),
          0 < fe.length &&
            ((Z = new ho(Z, e, null, l, x)),
            T.push({ event: Z, listeners: fe }),
            w ? (Z.data = w) : ((w = xo(l)), w !== null && (Z.data = w)))),
          (w = Hh ? qh(e, l) : Bh(e, l)) &&
            ((Z = Ai(y, "onBeforeInput")),
            0 < Z.length &&
              ((fe = new ho("onBeforeInput", "beforeinput", null, l, x)),
              T.push({ event: fe, listeners: Z }),
              (fe.data = w))),
          Hy(T, e, y, l, x));
      }
      f0(T, t);
    });
  }
  function Fn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Ai(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = pn(e, l)),
          n != null && a.unshift(Fn(e, n, u)),
          (n = pn(e, t)),
          n != null && a.push(Fn(e, n, u))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Yy(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function r0(e, t, l, a, n) {
    for (var u = t._reactName, i = []; l !== null && l !== a; ) {
      var c = l,
        f = c.alternate,
        y = c.stateNode;
      if (((c = c.tag), f !== null && f === a)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        y === null ||
        ((f = y),
        n
          ? ((y = pn(l, u)), y != null && i.unshift(Fn(l, y, f)))
          : n || ((y = pn(l, u)), y != null && i.push(Fn(l, y, f)))),
        (l = l.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Gy = /\r\n?/g,
    Xy = /\u0000|\uFFFD/g;
  function d0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Gy,
        `
`,
      )
      .replace(Xy, "");
  }
  function m0(e, t) {
    return ((t = d0(t)), d0(e) === t);
  }
  function Ee(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        if (typeof a == "string")
          t === "body" || (t === "textarea" && a === "") || _a(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && _a(e, "" + a);
        else return;
        break;
      case "className":
        bu(e, "class", a);
        break;
      case "tabIndex":
        bu(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        bu(e, l, a);
        break;
      case "style":
        co(e, a, u);
        return;
      case "data":
        if (t !== "object") {
          bu(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = xu(a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (l === "formAction"
              ? (t !== "input" && Ee(e, t, "name", n.name, n, null),
                Ee(e, t, "formEncType", n.formEncType, n, null),
                Ee(e, t, "formMethod", n.formMethod, n, null),
                Ee(e, t, "formTarget", n.formTarget, n, null))
              : (Ee(e, t, "encType", n.encType, n, null),
                Ee(e, t, "method", n.method, n, null),
                Ee(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = xu(a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = kt);
        return;
      case "onScroll":
        a != null && ue("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ue("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(d(60));
            (u != null ? u.__html : void 0) !== l && (e.innerHTML = l);
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = xu(a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (ue("beforetoggle", e), ue("toggle", e), pu(e, "popover", a));
        break;
      case "xlinkActuate":
        cl(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        cl(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        cl(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        cl(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        cl(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        cl(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        cl(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        cl(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        cl(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        pu(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")
        )
          ((l = ih.get(l) || l), pu(e, l, a));
        else return;
    }
    ve = !0;
  }
  function Ws(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        co(e, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(d(60));
            (u != null ? u.__html : void 0) !== l && (e.innerHTML = l);
          }
        }
        break;
      case "children":
        if (typeof a == "string") _a(e, a);
        else if (typeof a == "number" || typeof a == "bigint") _a(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && ue("scroll", e);
        return;
      case "onScrollEnd":
        a != null && ue("scrollend", e);
        return;
      case "onClick":
        a != null && (e.onclick = kt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Ff.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (u = l.slice(2, n ? l.length - 7 : void 0)),
              (t = e[mt] || null),
              (t = t != null ? t[l] : null),
              typeof t == "function" && e.removeEventListener(u, t, n),
              typeof a == "function")
            ) {
              (typeof t != "function" &&
                t !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(u, a, n));
              break e;
            }
            ((ve = !0),
              l in e
                ? (e[l] = a)
                : a === !0
                  ? e.setAttribute(l, "")
                  : pu(e, l, a));
          }
        return;
    }
    ve = !0;
  }
  function nt(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (ue("error", e), ue("load", e));
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(d(137, t));
                default:
                  Ee(e, t, u, i, l, null);
              }
          }
        (n && Ee(e, t, "srcSet", l.srcSet, l, null),
          a && Ee(e, t, "src", l.src, l, null));
        return;
      case "input":
        ue("invalid", e);
        var c = (u = i = n = null),
          f = null,
          y = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var x = l[a];
            if (x != null)
              switch (a) {
                case "name":
                  n = x;
                  break;
                case "type":
                  i = x;
                  break;
                case "checked":
                  f = x;
                  break;
                case "defaultChecked":
                  y = x;
                  break;
                case "value":
                  u = x;
                  break;
                case "defaultValue":
                  c = x;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null) throw Error(d(137, t));
                  break;
                default:
                  Ee(e, t, a, x, l, null);
              }
          }
        ao(e, u, c, f, y, i, n, !1);
        return;
      case "select":
        (ue("invalid", e), (a = i = u = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((c = l[n]), c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                Ee(e, t, n, c, l, null);
            }
        ((t = u),
          (l = i),
          (e.multiple = !!a),
          t != null ? Aa(e, !!a, t, !1) : l != null && Aa(e, !!a, l, !0));
        return;
      case "textarea":
        (ue("invalid", e), (u = n = a = null));
        for (i in l)
          if (l.hasOwnProperty(i) && ((c = l[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(d(91));
                break;
              default:
                Ee(e, t, i, c, l, null);
            }
        uo(e, a, n, u);
        return;
      case "option":
        for (f in l)
          if (l.hasOwnProperty(f) && ((a = l[f]), a != null))
            switch (f) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ee(e, t, f, a, l, null);
            }
        return;
      case "dialog":
        (ue("beforetoggle", e),
          ue("toggle", e),
          ue("cancel", e),
          ue("close", e));
        break;
      case "iframe":
      case "object":
        ue("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Wn.length; a++) ue(Wn[a], e);
        break;
      case "image":
        (ue("error", e), ue("load", e));
        break;
      case "details":
        ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (ue("error", e), ue("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, t));
              default:
                Ee(e, t, y, a, l, null);
            }
        return;
      default:
        if (Ii(t)) {
          for (x in l)
            l.hasOwnProperty(x) &&
              ((a = l[x]), a !== void 0 && Ws(e, t, x, a, l, void 0));
          return;
        }
    }
    for (c in l)
      l.hasOwnProperty(c) && ((a = l[c]), a != null && Ee(e, t, c, a, l, null));
  }
  var Qy = {};
  function Ly(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          c = null,
          f = null,
          y = null,
          x = null;
        for (g in l) {
          var T = l[g];
          if (l.hasOwnProperty(g) && T != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = T;
              default:
                a.hasOwnProperty(g) || Ee(e, t, g, null, a, T);
            }
        }
        for (var m in a) {
          var g = a[m];
          if (((T = l[m]), a.hasOwnProperty(m) && (g != null || T != null)))
            switch (m) {
              case "type":
                (g !== T && (ve = !0), (u = g));
                break;
              case "name":
                (g !== T && (ve = !0), (n = g));
                break;
              case "checked":
                (g !== T && (ve = !0), (y = g));
                break;
              case "defaultChecked":
                (g !== T && (ve = !0), (x = g));
                break;
              case "value":
                (g !== T && (ve = !0), (i = g));
                break;
              case "defaultValue":
                (g !== T && (ve = !0), (c = g));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(d(137, t));
                break;
              default:
                g !== T && Ee(e, t, m, g, a, T);
            }
        }
        Wi(e, i, c, f, y, x, u, n);
        return;
      case "select":
        g = i = c = m = null;
        for (u in l)
          if (((f = l[u]), l.hasOwnProperty(u) && f != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                a.hasOwnProperty(u) || Ee(e, t, u, null, a, f);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (f = l[n]),
            a.hasOwnProperty(n) && (u != null || f != null))
          )
            switch (n) {
              case "value":
                (u !== f && (ve = !0), (m = u));
                break;
              case "defaultValue":
                (u !== f && (ve = !0), (c = u));
                break;
              case "multiple":
                (u !== f && (ve = !0), (i = u));
              default:
                u !== f && Ee(e, t, n, u, a, f);
            }
        ((t = c),
          (l = i),
          (a = g),
          m != null
            ? Aa(e, !!l, m, !1)
            : !!a != !!l &&
              (t != null ? Aa(e, !!l, t, !0) : Aa(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        g = m = null;
        for (c in l)
          if (
            ((n = l[c]),
            l.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ee(e, t, c, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = l[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                (n !== u && (ve = !0), (m = n));
                break;
              case "defaultValue":
                (n !== u && (ve = !0), (g = n));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(d(91));
                break;
              default:
                n !== u && Ee(e, t, i, n, a, u);
            }
        no(e, m, g);
        return;
      case "option":
        for (var O in l)
          if (
            ((m = l[O]),
            l.hasOwnProperty(O) && m != null && !a.hasOwnProperty(O))
          )
            switch (O) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ee(e, t, O, null, a, m);
            }
        for (f in a)
          if (
            ((m = a[f]),
            (g = l[f]),
            a.hasOwnProperty(f) && m !== g && (m != null || g != null))
          )
            switch (f) {
              case "selected":
                (m !== g && (ve = !0),
                  (e.selected =
                    m && typeof m != "function" && typeof m != "symbol"));
                break;
              default:
                Ee(e, t, f, m, a, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var U in l)
          ((m = l[U]),
            l.hasOwnProperty(U) &&
              m != null &&
              !a.hasOwnProperty(U) &&
              Ee(e, t, U, null, a, m));
        for (y in a)
          if (
            ((m = a[y]),
            (g = l[y]),
            a.hasOwnProperty(y) && m !== g && (m != null || g != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(d(137, t));
                break;
              default:
                Ee(e, t, y, m, a, g);
            }
        return;
      default:
        if (Ii(t)) {
          for (var I in l)
            ((m = l[I]),
              l.hasOwnProperty(I) &&
                m !== void 0 &&
                !a.hasOwnProperty(I) &&
                Ws(e, t, I, void 0, a, m));
          for (x in a)
            ((m = a[x]),
              (g = l[x]),
              !a.hasOwnProperty(x) ||
                m === g ||
                (m === void 0 && g === void 0) ||
                Ws(e, t, x, m, a, g));
          return;
        }
    }
    for (var h in l)
      ((m = l[h]),
        l.hasOwnProperty(h) &&
          m != null &&
          !a.hasOwnProperty(h) &&
          Ee(e, t, h, null, a, m));
    for (T in a)
      ((m = a[T]),
        (g = l[T]),
        !a.hasOwnProperty(T) ||
          m === g ||
          (m == null && g == null) ||
          Ee(e, t, T, m, a, g));
  }
  function h0(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Zy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          u = n.transferSize,
          i = n.initiatorType,
          c = n.duration;
        if (u && c && h0(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < l.length; a++) {
            var f = l[a],
              y = f.startTime;
            if (y > c) break;
            var x = f.transferSize,
              T = f.initiatorType;
            x &&
              h0(T) &&
              ((f = f.responseEnd), (i += x * (f < c ? 1 : (c - y) / (f - y))));
          }
          if ((--a, (t += (8 * (u + i)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Fs = null,
    Is = null;
  function In(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function y0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function v0(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function g0(e, t, l, a) {
    return (
      (l = In(l).createElement(e)),
      (l[Pe] = a),
      (l[mt] = t),
      nt(l, e, t),
      Ze(l),
      l
    );
  }
  function Ps(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ef = null;
  function Vy() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ef
        ? !1
        : ((ef = e), !0)
      : ((ef = null), !1);
  }
  var tf = typeof setTimeout == "function" ? setTimeout : void 0,
    Ky = typeof clearTimeout == "function" ? clearTimeout : void 0,
    p0 = typeof Promise == "function" ? Promise : void 0,
    b0 =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : tf,
    Jy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof p0 < "u"
          ? function (e) {
              return p0.resolve(null).then(e).catch(ky);
            }
          : tf;
  function ky(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Zl(e) {
    return e === "head";
  }
  function x0(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            (e.removeChild(n), rn(t));
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") of(e.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = e.ownerDocument.head), of(l));
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling,
              c = u.nodeName;
            (u[vn] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(u),
              (u = i));
          }
        } else l === "body" && of(e.ownerDocument.body);
      l = n;
    } while (l);
    rn(t);
  }
  function S0(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (e === 0) break;
          e--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || e++;
      l = a;
    } while (l);
  }
  function T0(e, t, l) {
    if (
      ((t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t),
      (e.style.viewTransitionName = t),
      l != null && (e.style.viewTransitionClass = l),
      (l = getComputedStyle(e)),
      l.display === "inline")
    ) {
      if (((t = e.getClientRects()), t.length === 1)) var a = 1;
      else
        for (var n = (a = 0); n < t.length; n++) {
          var u = t[n];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 &&
        ((e = e.style),
        (e.display = t.length === 1 ? "inline-block" : "block"),
        (e.marginTop = "-" + l.paddingTop),
        (e.marginBottom = "-" + l.paddingBottom));
    }
  }
  function N0(e, t) {
    ((e = e.style), (t = t.style));
    var l =
      t != null
        ? t.hasOwnProperty("viewTransitionName")
          ? t.viewTransitionName
          : t.hasOwnProperty("view-transition-name")
            ? t["view-transition-name"]
            : null
        : null;
    ((e.viewTransitionName =
      l == null || typeof l == "boolean" ? "" : ("" + l).trim()),
      (l =
        t != null
          ? t.hasOwnProperty("viewTransitionClass")
            ? t.viewTransitionClass
            : t.hasOwnProperty("view-transition-class")
              ? t["view-transition-class"]
              : null
          : null),
      (e.viewTransitionClass =
        l == null || typeof l == "boolean" ? "" : ("" + l).trim()),
      e.display === "inline-block" &&
        (t == null
          ? (e.display = e.margin = "")
          : ((l = t.display),
            (e.display = l == null || typeof l == "boolean" ? "" : l),
            (l = t.margin),
            l != null
              ? (e.margin = l)
              : ((l = t.hasOwnProperty("marginTop")
                  ? t.marginTop
                  : t["margin-top"]),
                (e.marginTop = l == null || typeof l == "boolean" ? "" : l),
                (t = t.hasOwnProperty("marginBottom")
                  ? t.marginBottom
                  : t["margin-bottom"]),
                (e.marginBottom =
                  t == null || typeof t == "boolean" ? "" : t)))));
  }
  function $y(e, t, l) {
    return (
      (l = l.ownerDocument.defaultView),
      {
        rect: e,
        abs: t.position === "absolute" || t.position === "fixed",
        clip:
          t.clipPath !== "none" ||
          t.overflow !== "visible" ||
          t.filter !== "none" ||
          t.mask !== "none" ||
          t.mask !== "none" ||
          t.borderRadius !== "0px",
        view:
          0 <= e.bottom &&
          0 <= e.right &&
          e.top <= l.innerHeight &&
          e.left <= l.innerWidth,
      }
    );
  }
  function lf(e) {
    var t = e.getBoundingClientRect(),
      l = getComputedStyle(e);
    return $y(t, l, e);
  }
  function Wy(e) {
    return e.documentElement.clientHeight;
  }
  function Fy(e) {
    (this.addEventListener("load", e), this.addEventListener("error", e));
  }
  function Iy(e, t, l, a, n, u, i, c, f) {
    var y = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var x = y.startViewTransition({
        update: function () {
          var m = y.defaultView,
            g = m.navigation && m.navigation.transition,
            O = y.fonts.status;
          a();
          var U = [];
          if (
            (O === "loaded" &&
              (Wy(y), y.fonts.status === "loading" && U.push(y.fonts.ready)),
            (O = U.length),
            e !== null)
          )
            for (var I = e.suspenseyImages, h = 0, o = 0; o < I.length; o++) {
              var v = I[o];
              if (!v.complete) {
                var S = v.getBoundingClientRect();
                if (
                  0 < S.bottom &&
                  0 < S.right &&
                  S.top < m.innerHeight &&
                  S.left < m.innerWidth
                ) {
                  if (((h += Z0(v)), h > Oi)) {
                    U.length = O;
                    break;
                  }
                  ((v = new Promise(Fy.bind(v))), U.push(v));
                }
              }
            }
          if (0 < U.length)
            return (
              (m = Promise.race([
                Promise.all(U),
                new Promise(function (D) {
                  return setTimeout(D, 500);
                }),
              ]).then(n, n)),
              (g ? Promise.allSettled([g.finished, m]) : m).then(u, u)
            );
          if ((n(), g)) return g.finished.then(u, u);
          u();
        },
        types: l,
      });
      y.__reactViewTransition = x;
      var T = [];
      return (
        x.ready.then(
          function () {
            for (
              var m = y.documentElement.getAnimations({ subtree: !0 }), g = 0;
              g < m.length;
              g++
            ) {
              var O = m[g],
                U = O.effect,
                I = U.pseudoElement;
              if (I != null && I.startsWith("::view-transition")) {
                (T.push(O), (O = U.getKeyframes()));
                for (var h = (I = void 0), o = !0, v = 0; v < O.length; v++) {
                  var S = O[v],
                    D = S.width;
                  if (I === void 0) I = D;
                  else if (I !== D) {
                    o = !1;
                    break;
                  }
                  if (((D = S.height), h === void 0)) h = D;
                  else if (h !== D) {
                    o = !1;
                    break;
                  }
                  (delete S.width,
                    delete S.height,
                    S.transform === "none" && delete S.transform);
                }
                o &&
                  I !== void 0 &&
                  h !== void 0 &&
                  (U.setKeyframes(O),
                  (o = getComputedStyle(U.target, U.pseudoElement)),
                  o.width !== I || o.height !== h) &&
                  ((o = O[0]),
                  (o.width = I),
                  (o.height = h),
                  (o = O[O.length - 1]),
                  (o.width = I),
                  (o.height = h),
                  U.setKeyframes(O));
              }
            }
            i();
          },
          function (m) {
            y.__reactViewTransition === x && (y.__reactViewTransition = null);
            try {
              if (typeof m == "object" && m !== null)
                switch (m.name) {
                  case "InvalidStateError":
                    (m.message ===
                      "View transition was skipped because document visibility state is hidden." ||
                      m.message ===
                        "Skipping view transition because document visibility state has become hidden." ||
                      m.message ===
                        "Skipping view transition because viewport size changed." ||
                      m.message ===
                        "Transition was aborted because of invalid state") &&
                      (m = null);
                }
              m !== null && f(m);
            } finally {
              (a(), n(), i());
            }
          },
        ),
        x.finished.finally(function () {
          for (var m = 0; m < T.length; m++) T[m].cancel();
          (y.__reactViewTransition === x && (y.__reactViewTransition = null),
            c());
        }),
        x
      );
    } catch {
      return (a(), n(), i(), null);
    }
  }
  function pa(e, t) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + e + "(" + t + ")"));
  }
  ((pa.prototype.animate = function (e, t) {
    return (
      (t = typeof t == "number" ? { duration: t } : $({}, t)),
      (t.pseudoElement = this._selector),
      this._scope.animate(e, t)
    );
  }),
    (pa.prototype.getAnimations = function () {
      for (
        var e = this._scope,
          t = this._selector,
          l = e.getAnimations({ subtree: !0 }),
          a = [],
          n = 0;
        n < l.length;
        n++
      ) {
        var u = l[n].effect;
        u !== null && u.target === e && u.pseudoElement === t && a.push(l[n]);
      }
      return a;
    }),
    (pa.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function E0(e) {
    return {
      name: e,
      group: new pa("group", e),
      imagePair: new pa("image-pair", e),
      old: new pa("old", e),
      new: new pa("new", e),
    };
  }
  function Ot(e) {
    ((this._fragmentFiber = e),
      (this._observers = this._eventListeners = null));
  }
  Ot.prototype.addEventListener = function (e, t, l) {
    var a = null,
      n = null;
    if (
      !(
        l != null &&
        typeof l != "boolean" &&
        ((a = l.signal || null), a !== null && a.aborted)
      )
    ) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (A0(u, e, t, l) === -1) {
        var i = this,
          c = t;
        (l != null &&
          typeof l != "boolean" &&
          l.once === !0 &&
          (c = function (f) {
            (i.removeEventListener(e, t, l),
              typeof t == "function" ? t.call(this, f) : t.handleEvent(f));
          }),
          a !== null &&
            ((n = i.removeEventListener.bind(i, e, t, l)),
            a.addEventListener("abort", n, { once: !0 }),
            (n = a.removeEventListener.bind(a, "abort", n))),
          (a = nn(l)),
          u.push({
            type: e,
            listener: t,
            optionsOrUseCapture: l,
            attachedListener: c,
            cleanup: n,
          }),
          p(this._fragmentFiber.child, !1, Py, e, c, a));
      }
      this._eventListeners = u;
    }
  };
  function Py(e, t, l, a) {
    return (R(e).addEventListener(t, l, a), !1);
  }
  Ot.prototype.removeEventListener = function (e, t, l) {
    var a = this._eventListeners;
    if (a !== null && ((t = A0(a, e, t, l)), t !== -1)) {
      var n = a[t];
      l = n.attachedListener;
      var u = n.cleanup;
      ((n = nn(n.optionsOrUseCapture)),
        p(this._fragmentFiber.child, !1, e1, e, l, n),
        a.splice(t, 1),
        u !== null && u());
    }
  };
  function e1(e, t, l, a) {
    return (R(e).removeEventListener(t, l, a), !1);
  }
  function nn(e) {
    return e != null &&
      typeof e != "boolean" &&
      (e.once === !0 || e.signal instanceof AbortSignal)
      ? { capture: e.capture, passive: e.passive }
      : e;
  }
  function j0(e) {
    return e == null
      ? "c=0"
      : typeof e == "boolean"
        ? "c=" + (e ? "1" : "0")
        : "c=" + (e.capture ? "1" : "0");
  }
  function A0(e, t, l, a) {
    if (e.length === 0) return -1;
    a = j0(a);
    for (var n = 0; n < e.length; n++) {
      var u = e[n];
      if (u.type === t && u.listener === l && j0(u.optionsOrUseCapture) === a)
        return n;
    }
    return -1;
  }
  ((Ot.prototype.dispatchEvent = function (e) {
    var t = j(this._fragmentFiber);
    if (t === null) return !0;
    t = R(t);
    var l = this._eventListeners;
    if ((l !== null && 0 < l.length) || !e.bubbles) {
      var a =
        t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (l)
        for (var n = 0; n < l.length; n++) {
          var u = l[n];
          a.addEventListener(
            u.type,
            u.attachedListener,
            nn(u.optionsOrUseCapture),
          );
        }
      if ((t.appendChild(a), (e = a.dispatchEvent(e)), l))
        for (n = 0; n < l.length; n++)
          ((u = l[n]),
            a.removeEventListener(
              u.type,
              u.attachedListener,
              nn(u.optionsOrUseCapture),
            ));
      return (t.removeChild(a), e);
    }
    return t.dispatchEvent(e);
  }),
    (Ot.prototype.focus = function (e) {
      p(this._fragmentFiber.child, !0, _0, e, void 0, void 0);
    }));
  function _0(e, t) {
    return e.tag === 6 ? !1 : ((e = R(e)), d1(e, t));
  }
  Ot.prototype.focusLast = function (e) {
    var t = [];
    p(this._fragmentFiber.child, !0, af, t, void 0, void 0);
    for (var l = t.length - 1; 0 <= l && !_0(t[l], e); l--);
  };
  function af(e, t) {
    return (t.push(e), !1);
  }
  Ot.prototype.blur = function () {
    var e = j(this._fragmentFiber);
    e !== null &&
      ((e = R(e)),
      (e = In(e).activeElement),
      e !== null && p(this._fragmentFiber.child, !1, t1, e, void 0, void 0));
  };
  function t1(e, t) {
    return e.tag === 6
      ? !1
      : ((e = R(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Ot.prototype.observeUsing = function (e) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(e),
      p(this._fragmentFiber.child, !1, l1, e, void 0, void 0));
  };
  function l1(e, t) {
    return (e.tag === 6 || ((e = R(e)), t.observe(e)), !1);
  }
  Ot.prototype.unobserveUsing = function (e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      (t.delete(e), p(this._fragmentFiber.child, !1, a1, e, void 0, void 0));
      for (var l = (t = 0); l < Vt.length; l++) {
        var a = Vt[l];
        a.fragmentInstance === this && a.observer === e
          ? e.unobserve(a.instance)
          : (Vt[t++] = a);
      }
      Vt.length = t;
    }
  };
  function a1(e, t) {
    return (e.tag === 6 || ((e = R(e)), t.unobserve(e)), !1);
  }
  var Vt = [],
    nf = !1;
  function n1(e, t, l) {
    (Vt.push({ fragmentInstance: e, observer: t, instance: l }),
      nf ||
        ((nf = !0),
        m1(function () {
          nf = !1;
          var a = Vt;
          Vt = [];
          for (var n = 0; n < a.length; n++) {
            var u = a[n];
            u.observer.unobserve(u.instance);
          }
        })));
  }
  Ot.prototype.getClientRects = function () {
    var e = [];
    return (p(this._fragmentFiber.child, !1, u1, e, void 0, void 0), e);
  };
  function u1(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var l = e.ownerDocument.createRange();
      (l.selectNodeContents(e), t.push.apply(t, l.getClientRects()));
    } else ((e = R(e)), t.push.apply(t, e.getClientRects()));
    return !1;
  }
  ((Ot.prototype.getRootNode = function (e) {
    var t = j(this._fragmentFiber);
    return t === null ? this : R(t).getRootNode(e);
  }),
    (Ot.prototype.compareDocumentPosition = function (e) {
      var t = j(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var l = [];
      p(this._fragmentFiber.child, !1, af, l, void 0, void 0);
      var a = R(t);
      if (l.length === 0) {
        if (((l = a), de(this._fragmentFiber))) {
          e: {
            for (t = this._fragmentFiber.return; t !== null; ) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break e;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (l = t);
        }
        t = this._fragmentFiber;
        var n = (a = l.compareDocumentPosition(e));
        return (
          l === e
            ? (n = Node.DOCUMENT_POSITION_CONTAINS)
            : a & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((l = te(t)[1]),
              l === null
                ? (n = Node.DOCUMENT_POSITION_PRECEDING)
                : ((e = R(l).compareDocumentPosition(e)),
                  (n =
                    e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((t = R(l[0])), (n = R(l[l.length - 1])));
      var u = de(this._fragmentFiber) ? t.parentElement : a;
      if (u == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((a = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (u =
          u.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var i = t.compareDocumentPosition(e),
        c = n.compareDocumentPosition(e),
        f =
          i & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          c & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (c =
          a &&
          u &&
          i & Node.DOCUMENT_POSITION_FOLLOWING &&
          c & Node.DOCUMENT_POSITION_PRECEDING),
        (t =
          (a && t === e) || (u && n === e) || f || c
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!a && t === e) || (!u && n === e)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : i),
        t & Node.DOCUMENT_POSITION_DISCONNECTED ||
        t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        i1(t, this._fragmentFiber, l[0], l[l.length - 1], e)
          ? t
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function i1(e, t, l, a, n) {
    var u = Fl(n);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((l = !!u))
        e: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === t || u.alternate === t)) {
              l = !0;
              break e;
            }
            u = u.return;
          }
          l = !1;
        }
      return l;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return (
          (u = n.ownerDocument),
          n === u || n === u.documentElement || n === u.body
        );
      e: {
        for (u = t, t = j(t); u !== null; ) {
          if (
            !(
              (u.tag !== 5 && u.tag !== 3 && u.tag !== 27) ||
              (u !== t && u.alternate !== t)
            )
          ) {
            u = !0;
            break e;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING
      ? ((t = !!u) &&
          !(t = u === l) &&
          ((t = qe(l, u, $e)),
          t === null
            ? (t = !1)
            : (p(t, !0, Ct, u, l), (u = xe), (xe = null), (t = u !== null))),
        t)
      : e & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((t = !!u) &&
            !(t = u === a) &&
            ((t = qe(a, u, $e)),
            t === null
              ? (t = !1)
              : (p(t, !0, ke, u, a),
                (u = xe),
                (Ue = xe = null),
                (t = u !== null))),
          t)
        : !1;
  }
  function z0(e, t) {
    var l = e.ownerDocument.createRange();
    (l.selectNodeContents(e),
      (e = l.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + e.left,
        t
          ? window.scrollY + e.top
          : window.scrollY + e.bottom - window.innerHeight,
      ));
  }
  Ot.prototype.scrollIntoView = function (e) {
    if (typeof e == "object") throw Error(d(566));
    var t = [];
    p(this._fragmentFiber.child, !1, af, t, void 0, void 0);
    var l = e !== !1;
    if (t.length === 0) {
      var a = te(this._fragmentFiber);
      if (
        ((a = l ? a[1] || a[0] || j(this._fragmentFiber) : a[0] || a[1]),
        a === null)
      )
        return;
      if (a.tag === 6) {
        ((e = R(a)), z0(e, l));
        return;
      }
      if (((a = R(a)), a.nodeType !== 9)) {
        if (a.nodeType === 11) {
          ((l = "host" in a ? a.host : null),
            l !== null && l.scrollIntoView(e));
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = l ? t.length - 1 : 0; a !== (l ? -1 : t.length); ) {
      var n = t[a];
      (n.tag === 6 ? ((n = R(n)), z0(n, l)) : R(n).scrollIntoView(e),
        (a += l ? -1 : 1));
    }
  };
  function c1(e, t) {
    return ((e = R(e)), O0(e, t), !1);
  }
  function O0(e, t) {
    (e.reactFragments == null && (e.reactFragments = new Set()),
      e.reactFragments.add(t));
  }
  function C0(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.addEventListener(
          n.type,
          n.attachedListener,
          nn(n.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((l = t._observers),
      l !== null &&
        l.forEach(function (u) {
          for (var i = 0, c = 0; c < Vt.length; c++) {
            var f = Vt[c];
            (f.fragmentInstance !== t ||
              f.observer !== u ||
              f.instance !== e) &&
              (Vt[i++] = f);
          }
          ((Vt.length = i), u.observe(e));
        }),
      O0(e, t));
  }
  function s1(e, t) {
    var l = t._eventListeners;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a];
        e.removeEventListener(
          n.type,
          n.attachedListener,
          nn(n.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((l = t._observers),
      l !== null &&
        l.forEach(function (u) {
          typeof u.rootMargin == "string" ? n1(t, u, e) : u.unobserve(e);
        }),
      e.reactFragments != null && e.reactFragments.delete(t));
  }
  function uf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (uf(l), gu(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function f1(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[vn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = wt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function o1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function D0(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = wt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function cf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function sf(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function r1(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var ff = null;
  function M0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0) return wt(e.nextSibling);
          t--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function U0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else (l !== "/$" && l !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function d1(e, t) {
    function l() {
      a = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var a = !1;
    try {
      (e.ownerDocument.addEventListener("focus", l, !0),
        (e.focus || HTMLElement.prototype.focus).call(e, t));
    } finally {
      e.ownerDocument.removeEventListener("focus", l, !0);
    }
    return a;
  }
  function m1(e) {
    b0(function () {
      b0(function (t) {
        return e(t);
      });
    });
  }
  function R0(e, t, l) {
    switch (((t = In(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(d(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(d(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(d(454));
        return e;
      default:
        throw Error(d(451));
    }
  }
  function H0(e, t, l) {
    for (var a in l) {
      var n = l[a];
      l.hasOwnProperty(a) && n != null && Ee(e, t, a, null, Qy, n);
    }
    (l.dangerouslySetInnerHTML != null && (e.textContent = ""),
      e.onclick === kt && (e.onclick = null),
      gu(e));
  }
  function of(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    gu(e);
  }
  var Yt = new Map(),
    q0 = new Set();
  function Pn(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var xl = J.d;
  J.d = { f: h1, r: y1, D: v1, C: g1, L: p1, m: b1, X: S1, S: x1, M: T1 };
  function h1() {
    var e = xl.f(),
      t = xi();
    return e || t;
  }
  function y1(e) {
    var t = Na(e);
    t !== null && t.tag === 5 && t.type === "form" ? wr(t) : xl.r(e);
  }
  var un = typeof document > "u" ? null : document;
  function B0(e, t, l) {
    var a = un;
    if (a && typeof t == "string" && t) {
      var n = Dt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        q0.has(n) ||
          (q0.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            nt(t, "link", e),
            Ze(t),
            a.head.appendChild(t))));
    }
  }
  function v1(e) {
    (xl.D(e), B0("dns-prefetch", e, null));
  }
  function g1(e, t) {
    (xl.C(e, t), B0("preconnect", e, t));
  }
  function p1(e, t, l) {
    xl.L(e, t, l);
    var a = un;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Dt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Dt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Dt(l.imageSizes) + '"]'))
        : (n += '[href="' + Dt(e) + '"]');
      var u = n;
      switch (t) {
        case "style":
          u = cn(e);
          break;
        case "script":
          u = sn(e);
      }
      if (
        !(
          Yt.has(u) ||
          ((e = $(
            {
              rel: "preload",
              href: t === "image" && l && l.imageSrcSet ? void 0 : e,
              as: t,
            },
            l,
          )),
          Yt.set(u, e),
          a.querySelector(n) !== null ||
            (t === "style" && a.querySelector(eu(u))) ||
            (t === "script" && a.querySelector(tu(u))))
        )
      ) {
        var i = a.createElement("link");
        (nt(i, "link", e),
          t === "style" &&
            ((i[vu] = !0),
            (i.onload = i.onerror =
              function () {
                $f(i);
              })),
          Ze(i),
          a.head.appendChild(i));
      }
    }
  }
  function b1(e, t) {
    xl.m(e, t);
    var l = un;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Dt(a) + '"][href="' + Dt(e) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = sn(e);
      }
      if (
        !Yt.has(u) &&
        ((e = $({ rel: "modulepreload", href: e }, t)),
        Yt.set(u, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(tu(u))) return;
        }
        ((a = l.createElement("link")),
          nt(a, "link", e),
          Ze(a),
          l.head.appendChild(a));
      }
    }
  }
  function x1(e, t, l) {
    xl.S(e, t, l);
    var a = un;
    if (a && e) {
      var n = Ea(a).hoistableStyles,
        u = cn(e);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(eu(u)))) c.loading = 5;
        else {
          ((e = $({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Yt.get(u)) && rf(e, l));
          var f = (i = a.createElement("link"));
          (Ze(f),
            nt(f, "link", e),
            (f._p = new Promise(function (y, x) {
              ((f.onload = y), (f.onerror = x));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            _i(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          n.set(u, i));
      }
    }
  }
  function S1(e, t) {
    xl.X(e, t);
    var l = un;
    if (l && e) {
      var a = Ea(l).hoistableScripts,
        n = sn(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(tu(n))),
        u ||
          ((e = $({ src: e, async: !0 }, t)),
          (t = Yt.get(n)) && df(e, t),
          (u = l.createElement("script")),
          Ze(u),
          nt(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function T1(e, t) {
    xl.M(e, t);
    var l = un;
    if (l && e) {
      var a = Ea(l).hoistableScripts,
        n = sn(e),
        u = a.get(n);
      u ||
        ((u = l.querySelector(tu(n))),
        u ||
          ((e = $({ src: e, async: !0, type: "module" }, t)),
          (t = Yt.get(n)) && df(e, t),
          (u = l.createElement("script")),
          Ze(u),
          nt(u, "link", e),
          l.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function w0(e, t, l, a) {
    var n = (n = Sl.current) ? Pn(n) : null;
    if (!n) throw Error(d(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((l = cn(l.href)),
            (t = Ea(n).hoistableStyles),
            (a = t.get(l)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              t.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = cn(l.href);
          var u = Ea(n).hoistableStyles,
            i = u.get(e);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, i),
              (u = n.querySelector(eu(e)))
                ? u._p || ((i.instance = u), (i.state.loading = 5))
                : ((u = Yt.get(e)),
                  u ||
                    ((u = {
                      rel: "preload",
                      as: "style",
                      href: l.href,
                      crossOrigin: l.crossOrigin,
                      integrity: l.integrity,
                      media: l.media,
                      hrefLang: l.hrefLang,
                      referrerPolicy: l.referrerPolicy,
                    }),
                    Yt.set(e, u)),
                  N1(n, e, u, i.state))),
            t && a === null)
          )
            throw Error(d(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(d(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((l = sn(l)),
              (t = Ea(n).hoistableScripts),
              (a = t.get(l)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(l, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, e));
    }
  }
  function cn(e) {
    return 'href="' + Dt(e) + '"';
  }
  function eu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Y0(e) {
    return $({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function N1(e, t, l, a) {
    if ((t = e.querySelector('link[rel="preload"][as="style"][' + t + "]"))) {
      if (t[vu] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      ((t = e.createElement("link")),
        (t[vu] = !0),
        (t.onload = t.onerror = $f.bind(null, t)),
        nt(t, "link", l),
        Ze(t),
        e.head.appendChild(t));
    ((a.preload = t),
      t.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      t.addEventListener("error", function () {
        return (a.loading |= 2);
      }));
  }
  function sn(e) {
    return '[src="' + Dt(e) + '"]';
  }
  function tu(e) {
    return "script[async]" + e;
  }
  function G0(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Dt(l.href) + '"]');
          if (a) return ((t.instance = a), Ze(a), a);
          var n = $({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Ze(a),
            nt(a, "style", n),
            _i(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = cn(l.href);
          var u = e.querySelector(eu(n));
          if (u) return ((t.state.loading |= 4), (t.instance = u), Ze(u), u);
          ((a = Y0(l)),
            (n = Yt.get(n)) && rf(a, n),
            (u = (e.ownerDocument || e).createElement("link")),
            Ze(u));
          var i = u;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            nt(u, "link", a),
            (t.state.loading |= 4),
            _i(u, l.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = sn(l.src)),
            (n = e.querySelector(tu(u)))
              ? ((t.instance = n), Ze(n), n)
              : ((a = l),
                (n = Yt.get(u)) && ((a = $({}, l)), df(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Ze(n),
                nt(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(d(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), _i(a, l.precedence, e));
    return t.instance;
  }
  function _i(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function rf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function df(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var zi = null;
  function X0(e, t, l) {
    if (zi === null) {
      var a = new Map(),
        n = (zi = new Map());
      n.set(l, a);
    } else ((n = zi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var u = l[n];
      if (
        !(
          u[vn] ||
          u[Pe] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(t) || "";
        i = e + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function mf(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function E1(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Q0(e, t) {
    return (
      e === "img" &&
      t.src != null &&
      t.src !== "" &&
      t.onLoad == null &&
      t.loading !== "lazy"
    );
  }
  function L0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Z0(e) {
    return (
      (e.width || 100) *
      (e.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function V0(e, t) {
    typeof t.decode == "function" &&
      (e.imgCount++,
      t.complete || ((e.imgBytes += Z0(t)), e.suspenseyImages.push(t)),
      (e = _1.bind(e)),
      t.decode().then(e, e));
  }
  function j1(e, t, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = cn(a.href),
          u = t.querySelector(eu(n));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = lu.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = u),
            Ze(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (a = Y0(a)),
          (n = Yt.get(n)) && rf(a, n),
          (u = u.createElement("link")),
          Ze(u));
        var i = u;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          nt(u, "link", a),
          (l.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = lu.bind(e)),
          t.addEventListener("load", l),
          t.addEventListener("error", l)));
    }
  }
  var Oi = 0;
  function A1(e, t) {
    return (
      e.stylesheets && e.count === 0 && Di(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Di(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Oi === 0 && (Oi = 62500 * Zy());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Di(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Oi ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function K0(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Di(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        ((e.unsuspend = null), t());
      }
    }
  }
  function lu() {
    (this.count--, K0(this));
  }
  function _1() {
    (this.imgCount--, K0(this));
  }
  var Ci = null;
  function Di(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ci = new Map()),
        t.forEach(z1, e),
        (Ci = null),
        lu.call(e)));
  }
  function z1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ci.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Ci.set(e, l));
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (l.set(i.dataset.precedence, i), (a = i));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (i = n.getAttribute("data-precedence")),
        (u = l.get(i) || a),
        u === a && l.set(null, n),
        l.set(i, n),
        this.count++,
        (a = lu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var fn = {
    $$typeof: Se,
    Provider: null,
    Consumer: null,
    _currentValue: ul,
    _currentValue2: ul,
    _threadCount: 0,
  };
  function O1(e, t, l, a, n, u, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ki(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ki(0)),
      (this.hiddenUpdates = Ki(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function J0(e, t, l, a, n, u, i, c, f, y, x, T) {
    return (
      (e = new O1(e, t, l, i, f, y, x, T, c)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = ht(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = _c()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Dc(u),
      e
    );
  }
  function k0(e) {
    return e ? ((e = Ra), e) : Ra;
  }
  function $0(e, t, l, a, n, u) {
    ((n = k0(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = Ml(t)),
      (a.payload = { element: l }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (l = Ul(e, a, t)),
      l !== null && (pt(l, e, t), Un(l, e, t)));
  }
  function W0(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function hf(e, t) {
    (W0(e, t), (e = e.alternate) && W0(e, t));
  }
  function F0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ta(e, 67108864);
      (t !== null && pt(t, e, 67108864), hf(e, 67108864));
    }
  }
  function I0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = Ji(t);
      var l = ta(e, t);
      (l !== null && pt(l, e, t), hf(e, t));
    }
  }
  var on = !0;
  function C1(e, t, l, a) {
    var n = q.T;
    q.T = null;
    var u = J.p;
    try {
      ((J.p = 2), yf(e, t, l, a));
    } finally {
      ((J.p = u), (q.T = n));
    }
  }
  function D1(e, t, l, a) {
    var n = q.T;
    q.T = null;
    var u = J.p;
    try {
      ((J.p = 8), yf(e, t, l, a));
    } finally {
      ((J.p = u), (q.T = n));
    }
  }
  function yf(e, t, l, a) {
    if (on) {
      var n = vf(a);
      if (n === null) ($s(e, t, a, Mi, l), em(e, a));
      else if (U1(n, e, t, l, a)) a.stopPropagation();
      else if ((em(e, a), t & 4 && -1 < M1.indexOf(e))) {
        for (; n !== null; ) {
          var u = Na(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Wl(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - St(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (nl(u), (pe & 6) === 0 && ((gi = bt() + 500), $n(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = ta(u, 2)), c !== null && pt(c, u, 2), xi(), hf(u, 2));
            }
          if (((u = vf(a)), u === null && $s(e, t, a, Mi, l), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else $s(e, t, a, null, l);
    }
  }
  function vf(e) {
    return ((e = ec(e)), gf(e));
  }
  var Mi = null;
  function gf(e) {
    if (((Mi = null), (e = Fl(e)), e !== null)) {
      var t = Y(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = K(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = W(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Mi = e), null);
  }
  function P0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Zm()) {
          case Bf:
            return 2;
          case wf:
            return 8;
          case ru:
          case Vm:
            return 32;
          case Yf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var pf = !1,
    Vl = null,
    Kl = null,
    Jl = null,
    au = new Map(),
    nu = new Map(),
    kl = [],
    M1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function em(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vl = null;
        break;
      case "dragenter":
      case "dragleave":
        Kl = null;
        break;
      case "mouseover":
      case "mouseout":
        Jl = null;
        break;
      case "pointerover":
      case "pointerout":
        au.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nu.delete(t.pointerId);
    }
  }
  function uu(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        t !== null && ((t = Na(t)), t !== null && F0(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function U1(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((Vl = uu(Vl, e, t, l, a, n)), !0);
      case "dragenter":
        return ((Kl = uu(Kl, e, t, l, a, n)), !0);
      case "mouseover":
        return ((Jl = uu(Jl, e, t, l, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (au.set(u, uu(au.get(u) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          nu.set(u, uu(nu.get(u) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function tm(e) {
    var t = Fl(e.target);
    if (t !== null) {
      var l = Y(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = K(l)), t !== null)) {
            ((e.blockedOn = t),
              Kf(e.priority, function () {
                I0(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = W(l)), t !== null)) {
            ((e.blockedOn = t),
              Kf(e.priority, function () {
                I0(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ui(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = vf(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((Pi = a), l.target.dispatchEvent(a), (Pi = null));
      } else return ((t = Na(l)), t !== null && F0(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function lm(e, t, l) {
    Ui(e) && l.delete(t);
  }
  function R1() {
    ((pf = !1),
      Vl !== null && Ui(Vl) && (Vl = null),
      Kl !== null && Ui(Kl) && (Kl = null),
      Jl !== null && Ui(Jl) && (Jl = null),
      au.forEach(lm),
      nu.forEach(lm));
  }
  function Ri(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      pf ||
        ((pf = !0),
        b.unstable_scheduleCallback(b.unstable_NormalPriority, R1)));
  }
  var Hi = null;
  function am(e) {
    Hi !== e &&
      ((Hi = e),
      b.unstable_scheduleCallback(b.unstable_NormalPriority, function () {
        Hi === e && (Hi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (gf(a || l) === null) continue;
            break;
          }
          var u = Na(l);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ic(u, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function rn(e) {
    function t(f) {
      return Ri(f, e);
    }
    (Vl !== null && Ri(Vl, e),
      Kl !== null && Ri(Kl, e),
      Jl !== null && Ri(Jl, e),
      au.forEach(t),
      nu.forEach(t));
    for (var l = 0; l < kl.length; l++) {
      var a = kl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < kl.length && ((l = kl[0]), l.blockedOn === null); )
      (tm(l), l.blockedOn === null && kl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[mt] || null;
        if (typeof u == "function") i || am(l);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[mt] || null))) c = i.formAction;
            else if (gf(n) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (l[a + 1] = c) : (l.splice(a, 3), (a -= 3)),
            am(l));
        }
      }
  }
  function nm() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function bf(e) {
    this._internalRoot = e;
  }
  ((qi.prototype.render = bf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(d(409));
      var l = t.current,
        a = zt();
      $0(l, a, e, t, null, null);
    }),
    (qi.prototype.unmount = bf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ($0(e.current, 2, null, e, null, null), xi(), (t[Ta] = null));
        }
      }));
  function qi(e) {
    this._internalRoot = e;
  }
  qi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < kl.length && t !== 0 && t < kl[l].priority; l++);
      (kl.splice(l, 0, e), l === 0 && tm(e));
    }
  };
  var um = E.version;
  if (um !== "19.3.1") throw Error(d(527, um, "19.3.1"));
  J.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(d(188))
        : ((e = Object.keys(e).join(",")), Error(d(268, e)));
    return (
      (e = ie(t)),
      (e = e !== null ? z(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var H1 = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.3.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bi.isDisabled && Bi.supportsFiber)
      try {
        ((mn = Bi.inject(H1)), (xt = Bi));
      } catch {}
  }
  return (
    (cu.createRoot = function (e, t) {
      if (!M(e)) throw Error(d(299));
      var l = !1,
        a = "",
        n = kr,
        u = $r,
        i = Wr;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = J0(e, 1, !1, null, null, l, a, null, n, u, i, nm)),
        (e[Ta] = t.current),
        ks(e),
        new bf(t)
      );
    }),
    (cu.hydrateRoot = function (e, t, l) {
      if (!M(e)) throw Error(d(299));
      var a = !1,
        n = "",
        u = kr,
        i = $r,
        c = Wr,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
          l.onCaughtError !== void 0 && (i = l.onCaughtError),
          l.onRecoverableError !== void 0 && (c = l.onRecoverableError),
          l.formState !== void 0 && (f = l.formState)),
        (t = J0(e, 1, !0, t, l ?? null, a, n, f, u, i, c, nm)),
        (t.context = k0(null)),
        (l = t.current),
        (a = zt()),
        (a = Ji(a)),
        (n = Ml(a)),
        (n.callback = null),
        Ul(l, n, a),
        (l = a),
        (t.current.lanes = l),
        yn(t, l),
        nl(t),
        (e[Ta] = t.current),
        ks(e),
        new qi(t)
      );
    }),
    (cu.version = "19.3.1"),
    cu
  );
}
var ym;
function K1() {
  if (ym) return Tf.exports;
  ym = 1;
  function b() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (E) {
        console.error(E);
      }
  }
  return (b(), (Tf.exports = V1()), Tf.exports);
}
var J1 = K1();
const k1 = gm(J1),
  Af = {
    openapi: "3.0.3",
    info: {
      title: "BMP - Business Management Portal API",
      version: "1.0.0",
      description:
        "Official REST API documentation for the Business Management Platform (BMP). Manage users, companies, projects, tickets, activities, and role-based operational dashboards. Supports Bearer JWT authentication and HTTP-only cookie sessions.",
      contact: {
        name: "BMP Engineering Team",
        email: "support@bmp-system.local",
      },
    },
    servers: [
      {
        url: "http://localhost:4000/api",
        description: "Local Node.js / Express Backend Server",
      },
      { url: "/api", description: "Relative API Proxy Path" },
    ],
    tags: [
      {
        name: "Activity",
        description: "Audit trail and real-time operational activity feeds",
      },
      {
        name: "Authentication",
        description:
          "User registration, authentication, sessions, and profile management",
      },
      {
        name: "Company",
        description:
          "Company workspace setup, admin verification, and membership access approvals",
      },
      {
        name: "Users",
        description: "User directory lookup and role assignment controls",
      },
      {
        name: "Projects",
        description:
          "Project management, scheduling, status tracking, and member allocation",
      },
      {
        name: "Tickets",
        description:
          "Issue tracking, support tickets, assignments, and resolution workflow",
      },
      {
        name: "Dashboard",
        description:
          "Role-specific analytical metrics, card KPIs, and project status breakdowns",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description:
            "Enter your JWT token obtained from POST /login or POST /company",
        },
      },
    },
    paths: {
      "/activity/logs": {
        get: {
          tags: ["Activity"],
          summary: "Retrieve recent system activity logs",
          description:
            "Returns the 10 most recent activity logs sorted by creation date with populated user info.",
          operationId: "getActivityLogs",
          security: [{ bearerAuth: [] }],
          parameters: [],
          responses: {
            200: {
              description: "Activity logs fetched successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Active Fild fetched successfully",
                    data: [
                      {
                        _id: "670c53e020261017001",
                        user: {
                          _id: "670c53e020261017002",
                          username: "admin_rahul",
                        },
                        action: "created",
                        entityType: "project",
                        entityId: "670c53e020261017003",
                        description: "Created project: Cloud Migration",
                        createdAt: "2026-10-17T18:00:00.000Z",
                      },
                    ],
                  },
                },
              },
            },
            401: { description: "Authentication required" },
          },
        },
      },
      "/register": {
        post: {
          tags: ["Authentication"],
          summary: "Submit user access request / registration",
          description:
            "Registers a user under a specific company workspace code. The account starts in 'pending' accessStatus until approved by a company admin.",
          operationId: "registerUser",
          security: [],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["username", "email", "workspaceCode", "password"],
                  properties: {
                    username: { type: "string", example: "john_doe" },
                    email: {
                      type: "string",
                      format: "email",
                      example: "john@example.com",
                    },
                    workspaceCode: { type: "string", example: "ACME123" },
                    password: {
                      type: "string",
                      format: "password",
                      example: "Password@123",
                    },
                  },
                },
                example: {
                  username: "john_doe",
                  email: "john@example.com",
                  workspaceCode: "ACME123",
                  password: "Password@123",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Access request submitted successfully",
              content: {
                "application/json": {
                  example: {
                    message: "Access request submitted successfully.",
                    userId: "670c53e020261017004",
                    status: "pending",
                  },
                },
              },
            },
            400: { description: "Missing required fields" },
            404: { description: "Invalid workspace code" },
            409: { description: "Account already exists in this company" },
          },
        },
      },
      "/login": {
        post: {
          tags: ["Authentication"],
          summary: "User login & JWT session creation",
          description:
            "Authenticates an approved user via email and password. Sets an HTTP-only JWT cookie and returns user profile data.",
          operationId: "loginUser",
          security: [],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["email", "password"],
                  properties: {
                    email: {
                      type: "string",
                      format: "email",
                      example: "admin@bmp.com",
                    },
                    password: {
                      type: "string",
                      format: "password",
                      example: "Admin@12345",
                    },
                  },
                },
                example: { email: "admin@bmp.com", password: "Admin@12345" },
              },
            },
          },
          responses: {
            200: {
              description: "Login successful",
              content: {
                "application/json": {
                  example: {
                    message: "Login successful.",
                    user: {
                      id: "670c53e020261017005",
                      username: "admin_rahul",
                      email: "admin@bmp.com",
                      role: "admin",
                      companyId: "670c53e020261017006",
                      accessStatus: "approved",
                    },
                  },
                },
              },
            },
            400: { description: "Email and password are required" },
            401: { description: "Invalid email or password" },
            403: { description: "Account pending approval or rejected" },
          },
        },
      },
      "/logout": {
        post: {
          tags: ["Authentication"],
          summary: "Log out current user",
          description:
            "Clears the authentication JWT cookie and updates user's online state to offline.",
          operationId: "logoutUser",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Logout successful",
              content: {
                "application/json": {
                  example: { message: "Logout successful." },
                },
              },
            },
          },
        },
      },
      "/profile": {
        get: {
          tags: ["Authentication"],
          summary: "Get current user profile",
          description:
            "Returns the profile details of the currently authenticated user.",
          operationId: "getProfile",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Profile fetched successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Profile fatch successfully",
                    user: {
                      _id: "670c53e020261017005",
                      username: "admin_rahul",
                      email: "admin@bmp.com",
                      role: "admin",
                      companyId: "670c53e020261017006",
                      accessStatus: "approved",
                      isOnline: !0,
                      lastSeen: null,
                      createdAt: "2026-10-10T12:00:00.000Z",
                    },
                  },
                },
              },
            },
            401: { description: "Authentication required or invalid token" },
          },
        },
      },
      "/company": {
        post: {
          tags: ["Company"],
          summary: "Register new company & root admin",
          description:
            "Creates a new company workspace along with the initial administrator account. Automatically logs in the new admin by setting the JWT cookie.",
          operationId: "createCompany",
          security: [],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: [
                    "companyName",
                    "companyEmail",
                    "workspaceCode",
                    "contactDetails",
                  ],
                  properties: {
                    companyName: { type: "string", example: "Acme Enterprise" },
                    companyEmail: {
                      type: "string",
                      format: "email",
                      example: "contact@acme.com",
                    },
                    workspaceCode: { type: "string", example: "ACME2026" },
                    contactDetails: {
                      type: "object",
                      required: [
                        "username",
                        "email",
                        "password",
                        "phone",
                        "address",
                        "city",
                        "state",
                        "country",
                      ],
                      properties: {
                        username: { type: "string", example: "acme_admin" },
                        email: {
                          type: "string",
                          format: "email",
                          example: "admin@acme.com",
                        },
                        password: {
                          type: "string",
                          format: "password",
                          example: "AdminSecret#123",
                        },
                        phone: { type: "string", example: "+1-555-0199" },
                        address: {
                          type: "string",
                          example: "123 Tech Boulevard",
                        },
                        city: { type: "string", example: "San Francisco" },
                        state: { type: "string", example: "California" },
                        country: { type: "string", example: "USA" },
                      },
                    },
                  },
                },
                example: {
                  companyName: "Acme Enterprise",
                  companyEmail: "contact@acme.com",
                  workspaceCode: "ACME2026",
                  contactDetails: {
                    username: "acme_admin",
                    email: "admin@acme.com",
                    password: "AdminSecret#123",
                    phone: "+1-555-0199",
                    address: "123 Tech Boulevard",
                    city: "San Francisco",
                    state: "California",
                    country: "USA",
                  },
                },
              },
            },
          },
          responses: {
            201: {
              description: "Company created successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Company created successfully",
                    company: {
                      _id: "670c53e020261017006",
                      companyName: "Acme Enterprise",
                      companyEmail: "contact@acme.com",
                      workspaceCode: "ACME2026",
                      status: "pending",
                    },
                    user: {
                      id: "670c53e020261017005",
                      username: "acme_admin",
                      email: "admin@acme.com",
                      role: "admin",
                    },
                  },
                },
              },
            },
            400: { description: "Missing required company or contact fields" },
            409: {
              description: "Company email or workspace code already exists",
            },
          },
        },
      },
      "/getcompany/{adminId}": {
        get: {
          tags: ["Company"],
          summary: "Get company profile by Admin ID",
          description:
            "Returns company details associated with the logged-in admin. Caller must be an admin matching the adminId.",
          operationId: "getCompany",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "adminId",
              in: "path",
              required: !0,
              description: "User ID of the administrator",
              schema: { type: "string", example: "670c53e020261017005" },
            },
          ],
          responses: {
            200: {
              description: "Company details retrieved",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    company: {
                      _id: "670c53e020261017006",
                      companyName: "Acme Enterprise",
                      companyEmail: "contact@acme.com",
                      workspaceCode: "ACME2026",
                      status: "active",
                    },
                  },
                },
              },
            },
            401: { description: "Authentication required" },
            403: {
              description: "Access denied (Role must be admin & match user ID)",
            },
            404: { description: "Company not found" },
          },
        },
      },
      "/approve/{userId}": {
        post: {
          tags: ["Company"],
          summary: "Approve a pending user access request",
          description:
            "Admin approves a registered user's pending request, allowing them to log in to the portal.",
          operationId: "approveUser",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "userId",
              in: "path",
              required: !0,
              description: "User ID to approve",
              schema: { type: "string", example: "670c53e020261017004" },
            },
          ],
          responses: {
            200: {
              description: "User approved successfully",
              content: {
                "application/json": {
                  example: {
                    message: "User approved successfully.",
                    user: {
                      id: "670c53e020261017004",
                      username: "john_doe",
                      email: "john@example.com",
                      role: "customer",
                      accessStatus: "approved",
                    },
                  },
                },
              },
            },
            400: { description: "User is already approved or invalid state" },
            403: { description: "Admin access required" },
            404: { description: "User not found" },
          },
        },
      },
      "/reject/{userId}": {
        post: {
          tags: ["Company"],
          summary: "Reject user access request",
          description:
            "Admin rejects a registered user's request. Sets accessStatus to 'rejected' and marks user offline.",
          operationId: "rejectUser",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "userId",
              in: "path",
              required: !0,
              description: "User ID to reject",
              schema: { type: "string", example: "670c53e020261017004" },
            },
          ],
          responses: {
            200: {
              description: "User rejected successfully",
              content: {
                "application/json": {
                  example: {
                    message: "User rejected successfully.",
                    accessStatus: "rejected",
                  },
                },
              },
            },
            403: { description: "Admin access required" },
            404: { description: "User not found" },
          },
        },
      },
      "/users": {
        get: {
          tags: ["Users"],
          summary: "List all users in the system",
          description:
            "Returns a complete list of users without password fields, including their online status. Requires admin role.",
          operationId: "getAllUsers",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "List of users",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    users: [
                      {
                        _id: "670c53e020261017005",
                        username: "admin_rahul",
                        email: "admin@bmp.com",
                        role: "admin",
                        accessStatus: "approved",
                        isOnline: !0,
                        lastSeen: null,
                      },
                      {
                        _id: "670c53e020261017010",
                        username: "sarah_manager",
                        email: "sarah@bmp.com",
                        role: "manager",
                        accessStatus: "approved",
                        isOnline: !1,
                        lastSeen: "2026-10-17T17:30:00.000Z",
                      },
                    ],
                  },
                },
              },
            },
            403: { description: "Admin role required" },
          },
        },
      },
      "/users/{userId}/role": {
        patch: {
          tags: ["Users"],
          summary: "Update user role",
          description:
            "Updates the role of a user. Allowed roles: 'customer', 'employee', 'manager', 'admin'. Requires admin or manager role.",
          operationId: "updateUserRole",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "userId",
              in: "path",
              required: !0,
              description: "Target User ID",
              schema: { type: "string", example: "670c53e020261017010" },
            },
          ],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["role"],
                  properties: {
                    role: {
                      type: "string",
                      enum: ["customer", "employee", "manager", "admin"],
                      example: "employee",
                    },
                  },
                },
                example: { role: "employee" },
              },
            },
          },
          responses: {
            200: {
              description: "Role updated successfully",
              content: {
                "application/json": {
                  example: {
                    message: "Role updated successfully",
                    user: {
                      _id: "670c53e020261017010",
                      username: "sarah_employee",
                      email: "sarah@bmp.com",
                      role: "employee",
                    },
                  },
                },
              },
            },
            400: { description: "Invalid role specified" },
            403: { description: "Forbidden - Admin/Manager role required" },
            404: { description: "User not found" },
          },
        },
      },
      "/project": {
        post: {
          tags: ["Projects"],
          summary: "Create a new project",
          description:
            "Creates a new project. Start date and due date are required. Status can be: 'planned', 'active', 'on-hold', 'completed', 'cancelled'. Requires admin or manager role.",
          operationId: "createProject",
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["name", "startDate", "dueDate"],
                  properties: {
                    name: { type: "string", example: "Mobile App Redesign" },
                    description: {
                      type: "string",
                      example: "Redesign the iOS and Android application UI/UX",
                    },
                    status: {
                      type: "string",
                      enum: [
                        "planned",
                        "active",
                        "on-hold",
                        "completed",
                        "cancelled",
                      ],
                      default: "planned",
                      example: "active",
                    },
                    manager: {
                      type: "string",
                      description:
                        "Manager User ID (defaults to current user if manager)",
                      example: "670c53e020261017010",
                    },
                    members: {
                      type: "array",
                      items: { type: "string" },
                      description: "List of employee user IDs",
                      example: ["670c53e020261017011"],
                    },
                    startDate: {
                      type: "string",
                      format: "date",
                      example: "2026-10-20",
                    },
                    dueDate: {
                      type: "string",
                      format: "date",
                      example: "2026-12-31",
                    },
                  },
                },
                example: {
                  name: "Mobile App Redesign",
                  description: "Redesign the iOS and Android application UI/UX",
                  status: "active",
                  startDate: "2026-10-20",
                  dueDate: "2026-12-31",
                  members: [],
                },
              },
            },
          },
          responses: {
            201: {
              description: "Project created successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Project created successfully",
                    project: {
                      _id: "670c53e020261017020",
                      name: "Mobile App Redesign",
                      description:
                        "Redesign the iOS and Android application UI/UX",
                      status: "active",
                      manager: "670c53e020261017010",
                      createdBy: "670c53e020261017005",
                      members: [],
                      startDate: "2026-10-20T00:00:00.000Z",
                      dueDate: "2026-12-31T00:00:00.000Z",
                    },
                  },
                },
              },
            },
            400: { description: "Invalid project parameters or dates" },
            403: { description: "Admin or Manager role required" },
          },
        },
      },
      "/get/project": {
        get: {
          tags: ["Projects"],
          summary: "List user projects",
          description:
            "Returns projects scoped by user role: Admins see all projects, Managers see projects they manage, Employees see projects they are members of.",
          operationId: "getProjects",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "List of accessible projects",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    count: 1,
                    projects: [
                      {
                        _id: "670c53e020261017020",
                        name: "Mobile App Redesign",
                        description:
                          "Redesign the iOS and Android application UI/UX",
                        status: "active",
                        manager: "670c53e020261017010",
                        members: [
                          {
                            _id: "670c53e020261017011",
                            username: "alex_dev",
                            email: "alex@bmp.com",
                          },
                        ],
                        startDate: "2026-10-20T00:00:00.000Z",
                        dueDate: "2026-12-31T00:00:00.000Z",
                        createdAt: "2026-10-17T18:00:00.000Z",
                      },
                    ],
                  },
                },
              },
            },
            401: { description: "Authentication required" },
            403: { description: "Role not authorized to view projects" },
          },
        },
      },
      "/{projectId}/members": {
        post: {
          tags: ["Projects"],
          summary: "Add employee member to project",
          description:
            "Adds an employee to a project's members array. Requires admin or project manager role.",
          operationId: "addProjectMember",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "projectId",
              in: "path",
              required: !0,
              description: "ID of the project",
              schema: { type: "string", example: "670c53e020261017020" },
            },
          ],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["employeeId"],
                  properties: {
                    employeeId: {
                      type: "string",
                      example: "670c53e020261017011",
                    },
                  },
                },
                example: { employeeId: "670c53e020261017011" },
              },
            },
          },
          responses: {
            200: {
              description: "Employee added to project successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Employee added to project successfully",
                    project: {
                      _id: "670c53e020261017020",
                      name: "Mobile App Redesign",
                      members: ["670c53e020261017011"],
                    },
                  },
                },
              },
            },
            400: {
              description: "Invalid project ID or user is not an employee",
            },
            403: {
              description: "Forbidden - Not permitted to modify this project",
            },
            404: { description: "Project or Employee not found" },
            409: { description: "Employee is already a project member" },
          },
        },
      },
      "/ticket/{projectId}": {
        post: {
          tags: ["Tickets"],
          summary: "Create a support ticket under a project",
          description:
            "Creates a new ticket within a specified project. Admins, managers (for their projects), and assigned employees can create tickets.",
          operationId: "createTicket",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "projectId",
              in: "path",
              required: !0,
              description: "Target project ID",
              schema: { type: "string", example: "670c53e020261017020" },
            },
          ],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  required: ["title", "description"],
                  properties: {
                    title: {
                      type: "string",
                      example: "Fix auth token expiration error",
                    },
                    description: {
                      type: "string",
                      example: "User session drops unexpectedly after 1 hour",
                    },
                    assignedTo: {
                      type: "string",
                      description: "Optional employee user ID",
                      example: "670c53e020261017011",
                    },
                  },
                },
                example: {
                  title: "Fix auth token expiration error",
                  description: "User session drops unexpectedly after 1 hour",
                  assignedTo: "670c53e020261017011",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Ticket created successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Ticket created successfully",
                    ticket: {
                      _id: "670c53e020261017030",
                      title: "Fix auth token expiration error",
                      description:
                        "User session drops unexpectedly after 1 hour",
                      project: "670c53e020261017020",
                      status: "open",
                      priority: "medium",
                      createdBy: "670c53e020261017005",
                      assignedTo: "670c53e020261017011",
                    },
                  },
                },
              },
            },
            400: {
              description: "Invalid project ID or missing title/description",
            },
            403: {
              description: "Not permitted to create tickets in this project",
            },
            404: { description: "Project not found" },
          },
        },
      },
      "/tickets": {
        get: {
          tags: ["Tickets"],
          summary: "List tickets",
          description:
            "Returns tickets visible to the signed-in user based on role: Admins see all tickets, Managers see tickets in their projects, Employees see assigned tickets, Customers see created tickets.",
          operationId: "getTickets",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Tickets fetched successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    count: 1,
                    tickets: [
                      {
                        _id: "670c53e020261017030",
                        title: "Fix auth token expiration error",
                        description:
                          "User session drops unexpectedly after 1 hour",
                        status: "open",
                        priority: "medium",
                        project: {
                          _id: "670c53e020261017020",
                          name: "Mobile App Redesign",
                        },
                        assignedTo: {
                          _id: "670c53e020261017011",
                          username: "alex_dev",
                          email: "alex@bmp.com",
                        },
                        createdBy: {
                          _id: "670c53e020261017005",
                          username: "admin_rahul",
                          email: "admin@bmp.com",
                        },
                        createdAt: "2026-10-17T18:10:00.000Z",
                      },
                    ],
                  },
                },
              },
            },
            401: { description: "Authentication required" },
          },
        },
      },
      "/update/ticket/{ticketId}": {
        post: {
          tags: ["Tickets"],
          summary: "Update ticket details",
          description:
            "Updates an existing ticket. Accepted fields: title, description, status ('open', 'in_progress', 'in_review', 'resolved', 'closed'), priority ('low', 'medium', 'high', 'critical').",
          operationId: "updateTicket",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "ticketId",
              in: "path",
              required: !0,
              description: "Target Ticket ID",
              schema: { type: "string", example: "670c53e020261017030" },
            },
          ],
          requestBody: {
            required: !0,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                      example:
                        "Fix auth token expiration error [High Priority]",
                    },
                    description: {
                      type: "string",
                      example: "Updated investigation details",
                    },
                    status: {
                      type: "string",
                      enum: [
                        "open",
                        "in_progress",
                        "in_review",
                        "resolved",
                        "closed",
                      ],
                      example: "in_progress",
                    },
                    priority: {
                      type: "string",
                      enum: ["low", "medium", "high", "critical"],
                      example: "high",
                    },
                  },
                },
                example: { status: "in_progress", priority: "high" },
              },
            },
          },
          responses: {
            200: {
              description: "Ticket updated successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Ticket updated successfully",
                    ticket: {
                      _id: "670c53e020261017030",
                      title: "Fix auth token expiration error",
                      status: "in_progress",
                      priority: "high",
                    },
                  },
                },
              },
            },
            400: {
              description: "No valid fields provided or validation error",
            },
            403: { description: "Not allowed to update this ticket" },
            404: { description: "Ticket not found" },
          },
        },
      },
      "/delete/ticket/{ticketId}": {
        post: {
          tags: ["Tickets"],
          summary: "Delete a ticket",
          description:
            "Deletes a ticket. Allowed for Admins, Managers of the associated project, or assigned Employees.",
          operationId: "deleteTicket",
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "ticketId",
              in: "path",
              required: !0,
              description: "Ticket ID to delete",
              schema: { type: "string", example: "670c53e020261017030" },
            },
          ],
          responses: {
            200: {
              description: "Ticket deleted successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Ticket deleted successfully",
                  },
                },
              },
            },
            403: { description: "Not authorized to delete this ticket" },
            404: { description: "Ticket not found" },
          },
        },
      },
      "/admin": {
        get: {
          tags: ["Dashboard"],
          summary: "Admin dashboard user data",
          description:
            "Returns the authenticated admin user's dashboard details. Requires admin role.",
          operationId: "getAdminDashboard",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Admin dashboard data",
              content: {
                "application/json": {
                  example: {
                    message: "Admin deashboard data",
                    success: !0,
                    admin: {
                      _id: "670c53e020261017005",
                      username: "admin_rahul",
                      email: "admin@bmp.com",
                      role: "admin",
                    },
                  },
                },
              },
            },
            403: { description: "Admin role required" },
          },
        },
      },
      "/status/card": {
        get: {
          tags: ["Dashboard"],
          summary: "Dashboard KPI status cards",
          description:
            "Returns high-level metric counts: total employees, total customers, active projects, and open tickets. Requires admin role.",
          operationId: "getStatusCardStats",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Dashboard stats fetched successfully",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    message: "Dashboard status fetch successfully",
                    data: {
                      totalEmployee: 12,
                      totalCustomer: 45,
                      activeProject: 8,
                      openTicket: 14,
                    },
                  },
                },
              },
            },
            403: { description: "Admin role required" },
          },
        },
      },
      "/status/project": {
        get: {
          tags: ["Dashboard"],
          summary: "Project status breakdown summary",
          description:
            "Aggregates projects by status (Active, Planned, On Hold, Completed, Cancelled) formatted for charts with theme colors. Requires admin role.",
          operationId: "getProjectStatusSummary",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Project status data",
              content: {
                "application/json": {
                  example: {
                    success: !0,
                    data: [
                      { name: "Active", value: 4, color: "#059669" },
                      { name: "Planned", value: 3, color: "#d97706" },
                      { name: "On Hold", value: 1, color: "#dc2626" },
                      { name: "Completed", value: 8, color: "#4f46e5" },
                      { name: "Cancelled", value: 0, color: "#6b7280" },
                    ],
                  },
                },
              },
            },
            403: { description: "Admin role required" },
          },
        },
      },
      "/manager": {
        get: {
          tags: ["Dashboard"],
          summary: "Manager dashboard data",
          description:
            "Returns manager information. If requested by an admin, returns all managers; otherwise returns the caller's manager profile.",
          operationId: "getManagerDashboard",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Manager dashboard data",
              content: {
                "application/json": {
                  example: {
                    message: "manager deashboard data",
                    success: !0,
                    manager: {
                      _id: "670c53e020261017010",
                      username: "sarah_manager",
                      role: "manager",
                    },
                  },
                },
              },
            },
            403: { description: "Manager or Admin role required" },
          },
        },
      },
      "/employee": {
        get: {
          tags: ["Dashboard"],
          summary: "Employee dashboard data",
          description:
            "Returns employee information. If requested by admin/manager, returns all employees; otherwise returns the caller's employee profile.",
          operationId: "getEmployeeDashboard",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Employee dashboard data",
              content: {
                "application/json": {
                  example: {
                    message: "employee deashboard data",
                    success: !0,
                    employee: {
                      _id: "670c53e020261017011",
                      username: "alex_dev",
                      role: "employee",
                    },
                  },
                },
              },
            },
            403: { description: "Employee, Manager, or Admin role required" },
          },
        },
      },
      "/customer": {
        get: {
          tags: ["Dashboard"],
          summary: "Customer dashboard data",
          description:
            "Returns customer information. If requested by internal staff (admin/manager/employee), returns all customers; otherwise returns caller's customer profile.",
          operationId: "getCustomerDashboard",
          security: [{ bearerAuth: [] }],
          responses: {
            200: {
              description: "Customer dashboard data",
              content: {
                "application/json": {
                  example: {
                    message: "Customer deashboard data",
                    success: !0,
                    customer: {
                      _id: "670c53e020261017040",
                      username: "john_customer",
                      role: "customer",
                    },
                  },
                },
              },
            },
            401: { description: "Authentication required" },
          },
        },
      },
    },
  };
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $1 = (b) =>
  b == null ? void 0 : b.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ function W1(b, E, C = []) {
  if (E == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: $1(b),
    size: 24,
    node: E,
    ...(C.length > 0 ? { aliases: C } : {}),
  };
}
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = (b) => {
  let E = "",
    C = !1;
  for (const d of b) {
    if (d === "-" || d === "_" || d <= " ") {
      C = E.length > 0;
      continue;
    }
    (E.length === 0 ? (E += d.toLowerCase()) : (E += C ? d.toUpperCase() : d),
      (C = !1));
  }
  return E;
};
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I1 = (b) => {
  const E = F1(b);
  return E.charAt(0).toUpperCase() + E.slice(1);
};
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Of = (...b) =>
  b
    .filter((E, C, d) => !!E && E.trim() !== "" && d.indexOf(E) === C)
    .join(" ")
    .trim();
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ba = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ function _f(b) {
  return b != null;
}
function P1(b, E = {}) {
  var j, de;
  const C = E.attributeNames ?? {},
    d = (te) => C[te] ?? te,
    M = b.size ?? b.width ?? ba.width,
    Y = b.size ?? b.height ?? ba.height,
    K =
      ((j = b.aliases) == null
        ? void 0
        : j
            .filter((te) => typeof te == "string" && te.trim() !== "")
            .map((te) => `lucide-${te}`)) ?? [],
    W = [...(b.name ? [`lucide-${b.name}`] : []), ...K],
    Q =
      ((de = E.className) == null ? void 0 : de.split(" ").filter(Boolean)) ??
      [],
    ie = E.includeDefaultClasses === !1 ? Of(...Q) : Of("lucide", ...W, ...Q),
    z = E.absoluteStrokeWidth
      ? (Number(E.strokeWidth ?? ba["stroke-width"]) *
          Number(b.size ?? b.width ?? ba.width)) /
        Number(E.size ?? E.width ?? ba.width)
      : (E.strokeWidth ?? ba["stroke-width"]);
  return [
    "svg",
    {
      ...Object.entries(ba).reduce((te, [ge, R]) => ((te[d(ge)] = R), te), {}),
      ...("color" in E && E.color && { [d("stroke")]: E.color }),
      ...("size" in E &&
        _f(E.size) && { [d("width")]: E.size, [d("height")]: E.size }),
      ...("width" in E && _f(E.width) && { [d("width")]: E.width }),
      ...("height" in E && _f(E.height) && { [d("height")]: E.height }),
      [d("stroke-width")]: z,
      ...(ie && { [d("class")]: ie }),
      [d("viewBox")]: `0 0 ${M} ${Y}`,
      ...(E.hasA11yProp === !1 ? { [d("aria-hidden")]: "true" } : {}),
      ...("attributes" in E && E.attributes),
    },
    b.node.map((te) => {
      const [ge, R, xe] = te,
        Ue = E.nonScalingStroke
          ? { [d("vector-effect")]: "non-scaling-stroke", ...R }
          : R;
      return xe ? [ge, Ue, xe] : [ge, Ue];
    }),
  ];
}
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ function ev(b, E = {}) {
  return P1(b, {
    ...E,
    attributeNames: {
      ...E.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect",
    },
  });
}
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tv = (b) => {
    for (const E in b)
      if (E.startsWith("aria-") || E === "role" || E === "title") return !0;
    return !1;
  },
  lv = re.createContext({}),
  av = () => re.useContext(lv),
  nv = re.forwardRef(
    (
      {
        color: b,
        size: E,
        width: C,
        height: d,
        strokeWidth: M,
        absoluteStrokeWidth: Y,
        nonScalingStroke: K,
        className: W = "",
        children: Q,
        iconNode: ie = [],
        icon: z = { node: ie, aliases: [], size: 24 },
        ...p
      },
      j,
    ) => {
      const {
          size: de = 24,
          strokeWidth: te = 2,
          absoluteStrokeWidth: ge = !1,
          nonScalingStroke: R = !1,
          color: xe = "currentColor",
          className: Ue = "",
        } = av() ?? {},
        Ct = !!Q || tv(p),
        [ke, $e, qe = []] = ev(z, {
          color: b ?? xe,
          width: C ?? E ?? de,
          height: d ?? E ?? de,
          strokeWidth: M ?? te,
          absoluteStrokeWidth: Y ?? ge,
          nonScalingStroke: K ?? R,
          className: Of(Ue, W),
          hasA11yProp: Ct,
          attributes: p,
        });
      return re.createElement(ke, { ref: j, ...$e }, [
        ...qe.map(([$, le]) => re.createElement($, le)),
        ...(Array.isArray(Q) ? Q : [Q]),
      ]);
    },
  );
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ function Qe(b, E = [], C = []) {
  const d = typeof b == "string" ? W1(b, E, C) : b,
    M = re.forwardRef(({ className: Y, ...K }, W) =>
      re.createElement(nv, { ref: W, icon: d, className: Y, ...K }),
    );
  return (d.name && (M.displayName = I1(d.name)), M);
}
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pm = {
  name: "book-open",
  size: 24,
  node: [
    ["path", { d: "M12 5v16", key: "1f6ucr" }],
    [
      "path",
      {
        d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
        key: "1fyvmf",
      },
    ],
  ],
};
pm.node;
const uv = Qe(pm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
};
bm.node;
const Df = Qe(bm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xm = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
};
xm.node;
const Mf = Qe(xm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sm = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
};
Sm.node;
const Uf = Qe(Sm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = {
  name: "circle-alert",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
  ],
  aliases: ["alert-circle"],
};
Tm.node;
const iv = Qe(Tm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }],
  ],
  aliases: ["check-circle-2"],
};
Nm.node;
const cv = Qe(Nm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Em = {
  name: "clock",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ],
};
Em.node;
const sv = Qe(Em);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jm = {
  name: "copy",
  size: 24,
  node: [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
};
jm.node;
const Rf = Qe(jm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = {
  name: "info",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
};
Am.node;
const fv = Qe(Am);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _m = {
  name: "key-round",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
        key: "1s6t7t",
      },
    ],
    [
      "circle",
      { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" },
    ],
  ],
};
_m.node;
const ov = Qe(_m);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = {
  name: "lock-open",
  size: 24,
  node: [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }],
  ],
  aliases: ["unlock"],
};
zm.node;
const rv = Qe(zm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Om = {
  name: "lock",
  size: 24,
  node: [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
};
Om.node;
const Cm = Qe(Om);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dm = {
  name: "refresh-cw",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
};
Dm.node;
const dv = Qe(Dm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = {
  name: "rotate-ccw",
  size: 24,
  node: [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
};
Mm.node;
const mv = Qe(Mm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
};
Um.node;
const hv = Qe(Um);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = {
  name: "send",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
};
Rm.node;
const yv = Qe(Rm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hm = {
  name: "server",
  size: 24,
  node: [
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9",
      },
    ],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
  ],
};
Hm.node;
const qm = Qe(Hm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = {
  name: "shield-check",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
};
Bm.node;
const wm = Qe(Bm);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = {
  name: "trash",
  size: 24,
  node: [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  aliases: ["trash-2"],
};
Ym.node;
const vv = Qe(Ym);
/**
 * @license lucide-react v1.59.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
};
Gm.node;
const gv = Qe(Gm);
function pv({
  spec: b,
  serverUrl: E,
  onServerUrlChange: C,
  token: d,
  onOpenAuth: M,
  searchTerm: Y,
  onSearchChange: K,
  methodFilter: W,
  onMethodFilterChange: Q,
  onExpandAll: ie,
  onCollapseAll: z,
}) {
  const p = ["ALL", "GET", "POST", "PUT/PATCH", "DELETE"];
  return s.jsx("header", {
    className:
      "sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs",
    children: s.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5",
      children: [
        s.jsxs("div", {
          className: "flex flex-wrap items-center justify-between gap-4",
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                s.jsx("div", {
                  className:
                    "w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20",
                  children: s.jsx(uv, { className: "w-5 h-5" }),
                }),
                s.jsxs("div", {
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        s.jsx("h1", {
                          className:
                            "text-lg font-bold text-slate-900 tracking-tight",
                          children: b.info.title,
                        }),
                        s.jsxs("span", {
                          className:
                            "px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200 uppercase font-mono",
                          children: ["v", b.info.version],
                        }),
                        s.jsx("span", {
                          className:
                            "hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono",
                          children: "OAS 3.0.3",
                        }),
                      ],
                    }),
                    s.jsx("p", {
                      className: "text-xs text-slate-500 hidden sm:block",
                      children: "Interactive API Explorer & Testing Console",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center gap-2.5 sm:gap-3 flex-wrap",
              children: [
                s.jsxs("div", {
                  className:
                    "flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700",
                  children: [
                    s.jsx(qm, { className: "w-3.5 h-3.5 text-slate-500" }),
                    s.jsx("span", {
                      className:
                        "font-semibold text-slate-500 hidden md:inline",
                      children: "Server:",
                    }),
                    s.jsx("select", {
                      value: E,
                      onChange: (j) => C(j.target.value),
                      className:
                        "bg-transparent font-mono text-xs font-medium text-slate-800 focus:outline-none cursor-pointer",
                      children: b.servers.map((j) =>
                        s.jsxs(
                          "option",
                          {
                            value: j.url,
                            children: [j.url, " (", j.description, ")"],
                          },
                          j.url,
                        ),
                      ),
                    }),
                  ],
                }),
                s.jsx("button", {
                  onClick: M,
                  className: `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-xs ${d ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20" : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-300"}`,
                  children: d
                    ? s.jsxs(s.Fragment, {
                        children: [
                          s.jsx(Cm, {
                            className: "w-3.5 h-3.5 text-emerald-200",
                          }),
                          s.jsx("span", { children: "Authorized" }),
                        ],
                      })
                    : s.jsxs(s.Fragment, {
                        children: [
                          s.jsx(rv, {
                            className: "w-3.5 h-3.5 text-slate-400",
                          }),
                          s.jsx("span", { children: "Authorize" }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3",
          children: [
            s.jsxs("div", {
              className: "relative flex-1 min-w-[200px] max-w-md",
              children: [
                s.jsx(hv, {
                  className:
                    "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2",
                }),
                s.jsx("input", {
                  type: "text",
                  value: Y,
                  onChange: (j) => K(j.target.value),
                  placeholder:
                    "Filter by endpoint path, description, or tag...",
                  className:
                    "w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors",
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "flex items-center gap-1 overflow-x-auto py-0.5 custom-scrollbar",
              children: p.map((j) =>
                s.jsx(
                  "button",
                  {
                    onClick: () => Q(j),
                    className: `px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide transition-all ${W === j ? "bg-slate-900 text-white shadow-xs" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
                    children: j,
                  },
                  j,
                ),
              ),
            }),
            s.jsxs("div", {
              className: "flex items-center gap-1.5 text-xs text-slate-600",
              children: [
                s.jsx("button", {
                  onClick: ie,
                  className:
                    "px-2.5 py-1 rounded hover:bg-slate-100 font-medium text-[11px] text-slate-600 hover:text-slate-900 transition-colors",
                  children: "Expand All",
                }),
                s.jsx("span", { className: "text-slate-300", children: "|" }),
                s.jsx("button", {
                  onClick: z,
                  className:
                    "px-2.5 py-1 rounded hover:bg-slate-100 font-medium text-[11px] text-slate-600 hover:text-slate-900 transition-colors",
                  children: "Collapse All",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function zf({ data: b, maxMaxHeight: E = "max-h-96" }) {
  const [C, d] = re.useState(!1),
    M = typeof b == "string" ? b : JSON.stringify(b, null, 2),
    Y = () => {
      (navigator.clipboard.writeText(M), d(!0), setTimeout(() => d(!1), 2e3));
    },
    K = (W) => {
      if (!W) return null;
      try {
        const Q = JSON.parse(W),
          z = JSON.stringify(Q, null, 2).replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            (p) => {
              let j = "text-sky-300";
              return (
                /^"/.test(p)
                  ? /:$/.test(p)
                    ? (j = "text-indigo-300 font-medium")
                    : (j = "text-emerald-300")
                  : /true|false/.test(p)
                    ? (j = "text-amber-300")
                    : /null/.test(p) && (j = "text-rose-300"),
                `<span class="${j}">${p}</span>`
              );
            },
          );
        return s.jsx("div", { dangerouslySetInnerHTML: { __html: z } });
      } catch {
        return s.jsx("div", { children: W });
      }
    };
  return s.jsxs("div", {
    className:
      "relative group rounded-md overflow-hidden bg-slate-900 border border-slate-800 text-slate-100 text-xs font-mono",
    children: [
      s.jsxs("div", {
        className:
          "flex items-center justify-between px-3 py-1.5 bg-slate-800/80 border-b border-slate-700/60 text-slate-400",
        children: [
          s.jsx("span", {
            className: "text-[11px] font-medium tracking-wide",
            children: "application/json",
          }),
          s.jsxs("button", {
            onClick: Y,
            className:
              "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] hover:text-white hover:bg-slate-700/80 transition-colors",
            title: "Copy JSON",
            children: [
              C
                ? s.jsx(Df, { className: "w-3.5 h-3.5 text-emerald-400" })
                : s.jsx(Rf, { className: "w-3.5 h-3.5" }),
              s.jsx("span", { children: C ? "Copied" : "Copy" }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: `p-3.5 overflow-x-auto ${E} custom-scrollbar leading-relaxed`,
        children: s.jsx("pre", { children: K(M) }),
      }),
    ],
  });
}
function bv({
  endpoint: b,
  path: E,
  method: C,
  serverUrl: d,
  token: M,
  methodColor: Y,
}) {
  var _, X, L, ce;
  const [K, W] = re.useState(!1),
    [Q, ie] = re.useState(() => {
      const A = {};
      return (
        b.parameters &&
          b.parameters.forEach((V) => {
            var P;
            A[V.name] = ((P = V.schema) == null ? void 0 : P.example) ?? "";
          }),
        A
      );
    }),
    [z, p] = re.useState(() => {
      var A, V, P;
      return (P =
        (V = (A = b.requestBody) == null ? void 0 : A.content) == null
          ? void 0
          : V["application/json"]) != null && P.example
        ? JSON.stringify(
            b.requestBody.content["application/json"].example,
            null,
            2,
          )
        : "";
    }),
    [j, de] = re.useState(null),
    [te, ge] = re.useState(!1),
    [R, xe] = re.useState(null),
    [Ue, Ct] = re.useState("example"),
    [ke, $e] = re.useState(!1),
    [qe, $] = re.useState(!1),
    le = (A, V) => {
      ie((P) => ({ ...P, [A]: V }));
    },
    dt = (A) => {
      if ((p(A), !A.trim())) {
        de(null);
        return;
      }
      try {
        (JSON.parse(A), de(null));
      } catch (V) {
        de(V.message);
      }
    },
    it = () => {
      var A, V, P;
      (P =
        (V = (A = b.requestBody) == null ? void 0 : A.content) == null
          ? void 0
          : V["application/json"]) != null &&
        P.example &&
        (p(
          JSON.stringify(
            b.requestBody.content["application/json"].example,
            null,
            2,
          ),
        ),
        de(null));
    },
    We = () => {
      let A = E;
      const V = new URLSearchParams();
      b.parameters &&
        b.parameters.forEach((N) => {
          var H;
          const B =
            Q[N.name] ||
            ((H = N.schema) == null ? void 0 : H.example) ||
            `{${N.name}}`;
          N.in === "path"
            ? (A = A.replace(`{${N.name}}`, encodeURIComponent(B)))
            : N.in === "query" && Q[N.name] && V.append(N.name, Q[N.name]);
        });
      const P = d.replace(/\/+$/, ""),
        De = A.startsWith("/") ? A : `/${A}`,
        r = V.toString() ? `?${V.toString()}` : "";
      return `${P}${De}${r}`;
    },
    G = () => {
      const A = We(),
        V = C.toUpperCase();
      let P = `curl -X '${V}' \\
  '${A}'`;
      if (
        ((P += ` \\
  -H 'accept: application/json'`),
        ["POST", "PUT", "PATCH"].includes(V) &&
          z &&
          (P += ` \\
  -H 'Content-Type: application/json'`),
        M &&
          (P += ` \\
  -H 'Authorization: Bearer ${M}'`),
        ["POST", "PUT", "PATCH"].includes(V) && z.trim())
      ) {
        const De = z.replace(/'/g, "'\\''");
        P += ` \\
  -d '${De}'`;
      }
      return P;
    },
    oe = () => {
      (navigator.clipboard.writeText(G()),
        $e(!0),
        setTimeout(() => $e(!1), 2e3));
    },
    Fe = async () => {
      if (j) return;
      ge(!0);
      const A = We(),
        V = C.toUpperCase(),
        P = { Accept: "application/json" };
      (["POST", "PUT", "PATCH"].includes(V) &&
        z &&
        (P["Content-Type"] = "application/json"),
        M && (P.Authorization = `Bearer ${M}`));
      const De = performance.now();
      try {
        const r = { method: V, headers: P, credentials: "include" };
        ["POST", "PUT", "PATCH"].includes(V) && z.trim() && (r.body = z);
        const N = await fetch(A, r),
          B = Math.round(performance.now() - De),
          H = {};
        N.headers.forEach((ye, q) => {
          H[q] = ye;
        });
        let ae;
        ((N.headers.get("content-type") || "").includes("application/json")
          ? (ae = await N.json())
          : (ae = await N.text()),
          xe({
            status: N.status,
            statusText: N.statusText,
            duration: B,
            headers: H,
            data: ae,
            requestUrl: A,
            curl: G(),
            error: !1,
          }));
      } catch (r) {
        const N = Math.round(performance.now() - De);
        xe({
          status: 0,
          statusText: "Network / Connection Error",
          duration: N,
          headers: {},
          data: {
            error: r.message,
            hint:
              "Ensure your BMP Backend server is running at " +
              d +
              " and CORS allows origin.",
          },
          requestUrl: A,
          curl: G(),
          error: !0,
        });
      } finally {
        ge(!1);
      }
    },
    Se = (A) =>
      A >= 200 && A < 300
        ? "bg-emerald-100 text-emerald-800 border-emerald-300"
        : A >= 300 && A < 400
          ? "bg-sky-100 text-sky-800 border-sky-300"
          : A >= 400 && A < 500
            ? "bg-amber-100 text-amber-800 border-amber-300"
            : A >= 500
              ? "bg-rose-100 text-rose-800 border-rose-300"
              : "bg-slate-200 text-slate-800 border-slate-300";
  return s.jsxs("div", {
    className:
      "p-4 md:p-6 bg-white border-t border-slate-200 space-y-6 text-sm",
    children: [
      s.jsxs("div", {
        className:
          "flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-100",
        children: [
          s.jsx("p", {
            className:
              "text-slate-600 text-xs md:text-sm max-w-2xl leading-relaxed",
            children: b.description || b.summary,
          }),
          s.jsx("div", {
            children: K
              ? s.jsx("button", {
                  onClick: () => {
                    (W(!1), xe(null));
                  },
                  className:
                    "px-4 py-1.5 text-xs font-semibold rounded-md border border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors",
                  children: "Cancel",
                })
              : s.jsx("button", {
                  onClick: () => W(!0),
                  className:
                    "px-4 py-1.5 text-xs font-semibold rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs transition-colors",
                  children: "Try it out",
                }),
          }),
        ],
      }),
      b.parameters &&
        b.parameters.length > 0 &&
        s.jsxs("div", {
          className: "space-y-3",
          children: [
            s.jsx("h4", {
              className:
                "text-xs font-bold uppercase tracking-wider text-slate-700",
              children: "Parameters",
            }),
            s.jsx("div", {
              className:
                "overflow-x-auto rounded-lg border border-slate-200 bg-slate-50/50",
              children: s.jsxs("table", {
                className: "w-full text-left text-xs border-collapse",
                children: [
                  s.jsx("thead", {
                    children: s.jsxs("tr", {
                      className:
                        "border-b border-slate-200 bg-slate-100/70 text-slate-600 font-semibold",
                      children: [
                        s.jsx("th", {
                          className: "py-2.5 px-3 w-40",
                          children: "Name",
                        }),
                        s.jsx("th", {
                          className: "py-2.5 px-3",
                          children: "Description",
                        }),
                        K &&
                          s.jsx("th", {
                            className: "py-2.5 px-3 w-56",
                            children: "Value",
                          }),
                      ],
                    }),
                  }),
                  s.jsx("tbody", {
                    className: "divide-y divide-slate-200",
                    children: b.parameters.map((A) => {
                      var V, P, De;
                      return s.jsxs(
                        "tr",
                        {
                          className: "hover:bg-white/80 transition-colors",
                          children: [
                            s.jsxs("td", {
                              className: "py-3 px-3 align-top font-mono",
                              children: [
                                s.jsx("div", {
                                  className: "font-semibold text-slate-900",
                                  children: A.name,
                                }),
                                s.jsxs("div", {
                                  className:
                                    "text-[11px] text-slate-500 mt-0.5",
                                  children: [
                                    ((V = A.schema) == null
                                      ? void 0
                                      : V.type) || "string",
                                    A.required &&
                                      s.jsx("span", {
                                        className:
                                          "text-rose-600 font-bold ml-1",
                                        children: "* required",
                                      }),
                                  ],
                                }),
                                s.jsxs("div", {
                                  className: "text-[10px] text-slate-400",
                                  children: ["(", A.in, ")"],
                                }),
                              ],
                            }),
                            s.jsxs("td", {
                              className: "py-3 px-3 align-top text-slate-600",
                              children: [
                                s.jsx("p", {
                                  children:
                                    A.description || "No description provided.",
                                }),
                                ((P = A.schema) == null ? void 0 : P.example) &&
                                  !K &&
                                  s.jsxs("div", {
                                    className: "mt-1 text-[11px]",
                                    children: [
                                      s.jsx("span", {
                                        className: "text-slate-400",
                                        children: "Example: ",
                                      }),
                                      s.jsx("code", {
                                        className:
                                          "px-1 py-0.5 bg-slate-200/80 rounded font-mono text-slate-700",
                                        children: A.schema.example,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            K &&
                              s.jsx("td", {
                                className: "py-3 px-3 align-top",
                                children: s.jsx("input", {
                                  type: "text",
                                  value: Q[A.name] ?? "",
                                  onChange: (r) => le(A.name, r.target.value),
                                  placeholder:
                                    ((De = A.schema) == null
                                      ? void 0
                                      : De.example) ?? A.name,
                                  className:
                                    "w-full px-2.5 py-1.5 text-xs font-mono rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white",
                                }),
                              }),
                          ],
                        },
                        A.name,
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      b.requestBody &&
        s.jsxs("div", {
          className: "space-y-3",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                s.jsxs("h4", {
                  className:
                    "text-xs font-bold uppercase tracking-wider text-slate-700",
                  children: [
                    "Request Body",
                    b.requestBody.required &&
                      s.jsx("span", {
                        className: "text-rose-600 font-bold ml-1",
                        children: "* required",
                      }),
                  ],
                }),
                K &&
                  s.jsxs("button", {
                    type: "button",
                    onClick: it,
                    className:
                      "inline-flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-800 transition-colors",
                    children: [
                      s.jsx(mv, { className: "w-3 h-3" }),
                      "Reset Sample",
                    ],
                  }),
              ],
            }),
            K
              ? s.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    s.jsx("textarea", {
                      value: z,
                      onChange: (A) => dt(A.target.value),
                      rows: 8,
                      className: `w-full font-mono text-xs p-3 rounded-lg border bg-slate-900 text-emerald-300 custom-scrollbar focus:outline-none focus:ring-2 ${j ? "border-rose-500 focus:ring-rose-500/30" : "border-slate-800 focus:ring-indigo-500/30"}`,
                    }),
                    j &&
                      s.jsxs("div", {
                        className:
                          "flex items-center gap-1.5 text-xs text-rose-600",
                        children: [
                          s.jsx(iv, { className: "w-3.5 h-3.5" }),
                          s.jsxs("span", { children: ["Invalid JSON: ", j] }),
                        ],
                      }),
                  ],
                })
              : s.jsx(zf, {
                  data:
                    ((X =
                      (_ = b.requestBody.content) == null
                        ? void 0
                        : _["application/json"]) == null
                      ? void 0
                      : X.example) ||
                    ((ce =
                      (L = b.requestBody.content) == null
                        ? void 0
                        : L["application/json"]) == null
                      ? void 0
                      : ce.schema) ||
                    {},
                }),
          ],
        }),
      K &&
        s.jsx("div", {
          className: "pt-2",
          children: s.jsx("button", {
            onClick: Fe,
            disabled: te || !!j,
            className: `w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold text-xs text-white shadow-sm transition-all inline-flex items-center justify-center gap-2 ${te || j ? "bg-slate-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 active:scale-98"}`,
            children: te
              ? s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("div", {
                      className:
                        "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin",
                    }),
                    "Executing Request...",
                  ],
                })
              : s.jsxs(s.Fragment, {
                  children: [
                    s.jsx(yv, { className: "w-3.5 h-3.5" }),
                    "Execute",
                  ],
                }),
          }),
        }),
      R &&
        s.jsxs("div", {
          className: "space-y-4 pt-4 border-t-2 border-slate-200",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                s.jsxs("h4", {
                  className:
                    "text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2",
                  children: [
                    s.jsx(qm, { className: "w-4 h-4 text-indigo-600" }),
                    "Live Server Response",
                  ],
                }),
                s.jsx("button", {
                  onClick: () => xe(null),
                  className:
                    "text-xs text-slate-400 hover:text-slate-600 transition-colors",
                  children: "Clear Response",
                }),
              ],
            }),
            s.jsx("div", {
              className: "space-y-2 text-xs",
              children: s.jsxs("div", {
                className:
                  "bg-slate-100 p-2.5 rounded-md border border-slate-200 flex flex-wrap items-center justify-between gap-2",
                children: [
                  s.jsxs("div", {
                    className: "font-mono text-slate-800 truncate",
                    children: [
                      s.jsx("span", {
                        className:
                          "font-semibold text-slate-500 uppercase mr-2",
                        children: C,
                      }),
                      R.requestUrl,
                    ],
                  }),
                  s.jsxs("button", {
                    onClick: oe,
                    className:
                      "inline-flex items-center gap-1 px-2 py-1 rounded bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-[11px] font-medium transition-colors",
                    children: [
                      ke
                        ? s.jsx(Df, { className: "w-3 h-3 text-emerald-600" })
                        : s.jsx(Rf, { className: "w-3 h-3" }),
                      s.jsx("span", {
                        children: ke ? "cURL Copied" : "Copy cURL",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            s.jsxs("div", {
              className: "flex flex-wrap items-center gap-3",
              children: [
                s.jsxs("span", {
                  className: `px-3 py-1 rounded-md text-xs font-bold border ${Se(R.status)}`,
                  children: [R.status, " ", R.statusText],
                }),
                s.jsxs("span", {
                  className:
                    "inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700",
                  children: [
                    s.jsx(sv, { className: "w-3 h-3 text-slate-400" }),
                    R.duration,
                    " ms",
                  ],
                }),
                M
                  ? s.jsx("span", {
                      className:
                        "text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200",
                      children: "Authenticated with Bearer Token",
                    })
                  : s.jsx("span", {
                      className:
                        "text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200",
                      children: "No Token (Public / Cookie Auth)",
                    }),
              ],
            }),
            s.jsxs("div", {
              className: "space-y-1.5",
              children: [
                s.jsx("div", {
                  className: "text-xs font-semibold text-slate-700",
                  children: "Response Body:",
                }),
                s.jsx(zf, { data: R.data, maxMaxHeight: "max-h-[28rem]" }),
              ],
            }),
            Object.keys(R.headers).length > 0 &&
              s.jsxs("div", {
                className:
                  "border border-slate-200 rounded-md overflow-hidden bg-slate-50",
                children: [
                  s.jsxs("button", {
                    type: "button",
                    onClick: () => $(!qe),
                    className:
                      "w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors",
                    children: [
                      s.jsxs("span", {
                        children: [
                          "Response Headers (",
                          Object.keys(R.headers).length,
                          ")",
                        ],
                      }),
                      qe
                        ? s.jsx(Mf, { className: "w-4 h-4 text-slate-500" })
                        : s.jsx(Uf, { className: "w-4 h-4 text-slate-500" }),
                    ],
                  }),
                  qe &&
                    s.jsx("div", {
                      className:
                        "p-3 border-t border-slate-200 bg-white font-mono text-[11px] space-y-1 text-slate-600 max-h-48 overflow-y-auto custom-scrollbar",
                      children: Object.entries(R.headers).map(([A, V]) =>
                        s.jsxs(
                          "div",
                          {
                            className: "flex gap-2",
                            children: [
                              s.jsxs("span", {
                                className: "font-semibold text-slate-800",
                                children: [A, ":"],
                              }),
                              s.jsx("span", {
                                className: "truncate",
                                children: V,
                              }),
                            ],
                          },
                          A,
                        ),
                      ),
                    }),
                ],
              }),
          ],
        }),
      !R &&
        b.responses &&
        s.jsxs("div", {
          className: "space-y-3 pt-2",
          children: [
            s.jsx("h4", {
              className:
                "text-xs font-bold uppercase tracking-wider text-slate-700",
              children: "Documented Responses",
            }),
            s.jsx("div", {
              className: "overflow-x-auto rounded-lg border border-slate-200",
              children: s.jsxs("table", {
                className: "w-full text-left text-xs border-collapse",
                children: [
                  s.jsx("thead", {
                    children: s.jsxs("tr", {
                      className:
                        "border-b border-slate-200 bg-slate-100/70 text-slate-600 font-semibold",
                      children: [
                        s.jsx("th", {
                          className: "py-2.5 px-3 w-28",
                          children: "Code",
                        }),
                        s.jsx("th", {
                          className: "py-2.5 px-3",
                          children: "Description",
                        }),
                      ],
                    }),
                  }),
                  s.jsx("tbody", {
                    className: "divide-y divide-slate-200",
                    children: Object.entries(b.responses).map(([A, V]) => {
                      var P, De;
                      return s.jsxs(
                        "tr",
                        {
                          className: "hover:bg-slate-50/50",
                          children: [
                            s.jsx("td", {
                              className: "py-2.5 px-3 align-top",
                              children: s.jsx("span", {
                                className: `inline-block px-2 py-0.5 rounded font-mono font-bold text-xs border ${Se(parseInt(A, 10))}`,
                                children: A,
                              }),
                            }),
                            s.jsxs("td", {
                              className: "py-2.5 px-3 align-top text-slate-700",
                              children: [
                                s.jsx("p", {
                                  className: "font-medium",
                                  children: V.description,
                                }),
                                ((De =
                                  (P = V.content) == null
                                    ? void 0
                                    : P["application/json"]) == null
                                  ? void 0
                                  : De.example) &&
                                  s.jsx("div", {
                                    className: "mt-2",
                                    children: s.jsx(zf, {
                                      data: V.content["application/json"]
                                        .example,
                                      maxMaxHeight: "max-h-48",
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        },
                        A,
                      );
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
const vm = {
  get: {
    bg: "bg-sky-50",
    border: "border-sky-300",
    hoverBorder: "hover:border-sky-400",
    badgeBg: "bg-sky-600",
    textColor: "text-sky-950",
    accentText: "text-sky-700",
  },
  post: {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    hoverBorder: "hover:border-emerald-400",
    badgeBg: "bg-emerald-600",
    textColor: "text-emerald-950",
    accentText: "text-emerald-700",
  },
  put: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    hoverBorder: "hover:border-amber-400",
    badgeBg: "bg-amber-600",
    textColor: "text-amber-950",
    accentText: "text-amber-700",
  },
  patch: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    hoverBorder: "hover:border-amber-400",
    badgeBg: "bg-amber-500",
    textColor: "text-amber-950",
    accentText: "text-amber-700",
  },
  delete: {
    bg: "bg-rose-50",
    border: "border-rose-300",
    hoverBorder: "hover:border-rose-400",
    badgeBg: "bg-rose-600",
    textColor: "text-rose-950",
    accentText: "text-rose-700",
  },
};
function xv({
  path: b,
  method: E,
  endpoint: C,
  isExpanded: d,
  onToggle: M,
  serverUrl: Y,
  token: K,
}) {
  const [W, Q] = re.useState(!1),
    ie = E.toLowerCase(),
    z = vm[ie] || vm.get,
    p = C.security && C.security.length > 0,
    j = (te) => {
      te.stopPropagation();
      const ge = Y.replace(/\/+$/, ""),
        R = b.startsWith("/") ? b : `/${b}`;
      (navigator.clipboard.writeText(`${ge}${R}`),
        Q(!0),
        setTimeout(() => Q(!1), 2e3));
    },
    de = (te) =>
      te
        .split(/(\{[^}]+\})/g)
        .map((R, xe) =>
          R.startsWith("{") && R.endsWith("}")
            ? s.jsx(
                "span",
                { className: "text-indigo-600 font-bold", children: R },
                xe,
              )
            : s.jsx("span", { children: R }, xe),
        );
  return s.jsxs("div", {
    className: `rounded-lg border transition-all overflow-hidden mb-3 shadow-2xs ${z.border} ${d ? "ring-2 ring-indigo-500/10" : z.hoverBorder}`,
    children: [
      s.jsxs("div", {
        onClick: M,
        className: `flex items-center justify-between gap-3 px-3.5 py-2.5 cursor-pointer select-none transition-colors ${z.bg} hover:brightness-98`,
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-3 min-w-0 flex-1",
            children: [
              s.jsx("span", {
                className: `w-18 shrink-0 text-center py-1 rounded text-xs font-bold text-white tracking-wide uppercase font-mono shadow-2xs ${z.badgeBg}`,
                children: E.toUpperCase(),
              }),
              s.jsx("span", {
                className:
                  "font-mono text-xs md:text-sm font-semibold text-slate-800 truncate",
                children: de(b),
              }),
              s.jsx("span", {
                className:
                  "hidden sm:inline-block text-xs text-slate-500 truncate max-w-md",
                children: C.summary,
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-2 shrink-0",
            children: [
              p &&
                s.jsxs("span", {
                  title: "Requires Bearer JWT Authorization",
                  className:
                    "inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-white/80 border border-slate-200 px-2 py-0.5 rounded shadow-2xs",
                  children: [
                    s.jsx(Cm, { className: "w-3 h-3 text-amber-600" }),
                    s.jsx("span", {
                      className: "hidden md:inline",
                      children: "Protected",
                    }),
                  ],
                }),
              s.jsx("button", {
                type: "button",
                onClick: j,
                title: "Copy API Endpoint URL",
                className:
                  "p-1.5 rounded text-slate-400 hover:text-slate-700 hover:bg-white/70 transition-colors",
                children: W
                  ? s.jsx(Df, { className: "w-3.5 h-3.5 text-emerald-600" })
                  : s.jsx(Rf, { className: "w-3.5 h-3.5" }),
              }),
              s.jsx("button", {
                type: "button",
                className:
                  "p-1 rounded text-slate-500 hover:text-slate-900 transition-transform",
                children: d
                  ? s.jsx(Mf, { className: "w-4 h-4" })
                  : s.jsx(Uf, { className: "w-4 h-4" }),
              }),
            ],
          }),
        ],
      }),
      d &&
        s.jsx(bv, {
          endpoint: C,
          path: b,
          method: E,
          serverUrl: Y,
          token: K,
          methodColor: z,
        }),
    ],
  });
}
function Sv({
  tag: b,
  endpoints: E,
  isOpen: C,
  onToggle: d,
  expandedEndpoints: M,
  onToggleEndpoint: Y,
  serverUrl: K,
  token: W,
}) {
  return s.jsxs("div", {
    className:
      "border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs mb-5 transition-shadow hover:shadow-sm",
    children: [
      s.jsx("div", {
        onClick: d,
        className:
          "flex items-center justify-between px-5 py-4 bg-slate-50/80 hover:bg-slate-100/80 cursor-pointer select-none border-b border-slate-200 transition-colors",
        children: s.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            s.jsx("button", {
              className:
                "text-slate-500 hover:text-slate-800 transition-transform",
              children: C
                ? s.jsx(Mf, { className: "w-5 h-5 text-indigo-600" })
                : s.jsx(Uf, { className: "w-5 h-5 text-slate-400" }),
            }),
            s.jsxs("div", {
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2.5",
                  children: [
                    s.jsx("h3", {
                      className:
                        "text-base font-bold text-slate-900 tracking-tight",
                      children: b.name,
                    }),
                    s.jsxs("span", {
                      className:
                        "px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200",
                      children: [
                        E.length,
                        " ",
                        E.length === 1 ? "endpoint" : "endpoints",
                      ],
                    }),
                  ],
                }),
                b.description &&
                  s.jsx("p", {
                    className: "text-xs text-slate-500 mt-0.5 max-w-2xl",
                    children: b.description,
                  }),
              ],
            }),
          ],
        }),
      }),
      C &&
        s.jsx("div", {
          className: "p-4 md:p-5 bg-slate-50/30 space-y-2",
          children:
            E.length === 0
              ? s.jsx("div", {
                  className: "text-center py-6 text-xs text-slate-400",
                  children:
                    "No endpoints found matching your search in this group.",
                })
              : E.map(({ path: Q, method: ie, endpoint: z }) => {
                  const p = `${ie}-${Q}`,
                    j = !!M[p];
                  return s.jsx(
                    xv,
                    {
                      path: Q,
                      method: ie,
                      endpoint: z,
                      isExpanded: j,
                      onToggle: () => Y(p),
                      serverUrl: K,
                      token: W,
                    },
                    p,
                  );
                }),
        }),
    ],
  });
}
function Tv({
  isOpen: b,
  onClose: E,
  token: C,
  onSaveToken: d,
  onClearToken: M,
}) {
  const [Y, K] = re.useState(C || ""),
    [W, Q] = re.useState(null);
  if (
    (re.useEffect(() => {
      K(C || "");
    }, [C, b]),
    re.useEffect(() => {
      if (!Y.trim()) {
        Q(null);
        return;
      }
      try {
        const p = Y.trim().split(".");
        if (p.length === 3) {
          const j = JSON.parse(
            atob(p[1].replace(/-/g, "+").replace(/_/g, "/")),
          );
          Q(j);
        } else Q(null);
      } catch {
        Q(null);
      }
    }, [Y]),
    !b)
  )
    return null;
  const ie = () => {
      let p = Y.trim();
      (p.toLowerCase().startsWith("bearer ") && (p = p.substring(7).trim()),
        d(p),
        E());
    },
    z = () => {
      (K(""), Q(null), M());
    };
  return s.jsx("div", {
    className:
      "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200",
    children: s.jsxs("div", {
      className:
        "relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden",
      children: [
        s.jsxs("div", {
          className:
            "flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50",
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-2.5 text-slate-800",
              children: [
                s.jsx(ov, { className: "w-5 h-5 text-indigo-600" }),
                s.jsx("h2", {
                  className: "text-lg font-bold",
                  children: "Available Authorizations",
                }),
              ],
            }),
            s.jsx("button", {
              onClick: E,
              className:
                "p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors",
              children: s.jsx(gv, { className: "w-5 h-5" }),
            }),
          ],
        }),
        s.jsx("div", {
          className: "p-6 space-y-5",
          children: s.jsxs("div", {
            className:
              "border border-slate-200 rounded-lg p-4 bg-slate-50/50 space-y-3",
            children: [
              s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "font-semibold text-slate-800 text-sm",
                        children: "bearerAuth",
                      }),
                      s.jsx("span", {
                        className: "text-xs text-slate-500 ml-2",
                        children: "(http, Bearer)",
                      }),
                    ],
                  }),
                  C
                    ? s.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300",
                        children: [
                          s.jsx(cv, { className: "w-3.5 h-3.5" }),
                          "Authorized",
                        ],
                      })
                    : s.jsx("span", {
                        className:
                          "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300",
                        children: "Not Authorized",
                      }),
                ],
              }),
              s.jsxs("p", {
                className: "text-xs text-slate-600",
                children: [
                  "Enter your JWT Bearer token below. It will automatically be included in the ",
                  s.jsx("code", {
                    className:
                      "font-mono bg-slate-200 px-1 py-0.5 rounded text-slate-700",
                    children: "Authorization: Bearer <token>",
                  }),
                  " header on all authenticated endpoints.",
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    className:
                      "block text-xs font-semibold text-slate-700 mb-1.5",
                    children: "Value (JWT Token):",
                  }),
                  s.jsx("textarea", {
                    value: Y,
                    onChange: (p) => K(p.target.value),
                    placeholder: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                    rows: 3,
                    className:
                      "w-full text-xs font-mono p-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 bg-white",
                  }),
                ],
              }),
              W &&
                s.jsxs("div", {
                  className:
                    "p-3 bg-indigo-50/70 border border-indigo-200 rounded-md text-xs space-y-1",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 font-semibold text-indigo-900",
                      children: [
                        s.jsx(wm, { className: "w-4 h-4 text-indigo-600" }),
                        "Decoded Token Claims:",
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "grid grid-cols-2 gap-2 text-slate-700 font-mono text-[11px] mt-1",
                      children: [
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "font-semibold text-slate-900",
                              children: "User ID:",
                            }),
                            " ",
                            W.id || W.userid || "N/A",
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "font-semibold text-slate-900",
                              children: "Role:",
                            }),
                            " ",
                            s.jsx("span", {
                              className:
                                "px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold uppercase text-[10px]",
                              children: W.role || "N/A",
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "font-semibold text-slate-900",
                              children: "Company ID:",
                            }),
                            " ",
                            W.companyId || "N/A",
                          ],
                        }),
                        s.jsxs("div", {
                          children: [
                            s.jsx("span", {
                              className: "font-semibold text-slate-900",
                              children: "Expires:",
                            }),
                            " ",
                            W.exp
                              ? new Date(W.exp * 1e3).toLocaleTimeString()
                              : "N/A",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              s.jsxs("div", {
                className:
                  "flex items-start gap-2 p-2.5 rounded bg-amber-50/80 border border-amber-200 text-amber-900 text-xs",
                children: [
                  s.jsx(fv, {
                    className: "w-4 h-4 text-amber-600 shrink-0 mt-0.5",
                  }),
                  s.jsxs("div", {
                    className: "text-[11px] leading-relaxed",
                    children: [
                      s.jsx("strong", { children: "Tip:" }),
                      " You can obtain a valid JWT token by testing the ",
                      s.jsx("code", {
                        className: "font-mono font-semibold",
                        children: "POST /login",
                      }),
                      " or ",
                      s.jsx("code", {
                        className: "font-mono font-semibold",
                        children: "POST /company",
                      }),
                      " endpoint below and copying the returned token, or log in via the BMP UI.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsxs("div", {
          className:
            "flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50",
          children: [
            s.jsx("div", {
              children:
                C &&
                s.jsxs("button", {
                  type: "button",
                  onClick: z,
                  className:
                    "inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors",
                  children: [
                    s.jsx(vv, { className: "w-3.5 h-3.5" }),
                    "Clear Token",
                  ],
                }),
            }),
            s.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                s.jsx("button", {
                  type: "button",
                  onClick: E,
                  className:
                    "px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200/70 rounded-lg transition-colors",
                  children: "Close",
                }),
                s.jsx("button", {
                  type: "button",
                  onClick: ie,
                  className:
                    "px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors",
                  children: "Authorize",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Nv() {
  const [b, E] = re.useState(Af),
    [C, d] = re.useState(() => {
      var G;
      return (
        localStorage.getItem("bmp_server_url") ||
        ((G = Af.servers[0]) == null ? void 0 : G.url) ||
        "http://localhost:4000/api"
      );
    }),
    [M, Y] = re.useState(() => localStorage.getItem("bmp_jwt_token") || ""),
    [K, W] = re.useState(!1),
    [Q, ie] = re.useState(""),
    [z, p] = re.useState("ALL"),
    [j, de] = re.useState(() => {
      const G = {};
      return (
        Af.tags.forEach((oe) => {
          G[oe.name] = !0;
        }),
        G
      );
    }),
    [te, ge] = re.useState({}),
    [R, xe] = re.useState({ checking: !1, online: null, latency: null }),
    Ue = async () => {
      xe((oe) => ({ ...oe, checking: !0 }));
      const G = performance.now();
      try {
        const oe = C.replace(/\/api\/?$/, ""),
          Fe = await fetch(`${oe}/`, { method: "GET" }),
          Se = Math.round(performance.now() - G);
        xe({ checking: !1, online: Fe.ok, latency: Se });
      } catch {
        xe({ checking: !1, online: !1, latency: null });
      }
    };
  re.useEffect(() => {
    Ue();
  }, [C]);
  const Ct = (G) => {
      (d(G), localStorage.setItem("bmp_server_url", G));
    },
    ke = (G) => {
      (Y(G),
        G
          ? localStorage.setItem("bmp_jwt_token", G)
          : localStorage.removeItem("bmp_jwt_token"));
    },
    $e = () => {
      (Y(""), localStorage.removeItem("bmp_jwt_token"));
    },
    qe = (G) => {
      de((oe) => ({ ...oe, [G]: !oe[G] }));
    },
    $ = (G) => {
      ge((oe) => ({ ...oe, [G]: !oe[G] }));
    },
    le = () => {
      const G = {},
        oe = {};
      (b.tags.forEach((Fe) => {
        G[Fe.name] = !0;
      }),
        Object.entries(b.paths).forEach(([Fe, Se]) => {
          Object.keys(Se).forEach((_) => {
            oe[`${_}-${Fe}`] = !0;
          });
        }),
        de(G),
        ge(oe));
    },
    dt = () => {
      ge({});
    },
    it = re.useMemo(() => {
      const G = {};
      return (
        b.tags.forEach((oe) => {
          G[oe.name] = [];
        }),
        Object.entries(b.paths).forEach(([oe, Fe]) => {
          Object.entries(Fe).forEach(([Se, _]) => {
            var V, P, De;
            const X = ((V = _.tags) == null ? void 0 : V[0]) || "Other";
            G[X] || (G[X] = []);
            const L =
                z === "ALL" ||
                (z === "PUT/PATCH" &&
                  ["put", "patch"].includes(Se.toLowerCase())) ||
                Se.toUpperCase() === z,
              ce = Q.trim().toLowerCase(),
              A =
                !ce ||
                oe.toLowerCase().includes(ce) ||
                ((P = _.summary) == null
                  ? void 0
                  : P.toLowerCase().includes(ce)) ||
                ((De = _.description) == null
                  ? void 0
                  : De.toLowerCase().includes(ce)) ||
                X.toLowerCase().includes(ce);
            L && A && G[X].push({ path: oe, method: Se, endpoint: _ });
          });
        }),
        G
      );
    }, [b, Q, z]),
    We = re.useMemo(() => {
      let G = 0;
      return (
        Object.values(b.paths).forEach((oe) => {
          G += Object.keys(oe).length;
        }),
        G
      );
    }, [b]);
  return s.jsxs("div", {
    className:
      "min-h-screen bg-slate-100/70 text-slate-800 flex flex-col font-sans",
    children: [
      s.jsx(pv, {
        spec: b,
        serverUrl: C,
        onServerUrlChange: Ct,
        token: M,
        onOpenAuth: () => W(!0),
        searchTerm: Q,
        onSearchChange: ie,
        methodFilter: z,
        onMethodFilterChange: p,
        onExpandAll: le,
        onCollapseAll: dt,
      }),
      s.jsxs("main", {
        className:
          "flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6",
        children: [
          s.jsxs("section", {
            className:
              "bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 md:p-8 space-y-6",
            children: [
              s.jsxs("div", {
                className:
                  "flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100",
                children: [
                  s.jsxs("div", {
                    className: "space-y-2 max-w-3xl",
                    children: [
                      s.jsxs("div", {
                        className:
                          "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700",
                        children: [
                          s.jsx(wm, { className: "w-4 h-4 text-indigo-600" }),
                          s.jsx("span", {
                            children: "Enterprise API Documentation Portal",
                          }),
                        ],
                      }),
                      s.jsx("h2", {
                        className:
                          "text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight",
                        children: b.info.title,
                      }),
                      s.jsx("p", {
                        className: "text-slate-600 text-sm leading-relaxed",
                        children: b.info.description,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "shrink-0 bg-slate-50 border border-slate-200 rounded-xl p-4 min-w-[240px] space-y-2",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          s.jsx("span", {
                            className:
                              "text-xs font-semibold text-slate-500 uppercase tracking-wider",
                            children: "Target Backend",
                          }),
                          s.jsx("button", {
                            onClick: Ue,
                            disabled: R.checking,
                            title: "Check connection",
                            className:
                              "text-slate-400 hover:text-slate-600 p-1 rounded transition-colors",
                            children: s.jsx(dv, {
                              className: `w-3.5 h-3.5 ${R.checking ? "animate-spin text-indigo-600" : ""}`,
                            }),
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-xs font-mono font-medium text-slate-800",
                        children: [
                          s.jsx("span", {
                            className: `w-2.5 h-2.5 rounded-full ${R.online === !0 ? "bg-emerald-500 shadow-xs shadow-emerald-500/50" : R.online === !1 ? "bg-rose-500" : "bg-amber-500 animate-pulse"}`,
                          }),
                          s.jsx("span", { className: "truncate", children: C }),
                        ],
                      }),
                      s.jsxs("div", {
                        className:
                          "text-[11px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200/60",
                        children: [
                          s.jsxs("span", {
                            children: [
                              "Status:",
                              " ",
                              s.jsx("strong", {
                                className:
                                  R.online === !0
                                    ? "text-emerald-700"
                                    : R.online === !1
                                      ? "text-rose-600"
                                      : "text-amber-600",
                                children:
                                  R.online === !0
                                    ? "Online"
                                    : R.online === !1
                                      ? "Disconnected"
                                      : "Checking...",
                              }),
                            ],
                          }),
                          R.latency !== null &&
                            s.jsxs("span", {
                              className: "text-slate-400 font-mono",
                              children: [R.latency, " ms"],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs",
                children: [
                  s.jsxs("div", {
                    className:
                      "p-3.5 rounded-xl bg-slate-50 border border-slate-200/70",
                    children: [
                      s.jsx("span", {
                        className: "text-slate-500 font-medium",
                        children: "Total Endpoints",
                      }),
                      s.jsx("div", {
                        className:
                          "text-xl font-bold text-slate-900 mt-1 font-mono",
                        children: We,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "p-3.5 rounded-xl bg-slate-50 border border-slate-200/70",
                    children: [
                      s.jsx("span", {
                        className: "text-slate-500 font-medium",
                        children: "API Groups",
                      }),
                      s.jsx("div", {
                        className:
                          "text-xl font-bold text-slate-900 mt-1 font-mono",
                        children: b.tags.length,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "p-3.5 rounded-xl bg-slate-50 border border-slate-200/70",
                    children: [
                      s.jsx("span", {
                        className: "text-slate-500 font-medium",
                        children: "Authentication",
                      }),
                      s.jsx("div", {
                        className: "text-xl font-bold text-indigo-700 mt-1",
                        children: "JWT Bearer",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "p-3.5 rounded-xl bg-slate-50 border border-slate-200/70",
                    children: [
                      s.jsx("span", {
                        className: "text-slate-500 font-medium",
                        children: "Authorization Status",
                      }),
                      s.jsx("div", {
                        className: "text-xl font-bold mt-1",
                        children: M
                          ? s.jsx("span", {
                              className: "text-emerald-600",
                              children: "Active",
                            })
                          : s.jsx("span", {
                              className: "text-slate-400",
                              children: "Guest",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("section", {
            className: "space-y-4",
            children: b.tags.map((G) => {
              const oe = it[G.name] || [];
              return oe.length === 0 && (Q || z !== "ALL")
                ? null
                : s.jsx(
                    Sv,
                    {
                      tag: G,
                      endpoints: oe,
                      isOpen: !!j[G.name],
                      onToggle: () => qe(G.name),
                      expandedEndpoints: te,
                      onToggleEndpoint: $,
                      serverUrl: C,
                      token: M,
                    },
                    G.name,
                  );
            }),
          }),
        ],
      }),
      s.jsx("footer", {
        className:
          "bg-white border-t border-slate-200 py-6 text-xs text-slate-500 mt-auto",
        children: s.jsxs("div", {
          className:
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3",
          children: [
            s.jsx("p", {
              children:
                "© 2026 Business Management System (BMP). All rights reserved.",
            }),
            s.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                s.jsx("span", {
                  className: "text-slate-400",
                  children: "OpenAPI 3.0.3 Compliant",
                }),
                s.jsx("span", { children: "•" }),
                s.jsx("span", {
                  className: "text-slate-400",
                  children: "Node.js + Express + MongoDB",
                }),
              ],
            }),
          ],
        }),
      }),
      s.jsx(Tv, {
        isOpen: K,
        onClose: () => W(!1),
        token: M,
        onSaveToken: ke,
        onClearToken: $e,
      }),
    ],
  });
}
k1.createRoot(document.getElementById("root")).render(
  s.jsx(G1.StrictMode, { children: s.jsx(Nv, {}) }),
);

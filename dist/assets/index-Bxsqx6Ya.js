(function () {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload")) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) s(E);
  new MutationObserver((E) => {
    for (const D of E)
      if (D.type === "childList")
        for (const Y of D.addedNodes)
          Y.tagName === "LINK" && Y.rel === "modulepreload" && s(Y);
  }).observe(document, { childList: !0, subtree: !0 });
  function b(E) {
    const D = {};
    return (
      E.integrity && (D.integrity = E.integrity),
      E.referrerPolicy && (D.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === "use-credentials"
        ? (D.credentials = "include")
        : E.crossOrigin === "anonymous"
          ? (D.credentials = "omit")
          : (D.credentials = "same-origin"),
      D
    );
  }
  function s(E) {
    if (E.ep) return;
    E.ep = !0;
    const D = b(E);
    fetch(E.href, D);
  }
})();
function c0(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var hf = { exports: {} },
  Tu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr;
function f0() {
  if (xr) return Tu;
  xr = 1;
  var o = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.fragment");
  function b(s, E, D) {
    var Y = null;
    if (
      (D !== void 0 && (Y = "" + D),
      E.key !== void 0 && (Y = "" + E.key),
      "key" in E)
    ) {
      D = {};
      for (var C in E) C !== "key" && (D[C] = E[C]);
    } else D = E;
    return (
      (E = D.ref),
      { $$typeof: o, type: s, key: Y, ref: E !== void 0 ? E : null, props: D }
    );
  }
  return ((Tu.Fragment = v), (Tu.jsx = b), (Tu.jsxs = b), Tu);
}
var Ar;
function s0() {
  return (Ar || ((Ar = 1), (hf.exports = f0())), hf.exports);
}
var f = s0(),
  mf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jr;
function o0() {
  if (jr) return $;
  jr = 1;
  var o = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    E = Symbol.for("react.profiler"),
    D = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    R = Symbol.for("react.lazy"),
    U = Symbol.for("react.activity"),
    M = Symbol.iterator;
  function V(h) {
    return h === null || typeof h != "object"
      ? null
      : ((h = (M && h[M]) || h["@@iterator"]),
        typeof h == "function" ? h : null);
  }
  var W = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    tl = Object.assign,
    ol = {};
  function P(h, N, B) {
    ((this.props = h),
      (this.context = N),
      (this.refs = ol),
      (this.updater = B || W));
  }
  ((P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (h, N) {
      if (typeof h != "object" && typeof h != "function" && h != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, h, N, "setState");
    }),
    (P.prototype.forceUpdate = function (h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    }));
  function Hl() {}
  Hl.prototype = P.prototype;
  function _(h, N, B) {
    ((this.props = h),
      (this.context = N),
      (this.refs = ol),
      (this.updater = B || W));
  }
  var w = (_.prototype = new Hl());
  ((w.constructor = _), tl(w, P.prototype), (w.isPureReactComponent = !0));
  var K = Array.isArray;
  function Yl() {}
  var ll = { H: null, A: null, T: null, S: null },
    q = Object.prototype.hasOwnProperty;
  function ml(h, N, B) {
    var X = B.ref;
    return {
      $$typeof: o,
      type: h,
      key: N,
      ref: X !== void 0 ? X : null,
      props: B,
    };
  }
  function Gl(h, N) {
    return ml(h.type, N, h.props);
  }
  function ut(h) {
    return typeof h == "object" && h !== null && h.$$typeof === o;
  }
  function Xl(h) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      h.replace(/[=:]/g, function (B) {
        return N[B];
      })
    );
  }
  var Ae = /\/+/g;
  function Ht(h, N) {
    return typeof h == "object" && h !== null && h.key != null
      ? Xl("" + h.key)
      : N.toString(36);
  }
  function jt(h) {
    switch (h.status) {
      case "fulfilled":
        return h.value;
      case "rejected":
        throw h.reason;
      default:
        switch (
          (typeof h.status == "string"
            ? h.then(Yl, Yl)
            : ((h.status = "pending"),
              h.then(
                function (N) {
                  h.status === "pending" &&
                    ((h.status = "fulfilled"), (h.value = N));
                },
                function (N) {
                  h.status === "pending" &&
                    ((h.status = "rejected"), (h.reason = N));
                },
              )),
          h.status)
        ) {
          case "fulfilled":
            return h.value;
          case "rejected":
            throw h.reason;
        }
    }
    throw h;
  }
  function x(h, N, B, X, k) {
    var el = typeof h;
    (el === "undefined" || el === "boolean") && (h = null);
    var hl = !1;
    if (h === null) hl = !0;
    else
      switch (el) {
        case "bigint":
        case "string":
        case "number":
          hl = !0;
          break;
        case "object":
          switch (h.$$typeof) {
            case o:
            case v:
              hl = !0;
              break;
            case R:
              return ((hl = h._init), x(hl(h._payload), N, B, X, k));
          }
      }
    if (hl)
      return (
        (k = k(h)),
        (hl = X === "" ? "." + Ht(h, 0) : X),
        K(k)
          ? ((B = ""),
            hl != null && (B = hl.replace(Ae, "$&/") + "/"),
            x(k, N, B, "", function (Da) {
              return Da;
            }))
          : k != null &&
            (ut(k) &&
              (k = Gl(
                k,
                B +
                  (k.key == null || (h && h.key === k.key)
                    ? ""
                    : ("" + k.key).replace(Ae, "$&/") + "/") +
                  hl,
              )),
            N.push(k)),
        1
      );
    hl = 0;
    var Wl = X === "" ? "." : X + ":";
    if (K(h))
      for (var Nl = 0; Nl < h.length; Nl++)
        ((X = h[Nl]), (el = Wl + Ht(X, Nl)), (hl += x(X, N, B, el, k)));
    else if (((Nl = V(h)), typeof Nl == "function"))
      for (h = Nl.call(h), Nl = 0; !(X = h.next()).done; )
        ((X = X.value), (el = Wl + Ht(X, Nl++)), (hl += x(X, N, B, el, k)));
    else if (el === "object") {
      if (typeof h.then == "function") return x(jt(h), N, B, X, k);
      throw (
        (N = String(h)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(h).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return hl;
  }
  function H(h, N, B) {
    if (h == null) return h;
    var X = [],
      k = 0;
    return (
      x(h, X, "", "", function (el) {
        return N.call(B, el, k++);
      }),
      X
    );
  }
  function J(h) {
    if (h._status === -1) {
      var N = h._result;
      ((N = N()),
        N.then(
          function (B) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 1), (h._result = B));
          },
          function (B) {
            (h._status === 0 || h._status === -1) &&
              ((h._status = 2), (h._result = B));
          },
        ),
        h._status === -1 && ((h._status = 0), (h._result = N)));
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var gl =
      typeof reportError == "function"
        ? reportError
        : function (h) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var N = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof h == "object" &&
                  h !== null &&
                  typeof h.message == "string"
                    ? String(h.message)
                    : String(h),
                error: h,
              });
              if (!window.dispatchEvent(N)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", h);
              return;
            }
            console.error(h);
          },
    El = {
      map: H,
      forEach: function (h, N, B) {
        H(
          h,
          function () {
            N.apply(this, arguments);
          },
          B,
        );
      },
      count: function (h) {
        var N = 0;
        return (
          H(h, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (h) {
        return (
          H(h, function (N) {
            return N;
          }) || []
        );
      },
      only: function (h) {
        if (!ut(h))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return h;
      },
    };
  return (
    ($.Activity = U),
    ($.Children = El),
    ($.Component = P),
    ($.Fragment = b),
    ($.Profiler = E),
    ($.PureComponent = _),
    ($.StrictMode = s),
    ($.Suspense = O),
    ($.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ll),
    ($.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (h) {
        return ll.H.useMemoCache(h);
      },
    }),
    ($.cache = function (h) {
      return function () {
        return h.apply(null, arguments);
      };
    }),
    ($.cacheSignal = function () {
      return null;
    }),
    ($.cloneElement = function (h, N, B) {
      if (h == null)
        throw Error(
          "The argument must be a React element, but you passed " + h + ".",
        );
      var X = tl({}, h.props),
        k = h.key;
      if (N != null)
        for (el in (N.key !== void 0 && (k = "" + N.key), N))
          !q.call(N, el) ||
            el === "key" ||
            el === "__self" ||
            el === "__source" ||
            (el === "ref" && N.ref === void 0) ||
            (X[el] = N[el]);
      var el = arguments.length - 2;
      if (el === 1) X.children = B;
      else if (1 < el) {
        for (var hl = Array(el), Wl = 0; Wl < el; Wl++)
          hl[Wl] = arguments[Wl + 2];
        X.children = hl;
      }
      return ml(h.type, k, X);
    }),
    ($.createContext = function (h) {
      return (
        (h = {
          $$typeof: Y,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (h.Provider = h),
        (h.Consumer = { $$typeof: D, _context: h }),
        h
      );
    }),
    ($.createElement = function (h, N, B) {
      var X,
        k = {},
        el = null;
      if (N != null)
        for (X in (N.key !== void 0 && (el = "" + N.key), N))
          q.call(N, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (k[X] = N[X]);
      var hl = arguments.length - 2;
      if (hl === 1) k.children = B;
      else if (1 < hl) {
        for (var Wl = Array(hl), Nl = 0; Nl < hl; Nl++)
          Wl[Nl] = arguments[Nl + 2];
        k.children = Wl;
      }
      if (h && h.defaultProps)
        for (X in ((hl = h.defaultProps), hl))
          k[X] === void 0 && (k[X] = hl[X]);
      return ml(h, el, k);
    }),
    ($.createRef = function () {
      return { current: null };
    }),
    ($.forwardRef = function (h) {
      return { $$typeof: C, render: h };
    }),
    ($.isValidElement = ut),
    ($.lazy = function (h) {
      return { $$typeof: R, _payload: { _status: -1, _result: h }, _init: J };
    }),
    ($.memo = function (h, N) {
      return { $$typeof: y, type: h, compare: N === void 0 ? null : N };
    }),
    ($.startTransition = function (h) {
      var N = ll.T,
        B = {};
      ll.T = B;
      try {
        var X = h(),
          k = ll.S;
        (k !== null && k(B, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(Yl, gl));
      } catch (el) {
        gl(el);
      } finally {
        (N !== null && B.types !== null && (N.types = B.types), (ll.T = N));
      }
    }),
    ($.unstable_useCacheRefresh = function () {
      return ll.H.useCacheRefresh();
    }),
    ($.use = function (h) {
      return ll.H.use(h);
    }),
    ($.useActionState = function (h, N, B) {
      return ll.H.useActionState(h, N, B);
    }),
    ($.useCallback = function (h, N) {
      return ll.H.useCallback(h, N);
    }),
    ($.useContext = function (h) {
      return ll.H.useContext(h);
    }),
    ($.useDebugValue = function () {}),
    ($.useDeferredValue = function (h, N) {
      return ll.H.useDeferredValue(h, N);
    }),
    ($.useEffect = function (h, N) {
      return ll.H.useEffect(h, N);
    }),
    ($.useEffectEvent = function (h) {
      return ll.H.useEffectEvent(h);
    }),
    ($.useId = function () {
      return ll.H.useId();
    }),
    ($.useImperativeHandle = function (h, N, B) {
      return ll.H.useImperativeHandle(h, N, B);
    }),
    ($.useInsertionEffect = function (h, N) {
      return ll.H.useInsertionEffect(h, N);
    }),
    ($.useLayoutEffect = function (h, N) {
      return ll.H.useLayoutEffect(h, N);
    }),
    ($.useMemo = function (h, N) {
      return ll.H.useMemo(h, N);
    }),
    ($.useOptimistic = function (h, N) {
      return ll.H.useOptimistic(h, N);
    }),
    ($.useReducer = function (h, N, B) {
      return ll.H.useReducer(h, N, B);
    }),
    ($.useRef = function (h) {
      return ll.H.useRef(h);
    }),
    ($.useState = function (h) {
      return ll.H.useState(h);
    }),
    ($.useSyncExternalStore = function (h, N, B) {
      return ll.H.useSyncExternalStore(h, N, B);
    }),
    ($.useTransition = function () {
      return ll.H.useTransition();
    }),
    ($.version = "19.2.0"),
    $
  );
}
var Mr;
function pf() {
  return (Mr || ((Mr = 1), (mf.exports = o0())), mf.exports);
}
var rl = pf();
const d0 = c0(rl);
var vf = { exports: {} },
  zu = {},
  yf = { exports: {} },
  gf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr;
function r0() {
  return (
    Nr ||
      ((Nr = 1),
      (function (o) {
        function v(x, H) {
          var J = x.length;
          x.push(H);
          l: for (; 0 < J; ) {
            var gl = (J - 1) >>> 1,
              El = x[gl];
            if (0 < E(El, H)) ((x[gl] = H), (x[J] = El), (J = gl));
            else break l;
          }
        }
        function b(x) {
          return x.length === 0 ? null : x[0];
        }
        function s(x) {
          if (x.length === 0) return null;
          var H = x[0],
            J = x.pop();
          if (J !== H) {
            x[0] = J;
            l: for (var gl = 0, El = x.length, h = El >>> 1; gl < h; ) {
              var N = 2 * (gl + 1) - 1,
                B = x[N],
                X = N + 1,
                k = x[X];
              if (0 > E(B, J))
                X < El && 0 > E(k, B)
                  ? ((x[gl] = k), (x[X] = J), (gl = X))
                  : ((x[gl] = B), (x[N] = J), (gl = N));
              else if (X < El && 0 > E(k, J))
                ((x[gl] = k), (x[X] = J), (gl = X));
              else break l;
            }
          }
          return H;
        }
        function E(x, H) {
          var J = x.sortIndex - H.sortIndex;
          return J !== 0 ? J : x.id - H.id;
        }
        if (
          ((o.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var D = performance;
          o.unstable_now = function () {
            return D.now();
          };
        } else {
          var Y = Date,
            C = Y.now();
          o.unstable_now = function () {
            return Y.now() - C;
          };
        }
        var O = [],
          y = [],
          R = 1,
          U = null,
          M = 3,
          V = !1,
          W = !1,
          tl = !1,
          ol = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          Hl = typeof clearTimeout == "function" ? clearTimeout : null,
          _ = typeof setImmediate < "u" ? setImmediate : null;
        function w(x) {
          for (var H = b(y); H !== null; ) {
            if (H.callback === null) s(y);
            else if (H.startTime <= x)
              (s(y), (H.sortIndex = H.expirationTime), v(O, H));
            else break;
            H = b(y);
          }
        }
        function K(x) {
          if (((tl = !1), w(x), !W))
            if (b(O) !== null) ((W = !0), Yl || ((Yl = !0), Xl()));
            else {
              var H = b(y);
              H !== null && jt(K, H.startTime - x);
            }
        }
        var Yl = !1,
          ll = -1,
          q = 5,
          ml = -1;
        function Gl() {
          return ol ? !0 : !(o.unstable_now() - ml < q);
        }
        function ut() {
          if (((ol = !1), Yl)) {
            var x = o.unstable_now();
            ml = x;
            var H = !0;
            try {
              l: {
                ((W = !1), tl && ((tl = !1), Hl(ll), (ll = -1)), (V = !0));
                var J = M;
                try {
                  t: {
                    for (
                      w(x), U = b(O);
                      U !== null && !(U.expirationTime > x && Gl());
                    ) {
                      var gl = U.callback;
                      if (typeof gl == "function") {
                        ((U.callback = null), (M = U.priorityLevel));
                        var El = gl(U.expirationTime <= x);
                        if (((x = o.unstable_now()), typeof El == "function")) {
                          ((U.callback = El), w(x), (H = !0));
                          break t;
                        }
                        (U === b(O) && s(O), w(x));
                      } else s(O);
                      U = b(O);
                    }
                    if (U !== null) H = !0;
                    else {
                      var h = b(y);
                      (h !== null && jt(K, h.startTime - x), (H = !1));
                    }
                  }
                  break l;
                } finally {
                  ((U = null), (M = J), (V = !1));
                }
                H = void 0;
              }
            } finally {
              H ? Xl() : (Yl = !1);
            }
          }
        }
        var Xl;
        if (typeof _ == "function")
          Xl = function () {
            _(ut);
          };
        else if (typeof MessageChannel < "u") {
          var Ae = new MessageChannel(),
            Ht = Ae.port2;
          ((Ae.port1.onmessage = ut),
            (Xl = function () {
              Ht.postMessage(null);
            }));
        } else
          Xl = function () {
            P(ut, 0);
          };
        function jt(x, H) {
          ll = P(function () {
            x(o.unstable_now());
          }, H);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (o.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (q = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (o.unstable_next = function (x) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = M;
            }
            var J = M;
            M = H;
            try {
              return x();
            } finally {
              M = J;
            }
          }),
          (o.unstable_requestPaint = function () {
            ol = !0;
          }),
          (o.unstable_runWithPriority = function (x, H) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var J = M;
            M = x;
            try {
              return H();
            } finally {
              M = J;
            }
          }),
          (o.unstable_scheduleCallback = function (x, H, J) {
            var gl = o.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? gl + J : gl))
                : (J = gl),
              x)
            ) {
              case 1:
                var El = -1;
                break;
              case 2:
                El = 250;
                break;
              case 5:
                El = 1073741823;
                break;
              case 4:
                El = 1e4;
                break;
              default:
                El = 5e3;
            }
            return (
              (El = J + El),
              (x = {
                id: R++,
                callback: H,
                priorityLevel: x,
                startTime: J,
                expirationTime: El,
                sortIndex: -1,
              }),
              J > gl
                ? ((x.sortIndex = J),
                  v(y, x),
                  b(O) === null &&
                    x === b(y) &&
                    (tl ? (Hl(ll), (ll = -1)) : (tl = !0), jt(K, J - gl)))
                : ((x.sortIndex = El),
                  v(O, x),
                  W || V || ((W = !0), Yl || ((Yl = !0), Xl()))),
              x
            );
          }),
          (o.unstable_shouldYield = Gl),
          (o.unstable_wrapCallback = function (x) {
            var H = M;
            return function () {
              var J = M;
              M = H;
              try {
                return x.apply(this, arguments);
              } finally {
                M = J;
              }
            };
          }));
      })(gf)),
    gf
  );
}
var Dr;
function h0() {
  return (Dr || ((Dr = 1), (yf.exports = r0())), yf.exports);
}
var Sf = { exports: {} },
  $l = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Or;
function m0() {
  if (Or) return $l;
  Or = 1;
  var o = pf();
  function v(O) {
    var y = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        y += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return (
      "Minified React error #" +
      O +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function b() {}
  var s = {
      d: {
        f: b,
        r: function () {
          throw Error(v(522));
        },
        D: b,
        C: b,
        L: b,
        m: b,
        X: b,
        S: b,
        M: b,
      },
      p: 0,
      findDOMNode: null,
    },
    E = Symbol.for("react.portal");
  function D(O, y, R) {
    var U =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: E,
      key: U == null ? null : "" + U,
      children: O,
      containerInfo: y,
      implementation: R,
    };
  }
  var Y = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(O, y) {
    if (O === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    ($l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    ($l.createPortal = function (O, y) {
      var R =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(v(299));
      return D(O, y, null, R);
    }),
    ($l.flushSync = function (O) {
      var y = Y.T,
        R = s.p;
      try {
        if (((Y.T = null), (s.p = 2), O)) return O();
      } finally {
        ((Y.T = y), (s.p = R), s.d.f());
      }
    }),
    ($l.preconnect = function (O, y) {
      typeof O == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        s.d.C(O, y));
    }),
    ($l.prefetchDNS = function (O) {
      typeof O == "string" && s.d.D(O);
    }),
    ($l.preinit = function (O, y) {
      if (typeof O == "string" && y && typeof y.as == "string") {
        var R = y.as,
          U = C(R, y.crossOrigin),
          M = typeof y.integrity == "string" ? y.integrity : void 0,
          V = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        R === "style"
          ? s.d.S(O, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: U,
              integrity: M,
              fetchPriority: V,
            })
          : R === "script" &&
            s.d.X(O, {
              crossOrigin: U,
              integrity: M,
              fetchPriority: V,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    ($l.preinitModule = function (O, y) {
      if (typeof O == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var R = C(y.as, y.crossOrigin);
            s.d.M(O, {
              crossOrigin: R,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && s.d.M(O);
    }),
    ($l.preload = function (O, y) {
      if (
        typeof O == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var R = y.as,
          U = C(R, y.crossOrigin);
        s.d.L(O, R, {
          crossOrigin: U,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    ($l.preloadModule = function (O, y) {
      if (typeof O == "string")
        if (y) {
          var R = C(y.as, y.crossOrigin);
          s.d.m(O, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: R,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else s.d.m(O);
    }),
    ($l.requestFormReset = function (O) {
      s.d.r(O);
    }),
    ($l.unstable_batchedUpdates = function (O, y) {
      return O(y);
    }),
    ($l.useFormState = function (O, y, R) {
      return Y.H.useFormState(O, y, R);
    }),
    ($l.useFormStatus = function () {
      return Y.H.useHostTransitionStatus();
    }),
    ($l.version = "19.2.0"),
    $l
  );
}
var _r;
function v0() {
  if (_r) return Sf.exports;
  _r = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (v) {
        console.error(v);
      }
  }
  return (o(), (Sf.exports = m0()), Sf.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ur;
function y0() {
  if (Ur) return zu;
  Ur = 1;
  var o = h0(),
    v = pf(),
    b = v0();
  function s(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function E(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function D(l) {
    var t = l,
      e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (e = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function Y(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function C(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function O(l) {
    if (D(l) !== l) throw Error(s(188));
  }
  function y(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = D(l)), t === null)) throw Error(s(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return (O(u), l);
          if (n === a) return (O(u), t);
          n = n.sibling;
        }
        throw Error(s(188));
      }
      if (e.return !== a.return) ((e = u), (a = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (e.alternate !== a) throw Error(s(190));
    }
    if (e.tag !== 3) throw Error(s(188));
    return e.stateNode.current === e ? l : t;
  }
  function R(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = R(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var U = Object.assign,
    M = Symbol.for("react.element"),
    V = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    tl = Symbol.for("react.fragment"),
    ol = Symbol.for("react.strict_mode"),
    P = Symbol.for("react.profiler"),
    Hl = Symbol.for("react.consumer"),
    _ = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    Yl = Symbol.for("react.suspense_list"),
    ll = Symbol.for("react.memo"),
    q = Symbol.for("react.lazy"),
    ml = Symbol.for("react.activity"),
    Gl = Symbol.for("react.memo_cache_sentinel"),
    ut = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (ut && l[ut]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ae = Symbol.for("react.client.reference");
  function Ht(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ae ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case tl:
        return "Fragment";
      case P:
        return "Profiler";
      case ol:
        return "StrictMode";
      case K:
        return "Suspense";
      case Yl:
        return "SuspenseList";
      case ml:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case W:
          return "Portal";
        case _:
          return l.displayName || "Context";
        case Hl:
          return (l._context.displayName || "Context") + ".Consumer";
        case w:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case ll:
          return (
            (t = l.displayName || null),
            t !== null ? t : Ht(l.type) || "Memo"
          );
        case q:
          ((t = l._payload), (l = l._init));
          try {
            return Ht(l(t));
          } catch {}
      }
    return null;
  }
  var jt = Array.isArray,
    x = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = { pending: !1, data: null, method: null, action: null },
    gl = [],
    El = -1;
  function h(l) {
    return { current: l };
  }
  function N(l) {
    0 > El || ((l.current = gl[El]), (gl[El] = null), El--);
  }
  function B(l, t) {
    (El++, (gl[El] = l.current), (l.current = t));
  }
  var X = h(null),
    k = h(null),
    el = h(null),
    hl = h(null);
  function Wl(l, t) {
    switch ((B(el, t), B(k, l), B(X, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? wd(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = wd(t)), (l = $d(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (N(X), B(X, l));
  }
  function Nl() {
    (N(X), N(k), N(el));
  }
  function Da(l) {
    l.memoizedState !== null && B(hl, l);
    var t = X.current,
      e = $d(t, l.type);
    t !== e && (B(k, l), B(X, e));
  }
  function ju(l) {
    (k.current === l && (N(X), N(k)),
      hl.current === l && (N(hl), (Su._currentValue = J)));
  }
  var $n, Tf;
  function je(l) {
    if ($n === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        (($n = (t && t[1]) || ""),
          (Tf =
            -1 <
            e.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < e.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      $n +
      l +
      Tf
    );
  }
  var Wn = !1;
  function kn(l, t) {
    if (!l || Wn) return "";
    Wn = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (T) {
                  var p = T;
                }
                Reflect.construct(l, [], j);
              } else {
                try {
                  j.call();
                } catch (T) {
                  p = T;
                }
                l.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                p = T;
              }
              (j = l()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (T) {
            if (T && p && typeof T.stack == "string") return [T.stack, p.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var d = i.split(`
`),
          S = c.split(`
`);
        for (
          u = a = 0;
          a < d.length && !d[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; u < S.length && !S[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === d.length || u === S.length)
          for (
            a = d.length - 1, u = S.length - 1;
            1 <= a && 0 <= u && d[a] !== S[u];
          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (d[a] !== S[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || d[a] !== S[u])) {
                  var z =
                    `
` + d[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", l.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ((Wn = !1), (Error.prepareStackTrace = e));
    }
    return (e = l ? l.displayName || l.name : "") ? je(e) : "";
  }
  function Yr(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return je(l.type);
      case 16:
        return je("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? je("Suspense Fallback")
          : je("Suspense");
      case 19:
        return je("SuspenseList");
      case 0:
      case 15:
        return kn(l.type, !1);
      case 11:
        return kn(l.type.render, !1);
      case 1:
        return kn(l.type, !0);
      case 31:
        return je("Activity");
      default:
        return "";
    }
  }
  function zf(l) {
    try {
      var t = "",
        e = null;
      do ((t += Yr(l, e)), (e = l), (l = l.return));
      while (l);
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
  var Fn = Object.prototype.hasOwnProperty,
    In = o.unstable_scheduleCallback,
    Pn = o.unstable_cancelCallback,
    Gr = o.unstable_shouldYield,
    Xr = o.unstable_requestPaint,
    nt = o.unstable_now,
    Qr = o.unstable_getCurrentPriorityLevel,
    xf = o.unstable_ImmediatePriority,
    Af = o.unstable_UserBlockingPriority,
    Mu = o.unstable_NormalPriority,
    Zr = o.unstable_LowPriority,
    jf = o.unstable_IdlePriority,
    Lr = o.log,
    Vr = o.unstable_setDisableYieldValue,
    Oa = null,
    it = null;
  function le(l) {
    if (
      (typeof Lr == "function" && Vr(l),
      it && typeof it.setStrictMode == "function")
    )
      try {
        it.setStrictMode(Oa, l);
      } catch {}
  }
  var ct = Math.clz32 ? Math.clz32 : wr,
    Kr = Math.log,
    Jr = Math.LN2;
  function wr(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Kr(l) / Jr) | 0)) | 0);
  }
  var Nu = 256,
    Du = 262144,
    Ou = 4194304;
  function Me(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function _u(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return (
      c !== 0
        ? ((a = c & ~n),
          a !== 0
            ? (u = Me(a))
            : ((i &= c),
              i !== 0
                ? (u = Me(i))
                : e || ((e = c & ~l), e !== 0 && (u = Me(e)))))
        : ((c = a & ~n),
          c !== 0
            ? (u = Me(c))
            : i !== 0
              ? (u = Me(i))
              : e || ((e = a & ~l), e !== 0 && (u = Me(e)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (e = t & -t),
            n >= e || (n === 32 && (e & 4194048) !== 0))
          ? t
          : u
    );
  }
  function _a(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function $r(l, t) {
    switch (l) {
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
  function Mf() {
    var l = Ou;
    return ((Ou <<= 1), (Ou & 62914560) === 0 && (Ou = 4194304), l);
  }
  function li(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Ua(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Wr(l, t, e, a, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = e),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= e),
      (l.entangledLanes &= e),
      (l.errorRecoveryDisabledLanes &= e),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      d = l.expirationTimes,
      S = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var z = 31 - ct(e),
        j = 1 << z;
      ((c[z] = 0), (d[z] = -1));
      var p = S[z];
      if (p !== null)
        for (S[z] = null, z = 0; z < p.length; z++) {
          var T = p[z];
          T !== null && (T.lane &= -536870913);
        }
      e &= ~j;
    }
    (a !== 0 && Nf(l, a, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function Nf(l, t, e) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var a = 31 - ct(t);
    ((l.entangledLanes |= t),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (e & 261930)));
  }
  function Df(l, t) {
    var e = (l.entangledLanes |= t);
    for (l = l.entanglements; e; ) {
      var a = 31 - ct(e),
        u = 1 << a;
      ((u & t) | (l[a] & t) && (l[a] |= t), (e &= ~u));
    }
  }
  function Of(l, t) {
    var e = t & -t;
    return (
      (e = (e & 42) !== 0 ? 1 : ti(e)),
      (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    );
  }
  function ti(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ei(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function _f() {
    var l = H.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : gr(l.type));
  }
  function Uf(l, t) {
    var e = H.p;
    try {
      return ((H.p = l), t());
    } finally {
      H.p = e;
    }
  }
  var te = Math.random().toString(36).slice(2),
    Ll = "__reactFiber$" + te,
    Fl = "__reactProps$" + te,
    Ke = "__reactContainer$" + te,
    ai = "__reactEvents$" + te,
    kr = "__reactListeners$" + te,
    Fr = "__reactHandles$" + te,
    Cf = "__reactResources$" + te,
    Ca = "__reactMarker$" + te;
  function ui(l) {
    (delete l[Ll], delete l[Fl], delete l[ai], delete l[kr], delete l[Fr]);
  }
  function Je(l) {
    var t = l[Ll];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if ((t = e[Ke] || e[Ll])) {
        if (
          ((e = t.alternate),
          t.child !== null || (e !== null && e.child !== null))
        )
          for (l = tr(l); l !== null; ) {
            if ((e = l[Ll])) return e;
            l = tr(l);
          }
        return t;
      }
      ((l = e), (e = l.parentNode));
    }
    return null;
  }
  function we(l) {
    if ((l = l[Ll] || l[Ke])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Ra(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(s(33));
  }
  function $e(l) {
    var t = l[Cf];
    return (
      t ||
        (t = l[Cf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ql(l) {
    l[Ca] = !0;
  }
  var Rf = new Set(),
    Hf = {};
  function Ne(l, t) {
    (We(l, t), We(l + "Capture", t));
  }
  function We(l, t) {
    for (Hf[l] = t, l = 0; l < t.length; l++) Rf.add(t[l]);
  }
  var Ir = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Bf = {},
    qf = {};
  function Pr(l) {
    return Fn.call(qf, l)
      ? !0
      : Fn.call(Bf, l)
        ? !1
        : Ir.test(l)
          ? (qf[l] = !0)
          : ((Bf[l] = !0), !1);
  }
  function Uu(l, t, e) {
    if (Pr(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Cu(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Bt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function yt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Yf(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function lh(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((e = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (i) {
            e = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function ni(l) {
    if (!l._valueTracker) {
      var t = Yf(l) ? "checked" : "value";
      l._valueTracker = lh(l, t, "" + l[t]);
    }
  }
  function Gf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(),
      a = "";
    return (
      l && (a = Yf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== e ? (t.setValue(l), !0) : !1
    );
  }
  function Ru(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var th = /[\n"\\]/g;
  function gt(l) {
    return l.replace(th, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ii(l, t, e, a, u, n, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + yt(t))
          : l.value !== "" + yt(t) && (l.value = "" + yt(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? ci(l, i, yt(t))
        : e != null
          ? ci(l, i, yt(e))
          : a != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + yt(c))
        : l.removeAttribute("name"));
  }
  function Xf(l, t, e, a, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || e != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        ni(l);
        return;
      }
      ((e = e != null ? "" + yt(e) : ""),
        (t = t != null ? "" + yt(t) : e),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = c ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      ni(l));
  }
  function ci(l, t, e) {
    (t === "number" && Ru(l.ownerDocument) === l) ||
      l.defaultValue === "" + e ||
      (l.defaultValue = "" + e);
  }
  function ke(l, t, e, a) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < e.length; u++) t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        ((u = t.hasOwnProperty("$" + l[e].value)),
          l[e].selected !== u && (l[e].selected = u),
          u && a && (l[e].defaultSelected = !0));
    } else {
      for (e = "" + yt(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          ((l[u].selected = !0), a && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qf(l, t, e) {
    if (
      t != null &&
      ((t = "" + yt(t)), t !== l.value && (l.value = t), e == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + yt(e) : "";
  }
  function Zf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(s(92));
        if (jt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        e = a;
      }
      (e == null && (e = ""), (t = e));
    }
    ((e = yt(t)),
      (l.defaultValue = e),
      (a = l.textContent),
      a === e && a !== "" && a !== null && (l.value = a),
      ni(l));
  }
  function Fe(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var eh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Lf(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === ""
      ? a
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : a
        ? l.setProperty(t, e)
        : typeof e != "number" || e === 0 || eh.has(t)
          ? t === "float"
            ? (l.cssFloat = e)
            : (l[t] = ("" + e).trim())
          : (l[t] = e + "px");
  }
  function Vf(l, t, e) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((l = l.style), e != null)) {
      for (var a in e)
        !e.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
              ? (l.cssFloat = "")
              : (l[a] = ""));
      for (var u in t)
        ((a = t[u]), t.hasOwnProperty(u) && e[u] !== a && Lf(l, u, a));
    } else for (var n in t) t.hasOwnProperty(n) && Lf(l, n, t[n]);
  }
  function fi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var ah = new Map([
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
    uh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hu(l) {
    return uh.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function qt() {}
  var si = null;
  function oi(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Ie = null,
    Pe = null;
  function Kf(l) {
    var t = we(l);
    if (t && (l = t.stateNode)) {
      var e = l[Fl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (ii(
              l,
              e.value,
              e.defaultValue,
              e.defaultValue,
              e.checked,
              e.defaultChecked,
              e.type,
              e.name,
            ),
            (t = e.name),
            e.type === "radio" && t != null)
          ) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (
              e = e.querySelectorAll(
                'input[name="' + gt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < e.length;
              t++
            ) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[Fl] || null;
                if (!u) throw Error(s(90));
                ii(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < e.length; t++)
              ((a = e[t]), a.form === l.form && Gf(a));
          }
          break l;
        case "textarea":
          Qf(l, e.value, e.defaultValue);
          break l;
        case "select":
          ((t = e.value), t != null && ke(l, !!e.multiple, t, !1));
      }
    }
  }
  var di = !1;
  function Jf(l, t, e) {
    if (di) return l(t, e);
    di = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (
        ((di = !1),
        (Ie !== null || Pe !== null) &&
          (zn(), Ie && ((t = Ie), (l = Pe), (Pe = Ie = null), Kf(t), l)))
      )
        for (t = 0; t < l.length; t++) Kf(l[t]);
    }
  }
  function Ha(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[Fl] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function") throw Error(s(231, t, typeof e));
    return e;
  }
  var Yt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ri = !1;
  if (Yt)
    try {
      var Ba = {};
      (Object.defineProperty(Ba, "passive", {
        get: function () {
          ri = !0;
        },
      }),
        window.addEventListener("test", Ba, Ba),
        window.removeEventListener("test", Ba, Ba));
    } catch {
      ri = !1;
    }
  var ee = null,
    hi = null,
    Bu = null;
  function wf() {
    if (Bu) return Bu;
    var l,
      t = hi,
      e = t.length,
      a,
      u = "value" in ee ? ee.value : ee.textContent,
      n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++);
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === u[n - a]; a++);
    return (Bu = u.slice(l, 1 < a ? 1 - a : void 0));
  }
  function qu(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Yu() {
    return !0;
  }
  function $f() {
    return !1;
  }
  function Il(l) {
    function t(e, a, u, n, i) {
      ((this._reactName = e),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((e = l[c]), (this[c] = e ? e(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Yu
          : $f),
        (this.isPropagationStopped = $f),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : typeof e.returnValue != "unknown" && (e.returnValue = !1),
            (this.isDefaultPrevented = Yu));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
            (this.isPropagationStopped = Yu));
        },
        persist: function () {},
        isPersistent: Yu,
      }),
      t
    );
  }
  var De = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gu = Il(De),
    qa = U({}, De, { view: 0, detail: 0 }),
    nh = Il(qa),
    mi,
    vi,
    Ya,
    Xu = U({}, qa, {
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
      getModifierState: gi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ya &&
              (Ya && l.type === "mousemove"
                ? ((mi = l.screenX - Ya.screenX), (vi = l.screenY - Ya.screenY))
                : (vi = mi = 0),
              (Ya = l)),
            mi);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : vi;
      },
    }),
    Wf = Il(Xu),
    ih = U({}, Xu, { dataTransfer: 0 }),
    ch = Il(ih),
    fh = U({}, qa, { relatedTarget: 0 }),
    yi = Il(fh),
    sh = U({}, De, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    oh = Il(sh),
    dh = U({}, De, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    rh = Il(dh),
    hh = U({}, De, { data: 0 }),
    kf = Il(hh),
    mh = {
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
    vh = {
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
    yh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function gh(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = yh[l])
        ? !!t[l]
        : !1;
  }
  function gi() {
    return gh;
  }
  var Sh = U({}, qa, {
      key: function (l) {
        if (l.key) {
          var t = mh[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = qu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? vh[l.keyCode] || "Unidentified"
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
      getModifierState: gi,
      charCode: function (l) {
        return l.type === "keypress" ? qu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? qu(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    bh = Il(Sh),
    ph = U({}, Xu, {
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
    Ff = Il(ph),
    Eh = U({}, qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: gi,
    }),
    Th = Il(Eh),
    zh = U({}, De, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xh = Il(zh),
    Ah = U({}, Xu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    jh = Il(Ah),
    Mh = U({}, De, { newState: 0, oldState: 0 }),
    Nh = Il(Mh),
    Dh = [9, 13, 27, 32],
    Si = Yt && "CompositionEvent" in window,
    Ga = null;
  Yt && "documentMode" in document && (Ga = document.documentMode);
  var Oh = Yt && "TextEvent" in window && !Ga,
    If = Yt && (!Si || (Ga && 8 < Ga && 11 >= Ga)),
    Pf = " ",
    ls = !1;
  function ts(l, t) {
    switch (l) {
      case "keyup":
        return Dh.indexOf(t.keyCode) !== -1;
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
  function es(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var la = !1;
  function _h(l, t) {
    switch (l) {
      case "compositionend":
        return es(t);
      case "keypress":
        return t.which !== 32 ? null : ((ls = !0), Pf);
      case "textInput":
        return ((l = t.data), l === Pf && ls ? null : l);
      default:
        return null;
    }
  }
  function Uh(l, t) {
    if (la)
      return l === "compositionend" || (!Si && ts(l, t))
        ? ((l = wf()), (Bu = hi = ee = null), (la = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return If && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ch = {
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
  function as(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ch[l.type] : t === "textarea";
  }
  function us(l, t, e, a) {
    (Ie ? (Pe ? Pe.push(a) : (Pe = [a])) : (Ie = a),
      (t = On(t, "onChange")),
      0 < t.length &&
        ((e = new Gu("onChange", "change", null, e, a)),
        l.push({ event: e, listeners: t })));
  }
  var Xa = null,
    Qa = null;
  function Rh(l) {
    Qd(l, 0);
  }
  function Qu(l) {
    var t = Ra(l);
    if (Gf(t)) return l;
  }
  function ns(l, t) {
    if (l === "change") return t;
  }
  var is = !1;
  if (Yt) {
    var bi;
    if (Yt) {
      var pi = "oninput" in document;
      if (!pi) {
        var cs = document.createElement("div");
        (cs.setAttribute("oninput", "return;"),
          (pi = typeof cs.oninput == "function"));
      }
      bi = pi;
    } else bi = !1;
    is = bi && (!document.documentMode || 9 < document.documentMode);
  }
  function fs() {
    Xa && (Xa.detachEvent("onpropertychange", ss), (Qa = Xa = null));
  }
  function ss(l) {
    if (l.propertyName === "value" && Qu(Qa)) {
      var t = [];
      (us(t, Qa, l, oi(l)), Jf(Rh, t));
    }
  }
  function Hh(l, t, e) {
    l === "focusin"
      ? (fs(), (Xa = t), (Qa = e), Xa.attachEvent("onpropertychange", ss))
      : l === "focusout" && fs();
  }
  function Bh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Qu(Qa);
  }
  function qh(l, t) {
    if (l === "click") return Qu(t);
  }
  function Yh(l, t) {
    if (l === "input" || l === "change") return Qu(t);
  }
  function Gh(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var ft = typeof Object.is == "function" ? Object.is : Gh;
  function Za(l, t) {
    if (ft(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var e = Object.keys(l),
      a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Fn.call(t, u) || !ft(l[u], t[u])) return !1;
    }
    return !0;
  }
  function os(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ds(l, t) {
    var e = os(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (((a = l + e.textContent.length), l <= t && a >= t))
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = os(e);
    }
  }
  function rs(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? rs(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function hs(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ru(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Ru(l.document);
    }
    return t;
  }
  function Ei(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Xh = Yt && "documentMode" in document && 11 >= document.documentMode,
    ta = null,
    Ti = null,
    La = null,
    zi = !1;
  function ms(l, t, e) {
    var a =
      e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    zi ||
      ta == null ||
      ta !== Ru(a) ||
      ((a = ta),
      "selectionStart" in a && Ei(a)
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
      (La && Za(La, a)) ||
        ((La = a),
        (a = On(Ti, "onSelect")),
        0 < a.length &&
          ((t = new Gu("onSelect", "select", null, t, e)),
          l.push({ event: t, listeners: a }),
          (t.target = ta))));
  }
  function Oe(l, t) {
    var e = {};
    return (
      (e[l.toLowerCase()] = t.toLowerCase()),
      (e["Webkit" + l] = "webkit" + t),
      (e["Moz" + l] = "moz" + t),
      e
    );
  }
  var ea = {
      animationend: Oe("Animation", "AnimationEnd"),
      animationiteration: Oe("Animation", "AnimationIteration"),
      animationstart: Oe("Animation", "AnimationStart"),
      transitionrun: Oe("Transition", "TransitionRun"),
      transitionstart: Oe("Transition", "TransitionStart"),
      transitioncancel: Oe("Transition", "TransitionCancel"),
      transitionend: Oe("Transition", "TransitionEnd"),
    },
    xi = {},
    vs = {};
  Yt &&
    ((vs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ea.animationend.animation,
      delete ea.animationiteration.animation,
      delete ea.animationstart.animation),
    "TransitionEvent" in window || delete ea.transitionend.transition);
  function _e(l) {
    if (xi[l]) return xi[l];
    if (!ea[l]) return l;
    var t = ea[l],
      e;
    for (e in t) if (t.hasOwnProperty(e) && e in vs) return (xi[l] = t[e]);
    return l;
  }
  var ys = _e("animationend"),
    gs = _e("animationiteration"),
    Ss = _e("animationstart"),
    Qh = _e("transitionrun"),
    Zh = _e("transitionstart"),
    Lh = _e("transitioncancel"),
    bs = _e("transitionend"),
    ps = new Map(),
    Ai =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ai.push("scrollEnd");
  function Mt(l, t) {
    (ps.set(l, t), Ne(t, [l]));
  }
  var Zu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    St = [],
    aa = 0,
    ji = 0;
  function Lu() {
    for (var l = aa, t = (ji = aa = 0); t < l; ) {
      var e = St[t];
      St[t++] = null;
      var a = St[t];
      St[t++] = null;
      var u = St[t];
      St[t++] = null;
      var n = St[t];
      if (((St[t++] = null), a !== null && u !== null)) {
        var i = a.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (a.pending = u));
      }
      n !== 0 && Es(e, u, n);
    }
  }
  function Vu(l, t, e, a) {
    ((St[aa++] = l),
      (St[aa++] = t),
      (St[aa++] = e),
      (St[aa++] = a),
      (ji |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a));
  }
  function Mi(l, t, e, a) {
    return (Vu(l, t, e, a), Ku(l));
  }
  function Ue(l, t) {
    return (Vu(l, null, null, t), Ku(l));
  }
  function Es(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= e),
        (a = n.alternate),
        a !== null && (a.childLanes |= e),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - ct(e)),
          (l = n.hiddenUpdates),
          (a = l[u]),
          a === null ? (l[u] = [t]) : a.push(t),
          (t.lane = e | 536870912)),
        n)
      : null;
  }
  function Ku(l) {
    if (50 < du) throw ((du = 0), (Bc = null), Error(s(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ua = {};
  function Vh(l, t, e, a) {
    ((this.tag = l),
      (this.key = e),
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
  function st(l, t, e, a) {
    return new Vh(l, t, e, a);
  }
  function Ni(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Gt(l, t) {
    var e = l.alternate;
    return (
      e === null
        ? ((e = st(l.tag, t, l.key, l.mode)),
          (e.elementType = l.elementType),
          (e.type = l.type),
          (e.stateNode = l.stateNode),
          (e.alternate = l),
          (l.alternate = e))
        : ((e.pendingProps = t),
          (e.type = l.type),
          (e.flags = 0),
          (e.subtreeFlags = 0),
          (e.deletions = null)),
      (e.flags = l.flags & 65011712),
      (e.childLanes = l.childLanes),
      (e.lanes = l.lanes),
      (e.child = l.child),
      (e.memoizedProps = l.memoizedProps),
      (e.memoizedState = l.memoizedState),
      (e.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (e.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (e.sibling = l.sibling),
      (e.index = l.index),
      (e.ref = l.ref),
      (e.refCleanup = l.refCleanup),
      e
    );
  }
  function Ts(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return (
      e === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = e.childLanes),
          (l.lanes = e.lanes),
          (l.child = e.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = e.memoizedProps),
          (l.memoizedState = e.memoizedState),
          (l.updateQueue = e.updateQueue),
          (l.type = e.type),
          (t = e.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ju(l, t, e, a, u, n) {
    var i = 0;
    if (((a = l), typeof l == "function")) Ni(l) && (i = 1);
    else if (typeof l == "string")
      i = Wm(l, e, X.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case ml:
          return (
            (l = st(31, e, t, u)),
            (l.elementType = ml),
            (l.lanes = n),
            l
          );
        case tl:
          return Ce(e.children, u, n, t);
        case ol:
          ((i = 8), (u |= 24));
          break;
        case P:
          return (
            (l = st(12, e, t, u | 2)),
            (l.elementType = P),
            (l.lanes = n),
            l
          );
        case K:
          return ((l = st(13, e, t, u)), (l.elementType = K), (l.lanes = n), l);
        case Yl:
          return (
            (l = st(19, e, t, u)),
            (l.elementType = Yl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case _:
                i = 10;
                break l;
              case Hl:
                i = 9;
                break l;
              case w:
                i = 11;
                break l;
              case ll:
                i = 14;
                break l;
              case q:
                ((i = 16), (a = null));
                break l;
            }
          ((i = 29),
            (e = Error(s(130, l === null ? "null" : typeof l, ""))),
            (a = null));
      }
    return (
      (t = st(i, e, t, u)),
      (t.elementType = l),
      (t.type = a),
      (t.lanes = n),
      t
    );
  }
  function Ce(l, t, e, a) {
    return ((l = st(7, l, a, t)), (l.lanes = e), l);
  }
  function Di(l, t, e) {
    return ((l = st(6, l, null, t)), (l.lanes = e), l);
  }
  function zs(l) {
    var t = st(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Oi(l, t, e) {
    return (
      (t = st(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = e),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var xs = new WeakMap();
  function bt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = xs.get(l);
      return e !== void 0
        ? e
        : ((t = { value: l, source: t, stack: zf(t) }), xs.set(l, t), t);
    }
    return { value: l, source: t, stack: zf(t) };
  }
  var na = [],
    ia = 0,
    wu = null,
    Va = 0,
    pt = [],
    Et = 0,
    ae = null,
    _t = 1,
    Ut = "";
  function Xt(l, t) {
    ((na[ia++] = Va), (na[ia++] = wu), (wu = l), (Va = t));
  }
  function As(l, t, e) {
    ((pt[Et++] = _t), (pt[Et++] = Ut), (pt[Et++] = ae), (ae = l));
    var a = _t;
    l = Ut;
    var u = 32 - ct(a) - 1;
    ((a &= ~(1 << u)), (e += 1));
    var n = 32 - ct(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (u -= i),
        (_t = (1 << (32 - ct(t) + u)) | (e << u) | a),
        (Ut = n + l));
    } else ((_t = (1 << n) | (e << u) | a), (Ut = l));
  }
  function _i(l) {
    l.return !== null && (Xt(l, 1), As(l, 1, 0));
  }
  function Ui(l) {
    for (; l === wu; )
      ((wu = na[--ia]), (na[ia] = null), (Va = na[--ia]), (na[ia] = null));
    for (; l === ae; )
      ((ae = pt[--Et]),
        (pt[Et] = null),
        (Ut = pt[--Et]),
        (pt[Et] = null),
        (_t = pt[--Et]),
        (pt[Et] = null));
  }
  function js(l, t) {
    ((pt[Et++] = _t),
      (pt[Et++] = Ut),
      (pt[Et++] = ae),
      (_t = t.id),
      (Ut = t.overflow),
      (ae = l));
  }
  var Vl = null,
    zl = null,
    cl = !1,
    ue = null,
    Tt = !1,
    Ci = Error(s(519));
  function ne(l) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Ka(bt(t, l)), Ci);
  }
  function Ms(l) {
    var t = l.stateNode,
      e = l.type,
      a = l.memoizedProps;
    switch (((t[Ll] = l), (t[Fl] = a), e)) {
      case "dialog":
        (ul("cancel", t), ul("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        ul("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < hu.length; e++) ul(hu[e], t);
        break;
      case "source":
        ul("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (ul("error", t), ul("load", t));
        break;
      case "details":
        ul("toggle", t);
        break;
      case "input":
        (ul("invalid", t),
          Xf(
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
        ul("invalid", t);
        break;
      case "textarea":
        (ul("invalid", t), Zf(t, a.value, a.defaultValue, a.children));
    }
    ((e = a.children),
      (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
      t.textContent === "" + e ||
      a.suppressHydrationWarning === !0 ||
      Kd(t.textContent, e)
        ? (a.popover != null && (ul("beforetoggle", t), ul("toggle", t)),
          a.onScroll != null && ul("scroll", t),
          a.onScrollEnd != null && ul("scrollend", t),
          a.onClick != null && (t.onclick = qt),
          (t = !0))
        : (t = !1),
      t || ne(l, !0));
  }
  function Ns(l) {
    for (Vl = l.return; Vl; )
      switch (Vl.tag) {
        case 5:
        case 31:
        case 13:
          Tt = !1;
          return;
        case 27:
        case 3:
          Tt = !0;
          return;
        default:
          Vl = Vl.return;
      }
  }
  function ca(l) {
    if (l !== Vl) return !1;
    if (!cl) return (Ns(l), (cl = !0), !1);
    var t = l.tag,
      e;
    if (
      ((e = t !== 3 && t !== 27) &&
        ((e = t === 5) &&
          ((e = l.type),
          (e =
            !(e !== "form" && e !== "button") || Fc(l.type, l.memoizedProps))),
        (e = !e)),
      e && zl && ne(l),
      Ns(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(s(317));
      zl = lr(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(s(317));
      zl = lr(l);
    } else
      t === 27
        ? ((t = zl), be(l.type) ? ((l = ef), (ef = null), (zl = l)) : (zl = t))
        : (zl = Vl ? xt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Re() {
    ((zl = Vl = null), (cl = !1));
  }
  function Ri() {
    var l = ue;
    return (
      l !== null &&
        (et === null ? (et = l) : et.push.apply(et, l), (ue = null)),
      l
    );
  }
  function Ka(l) {
    ue === null ? (ue = [l]) : ue.push(l);
  }
  var Hi = h(null),
    He = null,
    Qt = null;
  function ie(l, t, e) {
    (B(Hi, t._currentValue), (t._currentValue = e));
  }
  function Zt(l) {
    ((l._currentValue = Hi.current), N(Hi));
  }
  function Bi(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        l === e)
      )
        break;
      l = l.return;
    }
  }
  function qi(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var d = 0; d < t.length; d++)
            if (c.context === t[d]) {
              ((n.lanes |= e),
                (c = n.alternate),
                c !== null && (c.lanes |= e),
                Bi(n.return, e, l),
                a || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(s(341));
        ((i.lanes |= e),
          (n = i.alternate),
          n !== null && (n.lanes |= e),
          Bi(i, e, l),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function fa(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(s(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          ft(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === hl.current) {
        if (((i = u.alternate), i === null)) throw Error(s(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(Su) : (l = [Su]));
      }
      u = u.return;
    }
    (l !== null && qi(t, l, e, a), (t.flags |= 262144));
  }
  function $u(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ft(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Be(l) {
    ((He = l),
      (Qt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Kl(l) {
    return Ds(He, l);
  }
  function Wu(l, t) {
    return (He === null && Be(l), Ds(l, t));
  }
  function Ds(l, t) {
    var e = t._currentValue;
    if (((t = { context: t, memoizedValue: e, next: null }), Qt === null)) {
      if (l === null) throw Error(s(308));
      ((Qt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Qt = Qt.next = t;
    return e;
  }
  var Kh =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (e, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (e) {
                  return e();
                }));
            };
          },
    Jh = o.unstable_scheduleCallback,
    wh = o.unstable_NormalPriority,
    _l = {
      $$typeof: _,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Yi() {
    return { controller: new Kh(), data: new Map(), refCount: 0 };
  }
  function Ja(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Jh(wh, function () {
          l.controller.abort();
        }));
  }
  var wa = null,
    Gi = 0,
    sa = 0,
    oa = null;
  function $h(l, t) {
    if (wa === null) {
      var e = (wa = []);
      ((Gi = 0),
        (sa = Zc()),
        (oa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            e.push(a);
          },
        }));
    }
    return (Gi++, t.then(Os, Os), t);
  }
  function Os() {
    if (--Gi === 0 && wa !== null) {
      oa !== null && (oa.status = "fulfilled");
      var l = wa;
      ((wa = null), (sa = 0), (oa = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Wh(l, t) {
    var e = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          e.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var u = 0; u < e.length; u++) (0, e[u])(t);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
            (0, e[u])(void 0);
        },
      ),
      a
    );
  }
  var _s = x.S;
  x.S = function (l, t) {
    ((vd = nt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        $h(l, t),
      _s !== null && _s(l, t));
  };
  var qe = h(null);
  function Xi() {
    var l = qe.current;
    return l !== null ? l : Tl.pooledCache;
  }
  function ku(l, t) {
    t === null ? B(qe, qe.current) : B(qe, t.pool);
  }
  function Us() {
    var l = Xi();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var da = Error(s(460)),
    Qi = Error(s(474)),
    Fu = Error(s(542)),
    Iu = { then: function () {} };
  function Cs(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Rs(l, t, e) {
    switch (
      ((e = l[e]),
      e === void 0 ? l.push(t) : e !== t && (t.then(qt, qt), (t = e)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Bs(l), l);
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (((l = Tl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(s(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Bs(l), l);
        }
        throw ((Ge = t), da);
    }
  }
  function Ye(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function"
        ? ((Ge = e), da)
        : e;
    }
  }
  var Ge = null;
  function Hs() {
    if (Ge === null) throw Error(s(459));
    var l = Ge;
    return ((Ge = null), l);
  }
  function Bs(l) {
    if (l === da || l === Fu) throw Error(s(483));
  }
  var ra = null,
    $a = 0;
  function Pu(l) {
    var t = $a;
    return (($a += 1), ra === null && (ra = []), Rs(ra, l, t));
  }
  function Wa(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function ln(l, t) {
    throw t.$$typeof === M
      ? Error(s(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function qs(l) {
    function t(m, r) {
      if (l) {
        var g = m.deletions;
        g === null ? ((m.deletions = [r]), (m.flags |= 16)) : g.push(r);
      }
    }
    function e(m, r) {
      if (!l) return null;
      for (; r !== null; ) (t(m, r), (r = r.sibling));
      return null;
    }
    function a(m) {
      for (var r = new Map(); m !== null; )
        (m.key !== null ? r.set(m.key, m) : r.set(m.index, m), (m = m.sibling));
      return r;
    }
    function u(m, r) {
      return ((m = Gt(m, r)), (m.index = 0), (m.sibling = null), m);
    }
    function n(m, r, g) {
      return (
        (m.index = g),
        l
          ? ((g = m.alternate),
            g !== null
              ? ((g = g.index), g < r ? ((m.flags |= 67108866), r) : g)
              : ((m.flags |= 67108866), r))
          : ((m.flags |= 1048576), r)
      );
    }
    function i(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function c(m, r, g, A) {
      return r === null || r.tag !== 6
        ? ((r = Di(g, m.mode, A)), (r.return = m), r)
        : ((r = u(r, g)), (r.return = m), r);
    }
    function d(m, r, g, A) {
      var Z = g.type;
      return Z === tl
        ? z(m, r, g.props.children, A, g.key)
        : r !== null &&
            (r.elementType === Z ||
              (typeof Z == "object" &&
                Z !== null &&
                Z.$$typeof === q &&
                Ye(Z) === r.type))
          ? ((r = u(r, g.props)), Wa(r, g), (r.return = m), r)
          : ((r = Ju(g.type, g.key, g.props, null, m.mode, A)),
            Wa(r, g),
            (r.return = m),
            r);
    }
    function S(m, r, g, A) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== g.containerInfo ||
        r.stateNode.implementation !== g.implementation
        ? ((r = Oi(g, m.mode, A)), (r.return = m), r)
        : ((r = u(r, g.children || [])), (r.return = m), r);
    }
    function z(m, r, g, A, Z) {
      return r === null || r.tag !== 7
        ? ((r = Ce(g, m.mode, A, Z)), (r.return = m), r)
        : ((r = u(r, g)), (r.return = m), r);
    }
    function j(m, r, g) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return ((r = Di("" + r, m.mode, g)), (r.return = m), r);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case V:
            return (
              (g = Ju(r.type, r.key, r.props, null, m.mode, g)),
              Wa(g, r),
              (g.return = m),
              g
            );
          case W:
            return ((r = Oi(r, m.mode, g)), (r.return = m), r);
          case q:
            return ((r = Ye(r)), j(m, r, g));
        }
        if (jt(r) || Xl(r))
          return ((r = Ce(r, m.mode, g, null)), (r.return = m), r);
        if (typeof r.then == "function") return j(m, Pu(r), g);
        if (r.$$typeof === _) return j(m, Wu(m, r), g);
        ln(m, r);
      }
      return null;
    }
    function p(m, r, g, A) {
      var Z = r !== null ? r.key : null;
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return Z !== null ? null : c(m, r, "" + g, A);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case V:
            return g.key === Z ? d(m, r, g, A) : null;
          case W:
            return g.key === Z ? S(m, r, g, A) : null;
          case q:
            return ((g = Ye(g)), p(m, r, g, A));
        }
        if (jt(g) || Xl(g)) return Z !== null ? null : z(m, r, g, A, null);
        if (typeof g.then == "function") return p(m, r, Pu(g), A);
        if (g.$$typeof === _) return p(m, r, Wu(m, g), A);
        ln(m, g);
      }
      return null;
    }
    function T(m, r, g, A, Z) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((m = m.get(g) || null), c(r, m, "" + A, Z));
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case V:
            return (
              (m = m.get(A.key === null ? g : A.key) || null),
              d(r, m, A, Z)
            );
          case W:
            return (
              (m = m.get(A.key === null ? g : A.key) || null),
              S(r, m, A, Z)
            );
          case q:
            return ((A = Ye(A)), T(m, r, g, A, Z));
        }
        if (jt(A) || Xl(A))
          return ((m = m.get(g) || null), z(r, m, A, Z, null));
        if (typeof A.then == "function") return T(m, r, g, Pu(A), Z);
        if (A.$$typeof === _) return T(m, r, g, Wu(r, A), Z);
        ln(r, A);
      }
      return null;
    }
    function G(m, r, g, A) {
      for (
        var Z = null, fl = null, Q = r, I = (r = 0), il = null;
        Q !== null && I < g.length;
        I++
      ) {
        Q.index > I ? ((il = Q), (Q = null)) : (il = Q.sibling);
        var sl = p(m, Q, g[I], A);
        if (sl === null) {
          Q === null && (Q = il);
          break;
        }
        (l && Q && sl.alternate === null && t(m, Q),
          (r = n(sl, r, I)),
          fl === null ? (Z = sl) : (fl.sibling = sl),
          (fl = sl),
          (Q = il));
      }
      if (I === g.length) return (e(m, Q), cl && Xt(m, I), Z);
      if (Q === null) {
        for (; I < g.length; I++)
          ((Q = j(m, g[I], A)),
            Q !== null &&
              ((r = n(Q, r, I)),
              fl === null ? (Z = Q) : (fl.sibling = Q),
              (fl = Q)));
        return (cl && Xt(m, I), Z);
      }
      for (Q = a(Q); I < g.length; I++)
        ((il = T(Q, m, I, g[I], A)),
          il !== null &&
            (l &&
              il.alternate !== null &&
              Q.delete(il.key === null ? I : il.key),
            (r = n(il, r, I)),
            fl === null ? (Z = il) : (fl.sibling = il),
            (fl = il)));
      return (
        l &&
          Q.forEach(function (xe) {
            return t(m, xe);
          }),
        cl && Xt(m, I),
        Z
      );
    }
    function L(m, r, g, A) {
      if (g == null) throw Error(s(151));
      for (
        var Z = null, fl = null, Q = r, I = (r = 0), il = null, sl = g.next();
        Q !== null && !sl.done;
        I++, sl = g.next()
      ) {
        Q.index > I ? ((il = Q), (Q = null)) : (il = Q.sibling);
        var xe = p(m, Q, sl.value, A);
        if (xe === null) {
          Q === null && (Q = il);
          break;
        }
        (l && Q && xe.alternate === null && t(m, Q),
          (r = n(xe, r, I)),
          fl === null ? (Z = xe) : (fl.sibling = xe),
          (fl = xe),
          (Q = il));
      }
      if (sl.done) return (e(m, Q), cl && Xt(m, I), Z);
      if (Q === null) {
        for (; !sl.done; I++, sl = g.next())
          ((sl = j(m, sl.value, A)),
            sl !== null &&
              ((r = n(sl, r, I)),
              fl === null ? (Z = sl) : (fl.sibling = sl),
              (fl = sl)));
        return (cl && Xt(m, I), Z);
      }
      for (Q = a(Q); !sl.done; I++, sl = g.next())
        ((sl = T(Q, m, I, sl.value, A)),
          sl !== null &&
            (l &&
              sl.alternate !== null &&
              Q.delete(sl.key === null ? I : sl.key),
            (r = n(sl, r, I)),
            fl === null ? (Z = sl) : (fl.sibling = sl),
            (fl = sl)));
      return (
        l &&
          Q.forEach(function (i0) {
            return t(m, i0);
          }),
        cl && Xt(m, I),
        Z
      );
    }
    function pl(m, r, g, A) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === tl &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case V:
            l: {
              for (var Z = g.key; r !== null; ) {
                if (r.key === Z) {
                  if (((Z = g.type), Z === tl)) {
                    if (r.tag === 7) {
                      (e(m, r.sibling),
                        (A = u(r, g.props.children)),
                        (A.return = m),
                        (m = A));
                      break l;
                    }
                  } else if (
                    r.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === q &&
                      Ye(Z) === r.type)
                  ) {
                    (e(m, r.sibling),
                      (A = u(r, g.props)),
                      Wa(A, g),
                      (A.return = m),
                      (m = A));
                    break l;
                  }
                  e(m, r);
                  break;
                } else t(m, r);
                r = r.sibling;
              }
              g.type === tl
                ? ((A = Ce(g.props.children, m.mode, A, g.key)),
                  (A.return = m),
                  (m = A))
                : ((A = Ju(g.type, g.key, g.props, null, m.mode, A)),
                  Wa(A, g),
                  (A.return = m),
                  (m = A));
            }
            return i(m);
          case W:
            l: {
              for (Z = g.key; r !== null; ) {
                if (r.key === Z)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === g.containerInfo &&
                    r.stateNode.implementation === g.implementation
                  ) {
                    (e(m, r.sibling),
                      (A = u(r, g.children || [])),
                      (A.return = m),
                      (m = A));
                    break l;
                  } else {
                    e(m, r);
                    break;
                  }
                else t(m, r);
                r = r.sibling;
              }
              ((A = Oi(g, m.mode, A)), (A.return = m), (m = A));
            }
            return i(m);
          case q:
            return ((g = Ye(g)), pl(m, r, g, A));
        }
        if (jt(g)) return G(m, r, g, A);
        if (Xl(g)) {
          if (((Z = Xl(g)), typeof Z != "function")) throw Error(s(150));
          return ((g = Z.call(g)), L(m, r, g, A));
        }
        if (typeof g.then == "function") return pl(m, r, Pu(g), A);
        if (g.$$typeof === _) return pl(m, r, Wu(m, g), A);
        ln(m, g);
      }
      return (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
        ? ((g = "" + g),
          r !== null && r.tag === 6
            ? (e(m, r.sibling), (A = u(r, g)), (A.return = m), (m = A))
            : (e(m, r), (A = Di(g, m.mode, A)), (A.return = m), (m = A)),
          i(m))
        : e(m, r);
    }
    return function (m, r, g, A) {
      try {
        $a = 0;
        var Z = pl(m, r, g, A);
        return ((ra = null), Z);
      } catch (Q) {
        if (Q === da || Q === Fu) throw Q;
        var fl = st(29, Q, null, m.mode);
        return ((fl.lanes = A), (fl.return = m), fl);
      } finally {
      }
    };
  }
  var Xe = qs(!0),
    Ys = qs(!1),
    ce = !1;
  function Zi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Li(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function fe(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function se(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (dl & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = Ku(l)),
        Es(l, null, e),
        t
      );
    }
    return (Vu(l, a, t, e), Ku(l));
  }
  function ka(l, t, e) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (e & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), Df(l, e));
    }
  }
  function Vi(l, t) {
    var e = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), e === a)) {
      var u = null,
        n = null;
      if (((e = e.firstBaseUpdate), e !== null)) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
        } while (e !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = e));
      return;
    }
    ((l = e.lastBaseUpdate),
      l === null ? (e.firstBaseUpdate = t) : (l.next = t),
      (e.lastBaseUpdate = t));
  }
  var Ki = !1;
  function Fa() {
    if (Ki) {
      var l = oa;
      if (l !== null) throw l;
    }
  }
  function Ia(l, t, e, a) {
    Ki = !1;
    var u = l.updateQueue;
    ce = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var d = c,
        S = d.next;
      ((d.next = null), i === null ? (n = S) : (i.next = S), (i = d));
      var z = l.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (c = z.lastBaseUpdate),
        c !== i &&
          (c === null ? (z.firstBaseUpdate = S) : (c.next = S),
          (z.lastBaseUpdate = d)));
    }
    if (n !== null) {
      var j = u.baseState;
      ((i = 0), (z = S = d = null), (c = n));
      do {
        var p = c.lane & -536870913,
          T = p !== c.lane;
        if (T ? (nl & p) === p : (a & p) === p) {
          (p !== 0 && p === sa && (Ki = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var G = l,
              L = c;
            p = t;
            var pl = e;
            switch (L.tag) {
              case 1:
                if (((G = L.payload), typeof G == "function")) {
                  j = G.call(pl, j, p);
                  break l;
                }
                j = G;
                break l;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = L.payload),
                  (p = typeof G == "function" ? G.call(pl, j, p) : G),
                  p == null)
                )
                  break l;
                j = U({}, j, p);
                break l;
              case 2:
                ce = !0;
            }
          }
          ((p = c.callback),
            p !== null &&
              ((l.flags |= 64),
              T && (l.flags |= 8192),
              (T = u.callbacks),
              T === null ? (u.callbacks = [p]) : T.push(p)));
        } else
          ((T = {
            lane: p,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            z === null ? ((S = z = T), (d = j)) : (z = z.next = T),
            (i |= p));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((T = c),
            (c = T.next),
            (T.next = null),
            (u.lastBaseUpdate = T),
            (u.shared.pending = null));
        }
      } while (!0);
      (z === null && (d = j),
        (u.baseState = d),
        (u.firstBaseUpdate = S),
        (u.lastBaseUpdate = z),
        n === null && (u.shared.lanes = 0),
        (me |= i),
        (l.lanes = i),
        (l.memoizedState = j));
    }
  }
  function Gs(l, t) {
    if (typeof l != "function") throw Error(s(191, l));
    l.call(t);
  }
  function Xs(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++) Gs(e[l], t);
  }
  var ha = h(null),
    tn = h(0);
  function Qs(l, t) {
    ((l = Ft), B(tn, l), B(ha, t), (Ft = l | t.baseLanes));
  }
  function Ji() {
    (B(tn, Ft), B(ha, ha.current));
  }
  function wi() {
    ((Ft = tn.current), N(ha), N(tn));
  }
  var ot = h(null),
    zt = null;
  function oe(l) {
    var t = l.alternate;
    (B(Dl, Dl.current & 1),
      B(ot, l),
      zt === null &&
        (t === null || ha.current !== null || t.memoizedState !== null) &&
        (zt = l));
  }
  function $i(l) {
    (B(Dl, Dl.current), B(ot, l), zt === null && (zt = l));
  }
  function Zs(l) {
    l.tag === 22
      ? (B(Dl, Dl.current), B(ot, l), zt === null && (zt = l))
      : de();
  }
  function de() {
    (B(Dl, Dl.current), B(ot, ot.current));
  }
  function dt(l) {
    (N(ot), zt === l && (zt = null), N(Dl));
  }
  var Dl = h(0);
  function en(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && ((e = e.dehydrated), e === null || lf(e) || tf(e)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Lt = 0,
    F = null,
    Sl = null,
    Ul = null,
    an = !1,
    ma = !1,
    Qe = !1,
    un = 0,
    Pa = 0,
    va = null,
    kh = 0;
  function jl() {
    throw Error(s(321));
  }
  function Wi(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!ft(l[e], t[e])) return !1;
    return !0;
  }
  function ki(l, t, e, a, u, n) {
    return (
      (Lt = n),
      (F = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (x.H = l === null || l.memoizedState === null ? jo : dc),
      (Qe = !1),
      (n = e(a, u)),
      (Qe = !1),
      ma && (n = Vs(t, e, a, u)),
      Ls(l),
      n
    );
  }
  function Ls(l) {
    x.H = eu;
    var t = Sl !== null && Sl.next !== null;
    if (((Lt = 0), (Ul = Sl = F = null), (an = !1), (Pa = 0), (va = null), t))
      throw Error(s(300));
    l === null ||
      Cl ||
      ((l = l.dependencies), l !== null && $u(l) && (Cl = !0));
  }
  function Vs(l, t, e, a) {
    F = l;
    var u = 0;
    do {
      if ((ma && (va = null), (Pa = 0), (ma = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Ul = Sl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((x.H = Mo), (n = t(e, a)));
    } while (ma);
    return n;
  }
  function Fh() {
    var l = x.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? lu(t) : t),
      (l = l.useState()[0]),
      (Sl !== null ? Sl.memoizedState : null) !== l && (F.flags |= 1024),
      t
    );
  }
  function Fi() {
    var l = un !== 0;
    return ((un = 0), l);
  }
  function Ii(l, t, e) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~e));
  }
  function Pi(l) {
    if (an) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      an = !1;
    }
    ((Lt = 0), (Ul = Sl = F = null), (ma = !1), (Pa = un = 0), (va = null));
  }
  function kl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ul === null ? (F.memoizedState = Ul = l) : (Ul = Ul.next = l), Ul);
  }
  function Ol() {
    if (Sl === null) {
      var l = F.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Sl.next;
    var t = Ul === null ? F.memoizedState : Ul.next;
    if (t !== null) ((Ul = t), (Sl = l));
    else {
      if (l === null)
        throw F.alternate === null ? Error(s(467)) : Error(s(310));
      ((Sl = l),
        (l = {
          memoizedState: Sl.memoizedState,
          baseState: Sl.baseState,
          baseQueue: Sl.baseQueue,
          queue: Sl.queue,
          next: null,
        }),
        Ul === null ? (F.memoizedState = Ul = l) : (Ul = Ul.next = l));
    }
    return Ul;
  }
  function nn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lu(l) {
    var t = Pa;
    return (
      (Pa += 1),
      va === null && (va = []),
      (l = Rs(va, l, t)),
      (t = F),
      (Ul === null ? t.memoizedState : Ul.next) === null &&
        ((t = t.alternate),
        (x.H = t === null || t.memoizedState === null ? jo : dc)),
      l
    );
  }
  function cn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return lu(l);
      if (l.$$typeof === _) return Kl(l);
    }
    throw Error(s(438, String(l)));
  }
  function lc(l) {
    var t = null,
      e = F.updateQueue;
    if ((e !== null && (t = e.memoCache), t == null)) {
      var a = F.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      e === null && ((e = nn()), (F.updateQueue = e)),
      (e.memoCache = t),
      (e = t.data[t.index]),
      e === void 0)
    )
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Gl;
    return (t.index++, e);
  }
  function Vt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function fn(l) {
    var t = Ol();
    return tc(t, Sl, l);
  }
  function tc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (a.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        d = null,
        S = t,
        z = !1;
      do {
        var j = S.lane & -536870913;
        if (j !== S.lane ? (nl & j) === j : (Lt & j) === j) {
          var p = S.revertLane;
          if (p === 0)
            (d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: S.action,
                  hasEagerState: S.hasEagerState,
                  eagerState: S.eagerState,
                  next: null,
                }),
              j === sa && (z = !0));
          else if ((Lt & p) === p) {
            ((S = S.next), p === sa && (z = !0));
            continue;
          } else
            ((j = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null,
            }),
              d === null ? ((c = d = j), (i = n)) : (d = d.next = j),
              (F.lanes |= p),
              (me |= p));
          ((j = S.action),
            Qe && e(n, j),
            (n = S.hasEagerState ? S.eagerState : e(n, j)));
        } else
          ((p = {
            lane: j,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          }),
            d === null ? ((c = d = p), (i = n)) : (d = d.next = p),
            (F.lanes |= j),
            (me |= j));
        S = S.next;
      } while (S !== null && S !== t);
      if (
        (d === null ? (i = n) : (d.next = c),
        !ft(n, l.memoizedState) && ((Cl = !0), z && ((e = oa), e !== null)))
      )
        throw e;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = d),
        (a.lastRenderedState = n));
    }
    return (u === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
  }
  function ec(l) {
    var t = Ol(),
      e = t.queue;
    if (e === null) throw Error(s(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch,
      u = e.pending,
      n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (ft(n, t.memoizedState) || (Cl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (e.lastRenderedState = n));
    }
    return [n, a];
  }
  function Ks(l, t, e) {
    var a = F,
      u = Ol(),
      n = cl;
    if (n) {
      if (e === void 0) throw Error(s(407));
      e = e();
    } else e = t();
    var i = !ft((Sl || u).memoizedState, e);
    if (
      (i && ((u.memoizedState = e), (Cl = !0)),
      (u = u.queue),
      nc($s.bind(null, a, u, l), [l]),
      u.getSnapshot !== t || i || (Ul !== null && Ul.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ya(9, { destroy: void 0 }, ws.bind(null, a, u, e, t), null),
        Tl === null)
      )
        throw Error(s(349));
      n || (Lt & 127) !== 0 || Js(a, t, e);
    }
    return e;
  }
  function Js(l, t, e) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: e }),
      (t = F.updateQueue),
      t === null
        ? ((t = nn()), (F.updateQueue = t), (t.stores = [l]))
        : ((e = t.stores), e === null ? (t.stores = [l]) : e.push(l)));
  }
  function ws(l, t, e, a) {
    ((t.value = e), (t.getSnapshot = a), Ws(t) && ks(l));
  }
  function $s(l, t, e) {
    return e(function () {
      Ws(t) && ks(l);
    });
  }
  function Ws(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !ft(l, e);
    } catch {
      return !0;
    }
  }
  function ks(l) {
    var t = Ue(l, 2);
    t !== null && at(t, l, 2);
  }
  function ac(l) {
    var t = kl();
    if (typeof l == "function") {
      var e = l;
      if (((l = e()), Qe)) {
        le(!0);
        try {
          e();
        } finally {
          le(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Fs(l, t, e, a) {
    return ((l.baseState = e), tc(l, Sl, typeof a == "function" ? a : Vt));
  }
  function Ih(l, t, e, a, u) {
    if (dn(l)) throw Error(s(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (x.T !== null ? e(!0) : (n.isTransition = !1),
        a(n),
        (e = t.pending),
        e === null
          ? ((n.next = t.pending = n), Is(t, n))
          : ((n.next = e.next), (t.pending = e.next = n)));
    }
  }
  function Is(l, t) {
    var e = t.action,
      a = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = x.T,
        i = {};
      x.T = i;
      try {
        var c = e(u, a),
          d = x.S;
        (d !== null && d(i, c), Ps(l, t, c));
      } catch (S) {
        uc(l, t, S);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (x.T = n));
      }
    } else
      try {
        ((n = e(u, a)), Ps(l, t, n));
      } catch (S) {
        uc(l, t, S);
      }
  }
  function Ps(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function"
      ? e.then(
          function (a) {
            lo(l, t, a);
          },
          function (a) {
            return uc(l, t, a);
          },
        )
      : lo(l, t, e);
  }
  function lo(l, t, e) {
    ((t.status = "fulfilled"),
      (t.value = e),
      to(t),
      (l.state = e),
      (t = l.pending),
      t !== null &&
        ((e = t.next),
        e === t ? (l.pending = null) : ((e = e.next), (t.next = e), Is(l, e))));
  }
  function uc(l, t, e) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = e), to(t), (t = t.next));
      while (t !== a);
    }
    l.action = null;
  }
  function to(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function eo(l, t) {
    return t;
  }
  function ao(l, t) {
    if (cl) {
      var e = Tl.formState;
      if (e !== null) {
        l: {
          var a = F;
          if (cl) {
            if (zl) {
              t: {
                for (var u = zl, n = Tt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = xt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((zl = xt(u.nextSibling)), (a = u.data === "F!"));
                break l;
              }
            }
            ne(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return (
      (e = kl()),
      (e.memoizedState = e.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: eo,
        lastRenderedState: t,
      }),
      (e.queue = a),
      (e = zo.bind(null, F, a)),
      (a.dispatch = e),
      (a = ac(!1)),
      (n = oc.bind(null, F, !1, a.queue)),
      (a = kl()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (a.queue = u),
      (e = Ih.bind(null, F, u, n, e)),
      (u.dispatch = e),
      (a.memoizedState = l),
      [t, e, !1]
    );
  }
  function uo(l) {
    var t = Ol();
    return no(t, Sl, l);
  }
  function no(l, t, e) {
    if (
      ((t = tc(l, t, eo)[0]),
      (l = fn(Vt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = lu(t);
      } catch (i) {
        throw i === da ? Fu : i;
      }
    else a = t;
    t = Ol();
    var u = t.queue,
      n = u.dispatch;
    return (
      e !== t.memoizedState &&
        ((F.flags |= 2048),
        ya(9, { destroy: void 0 }, Ph.bind(null, u, e), null)),
      [a, n, l]
    );
  }
  function Ph(l, t) {
    l.action = t;
  }
  function io(l) {
    var t = Ol(),
      e = Sl;
    if (e !== null) return no(t, e, l);
    (Ol(), (t = t.memoizedState), (e = Ol()));
    var a = e.queue.dispatch;
    return ((e.memoizedState = l), [t, a, !1]);
  }
  function ya(l, t, e, a) {
    return (
      (l = { tag: l, create: e, deps: a, inst: t, next: null }),
      (t = F.updateQueue),
      t === null && ((t = nn()), (F.updateQueue = t)),
      (e = t.lastEffect),
      e === null
        ? (t.lastEffect = l.next = l)
        : ((a = e.next), (e.next = l), (l.next = a), (t.lastEffect = l)),
      l
    );
  }
  function co() {
    return Ol().memoizedState;
  }
  function sn(l, t, e, a) {
    var u = kl();
    ((F.flags |= l),
      (u.memoizedState = ya(
        1 | t,
        { destroy: void 0 },
        e,
        a === void 0 ? null : a,
      )));
  }
  function on(l, t, e, a) {
    var u = Ol();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    Sl !== null && a !== null && Wi(a, Sl.memoizedState.deps)
      ? (u.memoizedState = ya(t, n, e, a))
      : ((F.flags |= l), (u.memoizedState = ya(1 | t, n, e, a)));
  }
  function fo(l, t) {
    sn(8390656, 8, l, t);
  }
  function nc(l, t) {
    on(2048, 8, l, t);
  }
  function lm(l) {
    F.flags |= 4;
    var t = F.updateQueue;
    if (t === null) ((t = nn()), (F.updateQueue = t), (t.events = [l]));
    else {
      var e = t.events;
      e === null ? (t.events = [l]) : e.push(l);
    }
  }
  function so(l) {
    var t = Ol().memoizedState;
    return (
      lm({ ref: t, nextImpl: l }),
      function () {
        if ((dl & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function oo(l, t) {
    return on(4, 2, l, t);
  }
  function ro(l, t) {
    return on(4, 4, l, t);
  }
  function ho(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function () {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function mo(l, t, e) {
    ((e = e != null ? e.concat([l]) : null), on(4, 4, ho.bind(null, t, l), e));
  }
  function ic() {}
  function vo(l, t) {
    var e = Ol();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && Wi(t, a[1]) ? a[0] : ((e.memoizedState = [l, t]), l);
  }
  function yo(l, t) {
    var e = Ol();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && Wi(t, a[1])) return a[0];
    if (((a = l()), Qe)) {
      le(!0);
      try {
        l();
      } finally {
        le(!1);
      }
    }
    return ((e.memoizedState = [a, t]), a);
  }
  function cc(l, t, e) {
    return e === void 0 || ((Lt & 1073741824) !== 0 && (nl & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = e), (l = gd()), (F.lanes |= l), (me |= l), e);
  }
  function go(l, t, e, a) {
    return ft(e, t)
      ? e
      : ha.current !== null
        ? ((l = cc(l, e, a)), ft(l, t) || (Cl = !0), l)
        : (Lt & 42) === 0 || ((Lt & 1073741824) !== 0 && (nl & 261930) === 0)
          ? ((Cl = !0), (l.memoizedState = e))
          : ((l = gd()), (F.lanes |= l), (me |= l), t);
  }
  function So(l, t, e, a, u) {
    var n = H.p;
    H.p = n !== 0 && 8 > n ? n : 8;
    var i = x.T,
      c = {};
    ((x.T = c), oc(l, !1, t, e));
    try {
      var d = u(),
        S = x.S;
      if (
        (S !== null && S(c, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var z = Wh(d, a);
        tu(l, t, z, mt(l));
      } else tu(l, t, a, mt(l));
    } catch (j) {
      tu(l, t, { then: function () {}, status: "rejected", reason: j }, mt());
    } finally {
      ((H.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (x.T = i));
    }
  }
  function tm() {}
  function fc(l, t, e, a) {
    if (l.tag !== 5) throw Error(s(476));
    var u = bo(l).queue;
    So(
      l,
      u,
      t,
      J,
      e === null
        ? tm
        : function () {
            return (po(l), e(a));
          },
    );
  }
  function bo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vt,
        lastRenderedState: J,
      },
      next: null,
    };
    var e = {};
    return (
      (t.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vt,
          lastRenderedState: e,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function po(l) {
    var t = bo(l);
    (t.next === null && (t = l.alternate.memoizedState),
      tu(l, t.next.queue, {}, mt()));
  }
  function sc() {
    return Kl(Su);
  }
  function Eo() {
    return Ol().memoizedState;
  }
  function To() {
    return Ol().memoizedState;
  }
  function em(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = mt();
          l = fe(e);
          var a = se(t, l, e);
          (a !== null && (at(a, t, e), ka(a, t, e)),
            (t = { cache: Yi() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function am(l, t, e) {
    var a = mt();
    ((e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(l)
        ? xo(t, e)
        : ((e = Mi(l, t, e, a)), e !== null && (at(e, l, a), Ao(e, t, a))));
  }
  function zo(l, t, e) {
    var a = mt();
    tu(l, t, e, a);
  }
  function tu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(l)) xo(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, e);
          if (((u.hasEagerState = !0), (u.eagerState = c), ft(c, i)))
            return (Vu(l, t, u, 0), Tl === null && Lu(), !1);
        } catch {
        } finally {
        }
      if (((e = Mi(l, t, u, a)), e !== null))
        return (at(e, l, a), Ao(e, t, a), !0);
    }
    return !1;
  }
  function oc(l, t, e, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Zc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(l))
    ) {
      if (t) throw Error(s(479));
    } else ((t = Mi(l, e, a, 2)), t !== null && at(t, l, 2));
  }
  function dn(l) {
    var t = l.alternate;
    return l === F || (t !== null && t === F);
  }
  function xo(l, t) {
    ma = an = !0;
    var e = l.pending;
    (e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
      (l.pending = t));
  }
  function Ao(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= l.pendingLanes), (e |= a), (t.lanes = e), Df(l, e));
    }
  }
  var eu = {
    readContext: Kl,
    use: cn,
    useCallback: jl,
    useContext: jl,
    useEffect: jl,
    useImperativeHandle: jl,
    useLayoutEffect: jl,
    useInsertionEffect: jl,
    useMemo: jl,
    useReducer: jl,
    useRef: jl,
    useState: jl,
    useDebugValue: jl,
    useDeferredValue: jl,
    useTransition: jl,
    useSyncExternalStore: jl,
    useId: jl,
    useHostTransitionStatus: jl,
    useFormState: jl,
    useActionState: jl,
    useOptimistic: jl,
    useMemoCache: jl,
    useCacheRefresh: jl,
  };
  eu.useEffectEvent = jl;
  var jo = {
      readContext: Kl,
      use: cn,
      useCallback: function (l, t) {
        return ((kl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Kl,
      useEffect: fo,
      useImperativeHandle: function (l, t, e) {
        ((e = e != null ? e.concat([l]) : null),
          sn(4194308, 4, ho.bind(null, t, l), e));
      },
      useLayoutEffect: function (l, t) {
        return sn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        sn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var e = kl();
        t = t === void 0 ? null : t;
        var a = l();
        if (Qe) {
          le(!0);
          try {
            l();
          } finally {
            le(!1);
          }
        }
        return ((e.memoizedState = [a, t]), a);
      },
      useReducer: function (l, t, e) {
        var a = kl();
        if (e !== void 0) {
          var u = e(t);
          if (Qe) {
            le(!0);
            try {
              e(t);
            } finally {
              le(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (a.queue = l),
          (l = l.dispatch = am.bind(null, F, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = kl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = ac(l);
        var t = l.queue,
          e = zo.bind(null, F, t);
        return ((t.dispatch = e), [l.memoizedState, e]);
      },
      useDebugValue: ic,
      useDeferredValue: function (l, t) {
        var e = kl();
        return cc(e, l, t);
      },
      useTransition: function () {
        var l = ac(!1);
        return (
          (l = So.bind(null, F, l.queue, !0, !1)),
          (kl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, e) {
        var a = F,
          u = kl();
        if (cl) {
          if (e === void 0) throw Error(s(407));
          e = e();
        } else {
          if (((e = t()), Tl === null)) throw Error(s(349));
          (nl & 127) !== 0 || Js(a, t, e);
        }
        u.memoizedState = e;
        var n = { value: e, getSnapshot: t };
        return (
          (u.queue = n),
          fo($s.bind(null, a, n, l), [l]),
          (a.flags |= 2048),
          ya(9, { destroy: void 0 }, ws.bind(null, a, n, e, t), null),
          e
        );
      },
      useId: function () {
        var l = kl(),
          t = Tl.identifierPrefix;
        if (cl) {
          var e = Ut,
            a = _t;
          ((e = (a & ~(1 << (32 - ct(a) - 1))).toString(32) + e),
            (t = "_" + t + "R_" + e),
            (e = un++),
            0 < e && (t += "H" + e.toString(32)),
            (t += "_"));
        } else ((e = kh++), (t = "_" + t + "r_" + e.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: sc,
      useFormState: ao,
      useActionState: ao,
      useOptimistic: function (l) {
        var t = kl();
        t.memoizedState = t.baseState = l;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = e),
          (t = oc.bind(null, F, !0, e)),
          (e.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: lc,
      useCacheRefresh: function () {
        return (kl().memoizedState = em.bind(null, F));
      },
      useEffectEvent: function (l) {
        var t = kl(),
          e = { impl: l };
        return (
          (t.memoizedState = e),
          function () {
            if ((dl & 2) !== 0) throw Error(s(440));
            return e.impl.apply(void 0, arguments);
          }
        );
      },
    },
    dc = {
      readContext: Kl,
      use: cn,
      useCallback: vo,
      useContext: Kl,
      useEffect: nc,
      useImperativeHandle: mo,
      useInsertionEffect: oo,
      useLayoutEffect: ro,
      useMemo: yo,
      useReducer: fn,
      useRef: co,
      useState: function () {
        return fn(Vt);
      },
      useDebugValue: ic,
      useDeferredValue: function (l, t) {
        var e = Ol();
        return go(e, Sl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = fn(Vt)[0],
          t = Ol().memoizedState;
        return [typeof l == "boolean" ? l : lu(l), t];
      },
      useSyncExternalStore: Ks,
      useId: Eo,
      useHostTransitionStatus: sc,
      useFormState: uo,
      useActionState: uo,
      useOptimistic: function (l, t) {
        var e = Ol();
        return Fs(e, Sl, l, t);
      },
      useMemoCache: lc,
      useCacheRefresh: To,
    };
  dc.useEffectEvent = so;
  var Mo = {
    readContext: Kl,
    use: cn,
    useCallback: vo,
    useContext: Kl,
    useEffect: nc,
    useImperativeHandle: mo,
    useInsertionEffect: oo,
    useLayoutEffect: ro,
    useMemo: yo,
    useReducer: ec,
    useRef: co,
    useState: function () {
      return ec(Vt);
    },
    useDebugValue: ic,
    useDeferredValue: function (l, t) {
      var e = Ol();
      return Sl === null ? cc(e, l, t) : go(e, Sl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = ec(Vt)[0],
        t = Ol().memoizedState;
      return [typeof l == "boolean" ? l : lu(l), t];
    },
    useSyncExternalStore: Ks,
    useId: Eo,
    useHostTransitionStatus: sc,
    useFormState: io,
    useActionState: io,
    useOptimistic: function (l, t) {
      var e = Ol();
      return Sl !== null
        ? Fs(e, Sl, l, t)
        : ((e.baseState = l), [l, e.queue.dispatch]);
    },
    useMemoCache: lc,
    useCacheRefresh: To,
  };
  Mo.useEffectEvent = so;
  function rc(l, t, e, a) {
    ((t = l.memoizedState),
      (e = e(a, t)),
      (e = e == null ? t : U({}, t, e)),
      (l.memoizedState = e),
      l.lanes === 0 && (l.updateQueue.baseState = e));
  }
  var hc = {
    enqueueSetState: function (l, t, e) {
      l = l._reactInternals;
      var a = mt(),
        u = fe(a);
      ((u.payload = t),
        e != null && (u.callback = e),
        (t = se(l, u, a)),
        t !== null && (at(t, l, a), ka(t, l, a)));
    },
    enqueueReplaceState: function (l, t, e) {
      l = l._reactInternals;
      var a = mt(),
        u = fe(a);
      ((u.tag = 1),
        (u.payload = t),
        e != null && (u.callback = e),
        (t = se(l, u, a)),
        t !== null && (at(t, l, a), ka(t, l, a)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var e = mt(),
        a = fe(e);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = se(l, a, e)),
        t !== null && (at(t, l, e), ka(t, l, e)));
    },
  };
  function No(l, t, e, a, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Za(e, a) || !Za(u, n)
          : !0
    );
  }
  function Do(l, t, e, a) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(e, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(e, a),
      t.state !== l && hc.enqueueReplaceState(t, t.state, null));
  }
  function Ze(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t) a !== "ref" && (e[a] = t[a]);
    }
    if ((l = l.defaultProps)) {
      e === t && (e = U({}, e));
      for (var u in l) e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Oo(l) {
    Zu(l);
  }
  function _o(l) {
    console.error(l);
  }
  function Uo(l) {
    Zu(l);
  }
  function rn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Co(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function mc(l, t, e) {
    return (
      (e = fe(e)),
      (e.tag = 3),
      (e.payload = { element: null }),
      (e.callback = function () {
        rn(l, t);
      }),
      e
    );
  }
  function Ro(l) {
    return ((l = fe(l)), (l.tag = 3), l);
  }
  function Ho(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          Co(t, e, a);
        }));
    }
    var i = e.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (Co(t, e, a),
          typeof u != "function" &&
            (ve === null ? (ve = new Set([this])) : ve.add(this)));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function um(l, t, e, a, u) {
    if (
      ((e.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = e.alternate),
        t !== null && fa(t, e, u, !0),
        (e = ot.current),
        e !== null)
      ) {
        switch (e.tag) {
          case 31:
          case 13:
            return (
              zt === null ? xn() : e.alternate === null && Ml === 0 && (Ml = 3),
              (e.flags &= -257),
              (e.flags |= 65536),
              (e.lanes = u),
              a === Iu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null ? (e.updateQueue = new Set([a])) : t.add(a),
                  Gc(l, a, u)),
              !1
            );
          case 22:
            return (
              (e.flags |= 65536),
              a === Iu
                ? (e.flags |= 16384)
                : ((t = e.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (e.updateQueue = t))
                    : ((e = t.retryQueue),
                      e === null ? (t.retryQueue = new Set([a])) : e.add(a)),
                  Gc(l, a, u)),
              !1
            );
        }
        throw Error(s(435, e.tag));
      }
      return (Gc(l, a, u), xn(), !1);
    }
    if (cl)
      return (
        (t = ot.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== Ci && ((l = Error(s(422), { cause: a })), Ka(bt(l, e))))
          : (a !== Ci && ((t = Error(s(423), { cause: a })), Ka(bt(t, e))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (a = bt(a, e)),
            (u = mc(l.stateNode, a, u)),
            Vi(l, u),
            Ml !== 4 && (Ml = 2)),
        !1
      );
    var n = Error(s(520), { cause: a });
    if (
      ((n = bt(n, e)),
      ou === null ? (ou = [n]) : ou.push(n),
      Ml !== 4 && (Ml = 2),
      t === null)
    )
      return !0;
    ((a = bt(a, e)), (e = t));
    do {
      switch (e.tag) {
        case 3:
          return (
            (e.flags |= 65536),
            (l = u & -u),
            (e.lanes |= l),
            (l = mc(e.stateNode, a, l)),
            Vi(e, l),
            !1
          );
        case 1:
          if (
            ((t = e.type),
            (n = e.stateNode),
            (e.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ve === null || !ve.has(n)))))
          )
            return (
              (e.flags |= 65536),
              (u &= -u),
              (e.lanes |= u),
              (u = Ro(u)),
              Ho(u, l, e, a),
              Vi(e, u),
              !1
            );
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var vc = Error(s(461)),
    Cl = !1;
  function Jl(l, t, e, a) {
    t.child = l === null ? Ys(t, null, e, a) : Xe(t, l.child, e, a);
  }
  function Bo(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return (
      Be(t),
      (a = ki(l, t, e, i, n, u)),
      (c = Fi()),
      l !== null && !Cl
        ? (Ii(l, t, u), Kt(l, t, u))
        : (cl && c && _i(t), (t.flags |= 1), Jl(l, t, a, u), t.child)
    );
  }
  function qo(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" &&
        !Ni(n) &&
        n.defaultProps === void 0 &&
        e.compare === null
        ? ((t.tag = 15), (t.type = n), Yo(l, t, n, a, u))
        : ((l = Ju(e.type, null, a, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !zc(l, u))) {
      var i = n.memoizedProps;
      if (
        ((e = e.compare), (e = e !== null ? e : Za), e(i, a) && l.ref === t.ref)
      )
        return Kt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Gt(n, a)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Yo(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Za(n, a) && l.ref === t.ref)
        if (((Cl = !1), (t.pendingProps = a = n), zc(l, u)))
          (l.flags & 131072) !== 0 && (Cl = !0);
        else return ((t.lanes = l.lanes), Kt(l, t, u));
    }
    return yc(l, t, e, a, u);
  }
  function Go(l, t, e, a) {
    var u = a.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
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
        if (((n = n !== null ? n.baseLanes | e : e), l !== null)) {
          for (a = t.child = l.child, u = 0; a !== null; )
            ((u = u | a.lanes | a.childLanes), (a = a.sibling));
          a = u & ~n;
        } else ((a = 0), (t.child = null));
        return Xo(l, t, n, e, a);
      }
      if ((e & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && ku(t, n !== null ? n.cachePool : null),
          n !== null ? Qs(t, n) : Ji(),
          Zs(t));
      else
        return (
          (a = t.lanes = 536870912),
          Xo(l, t, n !== null ? n.baseLanes | e : e, e, a)
        );
    } else
      n !== null
        ? (ku(t, n.cachePool), Qs(t, n), de(), (t.memoizedState = null))
        : (l !== null && ku(t, null), Ji(), de());
    return (Jl(l, t, u, e), t.child);
  }
  function au(l, t) {
    return (
      (l !== null && l.tag === 22) ||
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
  function Xo(l, t, e, a, u) {
    var n = Xi();
    return (
      (n = n === null ? null : { parent: _l._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: e, cachePool: n }),
      l !== null && ku(t, null),
      Ji(),
      Zs(t),
      l !== null && fa(l, t, a, !0),
      (t.childLanes = u),
      null
    );
  }
  function hn(l, t) {
    return (
      (t = vn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Qo(l, t, e) {
    return (
      Xe(t, l.child, null, e),
      (l = hn(t, t.pendingProps)),
      (l.flags |= 2),
      dt(t),
      (t.memoizedState = null),
      l
    );
  }
  function nm(l, t, e) {
    var a = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (cl) {
        if (a.mode === "hidden")
          return ((l = hn(t, a)), (t.lanes = 536870912), au(null, l));
        if (
          ($i(t),
          (l = zl)
            ? ((l = Pd(l, Tt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: _t, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = zs(l)),
                (e.return = t),
                (t.child = e),
                (Vl = t),
                (zl = null)))
            : (l = null),
          l === null)
        )
          throw ne(t);
        return ((t.lanes = 536870912), null);
      }
      return hn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (($i(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = Qo(l, t, e)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (Cl || fa(l, t, e, !1), (u = (e & l.childLanes) !== 0), Cl || u)
      ) {
        if (
          ((a = Tl),
          a !== null && ((i = Of(a, e)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), Ue(l, i), at(a, l, i), vc);
        (xn(), (t = Qo(l, t, e)));
      } else
        ((l = n.treeContext),
          (zl = xt(i.nextSibling)),
          (Vl = t),
          (cl = !0),
          (ue = null),
          (Tt = !1),
          l !== null && js(t, l),
          (t = hn(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Gt(l.child, { mode: a.mode, children: a.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function mn(l, t) {
    var e = t.ref;
    if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object") throw Error(s(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function yc(l, t, e, a, u) {
    return (
      Be(t),
      (e = ki(l, t, e, a, void 0, u)),
      (a = Fi()),
      l !== null && !Cl
        ? (Ii(l, t, u), Kt(l, t, u))
        : (cl && a && _i(t), (t.flags |= 1), Jl(l, t, e, u), t.child)
    );
  }
  function Zo(l, t, e, a, u, n) {
    return (
      Be(t),
      (t.updateQueue = null),
      (e = Vs(t, a, e, u)),
      Ls(l),
      (a = Fi()),
      l !== null && !Cl
        ? (Ii(l, t, n), Kt(l, t, n))
        : (cl && a && _i(t), (t.flags |= 1), Jl(l, t, e, n), t.child)
    );
  }
  function Lo(l, t, e, a, u) {
    if ((Be(t), t.stateNode === null)) {
      var n = ua,
        i = e.contextType;
      (typeof i == "object" && i !== null && (n = Kl(i)),
        (n = new e(a, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = hc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = a),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Zi(t),
        (i = e.contextType),
        (n.context = typeof i == "object" && i !== null ? Kl(i) : ua),
        (n.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (rc(t, e, i, a), (n.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && hc.enqueueReplaceState(n, n.state, null),
          Ia(t, a, n, u),
          Fa(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        d = Ze(e, c);
      n.props = d;
      var S = n.context,
        z = e.contextType;
      ((i = ua), typeof z == "object" && z !== null && (i = Kl(z)));
      var j = e.getDerivedStateFromProps;
      ((z =
        typeof j == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        z ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || S !== i) && Do(t, n, a, i)),
        (ce = !1));
      var p = t.memoizedState;
      ((n.state = p),
        Ia(t, a, n, u),
        Fa(),
        (S = t.memoizedState),
        c || p !== S || ce
          ? (typeof j == "function" && (rc(t, e, j, a), (S = t.memoizedState)),
            (d = ce || No(t, e, d, a, p, S, i))
              ? (z ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = S)),
            (n.props = a),
            (n.state = S),
            (n.context = i),
            (a = d))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((n = t.stateNode),
        Li(l, t),
        (i = t.memoizedProps),
        (z = Ze(e, i)),
        (n.props = z),
        (j = t.pendingProps),
        (p = n.context),
        (S = e.contextType),
        (d = ua),
        typeof S == "object" && S !== null && (d = Kl(S)),
        (c = e.getDerivedStateFromProps),
        (S =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== j || p !== d) && Do(t, n, a, d)),
        (ce = !1),
        (p = t.memoizedState),
        (n.state = p),
        Ia(t, a, n, u),
        Fa());
      var T = t.memoizedState;
      i !== j ||
      p !== T ||
      ce ||
      (l !== null && l.dependencies !== null && $u(l.dependencies))
        ? (typeof c == "function" && (rc(t, e, c, a), (T = t.memoizedState)),
          (z =
            ce ||
            No(t, e, z, a, p, T, d) ||
            (l !== null && l.dependencies !== null && $u(l.dependencies)))
            ? (S ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, T, d),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, T, d)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && p === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && p === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = T)),
          (n.props = a),
          (n.state = T),
          (n.context = d),
          (a = z))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && p === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && p === l.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      mn(l, t),
      (a = (t.flags & 128) !== 0),
      n || a
        ? ((n = t.stateNode),
          (e =
            a && typeof e.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && a
            ? ((t.child = Xe(t, l.child, null, u)),
              (t.child = Xe(t, null, e, u)))
            : Jl(l, t, e, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Kt(l, t, u)),
      l
    );
  }
  function Vo(l, t, e, a) {
    return (Re(), (t.flags |= 256), Jl(l, t, e, a), t.child);
  }
  var gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Sc(l) {
    return { baseLanes: l, cachePool: Us() };
  }
  function bc(l, t, e) {
    return ((l = l !== null ? l.childLanes & ~e : 0), t && (l |= ht), l);
  }
  function Ko(l, t, e) {
    var a = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (cl) {
        if (
          (u ? oe(t) : de(),
          (l = zl)
            ? ((l = Pd(l, Tt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ae !== null ? { id: _t, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (e = zs(l)),
                (e.return = t),
                (t.child = e),
                (Vl = t),
                (zl = null)))
            : (l = null),
          l === null)
        )
          throw ne(t);
        return (tf(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = a.children;
      return (
        (a = a.fallback),
        u
          ? (de(),
            (u = t.mode),
            (c = vn({ mode: "hidden", children: c }, u)),
            (a = Ce(a, u, e, null)),
            (c.return = t),
            (a.return = t),
            (c.sibling = a),
            (t.child = c),
            (a = t.child),
            (a.memoizedState = Sc(e)),
            (a.childLanes = bc(l, i, e)),
            (t.memoizedState = gc),
            au(null, a))
          : (oe(t), pc(t, c))
      );
    }
    var d = l.memoizedState;
    if (d !== null && ((c = d.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (oe(t), (t.flags &= -257), (t = Ec(l, t, e)))
          : t.memoizedState !== null
            ? (de(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (de(),
              (c = a.fallback),
              (u = t.mode),
              (a = vn({ mode: "visible", children: a.children }, u)),
              (c = Ce(c, u, e, null)),
              (c.flags |= 2),
              (a.return = t),
              (c.return = t),
              (a.sibling = c),
              (t.child = a),
              Xe(t, l.child, null, e),
              (a = t.child),
              (a.memoizedState = Sc(e)),
              (a.childLanes = bc(l, i, e)),
              (t.memoizedState = gc),
              (t = au(null, a)));
      else if ((oe(t), tf(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var S = i.dgst;
        ((i = S),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = i),
          Ka({ value: a, source: null, stack: null }),
          (t = Ec(l, t, e)));
      } else if (
        (Cl || fa(l, t, e, !1), (i = (e & l.childLanes) !== 0), Cl || i)
      ) {
        if (
          ((i = Tl),
          i !== null && ((a = Of(i, e)), a !== 0 && a !== d.retryLane))
        )
          throw ((d.retryLane = a), Ue(l, a), at(i, l, a), vc);
        (lf(c) || xn(), (t = Ec(l, t, e)));
      } else
        lf(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = d.treeContext),
            (zl = xt(c.nextSibling)),
            (Vl = t),
            (cl = !0),
            (ue = null),
            (Tt = !1),
            l !== null && js(t, l),
            (t = pc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (de(),
        (c = a.fallback),
        (u = t.mode),
        (d = l.child),
        (S = d.sibling),
        (a = Gt(d, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = d.subtreeFlags & 65011712),
        S !== null ? (c = Gt(S, c)) : ((c = Ce(c, u, e, null)), (c.flags |= 2)),
        (c.return = t),
        (a.return = t),
        (a.sibling = c),
        (t.child = a),
        au(null, a),
        (a = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = Sc(e))
          : ((u = c.cachePool),
            u !== null
              ? ((d = _l._currentValue),
                (u = u.parent !== d ? { parent: d, pool: d } : u))
              : (u = Us()),
            (c = { baseLanes: c.baseLanes | e, cachePool: u })),
        (a.memoizedState = c),
        (a.childLanes = bc(l, i, e)),
        (t.memoizedState = gc),
        au(l.child, a))
      : (oe(t),
        (e = l.child),
        (l = e.sibling),
        (e = Gt(e, { mode: "visible", children: a.children })),
        (e.return = t),
        (e.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = e),
        (t.memoizedState = null),
        e);
  }
  function pc(l, t) {
    return (
      (t = vn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function vn(l, t) {
    return ((l = st(22, l, null, t)), (l.lanes = 0), l);
  }
  function Ec(l, t, e) {
    return (
      Xe(t, l.child, null, e),
      (l = pc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Jo(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    (a !== null && (a.lanes |= t), Bi(l.return, t, e));
  }
  function Tc(l, t, e, a, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: e,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = e),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function wo(l, t, e) {
    var a = t.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    a = a.children;
    var i = Dl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      B(Dl, i),
      Jl(l, t, a, e),
      (a = cl ? Va : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Jo(l, e, t);
        else if (l.tag === 19) Jo(l, e, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (e = t.child, u = null; e !== null; )
          ((l = e.alternate),
            l !== null && en(l) === null && (u = e),
            (e = e.sibling));
        ((e = u),
          e === null
            ? ((u = t.child), (t.child = null))
            : ((u = e.sibling), (e.sibling = null)),
          Tc(t, !1, u, e, n, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && en(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = e), (e = u), (u = l));
        }
        Tc(t, !0, e, null, n, a);
        break;
      case "together":
        Tc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Kt(l, t, e) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (me |= t.lanes),
      (e & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((fa(l, t, e, !1), (e & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        l = t.child, e = Gt(l, l.pendingProps), t.child = e, e.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (e = e.sibling = Gt(l, l.pendingProps)),
          (e.return = t));
      e.sibling = null;
    }
    return t.child;
  }
  function zc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && $u(l)));
  }
  function im(l, t, e) {
    switch (t.tag) {
      case 3:
        (Wl(t, t.stateNode.containerInfo),
          ie(t, _l, l.memoizedState.cache),
          Re());
        break;
      case 27:
      case 5:
        Da(t);
        break;
      case 4:
        Wl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ie(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), $i(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (oe(t), (t.flags |= 128), null)
            : (e & t.child.childLanes) !== 0
              ? Ko(l, t, e)
              : (oe(t), (l = Kt(l, t, e)), l !== null ? l.sibling : null);
        oe(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((a = (e & t.childLanes) !== 0),
          a || (fa(l, t, e, !1), (a = (e & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return wo(l, t, e);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          B(Dl, Dl.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Go(l, t, e, t.pendingProps));
      case 24:
        ie(t, _l, l.memoizedState.cache);
    }
    return Kt(l, t, e);
  }
  function $o(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Cl = !0;
      else {
        if (!zc(l, e) && (t.flags & 128) === 0) return ((Cl = !1), im(l, t, e));
        Cl = (l.flags & 131072) !== 0;
      }
    else ((Cl = !1), cl && (t.flags & 1048576) !== 0 && As(t, Va, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (((l = Ye(t.elementType)), (t.type = l), typeof l == "function"))
            Ni(l)
              ? ((a = Ze(l, a)), (t.tag = 1), (t = Lo(null, t, l, a, e)))
              : ((t.tag = 0), (t = yc(null, t, l, a, e)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === w) {
                ((t.tag = 11), (t = Bo(null, t, l, a, e)));
                break l;
              } else if (u === ll) {
                ((t.tag = 14), (t = qo(null, t, l, a, e)));
                break l;
              }
            }
            throw ((t = Ht(l) || l), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return yc(l, t, t.type, t.pendingProps, e);
      case 1:
        return ((a = t.type), (u = Ze(a, t.pendingProps)), Lo(l, t, a, u, e));
      case 3:
        l: {
          if ((Wl(t, t.stateNode.containerInfo), l === null))
            throw Error(s(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Li(l, t), Ia(t, a, null, e));
          var i = t.memoizedState;
          if (
            ((a = i.cache),
            ie(t, _l, a),
            a !== n.cache && qi(t, [_l], e, !0),
            Fa(),
            (a = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: a, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Vo(l, t, a, e);
              break l;
            } else if (a !== u) {
              ((u = bt(Error(s(424)), t)), Ka(u), (t = Vo(l, t, a, e)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                zl = xt(l.firstChild),
                  Vl = t,
                  cl = !0,
                  ue = null,
                  Tt = !0,
                  e = Ys(t, null, a, e),
                  t.child = e;
                e;
              )
                ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
            }
          else {
            if ((Re(), a === u)) {
              t = Kt(l, t, e);
              break l;
            }
            Jl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          mn(l, t),
          l === null
            ? (e = nr(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = e)
              : cl ||
                ((e = t.type),
                (l = t.pendingProps),
                (a = _n(el.current).createElement(e)),
                (a[Ll] = t),
                (a[Fl] = l),
                wl(a, e, l),
                Ql(a),
                (t.stateNode = a))
            : (t.memoizedState = nr(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Da(t),
          l === null &&
            cl &&
            ((a = t.stateNode = er(t.type, t.pendingProps, el.current)),
            (Vl = t),
            (Tt = !0),
            (u = zl),
            be(t.type) ? ((ef = u), (zl = xt(a.firstChild))) : (zl = u)),
          Jl(l, t, t.pendingProps.children, e),
          mn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            cl &&
            ((u = a = zl) &&
              ((a = Bm(a, t.type, t.pendingProps, Tt)),
              a !== null
                ? ((t.stateNode = a),
                  (Vl = t),
                  (zl = xt(a.firstChild)),
                  (Tt = !1),
                  (u = !0))
                : (u = !1)),
            u || ne(t)),
          Da(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = n.children),
          Fc(u, n) ? (a = null) : i !== null && Fc(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = ki(l, t, Fh, null, null, e)), (Su._currentValue = u)),
          mn(l, t),
          Jl(l, t, a, e),
          t.child
        );
      case 6:
        return (
          l === null &&
            cl &&
            ((l = e = zl) &&
              ((e = qm(e, t.pendingProps, Tt)),
              e !== null
                ? ((t.stateNode = e), (Vl = t), (zl = null), (l = !0))
                : (l = !1)),
            l || ne(t)),
          null
        );
      case 13:
        return Ko(l, t, e);
      case 4:
        return (
          Wl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          l === null ? (t.child = Xe(t, null, a, e)) : Jl(l, t, a, e),
          t.child
        );
      case 11:
        return Bo(l, t, t.type, t.pendingProps, e);
      case 7:
        return (Jl(l, t, t.pendingProps, e), t.child);
      case 8:
        return (Jl(l, t, t.pendingProps.children, e), t.child);
      case 12:
        return (Jl(l, t, t.pendingProps.children, e), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          ie(t, t.type, a.value),
          Jl(l, t, a.children, e),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          Be(t),
          (u = Kl(u)),
          (a = a(u)),
          (t.flags |= 1),
          Jl(l, t, a, e),
          t.child
        );
      case 14:
        return qo(l, t, t.type, t.pendingProps, e);
      case 15:
        return Yo(l, t, t.type, t.pendingProps, e);
      case 19:
        return wo(l, t, e);
      case 31:
        return nm(l, t, e);
      case 22:
        return Go(l, t, e, t.pendingProps);
      case 24:
        return (
          Be(t),
          (a = Kl(_l)),
          l === null
            ? ((u = Xi()),
              u === null &&
                ((u = Tl),
                (n = Yi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= e),
                (u = n)),
              (t.memoizedState = { parent: a, cache: u }),
              Zi(t),
              ie(t, _l, u))
            : ((l.lanes & e) !== 0 && (Li(l, t), Ia(t, null, null, e), Fa()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  ie(t, _l, a))
                : ((a = n.cache),
                  ie(t, _l, a),
                  a !== u.cache && qi(t, [_l], e, !0))),
          Jl(l, t, t.pendingProps.children, e),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Jt(l) {
    l.flags |= 4;
  }
  function xc(l, t, e, a, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Ed()) l.flags |= 8192;
        else throw ((Ge = Iu), Qi);
    } else l.flags &= -16777217;
  }
  function Wo(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !or(t)))
      if (Ed()) l.flags |= 8192;
      else throw ((Ge = Iu), Qi);
  }
  function yn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Mf() : 536870912), (l.lanes |= t), (pa |= t)));
  }
  function uu(l, t) {
    if (!cl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            (t.alternate !== null && (e = t), (t = t.sibling));
          e === null ? (l.tail = null) : (e.sibling = null);
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            (e.alternate !== null && (a = e), (e = e.sibling));
          a === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function xl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      e = 0,
      a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((e |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= a), (l.childLanes = e), t);
  }
  function cm(l, t, e) {
    var a = t.pendingProps;
    switch ((Ui(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (xl(t), null);
      case 1:
        return (xl(t), null);
      case 3:
        return (
          (e = t.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Zt(_l),
          Nl(),
          e.pendingContext &&
            ((e.context = e.pendingContext), (e.pendingContext = null)),
          (l === null || l.child === null) &&
            (ca(t)
              ? Jt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Ri())),
          xl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Jt(t),
              n !== null ? (xl(t), Wo(t, n)) : (xl(t), xc(t, u, null, a, e)))
            : n
              ? n !== l.memoizedState
                ? (Jt(t), xl(t), Wo(t, n))
                : (xl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== a && Jt(t),
                xl(t),
                xc(t, u, l, a, e)),
          null
        );
      case 27:
        if (
          (ju(t),
          (e = el.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== a && Jt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (xl(t), null);
          }
          ((l = X.current),
            ca(t) ? Ms(t) : ((l = er(u, a, e)), (t.stateNode = l), Jt(t)));
        }
        return (xl(t), null);
      case 5:
        if ((ju(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== a && Jt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (xl(t), null);
          }
          if (((n = X.current), ca(t))) Ms(t);
          else {
            var i = _n(el.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (n.multiple = !0)
                        : a.size && (n.size = a.size));
                    break;
                  default:
                    n =
                      typeof a.is == "string"
                        ? i.createElement(u, { is: a.is })
                        : i.createElement(u);
                }
            }
            ((n[Ll] = t), (n[Fl] = a));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((wl(n, u, a), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Jt(t);
          }
        }
        return (
          xl(t),
          xc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Jt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (((l = el.current), ca(t))) {
            if (
              ((l = t.stateNode),
              (e = t.memoizedProps),
              (a = null),
              (u = Vl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            ((l[Ll] = t),
              (l = !!(
                l.nodeValue === e ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Kd(l.nodeValue, e)
              )),
              l || ne(t, !0));
          } else
            ((l = _n(l).createTextNode(a)), (l[Ll] = t), (t.stateNode = l));
        }
        return (xl(t), null);
      case 31:
        if (((e = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = ca(t)), e !== null)) {
            if (l === null) {
              if (!a) throw Error(s(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(s(557));
              l[Ll] = t;
            } else
              (Re(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (xl(t), (l = !1));
          } else
            ((e = Ri()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (l = !0));
          if (!l) return t.flags & 256 ? (dt(t), t) : (dt(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (xl(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ca(t)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[Ll] = t;
            } else
              (Re(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (xl(t), (u = !1));
          } else
            ((u = Ri()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (dt(t), t) : (dt(t), null);
        }
        return (
          dt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = e), t)
            : ((e = a !== null),
              (l = l !== null && l.memoizedState !== null),
              e &&
                ((a = t.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (n = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (n = a.memoizedState.cachePool.pool),
                n !== u && (a.flags |= 2048)),
              e !== l && e && (t.child.flags |= 8192),
              yn(t, t.updateQueue),
              xl(t),
              null)
        );
      case 4:
        return (Nl(), l === null && Jc(t.stateNode.containerInfo), xl(t), null);
      case 10:
        return (Zt(t.type), xl(t), null);
      case 19:
        if ((N(Dl), (a = t.memoizedState), a === null)) return (xl(t), null);
        if (((u = (t.flags & 128) !== 0), (n = a.rendering), n === null))
          if (u) uu(a, !1);
          else {
            if (Ml !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = en(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      uu(a, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      yn(t, l),
                      t.subtreeFlags = 0,
                      l = e,
                      e = t.child;
                    e !== null;
                  )
                    (Ts(e, l), (e = e.sibling));
                  return (
                    B(Dl, (Dl.current & 1) | 2),
                    cl && Xt(t, a.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              nt() > En &&
              ((t.flags |= 128), (u = !0), uu(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = en(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                yn(t, l),
                uu(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !n.alternate &&
                  !cl)
              )
                return (xl(t), null);
            } else
              2 * nt() - a.renderingStartTime > En &&
                e !== 536870912 &&
                ((t.flags |= 128), (u = !0), uu(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = a.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (a.last = n));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = nt()),
            (l.sibling = null),
            (e = Dl.current),
            B(Dl, u ? (e & 1) | 2 : e & 1),
            cl && Xt(t, a.treeForkCount),
            l)
          : (xl(t), null);
      case 22:
      case 23:
        return (
          dt(t),
          wi(),
          (a = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (e & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (xl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : xl(t),
          (e = t.updateQueue),
          e !== null && yn(t, e.retryQueue),
          (e = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (e = l.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== e && (t.flags |= 2048),
          l !== null && N(qe),
          null
        );
      case 24:
        return (
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Zt(_l),
          xl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function fm(l, t) {
    switch ((Ui(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Zt(_l),
          Nl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (ju(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((dt(t), t.alternate === null)) throw Error(s(340));
          Re();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (dt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          Re();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (N(Dl), null);
      case 4:
        return (Nl(), null);
      case 10:
        return (Zt(t.type), null);
      case 22:
      case 23:
        return (
          dt(t),
          wi(),
          l !== null && N(qe),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Zt(_l), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ko(l, t) {
    switch ((Ui(t), t.tag)) {
      case 3:
        (Zt(_l), Nl());
        break;
      case 26:
      case 27:
      case 5:
        ju(t);
        break;
      case 4:
        Nl();
        break;
      case 31:
        t.memoizedState !== null && dt(t);
        break;
      case 13:
        dt(t);
        break;
      case 19:
        N(Dl);
        break;
      case 10:
        Zt(t.type);
        break;
      case 22:
      case 23:
        (dt(t), wi(), l !== null && N(qe));
        break;
      case 24:
        Zt(_l);
    }
  }
  function nu(l, t) {
    try {
      var e = t.updateQueue,
        a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create,
              i = e.inst;
            ((a = n()), (i.destroy = a));
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (c) {
      yl(t, t.return, c);
    }
  }
  function re(l, t, e) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var d = e,
                S = c;
              try {
                S();
              } catch (z) {
                yl(u, d, z);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (z) {
      yl(t, t.return, z);
    }
  }
  function Fo(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Xs(t, e);
      } catch (a) {
        yl(l, l.return, a);
      }
    }
  }
  function Io(l, t, e) {
    ((e.props = Ze(l.type, l.memoizedProps)), (e.state = l.memoizedState));
    try {
      e.componentWillUnmount();
    } catch (a) {
      yl(l, t, a);
    }
  }
  function iu(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? (l.refCleanup = e(a)) : (e.current = a);
      }
    } catch (u) {
      yl(l, t, u);
    }
  }
  function Ct(l, t) {
    var e = l.ref,
      a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          yl(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          yl(l, t, u);
        }
      else e.current = null;
  }
  function Po(l) {
    var t = l.type,
      e = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      yl(l, l.return, u);
    }
  }
  function Ac(l, t, e) {
    try {
      var a = l.stateNode;
      (Om(a, l.type, e, t), (a[Fl] = t));
    } catch (u) {
      yl(l, l.return, u);
    }
  }
  function ld(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && be(l.type)) ||
      l.tag === 4
    );
  }
  function jc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || ld(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && be(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Mc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode),
        t
          ? (e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e
            ).insertBefore(l, t)
          : ((t =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            t.appendChild(l),
            (e = e._reactRootContainer),
            e != null || t.onclick !== null || (t.onclick = qt)));
    else if (
      a !== 4 &&
      (a === 27 && be(l.type) && ((e = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Mc(l, t, e), l = l.sibling; l !== null; )
        (Mc(l, t, e), (l = l.sibling));
  }
  function gn(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode), t ? e.insertBefore(l, t) : e.appendChild(l));
    else if (
      a !== 4 &&
      (a === 27 && be(l.type) && (e = l.stateNode), (l = l.child), l !== null)
    )
      for (gn(l, t, e), l = l.sibling; l !== null; )
        (gn(l, t, e), (l = l.sibling));
  }
  function td(l) {
    var t = l.stateNode,
      e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (wl(t, a, e), (t[Ll] = l), (t[Fl] = e));
    } catch (n) {
      yl(l, l.return, n);
    }
  }
  var wt = !1,
    Rl = !1,
    Nc = !1,
    ed = typeof WeakSet == "function" ? WeakSet : Set,
    Zl = null;
  function sm(l, t) {
    if (((l = l.containerInfo), (Wc = Yn), (l = hs(l)), Ei(l))) {
      if ("selectionStart" in l)
        var e = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          e = ((e = l.ownerDocument) && e.defaultView) || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              (e.nodeType, n.nodeType);
            } catch {
              e = null;
              break l;
            }
            var i = 0,
              c = -1,
              d = -1,
              S = 0,
              z = 0,
              j = l,
              p = null;
            t: for (;;) {
              for (
                var T;
                j !== e || (u !== 0 && j.nodeType !== 3) || (c = i + u),
                  j !== n || (a !== 0 && j.nodeType !== 3) || (d = i + a),
                  j.nodeType === 3 && (i += j.nodeValue.length),
                  (T = j.firstChild) !== null;
              )
                ((p = j), (j = T));
              for (;;) {
                if (j === l) break t;
                if (
                  (p === e && ++S === u && (c = i),
                  p === n && ++z === a && (d = i),
                  (T = j.nextSibling) !== null)
                )
                  break;
                ((j = p), (p = j.parentNode));
              }
              j = T;
            }
            e = c === -1 || d === -1 ? null : { start: c, end: d };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (
      kc = { focusedElem: l, selectionRange: e }, Yn = !1, Zl = t;
      Zl !== null;
    )
      if (
        ((t = Zl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Zl = l));
      else
        for (; Zl !== null; ) {
          switch (((t = Zl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (e = 0; e < l.length; e++)
                  ((u = l[e]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (e = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = e.stateNode));
                try {
                  var G = Ze(e.type, u);
                  ((l = a.getSnapshotBeforeUpdate(G, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = l));
                } catch (L) {
                  yl(e, e.return, L);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (e = l.nodeType), e === 9)
                )
                  Pc(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pc(l);
                      break;
                    default:
                      l.textContent = "";
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
            default:
              if ((l & 1024) !== 0) throw Error(s(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Zl = l));
            break;
          }
          Zl = t.return;
        }
  }
  function ad(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Wt(l, e), a & 4 && nu(5, e));
        break;
      case 1:
        if ((Wt(l, e), a & 4))
          if (((l = e.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              yl(e, e.return, i);
            }
          else {
            var u = Ze(e.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              yl(e, e.return, i);
            }
          }
        (a & 64 && Fo(e), a & 512 && iu(e, e.return));
        break;
      case 3:
        if ((Wt(l, e), a & 64 && ((l = e.updateQueue), l !== null))) {
          if (((t = null), e.child !== null))
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Xs(l, t);
          } catch (i) {
            yl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && td(e);
      case 26:
      case 5:
        (Wt(l, e), t === null && a & 4 && Po(e), a & 512 && iu(e, e.return));
        break;
      case 12:
        Wt(l, e);
        break;
      case 31:
        (Wt(l, e), a & 4 && id(l, e));
        break;
      case 13:
        (Wt(l, e),
          a & 4 && cd(l, e),
          a & 64 &&
            ((l = e.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((e = Sm.bind(null, e)), Ym(l, e)))));
        break;
      case 22:
        if (((a = e.memoizedState !== null || wt), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Rl), (u = wt));
          var n = Rl;
          ((wt = a),
            (Rl = t) && !n ? kt(l, e, (e.subtreeFlags & 8772) !== 0) : Wt(l, e),
            (wt = u),
            (Rl = n));
        }
        break;
      case 30:
        break;
      default:
        Wt(l, e);
    }
  }
  function ud(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), ud(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && ui(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var Al = null,
    Pl = !1;
  function $t(l, t, e) {
    for (e = e.child; e !== null; ) (nd(l, t, e), (e = e.sibling));
  }
  function nd(l, t, e) {
    if (it && typeof it.onCommitFiberUnmount == "function")
      try {
        it.onCommitFiberUnmount(Oa, e);
      } catch {}
    switch (e.tag) {
      case 26:
        (Rl || Ct(e, t),
          $t(l, t, e),
          e.memoizedState
            ? e.memoizedState.count--
            : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
        break;
      case 27:
        Rl || Ct(e, t);
        var a = Al,
          u = Pl;
        (be(e.type) && ((Al = e.stateNode), (Pl = !1)),
          $t(l, t, e),
          vu(e.stateNode),
          (Al = a),
          (Pl = u));
        break;
      case 5:
        Rl || Ct(e, t);
      case 6:
        if (
          ((a = Al),
          (u = Pl),
          (Al = null),
          $t(l, t, e),
          (Al = a),
          (Pl = u),
          Al !== null)
        )
          if (Pl)
            try {
              (Al.nodeType === 9
                ? Al.body
                : Al.nodeName === "HTML"
                  ? Al.ownerDocument.body
                  : Al
              ).removeChild(e.stateNode);
            } catch (n) {
              yl(e, t, n);
            }
          else
            try {
              Al.removeChild(e.stateNode);
            } catch (n) {
              yl(e, t, n);
            }
        break;
      case 18:
        Al !== null &&
          (Pl
            ? ((l = Al),
              Fd(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                e.stateNode,
              ),
              Na(l))
            : Fd(Al, e.stateNode));
        break;
      case 4:
        ((a = Al),
          (u = Pl),
          (Al = e.stateNode.containerInfo),
          (Pl = !0),
          $t(l, t, e),
          (Al = a),
          (Pl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (re(2, e, t), Rl || re(4, e, t), $t(l, t, e));
        break;
      case 1:
        (Rl ||
          (Ct(e, t),
          (a = e.stateNode),
          typeof a.componentWillUnmount == "function" && Io(e, t, a)),
          $t(l, t, e));
        break;
      case 21:
        $t(l, t, e);
        break;
      case 22:
        ((Rl = (a = Rl) || e.memoizedState !== null), $t(l, t, e), (Rl = a));
        break;
      default:
        $t(l, t, e);
    }
  }
  function id(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Na(l);
      } catch (e) {
        yl(t, t.return, e);
      }
    }
  }
  function cd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Na(l);
      } catch (e) {
        yl(t, t.return, e);
      }
  }
  function om(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new ed()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new ed()),
          t
        );
      default:
        throw Error(s(435, l.tag));
    }
  }
  function Sn(l, t) {
    var e = om(l);
    t.forEach(function (a) {
      if (!e.has(a)) {
        e.add(a);
        var u = bm.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function lt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (be(c.type)) {
                ((Al = c.stateNode), (Pl = !1));
                break l;
              }
              break;
            case 5:
              ((Al = c.stateNode), (Pl = !1));
              break l;
            case 3:
            case 4:
              ((Al = c.stateNode.containerInfo), (Pl = !0));
              break l;
          }
          c = c.return;
        }
        if (Al === null) throw Error(s(160));
        (nd(n, i, u),
          (Al = null),
          (Pl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (fd(t, l), (t = t.sibling));
  }
  var Nt = null;
  function fd(l, t) {
    var e = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (lt(t, l),
          tt(l),
          a & 4 && (re(3, l, l.return), nu(3, l), re(5, l, l.return)));
        break;
      case 1:
        (lt(t, l),
          tt(l),
          a & 512 && (Rl || e === null || Ct(e, e.return)),
          a & 64 &&
            wt &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((e = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
        break;
      case 26:
        var u = Nt;
        if (
          (lt(t, l),
          tt(l),
          a & 512 && (Rl || e === null || Ct(e, e.return)),
          a & 4)
        ) {
          var n = e !== null ? e.memoizedState : null;
          if (((a = l.memoizedState), e === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  ((a = l.type),
                    (e = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (a) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Ca] ||
                          n[Ll] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        wl(n, a, e),
                        (n[Ll] = l),
                        Ql(n),
                        (a = n));
                      break l;
                    case "link":
                      var i = fr("link", "href", u).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (e.href == null || e.href === ""
                                ? null
                                : e.href) &&
                              n.getAttribute("rel") ===
                                (e.rel == null ? null : e.rel) &&
                              n.getAttribute("title") ===
                                (e.title == null ? null : e.title) &&
                              n.getAttribute("crossorigin") ===
                                (e.crossOrigin == null ? null : e.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(a)),
                        wl(n, a, e),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = fr("meta", "content", u).get(
                          a + (e.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (e.content == null ? null : "" + e.content) &&
                              n.getAttribute("name") ===
                                (e.name == null ? null : e.name) &&
                              n.getAttribute("property") ===
                                (e.property == null ? null : e.property) &&
                              n.getAttribute("http-equiv") ===
                                (e.httpEquiv == null ? null : e.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (e.charSet == null ? null : e.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(a)),
                        wl(n, a, e),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  ((n[Ll] = l), Ql(n), (a = n));
                }
                l.stateNode = a;
              } else sr(u, l.type, l.stateNode);
            else l.stateNode = cr(u, a, l.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? e.stateNode !== null &&
                    ((e = e.stateNode), e.parentNode.removeChild(e))
                  : n.count--,
                a === null
                  ? sr(u, l.type, l.stateNode)
                  : cr(u, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Ac(l, l.memoizedProps, e.memoizedProps);
        }
        break;
      case 27:
        (lt(t, l),
          tt(l),
          a & 512 && (Rl || e === null || Ct(e, e.return)),
          e !== null && a & 4 && Ac(l, l.memoizedProps, e.memoizedProps));
        break;
      case 5:
        if (
          (lt(t, l),
          tt(l),
          a & 512 && (Rl || e === null || Ct(e, e.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Fe(u, "");
          } catch (G) {
            yl(l, l.return, G);
          }
        }
        (a & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), Ac(l, u, e !== null ? e.memoizedProps : u)),
          a & 1024 && (Nc = !0));
        break;
      case 6:
        if ((lt(t, l), tt(l), a & 4)) {
          if (l.stateNode === null) throw Error(s(162));
          ((a = l.memoizedProps), (e = l.stateNode));
          try {
            e.nodeValue = a;
          } catch (G) {
            yl(l, l.return, G);
          }
        }
        break;
      case 3:
        if (
          ((Rn = null),
          (u = Nt),
          (Nt = Un(t.containerInfo)),
          lt(t, l),
          (Nt = u),
          tt(l),
          a & 4 && e !== null && e.memoizedState.isDehydrated)
        )
          try {
            Na(t.containerInfo);
          } catch (G) {
            yl(l, l.return, G);
          }
        Nc && ((Nc = !1), sd(l));
        break;
      case 4:
        ((a = Nt),
          (Nt = Un(l.stateNode.containerInfo)),
          lt(t, l),
          tt(l),
          (Nt = a));
        break;
      case 12:
        (lt(t, l), tt(l));
        break;
      case 31:
        (lt(t, l),
          tt(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Sn(l, a))));
        break;
      case 13:
        (lt(t, l),
          tt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (e !== null && e.memoizedState !== null) &&
            (pn = nt()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Sn(l, a))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var d = e !== null && e.memoizedState !== null,
          S = wt,
          z = Rl;
        if (
          ((wt = S || u),
          (Rl = z || d),
          lt(t, l),
          (Rl = z),
          (wt = S),
          tt(l),
          a & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (e === null || d || wt || Rl || Le(l)),
              e = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                d = e = t;
                try {
                  if (((n = d.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = d.stateNode;
                    var j = d.memoizedProps.style,
                      p =
                        j != null && j.hasOwnProperty("display")
                          ? j.display
                          : null;
                    c.style.display =
                      p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (G) {
                  yl(d, d.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                d = t;
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (G) {
                  yl(d, d.return, G);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                d = t;
                try {
                  var T = d.stateNode;
                  u ? Id(T, !0) : Id(d.stateNode, !1);
                } catch (G) {
                  yl(d, d.return, G);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (e === t && (e = null), (t = t.return));
            }
            (e === t && (e = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((e = a.retryQueue),
            e !== null && ((a.retryQueue = null), Sn(l, e))));
        break;
      case 19:
        (lt(t, l),
          tt(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), Sn(l, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (lt(t, l), tt(l));
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (ld(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(s(160));
        switch (e.tag) {
          case 27:
            var u = e.stateNode,
              n = jc(l);
            gn(l, n, u);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (Fe(i, ""), (e.flags &= -33));
            var c = jc(l);
            gn(l, c, i);
            break;
          case 3:
          case 4:
            var d = e.stateNode.containerInfo,
              S = jc(l);
            Mc(l, S, d);
            break;
          default:
            throw Error(s(161));
        }
      } catch (z) {
        yl(l, l.return, z);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function sd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (sd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (ad(l, t.alternate, t), (t = t.sibling));
  }
  function Le(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (re(4, t, t.return), Le(t));
          break;
        case 1:
          Ct(t, t.return);
          var e = t.stateNode;
          (typeof e.componentWillUnmount == "function" && Io(t, t.return, e),
            Le(t));
          break;
        case 27:
          vu(t.stateNode);
        case 26:
        case 5:
          (Ct(t, t.return), Le(t));
          break;
        case 22:
          t.memoizedState === null && Le(t);
          break;
        case 30:
          Le(t);
          break;
        default:
          Le(t);
      }
      l = l.sibling;
    }
  }
  function kt(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (kt(u, n, e), nu(4, n));
          break;
        case 1:
          if (
            (kt(u, n, e),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (S) {
              yl(a, a.return, S);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var c = a.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  Gs(d[u], c);
            } catch (S) {
              yl(a, a.return, S);
            }
          }
          (e && i & 64 && Fo(n), iu(n, n.return));
          break;
        case 27:
          td(n);
        case 26:
        case 5:
          (kt(u, n, e), e && a === null && i & 4 && Po(n), iu(n, n.return));
          break;
        case 12:
          kt(u, n, e);
          break;
        case 31:
          (kt(u, n, e), e && i & 4 && id(u, n));
          break;
        case 13:
          (kt(u, n, e), e && i & 4 && cd(u, n));
          break;
        case 22:
          (n.memoizedState === null && kt(u, n, e), iu(n, n.return));
          break;
        case 30:
          break;
        default:
          kt(u, n, e);
      }
      t = t.sibling;
    }
  }
  function Dc(l, t) {
    var e = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (e = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== e && (l != null && l.refCount++, e != null && Ja(e)));
  }
  function Oc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ja(l)));
  }
  function Dt(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (od(l, t, e, a), (t = t.sibling));
  }
  function od(l, t, e, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Dt(l, t, e, a), u & 2048 && nu(9, t));
        break;
      case 1:
        Dt(l, t, e, a);
        break;
      case 3:
        (Dt(l, t, e, a),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ja(l))));
        break;
      case 12:
        if (u & 2048) {
          (Dt(l, t, e, a), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (d) {
            yl(t, t.return, d);
          }
        } else Dt(l, t, e, a);
        break;
      case 31:
        Dt(l, t, e, a);
        break;
      case 13:
        Dt(l, t, e, a);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Dt(l, t, e, a)
              : cu(l, t)
            : n._visibility & 2
              ? Dt(l, t, e, a)
              : ((n._visibility |= 2),
                ga(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && Dc(i, t));
        break;
      case 24:
        (Dt(l, t, e, a), u & 2048 && Oc(t.alternate, t));
        break;
      default:
        Dt(l, t, e, a);
    }
  }
  function ga(l, t, e, a, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        c = e,
        d = a,
        S = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ga(n, i, c, d, u), nu(8, i));
          break;
        case 23:
          break;
        case 22:
          var z = i.stateNode;
          (i.memoizedState !== null
            ? z._visibility & 2
              ? ga(n, i, c, d, u)
              : cu(n, i)
            : ((z._visibility |= 2), ga(n, i, c, d, u)),
            u && S & 2048 && Dc(i.alternate, i));
          break;
        case 24:
          (ga(n, i, c, d, u), u && S & 2048 && Oc(i.alternate, i));
          break;
        default:
          ga(n, i, c, d, u);
      }
      t = t.sibling;
    }
  }
  function cu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            (cu(e, a), u & 2048 && Dc(a.alternate, a));
            break;
          case 24:
            (cu(e, a), u & 2048 && Oc(a.alternate, a));
            break;
          default:
            cu(e, a);
        }
        t = t.sibling;
      }
  }
  var fu = 8192;
  function Sa(l, t, e) {
    if (l.subtreeFlags & fu)
      for (l = l.child; l !== null; ) (dd(l, t, e), (l = l.sibling));
  }
  function dd(l, t, e) {
    switch (l.tag) {
      case 26:
        (Sa(l, t, e),
          l.flags & fu &&
            l.memoizedState !== null &&
            km(e, Nt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        Sa(l, t, e);
        break;
      case 3:
      case 4:
        var a = Nt;
        ((Nt = Un(l.stateNode.containerInfo)), Sa(l, t, e), (Nt = a));
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = fu), (fu = 16777216), Sa(l, t, e), (fu = a))
            : Sa(l, t, e));
        break;
      default:
        Sa(l, t, e);
    }
  }
  function rd(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function su(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Zl = a), md(a, l));
        }
      rd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (hd(l), (l = l.sibling));
  }
  function hd(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (su(l), l.flags & 2048 && re(9, l, l.return));
        break;
      case 3:
        su(l);
        break;
      case 12:
        su(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), bn(l))
          : su(l);
        break;
      default:
        su(l);
    }
  }
  function bn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          ((Zl = a), md(a, l));
        }
      rd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (re(8, t, t.return), bn(t));
          break;
        case 22:
          ((e = t.stateNode),
            e._visibility & 2 && ((e._visibility &= -3), bn(t)));
          break;
        default:
          bn(t);
      }
      l = l.sibling;
    }
  }
  function md(l, t) {
    for (; Zl !== null; ) {
      var e = Zl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          re(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ja(e.memoizedState.cache);
      }
      if (((a = e.child), a !== null)) ((a.return = e), (Zl = a));
      else
        l: for (e = l; Zl !== null; ) {
          a = Zl;
          var u = a.sibling,
            n = a.return;
          if ((ud(a), a === e)) {
            Zl = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (Zl = u));
            break l;
          }
          Zl = n;
        }
    }
  }
  var dm = {
      getCacheForType: function (l) {
        var t = Kl(_l),
          e = t.data.get(l);
        return (e === void 0 && ((e = l()), t.data.set(l, e)), e);
      },
      cacheSignal: function () {
        return Kl(_l).controller.signal;
      },
    },
    rm = typeof WeakMap == "function" ? WeakMap : Map,
    dl = 0,
    Tl = null,
    al = null,
    nl = 0,
    vl = 0,
    rt = null,
    he = !1,
    ba = !1,
    _c = !1,
    Ft = 0,
    Ml = 0,
    me = 0,
    Ve = 0,
    Uc = 0,
    ht = 0,
    pa = 0,
    ou = null,
    et = null,
    Cc = !1,
    pn = 0,
    vd = 0,
    En = 1 / 0,
    Tn = null,
    ve = null,
    Bl = 0,
    ye = null,
    Ea = null,
    It = 0,
    Rc = 0,
    Hc = null,
    yd = null,
    du = 0,
    Bc = null;
  function mt() {
    return (dl & 2) !== 0 && nl !== 0 ? nl & -nl : x.T !== null ? Zc() : _f();
  }
  function gd() {
    if (ht === 0)
      if ((nl & 536870912) === 0 || cl) {
        var l = Du;
        ((Du <<= 1), (Du & 3932160) === 0 && (Du = 262144), (ht = l));
      } else ht = 536870912;
    return ((l = ot.current), l !== null && (l.flags |= 32), ht);
  }
  function at(l, t, e) {
    (((l === Tl && (vl === 2 || vl === 9)) || l.cancelPendingCommit !== null) &&
      (Ta(l, 0), ge(l, nl, ht, !1)),
      Ua(l, e),
      ((dl & 2) === 0 || l !== Tl) &&
        (l === Tl &&
          ((dl & 2) === 0 && (Ve |= e), Ml === 4 && ge(l, nl, ht, !1)),
        Rt(l)));
  }
  function Sd(l, t, e) {
    if ((dl & 6) !== 0) throw Error(s(327));
    var a = (!e && (t & 127) === 0 && (t & l.expiredLanes) === 0) || _a(l, t),
      u = a ? vm(l, t) : Yc(l, t, !0),
      n = a;
    do {
      if (u === 0) {
        ba && !a && ge(l, t, 0, !1);
        break;
      } else {
        if (((e = l.current.alternate), n && !hm(e))) {
          ((u = Yc(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = ou;
              var d = c.current.memoizedState.isDehydrated;
              if ((d && (Ta(c, i).flags |= 256), (i = Yc(c, i, !1)), i !== 2)) {
                if (_c && !d) {
                  ((c.errorRecoveryDisabledLanes |= n), (Ve |= n), (u = 4));
                  break l;
                }
                ((n = et),
                  (et = u),
                  n !== null &&
                    (et === null ? (et = n) : et.push.apply(et, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (Ta(l, 0), ge(l, t, 0, !0));
          break;
        }
        l: {
          switch (((a = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ge(a, t, ht, !he);
              break l;
            case 2:
              et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((u = pn + 300 - nt()), 10 < u)) {
            if ((ge(a, t, ht, !he), _u(a, 0, !0) !== 0)) break l;
            ((It = t),
              (a.timeoutHandle = Wd(
                bd.bind(
                  null,
                  a,
                  e,
                  et,
                  Tn,
                  Cc,
                  t,
                  ht,
                  Ve,
                  pa,
                  he,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          bd(a, e, et, Tn, Cc, t, ht, Ve, pa, he, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Rt(l);
  }
  function bd(l, t, e, a, u, n, i, c, d, S, z, j, p, T) {
    if (
      ((l.timeoutHandle = -1),
      (j = t.subtreeFlags),
      j & 8192 || (j & 16785408) === 16785408)
    ) {
      ((j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt,
      }),
        dd(t, n, j));
      var G =
        (n & 62914560) === n ? pn - nt() : (n & 4194048) === n ? vd - nt() : 0;
      if (((G = Fm(j, G)), G !== null)) {
        ((It = n),
          (l.cancelPendingCommit = G(
            Md.bind(null, l, t, n, e, a, u, i, c, d, z, j, null, p, T),
          )),
          ge(l, n, i, !S));
        return;
      }
    }
    Md(l, t, n, e, a, u, i, c, d);
  }
  function hm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if (
        (e === 0 || e === 11 || e === 15) &&
        t.flags & 16384 &&
        ((e = t.updateQueue), e !== null && ((e = e.stores), e !== null))
      )
        for (var a = 0; a < e.length; a++) {
          var u = e[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!ft(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((e = t.child), t.subtreeFlags & 16384 && e !== null))
        ((e.return = t), (t = e));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ge(l, t, e, a) {
    ((t &= ~Uc),
      (t &= ~Ve),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      a && (l.warmLanes |= t),
      (a = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - ct(u),
        i = 1 << n;
      ((a[n] = -1), (u &= ~i));
    }
    e !== 0 && Nf(l, e, t);
  }
  function zn() {
    return (dl & 6) === 0 ? (ru(0), !1) : !0;
  }
  function qc() {
    if (al !== null) {
      if (vl === 0) var l = al.return;
      else ((l = al), (Qt = He = null), Pi(l), (ra = null), ($a = 0), (l = al));
      for (; l !== null; ) (ko(l.alternate, l), (l = l.return));
      al = null;
    }
  }
  function Ta(l, t) {
    var e = l.timeoutHandle;
    (e !== -1 && ((l.timeoutHandle = -1), Cm(e)),
      (e = l.cancelPendingCommit),
      e !== null && ((l.cancelPendingCommit = null), e()),
      (It = 0),
      qc(),
      (Tl = l),
      (al = e = Gt(l.current, null)),
      (nl = t),
      (vl = 0),
      (rt = null),
      (he = !1),
      (ba = _a(l, t)),
      (_c = !1),
      (pa = ht = Uc = Ve = me = Ml = 0),
      (et = ou = null),
      (Cc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var u = 31 - ct(a),
          n = 1 << u;
        ((t |= l[u]), (a &= ~n));
      }
    return ((Ft = t), Lu(), e);
  }
  function pd(l, t) {
    ((F = null),
      (x.H = eu),
      t === da || t === Fu
        ? ((t = Hs()), (vl = 3))
        : t === Qi
          ? ((t = Hs()), (vl = 4))
          : (vl =
              t === vc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (rt = t),
      al === null && ((Ml = 1), rn(l, bt(t, l.current))));
  }
  function Ed() {
    var l = ot.current;
    return l === null
      ? !0
      : (nl & 4194048) === nl
        ? zt === null
        : (nl & 62914560) === nl || (nl & 536870912) !== 0
          ? l === zt
          : !1;
  }
  function Td() {
    var l = x.H;
    return ((x.H = eu), l === null ? eu : l);
  }
  function zd() {
    var l = x.A;
    return ((x.A = dm), l);
  }
  function xn() {
    ((Ml = 4),
      he || ((nl & 4194048) !== nl && ot.current !== null) || (ba = !0),
      ((me & 134217727) === 0 && (Ve & 134217727) === 0) ||
        Tl === null ||
        ge(Tl, nl, ht, !1));
  }
  function Yc(l, t, e) {
    var a = dl;
    dl |= 2;
    var u = Td(),
      n = zd();
    ((Tl !== l || nl !== t) && ((Tn = null), Ta(l, t)), (t = !1));
    var i = Ml;
    l: do
      try {
        if (vl !== 0 && al !== null) {
          var c = al,
            d = rt;
          switch (vl) {
            case 8:
              (qc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ot.current === null && (t = !0);
              var S = vl;
              if (((vl = 0), (rt = null), za(l, c, d, S), e && ba)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((S = vl), (vl = 0), (rt = null), za(l, c, d, S));
          }
        }
        (mm(), (i = Ml));
        break;
      } catch (z) {
        pd(l, z);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Qt = He = null),
      (dl = a),
      (x.H = u),
      (x.A = n),
      al === null && ((Tl = null), (nl = 0), Lu()),
      i
    );
  }
  function mm() {
    for (; al !== null; ) xd(al);
  }
  function vm(l, t) {
    var e = dl;
    dl |= 2;
    var a = Td(),
      u = zd();
    Tl !== l || nl !== t
      ? ((Tn = null), (En = nt() + 500), Ta(l, t))
      : (ba = _a(l, t));
    l: do
      try {
        if (vl !== 0 && al !== null) {
          t = al;
          var n = rt;
          t: switch (vl) {
            case 1:
              ((vl = 0), (rt = null), za(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Cs(n)) {
                ((vl = 0), (rt = null), Ad(t));
                break;
              }
              ((t = function () {
                ((vl !== 2 && vl !== 9) || Tl !== l || (vl = 7), Rt(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              vl = 7;
              break l;
            case 4:
              vl = 5;
              break l;
            case 7:
              Cs(n)
                ? ((vl = 0), (rt = null), Ad(t))
                : ((vl = 0), (rt = null), za(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (al.tag) {
                case 26:
                  i = al.memoizedState;
                case 5:
                case 27:
                  var c = al;
                  if (i ? or(i) : c.stateNode.complete) {
                    ((vl = 0), (rt = null));
                    var d = c.sibling;
                    if (d !== null) al = d;
                    else {
                      var S = c.return;
                      S !== null ? ((al = S), An(S)) : (al = null);
                    }
                    break t;
                  }
              }
              ((vl = 0), (rt = null), za(l, t, n, 5));
              break;
            case 6:
              ((vl = 0), (rt = null), za(l, t, n, 6));
              break;
            case 8:
              (qc(), (Ml = 6));
              break l;
            default:
              throw Error(s(462));
          }
        }
        ym();
        break;
      } catch (z) {
        pd(l, z);
      }
    while (!0);
    return (
      (Qt = He = null),
      (x.H = a),
      (x.A = u),
      (dl = e),
      al !== null ? 0 : ((Tl = null), (nl = 0), Lu(), Ml)
    );
  }
  function ym() {
    for (; al !== null && !Gr(); ) xd(al);
  }
  function xd(l) {
    var t = $o(l.alternate, l, Ft);
    ((l.memoizedProps = l.pendingProps), t === null ? An(l) : (al = t));
  }
  function Ad(l) {
    var t = l,
      e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Zo(e, t, t.pendingProps, t.type, void 0, nl);
        break;
      case 11:
        t = Zo(e, t, t.pendingProps, t.type.render, t.ref, nl);
        break;
      case 5:
        Pi(t);
      default:
        (ko(e, t), (t = al = Ts(t, Ft)), (t = $o(e, t, Ft)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? An(l) : (al = t));
  }
  function za(l, t, e, a) {
    ((Qt = He = null), Pi(t), (ra = null), ($a = 0));
    var u = t.return;
    try {
      if (um(l, u, t, e, nl)) {
        ((Ml = 1), rn(l, bt(e, l.current)), (al = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((al = u), n);
      ((Ml = 1), rn(l, bt(e, l.current)), (al = null));
      return;
    }
    t.flags & 32768
      ? (cl || a === 1
          ? (l = !0)
          : ba || (nl & 536870912) !== 0
            ? (l = !1)
            : ((he = l = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = ot.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        jd(t, l))
      : An(t);
  }
  function An(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        jd(t, he);
        return;
      }
      l = t.return;
      var e = cm(t.alternate, t, Ft);
      if (e !== null) {
        al = e;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        al = t;
        return;
      }
      al = t = l;
    } while (t !== null);
    Ml === 0 && (Ml = 5);
  }
  function jd(l, t) {
    do {
      var e = fm(l.alternate, l);
      if (e !== null) {
        ((e.flags &= 32767), (al = e));
        return;
      }
      if (
        ((e = l.return),
        e !== null &&
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        al = l;
        return;
      }
      al = l = e;
    } while (l !== null);
    ((Ml = 6), (al = null));
  }
  function Md(l, t, e, a, u, n, i, c, d) {
    l.cancelPendingCommit = null;
    do jn();
    while (Bl !== 0);
    if ((dl & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === l.current) throw Error(s(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= ji),
        Wr(l, e, n, i, c, d),
        l === Tl && ((al = Tl = null), (nl = 0)),
        (Ea = t),
        (ye = l),
        (It = e),
        (Rc = n),
        (Hc = u),
        (yd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            pm(Mu, function () {
              return (Ud(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = x.T), (x.T = null), (u = H.p), (H.p = 2), (i = dl), (dl |= 4));
        try {
          sm(l, t, e);
        } finally {
          ((dl = i), (H.p = u), (x.T = a));
        }
      }
      ((Bl = 1), Nd(), Dd(), Od());
    }
  }
  function Nd() {
    if (Bl === 1) {
      Bl = 0;
      var l = ye,
        t = Ea,
        e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        ((e = x.T), (x.T = null));
        var a = H.p;
        H.p = 2;
        var u = dl;
        dl |= 4;
        try {
          fd(t, l);
          var n = kc,
            i = hs(l.containerInfo),
            c = n.focusedElem,
            d = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            rs(c.ownerDocument.documentElement, c)
          ) {
            if (d !== null && Ei(c)) {
              var S = d.start,
                z = d.end;
              if ((z === void 0 && (z = S), "selectionStart" in c))
                ((c.selectionStart = S),
                  (c.selectionEnd = Math.min(z, c.value.length)));
              else {
                var j = c.ownerDocument || document,
                  p = (j && j.defaultView) || window;
                if (p.getSelection) {
                  var T = p.getSelection(),
                    G = c.textContent.length,
                    L = Math.min(d.start, G),
                    pl = d.end === void 0 ? L : Math.min(d.end, G);
                  !T.extend && L > pl && ((i = pl), (pl = L), (L = i));
                  var m = ds(c, L),
                    r = ds(c, pl);
                  if (
                    m &&
                    r &&
                    (T.rangeCount !== 1 ||
                      T.anchorNode !== m.node ||
                      T.anchorOffset !== m.offset ||
                      T.focusNode !== r.node ||
                      T.focusOffset !== r.offset)
                  ) {
                    var g = j.createRange();
                    (g.setStart(m.node, m.offset),
                      T.removeAllRanges(),
                      L > pl
                        ? (T.addRange(g), T.extend(r.node, r.offset))
                        : (g.setEnd(r.node, r.offset), T.addRange(g)));
                  }
                }
              }
            }
            for (j = [], T = c; (T = T.parentNode); )
              T.nodeType === 1 &&
                j.push({ element: T, left: T.scrollLeft, top: T.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < j.length;
              c++
            ) {
              var A = j[c];
              ((A.element.scrollLeft = A.left), (A.element.scrollTop = A.top));
            }
          }
          ((Yn = !!Wc), (kc = Wc = null));
        } finally {
          ((dl = u), (H.p = a), (x.T = e));
        }
      }
      ((l.current = t), (Bl = 2));
    }
  }
  function Dd() {
    if (Bl === 2) {
      Bl = 0;
      var l = ye,
        t = Ea,
        e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        ((e = x.T), (x.T = null));
        var a = H.p;
        H.p = 2;
        var u = dl;
        dl |= 4;
        try {
          ad(l, t.alternate, t);
        } finally {
          ((dl = u), (H.p = a), (x.T = e));
        }
      }
      Bl = 3;
    }
  }
  function Od() {
    if (Bl === 4 || Bl === 3) {
      ((Bl = 0), Xr());
      var l = ye,
        t = Ea,
        e = It,
        a = yd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Bl = 5)
        : ((Bl = 0), (Ea = ye = null), _d(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ve = null),
        ei(e),
        (t = t.stateNode),
        it && typeof it.onCommitFiberRoot == "function")
      )
        try {
          it.onCommitFiberRoot(Oa, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = x.T), (u = H.p), (H.p = 2), (x.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((x.T = t), (H.p = u));
        }
      }
      ((It & 3) !== 0 && jn(),
        Rt(l),
        (u = l.pendingLanes),
        (e & 261930) !== 0 && (u & 42) !== 0
          ? l === Bc
            ? du++
            : ((du = 0), (Bc = l))
          : (du = 0),
        ru(0));
    }
  }
  function _d(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ja(t)));
  }
  function jn() {
    return (Nd(), Dd(), Od(), Ud());
  }
  function Ud() {
    if (Bl !== 5) return !1;
    var l = ye,
      t = Rc;
    Rc = 0;
    var e = ei(It),
      a = x.T,
      u = H.p;
    try {
      ((H.p = 32 > e ? 32 : e), (x.T = null), (e = Hc), (Hc = null));
      var n = ye,
        i = It;
      if (((Bl = 0), (Ea = ye = null), (It = 0), (dl & 6) !== 0))
        throw Error(s(331));
      var c = dl;
      if (
        ((dl |= 4),
        hd(n.current),
        od(n, n.current, i, e),
        (dl = c),
        ru(0, !1),
        it && typeof it.onPostCommitFiberRoot == "function")
      )
        try {
          it.onPostCommitFiberRoot(Oa, n);
        } catch {}
      return !0;
    } finally {
      ((H.p = u), (x.T = a), _d(l, t));
    }
  }
  function Cd(l, t, e) {
    ((t = bt(e, t)),
      (t = mc(l.stateNode, t, 2)),
      (l = se(l, t, 2)),
      l !== null && (Ua(l, 2), Rt(l)));
  }
  function yl(l, t, e) {
    if (l.tag === 3) Cd(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Cd(t, l, e);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ve === null || !ve.has(a)))
          ) {
            ((l = bt(e, l)),
              (e = Ro(2)),
              (a = se(t, e, 2)),
              a !== null && (Ho(e, a, t, l), Ua(a, 2), Rt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new rm();
      var u = new Set();
      a.set(t, u);
    } else ((u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u)));
    u.has(e) ||
      ((_c = !0), u.add(e), (l = gm.bind(null, l, t, e)), t.then(l, l));
  }
  function gm(l, t, e) {
    var a = l.pingCache;
    (a !== null && a.delete(t),
      (l.pingedLanes |= l.suspendedLanes & e),
      (l.warmLanes &= ~e),
      Tl === l &&
        (nl & e) === e &&
        (Ml === 4 || (Ml === 3 && (nl & 62914560) === nl && 300 > nt() - pn)
          ? (dl & 2) === 0 && Ta(l, 0)
          : (Uc |= e),
        pa === nl && (pa = 0)),
      Rt(l));
  }
  function Rd(l, t) {
    (t === 0 && (t = Mf()), (l = Ue(l, t)), l !== null && (Ua(l, t), Rt(l)));
  }
  function Sm(l) {
    var t = l.memoizedState,
      e = 0;
    (t !== null && (e = t.retryLane), Rd(l, e));
  }
  function bm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (a !== null && a.delete(t), Rd(l, e));
  }
  function pm(l, t) {
    return In(l, t);
  }
  var Mn = null,
    xa = null,
    Xc = !1,
    Nn = !1,
    Qc = !1,
    Se = 0;
  function Rt(l) {
    (l !== xa &&
      l.next === null &&
      (xa === null ? (Mn = xa = l) : (xa = xa.next = l)),
      (Nn = !0),
      Xc || ((Xc = !0), Tm()));
  }
  function ru(l, t) {
    if (!Qc && Nn) {
      Qc = !0;
      do
        for (var e = !1, a = Mn; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = a.suspendedLanes,
                c = a.pingedLanes;
              ((n = (1 << (31 - ct(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((e = !0), Yd(a, n));
          } else
            ((n = nl),
              (n = _u(
                a,
                a === Tl ? n : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || _a(a, n) || ((e = !0), Yd(a, n)));
          a = a.next;
        }
      while (e);
      Qc = !1;
    }
  }
  function Em() {
    Hd();
  }
  function Hd() {
    Nn = Xc = !1;
    var l = 0;
    Se !== 0 && Um() && (l = Se);
    for (var t = nt(), e = null, a = Mn; a !== null; ) {
      var u = a.next,
        n = Bd(a, t);
      (n === 0
        ? ((a.next = null),
          e === null ? (Mn = u) : (e.next = u),
          u === null && (xa = e))
        : ((e = a), (l !== 0 || (n & 3) !== 0) && (Nn = !0)),
        (a = u));
    }
    ((Bl !== 0 && Bl !== 5) || ru(l), Se !== 0 && (Se = 0));
  }
  function Bd(l, t) {
    for (
      var e = l.suspendedLanes,
        a = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - ct(n),
        c = 1 << i,
        d = u[i];
      (d === -1
        ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = $r(c, t))
        : d <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = Tl),
      (e = nl),
      (e = _u(
        l,
        l === t ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (a = l.callbackNode),
      e === 0 ||
        (l === t && (vl === 2 || vl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Pn(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((e & 3) === 0 || _a(l, e)) {
      if (((t = e & -e), t === l.callbackPriority)) return t;
      switch ((a !== null && Pn(a), ei(e))) {
        case 2:
        case 8:
          e = Af;
          break;
        case 32:
          e = Mu;
          break;
        case 268435456:
          e = jf;
          break;
        default:
          e = Mu;
      }
      return (
        (a = qd.bind(null, l)),
        (e = In(e, a)),
        (l.callbackPriority = t),
        (l.callbackNode = e),
        t
      );
    }
    return (
      a !== null && a !== null && Pn(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function qd(l, t) {
    if (Bl !== 0 && Bl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var e = l.callbackNode;
    if (jn() && l.callbackNode !== e) return null;
    var a = nl;
    return (
      (a = _u(
        l,
        l === Tl ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Sd(l, a, t),
          Bd(l, nt()),
          l.callbackNode != null && l.callbackNode === e
            ? qd.bind(null, l)
            : null)
    );
  }
  function Yd(l, t) {
    if (jn()) return null;
    Sd(l, t, !0);
  }
  function Tm() {
    Rm(function () {
      (dl & 6) !== 0 ? In(xf, Em) : Hd();
    });
  }
  function Zc() {
    if (Se === 0) {
      var l = sa;
      (l === 0 && ((l = Nu), (Nu <<= 1), (Nu & 261888) === 0 && (Nu = 256)),
        (Se = l));
    }
    return Se;
  }
  function Gd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Hu("" + l);
  }
  function Xd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return (
      (e.name = t.name),
      (e.value = t.value),
      l.id && e.setAttribute("form", l.id),
      t.parentNode.insertBefore(e, t),
      (l = new FormData(l)),
      e.parentNode.removeChild(e),
      l
    );
  }
  function zm(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = Gd((u[Fl] || null).action),
        i = a.submitter;
      i &&
        ((t = (t = i[Fl] || null)
          ? Gd(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Gu("action", "action", null, a, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Se !== 0) {
                  var d = i ? Xd(u, i) : new FormData(u);
                  fc(
                    e,
                    { pending: !0, data: d, method: u.method, action: n },
                    null,
                    d,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (d = i ? Xd(u, i) : new FormData(u)),
                  fc(
                    e,
                    { pending: !0, data: d, method: u.method, action: n },
                    n,
                    d,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Lc = 0; Lc < Ai.length; Lc++) {
    var Vc = Ai[Lc],
      xm = Vc.toLowerCase(),
      Am = Vc[0].toUpperCase() + Vc.slice(1);
    Mt(xm, "on" + Am);
  }
  (Mt(ys, "onAnimationEnd"),
    Mt(gs, "onAnimationIteration"),
    Mt(Ss, "onAnimationStart"),
    Mt("dblclick", "onDoubleClick"),
    Mt("focusin", "onFocus"),
    Mt("focusout", "onBlur"),
    Mt(Qh, "onTransitionRun"),
    Mt(Zh, "onTransitionStart"),
    Mt(Lh, "onTransitionCancel"),
    Mt(bs, "onTransitionEnd"),
    We("onMouseEnter", ["mouseout", "mouseover"]),
    We("onMouseLeave", ["mouseout", "mouseover"]),
    We("onPointerEnter", ["pointerout", "pointerover"]),
    We("onPointerLeave", ["pointerout", "pointerover"]),
    Ne(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ne(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ne(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ne(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ne(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var hu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    jm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(hu),
    );
  function Qd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e],
        u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i],
              d = c.instance,
              S = c.currentTarget;
            if (((c = c.listener), d !== n && u.isPropagationStopped()))
              break l;
            ((n = c), (u.currentTarget = S));
            try {
              n(u);
            } catch (z) {
              Zu(z);
            }
            ((u.currentTarget = null), (n = d));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((c = a[i]),
              (d = c.instance),
              (S = c.currentTarget),
              (c = c.listener),
              d !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = S));
            try {
              n(u);
            } catch (z) {
              Zu(z);
            }
            ((u.currentTarget = null), (n = d));
          }
      }
    }
  }
  function ul(l, t) {
    var e = t[ai];
    e === void 0 && (e = t[ai] = new Set());
    var a = l + "__bubble";
    e.has(a) || (Zd(t, l, 2, !1), e.add(a));
  }
  function Kc(l, t, e) {
    var a = 0;
    (t && (a |= 4), Zd(e, l, a, t));
  }
  var Dn = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(l) {
    if (!l[Dn]) {
      ((l[Dn] = !0),
        Rf.forEach(function (e) {
          e !== "selectionchange" && (jm.has(e) || Kc(e, !1, l), Kc(e, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Dn] || ((t[Dn] = !0), Kc("selectionchange", !1, t));
    }
  }
  function Zd(l, t, e, a) {
    switch (gr(t)) {
      case 2:
        var u = l0;
        break;
      case 8:
        u = t0;
        break;
      default:
        u = ff;
    }
    ((e = u.bind(null, t, e, l)),
      (u = void 0),
      !ri ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? l.addEventListener(t, e, { capture: !0, passive: u })
          : l.addEventListener(t, e, !0)
        : u !== void 0
          ? l.addEventListener(t, e, { passive: u })
          : l.addEventListener(t, e, !1));
  }
  function wc(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var d = i.tag;
              if ((d === 3 || d === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Je(c)), i === null)) return;
            if (((d = i.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              a = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Jf(function () {
      var S = n,
        z = oi(e),
        j = [];
      l: {
        var p = ps.get(l);
        if (p !== void 0) {
          var T = Gu,
            G = l;
          switch (l) {
            case "keypress":
              if (qu(e) === 0) break l;
            case "keydown":
            case "keyup":
              T = bh;
              break;
            case "focusin":
              ((G = "focus"), (T = yi));
              break;
            case "focusout":
              ((G = "blur"), (T = yi));
              break;
            case "beforeblur":
            case "afterblur":
              T = yi;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = Wf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = ch;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Th;
              break;
            case ys:
            case gs:
            case Ss:
              T = oh;
              break;
            case bs:
              T = xh;
              break;
            case "scroll":
            case "scrollend":
              T = nh;
              break;
            case "wheel":
              T = jh;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Ff;
              break;
            case "toggle":
            case "beforetoggle":
              T = Nh;
          }
          var L = (t & 4) !== 0,
            pl = !L && (l === "scroll" || l === "scrollend"),
            m = L ? (p !== null ? p + "Capture" : null) : p;
          L = [];
          for (var r = S, g; r !== null; ) {
            var A = r;
            if (
              ((g = A.stateNode),
              (A = A.tag),
              (A !== 5 && A !== 26 && A !== 27) ||
                g === null ||
                m === null ||
                ((A = Ha(r, m)), A != null && L.push(mu(r, A, g))),
              pl)
            )
              break;
            r = r.return;
          }
          0 < L.length &&
            ((p = new T(p, G, null, e, z)), j.push({ event: p, listeners: L }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((p = l === "mouseover" || l === "pointerover"),
            (T = l === "mouseout" || l === "pointerout"),
            p &&
              e !== si &&
              (G = e.relatedTarget || e.fromElement) &&
              (Je(G) || G[Ke]))
          )
            break l;
          if (
            (T || p) &&
            ((p =
              z.window === z
                ? z
                : (p = z.ownerDocument)
                  ? p.defaultView || p.parentWindow
                  : window),
            T
              ? ((G = e.relatedTarget || e.toElement),
                (T = S),
                (G = G ? Je(G) : null),
                G !== null &&
                  ((pl = D(G)),
                  (L = G.tag),
                  G !== pl || (L !== 5 && L !== 27 && L !== 6)) &&
                  (G = null))
              : ((T = null), (G = S)),
            T !== G)
          ) {
            if (
              ((L = Wf),
              (A = "onMouseLeave"),
              (m = "onMouseEnter"),
              (r = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((L = Ff),
                (A = "onPointerLeave"),
                (m = "onPointerEnter"),
                (r = "pointer")),
              (pl = T == null ? p : Ra(T)),
              (g = G == null ? p : Ra(G)),
              (p = new L(A, r + "leave", T, e, z)),
              (p.target = pl),
              (p.relatedTarget = g),
              (A = null),
              Je(z) === S &&
                ((L = new L(m, r + "enter", G, e, z)),
                (L.target = g),
                (L.relatedTarget = pl),
                (A = L)),
              (pl = A),
              T && G)
            )
              t: {
                for (L = Mm, m = T, r = G, g = 0, A = m; A; A = L(A)) g++;
                A = 0;
                for (var Z = r; Z; Z = L(Z)) A++;
                for (; 0 < g - A; ) ((m = L(m)), g--);
                for (; 0 < A - g; ) ((r = L(r)), A--);
                for (; g--; ) {
                  if (m === r || (r !== null && m === r.alternate)) {
                    L = m;
                    break t;
                  }
                  ((m = L(m)), (r = L(r)));
                }
                L = null;
              }
            else L = null;
            (T !== null && Ld(j, p, T, L, !1),
              G !== null && pl !== null && Ld(j, pl, G, L, !0));
          }
        }
        l: {
          if (
            ((p = S ? Ra(S) : window),
            (T = p.nodeName && p.nodeName.toLowerCase()),
            T === "select" || (T === "input" && p.type === "file"))
          )
            var fl = ns;
          else if (as(p))
            if (is) fl = Yh;
            else {
              fl = Bh;
              var Q = Hh;
            }
          else
            ((T = p.nodeName),
              !T ||
              T.toLowerCase() !== "input" ||
              (p.type !== "checkbox" && p.type !== "radio")
                ? S && fi(S.elementType) && (fl = ns)
                : (fl = qh));
          if (fl && (fl = fl(l, S))) {
            us(j, fl, e, z);
            break l;
          }
          (Q && Q(l, p, S),
            l === "focusout" &&
              S &&
              p.type === "number" &&
              S.memoizedProps.value != null &&
              ci(p, "number", p.value));
        }
        switch (((Q = S ? Ra(S) : window), l)) {
          case "focusin":
            (as(Q) || Q.contentEditable === "true") &&
              ((ta = Q), (Ti = S), (La = null));
            break;
          case "focusout":
            La = Ti = ta = null;
            break;
          case "mousedown":
            zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((zi = !1), ms(j, e, z));
            break;
          case "selectionchange":
            if (Xh) break;
          case "keydown":
          case "keyup":
            ms(j, e, z);
        }
        var I;
        if (Si)
          l: {
            switch (l) {
              case "compositionstart":
                var il = "onCompositionStart";
                break l;
              case "compositionend":
                il = "onCompositionEnd";
                break l;
              case "compositionupdate":
                il = "onCompositionUpdate";
                break l;
            }
            il = void 0;
          }
        else
          la
            ? ts(l, e) && (il = "onCompositionEnd")
            : l === "keydown" &&
              e.keyCode === 229 &&
              (il = "onCompositionStart");
        (il &&
          (If &&
            e.locale !== "ko" &&
            (la || il !== "onCompositionStart"
              ? il === "onCompositionEnd" && la && (I = wf())
              : ((ee = z),
                (hi = "value" in ee ? ee.value : ee.textContent),
                (la = !0))),
          (Q = On(S, il)),
          0 < Q.length &&
            ((il = new kf(il, l, null, e, z)),
            j.push({ event: il, listeners: Q }),
            I ? (il.data = I) : ((I = es(e)), I !== null && (il.data = I)))),
          (I = Oh ? _h(l, e) : Uh(l, e)) &&
            ((il = On(S, "onBeforeInput")),
            0 < il.length &&
              ((Q = new kf("onBeforeInput", "beforeinput", null, e, z)),
              j.push({ event: Q, listeners: il }),
              (Q.data = I))),
          zm(j, l, S, e, z));
      }
      Qd(j, t);
    });
  }
  function mu(l, t, e) {
    return { instance: l, listener: t, currentTarget: e };
  }
  function On(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ha(l, e)),
          u != null && a.unshift(mu(l, u, n)),
          (u = Ha(l, t)),
          u != null && a.push(mu(l, u, n))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function Mm(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ld(l, t, e, a, u) {
    for (var n = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e,
        d = c.alternate,
        S = c.stateNode;
      if (((c = c.tag), d !== null && d === a)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        S === null ||
        ((d = S),
        u
          ? ((S = Ha(e, n)), S != null && i.unshift(mu(e, S, d)))
          : u || ((S = Ha(e, n)), S != null && i.push(mu(e, S, d)))),
        (e = e.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Nm = /\r\n?/g,
    Dm = /\u0000|\uFFFD/g;
  function Vd(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Nm,
        `
`,
      )
      .replace(Dm, "");
  }
  function Kd(l, t) {
    return ((t = Vd(t)), Vd(l) === t);
  }
  function bl(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || Fe(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            Fe(l, "" + a);
        break;
      case "className":
        Cu(l, "class", a);
        break;
      case "tabIndex":
        Cu(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Cu(l, e, a);
        break;
      case "style":
        Vf(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Cu(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(e);
          break;
        }
        ((a = Hu("" + a)), l.setAttribute(e, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (e === "formAction"
              ? (t !== "input" && bl(l, t, "name", u.name, u, null),
                bl(l, t, "formEncType", u.formEncType, u, null),
                bl(l, t, "formMethod", u.formMethod, u, null),
                bl(l, t, "formTarget", u.formTarget, u, null))
              : (bl(l, t, "encType", u.encType, u, null),
                bl(l, t, "method", u.method, u, null),
                bl(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        ((a = Hu("" + a)), l.setAttribute(e, a));
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "onScroll":
        a != null && ul("scroll", l);
        break;
      case "onScrollEnd":
        a != null && ul("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
          l.removeAttribute("xlink:href");
          break;
        }
        ((e = Hu("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
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
          ? l.setAttribute(e, "" + a)
          : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
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
          ? l.setAttribute(e, "")
          : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(e, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? l.setAttribute(e, a)
            : l.removeAttribute(e);
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
          ? l.setAttribute(e, a)
          : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(e)
          : l.setAttribute(e, a);
        break;
      case "popover":
        (ul("beforetoggle", l), ul("toggle", l), Uu(l, "popover", a));
        break;
      case "xlinkActuate":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Bt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Bt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Uu(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) ||
          (e[0] !== "o" && e[0] !== "O") ||
          (e[1] !== "n" && e[1] !== "N")) &&
          ((e = ah.get(e) || e), Uu(l, e, a));
    }
  }
  function $c(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        Vf(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((e = a.__html), e != null)) {
            if (u.children != null) throw Error(s(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Fe(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Fe(l, "" + a);
        break;
      case "onScroll":
        a != null && ul("scroll", l);
        break;
      case "onScrollEnd":
        a != null && ul("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Hf.hasOwnProperty(e))
          l: {
            if (
              e[0] === "o" &&
              e[1] === "n" &&
              ((u = e.endsWith("Capture")),
              (t = e.slice(2, u ? e.length - 7 : void 0)),
              (n = l[Fl] || null),
              (n = n != null ? n[e] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof a == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (e in l
                  ? (l[e] = null)
                  : l.hasAttribute(e) && l.removeAttribute(e)),
                l.addEventListener(t, a, u));
              break l;
            }
            e in l
              ? (l[e] = a)
              : a === !0
                ? l.setAttribute(e, "")
                : Uu(l, e, a);
          }
    }
  }
  function wl(l, t, e) {
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
        (ul("error", l), ul("load", l));
        var a = !1,
          u = !1,
          n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var i = e[n];
            if (i != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  bl(l, t, n, i, e, null);
              }
          }
        (u && bl(l, t, "srcSet", e.srcSet, e, null),
          a && bl(l, t, "src", e.src, e, null));
        return;
      case "input":
        ul("invalid", l);
        var c = (n = i = u = null),
          d = null,
          S = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var z = e[a];
            if (z != null)
              switch (a) {
                case "name":
                  u = z;
                  break;
                case "type":
                  i = z;
                  break;
                case "checked":
                  d = z;
                  break;
                case "defaultChecked":
                  S = z;
                  break;
                case "value":
                  n = z;
                  break;
                case "defaultValue":
                  c = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(s(137, t));
                  break;
                default:
                  bl(l, t, a, z, e, null);
              }
          }
        Xf(l, n, c, d, S, i, u, !1);
        return;
      case "select":
        (ul("invalid", l), (a = i = n = null));
        for (u in e)
          if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                bl(l, t, u, c, e, null);
            }
        ((t = n),
          (e = i),
          (l.multiple = !!a),
          t != null ? ke(l, !!a, t, !1) : e != null && ke(l, !!a, e, !0));
        return;
      case "textarea":
        (ul("invalid", l), (n = u = a = null));
        for (i in e)
          if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                bl(l, t, i, c, e, null);
            }
        Zf(l, a, u, n);
        return;
      case "option":
        for (d in e)
          if (e.hasOwnProperty(d) && ((a = e[d]), a != null))
            switch (d) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                bl(l, t, d, a, e, null);
            }
        return;
      case "dialog":
        (ul("beforetoggle", l),
          ul("toggle", l),
          ul("cancel", l),
          ul("close", l));
        break;
      case "iframe":
      case "object":
        ul("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hu.length; a++) ul(hu[a], l);
        break;
      case "image":
        (ul("error", l), ul("load", l));
        break;
      case "details":
        ul("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (ul("error", l), ul("load", l));
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
        for (S in e)
          if (e.hasOwnProperty(S) && ((a = e[S]), a != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                bl(l, t, S, a, e, null);
            }
        return;
      default:
        if (fi(t)) {
          for (z in e)
            e.hasOwnProperty(z) &&
              ((a = e[z]), a !== void 0 && $c(l, t, z, a, e, void 0));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && ((a = e[c]), a != null && bl(l, t, c, a, e, null));
  }
  function Om(l, t, e, a) {
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
        var u = null,
          n = null,
          i = null,
          c = null,
          d = null,
          S = null,
          z = null;
        for (T in e) {
          var j = e[T];
          if (e.hasOwnProperty(T) && j != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = j;
              default:
                a.hasOwnProperty(T) || bl(l, t, T, null, a, j);
            }
        }
        for (var p in a) {
          var T = a[p];
          if (((j = e[p]), a.hasOwnProperty(p) && (T != null || j != null)))
            switch (p) {
              case "type":
                n = T;
                break;
              case "name":
                u = T;
                break;
              case "checked":
                S = T;
                break;
              case "defaultChecked":
                z = T;
                break;
              case "value":
                i = T;
                break;
              case "defaultValue":
                c = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(s(137, t));
                break;
              default:
                T !== j && bl(l, t, p, T, a, j);
            }
        }
        ii(l, i, c, d, S, z, n, u);
        return;
      case "select":
        T = i = c = p = null;
        for (n in e)
          if (((d = e[n]), e.hasOwnProperty(n) && d != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                T = d;
              default:
                a.hasOwnProperty(n) || bl(l, t, n, null, a, d);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (d = e[u]),
            a.hasOwnProperty(u) && (n != null || d != null))
          )
            switch (u) {
              case "value":
                p = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== d && bl(l, t, u, n, a, d);
            }
        ((t = c),
          (e = i),
          (a = T),
          p != null
            ? ke(l, !!e, p, !1)
            : !!a != !!e &&
              (t != null ? ke(l, !!e, t, !0) : ke(l, !!e, e ? [] : "", !1)));
        return;
      case "textarea":
        T = p = null;
        for (c in e)
          if (
            ((u = e[c]),
            e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                bl(l, t, c, null, a, u);
            }
        for (i in a)
          if (
            ((u = a[i]),
            (n = e[i]),
            a.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                p = u;
                break;
              case "defaultValue":
                T = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== n && bl(l, t, i, u, a, n);
            }
        Qf(l, p, T);
        return;
      case "option":
        for (var G in e)
          if (
            ((p = e[G]),
            e.hasOwnProperty(G) && p != null && !a.hasOwnProperty(G))
          )
            switch (G) {
              case "selected":
                l.selected = !1;
                break;
              default:
                bl(l, t, G, null, a, p);
            }
        for (d in a)
          if (
            ((p = a[d]),
            (T = e[d]),
            a.hasOwnProperty(d) && p !== T && (p != null || T != null))
          )
            switch (d) {
              case "selected":
                l.selected =
                  p && typeof p != "function" && typeof p != "symbol";
                break;
              default:
                bl(l, t, d, p, a, T);
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
        for (var L in e)
          ((p = e[L]),
            e.hasOwnProperty(L) &&
              p != null &&
              !a.hasOwnProperty(L) &&
              bl(l, t, L, null, a, p));
        for (S in a)
          if (
            ((p = a[S]),
            (T = e[S]),
            a.hasOwnProperty(S) && p !== T && (p != null || T != null))
          )
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(s(137, t));
                break;
              default:
                bl(l, t, S, p, a, T);
            }
        return;
      default:
        if (fi(t)) {
          for (var pl in e)
            ((p = e[pl]),
              e.hasOwnProperty(pl) &&
                p !== void 0 &&
                !a.hasOwnProperty(pl) &&
                $c(l, t, pl, void 0, a, p));
          for (z in a)
            ((p = a[z]),
              (T = e[z]),
              !a.hasOwnProperty(z) ||
                p === T ||
                (p === void 0 && T === void 0) ||
                $c(l, t, z, p, a, T));
          return;
        }
    }
    for (var m in e)
      ((p = e[m]),
        e.hasOwnProperty(m) &&
          p != null &&
          !a.hasOwnProperty(m) &&
          bl(l, t, m, null, a, p));
    for (j in a)
      ((p = a[j]),
        (T = e[j]),
        !a.hasOwnProperty(j) ||
          p === T ||
          (p == null && T == null) ||
          bl(l, t, j, p, a, T));
  }
  function Jd(l) {
    switch (l) {
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
  function _m() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0;
        a < e.length;
        a++
      ) {
        var u = e[a],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Jd(i)) {
          for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
            var d = e[a],
              S = d.startTime;
            if (S > c) break;
            var z = d.transferSize,
              j = d.initiatorType;
            z &&
              Jd(j) &&
              ((d = d.responseEnd), (i += z * (d < c ? 1 : (c - S) / (d - S))));
          }
          if ((--a, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Wc = null,
    kc = null;
  function _n(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function wd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function $d(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Fc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ic = null;
  function Um() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Ic
        ? !1
        : ((Ic = l), !0)
      : ((Ic = null), !1);
  }
  var Wd = typeof setTimeout == "function" ? setTimeout : void 0,
    Cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    kd = typeof Promise == "function" ? Promise : void 0,
    Rm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof kd < "u"
          ? function (l) {
              return kd.resolve(null).then(l).catch(Hm);
            }
          : Wd;
  function Hm(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function be(l) {
    return l === "head";
  }
  function Fd(l, t) {
    var e = t,
      a = 0;
    do {
      var u = e.nextSibling;
      if ((l.removeChild(e), u && u.nodeType === 8))
        if (((e = u.data), e === "/$" || e === "/&")) {
          if (a === 0) {
            (l.removeChild(u), Na(t));
            return;
          }
          a--;
        } else if (
          e === "$" ||
          e === "$?" ||
          e === "$~" ||
          e === "$!" ||
          e === "&"
        )
          a++;
        else if (e === "html") vu(l.ownerDocument.documentElement);
        else if (e === "head") {
          ((e = l.ownerDocument.head), vu(e));
          for (var n = e.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[Ca] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              e.removeChild(n),
              (n = i));
          }
        } else e === "body" && vu(l.ownerDocument.body);
      e = u;
    } while (e);
    Na(t);
  }
  function Id(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (
        (e.nodeType === 1
          ? t
            ? ((e._stashedDisplay = e.style.display),
              (e.style.display = "none"))
            : ((e.style.display = e._stashedDisplay || ""),
              e.getAttribute("style") === "" && e.removeAttribute("style"))
          : e.nodeType === 3 &&
            (t
              ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
              : (e.nodeValue = e._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((e = a.data), e === "/$")) {
          if (l === 0) break;
          l--;
        } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || l++;
      e = a;
    } while (e);
  }
  function Pc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (((t = t.nextSibling), e.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Pc(e), ui(e));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Bm(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ca])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = xt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function qm(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = xt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Pd(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = xt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function lf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function tf(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Ym(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), e.removeEventListener("DOMContentLoaded", a));
      };
      (e.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
    }
  }
  function xt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
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
    return l;
  }
  var ef = null;
  function lr(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0) return xt(l.nextSibling);
          t--;
        } else
          (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function tr(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else (e !== "/$" && e !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function er(l, t, e) {
    switch (((t = _n(e)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(s(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(s(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(s(454));
        return l;
      default:
        throw Error(s(451));
    }
  }
  function vu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    ui(l);
  }
  var At = new Map(),
    ar = new Set();
  function Un(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var Pt = H.d;
  H.d = { f: Gm, r: Xm, D: Qm, C: Zm, L: Lm, m: Vm, X: Jm, S: Km, M: wm };
  function Gm() {
    var l = Pt.f(),
      t = zn();
    return l || t;
  }
  function Xm(l) {
    var t = we(l);
    t !== null && t.tag === 5 && t.type === "form" ? po(t) : Pt.r(l);
  }
  var Aa = typeof document > "u" ? null : document;
  function ur(l, t, e) {
    var a = Aa;
    if (a && typeof t == "string" && t) {
      var u = gt(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
        ar.has(u) ||
          (ar.add(u),
          (l = { rel: l, crossOrigin: e, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement("link")),
            wl(t, "link", l),
            Ql(t),
            a.head.appendChild(t))));
    }
  }
  function Qm(l) {
    (Pt.D(l), ur("dns-prefetch", l, null));
  }
  function Zm(l, t) {
    (Pt.C(l, t), ur("preconnect", l, t));
  }
  function Lm(l, t, e) {
    Pt.L(l, t, e);
    var a = Aa;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === "image" && e && e.imageSrcSet
        ? ((u += '[imagesrcset="' + gt(e.imageSrcSet) + '"]'),
          typeof e.imageSizes == "string" &&
            (u += '[imagesizes="' + gt(e.imageSizes) + '"]'))
        : (u += '[href="' + gt(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = ja(l);
          break;
        case "script":
          n = Ma(l);
      }
      At.has(n) ||
        ((l = U(
          {
            rel: "preload",
            href: t === "image" && e && e.imageSrcSet ? void 0 : l,
            as: t,
          },
          e,
        )),
        At.set(n, l),
        a.querySelector(u) !== null ||
          (t === "style" && a.querySelector(yu(n))) ||
          (t === "script" && a.querySelector(gu(n))) ||
          ((t = a.createElement("link")),
          wl(t, "link", l),
          Ql(t),
          a.head.appendChild(t)));
    }
  }
  function Vm(l, t) {
    Pt.m(l, t);
    var e = Aa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(l) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ma(l);
      }
      if (
        !At.has(n) &&
        ((l = U({ rel: "modulepreload", href: l }, t)),
        At.set(n, l),
        e.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(gu(n))) return;
        }
        ((a = e.createElement("link")),
          wl(a, "link", l),
          Ql(a),
          e.head.appendChild(a));
      }
    }
  }
  function Km(l, t, e) {
    Pt.S(l, t, e);
    var a = Aa;
    if (a && l) {
      var u = $e(a).hoistableStyles,
        n = ja(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = a.querySelector(yu(n)))) c.loading = 5;
        else {
          ((l = U({ rel: "stylesheet", href: l, "data-precedence": t }, e)),
            (e = At.get(n)) && af(l, e));
          var d = (i = a.createElement("link"));
          (Ql(d),
            wl(d, "link", l),
            (d._p = new Promise(function (S, z) {
              ((d.onload = S), (d.onerror = z));
            })),
            d.addEventListener("load", function () {
              c.loading |= 1;
            }),
            d.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            Cn(i, t, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function Jm(l, t) {
    Pt.X(l, t);
    var e = Aa;
    if (e && l) {
      var a = $e(e).hoistableScripts,
        u = Ma(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(gu(u))),
        n ||
          ((l = U({ src: l, async: !0 }, t)),
          (t = At.get(u)) && uf(l, t),
          (n = e.createElement("script")),
          Ql(n),
          wl(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function wm(l, t) {
    Pt.M(l, t);
    var e = Aa;
    if (e && l) {
      var a = $e(e).hoistableScripts,
        u = Ma(l),
        n = a.get(u);
      n ||
        ((n = e.querySelector(gu(u))),
        n ||
          ((l = U({ src: l, async: !0, type: "module" }, t)),
          (t = At.get(u)) && uf(l, t),
          (n = e.createElement("script")),
          Ql(n),
          wl(n, "link", l),
          e.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function nr(l, t, e, a) {
    var u = (u = el.current) ? Un(u) : null;
    if (!u) throw Error(s(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string"
          ? ((t = ja(e.href)),
            (e = $e(u).hoistableStyles),
            (a = e.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              e.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          e.rel === "stylesheet" &&
          typeof e.href == "string" &&
          typeof e.precedence == "string"
        ) {
          l = ja(e.href);
          var n = $e(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(yu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              At.has(l) ||
                ((e = {
                  rel: "preload",
                  as: "style",
                  href: e.href,
                  crossOrigin: e.crossOrigin,
                  integrity: e.integrity,
                  media: e.media,
                  hrefLang: e.hrefLang,
                  referrerPolicy: e.referrerPolicy,
                }),
                At.set(l, e),
                n || $m(u, l, e, i.state))),
            t && a === null)
          )
            throw Error(s(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = e.async),
          (e = e.src),
          typeof e == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ma(e)),
              (e = $e(u).hoistableScripts),
              (a = e.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                e.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, l));
    }
  }
  function ja(l) {
    return 'href="' + gt(l) + '"';
  }
  function yu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ir(l) {
    return U({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function $m(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = l.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        wl(t, "link", e),
        Ql(t),
        l.head.appendChild(t));
  }
  function Ma(l) {
    return '[src="' + gt(l) + '"]';
  }
  function gu(l) {
    return "script[async]" + l;
  }
  function cr(l, t, e) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + gt(e.href) + '"]');
          if (a) return ((t.instance = a), Ql(a), a);
          var u = U({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Ql(a),
            wl(a, "style", u),
            Cn(a, e.precedence, l),
            (t.instance = a)
          );
        case "stylesheet":
          u = ja(e.href);
          var n = l.querySelector(yu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Ql(n), n);
          ((a = ir(e)),
            (u = At.get(u)) && af(a, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Ql(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, d) {
              ((i.onload = c), (i.onerror = d));
            })),
            wl(n, "link", a),
            (t.state.loading |= 4),
            Cn(n, e.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ma(e.src)),
            (u = l.querySelector(gu(n)))
              ? ((t.instance = u), Ql(u), u)
              : ((a = e),
                (u = At.get(n)) && ((a = U({}, e)), uf(a, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Ql(u),
                wl(u, "link", a),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Cn(a, e.precedence, l));
    return t.instance;
  }
  function Cn(l, t, e) {
    for (
      var a = e.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        i = 0;
      i < a.length;
      i++
    ) {
      var c = a[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = e.nodeType === 9 ? e.head : e), t.insertBefore(l, t.firstChild));
  }
  function af(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function uf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Rn = null;
  function fr(l, t, e) {
    if (Rn === null) {
      var a = new Map(),
        u = (Rn = new Map());
      u.set(e, a);
    } else ((u = Rn), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
    if (a.has(l)) return a;
    for (
      a.set(l, null), e = e.getElementsByTagName(l), u = 0;
      u < e.length;
      u++
    ) {
      var n = e[u];
      if (
        !(
          n[Ca] ||
          n[Ll] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(n) : a.set(i, [n]);
      }
    }
    return a;
  }
  function sr(l, t, e) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        e,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Wm(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
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
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
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
  function or(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function km(l, t, e, a) {
    if (
      e.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = ja(a.href),
          n = t.querySelector(yu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Hn.bind(l)), t.then(l, l)),
            (e.state.loading |= 4),
            (e.instance = n),
            Ql(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (a = ir(a)),
          (u = At.get(u)) && af(a, u),
          (n = n.createElement("link")),
          Ql(n));
        var i = n;
        ((i._p = new Promise(function (c, d) {
          ((i.onload = c), (i.onerror = d));
        })),
          wl(n, "link", a),
          (e.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (l.count++,
          (e = Hn.bind(l)),
          t.addEventListener("load", e),
          t.addEventListener("error", e)));
    }
  }
  var nf = 0;
  function Fm(l, t) {
    return (
      l.stylesheets && l.count === 0 && qn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (e) {
            var a = setTimeout(function () {
              if ((l.stylesheets && qn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && nf === 0 && (nf = 62500 * _m());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && qn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > nf ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = e),
              function () {
                ((l.unsuspend = null), clearTimeout(a), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Hn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) qn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Bn = null;
  function qn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Bn = new Map()),
        t.forEach(Im, l),
        (Bn = null),
        Hn.call(l)));
  }
  function Im(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Bn.get(l);
      if (e) var a = e.get(null);
      else {
        ((e = new Map()), Bn.set(l, e));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (e.set(i.dataset.precedence, i), (a = i));
        }
        a && e.set(null, a);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = e.get(i) || a),
        n === a && e.set(null, u),
        e.set(i, u),
        this.count++,
        (a = Hn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Su = {
    $$typeof: _,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0,
  };
  function Pm(l, t, e, a, u, n, i, c, d) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = li(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = li(0)),
      (this.hiddenUpdates = li(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = d),
      (this.incompleteTransitions = new Map()));
  }
  function dr(l, t, e, a, u, n, i, c, d, S, z, j) {
    return (
      (l = new Pm(l, t, e, i, d, S, z, j, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = st(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Yi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: a, isDehydrated: e, cache: t }),
      Zi(n),
      l
    );
  }
  function rr(l) {
    return l ? ((l = ua), l) : ua;
  }
  function hr(l, t, e, a, u, n) {
    ((u = rr(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = fe(t)),
      (a.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (e = se(l, a, t)),
      e !== null && (at(e, l, t), ka(e, l, t)));
  }
  function mr(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function cf(l, t) {
    (mr(l, t), (l = l.alternate) && mr(l, t));
  }
  function vr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ue(l, 67108864);
      (t !== null && at(t, l, 67108864), cf(l, 67108864));
    }
  }
  function yr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = mt();
      t = ti(t);
      var e = Ue(l, t);
      (e !== null && at(e, l, t), cf(l, t));
    }
  }
  var Yn = !0;
  function l0(l, t, e, a) {
    var u = x.T;
    x.T = null;
    var n = H.p;
    try {
      ((H.p = 2), ff(l, t, e, a));
    } finally {
      ((H.p = n), (x.T = u));
    }
  }
  function t0(l, t, e, a) {
    var u = x.T;
    x.T = null;
    var n = H.p;
    try {
      ((H.p = 8), ff(l, t, e, a));
    } finally {
      ((H.p = n), (x.T = u));
    }
  }
  function ff(l, t, e, a) {
    if (Yn) {
      var u = sf(a);
      if (u === null) (wc(l, t, a, Gn, e), Sr(l, a));
      else if (a0(u, l, t, e, a)) a.stopPropagation();
      else if ((Sr(l, a), t & 4 && -1 < e0.indexOf(l))) {
        for (; u !== null; ) {
          var n = we(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Me(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var d = 1 << (31 - ct(i));
                      ((c.entanglements[1] |= d), (i &= ~d));
                    }
                    (Rt(n), (dl & 6) === 0 && ((En = nt() + 500), ru(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = Ue(n, 2)), c !== null && at(c, n, 2), zn(), cf(n, 2));
            }
          if (((n = sf(a)), n === null && wc(l, t, a, Gn, e), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else wc(l, t, a, null, e);
    }
  }
  function sf(l) {
    return ((l = oi(l)), of(l));
  }
  var Gn = null;
  function of(l) {
    if (((Gn = null), (l = Je(l)), l !== null)) {
      var t = D(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (((l = Y(t)), l !== null)) return l;
          l = null;
        } else if (e === 31) {
          if (((l = C(t)), l !== null)) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Gn = l), null);
  }
  function gr(l) {
    switch (l) {
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
      case "resize":
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
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qr()) {
          case xf:
            return 2;
          case Af:
            return 8;
          case Mu:
          case Zr:
            return 32;
          case jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var df = !1,
    pe = null,
    Ee = null,
    Te = null,
    bu = new Map(),
    pu = new Map(),
    ze = [],
    e0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Sr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        pe = null;
        break;
      case "dragenter":
      case "dragleave":
        Ee = null;
        break;
      case "mouseover":
      case "mouseout":
        Te = null;
        break;
      case "pointerover":
      case "pointerout":
        bu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pu.delete(t.pointerId);
    }
  }
  function Eu(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: e,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = we(t)), t !== null && vr(t)),
        l)
      : ((l.eventSystemFlags |= a),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function a0(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return ((pe = Eu(pe, l, t, e, a, u)), !0);
      case "dragenter":
        return ((Ee = Eu(Ee, l, t, e, a, u)), !0);
      case "mouseover":
        return ((Te = Eu(Te, l, t, e, a, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (bu.set(n, Eu(bu.get(n) || null, l, t, e, a, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          pu.set(n, Eu(pu.get(n) || null, l, t, e, a, u)),
          !0
        );
    }
    return !1;
  }
  function br(l) {
    var t = Je(l.target);
    if (t !== null) {
      var e = D(t);
      if (e !== null) {
        if (((t = e.tag), t === 13)) {
          if (((t = Y(e)), t !== null)) {
            ((l.blockedOn = t),
              Uf(l.priority, function () {
                yr(e);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = C(e)), t !== null)) {
            ((l.blockedOn = t),
              Uf(l.priority, function () {
                yr(e);
              }));
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Xn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = sf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(e.type, e);
        ((si = a), e.target.dispatchEvent(a), (si = null));
      } else return ((t = we(e)), t !== null && vr(t), (l.blockedOn = e), !1);
      t.shift();
    }
    return !0;
  }
  function pr(l, t, e) {
    Xn(l) && e.delete(t);
  }
  function u0() {
    ((df = !1),
      pe !== null && Xn(pe) && (pe = null),
      Ee !== null && Xn(Ee) && (Ee = null),
      Te !== null && Xn(Te) && (Te = null),
      bu.forEach(pr),
      pu.forEach(pr));
  }
  function Qn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      df ||
        ((df = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, u0)));
  }
  var Zn = null;
  function Er(l) {
    Zn !== l &&
      ((Zn = l),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        Zn === l && (Zn = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t],
            a = l[t + 1],
            u = l[t + 2];
          if (typeof a != "function") {
            if (of(a || e) === null) continue;
            break;
          }
          var n = we(e);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            fc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
        }
      }));
  }
  function Na(l) {
    function t(d) {
      return Qn(d, l);
    }
    (pe !== null && Qn(pe, l),
      Ee !== null && Qn(Ee, l),
      Te !== null && Qn(Te, l),
      bu.forEach(t),
      pu.forEach(t));
    for (var e = 0; e < ze.length; e++) {
      var a = ze[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ze.length && ((e = ze[0]), e.blockedOn === null); )
      (br(e), e.blockedOn === null && ze.shift());
    if (((e = (l.ownerDocument || l).$$reactFormReplay), e != null))
      for (a = 0; a < e.length; a += 3) {
        var u = e[a],
          n = e[a + 1],
          i = u[Fl] || null;
        if (typeof n == "function") i || Er(e);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Fl] || null))) c = i.formAction;
            else if (of(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
            Er(e));
        }
      }
  }
  function Tr() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), a || setTimeout(e, 20));
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(e, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function rf(l) {
    this._internalRoot = l;
  }
  ((Ln.prototype.render = rf.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var e = t.current,
        a = mt();
      hr(e, a, l, t, null, null);
    }),
    (Ln.prototype.unmount = rf.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (hr(l.current, 2, null, l, null, null), zn(), (t[Ke] = null));
        }
      }));
  function Ln(l) {
    this._internalRoot = l;
  }
  Ln.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = _f();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++);
      (ze.splice(e, 0, l), e === 0 && br(l));
    }
  };
  var zr = v.version;
  if (zr !== "19.2.0") throw Error(s(527, zr, "19.2.0"));
  H.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(s(188))
        : ((l = Object.keys(l).join(",")), Error(s(268, l)));
    return (
      (l = y(t)),
      (l = l !== null ? R(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var n0 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vn.isDisabled && Vn.supportsFiber)
      try {
        ((Oa = Vn.inject(n0)), (it = Vn));
      } catch {}
  }
  return (
    (zu.createRoot = function (l, t) {
      if (!E(l)) throw Error(s(299));
      var e = !1,
        a = "",
        u = Oo,
        n = _o,
        i = Uo;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (e = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = dr(l, 1, !1, null, null, e, a, null, u, n, i, Tr)),
        (l[Ke] = t.current),
        Jc(l),
        new rf(t)
      );
    }),
    (zu.hydrateRoot = function (l, t, e) {
      if (!E(l)) throw Error(s(299));
      var a = !1,
        u = "",
        n = Oo,
        i = _o,
        c = Uo,
        d = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (a = !0),
          e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.formState !== void 0 && (d = e.formState)),
        (t = dr(l, 1, !0, t, e ?? null, a, u, d, n, i, c, Tr)),
        (t.context = rr(null)),
        (e = t.current),
        (a = mt()),
        (a = ti(a)),
        (u = fe(a)),
        (u.callback = null),
        se(e, u, a),
        (e = a),
        (t.current.lanes = e),
        Ua(t, e),
        Rt(t),
        (l[Ke] = t.current),
        Jc(l),
        new Ln(t)
      );
    }),
    (zu.version = "19.2.0"),
    zu
  );
}
var Cr;
function g0() {
  if (Cr) return vf.exports;
  Cr = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (v) {
        console.error(v);
      }
  }
  return (o(), (vf.exports = y0()), vf.exports);
}
var S0 = g0();
const Rr = {
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  upload: "M12 16V4m-5 5 5-5 5 5M4 16v4h16v-4",
  download: "M12 4v12m-5-5 5 5 5-5M4 16v4h16v-4",
  reset: "M3 10a9 9 0 1 1 2 8M3 4v6h6",
  trash: "M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  play: "m8 5 11 7-11 7Z",
  pause: "M8 5v14M16 5v14",
  step: "m5 5 10 7-10 7ZM19 5v14",
  stop: "M6 6h12v12H6Z",
  chevron: "m9 5 7 7-7 7",
  close: "m6 6 12 12M6 18 18 6",
  connect: "M8 12h8M3 8h5v8H3Zm13 0h5v8h-5Z",
  cursor: "m5 3 14 10-7 1-3 7Z",
  grid: "M3 3h7v7H3Zm11 0h7v7h-7ZM3 14h7v7H3Zm11 0h7v7h-7Z",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  info: "M12 11v6M12 7h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  check: "m5 12 4 4L19 6",
};
function ql({ name: o, size: v = 16, ...b }) {
  return f.jsx("svg", {
    width: v,
    height: v,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    ...b,
    children: f.jsx("path", { d: Rr[o] || Rr.info }),
  });
}
function Ef({ title: o, onClose: v, children: b }) {
  const s = rl.useRef(null),
    E = rl.useId();
  return (
    rl.useEffect(() => {
      const D = s.current;
      return (D.showModal(), () => D.close());
    }, []),
    f.jsx("dialog", {
      ref: s,
      className: "dialog",
      "aria-labelledby": E,
      onCancel: (D) => {
        (D.preventDefault(), v());
      },
      onClick: (D) => {
        D.target === D.currentTarget && v();
      },
      children: f.jsxs("div", {
        className: "dialog-inner",
        children: [
          f.jsxs("div", {
            className: "dialog-heading",
            children: [
              f.jsx("h2", { id: E, children: o }),
              f.jsx("button", {
                className: "icon-button",
                "aria-label": "Close dialog",
                onClick: v,
                children: f.jsx(ql, { name: "close" }),
              }),
            ],
          }),
          b,
        ],
      }),
    })
  );
}
const vt = (o, v) => [o, v].sort().join(":"),
  Au = (o, v) => {
    if (!v.pixelMode) return o.weight;
    const b = v.nodes.find((E) => E.id === o.source),
      s = v.nodes.find((E) => E.id === o.target);
    return Math.round(Math.hypot(b.x - s.x, b.y - s.y) / 20);
  };
function Hr() {
  const o = [
      ["A", 155, 165],
      ["B", 155, 435],
      ["C", 420, 165],
      ["D", 300, 435],
      ["E", 825, 165],
      ["F", 625, 435],
      ["G", 825, 435],
    ].map(([b, s, E]) => ({ id: b, x: s, y: E })),
    v = [
      ["A", "B", 3],
      ["A", "D", 6],
      ["A", "C", 5],
      ["B", "D", 2],
      ["C", "D", 2],
      ["C", "F", 3],
      ["C", "G", 7],
      ["C", "E", 6],
      ["D", "F", 9],
      ["E", "F", 5],
      ["E", "G", 2],
      ["F", "G", 1],
    ].map(([b, s, E]) => ({ id: vt(b, s), source: b, target: s, weight: E }));
  return { nodes: o, edges: v, source: "A", target: "G", pixelMode: !1 };
}
function b0(o) {
  const v = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .find((s) => !o.nodes.some((E) => E.id === s));
  if (!v) return o;
  const b = o.nodes.length;
  return {
    ...o,
    nodes: [
      ...o.nodes,
      { id: v, x: 110 + (b % 6) * 145, y: 100 + Math.floor(b / 6) * 115 },
    ],
  };
}
function p0(o, v) {
  return {
    ...o,
    nodes: o.nodes.filter((b) => b.id !== v),
    edges: o.edges.filter((b) => b.source !== v && b.target !== v),
    source: o.source === v ? "" : o.source,
    target: o.target === v ? "" : o.target,
  };
}
function Jn(o, v, b, s) {
  if (
    v === b ||
    !o.nodes.some((D) => D.id === v) ||
    !o.nodes.some((D) => D.id === b)
  )
    return o;
  const E = vt(v, b);
  return {
    ...o,
    edges: o.edges.some((D) => D.id === E)
      ? o.edges.map((D) => (D.id === E ? { ...D, weight: s } : D))
      : [...o.edges, { id: E, source: v, target: b, weight: s }],
  };
}
function E0(o) {
  let v = o;
  for (let b = 0; b < o.nodes.length; b++)
    for (let s = b + 1; s < o.nodes.length; s++) {
      const E = o.nodes[b].id,
        D = o.nodes[s].id;
      v.edges.some((Y) => Y.id === vt(E, D)) || (v = Jn(v, E, D, 1));
    }
  return v;
}
function Kn(o, v) {
  return o.edges
    .filter((b) => b.source === v || b.target === v)
    .map((b) => ({
      id: b.source === v ? b.target : b.source,
      edge: b,
      weight: Au(b, o),
    }));
}
function bf(o) {
  return String(o)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
function T0(o) {
  return `<?xml version="1.0" encoding="utf-8"?>
<GraphData xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <Nodes>
${o.nodes.map(
  (b) => `    <NodeData>
      <Name>${bf(b.id)}</Name>
      <Connections>
${Kn(o, b.id).map(
  ({ id: s, edge: E, weight: D }) =>
    `        <ConnectionData><StartNodeLetter>${b.id}</StartNodeLetter><EndNodeLetter>${s}</EndNodeLetter><EdgeNumber>${D}</EdgeNumber><PreviousEdgeNumber>${E.weight}</PreviousEdgeNumber><PixelMode>${o.pixelMode}</PixelMode></ConnectionData>`,
).join(`
`)}
      </Connections>
      <LocationOnGraph><X>${b.x - 30}</X><Y>${b.y - 30}</Y></LocationOnGraph>
    </NodeData>`,
).join(`
`)}
  </Nodes>
  <SourceNodeLetter>${bf(o.source)}</SourceNodeLetter>
  <TargetNodeLetter>${bf(o.target)}</TargetNodeLetter>
  <PixelMode>${o.pixelMode}</PixelMode>
</GraphData>`;
}
function z0(o, v = globalThis.DOMParser) {
  if (o.length > 2e6)
    throw new Error("This graph file is too large (maximum 2 MB).");
  const b = new v().parseFromString(o, "application/xml");
  if (
    b.querySelector("parsererror") ||
    b.documentElement.tagName !== "GraphData"
  )
    throw new Error("Choose a valid GraphData XML file.");
  const s = (M, V, W = "") => M.querySelector(V)?.textContent?.trim() ?? W,
    E = [...b.querySelectorAll("Nodes > NodeData")];
  if (E.length > 26) throw new Error("A graph can contain at most 26 nodes.");
  const D = new Set(),
    Y = E.map((M, V) => {
      const W = s(M, "Name");
      if (!/^[A-Z]$/.test(W) || D.has(W))
        throw new Error("Node names must be unique letters A–Z.");
      D.add(W);
      const tl =
          Number(s(M, "LocationOnGraph > X", String(80 + (V % 6) * 145))) + 30,
        ol =
          Number(
            s(M, "LocationOnGraph > Y", String(70 + Math.floor(V / 6) * 115)),
          ) + 30;
      if (
        !Number.isFinite(tl) ||
        !Number.isFinite(ol) ||
        tl < 0 ||
        ol < 0 ||
        tl > 1e4 ||
        ol > 1e4
      )
        throw new Error("The graph contains invalid node positions.");
      return { id: W, x: tl, y: ol };
    }),
    C = [...b.querySelectorAll("ConnectionData")],
    O =
      s(
        b.documentElement,
        ":scope > PixelMode",
        C.some((M) => s(M, "PixelMode") === "true") ? "true" : "false",
      ) === "true",
    y = new Map();
  for (const M of E)
    for (const V of M.querySelectorAll("Connections > ConnectionData")) {
      const W = s(V, "StartNodeLetter", s(M, "Name")),
        tl = s(V, "EndNodeLetter"),
        ol = Number(s(V, "EdgeNumber", "1")),
        P = Number(s(V, "PreviousEdgeNumber", String(ol))),
        Hl = s(V, "PixelMode") === "true" && P > 0 ? P : ol;
      if (
        !D.has(W) ||
        !D.has(tl) ||
        W === tl ||
        !Number.isSafeInteger(Hl) ||
        Hl < 0 ||
        Hl > 1e6
      )
        throw new Error("The graph contains an invalid connection or weight.");
      const _ = vt(W, tl);
      if (y.has(_) && y.get(_).weight !== Hl)
        throw new Error(
          "This file has different weights in opposite directions. This teaching aid uses undirected graphs.",
        );
      y.set(_, { id: _, source: W, target: tl, weight: Hl });
    }
  const R = s(b.documentElement, "SourceNodeLetter"),
    U = s(b.documentElement, "TargetNodeLetter");
  if ((R && !D.has(R)) || (U && !D.has(U)))
    throw new Error("The source or target is missing from the graph.");
  return {
    nodes: Y,
    edges: [...y.values()],
    source: R,
    target: U,
    pixelMode: O,
  };
}
function x0({
  graph: o,
  player: v,
  onMove: b,
  onNode: s,
  onEdge: E,
  onRemove: D,
}) {
  const Y = rl.useRef(null),
    C = rl.useRef(null),
    [O, y] = rl.useState(null),
    R = Math.max(1e3, ...o.nodes.map((_) => _.x + 65)),
    U = Math.max(600, ...o.nodes.map((_) => _.y + 65)),
    M = new Set(),
    V = new Set();
  for (let _ = 1; _ < (v.result?.path.length || 0); _++)
    M.add(vt(v.result.path[_ - 1], v.result.path[_]));
  for (let _ = 1; _ < (v.snapshot?.partialPath?.length || 0); _++)
    V.add(vt(v.snapshot.partialPath[_ - 1], v.snapshot.partialPath[_]));
  const W = new Map(o.nodes.map((_) => [_.id, _]));
  function tl(_) {
    const w = Y.current.getScreenCTM();
    if (!w) return null;
    const K = Y.current.createSVGPoint();
    return (
      (K.x = _.clientX),
      (K.y = _.clientY),
      K.matrixTransform(w.inverse())
    );
  }
  function ol(_, w) {
    if (v.busy || _.button !== 0) return;
    const K = tl(_);
    K &&
      ((C.current = {
        id: w.id,
        dx: w.x - K.x,
        dy: w.y - K.y,
        startX: _.clientX,
        startY: _.clientY,
        moved: !1,
      }),
      Y.current.setPointerCapture(_.pointerId),
      y(w.id),
      _.preventDefault());
  }
  function P(_) {
    const w = C.current;
    if (!w) return;
    const K = tl(_);
    K &&
      (Math.hypot(_.clientX - w.startX, _.clientY - w.startY) > 3 &&
        (w.moved = !0),
      w.moved &&
        b(
          w.id,
          Math.max(40, Math.min(R - 40, K.x + w.dx)),
          Math.max(40, Math.min(U - 40, K.y + w.dy)),
        ));
  }
  function Hl(_) {
    const w = C.current;
    ((C.current = null),
      y(null),
      Y.current.hasPointerCapture(_.pointerId) &&
        Y.current.releasePointerCapture(_.pointerId),
      w && !w.moved && s(w.id));
  }
  return f.jsxs("svg", {
    ref: Y,
    className: `graph-svg ${O ? "dragging" : ""}`,
    role: "group",
    "aria-label":
      "Interactive graph workspace. Drag nodes, or activate a node to edit its connections.",
    viewBox: `0 0 ${R} ${U}`,
    onPointerMove: P,
    onPointerUp: Hl,
    onPointerCancel: () => {
      ((C.current = null), y(null));
    },
    children: [
      f.jsx("defs", {
        children: f.jsx("pattern", {
          id: "dot-grid",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          patternUnits: "userSpaceOnUse",
          children: f.jsx("circle", {
            cx: "1",
            cy: "1",
            r: ".75",
            fill: "#dfd5c8",
          }),
        }),
      }),
      f.jsx("rect", {
        width: R,
        height: U,
        fill: "url(#dot-grid)",
        opacity: ".48",
      }),
      o.edges.map((_) => {
        const w = W.get(_.source),
          K = W.get(_.target),
          Yl = v.snapshot?.edge === _.id,
          ll = M.has(_.id)
            ? "final"
            : V.has(_.id)
              ? "best"
              : Yl
                ? "exploring"
                : "";
        return f.jsxs(
          "g",
          {
            className: `graph-edge ${ll}`,
            children: [
              f.jsx("line", { x1: w.x, y1: w.y, x2: K.x, y2: K.y }),
              f.jsx("line", {
                className: "edge-hit",
                x1: w.x,
                y1: w.y,
                x2: K.x,
                y2: K.y,
                onClick: () => !v.busy && E(_.id),
              }),
              f.jsxs("g", {
                role: "button",
                tabIndex: v.busy ? -1 : 0,
                "aria-label": `Edge ${_.source} to ${_.target}, weight ${Au(_, o)}. Edit weight.`,
                className: "weight-label",
                transform: `translate(${(w.x + K.x) / 2},${(w.y + K.y) / 2})`,
                onClick: () => !v.busy && E(_.id),
                onKeyDown: (q) => {
                  (q.key === "Enter" || q.key === " ") &&
                    (q.preventDefault(), v.busy || E(_.id));
                },
                children: [
                  f.jsx("rect", {
                    x: "-17",
                    y: "-13",
                    width: "34",
                    height: "26",
                    rx: "8",
                  }),
                  f.jsx("text", { y: "1", children: Au(_, o) }),
                ],
              }),
            ],
          },
          _.id,
        );
      }),
      o.nodes.map((_) => {
        const w = v.result?.path.includes(_.id)
          ? "path"
          : v.snapshot?.current === _.id
            ? "active"
            : v.snapshot?.visited?.includes(_.id)
              ? "visited"
              : _.id === o.source
                ? "source"
                : _.id === o.target
                  ? "target"
                  : "";
        return f.jsxs(
          "g",
          {
            role: "button",
            tabIndex: v.busy ? -1 : 0,
            "aria-label": `Node ${_.id}${_.id === o.source ? ", source" : ""}${_.id === o.target ? ", target" : ""}. Edit node and connections.`,
            className: `graph-node ${w} ${O === _.id ? "is-dragging" : ""}`,
            transform: `translate(${_.x},${_.y})`,
            onPointerDown: (K) => ol(K, _),
            onContextMenu: (K) => {
              (K.preventDefault(), v.busy || s(_.id));
            },
            onKeyDown: (K) => {
              v.busy ||
                (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
                  K.key,
                ) &&
                  (K.preventDefault(),
                  b(
                    _.id,
                    Math.max(
                      40,
                      Math.min(
                        R - 40,
                        _.x +
                          (K.key === "ArrowLeft"
                            ? -10
                            : K.key === "ArrowRight"
                              ? 10
                              : 0),
                      ),
                    ),
                    Math.max(
                      40,
                      Math.min(
                        U - 40,
                        _.y +
                          (K.key === "ArrowUp"
                            ? -10
                            : K.key === "ArrowDown"
                              ? 10
                              : 0),
                      ),
                    ),
                  )),
                (K.key === "Enter" || K.key === " ") &&
                  (K.preventDefault(), s(_.id)),
                K.key === "Delete" && D(_.id));
            },
            children: [
              f.jsx("circle", { className: "node-ring", r: "37" }),
              f.jsx("circle", { className: "node-body", r: "29" }),
              f.jsx("text", { y: "1", children: _.id }),
              _.id === o.source &&
                f.jsx("text", {
                  className: "node-tag",
                  y: "51",
                  children: "SOURCE",
                }),
              _.id === o.target &&
                _.id !== o.source &&
                f.jsx("text", {
                  className: "node-tag",
                  y: "51",
                  children: "TARGET",
                }),
            ],
          },
          _.id,
        );
      }),
    ],
  });
}
function A0({ graph: o, tab: v, setTab: b }) {
  return f.jsxs("section", {
    className: "representations",
    children: [
      f.jsxs("div", {
        className: "section-header",
        children: [
          f.jsxs("div", {
            children: [
              f.jsx("span", {
                className: "eyebrow",
                children: "ANOTHER PERSPECTIVE",
              }),
              f.jsx("h2", { children: "Behind the graph" }),
            ],
          }),
          f.jsxs("div", {
            className: "segmented",
            role: "group",
            "aria-label": "Graph representation",
            children: [
              f.jsx("button", {
                "aria-pressed": v === "matrix",
                onClick: () => b("matrix"),
                children: "Matrix",
              }),
              f.jsx("button", {
                "aria-pressed": v === "list",
                onClick: () => b("list"),
                children: "List",
              }),
            ],
          }),
        ],
      }),
      o.nodes.length
        ? v === "matrix"
          ? f.jsx("div", {
              className: "matrix-scroll",
              children: f.jsxs("table", {
                className: "matrix",
                children: [
                  f.jsx("caption", {
                    className: "sr-only",
                    children:
                      "Adjacency matrix. A dash indicates no edge; zero is a valid edge weight.",
                  }),
                  f.jsx("thead", {
                    children: f.jsxs("tr", {
                      children: [
                        f.jsx("th", {
                          scope: "col",
                          "aria-label": "Node",
                          children: "↗",
                        }),
                        o.nodes.map((s) =>
                          f.jsx("th", { scope: "col", children: s.id }, s.id),
                        ),
                      ],
                    }),
                  }),
                  f.jsx("tbody", {
                    children: o.nodes.map((s) => {
                      const E = new Map(
                        Kn(o, s.id).map((D) => [D.id, D.weight]),
                      );
                      return f.jsxs(
                        "tr",
                        {
                          children: [
                            f.jsx("th", { scope: "row", children: s.id }),
                            o.nodes.map((D) =>
                              f.jsx(
                                "td",
                                {
                                  className:
                                    s.id === D.id
                                      ? "diagonal"
                                      : E.has(D.id)
                                        ? "has-edge"
                                        : "",
                                  children:
                                    s.id === D.id
                                      ? "0"
                                      : E.has(D.id)
                                        ? E.get(D.id)
                                        : "—",
                                },
                                D.id,
                              ),
                            ),
                          ],
                        },
                        s.id,
                      );
                    }),
                  }),
                ],
              }),
            })
          : f.jsx("div", {
              className: "adjacency-list",
              children: o.nodes.map((s) =>
                f.jsxs(
                  "div",
                  {
                    className: "adjacency-row",
                    children: [
                      f.jsx("strong", { children: s.id }),
                      f.jsx("span", { className: "list-arrow", children: "→" }),
                      f.jsxs("div", {
                        children: [
                          Kn(o, s.id).map((E) =>
                            f.jsxs(
                              "span",
                              {
                                className: "neighbor-chip",
                                children: [
                                  E.id,
                                  f.jsx("small", { children: E.weight }),
                                ],
                              },
                              E.id,
                            ),
                          ),
                          !Kn(o, s.id).length &&
                            f.jsx("span", {
                              className: "muted",
                              children: "No connections",
                            }),
                        ],
                      }),
                    ],
                  },
                  s.id,
                ),
              ),
            })
        : f.jsx("p", {
            className: "empty-note",
            children: "Add nodes to see their connections here.",
          }),
    ],
  });
}
function wn(o) {
  const v = new Map(o.nodes.map((E) => [E.id, E])),
    b = new Map(o.nodes.map((E) => [E.id, []])),
    s = new Map();
  for (const E of o.edges) {
    const D = v.get(E.source),
      Y = v.get(E.target),
      C = o.pixelMode
        ? Math.round(Math.hypot(D.x - Y.x, D.y - Y.y) / 20)
        : E.weight;
    (s.set(E.id, C),
      b.get(E.source).push({ id: E.target, edge: E, weight: C }),
      b.get(E.target).push({ id: E.source, edge: E, weight: C }));
  }
  return { adjacency: b, weights: s };
}
const Ot = (o, v = null, b = null, s = [], E = []) => ({
  message: o,
  current: v,
  edge: b,
  frontier: [...s],
  visited: [...E],
});
function qr(o, v) {
  const b = [];
  for (let s = v; s != null; s = o.get(s)) b.push(s);
  return b.reverse();
}
function Br(o, v) {
  let b = 0;
  for (let s = 1; s < v.length; s++) {
    const E = o.get(vt(v[s - 1], v[s]));
    if (E === void 0) return 1 / 0;
    b += E;
  }
  return b;
}
function* j0(o, v, b, s) {
  const { adjacency: E, weights: D } = wn(o),
    Y = new Set([b]),
    C = [b],
    O = new Map([[b, null]]);
  for (yield Ot(`Start ${v} from ${b}.`, b, null, C, []); C.length; ) {
    const y = v === "BFS" ? C.shift() : C.pop();
    if (
      (yield Ot(
        `Visit ${y}. ${v === "BFS" ? "Queue" : "Stack"}: ${C.join(", ") || "empty"}.`,
        y,
        null,
        C,
        Y,
      ),
      y === s)
    ) {
      const U = qr(O, s);
      return {
        path: U,
        distance: Br(D, U),
        message: `${v} complete · ${U.length - 1} edges`,
        details: `Path: ${U.join(" → ")}
Edges: ${U.length - 1}
Total weight: ${Br(D, U)}
Complexity: O(V + E)`,
      };
    }
    const R = [...E.get(y)];
    v === "DFS" && R.reverse();
    for (const U of R)
      (yield Ot(`Explore ${y} → ${U.id}.`, y, U.edge.id, C, Y),
        Y.has(U.id) || (Y.add(U.id), O.set(U.id, y), C.push(U.id)));
  }
  return {
    path: [],
    distance: null,
    message: `${v} complete · no path found`,
    details: `No path connects ${b} to ${s}.
Complexity: O(V + E)`,
  };
}
function* M0(o, v, b) {
  const { adjacency: s } = wn(o),
    E = new Map(o.nodes.map((C) => [C.id, 1 / 0])),
    D = new Map([[v, null]]),
    Y = new Set();
  for (
    E.set(v, 0), yield Ot(`Start Dijkstra from ${v}. Distance: 0.`, v);
    Y.size < o.nodes.length;
  ) {
    let C = null,
      O = 1 / 0;
    for (const y of o.nodes)
      !Y.has(y.id) && E.get(y.id) < O && ((C = y.id), (O = E.get(y.id)));
    if (!C || E.get(C) === 1 / 0) break;
    if (
      (Y.add(C),
      yield Ot(
        `Visit ${C}. Shortest distance so far: ${E.get(C)}.`,
        C,
        null,
        [],
        Y,
      ),
      C === b)
    ) {
      const y = qr(D, b);
      return {
        path: y,
        distance: E.get(b),
        message: `Dijkstra complete · total weight ${E.get(b)}`,
        details: `Shortest path: ${y.join(" → ")}
Total weight: ${E.get(b)}
Edges: ${y.length - 1}
Complexity: O(V² + E)`,
      };
    }
    for (const y of s.get(C)) {
      if (Y.has(y.id)) continue;
      const R = E.get(C) + y.weight;
      R < E.get(y.id) &&
        (E.set(y.id, R),
        D.set(y.id, C),
        yield Ot(
          `Update ${y.id}: distance ${R} via ${C}.`,
          C,
          y.edge.id,
          [],
          Y,
        ));
    }
  }
  return {
    path: [],
    distance: null,
    message: "Dijkstra complete · no path found",
    details: `No path connects ${v} to ${b}.`,
  };
}
function* N0(o, v) {
  const { adjacency: b } = wn(o),
    s = [v],
    E = new Set(s);
  let D = 0;
  for (
    yield Ot(`Start nearest neighbour at ${v}.`, v);
    s.length < o.nodes.length;
  ) {
    const C = s.at(-1);
    let O = null;
    for (const y of b.get(C))
      !E.has(y.id) &&
        (!O ||
          y.weight < O.weight ||
          (y.weight === O.weight && y.id.localeCompare(O.id) < 0)) &&
        (O = y);
    if (!O)
      return {
        path: [],
        distance: null,
        message: "Nearest neighbour · no complete tour",
        details: `The greedy route reached a dead end at ${C}.
Partial route: ${s.join(" → ")}
Try a different start node or add connections.`,
      };
    ((D += O.weight),
      s.push(O.id),
      E.add(O.id),
      yield {
        ...Ot(
          `Choose ${O.id} (weight ${O.weight}). Total: ${D}.`,
          O.id,
          O.edge.id,
          [],
          E,
        ),
        partialPath: [...s],
      });
  }
  const Y = b.get(s.at(-1)).find((C) => C.id === v);
  return s.length === 1
    ? {
        path: s,
        distance: 0,
        message: "Nearest neighbour complete · total weight 0",
        details: `Tour: ${v}
Total weight: 0`,
      }
    : Y
      ? (s.push(v),
        (D += Y.weight),
        {
          path: s,
          distance: D,
          message: `Nearest neighbour complete · total weight ${D}`,
          details: `Tour: ${s.join(" → ")}
Total weight: ${D}
This greedy heuristic does not guarantee an optimal tour.
Complexity: O(V²)`,
        })
      : {
          path: [],
          distance: null,
          message: "Nearest neighbour · no return connection",
          details: `Route: ${s.join(" → ")}
There is no connection back to ${v}.`,
        };
}
function* D0(o, v) {
  if (o.nodes.length > 10)
    throw new Error("Brute force supports at most 10 nodes.");
  if (o.nodes.length === 1)
    return {
      path: [v],
      distance: 0,
      message: "Brute force complete · total weight 0",
      details: `Tour: ${v}
Total weight: 0`,
    };
  let b = 1 / 0,
    s = [],
    E = 0;
  const { weights: D } = wn(o);
  function* Y(C, O, y) {
    if (!O.length) {
      E++;
      const R = D.get(vt(C.at(-1), v));
      R !== void 0 && y + R < b
        ? ((b = y + R),
          (s = [...C, v]),
          yield {
            ...Ot(`Better tour found: ${b}.`, C.at(-1), vt(C.at(-1), v), [], C),
            partialPath: s,
            best: !0,
          })
        : E % 250 === 0 &&
          (yield Ot(
            `Compared ${E.toLocaleString()} candidate tours. Best: ${b === 1 / 0 ? "—" : b}.`,
          ));
      return;
    }
    for (let R = 0; R < O.length; R++) {
      const U = O[R],
        M = D.get(vt(C.at(-1), U));
      M !== void 0 &&
        (yield* Y([...C, U], [...O.slice(0, R), ...O.slice(R + 1)], y + M));
    }
  }
  return (
    yield Ot(`Compare all possible tours starting at ${v}.`, v),
    yield* Y(
      [v],
      o.nodes.map((C) => C.id).filter((C) => C !== v),
      0,
    ),
    {
      path: s,
      distance: b === 1 / 0 ? null : b,
      message: s.length
        ? `Brute force complete · optimal weight ${b}`
        : "Brute force complete · no complete tour",
      details: s.length
        ? `Optimal tour: ${s.join(" → ")}
Total weight: ${b}
Candidate tours: ${E.toLocaleString()}
Complexity: O(V!)`
        : `No tour visits every node and returns to the start.
Add the missing connections and try again.`,
    }
  );
}
const xu = {
  BFS: {
    label: "Breadth-first search",
    short: "BFS",
    complexity: "O(V + E)",
    description: "Explore level by level to find the fewest-edge path.",
  },
  DFS: {
    label: "Depth-first search",
    short: "DFS",
    complexity: "O(V + E)",
    description: "Follow each branch as far as possible before backtracking.",
  },
  Dijkstra: {
    label: "Dijkstra’s algorithm",
    short: "Dijkstra",
    complexity: "O(V² + E)",
    description: "Find the path with the smallest total edge weight.",
  },
  BruteForce: {
    label: "TSP · Brute force",
    short: "Brute force",
    complexity: "O(V!)",
    description:
      "Compare every possible tour. Best for small graphs (up to 10 nodes).",
  },
  Nearest: {
    label: "TSP · Nearest neighbour",
    short: "Nearest neighbour",
    complexity: "O(V²)",
    description: "Build a tour by choosing the closest unvisited neighbour.",
  },
};
function O0(o, v, b = o.source, s = o.target) {
  if (!o.nodes.length) throw new Error("Add at least one node first.");
  if (!o.nodes.some((E) => E.id === b))
    throw new Error("Choose a source node first.");
  if (
    ["BFS", "DFS", "Dijkstra"].includes(v) &&
    !o.nodes.some((E) => E.id === s)
  )
    throw new Error("Choose a target node first.");
  if (v === "BFS" || v === "DFS") return j0(o, v, b, s);
  if (v === "Dijkstra") return M0(o, b, s);
  if (v === "Nearest") return N0(o, b);
  if (v === "BruteForce") return D0(o, b);
  throw new Error("Unknown algorithm.");
}
function _0(o) {
  const v = rl.useRef(null),
    b = rl.useRef(null),
    s = rl.useRef(o),
    [E, D] = rl.useState({
      phase: "idle",
      snapshot: null,
      result: null,
      log: [],
      type: null,
    });
  (rl.useEffect(() => {
    s.current = o;
  }, [o]),
    rl.useEffect(
      () => () => {
        (clearTimeout(b.current), (v.current = null));
      },
      [],
    ));
  const Y = rl.useCallback(function V(W = !0) {
      clearTimeout(b.current);
      const tl = v.current;
      if (tl)
        try {
          const ol = tl.iterator.next();
          ol.done
            ? ((v.current = null),
              D((P) => ({
                ...P,
                phase: "done",
                result: ol.value,
                snapshot: null,
                log: [...P.log, ol.value.details].slice(-300),
              })))
            : (D((P) => ({
                ...P,
                phase: W ? "running" : "paused",
                snapshot: ol.value,
                log: [...P.log, ol.value.message].slice(-300),
              })),
              W && (b.current = setTimeout(() => V(!0), s.current)));
        } catch (ol) {
          ((v.current = null),
            D((P) => ({
              ...P,
              phase: "idle",
              snapshot: null,
              log: [...P.log, ol.message],
            })));
        }
    }, []),
    C = rl.useCallback(
      (V, W, tl = !1) => {
        const ol = O0(V, W);
        (clearTimeout(b.current),
          (v.current = { iterator: ol }),
          D({
            phase: tl ? "paused" : "running",
            snapshot: null,
            result: null,
            log: [xu[W].label],
            type: W,
          }),
          Y(!tl));
      },
      [Y],
    ),
    O = rl.useCallback(() => {
      (clearTimeout(b.current), D((V) => ({ ...V, phase: "paused" })));
    }, []),
    y = rl.useCallback(() => Y(!0), [Y]),
    R = rl.useCallback(() => Y(!1), [Y]),
    U = rl.useCallback(() => {
      (clearTimeout(b.current),
        (v.current = null),
        D((V) => ({
          ...V,
          phase: "idle",
          log: [...V.log, "Animation stopped."],
        })));
    }, []),
    M = rl.useCallback(() => {
      (clearTimeout(b.current),
        (v.current = null),
        D({
          phase: "idle",
          snapshot: null,
          result: null,
          log: [],
          type: null,
        }));
    }, []);
  return {
    ...E,
    start: C,
    pause: O,
    resume: y,
    step: R,
    stop: U,
    clear: M,
    busy: E.phase === "running" || E.phase === "paused",
  };
}
function U0({ graph: o, id: v, onChange: b, onClose: s, onRemove: E }) {
  const [D, Y] = rl.useState(v),
    [C, O] = rl.useState("");
  function y(R) {
    R.preventDefault();
    const U = D.trim().toUpperCase();
    if (!/^[A-Z]$/.test(U)) {
      O("Choose one letter from A to Z.");
      return;
    }
    if (U !== v && o.nodes.some((M) => M.id === U)) {
      O("That name is already in use.");
      return;
    }
    (b({
      ...o,
      nodes: o.nodes.map((M) => (M.id === v ? { ...M, id: U } : M)),
      edges: o.edges.map((M) => {
        const V = M.source === v ? U : M.source,
          W = M.target === v ? U : M.target;
        return { ...M, source: V, target: W, id: vt(V, W) };
      }),
      source: o.source === v ? U : o.source,
      target: o.target === v ? U : o.target,
    }),
      s());
  }
  return f.jsxs(Ef, {
    title: `Node ${v}`,
    onClose: s,
    children: [
      f.jsx("p", {
        className: "dialog-description",
        children: "A small point with plenty of possibilities.",
      }),
      f.jsxs("form", {
        onSubmit: y,
        className: "rename-form",
        children: [
          f.jsx("label", { htmlFor: "node-name", children: "Node name" }),
          f.jsxs("div", {
            children: [
              f.jsx("input", {
                id: "node-name",
                maxLength: "1",
                value: D,
                onChange: (R) => {
                  (Y(R.target.value.toUpperCase()), O(""));
                },
                autoComplete: "off",
              }),
              f.jsx("button", {
                className: "button",
                type: "submit",
                children: "Rename",
              }),
            ],
          }),
          C &&
            f.jsx("p", { role: "alert", className: "form-error", children: C }),
        ],
      }),
      f.jsxs("div", {
        className: "node-role-controls",
        children: [
          f.jsx("button", {
            className: `button ${o.source === v ? "selected-role" : ""}`,
            onClick: () => b({ ...o, source: v }),
            children: "Set as source",
          }),
          f.jsx("button", {
            className: `button ${o.target === v ? "selected-role" : ""}`,
            onClick: () => b({ ...o, target: v }),
            children: "Set as target",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "connection-heading",
        children: [
          f.jsx("h3", { children: "Connections" }),
          f.jsx("span", {
            className: "muted",
            children: o.pixelMode ? "Distance weights" : "Manual weights",
          }),
        ],
      }),
      f.jsxs("div", {
        className: "connections-editor",
        children: [
          o.nodes
            .filter((R) => R.id !== v)
            .map((R) => {
              const U = o.edges.find((M) => M.id === vt(v, R.id));
              return f.jsxs(
                "div",
                {
                  className: "connection-editor-row",
                  children: [
                    f.jsxs("label", {
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          checked: !!U,
                          onChange: (M) =>
                            b(
                              M.target.checked
                                ? Jn(o, v, R.id, 1)
                                : {
                                    ...o,
                                    edges: o.edges.filter(
                                      (V) => V.id !== vt(v, R.id),
                                    ),
                                  },
                            ),
                        }),
                        f.jsx("span", {
                          className: "small-node",
                          children: R.id,
                        }),
                        f.jsxs("span", { children: ["Connect to ", R.id] }),
                      ],
                    }),
                    U &&
                      f.jsxs("label", {
                        className: "weight-input",
                        children: [
                          f.jsxs("span", {
                            className: "sr-only",
                            children: ["Weight from ", v, " to ", R.id],
                          }),
                          f.jsx("input", {
                            type: "number",
                            min: "0",
                            max: "1000000",
                            step: "1",
                            disabled: o.pixelMode,
                            value: Au(U, o),
                            onChange: (M) => {
                              const V = Number(M.target.value);
                              M.target.value !== "" &&
                                Number.isSafeInteger(V) &&
                                V >= 0 &&
                                V <= 1e6 &&
                                b(Jn(o, v, R.id, V));
                            },
                          }),
                        ],
                      }),
                  ],
                },
                R.id,
              );
            }),
          o.nodes.length < 2 &&
            f.jsx("p", {
              className: "empty-note",
              children: "Add another node to make a connection.",
            }),
        ],
      }),
      f.jsxs("button", {
        className: "button danger-button",
        onClick: () => {
          (E(v), s());
        },
        children: [f.jsx(ql, { name: "trash" }), "Remove node ", v],
      }),
    ],
  });
}
function C0({ graph: o, id: v, onChange: b, onClose: s }) {
  const E = o.edges.find((R) => R.id === v),
    [D, Y] = rl.useState(String(E ? Au(E, o) : 1)),
    [C, O] = rl.useState("");
  if (!E) return null;
  function y(R) {
    R.preventDefault();
    const U = Number(D);
    if (D.trim() === "" || !Number.isSafeInteger(U) || U < 0 || U > 1e6) {
      O("Use a whole number between 0 and 1,000,000.");
      return;
    }
    (b(Jn(o, E.source, E.target, U)), s());
  }
  return f.jsx(Ef, {
    title: `Connection ${E.source} → ${E.target}`,
    onClose: s,
    children: o.pixelMode
      ? f.jsxs(f.Fragment, {
          children: [
            f.jsx("p", {
              className: "dialog-description",
              children:
                "This weight is calculated from the distance between the two nodes. Move a node to change it, or switch to manual weights.",
            }),
            f.jsx("button", {
              className: "button primary",
              onClick: () => {
                (b({ ...o, pixelMode: !1 }), s());
              },
              children: "Switch to manual weights",
            }),
          ],
        })
      : f.jsxs("form", {
          onSubmit: y,
          children: [
            f.jsx("label", {
              className: "field-label",
              htmlFor: "edge-weight",
              children: "Edge weight",
            }),
            f.jsx("input", {
              id: "edge-weight",
              className: "full-input",
              type: "number",
              min: "0",
              max: "1000000",
              step: "1",
              value: D,
              onChange: (R) => Y(R.target.value),
              autoFocus: !0,
            }),
            C &&
              f.jsx("p", {
                role: "alert",
                className: "form-error",
                children: C,
              }),
            f.jsx("p", {
              className: "dialog-description",
              children:
                "A non-negative whole number. Algorithms use this as the cost of the connection.",
            }),
            f.jsxs("div", {
              className: "dialog-actions",
              children: [
                f.jsx("button", {
                  type: "button",
                  className: "button",
                  onClick: () => {
                    (b({ ...o, edges: o.edges.filter((R) => R.id !== v) }),
                      s());
                  },
                  children: "Remove connection",
                }),
                f.jsx("button", {
                  className: "button primary",
                  type: "submit",
                  children: "Save weight",
                }),
              ],
            }),
          ],
        }),
  });
}
function R0() {
  const [o, v] = rl.useState(Hr),
    [b, s] = rl.useState("Dijkstra"),
    [E, D] = rl.useState(500),
    [Y, C] = rl.useState("Your workspace is ready."),
    [O, y] = rl.useState(null),
    [R, U] = rl.useState("matrix"),
    M = _0(E),
    V = rl.useRef(null),
    W = M.phase === "done",
    tl = xu[b],
    ol =
      M.phase === "running"
        ? `Running ${xu[M.type].label}…`
        : M.phase === "paused"
          ? "Animation paused. Take your time."
          : W
            ? M.result.message
            : Y;
  function P(q, ml) {
    (M.clear(), v(q), ml && C(ml));
  }
  function Hl() {
    const q = b0(o);
    if (q === o) {
      C("All 26 node names are in use.");
      return;
    }
    P(q, `Added node ${q.nodes.at(-1).id}.`);
  }
  function _(q) {
    P(p0(o, q), `Removed node ${q}.`);
  }
  function w() {
    (P(Hr(), "Sample graph loaded."), y(null));
  }
  function K(q = b, ml = !1) {
    try {
      M.start(o, q, ml);
    } catch (Gl) {
      C(Gl.message);
    }
  }
  function Yl() {
    const q = new Blob([T0(o)], { type: "application/xml" }),
      ml = URL.createObjectURL(q),
      Gl = document.createElement("a");
    ((Gl.href = ml),
      (Gl.download = `graph-${new Date().toISOString().slice(0, 10)}.xml`),
      Gl.click(),
      setTimeout(() => URL.revokeObjectURL(ml), 1e3),
      C("Graph downloaded as XML."));
  }
  async function ll(q) {
    const ml = q.target.files?.[0];
    if (((q.target.value = ""), !!ml))
      try {
        if (ml.size > 2e6)
          throw new Error("This graph file is too large (maximum 2 MB).");
        const Gl = z0(await ml.text());
        P(Gl, `Loaded ${ml.name}.`);
      } catch (Gl) {
        C(Gl.message);
      }
  }
  return f.jsxs("div", {
    className: "app-shell",
    children: [
      f.jsxs("header", {
        className: "app-header",
        children: [
          f.jsxs("a", {
            className: "brand",
            href: "#workspace",
            "aria-label": "Graph Theory Studio workspace",
            children: [
              f.jsx("img", {
                src: "/favicon.svg",
                width: "44",
                height: "44",
                alt: "",
              }),
              f.jsxs("div", {
                children: [
                  f.jsxs("span", {
                    children: [
                      "Graph Theory",
                      f.jsx("span", { className: "brand-dot", children: "." }),
                    ],
                  }),
                  f.jsx("small", {
                    children: "A little exploration. A clearer connection.",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "header-caption",
            children: [
              f.jsx("span", {
                className: "eyebrow",
                children: "THE INTERACTIVE TEACHING AID",
              }),
              f.jsx("span", { className: "header-rule" }),
            ],
          }),
          f.jsxs("div", {
            className: "file-actions",
            children: [
              f.jsx("input", {
                ref: V,
                type: "file",
                accept: ".xml,application/xml,text/xml",
                onChange: ll,
                hidden: !0,
                "aria-label": "Load graph XML",
              }),
              f.jsxs("button", {
                className: "button",
                disabled: M.busy,
                onClick: () => V.current.click(),
                children: [
                  f.jsx(ql, { name: "upload" }),
                  f.jsx("span", { children: "Load graph" }),
                ],
              }),
              f.jsxs("button", {
                className: "button",
                onClick: Yl,
                disabled: M.busy,
                children: [
                  f.jsx(ql, { name: "download" }),
                  f.jsx("span", { children: "Save graph" }),
                ],
              }),
            ],
          }),
        ],
      }),
      f.jsxs("main", {
        id: "workspace",
        children: [
          f.jsxs("section", {
            className: "workspace-heading",
            children: [
              f.jsxs("div", {
                children: [
                  f.jsxs("p", {
                    className: "eyebrow",
                    children: [
                      f.jsx("span", { className: "tiny-line" }),
                      "THE GRAPH LAB",
                    ],
                  }),
                  f.jsxs("h1", {
                    children: [
                      "Your graph, in motion",
                      f.jsx("span", { children: "." }),
                    ],
                  }),
                  f.jsx("p", {
                    children:
                      "Build a connection. Follow a path. See the idea click.",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "graph-metrics",
                "aria-label": "Graph statistics",
                children: [
                  f.jsxs("div", {
                    children: [
                      f.jsx("strong", {
                        children: String(o.nodes.length).padStart(2, "0"),
                      }),
                      f.jsx("span", { children: "nodes" }),
                    ],
                  }),
                  f.jsx("span", { className: "metric-divider" }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("strong", {
                        children: String(o.edges.length).padStart(2, "0"),
                      }),
                      f.jsx("span", { children: "connections" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("section", {
            className: "toolbar",
            "aria-label": "Graph editing tools",
            children: [
              f.jsxs("div", {
                className: "toolbar-group",
                children: [
                  f.jsxs("button", {
                    className: "button primary",
                    onClick: Hl,
                    disabled: M.busy || o.nodes.length === 26,
                    children: [f.jsx(ql, { name: "plus" }), "Add node"],
                  }),
                  f.jsxs("button", {
                    className: "button",
                    onClick: () => _(o.nodes.at(-1).id),
                    disabled: M.busy || !o.nodes.length,
                    children: [f.jsx(ql, { name: "minus" }), "Remove node"],
                  }),
                  f.jsx("span", { className: "toolbar-divider" }),
                  f.jsxs("button", {
                    className: "button ghost",
                    onClick: w,
                    disabled: M.busy,
                    children: [f.jsx(ql, { name: "reset" }), "Sample graph"],
                  }),
                  f.jsxs("button", {
                    className: "button ghost",
                    onClick: () => P(E0(o), "All nodes connected."),
                    disabled: M.busy || o.nodes.length < 2,
                    children: [f.jsx(ql, { name: "connect" }), "Fully connect"],
                  }),
                  f.jsxs("button", {
                    className: "button ghost clear-button",
                    onClick: () => y({ type: "clear" }),
                    disabled: M.busy || !o.nodes.length,
                    children: [
                      f.jsx(ql, { name: "trash" }),
                      f.jsx("span", { children: "Clear" }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "weight-mode",
                children: [
                  f.jsx("span", { children: "Edge weights" }),
                  f.jsxs("div", {
                    className: "segmented",
                    role: "group",
                    "aria-label": "Edge weight mode",
                    children: [
                      f.jsx("button", {
                        "aria-pressed": !o.pixelMode,
                        disabled: M.busy,
                        onClick: () =>
                          P(
                            { ...o, pixelMode: !1 },
                            "Manual edge weights enabled.",
                          ),
                        children: "Manual",
                      }),
                      f.jsx("button", {
                        "aria-pressed": o.pixelMode,
                        disabled: M.busy,
                        onClick: () =>
                          P(
                            { ...o, pixelMode: !0 },
                            "Distance-based edge weights enabled.",
                          ),
                        children: "Distance",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "workspace-grid",
            children: [
              f.jsxs("div", {
                className: "workspace-main",
                children: [
                  f.jsxs("section", {
                    className: "canvas-card",
                    "aria-label": "Graph canvas",
                    children: [
                      f.jsxs("div", {
                        className: "canvas-heading",
                        children: [
                          f.jsxs("div", {
                            className: "canvas-title",
                            children: [
                              f.jsx("span", {
                                className: "section-number",
                                children: "01",
                              }),
                              f.jsx("h2", { children: "Workspace" }),
                              f.jsxs("span", {
                                className: `live-badge ${M.busy ? "is-running" : ""}`,
                                children: [
                                  f.jsx("span", {}),
                                  M.busy ? "IN MOTION" : "LIVE CANVAS",
                                ],
                              }),
                            ],
                          }),
                          f.jsxs("button", {
                            className: "button ghost compact",
                            onClick: () => {
                              (M.clear(), C("Node and edge highlights reset."));
                            },
                            children: [
                              f.jsx(ql, { name: "reset" }),
                              "Reset highlights",
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "canvas-area",
                        children: [
                          f.jsx(x0, {
                            graph: o,
                            player: M,
                            onMove: (q, ml, Gl) =>
                              v((ut) => ({
                                ...ut,
                                nodes: ut.nodes.map((Xl) =>
                                  Xl.id === q ? { ...Xl, x: ml, y: Gl } : Xl,
                                ),
                              })),
                            onNode: (q) =>
                              !M.busy && y({ type: "node", id: q }),
                            onEdge: (q) =>
                              !M.busy && y({ type: "edge", id: q }),
                            onRemove: _,
                          }),
                          !o.nodes.length &&
                            f.jsxs("div", {
                              className: "empty-canvas",
                              children: [
                                f.jsx("img", { src: "/favicon.svg", alt: "" }),
                                f.jsx("h3", {
                                  children: "Every graph starts somewhere.",
                                }),
                                f.jsx("p", {
                                  children:
                                    "Add your first node, or explore the sample graph.",
                                }),
                                f.jsxs("button", {
                                  className: "button primary",
                                  onClick: Hl,
                                  children: [
                                    f.jsx(ql, { name: "plus" }),
                                    "Add a node",
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "canvas-footer",
                        children: [
                          f.jsxs("div", {
                            className: "canvas-help",
                            children: [
                              f.jsxs("span", {
                                children: [
                                  f.jsx(ql, { name: "cursor", size: 13 }),
                                  "Drag to arrange",
                                ],
                              }),
                              f.jsx("span", {
                                children: "Click a node to connect",
                              }),
                              f.jsx("span", {
                                children: "Click a weight to edit",
                              }),
                            ],
                          }),
                          f.jsxs("div", {
                            className: "legend",
                            children: [
                              f.jsxs("span", {
                                children: [
                                  f.jsx("i", {
                                    className: "legend-dot exploring",
                                  }),
                                  "Exploring",
                                ],
                              }),
                              f.jsxs("span", {
                                children: [
                                  f.jsx("i", { className: "legend-dot best" }),
                                  "Best path",
                                ],
                              }),
                              f.jsxs("span", {
                                children: [
                                  f.jsx("i", { className: "legend-dot final" }),
                                  "Final solution",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx(A0, { graph: o, tab: R, setTab: U }),
                ],
              }),
              f.jsxs("aside", {
                className: "inspector",
                children: [
                  f.jsxs("section", {
                    className: "algorithm-card",
                    children: [
                      f.jsxs("div", {
                        className: "panel-heading",
                        children: [
                          f.jsx("span", {
                            className: "section-number",
                            children: "02",
                          }),
                          f.jsx("h2", { children: "Find your way" }),
                        ],
                      }),
                      f.jsx("p", {
                        className: "panel-intro",
                        children: "Choose an algorithm. Watch it think.",
                      }),
                      f.jsx("div", {
                        className: "algorithm-tabs",
                        role: "group",
                        "aria-label": "Pathfinding algorithm",
                        children: ["BFS", "DFS", "Dijkstra"].map((q) =>
                          f.jsx(
                            "button",
                            {
                              "aria-pressed": b === q,
                              disabled: M.busy,
                              onClick: () => {
                                (s(q), M.clear());
                              },
                              children: xu[q].short,
                            },
                            q,
                          ),
                        ),
                      }),
                      f.jsx("div", {
                        className: "tsp-options",
                        role: "group",
                        "aria-label": "Travelling salesman algorithm",
                        children: ["BruteForce", "Nearest"].map((q) =>
                          f.jsxs(
                            "button",
                            {
                              "aria-pressed": b === q,
                              disabled: M.busy,
                              onClick: () => {
                                (s(q), M.clear());
                              },
                              children: [
                                f.jsx("span", { children: xu[q].label }),
                                f.jsx(ql, { name: "chevron", size: 14 }),
                              ],
                            },
                            q,
                          ),
                        ),
                      }),
                      f.jsxs("div", {
                        className: "algorithm-note",
                        children: [
                          f.jsx("p", { children: tl.description }),
                          f.jsx("code", { children: tl.complexity }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "route-fields",
                        children: [
                          f.jsxs("label", {
                            children: [
                              "Source",
                              f.jsxs("select", {
                                value: o.source,
                                disabled: M.busy,
                                onChange: (q) =>
                                  P(
                                    { ...o, source: q.target.value },
                                    `Source set to ${q.target.value}.`,
                                  ),
                                children: [
                                  f.jsx("option", {
                                    value: "",
                                    children: "Select",
                                  }),
                                  o.nodes.map((q) =>
                                    f.jsx("option", { children: q.id }, q.id),
                                  ),
                                ],
                              }),
                            ],
                          }),
                          f.jsx("span", {
                            className: "route-arrow",
                            children: f.jsx(ql, { name: "arrow" }),
                          }),
                          f.jsxs("label", {
                            children: [
                              "Target",
                              f.jsxs("select", {
                                value: o.target,
                                disabled: M.busy,
                                onChange: (q) =>
                                  P(
                                    { ...o, target: q.target.value },
                                    `Target set to ${q.target.value}.`,
                                  ),
                                children: [
                                  f.jsx("option", {
                                    value: "",
                                    children: "Select",
                                  }),
                                  o.nodes.map((q) =>
                                    f.jsx("option", { children: q.id }, q.id),
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("button", {
                        className: "button primary run-button",
                        disabled: !o.nodes.length,
                        onClick: () =>
                          M.phase === "running"
                            ? M.pause()
                            : M.phase === "paused"
                              ? M.resume()
                              : K(),
                        children: [
                          f.jsx(ql, {
                            name: M.phase === "running" ? "pause" : "play",
                          }),
                          M.phase === "running"
                            ? "Pause animation"
                            : M.phase === "paused"
                              ? "Resume animation"
                              : "Run algorithm",
                          f.jsx("span", {
                            className: "run-arrow",
                            children: "↗",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "playback-controls",
                        children: [
                          f.jsxs("button", {
                            className: "button ghost compact",
                            disabled: !o.nodes.length,
                            onClick: () => (M.busy ? M.step() : K(b, !0)),
                            children: [
                              f.jsx(ql, { name: "step", size: 14 }),
                              "Next step",
                            ],
                          }),
                          f.jsxs("button", {
                            className: "button ghost compact",
                            disabled: !M.busy,
                            onClick: () => {
                              (M.stop(), C("Animation stopped."));
                            },
                            children: [
                              f.jsx(ql, { name: "stop", size: 13 }),
                              "Stop",
                            ],
                          }),
                          f.jsx("button", {
                            className: "text-button shortest-button",
                            disabled: M.busy || !o.nodes.length,
                            onClick: () => {
                              (s("Dijkstra"), K("Dijkstra"));
                            },
                            children: "Shortest path",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "delay-control",
                        children: [
                          f.jsxs("div", {
                            children: [
                              f.jsx("label", {
                                htmlFor: "animation-delay",
                                children: "Animation delay",
                              }),
                              f.jsxs("output", {
                                htmlFor: "animation-delay",
                                children: [
                                  E,
                                  " ",
                                  f.jsx("span", { children: "ms" }),
                                ],
                              }),
                            ],
                          }),
                          f.jsx("input", {
                            id: "animation-delay",
                            type: "range",
                            min: "100",
                            max: "2000",
                            step: "50",
                            value: E,
                            onChange: (q) => D(Number(q.target.value)),
                            style: {
                              "--range-progress": `${((E - 100) / 1900) * 100}%`,
                            },
                          }),
                          f.jsxs("div", {
                            className: "range-labels",
                            children: [
                              f.jsx("span", { children: "Quick" }),
                              f.jsx("span", { children: "Thoughtful" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("section", {
                    className: `output-card ${W ? "complete" : ""}`,
                    children: [
                      f.jsxs("div", {
                        className: "output-heading",
                        children: [
                          f.jsxs("div", {
                            className: "panel-heading",
                            children: [
                              f.jsx("span", {
                                className: "section-number",
                                children: "03",
                              }),
                              f.jsx("h2", { children: "Algorithm output" }),
                            ],
                          }),
                          W && f.jsx(ql, { name: "check" }),
                        ],
                      }),
                      M.result?.path.length > 0 &&
                        f.jsxs("div", {
                          className: "result-summary",
                          children: [
                            f.jsx("span", { children: "PATH FOUND" }),
                            f.jsx("strong", {
                              children: M.result.path.join(" → "),
                            }),
                            f.jsxs("div", {
                              children: [
                                f.jsxs("span", {
                                  children: [
                                    "Total weight ",
                                    f.jsx("b", { children: M.result.distance }),
                                  ],
                                }),
                                f.jsxs("span", {
                                  children: [
                                    "Edges ",
                                    f.jsx("b", {
                                      children: M.result.path.length - 1,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      f.jsx("div", {
                        className: "algorithm-output",
                        role: "log",
                        "aria-label": "Algorithm steps",
                        "aria-live": "polite",
                        "aria-relevant": "additions text",
                        children: M.log.length
                          ? M.log.map((q, ml) =>
                              f.jsxs(
                                "p",
                                {
                                  className:
                                    ml === M.log.length - 1 ? "latest" : "",
                                  children: [
                                    f.jsx("span", {
                                      children: String(ml + 1).padStart(2, "0"),
                                    }),
                                    f.jsx("span", { children: q }),
                                  ],
                                },
                                `${ml}-${q.slice(0, 16)}`,
                              ),
                            )
                          : f.jsxs("div", {
                              className: "output-empty",
                              children: [
                                f.jsx("span", {
                                  className: "output-spark",
                                  children: "✳",
                                }),
                                f.jsx("p", {
                                  children: "A path is waiting to be found.",
                                }),
                                f.jsx("small", {
                                  children:
                                    "Your algorithm’s steps will appear here.",
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "learning-note",
                    children: [
                      f.jsx(ql, { name: "info", size: 15 }),
                      f.jsx("p", {
                        children:
                          "Try the same graph with different algorithms. The journey can be just as interesting as the result.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      f.jsxs("footer", {
        className: "app-footer",
        children: [
          f.jsxs("div", {
            role: "status",
            children: [
              f.jsx("span", {
                className: `status-dot ${M.busy ? "pulse" : ""}`,
              }),
              ol,
            ],
          }),
          f.jsx("span", { children: "MADE FOR CURIOUS MINDS" }),
        ],
      }),
      O?.type === "node" &&
        f.jsx(
          U0,
          {
            graph: o,
            id: O.id,
            onChange: (q) => P(q, "Connections updated."),
            onClose: () => y(null),
            onRemove: _,
          },
          O.id,
        ),
      O?.type === "edge" &&
        f.jsx(C0, {
          graph: o,
          id: O.id,
          onChange: (q) => P(q, "Connection updated."),
          onClose: () => y(null),
        }),
      O?.type === "clear" &&
        f.jsxs(Ef, {
          title: "Start with a clean canvas?",
          onClose: () => y(null),
          children: [
            f.jsx("p", {
              className: "dialog-description",
              children:
                "This removes all nodes and connections. Save your graph first if you want to keep it.",
            }),
            f.jsxs("div", {
              className: "dialog-actions",
              children: [
                f.jsx("button", {
                  className: "button",
                  onClick: () => y(null),
                  children: "Keep exploring",
                }),
                f.jsx("button", {
                  className: "button primary",
                  onClick: () => {
                    (P(
                      {
                        nodes: [],
                        edges: [],
                        source: "",
                        target: "",
                        pixelMode: o.pixelMode,
                      },
                      "Graph cleared. A fresh start.",
                    ),
                      y(null));
                  },
                  children: "Clear graph",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
S0.createRoot(document.getElementById("root")).render(
  f.jsx(d0.StrictMode, { children: f.jsx(R0, {}) }),
);

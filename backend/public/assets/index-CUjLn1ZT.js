(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && s(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = r(c);
    fetch(c.href, f);
  }
})();
var qo = { exports: {} },
  oi = {};
var Hm;
function o1() {
  if (Hm) return oi;
  Hm = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function r(s, c, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      c.key !== void 0 && (h = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var y in c) y !== "key" && (f[y] = c[y]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: i, type: s, key: h, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return ((oi.Fragment = l), (oi.jsx = r), (oi.jsxs = r), oi);
}
var qm;
function c1() {
  return (qm || ((qm = 1), (qo.exports = o1())), qo.exports);
}
var v = c1(),
  Fo = { exports: {} },
  ae = {};
var Fm;
function f1() {
  if (Fm) return ae;
  Fm = 1;
  var i = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    x = Symbol.for("react.activity"),
    B = Symbol.iterator;
  function F(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (B && E[B]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var O = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    C = {};
  function k(E, H, V) {
    ((this.props = E),
      (this.context = H),
      (this.refs = C),
      (this.updater = V || O));
  }
  ((k.prototype.isReactComponent = {}),
    (k.prototype.setState = function (E, H) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, H, "setState");
    }),
    (k.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function K() {}
  K.prototype = k.prototype;
  function Y(E, H, V) {
    ((this.props = E),
      (this.context = H),
      (this.refs = C),
      (this.updater = V || O));
  }
  var ee = (Y.prototype = new K());
  ((ee.constructor = Y), U(ee, k.prototype), (ee.isPureReactComponent = !0));
  var ie = Array.isArray;
  function P() {}
  var X = { H: null, A: null, T: null, S: null },
    Te = Object.prototype.hasOwnProperty;
  function Me(E, H, V) {
    var Q = V.ref;
    return {
      $$typeof: i,
      type: E,
      key: H,
      ref: Q !== void 0 ? Q : null,
      props: V,
    };
  }
  function bt(E, H) {
    return Me(E.type, H, E.props);
  }
  function st(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function Ue(E) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (V) {
        return H[V];
      })
    );
  }
  var at = /\/+/g;
  function ke(E, H) {
    return typeof E == "object" && E !== null && E.key != null
      ? Ue("" + E.key)
      : H.toString(36);
  }
  function je(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(P, P)
            : ((E.status = "pending"),
              E.then(
                function (H) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = H));
                },
                function (H) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = H));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function D(E, H, V, Q, ne) {
    var se = typeof E;
    (se === "undefined" || se === "boolean") && (E = null);
    var ve = !1;
    if (E === null) ve = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case l:
              ve = !0;
              break;
            case b:
              return ((ve = E._init), D(ve(E._payload), H, V, Q, ne));
          }
      }
    if (ve)
      return (
        (ne = ne(E)),
        (ve = Q === "" ? "." + ke(E, 0) : Q),
        ie(ne)
          ? ((V = ""),
            ve != null && (V = ve.replace(at, "$&/") + "/"),
            D(ne, H, V, "", function (yl) {
              return yl;
            }))
          : ne != null &&
            (st(ne) &&
              (ne = bt(
                ne,
                V +
                  (ne.key == null || (E && E.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(at, "$&/") + "/") +
                  ve,
              )),
            H.push(ne)),
        1
      );
    ve = 0;
    var ut = Q === "" ? "." : Q + ":";
    if (ie(E))
      for (var Le = 0; Le < E.length; Le++)
        ((Q = E[Le]), (se = ut + ke(Q, Le)), (ve += D(Q, H, V, se, ne)));
    else if (((Le = F(E)), typeof Le == "function"))
      for (E = Le.call(E), Le = 0; !(Q = E.next()).done; )
        ((Q = Q.value), (se = ut + ke(Q, Le++)), (ve += D(Q, H, V, se, ne)));
    else if (se === "object") {
      if (typeof E.then == "function") return D(je(E), H, V, Q, ne);
      throw (
        (H = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ve;
  }
  function G(E, H, V) {
    if (E == null) return E;
    var Q = [],
      ne = 0;
    return (
      D(E, Q, "", "", function (se) {
        return H.call(V, se, ne++);
      }),
      Q
    );
  }
  function $(E) {
    if (E._status === -1) {
      var H = E._result;
      ((H = H()),
        H.then(
          function (V) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = V));
          },
          function (V) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = V));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = H)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ye =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(H)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    be = {
      map: G,
      forEach: function (E, H, V) {
        G(
          E,
          function () {
            H.apply(this, arguments);
          },
          V,
        );
      },
      count: function (E) {
        var H = 0;
        return (
          G(E, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (E) {
        return (
          G(E, function (H) {
            return H;
          }) || []
        );
      },
      only: function (E) {
        if (!st(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (ae.Activity = x),
    (ae.Children = be),
    (ae.Component = k),
    (ae.Fragment = r),
    (ae.Profiler = c),
    (ae.PureComponent = Y),
    (ae.StrictMode = s),
    (ae.Suspense = p),
    (ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X),
    (ae.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return X.H.useMemoCache(E);
      },
    }),
    (ae.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (ae.cacheSignal = function () {
      return null;
    }),
    (ae.cloneElement = function (E, H, V) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var Q = U({}, E.props),
        ne = E.key;
      if (H != null)
        for (se in (H.key !== void 0 && (ne = "" + H.key), H))
          !Te.call(H, se) ||
            se === "key" ||
            se === "__self" ||
            se === "__source" ||
            (se === "ref" && H.ref === void 0) ||
            (Q[se] = H[se]);
      var se = arguments.length - 2;
      if (se === 1) Q.children = V;
      else if (1 < se) {
        for (var ve = Array(se), ut = 0; ut < se; ut++)
          ve[ut] = arguments[ut + 2];
        Q.children = ve;
      }
      return Me(E.type, ne, Q);
    }),
    (ae.createContext = function (E) {
      return (
        (E = {
          $$typeof: h,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: f, _context: E }),
        E
      );
    }),
    (ae.createElement = function (E, H, V) {
      var Q,
        ne = {},
        se = null;
      if (H != null)
        for (Q in (H.key !== void 0 && (se = "" + H.key), H))
          Te.call(H, Q) &&
            Q !== "key" &&
            Q !== "__self" &&
            Q !== "__source" &&
            (ne[Q] = H[Q]);
      var ve = arguments.length - 2;
      if (ve === 1) ne.children = V;
      else if (1 < ve) {
        for (var ut = Array(ve), Le = 0; Le < ve; Le++)
          ut[Le] = arguments[Le + 2];
        ne.children = ut;
      }
      if (E && E.defaultProps)
        for (Q in ((ve = E.defaultProps), ve))
          ne[Q] === void 0 && (ne[Q] = ve[Q]);
      return Me(E, se, ne);
    }),
    (ae.createRef = function () {
      return { current: null };
    }),
    (ae.forwardRef = function (E) {
      return { $$typeof: y, render: E };
    }),
    (ae.isValidElement = st),
    (ae.lazy = function (E) {
      return { $$typeof: b, _payload: { _status: -1, _result: E }, _init: $ };
    }),
    (ae.memo = function (E, H) {
      return { $$typeof: g, type: E, compare: H === void 0 ? null : H };
    }),
    (ae.startTransition = function (E) {
      var H = X.T,
        V = {};
      X.T = V;
      try {
        var Q = E(),
          ne = X.S;
        (ne !== null && ne(V, Q),
          typeof Q == "object" &&
            Q !== null &&
            typeof Q.then == "function" &&
            Q.then(P, ye));
      } catch (se) {
        ye(se);
      } finally {
        (H !== null && V.types !== null && (H.types = V.types), (X.T = H));
      }
    }),
    (ae.unstable_useCacheRefresh = function () {
      return X.H.useCacheRefresh();
    }),
    (ae.use = function (E) {
      return X.H.use(E);
    }),
    (ae.useActionState = function (E, H, V) {
      return X.H.useActionState(E, H, V);
    }),
    (ae.useCallback = function (E, H) {
      return X.H.useCallback(E, H);
    }),
    (ae.useContext = function (E) {
      return X.H.useContext(E);
    }),
    (ae.useDebugValue = function () {}),
    (ae.useDeferredValue = function (E, H) {
      return X.H.useDeferredValue(E, H);
    }),
    (ae.useEffect = function (E, H) {
      return X.H.useEffect(E, H);
    }),
    (ae.useEffectEvent = function (E) {
      return X.H.useEffectEvent(E);
    }),
    (ae.useId = function () {
      return X.H.useId();
    }),
    (ae.useImperativeHandle = function (E, H, V) {
      return X.H.useImperativeHandle(E, H, V);
    }),
    (ae.useInsertionEffect = function (E, H) {
      return X.H.useInsertionEffect(E, H);
    }),
    (ae.useLayoutEffect = function (E, H) {
      return X.H.useLayoutEffect(E, H);
    }),
    (ae.useMemo = function (E, H) {
      return X.H.useMemo(E, H);
    }),
    (ae.useOptimistic = function (E, H) {
      return X.H.useOptimistic(E, H);
    }),
    (ae.useReducer = function (E, H, V) {
      return X.H.useReducer(E, H, V);
    }),
    (ae.useRef = function (E) {
      return X.H.useRef(E);
    }),
    (ae.useState = function (E) {
      return X.H.useState(E);
    }),
    (ae.useSyncExternalStore = function (E, H, V) {
      return X.H.useSyncExternalStore(E, H, V);
    }),
    (ae.useTransition = function () {
      return X.H.useTransition();
    }),
    (ae.version = "19.2.4"),
    ae
  );
}
var km;
function yc() {
  return (km || ((km = 1), (Fo.exports = f1())), Fo.exports);
}
var N = yc(),
  ko = { exports: {} },
  ci = {},
  Yo = { exports: {} },
  Go = {};
var Ym;
function d1() {
  return (
    Ym ||
      ((Ym = 1),
      (function (i) {
        function l(D, G) {
          var $ = D.length;
          D.push(G);
          e: for (; 0 < $; ) {
            var ye = ($ - 1) >>> 1,
              be = D[ye];
            if (0 < c(be, G)) ((D[ye] = G), (D[$] = be), ($ = ye));
            else break e;
          }
        }
        function r(D) {
          return D.length === 0 ? null : D[0];
        }
        function s(D) {
          if (D.length === 0) return null;
          var G = D[0],
            $ = D.pop();
          if ($ !== G) {
            D[0] = $;
            e: for (var ye = 0, be = D.length, E = be >>> 1; ye < E; ) {
              var H = 2 * (ye + 1) - 1,
                V = D[H],
                Q = H + 1,
                ne = D[Q];
              if (0 > c(V, $))
                Q < be && 0 > c(ne, V)
                  ? ((D[ye] = ne), (D[Q] = $), (ye = Q))
                  : ((D[ye] = V), (D[H] = $), (ye = H));
              else if (Q < be && 0 > c(ne, $))
                ((D[ye] = ne), (D[Q] = $), (ye = Q));
              else break e;
            }
          }
          return G;
        }
        function c(D, G) {
          var $ = D.sortIndex - G.sortIndex;
          return $ !== 0 ? $ : D.id - G.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          i.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            y = h.now();
          i.unstable_now = function () {
            return h.now() - y;
          };
        }
        var p = [],
          g = [],
          b = 1,
          x = null,
          B = 3,
          F = !1,
          O = !1,
          U = !1,
          C = !1,
          k = typeof setTimeout == "function" ? setTimeout : null,
          K = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function ee(D) {
          for (var G = r(g); G !== null; ) {
            if (G.callback === null) s(g);
            else if (G.startTime <= D)
              (s(g), (G.sortIndex = G.expirationTime), l(p, G));
            else break;
            G = r(g);
          }
        }
        function ie(D) {
          if (((U = !1), ee(D), !O))
            if (r(p) !== null) ((O = !0), P || ((P = !0), Ue()));
            else {
              var G = r(g);
              G !== null && je(ie, G.startTime - D);
            }
        }
        var P = !1,
          X = -1,
          Te = 5,
          Me = -1;
        function bt() {
          return C ? !0 : !(i.unstable_now() - Me < Te);
        }
        function st() {
          if (((C = !1), P)) {
            var D = i.unstable_now();
            Me = D;
            var G = !0;
            try {
              e: {
                ((O = !1), U && ((U = !1), K(X), (X = -1)), (F = !0));
                var $ = B;
                try {
                  t: {
                    for (
                      ee(D), x = r(p);
                      x !== null && !(x.expirationTime > D && bt());
                    ) {
                      var ye = x.callback;
                      if (typeof ye == "function") {
                        ((x.callback = null), (B = x.priorityLevel));
                        var be = ye(x.expirationTime <= D);
                        if (((D = i.unstable_now()), typeof be == "function")) {
                          ((x.callback = be), ee(D), (G = !0));
                          break t;
                        }
                        (x === r(p) && s(p), ee(D));
                      } else s(p);
                      x = r(p);
                    }
                    if (x !== null) G = !0;
                    else {
                      var E = r(g);
                      (E !== null && je(ie, E.startTime - D), (G = !1));
                    }
                  }
                  break e;
                } finally {
                  ((x = null), (B = $), (F = !1));
                }
                G = void 0;
              }
            } finally {
              G ? Ue() : (P = !1);
            }
          }
        }
        var Ue;
        if (typeof Y == "function")
          Ue = function () {
            Y(st);
          };
        else if (typeof MessageChannel < "u") {
          var at = new MessageChannel(),
            ke = at.port2;
          ((at.port1.onmessage = st),
            (Ue = function () {
              ke.postMessage(null);
            }));
        } else
          Ue = function () {
            k(st, 0);
          };
        function je(D, G) {
          X = k(function () {
            D(i.unstable_now());
          }, G);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (i.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Te = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return B;
          }),
          (i.unstable_next = function (D) {
            switch (B) {
              case 1:
              case 2:
              case 3:
                var G = 3;
                break;
              default:
                G = B;
            }
            var $ = B;
            B = G;
            try {
              return D();
            } finally {
              B = $;
            }
          }),
          (i.unstable_requestPaint = function () {
            C = !0;
          }),
          (i.unstable_runWithPriority = function (D, G) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var $ = B;
            B = D;
            try {
              return G();
            } finally {
              B = $;
            }
          }),
          (i.unstable_scheduleCallback = function (D, G, $) {
            var ye = i.unstable_now();
            switch (
              (typeof $ == "object" && $ !== null
                ? (($ = $.delay),
                  ($ = typeof $ == "number" && 0 < $ ? ye + $ : ye))
                : ($ = ye),
              D)
            ) {
              case 1:
                var be = -1;
                break;
              case 2:
                be = 250;
                break;
              case 5:
                be = 1073741823;
                break;
              case 4:
                be = 1e4;
                break;
              default:
                be = 5e3;
            }
            return (
              (be = $ + be),
              (D = {
                id: b++,
                callback: G,
                priorityLevel: D,
                startTime: $,
                expirationTime: be,
                sortIndex: -1,
              }),
              $ > ye
                ? ((D.sortIndex = $),
                  l(g, D),
                  r(p) === null &&
                    D === r(g) &&
                    (U ? (K(X), (X = -1)) : (U = !0), je(ie, $ - ye)))
                : ((D.sortIndex = be),
                  l(p, D),
                  O || F || ((O = !0), P || ((P = !0), Ue()))),
              D
            );
          }),
          (i.unstable_shouldYield = bt),
          (i.unstable_wrapCallback = function (D) {
            var G = B;
            return function () {
              var $ = B;
              B = G;
              try {
                return D.apply(this, arguments);
              } finally {
                B = $;
              }
            };
          }));
      })(Go)),
    Go
  );
}
var Gm;
function h1() {
  return (Gm || ((Gm = 1), (Yo.exports = d1())), Yo.exports);
}
var Vo = { exports: {} },
  lt = {};
var Vm;
function m1() {
  if (Vm) return lt;
  Vm = 1;
  var i = yc();
  function l(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(l(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(p, g, b) {
    var x =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: x == null ? null : "" + x,
      children: p,
      containerInfo: g,
      implementation: b,
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (lt.createPortal = function (p, g) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(l(299));
      return f(p, g, null, b);
    }),
    (lt.flushSync = function (p) {
      var g = h.T,
        b = s.p;
      try {
        if (((h.T = null), (s.p = 2), p)) return p();
      } finally {
        ((h.T = g), (s.p = b), s.d.f());
      }
    }),
    (lt.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        s.d.C(p, g));
    }),
    (lt.prefetchDNS = function (p) {
      typeof p == "string" && s.d.D(p);
    }),
    (lt.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var b = g.as,
          x = y(b, g.crossOrigin),
          B = typeof g.integrity == "string" ? g.integrity : void 0,
          F = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        b === "style"
          ? s.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: x,
              integrity: B,
              fetchPriority: F,
            })
          : b === "script" &&
            s.d.X(p, {
              crossOrigin: x,
              integrity: B,
              fetchPriority: F,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (lt.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var b = y(g.as, g.crossOrigin);
            s.d.M(p, {
              crossOrigin: b,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(p);
    }),
    (lt.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var b = g.as,
          x = y(b, g.crossOrigin);
        s.d.L(p, b, {
          crossOrigin: x,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (lt.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var b = y(g.as, g.crossOrigin);
          s.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else s.d.m(p);
    }),
    (lt.requestFormReset = function (p) {
      s.d.r(p);
    }),
    (lt.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (lt.useFormState = function (p, g, b) {
      return h.H.useFormState(p, g, b);
    }),
    (lt.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (lt.version = "19.2.4"),
    lt
  );
}
var Xm;
function p1() {
  if (Xm) return Vo.exports;
  Xm = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return (i(), (Vo.exports = m1()), Vo.exports);
}
var Qm;
function y1() {
  if (Qm) return ci;
  Qm = 1;
  var i = h1(),
    l = yc(),
    r = p1();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
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
  function y(e) {
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
  function p(e) {
    if (f(e) !== e) throw Error(s(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var o = u.alternate;
      if (o === null) {
        if (((a = u.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (u.child === o.child) {
        for (o = u.child; o; ) {
          if (o === n) return (p(u), e);
          if (o === a) return (p(u), t);
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== a.return) ((n = u), (a = o));
      else {
        for (var d = !1, m = u.child; m; ) {
          if (m === n) {
            ((d = !0), (n = u), (a = o));
            break;
          }
          if (m === a) {
            ((d = !0), (a = u), (n = o));
            break;
          }
          m = m.sibling;
        }
        if (!d) {
          for (m = o.child; m; ) {
            if (m === n) {
              ((d = !0), (n = o), (a = u));
              break;
            }
            if (m === a) {
              ((d = !0), (a = o), (n = u));
              break;
            }
            m = m.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== a) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = b(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var x = Object.assign,
    B = Symbol.for("react.element"),
    F = Symbol.for("react.transitional.element"),
    O = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    C = Symbol.for("react.strict_mode"),
    k = Symbol.for("react.profiler"),
    K = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    ee = Symbol.for("react.forward_ref"),
    ie = Symbol.for("react.suspense"),
    P = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    Te = Symbol.for("react.lazy"),
    Me = Symbol.for("react.activity"),
    bt = Symbol.for("react.memo_cache_sentinel"),
    st = Symbol.iterator;
  function Ue(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (st && e[st]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var at = Symbol.for("react.client.reference");
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === at ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case k:
        return "Profiler";
      case C:
        return "StrictMode";
      case ie:
        return "Suspense";
      case P:
        return "SuspenseList";
      case Me:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case O:
          return "Portal";
        case Y:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case ee:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case X:
          return (
            (t = e.displayName || null),
            t !== null ? t : ke(e.type) || "Memo"
          );
        case Te:
          ((t = e._payload), (e = e._init));
          try {
            return ke(e(t));
          } catch {}
      }
    return null;
  }
  var je = Array.isArray,
    D = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = { pending: !1, data: null, method: null, action: null },
    ye = [],
    be = -1;
  function E(e) {
    return { current: e };
  }
  function H(e) {
    0 > be || ((e.current = ye[be]), (ye[be] = null), be--);
  }
  function V(e, t) {
    (be++, (ye[be] = e.current), (e.current = t));
  }
  var Q = E(null),
    ne = E(null),
    se = E(null),
    ve = E(null);
  function ut(e, t) {
    switch ((V(se, t), V(ne, e), V(Q, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? sm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = sm(t)), (e = um(t, e)));
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
    (H(Q), V(Q, e));
  }
  function Le() {
    (H(Q), H(ne), H(se));
  }
  function yl(e) {
    e.memoizedState !== null && V(ve, e);
    var t = Q.current,
      n = um(t, e.type);
    t !== n && (V(ne, e), V(Q, n));
  }
  function Ni(e) {
    (ne.current === e && (H(Q), H(ne)),
      ve.current === e && (H(ve), (ii._currentValue = $)));
  }
  var xs, Uc;
  function na(e) {
    if (xs === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((xs = (t && t[1]) || ""),
          (Uc =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      xs +
      e +
      Uc
    );
  }
  var Ss = !1;
  function Es(e, t) {
    if (!e || Ss) return "";
    Ss = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (j) {
                  var w = j;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (j) {
                  w = j;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                w = j;
              }
              (q = e()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (j) {
            if (j && w && typeof j.stack == "string") return [j.stack, w.stack];
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
      var o = a.DetermineComponentFrameRoot(),
        d = o[0],
        m = o[1];
      if (d && m) {
        var S = d.split(`
`),
          R = m.split(`
`);
        for (
          u = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; u < R.length && !R[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === S.length || u === R.length)
          for (
            a = S.length - 1, u = R.length - 1;
            1 <= a && 0 <= u && S[a] !== R[u];
          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (S[a] !== R[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || S[a] !== R[u])) {
                  var M =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      M.includes("<anonymous>") &&
                      (M = M.replace("<anonymous>", e.displayName)),
                    M
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      ((Ss = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? na(n) : "";
  }
  function Fy(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return na(e.type);
      case 16:
        return na("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? na("Suspense Fallback")
          : na("Suspense");
      case 19:
        return na("SuspenseList");
      case 0:
      case 15:
        return Es(e.type, !1);
      case 11:
        return Es(e.type.render, !1);
      case 1:
        return Es(e.type, !0);
      case 31:
        return na("Activity");
      default:
        return "";
    }
  }
  function Lc(e) {
    try {
      var t = "",
        n = null;
      do ((t += Fy(e, n)), (n = e), (e = e.return));
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
  var _s = Object.prototype.hasOwnProperty,
    As = i.unstable_scheduleCallback,
    Ns = i.unstable_cancelCallback,
    ky = i.unstable_shouldYield,
    Yy = i.unstable_requestPaint,
    xt = i.unstable_now,
    Gy = i.unstable_getCurrentPriorityLevel,
    Hc = i.unstable_ImmediatePriority,
    qc = i.unstable_UserBlockingPriority,
    Ti = i.unstable_NormalPriority,
    Vy = i.unstable_LowPriority,
    Fc = i.unstable_IdlePriority,
    Xy = i.log,
    Qy = i.unstable_setDisableYieldValue,
    gl = null,
    St = null;
  function Cn(e) {
    if (
      (typeof Xy == "function" && Qy(e),
      St && typeof St.setStrictMode == "function")
    )
      try {
        St.setStrictMode(gl, e);
      } catch {}
  }
  var Et = Math.clz32 ? Math.clz32 : Jy,
    Zy = Math.log,
    Ky = Math.LN2;
  function Jy(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Zy(e) / Ky) | 0)) | 0);
  }
  var Ri = 256,
    Ci = 262144,
    wi = 4194304;
  function aa(e) {
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
        return e & 261888;
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
  function Oi(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var u = 0,
      o = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return (
      m !== 0
        ? ((a = m & ~o),
          a !== 0
            ? (u = aa(a))
            : ((d &= m),
              d !== 0
                ? (u = aa(d))
                : n || ((n = m & ~e), n !== 0 && (u = aa(n)))))
        : ((m = a & ~o),
          m !== 0
            ? (u = aa(m))
            : d !== 0
              ? (u = aa(d))
              : n || ((n = a & ~e), n !== 0 && (u = aa(n)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & o) === 0 &&
            ((o = u & -u),
            (n = t & -t),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? t
          : u
    );
  }
  function vl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function $y(e, t) {
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
  function kc() {
    var e = wi;
    return ((wi <<= 1), (wi & 62914560) === 0 && (wi = 4194304), e);
  }
  function Ts(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bl(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Wy(e, t, n, a, u, o) {
    var d = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var m = e.entanglements,
      S = e.expirationTimes,
      R = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var M = 31 - Et(n),
        q = 1 << M;
      ((m[M] = 0), (S[M] = -1));
      var w = R[M];
      if (w !== null)
        for (R[M] = null, M = 0; M < w.length; M++) {
          var j = w[M];
          j !== null && (j.lane &= -536870913);
        }
      n &= ~q;
    }
    (a !== 0 && Yc(e, a, 0),
      o !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(d & ~t)));
  }
  function Yc(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - Et(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function Gc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - Et(n),
        u = 1 << a;
      ((u & t) | (e[a] & t) && (e[a] |= t), (n &= ~u));
    }
  }
  function Vc(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : Rs(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function Rs(e) {
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
  function Cs(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Xc() {
    var e = G.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : zm(e.type));
  }
  function Qc(e, t) {
    var n = G.p;
    try {
      return ((G.p = e), t());
    } finally {
      G.p = n;
    }
  }
  var wn = Math.random().toString(36).slice(2),
    Pe = "__reactFiber$" + wn,
    ct = "__reactProps$" + wn,
    Na = "__reactContainer$" + wn,
    ws = "__reactEvents$" + wn,
    Py = "__reactListeners$" + wn,
    Iy = "__reactHandles$" + wn,
    Zc = "__reactResources$" + wn,
    xl = "__reactMarker$" + wn;
  function Os(e) {
    (delete e[Pe], delete e[ct], delete e[ws], delete e[Py], delete e[Iy]);
  }
  function Ta(e) {
    var t = e[Pe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Na] || n[Pe])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = pm(e); e !== null; ) {
            if ((n = e[Pe])) return n;
            e = pm(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ra(e) {
    if ((e = e[Pe] || e[Na])) {
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
  function Sl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Ca(e) {
    var t = e[Zc];
    return (
      t ||
        (t = e[Zc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function $e(e) {
    e[xl] = !0;
  }
  var Kc = new Set(),
    Jc = {};
  function la(e, t) {
    (wa(e, t), wa(e + "Capture", t));
  }
  function wa(e, t) {
    for (Jc[e] = t, e = 0; e < t.length; e++) Kc.add(t[e]);
  }
  var e0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    $c = {},
    Wc = {};
  function t0(e) {
    return _s.call(Wc, e)
      ? !0
      : _s.call($c, e)
        ? !1
        : e0.test(e)
          ? (Wc[e] = !0)
          : (($c[e] = !0), !1);
  }
  function zi(e, t, n) {
    if (t0(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
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
        e.setAttribute(t, "" + n);
      }
  }
  function ji(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function rn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function zt(e) {
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
  function Pc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function n0(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        o = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (d) {
            ((n = "" + d), o.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function zs(e) {
    if (!e._valueTracker) {
      var t = Pc(e) ? "checked" : "value";
      e._valueTracker = n0(e, t, "" + e[t]);
    }
  }
  function Ic(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = Pc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Di(e) {
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
  var a0 = /[\n"\\]/g;
  function jt(e) {
    return e.replace(a0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function js(e, t, n, a, u, o, d, m) {
    ((e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + zt(t))
          : e.value !== "" + zt(t) && (e.value = "" + zt(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? Ds(e, d, zt(t))
        : n != null
          ? Ds(e, d, zt(n))
          : a != null && e.removeAttribute("value"),
      u == null && o != null && (e.defaultChecked = !!o),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.name = "" + zt(m))
        : e.removeAttribute("name"));
  }
  function ef(e, t, n, a, u, o, d, m) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (e.type = o),
      t != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || t != null)) {
        zs(e);
        return;
      }
      ((n = n != null ? "" + zt(n) : ""),
        (t = t != null ? "" + zt(t) : n),
        m || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = m ? e.checked : !!a),
      (e.defaultChecked = !!a),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      zs(e));
  }
  function Ds(e, t, n) {
    (t === "number" && Di(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Oa(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < n.length; u++) t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        ((u = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== u && (e[n].selected = u),
          u && a && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + zt(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          ((e[u].selected = !0), a && (e[u].defaultSelected = !0));
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function tf(e, t, n) {
    if (
      t != null &&
      ((t = "" + zt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + zt(n) : "";
  }
  function nf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92));
        if (je(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = zt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== "" && a !== null && (e.value = a),
      zs(e));
  }
  function za(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var l0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function af(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || l0.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function lf(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var u in t)
        ((a = t[u]), t.hasOwnProperty(u) && n[u] !== a && af(e, u, a));
    } else for (var o in t) t.hasOwnProperty(o) && af(e, o, t[o]);
  }
  function Bs(e) {
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
  var i0 = new Map([
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
    r0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Bi(e) {
    return r0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function sn() {}
  var Ms = null;
  function Us(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ja = null,
    Da = null;
  function rf(e) {
    var t = Ra(e);
    if (t && (e = t.stateNode)) {
      var n = e[ct] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (js(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + jt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var u = a[ct] || null;
                if (!u) throw Error(s(90));
                js(
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
            for (t = 0; t < n.length; t++)
              ((a = n[t]), a.form === e.form && Ic(a));
          }
          break e;
        case "textarea":
          tf(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && Oa(e, !!n.multiple, t, !1));
      }
    }
  }
  var Ls = !1;
  function sf(e, t, n) {
    if (Ls) return e(t, n);
    Ls = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ls = !1),
        (ja !== null || Da !== null) &&
          (Sr(), ja && ((t = ja), (e = Da), (Da = ja = null), rf(t), e)))
      )
        for (t = 0; t < e.length; t++) rf(e[t]);
    }
  }
  function El(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[ct] || null;
    if (a === null) return null;
    n = a[t];
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
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var un = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Hs = !1;
  if (un)
    try {
      var _l = {};
      (Object.defineProperty(_l, "passive", {
        get: function () {
          Hs = !0;
        },
      }),
        window.addEventListener("test", _l, _l),
        window.removeEventListener("test", _l, _l));
    } catch {
      Hs = !1;
    }
  var On = null,
    qs = null,
    Mi = null;
  function uf() {
    if (Mi) return Mi;
    var e,
      t = qs,
      n = t.length,
      a,
      u = "value" in On ? On.value : On.textContent,
      o = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++);
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === u[o - a]; a++);
    return (Mi = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Ui(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Li() {
    return !0;
  }
  function of() {
    return !1;
  }
  function ft(e) {
    function t(n, a, u, o, d) {
      ((this._reactName = n),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = o),
        (this.target = d),
        (this.currentTarget = null));
      for (var m in e)
        e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(o) : o[m]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Li
          : of),
        (this.isPropagationStopped = of),
        this
      );
    }
    return (
      x(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Li));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Li));
        },
        persist: function () {},
        isPersistent: Li,
      }),
      t
    );
  }
  var ia = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hi = ft(ia),
    Al = x({}, ia, { view: 0, detail: 0 }),
    s0 = ft(Al),
    Fs,
    ks,
    Nl,
    qi = x({}, Al, {
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
      getModifierState: Gs,
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
          : (e !== Nl &&
              (Nl && e.type === "mousemove"
                ? ((Fs = e.screenX - Nl.screenX), (ks = e.screenY - Nl.screenY))
                : (ks = Fs = 0),
              (Nl = e)),
            Fs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ks;
      },
    }),
    cf = ft(qi),
    u0 = x({}, qi, { dataTransfer: 0 }),
    o0 = ft(u0),
    c0 = x({}, Al, { relatedTarget: 0 }),
    Ys = ft(c0),
    f0 = x({}, ia, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    d0 = ft(f0),
    h0 = x({}, ia, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    m0 = ft(h0),
    p0 = x({}, ia, { data: 0 }),
    ff = ft(p0),
    y0 = {
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
    g0 = {
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
    v0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function b0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = v0[e])
        ? !!t[e]
        : !1;
  }
  function Gs() {
    return b0;
  }
  var x0 = x({}, Al, {
      key: function (e) {
        if (e.key) {
          var t = y0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? g0[e.keyCode] || "Unidentified"
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
      getModifierState: Gs,
      charCode: function (e) {
        return e.type === "keypress" ? Ui(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ui(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    S0 = ft(x0),
    E0 = x({}, qi, {
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
    df = ft(E0),
    _0 = x({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Gs,
    }),
    A0 = ft(_0),
    N0 = x({}, ia, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    T0 = ft(N0),
    R0 = x({}, qi, {
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
    C0 = ft(R0),
    w0 = x({}, ia, { newState: 0, oldState: 0 }),
    O0 = ft(w0),
    z0 = [9, 13, 27, 32],
    Vs = un && "CompositionEvent" in window,
    Tl = null;
  un && "documentMode" in document && (Tl = document.documentMode);
  var j0 = un && "TextEvent" in window && !Tl,
    hf = un && (!Vs || (Tl && 8 < Tl && 11 >= Tl)),
    mf = " ",
    pf = !1;
  function yf(e, t) {
    switch (e) {
      case "keyup":
        return z0.indexOf(t.keyCode) !== -1;
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
  function gf(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Ba = !1;
  function D0(e, t) {
    switch (e) {
      case "compositionend":
        return gf(t);
      case "keypress":
        return t.which !== 32 ? null : ((pf = !0), mf);
      case "textInput":
        return ((e = t.data), e === mf && pf ? null : e);
      default:
        return null;
    }
  }
  function B0(e, t) {
    if (Ba)
      return e === "compositionend" || (!Vs && yf(e, t))
        ? ((e = uf()), (Mi = qs = On = null), (Ba = !1), e)
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
        return hf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var M0 = {
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
  function vf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!M0[e.type] : t === "textarea";
  }
  function bf(e, t, n, a) {
    (ja ? (Da ? Da.push(a) : (Da = [a])) : (ja = a),
      (t = Cr(t, "onChange")),
      0 < t.length &&
        ((n = new Hi("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t })));
  }
  var Rl = null,
    Cl = null;
  function U0(e) {
    tm(e, 0);
  }
  function Fi(e) {
    var t = Sl(e);
    if (Ic(t)) return e;
  }
  function xf(e, t) {
    if (e === "change") return t;
  }
  var Sf = !1;
  if (un) {
    var Xs;
    if (un) {
      var Qs = "oninput" in document;
      if (!Qs) {
        var Ef = document.createElement("div");
        (Ef.setAttribute("oninput", "return;"),
          (Qs = typeof Ef.oninput == "function"));
      }
      Xs = Qs;
    } else Xs = !1;
    Sf = Xs && (!document.documentMode || 9 < document.documentMode);
  }
  function _f() {
    Rl && (Rl.detachEvent("onpropertychange", Af), (Cl = Rl = null));
  }
  function Af(e) {
    if (e.propertyName === "value" && Fi(Cl)) {
      var t = [];
      (bf(t, Cl, e, Us(e)), sf(U0, t));
    }
  }
  function L0(e, t, n) {
    e === "focusin"
      ? (_f(), (Rl = t), (Cl = n), Rl.attachEvent("onpropertychange", Af))
      : e === "focusout" && _f();
  }
  function H0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fi(Cl);
  }
  function q0(e, t) {
    if (e === "click") return Fi(t);
  }
  function F0(e, t) {
    if (e === "input" || e === "change") return Fi(t);
  }
  function k0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var _t = typeof Object.is == "function" ? Object.is : k0;
  function wl(e, t) {
    if (_t(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var u = n[a];
      if (!_s.call(t, u) || !_t(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Nf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Tf(e, t) {
    var n = Nf(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Nf(n);
    }
  }
  function Rf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Rf(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Cf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Di(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Di(e.document);
    }
    return t;
  }
  function Zs(e) {
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
  var Y0 = un && "documentMode" in document && 11 >= document.documentMode,
    Ma = null,
    Ks = null,
    Ol = null,
    Js = !1;
  function wf(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Js ||
      Ma == null ||
      Ma !== Di(a) ||
      ((a = Ma),
      "selectionStart" in a && Zs(a)
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
      (Ol && wl(Ol, a)) ||
        ((Ol = a),
        (a = Cr(Ks, "onSelect")),
        0 < a.length &&
          ((t = new Hi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = Ma))));
  }
  function ra(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ua = {
      animationend: ra("Animation", "AnimationEnd"),
      animationiteration: ra("Animation", "AnimationIteration"),
      animationstart: ra("Animation", "AnimationStart"),
      transitionrun: ra("Transition", "TransitionRun"),
      transitionstart: ra("Transition", "TransitionStart"),
      transitioncancel: ra("Transition", "TransitionCancel"),
      transitionend: ra("Transition", "TransitionEnd"),
    },
    $s = {},
    Of = {};
  un &&
    ((Of = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ua.animationend.animation,
      delete Ua.animationiteration.animation,
      delete Ua.animationstart.animation),
    "TransitionEvent" in window || delete Ua.transitionend.transition);
  function sa(e) {
    if ($s[e]) return $s[e];
    if (!Ua[e]) return e;
    var t = Ua[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Of) return ($s[e] = t[n]);
    return e;
  }
  var zf = sa("animationend"),
    jf = sa("animationiteration"),
    Df = sa("animationstart"),
    G0 = sa("transitionrun"),
    V0 = sa("transitionstart"),
    X0 = sa("transitioncancel"),
    Bf = sa("transitionend"),
    Mf = new Map(),
    Ws =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ws.push("scrollEnd");
  function Vt(e, t) {
    (Mf.set(e, t), la(t, [e]));
  }
  var ki =
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
    Dt = [],
    La = 0,
    Ps = 0;
  function Yi() {
    for (var e = La, t = (Ps = La = 0); t < e; ) {
      var n = Dt[t];
      Dt[t++] = null;
      var a = Dt[t];
      Dt[t++] = null;
      var u = Dt[t];
      Dt[t++] = null;
      var o = Dt[t];
      if (((Dt[t++] = null), a !== null && u !== null)) {
        var d = a.pending;
        (d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
          (a.pending = u));
      }
      o !== 0 && Uf(n, u, o);
    }
  }
  function Gi(e, t, n, a) {
    ((Dt[La++] = e),
      (Dt[La++] = t),
      (Dt[La++] = n),
      (Dt[La++] = a),
      (Ps |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Is(e, t, n, a) {
    return (Gi(e, t, n, a), Vi(e));
  }
  function ua(e, t) {
    return (Gi(e, null, null, t), Vi(e));
  }
  function Uf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var u = !1, o = e.return; o !== null; )
      ((o.childLanes |= n),
        (a = o.alternate),
        a !== null && (a.childLanes |= n),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = o),
        (o = o.return));
    return e.tag === 3
      ? ((o = e.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Et(n)),
          (e = o.hiddenUpdates),
          (a = e[u]),
          a === null ? (e[u] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        o)
      : null;
  }
  function Vi(e) {
    if (50 < Pl) throw ((Pl = 0), (uo = null), Error(s(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ha = {};
  function Q0(e, t, n, a) {
    ((this.tag = e),
      (this.key = n),
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
  function At(e, t, n, a) {
    return new Q0(e, t, n, a);
  }
  function eu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function on(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = At(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Lf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Xi(e, t, n, a, u, o) {
    var d = 0;
    if (((a = e), typeof e == "function")) eu(e) && (d = 1);
    else if (typeof e == "string")
      d = Wg(e, n, Q.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Me:
          return (
            (e = At(31, n, t, u)),
            (e.elementType = Me),
            (e.lanes = o),
            e
          );
        case U:
          return oa(n.children, u, o, t);
        case C:
          ((d = 8), (u |= 24));
          break;
        case k:
          return (
            (e = At(12, n, t, u | 2)),
            (e.elementType = k),
            (e.lanes = o),
            e
          );
        case ie:
          return (
            (e = At(13, n, t, u)),
            (e.elementType = ie),
            (e.lanes = o),
            e
          );
        case P:
          return ((e = At(19, n, t, u)), (e.elementType = P), (e.lanes = o), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Y:
                d = 10;
                break e;
              case K:
                d = 9;
                break e;
              case ee:
                d = 11;
                break e;
              case X:
                d = 14;
                break e;
              case Te:
                ((d = 16), (a = null));
                break e;
            }
          ((d = 29),
            (n = Error(s(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = At(d, n, t, u)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = o),
      t
    );
  }
  function oa(e, t, n, a) {
    return ((e = At(7, e, a, t)), (e.lanes = n), e);
  }
  function tu(e, t, n) {
    return ((e = At(6, e, null, t)), (e.lanes = n), e);
  }
  function Hf(e) {
    var t = At(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function nu(e, t, n) {
    return (
      (t = At(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var qf = new WeakMap();
  function Bt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = qf.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Lc(t) }), qf.set(e, t), t);
    }
    return { value: e, source: t, stack: Lc(t) };
  }
  var qa = [],
    Fa = 0,
    Qi = null,
    zl = 0,
    Mt = [],
    Ut = 0,
    zn = null,
    $t = 1,
    Wt = "";
  function cn(e, t) {
    ((qa[Fa++] = zl), (qa[Fa++] = Qi), (Qi = e), (zl = t));
  }
  function Ff(e, t, n) {
    ((Mt[Ut++] = $t), (Mt[Ut++] = Wt), (Mt[Ut++] = zn), (zn = e));
    var a = $t;
    e = Wt;
    var u = 32 - Et(a) - 1;
    ((a &= ~(1 << u)), (n += 1));
    var o = 32 - Et(t) + u;
    if (30 < o) {
      var d = u - (u % 5);
      ((o = (a & ((1 << d) - 1)).toString(32)),
        (a >>= d),
        (u -= d),
        ($t = (1 << (32 - Et(t) + u)) | (n << u) | a),
        (Wt = o + e));
    } else (($t = (1 << o) | (n << u) | a), (Wt = e));
  }
  function au(e) {
    e.return !== null && (cn(e, 1), Ff(e, 1, 0));
  }
  function lu(e) {
    for (; e === Qi; )
      ((Qi = qa[--Fa]), (qa[Fa] = null), (zl = qa[--Fa]), (qa[Fa] = null));
    for (; e === zn; )
      ((zn = Mt[--Ut]),
        (Mt[Ut] = null),
        (Wt = Mt[--Ut]),
        (Mt[Ut] = null),
        ($t = Mt[--Ut]),
        (Mt[Ut] = null));
  }
  function kf(e, t) {
    ((Mt[Ut++] = $t),
      (Mt[Ut++] = Wt),
      (Mt[Ut++] = zn),
      ($t = t.id),
      (Wt = t.overflow),
      (zn = e));
  }
  var Ie = null,
    Ce = null,
    de = !1,
    jn = null,
    Lt = !1,
    iu = Error(s(519));
  function Dn(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (jl(Bt(t, e)), iu);
  }
  function Yf(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[Pe] = e), (t[ct] = a), n)) {
      case "dialog":
        (oe("cancel", t), oe("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        oe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ei.length; n++) oe(ei[n], t);
        break;
      case "source":
        oe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (oe("error", t), oe("load", t));
        break;
      case "details":
        oe("toggle", t);
        break;
      case "input":
        (oe("invalid", t),
          ef(
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
        oe("invalid", t);
        break;
      case "textarea":
        (oe("invalid", t), nf(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      im(t.textContent, n)
        ? (a.popover != null && (oe("beforetoggle", t), oe("toggle", t)),
          a.onScroll != null && oe("scroll", t),
          a.onScrollEnd != null && oe("scrollend", t),
          a.onClick != null && (t.onclick = sn),
          (t = !0))
        : (t = !1),
      t || Dn(e, !0));
  }
  function Gf(e) {
    for (Ie = e.return; Ie; )
      switch (Ie.tag) {
        case 5:
        case 31:
        case 13:
          Lt = !1;
          return;
        case 27:
        case 3:
          Lt = !0;
          return;
        default:
          Ie = Ie.return;
      }
  }
  function ka(e) {
    if (e !== Ie) return !1;
    if (!de) return (Gf(e), (de = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Ao(e.type, e.memoizedProps))),
        (n = !n)),
      n && Ce && Dn(e),
      Gf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Ce = mm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      Ce = mm(e);
    } else
      t === 27
        ? ((t = Ce), Zn(e.type) ? ((e = wo), (wo = null), (Ce = e)) : (Ce = t))
        : (Ce = Ie ? qt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ca() {
    ((Ce = Ie = null), (de = !1));
  }
  function ru() {
    var e = jn;
    return (
      e !== null &&
        (pt === null ? (pt = e) : pt.push.apply(pt, e), (jn = null)),
      e
    );
  }
  function jl(e) {
    jn === null ? (jn = [e]) : jn.push(e);
  }
  var su = E(null),
    fa = null,
    fn = null;
  function Bn(e, t, n) {
    (V(su, t._currentValue), (t._currentValue = n));
  }
  function dn(e) {
    ((e._currentValue = su.current), H(su));
  }
  function uu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ou(e, t, n, a) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var o = u.dependencies;
      if (o !== null) {
        var d = u.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var m = o;
          o = u;
          for (var S = 0; S < t.length; S++)
            if (m.context === t[S]) {
              ((o.lanes |= n),
                (m = o.alternate),
                m !== null && (m.lanes |= n),
                uu(o.return, n, e),
                a || (d = null));
              break e;
            }
          o = m.next;
        }
      } else if (u.tag === 18) {
        if (((d = u.return), d === null)) throw Error(s(341));
        ((d.lanes |= n),
          (o = d.alternate),
          o !== null && (o.lanes |= n),
          uu(d, n, e),
          (d = null));
      } else d = u.child;
      if (d !== null) d.return = u;
      else
        for (d = u; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((u = d.sibling), u !== null)) {
            ((u.return = d.return), (d = u));
            break;
          }
          d = d.return;
        }
      u = d;
    }
  }
  function Ya(e, t, n, a) {
    e = null;
    for (var u = t, o = !1; u !== null; ) {
      if (!o) {
        if ((u.flags & 524288) !== 0) o = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var d = u.alternate;
        if (d === null) throw Error(s(387));
        if (((d = d.memoizedProps), d !== null)) {
          var m = u.type;
          _t(u.pendingProps.value, d.value) ||
            (e !== null ? e.push(m) : (e = [m]));
        }
      } else if (u === ve.current) {
        if (((d = u.alternate), d === null)) throw Error(s(387));
        d.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(ii) : (e = [ii]));
      }
      u = u.return;
    }
    (e !== null && ou(t, e, n, a), (t.flags |= 262144));
  }
  function Zi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!_t(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function da(e) {
    ((fa = e),
      (fn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function et(e) {
    return Vf(fa, e);
  }
  function Ki(e, t) {
    return (fa === null && da(e), Vf(e, t));
  }
  function Vf(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), fn === null)) {
      if (e === null) throw Error(s(308));
      ((fn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else fn = fn.next = t;
    return n;
  }
  var Z0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    K0 = i.unstable_scheduleCallback,
    J0 = i.unstable_NormalPriority,
    Ye = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function cu() {
    return { controller: new Z0(), data: new Map(), refCount: 0 };
  }
  function Dl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        K0(J0, function () {
          e.controller.abort();
        }));
  }
  var Bl = null,
    fu = 0,
    Ga = 0,
    Va = null;
  function $0(e, t) {
    if (Bl === null) {
      var n = (Bl = []);
      ((fu = 0),
        (Ga = po()),
        (Va = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (fu++, t.then(Xf, Xf), t);
  }
  function Xf() {
    if (--fu === 0 && Bl !== null) {
      Va !== null && (Va.status = "fulfilled");
      var e = Bl;
      ((Bl = null), (Ga = 0), (Va = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function W0(e, t) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var u = 0; u < n.length; u++) (0, n[u])(t);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        },
      ),
      a
    );
  }
  var Qf = D.S;
  D.S = function (e, t) {
    ((wh = xt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        $0(e, t),
      Qf !== null && Qf(e, t));
  };
  var ha = E(null);
  function du() {
    var e = ha.current;
    return e !== null ? e : Re.pooledCache;
  }
  function Ji(e, t) {
    t === null ? V(ha, ha.current) : V(ha, t.pool);
  }
  function Zf() {
    var e = du();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Xa = Error(s(460)),
    hu = Error(s(474)),
    $i = Error(s(542)),
    Wi = { then: function () {} };
  function Kf(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Jf(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(sn, sn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Wf(e), e);
      default:
        if (typeof t.status == "string") t.then(sn, sn);
        else {
          if (((e = Re), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
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
            throw ((e = t.reason), Wf(e), e);
        }
        throw ((pa = t), Xa);
    }
  }
  function ma(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((pa = n), Xa)
        : n;
    }
  }
  var pa = null;
  function $f() {
    if (pa === null) throw Error(s(459));
    var e = pa;
    return ((pa = null), e);
  }
  function Wf(e) {
    if (e === Xa || e === $i) throw Error(s(483));
  }
  var Qa = null,
    Ml = 0;
  function Pi(e) {
    var t = Ml;
    return ((Ml += 1), Qa === null && (Qa = []), Jf(Qa, e, t));
  }
  function Ul(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ii(e, t) {
    throw t.$$typeof === B
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Pf(e) {
    function t(A, _) {
      if (e) {
        var T = A.deletions;
        T === null ? ((A.deletions = [_]), (A.flags |= 16)) : T.push(_);
      }
    }
    function n(A, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(A, _), (_ = _.sibling));
      return null;
    }
    function a(A) {
      for (var _ = new Map(); A !== null; )
        (A.key !== null ? _.set(A.key, A) : _.set(A.index, A), (A = A.sibling));
      return _;
    }
    function u(A, _) {
      return ((A = on(A, _)), (A.index = 0), (A.sibling = null), A);
    }
    function o(A, _, T) {
      return (
        (A.index = T),
        e
          ? ((T = A.alternate),
            T !== null
              ? ((T = T.index), T < _ ? ((A.flags |= 67108866), _) : T)
              : ((A.flags |= 67108866), _))
          : ((A.flags |= 1048576), _)
      );
    }
    function d(A) {
      return (e && A.alternate === null && (A.flags |= 67108866), A);
    }
    function m(A, _, T, L) {
      return _ === null || _.tag !== 6
        ? ((_ = tu(T, A.mode, L)), (_.return = A), _)
        : ((_ = u(_, T)), (_.return = A), _);
    }
    function S(A, _, T, L) {
      var W = T.type;
      return W === U
        ? M(A, _, T.props.children, L, T.key)
        : _ !== null &&
            (_.elementType === W ||
              (typeof W == "object" &&
                W !== null &&
                W.$$typeof === Te &&
                ma(W) === _.type))
          ? ((_ = u(_, T.props)), Ul(_, T), (_.return = A), _)
          : ((_ = Xi(T.type, T.key, T.props, null, A.mode, L)),
            Ul(_, T),
            (_.return = A),
            _);
    }
    function R(A, _, T, L) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== T.containerInfo ||
        _.stateNode.implementation !== T.implementation
        ? ((_ = nu(T, A.mode, L)), (_.return = A), _)
        : ((_ = u(_, T.children || [])), (_.return = A), _);
    }
    function M(A, _, T, L, W) {
      return _ === null || _.tag !== 7
        ? ((_ = oa(T, A.mode, L, W)), (_.return = A), _)
        : ((_ = u(_, T)), (_.return = A), _);
    }
    function q(A, _, T) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return ((_ = tu("" + _, A.mode, T)), (_.return = A), _);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case F:
            return (
              (T = Xi(_.type, _.key, _.props, null, A.mode, T)),
              Ul(T, _),
              (T.return = A),
              T
            );
          case O:
            return ((_ = nu(_, A.mode, T)), (_.return = A), _);
          case Te:
            return ((_ = ma(_)), q(A, _, T));
        }
        if (je(_) || Ue(_))
          return ((_ = oa(_, A.mode, T, null)), (_.return = A), _);
        if (typeof _.then == "function") return q(A, Pi(_), T);
        if (_.$$typeof === Y) return q(A, Ki(A, _), T);
        Ii(A, _);
      }
      return null;
    }
    function w(A, _, T, L) {
      var W = _ !== null ? _.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return W !== null ? null : m(A, _, "" + T, L);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case F:
            return T.key === W ? S(A, _, T, L) : null;
          case O:
            return T.key === W ? R(A, _, T, L) : null;
          case Te:
            return ((T = ma(T)), w(A, _, T, L));
        }
        if (je(T) || Ue(T)) return W !== null ? null : M(A, _, T, L, null);
        if (typeof T.then == "function") return w(A, _, Pi(T), L);
        if (T.$$typeof === Y) return w(A, _, Ki(A, T), L);
        Ii(A, T);
      }
      return null;
    }
    function j(A, _, T, L, W) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((A = A.get(T) || null), m(_, A, "" + L, W));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case F:
            return (
              (A = A.get(L.key === null ? T : L.key) || null),
              S(_, A, L, W)
            );
          case O:
            return (
              (A = A.get(L.key === null ? T : L.key) || null),
              R(_, A, L, W)
            );
          case Te:
            return ((L = ma(L)), j(A, _, T, L, W));
        }
        if (je(L) || Ue(L))
          return ((A = A.get(T) || null), M(_, A, L, W, null));
        if (typeof L.then == "function") return j(A, _, T, Pi(L), W);
        if (L.$$typeof === Y) return j(A, _, T, Ki(_, L), W);
        Ii(_, L);
      }
      return null;
    }
    function Z(A, _, T, L) {
      for (
        var W = null, me = null, J = _, re = (_ = 0), fe = null;
        J !== null && re < T.length;
        re++
      ) {
        J.index > re ? ((fe = J), (J = null)) : (fe = J.sibling);
        var pe = w(A, J, T[re], L);
        if (pe === null) {
          J === null && (J = fe);
          break;
        }
        (e && J && pe.alternate === null && t(A, J),
          (_ = o(pe, _, re)),
          me === null ? (W = pe) : (me.sibling = pe),
          (me = pe),
          (J = fe));
      }
      if (re === T.length) return (n(A, J), de && cn(A, re), W);
      if (J === null) {
        for (; re < T.length; re++)
          ((J = q(A, T[re], L)),
            J !== null &&
              ((_ = o(J, _, re)),
              me === null ? (W = J) : (me.sibling = J),
              (me = J)));
        return (de && cn(A, re), W);
      }
      for (J = a(J); re < T.length; re++)
        ((fe = j(J, A, re, T[re], L)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              J.delete(fe.key === null ? re : fe.key),
            (_ = o(fe, _, re)),
            me === null ? (W = fe) : (me.sibling = fe),
            (me = fe)));
      return (
        e &&
          J.forEach(function (Pn) {
            return t(A, Pn);
          }),
        de && cn(A, re),
        W
      );
    }
    function I(A, _, T, L) {
      if (T == null) throw Error(s(151));
      for (
        var W = null, me = null, J = _, re = (_ = 0), fe = null, pe = T.next();
        J !== null && !pe.done;
        re++, pe = T.next()
      ) {
        J.index > re ? ((fe = J), (J = null)) : (fe = J.sibling);
        var Pn = w(A, J, pe.value, L);
        if (Pn === null) {
          J === null && (J = fe);
          break;
        }
        (e && J && Pn.alternate === null && t(A, J),
          (_ = o(Pn, _, re)),
          me === null ? (W = Pn) : (me.sibling = Pn),
          (me = Pn),
          (J = fe));
      }
      if (pe.done) return (n(A, J), de && cn(A, re), W);
      if (J === null) {
        for (; !pe.done; re++, pe = T.next())
          ((pe = q(A, pe.value, L)),
            pe !== null &&
              ((_ = o(pe, _, re)),
              me === null ? (W = pe) : (me.sibling = pe),
              (me = pe)));
        return (de && cn(A, re), W);
      }
      for (J = a(J); !pe.done; re++, pe = T.next())
        ((pe = j(J, A, re, pe.value, L)),
          pe !== null &&
            (e &&
              pe.alternate !== null &&
              J.delete(pe.key === null ? re : pe.key),
            (_ = o(pe, _, re)),
            me === null ? (W = pe) : (me.sibling = pe),
            (me = pe)));
      return (
        e &&
          J.forEach(function (u1) {
            return t(A, u1);
          }),
        de && cn(A, re),
        W
      );
    }
    function Ne(A, _, T, L) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === U &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case F:
            e: {
              for (var W = T.key; _ !== null; ) {
                if (_.key === W) {
                  if (((W = T.type), W === U)) {
                    if (_.tag === 7) {
                      (n(A, _.sibling),
                        (L = u(_, T.props.children)),
                        (L.return = A),
                        (A = L));
                      break e;
                    }
                  } else if (
                    _.elementType === W ||
                    (typeof W == "object" &&
                      W !== null &&
                      W.$$typeof === Te &&
                      ma(W) === _.type)
                  ) {
                    (n(A, _.sibling),
                      (L = u(_, T.props)),
                      Ul(L, T),
                      (L.return = A),
                      (A = L));
                    break e;
                  }
                  n(A, _);
                  break;
                } else t(A, _);
                _ = _.sibling;
              }
              T.type === U
                ? ((L = oa(T.props.children, A.mode, L, T.key)),
                  (L.return = A),
                  (A = L))
                : ((L = Xi(T.type, T.key, T.props, null, A.mode, L)),
                  Ul(L, T),
                  (L.return = A),
                  (A = L));
            }
            return d(A);
          case O:
            e: {
              for (W = T.key; _ !== null; ) {
                if (_.key === W)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === T.containerInfo &&
                    _.stateNode.implementation === T.implementation
                  ) {
                    (n(A, _.sibling),
                      (L = u(_, T.children || [])),
                      (L.return = A),
                      (A = L));
                    break e;
                  } else {
                    n(A, _);
                    break;
                  }
                else t(A, _);
                _ = _.sibling;
              }
              ((L = nu(T, A.mode, L)), (L.return = A), (A = L));
            }
            return d(A);
          case Te:
            return ((T = ma(T)), Ne(A, _, T, L));
        }
        if (je(T)) return Z(A, _, T, L);
        if (Ue(T)) {
          if (((W = Ue(T)), typeof W != "function")) throw Error(s(150));
          return ((T = W.call(T)), I(A, _, T, L));
        }
        if (typeof T.then == "function") return Ne(A, _, Pi(T), L);
        if (T.$$typeof === Y) return Ne(A, _, Ki(A, T), L);
        Ii(A, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          _ !== null && _.tag === 6
            ? (n(A, _.sibling), (L = u(_, T)), (L.return = A), (A = L))
            : (n(A, _), (L = tu(T, A.mode, L)), (L.return = A), (A = L)),
          d(A))
        : n(A, _);
    }
    return function (A, _, T, L) {
      try {
        Ml = 0;
        var W = Ne(A, _, T, L);
        return ((Qa = null), W);
      } catch (J) {
        if (J === Xa || J === $i) throw J;
        var me = At(29, J, null, A.mode);
        return ((me.lanes = L), (me.return = A), me);
      }
    };
  }
  var ya = Pf(!0),
    If = Pf(!1),
    Mn = !1;
  function mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function pu(e, t) {
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
  function Un(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ln(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ge & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        (t = Vi(e)),
        Uf(e, null, n),
        t
      );
    }
    return (Gi(e, a, t, n), Vi(e));
  }
  function Ll(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Gc(e, n));
    }
  }
  function yu(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var u = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (o === null ? (u = o = d) : (o = o.next = d), (n = n.next));
        } while (n !== null);
        o === null ? (u = o = t) : (o = o.next = t);
      } else u = o = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var gu = !1;
  function Hl() {
    if (gu) {
      var e = Va;
      if (e !== null) throw e;
    }
  }
  function ql(e, t, n, a) {
    gu = !1;
    var u = e.updateQueue;
    Mn = !1;
    var o = u.firstBaseUpdate,
      d = u.lastBaseUpdate,
      m = u.shared.pending;
    if (m !== null) {
      u.shared.pending = null;
      var S = m,
        R = S.next;
      ((S.next = null), d === null ? (o = R) : (d.next = R), (d = S));
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (m = M.lastBaseUpdate),
        m !== d &&
          (m === null ? (M.firstBaseUpdate = R) : (m.next = R),
          (M.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var q = u.baseState;
      ((d = 0), (M = R = S = null), (m = o));
      do {
        var w = m.lane & -536870913,
          j = w !== m.lane;
        if (j ? (ce & w) === w : (a & w) === w) {
          (w !== 0 && w === Ga && (gu = !0),
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  tag: m.tag,
                  payload: m.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Z = e,
              I = m;
            w = t;
            var Ne = n;
            switch (I.tag) {
              case 1:
                if (((Z = I.payload), typeof Z == "function")) {
                  q = Z.call(Ne, q, w);
                  break e;
                }
                q = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = I.payload),
                  (w = typeof Z == "function" ? Z.call(Ne, q, w) : Z),
                  w == null)
                )
                  break e;
                q = x({}, q, w);
                break e;
              case 2:
                Mn = !0;
            }
          }
          ((w = m.callback),
            w !== null &&
              ((e.flags |= 64),
              j && (e.flags |= 8192),
              (j = u.callbacks),
              j === null ? (u.callbacks = [w]) : j.push(w)));
        } else
          ((j = {
            lane: w,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            M === null ? ((R = M = j), (S = q)) : (M = M.next = j),
            (d |= w));
        if (((m = m.next), m === null)) {
          if (((m = u.shared.pending), m === null)) break;
          ((j = m),
            (m = j.next),
            (j.next = null),
            (u.lastBaseUpdate = j),
            (u.shared.pending = null));
        }
      } while (!0);
      (M === null && (S = q),
        (u.baseState = S),
        (u.firstBaseUpdate = R),
        (u.lastBaseUpdate = M),
        o === null && (u.shared.lanes = 0),
        (Yn |= d),
        (e.lanes = d),
        (e.memoizedState = q));
    }
  }
  function ed(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function td(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) ed(n[e], t);
  }
  var Za = E(null),
    er = E(0);
  function nd(e, t) {
    ((e = Sn), V(er, e), V(Za, t), (Sn = e | t.baseLanes));
  }
  function vu() {
    (V(er, Sn), V(Za, Za.current));
  }
  function bu() {
    ((Sn = er.current), H(Za), H(er));
  }
  var Nt = E(null),
    Ht = null;
  function Hn(e) {
    var t = e.alternate;
    (V(He, He.current & 1),
      V(Nt, e),
      Ht === null &&
        (t === null || Za.current !== null || t.memoizedState !== null) &&
        (Ht = e));
  }
  function xu(e) {
    (V(He, He.current), V(Nt, e), Ht === null && (Ht = e));
  }
  function ad(e) {
    e.tag === 22
      ? (V(He, He.current), V(Nt, e), Ht === null && (Ht = e))
      : qn();
  }
  function qn() {
    (V(He, He.current), V(Nt, Nt.current));
  }
  function Tt(e) {
    (H(Nt), Ht === e && (Ht = null), H(He));
  }
  var He = E(0);
  function tr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Ro(n) || Co(n)))
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
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var hn = 0,
    le = null,
    _e = null,
    Ge = null,
    nr = !1,
    Ka = !1,
    ga = !1,
    ar = 0,
    Fl = 0,
    Ja = null,
    P0 = 0;
  function De() {
    throw Error(s(321));
  }
  function Su(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!_t(e[n], t[n])) return !1;
    return !0;
  }
  function Eu(e, t, n, a, u, o) {
    return (
      (hn = o),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (D.H = e === null || e.memoizedState === null ? Fd : Lu),
      (ga = !1),
      (o = n(a, u)),
      (ga = !1),
      Ka && (o = id(t, n, a, u)),
      ld(e),
      o
    );
  }
  function ld(e) {
    D.H = Gl;
    var t = _e !== null && _e.next !== null;
    if (((hn = 0), (Ge = _e = le = null), (nr = !1), (Fl = 0), (Ja = null), t))
      throw Error(s(300));
    e === null ||
      Ve ||
      ((e = e.dependencies), e !== null && Zi(e) && (Ve = !0));
  }
  function id(e, t, n, a) {
    le = e;
    var u = 0;
    do {
      if ((Ka && (Ja = null), (Fl = 0), (Ka = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Ge = _e = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((D.H = kd), (o = t(n, a)));
    } while (Ka);
    return o;
  }
  function I0() {
    var e = D.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? kl(t) : t),
      (e = e.useState()[0]),
      (_e !== null ? _e.memoizedState : null) !== e && (le.flags |= 1024),
      t
    );
  }
  function _u() {
    var e = ar !== 0;
    return ((ar = 0), e);
  }
  function Au(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Nu(e) {
    if (nr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      nr = !1;
    }
    ((hn = 0), (Ge = _e = le = null), (Ka = !1), (Fl = ar = 0), (Ja = null));
  }
  function ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ge === null ? (le.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge);
  }
  function qe() {
    if (_e === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = Ge === null ? le.memoizedState : Ge.next;
    if (t !== null) ((Ge = t), (_e = e));
    else {
      if (e === null)
        throw le.alternate === null ? Error(s(467)) : Error(s(310));
      ((_e = e),
        (e = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null,
        }),
        Ge === null ? (le.memoizedState = Ge = e) : (Ge = Ge.next = e));
    }
    return Ge;
  }
  function lr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function kl(e) {
    var t = Fl;
    return (
      (Fl += 1),
      Ja === null && (Ja = []),
      (e = Jf(Ja, e, t)),
      (t = le),
      (Ge === null ? t.memoizedState : Ge.next) === null &&
        ((t = t.alternate),
        (D.H = t === null || t.memoizedState === null ? Fd : Lu)),
      e
    );
  }
  function ir(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return kl(e);
      if (e.$$typeof === Y) return et(e);
    }
    throw Error(s(438, String(e)));
  }
  function Tu(e) {
    var t = null,
      n = le.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = le.alternate;
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
      n === null && ((n = lr()), (le.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = bt;
    return (t.index++, n);
  }
  function mn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function rr(e) {
    var t = qe();
    return Ru(t, _e, e);
  }
  function Ru(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = n;
    var u = e.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (u !== null) {
        var d = u.next;
        ((u.next = o.next), (o.next = d));
      }
      ((t.baseQueue = u = o), (a.pending = null));
    }
    if (((o = e.baseState), u === null)) e.memoizedState = o;
    else {
      t = u.next;
      var m = (d = null),
        S = null,
        R = t,
        M = !1;
      do {
        var q = R.lane & -536870913;
        if (q !== R.lane ? (ce & q) === q : (hn & q) === q) {
          var w = R.revertLane;
          if (w === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              q === Ga && (M = !0));
          else if ((hn & w) === w) {
            ((R = R.next), w === Ga && (M = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              S === null ? ((m = S = q), (d = o)) : (S = S.next = q),
              (le.lanes |= w),
              (Yn |= w));
          ((q = R.action),
            ga && n(o, q),
            (o = R.hasEagerState ? R.eagerState : n(o, q)));
        } else
          ((w = {
            lane: q,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            S === null ? ((m = S = w), (d = o)) : (S = S.next = w),
            (le.lanes |= q),
            (Yn |= q));
        R = R.next;
      } while (R !== null && R !== t);
      if (
        (S === null ? (d = o) : (S.next = m),
        !_t(o, e.memoizedState) && ((Ve = !0), M && ((n = Va), n !== null)))
      )
        throw n;
      ((e.memoizedState = o),
        (e.baseState = d),
        (e.baseQueue = S),
        (a.lastRenderedState = o));
    }
    return (u === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Cu(e) {
    var t = qe(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      u = n.pending,
      o = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var d = (u = u.next);
      do ((o = e(o, d.action)), (d = d.next));
      while (d !== u);
      (_t(o, t.memoizedState) || (Ve = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, a];
  }
  function rd(e, t, n) {
    var a = le,
      u = qe(),
      o = de;
    if (o) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var d = !_t((_e || u).memoizedState, n);
    if (
      (d && ((u.memoizedState = n), (Ve = !0)),
      (u = u.queue),
      zu(od.bind(null, a, u, e), [e]),
      u.getSnapshot !== t || d || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        $a(9, { destroy: void 0 }, ud.bind(null, a, u, n, t), null),
        Re === null)
      )
        throw Error(s(349));
      o || (hn & 127) !== 0 || sd(a, t, n);
    }
    return n;
  }
  function sd(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = lr()), (le.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function ud(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), cd(t) && fd(e));
  }
  function od(e, t, n) {
    return n(function () {
      cd(t) && fd(e);
    });
  }
  function cd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_t(e, n);
    } catch {
      return !0;
    }
  }
  function fd(e) {
    var t = ua(e, 2);
    t !== null && yt(t, e, 2);
  }
  function wu(e) {
    var t = ot();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), ga)) {
        Cn(!0);
        try {
          n();
        } finally {
          Cn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function dd(e, t, n, a) {
    return ((e.baseState = n), Ru(e, _e, typeof a == "function" ? a : mn));
  }
  function eg(e, t, n, a, u) {
    if (or(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var o = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          o.listeners.push(d);
        },
      };
      (D.T !== null ? n(!0) : (o.isTransition = !1),
        a(o),
        (n = t.pending),
        n === null
          ? ((o.next = t.pending = o), hd(t, o))
          : ((o.next = n.next), (t.pending = n.next = o)));
    }
  }
  function hd(e, t) {
    var n = t.action,
      a = t.payload,
      u = e.state;
    if (t.isTransition) {
      var o = D.T,
        d = {};
      D.T = d;
      try {
        var m = n(u, a),
          S = D.S;
        (S !== null && S(d, m), md(e, t, m));
      } catch (R) {
        Ou(e, t, R);
      } finally {
        (o !== null && d.types !== null && (o.types = d.types), (D.T = o));
      }
    } else
      try {
        ((o = n(u, a)), md(e, t, o));
      } catch (R) {
        Ou(e, t, R);
      }
  }
  function md(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            pd(e, t, a);
          },
          function (a) {
            return Ou(e, t, a);
          },
        )
      : pd(e, t, n);
  }
  function pd(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      yd(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), hd(e, n))));
  }
  function Ou(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = n), yd(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function yd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function gd(e, t) {
    return t;
  }
  function vd(e, t) {
    if (de) {
      var n = Re.formState;
      if (n !== null) {
        e: {
          var a = le;
          if (de) {
            if (Ce) {
              t: {
                for (var u = Ce, o = Lt; u.nodeType !== 8; ) {
                  if (!o) {
                    u = null;
                    break t;
                  }
                  if (((u = qt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((o = u.data), (u = o === "F!" || o === "F" ? u : null));
              }
              if (u) {
                ((Ce = qt(u.nextSibling)), (a = u.data === "F!"));
                break e;
              }
            }
            Dn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = ot()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gd,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Ld.bind(null, le, a)),
      (a.dispatch = n),
      (a = wu(!1)),
      (o = Uu.bind(null, le, !1, a.queue)),
      (a = ot()),
      (u = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = u),
      (n = eg.bind(null, le, u, o, n)),
      (u.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function bd(e) {
    var t = qe();
    return xd(t, _e, e);
  }
  function xd(e, t, n) {
    if (
      ((t = Ru(e, t, gd)[0]),
      (e = rr(mn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = kl(t);
      } catch (d) {
        throw d === Xa ? $i : d;
      }
    else a = t;
    t = qe();
    var u = t.queue,
      o = u.dispatch;
    return (
      n !== t.memoizedState &&
        ((le.flags |= 2048),
        $a(9, { destroy: void 0 }, tg.bind(null, u, n), null)),
      [a, o, e]
    );
  }
  function tg(e, t) {
    e.action = t;
  }
  function Sd(e) {
    var t = qe(),
      n = _e;
    if (n !== null) return xd(t, n, e);
    (qe(), (t = t.memoizedState), (n = qe()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function $a(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = le.updateQueue),
      t === null && ((t = lr()), (le.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Ed() {
    return qe().memoizedState;
  }
  function sr(e, t, n, a) {
    var u = ot();
    ((le.flags |= e),
      (u.memoizedState = $a(
        1 | t,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      )));
  }
  function ur(e, t, n, a) {
    var u = qe();
    a = a === void 0 ? null : a;
    var o = u.memoizedState.inst;
    _e !== null && a !== null && Su(a, _e.memoizedState.deps)
      ? (u.memoizedState = $a(t, o, n, a))
      : ((le.flags |= e), (u.memoizedState = $a(1 | t, o, n, a)));
  }
  function _d(e, t) {
    sr(8390656, 8, e, t);
  }
  function zu(e, t) {
    ur(2048, 8, e, t);
  }
  function ng(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null) ((t = lr()), (le.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Ad(e) {
    var t = qe().memoizedState;
    return (
      ng({ ref: t, nextImpl: e }),
      function () {
        if ((ge & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Nd(e, t) {
    return ur(4, 2, e, t);
  }
  function Td(e, t) {
    return ur(4, 4, e, t);
  }
  function Rd(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
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
  function Cd(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), ur(4, 4, Rd.bind(null, t, e), n));
  }
  function ju() {}
  function wd(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Su(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function Od(e, t) {
    var n = qe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Su(t, a[1])) return a[0];
    if (((a = e()), ga)) {
      Cn(!0);
      try {
        e();
      } finally {
        Cn(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Du(e, t, n) {
    return n === void 0 || ((hn & 1073741824) !== 0 && (ce & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = zh()), (le.lanes |= e), (Yn |= e), n);
  }
  function zd(e, t, n, a) {
    return _t(n, t)
      ? n
      : Za.current !== null
        ? ((e = Du(e, n, a)), _t(e, t) || (Ve = !0), e)
        : (hn & 42) === 0 || ((hn & 1073741824) !== 0 && (ce & 261930) === 0)
          ? ((Ve = !0), (e.memoizedState = n))
          : ((e = zh()), (le.lanes |= e), (Yn |= e), t);
  }
  function jd(e, t, n, a, u) {
    var o = G.p;
    G.p = o !== 0 && 8 > o ? o : 8;
    var d = D.T,
      m = {};
    ((D.T = m), Uu(e, !1, t, n));
    try {
      var S = u(),
        R = D.S;
      if (
        (R !== null && R(m, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var M = W0(S, a);
        Yl(e, t, M, wt(e));
      } else Yl(e, t, a, wt(e));
    } catch (q) {
      Yl(e, t, { then: function () {}, status: "rejected", reason: q }, wt());
    } finally {
      ((G.p = o),
        d !== null && m.types !== null && (d.types = m.types),
        (D.T = d));
    }
  }
  function ag() {}
  function Bu(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var u = Dd(e).queue;
    jd(
      e,
      u,
      t,
      $,
      n === null
        ? ag
        : function () {
            return (Bd(e), n(a));
          },
    );
  }
  function Dd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mn,
        lastRenderedState: $,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Bd(e) {
    var t = Dd(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Yl(e, t.next.queue, {}, wt()));
  }
  function Mu() {
    return et(ii);
  }
  function Md() {
    return qe().memoizedState;
  }
  function Ud() {
    return qe().memoizedState;
  }
  function lg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = wt();
          e = Un(n);
          var a = Ln(t, e, n);
          (a !== null && (yt(a, t, n), Ll(a, t, n)),
            (t = { cache: cu() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function ig(e, t, n) {
    var a = wt();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      or(e)
        ? Hd(t, n)
        : ((n = Is(e, t, n, a)), n !== null && (yt(n, e, a), qd(n, t, a))));
  }
  function Ld(e, t, n) {
    var a = wt();
    Yl(e, t, n, a);
  }
  function Yl(e, t, n, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (or(e)) Hd(t, u);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var d = t.lastRenderedState,
            m = o(d, n);
          if (((u.hasEagerState = !0), (u.eagerState = m), _t(m, d)))
            return (Gi(e, t, u, 0), Re === null && Yi(), !1);
        } catch {}
      if (((n = Is(e, t, u, a)), n !== null))
        return (yt(n, e, a), qd(n, t, a), !0);
    }
    return !1;
  }
  function Uu(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: po(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      or(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = Is(e, n, a, 2)), t !== null && yt(t, e, 2));
  }
  function or(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function Hd(e, t) {
    Ka = nr = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function qd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), Gc(e, n));
    }
  }
  var Gl = {
    readContext: et,
    use: ir,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useLayoutEffect: De,
    useInsertionEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useSyncExternalStore: De,
    useId: De,
    useHostTransitionStatus: De,
    useFormState: De,
    useActionState: De,
    useOptimistic: De,
    useMemoCache: De,
    useCacheRefresh: De,
  };
  Gl.useEffectEvent = De;
  var Fd = {
      readContext: et,
      use: ir,
      useCallback: function (e, t) {
        return ((ot().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: et,
      useEffect: _d,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          sr(4194308, 4, Rd.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return sr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        sr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var a = e();
        if (ga) {
          Cn(!0);
          try {
            e();
          } finally {
            Cn(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = ot();
        if (n !== void 0) {
          var u = n(t);
          if (ga) {
            Cn(!0);
            try {
              n(t);
            } finally {
              Cn(!1);
            }
          }
        } else u = t;
        return (
          (a.memoizedState = a.baseState = u),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: u,
          }),
          (a.queue = e),
          (e = e.dispatch = ig.bind(null, le, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ot();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = wu(e);
        var t = e.queue,
          n = Ld.bind(null, le, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: ju,
      useDeferredValue: function (e, t) {
        var n = ot();
        return Du(n, e, t);
      },
      useTransition: function () {
        var e = wu(!1);
        return (
          (e = jd.bind(null, le, e.queue, !0, !1)),
          (ot().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var a = le,
          u = ot();
        if (de) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), Re === null)) throw Error(s(349));
          (ce & 127) !== 0 || sd(a, t, n);
        }
        u.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (u.queue = o),
          _d(od.bind(null, a, o, e), [e]),
          (a.flags |= 2048),
          $a(9, { destroy: void 0 }, ud.bind(null, a, o, n, t), null),
          n
        );
      },
      useId: function () {
        var e = ot(),
          t = Re.identifierPrefix;
        if (de) {
          var n = Wt,
            a = $t;
          ((n = (a & ~(1 << (32 - Et(a) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = ar++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = P0++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Mu,
      useFormState: vd,
      useActionState: vd,
      useOptimistic: function (e) {
        var t = ot();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Uu.bind(null, le, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Tu,
      useCacheRefresh: function () {
        return (ot().memoizedState = lg.bind(null, le));
      },
      useEffectEvent: function (e) {
        var t = ot(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((ge & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Lu = {
      readContext: et,
      use: ir,
      useCallback: wd,
      useContext: et,
      useEffect: zu,
      useImperativeHandle: Cd,
      useInsertionEffect: Nd,
      useLayoutEffect: Td,
      useMemo: Od,
      useReducer: rr,
      useRef: Ed,
      useState: function () {
        return rr(mn);
      },
      useDebugValue: ju,
      useDeferredValue: function (e, t) {
        var n = qe();
        return zd(n, _e.memoizedState, e, t);
      },
      useTransition: function () {
        var e = rr(mn)[0],
          t = qe().memoizedState;
        return [typeof e == "boolean" ? e : kl(e), t];
      },
      useSyncExternalStore: rd,
      useId: Md,
      useHostTransitionStatus: Mu,
      useFormState: bd,
      useActionState: bd,
      useOptimistic: function (e, t) {
        var n = qe();
        return dd(n, _e, e, t);
      },
      useMemoCache: Tu,
      useCacheRefresh: Ud,
    };
  Lu.useEffectEvent = Ad;
  var kd = {
    readContext: et,
    use: ir,
    useCallback: wd,
    useContext: et,
    useEffect: zu,
    useImperativeHandle: Cd,
    useInsertionEffect: Nd,
    useLayoutEffect: Td,
    useMemo: Od,
    useReducer: Cu,
    useRef: Ed,
    useState: function () {
      return Cu(mn);
    },
    useDebugValue: ju,
    useDeferredValue: function (e, t) {
      var n = qe();
      return _e === null ? Du(n, e, t) : zd(n, _e.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Cu(mn)[0],
        t = qe().memoizedState;
      return [typeof e == "boolean" ? e : kl(e), t];
    },
    useSyncExternalStore: rd,
    useId: Md,
    useHostTransitionStatus: Mu,
    useFormState: Sd,
    useActionState: Sd,
    useOptimistic: function (e, t) {
      var n = qe();
      return _e !== null
        ? dd(n, _e, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Tu,
    useCacheRefresh: Ud,
  };
  kd.useEffectEvent = Ad;
  function Hu(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : x({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var qu = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = wt(),
        u = Un(a);
      ((u.payload = t),
        n != null && (u.callback = n),
        (t = Ln(e, u, a)),
        t !== null && (yt(t, e, a), Ll(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = wt(),
        u = Un(a);
      ((u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Ln(e, u, a)),
        t !== null && (yt(t, e, a), Ll(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = wt(),
        a = Un(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = Ln(e, a, n)),
        t !== null && (yt(t, e, n), Ll(t, e, n)));
    },
  };
  function Yd(e, t, n, a, u, o, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, o, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !wl(n, a) || !wl(u, o)
          : !0
    );
  }
  function Gd(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && qu.enqueueReplaceState(t, t.state, null));
  }
  function va(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = x({}, n));
      for (var u in e) n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  function Vd(e) {
    ki(e);
  }
  function Xd(e) {
    console.error(e);
  }
  function Qd(e) {
    ki(e);
  }
  function cr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Zd(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Fu(e, t, n) {
    return (
      (n = Un(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        cr(e, t);
      }),
      n
    );
  }
  function Kd(e) {
    return ((e = Un(e)), (e.tag = 3), e);
  }
  function Jd(e, t, n, a) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var o = a.value;
      ((e.payload = function () {
        return u(o);
      }),
        (e.callback = function () {
          Zd(t, n, a);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (Zd(t, n, a),
          typeof u != "function" &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this)));
        var m = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: m !== null ? m : "",
        });
      });
  }
  function rg(e, t, n, a, u) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && Ya(t, n, u, !0),
        (n = Nt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ht === null ? Er() : n.alternate === null && Be === 0 && (Be = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              a === Wi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  fo(e, a, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === Wi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  fo(e, a, u)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return (fo(e, a, u), Er(), !1);
    }
    if (de)
      return (
        (t = Nt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            a !== iu && ((e = Error(s(422), { cause: a })), jl(Bt(e, n))))
          : (a !== iu && ((t = Error(s(423), { cause: a })), jl(Bt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (a = Bt(a, n)),
            (u = Fu(e.stateNode, a, u)),
            yu(e, u),
            Be !== 4 && (Be = 2)),
        !1
      );
    var o = Error(s(520), { cause: a });
    if (
      ((o = Bt(o, n)),
      Wl === null ? (Wl = [o]) : Wl.push(o),
      Be !== 4 && (Be = 2),
      t === null)
    )
      return !0;
    ((a = Bt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = u & -u),
            (n.lanes |= e),
            (e = Fu(n.stateNode, a, e)),
            yu(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (Gn === null || !Gn.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = Kd(u)),
              Jd(u, e, n, a),
              yu(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ku = Error(s(461)),
    Ve = !1;
  function tt(e, t, n, a) {
    t.child = e === null ? If(t, null, n, a) : ya(t, e.child, n, a);
  }
  function $d(e, t, n, a, u) {
    n = n.render;
    var o = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var m in a) m !== "ref" && (d[m] = a[m]);
    } else d = a;
    return (
      da(t),
      (a = Eu(e, t, n, d, o, u)),
      (m = _u()),
      e !== null && !Ve
        ? (Au(e, t, u), pn(e, t, u))
        : (de && m && au(t), (t.flags |= 1), tt(e, t, a, u), t.child)
    );
  }
  function Wd(e, t, n, a, u) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !eu(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = o), Pd(e, t, o, a, u))
        : ((e = Xi(n.type, null, a, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !Ju(e, u))) {
      var d = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : wl), n(d, a) && e.ref === t.ref)
      )
        return pn(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = on(o, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Pd(e, t, n, a, u) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (wl(o, a) && e.ref === t.ref)
        if (((Ve = !1), (t.pendingProps = a = o), Ju(e, u)))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else return ((t.lanes = e.lanes), pn(e, t, u));
    }
    return Yu(e, t, n, a, u);
  }
  function Id(e, t, n, a) {
    var u = a.children,
      o = e !== null ? e.memoizedState : null;
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
        if (((o = o !== null ? o.baseLanes | n : n), e !== null)) {
          for (a = t.child = e.child, u = 0; a !== null; )
            ((u = u | a.lanes | a.childLanes), (a = a.sibling));
          a = u & ~o;
        } else ((a = 0), (t.child = null));
        return eh(e, t, o, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ji(t, o !== null ? o.cachePool : null),
          o !== null ? nd(t, o) : vu(),
          ad(t));
      else
        return (
          (a = t.lanes = 536870912),
          eh(e, t, o !== null ? o.baseLanes | n : n, n, a)
        );
    } else
      o !== null
        ? (Ji(t, o.cachePool), nd(t, o), qn(), (t.memoizedState = null))
        : (e !== null && Ji(t, null), vu(), qn());
    return (tt(e, t, u, n), t.child);
  }
  function Vl(e, t) {
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
  function eh(e, t, n, a, u) {
    var o = du();
    return (
      (o = o === null ? null : { parent: Ye._currentValue, pool: o }),
      (t.memoizedState = { baseLanes: n, cachePool: o }),
      e !== null && Ji(t, null),
      vu(),
      ad(t),
      e !== null && Ya(e, t, a, !0),
      (t.childLanes = u),
      null
    );
  }
  function fr(e, t) {
    return (
      (t = hr({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function th(e, t, n) {
    return (
      ya(t, e.child, null, n),
      (e = fr(t, t.pendingProps)),
      (e.flags |= 2),
      Tt(t),
      (t.memoizedState = null),
      e
    );
  }
  function sg(e, t, n) {
    var a = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (de) {
        if (a.mode === "hidden")
          return ((e = fr(t, a)), (t.lanes = 536870912), Vl(null, e));
        if (
          (xu(t),
          (e = Ce)
            ? ((e = hm(e, Lt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: zn !== null ? { id: $t, overflow: Wt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Hf(e)),
                (n.return = t),
                (t.child = n),
                (Ie = t),
                (Ce = null)))
            : (e = null),
          e === null)
        )
          throw Dn(t);
        return ((t.lanes = 536870912), null);
      }
      return fr(t, a);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var d = o.dehydrated;
      if ((xu(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = th(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (Ve || Ya(e, t, n, !1), (u = (n & e.childLanes) !== 0), Ve || u)
      ) {
        if (
          ((a = Re),
          a !== null && ((d = Vc(a, n)), d !== 0 && d !== o.retryLane))
        )
          throw ((o.retryLane = d), ua(e, d), yt(a, e, d), ku);
        (Er(), (t = th(e, t, n)));
      } else
        ((e = o.treeContext),
          (Ce = qt(d.nextSibling)),
          (Ie = t),
          (de = !0),
          (jn = null),
          (Lt = !1),
          e !== null && kf(t, e),
          (t = fr(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = on(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function dr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Yu(e, t, n, a, u) {
    return (
      da(t),
      (n = Eu(e, t, n, a, void 0, u)),
      (a = _u()),
      e !== null && !Ve
        ? (Au(e, t, u), pn(e, t, u))
        : (de && a && au(t), (t.flags |= 1), tt(e, t, n, u), t.child)
    );
  }
  function nh(e, t, n, a, u, o) {
    return (
      da(t),
      (t.updateQueue = null),
      (n = id(t, a, n, u)),
      ld(e),
      (a = _u()),
      e !== null && !Ve
        ? (Au(e, t, o), pn(e, t, o))
        : (de && a && au(t), (t.flags |= 1), tt(e, t, n, o), t.child)
    );
  }
  function ah(e, t, n, a, u) {
    if ((da(t), t.stateNode === null)) {
      var o = Ha,
        d = n.contextType;
      (typeof d == "object" && d !== null && (o = et(d)),
        (o = new n(a, o)),
        (t.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = qu),
        (t.stateNode = o),
        (o._reactInternals = t),
        (o = t.stateNode),
        (o.props = a),
        (o.state = t.memoizedState),
        (o.refs = {}),
        mu(t),
        (d = n.contextType),
        (o.context = typeof d == "object" && d !== null ? et(d) : Ha),
        (o.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Hu(t, n, d, a), (o.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((d = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          d !== o.state && qu.enqueueReplaceState(o, o.state, null),
          ql(t, a, o, u),
          Hl(),
          (o.state = t.memoizedState)),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      o = t.stateNode;
      var m = t.memoizedProps,
        S = va(n, m);
      o.props = S;
      var R = o.context,
        M = n.contextType;
      ((d = Ha), typeof M == "object" && M !== null && (d = et(M)));
      var q = n.getDerivedStateFromProps;
      ((M =
        typeof q == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (m = t.pendingProps !== m),
        M ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((m || R !== d) && Gd(t, o, a, d)),
        (Mn = !1));
      var w = t.memoizedState;
      ((o.state = w),
        ql(t, a, o, u),
        Hl(),
        (R = t.memoizedState),
        m || w !== R || Mn
          ? (typeof q == "function" && (Hu(t, n, q, a), (R = t.memoizedState)),
            (S = Mn || Yd(t, n, S, a, w, R, d))
              ? (M ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = R)),
            (o.props = a),
            (o.state = R),
            (o.context = d),
            (a = S))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((o = t.stateNode),
        pu(e, t),
        (d = t.memoizedProps),
        (M = va(n, d)),
        (o.props = M),
        (q = t.pendingProps),
        (w = o.context),
        (R = n.contextType),
        (S = Ha),
        typeof R == "object" && R !== null && (S = et(R)),
        (m = n.getDerivedStateFromProps),
        (R =
          typeof m == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((d !== q || w !== S) && Gd(t, o, a, S)),
        (Mn = !1),
        (w = t.memoizedState),
        (o.state = w),
        ql(t, a, o, u),
        Hl());
      var j = t.memoizedState;
      d !== q ||
      w !== j ||
      Mn ||
      (e !== null && e.dependencies !== null && Zi(e.dependencies))
        ? (typeof m == "function" && (Hu(t, n, m, a), (j = t.memoizedState)),
          (M =
            Mn ||
            Yd(t, n, M, a, w, j, S) ||
            (e !== null && e.dependencies !== null && Zi(e.dependencies)))
            ? (R ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(a, j, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(a, j, S)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (d === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && w === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = j)),
          (o.props = a),
          (o.state = j),
          (o.context = S),
          (a = M))
        : (typeof o.componentDidUpdate != "function" ||
            (d === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && w === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (o = a),
      dr(e, t),
      (a = (t.flags & 128) !== 0),
      o || a
        ? ((o = t.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = ya(t, e.child, null, u)),
              (t.child = ya(t, null, n, u)))
            : tt(e, t, n, u),
          (t.memoizedState = o.state),
          (e = t.child))
        : (e = pn(e, t, u)),
      e
    );
  }
  function lh(e, t, n, a) {
    return (ca(), (t.flags |= 256), tt(e, t, n, a), t.child);
  }
  var Gu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Vu(e) {
    return { baseLanes: e, cachePool: Zf() };
  }
  function Xu(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Ct), e);
  }
  function ih(e, t, n) {
    var a = t.pendingProps,
      u = !1,
      o = (t.flags & 128) !== 0,
      d;
    if (
      ((d = o) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0),
      d && ((u = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (de) {
        if (
          (u ? Hn(t) : qn(),
          (e = Ce)
            ? ((e = hm(e, Lt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: zn !== null ? { id: $t, overflow: Wt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Hf(e)),
                (n.return = t),
                (t.child = n),
                (Ie = t),
                (Ce = null)))
            : (e = null),
          e === null)
        )
          throw Dn(t);
        return (Co(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var m = a.children;
      return (
        (a = a.fallback),
        u
          ? (qn(),
            (u = t.mode),
            (m = hr({ mode: "hidden", children: m }, u)),
            (a = oa(a, u, n, null)),
            (m.return = t),
            (a.return = t),
            (m.sibling = a),
            (t.child = m),
            (a = t.child),
            (a.memoizedState = Vu(n)),
            (a.childLanes = Xu(e, d, n)),
            (t.memoizedState = Gu),
            Vl(null, a))
          : (Hn(t), Qu(t, m))
      );
    }
    var S = e.memoizedState;
    if (S !== null && ((m = S.dehydrated), m !== null)) {
      if (o)
        t.flags & 256
          ? (Hn(t), (t.flags &= -257), (t = Zu(e, t, n)))
          : t.memoizedState !== null
            ? (qn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (qn(),
              (m = a.fallback),
              (u = t.mode),
              (a = hr({ mode: "visible", children: a.children }, u)),
              (m = oa(m, u, n, null)),
              (m.flags |= 2),
              (a.return = t),
              (m.return = t),
              (a.sibling = m),
              (t.child = a),
              ya(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = Vu(n)),
              (a.childLanes = Xu(e, d, n)),
              (t.memoizedState = Gu),
              (t = Vl(null, a)));
      else if ((Hn(t), Co(m))) {
        if (((d = m.nextSibling && m.nextSibling.dataset), d)) var R = d.dgst;
        ((d = R),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = d),
          jl({ value: a, source: null, stack: null }),
          (t = Zu(e, t, n)));
      } else if (
        (Ve || Ya(e, t, n, !1), (d = (n & e.childLanes) !== 0), Ve || d)
      ) {
        if (
          ((d = Re),
          d !== null && ((a = Vc(d, n)), a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), ua(e, a), yt(d, e, a), ku);
        (Ro(m) || Er(), (t = Zu(e, t, n)));
      } else
        Ro(m)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = S.treeContext),
            (Ce = qt(m.nextSibling)),
            (Ie = t),
            (de = !0),
            (jn = null),
            (Lt = !1),
            e !== null && kf(t, e),
            (t = Qu(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (qn(),
        (m = a.fallback),
        (u = t.mode),
        (S = e.child),
        (R = S.sibling),
        (a = on(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        R !== null ? (m = on(R, m)) : ((m = oa(m, u, n, null)), (m.flags |= 2)),
        (m.return = t),
        (a.return = t),
        (a.sibling = m),
        (t.child = a),
        Vl(null, a),
        (a = t.child),
        (m = e.child.memoizedState),
        m === null
          ? (m = Vu(n))
          : ((u = m.cachePool),
            u !== null
              ? ((S = Ye._currentValue),
                (u = u.parent !== S ? { parent: S, pool: S } : u))
              : (u = Zf()),
            (m = { baseLanes: m.baseLanes | n, cachePool: u })),
        (a.memoizedState = m),
        (a.childLanes = Xu(e, d, n)),
        (t.memoizedState = Gu),
        Vl(e.child, a))
      : (Hn(t),
        (n = e.child),
        (e = n.sibling),
        (n = on(n, { mode: "visible", children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Qu(e, t) {
    return (
      (t = hr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function hr(e, t) {
    return ((e = At(22, e, null, t)), (e.lanes = 0), e);
  }
  function Zu(e, t, n) {
    return (
      ya(t, e.child, null, n),
      (e = Qu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function rh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), uu(e.return, t, n));
  }
  function Ku(e, t, n, a, u, o) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: u,
          treeForkCount: o,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = a),
        (d.tail = n),
        (d.tailMode = u),
        (d.treeForkCount = o));
  }
  function sh(e, t, n) {
    var a = t.pendingProps,
      u = a.revealOrder,
      o = a.tail;
    a = a.children;
    var d = He.current,
      m = (d & 2) !== 0;
    if (
      (m ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      V(He, d),
      tt(e, t, a, n),
      (a = de ? zl : 0),
      !m && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rh(e, n, t);
        else if (e.tag === 19) rh(e, n, t);
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
    switch (u) {
      case "forwards":
        for (n = t.child, u = null; n !== null; )
          ((e = n.alternate),
            e !== null && tr(e) === null && (u = n),
            (n = n.sibling));
        ((n = u),
          n === null
            ? ((u = t.child), (t.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          Ku(t, !1, u, n, o, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && tr(e) === null)) {
            t.child = u;
            break;
          }
          ((e = u.sibling), (u.sibling = n), (n = u), (u = e));
        }
        Ku(t, !0, n, null, o, a);
        break;
      case "together":
        Ku(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function pn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Yn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ya(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = on(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Ju(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Zi(e)));
  }
  function ug(e, t, n) {
    switch (t.tag) {
      case 3:
        (ut(t, t.stateNode.containerInfo),
          Bn(t, Ye, e.memoizedState.cache),
          ca());
        break;
      case 27:
      case 5:
        yl(t);
        break;
      case 4:
        ut(t, t.stateNode.containerInfo);
        break;
      case 10:
        Bn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), xu(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (Hn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? ih(e, t, n)
              : (Hn(t), (e = pn(e, t, n)), e !== null ? e.sibling : null);
        Hn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (Ya(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          u)
        ) {
          if (a) return sh(e, t, n);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          V(He, He.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Id(e, t, n, t.pendingProps));
      case 24:
        Bn(t, Ye, e.memoizedState.cache);
    }
    return pn(e, t, n);
  }
  function uh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ve = !0;
      else {
        if (!Ju(e, n) && (t.flags & 128) === 0) return ((Ve = !1), ug(e, t, n));
        Ve = (e.flags & 131072) !== 0;
      }
    else ((Ve = !1), de && (t.flags & 1048576) !== 0 && Ff(t, zl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = ma(t.elementType)), (t.type = e), typeof e == "function"))
            eu(e)
              ? ((a = va(e, a)), (t.tag = 1), (t = ah(null, t, e, a, n)))
              : ((t.tag = 0), (t = Yu(null, t, e, a, n)));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === ee) {
                ((t.tag = 11), (t = $d(null, t, e, a, n)));
                break e;
              } else if (u === X) {
                ((t.tag = 14), (t = Wd(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = ke(e) || e), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return Yu(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (u = va(a, t.pendingProps)), ah(e, t, a, u, n));
      case 3:
        e: {
          if ((ut(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          a = t.pendingProps;
          var o = t.memoizedState;
          ((u = o.element), pu(e, t), ql(t, a, null, n));
          var d = t.memoizedState;
          if (
            ((a = d.cache),
            Bn(t, Ye, a),
            a !== o.cache && ou(t, [Ye], n, !0),
            Hl(),
            (a = d.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: a, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              t = lh(e, t, a, n);
              break e;
            } else if (a !== u) {
              ((u = Bt(Error(s(424)), t)), jl(u), (t = lh(e, t, a, n)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Ce = qt(e.firstChild),
                  Ie = t,
                  de = !0,
                  jn = null,
                  Lt = !0,
                  n = If(t, null, a, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((ca(), a === u)) {
              t = pn(e, t, n);
              break e;
            }
            tt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          dr(e, t),
          e === null
            ? (n = bm(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : de ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = wr(se.current).createElement(n)),
                (a[Pe] = t),
                (a[ct] = e),
                nt(a, n, e),
                $e(a),
                (t.stateNode = a))
            : (t.memoizedState = bm(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          yl(t),
          e === null &&
            de &&
            ((a = t.stateNode = ym(t.type, t.pendingProps, se.current)),
            (Ie = t),
            (Lt = !0),
            (u = Ce),
            Zn(t.type) ? ((wo = u), (Ce = qt(a.firstChild))) : (Ce = u)),
          tt(e, t, t.pendingProps.children, n),
          dr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            de &&
            ((u = a = Ce) &&
              ((a = Hg(a, t.type, t.pendingProps, Lt)),
              a !== null
                ? ((t.stateNode = a),
                  (Ie = t),
                  (Ce = qt(a.firstChild)),
                  (Lt = !1),
                  (u = !0))
                : (u = !1)),
            u || Dn(t)),
          yl(t),
          (u = t.type),
          (o = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (a = o.children),
          Ao(u, o) ? (a = null) : d !== null && Ao(u, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Eu(e, t, I0, null, null, n)), (ii._currentValue = u)),
          dr(e, t),
          tt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            de &&
            ((e = n = Ce) &&
              ((n = qg(n, t.pendingProps, Lt)),
              n !== null
                ? ((t.stateNode = n), (Ie = t), (Ce = null), (e = !0))
                : (e = !1)),
            e || Dn(t)),
          null
        );
      case 13:
        return ih(e, t, n);
      case 4:
        return (
          ut(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = ya(t, null, a, n)) : tt(e, t, a, n),
          t.child
        );
      case 11:
        return $d(e, t, t.type, t.pendingProps, n);
      case 7:
        return (tt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (tt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (tt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          Bn(t, t.type, a.value),
          tt(e, t, a.children, n),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (a = t.pendingProps.children),
          da(t),
          (u = et(u)),
          (a = a(u)),
          (t.flags |= 1),
          tt(e, t, a, n),
          t.child
        );
      case 14:
        return Wd(e, t, t.type, t.pendingProps, n);
      case 15:
        return Pd(e, t, t.type, t.pendingProps, n);
      case 19:
        return sh(e, t, n);
      case 31:
        return sg(e, t, n);
      case 22:
        return Id(e, t, n, t.pendingProps);
      case 24:
        return (
          da(t),
          (a = et(Ye)),
          e === null
            ? ((u = du()),
              u === null &&
                ((u = Re),
                (o = cu()),
                (u.pooledCache = o),
                o.refCount++,
                o !== null && (u.pooledCacheLanes |= n),
                (u = o)),
              (t.memoizedState = { parent: a, cache: u }),
              mu(t),
              Bn(t, Ye, u))
            : ((e.lanes & n) !== 0 && (pu(e, t), ql(t, null, null, n), Hl()),
              (u = e.memoizedState),
              (o = t.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Bn(t, Ye, a))
                : ((a = o.cache),
                  Bn(t, Ye, a),
                  a !== u.cache && ou(t, [Ye], n, !0))),
          tt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function yn(e) {
    e.flags |= 4;
  }
  function $u(e, t, n, a, u) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (u & 335544128) === u))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Mh()) e.flags |= 8192;
        else throw ((pa = Wi), hu);
    } else e.flags &= -16777217;
  }
  function oh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Am(t)))
      if (Mh()) e.flags |= 8192;
      else throw ((pa = Wi), hu);
  }
  function mr(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? kc() : 536870912), (e.lanes |= t), (el |= t)));
  }
  function Xl(e, t) {
    if (!de)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var u = e.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 65011712),
          (a |= u.flags & 65011712),
          (u.return = e),
          (u = u.sibling));
    else
      for (u = e.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = e),
          (u = u.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function og(e, t, n) {
    var a = t.pendingProps;
    switch ((lu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (we(t), null);
      case 1:
        return (we(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          dn(Ye),
          Le(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ka(t)
              ? yn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ru())),
          we(t),
          null
        );
      case 26:
        var u = t.type,
          o = t.memoizedState;
        return (
          e === null
            ? (yn(t),
              o !== null ? (we(t), oh(t, o)) : (we(t), $u(t, u, null, a, n)))
            : o
              ? o !== e.memoizedState
                ? (yn(t), we(t), oh(t, o))
                : (we(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && yn(t),
                we(t),
                $u(t, u, e, a, n)),
          null
        );
      case 27:
        if (
          (Ni(t),
          (n = se.current),
          (u = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && yn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (we(t), null);
          }
          ((e = Q.current),
            ka(t) ? Yf(t) : ((e = ym(u, a, n)), (t.stateNode = e), yn(t)));
        }
        return (we(t), null);
      case 5:
        if ((Ni(t), (u = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && yn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return (we(t), null);
          }
          if (((o = Q.current), ka(t))) Yf(t);
          else {
            var d = wr(se.current);
            switch (o) {
              case 1:
                o = d.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                o = d.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    o = d.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    o = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((o = d.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof a.is == "string"
                        ? d.createElement("select", { is: a.is })
                        : d.createElement("select")),
                      a.multiple
                        ? (o.multiple = !0)
                        : a.size && (o.size = a.size));
                    break;
                  default:
                    o =
                      typeof a.is == "string"
                        ? d.createElement(u, { is: a.is })
                        : d.createElement(u);
                }
            }
            ((o[Pe] = t), (o[ct] = a));
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) o.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            t.stateNode = o;
            e: switch ((nt(o, u, a), u)) {
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
            a && yn(t);
          }
        }
        return (
          we(t),
          $u(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && yn(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = se.current), ka(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (u = Ie),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            ((e[Pe] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                im(e.nodeValue, n)
              )),
              e || Dn(t, !0));
          } else
            ((e = wr(e).createTextNode(a)), (e[Pe] = t), (t.stateNode = e));
        }
        return (we(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = ka(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[Pe] = t;
            } else
              (ca(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (we(t), (e = !1));
          } else
            ((n = ru()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (we(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = ka(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[Pe] = t;
            } else
              (ca(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (we(t), (u = !1));
          } else
            ((u = ru()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return (
          Tt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = a !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((a = t.child),
                (u = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (u = a.alternate.memoizedState.cachePool.pool),
                (o = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (o = a.memoizedState.cachePool.pool),
                o !== u && (a.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              mr(t, t.updateQueue),
              we(t),
              null)
        );
      case 4:
        return (Le(), e === null && bo(t.stateNode.containerInfo), we(t), null);
      case 10:
        return (dn(t.type), we(t), null);
      case 19:
        if ((H(He), (a = t.memoizedState), a === null)) return (we(t), null);
        if (((u = (t.flags & 128) !== 0), (o = a.rendering), o === null))
          if (u) Xl(a, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = tr(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      Xl(a, !1),
                      e = o.updateQueue,
                      t.updateQueue = e,
                      mr(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Lf(n, e), (n = n.sibling));
                  return (
                    V(He, (He.current & 1) | 2),
                    de && cn(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              xt() > br &&
              ((t.flags |= 128), (u = !0), Xl(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = tr(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                mr(t, e),
                Xl(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !o.alternate &&
                  !de)
              )
                return (we(t), null);
            } else
              2 * xt() - a.renderingStartTime > br &&
                n !== 536870912 &&
                ((t.flags |= 128), (u = !0), Xl(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((e = a.last),
              e !== null ? (e.sibling = o) : (t.child = o),
              (a.last = o));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = xt()),
            (e.sibling = null),
            (n = He.current),
            V(He, u ? (n & 1) | 2 : n & 1),
            de && cn(t, a.treeForkCount),
            e)
          : (we(t), null);
      case 22:
      case 23:
        return (
          Tt(t),
          bu(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : we(t),
          (n = t.updateQueue),
          n !== null && mr(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && H(ha),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          dn(Ye),
          we(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function cg(e, t) {
    switch ((lu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          dn(Ye),
          Le(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ni(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Tt(t), t.alternate === null)) throw Error(s(340));
          ca();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Tt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          ca();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (H(He), null);
      case 4:
        return (Le(), null);
      case 10:
        return (dn(t.type), null);
      case 22:
      case 23:
        return (
          Tt(t),
          bu(),
          e !== null && H(ha),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (dn(Ye), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ch(e, t) {
    switch ((lu(t), t.tag)) {
      case 3:
        (dn(Ye), Le());
        break;
      case 26:
      case 27:
      case 5:
        Ni(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        H(He);
        break;
      case 10:
        dn(t.type);
        break;
      case 22:
      case 23:
        (Tt(t), bu(), e !== null && H(ha));
        break;
      case 24:
        dn(Ye);
    }
  }
  function Ql(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var o = n.create,
              d = n.inst;
            ((a = o()), (d.destroy = a));
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (m) {
      Se(t, t.return, m);
    }
  }
  function Fn(e, t, n) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var o = u.next;
        a = o;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst,
              m = d.destroy;
            if (m !== void 0) {
              ((d.destroy = void 0), (u = t));
              var S = n,
                R = m;
              try {
                R();
              } catch (M) {
                Se(u, S, M);
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (M) {
      Se(t, t.return, M);
    }
  }
  function fh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        td(t, n);
      } catch (a) {
        Se(e, e.return, a);
      }
    }
  }
  function dh(e, t, n) {
    ((n.props = va(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      Se(e, t, a);
    }
  }
  function Zl(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
      }
    } catch (u) {
      Se(e, t, u);
    }
  }
  function Pt(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          Se(e, t, u);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Se(e, t, u);
        }
      else n.current = null;
  }
  function hh(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (u) {
      Se(e, e.return, u);
    }
  }
  function Wu(e, t, n) {
    try {
      var a = e.stateNode;
      (jg(a, e.type, n, t), (a[ct] = t));
    } catch (u) {
      Se(e, e.return, u);
    }
  }
  function mh(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Zn(e.type)) ||
      e.tag === 4
    );
  }
  function Pu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || mh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Zn(e.type)) ||
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
  function Iu(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = sn)));
    else if (
      a !== 4 &&
      (a === 27 && Zn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Iu(e, t, n), e = e.sibling; e !== null; )
        (Iu(e, t, n), (e = e.sibling));
  }
  function pr(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && Zn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (pr(e, t, n), e = e.sibling; e !== null; )
        (pr(e, t, n), (e = e.sibling));
  }
  function ph(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (nt(t, a, n), (t[Pe] = e), (t[ct] = n));
    } catch (o) {
      Se(e, e.return, o);
    }
  }
  var gn = !1,
    Xe = !1,
    eo = !1,
    yh = typeof WeakSet == "function" ? WeakSet : Set,
    We = null;
  function fg(e, t) {
    if (((e = e.containerInfo), (Eo = Ur), (e = Cf(e)), Zs(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var u = a.anchorOffset,
              o = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              m = -1,
              S = -1,
              R = 0,
              M = 0,
              q = e,
              w = null;
            t: for (;;) {
              for (
                var j;
                q !== n || (u !== 0 && q.nodeType !== 3) || (m = d + u),
                  q !== o || (a !== 0 && q.nodeType !== 3) || (S = d + a),
                  q.nodeType === 3 && (d += q.nodeValue.length),
                  (j = q.firstChild) !== null;
              )
                ((w = q), (q = j));
              for (;;) {
                if (q === e) break t;
                if (
                  (w === n && ++R === u && (m = d),
                  w === o && ++M === a && (S = d),
                  (j = q.nextSibling) !== null)
                )
                  break;
                ((q = w), (w = q.parentNode));
              }
              q = j;
            }
            n = m === -1 || S === -1 ? null : { start: m, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _o = { focusedElem: e, selectionRange: n }, Ur = !1, We = t;
      We !== null;
    )
      if (
        ((t = We), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (We = e));
      else
        for (; We !== null; ) {
          switch (((t = We), (o = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((u = e[n]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                ((e = void 0),
                  (n = t),
                  (u = o.memoizedProps),
                  (o = o.memoizedState),
                  (a = n.stateNode));
                try {
                  var Z = va(n.type, u);
                  ((e = a.getSnapshotBeforeUpdate(Z, o)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (I) {
                  Se(n, n.return, I);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  To(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      To(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (We = e));
            break;
          }
          We = t.return;
        }
  }
  function gh(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (bn(e, n), a & 4 && Ql(5, n));
        break;
      case 1:
        if ((bn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Se(n, n.return, d);
            }
          else {
            var u = va(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Se(n, n.return, d);
            }
          }
        (a & 64 && fh(n), a & 512 && Zl(n, n.return));
        break;
      case 3:
        if ((bn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            td(e, t);
          } catch (d) {
            Se(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ph(n);
      case 26:
      case 5:
        (bn(e, n), t === null && a & 4 && hh(n), a & 512 && Zl(n, n.return));
        break;
      case 12:
        bn(e, n);
        break;
      case 31:
        (bn(e, n), a & 4 && xh(e, n));
        break;
      case 13:
        (bn(e, n),
          a & 4 && Sh(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = xg.bind(null, n)), Fg(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || gn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Xe), (u = gn));
          var o = Xe;
          ((gn = a),
            (Xe = t) && !o ? xn(e, n, (n.subtreeFlags & 8772) !== 0) : bn(e, n),
            (gn = u),
            (Xe = o));
        }
        break;
      case 30:
        break;
      default:
        bn(e, n);
    }
  }
  function vh(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), vh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Os(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Oe = null,
    dt = !1;
  function vn(e, t, n) {
    for (n = n.child; n !== null; ) (bh(e, t, n), (n = n.sibling));
  }
  function bh(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(gl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Xe || Pt(n, t),
          vn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Xe || Pt(n, t);
        var a = Oe,
          u = dt;
        (Zn(n.type) && ((Oe = n.stateNode), (dt = !1)),
          vn(e, t, n),
          ni(n.stateNode),
          (Oe = a),
          (dt = u));
        break;
      case 5:
        Xe || Pt(n, t);
      case 6:
        if (
          ((a = Oe),
          (u = dt),
          (Oe = null),
          vn(e, t, n),
          (Oe = a),
          (dt = u),
          Oe !== null)
        )
          if (dt)
            try {
              (Oe.nodeType === 9
                ? Oe.body
                : Oe.nodeName === "HTML"
                  ? Oe.ownerDocument.body
                  : Oe
              ).removeChild(n.stateNode);
            } catch (o) {
              Se(n, t, o);
            }
          else
            try {
              Oe.removeChild(n.stateNode);
            } catch (o) {
              Se(n, t, o);
            }
        break;
      case 18:
        Oe !== null &&
          (dt
            ? ((e = Oe),
              fm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              ul(e))
            : fm(Oe, n.stateNode));
        break;
      case 4:
        ((a = Oe),
          (u = dt),
          (Oe = n.stateNode.containerInfo),
          (dt = !0),
          vn(e, t, n),
          (Oe = a),
          (dt = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Fn(2, n, t), Xe || Fn(4, n, t), vn(e, t, n));
        break;
      case 1:
        (Xe ||
          (Pt(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && dh(n, t, a)),
          vn(e, t, n));
        break;
      case 21:
        vn(e, t, n);
        break;
      case 22:
        ((Xe = (a = Xe) || n.memoizedState !== null), vn(e, t, n), (Xe = a));
        break;
      default:
        vn(e, t, n);
    }
  }
  function xh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ul(e);
      } catch (n) {
        Se(t, t.return, n);
      }
    }
  }
  function Sh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ul(e);
      } catch (n) {
        Se(t, t.return, n);
      }
  }
  function dg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new yh()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new yh()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function yr(e, t) {
    var n = dg(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var u = Sg.bind(null, e, a);
        a.then(u, u);
      }
    });
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var u = n[a],
          o = e,
          d = t,
          m = d;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Zn(m.type)) {
                ((Oe = m.stateNode), (dt = !1));
                break e;
              }
              break;
            case 5:
              ((Oe = m.stateNode), (dt = !1));
              break e;
            case 3:
            case 4:
              ((Oe = m.stateNode.containerInfo), (dt = !0));
              break e;
          }
          m = m.return;
        }
        if (Oe === null) throw Error(s(160));
        (bh(o, d, u),
          (Oe = null),
          (dt = !1),
          (o = u.alternate),
          o !== null && (o.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Eh(t, e), (t = t.sibling));
  }
  var Xt = null;
  function Eh(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ht(t, e),
          mt(e),
          a & 4 && (Fn(3, e, e.return), Ql(3, e), Fn(5, e, e.return)));
        break;
      case 1:
        (ht(t, e),
          mt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          a & 64 &&
            gn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var u = Xt;
        if (
          (ht(t, e),
          mt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          a & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (n = e.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (a) {
                    case "title":
                      ((o = u.getElementsByTagName("title")[0]),
                        (!o ||
                          o[xl] ||
                          o[Pe] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = u.createElement(a)),
                          u.head.insertBefore(
                            o,
                            u.querySelector("head > title"),
                          )),
                        nt(o, a, n),
                        (o[Pe] = e),
                        $e(o),
                        (a = o));
                      break e;
                    case "link":
                      var d = Em("link", "href", u).get(a + (n.href || ""));
                      if (d) {
                        for (var m = 0; m < d.length; m++)
                          if (
                            ((o = d[m]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(m, 1);
                            break t;
                          }
                      }
                      ((o = u.createElement(a)),
                        nt(o, a, n),
                        u.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (d = Em("meta", "content", u).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (m = 0; m < d.length; m++)
                          if (
                            ((o = d[m]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(m, 1);
                            break t;
                          }
                      }
                      ((o = u.createElement(a)),
                        nt(o, a, n),
                        u.head.appendChild(o));
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  ((o[Pe] = e), $e(o), (a = o));
                }
                e.stateNode = a;
              } else _m(u, e.type, e.stateNode);
            else e.stateNode = Sm(u, a, e.memoizedProps);
          else
            o !== a
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                a === null
                  ? _m(u, e.type, e.stateNode)
                  : Sm(u, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Wu(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ht(t, e),
          mt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          n !== null && a & 4 && Wu(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (ht(t, e),
          mt(e),
          a & 512 && (Xe || n === null || Pt(n, n.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            za(u, "");
          } catch (Z) {
            Se(e, e.return, Z);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Wu(e, u, n !== null ? n.memoizedProps : u)),
          a & 1024 && (eo = !0));
        break;
      case 6:
        if ((ht(t, e), mt(e), a & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (Z) {
            Se(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((jr = null),
          (u = Xt),
          (Xt = Or(t.containerInfo)),
          ht(t, e),
          (Xt = u),
          mt(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ul(t.containerInfo);
          } catch (Z) {
            Se(e, e.return, Z);
          }
        eo && ((eo = !1), _h(e));
        break;
      case 4:
        ((a = Xt),
          (Xt = Or(e.stateNode.containerInfo)),
          ht(t, e),
          mt(e),
          (Xt = a));
        break;
      case 12:
        (ht(t, e), mt(e));
        break;
      case 31:
        (ht(t, e),
          mt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), yr(e, a))));
        break;
      case 13:
        (ht(t, e),
          mt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (vr = xt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), yr(e, a))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          R = gn,
          M = Xe;
        if (
          ((gn = R || u),
          (Xe = M || S),
          ht(t, e),
          (Xe = M),
          (gn = R),
          mt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (n === null || S || gn || Xe || ba(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                S = n = t;
                try {
                  if (((o = S.stateNode), u))
                    ((d = o.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    m = S.stateNode;
                    var q = S.memoizedProps.style,
                      w =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    m.style.display =
                      w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (Z) {
                  Se(S, S.return, Z);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = u ? "" : S.memoizedProps;
                } catch (Z) {
                  Se(S, S.return, Z);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                S = t;
                try {
                  var j = S.stateNode;
                  u ? dm(j, !0) : dm(S.stateNode, !1);
                } catch (Z) {
                  Se(S, S.return, Z);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), yr(e, n))));
        break;
      case 19:
        (ht(t, e),
          mt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), yr(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ht(t, e), mt(e));
    }
  }
  function mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (mh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              o = Pu(e);
            pr(e, o, u);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (za(d, ""), (n.flags &= -33));
            var m = Pu(e);
            pr(e, m, d);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              R = Pu(e);
            Iu(e, R, S);
            break;
          default:
            throw Error(s(161));
        }
      } catch (M) {
        Se(e, e.return, M);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _h(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (_h(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function bn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (gh(e, t.alternate, t), (t = t.sibling));
  }
  function ba(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Fn(4, t, t.return), ba(t));
          break;
        case 1:
          Pt(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && dh(t, t.return, n),
            ba(t));
          break;
        case 27:
          ni(t.stateNode);
        case 26:
        case 5:
          (Pt(t, t.return), ba(t));
          break;
        case 22:
          t.memoizedState === null && ba(t);
          break;
        case 30:
          ba(t);
          break;
        default:
          ba(t);
      }
      e = e.sibling;
    }
  }
  function xn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        u = e,
        o = t,
        d = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (xn(u, o, n), Ql(4, o));
          break;
        case 1:
          if (
            (xn(u, o, n),
            (a = o),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (R) {
              Se(a, a.return, R);
            }
          if (((a = o), (u = a.updateQueue), u !== null)) {
            var m = a.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  ed(S[u], m);
            } catch (R) {
              Se(a, a.return, R);
            }
          }
          (n && d & 64 && fh(o), Zl(o, o.return));
          break;
        case 27:
          ph(o);
        case 26:
        case 5:
          (xn(u, o, n), n && a === null && d & 4 && hh(o), Zl(o, o.return));
          break;
        case 12:
          xn(u, o, n);
          break;
        case 31:
          (xn(u, o, n), n && d & 4 && xh(u, o));
          break;
        case 13:
          (xn(u, o, n), n && d & 4 && Sh(u, o));
          break;
        case 22:
          (o.memoizedState === null && xn(u, o, n), Zl(o, o.return));
          break;
        case 30:
          break;
        default:
          xn(u, o, n);
      }
      t = t.sibling;
    }
  }
  function to(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Dl(n)));
  }
  function no(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Dl(e)));
  }
  function Qt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Ah(e, t, n, a), (t = t.sibling));
  }
  function Ah(e, t, n, a) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Qt(e, t, n, a), u & 2048 && Ql(9, t));
        break;
      case 1:
        Qt(e, t, n, a);
        break;
      case 3:
        (Qt(e, t, n, a),
          u & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Dl(e))));
        break;
      case 12:
        if (u & 2048) {
          (Qt(e, t, n, a), (e = t.stateNode));
          try {
            var o = t.memoizedProps,
              d = o.id,
              m = o.onPostCommit;
            typeof m == "function" &&
              m(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            Se(t, t.return, S);
          }
        } else Qt(e, t, n, a);
        break;
      case 31:
        Qt(e, t, n, a);
        break;
      case 13:
        Qt(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((o = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? o._visibility & 2
              ? Qt(e, t, n, a)
              : Kl(e, t)
            : o._visibility & 2
              ? Qt(e, t, n, a)
              : ((o._visibility |= 2),
                Wa(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && to(d, t));
        break;
      case 24:
        (Qt(e, t, n, a), u & 2048 && no(t.alternate, t));
        break;
      default:
        Qt(e, t, n, a);
    }
  }
  function Wa(e, t, n, a, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var o = e,
        d = t,
        m = n,
        S = a,
        R = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Wa(o, d, m, S, u), Ql(8, d));
          break;
        case 23:
          break;
        case 22:
          var M = d.stateNode;
          (d.memoizedState !== null
            ? M._visibility & 2
              ? Wa(o, d, m, S, u)
              : Kl(o, d)
            : ((M._visibility |= 2), Wa(o, d, m, S, u)),
            u && R & 2048 && to(d.alternate, d));
          break;
        case 24:
          (Wa(o, d, m, S, u), u && R & 2048 && no(d.alternate, d));
          break;
        default:
          Wa(o, d, m, S, u);
      }
      t = t.sibling;
    }
  }
  function Kl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          u = a.flags;
        switch (a.tag) {
          case 22:
            (Kl(n, a), u & 2048 && to(a.alternate, a));
            break;
          case 24:
            (Kl(n, a), u & 2048 && no(a.alternate, a));
            break;
          default:
            Kl(n, a);
        }
        t = t.sibling;
      }
  }
  var Jl = 8192;
  function Pa(e, t, n) {
    if (e.subtreeFlags & Jl)
      for (e = e.child; e !== null; ) (Nh(e, t, n), (e = e.sibling));
  }
  function Nh(e, t, n) {
    switch (e.tag) {
      case 26:
        (Pa(e, t, n),
          e.flags & Jl &&
            e.memoizedState !== null &&
            Pg(n, Xt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Pa(e, t, n);
        break;
      case 3:
      case 4:
        var a = Xt;
        ((Xt = Or(e.stateNode.containerInfo)), Pa(e, t, n), (Xt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Jl), (Jl = 16777216), Pa(e, t, n), (Jl = a))
            : Pa(e, t, n));
        break;
      default:
        Pa(e, t, n);
    }
  }
  function Th(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function $l(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((We = a), Ch(a, e));
        }
      Th(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Rh(e), (e = e.sibling));
  }
  function Rh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ($l(e), e.flags & 2048 && Fn(9, e, e.return));
        break;
      case 3:
        $l(e);
        break;
      case 12:
        $l(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), gr(e))
          : $l(e);
        break;
      default:
        $l(e);
    }
  }
  function gr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((We = a), Ch(a, e));
        }
      Th(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (Fn(8, t, t.return), gr(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), gr(t)));
          break;
        default:
          gr(t);
      }
      e = e.sibling;
    }
  }
  function Ch(e, t) {
    for (; We !== null; ) {
      var n = We;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Fn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Dl(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (We = a));
      else
        e: for (n = e; We !== null; ) {
          a = We;
          var u = a.sibling,
            o = a.return;
          if ((vh(a), a === n)) {
            We = null;
            break e;
          }
          if (u !== null) {
            ((u.return = o), (We = u));
            break e;
          }
          We = o;
        }
    }
  }
  var hg = {
      getCacheForType: function (e) {
        var t = et(Ye),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return et(Ye).controller.signal;
      },
    },
    mg = typeof WeakMap == "function" ? WeakMap : Map,
    ge = 0,
    Re = null,
    ue = null,
    ce = 0,
    xe = 0,
    Rt = null,
    kn = !1,
    Ia = !1,
    ao = !1,
    Sn = 0,
    Be = 0,
    Yn = 0,
    xa = 0,
    lo = 0,
    Ct = 0,
    el = 0,
    Wl = null,
    pt = null,
    io = !1,
    vr = 0,
    wh = 0,
    br = 1 / 0,
    xr = null,
    Gn = null,
    Ze = 0,
    Vn = null,
    tl = null,
    En = 0,
    ro = 0,
    so = null,
    Oh = null,
    Pl = 0,
    uo = null;
  function wt() {
    return (ge & 2) !== 0 && ce !== 0 ? ce & -ce : D.T !== null ? po() : Xc();
  }
  function zh() {
    if (Ct === 0)
      if ((ce & 536870912) === 0 || de) {
        var e = Ci;
        ((Ci <<= 1), (Ci & 3932160) === 0 && (Ci = 262144), (Ct = e));
      } else Ct = 536870912;
    return ((e = Nt.current), e !== null && (e.flags |= 32), Ct);
  }
  function yt(e, t, n) {
    (((e === Re && (xe === 2 || xe === 9)) || e.cancelPendingCommit !== null) &&
      (nl(e, 0), Xn(e, ce, Ct, !1)),
      bl(e, n),
      ((ge & 2) === 0 || e !== Re) &&
        (e === Re &&
          ((ge & 2) === 0 && (xa |= n), Be === 4 && Xn(e, ce, Ct, !1)),
        It(e)));
  }
  function jh(e, t, n) {
    if ((ge & 6) !== 0) throw Error(s(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || vl(e, t),
      u = a ? gg(e, t) : co(e, t, !0),
      o = a;
    do {
      if (u === 0) {
        Ia && !a && Xn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), o && !pg(n))) {
          ((u = co(e, t, !1)), (o = !1));
          continue;
        }
        if (u === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var m = e;
              u = Wl;
              var S = m.current.memoizedState.isDehydrated;
              if ((S && (nl(m, d).flags |= 256), (d = co(m, d, !1)), d !== 2)) {
                if (ao && !S) {
                  ((m.errorRecoveryDisabledLanes |= o), (xa |= o), (u = 4));
                  break e;
                }
                ((o = pt),
                  (pt = u),
                  o !== null &&
                    (pt === null ? (pt = o) : pt.push.apply(pt, o)));
              }
              u = d;
            }
            if (((o = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (nl(e, 0), Xn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (o = u), o)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Xn(a, t, Ct, !kn);
              break e;
            case 2:
              pt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((u = vr + 300 - xt()), 10 < u)) {
            if ((Xn(a, t, Ct, !kn), Oi(a, 0, !0) !== 0)) break e;
            ((En = t),
              (a.timeoutHandle = om(
                Dh.bind(
                  null,
                  a,
                  n,
                  pt,
                  xr,
                  io,
                  t,
                  Ct,
                  xa,
                  el,
                  kn,
                  o,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break e;
          }
          Dh(a, n, pt, xr, io, t, Ct, xa, el, kn, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    It(e);
  }
  function Dh(e, t, n, a, u, o, d, m, S, R, M, q, w, j) {
    if (
      ((e.timeoutHandle = -1),
      (q = t.subtreeFlags),
      q & 8192 || (q & 16785408) === 16785408)
    ) {
      ((q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn,
      }),
        Nh(t, o, q));
      var Z =
        (o & 62914560) === o ? vr - xt() : (o & 4194048) === o ? wh - xt() : 0;
      if (((Z = Ig(q, Z)), Z !== null)) {
        ((En = o),
          (e.cancelPendingCommit = Z(
            kh.bind(null, e, t, o, n, a, u, d, m, S, M, q, null, w, j),
          )),
          Xn(e, o, d, !R));
        return;
      }
    }
    kh(e, t, o, n, a, u, d, m, S);
  }
  function pg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var u = n[a],
            o = u.getSnapshot;
          u = u.value;
          try {
            if (!_t(o(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
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
  function Xn(e, t, n, a) {
    ((t &= ~lo),
      (t &= ~xa),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var u = t; 0 < u; ) {
      var o = 31 - Et(u),
        d = 1 << o;
      ((a[o] = -1), (u &= ~d));
    }
    n !== 0 && Yc(e, n, t);
  }
  function Sr() {
    return (ge & 6) === 0 ? (Il(0), !1) : !0;
  }
  function oo() {
    if (ue !== null) {
      if (xe === 0) var e = ue.return;
      else ((e = ue), (fn = fa = null), Nu(e), (Qa = null), (Ml = 0), (e = ue));
      for (; e !== null; ) (ch(e.alternate, e), (e = e.return));
      ue = null;
    }
  }
  function nl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), Mg(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (En = 0),
      oo(),
      (Re = e),
      (ue = n = on(e.current, null)),
      (ce = t),
      (xe = 0),
      (Rt = null),
      (kn = !1),
      (Ia = vl(e, t)),
      (ao = !1),
      (el = Ct = lo = xa = Yn = Be = 0),
      (pt = Wl = null),
      (io = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var u = 31 - Et(a),
          o = 1 << u;
        ((t |= e[u]), (a &= ~o));
      }
    return ((Sn = t), Yi(), n);
  }
  function Bh(e, t) {
    ((le = null),
      (D.H = Gl),
      t === Xa || t === $i
        ? ((t = $f()), (xe = 3))
        : t === hu
          ? ((t = $f()), (xe = 4))
          : (xe =
              t === ku
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Rt = t),
      ue === null && ((Be = 1), cr(e, Bt(t, e.current))));
  }
  function Mh() {
    var e = Nt.current;
    return e === null
      ? !0
      : (ce & 4194048) === ce
        ? Ht === null
        : (ce & 62914560) === ce || (ce & 536870912) !== 0
          ? e === Ht
          : !1;
  }
  function Uh() {
    var e = D.H;
    return ((D.H = Gl), e === null ? Gl : e);
  }
  function Lh() {
    var e = D.A;
    return ((D.A = hg), e);
  }
  function Er() {
    ((Be = 4),
      kn || ((ce & 4194048) !== ce && Nt.current !== null) || (Ia = !0),
      ((Yn & 134217727) === 0 && (xa & 134217727) === 0) ||
        Re === null ||
        Xn(Re, ce, Ct, !1));
  }
  function co(e, t, n) {
    var a = ge;
    ge |= 2;
    var u = Uh(),
      o = Lh();
    ((Re !== e || ce !== t) && ((xr = null), nl(e, t)), (t = !1));
    var d = Be;
    e: do
      try {
        if (xe !== 0 && ue !== null) {
          var m = ue,
            S = Rt;
          switch (xe) {
            case 8:
              (oo(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var R = xe;
              if (((xe = 0), (Rt = null), al(e, m, S, R), n && Ia)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((R = xe), (xe = 0), (Rt = null), al(e, m, S, R));
          }
        }
        (yg(), (d = Be));
        break;
      } catch (M) {
        Bh(e, M);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (fn = fa = null),
      (ge = a),
      (D.H = u),
      (D.A = o),
      ue === null && ((Re = null), (ce = 0), Yi()),
      d
    );
  }
  function yg() {
    for (; ue !== null; ) Hh(ue);
  }
  function gg(e, t) {
    var n = ge;
    ge |= 2;
    var a = Uh(),
      u = Lh();
    Re !== e || ce !== t
      ? ((xr = null), (br = xt() + 500), nl(e, t))
      : (Ia = vl(e, t));
    e: do
      try {
        if (xe !== 0 && ue !== null) {
          t = ue;
          var o = Rt;
          t: switch (xe) {
            case 1:
              ((xe = 0), (Rt = null), al(e, t, o, 1));
              break;
            case 2:
            case 9:
              if (Kf(o)) {
                ((xe = 0), (Rt = null), qh(t));
                break;
              }
              ((t = function () {
                ((xe !== 2 && xe !== 9) || Re !== e || (xe = 7), It(e));
              }),
                o.then(t, t));
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              Kf(o)
                ? ((xe = 0), (Rt = null), qh(t))
                : ((xe = 0), (Rt = null), al(e, t, o, 7));
              break;
            case 5:
              var d = null;
              switch (ue.tag) {
                case 26:
                  d = ue.memoizedState;
                case 5:
                case 27:
                  var m = ue;
                  if (d ? Am(d) : m.stateNode.complete) {
                    ((xe = 0), (Rt = null));
                    var S = m.sibling;
                    if (S !== null) ue = S;
                    else {
                      var R = m.return;
                      R !== null ? ((ue = R), _r(R)) : (ue = null);
                    }
                    break t;
                  }
              }
              ((xe = 0), (Rt = null), al(e, t, o, 5));
              break;
            case 6:
              ((xe = 0), (Rt = null), al(e, t, o, 6));
              break;
            case 8:
              (oo(), (Be = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        vg();
        break;
      } catch (M) {
        Bh(e, M);
      }
    while (!0);
    return (
      (fn = fa = null),
      (D.H = a),
      (D.A = u),
      (ge = n),
      ue !== null ? 0 : ((Re = null), (ce = 0), Yi(), Be)
    );
  }
  function vg() {
    for (; ue !== null && !ky(); ) Hh(ue);
  }
  function Hh(e) {
    var t = uh(e.alternate, e, Sn);
    ((e.memoizedProps = e.pendingProps), t === null ? _r(e) : (ue = t));
  }
  function qh(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = nh(n, t, t.pendingProps, t.type, void 0, ce);
        break;
      case 11:
        t = nh(n, t, t.pendingProps, t.type.render, t.ref, ce);
        break;
      case 5:
        Nu(t);
      default:
        (ch(n, t), (t = ue = Lf(t, Sn)), (t = uh(n, t, Sn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? _r(e) : (ue = t));
  }
  function al(e, t, n, a) {
    ((fn = fa = null), Nu(t), (Qa = null), (Ml = 0));
    var u = t.return;
    try {
      if (rg(e, u, t, n, ce)) {
        ((Be = 1), cr(e, Bt(n, e.current)), (ue = null));
        return;
      }
    } catch (o) {
      if (u !== null) throw ((ue = u), o);
      ((Be = 1), cr(e, Bt(n, e.current)), (ue = null));
      return;
    }
    t.flags & 32768
      ? (de || a === 1
          ? (e = !0)
          : Ia || (ce & 536870912) !== 0
            ? (e = !1)
            : ((kn = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Nt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Fh(t, e))
      : _r(t);
  }
  function _r(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fh(t, kn);
        return;
      }
      e = t.return;
      var n = og(t.alternate, t, Sn);
      if (n !== null) {
        ue = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ue = t;
        return;
      }
      ue = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function Fh(e, t) {
    do {
      var n = cg(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (ue = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        ue = e;
        return;
      }
      ue = e = n;
    } while (e !== null);
    ((Be = 6), (ue = null));
  }
  function kh(e, t, n, a, u, o, d, m, S) {
    e.cancelPendingCommit = null;
    do Ar();
    while (Ze !== 0);
    if ((ge & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((o = t.lanes | t.childLanes),
        (o |= Ps),
        Wy(e, n, o, d, m, S),
        e === Re && ((ue = Re = null), (ce = 0)),
        (tl = t),
        (Vn = e),
        (En = n),
        (ro = o),
        (so = u),
        (Oh = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Eg(Ti, function () {
              return (Qh(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = D.T), (D.T = null), (u = G.p), (G.p = 2), (d = ge), (ge |= 4));
        try {
          fg(e, t, n);
        } finally {
          ((ge = d), (G.p = u), (D.T = a));
        }
      }
      ((Ze = 1), Yh(), Gh(), Vh());
    }
  }
  function Yh() {
    if (Ze === 1) {
      Ze = 0;
      var e = Vn,
        t = tl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = D.T), (D.T = null));
        var a = G.p;
        G.p = 2;
        var u = ge;
        ge |= 4;
        try {
          Eh(t, e);
          var o = _o,
            d = Cf(e.containerInfo),
            m = o.focusedElem,
            S = o.selectionRange;
          if (
            d !== m &&
            m &&
            m.ownerDocument &&
            Rf(m.ownerDocument.documentElement, m)
          ) {
            if (S !== null && Zs(m)) {
              var R = S.start,
                M = S.end;
              if ((M === void 0 && (M = R), "selectionStart" in m))
                ((m.selectionStart = R),
                  (m.selectionEnd = Math.min(M, m.value.length)));
              else {
                var q = m.ownerDocument || document,
                  w = (q && q.defaultView) || window;
                if (w.getSelection) {
                  var j = w.getSelection(),
                    Z = m.textContent.length,
                    I = Math.min(S.start, Z),
                    Ne = S.end === void 0 ? I : Math.min(S.end, Z);
                  !j.extend && I > Ne && ((d = Ne), (Ne = I), (I = d));
                  var A = Tf(m, I),
                    _ = Tf(m, Ne);
                  if (
                    A &&
                    _ &&
                    (j.rangeCount !== 1 ||
                      j.anchorNode !== A.node ||
                      j.anchorOffset !== A.offset ||
                      j.focusNode !== _.node ||
                      j.focusOffset !== _.offset)
                  ) {
                    var T = q.createRange();
                    (T.setStart(A.node, A.offset),
                      j.removeAllRanges(),
                      I > Ne
                        ? (j.addRange(T), j.extend(_.node, _.offset))
                        : (T.setEnd(_.node, _.offset), j.addRange(T)));
                  }
                }
              }
            }
            for (q = [], j = m; (j = j.parentNode); )
              j.nodeType === 1 &&
                q.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (
              typeof m.focus == "function" && m.focus(), m = 0;
              m < q.length;
              m++
            ) {
              var L = q[m];
              ((L.element.scrollLeft = L.left), (L.element.scrollTop = L.top));
            }
          }
          ((Ur = !!Eo), (_o = Eo = null));
        } finally {
          ((ge = u), (G.p = a), (D.T = n));
        }
      }
      ((e.current = t), (Ze = 2));
    }
  }
  function Gh() {
    if (Ze === 2) {
      Ze = 0;
      var e = Vn,
        t = tl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = D.T), (D.T = null));
        var a = G.p;
        G.p = 2;
        var u = ge;
        ge |= 4;
        try {
          gh(e, t.alternate, t);
        } finally {
          ((ge = u), (G.p = a), (D.T = n));
        }
      }
      Ze = 3;
    }
  }
  function Vh() {
    if (Ze === 4 || Ze === 3) {
      ((Ze = 0), Yy());
      var e = Vn,
        t = tl,
        n = En,
        a = Oh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ze = 5)
        : ((Ze = 0), (tl = Vn = null), Xh(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (
        (u === 0 && (Gn = null),
        Cs(n),
        (t = t.stateNode),
        St && typeof St.onCommitFiberRoot == "function")
      )
        try {
          St.onCommitFiberRoot(gl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = D.T), (u = G.p), (G.p = 2), (D.T = null));
        try {
          for (var o = e.onRecoverableError, d = 0; d < a.length; d++) {
            var m = a[d];
            o(m.value, { componentStack: m.stack });
          }
        } finally {
          ((D.T = t), (G.p = u));
        }
      }
      ((En & 3) !== 0 && Ar(),
        It(e),
        (u = e.pendingLanes),
        (n & 261930) !== 0 && (u & 42) !== 0
          ? e === uo
            ? Pl++
            : ((Pl = 0), (uo = e))
          : (Pl = 0),
        Il(0));
    }
  }
  function Xh(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Dl(t)));
  }
  function Ar() {
    return (Yh(), Gh(), Vh(), Qh());
  }
  function Qh() {
    if (Ze !== 5) return !1;
    var e = Vn,
      t = ro;
    ro = 0;
    var n = Cs(En),
      a = D.T,
      u = G.p;
    try {
      ((G.p = 32 > n ? 32 : n), (D.T = null), (n = so), (so = null));
      var o = Vn,
        d = En;
      if (((Ze = 0), (tl = Vn = null), (En = 0), (ge & 6) !== 0))
        throw Error(s(331));
      var m = ge;
      if (
        ((ge |= 4),
        Rh(o.current),
        Ah(o, o.current, d, n),
        (ge = m),
        Il(0, !1),
        St && typeof St.onPostCommitFiberRoot == "function")
      )
        try {
          St.onPostCommitFiberRoot(gl, o);
        } catch {}
      return !0;
    } finally {
      ((G.p = u), (D.T = a), Xh(e, t));
    }
  }
  function Zh(e, t, n) {
    ((t = Bt(n, t)),
      (t = Fu(e.stateNode, t, 2)),
      (e = Ln(e, t, 2)),
      e !== null && (bl(e, 2), It(e)));
  }
  function Se(e, t, n) {
    if (e.tag === 3) Zh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zh(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(a)))
          ) {
            ((e = Bt(n, e)),
              (n = Kd(2)),
              (a = Ln(t, n, 2)),
              a !== null && (Jd(n, a, t, e), bl(a, 2), It(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function fo(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new mg();
      var u = new Set();
      a.set(t, u);
    } else ((u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u)));
    u.has(n) ||
      ((ao = !0), u.add(n), (e = bg.bind(null, e, t, n)), t.then(e, e));
  }
  function bg(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Re === e &&
        (ce & n) === n &&
        (Be === 4 || (Be === 3 && (ce & 62914560) === ce && 300 > xt() - vr)
          ? (ge & 2) === 0 && nl(e, 0)
          : (lo |= n),
        el === ce && (el = 0)),
      It(e));
  }
  function Kh(e, t) {
    (t === 0 && (t = kc()), (e = ua(e, t)), e !== null && (bl(e, t), It(e)));
  }
  function xg(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Kh(e, n));
  }
  function Sg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (a !== null && a.delete(t), Kh(e, n));
  }
  function Eg(e, t) {
    return As(e, t);
  }
  var Nr = null,
    ll = null,
    ho = !1,
    Tr = !1,
    mo = !1,
    Qn = 0;
  function It(e) {
    (e !== ll &&
      e.next === null &&
      (ll === null ? (Nr = ll = e) : (ll = ll.next = e)),
      (Tr = !0),
      ho || ((ho = !0), Ag()));
  }
  function Il(e, t) {
    if (!mo && Tr) {
      mo = !0;
      do
        for (var n = !1, a = Nr; a !== null; ) {
          if (e !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var o = 0;
            else {
              var d = a.suspendedLanes,
                m = a.pingedLanes;
              ((o = (1 << (31 - Et(42 | e) + 1)) - 1),
                (o &= u & ~(d & ~m)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), Ph(a, o));
          } else
            ((o = ce),
              (o = Oi(
                a,
                a === Re ? o : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || vl(a, o) || ((n = !0), Ph(a, o)));
          a = a.next;
        }
      while (n);
      mo = !1;
    }
  }
  function _g() {
    Jh();
  }
  function Jh() {
    Tr = ho = !1;
    var e = 0;
    Qn !== 0 && Bg() && (e = Qn);
    for (var t = xt(), n = null, a = Nr; a !== null; ) {
      var u = a.next,
        o = $h(a, t);
      (o === 0
        ? ((a.next = null),
          n === null ? (Nr = u) : (n.next = u),
          u === null && (ll = n))
        : ((n = a), (e !== 0 || (o & 3) !== 0) && (Tr = !0)),
        (a = u));
    }
    ((Ze !== 0 && Ze !== 5) || Il(e), Qn !== 0 && (Qn = 0));
  }
  function $h(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        u = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;
    ) {
      var d = 31 - Et(o),
        m = 1 << d,
        S = u[d];
      (S === -1
        ? ((m & n) === 0 || (m & a) !== 0) && (u[d] = $y(m, t))
        : S <= t && (e.expiredLanes |= m),
        (o &= ~m));
    }
    if (
      ((t = Re),
      (n = ce),
      (n = Oi(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      n === 0 ||
        (e === t && (xe === 2 || xe === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ns(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || vl(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && Ns(a), Cs(n))) {
        case 2:
        case 8:
          n = qc;
          break;
        case 32:
          n = Ti;
          break;
        case 268435456:
          n = Fc;
          break;
        default:
          n = Ti;
      }
      return (
        (a = Wh.bind(null, e)),
        (n = As(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && Ns(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Wh(e, t) {
    if (Ze !== 0 && Ze !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Ar() && e.callbackNode !== n) return null;
    var a = ce;
    return (
      (a = Oi(
        e,
        e === Re ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (jh(e, a, t),
          $h(e, xt()),
          e.callbackNode != null && e.callbackNode === n
            ? Wh.bind(null, e)
            : null)
    );
  }
  function Ph(e, t) {
    if (Ar()) return null;
    jh(e, t, !0);
  }
  function Ag() {
    Ug(function () {
      (ge & 6) !== 0 ? As(Hc, _g) : Jh();
    });
  }
  function po() {
    if (Qn === 0) {
      var e = Ga;
      (e === 0 && ((e = Ri), (Ri <<= 1), (Ri & 261888) === 0 && (Ri = 256)),
        (Qn = e));
    }
    return Qn;
  }
  function Ih(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Bi("" + e);
  }
  function em(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Ng(e, t, n, a, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var o = Ih((u[ct] || null).action),
        d = a.submitter;
      d &&
        ((t = (t = d[ct] || null)
          ? Ih(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((o = t), (d = null)));
      var m = new Hi("action", "action", null, a, u);
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Qn !== 0) {
                  var S = d ? em(u, d) : new FormData(u);
                  Bu(
                    n,
                    { pending: !0, data: S, method: u.method, action: o },
                    null,
                    S,
                  );
                }
              } else
                typeof o == "function" &&
                  (m.preventDefault(),
                  (S = d ? em(u, d) : new FormData(u)),
                  Bu(
                    n,
                    { pending: !0, data: S, method: u.method, action: o },
                    o,
                    S,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var yo = 0; yo < Ws.length; yo++) {
    var go = Ws[yo],
      Tg = go.toLowerCase(),
      Rg = go[0].toUpperCase() + go.slice(1);
    Vt(Tg, "on" + Rg);
  }
  (Vt(zf, "onAnimationEnd"),
    Vt(jf, "onAnimationIteration"),
    Vt(Df, "onAnimationStart"),
    Vt("dblclick", "onDoubleClick"),
    Vt("focusin", "onFocus"),
    Vt("focusout", "onBlur"),
    Vt(G0, "onTransitionRun"),
    Vt(V0, "onTransitionStart"),
    Vt(X0, "onTransitionCancel"),
    Vt(Bf, "onTransitionEnd"),
    wa("onMouseEnter", ["mouseout", "mouseover"]),
    wa("onMouseLeave", ["mouseout", "mouseover"]),
    wa("onPointerEnter", ["pointerout", "pointerover"]),
    wa("onPointerLeave", ["pointerout", "pointerover"]),
    la(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    la(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    la("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    la(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    la(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    la(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ei =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Cg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ei),
    );
  function tm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        u = a.event;
      a = a.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var m = a[d],
              S = m.instance,
              R = m.currentTarget;
            if (((m = m.listener), S !== o && u.isPropagationStopped()))
              break e;
            ((o = m), (u.currentTarget = R));
            try {
              o(u);
            } catch (M) {
              ki(M);
            }
            ((u.currentTarget = null), (o = S));
          }
        else
          for (d = 0; d < a.length; d++) {
            if (
              ((m = a[d]),
              (S = m.instance),
              (R = m.currentTarget),
              (m = m.listener),
              S !== o && u.isPropagationStopped())
            )
              break e;
            ((o = m), (u.currentTarget = R));
            try {
              o(u);
            } catch (M) {
              ki(M);
            }
            ((u.currentTarget = null), (o = S));
          }
      }
    }
  }
  function oe(e, t) {
    var n = t[ws];
    n === void 0 && (n = t[ws] = new Set());
    var a = e + "__bubble";
    n.has(a) || (nm(t, e, 2, !1), n.add(a));
  }
  function vo(e, t, n) {
    var a = 0;
    (t && (a |= 4), nm(n, e, a, t));
  }
  var Rr = "_reactListening" + Math.random().toString(36).slice(2);
  function bo(e) {
    if (!e[Rr]) {
      ((e[Rr] = !0),
        Kc.forEach(function (n) {
          n !== "selectionchange" && (Cg.has(n) || vo(n, !1, e), vo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Rr] || ((t[Rr] = !0), vo("selectionchange", !1, t));
    }
  }
  function nm(e, t, n, a) {
    switch (zm(t)) {
      case 2:
        var u = n1;
        break;
      case 8:
        u = a1;
        break;
      default:
        u = Bo;
    }
    ((n = u.bind(null, t, n, e)),
      (u = void 0),
      !Hs ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: u })
          : e.addEventListener(t, n, !0)
        : u !== void 0
          ? e.addEventListener(t, n, { passive: u })
          : e.addEventListener(t, n, !1));
  }
  function xo(e, t, n, a, u) {
    var o = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var m = a.stateNode.containerInfo;
          if (m === u) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var S = d.tag;
              if ((S === 3 || S === 4) && d.stateNode.containerInfo === u)
                return;
              d = d.return;
            }
          for (; m !== null; ) {
            if (((d = Ta(m)), d === null)) return;
            if (((S = d.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = o = d;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    sf(function () {
      var R = o,
        M = Us(n),
        q = [];
      e: {
        var w = Mf.get(e);
        if (w !== void 0) {
          var j = Hi,
            Z = e;
          switch (e) {
            case "keypress":
              if (Ui(n) === 0) break e;
            case "keydown":
            case "keyup":
              j = S0;
              break;
            case "focusin":
              ((Z = "focus"), (j = Ys));
              break;
            case "focusout":
              ((Z = "blur"), (j = Ys));
              break;
            case "beforeblur":
            case "afterblur":
              j = Ys;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = cf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = o0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = A0;
              break;
            case zf:
            case jf:
            case Df:
              j = d0;
              break;
            case Bf:
              j = T0;
              break;
            case "scroll":
            case "scrollend":
              j = s0;
              break;
            case "wheel":
              j = C0;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = m0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = df;
              break;
            case "toggle":
            case "beforetoggle":
              j = O0;
          }
          var I = (t & 4) !== 0,
            Ne = !I && (e === "scroll" || e === "scrollend"),
            A = I ? (w !== null ? w + "Capture" : null) : w;
          I = [];
          for (var _ = R, T; _ !== null; ) {
            var L = _;
            if (
              ((T = L.stateNode),
              (L = L.tag),
              (L !== 5 && L !== 26 && L !== 27) ||
                T === null ||
                A === null ||
                ((L = El(_, A)), L != null && I.push(ti(_, L, T))),
              Ne)
            )
              break;
            _ = _.return;
          }
          0 < I.length &&
            ((w = new j(w, Z, null, n, M)), q.push({ event: w, listeners: I }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((w = e === "mouseover" || e === "pointerover"),
            (j = e === "mouseout" || e === "pointerout"),
            w &&
              n !== Ms &&
              (Z = n.relatedTarget || n.fromElement) &&
              (Ta(Z) || Z[Na]))
          )
            break e;
          if (
            (j || w) &&
            ((w =
              M.window === M
                ? M
                : (w = M.ownerDocument)
                  ? w.defaultView || w.parentWindow
                  : window),
            j
              ? ((Z = n.relatedTarget || n.toElement),
                (j = R),
                (Z = Z ? Ta(Z) : null),
                Z !== null &&
                  ((Ne = f(Z)),
                  (I = Z.tag),
                  Z !== Ne || (I !== 5 && I !== 27 && I !== 6)) &&
                  (Z = null))
              : ((j = null), (Z = R)),
            j !== Z)
          ) {
            if (
              ((I = cf),
              (L = "onMouseLeave"),
              (A = "onMouseEnter"),
              (_ = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((I = df),
                (L = "onPointerLeave"),
                (A = "onPointerEnter"),
                (_ = "pointer")),
              (Ne = j == null ? w : Sl(j)),
              (T = Z == null ? w : Sl(Z)),
              (w = new I(L, _ + "leave", j, n, M)),
              (w.target = Ne),
              (w.relatedTarget = T),
              (L = null),
              Ta(M) === R &&
                ((I = new I(A, _ + "enter", Z, n, M)),
                (I.target = T),
                (I.relatedTarget = Ne),
                (L = I)),
              (Ne = L),
              j && Z)
            )
              t: {
                for (I = wg, A = j, _ = Z, T = 0, L = A; L; L = I(L)) T++;
                L = 0;
                for (var W = _; W; W = I(W)) L++;
                for (; 0 < T - L; ) ((A = I(A)), T--);
                for (; 0 < L - T; ) ((_ = I(_)), L--);
                for (; T--; ) {
                  if (A === _ || (_ !== null && A === _.alternate)) {
                    I = A;
                    break t;
                  }
                  ((A = I(A)), (_ = I(_)));
                }
                I = null;
              }
            else I = null;
            (j !== null && am(q, w, j, I, !1),
              Z !== null && Ne !== null && am(q, Ne, Z, I, !0));
          }
        }
        e: {
          if (
            ((w = R ? Sl(R) : window),
            (j = w.nodeName && w.nodeName.toLowerCase()),
            j === "select" || (j === "input" && w.type === "file"))
          )
            var me = xf;
          else if (vf(w))
            if (Sf) me = F0;
            else {
              me = H0;
              var J = L0;
            }
          else
            ((j = w.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (w.type !== "checkbox" && w.type !== "radio")
                ? R && Bs(R.elementType) && (me = xf)
                : (me = q0));
          if (me && (me = me(e, R))) {
            bf(q, me, n, M);
            break e;
          }
          (J && J(e, w, R),
            e === "focusout" &&
              R &&
              w.type === "number" &&
              R.memoizedProps.value != null &&
              Ds(w, "number", w.value));
        }
        switch (((J = R ? Sl(R) : window), e)) {
          case "focusin":
            (vf(J) || J.contentEditable === "true") &&
              ((Ma = J), (Ks = R), (Ol = null));
            break;
          case "focusout":
            Ol = Ks = Ma = null;
            break;
          case "mousedown":
            Js = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Js = !1), wf(q, n, M));
            break;
          case "selectionchange":
            if (Y0) break;
          case "keydown":
          case "keyup":
            wf(q, n, M);
        }
        var re;
        if (Vs)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          Ba
            ? yf(e, n) && (fe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (fe = "onCompositionStart");
        (fe &&
          (hf &&
            n.locale !== "ko" &&
            (Ba || fe !== "onCompositionStart"
              ? fe === "onCompositionEnd" && Ba && (re = uf())
              : ((On = M),
                (qs = "value" in On ? On.value : On.textContent),
                (Ba = !0))),
          (J = Cr(R, fe)),
          0 < J.length &&
            ((fe = new ff(fe, e, null, n, M)),
            q.push({ event: fe, listeners: J }),
            re
              ? (fe.data = re)
              : ((re = gf(n)), re !== null && (fe.data = re)))),
          (re = j0 ? D0(e, n) : B0(e, n)) &&
            ((fe = Cr(R, "onBeforeInput")),
            0 < fe.length &&
              ((J = new ff("onBeforeInput", "beforeinput", null, n, M)),
              q.push({ event: J, listeners: fe }),
              (J.data = re))),
          Ng(q, e, R, n, M));
      }
      tm(q, t);
    });
  }
  function ti(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Cr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var u = e,
        o = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          o === null ||
          ((u = El(e, n)),
          u != null && a.unshift(ti(e, u, o)),
          (u = El(e, t)),
          u != null && a.push(ti(e, u, o))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function wg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function am(e, t, n, a, u) {
    for (var o = t._reactName, d = []; n !== null && n !== a; ) {
      var m = n,
        S = m.alternate,
        R = m.stateNode;
      if (((m = m.tag), S !== null && S === a)) break;
      ((m !== 5 && m !== 26 && m !== 27) ||
        R === null ||
        ((S = R),
        u
          ? ((R = El(n, o)), R != null && d.unshift(ti(n, R, S)))
          : u || ((R = El(n, o)), R != null && d.push(ti(n, R, S)))),
        (n = n.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Og = /\r\n?/g,
    zg = /\u0000|\uFFFD/g;
  function lm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Og,
        `
`,
      )
      .replace(zg, "");
  }
  function im(e, t) {
    return ((t = lm(t)), lm(e) === t);
  }
  function Ae(e, t, n, a, u, o) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || za(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            za(e, "" + a);
        break;
      case "className":
        ji(e, "class", a);
        break;
      case "tabIndex":
        ji(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ji(e, n, a);
        break;
      case "style":
        lf(e, a, o);
        break;
      case "data":
        if (t !== "object") {
          ji(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((a = Bi("" + a)), e.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (t !== "input" && Ae(e, t, "name", u.name, u, null),
                Ae(e, t, "formEncType", u.formEncType, u, null),
                Ae(e, t, "formMethod", u.formMethod, u, null),
                Ae(e, t, "formTarget", u.formTarget, u, null))
              : (Ae(e, t, "encType", u.encType, u, null),
                Ae(e, t, "method", u.method, u, null),
                Ae(e, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((a = Bi("" + a)), e.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (e.onclick = sn);
        break;
      case "onScroll":
        a != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && oe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((n = a.__html), n != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = n;
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
        ((n = Bi("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
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
          ? e.setAttribute(n, "" + a)
          : e.removeAttribute(n);
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
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
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
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case "popover":
        (oe("beforetoggle", e), oe("toggle", e), zi(e, "popover", a));
        break;
      case "xlinkActuate":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        zi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = i0.get(n) || n), zi(e, n, a));
    }
  }
  function So(e, t, n, a, u, o) {
    switch (n) {
      case "style":
        lf(e, a, o);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((n = a.__html), n != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? za(e, a)
          : (typeof a == "number" || typeof a == "bigint") && za(e, "" + a);
        break;
      case "onScroll":
        a != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && oe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = sn);
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
        if (!Jc.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (t = n.slice(2, u ? n.length - 7 : void 0)),
              (o = e[ct] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && e.removeEventListener(t, o, u),
              typeof a == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, u));
              break e;
            }
            n in e
              ? (e[n] = a)
              : a === !0
                ? e.setAttribute(n, "")
                : zi(e, n, a);
          }
    }
  }
  function nt(e, t, n) {
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
        (oe("error", e), oe("load", e));
        var a = !1,
          u = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var d = n[o];
            if (d != null)
              switch (o) {
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
                  Ae(e, t, o, d, n, null);
              }
          }
        (u && Ae(e, t, "srcSet", n.srcSet, n, null),
          a && Ae(e, t, "src", n.src, n, null));
        return;
      case "input":
        oe("invalid", e);
        var m = (o = d = u = null),
          S = null,
          R = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var M = n[a];
            if (M != null)
              switch (a) {
                case "name":
                  u = M;
                  break;
                case "type":
                  d = M;
                  break;
                case "checked":
                  S = M;
                  break;
                case "defaultChecked":
                  R = M;
                  break;
                case "value":
                  o = M;
                  break;
                case "defaultValue":
                  m = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null) throw Error(s(137, t));
                  break;
                default:
                  Ae(e, t, a, M, n, null);
              }
          }
        ef(e, o, m, S, R, d, u, !1);
        return;
      case "select":
        (oe("invalid", e), (a = d = o = null));
        for (u in n)
          if (n.hasOwnProperty(u) && ((m = n[u]), m != null))
            switch (u) {
              case "value":
                o = m;
                break;
              case "defaultValue":
                d = m;
                break;
              case "multiple":
                a = m;
              default:
                Ae(e, t, u, m, n, null);
            }
        ((t = o),
          (n = d),
          (e.multiple = !!a),
          t != null ? Oa(e, !!a, t, !1) : n != null && Oa(e, !!a, n, !0));
        return;
      case "textarea":
        (oe("invalid", e), (o = u = a = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((m = n[d]), m != null))
            switch (d) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                u = m;
                break;
              case "children":
                o = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(s(91));
                break;
              default:
                Ae(e, t, d, m, n, null);
            }
        nf(e, a, u, o);
        return;
      case "option":
        for (S in n)
          n.hasOwnProperty(S) &&
            ((a = n[S]), a != null) &&
            (S === "selected"
              ? (e.selected =
                  a && typeof a != "function" && typeof a != "symbol")
              : Ae(e, t, S, a, n, null));
        return;
      case "dialog":
        (oe("beforetoggle", e),
          oe("toggle", e),
          oe("cancel", e),
          oe("close", e));
        break;
      case "iframe":
      case "object":
        oe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ei.length; a++) oe(ei[a], e);
        break;
      case "image":
        (oe("error", e), oe("load", e));
        break;
      case "details":
        oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (oe("error", e), oe("load", e));
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
        for (R in n)
          if (n.hasOwnProperty(R) && ((a = n[R]), a != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ae(e, t, R, a, n, null);
            }
        return;
      default:
        if (Bs(t)) {
          for (M in n)
            n.hasOwnProperty(M) &&
              ((a = n[M]), a !== void 0 && So(e, t, M, a, n, void 0));
          return;
        }
    }
    for (m in n)
      n.hasOwnProperty(m) && ((a = n[m]), a != null && Ae(e, t, m, a, n, null));
  }
  function jg(e, t, n, a) {
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
          o = null,
          d = null,
          m = null,
          S = null,
          R = null,
          M = null;
        for (j in n) {
          var q = n[j];
          if (n.hasOwnProperty(j) && q != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = q;
              default:
                a.hasOwnProperty(j) || Ae(e, t, j, null, a, q);
            }
        }
        for (var w in a) {
          var j = a[w];
          if (((q = n[w]), a.hasOwnProperty(w) && (j != null || q != null)))
            switch (w) {
              case "type":
                o = j;
                break;
              case "name":
                u = j;
                break;
              case "checked":
                R = j;
                break;
              case "defaultChecked":
                M = j;
                break;
              case "value":
                d = j;
                break;
              case "defaultValue":
                m = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(s(137, t));
                break;
              default:
                j !== q && Ae(e, t, w, j, a, q);
            }
        }
        js(e, d, m, S, R, M, o, u);
        return;
      case "select":
        j = d = m = w = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                j = S;
              default:
                a.hasOwnProperty(o) || Ae(e, t, o, null, a, S);
            }
        for (u in a)
          if (
            ((o = a[u]),
            (S = n[u]),
            a.hasOwnProperty(u) && (o != null || S != null))
          )
            switch (u) {
              case "value":
                w = o;
                break;
              case "defaultValue":
                m = o;
                break;
              case "multiple":
                d = o;
              default:
                o !== S && Ae(e, t, u, o, a, S);
            }
        ((t = m),
          (n = d),
          (a = j),
          w != null
            ? Oa(e, !!n, w, !1)
            : !!a != !!n &&
              (t != null ? Oa(e, !!n, t, !0) : Oa(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        j = w = null;
        for (m in n)
          if (
            ((u = n[m]),
            n.hasOwnProperty(m) && u != null && !a.hasOwnProperty(m))
          )
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ae(e, t, m, null, a, u);
            }
        for (d in a)
          if (
            ((u = a[d]),
            (o = n[d]),
            a.hasOwnProperty(d) && (u != null || o != null))
          )
            switch (d) {
              case "value":
                w = u;
                break;
              case "defaultValue":
                j = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== o && Ae(e, t, d, u, a, o);
            }
        tf(e, w, j);
        return;
      case "option":
        for (var Z in n)
          ((w = n[Z]),
            n.hasOwnProperty(Z) &&
              w != null &&
              !a.hasOwnProperty(Z) &&
              (Z === "selected" ? (e.selected = !1) : Ae(e, t, Z, null, a, w)));
        for (S in a)
          ((w = a[S]),
            (j = n[S]),
            a.hasOwnProperty(S) &&
              w !== j &&
              (w != null || j != null) &&
              (S === "selected"
                ? (e.selected =
                    w && typeof w != "function" && typeof w != "symbol")
                : Ae(e, t, S, w, a, j)));
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
        for (var I in n)
          ((w = n[I]),
            n.hasOwnProperty(I) &&
              w != null &&
              !a.hasOwnProperty(I) &&
              Ae(e, t, I, null, a, w));
        for (R in a)
          if (
            ((w = a[R]),
            (j = n[R]),
            a.hasOwnProperty(R) && w !== j && (w != null || j != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(s(137, t));
                break;
              default:
                Ae(e, t, R, w, a, j);
            }
        return;
      default:
        if (Bs(t)) {
          for (var Ne in n)
            ((w = n[Ne]),
              n.hasOwnProperty(Ne) &&
                w !== void 0 &&
                !a.hasOwnProperty(Ne) &&
                So(e, t, Ne, void 0, a, w));
          for (M in a)
            ((w = a[M]),
              (j = n[M]),
              !a.hasOwnProperty(M) ||
                w === j ||
                (w === void 0 && j === void 0) ||
                So(e, t, M, w, a, j));
          return;
        }
    }
    for (var A in n)
      ((w = n[A]),
        n.hasOwnProperty(A) &&
          w != null &&
          !a.hasOwnProperty(A) &&
          Ae(e, t, A, null, a, w));
    for (q in a)
      ((w = a[q]),
        (j = n[q]),
        !a.hasOwnProperty(q) ||
          w === j ||
          (w == null && j == null) ||
          Ae(e, t, q, w, a, j));
  }
  function rm(e) {
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
  function Dg() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var u = n[a],
          o = u.transferSize,
          d = u.initiatorType,
          m = u.duration;
        if (o && m && rm(d)) {
          for (d = 0, m = u.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a],
              R = S.startTime;
            if (R > m) break;
            var M = S.transferSize,
              q = S.initiatorType;
            M &&
              rm(q) &&
              ((S = S.responseEnd), (d += M * (S < m ? 1 : (m - R) / (S - R))));
          }
          if ((--a, (t += (8 * (o + d)) / (u.duration / 1e3)), e++, 10 < e))
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
  var Eo = null,
    _o = null;
  function wr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function sm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function um(e, t) {
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
  function Ao(e, t) {
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
  var No = null;
  function Bg() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === No
        ? !1
        : ((No = e), !0)
      : ((No = null), !1);
  }
  var om = typeof setTimeout == "function" ? setTimeout : void 0,
    Mg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cm = typeof Promise == "function" ? Promise : void 0,
    Ug =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof cm < "u"
          ? function (e) {
              return cm.resolve(null).then(e).catch(Lg);
            }
          : om;
  function Lg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Zn(e) {
    return e === "head";
  }
  function fm(e, t) {
    var n = t,
      a = 0;
    do {
      var u = n.nextSibling;
      if ((e.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (e.removeChild(u), ul(t));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") ni(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), ni(n));
          for (var o = n.firstChild; o; ) {
            var d = o.nextSibling,
              m = o.nodeName;
            (o[xl] ||
              m === "SCRIPT" ||
              m === "STYLE" ||
              (m === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = d));
          }
        } else n === "body" && ni(e.ownerDocument.body);
      n = u;
    } while (n);
    ul(t);
  }
  function dm(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = a;
    } while (n);
  }
  function To(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (To(n), Os(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Hg(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[xl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((o = e.getAttribute("rel")),
                o === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== u.rel ||
                e.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((o = e.getAttribute("src")),
                (o !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  o &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var o = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === o) return e;
      } else return e;
      if (((e = qt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function qg(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = qt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function hm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = qt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ro(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Co(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Fg(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function qt(e) {
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
  var wo = null;
  function mm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return qt(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function pm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ym(e, t, n) {
    switch (((t = wr(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ni(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Os(e);
  }
  var Ft = new Map(),
    gm = new Set();
  function Or(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var _n = G.d;
  G.d = { f: kg, r: Yg, D: Gg, C: Vg, L: Xg, m: Qg, X: Kg, S: Zg, M: Jg };
  function kg() {
    var e = _n.f(),
      t = Sr();
    return e || t;
  }
  function Yg(e) {
    var t = Ra(e);
    t !== null && t.tag === 5 && t.type === "form" ? Bd(t) : _n.r(e);
  }
  var il = typeof document > "u" ? null : document;
  function vm(e, t, n) {
    var a = il;
    if (a && typeof t == "string" && t) {
      var u = jt(t);
      ((u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        gm.has(u) ||
          (gm.add(u),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(u) === null &&
            ((t = a.createElement("link")),
            nt(t, "link", e),
            $e(t),
            a.head.appendChild(t))));
    }
  }
  function Gg(e) {
    (_n.D(e), vm("dns-prefetch", e, null));
  }
  function Vg(e, t) {
    (_n.C(e, t), vm("preconnect", e, t));
  }
  function Xg(e, t, n) {
    _n.L(e, t, n);
    var a = il;
    if (a && e && t) {
      var u = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + jt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + jt(n.imageSizes) + '"]'))
        : (u += '[href="' + jt(e) + '"]');
      var o = u;
      switch (t) {
        case "style":
          o = rl(e);
          break;
        case "script":
          o = sl(e);
      }
      Ft.has(o) ||
        ((e = x(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        Ft.set(o, e),
        a.querySelector(u) !== null ||
          (t === "style" && a.querySelector(ai(o))) ||
          (t === "script" && a.querySelector(li(o))) ||
          ((t = a.createElement("link")),
          nt(t, "link", e),
          $e(t),
          a.head.appendChild(t)));
    }
  }
  function Qg(e, t) {
    _n.m(e, t);
    var n = il;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]',
        o = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = sl(e);
      }
      if (
        !Ft.has(o) &&
        ((e = x({ rel: "modulepreload", href: e }, t)),
        Ft.set(o, e),
        n.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(li(o))) return;
        }
        ((a = n.createElement("link")),
          nt(a, "link", e),
          $e(a),
          n.head.appendChild(a));
      }
    }
  }
  function Zg(e, t, n) {
    _n.S(e, t, n);
    var a = il;
    if (a && e) {
      var u = Ca(a).hoistableStyles,
        o = rl(e);
      t = t || "default";
      var d = u.get(o);
      if (!d) {
        var m = { loading: 0, preload: null };
        if ((d = a.querySelector(ai(o)))) m.loading = 5;
        else {
          ((e = x({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Ft.get(o)) && Oo(e, n));
          var S = (d = a.createElement("link"));
          ($e(S),
            nt(S, "link", e),
            (S._p = new Promise(function (R, M) {
              ((S.onload = R), (S.onerror = M));
            })),
            S.addEventListener("load", function () {
              m.loading |= 1;
            }),
            S.addEventListener("error", function () {
              m.loading |= 2;
            }),
            (m.loading |= 4),
            zr(d, t, a));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: m }),
          u.set(o, d));
      }
    }
  }
  function Kg(e, t) {
    _n.X(e, t);
    var n = il;
    if (n && e) {
      var a = Ca(n).hoistableScripts,
        u = sl(e),
        o = a.get(u);
      o ||
        ((o = n.querySelector(li(u))),
        o ||
          ((e = x({ src: e, async: !0 }, t)),
          (t = Ft.get(u)) && zo(e, t),
          (o = n.createElement("script")),
          $e(o),
          nt(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(u, o));
    }
  }
  function Jg(e, t) {
    _n.M(e, t);
    var n = il;
    if (n && e) {
      var a = Ca(n).hoistableScripts,
        u = sl(e),
        o = a.get(u);
      o ||
        ((o = n.querySelector(li(u))),
        o ||
          ((e = x({ src: e, async: !0, type: "module" }, t)),
          (t = Ft.get(u)) && zo(e, t),
          (o = n.createElement("script")),
          $e(o),
          nt(o, "link", e),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(u, o));
    }
  }
  function bm(e, t, n, a) {
    var u = (u = se.current) ? Or(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = rl(n.href)),
            (n = Ca(u).hoistableStyles),
            (a = n.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = rl(n.href);
          var o = Ca(u).hoistableStyles,
            d = o.get(e);
          if (
            (d ||
              ((u = u.ownerDocument || u),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, d),
              (o = u.querySelector(ai(e))) &&
                !o._p &&
                ((d.instance = o), (d.state.loading = 5)),
              Ft.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ft.set(e, n),
                o || $g(u, e, n, d.state))),
            t && a === null)
          )
            throw Error(s(528, ""));
          return d;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = sl(n)),
              (n = Ca(u).hoistableScripts),
              (a = n.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function rl(e) {
    return 'href="' + jt(e) + '"';
  }
  function ai(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function xm(e) {
    return x({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function $g(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        nt(t, "link", n),
        $e(t),
        e.head.appendChild(t));
  }
  function sl(e) {
    return '[src="' + jt(e) + '"]';
  }
  function li(e) {
    return "script[async]" + e;
  }
  function Sm(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + jt(n.href) + '"]');
          if (a) return ((t.instance = a), $e(a), a);
          var u = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            $e(a),
            nt(a, "style", u),
            zr(a, n.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          u = rl(n.href);
          var o = e.querySelector(ai(u));
          if (o) return ((t.state.loading |= 4), (t.instance = o), $e(o), o);
          ((a = xm(n)),
            (u = Ft.get(u)) && Oo(a, u),
            (o = (e.ownerDocument || e).createElement("link")),
            $e(o));
          var d = o;
          return (
            (d._p = new Promise(function (m, S) {
              ((d.onload = m), (d.onerror = S));
            })),
            nt(o, "link", a),
            (t.state.loading |= 4),
            zr(o, n.precedence, e),
            (t.instance = o)
          );
        case "script":
          return (
            (o = sl(n.src)),
            (u = e.querySelector(li(o)))
              ? ((t.instance = u), $e(u), u)
              : ((a = n),
                (u = Ft.get(o)) && ((a = x({}, n)), zo(a, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                $e(u),
                nt(u, "link", a),
                e.head.appendChild(u),
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
        ((a = t.instance), (t.state.loading |= 4), zr(a, n.precedence, e));
    return t.instance;
  }
  function zr(e, t, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = a.length ? a[a.length - 1] : null,
        o = u,
        d = 0;
      d < a.length;
      d++
    ) {
      var m = a[d];
      if (m.dataset.precedence === t) o = m;
      else if (o !== u) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Oo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function zo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var jr = null;
  function Em(e, t, n) {
    if (jr === null) {
      var a = new Map(),
        u = (jr = new Map());
      u.set(n, a);
    } else ((u = jr), (a = u.get(n)), a || ((a = new Map()), u.set(n, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), n = n.getElementsByTagName(e), u = 0;
      u < n.length;
      u++
    ) {
      var o = n[u];
      if (
        !(
          o[xl] ||
          o[Pe] ||
          (e === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = o.getAttribute(t) || "";
        d = e + d;
        var m = a.get(d);
        m ? m.push(o) : a.set(d, [o]);
      }
    }
    return a;
  }
  function _m(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Wg(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
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
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
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
  function Am(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Pg(e, t, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = rl(a.href),
          o = t.querySelector(ai(u));
        if (o) {
          ((t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Dr.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = o),
            $e(o));
          return;
        }
        ((o = t.ownerDocument || t),
          (a = xm(a)),
          (u = Ft.get(u)) && Oo(a, u),
          (o = o.createElement("link")),
          $e(o));
        var d = o;
        ((d._p = new Promise(function (m, S) {
          ((d.onload = m), (d.onerror = S));
        })),
          nt(o, "link", a),
          (n.instance = o));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Dr.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var jo = 0;
  function Ig(e, t) {
    return (
      e.stylesheets && e.count === 0 && Mr(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Mr(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            }, 6e4 + t);
            0 < e.imgBytes && jo === 0 && (jo = 62500 * Dg());
            var u = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Mr(e, e.stylesheets), e.unsuspend))
                ) {
                  var o = e.unsuspend;
                  ((e.unsuspend = null), o());
                }
              },
              (e.imgBytes > jo ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Dr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Mr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Br = null;
  function Mr(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Br = new Map()),
        t.forEach(e1, e),
        (Br = null),
        Dr.call(e)));
  }
  function e1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Br.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Br.set(e, n));
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < u.length;
          o++
        ) {
          var d = u[o];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (a = d));
        }
        a && n.set(null, a);
      }
      ((u = t.instance),
        (d = u.getAttribute("data-precedence")),
        (o = n.get(d) || a),
        o === a && n.set(null, u),
        n.set(d, u),
        this.count++,
        (a = Dr.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        o
          ? o.parentNode.insertBefore(u, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ii = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0,
  };
  function t1(e, t, n, a, u, o, d, m, S) {
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
      (this.expirationTimes = Ts(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ts(0)),
      (this.hiddenUpdates = Ts(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = o),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function Nm(e, t, n, a, u, o, d, m, S, R, M, q) {
    return (
      (e = new t1(e, t, n, d, S, R, M, q, m)),
      (t = 1),
      o === !0 && (t |= 24),
      (o = At(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (t = cu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (o.memoizedState = { element: a, isDehydrated: n, cache: t }),
      mu(o),
      e
    );
  }
  function Tm(e) {
    return e ? ((e = Ha), e) : Ha;
  }
  function Rm(e, t, n, a, u, o) {
    ((u = Tm(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = Un(t)),
      (a.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (a.callback = o),
      (n = Ln(e, a, t)),
      n !== null && (yt(n, e, t), Ll(n, e, t)));
  }
  function Cm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Do(e, t) {
    (Cm(e, t), (e = e.alternate) && Cm(e, t));
  }
  function wm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ua(e, 67108864);
      (t !== null && yt(t, e, 67108864), Do(e, 67108864));
    }
  }
  function Om(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = wt();
      t = Rs(t);
      var n = ua(e, t);
      (n !== null && yt(n, e, t), Do(e, t));
    }
  }
  var Ur = !0;
  function n1(e, t, n, a) {
    var u = D.T;
    D.T = null;
    var o = G.p;
    try {
      ((G.p = 2), Bo(e, t, n, a));
    } finally {
      ((G.p = o), (D.T = u));
    }
  }
  function a1(e, t, n, a) {
    var u = D.T;
    D.T = null;
    var o = G.p;
    try {
      ((G.p = 8), Bo(e, t, n, a));
    } finally {
      ((G.p = o), (D.T = u));
    }
  }
  function Bo(e, t, n, a) {
    if (Ur) {
      var u = Mo(a);
      if (u === null) (xo(e, t, a, Lr, n), jm(e, a));
      else if (i1(u, e, t, n, a)) a.stopPropagation();
      else if ((jm(e, a), t & 4 && -1 < l1.indexOf(e))) {
        for (; u !== null; ) {
          var o = Ra(u);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var d = aa(o.pendingLanes);
                  if (d !== 0) {
                    var m = o;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                      var S = 1 << (31 - Et(d));
                      ((m.entanglements[1] |= S), (d &= ~S));
                    }
                    (It(o), (ge & 6) === 0 && ((br = xt() + 500), Il(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((m = ua(o, 2)), m !== null && yt(m, o, 2), Sr(), Do(o, 2));
            }
          if (((o = Mo(a)), o === null && xo(e, t, a, Lr, n), o === u)) break;
          u = o;
        }
        u !== null && a.stopPropagation();
      } else xo(e, t, a, null, n);
    }
  }
  function Mo(e) {
    return ((e = Us(e)), Uo(e));
  }
  var Lr = null;
  function Uo(e) {
    if (((Lr = null), (e = Ta(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Lr = e), null);
  }
  function zm(e) {
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
        switch (Gy()) {
          case Hc:
            return 2;
          case qc:
            return 8;
          case Ti:
          case Vy:
            return 32;
          case Fc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lo = !1,
    Kn = null,
    Jn = null,
    $n = null,
    ri = new Map(),
    si = new Map(),
    Wn = [],
    l1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function jm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        $n = null;
        break;
      case "pointerover":
      case "pointerout":
        ri.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        si.delete(t.pointerId);
    }
  }
  function ui(e, t, n, a, u, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: o,
          targetContainers: [u],
        }),
        t !== null && ((t = Ra(t)), t !== null && wm(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function i1(e, t, n, a, u) {
    switch (t) {
      case "focusin":
        return ((Kn = ui(Kn, e, t, n, a, u)), !0);
      case "dragenter":
        return ((Jn = ui(Jn, e, t, n, a, u)), !0);
      case "mouseover":
        return (($n = ui($n, e, t, n, a, u)), !0);
      case "pointerover":
        var o = u.pointerId;
        return (ri.set(o, ui(ri.get(o) || null, e, t, n, a, u)), !0);
      case "gotpointercapture":
        return (
          (o = u.pointerId),
          si.set(o, ui(si.get(o) || null, e, t, n, a, u)),
          !0
        );
    }
    return !1;
  }
  function Dm(e) {
    var t = Ta(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              Qc(e.priority, function () {
                Om(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = y(n)), t !== null)) {
            ((e.blockedOn = t),
              Qc(e.priority, function () {
                Om(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Hr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Mo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Ms = a), n.target.dispatchEvent(a), (Ms = null));
      } else return ((t = Ra(n)), t !== null && wm(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Bm(e, t, n) {
    Hr(e) && n.delete(t);
  }
  function r1() {
    ((Lo = !1),
      Kn !== null && Hr(Kn) && (Kn = null),
      Jn !== null && Hr(Jn) && (Jn = null),
      $n !== null && Hr($n) && ($n = null),
      ri.forEach(Bm),
      si.forEach(Bm));
  }
  function qr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Lo ||
        ((Lo = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, r1)));
  }
  var Fr = null;
  function Mm(e) {
    Fr !== e &&
      ((Fr = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Fr === e && (Fr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            u = e[t + 2];
          if (typeof a != "function") {
            if (Uo(a || n) === null) continue;
            break;
          }
          var o = Ra(n);
          o !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Bu(o, { pending: !0, data: u, method: n.method, action: a }, a, u));
        }
      }));
  }
  function ul(e) {
    function t(S) {
      return qr(S, e);
    }
    (Kn !== null && qr(Kn, e),
      Jn !== null && qr(Jn, e),
      $n !== null && qr($n, e),
      ri.forEach(t),
      si.forEach(t));
    for (var n = 0; n < Wn.length; n++) {
      var a = Wn[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
      (Dm(n), n.blockedOn === null && Wn.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var u = n[a],
          o = n[a + 1],
          d = u[ct] || null;
        if (typeof o == "function") d || Mm(n);
        else if (d) {
          var m = null;
          if (o && o.hasAttribute("formAction")) {
            if (((u = o), (d = o[ct] || null))) m = d.formAction;
            else if (Uo(u) !== null) continue;
          } else m = d.action;
          (typeof m == "function" ? (n[a + 1] = m) : (n.splice(a, 3), (a -= 3)),
            Mm(n));
        }
      }
  }
  function Um() {
    function e(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (u = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function Ho(e) {
    this._internalRoot = e;
  }
  ((kr.prototype.render = Ho.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var n = t.current,
        a = wt();
      Rm(n, a, e, t, null, null);
    }),
    (kr.prototype.unmount = Ho.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Rm(e.current, 2, null, e, null, null), Sr(), (t[Na] = null));
        }
      }));
  function kr(e) {
    this._internalRoot = e;
  }
  kr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++);
      (Wn.splice(n, 0, e), n === 0 && Dm(e));
    }
  };
  var Lm = l.version;
  if (Lm !== "19.2.4") throw Error(s(527, Lm, "19.2.4"));
  G.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? b(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var s1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yr.isDisabled && Yr.supportsFiber)
      try {
        ((gl = Yr.inject(s1)), (St = Yr));
      } catch {}
  }
  return (
    (ci.createRoot = function (e, t) {
      if (!c(e)) throw Error(s(299));
      var n = !1,
        a = "",
        u = Vd,
        o = Xd,
        d = Qd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = Nm(e, 1, !1, null, null, n, a, null, u, o, d, Um)),
        (e[Na] = t.current),
        bo(e),
        new Ho(t)
      );
    }),
    (ci.hydrateRoot = function (e, t, n) {
      if (!c(e)) throw Error(s(299));
      var a = !1,
        u = "",
        o = Vd,
        d = Xd,
        m = Qd,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (m = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (t = Nm(e, 1, !0, t, n ?? null, a, u, S, o, d, m, Um)),
        (t.context = Tm(null)),
        (n = t.current),
        (a = wt()),
        (a = Rs(a)),
        (u = Un(a)),
        (u.callback = null),
        Ln(n, u, a),
        (n = a),
        (t.current.lanes = n),
        bl(t, n),
        It(t),
        (e[Na] = t.current),
        bo(e),
        new kr(t)
      );
    }),
    (ci.version = "19.2.4"),
    ci
  );
}
var Zm;
function g1() {
  if (Zm) return ko.exports;
  Zm = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return (i(), (ko.exports = y1()), ko.exports);
}
var v1 = g1();
var Km = "popstate";
function Jm(i) {
  return (
    typeof i == "object" &&
    i != null &&
    "pathname" in i &&
    "search" in i &&
    "hash" in i &&
    "state" in i &&
    "key" in i
  );
}
function b1(i = {}) {
  function l(s, c) {
    let f = c.state?.masked,
      { pathname: h, search: y, hash: p } = f || s.location;
    return tc(
      "",
      { pathname: h, search: y, hash: p },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || "default",
      f
        ? {
            pathname: s.location.pathname,
            search: s.location.search,
            hash: s.location.hash,
          }
        : void 0,
    );
  }
  function r(s, c) {
    return typeof c == "string" ? c : pi(c);
  }
  return S1(l, r, null, i);
}
function ze(i, l) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(l);
}
function Kt(i, l) {
  if (!i) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function x1() {
  return Math.random().toString(36).substring(2, 10);
}
function $m(i, l) {
  return {
    usr: i.state,
    key: i.key,
    idx: l,
    masked: i.unstable_mask
      ? { pathname: i.pathname, search: i.search, hash: i.hash }
      : void 0,
  };
}
function tc(i, l, r = null, s, c) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof l == "string" ? cl(l) : l),
    state: r,
    key: (l && l.key) || s || x1(),
    unstable_mask: c,
  };
}
function pi({ pathname: i = "/", search: l = "", hash: r = "" }) {
  return (
    l && l !== "?" && (i += l.charAt(0) === "?" ? l : "?" + l),
    r && r !== "#" && (i += r.charAt(0) === "#" ? r : "#" + r),
    i
  );
}
function cl(i) {
  let l = {};
  if (i) {
    let r = i.indexOf("#");
    r >= 0 && ((l.hash = i.substring(r)), (i = i.substring(0, r)));
    let s = i.indexOf("?");
    (s >= 0 && ((l.search = i.substring(s)), (i = i.substring(0, s))),
      i && (l.pathname = i));
  }
  return l;
}
function S1(i, l, r, s = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = s,
    h = c.history,
    y = "POP",
    p = null,
    g = b();
  g == null && ((g = 0), h.replaceState({ ...h.state, idx: g }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function x() {
    y = "POP";
    let C = b(),
      k = C == null ? null : C - g;
    ((g = C), p && p({ action: y, location: U.location, delta: k }));
  }
  function B(C, k) {
    y = "PUSH";
    let K = Jm(C) ? C : tc(U.location, C, k);
    g = b() + 1;
    let Y = $m(K, g),
      ee = U.createHref(K.unstable_mask || K);
    try {
      h.pushState(Y, "", ee);
    } catch (ie) {
      if (ie instanceof DOMException && ie.name === "DataCloneError") throw ie;
      c.location.assign(ee);
    }
    f && p && p({ action: y, location: U.location, delta: 1 });
  }
  function F(C, k) {
    y = "REPLACE";
    let K = Jm(C) ? C : tc(U.location, C, k);
    g = b();
    let Y = $m(K, g),
      ee = U.createHref(K.unstable_mask || K);
    (h.replaceState(Y, "", ee),
      f && p && p({ action: y, location: U.location, delta: 0 }));
  }
  function O(C) {
    return E1(C);
  }
  let U = {
    get action() {
      return y;
    },
    get location() {
      return i(c, h);
    },
    listen(C) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        c.addEventListener(Km, x),
        (p = C),
        () => {
          (c.removeEventListener(Km, x), (p = null));
        }
      );
    },
    createHref(C) {
      return l(c, C);
    },
    createURL: O,
    encodeLocation(C) {
      let k = O(C);
      return { pathname: k.pathname, search: k.search, hash: k.hash };
    },
    push: B,
    replace: F,
    go(C) {
      return h.go(C);
    },
  };
  return U;
}
function E1(i, l = !1) {
  let r = "http://localhost";
  (typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    ze(r, "No window.location.(origin|href) available to create URL"));
  let s = typeof i == "string" ? i : pi(i);
  return (
    (s = s.replace(/ $/, "%20")),
    !l && s.startsWith("//") && (s = r + s),
    new URL(s, r)
  );
}
function Rp(i, l, r = "/") {
  return _1(i, l, r, !1);
}
function _1(i, l, r, s) {
  let c = typeof l == "string" ? cl(l) : l,
    f = Tn(c.pathname || "/", r);
  if (f == null) return null;
  let h = Cp(i);
  A1(h);
  let y = null;
  for (let p = 0; y == null && p < h.length; ++p) {
    let g = M1(f);
    y = D1(h[p], g, s);
  }
  return y;
}
function Cp(i, l = [], r = [], s = "", c = !1) {
  let f = (h, y, p = c, g) => {
    let b = {
      relativePath: g === void 0 ? h.path || "" : g,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: y,
      route: h,
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(s) && p) return;
      (ze(
        b.relativePath.startsWith(s),
        `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (b.relativePath = b.relativePath.slice(s.length)));
    }
    let x = tn([s, b.relativePath]),
      B = r.concat(b);
    (h.children &&
      h.children.length > 0 &&
      (ze(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${x}".`,
      ),
      Cp(h.children, l, B, x, p)),
      !(h.path == null && !h.index) &&
        l.push({ path: x, score: z1(x, h.index), routesMeta: B }));
  };
  return (
    i.forEach((h, y) => {
      if (h.path === "" || !h.path?.includes("?")) f(h, y);
      else for (let p of wp(h.path)) f(h, y, !0, p);
    }),
    l
  );
}
function wp(i) {
  let l = i.split("/");
  if (l.length === 0) return [];
  let [r, ...s] = l,
    c = r.endsWith("?"),
    f = r.replace(/\?$/, "");
  if (s.length === 0) return c ? [f, ""] : [f];
  let h = wp(s.join("/")),
    y = [];
  return (
    y.push(...h.map((p) => (p === "" ? f : [f, p].join("/")))),
    c && y.push(...h),
    y.map((p) => (i.startsWith("/") && p === "" ? "/" : p))
  );
}
function A1(i) {
  i.sort((l, r) =>
    l.score !== r.score
      ? r.score - l.score
      : j1(
          l.routesMeta.map((s) => s.childrenIndex),
          r.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var N1 = /^:[\w-]+$/,
  T1 = 3,
  R1 = 2,
  C1 = 1,
  w1 = 10,
  O1 = -2,
  Wm = (i) => i === "*";
function z1(i, l) {
  let r = i.split("/"),
    s = r.length;
  return (
    r.some(Wm) && (s += O1),
    l && (s += R1),
    r
      .filter((c) => !Wm(c))
      .reduce((c, f) => c + (N1.test(f) ? T1 : f === "" ? C1 : w1), s)
  );
}
function j1(i, l) {
  return i.length === l.length && i.slice(0, -1).every((s, c) => s === l[c])
    ? i[i.length - 1] - l[l.length - 1]
    : 0;
}
function D1(i, l, r = !1) {
  let { routesMeta: s } = i,
    c = {},
    f = "/",
    h = [];
  for (let y = 0; y < s.length; ++y) {
    let p = s[y],
      g = y === s.length - 1,
      b = f === "/" ? l : l.slice(f.length) || "/",
      x = is(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
        b,
      ),
      B = p.route;
    if (
      (!x &&
        g &&
        r &&
        !s[s.length - 1].route.index &&
        (x = is(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          b,
        )),
      !x)
    )
      return null;
    (Object.assign(c, x.params),
      h.push({
        params: c,
        pathname: tn([f, x.pathname]),
        pathnameBase: q1(tn([f, x.pathnameBase])),
        route: B,
      }),
      x.pathnameBase !== "/" && (f = tn([f, x.pathnameBase])));
  }
  return h;
}
function is(i, l) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [r, s] = B1(i.path, i.caseSensitive, i.end),
    c = l.match(r);
  if (!c) return null;
  let f = c[0],
    h = f.replace(/(.)\/+$/, "$1"),
    y = c.slice(1);
  return {
    params: s.reduce((g, { paramName: b, isOptional: x }, B) => {
      if (b === "*") {
        let O = y[B] || "";
        h = f.slice(0, f.length - O.length).replace(/(.)\/+$/, "$1");
      }
      const F = y[B];
      return (
        x && !F ? (g[b] = void 0) : (g[b] = (F || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: f,
    pathnameBase: h,
    pattern: i,
  };
}
function B1(i, l = !1, r = !0) {
  Kt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`,
  );
  let s = [],
    c =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (h, y, p, g, b) => {
          if ((s.push({ paramName: y, isOptional: p != null }), p)) {
            let x = b.charAt(g + h.length);
            return x && x !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    i.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (c += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (c += "\\/*$")
        : i !== "" && i !== "/" && (c += "(?:(?=\\/|$))"),
    [new RegExp(c, l ? void 0 : "i"), s]
  );
}
function M1(i) {
  try {
    return i
      .split("/")
      .map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
      .join("/");
  } catch (l) {
    return (
      Kt(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`,
      ),
      i
    );
  }
}
function Tn(i, l) {
  if (l === "/") return i;
  if (!i.toLowerCase().startsWith(l.toLowerCase())) return null;
  let r = l.endsWith("/") ? l.length - 1 : l.length,
    s = i.charAt(r);
  return s && s !== "/" ? null : i.slice(r) || "/";
}
var U1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function L1(i, l = "/") {
  let {
      pathname: r,
      search: s = "",
      hash: c = "",
    } = typeof i == "string" ? cl(i) : i,
    f;
  return (
    r
      ? ((r = r.replace(/\/\/+/g, "/")),
        r.startsWith("/") ? (f = Pm(r.substring(1), "/")) : (f = Pm(r, l)))
      : (f = l),
    { pathname: f, search: F1(s), hash: k1(c) }
  );
}
function Pm(i, l) {
  let r = l.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((c) => {
      c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Xo(i, l, r, s) {
  return `Cannot include a '${i}' character in a manually specified \`to.${l}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function H1(i) {
  return i.filter(
    (l, r) => r === 0 || (l.route.path && l.route.path.length > 0),
  );
}
function gc(i) {
  let l = H1(i);
  return l.map((r, s) => (s === l.length - 1 ? r.pathname : r.pathnameBase));
}
function us(i, l, r, s = !1) {
  let c;
  typeof i == "string"
    ? (c = cl(i))
    : ((c = { ...i }),
      ze(
        !c.pathname || !c.pathname.includes("?"),
        Xo("?", "pathname", "search", c),
      ),
      ze(
        !c.pathname || !c.pathname.includes("#"),
        Xo("#", "pathname", "hash", c),
      ),
      ze(!c.search || !c.search.includes("#"), Xo("#", "search", "hash", c)));
  let f = i === "" || c.pathname === "",
    h = f ? "/" : c.pathname,
    y;
  if (h == null) y = r;
  else {
    let x = l.length - 1;
    if (!s && h.startsWith("..")) {
      let B = h.split("/");
      for (; B[0] === ".."; ) (B.shift(), (x -= 1));
      c.pathname = B.join("/");
    }
    y = x >= 0 ? l[x] : "/";
  }
  let p = L1(c, y),
    g = h && h !== "/" && h.endsWith("/"),
    b = (f || h === ".") && r.endsWith("/");
  return (!p.pathname.endsWith("/") && (g || b) && (p.pathname += "/"), p);
}
var tn = (i) => i.join("/").replace(/\/\/+/g, "/"),
  q1 = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  F1 = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  k1 = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i),
  Y1 = class {
    constructor(i, l, r, s = !1) {
      ((this.status = i),
        (this.statusText = l || ""),
        (this.internal = s),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r));
    }
  };
function G1(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
function V1(i) {
  return (
    i
      .map((l) => l.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var Op =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function zp(i, l) {
  let r = i;
  if (typeof r != "string" || !U1.test(r))
    return { absoluteURL: void 0, isExternal: !1, to: r };
  let s = r,
    c = !1;
  if (Op)
    try {
      let f = new URL(window.location.href),
        h = r.startsWith("//") ? new URL(f.protocol + r) : new URL(r),
        y = Tn(h.pathname, l);
      h.origin === f.origin && y != null
        ? (r = y + h.search + h.hash)
        : (c = !0);
    } catch {
      Kt(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: s, isExternal: c, to: r };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var jp = ["POST", "PUT", "PATCH", "DELETE"];
new Set(jp);
var X1 = ["GET", ...jp];
new Set(X1);
var fl = N.createContext(null);
fl.displayName = "DataRouter";
var os = N.createContext(null);
os.displayName = "DataRouterState";
var Q1 = N.createContext(!1),
  Dp = N.createContext({ isTransitioning: !1 });
Dp.displayName = "ViewTransition";
var Z1 = N.createContext(new Map());
Z1.displayName = "Fetchers";
var K1 = N.createContext(null);
K1.displayName = "Await";
var Ot = N.createContext(null);
Ot.displayName = "Navigation";
var yi = N.createContext(null);
yi.displayName = "Location";
var ln = N.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ln.displayName = "Route";
var vc = N.createContext(null);
vc.displayName = "RouteError";
var Bp = "REACT_ROUTER_ERROR",
  J1 = "REDIRECT",
  $1 = "ROUTE_ERROR_RESPONSE";
function W1(i) {
  if (i.startsWith(`${Bp}:${J1}:{`))
    try {
      let l = JSON.parse(i.slice(28));
      if (
        typeof l == "object" &&
        l &&
        typeof l.status == "number" &&
        typeof l.statusText == "string" &&
        typeof l.location == "string" &&
        typeof l.reloadDocument == "boolean" &&
        typeof l.replace == "boolean"
      )
        return l;
    } catch {}
}
function P1(i) {
  if (i.startsWith(`${Bp}:${$1}:{`))
    try {
      let l = JSON.parse(i.slice(40));
      if (
        typeof l == "object" &&
        l &&
        typeof l.status == "number" &&
        typeof l.statusText == "string"
      )
        return new Y1(l.status, l.statusText, l.data);
    } catch {}
}
function I1(i, { relative: l } = {}) {
  ze(
    dl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: r, navigator: s } = N.useContext(Ot),
    { hash: c, pathname: f, search: h } = vi(i, { relative: l }),
    y = f;
  return (
    r !== "/" && (y = f === "/" ? r : tn([r, f])),
    s.createHref({ pathname: y, search: h, hash: c })
  );
}
function dl() {
  return N.useContext(yi) != null;
}
function Gt() {
  return (
    ze(
      dl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    N.useContext(yi).location
  );
}
var Mp =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Up(i) {
  N.useContext(Ot).static || N.useLayoutEffect(i);
}
function gi() {
  let { isDataRoute: i } = N.useContext(ln);
  return i ? dv() : ev();
}
function ev() {
  ze(
    dl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let i = N.useContext(fl),
    { basename: l, navigator: r } = N.useContext(Ot),
    { matches: s } = N.useContext(ln),
    { pathname: c } = Gt(),
    f = JSON.stringify(gc(s)),
    h = N.useRef(!1);
  return (
    Up(() => {
      h.current = !0;
    }),
    N.useCallback(
      (p, g = {}) => {
        if ((Kt(h.current, Mp), !h.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let b = us(p, JSON.parse(f), c, g.relative === "path");
        (i == null &&
          l !== "/" &&
          (b.pathname = b.pathname === "/" ? l : tn([l, b.pathname])),
          (g.replace ? r.replace : r.push)(b, g.state, g));
      },
      [l, r, f, c, i],
    )
  );
}
N.createContext(null);
function vi(i, { relative: l } = {}) {
  let { matches: r } = N.useContext(ln),
    { pathname: s } = Gt(),
    c = JSON.stringify(gc(r));
  return N.useMemo(() => us(i, JSON.parse(c), s, l === "path"), [i, c, s, l]);
}
function tv(i, l) {
  return Lp(i, l);
}
function Lp(i, l, r) {
  ze(
    dl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: s } = N.useContext(Ot),
    { matches: c } = N.useContext(ln),
    f = c[c.length - 1],
    h = f ? f.params : {},
    y = f ? f.pathname : "/",
    p = f ? f.pathnameBase : "/",
    g = f && f.route;
  {
    let C = (g && g.path) || "";
    qp(
      y,
      !g || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === "/" ? "*" : `${C}/*`}">.`,
    );
  }
  let b = Gt(),
    x;
  if (l) {
    let C = typeof l == "string" ? cl(l) : l;
    (ze(
      p === "/" || C.pathname?.startsWith(p),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${C.pathname}" was given in the \`location\` prop.`,
    ),
      (x = C));
  } else x = b;
  let B = x.pathname || "/",
    F = B;
  if (p !== "/") {
    let C = p.replace(/^\//, "").split("/");
    F = "/" + B.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let O = Rp(i, { pathname: F });
  (Kt(
    g || O != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `,
  ),
    Kt(
      O == null ||
        O[O.length - 1].route.element !== void 0 ||
        O[O.length - 1].route.Component !== void 0 ||
        O[O.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let U = rv(
    O &&
      O.map((C) =>
        Object.assign({}, C, {
          params: Object.assign({}, h, C.params),
          pathname: tn([
            p,
            s.encodeLocation
              ? s.encodeLocation(
                  C.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : C.pathname,
          ]),
          pathnameBase:
            C.pathnameBase === "/"
              ? p
              : tn([
                  p,
                  s.encodeLocation
                    ? s.encodeLocation(
                        C.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : C.pathnameBase,
                ]),
        }),
      ),
    c,
    r,
  );
  return l && U
    ? N.createElement(
        yi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...x,
            },
            navigationType: "POP",
          },
        },
        U,
      )
    : U;
}
function nv() {
  let i = fv(),
    l = G1(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
        ? i.message
        : JSON.stringify(i),
    r = i instanceof Error ? i.stack : null,
    s = "rgba(200,200,200, 0.5)",
    c = { padding: "0.5rem", backgroundColor: s },
    f = { padding: "2px 4px", backgroundColor: s },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (h = N.createElement(
      N.Fragment,
      null,
      N.createElement("p", null, "💿 Hey developer 👋"),
      N.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        N.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        N.createElement("code", { style: f }, "errorElement"),
        " prop on your route.",
      ),
    )),
    N.createElement(
      N.Fragment,
      null,
      N.createElement("h2", null, "Unexpected Application Error!"),
      N.createElement("h3", { style: { fontStyle: "italic" } }, l),
      r ? N.createElement("pre", { style: c }, r) : null,
      h,
    )
  );
}
var av = N.createElement(nv, null),
  Hp = class extends N.Component {
    constructor(i) {
      (super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        }));
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, l) {
      return l.location !== i.location ||
        (l.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : l.error,
            location: l.location,
            revalidation: i.revalidation || l.revalidation,
          };
    }
    componentDidCatch(i, l) {
      this.props.onError
        ? this.props.onError(i, l)
        : console.error(
            "React Router caught the following error during render",
            i,
          );
    }
    render() {
      let i = this.state.error;
      if (
        this.context &&
        typeof i == "object" &&
        i &&
        "digest" in i &&
        typeof i.digest == "string"
      ) {
        const r = P1(i.digest);
        r && (i = r);
      }
      let l =
        i !== void 0
          ? N.createElement(
              ln.Provider,
              { value: this.props.routeContext },
              N.createElement(vc.Provider, {
                value: i,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? N.createElement(lv, { error: i }, l) : l;
    }
  };
Hp.contextType = Q1;
var Qo = new WeakMap();
function lv({ children: i, error: l }) {
  let { basename: r } = N.useContext(Ot);
  if (
    typeof l == "object" &&
    l &&
    "digest" in l &&
    typeof l.digest == "string"
  ) {
    let s = W1(l.digest);
    if (s) {
      let c = Qo.get(l);
      if (c) throw c;
      let f = zp(s.location, r);
      if (Op && !Qo.get(l))
        if (f.isExternal || s.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const h = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(f.to, {
              replace: s.replace,
            }),
          );
          throw (Qo.set(l, h), h);
        }
      return N.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${f.absoluteURL || f.to}`,
      });
    }
  }
  return i;
}
function iv({ routeContext: i, match: l, children: r }) {
  let s = N.useContext(fl);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = l.route.id),
    N.createElement(ln.Provider, { value: i }, r)
  );
}
function rv(i, l = [], r) {
  let s = r?.state;
  if (i == null) {
    if (!s) return null;
    if (s.errors) i = s.matches;
    else if (l.length === 0 && !s.initialized && s.matches.length > 0)
      i = s.matches;
    else return null;
  }
  let c = i,
    f = s?.errors;
  if (f != null) {
    let b = c.findIndex((x) => x.route.id && f?.[x.route.id] !== void 0);
    (ze(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`,
    ),
      (c = c.slice(0, Math.min(c.length, b + 1))));
  }
  let h = !1,
    y = -1;
  if (r && s) {
    h = s.renderFallback;
    for (let b = 0; b < c.length; b++) {
      let x = c[b];
      if (
        ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (y = b),
        x.route.id)
      ) {
        let { loaderData: B, errors: F } = s,
          O =
            x.route.loader &&
            !B.hasOwnProperty(x.route.id) &&
            (!F || F[x.route.id] === void 0);
        if (x.route.lazy || O) {
          (r.isStatic && (h = !0),
            y >= 0 ? (c = c.slice(0, y + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  }
  let p = r?.onError,
    g =
      s && p
        ? (b, x) => {
            p(b, {
              location: s.location,
              params: s.matches?.[0]?.params ?? {},
              unstable_pattern: V1(s.matches),
              errorInfo: x,
            });
          }
        : void 0;
  return c.reduceRight((b, x, B) => {
    let F,
      O = !1,
      U = null,
      C = null;
    s &&
      ((F = f && x.route.id ? f[x.route.id] : void 0),
      (U = x.route.errorElement || av),
      h &&
        (y < 0 && B === 0
          ? (qp(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (O = !0),
            (C = null))
          : y === B &&
            ((O = !0), (C = x.route.hydrateFallbackElement || null))));
    let k = l.concat(c.slice(0, B + 1)),
      K = () => {
        let Y;
        return (
          F
            ? (Y = U)
            : O
              ? (Y = C)
              : x.route.Component
                ? (Y = N.createElement(x.route.Component, null))
                : x.route.element
                  ? (Y = x.route.element)
                  : (Y = b),
          N.createElement(iv, {
            match: x,
            routeContext: { outlet: b, matches: k, isDataRoute: s != null },
            children: Y,
          })
        );
      };
    return s && (x.route.ErrorBoundary || x.route.errorElement || B === 0)
      ? N.createElement(Hp, {
          location: s.location,
          revalidation: s.revalidation,
          component: U,
          error: F,
          children: K(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
          onError: g,
        })
      : K();
  }, null);
}
function bc(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sv(i) {
  let l = N.useContext(fl);
  return (ze(l, bc(i)), l);
}
function uv(i) {
  let l = N.useContext(os);
  return (ze(l, bc(i)), l);
}
function ov(i) {
  let l = N.useContext(ln);
  return (ze(l, bc(i)), l);
}
function xc(i) {
  let l = ov(i),
    r = l.matches[l.matches.length - 1];
  return (
    ze(
      r.route.id,
      `${i} can only be used on routes that contain a unique "id"`,
    ),
    r.route.id
  );
}
function cv() {
  return xc("useRouteId");
}
function fv() {
  let i = N.useContext(vc),
    l = uv("useRouteError"),
    r = xc("useRouteError");
  return i !== void 0 ? i : l.errors?.[r];
}
function dv() {
  let { router: i } = sv("useNavigate"),
    l = xc("useNavigate"),
    r = N.useRef(!1);
  return (
    Up(() => {
      r.current = !0;
    }),
    N.useCallback(
      async (c, f = {}) => {
        (Kt(r.current, Mp),
          r.current &&
            (typeof c == "number"
              ? await i.navigate(c)
              : await i.navigate(c, { fromRouteId: l, ...f })));
      },
      [i, l],
    )
  );
}
var Im = {};
function qp(i, l, r) {
  !l && !Im[i] && ((Im[i] = !0), Kt(!1, r));
}
N.memo(hv);
function hv({ routes: i, future: l, state: r, isStatic: s, onError: c }) {
  return Lp(i, void 0, { state: r, isStatic: s, onError: c });
}
function Kr({ to: i, replace: l, state: r, relative: s }) {
  ze(
    dl(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: c } = N.useContext(Ot);
  Kt(
    !c,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: f } = N.useContext(ln),
    { pathname: h } = Gt(),
    y = gi(),
    p = us(i, gc(f), h, s === "path"),
    g = JSON.stringify(p);
  return (
    N.useEffect(() => {
      y(JSON.parse(g), { replace: l, state: r, relative: s });
    }, [y, g, s, l, r]),
    null
  );
}
function Nn(i) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function mv({
  basename: i = "/",
  children: l = null,
  location: r,
  navigationType: s = "POP",
  navigator: c,
  static: f = !1,
  unstable_useTransitions: h,
}) {
  ze(
    !dl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let y = i.replace(/^\/*/, "/"),
    p = N.useMemo(
      () => ({
        basename: y,
        navigator: c,
        static: f,
        unstable_useTransitions: h,
        future: {},
      }),
      [y, c, f, h],
    );
  typeof r == "string" && (r = cl(r));
  let {
      pathname: g = "/",
      search: b = "",
      hash: x = "",
      state: B = null,
      key: F = "default",
      unstable_mask: O,
    } = r,
    U = N.useMemo(() => {
      let C = Tn(g, y);
      return C == null
        ? null
        : {
            location: {
              pathname: C,
              search: b,
              hash: x,
              state: B,
              key: F,
              unstable_mask: O,
            },
            navigationType: s,
          };
    }, [y, g, b, x, B, F, s, O]);
  return (
    Kt(
      U != null,
      `<Router basename="${y}"> is not able to match the URL "${g}${b}${x}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    U == null
      ? null
      : N.createElement(
          Ot.Provider,
          { value: p },
          N.createElement(yi.Provider, { children: l, value: U }),
        )
  );
}
function pv({ children: i, location: l }) {
  return tv(nc(i), l);
}
function nc(i, l = []) {
  let r = [];
  return (
    N.Children.forEach(i, (s, c) => {
      if (!N.isValidElement(s)) return;
      let f = [...l, c];
      if (s.type === N.Fragment) {
        r.push.apply(r, nc(s.props.children, f));
        return;
      }
      (ze(
        s.type === Nn,
        `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        ze(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes.",
        ));
      let h = {
        id: s.props.id || f.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        middleware: s.props.middleware,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (h.children = nc(s.props.children, f)), r.push(h));
    }),
    r
  );
}
var Jr = "get",
  $r = "application/x-www-form-urlencoded";
function cs(i) {
  return typeof HTMLElement < "u" && i instanceof HTMLElement;
}
function yv(i) {
  return cs(i) && i.tagName.toLowerCase() === "button";
}
function gv(i) {
  return cs(i) && i.tagName.toLowerCase() === "form";
}
function vv(i) {
  return cs(i) && i.tagName.toLowerCase() === "input";
}
function bv(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function xv(i, l) {
  return i.button === 0 && (!l || l === "_self") && !bv(i);
}
var Gr = null;
function Sv() {
  if (Gr === null)
    try {
      (new FormData(document.createElement("form"), 0), (Gr = !1));
    } catch {
      Gr = !0;
    }
  return Gr;
}
var Ev = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Zo(i) {
  return i != null && !Ev.has(i)
    ? (Kt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$r}"`,
      ),
      null)
    : i;
}
function _v(i, l) {
  let r, s, c, f, h;
  if (gv(i)) {
    let y = i.getAttribute("action");
    ((s = y ? Tn(y, l) : null),
      (r = i.getAttribute("method") || Jr),
      (c = Zo(i.getAttribute("enctype")) || $r),
      (f = new FormData(i)));
  } else if (yv(i) || (vv(i) && (i.type === "submit" || i.type === "image"))) {
    let y = i.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = i.getAttribute("formaction") || y.getAttribute("action");
    if (
      ((s = p ? Tn(p, l) : null),
      (r = i.getAttribute("formmethod") || y.getAttribute("method") || Jr),
      (c =
        Zo(i.getAttribute("formenctype")) ||
        Zo(y.getAttribute("enctype")) ||
        $r),
      (f = new FormData(y, i)),
      !Sv())
    ) {
      let { name: g, type: b, value: x } = i;
      if (b === "image") {
        let B = g ? `${g}.` : "";
        (f.append(`${B}x`, "0"), f.append(`${B}y`, "0"));
      } else g && f.append(g, x);
    }
  } else {
    if (cs(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((r = Jr), (s = null), (c = $r), (h = i));
  }
  return (
    f && c === "text/plain" && ((h = f), (f = void 0)),
    { action: s, method: r.toLowerCase(), encType: c, formData: f, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Sc(i, l) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(l);
}
function Av(i, l, r, s) {
  let c =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : i;
  return (
    r
      ? c.pathname.endsWith("/")
        ? (c.pathname = `${c.pathname}_.${s}`)
        : (c.pathname = `${c.pathname}.${s}`)
      : c.pathname === "/"
        ? (c.pathname = `_root.${s}`)
        : l && Tn(c.pathname, l) === "/"
          ? (c.pathname = `${l.replace(/\/$/, "")}/_root.${s}`)
          : (c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`),
    c
  );
}
async function Nv(i, l) {
  if (i.id in l) return l[i.id];
  try {
    let r = await import(i.module);
    return ((l[i.id] = r), r);
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Tv(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === "preload" &&
        typeof i.imageSrcSet == "string" &&
        typeof i.imageSizes == "string"
      : typeof i.rel == "string" && typeof i.href == "string";
}
async function Rv(i, l, r) {
  let s = await Promise.all(
    i.map(async (c) => {
      let f = l.routes[c.route.id];
      if (f) {
        let h = await Nv(f, r);
        return h.links ? h.links() : [];
      }
      return [];
    }),
  );
  return zv(
    s
      .flat(1)
      .filter(Tv)
      .filter((c) => c.rel === "stylesheet" || c.rel === "preload")
      .map((c) =>
        c.rel === "stylesheet"
          ? { ...c, rel: "prefetch", as: "style" }
          : { ...c, rel: "prefetch" },
      ),
  );
}
function ep(i, l, r, s, c, f) {
  let h = (p, g) => (r[g] ? p.route.id !== r[g].route.id : !0),
    y = (p, g) =>
      r[g].pathname !== p.pathname ||
      (r[g].route.path?.endsWith("*") && r[g].params["*"] !== p.params["*"]);
  return f === "assets"
    ? l.filter((p, g) => h(p, g) || y(p, g))
    : f === "data"
      ? l.filter((p, g) => {
          let b = s.routes[p.route.id];
          if (!b || !b.hasLoader) return !1;
          if (h(p, g) || y(p, g)) return !0;
          if (p.route.shouldRevalidate) {
            let x = p.route.shouldRevalidate({
              currentUrl: new URL(
                c.pathname + c.search + c.hash,
                window.origin,
              ),
              currentParams: r[0]?.params || {},
              nextUrl: new URL(i, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof x == "boolean") return x;
          }
          return !0;
        })
      : [];
}
function Cv(i, l, { includeHydrateFallback: r } = {}) {
  return wv(
    i
      .map((s) => {
        let c = l.routes[s.route.id];
        if (!c) return [];
        let f = [c.module];
        return (
          c.clientActionModule && (f = f.concat(c.clientActionModule)),
          c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
          r &&
            c.hydrateFallbackModule &&
            (f = f.concat(c.hydrateFallbackModule)),
          c.imports && (f = f.concat(c.imports)),
          f
        );
      })
      .flat(1),
  );
}
function wv(i) {
  return [...new Set(i)];
}
function Ov(i) {
  let l = {},
    r = Object.keys(i).sort();
  for (let s of r) l[s] = i[s];
  return l;
}
function zv(i, l) {
  let r = new Set();
  return (
    new Set(l),
    i.reduce((s, c) => {
      let f = JSON.stringify(Ov(c));
      return (r.has(f) || (r.add(f), s.push({ key: f, link: c })), s);
    }, [])
  );
}
function Fp() {
  let i = N.useContext(fl);
  return (
    Sc(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    i
  );
}
function jv() {
  let i = N.useContext(os);
  return (
    Sc(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    i
  );
}
var Ec = N.createContext(void 0);
Ec.displayName = "FrameworkContext";
function kp() {
  let i = N.useContext(Ec);
  return (
    Sc(i, "You must render this element inside a <HydratedRouter> element"),
    i
  );
}
function Dv(i, l) {
  let r = N.useContext(Ec),
    [s, c] = N.useState(!1),
    [f, h] = N.useState(!1),
    {
      onFocus: y,
      onBlur: p,
      onMouseEnter: g,
      onMouseLeave: b,
      onTouchStart: x,
    } = l,
    B = N.useRef(null);
  (N.useEffect(() => {
    if ((i === "render" && h(!0), i === "viewport")) {
      let U = (k) => {
          k.forEach((K) => {
            h(K.isIntersecting);
          });
        },
        C = new IntersectionObserver(U, { threshold: 0.5 });
      return (
        B.current && C.observe(B.current),
        () => {
          C.disconnect();
        }
      );
    }
  }, [i]),
    N.useEffect(() => {
      if (s) {
        let U = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(U);
        };
      }
    }, [s]));
  let F = () => {
      c(!0);
    },
    O = () => {
      (c(!1), h(!1));
    };
  return r
    ? i !== "intent"
      ? [f, B, {}]
      : [
          f,
          B,
          {
            onFocus: fi(y, F),
            onBlur: fi(p, O),
            onMouseEnter: fi(g, F),
            onMouseLeave: fi(b, O),
            onTouchStart: fi(x, F),
          },
        ]
    : [!1, B, {}];
}
function fi(i, l) {
  return (r) => {
    (i && i(r), r.defaultPrevented || l(r));
  };
}
function Bv({ page: i, ...l }) {
  let { router: r } = Fp(),
    s = N.useMemo(() => Rp(r.routes, i, r.basename), [r.routes, i, r.basename]);
  return s ? N.createElement(Uv, { page: i, matches: s, ...l }) : null;
}
function Mv(i) {
  let { manifest: l, routeModules: r } = kp(),
    [s, c] = N.useState([]);
  return (
    N.useEffect(() => {
      let f = !1;
      return (
        Rv(i, l, r).then((h) => {
          f || c(h);
        }),
        () => {
          f = !0;
        }
      );
    }, [i, l, r]),
    s
  );
}
function Uv({ page: i, matches: l, ...r }) {
  let s = Gt(),
    { future: c, manifest: f, routeModules: h } = kp(),
    { basename: y } = Fp(),
    { loaderData: p, matches: g } = jv(),
    b = N.useMemo(() => ep(i, l, g, f, s, "data"), [i, l, g, f, s]),
    x = N.useMemo(() => ep(i, l, g, f, s, "assets"), [i, l, g, f, s]),
    B = N.useMemo(() => {
      if (i === s.pathname + s.search + s.hash) return [];
      let U = new Set(),
        C = !1;
      if (
        (l.forEach((K) => {
          let Y = f.routes[K.route.id];
          !Y ||
            !Y.hasLoader ||
            ((!b.some((ee) => ee.route.id === K.route.id) &&
              K.route.id in p &&
              h[K.route.id]?.shouldRevalidate) ||
            Y.hasClientLoader
              ? (C = !0)
              : U.add(K.route.id));
        }),
        U.size === 0)
      )
        return [];
      let k = Av(i, y, c.unstable_trailingSlashAwareDataRequests, "data");
      return (
        C &&
          U.size > 0 &&
          k.searchParams.set(
            "_routes",
            l
              .filter((K) => U.has(K.route.id))
              .map((K) => K.route.id)
              .join(","),
          ),
        [k.pathname + k.search]
      );
    }, [y, c.unstable_trailingSlashAwareDataRequests, p, s, f, b, l, i, h]),
    F = N.useMemo(() => Cv(x, f), [x, f]),
    O = Mv(x);
  return N.createElement(
    N.Fragment,
    null,
    B.map((U) =>
      N.createElement("link", {
        key: U,
        rel: "prefetch",
        as: "fetch",
        href: U,
        ...r,
      }),
    ),
    F.map((U) =>
      N.createElement("link", { key: U, rel: "modulepreload", href: U, ...r }),
    ),
    O.map(({ key: U, link: C }) =>
      N.createElement("link", {
        key: U,
        nonce: r.nonce,
        ...C,
        crossOrigin: C.crossOrigin ?? r.crossOrigin,
      }),
    ),
  );
}
function Lv(...i) {
  return (l) => {
    i.forEach((r) => {
      typeof r == "function" ? r(l) : r != null && (r.current = l);
    });
  };
}
var Hv =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Hv && (window.__reactRouterVersion = "7.13.1");
} catch {}
function qv({
  basename: i,
  children: l,
  unstable_useTransitions: r,
  window: s,
}) {
  let c = N.useRef();
  c.current == null && (c.current = b1({ window: s, v5Compat: !0 }));
  let f = c.current,
    [h, y] = N.useState({ action: f.action, location: f.location }),
    p = N.useCallback(
      (g) => {
        r === !1 ? y(g) : N.startTransition(() => y(g));
      },
      [r],
    );
  return (
    N.useLayoutEffect(() => f.listen(p), [f, p]),
    N.createElement(mv, {
      basename: i,
      children: l,
      location: h.location,
      navigationType: h.action,
      navigator: f,
      unstable_useTransitions: r,
    })
  );
}
var Yp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ke = N.forwardRef(function (
    {
      onClick: l,
      discover: r = "render",
      prefetch: s = "none",
      relative: c,
      reloadDocument: f,
      replace: h,
      unstable_mask: y,
      state: p,
      target: g,
      to: b,
      preventScrollReset: x,
      viewTransition: B,
      unstable_defaultShouldRevalidate: F,
      ...O
    },
    U,
  ) {
    let {
        basename: C,
        navigator: k,
        unstable_useTransitions: K,
      } = N.useContext(Ot),
      Y = typeof b == "string" && Yp.test(b),
      ee = zp(b, C);
    b = ee.to;
    let ie = I1(b, { relative: c }),
      P = Gt(),
      X = null;
    if (y) {
      let je = us(y, [], P.unstable_mask ? P.unstable_mask.pathname : "/", !0);
      (C !== "/" &&
        (je.pathname = je.pathname === "/" ? C : tn([C, je.pathname])),
        (X = k.createHref(je)));
    }
    let [Te, Me, bt] = Dv(s, O),
      st = Gv(b, {
        replace: h,
        unstable_mask: y,
        state: p,
        target: g,
        preventScrollReset: x,
        relative: c,
        viewTransition: B,
        unstable_defaultShouldRevalidate: F,
        unstable_useTransitions: K,
      });
    function Ue(je) {
      (l && l(je), je.defaultPrevented || st(je));
    }
    let at = !(ee.isExternal || f),
      ke = N.createElement("a", {
        ...O,
        ...bt,
        href: (at ? X : void 0) || ee.absoluteURL || ie,
        onClick: at ? Ue : l,
        ref: Lv(U, Me),
        target: g,
        "data-discover": !Y && r === "render" ? "true" : void 0,
      });
    return Te && !Y
      ? N.createElement(N.Fragment, null, ke, N.createElement(Bv, { page: ie }))
      : ke;
  });
Ke.displayName = "Link";
var Fv = N.forwardRef(function (
  {
    "aria-current": l = "page",
    caseSensitive: r = !1,
    className: s = "",
    end: c = !1,
    style: f,
    to: h,
    viewTransition: y,
    children: p,
    ...g
  },
  b,
) {
  let x = vi(h, { relative: g.relative }),
    B = Gt(),
    F = N.useContext(os),
    { navigator: O, basename: U } = N.useContext(Ot),
    C = F != null && Kv(x) && y === !0,
    k = O.encodeLocation ? O.encodeLocation(x).pathname : x.pathname,
    K = B.pathname,
    Y =
      F && F.navigation && F.navigation.location
        ? F.navigation.location.pathname
        : null;
  (r ||
    ((K = K.toLowerCase()),
    (Y = Y ? Y.toLowerCase() : null),
    (k = k.toLowerCase())),
    Y && U && (Y = Tn(Y, U) || Y));
  const ee = k !== "/" && k.endsWith("/") ? k.length - 1 : k.length;
  let ie = K === k || (!c && K.startsWith(k) && K.charAt(ee) === "/"),
    P =
      Y != null &&
      (Y === k || (!c && Y.startsWith(k) && Y.charAt(k.length) === "/")),
    X = { isActive: ie, isPending: P, isTransitioning: C },
    Te = ie ? l : void 0,
    Me;
  typeof s == "function"
    ? (Me = s(X))
    : (Me = [
        s,
        ie ? "active" : null,
        P ? "pending" : null,
        C ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let bt = typeof f == "function" ? f(X) : f;
  return N.createElement(
    Ke,
    {
      ...g,
      "aria-current": Te,
      className: Me,
      ref: b,
      style: bt,
      to: h,
      viewTransition: y,
    },
    typeof p == "function" ? p(X) : p,
  );
});
Fv.displayName = "NavLink";
var kv = N.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: l,
      navigate: r,
      reloadDocument: s,
      replace: c,
      state: f,
      method: h = Jr,
      action: y,
      onSubmit: p,
      relative: g,
      preventScrollReset: b,
      viewTransition: x,
      unstable_defaultShouldRevalidate: B,
      ...F
    },
    O,
  ) => {
    let { unstable_useTransitions: U } = N.useContext(Ot),
      C = Qv(),
      k = Zv(y, { relative: g }),
      K = h.toLowerCase() === "get" ? "get" : "post",
      Y = typeof y == "string" && Yp.test(y),
      ee = (ie) => {
        if ((p && p(ie), ie.defaultPrevented)) return;
        ie.preventDefault();
        let P = ie.nativeEvent.submitter,
          X = P?.getAttribute("formmethod") || h,
          Te = () =>
            C(P || ie.currentTarget, {
              fetcherKey: l,
              method: X,
              navigate: r,
              replace: c,
              state: f,
              relative: g,
              preventScrollReset: b,
              viewTransition: x,
              unstable_defaultShouldRevalidate: B,
            });
        U && r !== !1 ? N.startTransition(() => Te()) : Te();
      };
    return N.createElement("form", {
      ref: O,
      method: K,
      action: k,
      onSubmit: s ? p : ee,
      ...F,
      "data-discover": !Y && i === "render" ? "true" : void 0,
    });
  },
);
kv.displayName = "Form";
function Yv(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gp(i) {
  let l = N.useContext(fl);
  return (ze(l, Yv(i)), l);
}
function Gv(
  i,
  {
    target: l,
    replace: r,
    unstable_mask: s,
    state: c,
    preventScrollReset: f,
    relative: h,
    viewTransition: y,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: g,
  } = {},
) {
  let b = gi(),
    x = Gt(),
    B = vi(i, { relative: h });
  return N.useCallback(
    (F) => {
      if (xv(F, l)) {
        F.preventDefault();
        let O = r !== void 0 ? r : pi(x) === pi(B),
          U = () =>
            b(i, {
              replace: O,
              unstable_mask: s,
              state: c,
              preventScrollReset: f,
              relative: h,
              viewTransition: y,
              unstable_defaultShouldRevalidate: p,
            });
        g ? N.startTransition(() => U()) : U();
      }
    },
    [x, b, B, r, s, c, l, i, f, h, y, p, g],
  );
}
var Vv = 0,
  Xv = () => `__${String(++Vv)}__`;
function Qv() {
  let { router: i } = Gp("useSubmit"),
    { basename: l } = N.useContext(Ot),
    r = cv(),
    s = i.fetch,
    c = i.navigate;
  return N.useCallback(
    async (f, h = {}) => {
      let { action: y, method: p, encType: g, formData: b, body: x } = _v(f, l);
      if (h.navigate === !1) {
        let B = h.fetcherKey || Xv();
        await s(B, r, h.action || y, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: x,
          formMethod: h.method || p,
          formEncType: h.encType || g,
          flushSync: h.flushSync,
        });
      } else
        await c(h.action || y, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: x,
          formMethod: h.method || p,
          formEncType: h.encType || g,
          replace: h.replace,
          state: h.state,
          fromRouteId: r,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [s, c, l, r],
  );
}
function Zv(i, { relative: l } = {}) {
  let { basename: r } = N.useContext(Ot),
    s = N.useContext(ln);
  ze(s, "useFormAction must be used inside a RouteContext");
  let [c] = s.matches.slice(-1),
    f = { ...vi(i || ".", { relative: l }) },
    h = Gt();
  if (i == null) {
    f.search = h.search;
    let y = new URLSearchParams(f.search),
      p = y.getAll("index");
    if (p.some((b) => b === "")) {
      (y.delete("index"),
        p.filter((x) => x).forEach((x) => y.append("index", x)));
      let b = y.toString();
      f.search = b ? `?${b}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (f.pathname = f.pathname === "/" ? r : tn([r, f.pathname])),
    pi(f)
  );
}
function Kv(i, { relative: l } = {}) {
  let r = N.useContext(Dp);
  ze(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = Gp("useViewTransitionState"),
    c = vi(i, { relative: l });
  if (!r.isTransitioning) return !1;
  let f = Tn(r.currentLocation.pathname, s) || r.currentLocation.pathname,
    h = Tn(r.nextLocation.pathname, s) || r.nextLocation.pathname;
  return is(c.pathname, h) != null || is(c.pathname, f) != null;
}
let Jv = { data: "" },
  $v = (i) => {
    if (typeof window == "object") {
      let l =
        (i ? i.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (l.nonce = window.__nonce__),
        l.parentNode || (i || document.head).appendChild(l),
        l.firstChild
      );
    }
    return i || Jv;
  },
  Wv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Pv = /\/\*[^]*?\*\/|  +/g,
  tp = /\n+/g,
  In = (i, l) => {
    let r = "",
      s = "",
      c = "";
    for (let f in i) {
      let h = i[f];
      f[0] == "@"
        ? f[1] == "i"
          ? (r = f + " " + h + ";")
          : (s +=
              f[1] == "f"
                ? In(h, f)
                : f + "{" + In(h, f[1] == "k" ? "" : l) + "}")
        : typeof h == "object"
          ? (s += In(
              h,
              l
                ? l.replace(/([^,])+/g, (y) =>
                    f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (p) =>
                      /&/.test(p) ? p.replace(/&/g, y) : y ? y + " " + p : p,
                    ),
                  )
                : f,
            ))
          : h != null &&
            ((f = /^--/.test(f) ? f : f.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (c += In.p ? In.p(f, h) : f + ":" + h + ";"));
    }
    return r + (l && c ? l + "{" + c + "}" : c) + s;
  },
  An = {},
  Vp = (i) => {
    if (typeof i == "object") {
      let l = "";
      for (let r in i) l += r + Vp(i[r]);
      return l;
    }
    return i;
  },
  Iv = (i, l, r, s, c) => {
    let f = Vp(i),
      h =
        An[f] ||
        (An[f] = ((p) => {
          let g = 0,
            b = 11;
          for (; g < p.length; ) b = (101 * b + p.charCodeAt(g++)) >>> 0;
          return "go" + b;
        })(f));
    if (!An[h]) {
      let p =
        f !== i
          ? i
          : ((g) => {
              let b,
                x,
                B = [{}];
              for (; (b = Wv.exec(g.replace(Pv, ""))); )
                b[4]
                  ? B.shift()
                  : b[3]
                    ? ((x = b[3].replace(tp, " ").trim()),
                      B.unshift((B[0][x] = B[0][x] || {})))
                    : (B[0][b[1]] = b[2].replace(tp, " ").trim());
              return B[0];
            })(i);
      An[h] = In(c ? { ["@keyframes " + h]: p } : p, r ? "" : "." + h);
    }
    let y = r && An.g ? An.g : null;
    return (
      r && (An.g = An[h]),
      ((p, g, b, x) => {
        x
          ? (g.data = g.data.replace(x, p))
          : g.data.indexOf(p) === -1 && (g.data = b ? p + g.data : g.data + p);
      })(An[h], l, s, y),
      h
    );
  },
  eb = (i, l, r) =>
    i.reduce((s, c, f) => {
      let h = l[f];
      if (h && h.call) {
        let y = h(r),
          p = (y && y.props && y.props.className) || (/^go/.test(y) && y);
        h = p
          ? "." + p
          : y && typeof y == "object"
            ? y.props
              ? ""
              : In(y, "")
            : y === !1
              ? ""
              : y;
      }
      return s + c + (h ?? "");
    }, "");
function fs(i) {
  let l = this || {},
    r = i.call ? i(l.p) : i;
  return Iv(
    r.unshift
      ? r.raw
        ? eb(r, [].slice.call(arguments, 1), l.p)
        : r.reduce((s, c) => Object.assign(s, c && c.call ? c(l.p) : c), {})
      : r,
    $v(l.target),
    l.g,
    l.o,
    l.k,
  );
}
let Xp, ac, lc;
fs.bind({ g: 1 });
let Rn = fs.bind({ k: 1 });
function tb(i, l, r, s) {
  ((In.p = l), (Xp = i), (ac = r), (lc = s));
}
function ta(i, l) {
  let r = this || {};
  return function () {
    let s = arguments;
    function c(f, h) {
      let y = Object.assign({}, f),
        p = y.className || c.className;
      ((r.p = Object.assign({ theme: ac && ac() }, y)),
        (r.o = / *go\d+/.test(p)),
        (y.className = fs.apply(r, s) + (p ? " " + p : "")));
      let g = i;
      return (
        i[0] && ((g = y.as || i), delete y.as),
        lc && g[0] && lc(y),
        Xp(g, y)
      );
    }
    return c;
  };
}
var nb = (i) => typeof i == "function",
  rs = (i, l) => (nb(i) ? i(l) : i),
  ab = (() => {
    let i = 0;
    return () => (++i).toString();
  })(),
  Qp = (() => {
    let i;
    return () => {
      if (i === void 0 && typeof window < "u") {
        let l = matchMedia("(prefers-reduced-motion: reduce)");
        i = !l || l.matches;
      }
      return i;
    };
  })(),
  lb = 20,
  _c = "default",
  Zp = (i, l) => {
    let { toastLimit: r } = i.settings;
    switch (l.type) {
      case 0:
        return { ...i, toasts: [l.toast, ...i.toasts].slice(0, r) };
      case 1:
        return {
          ...i,
          toasts: i.toasts.map((h) =>
            h.id === l.toast.id ? { ...h, ...l.toast } : h,
          ),
        };
      case 2:
        let { toast: s } = l;
        return Zp(i, {
          type: i.toasts.find((h) => h.id === s.id) ? 1 : 0,
          toast: s,
        });
      case 3:
        let { toastId: c } = l;
        return {
          ...i,
          toasts: i.toasts.map((h) =>
            h.id === c || c === void 0
              ? { ...h, dismissed: !0, visible: !1 }
              : h,
          ),
        };
      case 4:
        return l.toastId === void 0
          ? { ...i, toasts: [] }
          : { ...i, toasts: i.toasts.filter((h) => h.id !== l.toastId) };
      case 5:
        return { ...i, pausedAt: l.time };
      case 6:
        let f = l.time - (i.pausedAt || 0);
        return {
          ...i,
          pausedAt: void 0,
          toasts: i.toasts.map((h) => ({
            ...h,
            pauseDuration: h.pauseDuration + f,
          })),
        };
    }
  },
  Wr = [],
  Kp = { toasts: [], pausedAt: void 0, settings: { toastLimit: lb } },
  en = {},
  Jp = (i, l = _c) => {
    ((en[l] = Zp(en[l] || Kp, i)),
      Wr.forEach(([r, s]) => {
        r === l && s(en[l]);
      }));
  },
  $p = (i) => Object.keys(en).forEach((l) => Jp(i, l)),
  ib = (i) => Object.keys(en).find((l) => en[l].toasts.some((r) => r.id === i)),
  ds =
    (i = _c) =>
    (l) => {
      Jp(l, i);
    },
  rb = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  sb = (i = {}, l = _c) => {
    let [r, s] = N.useState(en[l] || Kp),
      c = N.useRef(en[l]);
    N.useEffect(
      () => (
        c.current !== en[l] && s(en[l]),
        Wr.push([l, s]),
        () => {
          let h = Wr.findIndex(([y]) => y === l);
          h > -1 && Wr.splice(h, 1);
        }
      ),
      [l],
    );
    let f = r.toasts.map((h) => {
      var y, p, g;
      return {
        ...i,
        ...i[h.type],
        ...h,
        removeDelay:
          h.removeDelay ||
          ((y = i[h.type]) == null ? void 0 : y.removeDelay) ||
          i?.removeDelay,
        duration:
          h.duration ||
          ((p = i[h.type]) == null ? void 0 : p.duration) ||
          i?.duration ||
          rb[h.type],
        style: {
          ...i.style,
          ...((g = i[h.type]) == null ? void 0 : g.style),
          ...h.style,
        },
      };
    });
    return { ...r, toasts: f };
  },
  ub = (i, l = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: l,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: i,
    pauseDuration: 0,
    ...r,
    id: r?.id || ab(),
  }),
  bi = (i) => (l, r) => {
    let s = ub(l, i, r);
    return (ds(s.toasterId || ib(s.id))({ type: 2, toast: s }), s.id);
  },
  Je = (i, l) => bi("blank")(i, l);
Je.error = bi("error");
Je.success = bi("success");
Je.loading = bi("loading");
Je.custom = bi("custom");
Je.dismiss = (i, l) => {
  let r = { type: 3, toastId: i };
  l ? ds(l)(r) : $p(r);
};
Je.dismissAll = (i) => Je.dismiss(void 0, i);
Je.remove = (i, l) => {
  let r = { type: 4, toastId: i };
  l ? ds(l)(r) : $p(r);
};
Je.removeAll = (i) => Je.remove(void 0, i);
Je.promise = (i, l, r) => {
  let s = Je.loading(l.loading, { ...r, ...r?.loading });
  return (
    typeof i == "function" && (i = i()),
    i
      .then((c) => {
        let f = l.success ? rs(l.success, c) : void 0;
        return (
          f ? Je.success(f, { id: s, ...r, ...r?.success }) : Je.dismiss(s),
          c
        );
      })
      .catch((c) => {
        let f = l.error ? rs(l.error, c) : void 0;
        f ? Je.error(f, { id: s, ...r, ...r?.error }) : Je.dismiss(s);
      }),
    i
  );
};
var ob = 1e3,
  cb = (i, l = "default") => {
    let { toasts: r, pausedAt: s } = sb(i, l),
      c = N.useRef(new Map()).current,
      f = N.useCallback((x, B = ob) => {
        if (c.has(x)) return;
        let F = setTimeout(() => {
          (c.delete(x), h({ type: 4, toastId: x }));
        }, B);
        c.set(x, F);
      }, []);
    N.useEffect(() => {
      if (s) return;
      let x = Date.now(),
        B = r.map((F) => {
          if (F.duration === 1 / 0) return;
          let O = (F.duration || 0) + F.pauseDuration - (x - F.createdAt);
          if (O < 0) {
            F.visible && Je.dismiss(F.id);
            return;
          }
          return setTimeout(() => Je.dismiss(F.id, l), O);
        });
      return () => {
        B.forEach((F) => F && clearTimeout(F));
      };
    }, [r, s, l]);
    let h = N.useCallback(ds(l), [l]),
      y = N.useCallback(() => {
        h({ type: 5, time: Date.now() });
      }, [h]),
      p = N.useCallback(
        (x, B) => {
          h({ type: 1, toast: { id: x, height: B } });
        },
        [h],
      ),
      g = N.useCallback(() => {
        s && h({ type: 6, time: Date.now() });
      }, [s, h]),
      b = N.useCallback(
        (x, B) => {
          let {
              reverseOrder: F = !1,
              gutter: O = 8,
              defaultPosition: U,
            } = B || {},
            C = r.filter(
              (Y) => (Y.position || U) === (x.position || U) && Y.height,
            ),
            k = C.findIndex((Y) => Y.id === x.id),
            K = C.filter((Y, ee) => ee < k && Y.visible).length;
          return C.filter((Y) => Y.visible)
            .slice(...(F ? [K + 1] : [0, K]))
            .reduce((Y, ee) => Y + (ee.height || 0) + O, 0);
        },
        [r],
      );
    return (
      N.useEffect(() => {
        r.forEach((x) => {
          if (x.dismissed) f(x.id, x.removeDelay);
          else {
            let B = c.get(x.id);
            B && (clearTimeout(B), c.delete(x.id));
          }
        });
      }, [r, f]),
      {
        toasts: r,
        handlers: {
          updateHeight: p,
          startPause: y,
          endPause: g,
          calculateOffset: b,
        },
      }
    );
  },
  fb = Rn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  db = Rn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  hb = Rn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  mb = ta("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(i) => i.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${db} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(i) => i.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${hb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  pb = Rn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  yb = ta("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(i) => i.secondary || "#e0e0e0"};
  border-right-color: ${(i) => i.primary || "#616161"};
  animation: ${pb} 1s linear infinite;
`,
  gb = Rn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  vb = Rn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  bb = ta("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(i) => i.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(i) => i.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  xb = ta("div")`
  position: absolute;
`,
  Sb = ta("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Eb = Rn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  _b = ta("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Eb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Ab = ({ toast: i }) => {
    let { icon: l, type: r, iconTheme: s } = i;
    return l !== void 0
      ? typeof l == "string"
        ? N.createElement(_b, null, l)
        : l
      : r === "blank"
        ? null
        : N.createElement(
            Sb,
            null,
            N.createElement(yb, { ...s }),
            r !== "loading" &&
              N.createElement(
                xb,
                null,
                r === "error"
                  ? N.createElement(mb, { ...s })
                  : N.createElement(bb, { ...s }),
              ),
          );
  },
  Nb = (i) => `
0% {transform: translate3d(0,${i * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Tb = (i) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i * -150}%,-1px) scale(.6); opacity:0;}
`,
  Rb = "0%{opacity:0;} 100%{opacity:1;}",
  Cb = "0%{opacity:1;} 100%{opacity:0;}",
  wb = ta("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Ob = ta("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  zb = (i, l) => {
    let r = i.includes("top") ? 1 : -1,
      [s, c] = Qp() ? [Rb, Cb] : [Nb(r), Tb(r)];
    return {
      animation: l
        ? `${Rn(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Rn(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  jb = N.memo(({ toast: i, position: l, style: r, children: s }) => {
    let c = i.height
        ? zb(i.position || l || "top-center", i.visible)
        : { opacity: 0 },
      f = N.createElement(Ab, { toast: i }),
      h = N.createElement(Ob, { ...i.ariaProps }, rs(i.message, i));
    return N.createElement(
      wb,
      { className: i.className, style: { ...c, ...r, ...i.style } },
      typeof s == "function"
        ? s({ icon: f, message: h })
        : N.createElement(N.Fragment, null, f, h),
    );
  });
tb(N.createElement);
var Db = ({
    id: i,
    className: l,
    style: r,
    onHeightUpdate: s,
    children: c,
  }) => {
    let f = N.useCallback(
      (h) => {
        if (h) {
          let y = () => {
            let p = h.getBoundingClientRect().height;
            s(i, p);
          };
          (y(),
            new MutationObserver(y).observe(h, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [i, s],
    );
    return N.createElement("div", { ref: f, className: l, style: r }, c);
  },
  Bb = (i, l) => {
    let r = i.includes("top"),
      s = r ? { top: 0 } : { bottom: 0 },
      c = i.includes("center")
        ? { justifyContent: "center" }
        : i.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Qp() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${l * (r ? 1 : -1)}px)`,
      ...s,
      ...c,
    };
  },
  Mb = fs`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Vr = 16,
  Ub = ({
    reverseOrder: i,
    position: l = "top-center",
    toastOptions: r,
    gutter: s,
    children: c,
    toasterId: f,
    containerStyle: h,
    containerClassName: y,
  }) => {
    let { toasts: p, handlers: g } = cb(r, f);
    return N.createElement(
      "div",
      {
        "data-rht-toaster": f || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Vr,
          left: Vr,
          right: Vr,
          bottom: Vr,
          pointerEvents: "none",
          ...h,
        },
        className: y,
        onMouseEnter: g.startPause,
        onMouseLeave: g.endPause,
      },
      p.map((b) => {
        let x = b.position || l,
          B = g.calculateOffset(b, {
            reverseOrder: i,
            gutter: s,
            defaultPosition: l,
          }),
          F = Bb(x, B);
        return N.createElement(
          Db,
          {
            id: b.id,
            key: b.id,
            onHeightUpdate: g.updateHeight,
            className: b.visible ? Mb : "",
            style: F,
          },
          b.type === "custom"
            ? rs(b.message, b)
            : c
              ? c(b)
              : N.createElement(jb, { toast: b, position: x }),
        );
      }),
    );
  },
  it = Je;
function Wp(i, l) {
  return function () {
    return i.apply(l, arguments);
  };
}
const { toString: Lb } = Object.prototype,
  { getPrototypeOf: Ac } = Object,
  { iterator: hs, toStringTag: Pp } = Symbol,
  ms = ((i) => (l) => {
    const r = Lb.call(l);
    return i[r] || (i[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Jt = (i) => ((i = i.toLowerCase()), (l) => ms(l) === i),
  ps = (i) => (l) => typeof l === i,
  { isArray: hl } = Array,
  ol = ps("undefined");
function xi(i) {
  return (
    i !== null &&
    !ol(i) &&
    i.constructor !== null &&
    !ol(i.constructor) &&
    gt(i.constructor.isBuffer) &&
    i.constructor.isBuffer(i)
  );
}
const Ip = Jt("ArrayBuffer");
function Hb(i) {
  let l;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (l = ArrayBuffer.isView(i))
      : (l = i && i.buffer && Ip(i.buffer)),
    l
  );
}
const qb = ps("string"),
  gt = ps("function"),
  ey = ps("number"),
  Si = (i) => i !== null && typeof i == "object",
  Fb = (i) => i === !0 || i === !1,
  Pr = (i) => {
    if (ms(i) !== "object") return !1;
    const l = Ac(i);
    return (
      (l === null ||
        l === Object.prototype ||
        Object.getPrototypeOf(l) === null) &&
      !(Pp in i) &&
      !(hs in i)
    );
  },
  kb = (i) => {
    if (!Si(i) || xi(i)) return !1;
    try {
      return (
        Object.keys(i).length === 0 &&
        Object.getPrototypeOf(i) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  Yb = Jt("Date"),
  Gb = Jt("File"),
  Vb = (i) => !!(i && typeof i.uri < "u"),
  Xb = (i) => i && typeof i.getParts < "u",
  Qb = Jt("Blob"),
  Zb = Jt("FileList"),
  Kb = (i) => Si(i) && gt(i.pipe);
function Jb() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
}
const np = Jb(),
  ap = typeof np.FormData < "u" ? np.FormData : void 0,
  $b = (i) => {
    let l;
    return (
      i &&
      ((ap && i instanceof ap) ||
        (gt(i.append) &&
          ((l = ms(i)) === "formdata" ||
            (l === "object" &&
              gt(i.toString) &&
              i.toString() === "[object FormData]"))))
    );
  },
  Wb = Jt("URLSearchParams"),
  [Pb, Ib, ex, tx] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Jt,
  ),
  nx = (i) =>
    i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ei(i, l, { allOwnKeys: r = !1 } = {}) {
  if (i === null || typeof i > "u") return;
  let s, c;
  if ((typeof i != "object" && (i = [i]), hl(i)))
    for (s = 0, c = i.length; s < c; s++) l.call(null, i[s], s, i);
  else {
    if (xi(i)) return;
    const f = r ? Object.getOwnPropertyNames(i) : Object.keys(i),
      h = f.length;
    let y;
    for (s = 0; s < h; s++) ((y = f[s]), l.call(null, i[y], y, i));
  }
}
function ty(i, l) {
  if (xi(i)) return null;
  l = l.toLowerCase();
  const r = Object.keys(i);
  let s = r.length,
    c;
  for (; s-- > 0; ) if (((c = r[s]), l === c.toLowerCase())) return c;
  return null;
}
const Sa =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  ny = (i) => !ol(i) && i !== Sa;
function ic() {
  const { caseless: i, skipUndefined: l } = (ny(this) && this) || {},
    r = {},
    s = (c, f) => {
      if (f === "__proto__" || f === "constructor" || f === "prototype") return;
      const h = (i && ty(r, f)) || f;
      Pr(r[h]) && Pr(c)
        ? (r[h] = ic(r[h], c))
        : Pr(c)
          ? (r[h] = ic({}, c))
          : hl(c)
            ? (r[h] = c.slice())
            : (!l || !ol(c)) && (r[h] = c);
    };
  for (let c = 0, f = arguments.length; c < f; c++)
    arguments[c] && Ei(arguments[c], s);
  return r;
}
const ax = (i, l, r, { allOwnKeys: s } = {}) => (
    Ei(
      l,
      (c, f) => {
        r && gt(c)
          ? Object.defineProperty(i, f, {
              value: Wp(c, r),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(i, f, {
              value: c,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: s },
    ),
    i
  ),
  lx = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
  ix = (i, l, r, s) => {
    ((i.prototype = Object.create(l.prototype, s)),
      Object.defineProperty(i.prototype, "constructor", {
        value: i,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(i, "super", { value: l.prototype }),
      r && Object.assign(i.prototype, r));
  },
  rx = (i, l, r, s) => {
    let c, f, h;
    const y = {};
    if (((l = l || {}), i == null)) return l;
    do {
      for (c = Object.getOwnPropertyNames(i), f = c.length; f-- > 0; )
        ((h = c[f]),
          (!s || s(h, i, l)) && !y[h] && ((l[h] = i[h]), (y[h] = !0)));
      i = r !== !1 && Ac(i);
    } while (i && (!r || r(i, l)) && i !== Object.prototype);
    return l;
  },
  sx = (i, l, r) => {
    ((i = String(i)),
      (r === void 0 || r > i.length) && (r = i.length),
      (r -= l.length));
    const s = i.indexOf(l, r);
    return s !== -1 && s === r;
  },
  ux = (i) => {
    if (!i) return null;
    if (hl(i)) return i;
    let l = i.length;
    if (!ey(l)) return null;
    const r = new Array(l);
    for (; l-- > 0; ) r[l] = i[l];
    return r;
  },
  ox = (
    (i) => (l) =>
      i && l instanceof i
  )(typeof Uint8Array < "u" && Ac(Uint8Array)),
  cx = (i, l) => {
    const s = (i && i[hs]).call(i);
    let c;
    for (; (c = s.next()) && !c.done; ) {
      const f = c.value;
      l.call(i, f[0], f[1]);
    }
  },
  fx = (i, l) => {
    let r;
    const s = [];
    for (; (r = i.exec(l)) !== null; ) s.push(r);
    return s;
  },
  dx = Jt("HTMLFormElement"),
  hx = (i) =>
    i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, c) {
      return s.toUpperCase() + c;
    }),
  lp = (
    ({ hasOwnProperty: i }) =>
    (l, r) =>
      i.call(l, r)
  )(Object.prototype),
  mx = Jt("RegExp"),
  ay = (i, l) => {
    const r = Object.getOwnPropertyDescriptors(i),
      s = {};
    (Ei(r, (c, f) => {
      let h;
      (h = l(c, f, i)) !== !1 && (s[f] = h || c);
    }),
      Object.defineProperties(i, s));
  },
  px = (i) => {
    ay(i, (l, r) => {
      if (gt(i) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = i[r];
      if (gt(s)) {
        if (((l.enumerable = !1), "writable" in l)) {
          l.writable = !1;
          return;
        }
        l.set ||
          (l.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  yx = (i, l) => {
    const r = {},
      s = (c) => {
        c.forEach((f) => {
          r[f] = !0;
        });
      };
    return (hl(i) ? s(i) : s(String(i).split(l)), r);
  },
  gx = () => {},
  vx = (i, l) => (i != null && Number.isFinite((i = +i)) ? i : l);
function bx(i) {
  return !!(i && gt(i.append) && i[Pp] === "FormData" && i[hs]);
}
const xx = (i) => {
    const l = new Array(10),
      r = (s, c) => {
        if (Si(s)) {
          if (l.indexOf(s) >= 0) return;
          if (xi(s)) return s;
          if (!("toJSON" in s)) {
            l[c] = s;
            const f = hl(s) ? [] : {};
            return (
              Ei(s, (h, y) => {
                const p = r(h, c + 1);
                !ol(p) && (f[y] = p);
              }),
              (l[c] = void 0),
              f
            );
          }
        }
        return s;
      };
    return r(i, 0);
  },
  Sx = Jt("AsyncFunction"),
  Ex = (i) => i && (Si(i) || gt(i)) && gt(i.then) && gt(i.catch),
  ly = ((i, l) =>
    i
      ? setImmediate
      : l
        ? ((r, s) => (
            Sa.addEventListener(
              "message",
              ({ source: c, data: f }) => {
                c === Sa && f === r && s.length && s.shift()();
              },
              !1,
            ),
            (c) => {
              (s.push(c), Sa.postMessage(r, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    gt(Sa.postMessage),
  ),
  _x =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Sa)
      : (typeof process < "u" && process.nextTick) || ly,
  Ax = (i) => i != null && gt(i[hs]),
  z = {
    isArray: hl,
    isArrayBuffer: Ip,
    isBuffer: xi,
    isFormData: $b,
    isArrayBufferView: Hb,
    isString: qb,
    isNumber: ey,
    isBoolean: Fb,
    isObject: Si,
    isPlainObject: Pr,
    isEmptyObject: kb,
    isReadableStream: Pb,
    isRequest: Ib,
    isResponse: ex,
    isHeaders: tx,
    isUndefined: ol,
    isDate: Yb,
    isFile: Gb,
    isReactNativeBlob: Vb,
    isReactNative: Xb,
    isBlob: Qb,
    isRegExp: mx,
    isFunction: gt,
    isStream: Kb,
    isURLSearchParams: Wb,
    isTypedArray: ox,
    isFileList: Zb,
    forEach: Ei,
    merge: ic,
    extend: ax,
    trim: nx,
    stripBOM: lx,
    inherits: ix,
    toFlatObject: rx,
    kindOf: ms,
    kindOfTest: Jt,
    endsWith: sx,
    toArray: ux,
    forEachEntry: cx,
    matchAll: fx,
    isHTMLForm: dx,
    hasOwnProperty: lp,
    hasOwnProp: lp,
    reduceDescriptors: ay,
    freezeMethods: px,
    toObjectSet: yx,
    toCamelCase: hx,
    noop: gx,
    toFiniteNumber: vx,
    findKey: ty,
    global: Sa,
    isContextDefined: ny,
    isSpecCompliantForm: bx,
    toJSONObject: xx,
    isAsyncFn: Sx,
    isThenable: Ex,
    setImmediate: ly,
    asap: _x,
    isIterable: Ax,
  };
let te = class iy extends Error {
  static from(l, r, s, c, f, h) {
    const y = new iy(l.message, r || l.code, s, c, f);
    return (
      (y.cause = l),
      (y.name = l.name),
      l.status != null && y.status == null && (y.status = l.status),
      h && Object.assign(y, h),
      y
    );
  }
  constructor(l, r, s, c, f) {
    (super(l),
      Object.defineProperty(this, "message", {
        value: l,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      r && (this.code = r),
      s && (this.config = s),
      c && (this.request = c),
      f && ((this.response = f), (this.status = f.status)));
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  }
};
te.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
te.ERR_BAD_OPTION = "ERR_BAD_OPTION";
te.ECONNABORTED = "ECONNABORTED";
te.ETIMEDOUT = "ETIMEDOUT";
te.ERR_NETWORK = "ERR_NETWORK";
te.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
te.ERR_DEPRECATED = "ERR_DEPRECATED";
te.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
te.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
te.ERR_CANCELED = "ERR_CANCELED";
te.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
te.ERR_INVALID_URL = "ERR_INVALID_URL";
const Nx = null;
function rc(i) {
  return z.isPlainObject(i) || z.isArray(i);
}
function ry(i) {
  return z.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Ko(i, l, r) {
  return i
    ? i
        .concat(l)
        .map(function (c, f) {
          return ((c = ry(c)), !r && f ? "[" + c + "]" : c);
        })
        .join(r ? "." : "")
    : l;
}
function Tx(i) {
  return z.isArray(i) && !i.some(rc);
}
const Rx = z.toFlatObject(z, {}, null, function (l) {
  return /^is[A-Z]/.test(l);
});
function ys(i, l, r) {
  if (!z.isObject(i)) throw new TypeError("target must be an object");
  ((l = l || new FormData()),
    (r = z.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (U, C) {
        return !z.isUndefined(C[U]);
      },
    )));
  const s = r.metaTokens,
    c = r.visitor || b,
    f = r.dots,
    h = r.indexes,
    p = (r.Blob || (typeof Blob < "u" && Blob)) && z.isSpecCompliantForm(l);
  if (!z.isFunction(c)) throw new TypeError("visitor must be a function");
  function g(O) {
    if (O === null) return "";
    if (z.isDate(O)) return O.toISOString();
    if (z.isBoolean(O)) return O.toString();
    if (!p && z.isBlob(O))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(O) || z.isTypedArray(O)
      ? p && typeof Blob == "function"
        ? new Blob([O])
        : Buffer.from(O)
      : O;
  }
  function b(O, U, C) {
    let k = O;
    if (z.isReactNative(l) && z.isReactNativeBlob(O))
      return (l.append(Ko(C, U, f), g(O)), !1);
    if (O && !C && typeof O == "object") {
      if (z.endsWith(U, "{}"))
        ((U = s ? U : U.slice(0, -2)), (O = JSON.stringify(O)));
      else if (
        (z.isArray(O) && Tx(O)) ||
        ((z.isFileList(O) || z.endsWith(U, "[]")) && (k = z.toArray(O)))
      )
        return (
          (U = ry(U)),
          k.forEach(function (Y, ee) {
            !(z.isUndefined(Y) || Y === null) &&
              l.append(
                h === !0 ? Ko([U], ee, f) : h === null ? U : U + "[]",
                g(Y),
              );
          }),
          !1
        );
    }
    return rc(O) ? !0 : (l.append(Ko(C, U, f), g(O)), !1);
  }
  const x = [],
    B = Object.assign(Rx, {
      defaultVisitor: b,
      convertValue: g,
      isVisitable: rc,
    });
  function F(O, U) {
    if (!z.isUndefined(O)) {
      if (x.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + U.join("."));
      (x.push(O),
        z.forEach(O, function (k, K) {
          (!(z.isUndefined(k) || k === null) &&
            c.call(l, k, z.isString(K) ? K.trim() : K, U, B)) === !0 &&
            F(k, U ? U.concat(K) : [K]);
        }),
        x.pop());
    }
  }
  if (!z.isObject(i)) throw new TypeError("data must be an object");
  return (F(i), l);
}
function ip(i) {
  const l = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function (s) {
    return l[s];
  });
}
function Nc(i, l) {
  ((this._pairs = []), i && ys(i, this, l));
}
const sy = Nc.prototype;
sy.append = function (l, r) {
  this._pairs.push([l, r]);
};
sy.toString = function (l) {
  const r = l
    ? function (s) {
        return l.call(this, s, ip);
      }
    : ip;
  return this._pairs
    .map(function (c) {
      return r(c[0]) + "=" + r(c[1]);
    }, "")
    .join("&");
};
function Cx(i) {
  return encodeURIComponent(i)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function uy(i, l, r) {
  if (!l) return i;
  const s = (r && r.encode) || Cx,
    c = z.isFunction(r) ? { serialize: r } : r,
    f = c && c.serialize;
  let h;
  if (
    (f
      ? (h = f(l, c))
      : (h = z.isURLSearchParams(l) ? l.toString() : new Nc(l, c).toString(s)),
    h)
  ) {
    const y = i.indexOf("#");
    (y !== -1 && (i = i.slice(0, y)),
      (i += (i.indexOf("?") === -1 ? "?" : "&") + h));
  }
  return i;
}
class rp {
  constructor() {
    this.handlers = [];
  }
  use(l, r, s) {
    return (
      this.handlers.push({
        fulfilled: l,
        rejected: r,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(l) {
    this.handlers[l] && (this.handlers[l] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(l) {
    z.forEach(this.handlers, function (s) {
      s !== null && l(s);
    });
  }
}
const Tc = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  wx = typeof URLSearchParams < "u" ? URLSearchParams : Nc,
  Ox = typeof FormData < "u" ? FormData : null,
  zx = typeof Blob < "u" ? Blob : null,
  jx = {
    isBrowser: !0,
    classes: { URLSearchParams: wx, FormData: Ox, Blob: zx },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Rc = typeof window < "u" && typeof document < "u",
  sc = (typeof navigator == "object" && navigator) || void 0,
  Dx =
    Rc &&
    (!sc || ["ReactNative", "NativeScript", "NS"].indexOf(sc.product) < 0),
  Bx =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Mx = (Rc && window.location.href) || "http://localhost",
  Ux = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Rc,
        hasStandardBrowserEnv: Dx,
        hasStandardBrowserWebWorkerEnv: Bx,
        navigator: sc,
        origin: Mx,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  rt = { ...Ux, ...jx };
function Lx(i, l) {
  return ys(i, new rt.classes.URLSearchParams(), {
    visitor: function (r, s, c, f) {
      return rt.isNode && z.isBuffer(r)
        ? (this.append(s, r.toString("base64")), !1)
        : f.defaultVisitor.apply(this, arguments);
    },
    ...l,
  });
}
function Hx(i) {
  return z
    .matchAll(/\w+|\[(\w*)]/g, i)
    .map((l) => (l[0] === "[]" ? "" : l[1] || l[0]));
}
function qx(i) {
  const l = {},
    r = Object.keys(i);
  let s;
  const c = r.length;
  let f;
  for (s = 0; s < c; s++) ((f = r[s]), (l[f] = i[f]));
  return l;
}
function oy(i) {
  function l(r, s, c, f) {
    let h = r[f++];
    if (h === "__proto__") return !0;
    const y = Number.isFinite(+h),
      p = f >= r.length;
    return (
      (h = !h && z.isArray(c) ? c.length : h),
      p
        ? (z.hasOwnProp(c, h) ? (c[h] = [c[h], s]) : (c[h] = s), !y)
        : ((!c[h] || !z.isObject(c[h])) && (c[h] = []),
          l(r, s, c[h], f) && z.isArray(c[h]) && (c[h] = qx(c[h])),
          !y)
    );
  }
  if (z.isFormData(i) && z.isFunction(i.entries)) {
    const r = {};
    return (
      z.forEachEntry(i, (s, c) => {
        l(Hx(s), c, r, 0);
      }),
      r
    );
  }
  return null;
}
function Fx(i, l, r) {
  if (z.isString(i))
    try {
      return ((l || JSON.parse)(i), z.trim(i));
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(i);
}
const _i = {
  transitional: Tc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (l, r) {
      const s = r.getContentType() || "",
        c = s.indexOf("application/json") > -1,
        f = z.isObject(l);
      if ((f && z.isHTMLForm(l) && (l = new FormData(l)), z.isFormData(l)))
        return c ? JSON.stringify(oy(l)) : l;
      if (
        z.isArrayBuffer(l) ||
        z.isBuffer(l) ||
        z.isStream(l) ||
        z.isFile(l) ||
        z.isBlob(l) ||
        z.isReadableStream(l)
      )
        return l;
      if (z.isArrayBufferView(l)) return l.buffer;
      if (z.isURLSearchParams(l))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          l.toString()
        );
      let y;
      if (f) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return Lx(l, this.formSerializer).toString();
        if ((y = z.isFileList(l)) || s.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return ys(
            y ? { "files[]": l } : l,
            p && new p(),
            this.formSerializer,
          );
        }
      }
      return f || c ? (r.setContentType("application/json", !1), Fx(l)) : l;
    },
  ],
  transformResponse: [
    function (l) {
      const r = this.transitional || _i.transitional,
        s = r && r.forcedJSONParsing,
        c = this.responseType === "json";
      if (z.isResponse(l) || z.isReadableStream(l)) return l;
      if (l && z.isString(l) && ((s && !this.responseType) || c)) {
        const h = !(r && r.silentJSONParsing) && c;
        try {
          return JSON.parse(l, this.parseReviver);
        } catch (y) {
          if (h)
            throw y.name === "SyntaxError"
              ? te.from(y, te.ERR_BAD_RESPONSE, this, null, this.response)
              : y;
        }
      }
      return l;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: rt.classes.FormData, Blob: rt.classes.Blob },
  validateStatus: function (l) {
    return l >= 200 && l < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  _i.headers[i] = {};
});
const kx = z.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Yx = (i) => {
    const l = {};
    let r, s, c;
    return (
      i &&
        i
          .split(
            `
`,
          )
          .forEach(function (h) {
            ((c = h.indexOf(":")),
              (r = h.substring(0, c).trim().toLowerCase()),
              (s = h.substring(c + 1).trim()),
              !(!r || (l[r] && kx[r])) &&
                (r === "set-cookie"
                  ? l[r]
                    ? l[r].push(s)
                    : (l[r] = [s])
                  : (l[r] = l[r] ? l[r] + ", " + s : s)));
          }),
      l
    );
  },
  sp = Symbol("internals");
function di(i) {
  return i && String(i).trim().toLowerCase();
}
function Ir(i) {
  return i === !1 || i == null ? i : z.isArray(i) ? i.map(Ir) : String(i);
}
function Gx(i) {
  const l = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(i)); ) l[s[1]] = s[2];
  return l;
}
const Vx = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function Jo(i, l, r, s, c) {
  if (z.isFunction(s)) return s.call(this, l, r);
  if ((c && (l = r), !!z.isString(l))) {
    if (z.isString(s)) return l.indexOf(s) !== -1;
    if (z.isRegExp(s)) return s.test(l);
  }
}
function Xx(i) {
  return i
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (l, r, s) => r.toUpperCase() + s);
}
function Qx(i, l) {
  const r = z.toCamelCase(" " + l);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(i, s + r, {
      value: function (c, f, h) {
        return this[s].call(this, l, c, f, h);
      },
      configurable: !0,
    });
  });
}
let vt = class {
  constructor(l) {
    l && this.set(l);
  }
  set(l, r, s) {
    const c = this;
    function f(y, p, g) {
      const b = di(p);
      if (!b) throw new Error("header name must be a non-empty string");
      const x = z.findKey(c, b);
      (!x || c[x] === void 0 || g === !0 || (g === void 0 && c[x] !== !1)) &&
        (c[x || p] = Ir(y));
    }
    const h = (y, p) => z.forEach(y, (g, b) => f(g, b, p));
    if (z.isPlainObject(l) || l instanceof this.constructor) h(l, r);
    else if (z.isString(l) && (l = l.trim()) && !Vx(l)) h(Yx(l), r);
    else if (z.isObject(l) && z.isIterable(l)) {
      let y = {},
        p,
        g;
      for (const b of l) {
        if (!z.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        y[(g = b[0])] = (p = y[g])
          ? z.isArray(p)
            ? [...p, b[1]]
            : [p, b[1]]
          : b[1];
      }
      h(y, r);
    } else l != null && f(r, l, s);
    return this;
  }
  get(l, r) {
    if (((l = di(l)), l)) {
      const s = z.findKey(this, l);
      if (s) {
        const c = this[s];
        if (!r) return c;
        if (r === !0) return Gx(c);
        if (z.isFunction(r)) return r.call(this, c, s);
        if (z.isRegExp(r)) return r.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(l, r) {
    if (((l = di(l)), l)) {
      const s = z.findKey(this, l);
      return !!(s && this[s] !== void 0 && (!r || Jo(this, this[s], s, r)));
    }
    return !1;
  }
  delete(l, r) {
    const s = this;
    let c = !1;
    function f(h) {
      if (((h = di(h)), h)) {
        const y = z.findKey(s, h);
        y && (!r || Jo(s, s[y], y, r)) && (delete s[y], (c = !0));
      }
    }
    return (z.isArray(l) ? l.forEach(f) : f(l), c);
  }
  clear(l) {
    const r = Object.keys(this);
    let s = r.length,
      c = !1;
    for (; s--; ) {
      const f = r[s];
      (!l || Jo(this, this[f], f, l, !0)) && (delete this[f], (c = !0));
    }
    return c;
  }
  normalize(l) {
    const r = this,
      s = {};
    return (
      z.forEach(this, (c, f) => {
        const h = z.findKey(s, f);
        if (h) {
          ((r[h] = Ir(c)), delete r[f]);
          return;
        }
        const y = l ? Xx(f) : String(f).trim();
        (y !== f && delete r[f], (r[y] = Ir(c)), (s[y] = !0));
      }),
      this
    );
  }
  concat(...l) {
    return this.constructor.concat(this, ...l);
  }
  toJSON(l) {
    const r = Object.create(null);
    return (
      z.forEach(this, (s, c) => {
        s != null && s !== !1 && (r[c] = l && z.isArray(s) ? s.join(", ") : s);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([l, r]) => l + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(l) {
    return l instanceof this ? l : new this(l);
  }
  static concat(l, ...r) {
    const s = new this(l);
    return (r.forEach((c) => s.set(c)), s);
  }
  static accessor(l) {
    const s = (this[sp] = this[sp] = { accessors: {} }).accessors,
      c = this.prototype;
    function f(h) {
      const y = di(h);
      s[y] || (Qx(c, h), (s[y] = !0));
    }
    return (z.isArray(l) ? l.forEach(f) : f(l), this);
  }
};
vt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
z.reduceDescriptors(vt.prototype, ({ value: i }, l) => {
  let r = l[0].toUpperCase() + l.slice(1);
  return {
    get: () => i,
    set(s) {
      this[r] = s;
    },
  };
});
z.freezeMethods(vt);
function $o(i, l) {
  const r = this || _i,
    s = l || r,
    c = vt.from(s.headers);
  let f = s.data;
  return (
    z.forEach(i, function (y) {
      f = y.call(r, f, c.normalize(), l ? l.status : void 0);
    }),
    c.normalize(),
    f
  );
}
function cy(i) {
  return !!(i && i.__CANCEL__);
}
let Ai = class extends te {
  constructor(l, r, s) {
    (super(l ?? "canceled", te.ERR_CANCELED, r, s),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function fy(i, l, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? i(r)
    : l(
        new te(
          "Request failed with status code " + r.status,
          [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r,
        ),
      );
}
function Zx(i) {
  const l = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return (l && l[1]) || "";
}
function Kx(i, l) {
  i = i || 10;
  const r = new Array(i),
    s = new Array(i);
  let c = 0,
    f = 0,
    h;
  return (
    (l = l !== void 0 ? l : 1e3),
    function (p) {
      const g = Date.now(),
        b = s[f];
      (h || (h = g), (r[c] = p), (s[c] = g));
      let x = f,
        B = 0;
      for (; x !== c; ) ((B += r[x++]), (x = x % i));
      if (((c = (c + 1) % i), c === f && (f = (f + 1) % i), g - h < l)) return;
      const F = b && g - b;
      return F ? Math.round((B * 1e3) / F) : void 0;
    }
  );
}
function Jx(i, l) {
  let r = 0,
    s = 1e3 / l,
    c,
    f;
  const h = (g, b = Date.now()) => {
    ((r = b), (c = null), f && (clearTimeout(f), (f = null)), i(...g));
  };
  return [
    (...g) => {
      const b = Date.now(),
        x = b - r;
      x >= s
        ? h(g, b)
        : ((c = g),
          f ||
            (f = setTimeout(() => {
              ((f = null), h(c));
            }, s - x)));
    },
    () => c && h(c),
  ];
}
const ss = (i, l, r = 3) => {
    let s = 0;
    const c = Kx(50, 250);
    return Jx((f) => {
      const h = f.loaded,
        y = f.lengthComputable ? f.total : void 0,
        p = h - s,
        g = c(p),
        b = h <= y;
      s = h;
      const x = {
        loaded: h,
        total: y,
        progress: y ? h / y : void 0,
        bytes: p,
        rate: g || void 0,
        estimated: g && y && b ? (y - h) / g : void 0,
        event: f,
        lengthComputable: y != null,
        [l ? "download" : "upload"]: !0,
      };
      i(x);
    }, r);
  },
  up = (i, l) => {
    const r = i != null;
    return [(s) => l[0]({ lengthComputable: r, total: i, loaded: s }), l[1]];
  },
  op =
    (i) =>
    (...l) =>
      z.asap(() => i(...l)),
  $x = rt.hasStandardBrowserEnv
    ? ((i, l) => (r) => (
        (r = new URL(r, rt.origin)),
        i.protocol === r.protocol &&
          i.host === r.host &&
          (l || i.port === r.port)
      ))(
        new URL(rt.origin),
        rt.navigator && /(msie|trident)/i.test(rt.navigator.userAgent),
      )
    : () => !0,
  Wx = rt.hasStandardBrowserEnv
    ? {
        write(i, l, r, s, c, f, h) {
          if (typeof document > "u") return;
          const y = [`${i}=${encodeURIComponent(l)}`];
          (z.isNumber(r) && y.push(`expires=${new Date(r).toUTCString()}`),
            z.isString(s) && y.push(`path=${s}`),
            z.isString(c) && y.push(`domain=${c}`),
            f === !0 && y.push("secure"),
            z.isString(h) && y.push(`SameSite=${h}`),
            (document.cookie = y.join("; ")));
        },
        read(i) {
          if (typeof document > "u") return null;
          const l = document.cookie.match(
            new RegExp("(?:^|; )" + i + "=([^;]*)"),
          );
          return l ? decodeURIComponent(l[1]) : null;
        },
        remove(i) {
          this.write(i, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Px(i) {
  return typeof i != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Ix(i, l) {
  return l ? i.replace(/\/?\/$/, "") + "/" + l.replace(/^\/+/, "") : i;
}
function dy(i, l, r) {
  let s = !Px(l);
  return i && (s || r == !1) ? Ix(i, l) : l;
}
const cp = (i) => (i instanceof vt ? { ...i } : i);
function Aa(i, l) {
  l = l || {};
  const r = {};
  function s(g, b, x, B) {
    return z.isPlainObject(g) && z.isPlainObject(b)
      ? z.merge.call({ caseless: B }, g, b)
      : z.isPlainObject(b)
        ? z.merge({}, b)
        : z.isArray(b)
          ? b.slice()
          : b;
  }
  function c(g, b, x, B) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(g)) return s(void 0, g, x, B);
    } else return s(g, b, x, B);
  }
  function f(g, b) {
    if (!z.isUndefined(b)) return s(void 0, b);
  }
  function h(g, b) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(g)) return s(void 0, g);
    } else return s(void 0, b);
  }
  function y(g, b, x) {
    if (x in l) return s(g, b);
    if (x in i) return s(void 0, g);
  }
  const p = {
    url: f,
    method: f,
    data: f,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: y,
    headers: (g, b, x) => c(cp(g), cp(b), x, !0),
  };
  return (
    z.forEach(Object.keys({ ...i, ...l }), function (b) {
      if (b === "__proto__" || b === "constructor" || b === "prototype") return;
      const x = z.hasOwnProp(p, b) ? p[b] : c,
        B = x(i[b], l[b], b);
      (z.isUndefined(B) && x !== y) || (r[b] = B);
    }),
    r
  );
}
const hy = (i) => {
    const l = Aa({}, i);
    let {
      data: r,
      withXSRFToken: s,
      xsrfHeaderName: c,
      xsrfCookieName: f,
      headers: h,
      auth: y,
    } = l;
    if (
      ((l.headers = h = vt.from(h)),
      (l.url = uy(
        dy(l.baseURL, l.url, l.allowAbsoluteUrls),
        i.params,
        i.paramsSerializer,
      )),
      y &&
        h.set(
          "Authorization",
          "Basic " +
            btoa(
              (y.username || "") +
                ":" +
                (y.password ? unescape(encodeURIComponent(y.password)) : ""),
            ),
        ),
      z.isFormData(r))
    ) {
      if (rt.hasStandardBrowserEnv || rt.hasStandardBrowserWebWorkerEnv)
        h.setContentType(void 0);
      else if (z.isFunction(r.getHeaders)) {
        const p = r.getHeaders(),
          g = ["content-type", "content-length"];
        Object.entries(p).forEach(([b, x]) => {
          g.includes(b.toLowerCase()) && h.set(b, x);
        });
      }
    }
    if (
      rt.hasStandardBrowserEnv &&
      (s && z.isFunction(s) && (s = s(l)), s || (s !== !1 && $x(l.url)))
    ) {
      const p = c && f && Wx.read(f);
      p && h.set(c, p);
    }
    return l;
  },
  e2 = typeof XMLHttpRequest < "u",
  t2 =
    e2 &&
    function (i) {
      return new Promise(function (r, s) {
        const c = hy(i);
        let f = c.data;
        const h = vt.from(c.headers).normalize();
        let { responseType: y, onUploadProgress: p, onDownloadProgress: g } = c,
          b,
          x,
          B,
          F,
          O;
        function U() {
          (F && F(),
            O && O(),
            c.cancelToken && c.cancelToken.unsubscribe(b),
            c.signal && c.signal.removeEventListener("abort", b));
        }
        let C = new XMLHttpRequest();
        (C.open(c.method.toUpperCase(), c.url, !0), (C.timeout = c.timeout));
        function k() {
          if (!C) return;
          const Y = vt.from(
              "getAllResponseHeaders" in C && C.getAllResponseHeaders(),
            ),
            ie = {
              data:
                !y || y === "text" || y === "json"
                  ? C.responseText
                  : C.response,
              status: C.status,
              statusText: C.statusText,
              headers: Y,
              config: i,
              request: C,
            };
          (fy(
            function (X) {
              (r(X), U());
            },
            function (X) {
              (s(X), U());
            },
            ie,
          ),
            (C = null));
        }
        ("onloadend" in C
          ? (C.onloadend = k)
          : (C.onreadystatechange = function () {
              !C ||
                C.readyState !== 4 ||
                (C.status === 0 &&
                  !(C.responseURL && C.responseURL.indexOf("file:") === 0)) ||
                setTimeout(k);
            }),
          (C.onabort = function () {
            C &&
              (s(new te("Request aborted", te.ECONNABORTED, i, C)), (C = null));
          }),
          (C.onerror = function (ee) {
            const ie = ee && ee.message ? ee.message : "Network Error",
              P = new te(ie, te.ERR_NETWORK, i, C);
            ((P.event = ee || null), s(P), (C = null));
          }),
          (C.ontimeout = function () {
            let ee = c.timeout
              ? "timeout of " + c.timeout + "ms exceeded"
              : "timeout exceeded";
            const ie = c.transitional || Tc;
            (c.timeoutErrorMessage && (ee = c.timeoutErrorMessage),
              s(
                new te(
                  ee,
                  ie.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
                  i,
                  C,
                ),
              ),
              (C = null));
          }),
          f === void 0 && h.setContentType(null),
          "setRequestHeader" in C &&
            z.forEach(h.toJSON(), function (ee, ie) {
              C.setRequestHeader(ie, ee);
            }),
          z.isUndefined(c.withCredentials) ||
            (C.withCredentials = !!c.withCredentials),
          y && y !== "json" && (C.responseType = c.responseType),
          g && (([B, O] = ss(g, !0)), C.addEventListener("progress", B)),
          p &&
            C.upload &&
            (([x, F] = ss(p)),
            C.upload.addEventListener("progress", x),
            C.upload.addEventListener("loadend", F)),
          (c.cancelToken || c.signal) &&
            ((b = (Y) => {
              C &&
                (s(!Y || Y.type ? new Ai(null, i, C) : Y),
                C.abort(),
                (C = null));
            }),
            c.cancelToken && c.cancelToken.subscribe(b),
            c.signal &&
              (c.signal.aborted
                ? b()
                : c.signal.addEventListener("abort", b))));
        const K = Zx(c.url);
        if (K && rt.protocols.indexOf(K) === -1) {
          s(new te("Unsupported protocol " + K + ":", te.ERR_BAD_REQUEST, i));
          return;
        }
        C.send(f || null);
      });
    },
  n2 = (i, l) => {
    const { length: r } = (i = i ? i.filter(Boolean) : []);
    if (l || r) {
      let s = new AbortController(),
        c;
      const f = function (g) {
        if (!c) {
          ((c = !0), y());
          const b = g instanceof Error ? g : this.reason;
          s.abort(
            b instanceof te ? b : new Ai(b instanceof Error ? b.message : b),
          );
        }
      };
      let h =
        l &&
        setTimeout(() => {
          ((h = null), f(new te(`timeout of ${l}ms exceeded`, te.ETIMEDOUT)));
        }, l);
      const y = () => {
        i &&
          (h && clearTimeout(h),
          (h = null),
          i.forEach((g) => {
            g.unsubscribe
              ? g.unsubscribe(f)
              : g.removeEventListener("abort", f);
          }),
          (i = null));
      };
      i.forEach((g) => g.addEventListener("abort", f));
      const { signal: p } = s;
      return ((p.unsubscribe = () => z.asap(y)), p);
    }
  },
  a2 = function* (i, l) {
    let r = i.byteLength;
    if (r < l) {
      yield i;
      return;
    }
    let s = 0,
      c;
    for (; s < r; ) ((c = s + l), yield i.slice(s, c), (s = c));
  },
  l2 = async function* (i, l) {
    for await (const r of i2(i)) yield* a2(r, l);
  },
  i2 = async function* (i) {
    if (i[Symbol.asyncIterator]) {
      yield* i;
      return;
    }
    const l = i.getReader();
    try {
      for (;;) {
        const { done: r, value: s } = await l.read();
        if (r) break;
        yield s;
      }
    } finally {
      await l.cancel();
    }
  },
  fp = (i, l, r, s) => {
    const c = l2(i, l);
    let f = 0,
      h,
      y = (p) => {
        h || ((h = !0), s && s(p));
      };
    return new ReadableStream(
      {
        async pull(p) {
          try {
            const { done: g, value: b } = await c.next();
            if (g) {
              (y(), p.close());
              return;
            }
            let x = b.byteLength;
            if (r) {
              let B = (f += x);
              r(B);
            }
            p.enqueue(new Uint8Array(b));
          } catch (g) {
            throw (y(g), g);
          }
        },
        cancel(p) {
          return (y(p), c.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  dp = 64 * 1024,
  { isFunction: Xr } = z,
  r2 = (({ Request: i, Response: l }) => ({ Request: i, Response: l }))(
    z.global,
  ),
  { ReadableStream: hp, TextEncoder: mp } = z.global,
  pp = (i, ...l) => {
    try {
      return !!i(...l);
    } catch {
      return !1;
    }
  },
  s2 = (i) => {
    i = z.merge.call({ skipUndefined: !0 }, r2, i);
    const { fetch: l, Request: r, Response: s } = i,
      c = l ? Xr(l) : typeof fetch == "function",
      f = Xr(r),
      h = Xr(s);
    if (!c) return !1;
    const y = c && Xr(hp),
      p =
        c &&
        (typeof mp == "function"
          ? (
              (O) => (U) =>
                O.encode(U)
            )(new mp())
          : async (O) => new Uint8Array(await new r(O).arrayBuffer())),
      g =
        f &&
        y &&
        pp(() => {
          let O = !1;
          const U = new r(rt.origin, {
            body: new hp(),
            method: "POST",
            get duplex() {
              return ((O = !0), "half");
            },
          }).headers.has("Content-Type");
          return O && !U;
        }),
      b = h && y && pp(() => z.isReadableStream(new s("").body)),
      x = { stream: b && ((O) => O.body) };
    c &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((O) => {
        !x[O] &&
          (x[O] = (U, C) => {
            let k = U && U[O];
            if (k) return k.call(U);
            throw new te(
              `Response type '${O}' is not supported`,
              te.ERR_NOT_SUPPORT,
              C,
            );
          });
      });
    const B = async (O) => {
        if (O == null) return 0;
        if (z.isBlob(O)) return O.size;
        if (z.isSpecCompliantForm(O))
          return (
            await new r(rt.origin, { method: "POST", body: O }).arrayBuffer()
          ).byteLength;
        if (z.isArrayBufferView(O) || z.isArrayBuffer(O)) return O.byteLength;
        if ((z.isURLSearchParams(O) && (O = O + ""), z.isString(O)))
          return (await p(O)).byteLength;
      },
      F = async (O, U) => {
        const C = z.toFiniteNumber(O.getContentLength());
        return C ?? B(U);
      };
    return async (O) => {
      let {
          url: U,
          method: C,
          data: k,
          signal: K,
          cancelToken: Y,
          timeout: ee,
          onDownloadProgress: ie,
          onUploadProgress: P,
          responseType: X,
          headers: Te,
          withCredentials: Me = "same-origin",
          fetchOptions: bt,
        } = hy(O),
        st = l || fetch;
      X = X ? (X + "").toLowerCase() : "text";
      let Ue = n2([K, Y && Y.toAbortSignal()], ee),
        at = null;
      const ke =
        Ue &&
        Ue.unsubscribe &&
        (() => {
          Ue.unsubscribe();
        });
      let je;
      try {
        if (
          P &&
          g &&
          C !== "get" &&
          C !== "head" &&
          (je = await F(Te, k)) !== 0
        ) {
          let E = new r(U, { method: "POST", body: k, duplex: "half" }),
            H;
          if (
            (z.isFormData(k) &&
              (H = E.headers.get("content-type")) &&
              Te.setContentType(H),
            E.body)
          ) {
            const [V, Q] = up(je, ss(op(P)));
            k = fp(E.body, dp, V, Q);
          }
        }
        z.isString(Me) || (Me = Me ? "include" : "omit");
        const D = f && "credentials" in r.prototype,
          G = {
            ...bt,
            signal: Ue,
            method: C.toUpperCase(),
            headers: Te.normalize().toJSON(),
            body: k,
            duplex: "half",
            credentials: D ? Me : void 0,
          };
        at = f && new r(U, G);
        let $ = await (f ? st(at, bt) : st(U, G));
        const ye = b && (X === "stream" || X === "response");
        if (b && (ie || (ye && ke))) {
          const E = {};
          ["status", "statusText", "headers"].forEach((ne) => {
            E[ne] = $[ne];
          });
          const H = z.toFiniteNumber($.headers.get("content-length")),
            [V, Q] = (ie && up(H, ss(op(ie), !0))) || [];
          $ = new s(
            fp($.body, dp, V, () => {
              (Q && Q(), ke && ke());
            }),
            E,
          );
        }
        X = X || "text";
        let be = await x[z.findKey(x, X) || "text"]($, O);
        return (
          !ye && ke && ke(),
          await new Promise((E, H) => {
            fy(E, H, {
              data: be,
              headers: vt.from($.headers),
              status: $.status,
              statusText: $.statusText,
              config: O,
              request: at,
            });
          })
        );
      } catch (D) {
        throw (
          ke && ke(),
          D && D.name === "TypeError" && /Load failed|fetch/i.test(D.message)
            ? Object.assign(
                new te("Network Error", te.ERR_NETWORK, O, at, D && D.response),
                { cause: D.cause || D },
              )
            : te.from(D, D && D.code, O, at, D && D.response)
        );
      }
    };
  },
  u2 = new Map(),
  my = (i) => {
    let l = (i && i.env) || {};
    const { fetch: r, Request: s, Response: c } = l,
      f = [s, c, r];
    let h = f.length,
      y = h,
      p,
      g,
      b = u2;
    for (; y--; )
      ((p = f[y]),
        (g = b.get(p)),
        g === void 0 && b.set(p, (g = y ? new Map() : s2(l))),
        (b = g));
    return g;
  };
my();
const Cc = { http: Nx, xhr: t2, fetch: { get: my } };
z.forEach(Cc, (i, l) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: l });
    } catch {}
    Object.defineProperty(i, "adapterName", { value: l });
  }
});
const yp = (i) => `- ${i}`,
  o2 = (i) => z.isFunction(i) || i === null || i === !1;
function c2(i, l) {
  i = z.isArray(i) ? i : [i];
  const { length: r } = i;
  let s, c;
  const f = {};
  for (let h = 0; h < r; h++) {
    s = i[h];
    let y;
    if (
      ((c = s),
      !o2(s) && ((c = Cc[(y = String(s)).toLowerCase()]), c === void 0))
    )
      throw new te(`Unknown adapter '${y}'`);
    if (c && (z.isFunction(c) || (c = c.get(l)))) break;
    f[y || "#" + h] = c;
  }
  if (!c) {
    const h = Object.entries(f).map(
      ([p, g]) =>
        `adapter ${p} ` +
        (g === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let y = r
      ? h.length > 1
        ? `since :
` +
          h.map(yp).join(`
`)
        : " " + yp(h[0])
      : "as no adapter specified";
    throw new te(
      "There is no suitable adapter to dispatch the request " + y,
      "ERR_NOT_SUPPORT",
    );
  }
  return c;
}
const py = { getAdapter: c2, adapters: Cc };
function Wo(i) {
  if (
    (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
  )
    throw new Ai(null, i);
}
function gp(i) {
  return (
    Wo(i),
    (i.headers = vt.from(i.headers)),
    (i.data = $o.call(i, i.transformRequest)),
    ["post", "put", "patch"].indexOf(i.method) !== -1 &&
      i.headers.setContentType("application/x-www-form-urlencoded", !1),
    py
      .getAdapter(
        i.adapter || _i.adapter,
        i,
      )(i)
      .then(
        function (s) {
          return (
            Wo(i),
            (s.data = $o.call(i, i.transformResponse, s)),
            (s.headers = vt.from(s.headers)),
            s
          );
        },
        function (s) {
          return (
            cy(s) ||
              (Wo(i),
              s &&
                s.response &&
                ((s.response.data = $o.call(
                  i,
                  i.transformResponse,
                  s.response,
                )),
                (s.response.headers = vt.from(s.response.headers)))),
            Promise.reject(s)
          );
        },
      )
  );
}
const yy = "1.13.6",
  gs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (i, l) => {
    gs[i] = function (s) {
      return typeof s === i || "a" + (l < 1 ? "n " : " ") + i;
    };
  },
);
const vp = {};
gs.transitional = function (l, r, s) {
  function c(f, h) {
    return (
      "[Axios v" +
      yy +
      "] Transitional option '" +
      f +
      "'" +
      h +
      (s ? ". " + s : "")
    );
  }
  return (f, h, y) => {
    if (l === !1)
      throw new te(
        c(h, " has been removed" + (r ? " in " + r : "")),
        te.ERR_DEPRECATED,
      );
    return (
      r &&
        !vp[h] &&
        ((vp[h] = !0),
        console.warn(
          c(
            h,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future",
          ),
        )),
      l ? l(f, h, y) : !0
    );
  };
};
gs.spelling = function (l) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${l}`), !0);
};
function f2(i, l, r) {
  if (typeof i != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(i);
  let c = s.length;
  for (; c-- > 0; ) {
    const f = s[c],
      h = l[f];
    if (h) {
      const y = i[f],
        p = y === void 0 || h(y, f, i);
      if (p !== !0)
        throw new te("option " + f + " must be " + p, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new te("Unknown option " + f, te.ERR_BAD_OPTION);
  }
}
const es = { assertOptions: f2, validators: gs },
  kt = es.validators;
let _a = class {
  constructor(l) {
    ((this.defaults = l || {}),
      (this.interceptors = { request: new rp(), response: new rp() }));
  }
  async request(l, r) {
    try {
      return await this._request(l, r);
    } catch (s) {
      if (s instanceof Error) {
        let c = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(c)
          : (c = new Error());
        const f = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? f &&
              !String(s.stack).endsWith(f.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + f)
            : (s.stack = f);
        } catch {}
      }
      throw s;
    }
  }
  _request(l, r) {
    (typeof l == "string" ? ((r = r || {}), (r.url = l)) : (r = l || {}),
      (r = Aa(this.defaults, r)));
    const { transitional: s, paramsSerializer: c, headers: f } = r;
    (s !== void 0 &&
      es.assertOptions(
        s,
        {
          silentJSONParsing: kt.transitional(kt.boolean),
          forcedJSONParsing: kt.transitional(kt.boolean),
          clarifyTimeoutError: kt.transitional(kt.boolean),
          legacyInterceptorReqResOrdering: kt.transitional(kt.boolean),
        },
        !1,
      ),
      c != null &&
        (z.isFunction(c)
          ? (r.paramsSerializer = { serialize: c })
          : es.assertOptions(
              c,
              { encode: kt.function, serialize: kt.function },
              !0,
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      es.assertOptions(
        r,
        {
          baseUrl: kt.spelling("baseURL"),
          withXsrfToken: kt.spelling("withXSRFToken"),
        },
        !0,
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase()));
    let h = f && z.merge(f.common, f[r.method]);
    (f &&
      z.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (O) => {
          delete f[O];
        },
      ),
      (r.headers = vt.concat(h, f)));
    const y = [];
    let p = !0;
    this.interceptors.request.forEach(function (U) {
      if (typeof U.runWhen == "function" && U.runWhen(r) === !1) return;
      p = p && U.synchronous;
      const C = r.transitional || Tc;
      C && C.legacyInterceptorReqResOrdering
        ? y.unshift(U.fulfilled, U.rejected)
        : y.push(U.fulfilled, U.rejected);
    });
    const g = [];
    this.interceptors.response.forEach(function (U) {
      g.push(U.fulfilled, U.rejected);
    });
    let b,
      x = 0,
      B;
    if (!p) {
      const O = [gp.bind(this), void 0];
      for (
        O.unshift(...y), O.push(...g), B = O.length, b = Promise.resolve(r);
        x < B;
      )
        b = b.then(O[x++], O[x++]);
      return b;
    }
    B = y.length;
    let F = r;
    for (; x < B; ) {
      const O = y[x++],
        U = y[x++];
      try {
        F = O(F);
      } catch (C) {
        U.call(this, C);
        break;
      }
    }
    try {
      b = gp.call(this, F);
    } catch (O) {
      return Promise.reject(O);
    }
    for (x = 0, B = g.length; x < B; ) b = b.then(g[x++], g[x++]);
    return b;
  }
  getUri(l) {
    l = Aa(this.defaults, l);
    const r = dy(l.baseURL, l.url, l.allowAbsoluteUrls);
    return uy(r, l.params, l.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function (l) {
  _a.prototype[l] = function (r, s) {
    return this.request(
      Aa(s || {}, { method: l, url: r, data: (s || {}).data }),
    );
  };
});
z.forEach(["post", "put", "patch"], function (l) {
  function r(s) {
    return function (f, h, y) {
      return this.request(
        Aa(y || {}, {
          method: l,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: f,
          data: h,
        }),
      );
    };
  }
  ((_a.prototype[l] = r()), (_a.prototype[l + "Form"] = r(!0)));
});
let d2 = class gy {
  constructor(l) {
    if (typeof l != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (f) {
      r = f;
    });
    const s = this;
    (this.promise.then((c) => {
      if (!s._listeners) return;
      let f = s._listeners.length;
      for (; f-- > 0; ) s._listeners[f](c);
      s._listeners = null;
    }),
      (this.promise.then = (c) => {
        let f;
        const h = new Promise((y) => {
          (s.subscribe(y), (f = y));
        }).then(c);
        return (
          (h.cancel = function () {
            s.unsubscribe(f);
          }),
          h
        );
      }),
      l(function (f, h, y) {
        s.reason || ((s.reason = new Ai(f, h, y)), r(s.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(l) {
    if (this.reason) {
      l(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(l) : (this._listeners = [l]);
  }
  unsubscribe(l) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(l);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const l = new AbortController(),
      r = (s) => {
        l.abort(s);
      };
    return (
      this.subscribe(r),
      (l.signal.unsubscribe = () => this.unsubscribe(r)),
      l.signal
    );
  }
  static source() {
    let l;
    return {
      token: new gy(function (c) {
        l = c;
      }),
      cancel: l,
    };
  }
};
function h2(i) {
  return function (r) {
    return i.apply(null, r);
  };
}
function m2(i) {
  return z.isObject(i) && i.isAxiosError === !0;
}
const uc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(uc).forEach(([i, l]) => {
  uc[l] = i;
});
function vy(i) {
  const l = new _a(i),
    r = Wp(_a.prototype.request, l);
  return (
    z.extend(r, _a.prototype, l, { allOwnKeys: !0 }),
    z.extend(r, l, null, { allOwnKeys: !0 }),
    (r.create = function (c) {
      return vy(Aa(i, c));
    }),
    r
  );
}
const Fe = vy(_i);
Fe.Axios = _a;
Fe.CanceledError = Ai;
Fe.CancelToken = d2;
Fe.isCancel = cy;
Fe.VERSION = yy;
Fe.toFormData = ys;
Fe.AxiosError = te;
Fe.Cancel = Fe.CanceledError;
Fe.all = function (l) {
  return Promise.all(l);
};
Fe.spread = h2;
Fe.isAxiosError = m2;
Fe.mergeConfig = Aa;
Fe.AxiosHeaders = vt;
Fe.formToJSON = (i) => oy(z.isHTMLForm(i) ? new FormData(i) : i);
Fe.getAdapter = py.getAdapter;
Fe.HttpStatusCode = uc;
Fe.default = Fe;
const {
    Axios: SE,
    AxiosError: EE,
    CanceledError: _E,
    isCancel: AE,
    CancelToken: NE,
    VERSION: TE,
    all: RE,
    Cancel: CE,
    isAxiosError: wE,
    spread: OE,
    toFormData: zE,
    AxiosHeaders: jE,
    HttpStatusCode: DE,
    formToJSON: BE,
    getAdapter: ME,
    mergeConfig: UE,
  } = Fe,
  Ea = Fe.create({
    baseURL: "https://capcraft.onrender.com",
    withCredentials: !0,
  }),
  by = N.createContext(),
  ml = () => N.useContext(by),
  p2 = ({ children: i }) => {
    const [l, r] = N.useState(null),
      [s, c] = N.useState(!0);
    N.useEffect(() => {
      (async () => {
        try {
          const { data: g } = await Ea.get("/api/auth/me");
          g.success && r(g.user);
        } catch {
          r(null);
        } finally {
          c(!1);
        }
      })();
    }, []);
    const f = async (p) => {
        try {
          const { data: g } = await Ea.post("/api/auth/login", p);
          if (g.success) {
            const b = g.data || g.user;
            return (
              r(b),
              it.success(g.message || "Logged in successfully!"),
              { success: !0, user: b }
            );
          }
        } catch (g) {
          return (
            it.error(g.response?.data?.message || "Login failed"),
            { success: !1 }
          );
        }
      },
      h = async (p) => {
        try {
          const { data: g } = await Ea.post("/api/auth/register", p);
          if (g.success)
            return (it.success("Account created! Please login."), !0);
        } catch (g) {
          return (
            it.error(g.response?.data?.message || "Registration failed"),
            !1
          );
        }
      },
      y = async () => {
        try {
          (await Ea.post("/api/auth/logout"),
            r(null),
            it.success("Logged out successfully"));
        } catch {
          (r(null), it.error("Logout completed with minor errors"));
        }
      };
    return v.jsx(by.Provider, {
      value: { user: l, loading: s, login: f, register: h, logout: y },
      children: s
        ? v.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            children: v.jsx("div", {
              className:
                "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-700",
            }),
          })
        : i,
    });
  };
const xy = (...i) =>
  i
    .filter((l, r, s) => !!l && l.trim() !== "" && s.indexOf(l) === r)
    .join(" ")
    .trim();
const y2 = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const g2 = (i) =>
  i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, r, s) =>
    s ? s.toUpperCase() : r.toLowerCase(),
  );
const bp = (i) => {
  const l = g2(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
var v2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const b2 = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  return !1;
};
const x2 = N.forwardRef(
  (
    {
      color: i = "currentColor",
      size: l = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: s,
      className: c = "",
      children: f,
      iconNode: h,
      ...y
    },
    p,
  ) =>
    N.createElement(
      "svg",
      {
        ref: p,
        ...v2,
        width: l,
        height: l,
        stroke: i,
        strokeWidth: s ? (Number(r) * 24) / Number(l) : r,
        className: xy("lucide", c),
        ...(!f && !b2(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...h.map(([g, b]) => N.createElement(g, b)),
        ...(Array.isArray(f) ? f : [f]),
      ],
    ),
);
const Ee = (i, l) => {
  const r = N.forwardRef(({ className: s, ...c }, f) =>
    N.createElement(x2, {
      ref: f,
      iconNode: l,
      className: xy(`lucide-${y2(bp(i))}`, `lucide-${i}`, s),
      ...c,
    }),
  );
  return ((r.displayName = bp(i)), r);
};
const S2 = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  E2 = Ee("activity", S2);
const _2 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  A2 = Ee("arrow-right", _2);
const N2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  T2 = Ee("check", N2);
const R2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  C2 = Ee("chevron-right", R2);
const w2 = [
    ["path", { d: "M12 13v8", key: "1l5pq0" }],
    [
      "path",
      {
        d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
        key: "1pljnt",
      },
    ],
    ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }],
  ],
  Sy = Ee("cloud-upload", w2);
const O2 = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  z2 = Ee("code", O2);
const j2 = [
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
  Ey = Ee("copy", j2);
const D2 = [
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M17 20v2", key: "1rnc9c" }],
    ["path", { d: "M17 2v2", key: "11trls" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M2 17h2", key: "7oei6x" }],
    ["path", { d: "M2 7h2", key: "asdhe0" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "M20 17h2", key: "1fpfkl" }],
    ["path", { d: "M20 7h2", key: "1o8tra" }],
    ["path", { d: "M7 20v2", key: "4gnj0m" }],
    ["path", { d: "M7 2v2", key: "1i4yhu" }],
    [
      "rect",
      { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
    ],
    [
      "rect",
      { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
    ],
  ],
  B2 = Ee("cpu", D2);
const M2 = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  U2 = Ee("github", M2);
const L2 = [
    ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
    ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
    ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
    ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
  ],
  _y = Ee("hash", L2);
const H2 = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  Ay = Ee("image", H2);
const q2 = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  F2 = Ee("instagram", q2);
const k2 = [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ],
  Y2 = Ee("layout-dashboard", k2);
const G2 = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  V2 = Ee("linkedin", G2);
const X2 = [
    ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ],
  Q2 = Ee("log-in", X2);
const Z2 = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  oc = Ee("log-out", Z2);
const K2 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  J2 = Ee("mail", K2);
const $2 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  W2 = Ee("menu", $2);
const P2 = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  I2 = Ee("message-square", P2);
const eS = [
    ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
    ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
    ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
    ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
    [
      "path",
      {
        d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
        key: "s0h3yz",
      },
    ],
  ],
  tS = Ee("mouse-pointer-click", eS);
const nS = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Ny = Ee("shield-check", nS);
const aS = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  lS = Ee("sparkles", aS);
const iS = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  rS = Ee("trash-2", iS);
const sS = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  uS = Ee("twitter", sS);
const oS = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
  ],
  cS = Ee("user-plus", oS);
const fS = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  xp = Ee("user", fS);
const dS = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  hS = Ee("users", dS);
const mS = [
    [
      "path",
      {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
        key: "ul74o6",
      },
    ],
    ["path", { d: "m14 7 3 3", key: "1r5n42" }],
    ["path", { d: "M5 6v4", key: "ilb8ba" }],
    ["path", { d: "M19 14v4", key: "blhpug" }],
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M7 8H3", key: "zfb6yr" }],
    ["path", { d: "M21 16h-4", key: "1cnmox" }],
    ["path", { d: "M11 3H9", key: "1obp7u" }],
  ],
  Ty = Ee("wand-sparkles", mS);
const pS = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  wc = Ee("x", pS),
  yS = ({ isOpen: i, onClose: l, onConfirm: r }) =>
    i
      ? v.jsx("div", {
          className:
            "fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4",
          children: v.jsx("div", {
            className:
              "bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200",
            children: v.jsxs("div", {
              className: "p-6",
              children: [
                v.jsxs("div", {
                  className: "flex justify-between items-start mb-4",
                  children: [
                    v.jsx("div", {
                      className:
                        "bg-red-50 p-3 rounded-2xl text-red-600 border border-red-100",
                      children: v.jsx(oc, { size: 24, strokeWidth: 2.5 }),
                    }),
                    v.jsx("button", {
                      onClick: l,
                      className:
                        "text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors",
                      children: v.jsx(wc, { size: 20 }),
                    }),
                  ],
                }),
                v.jsx("h3", {
                  className: "text-xl font-bold text-gray-900 mb-2",
                  children: "Ready to leave?",
                }),
                v.jsx("p", {
                  className: "text-gray-600 text-sm mb-8 leading-relaxed",
                  children:
                    "Are you sure you want to log out of your CapCraft account? You will need to log in again to generate new captions.",
                }),
                v.jsxs("div", {
                  className: "flex gap-3 w-full",
                  children: [
                    v.jsx("button", {
                      onClick: l,
                      className:
                        "flex-1 py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold rounded-2xl border border-gray-200 transition-colors",
                      children: "Cancel",
                    }),
                    v.jsx("button", {
                      onClick: r,
                      className:
                        "flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-md shadow-red-200 transition-all hover:-translate-y-0.5",
                      children: "Yes, Log Out",
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      : null,
  gS = () => {
    const [i, l] = N.useState(!1),
      [r, s] = N.useState(!1),
      [c, f] = N.useState(!1),
      h = Gt(),
      y = gi(),
      { user: p, logout: g } = ml();
    (N.useEffect(() => {
      const k = () => s(window.scrollY > 20);
      return (
        window.addEventListener("scroll", k),
        () => window.removeEventListener("scroll", k)
      );
    }, []),
      N.useEffect(() => {
        l(!1);
      }, [h.pathname]));
    const b = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "About", path: "/about" },
      ],
      x = async () => {
        (f(!1), await g(), l(!1), y("/login"));
      },
      B = p?.role === "admin" ? "/admin-dashboard" : "/user-dashboard",
      F = p?.role === "admin" ? "Admin Portal" : "Dashboard",
      O = p?.role === "admin" ? Ny : Y2,
      U =
        p?.role === "admin"
          ? "bg-[#8B5CF6]/20 text-[#8B5CF6]"
          : "bg-[#6366F1]/20 text-[#6366F1]",
      C =
        p?.role === "admin"
          ? "text-[#8B5CF6] bg-[#8B5CF6]/10 hover:bg-[#8B5CF6]/20 border border-[#8B5CF6]/30"
          : "text-[#6366F1] bg-[#6366F1]/10 hover:bg-[#6366F1]/20 border border-[#6366F1]/30";
    return v.jsxs(v.Fragment, {
      children: [
        v.jsx(yS, { isOpen: c, onClose: () => f(!1), onConfirm: x }),
        v.jsxs("div", {
          className:
            "fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 pointer-events-none",
          children: [
            v.jsx("nav", {
              className: `pointer-events-auto w-full max-w-7xl transition-all duration-500 ease-out rounded-full border backdrop-blur-xl ${r ? "bg-[#0B0F19]/80 border-[#1F2937] shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-3" : "bg-[#0B0F19]/40 border-transparent py-4"}`,
              children: v.jsxs("div", {
                className: "px-6 md:px-8 flex justify-between items-center",
                children: [
                  v.jsxs(Ke, {
                    to: "/",
                    className:
                      "text-2xl font-extrabold flex items-center gap-2.5 tracking-tight group",
                    children: [
                      v.jsx("img", {
                        src: "/logo.png",
                        alt: "CapCraft Logo",
                        className:
                          "h-12 w-12 object-contain transition-transform group-hover:scale-110 duration-300 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]",
                      }),
                      v.jsx("span", {
                        className:
                          "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent",
                        children: "CapCraft",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "hidden md:flex items-center gap-8 font-medium",
                    children: [
                      v.jsx("div", {
                        className: "flex items-center gap-8 mr-4",
                        children: b.map((k) => {
                          const K = h.pathname === k.path;
                          return v.jsxs(
                            Ke,
                            {
                              to: k.path,
                              className:
                                "relative group py-1 text-[#9CA3AF] transition-colors hover:text-[#F9FAFB]",
                              children: [
                                v.jsx("span", {
                                  className: K
                                    ? "text-[#F9FAFB] font-bold"
                                    : "",
                                  children: k.name,
                                }),
                                v.jsx("span", {
                                  className: `absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] transition-all duration-300 ease-out rounded-full ${K ? "w-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" : "w-0 group-hover:w-full"}`,
                                }),
                              ],
                            },
                            k.name,
                          );
                        }),
                      }),
                      v.jsx("div", {
                        className:
                          "h-6 w-[2px] bg-gradient-to-b from-transparent via-[#1F2937] to-transparent",
                      }),
                      p
                        ? v.jsxs("div", {
                            className: "flex items-center gap-5",
                            children: [
                              v.jsxs("div", {
                                className:
                                  "flex items-center gap-2 bg-[#111827] px-3 py-1.5 rounded-full border border-[#1F2937]",
                                children: [
                                  v.jsx("div", {
                                    className: `${U} p-1.5 rounded-full`,
                                    children: v.jsx(xp, {
                                      size: 16,
                                      strokeWidth: 2.5,
                                    }),
                                  }),
                                  v.jsx("span", {
                                    className:
                                      "text-sm font-semibold text-[#F9FAFB] pr-2",
                                    children: p.fullName?.firstName || "User",
                                  }),
                                ],
                              }),
                              v.jsxs(Ke, {
                                to: B,
                                className: `group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] ${C}`,
                                children: [v.jsx(O, { size: 18 }), " ", F],
                              }),
                              v.jsx("button", {
                                onClick: () => f(!0),
                                className:
                                  "p-2.5 text-[#9CA3AF] hover:text-[#EF4444] hover:bg-[#EF4444]/10 rounded-full transition-all",
                                title: "Logout",
                                children: v.jsx(oc, { size: 20 }),
                              }),
                            ],
                          })
                        : v.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              v.jsx(Ke, {
                                to: "/login",
                                className:
                                  "text-[#9CA3AF] font-semibold hover:text-[#F9FAFB] transition-colors",
                                children: "Log in",
                              }),
                              v.jsxs(Ke, {
                                to: "/register",
                                className:
                                  "group flex items-center gap-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-full font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300",
                                children: [
                                  "Get Started",
                                  v.jsx(C2, {
                                    size: 18,
                                    className:
                                      "transition-transform group-hover:translate-x-1",
                                  }),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                  v.jsx("button", {
                    onClick: () => l(!i),
                    className:
                      "md:hidden relative z-50 p-2 text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#111827] rounded-full transition-colors focus:outline-none",
                    children: i
                      ? v.jsx(wc, { size: 26 })
                      : v.jsx(W2, { size: 26 }),
                  }),
                ],
              }),
            }),
            v.jsx("div", {
              className: `absolute top-full mt-4 w-[calc(100%-2rem)] max-w-md mx-auto pointer-events-auto transition-all duration-300 ease-in-out ${i ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`,
              children: v.jsxs("div", {
                className:
                  "bg-[#111827]/95 backdrop-blur-xl border border-[#1F2937] shadow-2xl rounded-3xl p-6 flex flex-col gap-4",
                children: [
                  v.jsx("div", {
                    className: "flex flex-col gap-2",
                    children: b.map((k) =>
                      v.jsx(
                        Ke,
                        {
                          to: k.path,
                          className: `p-3 rounded-2xl font-semibold transition-colors ${h.pathname === k.path ? "bg-[#6366F1]/10 text-[#6366F1]" : "text-[#9CA3AF] hover:bg-[#1F2937] hover:text-[#F9FAFB]"}`,
                          children: k.name,
                        },
                        k.name,
                      ),
                    ),
                  }),
                  v.jsx("div", {
                    className:
                      "h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent my-2",
                  }),
                  p
                    ? v.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          v.jsxs("div", {
                            className:
                              "flex items-center gap-3 p-3 bg-[#0B0F19] rounded-2xl border border-[#1F2937]",
                            children: [
                              v.jsx("div", {
                                className: `${U} p-2 rounded-full`,
                                children: v.jsx(xp, { size: 20 }),
                              }),
                              v.jsxs("div", {
                                className: "flex flex-col",
                                children: [
                                  v.jsx("span", {
                                    className:
                                      "text-sm font-bold text-[#F9FAFB]",
                                    children:
                                      p.fullName?.firstName || "Welcome back",
                                  }),
                                  v.jsx("span", {
                                    className: "text-xs text-[#9CA3AF]",
                                    children: p.email,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v.jsxs("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                              v.jsx(Ke, {
                                to: B,
                                className: `flex justify-center items-center gap-2 py-3 rounded-2xl font-bold transition-colors ${C}`,
                                children: F,
                              }),
                              v.jsxs("button", {
                                onClick: () => f(!0),
                                className:
                                  "flex justify-center items-center gap-2 text-[#EF4444] bg-[#EF4444]/10 py-3 rounded-2xl font-bold hover:bg-[#EF4444]/20 transition-colors",
                                children: [v.jsx(oc, { size: 18 }), " Logout"],
                              }),
                            ],
                          }),
                        ],
                      })
                    : v.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          v.jsx(Ke, {
                            to: "/login",
                            className:
                              "w-full text-center p-3 rounded-2xl font-bold text-[#F9FAFB] bg-[#1F2937] hover:bg-[#374151] transition-colors border border-[#374151]",
                            children: "Log in",
                          }),
                          v.jsx(Ke, {
                            to: "/register",
                            className:
                              "w-full text-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white p-3 rounded-2xl font-bold shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all",
                            children: "Get Started",
                          }),
                        ],
                      }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Sp = ({ children: i, allowedRoles: l = ["user", "admin"] }) => {
    const { user: r, loading: s } = ml(),
      c = Gt();
    return s
      ? v.jsx("div", {
          className: "min-h-[50vh] flex items-center justify-center",
          children: v.jsx("div", {
            className:
              "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-700",
          }),
        })
      : r
        ? l.includes(r.role)
          ? i
          : r.role === "user"
            ? v.jsx(Kr, { to: "/user-dashboard", replace: !0 })
            : v.jsx(Kr, { to: "/admin-dashboard", replace: !0 })
        : v.jsx(Kr, { to: "/login", state: { from: c }, replace: !0 });
  },
  Oc = () =>
    v.jsxs("footer", {
      className:
        "border-t border-[#1F2937] bg-[#0B0F19] pt-16 pb-8 mt-auto relative z-10 w-full",
      children: [
        v.jsxs("div", {
          className:
            "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center md:text-left",
          children: [
            v.jsxs("div", {
              className: "flex flex-col items-center md:items-start",
              children: [
                v.jsx("h3", {
                  className:
                    "text-2xl font-extrabold tracking-tight text-[#F9FAFB] mb-3",
                  children: "CapCraft",
                }),
                v.jsx("p", {
                  className: "text-[#9CA3AF] font-light max-w-xs",
                  children:
                    "AI-powered caption generator for creators. Turn your visual content into meaningful text in seconds.",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "flex flex-col items-center md:items-start",
              children: [
                v.jsx("h4", {
                  className:
                    "text-[#F9FAFB] font-bold mb-4 uppercase tracking-wider text-sm",
                  children: "Quick Links",
                }),
                v.jsxs("div", {
                  className: "flex flex-col gap-3 text-[#9CA3AF] font-medium",
                  children: [
                    v.jsx(Ke, {
                      to: "/",
                      className: "hover:text-[#6366F1] transition-colors",
                      children: "Home",
                    }),
                    v.jsx(Ke, {
                      to: "/features",
                      className: "hover:text-[#6366F1] transition-colors",
                      children: "Features",
                    }),
                    v.jsx(Ke, {
                      to: "/about",
                      className: "hover:text-[#6366F1] transition-colors",
                      children: "About",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              className: "flex flex-col items-center md:items-start",
              children: [
                v.jsx("h4", {
                  className:
                    "text-[#F9FAFB] font-bold mb-4 uppercase tracking-wider text-sm",
                  children: "Connect With Developer",
                }),
                v.jsxs("div", {
                  className: "flex gap-4 text-[#9CA3AF] mb-4",
                  children: [
                    v.jsx("a", {
                      href: "https://github.com/Ruchit-thakkar",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300",
                      title: "GitHub",
                      children: v.jsx(U2, { size: 20 }),
                    }),
                    v.jsx("a", {
                      href: "https://www.linkedin.com/in/ruchit-thakkar-38ab37379",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300",
                      title: "LinkedIn",
                      children: v.jsx(V2, { size: 20 }),
                    }),
                    v.jsx("a", {
                      href: "https://x.com/RuchitThakkar19",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300",
                      title: "X (Twitter)",
                      children: v.jsx(uS, { size: 20 }),
                    }),
                    v.jsx("a", {
                      href: "https://www.instagram.com/ruchit1744?igsh=dzU1NzVqdjVvb2g2",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "p-2 rounded-full bg-[#111827] border border-[#1F2937] hover:border-[#6366F1] hover:text-[#6366F1] hover:-translate-y-1 transition-all duration-300",
                      title: "Instagram",
                      children: v.jsx(F2, { size: 20 }),
                    }),
                  ],
                }),
                v.jsxs("a", {
                  href: "mailto:ruchitthakkar12@gmail.com",
                  className:
                    "flex items-center gap-2 text-[#9CA3AF] hover:text-[#6366F1] transition-colors font-medium text-sm",
                  children: [
                    v.jsx(J2, { size: 16 }),
                    "ruchitthakkar12@gmail.com",
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className:
            "max-w-7xl mx-auto mt-16 pt-8 border-t border-[#1F2937]/50 flex flex-col md:flex-row items-center justify-between text-[#6B7280] text-sm px-6 gap-4",
          children: [
            v.jsxs("p", {
              children: [
                "© ",
                new Date().getFullYear(),
                " CapCraft. All rights reserved.",
              ],
            }),
            v.jsxs("p", {
              className: "flex items-center gap-1 font-medium",
              children: [
                "Built with ",
                v.jsx("span", {
                  className: "text-red-500 animate-pulse",
                  children: "❤️",
                }),
                " by",
                v.jsx("a", {
                  href: "https://www.linkedin.com/in/ruchit-thakkar-38ab37379",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "text-[#9CA3AF] hover:text-[#6366F1] transition-colors ml-1",
                  children: "Ruchit Thakkar",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  vS = () =>
    v.jsxs("div", {
      className: "flex flex-col min-h-screen",
      children: [
        v.jsx("div", {
          className:
            "fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#6366F1] rounded-full blur-[150px] opacity-10 pointer-events-none",
        }),
        v.jsxs("main", {
          className: "flex-grow",
          children: [
            v.jsxs("section", {
              className:
                "relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16",
              children: [
                v.jsxs("div", {
                  className:
                    "flex-1 text-center lg:text-left z-10 animate-in fade-in slide-in-from-bottom-8 duration-700",
                  children: [
                    v.jsxs("div", {
                      className:
                        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] border border-[#1F2937] text-[#9CA3AF] text-sm font-medium mb-6 backdrop-blur-md",
                      children: [
                        v.jsx(lS, { size: 16, className: "text-[#6366F1]" }),
                        v.jsx("span", {
                          children: "CapCraft AI 2.0 is now live",
                        }),
                      ],
                    }),
                    v.jsxs("h1", {
                      className:
                        "text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight",
                      children: [
                        "Turn Your Images Into ",
                        v.jsx("br", { className: "hidden lg:block" }),
                        v.jsx("span", {
                          className:
                            "text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] animate-pulse",
                          children: "Perfect Captions",
                        }),
                        " ",
                        "with AI",
                      ],
                    }),
                    v.jsx("p", {
                      className:
                        "text-lg lg:text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light",
                      children:
                        "CapCraft uses advanced AI to generate engaging captions and viral hashtags from your images in seconds. Upload your photo and let AI craft the perfect words for social media.",
                    }),
                    v.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start",
                      children: [
                        v.jsxs(Ke, {
                          to: "/user-dashboard",
                          className:
                            "w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2",
                          children: [
                            "Generate Caption ",
                            v.jsx(A2, { size: 20 }),
                          ],
                        }),
                        v.jsx(Ke, {
                          to: "/features",
                          className:
                            "w-full sm:w-auto px-8 py-4 rounded-full bg-[#111827] border border-[#1F2937] text-[#F9FAFB] font-bold hover:border-[#6366F1] hover:bg-[#111827]/80 transition-all duration-300 text-center",
                          children: "Learn More",
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className:
                    "flex-1 relative w-full max-w-lg lg:max-w-none z-10 group",
                  children: [
                    v.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000",
                    }),
                    v.jsxs("div", {
                      className:
                        "relative aspect-square rounded-[40px] bg-[#111827]/80 border border-[#1F2937] backdrop-blur-xl p-8 flex flex-col items-center justify-center shadow-2xl overflow-hidden hover:border-[#6366F1]/50 transition-colors duration-500",
                      children: [
                        v.jsx("div", {
                          className:
                            "w-full h-48 bg-[#0B0F19] rounded-2xl border border-[#1F2937] border-dashed flex items-center justify-center mb-6",
                          children: v.jsx(Ay, {
                            size: 48,
                            className: "text-[#6366F1] animate-bounce",
                          }),
                        }),
                        v.jsxs("div", {
                          className: "w-full space-y-3",
                          children: [
                            v.jsx("div", {
                              className:
                                "h-3 w-3/4 bg-[#1F2937] rounded-full animate-pulse",
                            }),
                            v.jsx("div", {
                              className:
                                "h-3 w-1/2 bg-[#1F2937] rounded-full animate-pulse delay-75",
                            }),
                            v.jsxs("div", {
                              className: "flex gap-2 mt-4",
                              children: [
                                v.jsx("div", {
                                  className:
                                    "px-3 py-1 bg-[#6366F1]/20 rounded-md border border-[#6366F1]/30 text-[#6366F1] text-[10px] font-bold",
                                  children: "#ai",
                                }),
                                v.jsx("div", {
                                  className:
                                    "px-3 py-1 bg-[#6366F1]/20 rounded-md border border-[#6366F1]/30 text-[#6366F1] text-[10px] font-bold",
                                  children: "#viral",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            v.jsx("section", {
              className:
                "py-24 px-6 relative z-10 border-t border-[#1F2937]/50 bg-[#0B0F19]/50",
              children: v.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  v.jsxs("div", {
                    className: "text-center mb-16",
                    children: [
                      v.jsx("h2", {
                        className: "text-3xl lg:text-5xl font-extrabold mb-4",
                        children: "How CapCraft Works",
                      }),
                      v.jsx("p", {
                        className: "text-[#9CA3AF] text-lg max-w-2xl mx-auto",
                        children:
                          "Turn any image into a viral post in three simple steps.",
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [
                      {
                        step: "Step 1",
                        title: "Upload Your Image",
                        desc: "Drag and drop your image or choose a file from your device.",
                        icon: Sy,
                      },
                      {
                        step: "Step 2",
                        title: "AI Analyzes Content",
                        desc: "Our AI analyzes the content, mood, and elements of your image.",
                        icon: B2,
                      },
                      {
                        step: "Step 3",
                        title: "Get Captions & Tags",
                        desc: "Instantly generate creative captions and relevant hashtags ready to copy.",
                        icon: _y,
                      },
                    ].map((i, l) =>
                      v.jsxs(
                        "div",
                        {
                          className:
                            "bg-[#111827] border border-[#1F2937] rounded-3xl p-8 hover:border-[#6366F1] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 group hover:-translate-y-2",
                          children: [
                            v.jsx("div", {
                              className:
                                "w-14 h-14 rounded-2xl bg-[#0B0F19] border border-[#1F2937] flex items-center justify-center mb-6 group-hover:border-[#6366F1]/50 transition-colors",
                              children: v.jsx(i.icon, {
                                size: 28,
                                className:
                                  "text-[#9CA3AF] group-hover:text-[#6366F1]",
                              }),
                            }),
                            v.jsx("div", {
                              className:
                                "text-[#6366F1] text-sm font-bold uppercase tracking-wider mb-2",
                              children: i.step,
                            }),
                            v.jsx("h3", {
                              className: "text-xl font-bold mb-3",
                              children: i.title,
                            }),
                            v.jsx("p", {
                              className: "text-[#9CA3AF] leading-relaxed",
                              children: i.desc,
                            }),
                          ],
                        },
                        l,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            v.jsx("section", {
              className: "py-24 px-6 relative z-10",
              children: v.jsxs("div", {
                className:
                  "max-w-5xl mx-auto bg-gradient-to-br from-[#111827] to-[#0B0F19] border border-[#1F2937] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl",
                children: [
                  v.jsx("h2", {
                    className:
                      "text-4xl lg:text-5xl font-extrabold mb-6 relative z-10",
                    children: "Ready to create better captions?",
                  }),
                  v.jsx("p", {
                    className:
                      "text-[#9CA3AF] text-lg mb-10 max-w-xl mx-auto relative z-10",
                    children:
                      "Upload your image and let CapCraft generate captions instantly. No credit card required.",
                  }),
                  v.jsx(Ke, {
                    to: "/register",
                    className:
                      "inline-flex px-10 py-5 rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300 relative z-10",
                    children: "Start Generating Now",
                  }),
                ],
              }),
            }),
          ],
        }),
        v.jsx(Oc, {}),
      ],
    }),
  bS = () => {
    const [i, l] = N.useState({ email: "", password: "" }),
      { login: r } = ml(),
      s = gi(),
      f = Gt().state?.from?.pathname || "/user-dashboard",
      h = async (y) => {
        (y.preventDefault(), (await r(i)).success && s(f, { replace: !0 }));
      };
    return v.jsxs("div", {
      className:
        "max-w-md mx-auto relative mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700",
      children: [
        v.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-3xl blur-[80px] opacity-20 pointer-events-none",
        }),
        v.jsxs("div", {
          className:
            "relative bg-[#111827] p-8 md:p-10 rounded-3xl shadow-2xl border border-[#1F2937]",
          children: [
            v.jsx("h2", {
              className:
                "text-3xl font-extrabold text-center mb-2 text-[#F9FAFB]",
              children: "Welcome Back 👋",
            }),
            v.jsx("p", {
              className: "text-center text-[#9CA3AF] mb-8 font-light",
              children: "Log in to your CapCraft account.",
            }),
            v.jsxs("form", {
              onSubmit: h,
              className: "space-y-5",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className:
                        "block text-[#9CA3AF] mb-2 text-sm font-medium",
                      children: "Email Address",
                    }),
                    v.jsx("input", {
                      type: "email",
                      className:
                        "w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all",
                      placeholder: "you@example.com",
                      value: i.email,
                      onChange: (y) => l({ ...i, email: y.target.value }),
                      required: !0,
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className:
                        "block text-[#9CA3AF] mb-2 text-sm font-medium",
                      children: "Password",
                    }),
                    v.jsx("input", {
                      type: "password",
                      className:
                        "w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all",
                      placeholder: "••••••••",
                      value: i.password,
                      onChange: (y) => l({ ...i, password: y.target.value }),
                      required: !0,
                    }),
                  ],
                }),
                v.jsxs("button", {
                  className:
                    "w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3.5 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center justify-center gap-2",
                  children: [v.jsx(Q2, { size: 20 }), " Login to Account"],
                }),
              ],
            }),
            v.jsxs("p", {
              className: "text-center mt-8 text-[#9CA3AF]",
              children: [
                "Don't have an account?",
                " ",
                v.jsx(Ke, {
                  to: "/register",
                  className:
                    "text-[#6366F1] hover:text-[#8B5CF6] font-semibold transition-colors",
                  children: "Register here",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  xS = () => {
    const [i, l] = N.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
      }),
      [r, s] = N.useState(!1),
      { register: c } = ml(),
      f = gi(),
      h = (p) => {
        l({ ...i, [p.target.name]: p.target.value });
      },
      y = async (p) => {
        (p.preventDefault(), s(!0));
        const g = {
            fullName: { firstName: i.firstName, lastName: i.lastName },
            email: i.email,
            phone: i.phone,
            password: i.password,
          },
          b = await c(g);
        (s(!1), b && f("/login"));
      };
    return v.jsxs("div", {
      className:
        "max-w-lg mx-auto relative mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700",
      children: [
        v.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-3xl blur-[80px] opacity-20 pointer-events-none",
        }),
        v.jsxs("div", {
          className:
            "relative bg-[#111827] p-8 md:p-10 rounded-3xl shadow-2xl border border-[#1F2937]",
          children: [
            v.jsx("h2", {
              className:
                "text-3xl font-extrabold text-center mb-2 text-[#F9FAFB]",
              children: "Create an Account ✨",
            }),
            v.jsx("p", {
              className: "text-center text-[#9CA3AF] mb-8 font-light",
              children: "Join CapCraft and start generating AI captions.",
            }),
            v.jsxs("form", {
              onSubmit: y,
              className: "space-y-5",
              children: [
                v.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-5",
                  children: [
                    v.jsxs("div", {
                      className: "flex-1",
                      children: [
                        v.jsx("label", {
                          className:
                            "block text-[#9CA3AF] mb-2 text-sm font-medium",
                          children: "First Name",
                        }),
                        v.jsx("input", {
                          type: "text",
                          name: "firstName",
                          className:
                            "w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all",
                          placeholder: "John",
                          value: i.firstName,
                          onChange: h,
                          required: !0,
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "flex-1",
                      children: [
                        v.jsx("label", {
                          className:
                            "block text-[#9CA3AF] mb-2 text-sm font-medium",
                          children: "Last Name",
                        }),
                        v.jsx("input", {
                          type: "text",
                          name: "lastName",
                          className:
                            "w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all",
                          placeholder: "Doe",
                          value: i.lastName,
                          onChange: h,
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className:
                        "block text-[#9CA3AF] mb-2 text-sm font-medium",
                      children: "Email Address",
                    }),
                    v.jsx("input", {
                      type: "email",
                      name: "email",
                      className:
                        "w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all",
                      placeholder: "you@example.com",
                      value: i.email,
                      onChange: h,
                      required: !0,
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className:
                        "block text-[#9CA3AF] mb-2 text-sm font-medium",
                      children: "Phone Number",
                    }),
                    v.jsx("input", {
                      type: "tel",
                      name: "phone",
                      className:
                        "w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all",
                      placeholder: "+1234567890",
                      value: i.phone,
                      onChange: h,
                    }),
                  ],
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("label", {
                      className:
                        "block text-[#9CA3AF] mb-2 text-sm font-medium",
                      children: "Password",
                    }),
                    v.jsx("input", {
                      type: "password",
                      name: "password",
                      className:
                        "w-full px-5 py-3 bg-[#0B0F19] border border-[#1F2937] rounded-xl text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/50 focus:border-[#6366F1] transition-all",
                      placeholder: "••••••••",
                      value: i.password,
                      onChange: h,
                      required: !0,
                      minLength: "6",
                    }),
                  ],
                }),
                v.jsx("button", {
                  type: "submit",
                  disabled: r,
                  className: `w-full py-3.5 rounded-xl font-bold text-lg text-white transition-all duration-300 mt-4 flex justify-center items-center gap-2 ${r ? "bg-[#1F2937] text-[#9CA3AF] cursor-not-allowed border border-[#374151]" : "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-[0.98]"}`,
                  children: r
                    ? v.jsx("div", {
                        className:
                          "h-5 w-5 border-2 border-[#9CA3AF]/30 border-t-[#9CA3AF] rounded-full animate-spin",
                      })
                    : v.jsxs(v.Fragment, {
                        children: [v.jsx(cS, { size: 20 }), " Sign Up"],
                      }),
                }),
              ],
            }),
            v.jsxs("p", {
              className: "text-center mt-8 text-[#9CA3AF]",
              children: [
                "Already have an account?",
                " ",
                v.jsx(Ke, {
                  to: "/login",
                  className:
                    "text-[#6366F1] hover:text-[#8B5CF6] font-semibold transition-colors",
                  children: "Log in here",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  an = Object.create(null);
an.open = "0";
an.close = "1";
an.ping = "2";
an.pong = "3";
an.message = "4";
an.upgrade = "5";
an.noop = "6";
const ts = Object.create(null);
Object.keys(an).forEach((i) => {
  ts[an[i]] = i;
});
const cc = { type: "error", data: "parser error" },
  Ry =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  Cy = typeof ArrayBuffer == "function",
  wy = (i) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(i)
      : i && i.buffer instanceof ArrayBuffer,
  zc = ({ type: i, data: l }, r, s) =>
    Ry && l instanceof Blob
      ? r
        ? s(l)
        : Ep(l, s)
      : Cy && (l instanceof ArrayBuffer || wy(l))
        ? r
          ? s(l)
          : Ep(new Blob([l]), s)
        : s(an[i] + (l || "")),
  Ep = (i, l) => {
    const r = new FileReader();
    return (
      (r.onload = function () {
        const s = r.result.split(",")[1];
        l("b" + (s || ""));
      }),
      r.readAsDataURL(i)
    );
  };
function _p(i) {
  return i instanceof Uint8Array
    ? i
    : i instanceof ArrayBuffer
      ? new Uint8Array(i)
      : new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
}
let Po;
function SS(i, l) {
  if (Ry && i.data instanceof Blob)
    return i.data.arrayBuffer().then(_p).then(l);
  if (Cy && (i.data instanceof ArrayBuffer || wy(i.data))) return l(_p(i.data));
  zc(i, !1, (r) => {
    (Po || (Po = new TextEncoder()), l(Po.encode(r)));
  });
}
const Ap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  mi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let i = 0; i < Ap.length; i++) mi[Ap.charCodeAt(i)] = i;
const ES = (i) => {
    let l = i.length * 0.75,
      r = i.length,
      s,
      c = 0,
      f,
      h,
      y,
      p;
    i[i.length - 1] === "=" && (l--, i[i.length - 2] === "=" && l--);
    const g = new ArrayBuffer(l),
      b = new Uint8Array(g);
    for (s = 0; s < r; s += 4)
      ((f = mi[i.charCodeAt(s)]),
        (h = mi[i.charCodeAt(s + 1)]),
        (y = mi[i.charCodeAt(s + 2)]),
        (p = mi[i.charCodeAt(s + 3)]),
        (b[c++] = (f << 2) | (h >> 4)),
        (b[c++] = ((h & 15) << 4) | (y >> 2)),
        (b[c++] = ((y & 3) << 6) | (p & 63)));
    return g;
  },
  _S = typeof ArrayBuffer == "function",
  jc = (i, l) => {
    if (typeof i != "string") return { type: "message", data: Oy(i, l) };
    const r = i.charAt(0);
    return r === "b"
      ? { type: "message", data: AS(i.substring(1), l) }
      : ts[r]
        ? i.length > 1
          ? { type: ts[r], data: i.substring(1) }
          : { type: ts[r] }
        : cc;
  },
  AS = (i, l) => {
    if (_S) {
      const r = ES(i);
      return Oy(r, l);
    } else return { base64: !0, data: i };
  },
  Oy = (i, l) =>
    l === "blob"
      ? i instanceof Blob
        ? i
        : new Blob([i])
      : i instanceof ArrayBuffer
        ? i
        : i.buffer,
  zy = "",
  NS = (i, l) => {
    const r = i.length,
      s = new Array(r);
    let c = 0;
    i.forEach((f, h) => {
      zc(f, !1, (y) => {
        ((s[h] = y), ++c === r && l(s.join(zy)));
      });
    });
  },
  TS = (i, l) => {
    const r = i.split(zy),
      s = [];
    for (let c = 0; c < r.length; c++) {
      const f = jc(r[c], l);
      if ((s.push(f), f.type === "error")) break;
    }
    return s;
  };
function RS() {
  return new TransformStream({
    transform(i, l) {
      SS(i, (r) => {
        const s = r.length;
        let c;
        if (s < 126)
          ((c = new Uint8Array(1)), new DataView(c.buffer).setUint8(0, s));
        else if (s < 65536) {
          c = new Uint8Array(3);
          const f = new DataView(c.buffer);
          (f.setUint8(0, 126), f.setUint16(1, s));
        } else {
          c = new Uint8Array(9);
          const f = new DataView(c.buffer);
          (f.setUint8(0, 127), f.setBigUint64(1, BigInt(s)));
        }
        (i.data && typeof i.data != "string" && (c[0] |= 128),
          l.enqueue(c),
          l.enqueue(r));
      });
    },
  });
}
let Io;
function Qr(i) {
  return i.reduce((l, r) => l + r.length, 0);
}
function Zr(i, l) {
  if (i[0].length === l) return i.shift();
  const r = new Uint8Array(l);
  let s = 0;
  for (let c = 0; c < l; c++)
    ((r[c] = i[0][s++]), s === i[0].length && (i.shift(), (s = 0)));
  return (i.length && s < i[0].length && (i[0] = i[0].slice(s)), r);
}
function CS(i, l) {
  Io || (Io = new TextDecoder());
  const r = [];
  let s = 0,
    c = -1,
    f = !1;
  return new TransformStream({
    transform(h, y) {
      for (r.push(h); ; ) {
        if (s === 0) {
          if (Qr(r) < 1) break;
          const p = Zr(r, 1);
          ((f = (p[0] & 128) === 128),
            (c = p[0] & 127),
            c < 126 ? (s = 3) : c === 126 ? (s = 1) : (s = 2));
        } else if (s === 1) {
          if (Qr(r) < 2) break;
          const p = Zr(r, 2);
          ((c = new DataView(p.buffer, p.byteOffset, p.length).getUint16(0)),
            (s = 3));
        } else if (s === 2) {
          if (Qr(r) < 8) break;
          const p = Zr(r, 8),
            g = new DataView(p.buffer, p.byteOffset, p.length),
            b = g.getUint32(0);
          if (b > Math.pow(2, 21) - 1) {
            y.enqueue(cc);
            break;
          }
          ((c = b * Math.pow(2, 32) + g.getUint32(4)), (s = 3));
        } else {
          if (Qr(r) < c) break;
          const p = Zr(r, c);
          (y.enqueue(jc(f ? p : Io.decode(p), l)), (s = 0));
        }
        if (c === 0 || c > i) {
          y.enqueue(cc);
          break;
        }
      }
    },
  });
}
const jy = 4;
function Qe(i) {
  if (i) return wS(i);
}
function wS(i) {
  for (var l in Qe.prototype) i[l] = Qe.prototype[l];
  return i;
}
Qe.prototype.on = Qe.prototype.addEventListener = function (i, l) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + i] = this._callbacks["$" + i] || []).push(l),
    this
  );
};
Qe.prototype.once = function (i, l) {
  function r() {
    (this.off(i, r), l.apply(this, arguments));
  }
  return ((r.fn = l), this.on(i, r), this);
};
Qe.prototype.off =
  Qe.prototype.removeListener =
  Qe.prototype.removeAllListeners =
  Qe.prototype.removeEventListener =
    function (i, l) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return ((this._callbacks = {}), this);
      var r = this._callbacks["$" + i];
      if (!r) return this;
      if (arguments.length == 1) return (delete this._callbacks["$" + i], this);
      for (var s, c = 0; c < r.length; c++)
        if (((s = r[c]), s === l || s.fn === l)) {
          r.splice(c, 1);
          break;
        }
      return (r.length === 0 && delete this._callbacks["$" + i], this);
    };
Qe.prototype.emit = function (i) {
  this._callbacks = this._callbacks || {};
  for (
    var l = new Array(arguments.length - 1),
      r = this._callbacks["$" + i],
      s = 1;
    s < arguments.length;
    s++
  )
    l[s - 1] = arguments[s];
  if (r) {
    r = r.slice(0);
    for (var s = 0, c = r.length; s < c; ++s) r[s].apply(this, l);
  }
  return this;
};
Qe.prototype.emitReserved = Qe.prototype.emit;
Qe.prototype.listeners = function (i) {
  return (
    (this._callbacks = this._callbacks || {}),
    this._callbacks["$" + i] || []
  );
};
Qe.prototype.hasListeners = function (i) {
  return !!this.listeners(i).length;
};
const vs =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (l) => Promise.resolve().then(l)
      : (l, r) => r(l, 0),
  Yt =
    typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : Function("return this")(),
  OS = "arraybuffer";
function Dy(i, ...l) {
  return l.reduce((r, s) => (i.hasOwnProperty(s) && (r[s] = i[s]), r), {});
}
const zS = Yt.setTimeout,
  jS = Yt.clearTimeout;
function bs(i, l) {
  l.useNativeTimers
    ? ((i.setTimeoutFn = zS.bind(Yt)), (i.clearTimeoutFn = jS.bind(Yt)))
    : ((i.setTimeoutFn = Yt.setTimeout.bind(Yt)),
      (i.clearTimeoutFn = Yt.clearTimeout.bind(Yt)));
}
const DS = 1.33;
function BS(i) {
  return typeof i == "string"
    ? MS(i)
    : Math.ceil((i.byteLength || i.size) * DS);
}
function MS(i) {
  let l = 0,
    r = 0;
  for (let s = 0, c = i.length; s < c; s++)
    ((l = i.charCodeAt(s)),
      l < 128
        ? (r += 1)
        : l < 2048
          ? (r += 2)
          : l < 55296 || l >= 57344
            ? (r += 3)
            : (s++, (r += 4)));
  return r;
}
function By() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function US(i) {
  let l = "";
  for (let r in i)
    i.hasOwnProperty(r) &&
      (l.length && (l += "&"),
      (l += encodeURIComponent(r) + "=" + encodeURIComponent(i[r])));
  return l;
}
function LS(i) {
  let l = {},
    r = i.split("&");
  for (let s = 0, c = r.length; s < c; s++) {
    let f = r[s].split("=");
    l[decodeURIComponent(f[0])] = decodeURIComponent(f[1]);
  }
  return l;
}
class HS extends Error {
  constructor(l, r, s) {
    (super(l),
      (this.description = r),
      (this.context = s),
      (this.type = "TransportError"));
  }
}
class Dc extends Qe {
  constructor(l) {
    (super(),
      (this.writable = !1),
      bs(this, l),
      (this.opts = l),
      (this.query = l.query),
      (this.socket = l.socket),
      (this.supportsBinary = !l.forceBase64));
  }
  onError(l, r, s) {
    return (super.emitReserved("error", new HS(l, r, s)), this);
  }
  open() {
    return ((this.readyState = "opening"), this.doOpen(), this);
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(l) {
    this.readyState === "open" && this.write(l);
  }
  onOpen() {
    ((this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open"));
  }
  onData(l) {
    const r = jc(l, this.socket.binaryType);
    this.onPacket(r);
  }
  onPacket(l) {
    super.emitReserved("packet", l);
  }
  onClose(l) {
    ((this.readyState = "closed"), super.emitReserved("close", l));
  }
  pause(l) {}
  createUri(l, r = {}) {
    return (
      l +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(r)
    );
  }
  _hostname() {
    const l = this.opts.hostname;
    return l.indexOf(":") === -1 ? l : "[" + l + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && Number(this.opts.port) !== 443) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(l) {
    const r = US(l);
    return r.length ? "?" + r : "";
  }
}
class qS extends Dc {
  constructor() {
    (super(...arguments), (this._polling = !1));
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(l) {
    this.readyState = "pausing";
    const r = () => {
      ((this.readyState = "paused"), l());
    };
    if (this._polling || !this.writable) {
      let s = 0;
      (this._polling &&
        (s++,
        this.once("pollComplete", function () {
          --s || r();
        })),
        this.writable ||
          (s++,
          this.once("drain", function () {
            --s || r();
          })));
    } else r();
  }
  _poll() {
    ((this._polling = !0), this.doPoll(), this.emitReserved("poll"));
  }
  onData(l) {
    const r = (s) => {
      if (
        (this.readyState === "opening" && s.type === "open" && this.onOpen(),
        s.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }),
          !1
        );
      this.onPacket(s);
    };
    (TS(l, this.socket.binaryType).forEach(r),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll()));
  }
  doClose() {
    const l = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? l() : this.once("open", l);
  }
  write(l) {
    ((this.writable = !1),
      NS(l, (r) => {
        this.doWrite(r, () => {
          ((this.writable = !0), this.emitReserved("drain"));
        });
      }));
  }
  uri() {
    const l = this.opts.secure ? "https" : "http",
      r = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (r[this.opts.timestampParam] = By()),
      !this.supportsBinary && !r.sid && (r.b64 = 1),
      this.createUri(l, r)
    );
  }
}
let My = !1;
try {
  My = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const FS = My;
function kS() {}
class YS extends qS {
  constructor(l) {
    if ((super(l), typeof location < "u")) {
      const r = location.protocol === "https:";
      let s = location.port;
      (s || (s = r ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && l.hostname !== location.hostname) ||
          s !== l.port));
    }
  }
  doWrite(l, r) {
    const s = this.request({ method: "POST", data: l });
    (s.on("success", r),
      s.on("error", (c, f) => {
        this.onError("xhr post error", c, f);
      }));
  }
  doPoll() {
    const l = this.request();
    (l.on("data", this.onData.bind(this)),
      l.on("error", (r, s) => {
        this.onError("xhr poll error", r, s);
      }),
      (this.pollXhr = l));
  }
}
class nn extends Qe {
  constructor(l, r, s) {
    (super(),
      (this.createRequest = l),
      bs(this, s),
      (this._opts = s),
      (this._method = s.method || "GET"),
      (this._uri = r),
      (this._data = s.data !== void 0 ? s.data : null),
      this._create());
  }
  _create() {
    var l;
    const r = Dy(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref",
    );
    r.xdomain = !!this._opts.xd;
    const s = (this._xhr = this.createRequest(r));
    try {
      s.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0);
          for (let c in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(c) &&
              s.setRequestHeader(c, this._opts.extraHeaders[c]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        s.setRequestHeader("Accept", "*/*");
      } catch {}
      ((l = this._opts.cookieJar) === null || l === void 0 || l.addCookies(s),
        "withCredentials" in s &&
          (s.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout),
        (s.onreadystatechange = () => {
          var c;
          (s.readyState === 3 &&
            ((c = this._opts.cookieJar) === null ||
              c === void 0 ||
              c.parseCookies(s.getResponseHeader("set-cookie"))),
            s.readyState === 4 &&
              (s.status === 200 || s.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof s.status == "number" ? s.status : 0);
                  }, 0)));
        }),
        s.send(this._data));
    } catch (c) {
      this.setTimeoutFn(() => {
        this._onError(c);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = nn.requestsCount++), (nn.requests[this._index] = this));
  }
  _onError(l) {
    (this.emitReserved("error", l, this._xhr), this._cleanup(!0));
  }
  _cleanup(l) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = kS), l))
        try {
          this._xhr.abort();
        } catch {}
      (typeof document < "u" && delete nn.requests[this._index],
        (this._xhr = null));
    }
  }
  _onLoad() {
    const l = this._xhr.responseText;
    l !== null &&
      (this.emitReserved("data", l),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
}
nn.requestsCount = 0;
nn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", Np);
  else if (typeof addEventListener == "function") {
    const i = "onpagehide" in Yt ? "pagehide" : "unload";
    addEventListener(i, Np, !1);
  }
}
function Np() {
  for (let i in nn.requests)
    nn.requests.hasOwnProperty(i) && nn.requests[i].abort();
}
const GS = (function () {
  const i = Uy({ xdomain: !1 });
  return i && i.responseType !== null;
})();
class VS extends YS {
  constructor(l) {
    super(l);
    const r = l && l.forceBase64;
    this.supportsBinary = GS && !r;
  }
  request(l = {}) {
    return (
      Object.assign(l, { xd: this.xd }, this.opts),
      new nn(Uy, this.uri(), l)
    );
  }
}
function Uy(i) {
  const l = i.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!l || FS)) return new XMLHttpRequest();
  } catch {}
  if (!l)
    try {
      return new Yt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const Ly =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class XS extends Dc {
  get name() {
    return "websocket";
  }
  doOpen() {
    const l = this.uri(),
      r = this.opts.protocols,
      s = Ly
        ? {}
        : Dy(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity",
          );
    this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(l, r, s);
    } catch (c) {
      return this.emitReserved("error", c);
    }
    ((this.ws.binaryType = this.socket.binaryType), this.addEventListeners());
  }
  addEventListeners() {
    ((this.ws.onopen = () => {
      (this.opts.autoUnref && this.ws._socket.unref(), this.onOpen());
    }),
      (this.ws.onclose = (l) =>
        this.onClose({
          description: "websocket connection closed",
          context: l,
        })),
      (this.ws.onmessage = (l) => this.onData(l.data)),
      (this.ws.onerror = (l) => this.onError("websocket error", l)));
  }
  write(l) {
    this.writable = !1;
    for (let r = 0; r < l.length; r++) {
      const s = l[r],
        c = r === l.length - 1;
      zc(s, this.supportsBinary, (f) => {
        try {
          this.doWrite(s, f);
        } catch {}
        c &&
          vs(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const l = this.opts.secure ? "wss" : "ws",
      r = this.query || {};
    return (
      this.opts.timestampRequests && (r[this.opts.timestampParam] = By()),
      this.supportsBinary || (r.b64 = 1),
      this.createUri(l, r)
    );
  }
}
const ec = Yt.WebSocket || Yt.MozWebSocket;
class QS extends XS {
  createSocket(l, r, s) {
    return Ly ? new ec(l, r, s) : r ? new ec(l, r) : new ec(l);
  }
  doWrite(l, r) {
    this.ws.send(r);
  }
}
class ZS extends Dc {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name],
      );
    } catch (l) {
      return this.emitReserved("error", l);
    }
    (this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((l) => {
        this.onError("webtransport error", l);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((l) => {
          const r = CS(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            s = l.readable.pipeThrough(r).getReader(),
            c = RS();
          (c.readable.pipeTo(l.writable),
            (this._writer = c.writable.getWriter()));
          const f = () => {
            s.read()
              .then(({ done: y, value: p }) => {
                y || (this.onPacket(p), f());
              })
              .catch((y) => {});
          };
          f();
          const h = { type: "open" };
          (this.query.sid && (h.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(h).then(() => this.onOpen()));
        });
      }));
  }
  write(l) {
    this.writable = !1;
    for (let r = 0; r < l.length; r++) {
      const s = l[r],
        c = r === l.length - 1;
      this._writer.write(s).then(() => {
        c &&
          vs(() => {
            ((this.writable = !0), this.emitReserved("drain"));
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var l;
    (l = this._transport) === null || l === void 0 || l.close();
  }
}
const KS = { websocket: QS, webtransport: ZS, polling: VS },
  JS =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  $S = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function fc(i) {
  if (i.length > 8e3) throw "URI too long";
  const l = i,
    r = i.indexOf("["),
    s = i.indexOf("]");
  r != -1 &&
    s != -1 &&
    (i =
      i.substring(0, r) +
      i.substring(r, s).replace(/:/g, ";") +
      i.substring(s, i.length));
  let c = JS.exec(i || ""),
    f = {},
    h = 14;
  for (; h--; ) f[$S[h]] = c[h] || "";
  return (
    r != -1 &&
      s != -1 &&
      ((f.source = l),
      (f.host = f.host.substring(1, f.host.length - 1).replace(/;/g, ":")),
      (f.authority = f.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (f.ipv6uri = !0)),
    (f.pathNames = WS(f, f.path)),
    (f.queryKey = PS(f, f.query)),
    f
  );
}
function WS(i, l) {
  const r = /\/{2,9}/g,
    s = l.replace(r, "/").split("/");
  return (
    (l.slice(0, 1) == "/" || l.length === 0) && s.splice(0, 1),
    l.slice(-1) == "/" && s.splice(s.length - 1, 1),
    s
  );
}
function PS(i, l) {
  const r = {};
  return (
    l.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (s, c, f) {
      c && (r[c] = f);
    }),
    r
  );
}
const dc =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  ns = [];
dc &&
  addEventListener(
    "offline",
    () => {
      ns.forEach((i) => i());
    },
    !1,
  );
class ea extends Qe {
  constructor(l, r) {
    if (
      (super(),
      (this.binaryType = OS),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      l && typeof l == "object" && ((r = l), (l = null)),
      l)
    ) {
      const s = fc(l);
      ((r.hostname = s.host),
        (r.secure = s.protocol === "https" || s.protocol === "wss"),
        (r.port = s.port),
        s.query && (r.query = s.query));
    } else r.host && (r.hostname = fc(r.host).host);
    (bs(this, r),
      (this.secure =
        r.secure != null
          ? r.secure
          : typeof location < "u" && location.protocol === "https:"),
      r.hostname && !r.port && (r.port = this.secure ? "443" : "80"),
      (this.hostname =
        r.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        r.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
            ? "443"
            : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      r.transports.forEach((s) => {
        const c = s.prototype.name;
        (this.transports.push(c), (this._transportsByName[c] = s));
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        r,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = LS(this.opts.query)),
      dc &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          ns.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open());
  }
  createTransport(l) {
    const r = Object.assign({}, this.opts.query);
    ((r.EIO = jy), (r.transport = l), this.id && (r.sid = this.id));
    const s = Object.assign(
      {},
      this.opts,
      {
        query: r,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[l],
    );
    return new this._transportsByName[l](s);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const l =
      this.opts.rememberUpgrade &&
      ea.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const r = this.createTransport(l);
    (r.open(), this.setTransport(r));
  }
  setTransport(l) {
    (this.transport && this.transport.removeAllListeners(),
      (this.transport = l),
      l
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (r) => this._onClose("transport close", r)));
  }
  onOpen() {
    ((this.readyState = "open"),
      (ea.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush());
  }
  _onPacket(l) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", l), this.emitReserved("heartbeat"), l.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(l.data));
          break;
        case "ping":
          (this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout());
          break;
        case "error":
          const r = new Error("server error");
          ((r.code = l.data), this._onError(r));
          break;
        case "message":
          (this.emitReserved("data", l.data),
            this.emitReserved("message", l.data));
          break;
      }
  }
  onHandshake(l) {
    (this.emitReserved("handshake", l),
      (this.id = l.sid),
      (this.transport.query.sid = l.sid),
      (this._pingInterval = l.pingInterval),
      (this._pingTimeout = l.pingTimeout),
      (this._maxPayload = l.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout());
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const l = this._pingInterval + this._pingTimeout;
    ((this._pingTimeoutTime = Date.now() + l),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, l)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref());
  }
  _onDrain() {
    (this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0
        ? this.emitReserved("drain")
        : this.flush());
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const l = this._getWritablePackets();
      (this.transport.send(l),
        (this._prevBufferLen = l.length),
        this.emitReserved("flush"));
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let r = 1;
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const c = this.writeBuffer[s].data;
      if ((c && (r += BS(c)), s > 0 && r > this._maxPayload))
        return this.writeBuffer.slice(0, s);
      r += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const l = Date.now() > this._pingTimeoutTime;
    return (
      l &&
        ((this._pingTimeoutTime = 0),
        vs(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      l
    );
  }
  write(l, r, s) {
    return (this._sendPacket("message", l, r, s), this);
  }
  send(l, r, s) {
    return (this._sendPacket("message", l, r, s), this);
  }
  _sendPacket(l, r, s, c) {
    if (
      (typeof r == "function" && ((c = r), (r = void 0)),
      typeof s == "function" && ((c = s), (s = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    ((s = s || {}), (s.compress = s.compress !== !1));
    const f = { type: l, data: r, options: s };
    (this.emitReserved("packetCreate", f),
      this.writeBuffer.push(f),
      c && this.once("flush", c),
      this.flush());
  }
  close() {
    const l = () => {
        (this._onClose("forced close"), this.transport.close());
      },
      r = () => {
        (this.off("upgrade", r), this.off("upgradeError", r), l());
      },
      s = () => {
        (this.once("upgrade", r), this.once("upgradeError", r));
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? s() : l();
            })
          : this.upgrading
            ? s()
            : l()),
      this
    );
  }
  _onError(l) {
    if (
      ((ea.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return (this.transports.shift(), this._open());
    (this.emitReserved("error", l), this._onClose("transport error", l));
  }
  _onClose(l, r) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        dc &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        const s = ns.indexOf(this._offlineEventListener);
        s !== -1 && ns.splice(s, 1);
      }
      ((this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", l, r),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0));
    }
  }
}
ea.protocol = jy;
class IS extends ea {
  constructor() {
    (super(...arguments), (this._upgrades = []));
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let l = 0; l < this._upgrades.length; l++)
        this._probe(this._upgrades[l]);
  }
  _probe(l) {
    let r = this.createTransport(l),
      s = !1;
    ea.priorWebsocketSuccess = !1;
    const c = () => {
      s ||
        (r.send([{ type: "ping", data: "probe" }]),
        r.once("packet", (x) => {
          if (!s)
            if (x.type === "pong" && x.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", r), !r)
              )
                return;
              ((ea.priorWebsocketSuccess = r.name === "websocket"),
                this.transport.pause(() => {
                  s ||
                    (this.readyState !== "closed" &&
                      (b(),
                      this.setTransport(r),
                      r.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", r),
                      (r = null),
                      (this.upgrading = !1),
                      this.flush()));
                }));
            } else {
              const B = new Error("probe error");
              ((B.transport = r.name), this.emitReserved("upgradeError", B));
            }
        }));
    };
    function f() {
      s || ((s = !0), b(), r.close(), (r = null));
    }
    const h = (x) => {
      const B = new Error("probe error: " + x);
      ((B.transport = r.name), f(), this.emitReserved("upgradeError", B));
    };
    function y() {
      h("transport closed");
    }
    function p() {
      h("socket closed");
    }
    function g(x) {
      r && x.name !== r.name && f();
    }
    const b = () => {
      (r.removeListener("open", c),
        r.removeListener("error", h),
        r.removeListener("close", y),
        this.off("close", p),
        this.off("upgrading", g));
    };
    (r.once("open", c),
      r.once("error", h),
      r.once("close", y),
      this.once("close", p),
      this.once("upgrading", g),
      this._upgrades.indexOf("webtransport") !== -1 && l !== "webtransport"
        ? this.setTimeoutFn(() => {
            s || r.open();
          }, 200)
        : r.open());
  }
  onHandshake(l) {
    ((this._upgrades = this._filterUpgrades(l.upgrades)), super.onHandshake(l));
  }
  _filterUpgrades(l) {
    const r = [];
    for (let s = 0; s < l.length; s++)
      ~this.transports.indexOf(l[s]) && r.push(l[s]);
    return r;
  }
}
let eE = class extends IS {
  constructor(l, r = {}) {
    const s = typeof l == "object" ? l : r;
    ((!s.transports || (s.transports && typeof s.transports[0] == "string")) &&
      (s.transports = (s.transports || ["polling", "websocket", "webtransport"])
        .map((c) => KS[c])
        .filter((c) => !!c)),
      super(l, s));
  }
};
function tE(i, l = "", r) {
  let s = i;
  ((r = r || (typeof location < "u" && location)),
    i == null && (i = r.protocol + "//" + r.host),
    typeof i == "string" &&
      (i.charAt(0) === "/" &&
        (i.charAt(1) === "/" ? (i = r.protocol + i) : (i = r.host + i)),
      /^(https?|wss?):\/\//.test(i) ||
        (typeof r < "u" ? (i = r.protocol + "//" + i) : (i = "https://" + i)),
      (s = fc(i))),
    s.port ||
      (/^(http|ws)$/.test(s.protocol)
        ? (s.port = "80")
        : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
    (s.path = s.path || "/"));
  const f = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return (
    (s.id = s.protocol + "://" + f + ":" + s.port + l),
    (s.href =
      s.protocol + "://" + f + (r && r.port === s.port ? "" : ":" + s.port)),
    s
  );
}
const nE = typeof ArrayBuffer == "function",
  aE = (i) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(i)
      : i.buffer instanceof ArrayBuffer,
  Hy = Object.prototype.toString,
  lE =
    typeof Blob == "function" ||
    (typeof Blob < "u" && Hy.call(Blob) === "[object BlobConstructor]"),
  iE =
    typeof File == "function" ||
    (typeof File < "u" && Hy.call(File) === "[object FileConstructor]");
function Bc(i) {
  return (
    (nE && (i instanceof ArrayBuffer || aE(i))) ||
    (lE && i instanceof Blob) ||
    (iE && i instanceof File)
  );
}
function as(i, l) {
  if (!i || typeof i != "object") return !1;
  if (Array.isArray(i)) {
    for (let r = 0, s = i.length; r < s; r++) if (as(i[r])) return !0;
    return !1;
  }
  if (Bc(i)) return !0;
  if (i.toJSON && typeof i.toJSON == "function" && arguments.length === 1)
    return as(i.toJSON(), !0);
  for (const r in i)
    if (Object.prototype.hasOwnProperty.call(i, r) && as(i[r])) return !0;
  return !1;
}
function rE(i) {
  const l = [],
    r = i.data,
    s = i;
  return (
    (s.data = hc(r, l)),
    (s.attachments = l.length),
    { packet: s, buffers: l }
  );
}
function hc(i, l) {
  if (!i) return i;
  if (Bc(i)) {
    const r = { _placeholder: !0, num: l.length };
    return (l.push(i), r);
  } else if (Array.isArray(i)) {
    const r = new Array(i.length);
    for (let s = 0; s < i.length; s++) r[s] = hc(i[s], l);
    return r;
  } else if (typeof i == "object" && !(i instanceof Date)) {
    const r = {};
    for (const s in i)
      Object.prototype.hasOwnProperty.call(i, s) && (r[s] = hc(i[s], l));
    return r;
  }
  return i;
}
function sE(i, l) {
  return ((i.data = mc(i.data, l)), delete i.attachments, i);
}
function mc(i, l) {
  if (!i) return i;
  if (i && i._placeholder === !0) {
    if (typeof i.num == "number" && i.num >= 0 && i.num < l.length)
      return l[i.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(i))
    for (let r = 0; r < i.length; r++) i[r] = mc(i[r], l);
  else if (typeof i == "object")
    for (const r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (i[r] = mc(i[r], l));
  return i;
}
const uE = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener",
];
var he;
(function (i) {
  ((i[(i.CONNECT = 0)] = "CONNECT"),
    (i[(i.DISCONNECT = 1)] = "DISCONNECT"),
    (i[(i.EVENT = 2)] = "EVENT"),
    (i[(i.ACK = 3)] = "ACK"),
    (i[(i.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (i[(i.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (i[(i.BINARY_ACK = 6)] = "BINARY_ACK"));
})(he || (he = {}));
class oE {
  constructor(l) {
    this.replacer = l;
  }
  encode(l) {
    return (l.type === he.EVENT || l.type === he.ACK) && as(l)
      ? this.encodeAsBinary({
          type: l.type === he.EVENT ? he.BINARY_EVENT : he.BINARY_ACK,
          nsp: l.nsp,
          data: l.data,
          id: l.id,
        })
      : [this.encodeAsString(l)];
  }
  encodeAsString(l) {
    let r = "" + l.type;
    return (
      (l.type === he.BINARY_EVENT || l.type === he.BINARY_ACK) &&
        (r += l.attachments + "-"),
      l.nsp && l.nsp !== "/" && (r += l.nsp + ","),
      l.id != null && (r += l.id),
      l.data != null && (r += JSON.stringify(l.data, this.replacer)),
      r
    );
  }
  encodeAsBinary(l) {
    const r = rE(l),
      s = this.encodeAsString(r.packet),
      c = r.buffers;
    return (c.unshift(s), c);
  }
}
class Mc extends Qe {
  constructor(l) {
    (super(), (this.reviver = l));
  }
  add(l) {
    let r;
    if (typeof l == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      r = this.decodeString(l);
      const s = r.type === he.BINARY_EVENT;
      s || r.type === he.BINARY_ACK
        ? ((r.type = s ? he.EVENT : he.ACK),
          (this.reconstructor = new cE(r)),
          r.attachments === 0 && super.emitReserved("decoded", r))
        : super.emitReserved("decoded", r);
    } else if (Bc(l) || l.base64)
      if (this.reconstructor)
        ((r = this.reconstructor.takeBinaryData(l)),
          r && ((this.reconstructor = null), super.emitReserved("decoded", r)));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + l);
  }
  decodeString(l) {
    let r = 0;
    const s = { type: Number(l.charAt(0)) };
    if (he[s.type] === void 0) throw new Error("unknown packet type " + s.type);
    if (s.type === he.BINARY_EVENT || s.type === he.BINARY_ACK) {
      const f = r + 1;
      for (; l.charAt(++r) !== "-" && r != l.length; );
      const h = l.substring(f, r);
      if (h != Number(h) || l.charAt(r) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(h);
    }
    if (l.charAt(r + 1) === "/") {
      const f = r + 1;
      for (; ++r && !(l.charAt(r) === "," || r === l.length); );
      s.nsp = l.substring(f, r);
    } else s.nsp = "/";
    const c = l.charAt(r + 1);
    if (c !== "" && Number(c) == c) {
      const f = r + 1;
      for (; ++r; ) {
        const h = l.charAt(r);
        if (h == null || Number(h) != h) {
          --r;
          break;
        }
        if (r === l.length) break;
      }
      s.id = Number(l.substring(f, r + 1));
    }
    if (l.charAt(++r)) {
      const f = this.tryParse(l.substr(r));
      if (Mc.isPayloadValid(s.type, f)) s.data = f;
      else throw new Error("invalid payload");
    }
    return s;
  }
  tryParse(l) {
    try {
      return JSON.parse(l, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(l, r) {
    switch (l) {
      case he.CONNECT:
        return Tp(r);
      case he.DISCONNECT:
        return r === void 0;
      case he.CONNECT_ERROR:
        return typeof r == "string" || Tp(r);
      case he.EVENT:
      case he.BINARY_EVENT:
        return (
          Array.isArray(r) &&
          (typeof r[0] == "number" ||
            (typeof r[0] == "string" && uE.indexOf(r[0]) === -1))
        );
      case he.ACK:
      case he.BINARY_ACK:
        return Array.isArray(r);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class cE {
  constructor(l) {
    ((this.packet = l), (this.buffers = []), (this.reconPack = l));
  }
  takeBinaryData(l) {
    if (
      (this.buffers.push(l), this.buffers.length === this.reconPack.attachments)
    ) {
      const r = sE(this.reconPack, this.buffers);
      return (this.finishedReconstruction(), r);
    }
    return null;
  }
  finishedReconstruction() {
    ((this.reconPack = null), (this.buffers = []));
  }
}
function Tp(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
const fE = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: Mc,
      Encoder: oE,
      get PacketType() {
        return he;
      },
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Zt(i, l, r) {
  return (
    i.on(l, r),
    function () {
      i.off(l, r);
    }
  );
}
const dE = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class qy extends Qe {
  constructor(l, r, s) {
    (super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = l),
      (this.nsp = r),
      s && s.auth && (this.auth = s.auth),
      (this._opts = Object.assign({}, s)),
      this.io._autoConnect && this.open());
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const l = this.io;
    this.subs = [
      Zt(l, "open", this.onopen.bind(this)),
      Zt(l, "packet", this.onpacket.bind(this)),
      Zt(l, "error", this.onerror.bind(this)),
      Zt(l, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...l) {
    return (l.unshift("message"), this.emit.apply(this, l), this);
  }
  emit(l, ...r) {
    var s, c, f;
    if (dE.hasOwnProperty(l))
      throw new Error('"' + l.toString() + '" is a reserved event name');
    if (
      (r.unshift(l),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return (this._addToQueue(r), this);
    const h = { type: he.EVENT, data: r };
    if (
      ((h.options = {}),
      (h.options.compress = this.flags.compress !== !1),
      typeof r[r.length - 1] == "function")
    ) {
      const b = this.ids++,
        x = r.pop();
      (this._registerAckCallback(b, x), (h.id = b));
    }
    const y =
        (c =
          (s = this.io.engine) === null || s === void 0
            ? void 0
            : s.transport) === null || c === void 0
          ? void 0
          : c.writable,
      p =
        this.connected &&
        !(
          !((f = this.io.engine) === null || f === void 0) &&
          f._hasPingExpired()
        );
    return (
      (this.flags.volatile && !y) ||
        (p
          ? (this.notifyOutgoingListeners(h), this.packet(h))
          : this.sendBuffer.push(h)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(l, r) {
    var s;
    const c =
      (s = this.flags.timeout) !== null && s !== void 0
        ? s
        : this._opts.ackTimeout;
    if (c === void 0) {
      this.acks[l] = r;
      return;
    }
    const f = this.io.setTimeoutFn(() => {
        delete this.acks[l];
        for (let y = 0; y < this.sendBuffer.length; y++)
          this.sendBuffer[y].id === l && this.sendBuffer.splice(y, 1);
        r.call(this, new Error("operation has timed out"));
      }, c),
      h = (...y) => {
        (this.io.clearTimeoutFn(f), r.apply(this, y));
      };
    ((h.withError = !0), (this.acks[l] = h));
  }
  emitWithAck(l, ...r) {
    return new Promise((s, c) => {
      const f = (h, y) => (h ? c(h) : s(y));
      ((f.withError = !0), r.push(f), this.emit(l, ...r));
    });
  }
  _addToQueue(l) {
    let r;
    typeof l[l.length - 1] == "function" && (r = l.pop());
    const s = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: l,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    (l.push(
      (c, ...f) => (
        this._queue[0],
        c !== null
          ? s.tryCount > this._opts.retries && (this._queue.shift(), r && r(c))
          : (this._queue.shift(), r && r(null, ...f)),
        (s.pending = !1),
        this._drainQueue()
      ),
    ),
      this._queue.push(s),
      this._drainQueue());
  }
  _drainQueue(l = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const r = this._queue[0];
    (r.pending && !l) ||
      ((r.pending = !0),
      r.tryCount++,
      (this.flags = r.flags),
      this.emit.apply(this, r.args));
  }
  packet(l) {
    ((l.nsp = this.nsp), this.io._packet(l));
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((l) => {
          this._sendConnectPacket(l);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(l) {
    this.packet({
      type: he.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, l)
        : l,
    });
  }
  onerror(l) {
    this.connected || this.emitReserved("connect_error", l);
  }
  onclose(l, r) {
    ((this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", l, r),
      this._clearAcks());
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((l) => {
      if (!this.sendBuffer.some((s) => String(s.id) === l)) {
        const s = this.acks[l];
        (delete this.acks[l],
          s.withError &&
            s.call(this, new Error("socket has been disconnected")));
      }
    });
  }
  onpacket(l) {
    if (l.nsp === this.nsp)
      switch (l.type) {
        case he.CONNECT:
          l.data && l.data.sid
            ? this.onconnect(l.data.sid, l.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)",
                ),
              );
          break;
        case he.EVENT:
        case he.BINARY_EVENT:
          this.onevent(l);
          break;
        case he.ACK:
        case he.BINARY_ACK:
          this.onack(l);
          break;
        case he.DISCONNECT:
          this.ondisconnect();
          break;
        case he.CONNECT_ERROR:
          this.destroy();
          const s = new Error(l.data.message);
          ((s.data = l.data.data), this.emitReserved("connect_error", s));
          break;
      }
  }
  onevent(l) {
    const r = l.data || [];
    (l.id != null && r.push(this.ack(l.id)),
      this.connected
        ? this.emitEvent(r)
        : this.receiveBuffer.push(Object.freeze(r)));
  }
  emitEvent(l) {
    if (this._anyListeners && this._anyListeners.length) {
      const r = this._anyListeners.slice();
      for (const s of r) s.apply(this, l);
    }
    (super.emit.apply(this, l),
      this._pid &&
        l.length &&
        typeof l[l.length - 1] == "string" &&
        (this._lastOffset = l[l.length - 1]));
  }
  ack(l) {
    const r = this;
    let s = !1;
    return function (...c) {
      s || ((s = !0), r.packet({ type: he.ACK, id: l, data: c }));
    };
  }
  onack(l) {
    const r = this.acks[l.id];
    typeof r == "function" &&
      (delete this.acks[l.id],
      r.withError && l.data.unshift(null),
      r.apply(this, l.data));
  }
  onconnect(l, r) {
    ((this.id = l),
      (this.recovered = r && this._pid === r),
      (this._pid = r),
      (this.connected = !0),
      this.emitBuffered(),
      this._drainQueue(!0),
      this.emitReserved("connect"));
  }
  emitBuffered() {
    (this.receiveBuffer.forEach((l) => this.emitEvent(l)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((l) => {
        (this.notifyOutgoingListeners(l), this.packet(l));
      }),
      (this.sendBuffer = []));
  }
  ondisconnect() {
    (this.destroy(), this.onclose("io server disconnect"));
  }
  destroy() {
    (this.subs && (this.subs.forEach((l) => l()), (this.subs = void 0)),
      this.io._destroy(this));
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: he.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(l) {
    return ((this.flags.compress = l), this);
  }
  get volatile() {
    return ((this.flags.volatile = !0), this);
  }
  timeout(l) {
    return ((this.flags.timeout = l), this);
  }
  onAny(l) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(l),
      this
    );
  }
  prependAny(l) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(l),
      this
    );
  }
  offAny(l) {
    if (!this._anyListeners) return this;
    if (l) {
      const r = this._anyListeners;
      for (let s = 0; s < r.length; s++)
        if (l === r[s]) return (r.splice(s, 1), this);
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(l) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(l),
      this
    );
  }
  prependAnyOutgoing(l) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(l),
      this
    );
  }
  offAnyOutgoing(l) {
    if (!this._anyOutgoingListeners) return this;
    if (l) {
      const r = this._anyOutgoingListeners;
      for (let s = 0; s < r.length; s++)
        if (l === r[s]) return (r.splice(s, 1), this);
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(l) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const r = this._anyOutgoingListeners.slice();
      for (const s of r) s.apply(this, l.data);
    }
  }
}
function pl(i) {
  ((i = i || {}),
    (this.ms = i.min || 100),
    (this.max = i.max || 1e4),
    (this.factor = i.factor || 2),
    (this.jitter = i.jitter > 0 && i.jitter <= 1 ? i.jitter : 0),
    (this.attempts = 0));
}
pl.prototype.duration = function () {
  var i = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var l = Math.random(),
      r = Math.floor(l * this.jitter * i);
    i = (Math.floor(l * 10) & 1) == 0 ? i - r : i + r;
  }
  return Math.min(i, this.max) | 0;
};
pl.prototype.reset = function () {
  this.attempts = 0;
};
pl.prototype.setMin = function (i) {
  this.ms = i;
};
pl.prototype.setMax = function (i) {
  this.max = i;
};
pl.prototype.setJitter = function (i) {
  this.jitter = i;
};
class pc extends Qe {
  constructor(l, r) {
    var s;
    (super(),
      (this.nsps = {}),
      (this.subs = []),
      l && typeof l == "object" && ((r = l), (l = void 0)),
      (r = r || {}),
      (r.path = r.path || "/socket.io"),
      (this.opts = r),
      bs(this, r),
      this.reconnection(r.reconnection !== !1),
      this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(r.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (s = r.randomizationFactor) !== null && s !== void 0 ? s : 0.5,
      ),
      (this.backoff = new pl({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(r.timeout == null ? 2e4 : r.timeout),
      (this._readyState = "closed"),
      (this.uri = l));
    const c = r.parser || fE;
    ((this.encoder = new c.Encoder()),
      (this.decoder = new c.Decoder()),
      (this._autoConnect = r.autoConnect !== !1),
      this._autoConnect && this.open());
  }
  reconnection(l) {
    return arguments.length
      ? ((this._reconnection = !!l), l || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(l) {
    return l === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = l), this);
  }
  reconnectionDelay(l) {
    var r;
    return l === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = l),
        (r = this.backoff) === null || r === void 0 || r.setMin(l),
        this);
  }
  randomizationFactor(l) {
    var r;
    return l === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = l),
        (r = this.backoff) === null || r === void 0 || r.setJitter(l),
        this);
  }
  reconnectionDelayMax(l) {
    var r;
    return l === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = l),
        (r = this.backoff) === null || r === void 0 || r.setMax(l),
        this);
  }
  timeout(l) {
    return arguments.length ? ((this._timeout = l), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(l) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new eE(this.uri, this.opts);
    const r = this.engine,
      s = this;
    ((this._readyState = "opening"), (this.skipReconnect = !1));
    const c = Zt(r, "open", function () {
        (s.onopen(), l && l());
      }),
      f = (y) => {
        (this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", y),
          l ? l(y) : this.maybeReconnectOnOpen());
      },
      h = Zt(r, "error", f);
    if (this._timeout !== !1) {
      const y = this._timeout,
        p = this.setTimeoutFn(() => {
          (c(), f(new Error("timeout")), r.close());
        }, y);
      (this.opts.autoUnref && p.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(p);
        }));
    }
    return (this.subs.push(c), this.subs.push(h), this);
  }
  connect(l) {
    return this.open(l);
  }
  onopen() {
    (this.cleanup(), (this._readyState = "open"), this.emitReserved("open"));
    const l = this.engine;
    this.subs.push(
      Zt(l, "ping", this.onping.bind(this)),
      Zt(l, "data", this.ondata.bind(this)),
      Zt(l, "error", this.onerror.bind(this)),
      Zt(l, "close", this.onclose.bind(this)),
      Zt(this.decoder, "decoded", this.ondecoded.bind(this)),
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(l) {
    try {
      this.decoder.add(l);
    } catch (r) {
      this.onclose("parse error", r);
    }
  }
  ondecoded(l) {
    vs(() => {
      this.emitReserved("packet", l);
    }, this.setTimeoutFn);
  }
  onerror(l) {
    this.emitReserved("error", l);
  }
  socket(l, r) {
    let s = this.nsps[l];
    return (
      s
        ? this._autoConnect && !s.active && s.connect()
        : ((s = new qy(this, l, r)), (this.nsps[l] = s)),
      s
    );
  }
  _destroy(l) {
    const r = Object.keys(this.nsps);
    for (const s of r) if (this.nsps[s].active) return;
    this._close();
  }
  _packet(l) {
    const r = this.encoder.encode(l);
    for (let s = 0; s < r.length; s++) this.engine.write(r[s], l.options);
  }
  cleanup() {
    (this.subs.forEach((l) => l()),
      (this.subs.length = 0),
      this.decoder.destroy());
  }
  _close() {
    ((this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close"));
  }
  disconnect() {
    return this._close();
  }
  onclose(l, r) {
    var s;
    (this.cleanup(),
      (s = this.engine) === null || s === void 0 || s.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", l, r),
      this._reconnection && !this.skipReconnect && this.reconnect());
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const l = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      (this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1));
    else {
      const r = this.backoff.duration();
      this._reconnecting = !0;
      const s = this.setTimeoutFn(() => {
        l.skipReconnect ||
          (this.emitReserved("reconnect_attempt", l.backoff.attempts),
          !l.skipReconnect &&
            l.open((c) => {
              c
                ? ((l._reconnecting = !1),
                  l.reconnect(),
                  this.emitReserved("reconnect_error", c))
                : l.onreconnect();
            }));
      }, r);
      (this.opts.autoUnref && s.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(s);
        }));
    }
  }
  onreconnect() {
    const l = this.backoff.attempts;
    ((this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", l));
  }
}
const hi = {};
function ls(i, l) {
  (typeof i == "object" && ((l = i), (i = void 0)), (l = l || {}));
  const r = tE(i, l.path || "/socket.io"),
    s = r.source,
    c = r.id,
    f = r.path,
    h = hi[c] && f in hi[c].nsps,
    y = l.forceNew || l["force new connection"] || l.multiplex === !1 || h;
  let p;
  return (
    y ? (p = new pc(s, l)) : (hi[c] || (hi[c] = new pc(s, l)), (p = hi[c])),
    r.query && !l.query && (l.query = r.queryKey),
    p.socket(r.path, l)
  );
}
Object.assign(ls, { Manager: pc, Socket: qy, io: ls, connect: ls });
const hE = () => {
    const { user: i } = ml(),
      [l, r] = N.useState(null),
      [s, c] = N.useState(null),
      [f, h] = N.useState(!1),
      [y, p] = N.useState(!1),
      [g, b] = N.useState(""),
      [x, B] = N.useState(!1),
      F = N.useRef(null);
    N.useEffect(() => {
      const P = "https://capcraft.onrender.com";
      return (
        (F.current = ls(P)),
        F.current.on("connect", () => {
          console.log("🔌 Connected to Socket:", F.current.id);
        }),
        F.current.on("captionChunk", (X) => {
          b((Te) => Te + X);
        }),
        F.current.on("captionComplete", () => {
          (p(!1), it.success("Magic complete! ✨"));
        }),
        F.current.on("captionError", (X) => {
          (p(!1), it.error(X.message || "Failed to generate caption."));
        }),
        () => {
          F.current && F.current.disconnect();
        }
      );
    }, []);
    const O = (P) => {
        (P.preventDefault(), h(!0));
      },
      U = (P) => {
        (P.preventDefault(), h(!1));
      },
      C = (P) => {
        (P.preventDefault(), h(!1));
        const X = P.dataTransfer.files[0];
        K(X);
      },
      k = (P) => {
        const X = P.target.files[0];
        K(X);
      },
      K = (P) => {
        if (P && P.type.startsWith("image/")) {
          if (P.size > 5 * 1024 * 1024)
            return it.error("Image size should be less than 5MB");
          (r(P), c(URL.createObjectURL(P)), b(""));
        } else it.error("Please upload a valid image file (JPG, PNG, WEBP).");
      },
      Y = () => {
        (r(null), c(null), b(""));
      },
      ee = async () => {
        if (!l) return it.error("Please upload an image first!");
        (p(!0), b(""), B(!1));
        const P = new FormData();
        (P.append("image", l), P.append("socketId", F.current.id));
        try {
          await Ea.post("/api/caption/generate", P, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch (X) {
          (p(!1),
            it.error("Failed to connect to AI server."),
            console.error(X));
        }
      },
      ie = () => {
        g &&
          (navigator.clipboard.writeText(g),
          B(!0),
          it.success("Copied to clipboard!"),
          setTimeout(() => B(!1), 2e3));
      };
    return v.jsx("div", {
      className:
        "max-w-3xl mx-auto mt-6 md:mt-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10",
      children: v.jsxs("div", {
        className:
          "bg-[#111827] p-6 md:p-10 rounded-3xl shadow-2xl border border-[#1F2937]",
        children: [
          v.jsxs("div", {
            className: "mb-8 text-center md:text-left",
            children: [
              v.jsxs("h1", {
                className:
                  "text-3xl md:text-4xl font-extrabold text-[#F9FAFB] mb-2 tracking-tight",
                children: [
                  "Create Magic, ",
                  i?.fullName?.firstName || "Creator",
                  "! ✨",
                ],
              }),
              v.jsx("p", {
                className: "text-[#9CA3AF] font-light",
                children:
                  "Drop your image below and let AI craft the perfect caption.",
              }),
            ],
          }),
          s
            ? v.jsxs("div", {
                className:
                  "relative rounded-3xl overflow-hidden bg-[#0B0F19] border border-[#1F2937] group",
                children: [
                  v.jsx("button", {
                    onClick: Y,
                    className:
                      "absolute top-4 right-4 bg-[#111827]/80 backdrop-blur-md p-2.5 rounded-full shadow-lg text-[#9CA3AF] hover:text-[#EF4444] hover:bg-[#111827] transition-all z-10",
                    title: "Remove Image",
                    children: v.jsx(wc, { size: 20, strokeWidth: 2.5 }),
                  }),
                  v.jsx("img", {
                    src: s,
                    alt: "Preview",
                    className:
                      "w-full h-auto max-h-[300px] md:max-h-[450px] object-contain bg-black/20",
                  }),
                ],
              })
            : v.jsxs("div", {
                onDragOver: O,
                onDragLeave: U,
                onDrop: C,
                onClick: () => document.getElementById("file-upload").click(),
                className: `relative border-2 border-dashed rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[250px] md:min-h-[300px] ${f ? "border-[#6366F1] bg-[#6366F1]/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]" : "border-[#374151] bg-[#0B0F19] hover:bg-[#1F2937]/50 hover:border-[#6366F1]/50"}`,
                children: [
                  v.jsx("input", {
                    id: "file-upload",
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: k,
                  }),
                  v.jsx("div", {
                    className:
                      "bg-[#111827] p-5 rounded-full shadow-sm mb-5 border border-[#1F2937] transition-transform transform group-hover:scale-110",
                    children: v.jsx(Sy, {
                      size: 36,
                      className: "text-[#6366F1]",
                    }),
                  }),
                  v.jsx("p", {
                    className:
                      "text-[#F9FAFB] font-extrabold text-lg md:text-xl mb-2 text-center",
                    children: "Drag & Drop your image here",
                  }),
                  v.jsx("p", {
                    className: "text-sm text-[#6B7280] font-medium text-center",
                    children: "or click to browse from your device",
                  }),
                  v.jsxs("div", {
                    className:
                      "mt-6 flex gap-3 text-xs text-[#9CA3AF] font-semibold bg-[#111827] px-4 py-2 rounded-full border border-[#1F2937]",
                    children: [
                      v.jsx("span", { children: "JPG" }),
                      " • ",
                      v.jsx("span", { children: "PNG" }),
                      " • ",
                      v.jsx("span", { children: "WEBP" }),
                    ],
                  }),
                ],
              }),
          v.jsx("div", {
            className: "mt-8 flex justify-center",
            children: v.jsx("button", {
              onClick: ee,
              disabled: !s || y,
              className: `flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 rounded-xl font-bold text-white shadow-lg transition-all transform ${s ? (y ? "bg-[#6366F1]/80 cursor-wait shadow-[0_0_20px_rgba(99,102,241,0.5)]" : "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-[0.98]") : "bg-[#1F2937] text-[#9CA3AF] cursor-not-allowed border border-[#374151]"}`,
              children: y
                ? v.jsxs(v.Fragment, {
                    children: [
                      v.jsx("div", {
                        className:
                          "h-5 w-5 border-2 border-[#F9FAFB]/30 border-t-[#F9FAFB] rounded-full animate-spin",
                      }),
                      "Analyzing Image...",
                    ],
                  })
                : v.jsxs(v.Fragment, {
                    children: [v.jsx(Ty, { size: 22 }), "Generate Caption"],
                  }),
            }),
          }),
          (g || y) &&
            v.jsxs("div", {
              className:
                "mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500",
              children: [
                v.jsxs("div", {
                  className: "flex justify-between items-center mb-4 px-2",
                  children: [
                    v.jsxs("h3", {
                      className:
                        "text-sm font-extrabold text-[#6366F1] uppercase tracking-widest flex items-center gap-2",
                      children: [v.jsx(Ay, { size: 16 }), " AI Result"],
                    }),
                    g &&
                      !y &&
                      v.jsxs("button", {
                        onClick: ie,
                        className: `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${x ? "bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30" : "bg-[#1F2937] text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#374151] border border-[#374151]"}`,
                        children: [
                          x ? v.jsx(T2, { size: 16 }) : v.jsx(Ey, { size: 16 }),
                          x ? "Copied!" : "Copy Text",
                        ],
                      }),
                  ],
                }),
                v.jsx("div", {
                  className:
                    "bg-[#0B0F19] p-6 md:p-8 rounded-3xl border border-[#1F2937] min-h-[140px] shadow-inner relative group transition-all hover:border-[#6366F1]/30",
                  children: v.jsxs("p", {
                    className:
                      "text-[#F9FAFB] text-[1.05rem] md:text-[1.1rem] leading-relaxed whitespace-pre-wrap font-light",
                    children: [
                      g,
                      y &&
                        v.jsx("span", {
                          className:
                            "inline-block w-2 h-5 md:w-2.5 md:h-5 ml-1 bg-[#6366F1] animate-pulse align-middle rounded-sm shadow-[0_0_10px_rgba(99,102,241,0.8)]",
                        }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      }),
    });
  },
  mE = () => {
    const { user: i } = ml(),
      [l, r] = N.useState({
        totalUsers: 0,
        totalCaptions: 0,
        activeUsers: 0,
        users: [],
      }),
      [s, c] = N.useState(!0),
      f = async () => {
        try {
          const { data: p } = await Ea.get("/api/admin/dashboard");
          p.success && r(p.data);
        } catch {
          it.error("Failed to load admin data");
        } finally {
          c(!1);
        }
      };
    N.useEffect(() => {
      f();
    }, []);
    const h = async (p, g) => {
      if (window.confirm(`Are you sure you want to delete ${g}?`))
        try {
          const { data: b } = await Ea.delete(`/api/admin/users/${p}`);
          b.success &&
            (it.success(b.message),
            r((x) => ({
              ...x,
              users: x.users.filter((B) => B._id !== p),
              totalUsers: x.totalUsers - 1,
            })));
        } catch (b) {
          it.error(b.response?.data?.message || "Failed to delete user");
        }
    };
    if (s)
      return v.jsx("div", {
        className: "min-h-[50vh] flex items-center justify-center",
        children: v.jsx("div", {
          className:
            "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#6366F1]",
        }),
      });
    const y = [
      {
        title: "Total Users",
        value: l.totalUsers,
        icon: hS,
        color: "text-[#3B82F6]",
        bg: "bg-[#3B82F6]/10",
        border: "border-[#3B82F6]/20",
      },
      {
        title: "Active (48h)",
        value: l.activeUsers,
        icon: E2,
        color: "text-[#22C55E]",
        bg: "bg-[#22C55E]/10",
        border: "border-[#22C55E]/20",
      },
      {
        title: "Total Captions",
        value: l.totalCaptions,
        icon: I2,
        color: "text-[#8B5CF6]",
        bg: "bg-[#8B5CF6]/10",
        border: "border-[#8B5CF6]/20",
      },
    ];
    return v.jsxs("div", {
      className:
        "max-w-7xl mx-auto mt-6 md:mt-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700",
      children: [
        v.jsxs("div", {
          className: "mb-8",
          children: [
            v.jsx("h1", {
              className:
                "text-3xl md:text-4xl font-extrabold text-[#F9FAFB] tracking-tight",
              children: "Admin Portal ⚙️",
            }),
            v.jsx("p", {
              className: "text-[#9CA3AF] font-light mt-2",
              children: "System overview and user management.",
            }),
          ],
        }),
        v.jsx("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10",
          children: y.map((p, g) => {
            const b = p.icon;
            return v.jsxs(
              "div",
              {
                className: `bg-[#111827] p-6 rounded-3xl border ${p.border} flex items-center gap-5 transition-transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]`,
                children: [
                  v.jsx("div", {
                    className: `p-4 rounded-2xl ${p.bg} ${p.color}`,
                    children: v.jsx(b, { size: 28, strokeWidth: 2.5 }),
                  }),
                  v.jsxs("div", {
                    children: [
                      v.jsx("h3", {
                        className:
                          "text-[#9CA3AF] text-sm font-bold uppercase tracking-wider mb-1",
                        children: p.title,
                      }),
                      v.jsx("div", {
                        className:
                          "text-3xl md:text-4xl font-extrabold text-[#F9FAFB]",
                        children: p.value,
                      }),
                    ],
                  }),
                ],
              },
              g,
            );
          }),
        }),
        v.jsxs("div", {
          className:
            "bg-[#111827] rounded-3xl border border-[#1F2937] overflow-hidden shadow-xl",
          children: [
            v.jsx("div", {
              className: "px-6 py-5 border-b border-[#1F2937] bg-[#0B0F19]/50",
              children: v.jsx("h2", {
                className: "text-xl font-extrabold text-[#F9FAFB]",
                children: "User Management",
              }),
            }),
            v.jsx("div", {
              className: "overflow-x-auto",
              children: v.jsxs("table", {
                className: "w-full text-left text-sm whitespace-nowrap",
                children: [
                  v.jsx("thead", {
                    className:
                      "bg-[#0B0F19] text-[#9CA3AF] font-bold uppercase tracking-wider text-xs border-b border-[#1F2937]",
                    children: v.jsxs("tr", {
                      children: [
                        v.jsx("th", {
                          className: "px-6 py-4",
                          children: "Name",
                        }),
                        v.jsx("th", {
                          className: "px-6 py-4",
                          children: "Email",
                        }),
                        v.jsx("th", {
                          className: "px-6 py-4",
                          children: "Role",
                        }),
                        v.jsx("th", {
                          className: "px-6 py-4 text-center",
                          children: "Captions",
                        }),
                        v.jsx("th", {
                          className: "px-6 py-4",
                          children: "Last Login",
                        }),
                        v.jsx("th", {
                          className: "px-6 py-4 text-center",
                          children: "Action",
                        }),
                      ],
                    }),
                  }),
                  v.jsxs("tbody", {
                    className: "divide-y divide-[#1F2937]",
                    children: [
                      l.users.map((p) =>
                        v.jsxs(
                          "tr",
                          {
                            className:
                              "hover:bg-[#1F2937]/30 transition-colors text-[#F9FAFB]",
                            children: [
                              v.jsxs("td", {
                                className: "px-6 py-4 font-bold",
                                children: [
                                  p.fullName?.firstName,
                                  " ",
                                  p.fullName?.lastName,
                                ],
                              }),
                              v.jsx("td", {
                                className: "px-6 py-4 text-[#9CA3AF]",
                                children: p.email,
                              }),
                              v.jsx("td", {
                                className: "px-6 py-4",
                                children: v.jsx("span", {
                                  className: `px-3 py-1.5 text-xs font-bold rounded-lg border ${p.role === "admin" ? "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30" : "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/30"}`,
                                  children: p.role,
                                }),
                              }),
                              v.jsx("td", {
                                className:
                                  "px-6 py-4 font-bold text-center text-[#6366F1]",
                                children: p.captionCount || 0,
                              }),
                              v.jsxs("td", {
                                className:
                                  "px-6 py-4 text-xs text-[#9CA3AF] font-medium",
                                children: [
                                  new Date(p.lastLogin).toLocaleDateString(),
                                  " ",
                                  v.jsx("br", {}),
                                  new Date(p.lastLogin).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }),
                                ],
                              }),
                              v.jsx("td", {
                                className: "px-6 py-4 text-center",
                                children: v.jsx("button", {
                                  onClick: () =>
                                    h(p._id, p.fullName?.firstName),
                                  disabled: i._id === p._id,
                                  className: `p-2 rounded-xl transition-all ${i._id === p._id ? "text-[#4B5563] cursor-not-allowed" : "text-[#EF4444] hover:bg-[#EF4444]/10 border border-transparent hover:border-[#EF4444]/30"}`,
                                  title:
                                    i._id === p._id
                                      ? "Cannot delete yourself"
                                      : "Delete User",
                                  children: v.jsx(rS, {
                                    size: 18,
                                    strokeWidth: 2.5,
                                  }),
                                }),
                              }),
                            ],
                          },
                          p._id,
                        ),
                      ),
                      l.users.length === 0 &&
                        v.jsx("tr", {
                          children: v.jsx("td", {
                            colSpan: "6",
                            className:
                              "px-6 py-12 text-center text-[#9CA3AF] font-medium",
                            children: "No users found.",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  pE = () =>
    v.jsxs("div", {
      className: "flex flex-col min-h-screen",
      children: [
        v.jsx("main", {
          className: "flex-grow pt-20 pb-24 px-6",
          children: v.jsxs("div", {
            className:
              "max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700",
            children: [
              v.jsxs("div", {
                className: "text-center mb-20",
                children: [
                  v.jsxs("h1", {
                    className:
                      "text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight",
                    children: [
                      "Powerful Features ",
                      v.jsx("br", { className: "hidden md:block" }),
                      v.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]",
                        children: "Designed for Creators",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className:
                      "text-lg text-[#9CA3AF] max-w-2xl mx-auto font-light",
                    children:
                      "Everything you need to transform your photos into highly engaging social media posts with the power of modern Artificial Intelligence.",
                  }),
                ],
              }),
              v.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: [
                  {
                    title: "AI Caption Generator",
                    desc: "CapCraft analyzes your image and generates meaningful captions that match the content and mood of your photo.",
                    icon: Ty,
                  },
                  {
                    title: "Automatic Hashtags",
                    desc: "Get relevant and optimized hashtags instantly. All hashtags are generated in lowercase and ready to copy.",
                    icon: _y,
                  },
                  {
                    title: "Drag & Drop Upload",
                    desc: "Simply drag and drop your image into the upload area. CapCraft instantly begins processing your image.",
                    icon: tS,
                  },
                  {
                    title: "Real-Time Animation",
                    desc: "Watch your caption appear in real time with smooth typing animations powered by modern web technologies.",
                    icon: z2,
                  },
                  {
                    title: "One Click Copy",
                    desc: "Copy your generated caption and hashtags instantly with a single click.",
                    icon: Ey,
                  },
                  {
                    title: "Secure & Private",
                    desc: "Your images are processed instantly and are not permanently stored. CapCraft focuses on privacy.",
                    icon: Ny,
                  },
                ].map((i, l) =>
                  v.jsxs(
                    "div",
                    {
                      className:
                        "p-8 rounded-3xl bg-[#111827] border border-[#1F2937] hover:bg-[#111827]/80 hover:border-[#6366F1]/50 hover:-translate-y-1 transition-all duration-300",
                      children: [
                        v.jsx("div", {
                          className:
                            "w-14 h-14 rounded-2xl bg-[#0B0F19] border border-[#1F2937] flex items-center justify-center mb-6",
                          children: v.jsx(i.icon, {
                            size: 28,
                            className: "text-[#6366F1]",
                          }),
                        }),
                        v.jsx("h3", {
                          className: "text-xl font-bold mb-3",
                          children: i.title,
                        }),
                        v.jsx("p", {
                          className:
                            "text-[#9CA3AF] font-light leading-relaxed",
                          children: i.desc,
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              }),
            ],
          }),
        }),
        v.jsx(Oc, {}),
      ],
    }),
  yE = () =>
    v.jsxs("div", {
      className: "flex flex-col min-h-screen",
      children: [
        v.jsx("main", {
          className: "flex-grow pt-20 pb-24 px-6",
          children: v.jsxs("div", {
            className:
              "max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700",
            children: [
              v.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  v.jsxs("h1", {
                    className:
                      "text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight",
                    children: [
                      "About",
                      " ",
                      v.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]",
                        children: "CapCraft",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className:
                      "text-xl text-[#9CA3AF] font-light leading-relaxed",
                    children:
                      "Simplifying content creation using advanced AI technology.",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "space-y-12",
                children: [
                  v.jsxs("div", {
                    className:
                      "bg-[#111827] p-8 md:p-12 rounded-[40px] border border-[#1F2937]",
                    children: [
                      v.jsx("p", {
                        className:
                          "text-lg text-[#F9FAFB] leading-relaxed mb-6",
                        children:
                          "CapCraft is an AI-powered tool designed to help creators generate engaging captions and hashtags from images instantly.",
                      }),
                      v.jsx("p", {
                        className:
                          "text-lg text-[#9CA3AF] leading-relaxed font-light mb-6",
                        children:
                          "The idea behind CapCraft is simple — remove the difficulty of writing captions and let artificial intelligence do the creative work. By analyzing the visual content of an image, CapCraft generates captions that match the context, mood, and style of the image.",
                      }),
                      v.jsx("p", {
                        className:
                          "text-lg text-[#9CA3AF] leading-relaxed font-light",
                        children:
                          "Our goal is to make content creation faster and easier for creators, marketers, and social media users.",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                      v.jsxs("div", {
                        className:
                          "p-8 md:p-10 rounded-[32px] bg-[#0B0F19] border border-[#1F2937] hover:border-[#6366F1]/40 transition-colors",
                        children: [
                          v.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-[#F9FAFB]",
                            children: "Our Mission",
                          }),
                          v.jsx("p", {
                            className:
                              "text-[#9CA3AF] font-light leading-relaxed",
                            children:
                              "Our mission is to simplify content creation using AI. We believe that creativity should not be limited by time or effort. CapCraft helps users turn visual content into meaningful text in seconds.",
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className:
                          "p-8 md:p-10 rounded-[32px] bg-[#0B0F19] border border-[#1F2937] hover:border-[#6366F1]/40 transition-colors",
                        children: [
                          v.jsx("h3", {
                            className: "text-2xl font-bold mb-4 text-[#F9FAFB]",
                            children: "Technology",
                          }),
                          v.jsx("p", {
                            className:
                              "text-[#9CA3AF] font-light leading-relaxed",
                            children:
                              "Built using modern web technologies including MERN stack architecture, real-time communication systems, and AI-based image analysis models. Focusing on speed and performance.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "text-center px-4 pt-8",
                    children: v.jsx("p", {
                      className: "text-[#6B7280] italic text-lg",
                      children:
                        '"CapCraft is continuously evolving with new features and improvements to make AI-powered caption generation smarter and more useful for everyone."',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        v.jsx(Oc, {}),
      ],
    });
function gE() {
  return v.jsxs("div", {
    className:
      "min-h-screen bg-[#0B0F19] text-[#F9FAFB] font-sans selection:bg-[#6366F1]/30 selection:text-[#F9FAFB]",
    children: [
      v.jsx(gS, {}),
      v.jsx("main", {
        className: "container mx-auto px-4 pt-28 pb-12",
        children: v.jsxs(pv, {
          children: [
            v.jsx(Nn, { path: "/", element: v.jsx(vS, {}) }),
            v.jsx(Nn, { path: "/login", element: v.jsx(bS, {}) }),
            v.jsx(Nn, { path: "/register", element: v.jsx(xS, {}) }),
            v.jsx(Nn, { path: "/features", element: v.jsx(pE, {}) }),
            v.jsx(Nn, { path: "/about", element: v.jsx(yE, {}) }),
            v.jsx(Nn, {
              path: "/user-dashboard",
              element: v.jsx(Sp, {
                allowedRoles: ["user"],
                children: v.jsx(hE, {}),
              }),
            }),
            v.jsx(Nn, {
              path: "/admin-dashboard",
              element: v.jsx(Sp, {
                allowedRoles: ["admin"],
                children: v.jsx(mE, {}),
              }),
            }),
            v.jsx(Nn, {
              path: "*",
              element: v.jsx(Kr, { to: "/", replace: !0 }),
            }),
          ],
        }),
      }),
    ],
  });
}
v1.createRoot(document.getElementById("root")).render(
  v.jsx(qv, {
    children: v.jsxs(p2, {
      children: [v.jsx(gE, {}), v.jsx(Ub, { position: "top-right" })],
    }),
  }),
);

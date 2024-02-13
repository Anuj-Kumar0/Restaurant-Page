(() => {
  "use strict";
  var e = {
      426: (e, t, n) => {
        n.d(t, { Z: () => i });
        var o = n(81),
          r = n.n(o),
          a = n(645),
          c = n.n(a)()(r());
        c.push([
          e.id,
          ".menuDiv {\n  height: 100vh;\n  width: 60vw;\n  background-color: black;\n  opacity: 0.8;\n  overflow: auto;\n}\n\n.menu-transparent {\n  height: 80px;\n  width: 59%;\n  position: fixed;\n  opacity: 1;\n  background-color: black;\n  z-index: 2;\n}\n\nmenuFirst {\n  margin-top: 100px;\n  display: flex;\n  width: 100%;\n  height: 40%;\n}\n\n.button-top {\n  top: 0%;\n}\n\n.menu-flex {\n  display: flex;\n  width: 100%;\n  height: 40%;\n}\n\n.food-picture {\n  width: 60%;\n  height: 100%;\n}\n\n.food-name {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  height: 100%;\n  font-size: 32px;\n  font-weight: 800;\n}\n\n.opaque-image {\n  opacity: 1;\n}\n",
          "",
        ]);
        const i = c;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  o &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  o && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, o, r, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (o)
                for (var i = 0; i < this.length; i++) {
                  var d = this[i][0];
                  null != d && (c[d] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (o && c[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  r &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = r))
                      : (l[4] = "".concat(r))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var a = {}, c = [], i = 0; i < e.length; i++) {
            var d = e[i],
              s = o.base ? d[0] + o.base : d[0],
              l = a[s] || 0,
              u = "".concat(s, " ").concat(l);
            a[s] = l + 1;
            var p = n(u),
              m = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(m);
            else {
              var f = r(m, o);
              (o.byIndex = i),
                t.splice(i, 0, { identifier: u, updater: f, references: 1 });
            }
            c.push(u);
          }
          return c;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var i = n(a[c]);
              t[i].references--;
            }
            for (var d = o(e, r), s = 0; s < a.length; s++) {
              var l = n(a[s]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = d;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = "";
                n.supports && (o += "@supports (".concat(n.supports, ") {")),
                  n.media && (o += "@media ".concat(n.media, " {"));
                var r = void 0 !== n.layer;
                r &&
                  (o += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (o += n.css),
                  r && (o += "}"),
                  n.media && (o += "}"),
                  n.supports && (o += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = { id: o, exports: {} });
    return e[o](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var o = t.getElementsByTagName("script");
        if (o.length) for (var r = o.length - 1; r > -1 && !e; ) e = o[r--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.nc = void 0),
    (() => {
      var e = n(379),
        t = n.n(e),
        o = n(795),
        r = n.n(o),
        a = n(569),
        c = n.n(a),
        i = n(565),
        d = n.n(i),
        s = n(216),
        l = n.n(s),
        u = n(589),
        p = n.n(u),
        m = n(426),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = d()),
        (f.insert = c().bind(null, "head")),
        (f.domAPI = r()),
        (f.insertStyleElement = l()),
        t()(m.Z, f),
        m.Z && m.Z.locals && m.Z.locals;
      const h = n.p + "a0d04819cd742c12bff2.jpg",
        v = n.p + "9f1e2ae5d7f3bd6565b8.jpg",
        g = n.p + "551ee1564930d2edb737.jpg",
        y = n.p + "9688ec3d13e3cf1a823d.jpg";
      document.querySelector(".menu"), document.querySelector(".about");
      let b = !1;
      const C = document.querySelector("nav");
      document.querySelector(".menu"), document.querySelector(".about");
      let w = !1;
      const E = document.querySelector("nav"),
        x = (document.querySelector(".home"), document.querySelector(".menu")),
        L = document.querySelector(".about");
      document.querySelector("#content"),
        x.addEventListener("click", () => {
          if (!b) {
            const e = document.createElement("div");
            e.classList.add("menuDiv"), content.appendChild(e);
            const t = document.createElement("div");
            t.classList.add("menu-transparent"), e.appendChild(t);
            const n = document.createElement("div");
            n.classList.add("menu-flex"),
              (n.id = "menuFirst"),
              e.appendChild(n);
            const o = document.createElement("div");
            o.classList.add("food-picture"), n.appendChild(o);
            const r = document.createElement("div");
            r.classList.add("food-name"),
              (r.textContent = "STEAK"),
              n.appendChild(r);
            const a = new Image();
            (a.src = h),
              a.classList.add("opaque-image"),
              (a.onload = () => {
                const e = o.clientWidth,
                  t = o.clientHeight;
                (a.width = e), (a.height = t), o.appendChild(a);
              });
            const c = document.createElement("div");
            c.classList.add("menu-flex"), e.appendChild(c);
            const i = document.createElement("div");
            i.classList.add("food-picture"), c.appendChild(i);
            const d = document.createElement("div");
            d.classList.add("food-name"),
              (d.textContent = "OMELETTE"),
              c.appendChild(d);
            const s = new Image();
            (s.src = v),
              s.classList.add("opaque-image"),
              (s.onload = () => {
                const e = i.clientWidth,
                  t = i.clientHeight;
                (s.width = e), (s.height = t), i.appendChild(s);
              });
            const l = document.createElement("div");
            l.classList.add("menu-flex"), e.appendChild(l);
            const u = document.createElement("div");
            u.classList.add("food-picture"), l.appendChild(u);
            const p = document.createElement("div");
            p.classList.add("food-name"),
              (p.textContent = "CHICKEN"),
              l.appendChild(p);
            const m = new Image();
            (m.src = g),
              m.classList.add("opaque-image"),
              (m.onload = () => {
                const e = u.clientWidth,
                  t = u.clientHeight;
                (m.width = e), (m.height = t), u.appendChild(m);
              });
            const f = document.createElement("div");
            f.classList.add("menu-flex"), e.appendChild(f);
            const C = document.createElement("div");
            C.classList.add("food-picture"), f.appendChild(C);
            const w = document.createElement("div");
            w.classList.add("food-name"),
              (w.textContent = "STEAK PASTA"),
              f.appendChild(w);
            const E = new Image();
            (E.src = y),
              E.classList.add("opaque-image"),
              (E.onload = () => {
                const e = C.clientWidth,
                  t = C.clientHeight;
                (E.width = e), (E.height = t), C.appendChild(E);
              }),
              (b = !0);
          }
          C.classList.add("button-top");
        }),
        L.addEventListener("click", () => {
          if (!w) {
            const e = document.querySelector("#content");
            for (; e.firstChild; ) e.firstChild.remove();
            const t = document.createElement("div");
            t.classList.add("menuDiv"), e.appendChild(t);
            const n = document.createElement("div");
            n.classList.add("menu-transparent"), t.appendChild(n), (w = !0);
          }
          E.classList.add("button-top");
        });
    })();
})();

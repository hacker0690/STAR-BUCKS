(() => {
    "use strict";
    var e, v = {},
        m = {};

    function a(e) {
        var n = m[e];
        if (void 0 !== n) return n.exports;
        var r = m[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return v[e].call(r.exports, r, r.exports, a), r.loaded = !0, r.exports
    }
    a.m = v, e = [], a.O = (n, r, d, i) => {
        if (!r) {
            var t = 1 / 0;
            for (f = 0; f < e.length; f++) {
                for (var [r, d, i] = e[f], l = !0, c = 0; c < r.length; c++)(!1 & i || t >= i) && Object.keys(a.O).every(p => a.O[p](r[c])) ? r.splice(c--, 1) : (l = !1, i < t && (t = i));
                if (l) {
                    e.splice(f--, 1);
                    var u = d();
                    void 0 !== u && (n = u)
                }
            }
            return n
        }
        i = i || 0;
        for (var f = e.length; f > 0 && e[f - 1][2] > i; f--) e[f] = e[f - 1];
        e[f] = [r, d, i]
    }, a.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return a.d(n, {
            a: n
        }), n
    }, a.d = (e, n) => {
        for (var r in n) a.o(n, r) && !a.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: n[r]
        })
    }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce((n, r) => (a.f[r](e, n), n), [])), a.u = e => (592 === e ? "common" : e) + "." + {
        0: "f0f3e169a1e1dcbe",
        12: "229b37d7072a2acc",
        19: "d695b683949b2a82",
        113: "9f2441608df7e576",
        248: "f9a547dd6f5e962f",
        331: "2a388a9cf247edc9",
        378: "ed3a0f9e0f981a02",
        419: "ea4fbb44e9d0a3cd",
        436: "cd487aebf26983b6",
        471: "4f96deadb8e86bc5",
        480: "d7c25de7dad6fdf9",
        504: "8dc5d852d882278f",
        553: "cf78b6050d366d16",
        573: "57fb61bf4341bad9",
        592: "5b04160c5c5815bb",
        643: "486b042809ed6032",
        749: "a00afe28d451e7ce",
        848: "d6c1394942c28bfa",
        893: "44a2877a62fecede",
        942: "71efa7cbf3f37559",
        984: "d51cdf0aea9ba7fb"
    }[e] + ".js", a.miniCssF = e => {}, a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
        var e = {},
            n = "Tata-Starbucks:";
        a.l = (r, d, i, f) => {
            if (e[r]) e[r].push(d);
            else {
                var t, l;
                if (void 0 !== i)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var o = c[u];
                        if (o.getAttribute("src") == r || o.getAttribute("data-webpack") == n + i) {
                            t = o;
                            break
                        }
                    }
                t || (l = !0, (t = document.createElement("script")).type = "module", t.charset = "utf-8", t.timeout = 120, a.nc && t.setAttribute("nonce", a.nc), t.setAttribute("data-webpack", n + i), t.src = a.tu(r)), e[r] = [d];
                var s = (g, p) => {
                        t.onerror = t.onload = null, clearTimeout(b);
                        var _ = e[r];
                        if (delete e[r], t.parentNode && t.parentNode.removeChild(t), _ && _.forEach(h => h(p)), g) return g(p)
                    },
                    b = setTimeout(s.bind(null, void 0, {
                        type: "timeout",
                        target: t
                    }), 12e4);
                t.onerror = s.bind(null, t.onerror), t.onload = s.bind(null, t.onload), l && document.head.appendChild(t)
            }
        }
    })(), a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        a.tt = () => (void 0 === e && (e = {
            createScriptURL: n => n
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))), e)
    })(), a.tu = e => a.tt().createScriptURL(e), a.p = "", (() => {
        var e = {
            666: 0
        };
        a.f.j = (d, i) => {
            var f = a.o(e, d) ? e[d] : void 0;
            if (0 !== f)
                if (f) i.push(f[2]);
                else if (666 != d) {
                var t = new Promise((o, s) => f = e[d] = [o, s]);
                i.push(f[2] = t);
                var l = a.p + a.u(d),
                    c = new Error;
                a.l(l, o => {
                    if (a.o(e, d) && (0 !== (f = e[d]) && (e[d] = void 0), f)) {
                        var s = o && ("load" === o.type ? "missing" : o.type),
                            b = o && o.target && o.target.src;
                        c.message = "Loading chunk " + d + " failed.\n(" + s + ": " + b + ")", c.name = "ChunkLoadError", c.type = s, c.request = b, f[1](c)
                    }
                }, "chunk-" + d, d)
            } else e[d] = 0
        }, a.O.j = d => 0 === e[d];
        var n = (d, i) => {
                var c, u, [f, t, l] = i,
                    o = 0;
                if (f.some(b => 0 !== e[b])) {
                    for (c in t) a.o(t, c) && (a.m[c] = t[c]);
                    if (l) var s = l(a)
                }
                for (d && d(i); o < f.length; o++) a.o(e, u = f[o]) && e[u] && e[u][0](), e[u] = 0;
                return a.O(s)
            },
            r = self.webpackChunkTata_Starbucks = self.webpackChunkTata_Starbucks || [];
        r.forEach(n.bind(null, 0)), r.push = n.bind(null, r.push.bind(r))
    })()
})();
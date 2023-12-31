(() => {
    "use strict";
    var e, m = {},
        b = {};

    function r(e) {
        var n = b[e];
        if (void 0 !== n) return n.exports;
        var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return m[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports
    }
    r.m = m, e = [], r.O = (n, t, i, s) => {
        if (!t) {
            var a = 1 / 0;
            for (o = 0; o < e.length; o++) {
                for (var [t, i, s] = e[o], c = !0, u = 0; u < t.length; u++)(!1 & s || a >= s) && Object.keys(r.O).every(p => r.O[p](t[u])) ? t.splice(u--, 1) : (c = !1, s < a && (a = s));
                if (c) {
                    e.splice(o--, 1);
                    var l = i();
                    void 0 !== l && (n = l)
                }
            }
            return n
        }
        s = s || 0;
        for (var o = e.length; o > 0 && e[o - 1][2] > s; o--) e[o] = e[o - 1];
        e[o] = [t, i, s]
    }, r.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return r.d(n, {
            a: n
        }), n
    }, r.d = (e, n) => {
        for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((n, t) => (r.f[t](e, n), n), [])), r.u = e => e + "." + {
        "src_modules_app-common_app-common-routing_module_ts": "8cc8825fead230b1",
        "src_modules_site_site-routing_module_ts": "a66f888fa0637596",
        "src_modules_account_account-routing_module_ts": "291f1d284aadd2ff",
        "src_modules_admin_admin-routing_module_ts": "23b150f7c0cff230",
        "src_modules_auth_auth-routing_module_ts": "90d1d3aef736710b",
        "src_modules_blog_blog-routing_module_ts": "9fcd64e613c869cf",
        "src_modules_campaigns_campaigns-routing_module_ts": "39fafce2a0e640c6",
        "src_modules_error_error-routing_module_ts": "1352d70cf7d85707",
        "src_modules_shop_shop-routing_module_ts": "d5197cdf5f6a45ad"
    }[e] + ".js", r.miniCssF = e => {}, r.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), (() => {
        var e = {},
            n = "website-angular:";
        r.l = (t, i, s, o) => {
            if (e[t]) e[t].push(i);
            else {
                var a, c;
                if (void 0 !== s)
                    for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                        var d = u[l];
                        if (d.getAttribute("src") == t || d.getAttribute("data-webpack") == n + s) {
                            a = d;
                            break
                        }
                    }
                a || (c = !0, (a = document.createElement("script")).type = "module", a.charset = "utf-8", a.timeout = 120, r.nc && a.setAttribute("nonce", r.nc), a.setAttribute("data-webpack", n + s), a.src = r.tu(t), 0 !== a.src.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous")), e[t] = [i];
                var f = (g, p) => {
                        a.onerror = a.onload = null, clearTimeout(_);
                        var v = e[t];
                        if (delete e[t], a.parentNode && a.parentNode.removeChild(a), v && v.forEach(h => h(p)), g) return g(p)
                    },
                    _ = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = f.bind(null, a.onerror), a.onload = f.bind(null, a.onload), c && document.head.appendChild(a)
            }
        }
    })(), r.r = e => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        r.tt = () => (void 0 === e && (e = {
            createScriptURL: n => n
        }, typeof trustedTypes < "u" && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("angular#bundler", e))), e)
    })(), r.tu = e => r.tt().createScriptURL(e), r.p = "", (() => {
        var e = {
            runtime: 0
        };
        r.f.j = (i, s) => {
            var o = r.o(e, i) ? e[i] : void 0;
            if (0 !== o)
                if (o) s.push(o[2]);
                else if ("runtime" != i) {
                var a = new Promise((d, f) => o = e[i] = [d, f]);
                s.push(o[2] = a);
                var c = r.p + r.u(i),
                    u = new Error;
                r.l(c, d => {
                    if (r.o(e, i) && (0 !== (o = e[i]) && (e[i] = void 0), o)) {
                        var f = d && ("load" === d.type ? "missing" : d.type),
                            _ = d && d.target && d.target.src;
                        u.message = "Loading chunk " + i + " failed.\n(" + f + ": " + _ + ")", u.name = "ChunkLoadError", u.type = f, u.request = _, o[1](u)
                    }
                }, "chunk-" + i, i)
            } else e[i] = 0
        }, r.O.j = i => 0 === e[i];
        var n = (i, s) => {
                var u, l, [o, a, c] = s,
                    d = 0;
                if (o.some(_ => 0 !== e[_])) {
                    for (u in a) r.o(a, u) && (r.m[u] = a[u]);
                    if (c) var f = c(r)
                }
                for (i && i(s); d < o.length; d++) r.o(e, l = o[d]) && e[l] && e[l][0](), e[l] = 0;
                return r.O(f)
            },
            t = self.webpackChunkwebsite_angular = self.webpackChunkwebsite_angular || [];
        t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=runtime.78fe65772c8aff3e.js.map
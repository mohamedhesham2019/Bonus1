(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var r, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ea = {},
        fa = {};

    function ha(a, b, c) {
        if (!c || null != a) {
            c = fa[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (da && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function sa(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.mi = b.prototype
    }
    ja("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        sa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ja("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ea.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    var t = this || self;

    function ta(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ua(a) {
        var b = ta(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function va(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function wa(a) {
        return Object.prototype.hasOwnProperty.call(a, xa) && a[xa] || (a[xa] = ++ya)
    }
    var xa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ya = 0;

    function za(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Aa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ba(a, b, c) {
        Ba = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? za : Aa;
        return Ba.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga(a, b, c) {
        a = a.split(".");
        c = c || t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ha(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.mi = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Bm = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ia(a) {
        return a
    };
    var Ka = {
        Bl: 0,
        Al: 1,
        zl: 2
    };

    function La(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, La);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ha(La, Error);
    La.prototype.name = "CustomError";
    var Ma;

    function Na(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        La.call(this, c + a[d])
    }
    Ha(Na, La);
    Na.prototype.name = "AssertionError";

    function Qa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ra(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ta(a, b) {
        var c = a.length;
        const d = "string" === typeof a ? a.split("") : a;
        for (--c; 0 <= c; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Ua(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Va(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Wa(a, b, c) {
        let d = c;
        Ra(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Xa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ya(a, b) {
        return 0 <= Qa(a, b)
    }

    function Za(a, b) {
        b = Qa(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function $a(a, b) {
        let c = 0;
        Ta(a, function(d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++
        })
    }

    function ab(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function cb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function db(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ua(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function eb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function fb(a, b, c) {
        c = c || gb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function hb(a, b) {
        if (!ua(a) || !ua(b) || a.length != b.length) return !1;
        const c = a.length,
            d = ib;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function gb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function ib(a, b) {
        return a === b
    }

    function jb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = jb.apply(null, eb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function kb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var mb = {
        Ci: "google_adtest",
        Gi: "google_ad_client",
        Hi: "google_ad_format",
        Ji: "google_ad_height",
        Wi: "google_ad_width",
        Ni: "google_ad_layout",
        Oi: "google_ad_layout_key",
        Pi: "google_ad_output",
        Qi: "google_ad_region",
        Ti: "google_ad_slot",
        Ui: "google_ad_type",
        Vi: "google_ad_url",
        Xi: "google_allow_expandable_ads",
        rj: "google_analytics_domain_name",
        sj: "google_analytics_uacct",
        Gj: "google_container_id",
        Qj: "google_gl",
        kk: "google_enable_ose",
        vk: "google_full_width_responsive",
        El: "google_rl_filtering",
        Dl: "google_rl_mode",
        Fl: "google_rt",
        Cl: "google_rl_dest_url",
        bl: "google_max_radlink_len",
        jl: "google_num_radlinks",
        kl: "google_num_radlinks_per_unit",
        Fi: "google_ad_channel",
        al: "google_max_num_ads",
        dl: "google_max_responsive_height",
        Bj: "google_color_border",
        jk: "google_enable_content_recommendations",
        Nj: "google_content_recommendation_ui_type",
        Mj: "google_source_type",
        Lj: "google_content_recommendation_rows_num",
        Kj: "google_content_recommendation_columns_num",
        Jj: "google_content_recommendation_ad_positions",
        Oj: "google_content_recommendation_use_square_imgs",
        Dj: "google_color_link",
        Cj: "google_color_line",
        Fj: "google_color_url",
        Di: "google_ad_block",
        Si: "google_ad_section",
        Ei: "google_ad_callback",
        yj: "google_captcha_token",
        Ej: "google_color_text",
        jj: "google_alternate_ad_url",
        Mi: "google_ad_host_tier_id",
        zj: "google_city",
        Ki: "google_ad_host",
        Li: "google_ad_host_channel",
        kj: "google_alternate_color",
        Aj: "google_color_bg",
        lk: "google_encoding",
        tk: "google_font_face",
        Tj: "google_cust_ch",
        Wj: "google_cust_job",
        Vj: "google_cust_interests",
        Uj: "google_cust_id",
        Xj: "google_cust_u_url",
        xk: "google_hints",
        Nk: "google_image_size",
        el: "google_mtl",
        im: "google_cpm",
        Ij: "google_contents",
        gl: "google_native_settings_key",
        Pj: "google_country",
        am: "google_targeting",
        uk: "google_font_size",
        ak: "google_disable_video_autoplay",
        wm: "google_video_product_type",
        vm: "google_video_doc_id",
        um: "google_cust_gender",
        Vl: "google_cust_lh",
        Ul: "google_cust_l",
        hm: "google_tfs",
        fl: "google_native_ad_template",
        Tk: "google_kw",
        Xl: "google_tag_for_child_directed_treatment",
        Yl: "google_tag_for_under_age_of_consent",
        Hl: "google_region",
        Sj: "google_cust_criteria",
        Ri: "google_safe",
        Rj: "google_ctr_threshold",
        Il: "google_resizing_allowed",
        Kl: "google_resizing_width",
        Jl: "google_resizing_height",
        tm: "google_cust_age",
        LANGUAGE: "google_language",
        Uk: "google_kw_type",
        wl: "google_pucrd",
        vl: "google_page_url",
        Zl: "google_tag_partner",
        Ol: "google_restrict_data_processing",
        yi: "google_adbreak_test",
        Ii: "google_ad_frequency_hint",
        Ai: "google_admob_interstitial_slot",
        Bi: "google_admob_rewarded_slot",
        zi: "google_admob_ads_only",
        Zk: "google_max_ad_content_rating",
        yl: "google_ad_public_floor",
        xl: "google_ad_private_floor",
        sm: "google_traffic_source",
        Sl: "google_shadow_mode",
        ql: "google_overlays"
    };

    function nb(a, b) {
        this.l = a === ob && b || "";
        this.m = pb
    }
    nb.prototype.Ja = !0;
    nb.prototype.j = function() {
        return this.l
    };

    function qb(a) {
        return a instanceof nb && a.constructor === nb && a.m === pb ? a.l : "type_error:Const"
    }

    function rb(a) {
        return new nb(ob, a)
    }
    var pb = {},
        ob = {};

    function tb() {
        return !1
    }

    function ub() {
        return !0
    }

    function vb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function wb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function yb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function zb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Ab(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Fb(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Gb = {
            passive: !0
        },
        Hb = yb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ib(a) {
        return a ? a.passive && Hb() ? a : a.capture || !1 : !1
    }

    function Jb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ib(d)), !0) : !1
    }

    function Kb(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Ib(d)), !0) : !1
    };
    var Lb, Mb;
    a: {
        for (var Nb = ["CLOSURE_FLAGS"], Ob = t, Pb = 0; Pb < Nb.length; Pb++)
            if (Ob = Ob[Nb[Pb]], null == Ob) {
                Mb = null;
                break a
            }
        Mb = Ob
    }
    var Qb = Mb && Mb[610401301];
    Lb = null != Qb ? Qb : !1;

    function Sb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Tb(a) {
        if (!Ub.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Vb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Wb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Xb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Yb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Zb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace($b, "&#0;"));
        return a
    }
    var Vb = /&/g,
        Wb = /</g,
        Xb = />/g,
        Yb = /"/g,
        Zb = /'/g,
        $b = /\x00/g,
        Ub = /[\x00&<>"']/;

    function ac(a, b) {
        return -1 != a.indexOf(b)
    };

    function bc() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var cc;
    const dc = t.navigator;
    cc = dc ? dc.userAgentData || null : null;

    function ec(a) {
        return Lb ? cc ? cc.brands.some(({
            brand: b
        }) => b && ac(b, a)) : !1 : !1
    }

    function u(a) {
        return ac(bc(), a)
    };

    function fc() {
        return Lb ? !!cc && 0 < cc.brands.length : !1
    }

    function gc() {
        return fc() ? !1 : u("Opera")
    }

    function hc() {
        return fc() ? !1 : u("Trident") || u("MSIE")
    }

    function ic() {
        return u("Safari") && !(jc() || (fc() ? 0 : u("Coast")) || gc() || (fc() ? 0 : u("Edge")) || (fc() ? ec("Microsoft Edge") : u("Edg/")) || (fc() ? ec("Opera") : u("OPR")) || u("Firefox") || u("FxiOS") || u("Silk") || u("Android"))
    }

    function jc() {
        return fc() ? ec("Chromium") : (u("Chrome") || u("CriOS")) && !(fc() ? 0 : u("Edge")) || u("Silk")
    }

    function kc() {
        return u("Android") && !(jc() || u("Firefox") || u("FxiOS") || gc() || u("Silk"))
    };

    function lc(a) {
        lc[" "](a);
        return a
    }
    lc[" "] = function() {};

    function mc(a, b) {
        try {
            return lc(a[b]), !0
        } catch (c) {}
        return !1
    };
    var nc = gc(),
        oc = hc(),
        pc = u("Edge"),
        qc = pc || oc,
        rc = u("Gecko") && !(ac(bc().toLowerCase(), "webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        sc = ac(bc().toLowerCase(), "webkit") && !u("Edge");

    function tc() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var uc;
    a: {
        var vc = "",
            wc = function() {
                var a = bc();
                if (rc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (pc) return /Edge\/([\d\.]+)/.exec(a);
                if (oc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (sc) return /WebKit\/(\S+)/.exec(a);
                if (nc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();wc && (vc = wc ? wc[1] : "");
        if (oc) {
            var xc = tc();
            if (null != xc && xc > parseFloat(vc)) {
                uc = String(xc);
                break a
            }
        }
        uc = vc
    }
    var yc = uc,
        zc;
    if (t.document && oc) {
        var Ac = tc();
        zc = Ac ? Ac : parseInt(yc, 10) || void 0
    } else zc = void 0;
    var Bc = zc;

    function Cc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Dc(a) {
        var b = Ec;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Fc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Gc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Kc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Lc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Kc.length; f++) c = Kc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Mc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Nc;

    function Oc() {
        if (void 0 === Nc) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ia,
                        createScript: Ia,
                        createScriptURL: Ia
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                Nc = a
            } else Nc = a
        }
        return Nc
    };
    const Pc = {};

    function Qc(a) {
        return a instanceof Rc && a.constructor === Rc ? a.l : "type_error:SafeScript"
    }
    class Rc {
        constructor(a) {
            this.l = a;
            this.Ja = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l.toString()
        }
    };
    var Sc = class {
        constructor(a) {
            this.l = a
        }
        toString() {
            return this.l + ""
        }
    };
    Sc.prototype.Ja = !0;
    Sc.prototype.j = function() {
        return this.l.toString()
    };

    function Tc(a, b) {
        a = Uc.exec(Vc(a).toString());
        var c = a[3] || "";
        return Wc(a[1] + Xc("?", a[2] || "", b) + Xc("#", c))
    }

    function Vc(a) {
        return a instanceof Sc && a.constructor === Sc ? a.l : "type_error:TrustedResourceUrl"
    }

    function Yc(a, b) {
        var c = qb(a);
        if (!Zc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace($c, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof nb ? qb(d) : encodeURIComponent(String(d))
        });
        return Wc(a)
    }
    var $c = /%{(\w+)}/g,
        Zc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Uc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        ad = {};

    function Wc(a) {
        const b = Oc();
        a = b ? b.createScriptURL(a) : a;
        return new Sc(a, ad)
    }

    function Xc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var bd = class {
        constructor(a) {
            this.l = a
        }
        toString() {
            return this.l.toString()
        }
    };
    bd.prototype.Ja = !0;
    bd.prototype.j = function() {
        return this.l.toString()
    };

    function cd(a) {
        return a instanceof bd && a.constructor === bd ? a.l : "type_error:SafeUrl"
    }
    var ld = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        md = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function nd(a) {
        if (a instanceof bd) return a;
        a = "object" == typeof a && a.Ja ? a.j() : String(a);
        md.test(a) ? a = new bd(a, od) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(ld) ? new bd(a, od) : null);
        return a
    }
    var od = {},
        pd = new bd("about:invalid#zClosurez", od);
    const qd = {};

    function rd(a) {
        return a instanceof sd && a.constructor === sd ? a.l : "type_error:SafeStyle"
    }

    function td(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(ud).join(" ") : ud(d), b += `${c}:${d};`)
            }
        return b ? new sd(b, qd) : vd
    }
    class sd {
        constructor(a) {
            this.l = a;
            this.Ja = !0
        }
        j() {
            return this.l
        }
        toString() {
            return this.l.toString()
        }
    }
    var vd = new sd("", qd);

    function ud(a) {
        if (a instanceof bd) return 'url("' + cd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof nb) a = qb(a);
        else {
            a = String(a);
            var b = a.replace(wd, "$1").replace(wd, "$1").replace(xd, "url");
            if (yd.test(b)) {
                if (b = !zd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Ad(a)
                }
                a = b ? Bd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Na("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Ad(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const yd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        xd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        wd = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        zd = /\/\*/;

    function Bd(a) {
        return a.replace(xd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (nd(d) || pd).j();
            return c + f + b + f + e
        })
    };
    const Cd = {};

    function Dd(a) {
        return a instanceof Ed && a.constructor === Ed ? a.l : "type_error:SafeStyleSheet"
    }
    class Ed {
        constructor(a) {
            this.l = a;
            this.Ja = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l
        }
    };
    const Fd = {};

    function Gd(a) {
        return a instanceof Hd && a.constructor === Hd ? a.l : "type_error:SafeHtml"
    }

    function Id(a) {
        return a instanceof Hd ? a : Jd(Tb("object" == typeof a && a.Ja ? a.j() : String(a)))
    }

    function Jd(a) {
        const b = Oc();
        a = b ? b.createHTML(a) : a;
        return new Hd(a, Fd)
    }

    function Kd(a) {
        if (!Ld.test(a)) throw Error("");
        if (a.toUpperCase() in Md) throw Error("");
    }

    function Nd(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!Ld.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof nb) e = qb(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!va(e)) throw Error("");
                            e instanceof sd || (e = td(e));
                            e = rd(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in Od)
                                if (e instanceof Sc) e = Vc(e).toString();
                                else if (e instanceof bd) e = cd(e);
                            else if ("string" === typeof e) e = (nd(e) || pd).j();
                            else throw Error("");
                        }
                        e.Ja && (e = e.j());
                        f = `${f}="` +
                            Tb(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Mc[a.toLowerCase()] ? b += ">" : (c = Td(c), b += ">" + Gd(c).toString() + "</" + a + ">");
        return Jd(b)
    }

    function Ud(a) {
        const b = Id(Vd),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = Id(e), c.push(Gd(e).toString()))
            };
        a.forEach(d);
        return Jd(c.join(Gd(b).toString()))
    }

    function Td(a) {
        return Ud(Array.prototype.slice.call(arguments))
    }
    class Hd {
        constructor(a) {
            this.l = a;
            this.Ja = !0
        }
        j() {
            return this.l.toString()
        }
        toString() {
            return this.l.toString()
        }
    }
    const Ld = /^[a-zA-Z0-9-]+$/,
        Od = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Md = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Wd = Jd("<!DOCTYPE html>"),
        Vd = new Hd(t.trustedTypes && t.trustedTypes.emptyHTML || "", Fd),
        Xd = Jd("<br>");
    var Yd = yb(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Gd(Vd);
        return !b.parentElement
    });

    function Zd(a, b) {
        if (Yd())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Gd(b)
    }
    var $d = /^[\w+/_-]+[=]{0,2}$/;

    function ae(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function be(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function ce(a) {
        return be.apply(null, arguments) / arguments.length
    };

    function de(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    de.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    de.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    de.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function ee(a, b) {
        this.width = a;
        this.height = b
    }

    function fe(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    r = ee.prototype;
    r.aspectRatio = function() {
        return this.width / this.height
    };
    r.isEmpty = function() {
        return !(this.width * this.height)
    };
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function ge(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(he, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Jd(e + " "), Zd(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var he = /&([^;\s<&]+);?/g;

    function ie(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function je(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function ke(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function le(a) {
        return a ? new me(ne(a)) : Ma || (Ma = new me)
    }

    function oe(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new ee(a.clientWidth, a.clientHeight)
    }

    function pe(a) {
        var b = a.scrollingElement ? a.scrollingElement : sc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = qe(a);
        return oc && a.pageYOffset != b.scrollTop ? new de(b.scrollLeft, b.scrollTop) : new de(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function qe(a) {
        return a.parentWindow || a.defaultView
    }

    function re(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ua(f) || va(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (va(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ra(g ? cb(f) : f, d)
            }
        }
    }

    function se(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function te(a, b) {
        var c = se(a, "DIV");
        oc ? (b = Td(Xd, b), Zd(c, b), c.removeChild(c.firstChild)) : Zd(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function ne(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var ue = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ve = {
            IMG: " ",
            BR: "\n"
        };

    function we(a) {
        var b = [];
        xe(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function xe(a, b, c) {
        if (!(a.nodeName in ue))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ve) b.push(ve[a.nodeName]);
        else
            for (a = a.firstChild; a;) xe(a, b, c), a = a.nextSibling
    }

    function ye(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return ze(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Ya(e.className.split(/\s+/), c))
        })
    }

    function ze(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function me(a) {
        this.j = a || t.document || document
    }
    r = me.prototype;
    r.vg = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    r.xi = me.prototype.vg;
    r.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    r.createElement = function(a) {
        return se(this.j, a)
    };
    r.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function Ae(a, b) {
        return te(a.j, b)
    }
    r.V = function() {
        return qe(this.j)
    };
    r.appendChild = function(a, b) {
        a.appendChild(b)
    };
    r.append = function(a, b) {
        re(ne(a), a, arguments)
    };
    r.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    r.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    r.lh = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function Be() {
        return Lb && cc ? cc.mobile : !Ce() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function Ce() {
        return Lb && cc ? !cc.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var Ke = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Le(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function Me(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Me(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Ne(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function Oe(a) {
        var b = Pe("#", Qe) || pd;
        b = b instanceof bd ? cd(b) : Ne(b);
        void 0 !== b && (a.href = b)
    };
    var Re = class {};
    class Se extends Re {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j
        }
    };

    function Te(a, b, c) {
        var d = [Ue `width`, Ue `height`];
        if (0 === d.length) throw Error("");
        d = d.map(f => {
            if (f instanceof Se) f = f.j;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => 0 !== e.indexOf(f))) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function Ve(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const We = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function Xe(a, b, c) {
        if (b instanceof Sc) a.href = Vc(b).toString();
        else {
            if (-1 === We.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            b = b instanceof bd ? cd(b) : Ne(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function Ye(a) {
        var b;
        (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function Ze(a, b) {
        a.src = Vc(b);
        (void 0) ? .Ph || Ye(a)
    };
    class $e {
        constructor(a) {
            this.Eh = a
        }
    }

    function af(a) {
        return new $e(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Qe = [af("data"), af("http"), af("https"), af("mailto"), af("ftp"), new $e(a => /^[^:]*([/?#]|$)/.test(a))];

    function Pe(a, b = Qe) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof $e && d.Eh(a)) return new bd(a, od)
        }
    };

    function bf(a) {
        try {
            return !!a && null != a.location.href && mc(a, "foo")
        } catch {
            return !1
        }
    }

    function cf(a, b = t) {
        b = df(b);
        let c = 0;
        for (; b && 40 > c++ && !a(b);) b = df(b)
    }

    function df(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function ef(a) {
        return bf(a.top) ? a.top : null
    }

    function ff(a, b) {
        const c = gf("SCRIPT", a);
        Ze(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function hf(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function jf() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function kf(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function lf(a) {
        const b = [];
        kf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function mf(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var of = yb(() => Xa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], nf) || 1E-4 > Math.random());
    const nf = a => ac(bc(), a);
    var pf = /^([0-9.]+)px$/,
        qf = /^(-?[0-9.]{1,30})$/;

    function rf(a) {
        if (!qf.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function sf(a) {
        return /^true$/.test(a)
    }

    function tf(a) {
        return (a = pf.exec(a)) ? +a[1] : null
    }

    function uf() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var vf = {
        Yi: "allow-forms",
        Zi: "allow-modals",
        aj: "allow-orientation-lock",
        bj: "allow-pointer-lock",
        cj: "allow-popups",
        dj: "allow-popups-to-escape-sandbox",
        ej: "allow-presentation",
        fj: "allow-same-origin",
        gj: "allow-scripts",
        hj: "allow-top-navigation",
        ij: "allow-top-navigation-by-user-activation"
    };
    const wf = yb(() => lf(vf));

    function xf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = wf();
        return a.length ? Ua(b, c => !Ya(a, c)) : b
    }

    function yf() {
        const a = gf("IFRAME"),
            b = {};
        Ra(wf(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var zf = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Af = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (zf(a, b)) return a;
                if (!(a = df(a))) break
            }
            return null
        },
        Bf = yb(() => Be() ? 2 : Ce() ? 1 : 0),
        v = (a, b) => {
            kf(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const Cf = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Df = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Ef = /.*domain\.test$/,
        Ff = /\.prod\.google\.com(:\d+)?$/;
    var Gf = a => Cf[a] || Df.test(a) || Ef.test(a) || Ff.test(a);
    let Hf = [];
    const If = () => {
        const a = Hf;
        Hf = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Jf = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Kf = (a, b) => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Jf(),
                    configurable: !1
                })
            } catch (c) {
                b && b.sa(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || 0 >= a) && b.sa(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        Lf = (a, b) => {
            "complete" === a.document.readyState ? (Hf.push(b), 1 == Hf.length && (window.Promise ? Promise.resolve().then(If) : window.setImmediate ? setImmediate(If) : setTimeout(If, 0))) : a.addEventListener("load", b)
        },
        Mf = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function gf(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Nf = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, bf(a) && (b = a);
        return b
    };
    kc();
    jc();
    ic();
    var Of = {},
        Pf = null;

    function Qf(a) {
        var b = 3;
        void 0 === b && (b = 0);
        Rf();
        b = Of[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function Sf(a) {
        var b = [];
        Tf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Tf(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Pf[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Rf();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Rf() {
        if (!Pf) {
            Pf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                Of[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Pf[f] && (Pf[f] = e)
                }
            }
        }
    };

    function Uf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const Vf = /[-_.]/g,
        Wf = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function Xf(a) {
        return Wf[a] || ""
    }

    function Yf(a) {
        return null != a && a instanceof Uint8Array
    }
    let Zf;
    var $f = {};
    let ag;

    function bg(a) {
        if (a !== $f) throw Error("illegal external caller");
    }

    function cg() {
        return ag || (ag = new dg(null, $f))
    }
    var dg = class {
        constructor(a, b) {
            bg(b);
            this.K = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.K
        }
    };

    function eg(a) {
        return Array.prototype.slice.call(a)
    };
    const x = Symbol();

    function rg(a) {
        const b = a[x] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = eg(a)), a[x] = b | 1)
    }

    function sg(a, b) {
        Object.isFrozen(a) && (a = eg(a));
        a[x] = b;
        return a
    }

    function tg(a) {
        a[x] |= 1;
        return a
    }

    function ug(a) {
        a[x] |= 34;
        return a
    }

    function vg(a) {
        a[x] |= 32;
        return a
    }

    function wg(a, b) {
        b[x] = (a | 0) & -255
    }

    function xg(a, b) {
        b[x] = (a | 34) & -221
    }

    function yg(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var zg = {};

    function Ag(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Bg;

    function Cg(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new dg(a, $f) : cg();
            else if (a.constructor !== dg)
            if (Yf(a)) {
                var d;
                c ? d = 0 == a.length ? cg() : new dg(a, $f) : d = a.length ? new dg(new Uint8Array(a), $f) : cg();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Dg;
    const Eg = [];
    Eg[x] = 39;
    Dg = Object.freeze(Eg);

    function Fg(a) {
        if (a & 2) throw Error();
    }
    class Gg {
        constructor(a, b, c) {
            this.m = 0;
            this.j = a;
            this.l = b;
            this.v = c
        }
        next() {
            if (this.m < this.j.length) {
                const a = this.j[this.m++];
                return {
                    done: !1,
                    value: this.l ? this.l.call(this.v, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new Gg(this.j, this.l, this.v)
        }
    }
    var Hg = {};

    function Ig(a) {
        if (null != a && "number" !== typeof a) throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function Jg(a) {
        if ("boolean" !== typeof a) throw Error(`Expected boolean but got ${ta(a)}: ${a}`);
        return !!a
    }

    function Kg(a) {
        return "number" === typeof a && Number.isFinite(a) || !!a && "string" === typeof a && isFinite(a)
    }

    function Lg(a) {
        return a
    }

    function Mg(a) {
        return "number" === typeof a
    }

    function Ng(a) {
        if (!Mg(a)) throw Error();
        return a
    }

    function Og(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if (Mg(a)) return a
    }

    function Pg(a) {
        if (!Mg(a)) throw Error();
        return a
    }

    function Qg(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if (Mg(a)) return a
    }

    function Rg(a) {
        if (!Kg(a)) throw Error(`Expected an int64 value encoded as a number or a string but got ${a} a ${ta(a)}`);
        return "string" === typeof a ? a : a
    }

    function Sg(a) {
        if (null == a) return a;
        if (Kg(a)) {
            var b;
            "number" === typeof a ? b = a : b = a;
            return b
        }
    }

    function Tg(a) {
        if (!Kg(a)) throw Error(`Expected an uint64 value encoded as a number or a string but got ${a} a ${ta(a)}`);
        return "string" === typeof a ? a : a
    }

    function Ug(a) {
        return null == a ? a : Tg(a)
    }

    function Vg(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function Wg(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function Xg(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Yg(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.ne === zg) return a;
        if (!e) return c ? d & 2 ? Zg(b) : new b : void 0;
        e = c = a[x] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }
    const $g = Symbol();

    function Zg(a) {
        var b = a[$g];
        if (b) return b;
        b = new a;
        ug(b.P);
        return a[$g] = b
    }

    function ah(a) {
        return a
    }

    function bh(a, b, c) {
        return "string" === typeof a ? a : c ? "" : void 0
    };

    function ch(a) {
        if (a.j & 2) throw Error("Cannot mutate an immutable Map");
    }
    var gh = class extends Map {
        constructor(a, b, c = ah, d = ah) {
            super();
            let e = a[x] | 0;
            e |= 64;
            this.j = a[x] = e;
            this.m = b;
            this.l = c || ah;
            this.A = this.m ? dh : d || ah;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? void 0 === k && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        B(a = eh) {
            return this.v(a)
        }
        v(a = eh) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            ch(this);
            super.clear()
        }
        delete(a) {
            ch(this);
            return super.delete(this.l(a, !0, !1))
        }
        entries() {
            var a = this.C();
            return new Gg(a, fh, this)
        }
        keys() {
            return this.F()
        }
        values() {
            var a = this.C();
            return new Gg(a, gh.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            ch(this);
            a = this.l(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a), this) : super.set(a, this.A(b, !0, !0, this.m, !1, this.j))
        }
        get(a) {
            a = this.l(a, !1, !1);
            const b = super.get(a);
            if (void 0 !== b) {
                var c = this.m;
                return c ? (c = this.A(b, !1, !0, c, this.G, this.j), c !== b && super.set(a, c), c) : b
            }
        }
        C() {
            return Array.from(super.keys())
        }
        F() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    gh.prototype.toJSON = void 0;

    function dh(a, b, c, d, e, f) {
        a = Yg(a, d, c, f);
        e && (a = hh(a));
        return a
    }

    function eh(a) {
        return a
    }

    function fh(a) {
        return [a, this.get(a)]
    };
    let ih;

    function jh(a, b) {
        ih = b;
        a = new a(b);
        ih = void 0;
        return a
    };

    function kh(a, b) {
        return lh(b)
    }

    function lh(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a)) {
                    if (Yf(a)) return Uf(a);
                    if (a instanceof dg) {
                        const b = a.K;
                        return null == b ? "" : "string" === typeof b ? b : a.K = Uf(b)
                    }
                    if (a instanceof gh) return a.B()
                }
        }
        return a
    };

    function mh(a, b, c) {
        a = eg(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function nh(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[x] | 0) & 1 ? void 0 : f && (a[x] | 0) & 2 ? a : oh(a, b, c, void 0 !== d, e, f);
            else if (Ag(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = nh(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function oh(a, b, c, d, e, f) {
        const g = d || c ? a[x] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = eg(a);
        for (let h = 0; h < a.length; h++) a[h] = nh(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function ph(a) {
        return nh(a, qh, void 0, void 0, !1, !1)
    }

    function qh(a) {
        return a.ne === zg ? a.toJSON() : a instanceof gh ? a.B(ph) : lh(a)
    };

    function rh(a, b, c = xg) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = a[x] | 0;
                return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? oh(a, rh, d & 4 ? xg : c, !0, !1, !0) : (a[x] = d | 34, a)
            }
            a.ne === zg ? (b = a.P, c = b[x], a = c & 2 ? a : jh(a.constructor, sh(b, c, !0))) : a instanceof gh && (b = ug(a.v(rh)), a = new gh(b, a.m, a.l, a.A));
            return a
        }
    }

    function th(a) {
        const b = a.P;
        return jh(a.constructor, sh(b, b[x], !1))
    }

    function sh(a, b, c) {
        const d = c || b & 2 ? xg : wg,
            e = !!(b & 32);
        a = mh(a, b, f => rh(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function hh(a) {
        const b = a.P,
            c = b[x];
        return c & 2 ? jh(a.constructor, sh(b, c, !1)) : a
    };

    function z(a, b) {
        a = a.P;
        return uh(a, a[x], b)
    }

    function uh(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= yg(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function vh(a, b, c, d) {
        const e = a.P,
            f = e[x];
        Fg(f);
        wh(e, f, b, c, d);
        return a
    }

    function wh(a, b, c, d, e) {
        var f = yg(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[x] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function xh(a, b, c) {
        return void 0 !== yh(a, b, c, !1)
    }

    function zh(a, b, c, d, e) {
        var f = b & 2;
        let g = uh(a, b, c, e);
        Array.isArray(g) || (g = Dg);
        const h = g[x] | 0;
        h & 1 || tg(g);
        if (f) h & 2 || ug(g), d & 1 || Object.freeze(g);
        else {
            f = !(d & 2);
            const k = h & 2;
            d & 1 || !k ? f && h & 32 && !k && (g[x] &= -33) : (g = tg(eg(g)), wh(a, b, c, g, e))
        }
        return g
    }

    function Ah(a, b) {
        a = a.P;
        const c = a[x],
            d = uh(a, c, b);
        var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && wh(a, c, b, e);
        return e
    }

    function Bh(a, b) {
        a = z(a, b);
        return null == a ? a : "boolean" !== typeof a && "number" !== typeof a ? void 0 : !!a
    }

    function Ch(a, b, c, d, e) {
        a = a.P;
        const f = a[x],
            g = f & 2;
        let h = zh(a, f, b, e ? ? 1, d),
            k = h[x] | 0;
        if (!(k & 4)) {
            Object.isFrozen(h) && (k = 0, h = eg(h), wh(a, f, b, h, d));
            let l = 0,
                m = 0;
            for (; l < h.length; l++) {
                const n = c(h[l]);
                null != n && (h[m++] = n)
            }
            m < l && (h.length = m);
            k |= 5;
            g && (k |= 34);
            h[x] = k;
            k & 2 && Object.freeze(h)
        }
        if (2 === e) return h;
        !g && (k & 2 || Object.isFrozen(h)) && (c = h = eg(h), c[x] |= 5, wh(a, f, b, h, d));
        return h
    }
    let Dh;

    function Eh() {
        return Dh ? ? (Dh = new gh(ug([]), void 0, void 0, void 0, Hg))
    }

    function Fh(a, b, c) {
        var d = Gh,
            e = b & 2;
        let f = !1;
        if (null == c) {
            if (e) return Eh();
            c = []
        } else if (c.constructor === gh) {
            if (0 == (c.j & 2) || e) return c;
            c = c.v()
        } else Array.isArray(c) ? f = !!((c[x] | 0) & 2) : c = [];
        if (e) {
            if (!c.length) return Eh();
            f || (f = !0, ug(c))
        } else if (f) {
            f = !1;
            e = eg(c);
            for (c = 0; c < e.length; c++) {
                const g = e[c] = eg(e[c]);
                Array.isArray(g[1]) && (g[1] = ug(g[1]))
            }
            c = e
        }
        f || ((c[x] | 0) & 64 ? c[x] &= -33 : 32 & b && vg(c));
        d = new gh(c, d, bh, void 0);
        wh(a, b, 14, d, !1);
        return d
    }

    function Hh(a, b, c, d) {
        const e = a.P,
            f = e[x];
        Fg(f);
        if (null == c) return wh(e, f, b), a;
        if (!((c[x] | 0) & 4)) {
            Object.isFrozen(c) && (c = eg(c));
            for (let g = 0; g < c.length; g++) c[g] = d(c[g]);
            c[x] = 5
        }
        wh(e, f, b, c);
        return a
    }

    function Ih(a, b, c, d) {
        const e = a.P,
            f = e[x];
        Fg(f);
        wh(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }

    function Jh(a, b, c, d) {
        const e = a.P,
            f = e[x];
        Fg(f);
        (c = Kh(e, f, c)) && c !== b && null != d && wh(e, f, c);
        wh(e, f, b, d);
        return a
    }

    function Lh(a, b, c) {
        a = a.P;
        return Kh(a, a[x], b) === c ? c : -1
    }

    function Kh(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != uh(a, b, f) && (0 !== d && wh(a, b, d), d = f)
        }
        return d
    }

    function yh(a, b, c, d) {
        a = a.P;
        const e = a[x],
            f = uh(a, e, c, d);
        b = Yg(f, b, !1, e);
        b !== f && null != b && wh(a, e, c, b, d);
        return b
    }

    function A(a, b, c) {
        b = yh(a, b, c, !1);
        if (null == b) return b;
        a = a.P;
        const d = a[x];
        if (!(d & 2)) {
            const e = hh(b);
            e !== b && (b = e, wh(a, d, c, b, !1))
        }
        return b
    }

    function Mh(a, b, c, d, e, f) {
        var g = !!(b & 2),
            h = zh(a, b, d, 1, e);
        if (h === Dg || !((h[x] | 0) & 4)) {
            var k = h;
            h = !!(b & 2);
            var l = !!((k[x] | 0) & 2);
            g = k;
            !h && l && (k = eg(k));
            var m = b | (l ? 2 : 0);
            l = l || void 0;
            let n = 0,
                p = 0;
            for (; n < k.length; n++) {
                const q = Yg(k[n], c, !1, m);
                void 0 !== q && (l = l || q.P[x] & 2, k[p++] = q)
            }
            p < n && (k.length = p);
            c = k;
            k = c[x] | 0;
            m = k | 5;
            l = l ? m & -9 : m | 8;
            k != l && (c = sg(c, l));
            k = c;
            g !== k && wh(a, b, d, k, e);
            (h && 2 !== f || 1 === f) && Object.freeze(k);
            return k
        }
        if (3 === f) return h;
        g ? 2 === f && (f = h[x] | 0, h = eg(h), h[x] = f, wh(a, b, d, h, e)) : (g = Object.isFrozen(h), 1 === f ? g || Object.freeze(h) :
            (f = h[x] | 0, c = f & -35, g && (h = eg(h), f = 0, wh(a, b, d, h, e)), f !== c && (h[x] = c)));
        return h
    }

    function B(a, b, c) {
        var d = a.P;
        const e = d[x];
        a = !!(e & 2);
        b = Mh(d, e, b, c, void 0, a ? 1 : 2);
        if (!(a || (b[x] | 0) & 8)) {
            for (c = 0; c < b.length; c++) a = b[c], d = hh(a), a !== d && (b[c] = d);
            b[x] |= 8
        }
        return b
    }

    function C(a, b, c) {
        null == c && (c = void 0);
        return vh(a, b, c)
    }

    function Nh(a, b, c, d) {
        null == d && (d = void 0);
        return Jh(a, b, c, d)
    }

    function Oh(a, b, c) {
        const d = a.P,
            e = d[x];
        Fg(e);
        if (null != c) {
            var f = !!c.length;
            for (var g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !((h.P[x] | 0) & 2)
            }
            g = c[x] | 0;
            h = g | 1;
            f = (f ? h | 8 : h & -9) | 4;
            f != g && (c = sg(c, f))
        }
        null == c && (c = void 0);
        wh(d, e, b, c);
        return a
    }

    function Ph(a, b, c, d, e, f, g) {
        a = a.P;
        const h = a[x];
        Fg(h);
        b = Mh(a, h, c, b, f, 2);
        c = null != d ? d : new c;
        if (g && ("number" !== typeof e || 0 > e || e > b.length)) throw Error();
        void 0 != e ? b.splice(e, g, c) : b.push(c);
        (c.P[x] | 0) & 2 && (b[x] &= -9)
    }

    function Qh(a, b, c, d) {
        Ph(a, b, c, d);
        return a
    }

    function Rh(a, b) {
        return Og(z(a, b))
    }

    function Sh(a, b) {
        return Sg(z(a, b))
    }

    function D(a, b) {
        return Xg(z(a, b))
    }

    function Th(a, b) {
        return z(a, b)
    }

    function Uh(a) {
        return a ? ? 0
    }

    function F(a, b, c = !1) {
        return Bh(a, b) ? ? c
    }

    function Vh(a, b) {
        return Uh(Rh(a, b))
    }

    function I(a, b) {
        return D(a, b) ? ? ""
    }

    function K(a, b) {
        return z(a, b) ? ? 0
    }

    function Wh(a, b, c, d) {
        return A(a, b, Lh(a, d, c))
    }

    function Xh(a, b, c) {
        return vh(a, b, null == c ? c : Jg(c))
    }

    function Yh(a, b, c) {
        return Ih(a, b, null == c ? c : Jg(c), !1)
    }

    function Zh(a, b, c) {
        return vh(a, b, null == c ? c : Ng(c))
    }

    function $h(a, b, c) {
        return Ih(a, b, null == c ? c : Ng(c), 0)
    }

    function ai(a, b, c) {
        return vh(a, b, null == c ? c : Rg(c))
    }

    function M(a, b, c) {
        return Ih(a, b, null == c ? c : Rg(c), "0")
    }

    function bi(a, b, c) {
        return vh(a, b, Wg(c))
    }

    function ci(a, b, c) {
        return Ih(a, b, Wg(c), "")
    }

    function di(a, b) {
        return vh(a, b, 1)
    }

    function N(a, b, c) {
        return Ih(a, b, c, 0)
    };

    function ei(a) {
        Bg = !0;
        try {
            return JSON.stringify(a.toJSON(), kh)
        } finally {
            Bg = !1
        }
    }
    var O = class {
        constructor(a) {
            a: {
                null == a && (a = ih);ih = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[x] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (Ag(d)) {
                            b |= 256;
                            const f = +!!(b & 512) - 1;
                            e -= f;
                            if (1024 <= e) {
                                e = 1023 + f;
                                const g = c.length;
                                for (let h = e; h < g; h++) {
                                    const k = c[h];
                                    null != k && k !== d && (d[h - f] = k)
                                }
                                c.length = e + 1;
                                c[e] = d;
                                e = 1023
                            }
                            b = b & -2095105 | (e & 1023) << 11
                        }
                    }
                }
                a[x] = b
            }
            this.P = a
        }
        toJSON() {
            if (Bg) var a = fi(this, this.P, !1);
            else a = oh(this.P, qh, void 0, void 0, !1, !1), a = fi(this,
                a, !0);
            return a
        }
    };
    O.prototype.ne = zg;

    function fi(a, b, c) {
        var d = a.constructor.M,
            e = yg((c ? a.P : b)[x]),
            f = !1;
        if (d) {
            if (!c) {
                b = eg(b);
                var g;
                if (b.length && Ag(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = a.P[x];
            a = yg(g);
            g = +!!(g & 512) - 1;
            var h;
            for (let y = 0; y < d.length; y++) {
                var k = d[y];
                if (k < a) {
                    k += g;
                    var l = e[k];
                    null == l ? e[k] = c ? Dg : tg([]) : c && l !== Dg && rg(l)
                } else {
                    if (!h) {
                        var m = void 0;
                        e.length && Ag(m = e[e.length - 1]) ? h = m : e.push(h = {})
                    }
                    l = h[k];
                    null == h[k] ? h[k] = c ? Dg : tg([]) : c && l !== Dg && rg(l)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let n, p;
        if (Ag(h = b[d - 1])) {
            a: {
                var q = h;m = {};e = !1;
                for (let y in q) Object.prototype.hasOwnProperty.call(q, y) && (c = q[y], Array.isArray(c) && c != c && (e = !0), null != c ? m[y] = c : e = !0);
                if (e) {
                    for (let y in m) {
                        q = m;
                        break a
                    }
                    q = null
                }
            }
            q != h && (n = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            p = !0
        }
        if (!n && !p) return b;
        var w;
        f ? w = b : w = Array.prototype.slice.call(b, 0, d);
        b = w;
        f && (b.length = d);
        q && b.push(q);
        return b
    }

    function gi(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[x] |= 128;
        return jh(a, vg(b))
    };

    function hi(a, b) {
        const c = ii;
        ii = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    const ji = a => null !== a && void 0 !== a;
    let ii = void 0;

    function ki(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = jh(a, vg(b))
            }
            return b
        }
    };
    var li = rb("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function mi(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Ze(f, a);
            "complete" !== b.document.readyState ? Jb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function ni(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.Mb}`;
        let c = void 0;
        try {
            c = await oi(b)
        } catch (g) {}
        if (c) {
            b = a.ic || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.v,
                Lg: c.bg_hash_basename,
                Kg: c.bg_binary,
                Gh: a.j + "_" + a.l,
                ic: b,
                Mb: a.Mb,
                hd: d,
                Bd: e,
                ed: f
            }
        }
    }
    let oi = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function pi(a) {
        var b = await ni(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Lg,
                _bgp_: b.Kg,
                _li_: b.Gh,
                _jk_: b.ic,
                _st_: b.Mb,
                _rc_: b.hd,
                _dl_: b.Bd,
                _g2_: b.ed
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Yc(li, {
                basename: "sodar2"
            });
            mi(a)
        }
    };

    function qi(a, b) {
        return ci(a, 1, b)
    }
    var ri = class extends O {
        j() {
            return I(this, 1)
        }
    };

    function si(a, b) {
        return C(a, 5, b)
    }

    function ti(a, b) {
        return ci(a, 3, b)
    }

    function ui(a, b) {
        return Yh(a, 6, b)
    }
    var vi = class extends O {
        constructor() {
            super()
        }
    };

    function wi(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var xi = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.m;
                this.v = a.v;
                this.ic = a.ic;
                this.win = a.V();
                this.Mb = a.Mb;
                this.hd = a.hd;
                this.Bd = a.Bd;
                this.ed = a.ed;
                this.m = a.j
            }
        },
        yi = class {
            constructor(a, b, c) {
                this.l = a;
                this.m = b;
                this.v = c;
                this.win = window;
                this.Mb = "env";
                this.hd = "n";
                this.Bd = "0";
                this.ed = "1";
                this.j = !0
            }
            V() {
                return this.win
            }
            build() {
                return new xi(this)
            }
        };

    function zi(a) {
        var b = new Ai;
        return bi(b, 1, a)
    }

    function Bi(a, b) {
        return ai(a, 2, b)
    }

    function Ci(a, b) {
        return bi(a, 3, b)
    }

    function Di(a, b) {
        return bi(a, 4, b)
    }
    var Ai = class extends O {
        getValue() {
            return D(this, 1)
        }
        getVersion() {
            return z(this, 5)
        }
    };
    var Ei = class extends O {};
    Ei.M = [2, 3, 4];
    var Fi = class extends O {
        j() {
            return F(this, 8)
        }
    };
    Fi.M = [5];
    var Gi = class extends O {};

    function Hi(a) {
        return B(a, Fi, 15)
    }
    var Ii = class extends O {
            ce() {
                return I(this, 18)
            }
            Xc() {
                return I(this, 19)
            }
            de() {
                return I(this, 20)
            }
        },
        Ji = ki(Ii);
    Ii.M = [15];
    var Ki = window;

    function Li(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    r = Li.prototype;
    r.getWidth = function() {
        return this.right - this.left
    };
    r.getHeight = function() {
        return this.bottom - this.top
    };

    function gj(a) {
        return new Li(a.top, a.right, a.bottom, a.left)
    }
    r.contains = function(a) {
        return this && a ? a instanceof Li ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function hj(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function ij(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function jj(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new ij(c, e, d - c, a - e)
        }
        return null
    }

    function kj(a, b) {
        var c = jj(a, b);
        if (!c || !c.height || !c.width) return [new ij(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new ij(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new ij(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new ij(a.left, d, b.left - a.left, e));
        h < f && c.push(new ij(h, d, f - h, e));
        return c
    }
    ij.prototype.contains = function(a) {
        return a instanceof de ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    ij.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ij.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ij.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const lj = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function mj(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function nj(a = mj()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function oj(a = mj()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(lj[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function pj() {
        var a = mj();
        return a && a.initialIntersection
    }

    function qj() {
        const a = pj();
        return a && va(a.rootBounds) ? new ee(a.rootBounds.width, a.rootBounds.height) : null
    }

    function rj(a = mj()) {
        return a ? bf(a.master) ? a.master : null : null
    }

    function sj(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Za(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || ff(a.document, g ? Yc(rb("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Wc(qb(rb("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Jb(a, "message", f), d = () => {
            Kb(a, "message", f)
        });
        return e
    };

    function Ue(a) {
        return new Se(a[0].toLowerCase())
    };

    function tj(a) {
        var b = {};
        if (a instanceof Hd) return a;
        a = uj(a);
        b.Jm && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.Im && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.Km && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return Jd(a)
    }

    function uj(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function vj(a) {
        return Jd(a.map(b => Gd(tj(b))).join(""))
    }
    const wj = /^[a-z][a-z\d-]*$/i,
        xj = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),
        yj = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),
        zj = ["action", "formaction", "href"];

    function Aj(a, b) {
        if (!wj.test("body")) throw Error("");
        if (-1 !== xj.indexOf("BODY")) throw Error("");
        let c = "<body";
        a && (c += Bj(a));
        Array.isArray(b) || (b = void 0 === b ? [] : [b]); - 1 !== yj.indexOf("BODY") ? c += ">" : (a = vj(b.map(d => d instanceof Hd ? d : tj(String(d)))), c += ">" + a.toString() + "</body>");
        return Jd(c)
    }

    function Bj(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!wj.test(d)) throw Error("");
            if (void 0 !== e && null !== e) {
                if (/^on/i.test(d)) throw Error(""); - 1 !== zj.indexOf(d.toLowerCase()) && (e = e instanceof bd ? e.toString() : Ne(String(e)) || "about:invalid#zClosurez");
                d = `${d}="${tj(String(e))}"`;
                b += " " + d
            }
        }
        return b
    };

    function Cj(a, ...b) {
        if (0 === b.length) return Wc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Wc(c)
    };

    function Dj(a) {
        a = a[0];
        const b = Oc();
        a = b ? b.createScript(a) : a;
        return new Rc(a, Pc)
    };

    function Ej(a) {
        return new Ed(a[0], Cd)
    };
    var Fj = () => a => {
        a = {
            id: "unsafeurl",
            ctx: 638,
            url: a
        };
        var b = [];
        for (c in a) Me(c, a[c], b);
        var c = Le("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
        navigator.sendBeacon && navigator.sendBeacon(c, "")
    };

    function Gj(a, b, c) {
        if ("string" === typeof b)(b = Hj(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Hj(c, d);
                f && (c.style[f] = e)
            }
    }
    var Ij = {};

    function Hj(a, b) {
        var c = Ij[b];
        if (!c) {
            var d = je(b);
            c = d;
            void 0 === a.style[d] && (d = (sc ? "Webkit" : rc ? "Moz" : oc ? "ms" : null) + ke(d), void 0 !== a.style[d] && (c = d));
            Ij[b] = c
        }
        return c
    }

    function Jj(a, b) {
        var c = ne(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Kj(a, b) {
        return Jj(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Lj(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Mj(a) {
        var b = ne(a),
            c = new de(0, 0);
        var d = b ? ne(b) : document;
        d = !oc || 9 <= Number(Bc) || "CSS1Compat" == le(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Lj(a);
        b = pe(le(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Nj(a) {
        var b = Oj;
        if ("none" != Kj(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Oj(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = sc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Lj(a), new ee(a.right - a.left, a.bottom - a.top)) : new ee(b, c)
    }

    function Pj(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Qj(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Pj(a, b) : 0
    }
    var Rj = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Sj(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Rj ? Rj[b] : Pj(a, b)
    };
    var Tj = a => "number" === typeof a && 0 < a,
        Vj = (a, b) => {
            a = Uj(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        Uj = a => Object.entries(Wj(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        Wj = a => {
            const b = {};
            kf(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        Xj = () => {
            try {
                return Ki.history.length
            } catch (a) {
                return 0
            }
        },
        Yj = a => {
            a = rj(mj(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        Zj = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        ak = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        bk = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        ck = () => {
            if (!Ki) return !1;
            try {
                return !(!Ki.navigator.standalone && !Ki.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        dk = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        ek = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    var P = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        fk = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        gk = class {
            constructor(a) {
                this.j = a;
                this.defaultValue = ""
            }
        },
        hk = class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var ik = new P(1082, !0),
        jk = new P(1277),
        kk = new P(1275),
        lk = new fk(1130, 100),
        mk = new P(1270),
        nk = new fk(1032, 200),
        ok = new gk(14),
        pk = new fk(1224, .01),
        qk = new P(1122, !0),
        rk = new P(1260),
        sk = new P(1239),
        tk = new P(1196),
        uk = new P(1160),
        vk = new P(316),
        wk = new P(1290),
        xk = new P(334),
        yk = new fk(1263, -1),
        zk = new fk(54),
        Ak = new fk(1265, -1),
        Bk = new fk(1264, -1),
        Ck = new P(1291),
        Dk = new P(1267),
        Ek = new P(1268),
        Fk = new P(1266),
        Gk = new P(313),
        Hk = new fk(66, -1),
        Ik = new fk(65, -1),
        Jk = new P(1256),
        Kk = new P(369),
        Lk = new P(1241, !0),
        Mk = new P(1236, !0),
        Nk = new P(1287, !0),
        Ok = new P(368),
        Pk = new P(1285),
        Qk = new hk(1273, ["en", "de"]),
        Rk = new P(1223, !0),
        Sk = new hk(1261, ["44786015", "44786016"]),
        Tk = new P(1289),
        Uk = new P(1280),
        Vk = new P(1230),
        Wk = new P(1229),
        Xk = new P(1231),
        Yk = new P(1292),
        Zk = new P(1282),
        $k = new P(1250),
        al = new P(1171, !0),
        bl = new P(1276),
        cl = new P(1151),
        dl = new P(1288),
        el = new fk(1072, .75),
        fl = new P(290),
        gl = new P(1222),
        hl = new P(1293),
        il = new P(1238),
        jl = new P(1237),
        kl = new P(1294),
        ll = new P(1283, !0),
        ml = new P(1147, !0),
        nl = new fk(1245, 3600),
        ol = new P(1284),
        pl = new P(551831727),
        ql = new fk(506864295, 300),
        rl = new fk(508040914, 100),
        sl = new fk(547455356, 49),
        tl = new P(553764172),
        ul = new P(1120),
        vl = new hk(556791602),
        wl = new P(547450892),
        xl = new P(547131098),
        yl = new P(544317767),
        zl = new P(557811243),
        Al = new P(529362570, !0),
        Bl = new gk(549581487),
        Cl = new gk(549581486),
        Dl = new P(546245766),
        El = new P(556739145),
        Fl = new P(558119297),
        Gl = new P(545453532),
        Hl = new P(554474127),
        Il = new P(550910941),
        Jl = new P(553800014),
        Kl = new P(545471060),
        Ll = new P(506914611),
        Ml = new P(546231822),
        Nl = new P(542187945, !0),
        Ol = new P(544090506),
        Pl = new P(537288587, !0),
        Ql = new fk(469675170, 3E4),
        Rl = new fk(506871937),
        Sl = new P(160889229),
        Tl = new P(506852289),
        Ul = new P(542046278),
        Vl = new gk(1166),
        Wl = new P(1E4),
        Xl = new P(555237685, !0),
        Yl = new P(45414947),
        Zl = new fk(472785970, 500),
        $l = new P(83),
        am = new P(439828594),
        bm = new P(483962503),
        cm = new P(506738118),
        dm = new P(77),
        em = new P(78),
        fm = new P(80),
        gm = new P(76),
        hm = new P(1957, !0),
        im = new P(380025941),
        jm = new P(84),
        km = new P(1973),
        lm = new P(188),
        mm = new P(485990406);
    class nm {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const om = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var pm = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        qm = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Gf = !!c;
                this.depth = null
            }
        };
    let rm = null;

    function sm() {
        if (null === rm) {
            rm = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    rm = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return rm
    };

    function tm() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function um() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    var vm = class {
        constructor(a, b) {
            var c = um() || tm();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const wm = t.performance,
        xm = !!(wm && wm.mark && wm.measure && wm.clearMarks),
        ym = yb(() => {
            var a;
            if (a = xm) a = sm(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function zm(a) {
        a && wm && ym() && (wm.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), wm.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Am(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (ym() && Ra(a.l, zm), a.l.length = 0)
    }

    function Bm(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw zm(c), e;
        }
        a.end(c);
        return d
    }
    class Cm {
        constructor(a) {
            this.l = [];
            this.m = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = ym() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new vm(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            wm && ym() && wm.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (um() || tm()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                wm && ym() && wm.mark(b);
                !this.j || 2048 < this.l.length ||
                    this.l.push(a)
            }
        }
    };

    function Dm(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Em(a, b, c, d, e) {
        const f = [];
        kf(a, function(g, h) {
            (g = Fm(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Fm(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Fm(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Em(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Gm(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    }

    function Hm(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Gm(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = Em(h[k], a.m, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.m;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Im {
        constructor() {
            this.m = "&";
            this.l = {};
            this.v = 0;
            this.j = []
        }
    };

    function Jm(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Km(a.stack, b));
        return b
    }

    function Km(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var Mm = class {
        constructor(a, b, c = null) {
            this.na = a;
            this.A = b;
            this.l = c;
            this.j = null;
            this.m = !1;
            this.C = this.sa
        }
        Ce(a) {
            this.j = a
        }
        v(a) {
            this.m = a
        }
        sc(a, b, c) {
            let d, e;
            try {
                this.l && this.l.j ? (e = this.l.start(a.toString(), 3), d = b(), this.l.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    zm(e), b = this.C(a, new nm(f, {
                        message: Jm(f)
                    }), void 0, c)
                } catch (g) {
                    this.sa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Fa(a, b, c, d) {
            return (...e) => this.sc(a, () => b.apply(c, e), d)
        }
        sa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const H = new Im;
                H.j.push(1);
                H.l[1] = Dm("context", a);
                b.error && b.meta && b.id || (b = new nm(b, {
                    message: Jm(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    H.j.push(2);
                    H.l[2] = Dm("msg", g)
                }
                const L = b.meta || {};
                if (this.j) try {
                    this.j(L)
                } catch (Z) {}
                if (d) try {
                    d(L)
                } catch (Z) {}
                b = [L];
                H.j.push(3);
                H.l[3] = b;
                d = t;
                b = [];
                g = null;
                do {
                    var h = d;
                    if (bf(h)) {
                        var k = h.location.href;
                        g = h.document && h.document.referrer || null
                    } else k = g, g = null;
                    b.push(new qm(k || "", h));
                    try {
                        d = h.parent
                    } catch (Z) {
                        d = null
                    }
                } while (d && h != d);
                for (let Z = 0, xb = b.length - 1; Z <= xb; ++Z) b[Z].depth = xb - Z;
                h = t;
                if (h.location &&
                    h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                    for (k = 1; k < b.length; ++k) {
                        var l = b[k];
                        l.url || (l.url = h.location.ancestorOrigins[k - 1] || "", l.Gf = !0)
                    }
                var m = b;
                let T = new qm(t.location.href, t, !1);
                h = null;
                const Ja = m.length - 1;
                for (l = Ja; 0 <= l; --l) {
                    var n = m[l];
                    !h && om.test(n.url) && (h = n);
                    if (n.url && !n.Gf) {
                        T = n;
                        break
                    }
                }
                n = null;
                const Rb = m.length && m[Ja].url;
                0 != T.depth && Rb && (n = m[Ja]);
                f = new pm(T, n);
                if (f.l) {
                    var p = f.l.url || "";
                    H.j.push(4);
                    H.l[4] = Dm("top", p)
                }
                var q = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var w = f.j.url.match(Ke),
                        y = w[1],
                        E = w[3],
                        G = w[4];
                    m = "";
                    y && (m += y + ":");
                    E && (m += "//", m += E, G && (m += ":" + G));
                    var J = m
                } else J = "";
                q = [q, {
                    url: J
                }];
                H.j.push(5);
                H.l[5] = q;
                Lm(this.na, e, H, this.m, c)
            } catch (H) {
                try {
                    Lm(this.na, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Jm(H),
                        url: f && f.j.url
                    }, this.m, c)
                } catch (L) {}
            }
            return this.A
        }
        Ka(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.sa(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    var Nm = a => "string" === typeof a,
        Om = a => void 0 === a;

    function Pm() {
        var a = Qm;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var Rm = class extends O {
        getValue() {
            return K(this, 1)
        }
    };

    function Sm(a) {
        var b = new Tm;
        return vh(b, 1, a)
    }
    var Tm = class extends O {
        getValue() {
            return K(this, 1)
        }
    };
    var Um = class extends O {
        constructor() {
            super()
        }
        getValue() {
            return K(this, 1)
        }
    };

    function Vm(a, b) {
        return M(a, 1, b)
    }

    function Wm(a, b) {
        return M(a, 2, b)
    }

    function vn(a, b) {
        return M(a, 3, b)
    }

    function wn(a, b) {
        return M(a, 4, b)
    }

    function xn(a, b) {
        return M(a, 5, b)
    }

    function yn(a, b) {
        return Ih(a, 8, Ig(b), 0)
    }

    function zn(a, b) {
        return Ih(a, 9, Ig(b), 0)
    }
    var An = class extends O {
        constructor() {
            super()
        }
    };

    function Bn(a, b) {
        return M(a, 1, b)
    }

    function Cn(a, b) {
        return M(a, 2, b)
    }
    var Dn = class extends O {};

    function En(a, b) {
        Qh(a, 1, Dn, b)
    }
    var Gh = class extends O {
        kg(a) {
            Ph(this, 1, Dn, void 0, a, !1, 1);
            return this
        }
    };
    Gh.M = [1];
    var Fn = class extends O {
        constructor() {
            super()
        }
    };

    function Gn(a, b) {
        return Hh(a, 1, b, Vg)
    }

    function Hn(a, b) {
        return Hh(a, 12, b, Tg)
    }

    function In() {
        var a = new Jn,
            b = Vg("irr"),
            c = a.P;
        const d = c[x];
        Fg(d);
        zh(c, d, 2, 2).push(b);
        return a
    }

    function Kn(a, b) {
        return Yh(a, 3, b)
    }

    function Ln(a, b) {
        return Yh(a, 4, b)
    }

    function Mn(a, b) {
        return Yh(a, 5, b)
    }

    function Nn(a, b) {
        return Yh(a, 7, b)
    }

    function On(a, b) {
        return Yh(a, 8, b)
    }

    function Pn(a, b) {
        return M(a, 9, b)
    }

    function Qn(a, b) {
        return Oh(a, 10, b)
    }

    function Rn(a, b) {
        return Hh(a, 11, b, Rg)
    }
    var Jn = class extends O {
        constructor() {
            super()
        }
    };
    Jn.M = [1, 12, 2, 10, 11];

    function Sn(a) {
        var b = Tn();
        C(a, 1, b)
    }

    function Un(a, b) {
        return M(a, 2, b)
    }

    function Vn(a, b) {
        return Oh(a, 3, b)
    }

    function Wn(a, b) {
        return Oh(a, 4, b)
    }

    function Xn(a, b) {
        return Qh(a, 4, Tm, b)
    }

    function Yn(a, b) {
        return Oh(a, 5, b)
    }

    function Zn(a, b) {
        return Hh(a, 6, b, Vg)
    }

    function $n(a, b) {
        return M(a, 7, b)
    }

    function ao(a, b) {
        C(a, 9, b)
    }

    function bo(a, b) {
        return Yh(a, 10, b)
    }

    function co(a, b) {
        return Yh(a, 11, b)
    }

    function eo(a, b) {
        return Yh(a, 12, b)
    }

    function fo(a) {
        var b = a.P;
        const c = b[x];
        a = c & 2;
        b = Fh(b, c, uh(b, c, 14));
        null == b ? a = b : (!a && Gh && (b.G = !0), a = b);
        return a
    }
    var go = class extends O {
        constructor() {
            super()
        }
        H(a) {
            Ph(this, 3, Rm, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return M(this, 8, a)
        }
    };
    go.M = [3, 4, 5, 15, 6];
    var ho = class extends O {
        constructor() {
            super()
        }
    };
    ho.M = [2];
    var io = class extends O {
        constructor() {
            super()
        }
    };
    var jo = class extends O {
            constructor() {
                super()
            }
        },
        ko = [1];
    var lo = class extends O {
        constructor() {
            super()
        }
    };
    var mo = class extends O {
        constructor() {
            super()
        }
    };
    var no = class extends O {
        constructor() {
            super()
        }
        getContentUrl() {
            return I(this, 1)
        }
    };
    var oo = class extends O {
        constructor() {
            super()
        }
    };
    oo.M = [1];
    var po = class extends O {
        constructor() {
            super()
        }
    };
    var qo = class extends O {
            constructor() {
                super()
            }
        },
        ro = [1, 2, 3, 5, 6, 7, 8];
    var so = class extends O {
        constructor() {
            super()
        }
    };
    so.M = [1];
    var to = class extends O {
        constructor() {
            super()
        }
    };
    to.M = [2];
    var uo = class extends O {
        constructor() {
            super()
        }
    };
    var vo = class extends O {
        constructor() {
            super()
        }
    };

    function wo(a) {
        var b = new xo;
        return N(b, 1, a)
    }
    var xo = class extends O {
        constructor() {
            super()
        }
    };
    xo.M = [9];
    var yo = class extends O {
        constructor() {
            super()
        }
    };
    var zo = class extends O {
        constructor() {
            super()
        }
    };
    zo.M = [2];
    var Ao = class extends O {
        constructor() {
            super()
        }
    };
    var Bo = class extends O {
            constructor() {
                super()
            }
        },
        Co = [4, 5];
    var Do = class extends O {
        constructor() {
            super()
        }
    };
    var Eo = class extends O {
        constructor() {
            super()
        }
    };
    Eo.M = [3];
    var Fo = class extends O {
        constructor() {
            super()
        }
    };
    var Go = class extends O {
        constructor() {
            super()
        }
    };
    var Ho = class extends O {
        constructor() {
            super()
        }
    };
    var Io = class extends O {
        constructor() {
            super()
        }
    };
    var Jo = class extends O {
            constructor() {
                super()
            }
        },
        Ko = [2, 3];
    var Lo = class extends O {
            constructor() {
                super()
            }
        },
        Mo = [3, 4, 5, 6, 7, 8, 9];
    var No = class extends O {
            constructor() {
                super()
            }
            ib(a) {
                return ci(this, 2, a)
            }
        },
        Oo = [4, 5, 6, 8, 9, 10, 11];

    function Po(a, ...b) {
        Qo(a, ...b.map(c => ({
            ri: 7,
            Ih: c.toJSON()
        })))
    };

    function Ro(a) {
        return JSON.stringify([a.map(b => [{
            [b.ri]: b.Ih
        }]), null])
    };
    var So = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function To(a) {
        a && "function" == typeof a.ma && a.ma()
    };

    function Uo() {
        this.C = this.C;
        this.G = this.G
    }
    Uo.prototype.C = !1;
    Uo.prototype.ma = function() {
        this.C || (this.C = !0, this.l())
    };

    function Vo(a, b) {
        Wo(a, Fa(To, b))
    }

    function Wo(a, b) {
        a.C ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    Uo.prototype.l = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function Qo(a, ...b) {
        65536 <= Ro(a.j.concat(b)).length && Xo(a);
        a.j.push(...b);
        100 <= a.j.length && Xo(a);
        a.j.length && null === a.l && (a.l = setTimeout(() => {
            Xo(a)
        }, 100))
    }

    function Xo(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = Ro(a.j);
            a.m("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Yo = class {
            constructor() {
                this.m = So;
                this.j = [];
                this.l = null
            }
        },
        Zo = class extends Yo {};
    var Q = a => {
        var b = "ge";
        if (a.ge && a.hasOwnProperty(b)) return a.ge;
        b = new a;
        return a.ge = b
    };

    function $o(a, b, c) {
        return b[a] || c
    };

    function ap(a, b) {
        a.l = (c, d) => $o(2, b, () => [])(c, 1, d);
        a.j = () => $o(3, b, () => [])(1)
    }
    class bp {
        l() {
            return []
        }
        j() {
            return []
        }
    }

    function cp(a, b) {
        return Q(bp).l(a, b)
    };
    var dp = class {
        constructor() {
            const a = {};
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.v = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.j = () => {}
        }
    };

    function R(a) {
        return Q(dp).l(a.j, a.defaultValue)
    }

    function ep(a) {
        return Q(dp).m(a.j, a.defaultValue)
    }

    function fp(a) {
        return Q(dp).v(a.j, a.defaultValue)
    }

    function gp(a) {
        return Q(dp).A(a.j, a.defaultValue)
    };

    function hp(a, b, c = null, d = !1, e = !1) {
        ip(a, b, c, d, e)
    }

    function ip(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = gf("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Za(a.google_image_requests, f);
                Kb(f, "load", g);
                Kb(f, "error", g)
            };
            Jb(f, "load", g);
            Jb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var kp = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            kf(a, (d, e) => {
                if (d || 0 === d) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            jp(c)
        },
        jp = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : hp(b, a, void 0, !1, !1)
        };

    function Lm(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Im ? f = c : (f = new Im, kf(c, (h, k) => {
                var l = f;
                const m = l.v++;
                h = Dm(k, h);
                l.j.push(m);
                l.l[m] = h
            }));
            const g = Hm(f, "/pagead/gen_204?id=" + b + "&");
            g && hp(t, g)
        } catch (f) {}
    }

    function lp(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }
    class mp {
        constructor() {
            this.j = Math.random()
        }
    };
    let np, op;
    const pp = new Cm(t);
    ((a, b = !0) => {
        np = a || new mp;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        lp(np, t.google_srt);
        op = new Mm(np, b, pp);
        op.v(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || Am(pp) : pp.j && Jb(t, "load", () => {
            t.google_measure_js_timing || Am(pp)
        })
    })();
    var qp = (a, b) => op.sc(a, b),
        rp = (a, b) => op.Fa(a, b),
        sp = (a, b, c) => {
            const d = Q(bp).j();
            !b.eid && d.length && (b.eid = d.toString());
            Lm(np, a, b, !0, c)
        },
        tp = (a, b) => op.sa(a, b, void 0, void 0),
        up = (a, b, c) => {
            op.Ka(a, b, c)
        };
    Wc(qb(rb("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var vp = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            Jb(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Kb(a, "message", e));
                return g
            }
        },
        wp = (a, b, c, d = null) => {
            const e = vp(a, b, vb(c, () => e()), d);
            return e
        },
        xp = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && xp(a[f], b, c, d, --e)
        };

    function yp(a, b, c, d) {
        Gf(d.origin) && "expandable-xpc-ready" == c.notify && zp(a, b)
    }

    function zp(a, b) {
        var c = a.fe;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.ob,
            f: a.ai,
            g: a.Cg,
            h: a.Ch,
            i: void 0
        });
        t.setTimeout(rp(220, bk(() => {
            ff(c.document, b)
        })), 0)
    };
    var Ap = class extends O {
        constructor() {
            super()
        }
    };
    Ap.M = [15];
    var Bp = class extends O {
        constructor() {
            super()
        }
        getCorrelator() {
            return Uh(Sh(this, 1))
        }
        setCorrelator(a) {
            return M(this, 1, a)
        }
    };
    var Cp = class extends O {
        constructor() {
            super()
        }
    };
    let Dp = null,
        Ep = null;
    var Fp = () => {
            if (null != Dp) return Dp;
            Dp = !1;
            try {
                const a = ef(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (Dp = !0);
                t.localStorage.getItem("google_logging") && (Dp = !0)
            } catch (a) {}
            return Dp
        },
        Gp = () => {
            if (null != Ep) return Ep;
            Ep = !1;
            try {
                const a = ef(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) Ep = !0
            } catch (a) {}
            return Ep
        },
        Hp = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && Fp() && ff(t.document,
                Wc(qb(rb("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let Ip, Jp;
    const Kp = new Cm(window);
    (a => {
        Ip = a ? ? new mp;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        lp(Ip, window.google_srt);
        Jp = new Mm(Ip, !0, Kp);
        Jp.Ce(() => {});
        Jp.v(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Am(Kp) : Kp.j && Jb(window, "load", () => {
            window.google_measure_js_timing || Am(Kp)
        })
    })();
    let Lp = (new Date).getTime();
    var Mp = {
        Ik: 0,
        Hk: 1,
        Ek: 2,
        zk: 3,
        Fk: 4,
        Ak: 5,
        Gk: 6,
        Ck: 7,
        Dk: 8,
        yk: 9,
        Bk: 10,
        Jk: 11
    };
    var Np = {
        Lk: 0,
        Mk: 1,
        Kk: 2
    };

    function Op(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Pp(a) {
        a = Va(a, b => new Li(b.top, b.right, b.bottom, b.left));
        a = Qp(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Qp(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Wa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, gj(a[0]))
    };
    var Ec = {
        Gl: 0,
        mk: 1,
        qk: 2,
        nk: 3,
        pk: 4,
        wk: 8,
        Rl: 9,
        Xk: 10,
        Yk: 11,
        Nl: 16,
        Zj: 17,
        Yj: 24,
        Vk: 25,
        uj: 26,
        tj: 27,
        wg: 30,
        Pk: 32,
        Sk: 40,
        Wl: 41,
        Tl: 42
    };
    var Rp = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Sp = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Tp = 728 * 1.38;

    function Up(a) {
        return a !== a.top ? 512 : 0
    }

    function Vp(a, b = 420) {
        return (a = Wp(a)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    }

    function Xp(a) {
        var b = Wp(a);
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }

    function Yp(a) {
        return Math.max(0, Zp(a, !0) - S(a))
    }

    function $p(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function S(a) {
        return $p(a).clientHeight
    }

    function Wp(a) {
        return $p(a).clientWidth
    }

    function Zp(a, b) {
        const c = $p(a);
        return b ? c.scrollHeight === S(a) ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }

    function aq(a, b) {
        return bq(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1
    }

    function cq(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function dq(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function eq(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function fq(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }

    function gq(a, b, c, d) {
        Lm(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function bq(a) {
        return 26 === a || 27 === a || 40 === a || 41 === a
    };

    function hq(a, b) {
        iq(a).forEach(b, void 0)
    }

    function iq(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function jq(a, b) {
        return void 0 !== a.j[kq(b)]
    }

    function lq(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function mq(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const nq = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = kq(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = kq(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = kq(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        ec() {
            return lq(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function kq(a) {
        return a instanceof Object ? String(wa(a)) : a + ""
    };
    const oq = class {
        constructor(a) {
            this.j = new nq;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return jq(this.j, a)
        }
    };
    const pq = new oq("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function qq(a) {
        lc(a.document.body.offsetHeight)
    };

    function rq(a) {
        a.j.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function sq(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.j.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.j.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var tq = class extends Uo {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.j = b
        }
        l() {
            rq(this);
            super.l()
        }
    };

    function uq(a) {
        const b = new U(a.getValue());
        a.listen(c => b.j(c));
        return b
    }

    function vq(a, b) {
        const c = new U({
            first: a.K,
            second: b.K
        });
        a.listen(() => c.j({
            first: a.K,
            second: b.K
        }));
        b.listen(() => c.j({
            first: a.K,
            second: b.K
        }));
        return c
    }

    function wq(...a) {
        const b = [...a],
            c = () => b.every(f => f.K),
            d = new U(c()),
            e = () => {
                d.j(c())
            };
        b.forEach(f => f.listen(e));
        return xq(d)
    }

    function yq(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.K),
            d = new U(c()),
            e = () => {
                d.j(c())
            };
        b.forEach(f => f.listen(e));
        return xq(d)
    }

    function xq(a, b = zq) {
        var c = a.K;
        const d = new U(a.K);
        a.listen(e => {
            b(e, c) || (c = e, d.j(e))
        });
        return d
    }

    function Aq(a, b, c) {
        return a.l(d => {
            d === b && c()
        })
    }

    function Bq(a, b, c) {
        if (a.K === b) c();
        else {
            var d = {
                Mc: null
            };
            d.Mc = Aq(a, b, () => {
                d.Mc && (d.Mc(), d.Mc = null);
                c()
            })
        }
    }

    function Cq(a, b, c) {
        xq(a).listen(d => {
            d === b && c()
        })
    }

    function Dq(a, b) {
        a.v && a.v();
        a.v = b.listen(c => a.j(c), !0)
    }

    function Eq(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.K
        }
    }
    class U {
        constructor(a) {
            this.K = a;
            this.m = new Map;
            this.C = 1;
            this.v = null
        }
        listen(a, b = !1) {
            const c = this.C++;
            this.m.set(c, a);
            b && a(this.K);
            return () => {
                this.m.delete(c)
            }
        }
        l(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.K
        }
        j(a) {
            this.K = a;
            this.m.forEach(b => {
                b(this.K)
            })
        }
        map(a) {
            const b = new U(a(this.K));
            this.listen(c => b.j(a(c)));
            return b
        }
    }

    function zq(a, b) {
        return a == b
    };

    function Fq(a) {
        return new Gq(a)
    }

    function Hq(a, b) {
        Ra(a.j, c => {
            c(b)
        })
    }
    var Iq = class {
        constructor() {
            this.j = []
        }
    };
    class Gq {
        constructor(a) {
            this.j = a
        }
        listen(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new Iq;
            this.listen(c => Hq(b, a(c)));
            return Fq(b)
        }
    }

    function Jq(...a) {
        const b = new Iq;
        a.forEach(c => {
            c.listen(d => {
                Hq(b, d)
            })
        });
        return Fq(b)
    };

    function Kq(a) {
        return xq(vq(a.j, a.m).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Lq(c, b)
        }))
    }
    var Nq = class {
        constructor(a) {
            this.l = a;
            this.j = new U(null);
            this.m = new U(null);
            this.v = new Iq;
            this.B = b => {
                null == this.j.K && 1 == b.touches.length && this.j.j(b.touches[0])
            };
            this.A = b => {
                const c = this.j.K;
                null != c && (b = Mq(c, b.changedTouches), null != b && (this.j.j(null), this.m.j(null), Hq(this.v, Lq(c, b))))
            };
            this.C = b => {
                var c = this.j.K;
                null != c && (c = Mq(c, b.changedTouches), null != c && (this.m.j(c), b.preventDefault()))
            }
        }
    };

    function Lq(a, b) {
        return {
            tg: b.pageX - a.pageX,
            ug: b.pageY - a.pageY
        }
    }

    function Mq(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Oq(a) {
        return xq(vq(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : Pq(c, b)
        }))
    }
    var Qq = class {
        constructor(a, b) {
            this.v = a;
            this.A = b;
            this.j = new U(null);
            this.l = new U(null);
            this.m = new Iq;
            this.G = c => {
                this.j.j(c)
            };
            this.C = c => {
                const d = this.j.K;
                null != d && (this.j.j(null), this.l.j(null), Hq(this.m, Pq(d, c)))
            };
            this.B = c => {
                null != this.j.K && (this.l.j(c), c.preventDefault())
            }
        }
    };

    function Pq(a, b) {
        return {
            tg: b.screenX - a.screenX,
            ug: b.screenY - a.screenY
        }
    };
    var Tq = (a, b, c) => {
        const d = new Rq(a, b, c);
        return () => Sq(d)
    };

    function Sq(a) {
        if (a.j) return !1;
        if (null == a.l) return Uq(a), !0;
        const b = a.l + a.A - (new Date).getTime();
        if (1 > b) return Uq(a), !0;
        Vq(a, b);
        return !0
    }

    function Uq(a) {
        a.l = (new Date).getTime();
        a.v()
    }

    function Vq(a, b) {
        a.j = !0;
        a.m.setTimeout(() => {
            a.j = !1;
            Uq(a)
        }, b)
    }
    class Rq {
        constructor(a, b, c) {
            this.m = a;
            this.A = b;
            this.v = c;
            this.l = null;
            this.j = !1
        }
    };

    function Wq(a) {
        return Xq(Oq(a.j), Kq(a.l))
    }

    function Yq(a) {
        return Jq(Fq(a.j.m), Fq(a.l.v))
    }
    var Zq = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Xq(a, b) {
        return vq(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };

    function $q(a, b) {
        return new ar(a, b)
    }

    function br(a) {
        a.win.requestAnimationFrame(() => {
            a.C || a.m.j(new ee(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function cr(a) {
        a.j || (a.j = !0, a.v.observe(a.element));
        return xq(a.m, fe)
    }
    var ar = class extends Uo {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.m = new U(new ee(this.element.offsetWidth, this.element.offsetHeight));
            this.v = new ResizeObserver(() => {
                br(this)
            })
        }
        l() {
            this.v.disconnect();
            super.l()
        }
    };

    function dr(a, b) {
        return {
            top: a.j - b,
            right: a.m + a.l,
            bottom: a.j + b,
            left: a.m
        }
    }
    class er {
        constructor(a, b, c) {
            this.m = a;
            this.j = b;
            this.l = c
        }
    };

    function fr(a, b) {
        a = a.getBoundingClientRect();
        return new gr(a.top + dq(b), a.bottom - a.top)
    }

    function hr(a) {
        return new gr(Math.round(a.j), Math.round(a.l))
    }
    class gr {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };
    var jr = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new oq(c);
        b = b.filter(e => !d.contains(e));
        b.length && (ir(a, b), db(c, b))
    };

    function ir(a, b) {
        for (const f of b) {
            b = gf("LINK", a.document);
            b.type = "text/css";
            var c = Wc(qb(rb("//fonts.googleapis.com/css"))),
                d = Fj();
            c = Tc(c, {
                family: f
            });
            if (c instanceof Sc) d = c;
            else if (c instanceof bd) d = c;
            else {
                var e = Pe(c, Qe) || pd;
                e === pd && d(c);
                d = e
            }
            c = b;
            c.rel = "stylesheet";
            if (ac("stylesheet", "stylesheet")) {
                c.href = Vc(d).toString();
                a: if (d = (c.ownerDocument && c.ownerDocument.defaultView || t).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        $d.test(d)) break a;
                    d = ""
                } else d = "";
                d && c.setAttribute("nonce", d)
            } else {
                if (d instanceof Sc) d = Vc(d).toString();
                else if (d instanceof bd) d = cd(d);
                else {
                    if (!(d instanceof bd)) {
                        d = "object" == typeof d && d.Ja ? d.j() : String(d);
                        b: {
                            e = void 0;
                            try {
                                e = new URL(d)
                            } catch (g) {
                                e = "https:";
                                break b
                            }
                            e = e.protocol
                        }
                        "javascript:" === e && (d = "about:invalid#zClosurez");
                        d = new bd(d, od)
                    }
                    d = cd(d)
                }
                c.href = d
            }
            a.document.head.appendChild(b)
        }
    };

    function kr(a, b) {
        a.F ? b(a.v) : a.m.push(b)
    }

    function lr(a, b) {
        a.F = !0;
        a.v = b;
        a.m.forEach(c => {
            c(a.v)
        });
        a.m = []
    }
    class mr extends Uo {
        constructor(a) {
            super();
            this.j = a;
            this.m = [];
            this.F = !1;
            this.B = this.v = null;
            this.H = Tq(a, 1E3, () => {
                if (null != this.B) {
                    var b = Zp(this.j, !0) - this.B;
                    1E3 < b && lr(this, b)
                }
            });
            this.A = null
        }
        init(a, b) {
            null == a ? (this.B = a = Zp(this.j, !0), this.j.addEventListener("scroll", this.H), null != b && b(a)) : this.A = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        l() {
            null != this.A && this.j.clearTimeout(this.A);
            this.j.removeEventListener("scroll", this.H);
            this.m = [];
            this.v = null;
            super.l()
        }
    };
    var nr = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class or {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function pr(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new qr(d)
    }

    function rr(a) {
        return a.j.slice(0)
    }

    function sr(a, b = 1) {
        a = rr(a);
        const c = new or(b);
        kb(a, () => c.next());
        return new qr(a)
    }
    const qr = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new qr(Ua(this.j, a))
        }
        apply(a) {
            return new qr(a(rr(this)))
        }
        sort(a) {
            return new qr(rr(this).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = rr(this);
            b.push(a);
            return new qr(b)
        }
    };
    class tr {
        constructor(a) {
            this.j = new oq(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function ur(a) {
        return new vr({
            value: a
        }, null)
    }

    function wr(a) {
        return new vr(null, Error(a))
    }

    function xr(a) {
        try {
            return ur(a())
        } catch (b) {
            return new vr(null, b)
        }
    }

    function yr(a) {
        return null != a.j ? a.getValue() : null
    }

    function zr(a, b) {
        null != a.j && b(a.getValue());
        return a
    }

    function Ar(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class vr {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getValue() {
            return this.j.value
        }
        map(a) {
            return null != this.j ? (a = a(this.getValue()), a instanceof vr ? a : ur(a)) : this
        }
    };
    class Br {
        constructor() {
            this.j = new nq
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new oq, this.j.set(a, c));
            c.add(b)
        }
    };

    function Cr(a) {
        return !a
    }

    function Dr(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Er(a) {
        var b = new Fr;
        return bi(b, 7, a)
    }
    var Fr = class extends O {
        getId() {
            return D(this, 3)
        }
    };
    Fr.M = [4];
    class Gr {
        constructor(a, {
            Ve: b,
            xg: c,
            Ah: d,
            gg: e
        }) {
            this.A = a;
            this.m = c;
            this.v = new qr(b || []);
            this.l = e;
            this.j = d
        }
    };
    var Hr = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new nq;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Jr = a => {
            var b = Ir(a);
            a = [];
            for (let c of b) b = String(c.Ub), a.push(c.jb + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Ir = a => {
            const b = [],
                c = a.v;
            c && c.j.length && b.push({
                jb: "a",
                Ub: Kr(c)
            });
            null != a.m && b.push({
                jb: "as",
                Ub: a.m
            });
            null != a.j && b.push({
                jb: "i",
                Ub: String(a.j)
            });
            null != a.l && b.push({
                jb: "rp",
                Ub: String(a.l)
            });
            b.sort(function(d, e) {
                return d.jb.localeCompare(e.jb)
            });
            b.unshift({
                jb: "t",
                Ub: Lr(a.A)
            });
            return b
        },
        Lr = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Kr = a => {
            a = rr(a).map(Mr);
            a = JSON.stringify(a);
            return mf(a)
        },
        Mr = a => {
            const b = {};
            null != D(a, 7) && (b.q = D(a, 7));
            null != Rh(a,
                2) && (b.o = Rh(a, 2));
            null != Rh(a, 5) && (b.p = Rh(a, 5));
            return b
        };

    function Nr() {
        var a = new Or;
        return vh(a, 2, 1)
    }
    var Or = class extends O {
        j() {
            return z(this, 1)
        }
        setLocation(a) {
            return vh(this, 1, a)
        }
    };

    function Pr(a) {
        const b = [].slice.call(arguments).filter(wb(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.cf || []);
            d = Object.assign(d, e.hc())
        });
        return new Qr(c, d)
    }

    function Rr(a) {
        switch (a) {
            case 1:
                return new Qr(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Qr(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Qr(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Qr(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Sr(a) {
        return null == a ? null : new Qr(null, {
            google_ml_rank: a
        })
    }

    function Tr(a) {
        return null == a ? null : new Qr(null, {
            google_placement_id: Jr(a)
        })
    }

    function Ur({
        Wg: a,
        ih: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new Qr(null, a)
    }
    class Qr {
        constructor(a, b) {
            this.cf = a;
            this.j = b
        }
        hc() {
            return this.j
        }
    };
    var Vr = class extends O {};
    var Wr = class extends O {};
    var Xr = class extends O {};
    var Yr = class extends O {};
    var Zr = class extends O {
        A() {
            return D(this, 2)
        }
        v() {
            return D(this, 5)
        }
        j() {
            return B(this, Yr, 3)
        }
        l() {
            return Rh(this, 4)
        }
        m() {
            return Ah(this, 6)
        }
        C() {
            return xh(this, Xr, 7)
        }
    };
    Zr.M = [3];
    var $r = class extends O {};
    var as = class extends O {
        j() {
            return F(this, 18, !1)
        }
        m() {
            Xh(this, 18, !1)
        }
        l() {
            return F(this, 21, !1)
        }
    };
    var bs = class extends O {
        constructor() {
            super()
        }
    };
    var cs = class extends O {};
    var ds = class extends O {};
    var es = class extends O {};
    var fs = class extends O {
        da() {
            return A(this, Fr, 1)
        }
        j() {
            return z(this, 2)
        }
    };
    var gs = class extends O {};
    var hs = class extends O {};
    var is = class extends O {
            getName() {
                return D(this, 4)
            }
        },
        js = [1, 2, 3];
    var ks = class extends O {};
    ks.M = [2, 5, 6, 11];
    var ls = class extends O {
        j() {
            return Bh(this, 2)
        }
    };
    var ms = class extends O {
        j() {
            return Sh(this, 1)
        }
    };
    var ns = class extends O {};
    var os = class extends O {};
    var ps = class extends O {
        j() {
            return A(this, os, 2)
        }
    };
    ps.M = [1];
    var qs = class extends O {};
    var rs = class extends O {
        j() {
            return I(this, 2)
        }
    };

    function ss() {
        var a = new ts;
        a = vh(a, 1, 1);
        var b = new qs;
        b = Xh(b, 2, !0);
        a = C(a, 2, b);
        b = new ps;
        var c = new ns;
        c = di(c, 1);
        b = Qh(b, 1, ns, c);
        c = new os;
        c = Xh(c, 1, !0);
        b = C(b, 2, c);
        return C(a, 3, b)
    }
    var ts = class extends O {};
    var us = class extends O {};
    var vs = class extends O {
        j() {
            return K(this, 1)
        }
        l() {
            return I(this, 3)
        }
        m() {
            return I(this, 4)
        }
    };
    var ws = class extends O {
        j() {
            return Uh(Sh(this, 1))
        }
    };
    var xs = class extends O {
        j() {
            return I(this, 1)
        }
        l() {
            return I(this, 2)
        }
        m() {
            return I(this, 3)
        }
    };
    var ys = class extends O {
        m() {
            return A(this, vs, 8)
        }
        v() {
            return A(this, vs, 9)
        }
        j() {
            return A(this, xs, 4)
        }
        l() {
            return A(this, ws, 5)
        }
        C() {
            return F(this, 7)
        }
        A() {
            return I(this, 10)
        }
        B() {
            return F(this, 11)
        }
        G() {
            return F(this, 12)
        }
        F() {
            return F(this, 13)
        }
    };
    var zs = class extends O {
        j() {
            return F(this, 1)
        }
    };
    var As = class extends O {
        m() {
            return Uh(Sh(this, 3))
        }
        l() {
            return A(this, xs, 5)
        }
        j() {
            return A(this, ws, 6)
        }
        v() {
            return I(this, 8)
        }
        A() {
            return F(this, 9)
        }
        B() {
            return F(this, 11)
        }
        C() {
            return A(this, zs, 12)
        }
    };
    var Bs = class extends O {};
    Bs.M = [2];
    var Cs = class extends O {
        j() {
            return D(this, 1)
        }
    };
    var Ds = class extends O {};
    var Es = class extends O {
        j() {
            return B(this, Ds, 1)
        }
    };
    Es.M = [1];
    var Fs = class extends O {
        setProperty(a) {
            return bi(this, 1, a)
        }
        getValue() {
            return D(this, 2)
        }
    };
    var Gs = class extends O {};
    Gs.M = [3, 4];
    var Hs = class extends O {};

    function Is(a, b) {
        return C(a, 1, b)
    }

    function Js(a, b) {
        return vh(a, 2, b)
    }
    var Ks = class extends O {
        da() {
            return A(this, Fr, 1)
        }
        j() {
            return z(this, 2)
        }
    };
    Ks.M = [6, 7, 9, 10, 11];
    var Ls = class extends O {};
    Ls.M = [4];
    var Ms = class extends O {
        j() {
            return Uh(Sh(this, 1))
        }
    };
    var Ns = class extends O {};
    var Ps = class extends O {
            j() {
                return Wh(this, Ns, 2, Os)
            }
        },
        Os = [1, 2];
    var Qs = class extends O {
        j() {
            return A(this, Ps, 3)
        }
    };
    var Rs = class extends O {};
    var Ss = class extends O {
        j() {
            return B(this, Rs, 1)
        }
    };
    Ss.M = [1];
    var Ts = class extends O {
        j() {
            return Ch(this, 1, Xg)
        }
        l() {
            return A(this, Qs, 3)
        }
    };
    Ts.M = [1, 4];

    function Us(a) {
        return A(a, Wr, 13)
    }

    function Vs(a) {
        return A(a, As, 28)
    }
    var Ws = class extends O {
            j() {
                return A(this, as, 15)
            }
        },
        Xs = ki(Ws);
    Ws.M = [1, 2, 5, 7];
    var Ys = class extends O {},
        Zs = ki(Ys);

    function $s(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Zs(b) : null
        } catch (b) {
            return null
        }
    }

    function at(a, b) {
        if (void 0 !== a.Xd) {
            let c = $s(b);
            c || (c = new Ys);
            void 0 !== a.Xd && Xh(c, 2, a.Xd);
            ai(c, 1, Date.now() + 864E5);
            a = ei(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = $s(b)) && Sh(a, 1) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function bt(a) {
        var b = [];
        hq(a.getElementsByTagName("p"), function(c) {
            100 <= ct(c) && b.push(c)
        });
        return b
    }

    function ct(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        hq(a.childNodes, function(c) {
            b += ct(c)
        });
        return b
    }

    function dt(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function et(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const ft = class {
        constructor(a, b, c, d) {
            this.v = a;
            this.l = b;
            this.m = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.v)
            } catch (f) {}
            if (!b.length) return [];
            a = cb(b);
            a = et(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.m) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = bt(a[c]),
                        e = this.m;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.v,
                occurrenceIndex: this.l,
                paragraphIndex: this.m,
                ignoreMode: this.j
            })
        }
    };

    function gt(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    }

    function ht(a) {
        return iq(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function it(a, b) {
        a = (new me(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function jt(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        gt(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function kt(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            gt(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var mt = (a, b, c, d = 0) => {
            var e = lt(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.Wc(c);) b = c;
                e = {
                    anchor: b,
                    position: e.pd
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            jt(a, e.anchor, e.position)
        },
        nt = (a, b, c, d = 0) => {
            R(Gk) ? mt(a, b, c, d) : jt(a, b, c)
        };

    function lt(a, b, c) {
        const d = f => {
                f = ot(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = ot(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: pt(a.previousSibling, d),
                    Wc: f => pt(f.previousSibling, d),
                    pd: 0
                };
            case 2:
                return {
                    init: pt(a.lastChild, d),
                    Wc: f => pt(f.previousSibling, d),
                    pd: 0
                };
            case 3:
                return {
                    init: pt(a.nextSibling, e),
                    Wc: f => pt(f.nextSibling, e),
                    pd: 3
                };
            case 1:
                return {
                    init: pt(a.firstChild, e),
                    Wc: f => pt(f.nextSibling, e),
                    pd: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function ot(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function pt(a, b) {
        return a && b(a) ? a : null
    };
    var qt = (a, b = !1) => {
        try {
            return b ? (new ee(a.innerWidth, a.innerHeight)).round() : oe(a || window).round()
        } catch (c) {
            return new ee(-12245933, -12245933)
        }
    };

    function rt(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function st(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new de(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function tt(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function ut(a) {
        -1 === a.j && (a.j = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.j
    }
    var vt = class {
        constructor() {
            this.data = [];
            this.j = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.j = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function wt(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            je: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 === b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            je: c
        }
    };
    var xt = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function yt(a, b) {
        kf(a, (c, d) => {
            b[d] = c
        })
    }
    var zt = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && bf(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var At = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        Bt = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        Ct = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Dt = (a, b, c) => {
        a = At(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Et = (a, b) => {
            b = b.parentElement;
            return b ? (a = hf(b, a)) ? a.direction : "" : ""
        },
        Ft = (a, b, c) => {
            if (0 !== Dt(a, b, c)) {
                Ct(b, c, "0px");
                var d = Dt(a, b, c);
                Ct(b, c, -1 * d + "px");
                a = Dt(a, b, c);
                0 !== a && a !== d && Ct(b, c, d / (a - d) * d + "px")
            }
        };
    const Gt = RegExp("(^| )adsbygoogle($| )");

    function Ht(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = je(d.property);
            a[e] = d.value
        }
    }

    function It(a, b, c, d, e, f) {
        a = Jt(a, e);
        a.Ga.setAttribute("data-ad-format", d ? d : "auto");
        Kt(a, b, c, f);
        return a
    }

    function Lt(a, b, c = null) {
        a = Jt(a, {});
        Kt(a, b, null, c);
        return a
    }

    function Kt(a, b, c, d) {
        var e = [];
        if (d = d && d.cf) a.sb.className = d.join(" ");
        a = a.Ga;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function Jt(a, b) {
        const c = it(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.od && Ht(d, b.od);
        a = (new me(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Je && (d.marginTop = b.Je);
        b.Md && (d.marginBottom = b.Md);
        b.Qb && Ht(d, b.Qb);
        c.appendChild(a);
        return {
            sb: c,
            Ga: a
        }
    }

    function Mt(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.hc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Nt(a) {
        const b = ht(a.document);
        Ra(b, function(c) {
            const d = Ot(a, c);
            var e;
            if (e = d) e = At(c, a), e = !((e ? e.y : 0) < S(a));
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Mt(a, c))
        })
    }

    function Ot(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in mb) a[mb[c]] && (b[mb[c]] = a[mb[c]]);
        return b
    };
    class Pt {
        constructor() {
            var a = Cj `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.A = Math.random();
            this.m = this.sa;
            this.C = a
        }
        Ce(a) {
            this.j = a
        }
        v(a) {
            this.l = a
        }
        sa(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new nm(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (ff(t.document, this.C), t.error_rep_loaded = !0);
            return !1
        }
        sc(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.m(a, d, .01, c, "jserror")) throw d;
            }
        }
        Fa(a, b, c, d) {
            return (...e) => this.sc(a, () => b.apply(c, e), d)
        }
        Ka(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.sa(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    const Qt = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Rt = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = um();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Qt({
                        label: a.toString(),
                        value: h,
                        duration: (um() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        St = (a, b, c, d = !1) => Rt(a, b, (e, f) => {
            (new Pt).sa(e, f)
        }, c, d);

    function Tt(a, b, c) {
        return Rt(a, b, void 0, c, !0).apply()
    }

    function Ut(a, b) {
        return St(754, a, b, !0).apply()
    }

    function Vt(a) {
        if (!a) return null;
        var b = D(a, 7);
        if (D(a, 1) || a.getId() || 0 < Ch(a, 4, Xg).length) {
            var c = Ch(a, 4, Xg);
            b = Rh(a, 2);
            var d = Rh(a, 5),
                e = Wt(z(a, 6)),
                f = D(a, 3),
                g = D(a, 1);
            a = "";
            g && (a += g);
            f && (a += "#" + dt(f));
            if (c)
                for (f = 0; f < c.length; f++) a += "." + dt(c[f]);
            b = (c = a) ? new ft(c, b, d, e) : null
        } else b = b ? new ft(b, Rh(a, 2), Rh(a, 5), Wt(z(a, 6))) : null;
        return b
    }
    var Xt = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Wt(a) {
        return null == a ? a : Xt[a]
    }

    function Yt(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = D(a[c], 1),
                e = D(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Zt(a, b) {
        var c = {};
        a && (c.Je = D(a, 1), c.Md = D(a, 2), c.clearBoth = !!Bh(a, 3));
        b && (c.od = Yt(B(b, Fs, 3)), c.Qb = Yt(B(b, Fs, 4)));
        return c
    }
    var $t = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        au = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    var bu = {
            ya: "ama_success",
            ta: .1,
            xa: !0,
            za: !0
        },
        cu = {
            ya: "ama_failure",
            ta: .1,
            xa: !0,
            za: !0
        },
        du = {
            ya: "ama_inf_scr",
            ta: .1,
            xa: !0,
            za: !1
        },
        eu = {
            ya: "ama_inf_scr",
            ta: .1,
            xa: !0,
            za: !1
        },
        fu = {
            ya: "ama_coverage",
            ta: .1,
            xa: !0,
            za: !0
        },
        gu = {
            ya: "ama_inf_scr",
            ta: 1,
            xa: !0,
            za: !1
        },
        hu = {
            ya: "ama_opt",
            ta: .1,
            xa: !0,
            za: !1
        },
        iu = {
            ya: "ama_aud_sen",
            ta: 1,
            xa: !0,
            za: !1
        },
        ju = {
            ya: "ama_auto_rs",
            ta: 1,
            xa: !0,
            za: !1
        },
        ku = {
            ya: "ama_auto_prose",
            ta: 1,
            xa: !0,
            za: !1
        },
        lu = {
            ya: "ama_improv",
            ta: .1,
            xa: !0,
            za: !1
        },
        mu = {
            ya: "ama_constraints",
            ta: 0,
            xa: !0,
            za: !0
        };

    function nu(a, b) {
        for (var c = 0; c < b.length; c++) a.la(b[c]);
        return a
    }

    function ou(a, b) {
        a.m = a.m ? a.m : b;
        return a
    }
    class pu {
        constructor(a) {
            this.B = {};
            this.B.c = a;
            this.A = [];
            this.m = null;
            this.C = [];
            this.F = 0
        }
        ib(a) {
            this.B.wpc = a;
            return this
        }
        la(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        v(a) {
            var b = Gc(this.B);
            0 < this.F && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.C.join();
            this.m && (b.excp_n = this.m.name, b.excp_m = this.m.message && this.m.message.substring(0, 512), b.excp_s = this.m.stack && Km(this.m.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function qu(a, b, c) {
        let d = b.ta;
        b.za && R(Jk) && (d = 1, "r" in c && (c.r += "F"));
        0 >= d || (!b.xa || "pvc" in c || (c.pvc = Kf(a.j)), sp(b.ya, c, d))
    }

    function ru(a, b, c) {
        c = c.v(a.j);
        b.xa && (c.pvc = Kf(a.j));
        0 <= b.ta && (c.r = b.ta, qu(a, b, c))
    }
    var su = class {
        constructor(a) {
            this.j = a
        }
    };

    function tu(a, b, c) {
        var d = a.m,
            e = S(a.j),
            f = A(a.l, rs, 4) ? .j();
        a = a.j;
        a = a.google_ama_state = a.google_ama_state || {};
        qu(d, iu, { ...c,
            evt: b,
            vh: e,
            eid: f,
            psr: a.audioSenseSpaceReserved ? 1 : 0
        })
    }
    var uu = class {
        constructor(a, b, c) {
            this.j = a;
            this.m = b;
            this.l = c
        }
    };
    const vu = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return It(d.document, a, null, null, this.j, b)
        }
        m() {
            return null
        }
    };
    const wu = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < B(this.j, Gs, 9).length ? B(this.j, Gs, 9)[0] : null,
                f = Zt(A(this.j, Hs, 3), e);
            if (!e) return null;
            if (e = D(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new me(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.od && Ht(c.style, f.od);
                d = (new me(d)).createElement("INS");
                f.Qb && Ht(d.style, f.Qb);
                c.appendChild(d);
                f = {
                    sb: c,
                    Ga: d
                };
                f.Ga.setAttribute("data-ad-type", "text");
                f.Ga.setAttribute("data-native-settings-key",
                    e);
                Kt(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        m() {
            var a = 0 < B(this.j, Gs, 9).length ? B(this.j, Gs, 9)[0] : null;
            if (!a) return null;
            a = B(a, Fs, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == D(c, 1) && 0 < parseInt(D(c, 2), 10)) return parseInt(D(c, 2), 10)
            }
            return null
        }
    };
    const xu = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Qb: g
                }
            } else c = {};
            a = It(d.document, a, f, e, c, b);
            a.Ga.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        m() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        hc() {
            return this.j
        }
    };
    class yu {
        constructor(a) {
            this.l = a
        }
        j() {
            return new Qr([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const zu = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        j() {
            return this.m
        }
        l(a) {
            a = this.v.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Au(a, b, c) {
        const d = [];
        for (let q = 0; q < a.length; q++) {
            var e = a[q];
            var f = q,
                g = b,
                h = c,
                k = e.da();
            if (k) {
                var l = Vt(k);
                if (l) {
                    var m = $t[z(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = A(e, Hs, 3)) ? Bh(m, 3) : null;
                        l = new zu(l, n);
                        n = Ch(e, 10, Lg).slice(0);
                        null != Rh(k, 5) && n.push(1);
                        var p = h ? h : {};
                        h = Rh(e, 12);
                        k = xh(e, Or, 4) ? A(e, Or, 4) : null;
                        1 == z(e, 8) ? (p = p.Ig || null, e = new Bu(l, new vu(Zt(A(e, Hs, 3), null)), p, m, 0, n, k, g, f, h, e)) : e = 2 == z(e, 8) ? new Bu(l, new wu(e), p.Bh || new yu("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !== e && d.push(e)
        }
        return d
    }

    function Cu(a) {
        return a.A
    }

    function Du(a) {
        return a.ua
    }

    function Eu(a) {
        return R(tk) ? (a.L || (a.L = a.F.l(a.m)), a.L) : a.F.l(a.m)
    }

    function Fu(a) {
        var b = a.H;
        a = a.m.document.createElement("div");
        R(tk) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Gu(a) {
        return a.B instanceof xu ? a.B.hc() : null
    }

    function Hu(a, b, c) {
        jq(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function Iu(a, b) {
        a.A = !0;
        R(tk) && (a.l && kt(a.l), a.l = null);
        null != b && a.Z.push(b)
    }

    function Ju(a) {
        return it(a.m.document, a.H || !1)
    }

    function Ku(a) {
        return a.B.m(a.m)
    }

    function Lu(a, b = null, c = null) {
        return new Bu(a.F, b || a.B, c || a.O, a.H, a.Ab, a.jd, a.Ad, a.m, a.pa, a.G, a.v, a.C, a.ba)
    }
    class Bu {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.F = a;
            this.B = b;
            this.O = c;
            this.H = d;
            this.Ab = e;
            this.jd = f;
            this.Ad = g ? g : new Or;
            this.m = h;
            this.pa = k;
            this.G = l;
            this.v = m;
            (a = !m) || (a = !(m.da() && null != Rh(m.da(), 5)));
            this.ua = !a;
            this.C = n;
            this.ba = p;
            this.Z = [];
            this.A = !1;
            this.I = new nq;
            this.L = this.l = null
        }
        V() {
            return this.m
        }
        j() {
            return this.F.j()
        }
    };
    var Mu = a => a ? .google_ad_slot ? ur(new Gr(1, {
            xg: a.google_ad_slot
        })) : wr("Missing dimension when creating placement id"),
        Ou = a => {
            switch (a.Ab) {
                case 0:
                case 1:
                    var b = a.v;
                    null == b ? a = null : (a = b.da(), null == a ? a = null : (b = z(b, 2), a = null == b ? null : new Gr(0, {
                        Ve: [a],
                        gg: b
                    })));
                    return null != a ? ur(a) : wr("Missing dimension when creating placement id");
                case 2:
                    return a = Nu(a), null != a ? ur(a) : wr("Missing dimension when creating placement id");
                default:
                    return wr("Invalid type: " + a.Ab)
            }
        };
    const Nu = a => {
        if (null == a || null == a.C) return null;
        const b = A(a.C, Fr, 1),
            c = A(a.C, Fr, 2);
        if (null == b || null == c) return null;
        const d = a.ba;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new Gr(0, {
            Ve: [b, c],
            Ah: d,
            gg: au[a]
        })
    };

    function Pu(a) {
        const b = Gu(a.ca);
        return (b ? Mu(b) : Ou(a.ca)).map(c => Jr(c))
    }

    function Qu(a) {
        a.j = a.j || Pu(a);
        return a.j
    }

    function Ru(a, b) {
        if (a.ca.A) throw Error("AMA:AP:AP");
        nt(b, a.da(), a.ca.j());
        Iu(a.ca, b)
    }
    const Su = class {
        constructor(a, b, c) {
            this.ca = a;
            this.l = b;
            this.aa = c;
            this.j = null
        }
        da() {
            return this.l
        }
        fill(a, b) {
            var c = this.ca;
            (a = c.B.l(a, b, this.l, c.m)) && Ru(this, a.sb);
            return a
        }
    };
    var Uu = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; 10 > d && b;) {
            if (b == c) return !0;
            if (Tu(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const Tu = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = ac(b, "&") ? ge(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && pq.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Tu(a, b[c])) return !0
        }
        return !1
    };
    var Vu = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Wu = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return It(d.document, a, null, null, this.j, b)
        }
        m(a) {
            return Vu(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class Xu {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Vu(a);
            return new Qr(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Yu = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        l() {
            return this.v
        }
        j() {
            return this.m
        }
    };

    function Zu(a, b, c, d, e, f) {
        const g = Nr();
        return new Bu(new Yu(c, e), new Wu, new Xu(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function $u(a, b, c, d, e) {
        const f = Nr();
        return new Bu(new Yu(b, d), new vu({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var av = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        V() {
            return this.win
        }
        A(a) {
            return Zu(a, this.articleStructure, this.element, this.win, 3, null)
        }
        l() {
            return $u(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const bv = {
        TABLE: {
            Yb: new tr([1, 2])
        },
        THEAD: {
            Yb: new tr([0, 3, 1, 2])
        },
        TBODY: {
            Yb: new tr([0, 3, 1, 2])
        },
        TR: {
            Yb: new tr([0, 3, 1, 2])
        },
        TD: {
            Yb: new tr([0, 3])
        }
    };

    function cv(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Qa(e, f), 0 > c || b.push(new dv(a, [f], c, f, 3, we(f).trim(), d));
        return b
    }

    function ev(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                if (1 != l.nodeType) var m = null;
                else "BR" == l.tagName ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = "inline" == m || "inline-block" == m ? null : l);
                m ? (d.length && k && e.push(new dv(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = we(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new dv(a, d, h, b, 2, k, c));
        return e
    }

    function fv(a, b) {
        return a.j - b.j
    }
    class dv {
        constructor(a, b, c, d, e, f, g) {
            this.v = a;
            this.Vb = b.slice(0);
            this.j = c;
            this.Ed = d;
            this.Fd = e;
            this.C = f;
            this.m = g
        }
        V() {
            return this.m
        }
        A(a) {
            return Zu(a, this.v, this.Ed, this.m, this.Fd, this.j)
        }
        l() {
            return $u(this.v, this.Ed, this.m, this.Fd, this.j)
        }
    };

    function gv(a) {
        return ab(a.C ? ev(a.l, a.j, a.m) : [], a.A ? cv(a.l, a.A, a.j, a.m) : []).filter(b => {
            var c = b.Ed.tagName;
            c ? (c = bv[c.toUpperCase()], b = null != c && c.Yb.contains(b.Fd)) : b = !1;
            return !b
        })
    }
    class hv {
        constructor(a, b, c) {
            this.j = a;
            this.A = b.Nc;
            this.C = b.rf;
            this.l = b.articleStructure;
            this.m = c;
            this.v = b.Ue
        }
    };

    function iv(a, b) {
        return Ut(() => {
            if (R(tk)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Eu(f);
                    if (g) {
                        if (!f.l && !f.A) {
                            var h = null;
                            try {
                                var k = Eu(f);
                                if (k) {
                                    h = Fu(f);
                                    nt(h, k, f.j());
                                    var l = h
                                } else l = null
                            } catch (q) {
                                throw kt(h), q;
                            }
                            f.l = l
                        }(h = f.l) && d.push({
                            Xh: f,
                            anchorElement: g,
                            kh: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = dq(b), k = eq(b), e = 0; e < d.length; e++) {
                        const {
                            Xh: q,
                            anchorElement: w,
                            kh: y
                        } = d[e];
                        f = jv(y, k, l);
                        c.push(new Su(q, w, f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const q = [];
                    for (let w = 0; w < a.length; w++) {
                        var m = a[w],
                            n = Eu(m);
                        n && q.push({
                            cg: m,
                            anchorElement: n
                        })
                    }
                    for (n =
                        0; n < q.length; n++) {
                        m = k;
                        g = m.push; {
                            var p = q[n];
                            const w = p.anchorElement,
                                y = p.cg,
                                E = Fu(y);
                            try {
                                nt(E, w, y.j()), h = E
                            } catch (G) {
                                throw kt(E), G;
                            }
                        }
                        g.call(m, h)
                    }
                    c = dq(b);
                    d = eq(b);
                    for (g = 0; g < k.length; g++) e = jv(k[g], d, c), f = q[g], l.push(new Su(f.cg, f.anchorElement, e))
                } finally {
                    for (c = 0; c < k.length; c++) kt(k[c])
                }
            }
            return l
        }, b)
    }

    function jv(a, b, c) {
        a = a.getBoundingClientRect();
        return new er(a.left + b, a.top + c, a.right - a.left)
    };

    function kv(a, b) {
        const c = gv(b);
        c.sort(fv);
        return new lv(a, b, c)
    }

    function mv(a, b, c) {
        return new Bu(new Yu(b, c), new vu({}), null, !0, 2, [], null, a.j, null, null, null, a.A.l, null)
    }
    var lv = class {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.v = c;
            this.l = !1;
            this.m = 0
        }
        next() {
            if (!this.l) {
                if (this.m >= this.v.length) var a = null;
                else {
                    {
                        const b = this.v[this.m++].Vb[0];
                        va(b) && 1 == b.nodeType ? a = mv(this, b, 0) : (a = this.j.document.createElement("div"), v(a, {
                            display: "none"
                        }), b.parentNode.insertBefore(a, b), a = mv(this, a, 3))
                    }
                    a = iv([a], this.j)[0] || null
                }
                if (a) return a;
                this.l = !0
            }
            return null
        }
    };
    var nv = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return this.l.next()
        }
    };
    const ov = {
            1: "0.5vp",
            2: "300px"
        },
        pv = {
            1: 700,
            2: 1200
        },
        qv = {
            [1]: {
                ng: "3vp",
                Ge: "1vp",
                mg: "0.3vp"
            },
            [2]: {
                ng: "900px",
                Ge: "300px",
                mg: "90px"
            }
        };

    function rv(a, b, c) {
        var d = sv(a),
            e = S(a) || pv[d],
            f = void 0;
        c && (f = (c = (c = tv(B(c, Zr, 2), d)) ? A(c, Xr, 7) : void 0) ? uv(c, e) : void 0);
        c = f;
        f = sv(a);
        a = S(a) || pv[f];
        const g = vv(qv[f].Ge, a);
        a = null === g ? wv(f, a) : new xv(g, g, yv(g, 8), 8, .3, c);
        c = vv(qv[d].ng, e);
        f = vv(qv[d].Ge, e);
        d = vv(qv[d].mg, e);
        e = a.m;
        c && d && f && void 0 !== b && (e = .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new xv(e, e, yv(e, a.l), a.l, a.v, a.j)
    }

    function zv(a, b) {
        const c = sv(a);
        a = S(a) || pv[c];
        if (!b) return wv(c, a);
        if (b = tv(B(b, Zr, 2), c))
            if (b = Av(b, a)) return b;
        return wv(c, a)
    }

    function Bv(a) {
        const b = sv(a);
        return wv(b, S(a) || pv[b])
    }

    function Cv(a, b) {
        let c = {
            oc: a.m,
            Za: a.C
        };
        for (let d of a.A) d.adCount <= b && (c = d.xc);
        return c
    }

    function Dv(a, b, c) {
        var d = Bh(b, 2);
        b = A(b, Zr, 1);
        const e = S(c) || pv[sv(c)];
        c = vv(b ? .A(), e) ? ? a.m;
        const f = vv(b ? .v(), e) ? ? a.C;
        d = d ? [] : Ev(b ? .j(), e) ? ? a.A;
        const g = b ? .l() ? ? a.l,
            h = b ? .m() ? ? a.v;
        a = (b ? .C() ? uv(A(b, Xr, 7), e) : null) ? ? a.j;
        return new xv(c, f, d, g, h, a)
    }

    function Fv(a, b) {
        var c = sv(b);
        const d = new $r,
            e = new Zr;
        let f = !1;
        var g = ep(yk);
        0 <= g && (Zh(e, 4, g), f = !0);
        g = null;
        1 === c ? (c = ep(Bk), 0 <= c && (g = c + "vp")) : (c = ep(Ak), 0 <= c && (g = c + "px"));
        null !== g && (bi(e, 2, g), f = !0);
        c = R(Dk) ? "0px" : null;
        null !== c && (bi(e, 5, c), f = !0);
        if (R(Fk)) Xh(d, 2, !0), f = !0;
        else if (null !== c || null !== g) {
            const m = [];
            for (const n of a.A) {
                var h = m,
                    k = h.push;
                var l = new Yr;
                l = Zh(l, 1, n.adCount);
                l = bi(l, 3, c ? ? n.xc.Za + "px");
                l = bi(l, 2, g ? ? n.xc.oc + "px");
                k.call(h, l)
            }
            Oh(e, 3, m)
        }
        return f ? (C(d, 1, e), Dv(a, d, b)) : a
    }
    class xv {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.C = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.v = e;
            this.j = f
        }
    }

    function tv(a, b) {
        for (let c of a)
            if (z(c, 1) == b) return c;
        return null
    }

    function Ev(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = Rh(d, 1);
            const e = vv(D(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                xc: {
                    oc: e,
                    Za: vv(D(d, 3), b)
                }
            })
        }
        return c
    }

    function Av(a, b) {
        const c = vv(D(a, 2), b),
            d = vv(D(a, 5), b);
        if (null === c) return null;
        const e = Rh(a, 4);
        if (null == e) return null;
        var f = a.j();
        f = Ev(f, b);
        if (null === f) return null;
        const g = A(a, Xr, 7);
        b = g ? uv(g, b) : void 0;
        return new xv(c, d, f, e, Ah(a, 6), b)
    }

    function wv(a, b) {
        a = vv(ov[a], b);
        return new xv(null === a ? Infinity : a, null, [], 3, null)
    }

    function vv(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function sv(a) {
        a = 900 <= Wp(a);
        return Be() && !a ? 1 : 2
    }

    function yv(a, b) {
        if (4 > b) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            xc: {
                oc: 2 * a,
                Za: 2 * a
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            xc: {
                oc: 3 * a,
                Za: 3 * a
            }
        }]
    }

    function uv(a, b) {
        const c = vv(D(a, 2), b) || 0,
            d = Rh(a, 3) || 1;
        return {
            Sf: c,
            Lf: d,
            Sb: vv(D(a, 1), b) || 0
        }
    };

    function Gv(a, b, c) {
        return Op({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Hv(a) {
        if (!a.length) return null;
        const b = Pp(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Iv(b, a)
    }
    class Iv {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Jv(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var Pv = (a, b) => {
        var c = cb(b.document.querySelectorAll(".google-auto-placed"));
        const d = Kv(b),
            e = Lv(b),
            f = Mv(b),
            g = Nv(b),
            h = cb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = cb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = cb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(cb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), cb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.Yc, c],
                [a.zb,
                    d
                ],
                [a.yh, e],
                [a.Zc, f],
                [a.bd, g],
                [a.wh, h],
                [a.xh, k],
                [a.zh, l]
            ]) !1 === n ? b = b.concat(p) : m = m.concat(p);
        a = Ov(m);
        c = Ov(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    };
    const Xv = a => {
            const b = Jv(a);
            return b ? Ua(Va(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        Kv = a => cb(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        Lv = a => cb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        Mv = a => (Xv(a) || cb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(cb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Nv = a => cb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Ov = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var Yv = op.Fa(453, Pv),
        Zv;
    Zv = op.Fa(454, (a, b) => {
        const c = cb(b.document.querySelectorAll(".google-auto-placed")),
            d = Kv(b),
            e = Lv(b),
            f = Mv(b),
            g = Nv(b),
            h = cb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = cb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = cb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return Ov([].concat(!0 === a.Yc ? c : [], !0 === a.zb ? d : [], !0 === a.yh ? e : [], !0 === a.Zc ? f : [], !0 === a.bd ? g : [], !0 === a.wh ? h : [], !0 === a.xh ? k : [], !0 === a.zh ? b : []))
    });

    function $v(a, b, c) {
        const d = aw(a);
        b = bw(d, b, c);
        return new cw(a, d, b)
    }

    function dw(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function ew(a) {
        return a.j.map(b => b.box)
    }

    function fw(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class cw {
        constructor(a, b, c) {
            this.m = a;
            this.j = b.slice(0);
            this.v = c.slice(0);
            this.l = null
        }
    }

    function aw(a) {
        const b = Yv({
                zb: !1
            }, a),
            c = eq(a),
            d = dq(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && ac(e.className, "google-auto-placed")) || dw(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                xm: e ? 1 : 0
            } : null
        }).filter(wb(e => null === e))
    }

    function bw(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? gw(a, b) : Va(a, d => new Iv(d.box, 1))
    }

    function gw(a, b) {
        a = Va(a, d => new Iv(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Gv(d, a[f], b)) {
                        d = Hv([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function hw(a, b, c) {
        const d = dr(c, b);
        return !Xa(a, e => Op(e, d))
    }

    function iw(a, b, c, d, e) {
        e = e.aa;
        const f = dr(e, b),
            g = dr(e, c),
            h = dr(e, d);
        return !Xa(a, k => Op(k, g) || Op(k, f) && !Op(k, h))
    }

    function jw(a, b, c, d) {
        const e = ew(a);
        if (hw(e, b, d.aa)) return !0;
        if (!iw(e, b, c.Sf, c.Sb, d)) return !1;
        const f = new Iv(dr(d.aa, 0), 1);
        a = Ua(a.v, g => Gv(g, f, c.Sb));
        b = Wa(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Lf ? !1 : !0
    };
    var kw = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function lw(a, b) {
        const c = new Br,
            d = new oq;
        b.forEach(e => {
            if (Wh(e, gs, 1, js)) {
                e = Wh(e, gs, 1, js);
                if (A(e, fs, 1) && A(e, fs, 1).da() && A(e, fs, 2) && A(e, fs, 2).da()) {
                    const g = mw(a, A(e, fs, 1).da()),
                        h = mw(a, A(e, fs, 2).da());
                    if (g && h)
                        for (var f of kw({
                                anchor: g,
                                position: Th(A(e, fs, 1), 2)
                            }, {
                                anchor: h,
                                position: Th(A(e, fs, 2), 2)
                            })) c.set(wa(f.anchor), f.position)
                }
                A(e, fs, 3) && A(e, fs, 3).da() && (f = mw(a, A(e, fs, 3).da())) && c.set(wa(f), Th(A(e, fs, 3), 2))
            } else Wh(e, hs, 2, js) ? nw(a, Wh(e, hs, 2, js), c) : Wh(e, es, 3, js) && ow(a, Wh(e, es, 3, js), d)
        });
        return new pw(c,
            d)
    }
    class pw {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const nw = (a, b, c) => {
            A(b, fs, 2) ? (b = A(b, fs, 2), (a = mw(a, b.da())) && c.set(wa(a), z(b, 2))) : A(b, Fr, 1) && (a = qw(a, A(b, Fr, 1))) && a.forEach(d => {
                d = wa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        ow = (a, b, c) => {
            A(b, Fr, 1) && (a = qw(a, A(b, Fr, 1))) && a.forEach(d => {
                c.add(wa(d))
            })
        },
        mw = (a, b) => (a = qw(a, b)) && 0 < a.length ? a[0] : null,
        qw = (a, b) => (b = Vt(b)) ? b.query(a) : null;
    var rw = class {
        constructor() {
            this.j = Jf();
            this.l = 0
        }
    };

    function sw(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (tw(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function uw(a) {
        a = vw(a);
        return a.has("all") || a.has("after")
    }

    function ww(a) {
        a = vw(a);
        return a.has("all") || a.has("before")
    }

    function vw(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function tw(a) {
        const b = vw(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var xw = class {
        constructor() {
            this.j = new Set;
            this.l = new rw
        }
    };

    function yw(a) {
        return function(b) {
            return iv(b, a)
        }
    }

    function zw(a) {
        const b = S(a);
        return b ? Fa(Aw, b + dq(a)) : tb
    }

    function Bw(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return tb;
        const d = ew(c || $v(b));
        return e => hw(d, a, e.aa)
    }

    function Cw(a, b, c, d) {
        if (0 > a || 0 > b.Sf || 0 > b.Lf || 0 > b.Sb) throw Error("ama::ead:nd");
        return Infinity === a ? tb : e => jw(d || $v(c, b.Sb), a, b, e)
    }

    function Dw(a) {
        if (!a.length) return tb;
        const b = new tr(a);
        return c => b.contains(c.Ab)
    }

    function Ew(a) {
        return function(b) {
            for (let c of b.jd)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Fw(a) {
        return a.length ? function(b) {
            const c = b.jd;
            return a.some(d => -1 < c.indexOf(d))
        } : ub
    }

    function Gw(a, b) {
        if (0 >= a) return ub;
        const c = $p(b).scrollHeight - a;
        return function(d) {
            return d.aa.j <= c
        }
    }

    function Hw(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[z(c.Ad, 2) || 0]
        }
    }

    function Iw(a) {
        return a.length ? b => a.includes(z(b.Ad, 1) || 0) : ub
    }

    function Jw(a, b) {
        const c = lw(a, b);
        return function(d) {
            var e = d.da();
            d = au[d.ca.j()];
            var f = wa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(wa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(wa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Kw() {
        const a = new xw;
        return function(b) {
            var c = b.da(),
                d = au[b.ca.j()];
            a: switch (d) {
                case 1:
                    b = uw(c.previousElementSibling) || ww(c);
                    break a;
                case 4:
                    b = uw(c) || ww(c.nextElementSibling);
                    break a;
                case 2:
                    b = ww(c.firstElementChild);
                    break a;
                case 3:
                    b = uw(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = sw(a, c, d);
            d = a.l;
            sp("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.j,
                num: d.l++,
                dvc: Bf()
            }, .1);
            return !(b || c)
        }
    }
    const Aw = (a, b) => b.aa.j >= a,
        Lw = (a, b, c) => {
            c = c.aa.l;
            return a <= c && c <= b
        };
    var Mw = class {
        constructor(a, b) {
            this.m = a;
            this.l = b
        }
        j() {
            const a = zw(this.m);
            let b = this.l.next();
            for (; b;) {
                if (a(b)) return b;
                b = this.l.next()
            }
            return null
        }
    };
    var Nw = class {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = di(Js(Is(new Ks, A(this.m.l, Fr, 1)), 2), 8);
            a = Au([a], this.l);
            return iv(a, this.l)[0] || null
        }
    };
    var Ow = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        Pw = a => {
            const b = S(a) || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        };

    function Qw(a, b) {
        if (!b) return !1;
        const c = wa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Qw(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Rw(a, b) {
        return Xa(b.Vb, c => Qw(a, c))
    }
    class Sw {
        constructor(a) {
            this.j = new nq;
            this.l = a
        }
    };
    class Tw {
        constructor(a, b) {
            this.v = a;
            this.j = [];
            this.l = [];
            this.m = b
        }
    };
    var Vw = (a, {
            Df: b = !1,
            De: c = !1,
            Qf: d = c || R(sk) ? 2 : 3,
            Be: e = null
        } = {}) => {
            a = gv(a);
            return Uw(a, {
                Df: b,
                De: c,
                Qf: d,
                Be: e
            })
        },
        Uw = (a, {
            Df: b = !1,
            De: c = !1,
            Qf: d = c || R(sk) ? 2 : 3,
            Be: e = null
        } = {}) => {
            if (2 > d) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(fv);
            a = [];
            b = new Tw(b, e);
            for (const g of f) {
                e = {
                    qd: g,
                    cd: 51 > g.C.length ? !1 : null != b.m ? !Rw(b.m, g) : !0
                };
                if (b.v || e.cd) b.j.length ? (f = b.j[b.j.length - 1].qd, f = Uu(f.V(), f.Vb[f.Vb.length - 1], e.qd.Vb[0])) : f = !0, f ? (b.j.push(e), e.cd && b.l.push(e.qd)) : (b.j = [e], b.l = e.cd ? [e.qd] : []);
                if (b.l.length >= d) {
                    e = c || R(sk) ? 0 : 1;
                    if (0 > e || e >= b.l.length) e = null;
                    else {
                        for (e = b.l[e]; b.j.length && !b.j[0].cd;) b.j.shift();
                        b.j.shift();
                        b.l.shift()
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var Xw = (a, b, c = !1) => {
            a = Ww(a, b);
            const d = new Sw(b);
            return nr(a, e => Vw(e, {
                De: c,
                Be: d
            }))
        },
        Yw = (a, b) => {
            a = Ww(a, b);
            const c = new Sw(b);
            return nr(a, d => {
                if (d.v) {
                    var e = d.l;
                    var f = d.m;
                    d = d.j.querySelectorAll(d.v);
                    var g = [];
                    for (var h of d) g.push(new av(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if ("style" === l.name.toLowerCase() && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = "IMG" === k || "SVG" === k
                        }(k || 1 < h.element.textContent.length) && !Qw(c, f.element) && Uu(m.V(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        Ww = (a, b) => {
            const c = new nq;
            a.forEach(d => {
                var e = Vt(A(d, Fr, 1));
                if (e) {
                    var f = e.toString();
                    jq(c, f) || c.set(f, {
                        articleStructure: d,
                        Bg: e,
                        Nc: null,
                        rf: !1,
                        Ue: null
                    });
                    e = c.get(f);
                    (f = (f = A(d, Fr, 2)) ? D(f, 7) : null) ? e.Nc = e.Nc ? e.Nc + "," + f : f: e.rf = !0;
                    d = A(d, Fr, 4);
                    e.Ue = d ? D(d, 7) : null
                }
            });
            return mq(c).map(d => {
                const e = d.Bg.query(b.document);
                return e.length ? new hv(e[0],
                    d, b) : null
            }).filter(d => null != d)
        };
    var Zw = (a, b) => {
        b = Ww(b, a);
        const c = b.map(d => d.j);
        b = b.filter(d => {
            d = d.j.getBoundingClientRect();
            return 0 < d.width && 0 < d.height
        }).filter(d => Ow(c)(d.j)).filter(d => Pw(a)(d.j));
        b.sort((d, e) => {
            e = e.j;
            return d.j.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };
    var ax = (a, b, c) => {
        if (F(c, 2)) {
            if (a.document.getElementById("google-auto-placed-read-aloud-player-reserved")) {
                var d = di(Js(Is(new Ks, Er("div#google-auto-placed-read-aloud-player-reserved")), 2), 8);
                d = Au([d], a);
                d = iv(d, a)[0] || null
            } else d = null;
            if (d) return d
        }
        a: {
            c = $w(c);b = Zw(a, b);
            for (const e of b) {
                b: switch (b = a, d = c, d) {
                    case 1:
                        b = new Nw(b, e);
                        break b;
                    case 2:
                        b = new nv(kv(b, e));
                        break b;
                    case 3:
                        b = new Mw(b, kv(b, e));
                        break b;
                    default:
                        throw Error(`Unknown position: ${d}`);
                }
                if (b = b.j()) {
                    a = b;
                    break a
                }
            }
            a = null
        }
        return a
    };

    function $w(a) {
        if (F(a, 2)) return 3;
        switch (K(a, 1)) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                throw Error(`Unknown player position: ${K(a,1)}`);
        }
    };
    var bx = class {
            constructor(a) {
                this.j = a
            }
        },
        ex = (a, b, c, d, e) => {
            if (0 < a.document.getElementsByTagName("google-read-aloud-player").length) return wr("Player already created");
            var f = a.document;
            const g = f.createElement("div");
            g.id = "google-auto-placed-read-aloud-player";
            v(g, {
                padding: "5px"
            });
            const h = f.createElement("script");
            var k = Dj `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`;
            h.textContent = Qc(k);
            (void 0) ? .Ph || Ye(h);
            g.appendChild(h);
            cx(f, g, rb("https://www.google-analytics.com/analytics.js"));
            cx(f, g, rb("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
            f = f.createElement("google-read-aloud-player");
            f.setAttribute("data-api-key", "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
            f.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
            f.setAttribute("data-url", c.url);
            f.setAttribute("data-locale", d);
            f.setAttribute("data-no-settings-screen", "");
            e && (null != z(e, 1) && 0 != K(e, 1) && f.setAttribute("data-docking-begin-trigger", dx[K(e, 1)]), null != D(e, 2) && f.setAttribute("data-experiment",
                e.j()));
            g.appendChild(f);
            Ru(b, g);
            return ur(new bx(a.document.getElementsByTagName("google-read-aloud-player")[0]))
        };
    const cx = (a, b, c) => {
            a = a.createElement("script");
            Ze(a, Wc(qb(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        dx = {
            [1]: "out-of-view"
        };
    class fx {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function gx() {
        const {
            promise: a,
            resolve: b
        } = new fx;
        return {
            promise: a,
            resolve: b
        }
    };

    function hx(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = gx();
        b[a] = d;
        c();
        return d
    }

    function ix(a, b, c) {
        return hx(a, b, () => {
            ff(b.document, c)
        }).promise
    };

    function jx(a, b, c, d) {
        a = ix(7, a, c).then(e => {
            e.init(b);
            e.handleAdConfig({
                preloadAdBreaks: null != Bh(d, 1) && F(d, 1) ? "auto" : "on",
                sound: "on"
            });
            return e
        });
        op.Ka(915, a);
        return new kx(a)
    }

    function lx(a, b) {
        a = a.j.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        });
        op.Ka(956, a)
    }
    var kx = class {
        constructor(a) {
            this.j = a
        }
    };

    function mx(a) {
        const b = a.m.j;
        b.addEventListener("firstplay", () => {
            if (!a.l) {
                a.l = !0;
                b.pause();
                const c = performance.now();
                lx(a.v, () => {
                    b.play();
                    tu(a.j, "preroll", {
                        Dm: performance.now() - c
                    })
                });
                tu(a.j, "play", {})
            }
        })
    }
    var nx = class {
        constructor(a, b, c) {
            this.m = a;
            this.v = b;
            this.j = c;
            this.l = !1
        }
    };

    function ox(a, b, c, d, e, f, g) {
        return 0 == d.length ? wr("No ArticleStructure found") : A(c, qs, 2) ? ur(new px(a, b, d, c, e, f, g ? g : "en")) : wr("No AudioSenseConfig.PlacementConfig found")
    }

    function qx(a) {
        const b = ax(a.v, a.B, A(a.l, qs, 2));
        if (b) {
            var c = !!a.A.wc && rx(a);
            c && (a.C = jx(a.v, a.F, a.A.wc, A(a.l, ps, 3) ? .j() || new os));
            var d = ex(a.v, b, a.A, a.G, A(a.l, rs, 4) || void 0);
            null != d.j ? (a.m = d.getValue(), a.m.j.addEventListener("firstview", () => {
                tu(a.j, "view", {})
            }), c && mx(new nx(a.m, a.C, a.j)), tu(a.j, "place", {
                sts: "ok",
                pp: b.aa.j
            })) : tu(a.j, "place", {
                sts: "wf"
            })
        } else tu(a.j, "place", {
            sts: "pf"
        })
    }

    function rx(a) {
        return (a = A(a.l, ps, 3)) ? B(a, ns, 1).some(b => 1 === K(b, 1)) : !1
    }
    var px = class {
        constructor(a, b, c, d, e, f, g) {
            this.v = a;
            this.j = new uu(a, b, d);
            this.B = c;
            this.l = d;
            this.A = e;
            this.F = f;
            this.G = g;
            this.m = this.C = null
        }
    };

    function sx(a, b, c) {
        var d = 0 === a.l ? a.j.m() : a.j.v(),
            e = a.m,
            f = S(a.win),
            g = a.j.l() ? .j() || 0;
        a: switch (d ? .j()) {
            case 1:
                d = "AUTO_PROSE_TOP_ANCHOR";
                break a;
            case 2:
                d = "AUTO_PROSE_BOTTOM_ANCHOR";
                break a;
            default:
                d = "UNKNOWN_POSITION"
        }
        a: switch (a.l) {
            case 0:
                a = "DESKTOP";
                break a;
            case 2:
                a = "MOBILE";
                break a;
            default:
                a = "OTHER_VIEWPORT"
        }
        qu(e, ku, { ...c,
            evt: b,
            vh: f,
            eid: g,
            pos: d,
            vpt: a
        })
    }

    function tx(a, b) {
        sx(a, "place", {
            sts: b
        })
    }
    var ux = class {
        constructor(a, b, c) {
            this.win = a;
            this.m = b;
            this.j = c;
            this.l = Bf()
        }
    };
    var vx = {},
        wx = {},
        xx = {},
        yx = {},
        zx = {};

    function Ax() {
        throw Error("Do not instantiate directly");
    }
    Ax.prototype.ef = null;
    Ax.prototype.Ea = function() {
        return this.content
    };
    Ax.prototype.toString = function() {
        return this.content
    };

    function Bx(a) {
        if (a.ff !== vx) throw Error("Sanitized content was not of kind HTML.");
        return Jd(a.toString())
    }

    function Cx() {
        Ax.call(this)
    }
    Ha(Cx, Ax);
    Cx.prototype.ff = vx;

    function Dx(a, b) {
        return null != a && a.ff === b
    };

    function Ex(a) {
        if (null != a) switch (a.ef) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Fx(a) {
        return Dx(a, vx) ? a : a instanceof Hd ? Gx(Gd(a).toString()) : a instanceof Hd ? Gx(Gd(a).toString()) : Gx(String(String(a)).replace(Hx, Ix), Ex(a))
    }
    var Gx = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.ef = d);
            return c
        }
    }(Cx);

    function Jx(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Kx(a) {
        return Dx(a, vx) ? String(String(a.Ea()).replace(Lx, "").replace(Mx, "&lt;")).replace(Nx, Ix) : String(a).replace(Hx, Ix)
    }

    function Ox(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Px(a) {
        if (null == a) return " null ";
        if (Dx(a, wx)) return a.Ea();
        if (a instanceof Rc || a instanceof Rc) return Qc(a).toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Qx, Rx) + "'"
        }
    }

    function V(a) {
        Dx(a, zx) ? a = Jx(a.Ea()) : null == a ? a = "" : a instanceof sd ? a = Jx(rd(a)) : a instanceof sd ? a = Jx(rd(a)) : a instanceof Ed ? a = Jx(Dd(a)) : a instanceof Ed ? a = Jx(Dd(a)) : (a = String(a), a = Sx.test(a) ? a : "zSoyz");
        return a
    }
    const Tx = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function Ix(a) {
        return Tx[a]
    }
    const Ux = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Rx(a) {
        return Ux[a]
    }
    const Vx = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Wx(a) {
        return Vx[a]
    }
    const Hx = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Nx = /[\x00\x22\x27\x3c\x3e]/g,
        Xx = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Yx = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Qx = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Zx = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Sx = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        $x =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function ay(a) {
        return String(a).replace(Zx, Wx)
    }
    const Lx = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Mx = /</g;

    function by(a) {
        a = void 0 === a ? "white" : a;
        return Gx('<svg width="' + Kx(18) + '" height="' + Kx(18) + '" viewBox="0 0 ' + Kx(18) + " " + Kx(18) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (Dx(a, vx) ? String(String(a.Ea()).replace(Lx, "").replace(Mx,
            "&lt;")).replace(Yx, Ix) : String(a).replace(Xx, Ix)) + " /></svg>")
    };
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const cy = Math.floor;
    var dy = /^xn--/,
        ey = /[\x2E\u3002\uFF0E\uFF61]/g;
    const fy = {
        ml: "Overflow: input needs wider integers to process",
        il: "Illegal input >= 0x80 (not a basic code point)",
        Rk: "Invalid input"
    };

    function gy(a) {
        throw RangeError(fy[a]);
    }

    function hy(a, b) {
        const c = a.split("@");
        let d = "";
        1 < c.length && (d = c[0] + "@", a = c[1]);
        a = a.replace(ey, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function iy(a) {
        return hy(a, b => {
            if (dy.test(b) && 4 < b.length) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                0 > d && (d = 0);
                for (var e = 0; e < d; ++e) 128 <= b.charCodeAt(e) && gy("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = 0 < d ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && gy("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36;
                        (36 <= f || f > cy((2147483647 - l) / n)) && gy("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > cy(2147483647 / f) && gy("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = 0 == e ? cy(c / 700) : c >> 1;
                    for (c += cy(c / f); 455 < c; g += 36) c = cy(c / 35);
                    c = cy(g + 36 * c / (c + 38));
                    cy(l / f) > 2147483647 - m && gy("Overflow: input needs wider integers to process");
                    m += cy(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };
    const jy = rb("538195011");

    function ky(a, b, c) {
        const d = a.Ia.contentWindow;
        a.A ? d.postMessage({
            action: "search",
            searchTerm: b,
            rsToken: c,
            experimentId: a.m
        }, "https://www.gstatic.com") : d.google.search.cse.element.getElement(a.C).execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.m,
            hostName: a.host
        })
    }

    function ly(a, b) {
        if (a.G) {
            const c = a.Ia.contentDocument ? .getElementById("prose-empty-serp-container");
            b && c && Jb(b, "input", () => {
                c.style.display = "none"
            })
        }
    }
    var my = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m = !1, n = !1) {
            this.Ia = a;
            this.l = b;
            this.C = c;
            this.j = d;
            this.H = e;
            this.host = f.host;
            this.origin = f.origin;
            this.v = g;
            this.B = h;
            this.m = k;
            this.F = m;
            this.A = l;
            this.G = n
        }
        init() {
            this.Ia.setAttribute("id", "prose-iframe");
            this.Ia.setAttribute("width", "100%");
            this.Ia.setAttribute("height", "100%");
            var a = this.Ia,
                b = td({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = rd(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = Pe(a,
                Qe) || pd;
            var d = iy(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.C;
            b = this.j;
            var e = this.H,
                f = this.host;
            d = this.B.replace("${website}", d);
            const g = this.G;
            var h = Gx,
                k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.F ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(Qx, Rx) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            Dx(c, xx) || Dx(c, yx) ? c = ay(c) : c instanceof bd ? c = ay(cd(c)) : c instanceof bd ? c = ay(cd(c)) : c instanceof Sc ? c = ay(Vc(c).toString()) : c instanceof Sc ? c = ay(Vc(c).toString()) : (c = String(c), c = $x.test(c) ? c.replace(Zx, Wx) : "about:invalid#zSoyz");
            a = h(k + Kx(c) + '" alt="' + Kx(f) + ' icon"><p class="cse-header"><strong>' +
                Fx(d) + '</strong></p><div class="gcse-search" data-gname="' + Kx(a) + '" data-adclient="' + Kx(b) + '" data-adchannel="' + Kx(e) + '" data-as_sitesearch="' + Kx(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = Bx(a);
            this.A ? (a = Yc(rb("https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: jy,
                cxId: this.l,
                host: this.host,
                lang: this.v,
                lrh: this.B,
                client: this.j,
                origin: this.origin
            }), this.Ia.src = Vc(a).toString()) : (b = {
                    style: td({
                        margin: 0
                    })
                }, f = Yc(rb("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.v
                }), e = {}, f = `<script src="${uj(Vc(f).toString())}"`, e.async && (f += " async"), e.nonce &&
                (f += ` nonce="${uj(e.nonce)}"`), e = Jd(f + ">\x3c/script>"), a = Aj(b, [a, e]), this.Ia.srcdoc = Gd(a))
        }
    };
    const ny = ["-webkit-text-fill-color"];

    function oy(a) {
        if (qc) {
            {
                const c = hf(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = py(a)
                } else a = qy()
            }
        } else a = qy();
        return a
    }
    var qy = () => {
        const a = {
            all: "initial"
        };
        Ra(ny, b => {
            a[b] = "unset"
        });
        return a
    };

    function py(a) {
        Ra(ny, b => {
            delete a[b]
        });
        return a
    };

    function ry(a, b) {
        const c = a.document.createElement("div");
        v(c, oy(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Oa: c,
            shadowRoot: a
        }
    };

    function sy({
        Nb: a,
        tb: b,
        Fb: c,
        Ob: d,
        ub: e,
        Gb: f
    }) {
        const g = [];
        for (let l = 0; l < f; l++)
            for (let m = 0; m < c; m++) {
                var h = c - 1,
                    k = f - 1;
                g.push({
                    x: a + (0 === h ? 0 : m / h) * (b - a),
                    y: d + (0 === k ? 0 : l / k) * (e - d)
                })
            }
        return g
    }

    function ty(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function uy(a, b) {
        for (const c of b)
            if (b = vy(a, c)) return b;
        return null
    }

    function wy(a, {
        Fh: b,
        oi: c,
        width: d,
        height: e
    }) {
        b = sy({
            Nb: b,
            tb: b + d,
            Fb: 10,
            Ob: c,
            ub: c + e,
            Gb: 10
        });
        return uy(a, b)
    }

    function xy(a, b) {
        var c = sy({
            Nb: b.left,
            tb: b.right,
            Fb: 10,
            Ob: b.top,
            ub: b.bottom,
            Gb: 10
        });
        b = new Set;
        for (const d of c)(c = vy(a, d)) && b.add(c);
        return b
    }

    function yy(a, b, c) {
        if ("fixed" !== Kj(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= Nj(b).width && 1 >= Nj(b).height || a.j.fh && !a.j.fh(b) ? !0 : !1;
        a.j.sf && a.j.sf(b, c, d);
        return d ? null : b
    }

    function vy(a, b) {
        var c = ty(a.J.document, b);
        if (c) {
            var d;
            if (!(d = yy(a, c, b))) a: {
                d = a.J.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = yy(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var zy = class {
        constructor(a, b = {}) {
            this.J = a;
            this.j = b
        }
    };

    function Ay(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new By;
        return a.google_reactive_ads_global_state
    }
    class By {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Cy;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var Cy = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function Dy(a, b) {
        return new Ey(a, b)
    }

    function Fy(a) {
        const b = Gy(a);
        Ra(a.j.maxZIndexListeners, c => c(b))
    }

    function Gy(a) {
        a = lf(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function Hy(a, b) {
        $a(a.j.maxZIndexListeners, c => c === b)
    }
    class Iy {
        constructor(a) {
            this.j = Ay(a).floatingAdsStacking
        }
    }

    function Jy(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.m;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            Fy(b);
            a.j = d
        }
    }

    function Ky(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Fy(b);
            a.j = null
        }
    }
    class Ey {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.j = null
        }
    };

    function Ly(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? Ly(b) || a : a
    }

    function My(a, b) {
        return Ny(b, a.document.body).flatMap(c => Oy(c))
    }

    function Ny(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = (null == (e = c.mode && c.host ? c : null) ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function Oy(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function Py(a) {
        null !== a.j && (a.j.gh.forEach(b => {
            b.inert = !1
        }), a.j.Zh ? .focus(), a.j = null)
    }

    function Qy(a, b) {
        Py(a);
        const c = Ly(a.win.document);
        b = My(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.j = {
            Zh: c,
            gh: b
        }
    }
    var Ry = class {
        constructor(a) {
            this.win = a;
            this.j = null
        }
        Cd() {
            Py(this)
        }
    };

    function Sy(a) {
        return new Ty(a, new tq(a, a.document.body), new tq(a, a.document.documentElement), new tq(a, a.document.documentElement))
    }

    function Uy(a) {
        sq(a.m, "scroll-behavior", "auto");
        const b = Vy(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        sq(a.j, "position", "fixed");
        sq(a.j, "top", `${-b.previousWindowScroll}px`);
        sq(a.j, "width", "100%");
        sq(a.j, "overflow-x", "hidden");
        sq(a.j, "overflow-y", "hidden");
        sq(a.l, "overflow-x", "hidden");
        sq(a.l, "overflow-y", "hidden")
    }

    function Wy(a) {
        rq(a.j);
        rq(a.l);
        const b = Vy(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        rq(a.m)
    }
    var Ty = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.l = c;
            this.m = d
        }
    };

    function Vy(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    };

    function Xy(a, b) {
        return Yy(`#${a}`, b)
    }

    function Zy(a, b) {
        return Yy(`.${a}`, b)
    }

    function Yy(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function $y(a, b) {
        b = ry(a, b);
        a.document.body.appendChild(b.Oa);
        return b
    }

    function az(a, b) {
        const c = new U(b.K);
        Cq(b, !0, () => void c.j(!0));
        Cq(b, !1, () => {
            a.setTimeout(() => {
                b.K || c.j(!1)
            }, 700)
        });
        return xq(c)
    };

    function bz(a) {
        const b = a.wb,
            c = a.vb,
            d = a.qb,
            e = a.af,
            f = a.Kd,
            g = a.va,
            h = a.tc ? g ? 20 : 16 : 0,
            k = g ? "#5F6368" : "#444746";
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            V(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: " + V(h) + "px; transition: transform " + V(f) + "s ease-in-out;" + (c ? "left: 0; border-top-right-radius: " + V(h) + "px; border-bottom-right-radius: " + V(h) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + V(h) + "px; border-bottom-left-radius: " + V(h) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}" + (g ? "#hd-control-bar {height: 24px;}" :
                "") + ".hd-control-button {border: none; background: none; cursor: pointer;" + (g ? "" : "padding: 24px;") + "}#hd-back-arrow-button {" + (c ? "float: right;" : "float: left;") + "}#hd-close-button {" + (c ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            Kx(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Kx(k) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + Kx(d) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Kx(k) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return Gx(a)
    };

    function cz(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new dz(a, b);
        b.init();
        return b ? a.googNavStack = b : null
    }

    function ez(a, b) {
        return b ? b.googNavStackId === a.v ? b : null : null
    }

    function fz(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.J.requestAnimationFrame(() => void b[c].fi({
                isFinal: d
            }))
        }
    }

    function gz(a, b) {
        b = fb(a.j, b, (c, d) => c - d.zf.googNavStackStateId);
        if (0 <= b) return a.j.splice(b, a.j.length - b);
        b = -b - 1;
        return a.j.splice(b, a.j.length - b)
    }
    class dz extends Uo {
        constructor(a, b) {
            super();
            this.J = a;
            this.m = b;
            this.j = [];
            this.v = 1E9 * Math.random() >>> 0;
            this.B = 0;
            this.A = c => {
                (c = ez(this, c.state)) ? fz(this, gz(this, c.googNavStackStateId + .5)): fz(this, this.j.splice(0, this.j.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.v,
                    googNavStackStateId: this.B++
                },
                b = new Promise(c => {
                    this.j.push({
                        fi: c,
                        zf: a
                    })
                });
            this.m.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = gz(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].zf;
                        const e = ez(this,
                            this.m.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.m.go(-c.length);
                    fz(this, c)
                }
            }
        }
        init() {
            this.J.addEventListener("popstate", this.A)
        }
        l() {
            this.J.removeEventListener("popstate", this.A);
            super.l()
        }
    };

    function hz(a) {
        return (a = cz(a)) ? new iz(a) : null
    }

    function jz(a) {
        if (!a.j) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.v.pushEvent();
            a.j = c;
            b.then(() => {
                a.j && !a.C && (a.j = null, Hq(a.m))
            })
        }
    }
    var iz = class extends Uo {
        constructor(a) {
            super();
            this.v = a;
            this.m = new Iq;
            this.j = null
        }
    };

    function kz(a, b, c) {
        var d = c.Vd ? null : new Ry(a);
        const e = Dy(new Iy(a), c.zIndex - 1);
        b = lz(a, b, c);
        d = new mz(a, b, d, c.Xa, Sy(a), e);
        d.init();
        (c.Rc || void 0 === c.Rc) && nz(d);
        c.Ma && ((a = hz(a)) ? oz(d, a, c.se) : c.se ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function nz(a) {
        a.A = b => {
            "Escape" === b.key && a.j.K && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function oz(a, b, c) {
        Cq(a.j, !0, () => {
            try {
                jz(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Cq(a.j, !1, () => {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Fq(b.m).listen(() => void a.collapse());
        Vo(a, b)
    }

    function pz(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function qz(a) {
        a.win.setTimeout(() => {
            a.j.K && pz(a).Da.focus()
        }, 500)
    }

    function rz(a) {
        const {
            re: b,
            Qg: c
        } = pz(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function sz(a) {
        Cq(a.m, !1, () => {
            pz(a).Da.classList.add("hd-hidden")
        })
    }
    var mz = class extends Uo {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.B = b;
            this.v = c;
            this.Xa = d;
            this.j = new U(!1);
            this.m = az(a, this.j);
            Cq(this.m, !0, () => {
                Uy(e);
                Jy(f)
            });
            Cq(this.m, !1, () => {
                Wy(e);
                Ky(f)
            })
        }
        show({
            mf: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            pz(this).Da.classList.remove("hd-hidden");
            qq(this.win);
            pz(this).Da.classList.add("hd-revealed");
            this.j.j(!0);
            this.v && (Qy(this.v, pz(this).Sa.Oa), this.Xa && qz(this));
            a && Cq(this.m, !1, () => {
                this.ma()
            })
        }
        collapse() {
            pz(this).Da.classList.remove("hd-revealed");
            this.j.j(!1);
            this.v ? .Cd()
        }
        isVisible() {
            return this.m
        }
        init() {
            rz(this);
            sz(this)
        }
        l() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.B.Sa.Oa,
                b = a.parentNode;
            b && b.removeChild(a);
            this.v ? .Cd();
            super.l()
        }
    };

    function lz(a, b, c) {
        const d = $y(a, c.Wd),
            e = d.shadowRoot;
        e.appendChild(Ae(new me(a.document), Bx(bz({
            wb: c.wb,
            tc: c.tc ? ? !0,
            vb: c.vb || !1,
            qb: c.qb,
            af: c.af || "",
            zIndex: c.zIndex,
            Kd: .5,
            va: c.va || !1
        }))));
        const f = Xy("hd-drawer-container", e);
        c.Zd ? .l(g => {
            f.setAttribute("aria-label", g)
        });
        c = Xy("hd-content-container", e);
        c.appendChild(b);
        qq(a);
        return {
            Da: f,
            re: Xy("hd-modal-background", e),
            Pd: c,
            Qg: Xy("hd-close-button", e),
            Am: Xy("hd-back-arrow-button", e),
            Sa: d
        }
    };

    function tz(a) {
        const b = a.Th,
            c = a.qh,
            d = a.Kd,
            e = a.va,
            f = e ? 20 : 28;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            V(c) + "%; transition: transform " + V(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round " + V(f) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            V(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + V((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            V(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + V(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + V(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            V(f) + "px " + V(f) + "px 0 0; background: white; display: flex; height: " + V(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            uz("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + uz("ved-fixed-handle") + "</div></div></div>";
        return Gx(a)
    }

    function uz(a) {
        return Gx('<div class="ved-handle" id="' + Kx(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function vz(a) {
        return Wq(a.j).map(b => b ? wz(a, b) : 0)
    }

    function wz(a, b) {
        switch (a.direction) {
            case 0:
                return xz(-b.ug);
            case 1:
                return xz(-b.tg);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function yz(a) {
        return Yq(a.j).map(b => wz(a, b))
    }
    var zz = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function xz(a) {
        return 0 === a ? 0 : a
    };

    function W(a) {
        if (a.C) throw Error("Accessing domItems after disposal");
        return a.B
    }

    function Az(a) {
        a.win.setTimeout(() => {
            a.j.K && W(a).Da.focus()
        }, 500)
    }

    function Bz(a) {
        W(a).Da.classList.remove("ved-hidden");
        qq(a.win);
        const {
            ka: b,
            Ra: c
        } = W(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || Cz(a);
        W(a).Da.classList.add("ved-revealed");
        a.j.j(!0);
        a.m && (Qy(a.m, W(a).Sa.Oa), a.Xa && Az(a))
    }

    function Dz(a) {
        return az(a.win, a.j)
    }

    function Ez(a, b) {
        const c = new U(b());
        Fq(a.H).listen(() => void c.j(b()));
        return xq(c)
    }

    function Fz(a) {
        const {
            ka: b,
            nd: c
        } = W(a);
        return Ez(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function Gz(a) {
        const {
            ka: b,
            nd: c
        } = W(a);
        return Ez(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function Hz(a) {
        const {
            ka: b
        } = W(a);
        return Ez(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function Iz(a) {
        return yq(Fz(a), Hz(a))
    }

    function Jz(a) {
        const {
            ka: b,
            Ra: c
        } = W(a);
        return Ez(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function Cz(a) {
        W(a).Ra.classList.add("ved-snap-point-top");
        var b = Kz(a, W(a).Ra);
        W(a).ka.scrollTop = b;
        Lz(a)
    }

    function Mz(a) {
        Aq(Fz(a), !0, () => {
            const {
                tf: b,
                vc: c
            } = W(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Aq(Fz(a), !1, () => {
            const {
                tf: b,
                vc: c
            } = W(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function Nz(a) {
        const b = $q(a.win, W(a).Pd);
        cr(b).l(() => void Oz(a));
        Vo(a, b)
    }

    function Pz(a) {
        Aq(Qz(a), !0, () => {
            W(a).ag.classList.remove("ved-hidden")
        });
        Aq(Qz(a), !1, () => {
            W(a).ag.classList.add("ved-hidden")
        })
    }

    function Rz(a) {
        const b = () => void Hq(a.F),
            {
                re: c,
                Ra: d,
                oh: e
            } = W(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Cq(Sz(a), !0, b)
    }

    function Tz(a) {
        Cq(Dz(a), !1, () => {
            Cz(a);
            W(a).Da.classList.add("ved-hidden")
        })
    }

    function Lz(a) {
        Bq(a.v, !1, () => void Hq(a.H))
    }

    function Oz(a) {
        if (!a.v.K) {
            var {
                gf: b,
                Pd: c
            } = W(a), d = c.getBoundingClientRect().height;
            d = Math.max(Uz(a), d);
            a.v.j(!0);
            var e = Vz(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.v.j(!1)
                })
            })
        }
    }

    function Qz(a) {
        const {
            ka: b,
            Ra: c
        } = W(a);
        return Ez(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function Sz(a) {
        return wq(a.A.map(Cr), Wz(a))
    }

    function Wz(a) {
        return Ez(a, () => 0 === W(a).ka.scrollTop)
    }

    function Kz(a, b) {
        ({
            vc: a
        } = W(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function Xz(a, b) {
        a.A.j(!0);
        const {
            vc: c,
            ka: d
        } = W(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void Yz(a, b)
    }

    function Yz(a, b) {
        const {
            vc: c,
            ka: d
        } = W(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        W(a).ka.scrollTop = b;
        Lz(a);
        a.A.j(!1)
    }

    function Vz(a) {
        const b = W(a).ka.scrollTop;
        Xz(a, b);
        return () => void Yz(a, b)
    }

    function Uz(a) {
        const {
            ka: b,
            nd: c,
            gf: d,
            Ra: e
        } = W(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var Zz = class extends Uo {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.B = b;
            this.I = c;
            this.m = d;
            this.Xa = e;
            this.F = new Iq;
            this.H = new Iq;
            this.j = new U(!1);
            this.A = new U(!1);
            this.v = new U(!1)
        }
        init() {
            Cz(this);
            Mz(this);
            Nz(this);
            Pz(this);
            Rz(this);
            Tz(this);
            W(this).ka.addEventListener("scroll", () => void Lz(this))
        }
        l() {
            const a = this.B.Sa.Oa,
                b = a.parentNode;
            b && b.removeChild(a);
            this.m ? .Cd();
            super.l()
        }
    };

    function $z(a, b, c) {
        const d = $y(a, c.Wd),
            e = d.shadowRoot;
        e.appendChild(Ae(new me(a.document), Bx(tz({
            Th: 100 * c.rd,
            qh: 100 * c.Uc,
            zIndex: c.zIndex,
            Kd: .5,
            va: c.va || !1
        }))));
        const f = Xy("ved-drawer-container", e);
        c.Zd ? .l(g => {
            f.setAttribute("aria-label", g)
        });
        c = Xy("ved-content-container", e);
        c.appendChild(b);
        qq(a);
        return {
            Da: f,
            re: Xy("ved-modal-background", e),
            pg: Xy("ved-ui-revealer", e),
            ka: Xy("ved-scroller", e),
            vc: Xy("ved-scrolled-stack", e),
            oh: Xy("ved-fully-closed-anchor", e),
            Ra: Xy("ved-partially-extended-anchor", e),
            gf: Xy("ved-content-sizer",
                e),
            Pd: c,
            Hm: Xy("ved-moving-handle", e),
            nd: Xy("ved-moving-handle-holder", e),
            mh: Xy("ved-fixed-handle", e),
            tf: Xy("ved-fixed-handle-holder", e),
            ag: Xy("ved-over-scroll-block", e),
            Sa: d
        }
    };

    function aA(a, b, c) {
        var d = Dy(new Iy(a), c.zIndex - 1);
        b = $z(a, b, c);
        const e = c.Vd ? null : new Ry(a);
        var f = b.mh;
        f = new Zq(new Qq(a, f), new Nq(f));
        var g = f.j;
        g.A.addEventListener("mousedown", g.G);
        g.v.addEventListener("mouseup", g.C);
        g.v.addEventListener("mousemove", g.B, {
            passive: !1
        });
        g = f.l;
        g.l.addEventListener("touchstart", g.B);
        g.l.addEventListener("touchend", g.A);
        g.l.addEventListener("touchmove", g.C, {
            passive: !1
        });
        b = new Zz(a, b, new zz(f), e, c.Xa);
        b.init();
        d = new bA(a, b, Sy(a), d);
        Vo(d, b);
        d.init();
        c.Ma && ((a = hz(a)) ? cA(d,
            a, c.se) : c.se ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function cA(a, b, c) {
        Cq(a.j.j, !0, () => {
            try {
                jz(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Cq(a.j.j, !1, () => {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Fq(b.m).listen(() => void a.collapse());
        Vo(a, b)
    }

    function dA(a) {
        Cq(wq(Iz(a.j), Jz(a.j)), !0, () => {
            W(a.j).Ra.classList.remove("ved-snap-point-top")
        });
        Aq(Gz(a.j), !0, () => {
            W(a.j).ka.classList.add("ved-no-snap")
        });
        Aq(Gz(a.j), !1, () => {
            W(a.j).ka.classList.remove("ved-no-snap")
        });
        Cq(Gz(a.j), !1, () => {
            var b = a.j;
            var c = W(b).nd;
            c = Xz(b, Kz(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function eA(a) {
        const b = a.j.I;
        vz(b).listen(c => {
            c = -c;
            if (0 < c) {
                const {
                    pg: d
                } = W(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                pg: c
            } = W(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        yz(b).listen(c => {
            30 < -c && a.collapse()
        })
    }
    var bA = class extends Uo {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            Cq(Dz(b), !0, () => {
                Uy(c);
                Jy(d)
            });
            Cq(Dz(b), !1, () => {
                Wy(c);
                Ky(d)
            })
        }
        show({
            mf: a = !1
        } = {}) {
            if (this.C) throw Error("Cannot show drawer after disposal");
            Bz(this.j);
            a && Cq(Dz(this.j), !1, () => {
                this.ma()
            })
        }
        collapse() {
            var a = this.j;
            W(a).Da.classList.remove("ved-revealed");
            a.j.j(!1);
            a.m ? .Cd()
        }
        isVisible() {
            return Dz(this.j)
        }
        init() {
            Fq(this.j.F).listen(() => {
                this.collapse()
            });
            dA(this);
            eA(this);
            qq(this.win)
        }
    };

    function fA(a) {
        let b;
        b = a.v ? 50 : 150;
        var c = a.j.innerHeight;
        const d = a.I ? 20 : 2;
        c = 2 === a.A ? .j() ? (100 - d) / 100 * c : .2 * c;
        return {
            Fh: a.j.innerWidth - 16 - b,
            oi: c,
            width: b,
            height: 50
        }
    }

    function gA(a) {
        const b = a.A ? .l() || void 0,
            c = a.A ? .m() || void 0;
        let d, e;
        2 === a.A ? .j() ? e = a.I ? 20 : 2 : d = 20;
        return {
            backgroundColor: b,
            yb: c,
            Wf: d,
            Vf: e,
            ii: a.ua
        }
    }

    function hA(a) {
        if (a = a.l.contentDocument ? .getElementsByTagName("input")[0]) return a;
        console.warn("searchbox missing");
        return null
    }

    function iA(a) {
        const b = a.C.shadowRoot.querySelectorAll(".autoprose-search-button")[0];
        return b ? b : a.C.shadowRoot.querySelectorAll(".autoprose-searchbox")[0]
    }

    function jA(a) {
        const b = new ResizeObserver(async d => {
                a.l.height = 0;
                await new Promise(e => a.j.requestAnimationFrame(e));
                a.l.height = d[0].target.scrollHeight
            }),
            c = () => {
                const d = a.l.contentDocument ? .documentElement;
                d ? b.observe(d) : (console.warn("iframe body missing"), setTimeout(c, 1E3))
            };
        c()
    }

    function kA(a) {
        a.G.isVisible() && hA(a) ? .focus({
            preventScroll: !0
        })
    }

    function lA(a) {
        a.v && Cq(a.G.isVisible(), !1, () => {
            a.l.contentDocument.activeElement.blur()
        })
    }
    var nA = class {
        constructor(a, b, c, d, e, f, g) {
            this.j = a;
            this.v = (this.ba = g) ? 500 > this.j.innerWidth : 2 === Bf();
            this.I = !!e ? .G();
            this.B = !!e ? .F();
            this.H = !1;
            this.Z = c;
            this.C = ry(this.j);
            this.m = d;
            this.pa = e ? .j() ? .j() || "en";
            this.Ba = e ? .j() ? .l() || "Search results from ${website}";
            this.ua = e ? .j() ? .m() || "Search";
            this.O = b.replace("ca", "partner");
            this.L = new me(window.document);
            this.l = this.L.createElement("IFRAME");
            this.F = new my(this.l, e ? .A() || "", "auto-prose", this.O, "AutoProseVariant", a.location, this.pa, this.Ba, f, !!e ? .C(), this.B, !0);
            a = this.l;
            this.G = this.v ? aA(this.j, a, {
                rd: .95,
                Uc: .95,
                zIndex: 2147483645,
                Ma: !0,
                Rc: !0,
                Xa: !1,
                va: !0
            }) : kz(this.j, a, {
                wb: "min(65vw, 768px)",
                qb: "",
                vb: !1,
                zIndex: 2147483645,
                Ma: !0,
                Rc: !0,
                Xa: !1,
                tc: !1,
                va: !0
            });
            this.A = this.v ? e ? .v() : e ? .m()
        }
        init() {
            var a = fA(this);
            a = wy(new zy(this.j), a);
            a ? .className.startsWith("adsbygoogle") ? tx(this.m, "pfeaa") : a ? tx(this.m, "pfeofe") : (this.Z.appendChild(this.C.Oa), this.C.shadowRoot.appendChild(te(document, (() => {
                if (this.v) {
                    var b = gA(this),
                        c = {
                            backgroundColor: b.backgroundColor,
                            yb: b.yb,
                            offsetTop: b.Wf,
                            te: b.Vf,
                            zIndex: 2147483643
                        },
                        d = c.Oh,
                        e = c.te;
                    b = c.backgroundColor;
                    var f = c.yb;
                    d = void 0 === d ? 16 : d;
                    var g = c.offsetTop;
                    e = void 0 === e ? 2 : e;
                    f = void 0 === f ? "white" : f;
                    c = c.zIndex;
                    b = "<style>.autoprose-search-button {background: " + V(void 0 === b ? "#000" : b) + "; border-radius: " + V(24) + "px;" + (g ? "top: " + V(g) + "%;" : "bottom: " + V(e) + "%;") + "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " + V(48) + "px; position: fixed; right: " + V(d) + "px; width: 48px; z-index: " + V(c) + ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' +
                        by(f) + "</div></button>";
                    b = Gx(b);
                    return Bx(b)
                }
                b = gA(this);
                c = {
                    ji: b.ii,
                    backgroundColor: b.backgroundColor,
                    yb: b.yb,
                    offsetTop: b.Wf,
                    te: b.Vf,
                    zIndex: 2147483643
                };
                d = c.Oh;
                e = c.te;
                b = c.backgroundColor;
                f = c.yb;
                d = void 0 === d ? 16 : d;
                g = c.offsetTop;
                e = void 0 === e ? 2 : e;
                const h = c.ji;
                f = void 0 === f ? "white" : f;
                c = c.zIndex;
                b = "<style>.autoprose-search-button {align-items: center; background: " + V(void 0 === b ? "#000" : b) + "; border-radius: " + V(24) + "px; border-width: 0;" + (g ? "top: " + V(g) + "%;" : "bottom: " + V(e) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " +
                    V(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + V(d) + "px; z-index: " + V(c) + ";}.autoprose-search-text {color: " + V(f) + '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + by(f) + '</div><div class="autoprose-search-text">' + Fx(h) + "</div></button>";
                b = Gx(b);
                return Bx(b)
            })())), this.B || (Tt(1139, () => this.F.init(), this.j), this.H = !0), Jb(this.j.top, "message", b => {
                mA(b) && (b = hA(this), ly(this.F, b))
            }), (a = iA(this)) ? (sx(this.m, "place", {
                sts: "ok"
            }), this.B && Jb(this.j.top, "message", b => {
                mA(b) && (jA(this), kA(this))
            }), Jb(a, "click", () => {
                this.B && !this.H && (Tt(1139, () => this.F.init(), this.j), this.H = !0);
                sx(this.m, "click", {});
                jA(this);
                this.G.show();
                kA(this)
            })) : tx(this.m, "pfmsb"), lA(this))
        }
    };

    function mA(a) {
        return a.data && "init" === a.data.action && "AutoProseVariant" === a.data.adChannel
    };

    function oA(a) {
        const b = A(a.j, ys, 31) ? .l() ? .j() || 0,
            c = a.l.document,
            d = c.createElement("div");
        d.classList.add("auto-prose-wrapper");
        c.body.appendChild(d);
        Tt(1138, () => (new nA(a.l, a.m, d, a.v, A(a.j, ys, 31), b, A(a.j, ls, 25) ? .j() || !1)).init(), a.l)
    }
    async function pA(a) {
        await new Promise(b => {
            setTimeout(() => {
                b(oA(a))
            })
        })
    }
    var qA = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.j = c;
            this.v = new ux(a, b, A(this.j, ys, 31) || new ys);
            this.m = d
        }
    };

    function rA(a, b) {
        qu(a.l, ju, { ...b,
            evt: "place",
            vh: S(a.win),
            eid: a.j.j() ? .j() || 0,
            hl: a.j.l() ? .j() || ""
        })
    }

    function sA(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Km(c.stack, "") || "");
        rA(a, b)
    }
    var tA = class {
        constructor(a, b, c) {
            this.win = a;
            this.l = b;
            this.j = c
        }
    };
    var uA = class {
        constructor(a) {
            this.j = a
        }
        Ea(a) {
            const b = a.document.createElement("div");
            v(b, oy(a));
            v(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            v(c, oy(a));
            v(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var vA = (a, b) => {
        const c = A(b, Es, 6);
        return c ? Xw(c.j(), a, !!Vs(b) ? .C() ? .j()).map(d => d.l()) : []
    };
    var wA = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function xA(a) {
        (function(d, e) {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = 1 * new Date
        })(a.win, "_googCsa");
        const b = a.A.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.v,
                styleId: "5134551505",
                hl: a.H,
                fexp: a.F,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.ba.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.C
            };
        a.I && (c.adLoadedCallback = a.Z.bind(a));
        a.win._googCsa("relatedsearch",
            c, b)
    }

    function yA(a) {
        a.win.addEventListener("message", b => {
            "https://www.gstatic.com" === b.origin && "resize" === b.data.action && (a.j.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var zA = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.win = a;
            this.A = b;
            this.H = d ? .j() || "en";
            this.O = d ? .l() || "Search results from ${website}";
            this.G = e;
            this.F = f;
            this.I = R(Lk);
            this.m = h;
            this.v = c.replace("ca", "partner");
            this.B = new me(a.document);
            this.j = this.B.createElement("IFRAME");
            this.C = g.l ? g.j : "9d449ff4a772956c6";
            this.l = new my(this.j, this.C, "auto-rs-prose", this.v, "AutoRsVariant", a.location, this.H, this.O, this.F, this.m);
            a = this.j;
            this.L = 2 === Bf() ? aA(this.win, a, {
                rd: .95,
                Uc: .95,
                zIndex: 2147483645,
                Ma: !0,
                va: !0
            }) : kz(this.win,
                a, {
                    wb: "min(65vw, 768px)",
                    qb: "",
                    vb: !1,
                    zIndex: 2147483645,
                    Ma: !0,
                    tc: !1,
                    va: !0
                })
        }
        init() {
            0 !== this.A.length && (this.I || Tt(1075, () => this.l.init(), this.win), Tt(1076, () => {
                const a = this.B.createElement("SCRIPT");
                Ze(a, Cj `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), xA(this), rA(this.G, {
                sts: "ok"
            }), this.m && yA(this))
        }
        Z(a, b) {
            b ? Tt(1075, () => this.l.init(), this.win) : sA(this.G, "pfns")
        }
        ba(a, b) {
            ky(this.l, a, b);
            (() => {
                if (!this.m) {
                    const c = new ResizeObserver(async e => {
                            this.j.height =
                                0;
                            await new Promise(f => this.win.requestAnimationFrame(f));
                            this.j.height = e[0].target.scrollHeight
                        }),
                        d = () => {
                            const e = this.j.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.L.show()
            })()
        }
    };

    function AA(a) {
        const b = Ju(a.m.ca),
            c = a.A.Ea(a.B, () => a.remove());
        b.appendChild(c);
        a.v && (b.className = a.v);
        return {
            eh: b,
            Ug: c
        }
    }
    class BA {
        constructor(a, b, c, d) {
            this.B = a;
            this.m = b;
            this.A = c;
            this.v = d || null;
            this.j = null;
            this.l = new U(null)
        }
        init() {
            const a = AA(this);
            this.j = a.eh;
            Ru(this.m, this.j);
            this.l.j(a.Ug)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            this.l.j(null)
        }
        C() {
            return this.l
        }
    };

    function CA(a) {
        if ((!a.C || !DA(a.l, a.X, a.m)) && EA(a.j ? .l(), a.m)) {
            var b = vA(a.v, a.l);
            b = FA(a.v, b, a.X, a.C, a.m);
            var c = GA(b, a.v),
                d = a.j ? .j() ? .j() || a.j ? .m() || 0,
                e = HA(a.j),
                f = !!a.j ? .A();
            A(a.l, ls, 25) ? .j() || Tt(1074, () => (new zA(a.v, c, a.G, a.j ? .l(), a.m, d, e, f)).init(), a.v)
        }
    }
    var IA = class {
        constructor(a, b, c, d, e, f) {
            this.v = a;
            this.l = c;
            this.m = new tA(a, b, Vs(this.l) || new As);
            this.j = Vs(this.l);
            this.G = d;
            this.X = e;
            this.C = f
        }
        async B() {
            await new Promise(a => {
                setTimeout(() => {
                    a(this.A())
                })
            })
        }
        A() {
            if (R(Nk)) try {
                CA(this)
            } catch (a) {
                sA(this.m, "pfere", a)
            } else CA(this)
        }
    };

    function DA(a, b, c) {
        a = Vs(a) ? .j() ? .j() || Vs(a) ? .m() || 0;
        const d = gp(Sk);
        return d && d.includes(a.toString()) ? !1 : 0 == (b ? Ch(b, 2, Lg) : []).length ? (sA(c, "pfeu"), !0) : !1
    }

    function EA(a, b) {
        const c = gp(Qk);
        return c && 0 != c.length && !c.includes((a ? .j() || "").toString()) ? (sA(b, "pflna"), !1) : !0
    }

    function JA(a, b, c, d) {
        c = c ? B(c, is, 5) : [];
        const e = Jw(a.document, c),
            f = Kw();
        b = b.filter(g => e(g));
        if (0 == b.length) return sA(d, "pfaz"), [];
        b = b.filter(g => f(g));
        return 0 == b.length ? (sA(d, "pfet"), []) : b
    }

    function FA(a, b, c, d, e) {
        b = iv(b, a).sort(KA);
        return 0 == b.length ? (sA(e, "pfno"), []) : d && (b = JA(a, b, c, e), 0 == b.length) ? [] : [b[Math.floor(b.length / 2)]]
    }

    function KA(a, b) {
        return a.aa.j - b.aa.j
    }

    function GA(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d],
                f = "autors-container-" + d,
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new BA(b, e, new uA(g))).init();
            c.push(f)
        }
        return c
    }

    function HA(a) {
        return new wA(a ? .B() || !1, a ? .v() || "")
    };

    function LA(a, b) {
        qu(a.l, ju, { ...b,
            evt: "place",
            vh: S(a.win),
            eid: a.j.j() ? .j() || 0,
            hl: a.j.l() ? .j() || ""
        })
    }

    function MA(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Km(c.stack, "") || "");
        LA(a, b)
    }
    var NA = class {
        constructor(a, b, c) {
            this.win = a;
            this.l = b;
            this.j = c
        }
    };
    var OA = class {
        constructor(a) {
            this.j = a
        }
        Ea(a) {
            const b = a.document.createElement("div");
            v(b, oy(a));
            v(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            v(c, oy(a));
            v(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function PA(a, b) {
        const c = A(b, Es, 6);
        return c ? Xw(c.j(), a, !!Vs(b) ? .C() ? .j()).map(d => d.l()) : []
    };

    function QA(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.A.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.v,
                styleId: "5134551505",
                hl: a.H,
                fexp: a.F,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.ba.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.C
            };
        a.I && (c.adLoadedCallback = a.L.bind(a));
        a.win._googCsa("relatedsearch",
            c, b)
    }

    function RA(a) {
        a.win.addEventListener("message", b => {
            "https://www.gstatic.com" === b.origin && "resize" === b.data.action && (a.j.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var SA = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.win = a;
            this.A = b;
            this.G = e;
            this.F = f;
            this.m = h;
            this.H = d ? .j() || "en";
            this.Z = d ? .l() || "Search results from ${website}";
            this.I = R(Lk);
            this.v = c.replace("ca", "partner");
            this.B = new me(a.document);
            this.j = this.B.createElement("IFRAME");
            this.C = g.l ? g.j : "9d449ff4a772956c6";
            this.l = new my(this.j, this.C, "auto-rs-prose", this.v, "AutoRsVariant", a.location, this.H, this.Z, this.F, this.m);
            a = this.j;
            this.O = 2 === Bf() ? aA(this.win, a, {
                rd: .95,
                Uc: .95,
                zIndex: 2147483645,
                Ma: !0,
                va: !0
            }) : kz(this.win,
                a, {
                    wb: "min(65vw, 768px)",
                    qb: "",
                    vb: !1,
                    zIndex: 2147483645,
                    Ma: !0,
                    tc: !1,
                    va: !0
                })
        }
        init() {
            0 !== this.A.length && (this.I || Tt(1075, () => {
                this.l.init()
            }, this.win), Tt(1076, () => {
                const a = this.B.createElement("SCRIPT");
                Ze(a, Cj `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), QA(this), LA(this.G, {
                sts: "ok"
            }), this.m && RA(this))
        }
        L(a, b) {
            b ? Tt(1075, () => {
                this.l.init()
            }, this.win) : MA(this.G, "pfns")
        }
        ba(a, b) {
            ky(this.l, a, b);
            (() => {
                if (!this.m) {
                    const c = new ResizeObserver(async e => {
                            this.j.height = "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.j.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.j.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.O.show()
            })()
        }
    };
    var TA = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };

    function UA(a) {
        if ((!a.m || !VA(a.config, a.X, a.l)) && WA(a.j ? .l(), a.l)) {
            var b = PA(a.win, a.config);
            b = XA(a.win, b, a.X, a.m, a.l);
            var c = YA(b, a.win),
                d = a.j ? .j() ? .j() || a.j ? .m() || 0,
                e = ZA(a.j),
                f = !!a.j ? .A();
            A(a.config, ls, 25) ? .j() || Tt(1074, () => {
                (new SA(a.win, c, a.webPropertyCode, a.j ? .l(), a.l, d, e, f)).init()
            }, a.win)
        }
    }
    var $A = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.X = e;
            this.m = f;
            this.l = new NA(a, b, Vs(this.config) || new As);
            this.j = Vs(this.config)
        }
        async B() {
            await new Promise(a => {
                setTimeout(() => {
                    this.A();
                    a()
                })
            })
        }
        A() {
            if (R(Nk)) try {
                UA(this)
            } catch (a) {
                MA(this.l, "pfere", a)
            } else UA(this)
        }
    };

    function VA(a, b, c) {
        a = Vs(a) ? .j() ? .j() || Vs(a) ? .m() || 0;
        const d = gp(Sk);
        return d && d.includes(a.toString()) ? !1 : 0 === (b ? Ch(b, 2, Lg) : []).length ? (MA(c, "pfeu"), !0) : !1
    }

    function WA(a, b) {
        const c = gp(Qk);
        return c && 0 !== c.length && !c.includes((a ? .j() || "").toString()) ? (MA(b, "pflna"), !1) : !0
    }

    function aB(a, b, c, d) {
        c = c ? B(c, is, 5) : [];
        const e = Jw(a.document, c),
            f = Kw();
        b = b.filter(g => e(g));
        if (0 === b.length) return MA(d, "pfaz"), [];
        b = b.filter(g => f(g));
        return 0 === b.length ? (MA(d, "pfet"), []) : b
    }

    function XA(a, b, c, d, e) {
        b = iv(b, a).sort(bB);
        return 0 === b.length ? (MA(e, "pfno"), []) : d && (b = aB(a, b, c, e), 0 === b.length) ? [] : [b[Math.floor(b.length / 2)]]
    }

    function bB(a, b) {
        return a.aa.j - b.aa.j
    }

    function YA(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d],
                f = "autors-container-" + d.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new BA(b, e, new OA(g))).init();
            c.push(f)
        }
        return c
    }

    function ZA(a) {
        return new TA(a ? .B() || !1, a ? .v() || "")
    };
    var cB = {
            vj: "google_ads_preview",
            bk: "google_mc_lab",
            sk: "google_anchor_debug",
            rk: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Ok: "google_scr_debug",
            Qk: "google_ia_debug_allow_onclick",
            ul: "googleads",
            wg: "google_pedestal_debug",
            Ml: "google_responsive_slot_preview",
            Ll: "google_responsive_dummy_ad",
            lj: "google_audio_sense",
            oj: "google_auto_gallery",
            qj: "google_auto_storify_swipeable",
            pj: "google_auto_storify_scrollable",
            nj: "google_games_single_game",
            mj: "google_games_catalog"
        },
        dB = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var eB = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Ql: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function fB(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = gB(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function gB(a) {
        let b = "";
        kf(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function hB() {
        var a = t.location;
        let b = !1;
        kf(cB, c => {
            fB(a, c) && (b = !0)
        });
        return b
    }

    function iB(a, b) {
        switch (a) {
            case 1:
                return fB(b, "google_ia_debug");
            case 2:
                return fB(b, "google_bottom_anchor_debug");
            case 3:
                return fB(b, "google_anchor_debug") || fB(b, "googleads");
            case 4:
                return fB(b, "google_scr_debug")
        }
    };
    var jB = (a, b, c) => {
        const d = [];
        A(a, Ls, 18) && d.push(2);
        b.X && d.push(0);
        Vs(a) && 1 == K(Vs(a), 1) && d.push(1);
        A(a, ys, 31) && 1 == K(A(a, ys, 31), 1) && d.push(5);
        (A(a, ts, 27) && 1 == K(A(a, ts, 27), 1) || fB(c, "google_audio_sense")) && d.push(3);
        A(a, us, 32) && d.push(6);
        return d
    };

    function kB(a, b) {
        const c = le(a).createElement("IMG");
        lB(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        v(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function mB(a, b) {
        const c = b.document.createElement("button");
        lB(b, c);
        v(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.m();
            d.stopPropagation()
        });
        return c
    }

    function nB(a, b, c) {
        const d = le(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.v);
        lB(b, d);
        v(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function oB(a) {
        const b = a.document.createElement("ins");
        lB(a, b);
        v(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class pB {
        constructor(a, b, c) {
            this.l = a;
            this.v = b;
            this.m = c;
            this.j = new U(!1)
        }
        Ea(a, b, c, d) {
            const e = kB(a, d),
                f = kB(a),
                g = mB(this, a),
                h = nB(this, a, c);
            a = oB(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.listen(k => {
                v(e, {
                    display: k ? "none" : "inline"
                });
                v(f, {
                    display: k ? "inline" : "none"
                });
                k ? (v(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), v(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (v(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), v(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        uf() {
            return 40
        }
        Yf() {
            this.j.j(!1);
            return 0
        }
        Zf() {
            this.j.j(!0)
        }
    }

    function lB(a, b) {
        v(b, oy(a));
        v(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function qB(a, b) {
        const c = b.document.createElement("button");
        rB(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        v(c, b);
        c.addEventListener("click", d => {
            a.C();
            d.stopPropagation()
        });
        return c
    }

    function sB(a, b, c, d) {
        const e = b.document.createElement("div");
        v(e, oy(b));
        v(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        v(f, oy(b));
        v(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (v(e, {
                    "flex-direction": "row"
                }), a.j && v(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), v(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                v(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (v(e, {
                border: "0",
                "flex-direction": "column"
            }), v(f, {
                "margin-left": "0",
                "text-align": "center"
            }), v(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && v(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function rB(a, b, c) {
        v(c, oy(b));
        v(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.B,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class tB {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.A = a;
            this.C = b;
            this.G = c;
            this.l = d;
            this.B = e;
            this.v = f;
            this.j = g;
            this.m = h
        }
        Ea(a) {
            const b = a.document.createElement("div");
            rB(this, a, b);
            v(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.v) {
                var c = le(a).createElement("IMG");
                c.src = this.v;
                rB(this, a, c);
                v(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            rB(this, a, c);
            v(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = qB(this, a);
            c.appendChild(b);
            return this.m ? sB(this, a, c, this.m) : c
        }
    };

    function uB(a, b) {
        b = b.filter(c => 5 === A(c, Or, 4) ? .j() && 1 === z(c, 8));
        b = Au(b, a);
        a = iv(b, a);
        a.sort((c, d) => d.aa.j - c.aa.j);
        return a[0] || null
    };

    function vB({
        J: a,
        qe: b,
        me: c,
        bf: d,
        na: e,
        Pg: f
    }) {
        let g = 0;
        try {
            g |= Up(a);
            const h = Math.min(a.screen.width || 0, a.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            g |= a.navigator && wB(a.navigator.userAgent) ? 1048576 : 0;
            g = b ? g | (a.innerHeight >= b ? 0 : 1024) : g | (a.innerHeight >= a.innerWidth ? 0 : 8);
            g |= Vp(a, c);
            g |= Xp(a)
        } catch {
            g |= 32
        }
        switch (d) {
            case 2:
                xB(a, e) && (g |= 16777216);
                break;
            case 1:
                yB(a, e) && (g |= 16777216)
        }
        f && zB(a, e) && (g |= 16777216);
        return g
    }

    function wB(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var xB = (a, b = null) => {
            const c = sy({
                Nb: 0,
                tb: a.innerWidth,
                Fb: 3,
                Ob: 0,
                ub: Math.min(Math.round(a.innerWidth / 320 * 50), AB) + 15,
                Gb: 3
            });
            return null != uy(BB(a, b), c)
        },
        yB = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), AB) + 15,
                f = sy({
                    Nb: 0,
                    tb: c,
                    Fb: 3,
                    Ob: d - e,
                    ub: d,
                    Gb: 3
                });
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return null != uy(BB(a, b), f)
        };

    function zB(a, b = null) {
        return null != CB(a, b)
    }

    function CB(a, b = null) {
        var c = a.innerHeight;
        c = sy({
            Nb: 0,
            tb: a.innerWidth,
            Fb: 10,
            Ob: c - (R(yl) ? 66 : 45),
            ub: c,
            Gb: 10
        });
        return uy(BB(a, b), c)
    }

    function DB(a, b) {
        const c = a.innerWidth,
            d = a.innerHeight;
        let e = d;
        for (; e > b;) {
            var f = sy({
                Nb: 0,
                tb: c,
                Fb: 9,
                Ob: e - b,
                ub: e,
                Gb: 9
            });
            f = uy(BB(a), f);
            if (!f) return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }

    function BB(a, b = null) {
        return new zy(a, {
            sf: EB(a, b)
        })
    }

    function EB(a, b = null) {
        if (b) return (c, d, e) => {
            Lm(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const AB = 90 * 1.38;

    function FB(a) {
        a = new GB(a);
        a.init();
        return a
    }

    function HB(a) {
        if (a.m.K) {
            const b = dq(a.win);
            if (b > a.j + 100 || b < a.j - 100) a.m.j(!1), a.j = Yp(a.win)
        }
        a.v && a.win.clearTimeout(a.v);
        a.v = a.win.setTimeout(() => void IB(a), 200)
    }

    function IB(a) {
        var b = Yp(a.win);
        a.j && a.j > b && (a.j = b);
        b = dq(a.win);
        b >= a.j - 100 && (a.j = Math.max(a.j, b), a.m.j(!0))
    }
    var GB = class extends Uo {
        constructor(a) {
            super();
            this.win = a;
            this.m = new U(!1);
            this.j = 0;
            this.v = null;
            this.A = () => void HB(this)
        }
        init() {
            this.win.addEventListener("scroll", this.A);
            this.j = Yp(this.win);
            IB(this)
        }
        l() {
            this.win.removeEventListener("scroll", this.A);
            this.m.j(!1);
            super.l()
        }
    };

    function JB(a) {
        a.j || (a.j = KB(a));
        v(a.j, {
            display: "block"
        });
        a.v.Zf();
        a.l.j(a.A)
    }

    function LB(a) {
        const b = a.v.Yf();
        switch (b) {
            case 0:
                a.l.j(a.A);
                break;
            case 1:
                a.j && (v(a.j, {
                    display: "none"
                }), a.l.j(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function KB(a) {
        var b = DB(a.m, a.v.uf() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.m.document.createElement("div");
        v(c, oy(a.m));
        v(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.A = a.v.Ea(a.m, () => a.remove(), () => {
            a.B.ma();
            LB(a)
        }, () => {
            a.B.ma();
            JB(a)
        });
        c.appendChild(a.A);
        a.G && (c.className = a.G);
        a.m.document.body.appendChild(c);
        return c
    }
    class MB {
        constructor(a, b, c) {
            this.m = a;
            this.v = b;
            this.A = null;
            this.l = new U(null);
            this.G = c || null;
            this.B = FB(a);
            this.j = null
        }
        init() {
            const a = xq(this.B.m);
            Aq(a, !0, () => void JB(this));
            Cq(a, !1, () => void LB(this))
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            this.B.ma();
            this.l.j(null)
        }
        C() {
            return this.l
        }
    };

    function NB(a) {
        a.B.j(0);
        null != a.m && (a.m.remove(), a.m = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function OB(a) {
        a.l = new MB(a.A, a.H, a.G);
        a.l.init();
        Dq(a.v, a.l.C());
        a.B.j(2)
    }
    class PB {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.F = b;
            this.I = c;
            this.H = d;
            this.G = e;
            this.B = new U(0);
            this.v = new U(null);
            this.l = this.m = this.j = null
        }
        init() {
            this.F ? (this.m = new BA(this.A, this.F, this.I, this.G), this.m.init(), Dq(this.v, this.m.C()), this.B.j(1), null == this.j && (this.j = new mr(this.A), this.j.init(2E3)), kr(this.j, () => {
                NB(this);
                OB(this)
            })) : OB(this)
        }
        remove() {
            NB(this);
            this.j && (this.j.ma(), this.j = null)
        }
        C() {
            return this.v
        }
    };
    var QB = (a, b, c, d, e) => {
        a = new PB(a, uB(a, e), new tB(b, d, "#FFF", "#4A4A4A", "normal"), new pB(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var RB = a => a.googlefc = a.googlefc || {},
        SB = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function TB(a) {
        var b = SB(a.j);
        if (UB(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = QB(a.j, c, b, () => VB(a), a.v))
        }
    }

    function WB(a) {
        const b = RB(a.j);
        SB(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => TB(a)
        })
    }

    function VB(a) {
        Jy(a.m);
        SB(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            Ky(a.m)
        })
    }
    class XB {
        constructor(a, b, c) {
            this.j = a;
            this.m = Dy(b, 2147483643);
            this.v = c;
            this.l = null
        }
    }

    function UB(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function YB(a) {
        const b = a.document.createElement("ins");
        ZB(a, b);
        v(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function $B(a, b, c, d) {
        const e = le(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        ZB(a, e);
        v(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function aC(a, b) {
        const c = b.document.createElement("span");
        ZB(b, c);
        v(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.v));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function bC(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.m));
        v(c, oy(b));
        v(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function cC(a) {
        const b = a.document.createElement("div");
        v(b, oy(a));
        v(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class dC {
        constructor(a, b, c, d) {
            this.v = a;
            this.A = b;
            this.m = c;
            this.l = d;
            this.j = new U(!1)
        }
        Ea(a, b, c, d) {
            c = YB(a);
            const e = $B(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = $B(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = aC(this, a),
                h = $B(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            v(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = bC(this, a);
            a = cC(a);
            a.appendChild(c);
            a.appendChild(k);
            this.j.listen(l => {
                v(e, {
                    display: l ? "none" : "inline"
                });
                v(f, {
                    display: l ? "inline" : "none"
                });
                l ? (v(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), v(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), v(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (v(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), v(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), v(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        uf() {
            return 71
        }
        Yf() {
            this.j.j(!1);
            return 0
        }
        Zf() {
            this.j.j(!0)
        }
    }

    function ZB(a, b) {
        v(b, oy(a));
        v(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };
    var eC = class extends O {
        constructor() {
            super()
        }
    };

    function fC(a) {
        gC(a.l, b => {
            var c = a.v,
                d = b.gi,
                e = b.Tg,
                f = b.Dg;
            b = b.showRevocationMessage;
            (new PB(c, uB(c, a.m), new tB(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new dC(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            Ky(a.j)
        })
    }
    class hC {
        constructor(a, b, c, d) {
            this.v = a;
            this.j = Dy(b, 2147483643);
            this.m = c;
            this.l = d
        }
    };
    var iC = a => {
        if (!a || null == z(a, 1)) return !1;
        a = z(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function jC(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            iC(a.j) && (b = new hC(a.l, a.A, a.v || B(a.j, Ks, 4), a.m), Jy(b.j), fC(b), b = !0);
            var c;
            a: if ((c = a.j) && null != z(c, 3)) switch (c = z(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (WB(new XB(a.l, a.A, a.v || B(a.j, Ks, 4))), b = !0);
            c = (c = a.j) ? !0 === Bh(c, 5) : !1;
            var d = a.j;
            d = (d ? !0 === Bh(d, 6) : !1) || R(cl);
            c && (d || R(ll)) && (b = !0);
            b && (b = new eC, b = Xh(b, 1, c && d), a.m.start(b), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class kC {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.m = b;
            this.j = c;
            this.A = d;
            this.v = e || null
        }
    };
    var lC = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = gf("SCRIPT", g);
                h.async = !0;
                Ze(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? lC(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        mC = (a, b, c = () => {}, d = () => {}) => {
            lC(le(a), b, 0, !1, c, d)
        };
    var nC = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Fc(Mp).map(a => Number(a));
    Fc(Np).map(a => Number(a));
    const oC = t.URL;
    var pC = a => {
            var b = (new oC(a.location.href)).searchParams;
            a = b.get("fcconsent");
            b = b.get("fc");
            return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
        },
        qC = a => {
            a = (new oC(a.location.href)).searchParams.get("fctype");
            return -1 !== ["ab", "gdpr", "consent", "ccpa", "monetization"].indexOf(a) ? a : null
        };
    var rC = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = gf("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var sC = ki(class extends O {});

    function tC(a) {
        if (a.j) return a.j;
        a.I && a.I(a.v) ? a.j = a.v : a.j = Af(a.v, a.L);
        return a.j ? ? null
    }

    function uC(a) {
        a.B || (a.B = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.we,
                        e = a.F.get(d);
                    e && (e.Wh || a.F.delete(d), e.bb ? .(e.Yg, c.payload))
                }
            } catch (f) {}
        }, Jb(a.v, "message", a.B))
    }

    function vC(a, b, c) {
        if (tC(a))
            if (a.j === a.v)(b = a.A.get(b)) && b(a.j, c);
            else {
                var d = a.m.get(b);
                if (d && d.Bb) {
                    uC(a);
                    var e = ++a.O;
                    a.F.set(e, {
                        bb: d.bb,
                        Yg: d.jc(c),
                        Wh: "addEventListener" === b
                    });
                    a.j.postMessage(d.Bb(c, e), "*")
                }
            }
    }
    var wC = class extends Uo {
        constructor(a, b, c, d) {
            super();
            this.L = b;
            this.I = c;
            this.H = d;
            this.A = new Map;
            this.O = 0;
            this.m = new Map;
            this.F = new Map;
            this.B = void 0;
            this.v = a
        }
        l() {
            delete this.j;
            this.A.clear();
            this.m.clear();
            this.F.clear();
            this.B && (Kb(this.v, "message", this.B), delete this.B);
            delete this.v;
            delete this.H;
            super.l()
        }
    };
    const xC = (a, b) => {
            const c = {
                cb: d => {
                    d = sC(d);
                    b.callback({
                        consentData: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        yC = {
            jc: a => a.callback,
            Bb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            bb: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function zC(a) {
        a = sC(a.data.__fciReturn);
        return {
            payload: a,
            we: Uh(Sh(a, 1))
        }
    }

    function AC(a) {
        a.m || (a.j = !!tC(a.caller), a.m = !0);
        return a.j
    }

    function BC(a) {
        return new Promise(b => {
            AC(a) && vC(a.caller, "getDataWithCallback", {
                command: "loaded",
                callback: c => {
                    b(c.consentData)
                }
            })
        })
    }

    function CC(a, b) {
        AC(a) && vC(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: ei(b),
            callback: () => {}
        })
    }
    var DC = class extends Uo {
        constructor(a) {
            super();
            this.j = this.m = !1;
            this.caller = new wC(a, "googlefcPresent", void 0, zC);
            this.caller.A.set("getDataWithCallback", xC);
            this.caller.m.set("getDataWithCallback", yC)
        }
        l() {
            this.caller.ma();
            super.l()
        }
    };
    const EC = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function FC(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = EC(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (kp({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function GC(a) {
        return FC(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? HC(a, "1") : !0 : !1
    }

    function HC(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function IC(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => HC(a, c))
    }

    function JC(a) {
        if (a.j) return a.j;
        a.j = Af(a.m, "__tcfapiLocator");
        return a.j
    }

    function KC(a) {
        return "function" === typeof a.m.__tcfapi || null != JC(a)
    }

    function LC(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
        else if (JC(a)) {
            MC(a);
            const e = ++a.H;
            a.B[e] = c;
            a.j && a.j.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function NC(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = zb(() => b(c));
        let e = 0; - 1 !== a.F && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        LC(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = EC(c), c.internalBlockOnErrors = a.A, FC(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), LC(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function MC(a) {
        a.v || (a.v = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Jb(a.m, "message", a.v))
    }
    class OC extends Uo {
        constructor(a, b = {}) {
            super();
            this.m = a;
            this.j = null;
            this.B = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Jg ? ? !1;
            this.v = null
        }
        l() {
            this.B = {};
            this.v && (Kb(this.m, "message", this.v), delete this.v);
            delete this.B;
            delete this.m;
            delete this.j;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = zb(() => a(b));
            let d = 0; - 1 !== this.F && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = EC(b),
                    b.internalBlockOnErrors = this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                LC(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && LC(this, "removeEventListener", null, a.listenerId)
        }
    };

    function gC(a, b, c) {
        const d = nC(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = nC(a.j),
                    f = new OC(a.j);
                KC(f) && NC(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        gi: e.getDefaultConsentRevocationText(),
                        Tg: e.getDefaultConsentRevocationCloseText(),
                        Dg: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function PC(a, b) {
        var c = pC(a.j);
        const d = qC(a.j);
        c = QC(a.l, {
            fc: c,
            fctype: d
        });
        mC(a.j, c, () => {}, () => {});
        b && CC(new DC(a.j), b)
    }

    function QC(a, b) {
        b = { ...b,
            ers: 2
        };
        return Tc(Yc(rb("https://fundingchoicesmessages.google.com/i/%{id}"), {
            id: a
        }), b)
    }
    class RC {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start(a) {
            if (this.j === this.j.top) try {
                rC(this.j, "googlefcPresent"), PC(this, a)
            } catch (b) {}
        }
    };

    function SC(a, b, c) {
        return (a = a.j()) && Bh(a, 11) ? c.map(d => d.l()) : c.map(d => d.A(b))
    };
    var TC = class extends O {
        getHeight() {
            return Vh(this, 2)
        }
    };

    function UC(a, b) {
        return Zh(a, 1, b)
    }

    function VC(a, b) {
        return Oh(a, 2, b)
    }
    var WC = class extends O {};
    WC.M = [2];
    var XC = class extends O {
        constructor() {
            super()
        }
    };
    XC.M = [5];
    var YC = class extends O {
            constructor() {
                super()
            }
        },
        ZC = [1, 2];
    var $C = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values()) yield* b
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b, c] of a) {
                    const d = b,
                        e = c;
                    for (const f of e) yield [d, f]
                }
            }()
        }
    };

    function aD(a) {
        return [a[0],
            [...a[1]]
        ]
    };
    const bD = new Set([7, 1]);
    var cD = class {
        constructor() {
            this.m = new $C;
            this.v = []
        }
        j(a, b) {
            bD.has(b) || Ar(zr(Qu(a), c => void this.m.add(c, b)), c => void this.v.push(c))
        }
        l(a, b) {
            for (const c of a) this.j(c, b)
        }
    };

    function dD(a) {
        return new Qr(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class eD {
        j(a) {
            return dD(Math.floor(a.l))
        }
    };

    function fD(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = Ay(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var gD = class extends O {
        constructor() {
            super()
        }
    };

    function hD(a, b) {
        var c = b.adClient;
        if ("string" !== typeof c || !c) return !1;
        a.Gd = c;
        a.m = !!b.adTest;
        c = b.pubVars;
        va(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
            a.C = {};
            for (const d of b.fillMessage) a.C[d.key] = d.value
        }
        a.v = b.adWidth;
        a.l = b.adHeight;
        Tj(a.v) && Tj(a.l) || sp("rctnosize", b);
        return !0
    }
    class iD {
        constructor() {
            this.C = this.D = this.m = this.Gd = null;
            this.l = this.v = 0
        }
        B() {
            return !0
        }
    };

    function jD(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (b) {
            return !1
        }
    }

    function kD(a, b = []) {
        const c = Date.now();
        return Ua(b, d => c - d < 1E3 * a)
    }

    function lD(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Xa(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = kD(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function mD(a, b) {
        return 0 >= b || null == a || !jD(a) ? null : lD(a, b)
    };
    var nD = (a, b, c) => {
        let d = 0;
        try {
            d |= Up(a);
            d |= Xp(a);
            d |= Vp(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = mD(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            R(im) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    var oD = class extends iD {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.j = null
        }
        B(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = Xs(a)
            } catch (c) {
                b = null
            } else b = null;
            this.j = b;
            return !0
        }
    };
    const pD = {};

    function qD(a, b, c) {
        let d = rD(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.B.l;
        for (; d.Ib && d.Ib.length;) {
            const h = d.Ib.shift();
            var g = Ku(h.ca);
            const k = h.aa.j,
                l = !!c.m.Ee || !!c.m.Me || c.Pa() || !!c.m.jf || R(Ek) || k > e;
            g = !g || g <= d.Hc;
            if (!l) c.C ? .j(h, 20);
            else if (!g) c.C ? .j(h, 18);
            else if (sD(c, h, {
                    kd: d.Hc
                })) {
                e = k;
                if (d.Fc.j.length + 1 >= f) return c.C ? .l(d.Ib, 19), !0;
                d = rD(a, c, b);
                if (!d) return !0
            }
        }
        return c.v
    }
    const rD = (a, b, c) => {
        var d = b.B.l,
            e = b.B.v,
            f = b.B;
        f = $v(b.V(), f.j ? f.j.Sb : void 0, d);
        if (f.j.length >= d) return b.C ? .l(tD(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.l || (f.l = $p(f.m).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - fw(f)) : e = void 0;
        const g = (d = null == e || 50 <= e) ? tD(b, f, {
            types: a
        }, c) : null;
        d || b.C ? .l(tD(b, f, {
            types: a
        }, c), 18);
        return {
            Fc: f,
            Hc: e,
            Ib: g
        }
    };
    pD[2] = Fa(function(a, b) {
        a = tD(b, $v(b.V()), {
            types: a,
            lb: Bv(b.V())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (sD(b, a[c])) return !0;
        return b.v ? (b.A.push(11), !0) : !1
    }, [0]);
    pD[5] = Fa(qD, [0], 5);
    pD[10] = Fa(function(a, b) {
        a = [];
        const c = b.Ba;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !R(uk) && a.push(1);
        return qD(a, 10, b)
    }, 10);
    pD[3] = function(a) {
        if (!a.v) return !1;
        var b = tD(a, $v(a.V()), {
            types: [0],
            lb: Bv(a.V())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (sD(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const uD = a => {
            var b;
            a.m.qg ? b = new xv(0, null, [], 3, null) : b = Bv(a.V());
            return {
                types: [0],
                lb: b
            }
        },
        wD = a => {
            const b = a.V().document.body.getBoundingClientRect().width;
            vD(a, dD(b))
        },
        yD = (a, b) => {
            var c = uD(a);
            c.ei = [5];
            c = tD(a, $v(a.V()), c, 8);
            xD(a, c.reverse(), b)
        },
        xD = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.aa), sD(a, d, {
                        Hd: b
                    })) return !0;
            return !1
        };
    pD[8] = function(a) {
        var b = a.V().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => pD[8](a), {
            once: !0
        }), !0;
        if (!a.v) return !1;
        if (!a.gd()) return !0;
        b = uD(a);
        b.ye = [2, 4, 5];
        b = tD(a, $v(a.V()), b, 8);
        const c = new eD;
        if (xD(a, b, c)) return !0;
        if (a.m.qf) switch (a.m.bg || 0) {
            case 1:
                yD(a, c);
                break;
            default:
                wD(a)
        }
        return !0
    };
    pD[6] = Fa(qD, [2], 6);
    pD[7] = Fa(qD, [1], 7);
    pD[9] = function(a) {
        const b = rD([0, 2], a, 9);
        if (!b || !b.Ib) return a.A.push(17), fD(a.V()), a.v;
        for (const d of b.Ib) {
            var c = a.m.ae || null;
            null == c ? c = null : (c = Lu(d.ca, new zD, new AD(c, a.V())), c = new Su(c, d.da(), d.aa));
            if (c && !(Ku(c.ca) > b.Hc) && sD(a, c, {
                    kd: b.Hc,
                    Od: !0
                })) return a = c.ca.Z, Iu(d.ca, 0 < a.length ? a[0] : null), !0
        }
        a.A.push(17);
        fD(a.V());
        return a.v
    };
    class zD {
        l(a, b, c, d) {
            return Lt(d.document, a, b)
        }
        m(a) {
            return S(a) || 0
        }
    };
    var BD = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Fc = c
        }
        wa(a) {
            return this.j ? Cw(this.l, this.j, a, this.Fc) : Bw(this.l, a, this.Fc)
        }
        ra() {
            return this.j ? 16 : 9
        }
    };
    var CD = class {
        constructor(a) {
            this.Id = a
        }
        wa(a) {
            return Jw(a.document, this.Id)
        }
        ra() {
            return 11
        }
    };
    var DD = class {
        constructor(a) {
            this.Za = a
        }
        wa(a) {
            return Gw(this.Za, a)
        }
        ra() {
            return 13
        }
    };
    var ED = class {
        wa(a) {
            return zw(a)
        }
        ra() {
            return 12
        }
    };
    var FD = class {
        constructor(a) {
            this.ac = a
        }
        wa() {
            return Ew(this.ac)
        }
        ra() {
            return 2
        }
    };
    var GD = class {
        constructor(a) {
            this.j = a
        }
        wa() {
            return Hw(this.j)
        }
        ra() {
            return 3
        }
    };
    var HD = class {
        wa() {
            return Kw()
        }
        ra() {
            return 17
        }
    };
    var ID = class {
        constructor(a) {
            this.j = a
        }
        wa() {
            return Dw(this.j)
        }
        ra() {
            return 1
        }
    };
    var JD = class {
        wa() {
            return wb(Cu)
        }
        ra() {
            return 7
        }
    };
    var KD = class {
        constructor(a) {
            this.ye = a
        }
        wa() {
            return Fw(this.ye)
        }
        ra() {
            return 6
        }
    };
    var LD = class {
        constructor(a) {
            this.j = a
        }
        wa() {
            return Iw(this.j)
        }
        ra() {
            return 5
        }
    };
    var MD = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        wa() {
            return Fa(Lw, this.minWidth, this.maxWidth)
        }
        ra() {
            return 10
        }
    };
    var ND = class {
        constructor(a) {
            this.v = a.l.slice(0);
            this.l = a.j.slice(0);
            this.m = a.m;
            this.A = a.v;
            this.j = a.A
        }
    };

    function OD(a) {
        var b = new PD;
        b.A = a;
        b.l.push(new ID(a));
        return b
    }

    function QD(a, b) {
        a.l.push(new KD(b));
        return a
    }

    function RD(a, b) {
        a.l.push(new FD(b));
        return a
    }

    function SD(a, b) {
        a.l.push(new LD(b));
        return a
    }

    function TD(a, b) {
        a.l.push(new GD(b));
        return a
    }

    function UD(a) {
        a.l.push(new JD);
        return a
    }

    function VD(a) {
        a.j.push(new ED);
        return a
    }

    function WD(a, b = 0, c, d) {
        a.j.push(new BD(b, c, d));
        return a
    }

    function XD(a, b = 0, c = Infinity) {
        a.j.push(new MD(b, c));
        return a
    }

    function YD(a) {
        a.j.push(new HD);
        return a
    }

    function ZD(a, b = 0) {
        a.j.push(new DD(b));
        return a
    }

    function $D(a, b) {
        a.m = b;
        return a
    }
    var PD = class {
        constructor() {
            this.m = 0;
            this.v = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new ND(this)
        }
    };
    class AD {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = this.l,
                b = this.m;
            const c = a.D || {};
            c.google_ad_client = a.Gd;
            c.google_ad_height = S(b) || 0;
            c.google_ad_width = Wp(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new gD;
            b = Xh(b, 1, a.A);
            a.j && C(b, 2, a.j);
            c.google_rasc = ei(b);
            a.m && (c.google_adtest = "on");
            return new Qr(["fsi_container"], c)
        }
    };
    var aE = Jr(new Gr(0, {})),
        bE = Jr(new Gr(1, {})),
        cE = a => a === aE || a === bE;

    function dE(a, b, c) {
        jq(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class eE {
        constructor() {
            this.j = new nq
        }
    };

    function fE(a, b) {
        b && (a.j.apv = D(b, 4), xh(b, ms, 23) && (a.j.sat = "" + Sh(A(b, ms, 23), 1)));
        return a
    }

    function gE(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    var hE = class extends pu {
        constructor(a) {
            super(a);
            this.j = {}
        }
        H(a) {
            this.j.a = a.join(",");
            return this
        }
        G(a) {
            null != a && (this.j.allp = a);
            return this
        }
        kg(a) {
            if (a) {
                const b = [];
                for (const c of lq(a))
                    if (0 < a.get(c).length) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.Ze, d.rg].join() + ")")
                    }
                this.j.fd = b.join(",")
            }
            return this
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            Lc(a, this.j);
            return a
        }
    };

    function iE(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function jE(a, b, c, d = 30) {
        c.length <= d ? a[b] = kE(c) : (a[b] = kE(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function kE(a) {
        const b = 0 < a.length && "string" === typeof a[0];
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ha(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function lE(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function mE(a, b) {
        a.l.op = lE(b)
    }

    function nE(a, b, c) {
        jE(a.l, "fap", b);
        a.l.fad = lE(c)
    }

    function oE(a, b, c) {
        jE(a.l, "fmp", b);
        a.l.fmd = lE(c)
    }

    function pE(a, b, c) {
        jE(a.l, "vap", b);
        a.l.vad = lE(c)
    }

    function qE(a, b, c) {
        jE(a.l, "vmp", b);
        a.l.vmd = lE(c)
    }

    function rE(a, b, c) {
        jE(a.l, "pap", b);
        a.l.pad = lE(c)
    }

    function sE(a, b, c) {
        jE(a.l, "pmp", b);
        a.l.pmd = lE(c)
    }

    function tE(a, b) {
        jE(a.l, "psq", b)
    }
    var uE = class extends hE {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {};
            this.errors = []
        }
        v(a) {
            a = super.v(a);
            Object.assign(a, this.l);
            0 < this.errors.length && (a.e = kE(this.errors));
            return a
        }
    };

    function vE(a, b, c) {
        const d = b.ca;
        jq(a.j, d) || a.j.set(d, new wE(yr(Qu(b)) ? ? ""));
        c(a.j.get(d))
    }

    function xE(a, b) {
        vE(a, b, c => {
            c.j = !0
        })
    }

    function yE(a, b) {
        vE(a, b, c => {
            c.l = !0
        })
    }

    function zE(a, b) {
        vE(a, b, c => {
            c.m = !0
        });
        a.I.push(b.ca)
    }

    function AE(a, b, c) {
        vE(a, b, d => {
            d.Cb = c
        })
    }

    function BE(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) cE(f.Cb ? ? "") ? ++e : (b = a.l.get(f.Cb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Db: e
        }
    }

    function CE(a, b) {
        mE(b, a.l.ec());
        var c = mq(a.j).filter(f => 0 === (f.hb.startsWith(aE) ? 0 : 1)),
            d = mq(a.j).filter(f => 1 === (f.hb.startsWith(aE) ? 0 : 1)),
            e = BE(a, f => f.j, c);
        nE(b, e.list, e.Db);
        e = BE(a, f => f.j, d);
        oE(b, e.list, e.Db);
        e = BE(a, f => f.l, c);
        pE(b, e.list, e.Db);
        e = BE(a, f => f.l, d);
        qE(b, e.list, e.Db);
        c = BE(a, f => f.m, c);
        rE(b, c.list, c.Db);
        d = BE(a, f => f.m, d);
        sE(b, d.list, d.Db);
        tE(b, a.I.map(f => a.j.get(f) ? .Cb).map(f => a.l.get(f) ? ? null))
    }

    function Tn() {
        var a = Q(DE);
        if (!a.A) return In();
        const b = Rn(Qn(Pn(On(Nn(Mn(Ln(Kn(Hn(Gn(new Jn, a.A ? ? []), a.H ? ? []), a.C), a.G), a.F), a.L), a.O), a.B ? ? 0), mq(a.j).map(c => {
            var d = new Fn;
            d = ci(d, 1, c.hb);
            var e = a.l.get(c.Cb ? ? "", -1);
            d = M(d, 2, e);
            d = Yh(d, 3, c.j);
            return Yh(d, 4, c.l)
        })), a.I.map(c => a.j.get(c) ? .Cb).map(c => a.l.get(c) ? ? null));
        null != a.m && Yh(b, 6, a.m);
        null != a.v && Ih(b, 13, Ug(a.v), "0");
        return b
    }
    var DE = class {
        constructor() {
            this.v = this.H = this.A = null;
            this.F = this.G = !1;
            this.m = null;
            this.O = this.C = this.L = !1;
            this.B = null;
            this.l = new nq;
            this.j = new nq;
            this.I = []
        }
    };
    class wE {
        constructor(a) {
            this.m = this.l = this.j = !1;
            this.Cb = null;
            this.hb = a
        }
    };
    class EE {
        constructor(a = 0) {
            this.j = a
        }
    };
    class FE {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function GE(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function HE(a, b) {
        const c = a.H.filter(d => lq(d.Qc).every(e => d.Qc.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Qc.ec() > e.Qc.ec() ? d : e, c[0])
    }

    function IE(a, b) {
        b = Qu(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.getValue();
        if (jq(a.m, b)) return a.m.get(b);
        var c = Hr(b);
        c = HE(a, c);
        a.m.set(b, c);
        return c
    }
    var JE = class {
        constructor(a) {
            this.j = a;
            this.m = new nq;
            this.H = (A(a, Ss, 2) ? .j() || []).map(b => {
                const c = Hr(I(b, 1)),
                    d = Uh(Sh(b, 2));
                return {
                    Qc: c,
                    dg: d,
                    hb: I(b, 1)
                }
            });
            this.l = []
        }
        F() {
            const a = Q(DE);
            var b = this.v();
            a.A = b;
            b = this.C();
            a.H = b;
            b = this.A();
            null != b && (a.v = b);
            b = !!this.j.l() ? .j() ? .j();
            a.F = b;
            b = new nq;
            for (const c of A(this.j, Ss, 2) ? .j() ? ? []) b.set(I(c, 1), Uh(Sh(c, 2)));
            a.l = b
        }
        B() {
            return [...this.l]
        }
        v() {
            return [...this.j.j()]
        }
        C() {
            return [...Ch(this.j, 4, Sg)]
        }
        A() {
            return A(this.j, Ms, 5) ? .j() ? ? null
        }
        G(a) {
            const b = IE(this, a);
            null !=
                b ? .hb && AE(Q(DE), a, b.hb)
        }
        I(a) {
            const b = ep(el) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new qr(a)).filter(d => {
                d = IE(this, d) ? .hb || "";
                return "" != d && !(d === aE || d === bE)
            });
            return b <= c.j.length / a.length
        }
    };

    function KE(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => (IE(a.j, c) ? .dg ? ? Number.MAX_VALUE) - (IE(a.j, d) ? .dg ? ? Number.MAX_VALUE))
    }

    function LE(a, b) {
        var c = b.aa.j,
            d = Math,
            e = d.min;
        const f = b.da(),
            g = b.ca.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? GE(f.parentElement) : GE(f));
        d = a.m;
        0 > d.j && (d.j = $p(d.l).scrollHeight || 0);
        d = d.j - b.aa.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.da();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function ME(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => LE(a, c) - LE(a, d))
    }

    function NE(a, b) {
        return b.sort((c, d) => {
            const e = c.ca.G,
                f = d.ca.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? LE(a, c) - LE(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class OE {
        constructor(a, b = 0, c = null) {
            this.m = new FE(a);
            this.l = new EE(b);
            this.j = c && new JE(c)
        }
    };

    function PE(a, b, c = 0, d) {
        var e = a.l;
        for (var f of b.v) e = pr(e, f.wa(a.m), QE(f.ra(), c));
        f = e = e.apply(yw(a.m));
        for (const g of b.l) f = pr(f, g.wa(a.m), Dr([RE(g.ra(), c), h => {
            d ? .j(h, g.ra())
        }]));
        switch (b.m) {
            case 1:
                f = ME(a.j, f);
                break;
            case 2:
                f = NE(a.j, f);
                break;
            case 3:
                const g = Q(DE);
                f = KE(a.j, f);
                e.forEach(h => {
                    xE(g, h);
                    a.j.j ? .G(h)
                });
                f.forEach(h => yE(g, h))
        }
        b.A && (f = sr(f, ie(a.m.location.href + a.m.localStorage.google_experiment_mod)));
        1 === b.j ? .length && dE(a.v, b.j[0], {
            Ze: e.j.length,
            rg: f.j.length
        });
        return rr(f)
    }
    class SE {
        constructor(a, b, c = 0, d = null) {
            this.l = new qr(a);
            this.j = new OE(b, c, d);
            this.m = b;
            this.v = new eE
        }
        A() {
            this.l.forEach(a => {
                a.l && kt(a.l);
                a.l = null
            })
        }
    }
    const QE = (a, b) => c => Hu(c, b, a),
        RE = (a, b) => c => Hu(c.ca, b, a);

    function TE(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = UE(VE(c), a);
                    break a;
                case 3:
                    a = UE(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = UE(e ? 1 == e.nodeType ? e : VE(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !WE(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !gt(b) && 0 >= b.offsetWidth);
        return d
    }

    function UE(a, b) {
        if (!a) return !1;
        a = hf(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function VE(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function WE(a) {
        return !!a.nextSibling || !!a.parentNode && WE(a.parentNode)
    };
    var XE = !oc && !ic();

    function YE(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (XE && a.dataset) {
            if (kc() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var ZE = (a, b, c) => {
            if (!b) return null;
            const d = se(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = S(a);
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        $E = a => {
            const b = a.document.body;
            var c = ZE(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 < d.length;) {
                    const h =
                        d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (g = 0; g < k.children.length; g++) {
                            const l = k.children[g],
                                m = l.getBoundingClientRect().width;
                            (null == m || null == c ? 0 : m >= .9 * c && m <= 1.01 * c) && d.push({
                                element: l,
                                depth: h.depth + 1,
                                height: l.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? ZE(a, c.parentNode || b, c) : null
        },
        bF = a => {
            let b = 0;
            try {
                b |= Up(a), Be() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), aF(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        aF = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == YE(a[b])) return !0;
            return !1
        };

    function cF(a) {
        const b = Zp(a, !0),
            c = $p(a).scrollWidth,
            d = $p(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = dq(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let q = 0,
            w = 0,
            y = Infinity,
            E = Infinity,
            G = null;
        var J = Pv({
            zb: !1
        }, a);
        for (var H of J) {
            J = H.getBoundingClientRect();
            const Ja = b - (J.bottom + f);
            var L = void 0,
                T = void 0;
            if (H.className && ac(H.className, "adsbygoogle-ablated-ad-slot")) {
                L = H.getAttribute("google_element_uid");
                T = a.google_sv_map;
                if (!L || !T ||
                    !T[L]) continue;
                L = (T = ek(T[L])) ? T.height : 0;
                T = T ? T.width : 0
            } else if (L = J.bottom - J.top, T = J.right - J.left, 1 >= L || 1 >= T) continue;
            g.push(L);
            k.push(T);
            l.push(L * T);
            H.className && ac(H.className, "google-auto-placed") ? (w += 1, H.className && ac(H.className, "pedestal_container") && (G = L)) : (y = Math.min(y, Ja), n.push(J), q += 1, h.push(L), m.push(L * T));
            E = Math.min(E, Ja);
            p.push(J)
        }
        y = Infinity === y ? null : y;
        E = Infinity === E ? null : E;
        f = dF(n);
        p = dF(p);
        h = eF(b, h);
        n = eF(b, g);
        m = eF(b * c, m);
        H = eF(b * c, l);
        return new fF(a, {
            bh: e,
            ue: b,
            Sh: c,
            Rh: d,
            Hh: q,
            Eg: w,
            Gg: gF(g),
            Hg: gF(k),
            Fg: gF(l),
            Mh: f,
            Lh: p,
            Kh: y,
            Jh: E,
            Ud: h,
            Td: n,
            Ag: m,
            zg: H,
            Uh: G
        })
    }

    function hF(a, b, c, d) {
        const e = Be() && !(900 <= Wp(a.l));
        d = Ua(d, f => Ya(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.bh,
            pg_h: iF(a.j.ue),
            pg_w: iF(a.j.Sh),
            pg_hs: iF(a.j.Rh),
            c: iF(a.j.Hh),
            aa_c: iF(a.j.Eg),
            av_h: iF(a.j.Gg),
            av_w: iF(a.j.Hg),
            av_a: iF(a.j.Fg),
            s: iF(a.j.Mh),
            all_s: iF(a.j.Lh),
            b: iF(a.j.Kh),
            all_b: iF(a.j.Jh),
            d: iF(a.j.Ud),
            all_d: iF(a.j.Td),
            ard: iF(a.j.Ag),
            all_ard: iF(a.j.zg),
            pd_h: iF(a.j.Uh),
            dt: e ? "m" : "d"
        }
    }
    class fF {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function gF(a) {
        return ce.apply(null, Ua(a, b => 0 < b)) || null
    }

    function eF(a, b) {
        return 0 >= a ? null : be.apply(null, b) / a
    }

    function dF(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function iF(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function jF(a, b) {
        b = (S(b) || 0) - dq(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            dw(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function kF(a) {
        const b = {};
        var c = Yv({
            zb: !1,
            Yc: !1,
            Zc: !1,
            bd: !1
        }, a).map(d => d.getBoundingClientRect()).filter(dw);
        b.Oe = c.length;
        c = Zv({
            Zc: !0
        }, a).map(d => d.getBoundingClientRect()).filter(dw);
        b.pf = c.length;
        c = Zv({
            bd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(dw);
        b.Uf = c.length;
        c = Zv({
            Yc: !0
        }, a).map(d => d.getBoundingClientRect()).filter(dw);
        b.Te = c.length;
        c = (S(a) || 0) - dq(a);
        c = Yv({
            zb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(dw).filter(Ba(lF, null, c));
        b.Pe = c.length;
        a = cF(a);
        c = null != a.j.Ud ? a.j.Ud : null;
        null !=
            c && (b.Jf = c);
        a = null != a.j.Td ? a.j.Td : null;
        null != a && (b.Qe = a);
        return b
    }

    function sD(a, b, {
        kd: c,
        Hd: d,
        Od: e
    } = {}) {
        return Tt(997, () => mF(a, b, {
            kd: c,
            Hd: d,
            Od: e
        }), a.j)
    }

    function tD(a, b, c, d) {
        var e = c.lb ? c.lb : a.B;
        const f = Cv(e, b.j.length);
        e = a.m.Re ? e.j : void 0;
        const g = YD(ZD(VD(XD(WD(UD(SD(TD(QD(RD(OD(c.types), a.ba), c.ye || []), a.Z), c.ei || [])), f.oc || void 0, e, b), c.minWidth, c.maxWidth)), f.Za || void 0));
        a.O && g.j.push(new CD(a.O));
        b = 1;
        a.m.Me ? b = 2 : a.Pa() && (b = 3);
        $D(g, b);
        a.m.Ee && (g.v = !0);
        return Tt(995, () => PE(a.l, g.build(), d, a.C || void 0), a.j)
    }

    function vD(a, b) {
        const c = $E(a.j);
        if (c) {
            const d = Pr(a.I, b),
                e = It(a.j.document, a.G, null, null, {}, d);
            e && (nt(e.sb, c, 2, 256), Tt(996, () => nF(a, e, d), a.j))
        }
    }

    function oF(a) {
        return a.F ? a.F : a.F = a.j.google_ama_state
    }

    function mF(a, b, {
        kd: c,
        Hd: d,
        Od: e
    } = {}) {
        const f = b.ca;
        if (f.A) return !1;
        var g = b.da(),
            h = f.j();
        if (!TE(a.j, h, g, a.v)) return !1;
        h = null;
        f.jd ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new Qr(null, {
            google_max_responsive_height: null == c ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = null == c ? null : new Qr(null, {
            google_max_responsive_height: c
        });
        c = Rr(z(f.Ad, 2) || 0);
        g = Sr(f.G);
        const k = pF(a, f),
            l = qF(a),
            m = Pr(a.I, f.O ? f.O.j(b.aa) : null, h, d || null, c, g, k, l),
            n = b.fill(a.G, m);
        if (e && !rF(a, n, m) || !Tt(996,
                () => nF(a, n, m), a.j)) return !1;
        Hp(9, [f.G, f.Ab]);
        a.Pa() && zE(Q(DE), b);
        return !0
    }

    function pF(a, b) {
        return yr(Ar(Ou(b).map(Tr), () => {
            a.A.push(18)
        }))
    }

    function qF(a) {
        if (!a.Pa()) return null;
        var b = a.l.j.j ? .C();
        if (null == b) return null;
        b = b.join("~");
        a = a.l.j.j ? .A() ? ? null;
        return Ur({
            Wg: b,
            ih: a
        })
    }

    function rF(a, b, c) {
        if (!b) return !1;
        var d = b.Ga,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.Ga;
        c = c && c.hc() || {};
        if (d !== d.top) var g = ef(d) ? 3 : 16;
        else if (488 > Wp(d))
            if (d.innerHeight >= d.innerWidth)
                if (g = Wp(d), !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = Wp(d); h; h = h.parentElement) {
                            const k = hf(h, d);
                            if (!k) continue;
                            const l = tf(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !==
            g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = hf(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Wp(d), f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.Ga;
            if (f = Et(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Ct(b, f, "0px"), b.style.width = Wp(a) + "px", Ft(a, b, f), b.style.zIndex = 30;
            return !0
        }
        kt(b.sb);
        return !1
    }

    function nF(a, b, c) {
        if (!b) return !1;
        try {
            Mt(a.j, b.Ga, c)
        } catch (d) {
            return kt(b.sb), a.A.push(6), !1
        }
        return !0
    }
    class sF {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.l = a;
            this.G = b;
            this.j = c;
            this.B = d.lb;
            this.ba = d.ac || [];
            this.I = d.jh || null;
            this.Z = d.Zg || [];
            this.O = d.Id || [];
            this.m = e;
            this.v = !1;
            this.L = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Ba = f;
            this.C = g ? new cD : null
        }
        ua() {
            return this.l
        }
        V() {
            return this.j
        }
        la(a) {
            this.L.push(a)
        }
        Pa() {
            if (0 == (this.l.j.j ? .v().length ? ? 0)) return !1;
            if (0 == (ep(el) || 0)) return !0;
            if (void 0 === this.H) {
                const a = $D(VD(UD(OD([0, 1, 2]))), 1).build(),
                    b = Tt(995, () => PE(this.l, a), this.j);
                this.H = this.l.j.j ? .I(b) || !1
            }
            return this.H
        }
        ie() {
            return !!this.m.hg
        }
        gd() {
            return !aF(this.j)
        }
        pa() {
            return this.C
        }
    }
    const lF = (a, b) => b.top <= a;

    function tF(a, b, c, d, e, f = 0, g = 0) {
        this.La = a;
        this.vd = f;
        this.ud = g;
        this.errors = b;
        this.kb = c;
        this.j = d;
        this.l = e
    };
    var uF = (a, {
        gd: b = !1,
        ie: c = !1,
        hi: d = !1,
        Pa: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !R(uk);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !R(uk) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function vF(a, b, c) {
        a = uF(a, {
            gd: b.gd(),
            ie: b.ie(),
            hi: !!b.m.ae,
            Pa: b.Pa()
        });
        return new wF(a, b, c)
    }

    function xF(a, b) {
        const c = pD[b];
        return c ? Tt(998, () => c(a.j), a.A) : (a.j.la(12), !0)
    }

    function yF(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(xF(a, b))
            })
        })
    }

    function zF(a) {
        a.j.v = !0;
        return Promise.all(a.l.map(b => yF(a, b))).then(b => {
            b.includes(!1) && a.j.la(5);
            a.l.splice(0, a.l.length)
        })
    }
    class wF {
        constructor(a, b, c) {
            this.v = a.slice(0);
            this.l = a.slice(0);
            this.m = Za(this.l, 1);
            this.j = b;
            this.A = c
        }
    };
    const AF = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };

    function BF(a) {
        return zF(a).then(() => {
            var b = a.j.l.l.filter(Cu).j.length;
            var c = a.j.L.slice(0);
            var d = a.j;
            d = [...d.A, ...(d.l.j.j ? .B() || [])];
            b = new tF(b, c, d, a.j.l.l.j.length, a.j.l.v.j, a.j.l.l.filter(Cu).filter(Du).j.length, a.j.l.l.filter(Du).j.length);
            return new AF(b)
        })
    };
    class CF {
        j() {
            return new Qr([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class DF {
        j() {
            return new Qr(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function EF(a) {
        return ht(a.j.document).map(b => {
            const c = new Yu(b, 3);
            b = new xu(Ot(a.j, b));
            return new Bu(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class FF {
        constructor(a) {
            var b = new DF;
            this.j = a;
            this.l = b || null
        }
    };
    const GF = {
        Je: "10px",
        Md: "10px"
    };

    function HF(a) {
        return iq(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Bu(new Yu(b, 1), new vu(GF), a.l, !1, 0, [], null, a.j, null))
    }
    class IF {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function JF(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ha(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        jE(a.l, "cnstr", c, 80)
    }
    var KF = class extends pu {
        constructor() {
            super(-1);
            this.l = {}
        }
        v(a) {
            a = super.v(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function LF(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function MF(a, b, c) {
        const d = LF(c.Vc, "gapsMeasurementWindow") || LF(c.dc, "gapsPerMeasurementWindow") || LF(c.kc, "maxGapsToReport");
        return null != d ? wr(d) : c.Se || -1 != c.dc || -1 != c.kc ? ur(new NF(a, b, c)) : wr("ShouldHaveLimits")
    }

    function OF(a) {
        return oF(a.m) && oF(a.m).placed || []
    }

    function PF(a) {
        return OF(a).map(b => hr(fr(b.element, a.j)))
    }

    function QF(a) {
        return OF(a).map(b => b.index)
    }

    function RF(a, b) {
        const c = b.ca;
        return !a.C && c.v && null != z(c.v, 8) && 1 == z(c.v, 8) ? [] : c.A ? (c.Z || []).map(d => hr(fr(d, a.j))) : [hr(new gr(b.aa.j, 0))]
    }

    function SF(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new gr(c, f - c)), c = d)
        }
        return b
    }

    function TF(a, b) {
        b = b.map(c => {
            var d = new TC;
            d = Zh(d, 1, c.j);
            c = c.getHeight();
            return Zh(d, 2, c)
        });
        return VC(UC(new WC, a), b)
    }

    function UF(a) {
        const b = B(a, TC, 2).map(c => `G${Vh(c,1)}~${c.getHeight()}`);
        return `W${Vh(a,1)}${b.join("")}`
    }

    function VF(a, b) {
        const c = [];
        let d = 0;
        for (const e of lq(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.B && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(TF(e, f));
            d += f.length;
            if (!a.B && d >= a.l) break
        }
        return c
    }

    function WF(a) {
        const b = B(a, WC, 5).map(c => UF(c));
        return `M${Vh(a,1)}H${Vh(a,2)}C${Vh(a,3)}B${Number(!!F(a,4))}${b.join("")}`
    }

    function XF(a) {
        var b = iv(rr(a.m.l.l), a.j),
            c = PF(a),
            d = new oq(QF(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = RF(a, b[e]);
                c.push(...f)
            }
        c.push(new gr(0, 0));
        c.push(hr(new gr($p(a.j).scrollHeight, 0)));
        b = SF(c);
        c = new nq;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.j / a.v), jq(c, f) || c.set(f, []), c.get(f).push(e);
        b = VF(a, c);
        c = new XC;
        c = Zh(c, 1, a.l);
        c = Zh(c, 2, a.v);
        c = Zh(c, 3, a.A);
        a = Xh(c, 4, a.C);
        return Oh(a, 5, b)
    }

    function YF(a) {
        a = XF(a);
        return WF(a)
    }
    var NF = class {
        constructor(a, b, c) {
            this.G = -1 == c.Vc;
            this.v = c.Vc;
            this.F = -1 == c.dc;
            this.A = c.dc;
            this.B = -1 == c.kc;
            this.l = c.kc;
            this.C = c.Cf;
            this.m = b;
            this.j = a
        }
    };
    const ZF = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var $F = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            sp("ama", b, .01)
        },
        aG = a => {
            const b = {};
            kf(ZF, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const bG = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        cG = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var dG = (a, b) => {
            a = Ch(a, 2, Lg);
            if (!a) return !1;
            for (let c = 0; c < a.length; c++)
                if (a[c] == b) return !0;
            return !1
        },
        fG = (a, b) => {
            a = cG(bG(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = mf(a),
                d = eG(a);
            return b.find(e => {
                const f = xh(e, ds, 7) ? Qg(z(A(e, ds, 7), 1)) : Qg(z(e, 1));
                e = xh(e, ds, 7) ? Th(A(e, ds, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        };
    const eG = a => {
        const b = {};
        for (;;) {
            b[mf(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var gG = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                $F(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            $F(a, {
                lserr: 1
            })
        }
    };

    function hG(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function iG(a, b) {
        a = hG(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function jG() {
        if (kG) return kG;
        const a = rj() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? kG = b : a.google_persistent_state_async = kG = new lG
    }

    function mG(a, b, c) {
        b = nG[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Y(a, b, c) {
        return mG(a, b, () => c)
    }

    function oG(a, b, c) {
        return a.S[nG[b] || "google_ps_" + b] = c
    }

    function pG(a, b) {
        return oG(a, b, Y(a, b, 0) + 1)
    }

    function qG() {
        var a = jG();
        return Y(a, 20, {})
    }

    function rG() {
        var a = jG();
        const b = Y(a, 31, !1);
        b || oG(a, 31, !0);
        return !b
    }

    function sG() {
        var a = jG();
        return Y(a, 26)
    }

    function tG() {
        var a = jG();
        return Y(a, 28, [])
    }
    class lG {
        constructor() {
            this.S = {}
        }
    }
    var kG = null;
    const nG = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var uG = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            asptt: "asptt",
            asro: "asro",
            srtr: "asrtr",
            asiscm: "asiscm",
            sugawps: "aseaascu",
            asla: "aslmt",
            asaa: "asamt",
            sedf: "asedf",
            sefa: "asefa",
            seiel: "aseiel",
            srldp: "asladp",
            vmsli: "itsi"
        },
        vG = a => (a = a.innerText || a.innerHTML) &&
        (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        wG = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        xG = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b =
                            a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    async function yG(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function zG(a) {
        const b = a.j.pc;
        return null !== b && 0 !== b ? b : a.j.pc = Kf(a.win)
    }

    function AG(a) {
        var b = a.j.wpc;
        if (null === b || "" === b) {
            b = a.j;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if (null == (a = hG(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !ck() ? vG : wG;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = xG(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function BG(a, b) {
        var c = new No,
            d = zG(a);
        c = M(c, 1, d).ib(AG(a));
        c = M(c, 3, a.j.sd);
        return M(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function CG(a) {
        await yG(a.win, () => !(!zG(a) || !AG(a)))
    }
    async function DG(a, b, c) {
        if (a.l && c.length && !a.j.lgdp.includes(Number(b))) {
            a.j.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await CG(a);
            var e = a.na;
            a = BG(a, d);
            d = new ho;
            b = N(d, 1, b);
            c = Hh(b, 2, c, Ng);
            c = Nh(a, 9, Oo, c);
            Po(e, c)
        }
    }
    async function EG(a, b) {
        await CG(a);
        var c = BG(a);
        b = Nh(c, 5, Oo, b);
        a.l && !a.j.le.includes(2) && (a.j.le.push(2), Po(a.na, b))
    }
    async function FG(a, b) {
        await CG(a);
        var c = a.na;
        a = BG(a);
        a = M(a, 3, 1);
        b = Nh(a, 6, Oo, b);
        Po(c, b)
    }
    async function GG(a, b) {
        if (a.l) {
            await CG(a);
            var c = a.na;
            a = BG(a);
            b = Nh(a, 11, Oo, b);
            Po(c, b)
        }
    }
    var HG = class {
        constructor(a) {
            this.win = rj() || window;
            this.na = a ? ? new Zo;
            this.j = mG(jG(), 33, () => {
                const b = ep(lk);
                return {
                    sd: b,
                    ssp: 0 < b && jf() < 1 / b,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null
                }
            })
        }
        get l() {
            return this.j.ssp
        }
        get Oc() {
            return this.j.cu
        }
        set Oc(a) {
            this.j.cu = a
        }
    };
    var JG = (a, b, c, d, e, f = null, g = null, h) => {
            const k = new su(a),
                l = new mr(a);
            IG(a, k, b, c, d, e, f, l, g, h)
        },
        IG = (a, b, c, d, e, f, g = null, h = null, k = null, l) => {
            if (c)
                if (d) {
                    var m = jB(d, e, a.location);
                    try {
                        const n = new KG(a, b, c, d, e, m, f, g, h, k, l);
                        Tt(990, () => LG(n), a)
                    } catch (n) {
                        Gp() && Hp(15, [n]), ru(b, cu, ou(gE(fE((new hE(0)).ib(c), d), m).la(1), n)), EG(Q(HG), Xn(new go, Sm(1)))
                    }
                } else ru(b, cu, (new hE(0)).ib(c).la(8)), EG(Q(HG), Xn(new go, Sm(8)));
            else ru(b, cu, (new hE(0)).la(9)), EG(Q(HG), Xn(new go, Sm(9)))
        };

    function LG(a) {
        a.B.forEach(b => {
            switch (b) {
                case 0:
                    Tt(991, () => MG(a), a.l);
                    break;
                case 1:
                    Tt(1073, () => {
                        const c = R(Rk);
                        let d;
                        R(Pk) ? d = new $A(a.l, a.A, a.j, a.C, a.v.X, c) : d = new IA(a.l, a.A, a.j, a.C, a.v.X, c);
                        R(Mk) ? d.B() : d.A()
                    }, a.l);
                    break;
                case 5:
                    Tt(1137, () => {
                        const c = new qA(a.l, a.A, a.j, a.C);
                        A(a.j, ys, 31) ? .B() ? pA(c) : oA(c)
                    }, a.l);
                    break;
                case 2:
                    NG(a);
                    break;
                case 3:
                    OG(a);
                    break;
                case 6:
                    a.runAutoGames()
            }
        })
    }

    function MG(a) {
        (a.j ? .j() ? .j() ? ? !1) && PG(a, "p", QG(a));
        if (Us(a.j) && 1 === Th(Us(a.j), 1)) {
            var b = A(Us(a.j), Vr, 6);
            b && 2 === z(b, 1) && (Nt(a.l), a.G = "b")
        }
        var c = R(wk) ? void 0 : a.v.Yh;
        b = null;
        b = R(wk) ? Bv(a.l) : zv(a.l, c);
        if (a.v.X && xh(a.v.X, cs, 10)) {
            var d = Ah(A(a.v.X, cs, 10), 1);
            null !== d && void 0 !== d && (b = rv(a.l, d, c))
        }
        xh(a.j, $r, 26) && (b = Dv(b, A(a.j, $r, 26), a.l));
        b = Fv(b, a.l);
        c = a.v.X ? Ch(a.v.X, 6, Lg) : [];
        d = a.v.X ? B(a.v.X, is, 5) : [];
        const e = a.v.X ? Ch(a.v.X, 2, Lg) : [],
            f = Tt(993, () => {
                var g = a.j,
                    h = B(g, Ks, 1),
                    k = a.v.X && dG(a.v.X, 1);
                k = R($k) ? "" : k ? "text_image" :
                    "text";
                var l = new CF,
                    m = Au(h, a.l, {
                        Ig: l,
                        Bh: new yu(k)
                    });
                h.length != m.length && a.H.push(13);
                m = m.concat(HF(new IF(a.l, l)));
                h = 0;
                l = R(Kk);
                var n = !1;
                if (Us(g) && 1 === Th(Us(g), 1)) {
                    var p = A(Us(g), Vr, 6);
                    p && (h = Rh(p, 2) || 0, 1 === z(p, 1) && (n = !0))
                }
                p = A(g, Ts, 24) ? .l() ? .j() ? .j() || !1;
                if (l || n || p) l = EF(new FF(a.l)), n = Q(DE), m = m.concat(l), n.L = !0, n.B = l.length, "n" === a.G && (a.G = A(g, Ts, 24) ? .j() ? .length ? "o" : "p");
                l = R(rk);
                a: {
                    if (n = A(g, Es, 6))
                        for (q of n.j())
                            if (xh(q, Fr, 4)) {
                                var q = !0;
                                break a
                            }
                    q = !1
                }
                l && q ? (q = m.concat, l = a.l, (n = A(g, Es, 6)) ? (l = Yw(n.j(), l),
                    k = SC(g, k, l)) : k = [], k = q.call(m, k)) : (q = m.concat, l = a.l, (n = A(g, Es, 6)) ? (l = Xw(n.j(), l), k = SC(g, k, l)) : k = [], k = q.call(m, k));
                m = k;
                g = A(g, Ts, 24);
                return new SE(m, a.l, h, g)
            }, a.l);
        a.m = new sF(f, a.C, a.l, {
            lb: b,
            jh: a.Z,
            ac: a.v.ac,
            Zg: c,
            Id: d
        }, RG(a), e, R(Jk));
        oF(a.m) ? .optimization ? .ablatingThisPageview && !a.m.Pa() && (Nt(a.l), Q(DE).C = !0, a.G = "f");
        a.F = vF(e, a.m, a.l);
        Tt(992, () => BF(a.F), a.l).then(Tt(994, () => a.Ba.bind(a), a.l), a.ua.bind(a))
    }

    function NG(a) {
        const b = A(a.j, Ls, 18);
        b && jC(new kC(a.l, new RC(a.l, a.C), b, new Iy(a.l), B(a.j, Ks, 1)))
    }

    function OG(a) {
        const b = fB(a.l.location, "google_audio_sense") ? ss() : A(a.j, ts, 27);
        if (b) {
            const c = A(a.j, Es, 6) ? .j() || [];
            zr(ox(a.l, a.A, b, c, a.ba, {
                google_ad_client: a.C
            }, A(a.j, Cs, 22) ? .j() || null), d => qx(d))
        }
    }

    function RG(a) {
        const b = R(Ok);
        if (!a.j.j()) return {
            Ee: b,
            Me: !1,
            jf: !1,
            qg: !1,
            qf: !1,
            hg: !1,
            Vh: 0,
            bg: 0,
            Re: SG(a),
            ae: a.O
        };
        const c = a.j.j();
        return {
            Ee: b || F(c, 14, !1),
            Me: F(c, 2, !1),
            jf: F(c, 3, !1),
            qg: F(c, 4, !1),
            qf: F(c, 5, !1),
            hg: F(c, 6, !1),
            Vh: Uh(Ah(c, 8)),
            bg: z(c, 10),
            Re: SG(a),
            ae: a.O
        }
    }

    function SG(a) {
        return R(Ck) ? !1 : a.v.X && xh(a.v.X, cs, 10) ? .5 <= (Ah(A(a.v.X, cs, 10), 1) || 0) : !0
    }

    function TG(a, b) {
        for (var c = nu(nu(new hE(b.La), b.errors), a.H), d = b.kb, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.C.length; g++)
                if (c.C[g] == f) break a;c.C.push(f)
        }
        c.j.pp = b.ud;
        c.j.ppp = b.vd;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.Wb;
        c.j.eatfAbg = b.Xb;
        c.j.reatf = b.xb;
        c = gE(fE(c.H(a.F.v.slice(0)), a.j), a.B).ib(a.C);
        if (d = b.Ca) c.j.as_count = d.Oe, c.j.d_count = d.pf, c.j.ng_count = d.Uf, c.j.am_count = d.Te, c.j.atf_count = d.Pe, c.j.mdns = iE(d.Jf), c.j.alldns = iE(d.Qe);
        c = c.G(b.Hb).kg(b.Tc);
        d = b.ue;
        null != d && (c.j.pgh = d);
        c.j.abl =
            b.wf;
        c.j.rr = a.G;
        void 0 !== b.exception && ou(c, b.exception).la(1);
        return c
    }

    function UG(a, b) {
        var c = TG(a, b);
        ru(a.A, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? 0 < a.L ? eu : cu : 0 < a.L ? du : bu, c);
        if (A(a.j, Ts, 24)) {
            a.m.l.j.j ? .F();
            b = oF(a.m);
            const d = Q(DE);
            d.m = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.O = !!b ? .optimization ? .availableAbg;
            b = Q(DE);
            c = new uE(c);
            b.A ? (c.l.sl = kE(b.A ? ? []), c.l.daaos = kE(b.H ? ? []), c.l.ab = lE(b.G), c.l.rr = lE(b.L), c.l.oab = lE(b.F), null != b.m && (c.l.sab = lE(b.m)), b.C && (c.l.fb = lE(b.C)), c.l.ls = lE(b.O), mE(c, b.l.ec()), null !=
                b.B && (c.l.rp = lE(b.B)), null != b.v && (c.l.expl = lE(b.v)), CE(b, c)) : c.errors.push("irr");
            ru(a.A, hu, c)
        }
        c = a.m ? .pa();
        R(Jk) && null != c && (c = new Map([...c.m.map.entries()].map(aD)), b = new KF, JF(b, c), ru(a.A, mu, b))
    }

    function VG(a, b) {
        const c = Q(HG);
        if (c.l) {
            var d = new go,
                e = b.kb.filter(g => null !== g),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            ao(Zn(eo(co(bo($n(Un(Wn(Yn(Vn(d, a.F.v.slice(0).map(g => {
                var h = new Rm;
                return vh(h, 1, g)
            })), e.map(g => {
                var h = new Um;
                return vh(h, 1, g)
            })), f.map(g => Sm(g))), A(a.j, ms, 23) ? .j()), b.La).G(b.Hb), b.xb), b.Wb), b.Xb), a.B.map(g => g.toString())), zn(yn(xn(wn(vn(Wm(Vm(new An, b.Ca ? .Oe), b.Ca ? .pf), b.Ca ? .Uf), b.Ca ? .Te), b.Ca ? .Pe), b.Ca ? .Jf), b.Ca ? .Qe));
            if (b.Tc)
                for (let g of lq(b.Tc)) {
                    e = new Gh;
                    for (let h of b.Tc.get(g)) En(e, Cn(Bn(new Dn, h.Ze), h.rg));
                    fo(d).set(g.toString(), e)
                }
            A(a.j, Ts, 24) && Sn(d);
            EG(c, d)
        }
    }

    function WG(a) {
        return Us(a.j) && 1 === Th(Us(a.j), 1) ? !(A(Us(a.j), Vr, 6) && 1 <= (Rh(A(Us(a.j), Vr, 6), 3) || 0)) : !1
    }

    function XG(a) {
        if (WG(a)) {
            a = a.m;
            var b = Zv({
                Zc: !0,
                bd: !0
            }, a.j);
            a = 0 < jF(b, a.j)
        } else a = a.m.j, b = Yv({
            zb: !1,
            Yc: !1
        }, a), a = 0 < jF(b, a);
        return a
    }

    function YG(a, b) {
        try {
            R(tk) && a.m ? .ua() ? .A()
        } catch (c) {
            ru(a.A, lu, ou(gE(fE((new hE(b)).ib(a.C), a.j), a.B).la(14), c))
        }
    }

    function ZG(a) {
        if (a.j ? .j() ? .j() ? ? !1) {
            var b = QG(a);
            a.I.init(null == b ? void 0 : b, () => {
                PG(a, "s", b)
            });
            kr(a.I, c => {
                PG(a, "d", QG(a), c);
                a.I.ma();
                if (a.j ? .j() ? .l()) {
                    a.j ? .j() ? .m();
                    try {
                        a.B ? .includes(0) && (a.L++, MG(a), PG(a, "r", QG(a), c))
                    } catch (d) {
                        PG(a, "f", QG(a), c), ru(a.A, eu, ou(gE(fE((new hE(0)).ib(a.C), a.j), a.B).la(1), d))
                    }
                }
            })
        }
    }

    function $G(a, b, c) {
        {
            var d = oF(a.m),
                e = b.j;
            const f = e.j,
                g = e.ud;
            let h = e.La,
                k = e.vd,
                l = e.errors.slice(),
                m = e.kb.slice(),
                n = b.exception;
            const p = hG(a.l).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.F.m && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                La: h,
                ud: g,
                vd: k,
                Hb: f,
                errors: e.errors.slice(),
                kb: m,
                exception: n,
                xb: c,
                Wb: !!d.eatf,
                Xb: !!d.eatfAbg,
                wf: p
            }) : (m.push(12), a.F.m && m.push(13), c = {
                La: h,
                ud: g,
                vd: k,
                Hb: f,
                errors: l,
                kb: m,
                exception: n,
                xb: c,
                Wb: !1,
                Xb: !1,
                wf: p
            })
        }
        c.Ca = kF(a.m.j);
        if (b = b.j.l) c.Tc = b;
        c.ue = $p(a.l).scrollHeight;
        if (Gp()) {
            d = rr(a.m.l.l);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const g of lq(e)) d[g] = e.get(g);
                d = {
                    anchorElement: Eu(f),
                    position: f.j(),
                    clearBoth: f.H,
                    locationType: f.Ab,
                    placed: f.A,
                    placementProto: f.v ? f.v.toJSON() : null,
                    articleStructure: f.C ? f.C.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Hp(14, [{
                placementIdentifiers: b
            }, a.m.G, c.Ca])
        }
        return c
    }

    function aH(a, b) {
        var c = a.m.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Hb;
        c.numAutoAdsPlaced = b.La;
        c.hasAtfAd = b.xb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.m && (a = MF(a.l, a.m, {
            Vc: -1,
            dc: -1,
            kc: -1,
            Cf: !0,
            Se: !0
        }), null != a.j ? (c.placementPositionDiffs = YF(a.getValue()), b = XF(a.getValue()), a = new YC, a = Nh(a, 2, ZC, b), c.placementPositionDiffsReport = ei(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new YC, a = Jh(a, 1, ZC, Wg(b)), c.placementPositionDiffsReport = ei(a)))
    }

    function bH(a, b) {
        UG(a, {
            La: 0,
            Hb: void 0,
            errors: [],
            kb: [],
            exception: b,
            xb: void 0,
            Wb: void 0,
            Xb: void 0,
            Ca: void 0
        });
        VG(a, {
            La: 0,
            Hb: void 0,
            errors: [],
            kb: [],
            exception: b,
            xb: void 0,
            Wb: void 0,
            Xb: void 0,
            Ca: void 0
        })
    }

    function PG(a, b, c, d) {
        b = {
            r: b,
            pg_h: $p(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (b.pg_hd = d);
        qu(a.A, gu, b)
    }

    function QG(a) {
        let b = null;
        a.j.j() && null != Sh(a.j.j(), 19) && (b = Sh(a.j.j(), 19));
        return b
    }
    class KG {
        constructor(a, b, c, d, e, f, g, h, k, l, m) {
            this.l = a;
            this.A = b;
            this.C = c;
            this.j = d;
            this.v = e;
            this.B = f;
            this.Z = h || null;
            this.H = [];
            this.I = k;
            this.O = l;
            this.pa = g;
            this.L = 0;
            this.ba = m ? m : {
                url: a.location.href,
                wc: void 0
            };
            this.G = "n"
        }
        runAutoGames() {
            const a = A(this.j, us, 32);
            a && this.pa.runAutoGames({
                win: this.l,
                webPropertyCode: this.C,
                Ye: a
            })
        }
        Ba(a) {
            try {
                YG(this, a.j.La);
                const b = XG(this) || WG(this) ? XG(this) : void 0;
                at({
                    Xd: b
                }, this.l);
                ZG(this);
                const c = $G(this, a, XG(this));
                xh(this.j, ls, 25) && Bh(A(this.j, ls, 25), 1) && aH(this, c);
                UG(this,
                    c);
                VG(this, c);
                rp(753, () => {
                    if (R(xk) && null != this.m) {
                        var d = MF(this.l, this.m, {
                                Vc: ep(Ik),
                                dc: ep(Hk),
                                kc: ep(zk),
                                Cf: !0,
                                Se: !1
                            }),
                            e = Gc(c);
                        null != d.j ? (d = YF(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = TG(this, e);
                        ru(this.A, fu, e)
                    }
                })()
            } catch (b) {
                bH(this, b)
            }
        }
        ua(a) {
            YG(this, 0);
            bH(this, a)
        }
    };
    var cH = class extends O {},
        dH = ki(cH);

    function eH(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? xr(() => dH(c)) : ur(null)
    };

    function fH(a) {
        this.j = a || {
            cookie: ""
        }
    }
    r = fH.prototype;
    r.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Lm, g = c.ki || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Kf);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    r.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Sb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    r.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Kf: 0,
            path: b,
            domain: c
        });
        return d
    };
    r.isEmpty = function() {
        return !this.j.cookie
    };
    r.ec = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    r.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Sb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function gH(a, b = window) {
        if (F(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function hH(a) {
        return "null" !== a.origin
    }

    function iH(a, b, c) {
        b = F(b, 5) && hH(c) ? c.document.cookie : null;
        return null === b ? null : (new fH({
            cookie: b
        })).get(a) || ""
    };

    function jH(a, b) {
        return Xh(a, 5, b)
    }
    var kH = class extends O {
        constructor() {
            super()
        }
        j() {
            return F(this, 6)
        }
    };
    kH.M = [10];
    var nH = ({
        win: a,
        dd: b,
        Af: c = !1,
        Bf: d = !1
    }) => lH({
        win: a,
        dd: b,
        Af: c,
        Bf: d
    }) ? (b = Y(jG(), 24)) ? mH(a, jH(new kH, GC(b))) : new vr(null, Error("tcunav")) : mH(a, jH(new kH, !0));

    function lH({
        win: a,
        dd: b,
        Af: c,
        Bf: d
    }) {
        if (!(d = !d && KC(new OC(a)))) {
            if (c = !c) {
                if (b) {
                    a = eH(a);
                    if (null != a.j)
                        if ((a = a.getValue()) && null != z(a, 1)) b: switch (a = z(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else tp(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function mH(a, b) {
        return (a = gH(b, a)) ? ur(a) : new vr(null, Error("unav"))
    };
    var oH = class extends O {};
    class pH {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.v = b;
            this.C = c;
            this.l = !1;
            this.m = d;
            this.A = e
        }
    };
    var qH = class {
        constructor(a) {
            this.Ta = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            Ye: c
        }) {
            up(1116, ix(12, a, this.Ta).then(d => {
                d.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: ei(c)
                })
            }))
        }
    };

    function rH({
        win: a,
        webPropertyCode: b,
        Ta: c
    }) {
        fB(a.location, "google_games_single_game") ? sH(a, b, 1, c) : fB(a.location, "google_games_catalog") && sH(a, b, 2, c)
    }

    function sH(a, b, c, d) {
        var e = new us;
        c = vh(e, 1, c);
        (new qH(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Ye: c
        })
    };
    var tH = class extends O {
        constructor() {
            super()
        }
    };
    const uH = {
            "-": 0,
            Y: 2,
            N: 1
        },
        vH = {
            [0]: "-",
            [2]: "Y",
            [1]: "N"
        };
    var wH = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return Vh(this, 2)
        }
    };
    wH.M = [3];

    function xH(a) {
        if (!a.includes("~")) throw Error(`GPP String [${a}] contains no sections`);
        return a.split("~")[0]
    }

    function yH(a) {
        if (!a.includes("~")) throw Error(`GPP String [${a}] contains no sections`);
        return a.split("~").slice(1)
    };

    function zH(a) {
        return Sf(2 > (a.length + 3) % 4 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function AH(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function BH(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function CH(a) {
        var b = zH(a + "A"),
            c = AH(b.slice(0, 6));
        a = AH(b.slice(6, 12));
        var d = new wH;
        c = $h(d, 1, c);
        a = $h(c, 2, a);
        b = b.slice(12);
        c = AH(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === AH(e[0]);
            e = e.slice(1);
            var g = DH(e, b),
                h = 0 === d.length ? 0 : d[d.length - 1];
            h = BH(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = DH(e, b);
                g = BH(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (0 <
            e.length) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Hh(a, 3, d, Ng)
    }

    function DH(a, b) {
        const c = a.indexOf("11");
        if (-1 === c) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var EH = class extends O {
        constructor() {
            super()
        }
    };
    var FH = class extends O {
        constructor() {
            super()
        }
    };

    function GH(a) {
        var b = new HH;
        return $h(b, 1, a)
    }
    var HH = class extends O {
        getVersion() {
            return Vh(this, 1)
        }
    };
    var IH = class extends O {
        constructor() {
            super()
        }
    };

    function JH(a) {
        var b = new KH;
        return C(b, 1, a)
    }
    var KH = class extends O {
        constructor() {
            super()
        }
    };
    const LH = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        MH = LH.reduce((a, b) => a + b);

    function NH(a) {
        if (0 === a.length) throw Error("Cannot decode empty USCA section string");
        var b = a.split(".");
        if (2 < b.length) throw Error(`Expected at most 1 sub-section but got ${b.length-1} when decoding ${a}`);
        var c = zH(b[0]),
            d = AH(c.slice(0, 6));
        c = c.slice(6);
        if (1 !== d) throw Error(`Unable to decode unsupported USCA Section specification version ${d} - only version 1 is supported.`);
        if (c.length < MH)
            if (c.length + 8 >= MH) c += "00000000";
            else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${MH} but was ${c.length+8}`);
        var e = 0;
        a = [];
        for (let f = 0; f < LH.length; f++) {
            const g = LH[f];
            a.push(AH(c.slice(e, e + g)));
            e += g
        }
        c = GH(d);
        d = a.shift();
        c = N(c, 2, d);
        d = a.shift();
        c = N(c, 3, d);
        d = a.shift();
        c = N(c, 4, d);
        d = a.shift();
        c = N(c, 5, d);
        d = a.shift();
        c = N(c, 6, d);
        d = new FH;
        e = a.shift();
        d = N(d, 1, e);
        e = a.shift();
        d = N(d, 2, e);
        e = a.shift();
        d = N(d, 3, e);
        e = a.shift();
        d = N(d, 4, e);
        e = a.shift();
        d = N(d, 5, e);
        e = a.shift();
        d = N(d, 6, e);
        e = a.shift();
        d = N(d, 7, e);
        e = a.shift();
        d = N(d, 8, e);
        e = a.shift();
        d = N(d, 9, e);
        c = C(c, 7, d);
        d = new EH;
        e = a.shift();
        d = N(d, 1, e);
        e = a.shift();
        d = N(d, 2, e);
        c = C(c, 8,
            d);
        d = a.shift();
        c = N(c, 9, d);
        d = a.shift();
        c = N(c, 10, d);
        d = a.shift();
        c = N(c, 11, d);
        a = a.shift();
        a = N(c, 12, a);
        if (1 === b.length) b = JH(a);
        else {
            a = JH(a);
            c = zH(b[1]);
            if (3 > c.length) throw Error(`Invalid GPC Segment [${c}]. Expected length ${3}, but was ${c.length}.`);
            b = AH(c.slice(0, 2));
            if (0 > b || 1 < b) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            c = AH(c.charAt(2));
            d = new IH;
            b = N(d, 2, b);
            b = Yh(b, 1, !!c);
            b = C(a, 2, b)
        }
        return b
    };
    var OH = class extends O {
        constructor() {
            super()
        }
    };
    var PH = class extends O {
        getVersion() {
            return Vh(this, 1)
        }
    };
    var QH = class extends O {
        constructor() {
            super()
        }
    };

    function RH(a) {
        var b = new SH;
        return C(b, 1, a)
    }
    var SH = class extends O {
        constructor() {
            super()
        }
    };
    const TH = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        UH = TH.reduce((a, b) => a + b);
    var VH = class extends O {
        constructor() {
            super()
        }
    };
    var WH = class extends O {
        constructor() {
            super()
        }
    };
    var XH = class extends O {
        getVersion() {
            return Vh(this, 1)
        }
    };
    var YH = class extends O {
        constructor() {
            super()
        }
    };

    function ZH(a) {
        var b = new $H;
        return C(b, 1, a)
    }
    var $H = class extends O {
        constructor() {
            super()
        }
    };
    const aI = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        bI = aI.reduce((a, b) => a + b);
    var cI = class extends O {
        constructor() {
            super()
        }
    };
    var dI = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return Vh(this, 1)
        }
    };
    const eI = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        fI = eI.reduce((a, b) => a + b);
    var gI = "a".charCodeAt(),
        hI = Fc(Mp),
        iI = Fc(Np);

    function jI(a) {
        const b = a.getSeconds();
        a = Vh(a, 2);
        return new Date(1E3 * b + a / 1E6)
    }
    var kI = class extends O {
        getSeconds() {
            return Uh(Sh(this, 1))
        }
        setSeconds(a) {
            return M(this, 1, a)
        }
    };

    function lI(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function mI(a) {
        let b = lI(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!lI(a, 1),
                e = lI(a, 16);
            if (d)
                for (d = lI(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function nI(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (lI(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function oI(a) {
        const b = lI(a, 16);
        return !0 === !!lI(a, 1) ? (a = mI(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : nI(a, b)
    }
    class pI {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var rI = (a, b) => {
        try {
            var c = Sf(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new pI(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = lI(d, 12);
            c.cmpVersion = lI(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = lI(d, 6);
            c.isServiceSpecific = !!lI(d, 1);
            c.useNonStandardStacks = !!lI(d, 1);
            c.specialFeatureOptins = qI(nI(d, 12, iI), iI);
            c.purpose = {
                consents: qI(nI(d, 24, hI), hI),
                legitimateInterests: qI(nI(d, 24, hI), hI)
            };
            c.purposeOneTreatment = !!lI(d, 1);
            c.publisherCC = String.fromCharCode(gI + lI(d, 6)) + String.fromCharCode(gI +
                lI(d, 6));
            c.vendor = {
                consents: qI(oI(d), b),
                legitimateInterests: qI(oI(d), b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const qI = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var sI = class extends O {
        j() {
            return null != D(this, 2)
        }
    };
    var tI = class extends O {
        j() {
            return null != D(this, 2)
        }
    };
    var uI = class extends O {};
    var vI = class extends O {
            j() {
                return B(this, sI, 7)
            }
        },
        wI = ki(vI);
    vI.M = [7];

    function xI(a) {
        return (a = yI(a)) ? A(a, uI, 4) : null
    }

    function yI(a) {
        a = zI(a);
        try {
            return a ? wI(a) : null
        } catch (b) {
            return null
        }
    }

    function zI(a) {
        a = (new fH(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    }

    function AI(a) {
        return (a = yI(a)) ? A(a, tI, 5) || null : null
    };
    [...(new Map([
        [8, "usca"],
        [9, "usva"],
        [10, "usco"],
        [12, "usct"]
    ]))].sort((a, b) => a[0] - b[0]).map(a => a[1]);
    const BI = JH(GH(1));

    function CI(a) {
        var b = new tH;
        b = $h(b, 1, 1);
        var c = K(A(a.j, HH, 1), 2);
        const d = K(A(a.j, HH, 1), 3);
        0 === c && 0 === d ? N(b, 2, 0) : 2 === c || 2 === d ? N(b, 2, 1) : N(b, 2, 2);
        c = K(A(a.j, HH, 1), 5);
        a = K(A(a.j, HH, 1), 6);
        0 === c && 0 === a ? N(b, 3, 0) : 1 === c || 1 === a ? N(b, 3, 2) : N(b, 3, 1);
        N(b, 4, 1);
        a = [Vh(b, 1), vH[K(b, 2)], vH[K(b, 3)], vH[K(b, 4)]].join("");
        return 4 === a.length && (-1 === a.indexOf("-") || "---" === a.substring(1)) && "1" <= a[0] && "9" >= a[0] && uH.hasOwnProperty(a[1]) && uH.hasOwnProperty(a[2]) && uH.hasOwnProperty(a[3]) ? a : null
    }
    var DI = class {
        constructor(a = BI, b = new kI) {
            this.j = a;
            this.timestamp = b
        }
        getTimestamp() {
            return this.timestamp
        }
    };

    function EI(a) {
        a.__tcfapiPostMessageReady || FI(new GI(a))
    }

    function FI(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var GI = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };
    var HI = class extends O {
        j() {
            return xh(this, kI, 2)
        }
    };
    var II = class extends O {
            j() {
                return null != D(this, 1)
            }
        },
        JI = ki(II);
    II.M = [2];

    function KI(a) {
        var b = R(al),
            c = R(bl),
            d = R(bl);
        d && a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new LI(a, c, d), MI(a), b && NI(a))
    }

    function MI(a) {
        !a.v || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", rC(a.j, "__uspapiLocator"), Ga("__uspapi", (...b) => OI(a, ...b), a.j))
    }

    function NI(a) {
        !a.l || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", rC(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Ga("__tcfapi", (...b) => PI(a, ...b)), EI(a.j))
    }

    function OI(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.v
        }, !0)
    }

    function QI(a) {
        if (!a ? .j() || 0 === I(a, 1).length) return null;
        var b = B(a, HI, 2).find(e => 8 === Vh(e, 1));
        b = b ? .j() ? A(b, kI, 2) : (new kI).setSeconds(0);
        a = I(a, 1);
        try {
            const e = CH(xH(a)),
                f = yH(a),
                g = Ch(e, 3, Og).indexOf(8);
            if (-1 === g) var c = null;
            else {
                try {
                    var d = NH(f[g])
                } catch (h) {
                    d = null
                }
                c = {
                    uspString: CI(new DI(d ? ? BI, b)),
                    Sd: jI(b)
                }
            }
            return c
        } catch (e) {
            return null
        }
    }

    function RI(a) {
        a = a.find(b => 13 === K(b, 1));
        if (a ? .j()) try {
            return JI(I(a, 2))
        } catch (b) {}
        return null
    }

    function PI(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && (2.1 < c || 1 >= c)) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(SI(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.1",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(SI(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function SI(a, b, c) {
        if (!a.l) return null;
        b = rI(a.l, b);
        b.addtlConsent = null != a.m ? a.m : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class LI {
        constructor(a, b, c) {
            this.j = a;
            if (b) {
                if (c) {
                    b = zI(this.j.document);
                    try {
                        var d = b ? wI(b) : null
                    } catch (e) {
                        d = null
                    }(b = d) ? (d = A(b, tI, 5) || null, b = b.j() ? ? [], b = RI(b), d = {
                        Nd: d,
                        ee: b
                    }) : d = {
                        Nd: null,
                        ee: null
                    }
                } else d = AI(this.j.document), b = yI(this.j.document) ? .j() ? ? [], b = RI(b), d = {
                    Nd: d,
                    ee: b
                };
                b = d;
                d = QI(b.ee);
                b = b.Nd;
                b ? .j() && 0 !== I(b, 2).length ? (c = xh(b, kI, 1) ? A(b, kI, 1) : (new kI).setSeconds(0), b = {
                    uspString: I(b, 2),
                    Sd: jI(c)
                }) : b = null;
                d = b && d ? d.Sd > b.Sd ? d.uspString : b.uspString : b ? b.uspString : d ? d.uspString : null
            } else d = (d = AI(this.j.document)) ?
                D(d, 2) : null;
            this.v = d;
            this.l = (d = xI(a.document)) && null != D(d, 1) ? D(d, 1) : null;
            this.m = (a = xI(a.document)) && null != D(a, 2) ? D(a, 2) : null
        }
    };
    const TI = a => {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    };
    var UI = (a, b) => {
        a = TI(a);
        b = TI(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var VI = Promise;
    class WI {
        constructor(a) {
            this.m = a
        }
        l(a, b, c) {
            this.m.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.m.then(c => c.j(a, b))
        }
    };
    class XI {
        constructor(a) {
            this.data = a
        }
    };

    function YI(a, b) {
        ZI(a, b);
        return new $I(a)
    }
    class $I {
        constructor(a) {
            this.m = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            ZI(d.port1, b);
            this.m.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new VI(c => {
                this.l(a, c, b)
            })
        }
    }

    function ZI(a, b) {
        b && (a.onmessage = c => {
            b(new XI(c.data, YI(c.ports[0])))
        })
    };
    var cJ = ({
        destination: a,
        Ia: b,
        origin: c,
        ob: d = "ZNWN1d",
        onMessage: e,
        Xf: f
    }) => aJ({
        destination: a,
        rh: () => b.contentWindow,
        Qh: bJ(c),
        ob: d,
        onMessage: e,
        Xf: f
    });
    const aJ = ({
            destination: a,
            rh: b,
            Qh: c,
            Mm: d,
            ob: e,
            onMessage: f,
            Xf: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new WI(new VI((k, l) => {
                const m = n => {
                    n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(YI(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        bJ = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };

    function dJ(a, b, c, d, e, f, g = null, h) {
        try {
            var k = a.localStorage
        } catch (p) {
            k = null
        }
        if (k) {
            if (R(vk)) var l = null;
            else try {
                l = k.getItem("google_ama_config")
            } catch (p) {
                l = null
            }
            try {
                var m = l ? Xs(l) : null
            } catch (p) {
                m = null
            }
            l = m
        } else l = null;
        a: {
            if (d) try {
                var n = Xs(d);
                break a
            } catch (p) {
                $F(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            n = null
        }
        if (d = n) {
            if (e) {
                n = new bs;
                C(d, 3, n);
                l = d.j() && Sh(d.j(), 13) ? Sh(d.j(), 13) : 1;
                ai(n, 1, Date.now() + 864E5 * l);
                n = th(d);
                d.j() && (l = new as, m = d.j(), m = Bh(m, 23), l = Xh(l, 23, null == m ? void 0 : m), m = F(d.j(), 12, !1), l = Xh(l, 12, m), m = F(d.j(), 15, !1), l = Xh(l,
                    15, m), C(n, 15, l));
                l = B(n, Ks, 1);
                for (m = 0; m < l.length; m++) vh(l[m], 11, void 0, !1);
                vh(n, 22, void 0, !1);
                if (R(vk)) gG(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", ei(n))
                } catch (p) {
                    $F(a, {
                        lserr: 1
                    })
                }
            }
            e = fG(a, B(d, ks, 7));
            n = {};
            R(wk) || (n.Yh = A(d, Bs, 8) || new Bs);
            e && (n.X = e);
            e && dG(e, 3) && (n.ac = [1]);
            e = n;
            if (7 === c.google_pgb_reactive && (n = e.X, !n || !Bh(n, 8))) return !1;
            iG(a, 2) && (Hp(5, [d.toJSON()]), c = aG(c), f = new qH(f), n = e.X, c.google_package = n && D(n, 4) || "", JG(a, b, d, e, f, new Qr(["google-auto-placed"], c), g, {
                url: a.location.href,
                wc: h
            }));
            return !0
        }
        l && ($F(a, {
            cfg: 1,
            cl: 1
        }), gG(a));
        return !1
    };
    var fJ = a => {
        const b = a.D;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!Ki.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = eJ(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = eJ(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = eJ(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = eJ(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = eJ(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = eJ(a, b.google_color_line, c))
    };

    function eJ(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function gJ(a, b) {
        var c = op,
            d;
        var e;
        d = (e = (e = mj()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new ij(d.left, d.top, d.width, d.height) : null) ? new de(e.left, e.top) : (d = pj()) && va(d.rootBounds) ? new de(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new de(0, 0),
                g = ne(b);
            var h = g ? qe(g) : window;
            if (mc(h, "parent")) {
                do {
                    if (h == a) var k = Mj(b);
                    else {
                        var l = Lj(b);
                        k = new de(l.left,
                            l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.sa(888, m), new de(-12245933, -12245933)
        }
    };

    function hJ(a, b, c) {
        return c ? iH(b, c, a.j) : null
    }

    function iJ(a, b, c, d) {
        if (d) {
            var e = Sh(c, 2) - Date.now() / 1E3;
            e = {
                Kf: Math.max(e, 0),
                path: D(c, 3),
                domain: D(c, 4),
                ki: !1
            };
            c = c.getValue();
            a = a.j;
            F(d, 5) && hH(a) && (new fH(a.document)).set(b, c, e)
        }
    }

    function jJ(a, b, c) {
        if (c && iH(b, c, a.j))
            for (const e of kJ(a.j.location.hostname)) {
                var d = a.j;
                F(c, 5) && hH(d) && (new fH(d.document)).remove(b, "/", e)
            }
    }
    var lJ = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function kJ(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function mJ(a, b, c) {
        return rp(629, function(d) {
            delete a._gfp_s_;
            if (R(mk) && Y(jG(), 37, !1)) return Promise.resolve();
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = Di(Ci(Bi(zi(g),
                    h), k), e);
                switch (d) {
                    case 1:
                        iJ(c, "__gads", e, b);
                        break;
                    case 2:
                        iJ(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function nJ(a, b, c) {
        let d;
        if (0 === a.l) {
            if (hJ(a, "__gads", b)) var e = !0;
            else if (e = a.j, F(b, 5) && hH(e) && (new fH(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === iH("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                F(b, 5) && hH(f) && (new fH(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = mJ(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function oJ(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = hJ(b, "__gads", a);
        e && (d.cookie = e);
        (e = hJ(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
        const f = Tc(Wc(qb(rb("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = nJ(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            ff(c.document, f)
        }) : Promise.resolve()
    }

    function pJ(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1);
        var d = new lJ(b);
        c = b.google_ad_client || c;
        const e = b._gfp_p_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
        e ? Promise.resolve() : oJ(a, d, b, c)
    };
    const qJ = (a, b) => {
            (0, a.__gpp)("addEventListener", b.listener)
        },
        rJ = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        sJ = (a, b) => {
            (0, a.__gpp)("getSection", c => {
                b.callback({
                    consentData: c ? ? void 0,
                    Sc: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        tJ = {
            jc: a => a.listener,
            Bb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            bb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        uJ = {
            jc: a => a.listener,
            Bb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            bb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        },
        vJ = {
            jc: a => a.callback,
            Bb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }
            }),
            bb: (a, b) => {
                b = b.__gppReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    Sc: b.success ? void 0 : 2
                })
            }
        };

    function wJ(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            we: b.__gppReturn.callId
        }
    }

    function xJ(a) {
        const b = CH(xH(a)),
            c = yH(a);
        for (let Mi = 0; Mi < Ch(b, 3, Og).length; ++Mi) {
            const Qv = Ch(b, 3, Og)[Mi],
                Hc = c[Mi];
            switch (Qv) {
                case 8:
                    var d = NH(Hc);
                    const Rv = A(d, HH, 1);
                    if (1 === K(Rv, 5) || 1 === K(Rv, 6)) return !0;
                    break;
                case 10:
                    if (0 === Hc.length) throw Error("Cannot decode empty USCO section string.");
                    const fg = Hc.split(".");
                    if (2 < fg.length) throw Error(`Expected at most 2 segments but got ${fg.length} when decoding ${Hc}`);
                    var e = void 0,
                        f = void 0,
                        g = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        q = void 0,
                        w = void 0,
                        y = void 0,
                        E = void 0,
                        G = void 0,
                        J = void 0,
                        H = void 0,
                        L = void 0,
                        T = void 0;
                    let dd = zH(fg[0]);
                    const Xm = AH(dd.slice(0, 6));
                    dd = dd.slice(6);
                    if (1 !== Xm) throw Error(`Unable to decode unsupported USCO Section specification version ${Xm} - only version 1 is supported.`);
                    if (dd.length < UH)
                        if (dd.length + 8 >= UH) dd += "00000000";
                        else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${UH} but was ${dd.length+8}`);
                    let Ym = 0;
                    const Oa = [];
                    for (let ia = 0; ia < TH.length; ia++) {
                        const Ca =
                            TH[ia];
                        Oa.push(AH(dd.slice(Ym, Ym + Ca)));
                        Ym += Ca
                    }
                    var Ja = new PH;
                    T = $h(Ja, 1, Xm);
                    var Rb = Oa.shift();
                    L = N(T, 2, Rb);
                    var Z = Oa.shift();
                    H = N(L, 3, Z);
                    var xb = Oa.shift();
                    J = N(H, 4, xb);
                    var ed = Oa.shift();
                    G = N(J, 5, ed);
                    var Ic = Oa.shift();
                    E = N(G, 6, Ic);
                    var De = new OH,
                        X = Oa.shift();
                    y = N(De, 1, X);
                    var fd = Oa.shift();
                    w = N(y, 2, fd);
                    var Zm = Oa.shift();
                    q = N(w, 3, Zm);
                    var $m = Oa.shift();
                    p = N(q, 4, $m);
                    var an = Oa.shift();
                    n = N(p, 5, an);
                    var bn = Oa.shift();
                    m = N(n, 6, bn);
                    var cn = Oa.shift();
                    l = N(m, 7, cn);
                    k = C(E, 7, l);
                    var dn = Oa.shift();
                    h = N(k, 8, dn);
                    var en = Oa.shift();
                    g =
                        N(h, 9, en);
                    var fn = Oa.shift();
                    f = N(g, 10, fn);
                    var gn = Oa.shift();
                    const Sv = e = N(f, 11, gn);
                    if (1 === fg.length) var Ni = RH(Sv);
                    else {
                        var hn = RH(Sv),
                            Oi = void 0,
                            Pi = void 0,
                            Ee = void 0;
                        const ia = zH(fg[1]);
                        if (3 > ia.length) throw Error(`Invalid GPC Segment [${ia}]. Expected length ${3}, but was ${ia.length}.`);
                        const Ca = AH(ia.slice(0, 2));
                        if (0 > Ca || 1 < Ca) throw Error(`Attempting to decode unknown GPC segment subsection type ${Ca}.`);
                        Ee = Ca + 1;
                        const jn = AH(ia.charAt(2));
                        var kn = new QH;
                        Pi = N(kn, 2, Ee);
                        Oi = Yh(Pi, 1, !!jn);
                        Ni = C(hn, 2, Oi)
                    }
                    const Tv =
                        A(Ni, PH, 1);
                    if (1 === K(Tv, 5) || 1 === K(Tv, 6)) return !0;
                    break;
                case 12:
                    if (0 === Hc.length) throw Error("Cannot decode empty usct section string.");
                    const gg = Hc.split(".");
                    if (2 < gg.length) throw Error(`Expected at most 2 segments but got ${gg.length} when decoding ${Hc}`);
                    var Qi = void 0,
                        Ri = void 0,
                        Fe = void 0,
                        Si = void 0,
                        Ti = void 0,
                        Ui = void 0,
                        Pd = void 0,
                        Ge = void 0,
                        Vi = void 0,
                        hg = void 0,
                        Qd = void 0,
                        Wi = void 0,
                        Xi = void 0,
                        He = void 0,
                        Yi = void 0,
                        Bb = void 0,
                        ig = void 0,
                        gd = void 0,
                        jg = void 0,
                        Zi = void 0,
                        $i = void 0,
                        aj = void 0;
                    let hd = zH(gg[0]);
                    const ln =
                        AH(hd.slice(0, 6));
                    hd = hd.slice(6);
                    if (1 !== ln) throw Error(`Unable to decode unsupported USCT Section specification version ${ln} - only version 1 is supported.`);
                    if (hd.length < bI)
                        if (hd.length + 8 >= bI) hd += "00000000";
                        else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${bI} but was ${hd.length+8}`);
                    let mn = 0;
                    const ra = [];
                    for (let ia = 0; ia < aI.length; ia++) {
                        const Ca = aI[ia];
                        ra.push(AH(hd.slice(mn, mn + Ca)));
                        mn += Ca
                    }
                    var Cb = new XH;
                    aj = $h(Cb, 1, ln);
                    var nn = ra.shift();
                    $i = N(aj,
                        2, nn);
                    var on = ra.shift();
                    Zi = N($i, 3, on);
                    var bj = ra.shift();
                    jg = N(Zi, 4, bj);
                    var pn = ra.shift();
                    gd = N(jg, 5, pn);
                    var cj = ra.shift();
                    ig = N(gd, 6, cj);
                    var qn = new WH,
                        kg = ra.shift();
                    Bb = N(qn, 1, kg);
                    var Ie = ra.shift();
                    Yi = N(Bb, 2, Ie);
                    var lg = ra.shift();
                    He = N(Yi, 3, lg);
                    var dj = ra.shift();
                    Xi = N(He, 4, dj);
                    var rn = ra.shift();
                    Wi = N(Xi, 5, rn);
                    var lb = ra.shift();
                    Qd = N(Wi, 6, lb);
                    var Je = ra.shift();
                    hg = N(Qd, 7, Je);
                    var Db = ra.shift();
                    Vi = N(hg, 8, Db);
                    Ge = C(ig, 7, Vi);
                    var Eb = new VH,
                        Rd = ra.shift();
                    Pd = N(Eb, 1, Rd);
                    var id = ra.shift();
                    Ui = N(Pd, 2, id);
                    var jd = ra.shift();
                    Ti = N(Ui, 3, jd);
                    Si = C(Ge, 8, Ti);
                    var Sa = ra.shift();
                    Fe = N(Si, 9, Sa);
                    var la = ra.shift();
                    Ri = N(Fe, 10, la);
                    var Da = ra.shift();
                    const Uv = Qi = N(Ri, 11, Da);
                    if (1 === gg.length) var bb = ZH(Uv);
                    else {
                        var Pa = ZH(Uv),
                            sb = void 0,
                            mg = void 0,
                            ng = void 0;
                        const ia = zH(gg[1]);
                        if (3 > ia.length) throw Error(`Invalid GPC Segment [${ia}]. Expected length ${3}, but was ${ia.length}.`);
                        const Ca = AH(ia.slice(0, 2));
                        if (0 > Ca || 1 < Ca) throw Error(`Attempting to decode unknown GPC segment subsection type ${Ca}.`);
                        ng = Ca + 1;
                        const jn = AH(ia.charAt(2));
                        var Jc = new YH;
                        mg = N(Jc, 2, ng);
                        sb = Yh(mg, 1, !!jn);
                        bb = C(Pa, 2, sb)
                    }
                    const Vv = A(bb, XH, 1);
                    if (1 === K(Vv, 5) || 1 === K(Vv, 6)) return !0;
                    break;
                case 9:
                    if (0 === Hc.length) throw Error("Cannot decode empty USVA section string.");
                    let kd = zH(Hc);
                    const sn = AH(kd.slice(0, 6));
                    kd = kd.slice(6);
                    if (1 !== sn) throw Error(`Unable to decode unsupported USVA Section specification version ${sn} - only version 1 is supported.`);
                    if (kd.length < fI)
                        if (kd.length + 8 >= fI) kd += "00000000";
                        else throw Error(`Expected bitstring minus version plus padding to be at least of length ${fI} but was ${kd.length+ 
8}`);
                    let tn = 0;
                    const Ea = [];
                    for (let ia = 0; ia < eI.length; ia++) {
                        const Ca = eI[ia];
                        Ea.push(AH(kd.slice(tn, tn + Ca)));
                        tn += Ca
                    }
                    var ej = sn,
                        og = new dI;
                    var pg = $h(og, 1, ej);
                    var Sd = Ea.shift();
                    var un = N(pg, 2, Sd);
                    var qg = Ea.shift();
                    var fj = N(un, 3, qg);
                    var jN = Ea.shift();
                    var kN = N(fj, 4, jN);
                    var lN = Ea.shift();
                    var mN = N(kN, 5, lN);
                    var nN = Ea.shift();
                    var oN = N(mN, 6, nN);
                    var pN = new cI,
                        qN = Ea.shift();
                    var rN = N(pN, 1, qN);
                    var sN = Ea.shift();
                    var tN = N(rN, 2, sN);
                    var uN = Ea.shift();
                    var vN = N(tN, 3, uN);
                    var wN = Ea.shift();
                    var xN = N(vN, 4, wN);
                    var yN = Ea.shift();
                    var zN = N(xN, 5, yN);
                    var AN = Ea.shift();
                    var BN = N(zN, 6, AN);
                    var CN = Ea.shift();
                    var DN = N(BN, 7, CN);
                    var EN = Ea.shift();
                    var FN = N(DN, 8, EN);
                    var GN = C(oN, 7, FN);
                    var HN = Ea.shift();
                    var IN = N(GN, 8, HN);
                    var JN = Ea.shift();
                    var KN = N(IN, 9, JN);
                    var LN = Ea.shift();
                    var MN = N(KN, 10, LN);
                    var NN = Ea.shift(),
                        Wv = N(MN, 11, NN);
                    if (1 === K(Wv, 5) || 1 === K(Wv, 6)) return !0;
                    break;
                default:
                    Ve(Qv, void 0)
            }
        }
        return !1
    }
    var yJ = class extends Uo {
        constructor(a) {
            super();
            this.caller = new wC(a, "__gppLocator", b => "function" === typeof b.__gpp, wJ);
            this.caller.A.set("addEventListener", qJ);
            this.caller.m.set("addEventListener", tJ);
            this.caller.A.set("removeEventListener", rJ);
            this.caller.m.set("removeEventListener", uJ);
            this.caller.A.set("getDataWithCallback", sJ);
            this.caller.m.set("getDataWithCallback", vJ);
            this.timeoutMs = -1
        }
        l() {
            this.caller.ma();
            super.l()
        }
        addEventListener(a) {
            const b = zb(() => {
                    a({}, !1)
                }),
                c = -1 === this.timeoutMs ? void 0 :
                setTimeout(() => {
                    b()
                }, this.timeoutMs);
            vC(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    a(d, e)
                }
            })
        }
        removeEventListener(a) {
            vC(this.caller, "removeEventListener", {
                listenerId: a
            })
        }
    };

    function zJ(a) {
        const b = new yJ(a.pubWin);
        if (!tC(b.caller)) return Promise.resolve(null);
        const c = jG(),
            d = Y(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Y(c, 36, []);
            g.push(f);
            oG(c, 36, g)
        });
        d || null === d || (oG(c, 35, null), b.addEventListener((f, g) => {
            if (g && "signalStatus" === f.eventName && "ready" === f.data) {
                f = f.pingData;
                oG(c, 35, f);
                g = Hh(a.l, 10, f.applicableSections, Rg);
                g = bi(g, 11, f.gppString);
                var h = xJ(f.gppString);
                Xh(g, 12, h);
                for (const k of Y(c, 36, [])) k.resolve(f);
                oG(c, 36, [])
            }
        }));
        return e
    };

    function AJ(a) {
        a.easpi = R(ul);
        a.asla = .4;
        a.asaa = -1;
        a.asro = R(Ll);
        R(Al) && (a.asiscm = !0);
        R(Nl) && (a.srtr = !0);
        R(wl) || (a.sedf = !1);
        R(yl) && (a.sefa = !0);
        R(Dl) && (a.srldp = !0);
        R(Tl) && (a.sugawps = !0);
        const b = gp(vl);
        b.length && (a.seiel = b.join("~"))
    };

    function BJ(a, b) {
        return vB({
            J: a,
            me: 3E3,
            qe: a.innerWidth > Tp ? 650 : 0,
            na: np,
            bf: b
        })
    };
    var CJ = a => {
        let b = 0;
        try {
            b |= Up(a), R(Yk) || (b |= Vp(a, 1E4))
        } catch (c) {
            b |= 32
        }
        return b
    };
    var DJ = a => {
        let b = 0;
        try {
            b |= Up(a), b |= Vp(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var EJ = (a, b, c, d = !1) => {
        let e = 0;
        try {
            e |= Up(a);
            var f;
            if (!(f = !a.navigator)) {
                var g = a.navigator;
                f = "brave" in g && "isBrave" in g.brave || !1
            }
            e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            e |= Vp(a, 2500);
            e |= Xp(a);
            if (0 < c)
                if (d) b && jD(b) || (e |= 4194304);
                else {
                    var h = mD(b, c);
                    h && 1 > h.length || (e |= 134217728)
                }
        } catch (k) {
            e |= 32
        }
        return e
    };

    function FJ(a, b, c, d = null) {
        if (!R(hm)) return 32;
        let e = Up(a);
        wB(a.navigator ? .userAgent) && (e |= 1048576);
        const f = a.innerWidth;
        1200 > f && (e |= 65536);
        const g = a.innerHeight;
        650 > g && (e |= 2097152);
        d && 0 === e && (d = 3 === d ? "left" : "right", (b = GJ({
            J: a,
            Hf: b,
            ig: 1,
            position: d,
            W: f,
            T: g,
            Wa: new Set,
            minWidth: 120,
            minHeight: 500
        })) ? c && Ay(a).sideRailPlasParam.set(d, `${b.width}x${b.height}_${String(d).charAt(0)}`) : e |= 16);
        return e
    }

    function HJ(a) {
        if (R(il)) return [...Ay(a).sideRailPlasParam.values()].join("|");
        if (0 !== FJ(a, !0, !1)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = GJ({
                J: a,
                Hf: !0,
                ig: 1,
                position: e,
                W: c,
                T: d,
                Wa: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function IJ(a, b) {
        return null !== ze(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function JJ(a, b) {
        return ze(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function KJ(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function LJ(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function MJ(a) {
        return `${a.position}-${LJ(a.W)}x${LJ(a.T)}-${LJ(a.scrollY+a.Jb)}Y`
    }

    function NJ(a) {
        return `f-${MJ({position:a.position,Jb:a.Jb,scrollY:0,W:a.W,T:a.T})}`
    }

    function OJ(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function PJ(a, b, c) {
        const d = Ay(c.J).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.T),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.W);
                for (var k = .3 * c.W; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = NJ({
                            position: "left",
                            Jb: f,
                            W: c.W,
                            T: c.T
                        });
                        b.set(l, OJ(b.get(l), h))
                    }
                    if (h < c.W && e > c.W - k) {
                        l = NJ({
                            position: "right",
                            Jb: f,
                            W: c.W,
                            T: c.T
                        });
                        const m = c.W - e;
                        b.set(l, OJ(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function GJ(a) {
        if (1200 > a.W || 650 > a.T) return null;
        var b = Ay(a.J).sideRailAvailableSpace;
        if (!a.Hf) {
            var c = {
                    J: a.J,
                    W: a.W,
                    T: a.T,
                    Wa: a.Wa
                },
                d = `f-${LJ(c.W)}x${LJ(c.T)}`;
            if (!b.has(d)) {
                b.set(d, 0);
                Ay(c.J).sideRailProcessedFixedElements.clear();
                d = new Set([...Array.from(c.J.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.Wa]);
                for (var e of KJ(c.J)) IJ(e, d) || PJ(e, b, c)
            }
        }
        c = [];
        d = .9 * a.T;
        var f = dq(a.J),
            g = e = (a.T - d) / 2,
            h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    q = {
                        J: a.J,
                        W: a.W,
                        T: a.T,
                        Wa: a.Wa
                    };
                const y = NJ({
                        position: p,
                        Jb: n,
                        W: q.W,
                        T: q.T
                    }),
                    E = MJ({
                        position: p,
                        Jb: n,
                        scrollY: f,
                        W: q.W,
                        T: q.T
                    });
                if (b.has(E)) {
                    n = OJ(b.get(y), b.get(E));
                    break a
                }
                const G = "left" === p ? 20 : q.W - 20;
                let J = G;p = .3 * q.W / 5 * ("left" === p ? 1 : -1);
                for (let H = 0; 6 > H; H++) {
                    const L = ty(q.J.document, {
                        x: Math.round(J),
                        y: Math.round(n)
                    });
                    var w = IJ(L, q.Wa);
                    const T = JJ(L, q.J);
                    if (!w && null !== T) {
                        PJ(T, b, q);
                        b.delete(E);
                        break
                    }
                    w || (w = L.offsetHeight >= .25 * q.T, w = L.offsetWidth >= .9 * q.W && w);
                    if (w) b.set(E, Math.round(Math.abs(J - G) + 20));
                    else if (J !== G) J -= p, p /=
                        2;
                    else {
                        b.set(E, 0);
                        break
                    }
                    J += p
                }
                n = OJ(b.get(y), b.get(E))
            }
            m.call(l, n);
            g += h
        }
        b = a.ig;
        f = a.position;
        d = Math.round(d / 8);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    offsetY: e + h[k] * d
                }, q = n.width >= g && n.height >= a, 0 === b && q) {
                m = n;
                break
            } else 1 === b && q && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const QJ = {
        [27]: 512,
        [26]: 128
    };
    var RJ = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === BJ(a, c);
                case 3:
                case 4:
                    return 0 === FJ(a, !1, !1, c);
                case 8:
                    return b = "on" === b.google_adtest || fB(a.location, "google_ia_debug") ? -1 : ep(nl), c = R(ol), 0 == EJ(a, d, b, c);
                case 9:
                    return b = !("on" === b.google_adtest || fB(a.location, "google_scr_debug")), !nD(a, b, d);
                case 30:
                    return 0 == bF(a);
                case 26:
                    return 0 == DJ(a);
                case 27:
                    return 0 === CJ(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        SJ = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return BJ(a, c);
                case 3:
                case 4:
                    return FJ(a,
                        R(jl), R(il), c);
                case 8:
                    return EJ(a, d, "on" === b.google_adtest || fB(a.location, "google_ia_debug") ? -1 : ep(nl), R(ol));
                case 9:
                    return nD(a, !("on" === b.google_adtest || fB(a.location, "google_scr_debug")), d);
                case 16:
                    return Bt(b, a) ? 0 : 8388608;
                case 30:
                    return bF(a);
                case 26:
                    return DJ(a);
                case 27:
                    return CJ(a);
                default:
                    return 32
            }
        },
        TJ = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Dc(d)) return !1;
            a = ef(a);
            if (!a || !RJ(a, b, d, c)) return !1;
            b = Ay(a);
            if (aq(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        VJ =
        a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && UJ(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
        },
        WJ = a => {
            if (!a.hash) return null;
            let b = null;
            kf(cB, c => {
                !b && fB(a, c) && (b = dB[c])
            });
            return b
        },
        YJ = (a, b) => {
            const c = Ay(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && kf(eB, d => {
                !c.debugCardRequested && "number" === typeof d && iB(d, a.location) && (c.debugCardRequested = !0, XJ(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        $J = (a, b, c) => {
            if (!b) return null;
            const d = Ay(b);
            let e = 0;
            kf(Ec, f => {
                const g =
                    QJ[f];
                g && 0 === ZJ(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        aK = (a, b, c) => {
            const d = [];
            kf(Ec, e => {
                if (R(hm) || 3 !== e && 4 !== e) {
                    var f = ZJ(b, a, e, c);
                    0 !== f && d.push(e + ":" + f)
                }
            });
            return d.join(",") || null
        },
        bK = a => {
            const b = [],
                c = {};
            kf(a, (d, e) => {
                if ((e = Rp[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        cK = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        ZJ = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            var f = Ay(b),
                g = aq(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            kf(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            if (h && WJ(b.location) !== c) {
                e |= 128;
                f = R(Wk) && (2 == c || 1 == c);
                g = R(Xk) && (3 == c || 4 == c);
                const k = R(Vk) && 8 == c;
                if (f || g || k) return e
            }
            return e | SJ(b, a, c, d)
        },
        dK = (a, b) => {
            if (a) {
                var c = Ay(a),
                    d = {};
                kf(b, (e, f) => {
                    (f = Rp[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                kf(Ec, e => {
                    d[Sp[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        eK = (a, b, c) => {
            b = op.Fa(b, c);
            return ix(1,
                window, Tc(a, fp(ok) ? {
                    bust: fp(ok)
                } : {})).then(b)
        },
        XJ = (a, b, c) => {
            c = op.Fa(212, c);
            ix(3, a, b).then(c)
        },
        fK = a => {
            a = a.google_reactive_ad_format;
            return Dc(a) ? "" + a : null
        },
        UJ = a => !!fK(a) || null != a.google_pgb_reactive,
        gK = a => {
            a = fK(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
        };

    function hK(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function iK(a, b, c) {
        const d = b.J || b.pubWin,
            e = b.D;
        var f = aK(d, e, c);
        e.google_reactive_plat = f;
        (f = bK(a)) && (e.google_reactive_plaf = f);
        (f = cK(a)) && (e.google_reactive_fba = f);
        (f = HJ(d)) && (e.google_plas = f);
        jK(a, e);
        f = WJ(b.pubWin.location);
        kK(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        AJ(e);
        R(ml) && (e.fsapi = !0);
        R(ol) && 8 !== f && (f = mD(c, 86400), f ? .length && (e.vmsli = Math.floor((Date.now() - Math.max(...f)) / 6E4)));
        qj() || qt(b.pubWin.top);
        f = wp(b.pubWin, "rsrai", rp(429, (g, h) => lK(b, d, e.google_ad_client, a,
            g, h, c)), rp(430, (g, h) => gq(b.pubWin, "431", np, h)));
        b.m.push(f);
        Ay(d).wasReactiveTagRequestSent = !0;
        mK(b, a, c)
    }

    function mK(a, b, c) {
        const d = a.D,
            e = va(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = wp(a.pubWin, "apcnf", rp(353, (f, g) => {
            var h = a.pubWin,
                k = d.google_ad_client,
                l = a.ia.Ta,
                m = a.ia.wc;
            return Gf(g.origin) ? dJ(h, k, e, f.config, c, l, null, m) : !1
        }), rp(353, (f, g) => gq(a.pubWin, "353", np, g)));
        a.m.push(b)
    }

    function lK(a, b, c, d, e, f, g) {
        if (!Gf(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!iG(b, 1)) return !0;
        f && Hp(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = Ay(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                q = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (9 === q && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, nK(d, p));
                    const w = new oD;
                    if (hD(w, p) && w.B(p)) {
                        m = w;
                        continue
                    }
                }
                h.push(p);
                k.push(q)
            }
        }
        h.length && eK(a.ia.eg,
            522, n => {
                oK(h, b, n, d, g)
            });
        e && dJ(b, c, d, e, g, a.ia.Ta, m);
        return !0
    }

    function nK(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        va(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function oK(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = nK(d, h), delete h.google_reactive_sra_index, f.push(k), qp(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function jK(a, b) {
        const c = [];
        let d = !1;
        kf(Rp, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function kK(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d ? .google_adtest || b) c.google_adtest = "on"
        }
    };
    lc("script");
    var pK = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function qK(a, b) {
        if (!Bt(b, a)) return () => {};
        a = rK(b, a);
        if (!a) return () => {};
        const c = tG();
        b = Gc(b);
        const d = {
            eb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Za(c, d)
    }

    function rK(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Gt.test(a.className);) a = a.parentElement;
        return a
    }

    function sK(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {},
                h = a.childNodes[f];
            var c = h.style,
                d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = tf(c[d[k]]);
                    e = null === e ? null : Math.round(e);
                    null != e && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height) return h
        }
        return null
    }

    function tK(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function uK(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = tG();
            for (const d of a)
                if (d.eb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.eb.offsetWidth, qp(467, () => {
                    var e = d.eb,
                        f = d.D;
                    const g = sK(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = sK(e, f);
                    !h && g && 1 == e.childNodes.length ? (tK(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", b.adsbygoogle || (b.adsbygoogle = [], ff(b.document, Cj `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)),
                        b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ? h != g && (tK(g, !1), tK(h, !0)) : sp("auto_size_refresh", {
                        context: "showOrHideElm",
                        url: b.location.href,
                        nodes: e.childNodes.length
                    })
                })
        }
    }
    var vK = class extends Uo {
        constructor() {
            super(...arguments);
            this.j = null
        }
        init(a) {
            const b = jG();
            if (!Y(b, 27, !1)) {
                oG(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    uK(this, a)
                };
                Jb(a, "resize", c);
                Wo(this, () => {
                    Kb(a, "resize", c)
                })
            }
        }
    };
    var wK = class {
        constructor(a, b) {
            this.J = a;
            this.eb = b;
            this.j = null;
            this.m = 0
        }
        l() {
            10 <= ++this.m && t.clearInterval(this.j);
            var a = Et(this.J, this.eb);
            Ft(this.J, this.eb, a);
            a = At(this.eb, this.J);
            null != a && 0 === a.x || t.clearInterval(this.j)
        }
    };
    var xK = class {
        constructor(a) {
            this.B = -1;
            this.j = 0;
            this.l = this.F = null;
            this.G = 0;
            this.m = [];
            this.Zb = this.C = "";
            this.v = this.A = null;
            this.J = a.J;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.Aa = a.Aa;
            this.ia = a.ia;
            this.Ya = a.Ya;
            this.ea = a.ea
        }
    };

    function yK(a, b) {
        var c = jH(a, GC(b));
        c = bi(c, 2, b.tcString);
        c = bi(c, 4, b.addtlConsent || "");
        vh(c, 7, b.internalErrorState);
        c = !IC(b);
        Xh(a, 9, c);
        null != b.gdprApplies && Xh(a, 3, b.gdprApplies)
    }

    function zK(a) {
        const b = new OC(a.pubWin, {
            timeoutMs: -1,
            Jg: !0
        });
        if (!KC(b)) return Promise.resolve(null);
        const c = jG(),
            d = Y(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Y(c, 25, []);
            g.push(f);
            oG(c, 25, g)
        });
        d || null === d || (oG(c, 24, null), b.addEventListener(f => {
            if (FC(f)) {
                oG(c, 24, f);
                yK(a.l, f);
                for (const g of Y(c, 25, [])) g.resolve(f);
                oG(c, 25, [])
            } else oG(c, 24, null)
        }));
        return e
    };

    function AK(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var CK = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => BK(d));
        return wp(a, "adpnt", (e, f) => {
            if (cq(f, c.contentWindow)) {
                e = fq(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), 500 < a.googletag.queryIds.length && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function BK(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };
    var DK = class extends O {
        j() {
            return F(this, 6)
        }
        l() {
            return F(this, 7)
        }
    };
    var EK = class extends O {
        j() {
            return Ch(this, 1, Xg)
        }
    };
    EK.M = [1];
    var FK = class extends O {};
    FK.M = [19];
    var GK = [13, 14];
    let HK = void 0;

    function IK() {
        hi(HK, ji);
        return HK
    }

    function JK(a) {
        hi(HK, Om);
        HK = a
    };

    function KK(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Cc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function LK(a, b, c) {
        try {
            if (!Gf(c.origin) || !cq(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.ua[d]) && a.O.sc(168, () => {
            e.call(a, b, c)
        })
    }
    class MK extends Uo {
        constructor(a, b) {
            var c = op,
                d = np;
            super();
            this.m = a;
            this.j = b;
            this.O = c;
            this.na = d;
            this.ua = {};
            this.Bc = this.O.Fa(168, (e, f) => void LK(this, e, f));
            this.Dc = this.O.Fa(169, (e, f) => gq(this.m, "ras::xsf", this.na, f));
            this.Z = [];
            this.ba(this.ua);
            this.Z.push(vp(this.m, "sth", this.Bc, this.Dc))
        }
        l() {
            for (const a of this.Z) a();
            this.Z.length = 0;
            super.l()
        }
    };
    class NK extends MK {};

    function OK(a, b, c = null) {
        return new PK(a, b, c)
    }
    var PK = class extends NK {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.B = Q(HG);
            this.v = () => {};
            Jb(this.j, "load", this.v)
        }
        l() {
            Kb(this.j, "load", this.v);
            super.l()
        }
        ba(a) {
            a["adsense-labs"] = b => {
                if (b = fq(b).settings)
                    if (b = gi(Ei, JSON.parse(b)), null != D(b, 1)) {
                        var c;
                        if (c = R(mk)) c = b.P, c = 0 < Mh(c, c[x], Ai, 4, !1, 3).length;
                        if (c) {
                            c = B(b, Ai, 4);
                            var d = this.B;
                            const g = new io;
                            for (var e of c) switch (e.getVersion()) {
                                case 1:
                                    Xh(g, 1, !0);
                                    break;
                                case 2:
                                    Xh(g, 2, !0)
                            }
                            e = new jo;
                            e = Nh(e, 1, ko, g);
                            GG(d, e);
                            d = this.m;
                            e = this.A;
                            if (!Y(jG(), 37, !1)) {
                                d = new lJ(d);
                                for (var f of c) switch (f.getVersion()) {
                                    case 1:
                                        iJ(d, "__gads", f, e);
                                        break;
                                    case 2:
                                        iJ(d, "__gpi", f, e)
                                }
                                oG(jG(), 37, !0)
                            }
                            vh(b, 4, void 0, !1)
                        }
                        f = this.m;
                        c = I(b, 1) || "";
                        if (R(ik) ? null != nH({
                                win: f,
                                dd: IK()
                            }).j : 1) {
                            R(ik) ? (e = nH({
                                win: f,
                                dd: IK()
                            }), e = null != e.j ? KK(e.getValue()) : {}) : e = KK(f.localStorage);
                            null !== b && (e[c] = b.toJSON());
                            try {
                                f.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                            } catch (g) {}
                        }
                    }
            }
        }
    };

    function QK(a) {
        a.A = a.B;
        a.F.style.transition = "height 500ms";
        a.v.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        RK(a)
    }

    function SK(a, b) {
        a.j.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function RK(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.A}px, 0px)`;
        a.j.style.clip = b;
        a.v.style.clip = b;
        a.j.setAttribute("height", a.A);
        a.j.style.height = a.A + "px";
        a.v.setAttribute("height", a.A);
        a.v.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function TK(a, b) {
        b = rf(b.r_nh);
        a.B = null == b ? 0 : b;
        if (0 >= a.B) return "1";
        a.I = Mj(a.F).y;
        a.H = dq(a.m);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Zp(a.m) - a.m.innerHeight) return "3";
        b = a.H;
        a.j.setAttribute("height", a.B);
        a.j.style.height = a.B + "px";
        a.v.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.v.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.m.innerHeight - a.I, a.A);
        Gj(a.v, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        Gj(a.j, {
            clip: b
        });
        Gj(a.v, {
            clip: b
        });
        return "0"
    }
    class UK extends NK {
        constructor(a, b) {
            super(a.J, b);
            this.v = a.ea;
            this.F = this.v.parentElement && this.v.parentElement.classList.contains("adsbygoogle") ? this.v.parentElement : this.v;
            this.A = parseInt(this.v.style.height, 10);
            this.Ba = this.Pb = !1;
            this.pa = this.H = this.B = 0;
            this.Cc = this.A / 5;
            this.I = Mj(this.F).y;
            this.Ac = Fb(rp(651, () => {
                this.I = Mj(this.F).y;
                var c = this.H;
                this.H = dq(this.m);
                this.A < this.B ? (c = this.H - c, 0 < c && (this.pa += c, this.pa >= this.Cc ? (QK(this), SK(this, this.B)) : (this.A = Math.min(this.B, this.A + c), SK(this, c), RK(this)))) :
                    Kb(this.m, "scroll", this.L)
            }), this);
            this.L = () => {
                var c = this.Ac;
                Ki.requestAnimationFrame ? Ki.requestAnimationFrame(c) : c()
            }
        }
        ba(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = fq(b);
                this.Pb || (this.Pb = !0, b = TK(this, b), "0" === b && Jb(this.m, "scroll", this.L, Gb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ba || (this.Ba = !0, QK(this), Kb(this.m, "scroll", this.L))
            }
        }
        l() {
            this.L && Kb(this.m, "scroll", this.L, Gb);
            super.l()
        }
    };

    function VK(a) {
        const b = a.I.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class WK extends Uo {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.I = c;
            this.B = 0;
            this.v = VK(this);
            this.H = Ab(this.F, this);
            this.j = rp(433, () => {
                var d = this.H;
                Ki.requestAnimationFrame ? Ki.requestAnimationFrame(d) : d()
            });
            Jb(this.m, "scroll", this.j, Gb)
        }
        F() {
            const a = VK(this);
            if (a && !this.v) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (xp(c, "ig", b, "*", 2), 10 <= ++this.B && this.j && Kb(this.m, "scroll", this.j, Gb))
            }
            this.v = a
        }
    };

    function XK(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function YK(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function ZK(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function $K(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Gj(a, "transition", b.join(","))
    }
    var aL = yb(function() {
        if (oc) return !0;
        var a = se(document, "DIV"),
            b = sc ? "-webkit" : rc ? "-moz" : oc ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        Kd("div");
        b = Nd("div", b);
        Zd(a, b);
        a = a.firstChild;
        b = a.style[je("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Hj(a, "transition")] || "")
    });

    function bL(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function cL(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function dL(a, b, c, d) {
        return "" != a.errors || b ? null : "" == a.j.replace(eL, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function fL(a) {
        var b = dL(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var gL = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.errors = b || ""
        }
        la(a) {
            0 > this.errors.indexOf(a) && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.errors].join("|")
        }
    };

    function hL(a) {
        let b = a.L;
        a.B = () => {};
        iL(a, a.C, b);
        let c = a.C.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : hf(c, b)
            } catch (g) {
                a.j.la("c")
            }
            const f = jL(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.I = !0);
            if (d && !f && kL(e)) {
                cL(a.j, "l");
                a.G = c;
                break
            }
            d = d && f;
            if (e && lL(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !bf(b)) {
                        cL(a.j, "c");
                        break
                    }
                } catch (g) {
                    cL(a.j,
                        "c");
                    break
                }
            }
        }
        a.animate && a.A && mL(a);
        return a.j
    }

    function nL(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) Gj(k, m[n], "0px")
        }

        function c() {
            oL(d, g, h);
            !k || l || h || (b(pL), b(qL))
        }
        const d = a.C;
        d.style.overflow = a.Gc ? "visible" : "hidden";
        a.animate && (a.G ? ($K(d, rL()), $K(a.G, rL())) : $K(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.H && (d.style.opacity = String(a.H));
        const e = null != a.width && null != a.m && (a.yd || a.m > a.width) ? a.m : null,
            f = null != a.height && null != a.l && (a.yd || a.l > a.height) ? a.l : null;
        if (a.F) {
            const m = a.F.length;
            for (let n = 0; n < m; n++) oL(a.F[n], e, f)
        }
        const g = a.m,
            h = a.l,
            k = a.G,
            l = a.I;
        a.animate ? t.setTimeout(c, 1E3) : c()
    }

    function sL(a) {
        if (a.A && !a.O || null == a.m && null == a.l && null == a.H && a.A) return a.j;
        var b = a.A;
        a.A = !1;
        hL(a);
        a.A = b;
        if (!b || null != a.check && !dL(a.j, a.check, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.width = null, a.height = null);
        if (null == a.width && null !== a.m || null == a.height && null !== a.l) a.animate = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.errors = "";
        nL(a);
        return hL(a)
    }

    function lL(a, b) {
        let c = !1;
        "none" == b.display && (cL(a.j, "n"), a.A && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || cL(a.j, "v");
        "hidden" == b.overflow && cL(a.j, "o");
        "absolute" == b.position ? (cL(a.j, "a"), c = !0) : "fixed" == b.position && (cL(a.j, "f"), c = !0);
        return c
    }

    function iL(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = tL(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && bL(a.j, 0, "o"), d & 4 && bL(a.j, 1, "o"));
        return !(d & 1)
    }

    function jL(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (y) {
            a.j.la("s")
        }
        var f = c.getAttribute("width"),
            g = rf(f),
            h = c.getAttribute("height"),
            k = rf(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = iL(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            q = e && e.height,
            w = tf(m) == a.width && tf(n) == a.height;
        m = w ? m : p;
        q = w ? n : q;
        p = tf(m);
        w = tf(q);
        g = null !== a.width && (null !== p && a.width >= p || null !== g && a.width >= g);
        w = null !== a.height && (null !== w && a.height >= w || null !== k && a.height >= k);
        k = !b && kL(d);
        w = b || w || k || !(f ||
            m || d && (!uL(String(d.minWidth)) || !vL(String(d.maxWidth))));
        l = b || g || k || l || !(h || q || d && (!uL(String(d.minHeight)) || !vL(String(d.maxHeight))));
        wL(a, 0, w, c, "width", f, a.width, a.m);
        xL(a, 0, "d", w, e, d, "width", m, a.width, a.m);
        xL(a, 0, "m", w, e, d, "minWidth", e && e.minWidth, a.width, a.m);
        xL(a, 0, "M", w, e, d, "maxWidth", e && e.maxWidth, a.width, a.m);
        a.ze ? (c = /^html|body$/i.test(c.nodeName), f = tf(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.A && !c && h && (e.setProperty("height",
            "auto", "important"), d && !uL(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !vL(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (wL(a, 1, l, c, "height", h, a.height, a.l), xL(a, 1, "d", l, e, d, "height", q, a.height, a.l), xL(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.l), xL(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.l));
        return b
    }

    function mL(a) {
        function b() {
            if (0 < c) {
                var l = hf(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = tf(l.width);
                l = tf(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.L,
            e = a.C,
            f = a.m,
            g = a.l,
            h = a.B;
        let k;
        t.setTimeout(() => {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function tL(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = hf(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.v.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.v.boundingClientRect.left ? 2 : 0) | (c.bottom > a.v.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function wL(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = rf(f);
                null == f && (a.j.la("n"), bL(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.A)
                        if (a.animate) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.B;
                            a.B = (m, n) => {
                                m == b && Te(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else Te(d, e, String(h))
                } else bL(a.j, b, "d")
        }
    }

    function xL(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? uL(f) : vL(f)) || (f = tf(f), null == f ? cL(a.j, "p") : null != k && cL(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? uL(h) : vL(h)) return;
                h = tf(h);
                null == h && (a.j.la("p"), bL(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.A)
                        if (a.animate) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.B;
                            a.B = (p, q) => {
                                p == b && (e[g] = m - q + "px");
                                n && n(p, q)
                            }
                        } else e[g] = l + "px"
                } else bL(a.j, b, c)
        }
    }
    var CL = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.C = b;
            this.F = c;
            this.v = new yL(this.C);
            this.G = this.B = null;
            this.I = !1;
            this.L = (a = this.C.ownerDocument) && (a.defaultView || a.parentWindow);
            this.v = new yL(this.C);
            this.A = g;
            this.O = zL(this.v, d.He, d.height, d.uc);
            this.width = this.A ? this.v.boundingClientRect ? this.v.boundingClientRect.right - this.v.boundingClientRect.left : null : e;
            this.height = this.A ? this.v.boundingClientRect ? this.v.boundingClientRect.bottom - this.v.boundingClientRect.top : null : f;
            this.m = AL(d.width);
            this.l = AL(d.height);
            this.H = this.A ? AL(d.opacity) : null;
            this.check = d.check;
            this.uc = !!d.uc;
            this.animate = "animate" == d.He && !BL(this.v, this.l, this.uc) && aL();
            this.Gc = !!d.Gc;
            this.j = new gL;
            BL(this.v, this.l, this.uc) && cL(this.j, "r");
            e = this.v;
            e.j && e.l >= e.T && cL(this.j, "b");
            this.yd = !!d.yd;
            this.ze = !!d.ze
        }
    };

    function BL(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.visible) && (c ? (b = a.l + Math.min(b, AL(a.getHeight())), a = a.j && b >= a.T) : a = a.j && a.l >= a.T, d = a);
        return d
    }
    var yL = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && ef(c);
            this.j = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.T = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && XK(b);
            this.visible = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function zL(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return BL(a, c, d)
        }
    }

    function kL(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function DL(a, b, c, d) {
        return sL(new CL(a, b, d, c, null, null, !0))
    }
    var EL = new gL("s", ""),
        eL = RegExp("[lonvafrbpEe]", "g");

    function vL(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function uL(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function oL(a, b, c) {
        null !== b && null !== rf(a.getAttribute("width")) && a.setAttribute("width", String(b));
        null !== c && null !== rf(a.getAttribute("height")) && a.setAttribute("height", String(c));
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var pL = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        qL = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function rL() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = pL;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = qL;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function AL(a) {
        return "string" === typeof a ? rf(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function FL(a, b, c) {
        const d = {
            scrl: dq(a.m || window),
            adk: a.B,
            adf: a.A,
            fmt: a.v
        };
        b && (d.str = BL(b, rf(c.r_nh), sf(c.r_cab)), d.ad_y = b.l, d.vph = b.T);
        kf(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function GL(a, b, c) {
        var d = parseFloat(String(b.gen204_fraction));
        d = isNaN(d) || 1 < d || 0 > d ? .05 : d;
        b = FL(a, c, b);
        b.url = a.m.document.URL;
        sp("resize", b, d)
    }
    var HL = class extends NK {
        constructor(a, b, c) {
            super(a, b);
            this.B = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.v = String(c.google_ad_format || "")
        }
        ba(a) {
            a["resize-me"] = (b, c) => {
                b = fq(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = rf(b.r_nw),
                        f = rf(b.r_nh),
                        g = rf(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = g,
                            l = sf(b.r_ao),
                            m = sf(b.r_ifr),
                            n = sf(b.r_cab);
                        const q = window;
                        if (q)
                            if ("no_rsz" === h) b.err = "7", R(kl) || GL(this, b, null), e = !0;
                            else if (g = new yL(this.j), g.j) {
                            var p =
                                g.getWidth();
                            null != p && (b.w = p);
                            p = g.getHeight();
                            null != p && (b.h = p);
                            if (zL(g, h, f, n)) {
                                const w = this.j.ownerDocument.getElementById(this.j.id + "_host");
                                p = w || this.j;
                                d = DL(q, p, {
                                    width: e,
                                    height: f,
                                    opacity: k,
                                    check: d,
                                    He: h,
                                    Gc: l,
                                    yd: m,
                                    uc: n
                                }, w ? [this.j] : null);
                                b.r_cui && sf(b.r_cui.toString()) && v(p, {
                                    height: (null === f ? 0 : f - 48) + "px",
                                    top: "24px"
                                });
                                null != e && (b.nw = e);
                                null != f && (b.nh = f);
                                b.rsz = d.toString();
                                b.abl = fL(d);
                                b.frsz = ("force" === h).toString();
                                b.err = "0";
                                R(kl) || GL(this, b, g);
                                e = !0
                            } else b.err = "1", R(kl) || GL(this, b, g), e = !1
                        } else b.err =
                            "3", R(kl) || GL(this, b, null), e = !1;
                        else b.err = "2", R(kl) || GL(this, b, null), e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id", b.qid)
                }
            }
        }
    };
    const IL = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const JL = /^blogger$/,
        KL = /^wordpress(.|\s|$)/i,
        LL = /^joomla!/i,
        ML = /^drupal/i,
        NL = /\/wp-content\//,
        OL = /\/wp-content\/plugins\/advanced-ads/,
        PL = /\/wp-content\/themes\/genesis/,
        QL = /\/wp-content\/plugins\/genesis/;

    function RL(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (OL.test(e)) return 5;
                if (QL.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", PL.test(e) || QL.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (JL.test(f)) return 1;
                if (KL.test(f)) return 2;
                if (LL.test(f)) return 3;
                if (ML.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", NL.test(d))) return 2;
        return 0
    };
    let SL = navigator;
    var TL = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        UL = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return TL(a.toLowerCase())
        };
    const VL = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        WL = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        XL = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function YL(a) {
        var b = window;
        return "on" === a.google_adtest || "on" === a.google_adbreak_test || b.location.host.endsWith("h5games.usercontent.goog") ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && 0 < c) || [] : []
    };

    function ZL(a, b) {
        b && !a.j && (b = b.split(":"), a.j = b.find(c => 0 === c.indexOf("ID=")) || null, a.m = b.find(c => 0 === c.indexOf("T=")) ? .substring(2) || null)
    }
    var $L = class {
            constructor() {
                this.v = new Date(Date.now());
                this.m = this.j = null;
                this.l = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.l[3] = {
                    [71]: (...a) => {
                        var b = this.j,
                            c = Number(a[1]);
                        a = null !== b ? mf(`${"w5uHecUBa2S"}:${Number(a[0])}:${b}`) % c === Math.floor(this.v.valueOf() / 864E5) % c : void 0;
                        return a
                    }
                };
                this.l[4] = {
                    [15]: () => {
                        var a = Number(this.m || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(1E3 * a), a = 1E4 * a.getFullYear() + 100 * (a.getMonth() + 1) + a.getDate());
                        return a
                    }
                }
            }
        },
        aM;

    function bM(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function cM(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function dM(a = jf()) {
        return b => mf(`${b} + ${a}`) % 1E3
    };

    function eM(a, b) {
        a.j = $o(14, b, () => {})
    }
    class fM {
        constructor() {
            this.j = () => {}
        }
    }

    function gM(a) {
        Q(fM).j(a)
    };

    function hM(a = bM()) {
        ap(Q(bp), a);
        iM(a);
        eM(Q(fM), a);
        Q(dp).j()
    }

    function iM(a) {
        const b = Q(dp);
        b.l = (c, d) => $o(5, a, () => !1)(c, d, 1);
        b.m = (c, d) => $o(6, a, () => 0)(c, d, 1);
        b.v = (c, d) => $o(7, a, () => "")(c, d, 1);
        b.A = (c, d) => $o(8, a, () => [])(c, d, 1);
        b.j = () => {
            $o(15, a, () => {})(1)
        }
    };

    function jM(a, b, c) {
        var d = {
            [0]: dM(Kf(b).toString())
        };
        if (c) {
            c = hJ(new lJ(b), "__gads", c) || "";
            aM || (aM = new $L);
            b = aM;
            ZL(b, c);
            gM(b.l);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? dM(e)(f) : void 0
        }
        d = cp(a, d);
        Jp.Ka(1085, DG(Q(HG), a, d))
    }
    var kM = (a, b) => {
            jM(20, a, b);
            jM(17, a, b)
        },
        lM = a => {
            const b = Q(bp).j();
            a = YL(a);
            return b.concat(a).join(",")
        },
        mM = a => {
            const b = sm();
            b && (a.debug_experiment_id = b)
        };

    function nM() {
        const a = new vt;
        "SVGElement" in t && "createElementNS" in t.document && a.set(0);
        const b = yf();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        "TextDecoder" in t && "TextEncoder" in t && a.set(4);
        return ut(a)
    };
    const oM = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        pM = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function qM(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return oM.get(b.type) ? ? null
        } catch {}
        return pM.get(a.performance ? .navigation ? .type) ? ? null
    };

    function rM(a, b) {
        if (jc()) {
            var c = a.document.documentElement.lang;
            sM(a) ? tM(b, Kf(a), !0, "", c) : (new MutationObserver((d, e) => {
                sM(a) && (tM(b, Kf(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function sM(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function tM(a, b, c, d, e) {
        kp({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function uM(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const vM = /[+, ]/;

    function wM(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = Nf(d);
        var h = xt(d, c.google_ad_width, c.google_ad_height);
        var k = wt(g).je;
        var l = d.top == d ? 0 : bf(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = zt(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (p) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && bf(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = mj()) && d.referrer || "";
        e.google_referrer_url = d;
        yt(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in IL), 2 <= e.length && (d = d || e[e.length - 2] in IL), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = xM(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && yM.test(f) &&
            (g = "/pagead/lopri?");
        a = Vj(b, `https://${e}${g}` + (F(a.Aa, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function zM(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = a ? qe(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && bf(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function AM(a, b) {
        var c = lM(a.pubWin);
        a.D.saaei && (c += ("" === c ? "" : ",") + a.D.saaei);
        b.eid = c;
        c = a.D.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function BM(a, b) {
        a = (a = ef(a.pubWin)) && a.document ? st(a.document, a) : new de(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function CM(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function DM(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.J,
            g = Nf(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = mj(e)) && va(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = wt(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.je || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.Zb && (b.etu = a.Zb);
        (c = $J(d, f, f ? gH(c, f) : null)) && (b.fc = c);
        if (!dk(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = (new me(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const X = h.contentWindow.document;
                    X.open();
                    X.write(Gd(Wd));
                    X.close();
                    g += X.documentMode
                } catch (X) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let k, l, m, n, p, q, w, y, E;
        try {
            var G = e.screenX;
            k = e.screenY
        } catch (X) {}
        try {
            l = e.outerWidth, m = e.outerHeight
        } catch (X) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (X) {}
        try {
            q = e.screenLeft, w = e.screenTop
        } catch (X) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (X) {}
        try {
            y =
                e.screen.availWidth, E = e.screen.availTop
        } catch (X) {}
        b.brdim = [q, w, G, k, y, E, l, m, n, p].join();
        G = 0;
        void 0 === t.postMessage && (G |= 1);
        0 < G && (b.osd = G);
        b.vis = XK(e.document);
        G = a.ea;
        e = UJ(d) ? EL : sL(new CL(e, G, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = fL(e);
        if (!UJ(d) && (e = ek(d), null != e)) {
            G = 0;
            a: {
                try {
                    {
                        var J = d.google_async_iframe_id;
                        const X = window.document;
                        if (J) var H = X.getElementById(J);
                        else {
                            var L = X.getElementsByTagName("script"),
                                T = L[L.length - 1];
                            H = T && T.parentNode || null
                        }
                    }
                    if (J =
                        H) {
                        H = [];
                        L = 0;
                        for (var Ja = Date.now(); 100 >= ++L && 50 > Date.now() - Ja && (J = zM(J));) 1 === J.nodeType && H.push(J);
                        var Rb = H;
                        b: {
                            for (Ja = 0; Ja < Rb.length; Ja++) {
                                c: {
                                    var Z = Rb[Ja];
                                    try {
                                        if (Z.parentNode && 0 < Z.offsetWidth && 0 < Z.offsetHeight && Z.style && "none" !== Z.style.display && "hidden" !== Z.style.visibility && (!Z.style.opacity || 0 !== Number(Z.style.opacity))) {
                                            const X = Z.getBoundingClientRect();
                                            var xb = 0 < X.right && 0 < X.bottom;
                                            break c
                                        }
                                    } catch (X) {}
                                    xb = !1
                                }
                                if (!xb) {
                                    var ed = !1;
                                    break b
                                }
                            }
                            ed = !0
                        }
                        if (ed) {
                            b: {
                                const X = Date.now();ed = /^html|body$/i;xb = /^fixed/i;
                                for (Z = 0; Z < Rb.length && 50 > Date.now() - X; Z++) {
                                    const fd = Rb[Z];
                                    if (!ed.test(fd.tagName) && xb.test(fd.style.position || Kj(fd, "position"))) {
                                        var Ic = fd;
                                        break b
                                    }
                                }
                                Ic = null
                            }
                            break a
                        }
                    }
                } catch {}
                Ic = null
            }
            Ic && Ic.offsetWidth * Ic.offsetHeight <= 4 * e.width * e.height && (G = 1);
            b.pfx = G
        }
        a: {
            if (.05 > Math.random() && f) try {
                const X = f.document.getElementsByTagName("head")[0];
                var De = X ? RL(X) : 0;
                break a
            } catch (X) {}
            De = 0
        }
        f = De;
        0 !== f && (b.cms = f);
        d.google_lrv !== a.Ya && (b.alvm = d.google_lrv || "none")
    }

    function EM(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : cf(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function FM(a, b) {
        const c = Y(b, 8, {});
        b = Y(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function GM(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = Lp;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (T) {}
            g = null
        }(e = (e = g) ? AK(e, t.Date.now() - Lp, 1E6) : null) && (b.bdt = e);
        b.idt = AK(a.G, Lp);
        e = a.D;
        b.shv = I(a.Aa, 2);
        a.Ya && (b.mjsv = a.Ya);
        "sa" == e.google_loader_used || "sd" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) &&
            (b.saldr = e.google_loader_used);
        if (e = mj(a.pubWin)) b.is_amp = 1, b.amp_v = nj(e), (e = oj(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new lJ(a.pubWin);
        (g = hJ(e, "__gads", c)) && (b.cookie = g);
        (g = hJ(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        "1" === hJ(e, "__gpi_opt_out", c) && (b.pdopt = "1");
        e = jG();
        f = Y(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = Y(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        FM(d, e);
        g = Y(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = mj(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f &&
            (g += f.replace(/\D/g, "").substr(0, 6))) : g = null, g = +g) : (g = Nf(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = Y(e, 7, g);
        R($l) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = Y(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(vM);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f = Y(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split(vM);
                f[k] ||
                    (f[k] = {});
                var m = "";
                for (var n = 0; n < l.length; n++) {
                    var p = l[n];
                    "" !== p && (f[k][p] ? m += "+" + p : f[k][p] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var q = Nf(window),
                w = q.google_prev_clients;
            w || (w = q.google_prev_clients = {});
            if (e in w) var y = 1;
            else w[e] = !0, y = 2
        } catch {
            y = 0
        }
        b.pv = y;
        a.J && R(gl) && (y = a.J, y = jc() && sM(y) ? y.document.documentElement.lang : void 0, y && (b.tl = y));
        w = a.pubWin.document;
        y = a.D;
        e = a.pubWin;
        q = w.domain;
        e = (F(c, 5) && hH(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = w.referrer;
        m = Xj();
        if (mj()) var E = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = y.google_analytics_domain_name;
            c = "undefined" == typeof f ? UL("auto", q) : UL(f, q);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (q = (rj() || window).gaGlobal) || (q = {}, (rj() || window).gaGlobal = q);
            w = !1;
            if (n) {
                var G = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? q.sid = G[3] : q.sid || (q.sid = g + "");
                q.vid = G[0] +
                    "." + G[1];
                q.from_cookie = !0
            } else {
                q.sid || (q.sid = g + "");
                if (!q.vid) {
                    w = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = SL.appName;
                    p = SL.version;
                    var J = SL.language ? SL.language : SL.browserLanguage,
                        H = SL.platform,
                        L = SL.userAgent;
                    try {
                        G = SL.javaEnabled()
                    } catch (T) {
                        G = !1
                    }
                    G = [n, p, J, H, L, G ? 1 : 0].join("");
                    h ? G += h.width + "x" + h.height + h.colorDepth : t.java && t.java.awt && (h = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), G += h.screen.width + "x" + h.screen.height);
                    G = G + e + (k || "");
                    for (h = G.length; 0 < m;) G += m-- ^ h++;
                    q.vid = (l ^ TL(G) & 2147483647) +
                        "." + g
                }
                q.from_cookie || (q.from_cookie = !1)
            }
            if (!q.cid) {
                b: for (g = f, G = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, G = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = VL.exec(e[f]) || WL.exec(e[f]) || XL.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == G) {
                            E = h[2];
                            break b
                        }
                        k < g && (g = k, E = h[2])
                    }w && E && -1 != E.search(/^\d+\.\d+$/) ? (q.vid = E, q.from_cookie = !0) : E != q.vid && (q.cid = E)
            }
            q.dh = c;
            q.hid || (q.hid = Math.round(2147483647 * Math.random()));
            E = q
        }
        b.ga_vid = E.vid;
        b.ga_sid = E.sid;
        b.ga_hid = E.hid;
        b.ga_fc = E.from_cookie;
        b.ga_cid = E.cid;
        b.ga_wpids =
            y.google_analytics_uacct;
        EM(a.pubWin, b);
        (a = d.google_ad_layout) && 0 <= pK[a] && (b.rplot = pK[a])
    }

    function HM(a, b) {
        a = a.l;
        if (a ? .j() || sG()) b.npa = 1;
        if (a) {
            null != Bh(a, 3) && (b.gdpr = F(a, 3) ? "1" : "0");
            var c = D(a, 1);
            c && (b.us_privacy = c);
            (c = D(a, 2)) && (b.gdpr_consent = c);
            (c = D(a, 4)) && (b.addtl_consent = c);
            (c = z(a, 7)) && (b.tcfe = c);
            R(kk) && ((c = I(a, 11)) && (b.gpp = c), (a = Ch(a, 10, Sg)) && 0 < a.length && (b.gpp_sid = a.join(",")))
        }
    }

    function IM(a, b) {
        const c = a.D;
        HM(a, b);
        kf(uG, (d, e) => {
            b[d] = c[e]
        });
        UJ(c) && (a = fK(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = Mu(c), null != a.j && (a = Jr(a.getValue()), b.pi = a))
    }

    function JM(a, b) {
        var c = qj() || qt(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = qt(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function KM(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = qt(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = mf(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function LM(a, b) {
        (a = qG()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function MM(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function NM(a, b) {
        if (a = a.pubWin.google_user_agent_client_hint) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = Qf(c);
            b.uach = a
        }
    }

    function OM(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function PM(a, b) {
        0 <= a.D.google_ad_public_floor && (b.pubf = a.D.google_ad_public_floor);
        0 <= a.D.google_ad_private_floor && (b.pvtf = a.D.google_ad_private_floor)
    }

    function QM(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Ka).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function RM(a, b) {
        R(mm) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function SM(a, b) {
        R(cm) || cM("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function xM(a, b) {
        const c = {};
        IM(a, c);
        NM(a, c);
        GM(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = Xj();
        c.u_h = Ki.screen ? .height;
        c.u_w = Ki.screen ? .width;
        c.u_ah = Ki.screen ? .availHeight;
        c.u_aw = Ki.screen ? .availWidth;
        c.u_cd = Ki.screen ? .colorDepth;
        c.u_sd = rt(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        qp(889, () => {
            if (null == a.J) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = gJ(a.J, a.ea);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                tt(a.ea) || (c.adx = -12245933,
                    c.ady = -12245933, a.j |= 32768)
            }
        });
        JM(a, c);
        KM(a, c);
        BM(a, c);
        AM(a, c);
        c.oid = 2;
        LM(a, c);
        c.pvsid = Kf(a.pubWin, op);
        MM(a, c);
        OM(a, c);
        c.uas = uM(a.pubWin);
        const d = qM(a.pubWin);
        d && (c.nvt = d);
        a.C && (c.scar = a.C);
        a.v instanceof Uint8Array ? c.topics = Qf(a.v) : a.v && (c.topics = a.v, c.tps = a.v);
        DM(a, c, b);
        c.fu = a.j;
        c.bc = nM();
        F(a.Aa, 9) && (mM(c), c.creatives = CM(/\b(?:creatives)=([\d,]+)/), c.adgroups = CM(/\b(?:adgroups)=([\d,]+)/), c.adgroups && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0));
        Fp() && (c.atl = !0);
        PM(a, c);
        QM(a, c);
        RM(a, c);
        SM(a, c);
        null == fp(Vl) || !1 !== a.D.google_video_play_muted && !0 !== R(Wl) || 10 !== a.D.google_reactive_ad_format && 11 !== a.D.google_reactive_ad_format || (c.sdkv = fp(Vl));
        return c
    }
    const yM = /YtLoPri/;
    var TM = class extends O {},
        UM = ki(TM);
    TM.M = [3];
    const VM = [255, 255, 255];

    function WM(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a || "" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function XM(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = WM(b.backgroundColor);
        var c = YM(b);
        if (c) return c;
        a = (a = a.parentElement) ? XM(a) : VM;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function YM(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var $M = class {
        constructor(a, b, c, d) {
            this.Ae = b;
            this.Ld = c;
            this.Eb = d;
            this.l = 0;
            this.j = new ZM(a)
        }
    };

    function aN(a, b) {
        b -= a.v;
        for (const c of a.j.keys()) {
            const d = a.j.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.l -= e;
            0 < e && a.j.set(c, d.slice(e))
        }
    }
    class ZM {
        constructor(a) {
            this.v = a;
            this.j = new Map;
            this.l = 0
        }
        get m() {
            return this.l
        }
    };

    function bN(a) {
        v(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };
    var cN = [];

    function dN(a, b) {
        a = eN(a.document, "search");
        v(a, b);
        a.className = "google-material-icons";
        return a
    }

    function fN(a, b, c, d) {
        a = eN(a, "close");
        const e = c ? "13px" : "20px";
        v(a, {
            color: fp(Cl) || "#5F6368",
            display: "block",
            "font-size": c ? "20px" : "15px",
            left: b ? "" : e,
            right: b ? e : "",
            "pointer-events": "initial",
            position: "absolute",
            top: c ? "15px" : "16px",
            transform: "none"
        });
        c && (a.role = "button", a.ariaLabel = d, a.tabIndex = 0);
        return a
    }

    function eN(a, b) {
        const c = a.createElement("SPAN");
        c.appendChild(a.createTextNode(b));
        bN(c);
        v(c, {
            "font-family": '"Google Material Icons"',
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        });
        c.className = "google-material-icons";
        return c
    };
    var gN = class {
        constructor(a, b, c) {
            this.position = a;
            this.Dd = b;
            this.j = c
        }
    };

    function hN(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function iN(a, b, c) {
        var d = new gN(b.rc.Tf(b.pb), b.Dd + 2 * b.pb, Math.min(S(a), b.ke) - b.rc.be() + 2 * b.pb);
        d = d.position.hf(a, d.Dd, d.j);
        var e = Wp(a),
            f = S(a);
        c = ON(a, new Li(ae(d.top, 0, f - 1), ae(d.right, 0, e - 1), ae(d.bottom, 0, f - 1), ae(d.left, 0, e - 1)), c);
        f = PN(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new hN(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new hN(g, d.bottom));
        a = S(a);
        d = [];
        for (f = e.length - 1; 0 <= f; f--) d.push(new hN(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.pb, a > b.rc.be() +
                    b.Mf ? a = null : (d = Math.min(h.end - b.pb, b.ke) - a, a = d < b.Rf ? null : {
                        position: b.rc.sg(a),
                        lc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            Ic: b,
            zm: c
        }
    }

    function ON(a, b, c) {
        const d = xy(new zy(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function PN(a) {
        return Array.from(a).map(QN).sort((b, c) => b.start - c.start)
    }

    function QN(a) {
        a = a.getBoundingClientRect();
        return new hN(a.top, a.bottom)
    };

    function RN({
        qa: a,
        Qa: b
    }) {
        return new SN(a, b)
    }
    var SN = class {
            constructor(a, b) {
                this.qa = a;
                this.Qa = b
            }
            Tf(a) {
                return new SN(this.qa - a, this.Qa - a)
            }
            hf(a, b, c) {
                a = S(a) - this.qa - c;
                return new Li(a, this.Qa + b, a + c, this.Qa)
            }
            Xe(a) {
                a.bottom = `${this.qa}px`;
                a.left = `${this.Qa}px`;
                a.right = ""
            }
            vf() {
                return 0
            }
            be() {
                return this.qa
            }
            sg(a) {
                return new SN(a, this.Qa)
            }
        },
        TN = class {
            constructor(a, b) {
                this.qa = a;
                this.Lb = b
            }
            Tf(a) {
                return new TN(this.qa - a, this.Lb - a)
            }
            hf(a, b, c) {
                const d = S(a) - this.qa - c;
                a = Wp(a) - this.Lb - b;
                return new Li(d, a + b, d + c, a)
            }
            Xe(a) {
                a.bottom = `${this.qa}px`;
                a.right = `${this.Lb}px`;
                a.left = ""
            }
            vf() {
                return 1
            }
            be() {
                return this.qa
            }
            sg(a) {
                return new TN(a, this.Lb)
            }
        };

    function UN(a) {
        const b = a.hh,
            c = a.Sg,
            d = a.Ng,
            e = a.li,
            f = a.Og;
        a = a.Mg;
        return Gx('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + V(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            V(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + V(a) + "px; border-radius: " + V(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + V(a) + "px; margin: 0; border-radius: " + V(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            V(d) + "px; height: " + V(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + V(d) + "px; margin-bottom: " + V(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + V(d) + "px; width: " + V(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            V(d - 6) + "px; width: " + V(d - 6) + "px; border-radius: " + V(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            V(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + V(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            V(16) + "px; max-width: calc(90vw - " + V(2 * d) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + V(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + V(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            V(2 * d) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            Kx(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + Kx(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function VN(a) {
        const b = a.googleIconName,
            c = a.backgroundColorCss;
        return Gx('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + Kx(a.ariaLabel) + '" style="background-color: ' + Kx(V(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" aria-hidden="true">' + Fx(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const WN = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function XN(a, b) {
        a = new YN(a, b, ZN(a, b));
        a.init();
        return a
    }

    function $N() {
        var {
            Tb: a
        } = {
            Tb: 2
        };
        return 1 < a ? 50 : 120
    }

    function aO(a, b, c) {
        0 === bO(a) && b.classList.remove("ft-collapsed");
        cO(b, c);
        qq(a.win);
        b.classList.remove("ft-collapsed");
        dO(a);
        return () => void eO(a, b, c)
    }

    function fO(a) {
        0 === gO(a.j.ha.ld).length ? (a.v.K ? .di(), a.v.j(null), a.j.ha.xf.j(!1), a.j.ha.Ff.j(!1), a.j.ha.he.j(!1)) : (a.j.ha.xf.j(!0), hO(a))
    }

    function iO(a, {
        yg: b = 0,
        ym: c = 0
    }) {
        b = Math.max(gO(a.j.nb).length + b, 0);
        c = Math.max(gO(a.j.Ua).length + c, 0);
        const d = b + c;
        let e = 50 * d;
        0 < b && 0 < c && (e += 11);
        e += 10 * Math.max(0, d - 1);
        d >= a.m.Tb && (e += 60);
        1 < d && (e += 10);
        return e
    }

    function bO(a) {
        const b = a.j.Ua;
        return gO(a.j.nb).length + gO(b).length
    }

    function dO(a) {
        const b = a.j.Ua,
            c = a.j.separator;
        0 < gO(a.j.nb).length && 0 < gO(b).length ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        bO(a) >= a.m.Tb ? a.j.Ef.j(!0) : a.j.Ef.j(!1);
        1 < bO(a) ? a.j.yf.j(!0) : a.j.yf.j(!1);
        0 < bO(a) ? a.j.isVisible.j(!0) : a.j.isVisible.j(!1);
        jO(a);
        kO(a)
    }

    function eO(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), dO(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function jO(a) {
        const b = gO(a.j.nb).concat(gO(a.j.Ua));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        bO(a) >= a.m.Tb || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function kO(a) {
        const b = gO(a.j.nb).concat(gO(a.j.Ua)).filter(c => !c.classList.contains("ft-reg-button"));
        a.B.j(0 < b.length)
    }

    function lO(a) {
        hq(a.j.ha.ld.children, b => {
            const c = a.j.ha.xd;
            eO(a, b, a.j.ha.ld);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.j(!0)
        });
        fO(a)
    }

    function hO(a) {
        if (!a.v.K) {
            var b = mO(a.win, {
                googleIconName: "verified_user",
                ariaLabel: I(a.m.pe, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.j.ha.Ff.j(!a.j.ha.isVisible.K);
                    for (const [, c] of a.j.ha.xd) c.If = !0;
                    a.j.ha.he.j(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Jc.classList.add("ft-reg-button");
            aO(a, b.Jc, a.j.Ua);
            Dq(b.Dh, a.j.ha.isVisible);
            a.v.j({
                Cm: b,
                di: () => void eO(a, b.Jc, a.j.Ua)
            })
        }
    }

    function nO(a) {
        var b = a.j.ha.he,
            c = b.j;
        a: {
            for ([, d] of a.j.ha.xd)
                if (a = d, a.showUnlessUserInControl && !a.If) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function oO(a) {
        a.j.ha.Rg.listen(() => {
            lO(a)
        })
    }
    var YN = class extends Uo {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.m = b;
            this.j = c;
            this.v = new U(null);
            this.B = new U(!1)
        }
        addButton(a) {
            a = mO(this.win, a);
            return aO(this, a.Jc, this.j.nb)
        }
        addRegulatoryMessage(a) {
            const b = this.j.ha.ld,
                c = pO(this.win, a);
            cO(c.Nf, b);
            this.j.ha.xd.set(c.Nf, c);
            fO(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    nO(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    nO(this)
                },
                isDismissed: Eq(c.isDismissed)
            }
        }
        F() {
            return xq(this.v.map(a => null != a))
        }
        A() {
            return xq(this.B)
        }
        H() {
            return [this.j.container]
        }
        l() {
            const a =
                this.j.Sa.Oa;
            a.parentNode ? .removeChild(a);
            super.l()
        }
        init() {
            jr(this.win, WN);
            Dq(this.j.ui, this.m.mc);
            this.win.document.body.appendChild(this.j.Sa.Oa);
            oO(this)
        }
    };

    function ZN(a, b) {
        const c = ry(a),
            d = c.shadowRoot;
        d.appendChild(Ae(new me(a.document), Bx(UN({
            hh: I(b.pe, 1),
            Sg: I(b.pe, 3),
            Ng: 50,
            li: 11,
            Og: 10,
            Mg: 5
        }))));
        const e = Zy("ft-container", d),
            f = Zy("ft-expand-toggle", d),
            g = Zy("ft-expand-toggle-container", d),
            h = new U(null);
        h.l(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new U(!0);
        Aq(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Aq(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.j(!k.K)
            });
        const l = new U(!1);
        Aq(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Aq(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.j(!0)
        });
        const m = new U(!1);
        Aq(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Aq(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.l(p => {
            if (p) {
                p.Xe(e.style);
                p = p.vf();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                qq(a)
            }
        });
        const n = new U(!1);
        b = wq(qO(a, d), n, b.position.map(p => null !== p));
        Aq(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Aq(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = rO(a, Zy("ft-reg-bubble", d));
        return {
            container: e,
            nb: Zy("ft-button-holder", d),
            Ua: Zy("ft-bottom-button-holder", d),
            separator: Zy("ft-separator", d),
            Sa: c,
            ui: h,
            Gm: k,
            Ef: l,
            yf: m,
            isVisible: n,
            ha: b
        }
    }

    function rO(a, b) {
        const c = new U(!1),
            d = new U(!1),
            e = yq(c, d);
        Aq(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Aq(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new U(!1);
        Aq(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Aq(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = Zy("ft-reg-bubble-close", b),
            h = new Iq;
        g.addEventListener("click", () => {
            Hq(h)
        });
        const k = Zy("ft-reg-message-holder", b);
        cr($q(a, k)).l(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            ld: k,
            Ff: c,
            he: d,
            isVisible: e,
            xf: f,
            xd: new Map,
            Rg: Fq(h)
        }
    }

    function mO(a, b) {
        const c = Ae(new me(a.document), Bx(VN({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6"
        })));
        if (void 0 !== b.cornerNumber) {
            const d = ae(Math.round(b.cornerNumber), 0, 99);
            Zy("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && Yy("BUTTON", c).addEventListener("click", b.onClick);
        a = new U(!1);
        Aq(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Aq(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Jc: c,
            Dh: a
        }
    }

    function pO(a, b) {
        a = new me(a.document);
        var c = Gx('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = Ae(a, Bx(c));
        c = Zy("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = Zy("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            Nf: a,
            showUnlessUserInControl: !1,
            If: !1,
            isDismissed: new U(!1)
        }
    }

    function cO(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function gO(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function qO(a, b) {
        const c = new U(!1),
            d = Zy("ft-symbol-font-load-test", b);
        b = Zy("ft-symbol-reference", d);
        const e = Zy("ft-text-reference", d),
            f = $q(a, b);
        Bq(cr(f).map(g => 0 < g.width && g.width < e.offsetWidth / 2), !0, () => {
            c.j(!0);
            d.parentNode ? .removeChild(d);
            f.ma()
        });
        return c
    };

    function sO(a) {
        const b = new Iq,
            c = Tq(a, 2500, () => void Hq(b));
        return new tO(a, () => void uO(a, () => void c()), Fq(b))
    }

    function vO(a) {
        const b = new MutationObserver(() => {
            a.j()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        Wo(a, () => void b.disconnect())
    }

    function wO(a) {
        a.win.addEventListener("resize", a.j);
        Wo(a, () => void a.win.removeEventListener("resize", a.j))
    }
    var tO = class extends Uo {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.v = c;
            this.m = !1
        }
    };

    function uO(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function xO(a) {
        return a.j[a.j.length - 1]
    }

    function yO(a, b) {
        $a(a.j, c => c === b);
        a.l.delete(b)
    }
    var AO = class {
        constructor() {
            this.m = zO;
            this.j = [];
            this.l = new Set
        }
        add(a) {
            if (this.l.has(a)) return !1;
            const b = fb(this.j, a, this.m);
            this.j.splice(0 <= b ? b : -b - 1, 0, a);
            this.l.add(a);
            return !0
        }
        first() {
            return this.j[0]
        }
        has(a) {
            return this.l.has(a)
        }
        clear() {
            this.l.clear();
            return this.j.splice(0, this.j.length)
        }
        size() {
            return this.j.length
        }
    };

    function BO(a) {
        var b = a.lc.K;
        let c;
        for (; a.m.Vg() > b && (c = a.l.first());) {
            var d = a,
                e = c;
            CO(d, e);
            d.j.add(e)
        }
        for (;
            (d = xO(a.j)) && a.m.uh() <= b;) DO(a, d);
        for (;
            (d = xO(a.j)) && (c = a.l.first()) && d.priority > c.priority;) b = a, e = c, CO(b, e), b.j.add(e), DO(a, d)
    }

    function DO(a, b) {
        yO(a.j, b);
        a.l.add(b) && (b.Ke = a.m.addButton(b.buttonSpec));
        b.isInToolbar.j(!0)
    }

    function CO(a, b) {
        b.Ke && b.Ke();
        b.Ke = void 0;
        yO(a.l, b);
        b.isInToolbar.j(!1)
    }
    var EO = class {
        constructor(a, b) {
            this.lc = a;
            this.m = b;
            this.j = new AO;
            this.l = new AO;
            this.v = 0;
            this.lc.listen(() => void BO(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Ne: this.v++,
                isInToolbar: new U(!1)
            };
            this.j.add(b);
            BO(this);
            return {
                isInToolbar: Eq(xq(b.isInToolbar)),
                removeCallback: () => {
                    CO(this, b);
                    yO(this.j, b);
                    BO(this)
                }
            }
        }
    };

    function zO(a, b) {
        return a.priority === b.priority ? b.Ne - a.Ne : a.priority - b.priority
    };

    function FO(a) {
        if (!a.j) {
            const b = FB(a.win);
            a.j = xq(b.m);
            Vo(a, b)
        }
        return a.j
    }

    function GO(a, b) {
        const c = FO(a),
            d = a.m.addRegulatoryMessage(b.messageSpec),
            e = Aq(c, !0, () => void d.showUnlessUserInControl()),
            f = Aq(c, !1, () => void d.hideUnlessUserInControl());
        Aq(uq(d.isDismissed), !0, () => {
            e();
            f()
        })
    }
    var HO = class extends Uo {
        constructor(a, b) {
            super();
            this.win = a;
            this.m = b;
            this.j = null
        }
        addRegulatoryMessage(a) {
            Bq(FO(this), !0, () => void GO(this, a))
        }
    };

    function IO(a) {
        a.j || (a.j = JO(a.win, a.m, a.mc), Vo(a, a.j.cc), Vo(a, a.j.fg), KO(a), LO(a, a.j.cc));
        return a.j
    }

    function MO(a) {
        var b = [];
        a.j ? .cc ? .A().A() ? (b.push(() => iN(a.win, NO(a.win), OO(a)).Ic), b.push(() => iN(a.win, PO(a.win), OO(a)).Ic)) : (b.push(() => iN(a.win, PO(a.win), OO(a)).Ic), b.push(() => iN(a.win, NO(a.win), OO(a)).Ic));
        a.j ? .cc ? .F() ? .A() && b.push(() => ({
            position: RN({
                qa: Math.floor(S(a.win) / 3),
                Qa: 10
            }),
            lc: 0
        }));
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function KO(a) {
        null === a.mc.K && a.j ? .position.j(MO(a))
    }

    function LO(a, b) {
        const c = sO(a.win);
        c.m || (vO(c), wO(c), c.m = !0);
        c.v.listen(() => void KO(a));
        Vo(a, c);
        b.F().listen(() => void KO(a));
        b.A().listen(() => void KO(a));
        a.mc.listen(() => void KO(a))
    }

    function OO(a) {
        return [...(a.j ? .cc.H() ? ? []), a.win.document.body]
    }
    class QO extends Uo {
        constructor(a, b) {
            super();
            this.win = a;
            this.m = b;
            this.j = null;
            this.mc = RO(this.win, this)
        }
        addButton(a) {
            return IO(this).Nh.addButton(a)
        }
        addRegulatoryMessage(a) {
            IO(this).fg.addRegulatoryMessage(a)
        }
    }

    function JO(a, b, c) {
        const d = new U(null),
            e = XN(a, {
                Tb: 2,
                position: d.map(f => f ? .position ? ? null),
                pe: b,
                mc: c
            });
        b = new EO(d.map(f => f ? .lc || 0), {
            addButton: f => e.addButton(f),
            Vg: () => iO(e, {}),
            uh: () => iO(e, {
                yg: 1
            })
        });
        a = new HO(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            cc: e,
            position: d,
            Nh: b,
            fg: a
        }
    }

    function NO(a) {
        a = S(a);
        var {
            qa: b,
            Lb: c
        } = {
            qa: 50,
            Lb: 10
        };
        return {
            rc: new TN(b, c),
            Mf: Math.floor(a / 3),
            Dd: 60,
            Rf: $N(),
            ke: Math.floor(a / 2),
            pb: 20
        }
    }

    function PO(a) {
        a = S(a);
        return {
            rc: RN({
                qa: 50,
                Qa: 10
            }),
            Mf: Math.floor(a / 3),
            Dd: 60,
            Rf: $N(),
            ke: Math.floor(a / 2),
            pb: 40
        }
    }

    function RO(a, b) {
        const c = new Iy(a),
            d = new U(null),
            e = f => void d.j(f);
        Wo(b, () => {
            Hy(c, e)
        });
        c.j.maxZIndexListeners.push(e);
        d.j(Gy(c));
        return d
    };
    const SO = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function TO(a) {
        const b = new mr(a.win);
        b.init(2E3);
        Vo(a, b);
        kr(b, () => {
            UO(a);
            VO(a);
            b.ma()
        })
    }

    function VO(a) {
        var b = a.win;
        b.googFloatingToolbarManager || (b.googFloatingToolbarManager = new QO(b, a.v));
        b.googFloatingToolbarManager.addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        })
    }

    function UO(a) {
        a.j && (a.j.parentNode ? .removeChild(a.j), a.j = null)
    }
    var WO = class extends Uo {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.m = b;
            this.message = c;
            this.v = d;
            this.j = null
        }
        l() {
            UO(this);
            super.l()
        }
    };
    var XO = class {
        constructor() {
            this.j = !1
        }
    };
    const YO = [{
        zd: "1907259590",
        md: 480,
        mb: 220
    }, {
        zd: "2837189651",
        md: 400,
        mb: 180
    }, {
        zd: "9211025045",
        md: 360,
        mb: 160
    }, {
        zd: "6584860439",
        md: -Infinity,
        mb: 150
    }];

    function ZO(a) {
        return YO.find(b => b.md <= a)
    };

    function $O(a, b) {
        return b.Le ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    };

    function aP(a) {
        bP.j.push(a)
    }
    const bP = new class {
        constructor() {
            this.j = []
        }
    };
    let cP = !1;

    function dP(a) {
        eP(a.config, 1065, a.win, () => {
            if (!a.j) {
                var b = new Jo;
                b = M(b, 1, a.l);
                var c = new Io;
                b = Nh(b, 2, Ko, c);
                fP(a.config.j, b)
            }
        }, 1E4)
    }
    class gP {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.l = c;
            this.j = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function hP(a, b, c, d, e, f) {
        const g = ZO(a.document.body.clientWidth);
        d = b.ja ? iP(a, b, d, g, e, f) : jP(a, b, d, g, e, f);
        Cq(d.isVisible(), !1, () => {
            cP = !1;
            var k = bP;
            for (const l of k.j) l();
            k.j.length = 0
        });
        d.show({
            mf: !0
        });
        cP = !0;
        const h = new gP(a, b, c);
        dP(h);
        aP(() => {
            var k = b.j;
            var l = new Jo;
            l = M(l, 1, c);
            var m = new Ho;
            l = Nh(l, 3, Ko, m);
            fP(k, l);
            h.j = !0
        })
    }

    function iP(a, b, c, d, e, f) {
        d = b.U.yc ? kP(a, b, c, f) : lP(a, b, c, {
            Qd: d,
            nf: a.innerWidth,
            lf: "100%",
            Of: "15px",
            kf: "13px",
            Pf: "center",
            og: 0
        }, e, f);
        return aA(a, d, {
            rd: .75,
            Uc: .95,
            zIndex: 100001,
            Ma: !0,
            Wd: "adpub-drawer-root",
            Vd: !R(xl),
            va: !0,
            Zd: R(xl) ? new U(I(b.R, 10).replace("TERM", c)) : void 0
        })
    }

    function jP(a, b, c, d, e, f) {
        a: {
            var g = a.document.body.clientWidth;
            var h = .9 * g;
            for (g = 768 >= g ? 3 : 4; 1 <= g; g--) {
                const k = d.mb * g + 42;
                if (k <= h) {
                    h = k;
                    break a
                }
            }
        }
        d = b.U.yc ? kP(a, b, c, f) : lP(a, b, c, {
            Qd: d,
            nf: h,
            lf: "600px",
            Of: "24px",
            kf: "24px",
            Pf: "start",
            og: 0
        }, e, f);
        return kz(a, d, {
            wb: `${h}px`,
            vb: mP(b),
            qb: I(b.R, 14),
            zIndex: 100001,
            Ma: !0,
            Rc: R(xl),
            Wd: "adpub-drawer-root",
            Vd: !R(xl),
            va: !0,
            Zd: R(xl) ? new U(I(b.R, 10).replace("TERM", c)) : void 0
        })
    }

    function kP(a, b, c, d) {
        const e = a.document.createElement("iframe");
        var f = b.R;
        f = new my(e, I(f, 16), "anno-cse", $O(b.m, b.U), "ShoppingVariant", a.location, I(f, 7), I(f, 10).replace("TERM", c), b.U.Rd, !1, !0);
        f.init();
        nP(a, b, e, c, f, d);
        return e
    }

    function lP(a, b, c, d, e, f) {
        var g = b.R,
            h = I(g, 10),
            k = h.indexOf("TERM"),
            l = d.nf,
            m = d.Qd;
        l = Math.max(Math.floor((l - Math.floor(l / m.mb) * m.mb) / 2), 5);
        m = d.lf;
        const n = I(g, 3),
            p = d.Of,
            q = d.kf,
            w = d.Pf,
            y = I(g, 6),
            E = h.substring(0, k);
        h = h.substring(k + 4);
        k = !!F(g, 13);
        e = Gx('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' + Kx(V(p)) +
            " " + Kx(V(q)) + "; text-align: " + Kx(V(w)) + ';">' + (e ? '<div style="max-width: ' + Kx(V(m)) + '">' + Fx(n) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Fx(y) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + Kx(V(p)) + "; text-align: " + Kx(V(w)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' +
            Fx(E) + "</span>" + Fx(c) + '<span style="color:#80868b">' + Fx(h) + '</span></div></div><div id="anno-csa" style="margin:5px ' + Kx(V(l)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');parent.postMessage({query:" + Ox(Px(c)) + "},parent.location.origin);\x3c/script>" + (k ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" :
                '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
        g = {
            dir: mP(b) ? "rtl" : "ltr",
            lang: I(g, 7),
            style: td({
                margin: "0",
                height: "100%",
                "padding-top": `${d.og}px`,
                overflow: "hidden"
            })
        };
        e = Bx(e);
        Kd("body");
        g = Nd("body", g, e);
        e = a.document.createElement("IFRAME");
        v(e, {
            border: "0",
            width: "100%"
        });
        oP(a, b, e, c, d.Qd, f);
        e.srcdoc = Gd(g);
        return e
    }

    function oP(a, b, c, d, e, f) {
        const g = pP(b, a, function(h) {
            h.data.query === d && qP(a, b, c, d, e, f)
        });
        aP(() => {
            a.removeEventListener("message", g)
        })
    }

    function nP(a, b, c, d, e, f) {
        const g = pP(b, a.top, function(h) {
            "init" === h.data.action && "ShoppingVariant" === h.data.adChannel && rP(a, b, c, e, d, f)
        });
        aP(() => {
            a.top.removeEventListener("message", g)
        })
    }

    function qP(a, b, c, d, e, f) {
        if (b.U.Ec) {
            const h = c.contentDocument.documentElement;
            (new ResizeObserver(() => {
                c.height = `${h.offsetHeight}px`
            })).observe(h);
            sP(b, a, () => {
                const k = h.offsetHeight;
                k && (c.height = `${k}px`)
            });
            tP(b, c, d, e, f)
        } else {
            var g = c.contentDocument ? .body;
            g && ((new ResizeObserver(() => {
                c.height = `${g.parentElement.offsetHeight}px`
            })).observe(g), sP(b, a, () => {
                const h = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
                h && (c.height = `${h}px`)
            }), tP(b, c, d, e, f))
        }
    }

    function rP(a, b, c, d, e, f) {
        if (b.U.Ec) {
            F(b.R, 13) || ky(d, e, f);
            const l = c.contentDocument.documentElement,
                m = new ResizeObserver(() => {
                    c.height = `${Math.ceil(l.offsetHeight+22)}px`
                });
            m.observe(l);
            const n = sP(b, a, () => {
                const p = l.offsetHeight;
                p && (c.height = `${p+22}px`)
            });
            aP(() => {
                m.disconnect();
                a.clearInterval(n)
            })
        } else {
            F(b.R, 13) || ky(d, e, f);
            var g = c.contentDocument.body,
                h = new ResizeObserver(() => {
                    c.height = `${Math.ceil(g.parentElement.offsetHeight+22)}px`
                });
            h.observe(g);
            var k = sP(b, a, () => {
                const l = c.contentDocument ? .body ? .parentElement ? .offsetHeight;
                l && (c.height = `${l+22}px`)
            });
            aP(() => {
                h.disconnect();
                a.clearInterval(k)
            })
        }
    }

    function tP(a, b, c, d, e) {
        const f = a.R,
            g = b.contentWindow;
        b = b ? .contentDocument || b.contentWindow ? .document;
        if (g) {
            if (void 0 === g._googCsa) throw Error("No _googCsa");
            if (!b) throw Error("No contentDocument");
        } else throw Error("No googCsa window");
        a = {
            pubId: $O(a.m, a.U),
            styleId: d.zd,
            disableCarousel: !0,
            query: c,
            hl: I(f, 7),
            personalizedAds: "false",
            fexp: a.U.nc.join(","),
            adfiliateWp: a.m,
            adtest: a.Jd ? "on" : ""
        };
        e && (a.afdToken = e);
        g._googCsa("ads", a, {
            container: "anno-csa",
            linkTarget: "_blank",
            number: 8,
            width: b.body.offsetWidth -
                30
        });
        F(f, 13) && (e = b.getElementById("anno-csa"), e.dir = "ltr", e.style.height = "800px", e.style.width = "75vw", e.style.overflow = "hidden", e.style.j = "break-word", e.textContent = JSON.stringify(g._googCsa.q))
    };
    var uP = class {
        constructor(a) {
            this.j = a
        }
        Ha() {
            return this.j.now()
        }
    };

    function vP(a, b, c) {
        return a.substring(Math.max(b - 30, 0), b) + "~~" + a.substring(c, Math.min(c + 30, a.length))
    }

    function wP(a, b, c) {
        var d = wo(1);
        a = ci(d, 2, a);
        b = ci(a, 3, b);
        c = ci(b, 4, c);
        return $h(c, 5, null)
    }

    function xP(a) {
        a = WM(a);
        var b = new uo;
        b = $h(b, 1, a[0]);
        b = $h(b, 2, a[1]);
        b = $h(b, 3, a[2]);
        return Ih(b, 4, Ig(a[3]), 0)
    };
    class yP {
        constructor(a, b) {
            this.m = a;
            this.j = !1;
            this.v = b;
            this.l = this.v.Fa(264, c => {
                this.j && (zP || (c = Date.now()), this.m(c), zP ? AP.call(t, this.l) : t.setTimeout(this.l, 17))
            })
        }
        start() {
            this.j || (this.j = !0, zP ? AP.call(t, this.l) : this.l(0))
        }
    }
    var AP = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        zP = !!AP && !/'iPhone'/.test(t.navigator.userAgent);

    function BP(a) {
        return a * a * a
    }

    function CP(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class DP {
        constructor(a, b, c) {
            this.v = a;
            this.H = b;
            this.progress = 0;
            this.m = null;
            this.B = !1;
            this.j = [];
            this.l = null;
            this.A = new yP(Ba(this.G, this), c)
        }
        G(a) {
            if (this.B) this.A.j = !1;
            else {
                null === this.m && (this.m = a);
                this.progress = (a - this.m) / 100;
                1 <= this.progress && (this.progress = 1);
                a = this.l ? this.l(this.progress) : this.progress;
                this.j = [];
                for (let b = 0; b < this.v.length; b++) this.j.push((this.H[b] - this.v[b]) * a + this.v[b]);
                this.C();
                1 == this.progress && (this.A.j = !1)
            }
        }
        C() {}
        play() {
            this.B = !1;
            this.A.start()
        }
    };

    function EP(a, b, c) {
        const d = mP(b);
        (new FP(c, 0, (b.ja ? d : !d) ? a.innerWidth : -a.innerWidth, b.zc, BP)).play();
        const e = GP(b),
            f = eN(a.document, "shoppingmode");
        v(f, {
            "font-size": "18px",
            "margin-right": "8px",
            "margin-top": "10px",
            left: "13px",
            top: "14px",
            margin: "0",
            position: "absolute",
            "line-height": "normal"
        });
        e.appendChild(f);
        HP(b, 1064, e, g => {
            (new FP(c, (b.ja ? d : !d) ? a.innerWidth : -a.innerWidth, 0, b.zc, CP)).play();
            a.document.body.removeChild(e);
            g.preventDefault();
            return !1
        });
        a.document.body.appendChild(e)
    }

    function GP(a) {
        const b = document.createElement("div");
        b.id = "gca";
        const c = mP(a);
        a = a.ja ? c : !c;
        v(b, {
            position: "fixed",
            bottom: "0%",
            left: a ? "" : "0%",
            right: a ? "0%" : "",
            width: "45px",
            height: "45px",
            background: "white",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            color: "#1967D2",
            "z-index": "1000"
        });
        return b
    };

    function IP(a, b, c, d, e, f) {
        v(c, {
            width: "50px",
            bottom: "16px",
            left: mP(b) === b.ja ? "" : "16px",
            right: mP(b) === b.ja ? "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = b.de();
        v(e, {
            display: "none"
        });
        v(d, {
            display: "none"
        });
        const g = eN(a.document, "shoppingmode");
        v(g, {
            position: "absolute",
            top: "13px",
            left: "12px",
            color: fp(Cl) || "#1967D2"
        });
        c.appendChild(g);
        HP(b, 1064, c, h => {
            g.remove();
            v(c, {
                bottom: "16px",
                left: b.ja ? "16px" : mP(b) ? "16px" : "65%",
                right: mP(b) ? b.ja ? "16px" : "65%" : "16px",
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            v(e, {
                display: ""
            });
            v(d, {
                display: "flex"
            });
            f.focus();
            h.preventDefault();
            return !1
        });
        c.focus()
    };

    function JP(a, b, c, d, e) {
        const f = document.createElement("SPAN");
        f.id = "gda";
        const g = !b.ga() && b.ja === mP(b);
        f.appendChild(fN(a.document, g, b.ga(), b.ce()));
        HP(b, 1064, f, h => {
            b.ga() ? IP(a, b, c, d, f, e) : EP(a, b, c);
            h.preventDefault();
            b.ga() && h.stopImmediatePropagation();
            return !1
        });
        return f
    }

    function KP(a, b) {
        (new MutationObserver(c => {
            c.forEach(d => {
                "attributes" === d.type && "0px" === a.document.body.style.paddingBottom && v(a.document.body, {
                    "padding-bottom": (R(zl) && b ? 66 : 45) + "px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function LP(a, b, c, d) {
        var e = b.ga(),
            f = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        e = (f && f.length ? Number(f[0]) : 0) + (R(zl) && e ? 66 : 45);
        v(a.document.body, {
            "padding-bottom": e + "px"
        });
        KP(a, b.ga());
        e = document.createElement("div");
        e.id = "google-anno-sa";
        e.dir = mP(b) ? "rtl" : "ltr";
        b.ga() && (e.tabIndex = 0);
        f = b.ga() ? {
            background: fp(Bl) || "white",
            "border-style": "solid",
            bottom: "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: b.ja ? "16px" : mP(b) ? "16px" : "65%",
            right: mP(b) ? b.ja ? "16px" : "65%" : "16px",
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        } : {
            background: "white",
            "border-style": "solid",
            "border-top-left-radius": "20px",
            "border-top-right-radius": "20px",
            bottom: "0",
            height: "45px",
            position: "fixed",
            "text-align": "center",
            width: "100%",
            border: "0px",
            left: "0px",
            "box-shadow": "0px 0px 10px 0px #00000026",
            "z-index": "1000"
        };
        v(e, f);
        var g = document.createElement("SPAN");
        f = document.createElement("SPAN");
        bN(f);
        var h;
        b.ga() ?
            h = {
                position: "absolute",
                top: "2.5px",
                bottom: "2.5px",
                left: (mP(b), "50px"),
                right: mP(b) ? "24px" : "12px",
                display: "flex",
                "flex-direction": "row",
                color: fp(Cl) || "#1967D2",
                cursor: "pointer",
                transition: "width 5s"
            } : h = {
                position: "absolute",
                top: "2.5px",
                bottom: "2.5px",
                left: "60px",
                right: "60px",
                display: "flex",
                "flex-direction": "row",
                "justify-content": "center",
                color: "#1967D2",
                cursor: "pointer"
            };
        v(f, h);
        h = mP(b);
        b.ja || v(f, {
            "justify-content": ""
        });
        var k = eN(a.document, "shoppingmode");
        v(k, b.ga() ? {
            "font-size": "20px",
            width: "15px",
            height: "15px",
            "margin-left": h ? "10px" : "",
            "margin-right": h ? "" : "10px",
            "margin-top": "12px",
            "line-height": "normal"
        } : {
            "font-size": "18px",
            width: "15px",
            height: "15px",
            "margin-left": h ? "8px" : "",
            "margin-right": h ? "" : "8px",
            "margin-top": "11px",
            "line-height": "normal"
        });
        f.appendChild(k);
        g.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        b.ga() && (h = b.Xc(), g.tabIndex = 0, g.role = "link", g.ariaLive = "polite", g.ariaLabel = h.replace("TERM", d));
        v(g, b.ga() ? {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        } : {
            height: "40px",
            "align-items": "center",
            "line-height": "40px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        HP(b, 999, f, c);
        f.appendChild(g);
        d = JP(a, b, e, f, g);
        b.ga() ? (e.appendChild(f),
            e.appendChild(d)) : (e.appendChild(d), e.appendChild(f), d = e.appendChild, g = document.createElement("DIV"), g.id = "google-anno-ea", b.ja || v(g, {
            width: "60px",
            height: "45px",
            cursor: "pointer"
        }), f = g.appendChild, k = b.ja !== mP(b), h = b.ja ? "rotate(180deg) translateY(5px)" : mP(b) ? "rotate(270deg) translateX(-5px)" : "rotate(90deg) translateX(5px)", a = eN(a.document, "expand_more"), v(a, {
            color: "#5F6368",
            cursor: "pointer",
            display: "block",
            "font-size": "15px",
            left: k ? "" : "0",
            right: k ? "0" : "",
            padding: k ? "0 0 0 16px" : "0 16px 0 0",
            "pointer-events": "initial",
            position: "absolute",
            top: "20px",
            transform: `${h}`
        }), f.call(g, a), HP(b, 999, g, c), d.call(e, g));
        return e
    }

    function MP(a, b, c) {
        var d = I(c.R, 11);
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = d.replace("TERM", a.j));
        c.ga() && (b.ariaLabel = c.R.Xc().replace("TERM", a.j));
        c = c.j;
        d = new mo;
        d = ai(d, 1, a.m);
        d = ci(d, 4, a.j);
        a = c.handle;
        b = NP(c, 13);
        d = Nh(b, 6, Mo, d);
        return a.call(c, d)
    }

    function OP(a, b, c) {
        if (zB(b)) return null;
        const d = LP(b, c, f => {
                var g = c.j;
                var h = new Do;
                h = ci(h, 4, a.j);
                h = ai(h, 1, a.m);
                h = ai(h, 3, a.l);
                g = PP(g, h);
                hP(b, c, g, a.j, !1, c.v.get(a.j) || "");
                f.preventDefault();
                return !1
            }, a.j),
            e = MP(a, d, c);
        b.document.body.appendChild(d);
        return e
    }

    function QP(a, b, c, d, e) {
        if (a.j !== d || null !== a.m || a.v !== e) {
            if (null !== a.l) {
                var f = a.l,
                    g = c.j;
                var h = new lo;
                h = M(h, 1, f);
                f = g.handle;
                var k = NP(g, 14);
                h = Nh(k, 7, Mo, h);
                f.call(g, h)
            }
            a.j = d;
            a.m = null;
            a.v = e;
            (c.U.Kb ? F(c.R, 17) : c.U.gb) || (d = b.document.getElementById("google-anno-sa"), a.l = d ? MP(a, d, c) : OP(a, b, c))
        }
    }
    var RP = class {
        constructor() {
            this.j = "";
            this.m = null;
            this.v = "";
            this.l = null
        }
    };

    function SP(a, b) {
        a.l >= a.j.length && (a.l = 0);
        if (cP) aP(() => void SP(a, b));
        else {
            var c = a.j[a.l++];
            a.m = !1;
            QP(a.v, a.win, a.config, c.j, c.l);
            eP(a.config, 898, a.win, () => void SP(a, b), a.Ie)
        }
    }
    var TP = class {
        constructor(a, b) {
            var c = new RP;
            this.win = a;
            this.config = b;
            this.v = c;
            this.j = [];
            this.m = !0;
            this.l = 0;
            this.Ie = b.Rb.Ie
        }
    };
    class UP {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    const VP = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function WP(a, b) {
        switch (b) {
            case 1:
                b = 0;
                for (let c = a.length - 1; 0 <= c; c--) VP.test(a[c]) || b++;
                return b;
            default:
                return a = a.trim(), "" === a ? 0 : a.split(/\s+/).length
        }
    }

    function XP(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || VP.test(a)
        }
    }

    function YP(a, b, c, d) {
        return XP(a.charAt(b - 1), d) && XP(a.charAt(c + 1), d)
    };

    function ZP(a, b, c, d) {
        b.forEach(e => {
            $P(c, wP("", "", e));
            d.j.push(new UP(e, e));
            d.m && SP(d, a)
        })
    };

    function aQ(a, b, c) {
        c = new bQ(c);
        for (var d of a) {
            a = b;
            const f = I(d, 1);
            if (1 === a && F(d, 3)) cQ(c, f, f);
            else if (2 === a) {
                F(d, 4) && cQ(c, f, f);
                for (var e of Ch(d, 5, Xg)) cQ(c, e, f)
            }
        }
        b = [];
        for (b.push(0); 0 < b.length;) {
            d = b.shift();
            e = c.j[d];
            if (0 === d) e.j = 0, e.l = 0;
            else if (0 === e.C) e.j = 0, e.l = e.A ? d : c.j[c.j[d].j].l;
            else {
                e = c.j[c.j[d].C].j;
                for (a = c.j[d].G;;) {
                    if (c.j[e].contains(a)) {
                        c.j[d].j = c.j[e].m.get(a);
                        break
                    }
                    if (0 === e) {
                        c.j[d].j = 0;
                        break
                    }
                    e = c.j[e].j
                }
                c.j[d].l = c.j[d].A ? d : c.j[c.j[d].j].l
            }
            for (const f of c.j[d].childNodes) b.push(f)
        }
        return new dQ(c)
    }
    var dQ = class {
        constructor(a) {
            this.j = a;
            this.l = void 0
        }
        isEmpty() {
            return this.j.isEmpty()
        }
        match(a) {
            return this.j.match(a)
        }
    };

    function cQ(a, b, c) {
        const d = a.v.has(c) ? a.v.get(c) : a.C++;
        a.v.set(c, d);
        a.m.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.j[c].contains(f) || (a.j.push(new eQ), a.j[a.size].C = c, a.j[a.size].G = f, a.j[c].m.set(f, a.size), a.size++);
            c = a.j[c].m.get(f)
        }
        a.j[c].A = !0;
        a.j[c].v = d;
        a.j[c].B = a.l.length;
        a.l.push(b.length)
    }

    function fQ(a, b) {
        a: {
            let d = 0;
            for (let e = 0; e < b.length; e++) {
                for (;;) {
                    var c = b.charCodeAt(e);
                    if (a.j[d].contains(c)) {
                        d = a.j[d].m.get(c);
                        break
                    }
                    if (0 === d) break;
                    d = a.j[d].j
                }
                for (c = d;;) {
                    c = a.j[c].l;
                    if (0 === c) break;
                    const f = e + 1 - a.l[a.j[c].B],
                        g = e;
                    if (YP(b, f, g, a.A)) {
                        a = new gQ(f, g, a.m.get(a.j[c].v));
                        break a
                    }
                    c = a.j[c].j
                }
            }
            a = void 0
        }
        return void 0 !== a
    }
    class bQ {
        constructor(a) {
            this.A = a;
            this.size = 1;
            this.j = [new eQ];
            this.l = [];
            this.v = new Map;
            this.m = new Map;
            this.C = 0
        }
        isEmpty() {
            return 0 === this.C
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.j[b];
                    if (e.contains(d)) {
                        b = e.m.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = e.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    e = f + 1 - this.l[this.j[d].B];
                    const g = f;
                    YP(a, e, g, this.A) && c.push(new gQ(e, g, this.m.get(this.j[d].v)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class eQ {
        constructor() {
            this.m = new Map;
            this.I = !1;
            this.ba = this.H = this.F = this.Z = this.L = this.O = -1
        }
        contains(a) {
            return this.m.has(a)
        }
        set C(a) {
            this.O = a
        }
        get C() {
            return this.O
        }
        set G(a) {
            this.L = a
        }
        get G() {
            return this.L
        }
        set A(a) {
            this.I = a
        }
        get A() {
            return this.I
        }
        set v(a) {
            this.H = a
        }
        get v() {
            return this.H
        }
        set j(a) {
            this.Z = a
        }
        get j() {
            return this.Z
        }
        set l(a) {
            this.F = a
        }
        get l() {
            return this.F
        }
        set B(a) {
            this.ba = a
        }
        get B() {
            return this.ba
        }
        get childNodes() {
            return this.m.values()
        }
    }
    var gQ = class {
            constructor(a, b, c) {
                this.A = a;
                this.v = b;
                this.C = c
            }
            get l() {
                return this.A
            }
            get m() {
                return this.v
            }
            get j() {
                return this.C
            }
            get length() {
                return this.v - this.A
            }
        },
        hQ = class {
            constructor(a) {
                this.j = a;
                this.l = []
            }
        };
    const iQ = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function jQ(a, b, c, d, e, f) {
        if (!c.U.gb) {
            var g = a.document,
                h = g.createElement("style");
            h.textContent = Dd(Ej `@font-face{font-family:"goog-matfb";size-adjust:39.13%;src:local("Times New Roman"),local("Tinos");}`);
            g.head.appendChild(h)
        }
        d.j.Ha(5) >= d.l && await kQ(d, 6);
        g = Hi(c.R);
        if (g[0] ? .j()) lQ(a, b, c, e, g);
        else {
            var k = aQ(g, 2, c.l);
            if (!k.isEmpty() && mQ(a, c, e) && fQ(k.j, f)) {
                g = c.l;
                h = new TP(a, c);
                var l = k.match(f);
                k = new Map;
                for (n of l)
                    if (l = n.j, k.has(l)) k.get(l).l.push(n);
                    else {
                        var m = new hQ(l);
                        m.l.push(n);
                        k.set(l, m)
                    }
                var n =
                    Array.from(k.values());
                for (const p of n) {
                    n = null;
                    for (const q of p.l)
                        if (k = f, l = e, YP(k, q.l, q.m, g) ? (m = k.substring(q.l, q.m + 1), $P(l, wP(m, vP(k, q.l, q.m + 1), q.j)), k = m) : k = null, null != k && (n = k, R(Kl))) break;
                    null != n && (k = h, l = b, k.j.push(new UP(p.j, n)), k.m && SP(k, l))
                }
            }
        }
        await nQ(a, c, d, e, f)
    }

    function mQ(a, b, c) {
        var d = !0;
        const e = b.na,
            f = vB({
                J: a,
                me: 3E3,
                qe: 400,
                na: e,
                Pg: !0
            });
        f && (d = oQ(c), M(d, 2, f), d = !1);
        c.j >= b.Rb.qc || (Yh(oQ(c), 5, !0), d = !1);
        0 !== b.Yd || 0 !== pQ(a, 1, e) || b.ja && 0 === pQ(a, 2, e) || (Yh(oQ(c), 3, !0), d = !1);
        return d
    }

    function pQ(a, b, c) {
        return vB({
            J: a,
            me: 3E3,
            qe: a.innerWidth > Tp ? 650 : 0,
            na: c,
            bf: b
        })
    }
    async function nQ(a, b, c, d, e) {
        const f = aQ(Hi(b.R), 1, b.l);
        if (!f.isEmpty() && (b.U.wd || fQ(f.j, e)))
            if (d.j >= b.Na.qc) {
                e = R(Dl) ? new XO : null;
                var g = b.U.wd ? qQ(Hi(b.R)) : null;
                await b.Ka(898, rQ(a, b, c, d, f, g, new $M(b.Na.si, b.Na.Ae, b.Na.Ld, b.Na.Eb), e))
            } else Yh(oQ(d), 4, !0)
    }

    function qQ(a) {
        return RegExp(a.filter(b => F(b, 3)).map(b => `\\b${I(b,1).replace(/[/\\^$*+?.()|[\]{}]/g,"\\$&")}\\b`).join("|"), "u")
    }
    async function rQ(a, b, c, d, e, f, g, h) {
        let k = a.document.body;
        for (; k;) {
            c.j.Ha(7) >= c.l && await kQ(c, 8);
            if (k.nodeType === Node.TEXT_NODE && "" !== k.textContent && k.parentElement) {
                const lb = k.parentElement;
                a: {
                    var l = a,
                        m = b,
                        n = k.textContent,
                        p = d,
                        q = e,
                        w = g;
                    const Db = [];b: {
                        var y = n;
                        switch (m.l) {
                            case 1:
                                var E = y;
                                const Sa = Array(E.length);
                                let la = 0;
                                for (let sb = 0; sb < E.length; sb++) VP.test(E[sb]) || la++, Sa[sb] = la;
                                var G = Sa;
                                break b;
                            default:
                                var J = y;
                                const Da = Array(J.length);
                                let bb = 0,
                                    Pa = 0;
                                for (; Pa < J.length;) {
                                    for (;
                                        /\s/.test(J[Pa]);) Da[Pa] = bb,
                                        Pa++;
                                    let sb = !1;
                                    for (; Pa < J.length && !/\s/.test(J[Pa]);) sb = !0, Da[Pa] = bb, Pa++;
                                    sb && (bb++, Da[Pa - 1] = bb)
                                }
                                G = Da
                        }
                    }
                    const Eb = G;
                    if (n.includes("\u00bb")) var H = [];
                    else {
                        const Sa = q.match(n),
                            la = new Map;
                        for (const Da of Sa) {
                            const bb = Da.l;
                            if (la.has(bb)) {
                                const Pa = la.get(bb);
                                Da.length > Pa.length && la.set(bb, Da)
                            } else la.set(bb, Da)
                        }
                        H = Array.from(la.values())
                    }
                    const Rd = H;
                    let id = -1;
                    for (const Sa of Rd) {
                        const la = Sa.l,
                            Da = Sa.m;
                        var L = w,
                            T = Sa.j;
                        aN(L.j, L.l + Eb[la]);
                        var Ja = L,
                            Rb = Ja.j,
                            Z = T;
                        if (!((Rb.j.has(Z) ? Rb.j.get(Z).length : 0) < Ja.Ae && L.j.m <
                                L.Ld)) continue;
                        const bb = l.getComputedStyle(lb),
                            Pa = bb.fontSize.match(/\d+/);
                        if (!(Pa && 12 <= Number(Pa[0]) && 22 >= Number(Pa[0]) && Ya(iQ, bb.display))) {
                            w.l += Eb[Eb.length - 1];
                            var xb = [];
                            break a
                        }
                        const sb = id + 1;
                        sb < la && Db.push(l.document.createTextNode(n.substring(sb, la)));
                        const mg = n.substring(la, Da + 1);
                        var ed = l,
                            Ic = mg,
                            De = vP(n, la, Da + 1),
                            X = Sa.j,
                            fd = Eb[la];
                        const ng = lb.getBoundingClientRect();
                        var Zm = wo(2);
                        var $m = ci(Zm, 2, Ic);
                        var an = ci($m, 3, De);
                        var bn = ci(an, 4, X);
                        var cn = $h(bn, 5, fd);
                        var dn = $h(cn, 6, Math.round(ng.x));
                        var en = $h(dn,
                            7, Math.round(ng.y));
                        const Jc = ed.getComputedStyle(lb);
                        var fn = new vo;
                        var gn = ci(fn, 1, Jc.fontFamily);
                        var Ni = xP(Jc.color);
                        var hn = C(gn, 7, Ni);
                        var Oi = xP(Jc.backgroundColor);
                        var Pi = C(hn, 8, Oi);
                        const ej = Jc.fontSize.match(/^(\d+(\.\d+)?)px$/);
                        var Ee = $h(Pi, 4, ej ? Math.round(Number(ej[1])) : 0);
                        const og = Math.round(Number(Jc.fontWeight));
                        isNaN(og) || 400 === og || $h(Ee, 5, og);
                        "none" !== Jc.textDecorationLine && ci(Ee, 6, Jc.textDecorationLine);
                        var kn = C(en, 8, Ee);
                        const pg = [];
                        let Sd = lb;
                        for (; Sd && 20 > pg.length;) {
                            var Qi = pg,
                                Ri = Qi.push,
                                Fe = Sd,
                                Si = new to;
                            const fj = ci(Si, 1, Fe.tagName);
                            "" !== Fe.className && Hh(fj, 2, Fe.className.split(" "), Vg);
                            Ri.call(Qi, fj);
                            if ("BODY" === Sd.tagName) break;
                            Sd = Sd.parentElement
                        }
                        var Ti = pg.reverse();
                        var Ui = Oh(kn, 9, Ti);
                        const un = $P(p, Ui);
                        Db.push(sQ(l, m, un, Sa.j, mg));
                        var Pd = w.j,
                            Ge = Sa.j,
                            Vi = w.l + Eb[la];
                        let qg = [];
                        Pd.j.has(Ge) && (qg = Pd.j.get(Ge));
                        qg.push(Vi);
                        Pd.l++;
                        Pd.j.set(Ge, qg);
                        id = Da;
                        if (0 < w.Eb && w.j.m >= w.Eb) break
                    }
                    const jd = id + 1;0 !== jd && jd < n.length && Db.push(l.document.createTextNode(n.substring(jd)));w.l += Eb[Eb.length - 1];
                    xb = Db
                }
                const Je = xb;
                if (0 < Je.length && (b.U.Kb ? !F(b.R, 17) : !b.U.gb)) {
                    if (h) a: {
                        var hg = h,
                            Qd = a,
                            Wi = b.Na.ah,
                            Xi = I(b.R, 3),
                            He = A(b.R, Gi, 21);
                        const Db = He.P,
                            Eb = Db[x];
                        var Yi = Eb & 2 ? He : jh(He.constructor, sh(Db, Eb, !0));
                        if (hg.j) break a;
                        const Rd = Qd.document.createElement("span");Rd.appendChild(dN(Qd, {}));Rd.appendChild(Qd.document.createTextNode(Xi));
                        var Bb = new WO(Qd, Wi || null, {
                            informationText: Rd
                        }, Yi);
                        if (Bb.m) {
                            jr(Bb.win, SO);
                            var ig = Bb.win,
                                gd = Bb.message;
                            const id = ry(ig),
                                jd = id.shadowRoot;
                            var jg = jd,
                                Zi = jg.appendChild,
                                $i = new me(ig.document);
                            var aj = Gx('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
                            Zi.call(jg, Ae($i, Bx(aj)));
                            const Sa = Zy("ipr-container", jd),
                                la = Zy("ipr-button", Sa);
                            gd.actionButton ? (la.appendChild(gd.actionButton.buttonText), la.addEventListener("click", gd.actionButton.onClick)) : la.classList.add("ipr-display-none");
                            const Da = Zy("ipr-info", Sa);
                            gd.informationText ? Da.appendChild(gd.informationText) : Da.classList.add("ipr-display-none");
                            Bb.j = id.Oa;
                            Ru(Bb.m, Bb.j);
                            TO(Bb)
                        } else VO(Bb);hg.j = !0
                    }
                    for (const Db of Je) lb.insertBefore(Db, k), tQ(Db);
                    lb.removeChild(k);
                    k = Je[Je.length - 1];
                    if (b.U.Pc)
                        for (; k.lastChild;) k =
                            k.lastChild;
                    if (0 < g.Eb && g.j.m >= g.Eb) break
                }
            }
            a: {
                var Cb = k,
                    nn = e,
                    on = f,
                    bj = g,
                    pn = b.l,
                    cj = b.U;
                if (cj.Pc) {
                    if (Cb.firstChild && uQ(Cb)) {
                        if (vQ(Cb)) {
                            k = Cb.firstChild;
                            break a
                        }
                        if (Cb.textContent ? .length) {
                            var qn = WP(Cb.textContent, pn);
                            aN(bj.j, bj.l + qn)
                        }
                    }
                } else {
                    var kg;
                    if (kg = Cb.firstChild) {
                        var Ie = Cb,
                            lg = nn,
                            dj = on,
                            rn = cj;
                        kg = uQ(Ie) && vQ(Ie) && (!dj || !!Ie.textContent ? .match(dj)) && (!rn.Fe || (Ie.textContent ? .trim() ? .length ? ? 0) >= (lg.l ? ? (lg.l = Math.min(...lg.j.l))))
                    }
                    if (kg) {
                        k = Cb.firstChild;
                        break a
                    }
                }
                let lb = Cb;
                for (;;) {
                    if (lb.nextSibling) {
                        k = lb.nextSibling;
                        break a
                    }
                    if (!lb.parentNode) {
                        k = null;
                        break a
                    }
                    lb = lb.parentNode
                }
            }
        }
    }

    function lQ(a, b, c, d, e) {
        mQ(a, c, d) && (e = e.filter(f => F(f, 4) || 0 < Ch(f, 5, Xg, void 0, 2).length).map(f => I(f, 1)), 0 !== e.length && (c.U.xe && kb(e), ZP(b, e, d, new TP(a, c))))
    }

    function tQ(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = YM(WM(getComputedStyle(a.parentElement).color)),
                    c = YM(WM(getComputedStyle(a).color));
                var d = XM(a);
                if (d = b && c && d ? UI(c, d) < Math.min(UI(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    v(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) tQ(a.children[b])
        }
    }

    function uQ(a) {
        return a.nodeType !== Node.ELEMENT_NODE ? !1 : !(a.classList ? .contains("google-anno-skip") || !a.offsetHeight)
    }

    function vQ(a) {
        switch (a.tagName ? .toUpperCase ? .()) {
            case "IFRAME":
            case "A":
            case "AUDIO":
            case "BUTTON":
            case "CANVAS":
            case "CITE":
            case "CODE":
            case "EMBED":
            case "FOOTER":
            case "FORM":
            case "KBD":
            case "LABEL":
            case "OBJECT":
            case "PRE":
            case "SAMP":
            case "SCRIPT":
            case "SELECT":
            case "STYLE":
            case "SUB":
            case "SUPER":
            case "SVG":
            case "TEXTAREA":
            case "TIME":
            case "VAR":
            case "VIDEO":
            case null:
                return !1;
            default:
                return !(a.className.toUpperCase ? .() ? .includes("CRUMB") || a.id.toUpperCase ? .() ? .includes("CRUMB"))
        }
    }
    class wQ {
        constructor() {
            this.j = null
        }
        get l() {
            return this.j
        }
    }

    function sQ(a, b, c, d, e) {
        const f = a.document.createElement("SPAN");
        bN(f);
        v(f, {
            "text-decoration": "underline"
        });
        v(f, {
            "text-decoration-style": "dotted"
        });
        v(f, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        f.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        bN(e);
        v(e, {
            "text-decoration": "none"
        });
        Oe(e);
        e.className = "google-anno";
        e.appendChild(dN(a, {
            bottom: "-1px",
            "font-family": '"Google Material Icons", "goog-matfb"',
            "font-size": "90%",
            position: "relative"
        }));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(f);
        const g = xQ(b, c, e);
        HP(b, 999, e, h => {
            try {
                var k = b.j,
                    l = new Do;
                var m = ci(l, 4, d);
                var n = ai(m, 1, c);
                var p = ai(n, 2, g.l);
                const q = PP(k, p);
                hP(a, b, q, d, !0, b.A.get(d) || "");
                return !1
            } finally {
                h.preventDefault(), h.stopImmediatePropagation()
            }
        });
        return e
    }

    function xQ(a, b, c) {
        const d = new wQ;
        yQ(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.j;
                    var g = new Go;
                    g = f = M(g, 1, f);
                    f = e.handle;
                    var h = NP(e, 11);
                    g = Nh(h, 4, Mo, g);
                    e = f.call(e, g);
                    d.j = e
                } else d.j && (e = a.j, f = new Fo, g = f = M(f, 1, d.j), f = e.handle, h = NP(e, 12), g = Nh(h, 5, Mo, g), f.call(e, g), d.j = null)
        }).observe(c);
        return d
    };

    function $P(a, b) {
        a.entries.push(th(b));
        return a.entries.length - 1
    }

    function oQ(a) {
        return a.l = a.l ? ? new yo
    }
    var zQ = class {
        constructor() {
            this.entries = [];
            this.j = 0;
            this.l = this.m = null
        }
    };

    function fP(a, b) {
        var c = a.handle,
            d = NP(a, 15);
        b = Nh(d, 9, Mo, b);
        c.call(a, b)
    }

    function PP(a, b) {
        var c = a.handle,
            d = NP(a, 10);
        b = Nh(d, 8, Mo, b);
        return c.call(a, b)
    }

    function NP(a, b) {
        var c = new Lo;
        var d = a.A++;
        c = M(c, 1, d);
        b = M(c, 2, Math.round(a.j.Ha(b) - a.l));
        return C(b, 10, a.m)
    }
    var AQ = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.l = b;
            this.m = c;
            this.A = 1;
            this.v = [...d]
        }
        handle(a) {
            for (const b of this.v) b(a);
            return Uh(Sh(a, 1))
        }
    };
    class FP extends DP {
        constructor(a, b, c, d, e) {
            super([b], [c], d);
            this.F = a;
            this.l = e || null
        }
        C() {
            const a = {};
            a.left = this.j[0] + "px";
            Gj(this.F, a)
        }
    };
    var BQ = class {
        constructor(a) {
            this.Rd = a.Rd;
            this.nc = a.nc ? ? [];
            this.gb = a.gb ? ? !1;
            this.Kb = a.Kb ? ? !1;
            this.We = a.We ? ? 300;
            this.yc = a.yc ? ? !1;
            this.Le = a.Le ? ? !1;
            this.lg = a.lg ? ? !1;
            this.Fe = a.Fe ? ? !1;
            this.ga = a.ga ? ? !1;
            this.ve = a.ve ? ? !1;
            this.xe = a.xe ? ? !1;
            this.Ec = a.Ec ? ? !1;
            this.Pc = !!a.Pc;
            this.wd = !!a.wd
        }
    };

    function eP(a, b, c, d, e) {
        c.setTimeout(CQ(a, b, d), e)
    }

    function mP(a) {
        return 2 === K(a.R, 12)
    }

    function pP(a, b, c) {
        a = CQ(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function sP(a, b, c) {
        return b.setInterval(CQ(a, 1066, c), 1E3)
    }

    function HP(a, b, c, d) {
        c.addEventListener("click", CQ(a, b, d))
    }

    function yQ(a, b) {
        return new IntersectionObserver(CQ(a, 1065, b), {
            threshold: .98
        })
    }

    function CQ(a, b, c) {
        return a.zc.Fa(b, c, void 0, d => void DQ(a, d))
    }

    function DQ(a, b) {
        b.es = a.U.nc.join(",");
        b.c = `${a.B}`
    }
    var FQ = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n, p = !1) {
            this.m = a;
            this.ja = b;
            this.Yd = c;
            this.R = d;
            this.B = e;
            this.zc = f;
            this.j = g;
            this.na = h;
            this.C = k;
            this.Na = l;
            this.Rb = m;
            this.Jd = p;
            this.U = new BQ(n);
            this.l = Ya(EQ, I(d, 7)) ? 1 : 0;
            this.A = new Map;
            this.v = new Map;
            for (const q of Hi(this.R)) null != D(q, 6) && this.A.set(I(q, 1), I(q, 6)), null != D(q, 7) && this.v.set(I(q, 1), I(q, 7))
        }
        Ka(a, b) {
            this.zc.Ka(a, b, c => void DQ(this, c));
            return b
        }
        Ha(a) {
            return this.C.Ha(a)
        }
        ga() {
            return this.U.ga
        }
        ce() {
            return this.R.ce()
        }
        de() {
            return this.R.de()
        }
        Xc() {
            return this.R.Xc()
        }
    };
    const EQ = ["ja", "zh_CN", "zh_TW"];

    function GQ(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function HQ(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function IQ() {
        const a = new Set,
            b = Jv();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function JQ(a) {
        a = a.id;
        return null != a && (IQ().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function KQ(a, b, c) {
        if (!a.sources) return !1;
        switch (LQ(a)) {
            case 2:
                const d = MQ(a);
                if (d) return c.some(f => NQ(d, f));
                break;
            case 1:
                const e = OQ(a);
                if (e) return b.some(f => NQ(e, f))
        }
        return !1
    }

    function LQ(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function OQ(a) {
        return PQ(a, b => b.currentRect)
    }

    function MQ(a) {
        return PQ(a, b => b.previousRect)
    }

    function PQ(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function NQ(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function QQ() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(JQ),
            b = [...IQ()].map(c => document.getElementById(c)).filter(c => null !== c);
        RQ = window.scrollX;
        SQ = window.scrollY;
        return TQ = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function UQ(a) {
        a.H || (a.H = new PerformanceObserver(St(640, b => {
            const c = RQ !== window.scrollX || SQ !== window.scrollY ? [] : TQ,
                d = QQ();
            for (const f of b.getEntries()) switch (f.entryType) {
                case "layout-shift":
                    b = a;
                    if (!f.hadRecentInput) {
                        b.A += Number(f.value);
                        Number(f.value) > b.B && (b.B = Number(f.value));
                        b.G += 1;
                        var e = KQ(f, c, d);
                        e && (b.m += f.value, b.Ba++);
                        if (5E3 < f.startTime - b.ua || 1E3 < f.startTime - b.Ac) b.ua = f.startTime, b.j = 0, b.l = 0;
                        b.Ac = f.startTime;
                        b.j += f.value;
                        e && (b.l += f.value);
                        b.j > b.I && (b.I = b.j, b.Dc = b.l, b.Cc = f.startTime + f.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = f;
                    a.pa = Math.floor(b.renderTime || b.loadTime);
                    a.ba = b.size;
                    break;
                case "first-input":
                    b = f;
                    a.O = Number((b.processingStart - b.startTime).toFixed(3));
                    a.Z = !0;
                    break;
                case "longtask":
                    b = Math.max(0, f.duration - 50), a.v += b, a.C = Math.max(a.C, b), a.F += 1
            }
        })));
        return a.H
    }

    function VQ(a) {
        const b = St(641, () => {
                2 === XK(document) && WQ(a)
            }),
            c = St(641, () => void WQ(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.L = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            UQ(a).disconnect()
        }
    }

    function WQ(a) {
        if (!a.Pb) {
            a.Pb = !0;
            UQ(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += HQ("cls", a.A), b += HQ("mls", a.B), b += GQ("nls", a.G), window.LayoutShiftAttribution && (b += HQ("cas", a.m), b += GQ("nas", a.Ba), b += HQ("was", a.Dc)), b += HQ("wls", a.I), b += HQ("tls", a.Cc));
            window.LargestContentfulPaint && (b += GQ("lcp", a.pa), b += GQ("lcps", a.ba));
            window.PerformanceEventTiming && a.Z && (b += GQ("fid", a.O));
            window.PerformanceLongTaskTiming && (b += GQ("cbt", a.v), b +=
                GQ("mbt", a.C), b += GQ("nlt", a.F));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) JQ(c) && d++;
            b += GQ("nif", d);
            b += GQ("ifi", Zj(window));
            c = Q(bp).j();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${t===t.top?1:0}`;
            b += a.Bc ? `&${"qqid"}=${encodeURIComponent(a.Bc)}` : GQ("pvsid", Kf(t));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.L()
        }
    }
    var XQ = class {
            constructor() {
                this.l = this.j = this.G = this.B = this.A = 0;
                this.Ac = this.ua = Number.NEGATIVE_INFINITY;
                this.O = this.ba = this.pa = this.Ba = this.Dc = this.m = this.Cc = this.I = 0;
                this.Z = !1;
                this.F = this.C = this.v = 0;
                this.H = null;
                this.Pb = !1;
                this.L = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Bc = a ? a.getAttribute("data-google-query-id") : null
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input",
                        "longtask"
                    ];
                    for (const b of a) UQ(this).observe({
                        type: b,
                        buffered: !0
                    });
                    VQ(this)
                }
            }
        },
        RQ, SQ, TQ = [];
    async function YQ(a, b, c, d, e, f, g, h) {
        var k = op,
            l = np;
        try {
            lc(a.document)
        } catch (m) {
            return
        }(h = (h = hJ(new lJ(a), "__gads", h)) ? mf(h + "t2Z7mVic") % 20 : null) || (h = of () ? null : Math.floor(20 * jf()));
        null != h && await ZQ(a, b, c, d, h, k, e, l, f, g)
    }
    async function ZQ(a, b, c, d, e, f, g, h, k, l) {
        var m = c.R;
        if (.1 > Math.random()) try {
            (new XQ).observe()
        } catch (E) {
            f.sa(1161, E instanceof Error ? E : Error("Unknown error."))
        }
        if (!c.U.ve) {
            var n = k.Ha(0),
                p = 488 > Wp(a),
                q = c.U;
            if ((q.Kb ? !F(m, 17) : !q.gb) && 0 < Hi(m).length) {
                q = a.document;
                var w = q.createElement("LINK");
                const E = Cj `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                Xe(w, E, "stylesheet");
                q.head.appendChild(w)
            }
            q = c.U;
            w = new Eo;
            w = $h(w, 2, e);
            q = Hh(w, 3, q.nc, Rg);
            g = new AQ(k, n, q, g);
            e = new FQ(d, p, c.Yd,
                m, e, f, g, h, k, c.Na, c.Rb, c.U, c.Jd);
            d = new zQ;
            b = await $Q(a, a.document, b, e, l, d);
            k = k.Ha(9) - n;
            n = c.U;
            (n.Kb ? F(m, 17) : n.gb) || !d.entries.length || F(m, 13) || (l = a.document, e = l.createElement("LINK"), Xe(e, n.yc ? Yc(rb("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                cxId: I(m, 16),
                lang: I(m, 7)
            }) : Cj `https://www.google.com/adsense/search/ads.js`, "prefetch"), e.as = "script", e.fetchPriority = "low", l.head.appendChild(e));
            n = c.Oc;
            l = a.location.hostname;
            c = c.sh;
            a = new Bo;
            e = new no;
            n = ci(e, 1, n);
            n = ci(n, 2, l);
            p = Yh(n, 3, p);
            p = ai(p,
                4, d.j);
            p = C(a, 1, p);
            a = new oo;
            a = ci(a, 2, d.m);
            c = ci(a, 3, c);
            p = C(p, 2, c);
            p = M(p, 3, Math.round(k));
            k = Hi(m);
            c = n = a = 0;
            for (y of k) a += (F(y, 3) ? 1 : 0) + (F(y, 4) ? 1 : 0) + Ch(y, 5, Xg).length, l = F(y, 3) ? 1 : 0, e = F(y, 4) || Ch(y, 5, Xg).length ? 1 : 0, n += l + e, c += F(y, 3) ? 1 : 0;
            var y = new Ao;
            y = Zh(y, 1, k.length);
            y = Zh(y, 2, a);
            y = vh(y, 3, null == n ? n : Pg(n));
            y = vh(y, 4, null == c ? c : Pg(c));
            y = C(p, 6, y);
            b.length ? (m = new so, m = Oh(m, 1, b), Nh(y, 5, Co, m)) : (b = new zo, b = Oh(b, 2, d.entries), m = Hi(m).length, m = M(b, 3, m), m = C(m, 4, d.l), Nh(y, 4, Co, m));
            m = g.handle;
            d = NP(g, 9);
            y = Nh(d, 3, Mo, y);
            m.call(g,
                y)
        }
    }
    async function $Q(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !aR(b)) return a = new qo, c = new po, [Nh(a, 1, ro, c)];
        b = b.innerText ? ? "";
        var g = WP(b, d.l);
        f.j = g;
        e.j.Ha(3) >= e.l && await kQ(e, 4);
        var h;
        h = (h = I(d.R, 7)) ? (h = h.match(/^[a-z]{2,3}/i)) ? h[0].toLowerCase() : "" : "";
        f.m = h;
        h = [];
        if (g < Math.min(d.Na.qc, d.Rb.qc)) {
            g = h.push;
            var k = new qo;
            var l = new po;
            k = Nh(k, 2, ro, l);
            g.call(h, k)
        }
        a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') && (g = h.push, k = new qo, l = new po, k = Nh(k, 3, ro, l), g.call(h, k));
        h.length || await jQ(a, c,
            d, e, f, b);
        return h
    }

    function aR(a) {
        try {
            lc(new ResizeObserver(() => {})), lc(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };
    async function bR(a, b, c, d, e, f, g, h, k) {
        if (R(hl)) {
            const l = Ay(a);
            if (l.wasReactiveAdConfigReceived[42]) return;
            l.wasReactiveAdConfigReceived[42] = !0
        } else {
            if (Y(jG(), 29, !1)) return;
            oG(jG(), 29, !0)
        }
        await YQ(a, b, d, e, [l => void FG(c, l)], f, g, h);
        R(Jl) && !F(d.R, 17) && cR(a, k, Hi(d.R))
    }

    function cR(a, b, c) {
        let d = 0,
            e = 0;
        a = a.document.getElementsByTagName("IMG");
        for (let f = a.length - 1; 0 <= f; f--) {
            const g = a[f];
            128 <= g.offsetHeight && 128 <= g.offsetWidth && (0 < g.alt.length || 0 < g.title.length || 0 < (g.ariaLabel ? ? "").length) && (d++, c.some(h => {
                F(h, 3) ? (h = I(h, 1), h = g.ariaLabel ? .includes(h) || g.alt.includes(h) || g.title.includes(h)) : h = !1;
                return h
            }) && e++)
        }
        Lm(np, "adfil-imp", {
            h: b,
            n: d,
            p: c.length,
            t: e
        }, !0, 1)
    };

    function dR(a, b) {
        if (R(Dl) && (a = iv(Au(b, a), a), 0 !== a.length)) return a.reduce((c, d) => c.aa.j > d.aa.j ? c : d)
    };

    function eR({
        df: a,
        jg: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function fR(a) {
        op.Ce(b => {
            b.shv = String(a);
            b.mjsv = eR({
                df: "m202308220101",
                jg: a
            });
            b.eid = lM(t)
        })
    };
    var gR = "undefined" === typeof sttc ? void 0 : sttc;

    function hR(a) {
        var b = op;
        try {
            return hi(a, Nm), new FK(JSON.parse(a))
        } catch (c) {
            b.sa(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new FK
    };
    const iR = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    consentData: c ? ? void 0,
                    Sc: d ? void 0 : 2
                })
            })
        },
        jR = {
            jc: a => a.callback,
            Bb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            bb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    Sc: b.success ? void 0 : 2
                })
            }
        };

    function kR(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            we: b.__uspapiReturn.callId
        }
    }

    function lR(a, b) {
        let c = {};
        if (tC(a.caller)) {
            var d = zb(() => {
                b(c)
            });
            vC(a.caller, "getDataWithCallback", {
                callback: e => {
                    e.Sc || (c = e.consentData);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var mR = class extends Uo {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new wC(a, "__uspapiLocator", b => "function" === typeof b.__uspapi, kR);
            this.caller.A.set("getDataWithCallback", iR);
            this.caller.m.set("getDataWithCallback", jR)
        }
        l() {
            this.caller.ma();
            super.l()
        }
    };

    function nR(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = oe(a.j.V() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = oR(a, b, c, a.j.j.elementsFromPoint(ae(c.left + c.width / 2, c.left, c.right - 1), ae(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = oR(a, b, c, a.j.j.elementsFromPoint(ae(c.left + c.width / 2, c.left, c.right - 1), ae(c.top + 2, c.top, c.bottom - 1)), 2, e.Va),
            g = oR(a, b, c, a.j.j.elementsFromPoint(ae(c.left + 2, c.left, c.right - 1), ae(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.Va, ...f.Va]);
        const h = oR(a, b, c, a.j.j.elementsFromPoint(ae(c.right - 1 - 2, c.left, c.right - 1), ae(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.Va, ...f.Va, ...g.Va]);
        var k = pR(a, b, c),
            l = n => Ya(a.m, n.overlapType) && Ya(a.v, n.overlapDepth) && Ya(a.l, n.overlapDetectionPoint);
        e = Ua([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Ua(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = pe(a.j.j);
        const m = new ij(c.left, c.top, c.width, c.height);
        e = [...Va(e, n => new ij(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...jb(Va(l, n => kj(m, n.elementRect))), ...Ua(kj(m, new ij(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? qR(m, e) : rR(c, e)
        }
    }

    function sR(a, b) {
        const c = a.j.V(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Cm,
                                        m = Bm(l, () => nR(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, tR);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function oR(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            Va: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (Ya(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.j.contains(n, b)) {
                g.push(uR(a, c, n, p, 1, e));
                continue
            }
            if (a.j.contains(b, n)) {
                g.push(uR(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const y = k.j.lh(l, n);
                if (!y) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: E,
                    rb: G
                } = vR(k, l, y, n) || {},
                {
                    suspectAncestor: J,
                    rb: H
                } = vR(k, n, y, l) || {};k = E && G && J && H ? G <= H ? {
                    suspectAncestor: E,
                    overlapType: wR[G]
                } : {
                    suspectAncestor: J,
                    overlapType: xR[H]
                } : E && G ? {
                    suspectAncestor: E,
                    overlapType: wR[G]
                } : J && H ? {
                    suspectAncestor: J,
                    overlapType: xR[H]
                } : null
            }
            const {
                suspectAncestor: q,
                overlapType: w
            } = k || {};
            q && w ? g.push(uR(a, c, n, p, w, e, q)) : g.push(uR(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            Va: h
        }
    }

    function pR(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = hf(b, a.j.V());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(uR(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(uR(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(uR(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function qR(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = jj(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function rR(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function uR(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Ya(a.m, e) && Ya(a.l, f)) {
            b = new Li(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = yR(a, c)) && hj(b, a)) c = 4;
            else {
                a = zR(c, d);
                if (oc) {
                    e = Qj(c, "paddingLeft");
                    f = Qj(c, "paddingRight");
                    var k = Qj(c, "paddingTop"),
                        l = Qj(c, "paddingBottom");
                    e = new Li(k, f, l, e)
                } else e = Jj(c, "paddingLeft"), f = Jj(c, "paddingRight"), k = Jj(c, "paddingTop"), l = Jj(c, "paddingBottom"), e = new Li(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                hj(b, new Li(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = zR(c, d), c = hj(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function vR(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.V();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = hf(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    rb: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    rb: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    rb: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = AR(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        rb: 4
                    }
                }
            }
        }
        return (a = AR(a, e, b)) ? {
                suspectAncestor: a,
                rb: 5
            } :
            null
    }

    function AR(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = hf(f, a.j.V());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function yR(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Li(a.top, a.right, a.bottom, a.left)
    }

    function zR(a, b) {
        if (!oc || 9 <= Number(Bc)) {
            var c = Jj(a, "borderLeftWidth");
            d = Jj(a, "borderRightWidth");
            e = Jj(a, "borderTopWidth");
            a = Jj(a, "borderBottomWidth");
            c = new Li(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Sj(a, "borderLeft");
            var d = Sj(a, "borderRight"),
                e = Sj(a, "borderTop");
            a = Sj(a, "borderBottom");
            c = new Li(e, d, a, c)
        }
        return new Li(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class BR {
        constructor(a) {
            var b = CR;
            this.j = le(a);
            this.m = [5, 8, 9];
            this.v = [3, 4];
            this.l = b
        }
    }
    const wR = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        xR = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Ua(lf({
        hk: 1,
        ik: 2,
        cm: 3,
        dm: 4,
        fm: 5,
        dk: 6,
        ek: 7,
        gk: 8,
        ll: 9,
        em: 10,
        fk: 11,
        bm: 12,
        ck: 13
    }), a => !Ya([1, 2], a));
    lf({
        wj: 1,
        rl: 2,
        Hj: 3,
        gm: 4
    });
    const CR = lf({
            xj: 1,
            jm: 2,
            Wk: 3,
            Pl: 4
        }),
        tR = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function DR(a, b, c, d) {
        const e = new fx;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Kb(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return Jb(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * jf())), Jb(a, "message", g), b(c, f), e.promise) : null
    }

    function ER(a) {
        return DR(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    async function kQ(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.l = a.j.Ha(b) + a.m
    }
    var FR = class {
        constructor(a, b) {
            var c = ep(sl);
            this.win = a;
            this.j = b;
            this.m = c;
            this.l = b.Ha(2) + c
        }
    };
    const GR = (a, b) => {
        try {
            const k = void 0 === F(b, 6) ? !0 : F(b, 6);
            var c = wi(K(b, 2)),
                d = I(b, 3);
            a: switch (K(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new yi(c, d, e),
                g = A(b, ri, 5) ? .j() ? ? "";
            f.ic = g;
            f.j = k;
            f.win = a;
            var h = f.build();
            pi(h)
        } catch {}
    };

    function HR(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? GR(a, b) : Jb(a, "load", () => void GR(a, b)))
    };

    function IR(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function JR(a) {
        if (a === a.top || bf(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && IR(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new fx;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Zb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var Qm = {
        rm: 0,
        nm: 1,
        om: 9,
        km: 2,
        lm: 3,
        qm: 5,
        pm: 7,
        mm: 10
    };
    var KR = class extends O {},
        LR = ki(KR),
        MR = [1, 3];
    const NR = Cj `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function OR(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: k
                }) => k)
            }
            const e = gf("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Vc(NR).toString();
            const f = (new URL(NR.toString())).origin,
                g = cJ({
                    destination: a,
                    Ia: e,
                    origin: f,
                    ob: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function PR(a, b, c) {
        var d = op,
            e = {
                skipTopicsObservation: R(Yl)
            };
        const {
            Lc: f,
            Kc: g
        } = QR(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics,
            sendPingToRCS: !1
        }).then(h => {
            let k = g;
            if (h instanceof Uint8Array) k || (k = !(f instanceof Uint8Array && hb(h, f)));
            else if (Pm()(h)) k || (k = h !== f);
            else return d.sa(989, Error(JSON.stringify(h))), 7;
            if (k && c) try {
                var l = new KR;
                var m = ai(l, 2, tm());
                h instanceof Uint8Array ? Jh(m, 1, MR, Cg(h, !1, !1)) : Jh(m, 3, MR, h);
                c.setItem("goog:cached:topics", ei(m))
            } catch {}
            return h
        }), b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }

    function QR(a) {
        if (!a) return {
            Lc: null,
            Kc: !0
        };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m) return {
                Lc: null,
                Kc: !0
            };
            const n = LR(m);
            let p;
            const q = n.P;
            var b = Kh(q, q[x], MR);
            switch (b) {
                case 0:
                    p = null;
                    break;
                case 1:
                    var c, d = Lh(n, MR, 1);
                    const y = n.P,
                        E = y[x],
                        G = uh(y, E, d),
                        J = Cg(G, !0, !!(E & 34));
                    null != J && J !== G && wh(y, E, d, J);
                    var e = J;
                    var f = null == e ? cg() : e;
                    bg($f);
                    var g = f.K;
                    if (null == g || Yf(g)) var h = g;
                    else {
                        if ("string" === typeof g) {
                            a = g;
                            Vf.test(a) && (a = a.replace(Vf, Xf));
                            let H;
                            H = atob(a);
                            const L = new Uint8Array(H.length);
                            for (a = 0; a < H.length; a++) L[a] =
                                H.charCodeAt(a);
                            var k = L
                        } else k = null;
                        h = k
                    }
                    var l = h;
                    p = (c = null == l ? l : f.K = l) ? new Uint8Array(c) : Zf || (Zf = new Uint8Array(0));
                    break;
                case 3:
                    p = K(n, Lh(n, MR, 3));
                    break;
                default:
                    Ve(b, void 0)
            }
            const w = Uh(Sh(n, 2)) + 6048E5 < tm();
            return {
                Lc: p,
                Kc: w
            }
        } catch {
            return {
                Lc: null,
                Kc: !0
            }
        }
    };

    function RR(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function SR({
        Aa: a,
        ia: b,
        Ya: c,
        slot: d
    }) {
        const e = d.vars,
            f = ef(d.pubWin),
            g = RR(d),
            h = new xK({
                J: f,
                pubWin: d.pubWin,
                D: e,
                Aa: a,
                ia: b,
                Ya: c,
                ea: g
            });
        h.G = Date.now();
        Hp(1, [h.D]);
        qp(1032, () => {
            if (f && R(km)) {
                var k = h.D;
                Y(jG(), 32, !1) || (oG(jG(), 32, !0), rM(f, "sa" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await TR(h)
        } catch (k) {
            if (!tp(159, k)) throw k;
        }
        qp(639, () => {
            var k;
            var l = h.D;
            (k = h.J) && 1 === l.google_responsive_auto_format && !0 === l.google_full_width_responsive_allowed ? (l = (l = k.document.getElementById(l.google_async_iframe_id)) ? ye(l,
                "INS", "adsbygoogle") : null) ? (k = new wK(k, l), k.j = t.setInterval(Ba(k.l, k), 500), k.l(), k = !0) : k = !1 : k = !1;
            return k
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? up(1008, UR(f, e, h.m, ei(VR()), h.l, I(a, 8)), WR) : wp(h.pubWin, "affa", k => {
            k = UR(f, e, h.m, k.config, h.l, I(a, 8));
            op.Ka(1008, k, WR);
            return !0
        });
        return h
    }

    function WR(a) {
        a.es = Q(bp).j().join(",")
    }
    async function UR(a, b, c, d, e, f) {
        if (a ? .performance ? .now) {
            var g = new uP(a.performance),
                h = new FR(a, g),
                k = b.google_ad_client;
            if ("string" === typeof k && "string" === typeof d && b.google_ad_client && a && !hc()) {
                c = R(Fl) ? c : cN;
                var l = Q(HG),
                    m = UM(d);
                d = b.google_page_url;
                d = "string" === typeof d ? d : "";
                var n = "on" === b.google_adtest;
                const w = A(m, DK, 2);
                try {
                    const y = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                    if (y) {
                        var p = decodeURIComponent(y[1]);
                        var q = Ji(p)
                    } else q = null
                } catch (y) {
                    q = null
                }
                q || (q = (q = yh(m, Ii, 1, !1)) ? q : Zg(Ii));
                p = w ? .j() &&
                    (488 > Wp(a) || !w ? .l()) ? 0 : 1;
                m = B(m, Ks, 3);
                m = {
                    si: ep(rl),
                    qc: 300,
                    Ae: 2,
                    Ld: 5,
                    Eb: 300,
                    ah: dR(a, m)
                };
                f = {
                    R: q,
                    Oc: d,
                    Yd: p,
                    sh: f,
                    Na: m,
                    Rb: {
                        qc: 50,
                        Ie: ep(Ql)
                    },
                    U: new BQ({
                        Rd: ep(Rl),
                        nc: Q(bp).j(),
                        gb: R(Ll),
                        Kb: R(Ml),
                        We: ep(ql),
                        yc: R(Sl),
                        Le: R(Tl),
                        lg: R(Pl),
                        Fe: R(Ol),
                        ga: R(yl) || !!a.location ? .href ? .match(/goog_ffsa=1/),
                        ve: R(Gl),
                        xe: R(Il),
                        Ec: R(pl),
                        Pc: R(tl),
                        wd: R(Hl)
                    }),
                    Jd: n
                };
                await bR(a, c, l, f, k, g, h, e, b.google_page_url ? ? "")
            }
        }
    }

    function VR() {
        const a = new TM;
        if (!R(Ll)) {
            var b = new DK;
            b = Yh(b, 5, !0);
            C(a, 2, b)
        }
        R(Dl) && !R(El) && (b = Is(di(Js(new Ks, 4), 8), Er("#dpId")), Qh(a, 3, Ks, b));
        return a
    }

    function TR(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        jM(13, b);
        jM(11, b);
        b = jG();
        var c = Y(b, 23, !1);
        c || oG(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.Aa;
            b = void 0 !== yh(c, DK, Lh(c, GK, 13)) ? A(Wh(c, DK, 13, GK), oH, 2) : hb(Wh(c, EK, 14, GK) ? .j() ? ? [], [b]) ? A(A(Wh(c, EK, 14, GK), DK, 2), oH, 2) : new oH;
            b = new pH(a.pubWin, a.D.google_ad_client, b, F(a.Aa, 6), F(a.Aa, 20));
            b.l = !0;
            c = A(b.C, Ls, 1);
            if (b.l) {
                var d = b.j;
                if (b.m && !iC(c)) {
                    var e = new cH;
                    e = di(e, 1)
                } else e = null;
                if (e) {
                    e = ei(e);
                    try {
                        d.localStorage.setItem("google_auto_fc_cmp_setting",
                            e)
                    } catch (f) {}
                }
            }
            d = iC(c) && (b.m || b.A);
            c && d && jC(new kC(b.j, new RC(b.j, b.v), c, new Iy(b.j)))
        }
        b = !mj() && !gc();
        return !b || b && !YR(a) ? ZR(a) : Promise.resolve()
    }

    function $R(a, b, c = !1) {
        b = gJ(a.J, b);
        const d = qj() || qt(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = st(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function YR(a) {
        return aS(a) || bS(a)
    }

    function aS(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                sp("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = rp(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                YR(a) || ZR(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function bS(a) {
        const b = a.pubWin.document,
            c = cS();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.ea,
            e = YK(b);
        if (!e) return !1;
        if (!ZK(b)) return dS(a, c.visible, d);
        const f = 3 === XK(b);
        if ($R(a, d) <= c.hidden && !f) return !1;
        let g = rp(332, () => {
            !ZK(b) && g && (Kb(b, e, g), dS(a, c.visible, d) || ZR(a), g = null)
        });
        return Jb(b, e, g)
    }

    function cS() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        Be() && (a.visible *= 2);
        return a
    }

    function dS(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.D;
        if (!bq(d.google_reactive_ad_format) && (UJ(d) || d.google_reactive_ads_config) || !tt(c) || $R(a, c) <= b) return !1;
        var e = jG(),
            f = Y(e, 8, {});
        e = Y(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                Ra(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.F = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ha(Promise, "any").call(Promise, [f, e]).then(() => {
            qp(294, () => {
                ZR(a)
            })
        });
        return !0
    }

    function ZR(a) {
        qp(326, () => {
            if (1 === Zj(a.D)) {
                var c = R(lm),
                    d = c || R(jm),
                    e = a.pubWin;
                if (d && e === a.J) {
                    var f = new Bp;
                    d = new Cp;
                    var g = f.setCorrelator(Kf(a.pubWin));
                    var h = lM(a.pubWin);
                    g = ci(g, 5, h);
                    N(g, 2, 1);
                    f = C(d, 1, f);
                    g = new Ap;
                    g = Yh(g, 10, !0);
                    h = R(dm);
                    g = Yh(g, 8, h);
                    h = R(em);
                    g = Yh(g, 12, h);
                    h = R(gm);
                    g = Yh(g, 7, h);
                    h = R(fm);
                    g = Yh(g, 13, h);
                    C(f, 2, g);
                    e.google_rum_config = d.toJSON();
                    ff(e.document, F(a.Aa, 9) && c ? a.ia.bi : a.ia.ci)
                } else Am(pp)
            }
        });
        a.D.google_ad_channel = eS(a, a.D.google_ad_channel);
        a.D.google_tag_partner = fS(a, a.D.google_tag_partner);
        gS(a);
        const b = a.D.google_start_time;
        "number" === typeof b && (Lp = b, a.D.google_start_time = null);
        fJ(a);
        a.J && YJ(a.J, a.ia.Xg);
        rG() && rH({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            Ta: a.ia.Ta
        });
        UJ(a.D) && (hB() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        hS(a.J);
        return iS(a)
    }

    function eS(a, b) {
        return (b ? [b] : []).concat(hG(a.pubWin).ad_channels || []).join("+")
    }

    function fS(a, b) {
        return (b ? [b] : []).concat(hG(a.pubWin).tag_partners || []).join("+")
    }

    function jS(a) {
        const b = gf("IFRAME");
        kf(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function kS(a, b, c) {
        return 9 === a.D.google_reactive_ad_format && ye(a.ea, null, "fsi_container") ? (a.ea.appendChild(b), Promise.resolve(b)) : eK(a.ia.eg, 525, d => {
            a.ea.appendChild(b);
            d.createAdSlot(a.J, a.D, b, a.ea.parentElement, gH(c, a.pubWin));
            return b
        })
    }

    function lS(a, b, c, d) {
        Q(HG).Oc = a.D.google_page_url;
        HR(a.pubWin, ui(ti(N(N(si(new vi, qi(new ri, String(Kf(a.pubWin)))), 4, 1), 2, 1), I(a.Aa, 2)), F(d, 5)));
        const e = a.J;
        a.D.google_acr && a.D.google_acr(b);
        Jb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = e ? hG(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || f) && e && e === a.pubWin && mS(e, a, a.ea, b)
        });
        d = f => {
            f && a.m.push(() => {
                f.ma()
            })
        };
        nS(a, b);
        oS(a, b);
        !e || UJ(a.D) && !gK(a.D) || (d(new HL(e, b, a.D)), d(new UK(a, b)), d(e.IntersectionObserver ? null : new WK(e, b, a.ea)));
        e && (d(OK(e, b, a.l)), a.m.push(qK(e, a.D)), Q(vK).init(e), a.m.push(CK(e, a.ea, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (null != c) {
            d = a.ea;
            const f = d.parentElement;
            (f && Gt.test(f.className) ? f : d).setAttribute("data-auto-ad-size", c)
        }
        c = a.ea;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        pS(a)
    }

    function nS(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = qG();
        let f = null;
        const g = vp(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.m.push(g)
    }

    function qS(a, b) {
        var c = hJ(a, "__gpi_opt_out", b.l);
        c && (c = Di(Ci(Bi(zi(c), 2147483647), "/"), b.pubWin.location.hostname), iJ(a, "__gpi_opt_out", c, b.l))
    }

    function oS(a, b) {
        const c = vp(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = Di(Ci(Bi(zi(d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new lJ(a.pubWin);
                iJ(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) jJ(f, "__gads", a.l), jJ(f, "__gpi", a.l)
            }
        });
        a.m.push(c)
    }

    function pS(a) {
        const b = mj(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                Jb(a.pubWin, "message", op.Fa(616, c));
                a.m.push(() => {
                    Kb(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function mS(a, b, c, d) {
        sR(new BR(a), c).then(e => {
            Hp(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && Gt.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.executionTime || "",
                h = null == b.D.iaaso ? "" : Number(b.D.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = Va(e.entries, E => `${E.overlapType}:${E.overlapDepth}:${E.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p =
                m * e.targetRect.width * e.targetRect.height,
                q = `${e.scrollPosition.scrollX},${e.scrollPosition.scrollY}`,
                w = ak(e.target),
                y = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = `${e.viewportSize.width}x${e.viewportSize.height}`;
            sp("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: lM(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: p,
                slot: b.D.google_ad_slot,
                sp: q,
                tgt: w,
                tr: y,
                url: b.D.google_page_url,
                vp: e,
                pvc: Kf(a)
            }, 1)
        }).catch(e => {
            Hp(8, ["Error:", e.message, c]);
            sp("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function rS(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function sS(a, b, c, d) {
        var e = a.D;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var k = hK(e),
            l = {
                id: f,
                name: f
            };
        cM("browsing-topics", a.pubWin.document) && tS(a) && (l.browsingTopics = "true");
        l.style = k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = yf();
        m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"] && (R(Zk) && k || (m = "=" + encodeURIComponent("1"), b = Le(b,
            "fsb" + m)), l.sandbox = xf().join(" "));
        R(qk) && !1 === e.google_video_play_muted && rS("autoplay", l);
        m = b;
        61440 < m.length && (m = m.substring(0, 61432), m = m.replace(/%\w?$/, ""), m = m.replace(/&[^=]*=?$/, ""), m += "&trunc=1");
        if (m !== b) {
            var n = b.lastIndexOf("&", 61432); - 1 === n && (n = b.lastIndexOf("?", 61432));
            sp("trn", {
                ol: b.length,
                tr: -1 === n ? "" : b.substring(n + 1),
                url: b
            }, .01)
        }
        b = m;
        n = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight = "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (n = ""; 0 < m--;) n += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
            n = m = n;
            const p = uf();
            b = b + (-1 == b.indexOf("?") ? "?" : "&") + [0 < p.length ? "google_debug" + (p ? "=" + p : "") + "&" : "", "xpc=", n, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
        } else b = n;
        e.dash && (l.srcdoc = e.dash);
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") &&
            rS("attribution-reporting", l);
        R(am) && (n = a.pubWin, void 0 !== n.credentialless && (R(bm) || n.crossOriginIsolated) && (l.credentialless = "true"));
        if (k) l.src = b, l = jS(l), l = kS(a, l, d);
        else {
            d = {};
            d.dtd = AK((new Date).getTime(), Lp);
            d = Vj(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = jS(l);
            d && a.m.push(sj(a.pubWin, l));
            a.ea.style.visibility = "visible";
            for (d = a.ea; k = d.firstChild;) d.removeChild(k);
            d.appendChild(l);
            l = Promise.resolve(l)
        }
        c && (c = a.ia.ti, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            ob: m,
            ai: a.pubWin,
            Cg: f,
            Em: `google_expandable_ad_slot${Zj(e)}`,
            Ch: c.toString(),
            fe: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.ob || !e.fe ? void 0 : vp(e.fe, "ct", Fa(yp, e, c)), null != e && a.m.push(e));
        return l
    }
    async function uS(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.l;
        F(d, 5) && qS(new lJ(a.pubWin), a);
        var e = gH(d, a.pubWin);
        if (!F(d, 5)) return sp("afc_noc_req", {}, ep(pk)), Promise.resolve();
        if (!R(Xl)) {
            var f = cM("shared-storage", a.pubWin.document),
                g = cM("browsing-topics", a.pubWin.document);
            if (f || g) try {
                a.A = OR(a.pubWin)
            } catch (h) {
                tp(984, h)
            }
        }
        R(jk) || pJ(d, a.pubWin, a.D.google_ad_client);
        kM(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) dK(a.J, f), iK(f, a, gH(d)), f = f.page_level_pubvars, va(f) && Lc(a.D, f);
        f = cM("shared-storage", a.pubWin.document);
        a.A && F(d, 5) && f && !Y(jG(), 34, !1) && (oG(jG(), 34, !0), f = a.A.then(h => {
            h({
                message: "goog:spam:client_age",
                pvsid: Kf(a.pubWin),
                sendPingToRCS: R(Ul)
            })
        }), op.Ka(1069, f));
        if (cM("browsing-topics", a.pubWin.document) && a.A)
            if (tS(a)) {
                a.v = 1;
                const h = gH(a.l, a.pubWin);
                f = a.A.then(async k => {
                    await PR(k, a.pubWin, h).then(l => {
                        a.v = l
                    })
                });
                g = ep(Zl);
                0 < g ? await Promise.race([f, Mf(g)]) : await f
            } else a.v = 5;
        f = "";
        hK(b) ? (e = R(dl) ? a.ia.vi : a.ia.wi, R(Tk) && (e = Tc(e, {
            hello: "world"
        })), f = e.toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index +
            "-") + "&" + Uj({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), FM(b, jG()), vS(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !VJ(b) || TJ(c, b, e)) && vS(b) && (f = wM(a, d));
        Hp(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || Yj(c);
        e = Zj(b);
        b = a.pubWin === a.J ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)}`;
        c = 0 < $R(a, a.ea, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = jG(), e.btvi = Y(c, 21, 1), pG(c, 21));
        f = Vj(e, f);
        c = sS(a, f, 0 === a.B, d);
        a.D.rpe && DL(a.pubWin, a.ea, {
            height: a.D.google_ad_height,
            He: "force",
            Gc: !0,
            ze: !0,
            Gd: a.D.google_ad_client
        });
        c = await c;
        try {
            lS(a, c, b, d)
        } catch (h) {
            tp(223, h)
        }
    }

    function wS(a) {
        const b = new mR(a);
        return new Promise(c => {
            lR(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function xS(a) {
        var b = zf(t.top, "googlefcPresent");
        t.googlefc && !b && sp("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function yS(a, b) {
        const c = b.ni,
            d = b.uspString;
        b = b.th;
        c ? yK(a, c) : jH(a, !0);
        d && bi(a, 1, d);
        b && (a = Hh(a, 10, b.applicableSections, Rg), a = bi(a, 11, b.gppString), b = xJ(b.gppString), Xh(a, 12, b))
    }

    function zS(a) {
        const b = ep(nk);
        if (0 >= b) return null;
        const c = tm(),
            d = ER(a.pubWin);
        if (!d) return null;
        a.C = "0";
        return Promise.race([d, Mf(b, "0")]).then(e => {
            sp("adsense_paw", {
                time: tm() - c
            });
            1E4 < e ? .length ? tp(809, Error(`ML:${e.length}`)) : a.C = e
        }).catch(e => {
            tp(809, e)
        })
    }

    function AS(a) {
        const b = tm();
        return Promise.race([qp(832, () => JR(a)), Mf(200)]).then(c => {
            sp("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: tm() - b,
                tms: 200
            });
            return c ? .Zb
        })
    }
    async function BS(a) {
        const b = zS(a),
            c = qp(868, () => AS(a.pubWin));
        KI(a.pubWin);
        xS(a.D.google_ad_client);
        var d = new DC(a.pubWin);
        await (AC(d) ? BC(d) : Promise.resolve(null));
        a.l = new kH;
        d = [zK(a), wS(a.pubWin), R(kk) ? zJ(a) : null];
        d = await Promise.all(d);
        yS(a.l, {
            ni: d[0],
            uspString: d[1],
            th: d[2]
        });
        await b;
        a.Zb = await c || "";
        await uS(a)
    }

    function tS(a) {
        const b = a.l;
        a = a.D;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!F(b, 5) && !b.j() && !sG() && !F(b, 9) && (!R(kk) || !F(b, 12))
    }

    function iS(a) {
        if (R(Uk)) var b = 16;
        else {
            const f = a.pubWin.document;
            var c = a.D;
            const g = c.google_ad_width,
                h = c.google_ad_height;
            let k = 0;
            try {
                !1 === c.google_allow_expandable_ads && (k |= 1);
                if (!f.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(f.location.protocol)) k |= 2; {
                    c = navigator;
                    const l = c.userAgent,
                        m = c.platform,
                        n = c.product;
                    if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) b = !1;
                    else if (/Win/.test(m) && /Trident/.test(l) && 11 <= f.documentMode) b = !0;
                    else {
                        var d = (/WebKit\/(\d+)/.exec(l) || [0, 0])[1],
                            e = (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1];
                        b = !d && "Gecko" === n && 27 <= e && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= d ? !0 : !1
                    }
                }
                b || (k |= 4);
                xt(a.pubWin, g, h) && (k |= 2)
            } catch (l) {
                k |= 8
            }
            b = k
        }
        a.B = b;
        0 === a.B || (a.D.google_allow_expandable_ads = !1);
        Nf(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === XK(a.pubWin.document) && (a.j |= 32);
        if (b = a.J) b = a.J, b = !($p(b).scrollWidth <= Wp(b));
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.D.google_loader_features_used && (a.j |= a.D.google_loader_features_used);
        return BS(a)
    }

    function vS(a) {
        const b = jG(),
            c = a.google_ad_section;
        UJ(a) && pG(b, 15);
        if (dk(a)) {
            if (100 < pG(b, 5)) return !1
        } else if (100 < pG(b, 6) - Y(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function gS(a) {
        const b = a.J;
        if (b && !hG(b).ads_density_stats_processed && !mj(b) && (hG(b).ads_density_stats_processed = !0, R(fl) || .01 > jf())) {
            const c = () => {
                if (b) {
                    var d = hF(cF(b), a.D.google_ad_client, b.location.hostname, lM(a.D).split(","));
                    sp("ama_stats", d, 1)
                }
            };
            Lf(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    }

    function hS(a) {
        a && !hG(a).host_pinged_back && (hG(a).host_pinged_back = !0, sp("abg_host", {
            host: a.location.host
        }, .01))
    };
    (function(a, b, c) {
        qp(843, () => {
            if (!t.google_sa_impl) {
                var d = hR(a);
                fR(I(d, 2));
                JK(F(d, 6));
                Hp(16, [3, d.toJSON()]);
                var e = eR({
                        df: b,
                        jg: I(d, 2)
                    }),
                    f = c(e, d);
                t.google_sa_impl = h => SR({
                    Aa: d,
                    ia: f,
                    Ya: e,
                    slot: h
                });
                hM(bM(t));
                t.google_process_slots ? .();
                var g = (t.Prototype || {}).Version;
                null != g && sp("prtpjs", {
                    version: g
                })
            }
        })
    })(gR, "m202308220101", function(a, b) {
        const c = 2012 < Vh(b, 1) ? `_fy${Vh(b,1)}` : "",
            d = I(b, 3);
        b = I(b, 2);
        return {
            ci: Cj `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            bi: Cj `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            eg: Cj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Xg: Cj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            ti: Cj `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            wi: Cj `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            vi: Cj `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            wc: Cj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            Fm: Cj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            Ta: Cj `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/autogames${c}.js`
        }
    });
}).call(this, "[2021,\"r20230823\",\"r20110914\",null,null,null,null,\".google.com.eg\",null,null,null,null,null,null,null,null,null,-1,[44759876,44759927,44759837]]");
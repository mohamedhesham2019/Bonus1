! function(c, It, bt, l) {
    "use strict";

    function ot(t, e, n) {
        return setTimeout(ut(t, n), e)
    }

    function z(t, e, n) {
        return !!Array.isArray(t) && (A(t, n[e], n), !0)
    }

    function A(t, e, n) {
        var i;
        if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== l)
            for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
        else
            for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
    }

    function At(t, e, n) {
        var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
        return function() {
            var r = new Error("get-stack-trace"),
                s = r && r.stack ? r.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                o = c.console && (c.console.warn || c.console.log);
            return o && o.call(c.console, i, s), t.apply(this, arguments)
        }
    }

    function f(t, e, n) {
        var i, r = e.prototype;
        (i = t.prototype = Object.create(r)).constructor = t, i._super = r, n && S(i, n)
    }

    function ut(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function ht(t, e) {
        return typeof t == pe ? t.apply(e && e[0] || l, e) : t
    }

    function _t(t, e) {
        return t === l ? e : t
    }

    function j(t, e, n) {
        A(Z(e), function(i) {
            t.addEventListener(i, n, !1)
        })
    }

    function G(t, e, n) {
        A(Z(e), function(i) {
            t.removeEventListener(i, n, !1)
        })
    }

    function Ct(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function x(t, e) {
        return t.indexOf(e) > -1
    }

    function Z(t) {
        return t.trim().split(/\s+/g)
    }

    function N(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);
        for (var i = 0; i < t.length;) {
            if (n && t[i][n] == e || !n && t[i] === e) return i;
            i++
        }
        return -1
    }

    function B(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function St(t, e, n) {
        for (var i = [], r = [], s = 0; s < t.length;) {
            var o = e ? t[s][e] : t[s];
            N(r, o) < 0 && i.push(t[s]), r[s] = o, s++
        }
        return n && (i = e ? i.sort(function(u, T) {
            return u[e] > T[e]
        }) : i.sort()), i
    }

    function b(t, e) {
        for (var n, i, r = e[0].toUpperCase() + e.slice(1), s = 0; s < Yt.length;) {
            if ((i = (n = Yt[s]) ? n + r : e) in t) return i;
            s++
        }
        return l
    }

    function Pt(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || c
    }

    function d(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(i) {
            ht(t.options.enable, [t]) && n.handler(i)
        }, this.init()
    }

    function Kt(t, e, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            s = e & a && i - r == 0,
            o = e & (h | p) && i - r == 0;
        n.isFirst = !!s, n.isFinal = !!o, s && (t.session = {}), n.eventType = e,
            function Qt(t, e) {
                var n = t.session,
                    i = e.pointers,
                    r = i.length;
                n.firstInput || (n.firstInput = Dt(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = Dt(e) : 1 === r && (n.firstMultiple = !1);
                var s = n.firstInput,
                    o = n.firstMultiple,
                    u = o ? o.center : s.center,
                    T = e.center = xt(i);
                e.timeStamp = Tt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = ct(u, T), e.distance = $(u, T),
                    function te(t, e) {
                        var n = e.center,
                            i = t.offsetDelta || {},
                            r = t.prevDelta || {},
                            s = t.prevInput || {};
                        e.eventType !== a && s.eventType !== h || (r = t.prevDelta = {
                            x: s.deltaX || 0,
                            y: s.deltaY || 0
                        }, i = t.offsetDelta = {
                            x: n.x,
                            y: n.y
                        }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
                    }(n, e), e.offsetDirection = Ot(e.deltaX, e.deltaY);
                var v = wt(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = v.x, e.overallVelocityY = v.y, e.overallVelocity = w(v.x) > w(v.y) ? v.x : v.y, e.scale = o ? function ie(t, e) {
                        return $(e[0], e[1], it) / $(t[0], t[1], it)
                    }(o.pointers, i) : 1, e.rotation = o ? function ne(t, e) {
                        return ct(e[1], e[0], it) + ct(t[1], t[0], it)
                    }(o.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                    function ee(t, e) {
                        var n, i, r, s, o = t.lastInterval || e,
                            u = e.timeStamp - o.timeStamp;
                        if (e.eventType != p && (u > Ee || o.velocity === l)) {
                            var T = e.deltaX - o.deltaX,
                                v = e.deltaY - o.deltaY,
                                I = wt(u, T, v);
                            i = I.x, r = I.y, n = w(I.x) > w(I.y) ? I.x : I.y, s = Ot(T, v), t.lastInterval = e
                        } else n = o.velocity, i = o.velocityX, r = o.velocityY, s = o.direction;
                        e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = s
                    }(n, e);
                var I = t.element;
                Ct(e.srcEvent.target, I) && (I = e.srcEvent.target), e.target = I
            }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
    }

    function Dt(t) {
        for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
            clientX: X(t.pointers[n].clientX),
            clientY: X(t.pointers[n].clientY)
        }, n++;
        return {
            timeStamp: Tt(),
            pointers: e,
            center: xt(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }

    function xt(t) {
        var e = t.length;
        if (1 === e) return {
            x: X(t[0].clientX),
            y: X(t[0].clientY)
        };
        for (var n = 0, i = 0, r = 0; e > r;) n += t[r].clientX, i += t[r].clientY, r++;
        return {
            x: X(n / e),
            y: X(i / e)
        }
    }

    function wt(t, e, n) {
        return {
            x: e / t || 0,
            y: n / t || 0
        }
    }

    function Ot(t, e) {
        return t === e ? nt : w(t) >= w(e) ? 0 > t ? q : W : 0 > e ? k : H
    }

    function $(t, e, n) {
        n || (n = kt);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r)
    }

    function ct(t, e, n) {
        return n || (n = kt), 180 * Math.atan2(e[n[1]] - t[n[1]], e[n[0]] - t[n[0]]) / Math.PI
    }

    function J() {
        this.evEl = Ae, this.evWin = _e, this.pressed = !1, d.apply(this, arguments)
    }

    function at() {
        this.evEl = Ht, this.evWin = Lt, d.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function Rt() {
        this.evTarget = De, this.evWin = xe, this.started = !1, d.apply(this, arguments)
    }

    function re(t, e) {
        var n = B(t.touches),
            i = B(t.changedTouches);
        return e & (h | p) && (n = St(n.concat(i), "identifier", !0)), [n, i]
    }

    function K() {
        this.evTarget = Oe, this.targetIds = {}, d.apply(this, arguments)
    }

    function se(t, e) {
        var n = B(t.touches),
            i = this.targetIds;
        if (e & (a | O) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
        var r, s, o = B(t.changedTouches),
            u = [],
            T = this.target;
        if (s = n.filter(function(v) {
                return Ct(v.target, T)
            }), e === a)
            for (r = 0; r < s.length;) i[s[r].identifier] = !0, r++;
        for (r = 0; r < o.length;) i[o[r].identifier] && u.push(o[r]), e & (h | p) && delete i[o[r].identifier], r++;
        return u.length ? [St(s.concat(u), "identifier", !0), u] : void 0
    }

    function lt() {
        d.apply(this, arguments);
        var t = ut(this.handler, this);
        this.touch = new K(this.manager, t), this.mouse = new J(this.manager, t), this.primaryTouch = null, this.lastTouches = []
    }

    function oe(t, e) {
        t & a ? (this.primaryTouch = e.changedPointers[0].identifier, Mt.call(this, e)) : t & (h | p) && Mt.call(this, e)
    }

    function Mt(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var n = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function() {
                var s = i.indexOf(n);
                s > -1 && i.splice(s, 1)
            }, Re)
        }
    }

    function ue(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var r = this.lastTouches[i],
                s = Math.abs(e - r.x),
                o = Math.abs(n - r.y);
            if (Ut >= s && Ut >= o) return !0
        }
        return !1
    }

    function pt(t, e) {
        this.manager = t, this.set(e)
    }

    function _(t) {
        this.options = S({}, this.defaults, t || {}), this.id = function $t() {
            return ve++
        }(), this.manager = null, this.options.enable = _t(this.options.enable, !0), this.state = st, this.simultaneous = {}, this.requireFail = []
    }

    function zt(t) {
        return t & V ? "cancel" : t & D ? "end" : t & Y ? "move" : t & m ? "start" : ""
    }

    function Nt(t) {
        return t == H ? "down" : t == k ? "up" : t == q ? "left" : t == W ? "right" : ""
    }

    function Q(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
    }

    function g() {
        _.apply(this, arguments)
    }

    function tt() {
        g.apply(this, arguments), this.pX = null, this.pY = null
    }

    function ft() {
        g.apply(this, arguments)
    }

    function vt() {
        _.apply(this, arguments), this._timer = null, this._input = null
    }

    function dt() {
        g.apply(this, arguments)
    }

    function mt() {
        g.apply(this, arguments)
    }

    function et() {
        _.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function C(t, e) {
        return (e = e || {}).recognizers = _t(e.recognizers, C.defaults.preset), new gt(t, e)
    }

    function gt(t, e) {
        this.options = S({}, C.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = function Jt(t) {
            return new(t.options.inputClass || (me ? at : ge ? K : qt ? lt : J))(t, Kt)
        }(this), this.touchAction = new pt(this, this.options.touchAction), Xt(this, !0), A(this.options.recognizers, function(n) {
            var i = this.add(new n[0](n[1]));
            n[2] && i.recognizeWith(n[2]), n[3] && i.requireFailure(n[3])
        }, this)
    }

    function Xt(t, e) {
        var i, n = t.element;
        n.style && (A(t.options.cssProps, function(r, s) {
            i = b(n.style, s), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t.oldCssProps[i] || ""
        }), e || (t.oldCssProps = {}))
    }
    var S, Yt = ["", "webkit", "Moz", "MS", "ms", "o"],
        le = It.createElement("div"),
        pe = "function",
        X = Math.round,
        w = Math.abs,
        Tt = Date.now;
    S = "function" != typeof Object.assign ? function(t) {
        if (t === l || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (i !== l && null !== i)
                for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
        }
        return e
    } : Object.assign;
    var Ft = At(function(t, e, n) {
            for (var i = Object.keys(e), r = 0; r < i.length;)(!n || n && t[i[r]] === l) && (t[i[r]] = e[i[r]]), r++;
            return t
        }, "extend", "Use `assign`."),
        fe = At(function(t, e) {
            return Ft(t, e, !0)
        }, "merge", "Use `assign`."),
        ve = 1,
        qt = "ontouchstart" in c,
        me = b(c, "PointerEvent") !== l,
        ge = qt && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        F = "touch",
        yt = "mouse",
        Ee = 25,
        a = 1,
        O = 2,
        h = 4,
        p = 8,
        nt = 1,
        q = 2,
        W = 4,
        k = 8,
        H = 16,
        y = q | W,
        R = k | H,
        Wt = y | R,
        kt = ["x", "y"],
        it = ["clientX", "clientY"];
    d.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && j(this.element, this.evEl, this.domHandler), this.evTarget && j(this.target, this.evTarget, this.domHandler), this.evWin && j(Pt(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && G(this.element, this.evEl, this.domHandler), this.evTarget && G(this.target, this.evTarget, this.domHandler), this.evWin && G(Pt(this.element), this.evWin, this.domHandler)
        }
    };
    var Ie = {
            mousedown: a,
            mousemove: O,
            mouseup: h
        },
        Ae = "mousedown",
        _e = "mousemove mouseup";
    f(J, d, {
        handler: function(t) {
            var e = Ie[t.type];
            e & a && 0 === t.button && (this.pressed = !0), e & O && 1 !== t.which && (e = h), this.pressed && (e & h && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: yt,
                srcEvent: t
            }))
        }
    });
    var Ce = {
            pointerdown: a,
            pointermove: O,
            pointerup: h,
            pointercancel: p,
            pointerout: p
        },
        Se = {
            2: F,
            3: "pen",
            4: yt,
            5: "kinect"
        },
        Ht = "pointerdown",
        Lt = "pointermove pointerup pointercancel";
    c.MSPointerEvent && !c.PointerEvent && (Ht = "MSPointerDown", Lt = "MSPointerMove MSPointerUp MSPointerCancel"), f(at, d, {
        handler: function(t) {
            var e = this.store,
                n = !1,
                i = t.type.toLowerCase().replace("ms", ""),
                r = Ce[i],
                s = Se[t.pointerType] || t.pointerType,
                o = s == F,
                u = N(e, t.pointerId, "pointerId");
            r & a && (0 === t.button || o) ? 0 > u && (e.push(t), u = e.length - 1) : r & (h | p) && (n = !0), 0 > u || (e[u] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: s,
                srcEvent: t
            }), n && e.splice(u, 1))
        }
    });
    var Pe = {
            touchstart: a,
            touchmove: O,
            touchend: h,
            touchcancel: p
        },
        De = "touchstart",
        xe = "touchstart touchmove touchend touchcancel";
    f(Rt, d, {
        handler: function(t) {
            var e = Pe[t.type];
            if (e === a && (this.started = !0), this.started) {
                var n = re.call(this, t, e);
                e & (h | p) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: F,
                    srcEvent: t
                })
            }
        }
    });
    var we = {
            touchstart: a,
            touchmove: O,
            touchend: h,
            touchcancel: p
        },
        Oe = "touchstart touchmove touchend touchcancel";
    f(K, d, {
        handler: function(t) {
            var e = we[t.type],
                n = se.call(this, t, e);
            n && this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: F,
                srcEvent: t
            })
        }
    });
    var Re = 2500,
        Ut = 25;
    f(lt, d, {
        handler: function(t, e, n) {
            var r = n.pointerType == yt;
            if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (n.pointerType == F) oe.call(this, e, n);
                else if (r && ue.call(this, n)) return;
                this.callback(t, e, n)
            }
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Vt = b(le.style, "touchAction"),
        jt = Vt !== l,
        Gt = "compute",
        Et = "manipulation",
        M = "none",
        L = "pan-x",
        U = "pan-y",
        rt = function ce() {
            if (!jt) return !1;
            var t = {},
                e = c.CSS && c.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                t[n] = !e || c.CSS.supports("touch-action", n)
            }), t
        }();
    pt.prototype = {
        set: function(t) {
            t == Gt && (t = this.compute()), jt && this.manager.element.style && rt[t] && (this.manager.element.style[Vt] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return A(this.manager.recognizers, function(e) {
                    ht(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }),
                function he(t) {
                    if (x(t, M)) return M;
                    var e = x(t, L),
                        n = x(t, U);
                    return e && n ? M : e || n ? e ? L : U : x(t, Et) ? Et : "auto"
                }(t.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent,
                n = t.offsetDirection;
            if (!this.manager.session.prevented) {
                var i = this.actions,
                    r = x(i, M) && !rt[M],
                    s = x(i, U) && !rt[U],
                    o = x(i, L) && !rt[L];
                if (r && 1 === t.pointers.length && t.distance < 2 && t.deltaTime < 250) return;
                return o && s ? void 0 : r || s && n & y || o && n & R ? this.preventSrc(e) : void 0
            }
            e.preventDefault()
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var st = 1,
        m = 2,
        Y = 4,
        D = 8,
        P = D,
        V = 16,
        E = 32;
    _.prototype = {
        defaults: {},
        set: function(t) {
            return S(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (z(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = Q(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return z(t, "dropRecognizeWith", this) || (t = Q(t, this), delete this.simultaneous[t.id]), this
        },
        requireFailure: function(t) {
            if (z(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === N(e, t = Q(t, this)) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (z(t, "dropRequireFailure", this)) return this;
            t = Q(t, this);
            var e = N(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(r) {
                n.manager.emit(r, t)
            }
            var n = this,
                i = this.state;
            D > i && e(n.options.event + zt(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= D && e(n.options.event + zt(i))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void(this.state = E)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (E | st))) return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = S({}, t);
            return ht(this.options.enable, [this, e]) ? (this.state & (P | V | E) && (this.state = st), this.state = this.process(e), void(this.state & (m | Y | D | V) && this.tryEmit(e))) : (this.reset(), void(this.state = E))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    }, f(g, _, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state,
                n = t.eventType,
                i = e & (m | Y),
                r = this.attrTest(t);
            return i && (n & p || !r) ? e | V : i || r ? n & h ? e | D : e & m ? e | Y : m : E
        }
    }), f(tt, g, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Wt
        },
        getTouchAction: function() {
            var t = this.options.direction,
                e = [];
            return t & y && e.push(U), t & R && e.push(L), e
        },
        directionTest: function(t) {
            var e = this.options,
                n = !0,
                i = t.distance,
                r = t.direction,
                s = t.deltaX,
                o = t.deltaY;
            return r & e.direction || (e.direction & y ? (r = 0 === s ? nt : 0 > s ? q : W, n = s != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === o ? nt : 0 > o ? k : H, n = o != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return g.prototype.attrTest.call(this, t) && (this.state & m || !(this.state & m) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Nt(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
    }), f(ft, g, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [M]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & m)
        },
        emit: function(t) {
            1 !== t.scale && (t.additionalEvent = this.options.event + (t.scale < 1 ? "in" : "out")), this._super.emit.call(this, t)
        }
    }), f(vt, _, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return ["auto"]
        },
        process: function(t) {
            var e = this.options,
                n = t.pointers.length === e.pointers,
                i = t.distance < e.threshold,
                r = t.deltaTime > e.time;
            if (this._input = t, !i || !n || t.eventType & (h | p) && !r) this.reset();
            else if (t.eventType & a) this.reset(), this._timer = ot(function() {
                this.state = P, this.tryEmit()
            }, e.time, this);
            else if (t.eventType & h) return P;
            return E
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === P && (t && t.eventType & h ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = Tt(), this.manager.emit(this.options.event, this._input)))
        }
    }), f(dt, g, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [M]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & m)
        }
    }), f(mt, g, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: y | R,
            pointers: 1
        },
        getTouchAction: function() {
            return tt.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, n = this.options.direction;
            return n & (y | R) ? e = t.overallVelocity : n & y ? e = t.overallVelocityX : n & R && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && w(e) > this.options.velocity && t.eventType & h
        },
        emit: function(t) {
            var e = Nt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), f(et, _, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Et]
        },
        process: function(t) {
            var e = this.options,
                n = t.pointers.length === e.pointers,
                i = t.distance < e.threshold,
                r = t.deltaTime < e.time;
            if (this.reset(), t.eventType & a && 0 === this.count) return this.failTimeout();
            if (i && r && n) {
                if (t.eventType != h) return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    o = !this.pCenter || $(this.pCenter, t.center) < e.posThreshold;
                if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = ot(function() {
                    this.state = P, this.tryEmit()
                }, e.interval, this), m) : P
            }
            return E
        },
        failTimeout: function() {
            return this._timer = ot(function() {
                this.state = E
            }, this.options.interval, this), E
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == P && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), C.VERSION = "2.0.7", C.defaults = {
        domEvents: !1,
        touchAction: Gt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [dt, {
                enable: !1
            }],
            [ft, {
                    enable: !1
                },
                ["rotate"]
            ],
            [mt, {
                direction: y
            }],
            [tt, {
                    direction: y
                },
                ["swipe"]
            ],
            [et],
            [et, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [vt]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, gt.prototype = {
        set: function(t) {
            return S(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
            this.session.stopped = t ? 2 : 1
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var n, i = this.recognizers,
                    r = e.curRecognizer;
                (!r || r && r.state & P) && (r = e.curRecognizer = null);
                for (var s = 0; s < i.length;) n = i[s], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (m | Y | D) && (r = e.curRecognizer = n), s++
            }
        },
        get: function(t) {
            if (t instanceof _) return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)
                if (e[n].options.event == t) return e[n];
            return null
        },
        add: function(t) {
            if (z(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (z(t, "remove", this)) return this;
            if (t = this.get(t)) {
                var e = this.recognizers,
                    n = N(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== l && e !== l) {
                var n = this.handlers;
                return A(Z(t), function(i) {
                    n[i] = n[i] || [], n[i].push(e)
                }), this
            }
        },
        off: function(t, e) {
            if (t !== l) {
                var n = this.handlers;
                return A(Z(t), function(i) {
                    e ? n[i] && n[i].splice(N(n[i], e), 1) : delete n[i]
                }), this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && function ae(t, e) {
                var n = It.createEvent("Event");
                n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
            }(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](e), i++
            }
        },
        destroy: function() {
            this.element && Xt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, S(C, {
        INPUT_START: a,
        INPUT_MOVE: O,
        INPUT_END: h,
        INPUT_CANCEL: p,
        STATE_POSSIBLE: st,
        STATE_BEGAN: m,
        STATE_CHANGED: Y,
        STATE_ENDED: D,
        STATE_RECOGNIZED: P,
        STATE_CANCELLED: V,
        STATE_FAILED: E,
        DIRECTION_NONE: nt,
        DIRECTION_LEFT: q,
        DIRECTION_RIGHT: W,
        DIRECTION_UP: k,
        DIRECTION_DOWN: H,
        DIRECTION_HORIZONTAL: y,
        DIRECTION_VERTICAL: R,
        DIRECTION_ALL: Wt,
        Manager: gt,
        Input: d,
        TouchAction: pt,
        TouchInput: K,
        MouseInput: J,
        PointerEventInput: at,
        TouchMouseInput: lt,
        SingleTouchInput: Rt,
        Recognizer: _,
        AttrRecognizer: g,
        Tap: et,
        Pan: tt,
        Swipe: mt,
        Pinch: ft,
        Rotate: dt,
        Press: vt,
        on: j,
        off: G,
        each: A,
        merge: fe,
        extend: Ft,
        assign: S,
        inherit: f,
        bindFn: ut,
        prefixed: b
    }), (typeof c < "u" ? c : typeof self < "u" ? self : {}).Hammer = C, "function" == typeof define && define.amd ? define(function() {
        return C
    }) : typeof module < "u" && module.exports ? module.exports = C : c.Hammer = C
}(window, document);
//# sourceMappingURL=scripts.cd816875f3dc91fb.js.map
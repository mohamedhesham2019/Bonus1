(self.webpackChunkwebsite_angular = self.webpackChunkwebsite_angular || []).push([
    ["polyfills"], {
        1567: (pe, Oe, w) => {
            "use strict";
            const le = ":";
            class Ke extends Error {
                constructor(t) {
                    super(`No translation found for ${et(t)}.`), this.parsedMessage = t, this.type = "MissingTranslationError"
                }
            }
            const Me = function(e, ...t) {
                    if (Me.translate) {
                        const r = Me.translate(e, t);
                        e = r[0], t = r[1]
                    }
                    let n = tt(e[0], e.raw[0]);
                    for (let r = 1; r < e.length; r++) n += t[r - 1] + tt(e[r], e.raw[r]);
                    return n
                },
                Le = ":";

            function tt(e, t) {
                return t.charAt(0) === Le ? e.substring(function ze(e, t) {
                    for (let n = 1, r = 1; n < e.length; n++, r++)
                        if ("\\" === t[r]) r++;
                        else if (e[n] === le) return n;
                    throw new Error(`Unterminated $localize metadata block in "${t}".`)
                }(e, t) + 1) : e
            }(() => typeof globalThis < "u" && globalThis || typeof global < "u" && global || typeof window < "u" && window || typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self)().$localize = Me, w(4924);
            var ft = w(2689);
            w.n(ft)().polyfill()
        },
        2689: pe => {
            ! function() {
                "use strict";
                pe.exports = {
                    polyfill: function Oe() {
                        var w = window,
                            le = document;
                        if (!("scrollBehavior" in le.documentElement.style) || !0 === w.__forceSmoothScrollPolyfill__) {
                            var ve = w.HTMLElement || w.Element,
                                Re = 468,
                                ge = {
                                    scroll: w.scroll || w.scrollTo,
                                    scrollBy: w.scrollBy,
                                    elementScroll: ve.prototype.scroll || te,
                                    scrollIntoView: ve.prototype.scrollIntoView
                                },
                                he = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now,
                                ae = function Ce(_) {
                                    return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(_)
                                }(w.navigator.userAgent) ? 1 : 0;
                            w.scroll = w.scrollTo = function() {
                                if (void 0 !== arguments[0]) {
                                    if (!0 === me(arguments[0])) return void ge.scroll.call(w, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : w.scrollX || w.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : w.scrollY || w.pageYOffset);
                                    De.call(w, le.body, void 0 !== arguments[0].left ? ~~arguments[0].left : w.scrollX || w.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : w.scrollY || w.pageYOffset)
                                }
                            }, w.scrollBy = function() {
                                if (void 0 !== arguments[0]) {
                                    if (me(arguments[0])) return void ge.scrollBy.call(w, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0);
                                    De.call(w, le.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset))
                                }
                            }, ve.prototype.scroll = ve.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0]) {
                                    if (!0 === me(arguments[0])) {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        return void ge.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                                    var _ = arguments[0].left,
                                        V = arguments[0].top;
                                    De.call(this, this, typeof _ > "u" ? this.scrollLeft : ~~_, typeof V > "u" ? this.scrollTop : ~~V)
                                }
                            }, ve.prototype.scrollBy = function() {
                                if (void 0 !== arguments[0]) {
                                    if (!0 === me(arguments[0])) return void ge.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                                    this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    })
                                }
                            }, ve.prototype.scrollIntoView = function() {
                                if (!0 !== me(arguments[0])) {
                                    var _ = function ke(_) {
                                            for (; _ !== le.body && !1 === Ne(_);) _ = _.parentNode || _.host;
                                            return _
                                        }(this),
                                        V = _.getBoundingClientRect(),
                                        J = this.getBoundingClientRect();
                                    _ !== le.body ? (De.call(this, _, _.scrollLeft + J.left - V.left, _.scrollTop + J.top - V.top), "fixed" !== w.getComputedStyle(_).position && w.scrollBy({
                                        left: V.left,
                                        top: V.top,
                                        behavior: "smooth"
                                    })) : w.scrollBy({
                                        left: J.left,
                                        top: J.top,
                                        behavior: "smooth"
                                    })
                                } else ge.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function te(_, V) {
                            this.scrollLeft = _, this.scrollTop = V
                        }

                        function me(_) {
                            if (null === _ || "object" != typeof _ || void 0 === _.behavior || "auto" === _.behavior || "instant" === _.behavior) return !0;
                            if ("object" == typeof _ && "smooth" === _.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + _.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function xe(_, V) {
                            return "Y" === V ? _.clientHeight + ae < _.scrollHeight : "X" === V ? _.clientWidth + ae < _.scrollWidth : void 0
                        }

                        function H(_, V) {
                            var J = w.getComputedStyle(_, null)["overflow" + V];
                            return "auto" === J || "scroll" === J
                        }

                        function Ne(_) {
                            var V = xe(_, "Y") && H(_, "Y"),
                                J = xe(_, "X") && H(_, "X");
                            return V || J
                        }

                        function Y(_) {
                            var J, de, oe, se = (he() - _.startTime) / Re;
                            J = function Ie(_) {
                                return .5 * (1 - Math.cos(Math.PI * _))
                            }(se = se > 1 ? 1 : se), _.method.call(_.scrollable, de = _.startX + (_.x - _.startX) * J, oe = _.startY + (_.y - _.startY) * J), (de !== _.x || oe !== _.y) && w.requestAnimationFrame(Y.bind(w, _))
                        }

                        function De(_, V, J) {
                            var de, oe, se, Se, Pe = he();
                            _ === le.body ? (de = w, oe = w.scrollX || w.pageXOffset, se = w.scrollY || w.pageYOffset, Se = ge.scroll) : (de = _, oe = _.scrollLeft, se = _.scrollTop, Se = te), Y({
                                scrollable: de,
                                method: Se,
                                startTime: Pe,
                                startX: oe,
                                startY: se,
                                x: V,
                                y: J
                            })
                        }
                    }
                }
            }()
        },
        4924: () => {
            "use strict";
            ! function(o) {
                const e = o.performance;

                function t($) {
                    e && e.mark && e.mark($)
                }

                function n($, v) {
                    e && e.measure && e.measure($, v)
                }
                t("Zone");
                const r = o.__Zone_symbol_prefix || "__zone_symbol__";

                function i($) {
                    return r + $
                }
                const a = !0 === o[i("forceDuplicateZoneCheck")];
                if (o.Zone) {
                    if (a || "function" != typeof o.Zone.__symbol__) throw new Error("Zone already loaded.");
                    return o.Zone
                }
                let d = (() => {
                    class $ {
                        static assertZonePatched() {
                            if (o.Promise !== be.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }
                        static get root() {
                            let s = $.current;
                            for (; s.parent;) s = s.parent;
                            return s
                        }
                        static get current() {
                            return W.zone
                        }
                        static get currentTask() {
                            return ye
                        }
                        static __load_patch(s, c, S = !1) {
                            if (be.hasOwnProperty(s)) {
                                if (!S && a) throw Error("Already loaded patch: " + s)
                            } else if (!o["__Zone_disable_" + s]) {
                                const N = "Zone:" + s;
                                t(N), be[s] = c(o, $, ee), n(N, N)
                            }
                        }
                        get parent() {
                            return this._parent
                        }
                        get name() {
                            return this._name
                        }
                        constructor(s, c) {
                            this._parent = s, this._name = c ? c.name || "unnamed" : "<root>", this._properties = c && c.properties || {}, this._zoneDelegate = new g(this, this._parent && this._parent._zoneDelegate, c)
                        }
                        get(s) {
                            const c = this.getZoneWith(s);
                            if (c) return c._properties[s]
                        }
                        getZoneWith(s) {
                            let c = this;
                            for (; c;) {
                                if (c._properties.hasOwnProperty(s)) return c;
                                c = c._parent
                            }
                            return null
                        }
                        fork(s) {
                            if (!s) throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, s)
                        }
                        wrap(s, c) {
                            if ("function" != typeof s) throw new Error("Expecting function got: " + s);
                            const S = this._zoneDelegate.intercept(this, s, c),
                                N = this;
                            return function() {
                                return N.runGuarded(S, this, arguments, c)
                            }
                        }
                        run(s, c, S, N) {
                            W = {
                                parent: W,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, s, c, S, N)
                            } finally {
                                W = W.parent
                            }
                        }
                        runGuarded(s, c = null, S, N) {
                            W = {
                                parent: W,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, s, c, S, N)
                                } catch (re) {
                                    if (this._zoneDelegate.handleError(this, re)) throw re
                                }
                            } finally {
                                W = W.parent
                            }
                        }
                        runTask(s, c, S) {
                            if (s.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (s.zone || ne).name + "; Execution: " + this.name + ")");
                            if (s.state === U && (s.type === ce || s.type === O)) return;
                            const N = s.state != y;
                            N && s._transitionTo(y, B), s.runCount++;
                            const re = ye;
                            ye = s, W = {
                                parent: W,
                                zone: this
                            };
                            try {
                                s.type == O && s.data && !s.data.isPeriodic && (s.cancelFn = void 0);
                                try {
                                    return this._zoneDelegate.invokeTask(this, s, c, S)
                                } catch (u) {
                                    if (this._zoneDelegate.handleError(this, u)) throw u
                                }
                            } finally {
                                s.state !== U && s.state !== T && (s.type == ce || s.data && s.data.isPeriodic ? N && s._transitionTo(B, y) : (s.runCount = 0, this._updateTaskCount(s, -1), N && s._transitionTo(U, y, U))), W = W.parent, ye = re
                            }
                        }
                        scheduleTask(s) {
                            if (s.zone && s.zone !== this) {
                                let S = this;
                                for (; S;) {
                                    if (S === s.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);
                                    S = S.parent
                                }
                            }
                            s._transitionTo(Q, U);
                            const c = [];
                            s._zoneDelegates = c, s._zone = this;
                            try {
                                s = this._zoneDelegate.scheduleTask(this, s)
                            } catch (S) {
                                throw s._transitionTo(T, Q, U), this._zoneDelegate.handleError(this, S), S
                            }
                            return s._zoneDelegates === c && this._updateTaskCount(s, 1), s.state == Q && s._transitionTo(B, Q), s
                        }
                        scheduleMicroTask(s, c, S, N) {
                            return this.scheduleTask(new m(x, s, c, S, N, void 0))
                        }
                        scheduleMacroTask(s, c, S, N, re) {
                            return this.scheduleTask(new m(O, s, c, S, N, re))
                        }
                        scheduleEventTask(s, c, S, N, re) {
                            return this.scheduleTask(new m(ce, s, c, S, N, re))
                        }
                        cancelTask(s) {
                            if (s.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (s.zone || ne).name + "; Execution: " + this.name + ")");
                            if (s.state === B || s.state === y) {
                                s._transitionTo(z, B, y);
                                try {
                                    this._zoneDelegate.cancelTask(this, s)
                                } catch (c) {
                                    throw s._transitionTo(T, z), this._zoneDelegate.handleError(this, c), c
                                }
                                return this._updateTaskCount(s, -1), s._transitionTo(U, z), s.runCount = 0, s
                            }
                        }
                        _updateTaskCount(s, c) {
                            const S = s._zoneDelegates; - 1 == c && (s._zoneDelegates = null);
                            for (let N = 0; N < S.length; N++) S[N]._updateTaskCount(s.type, c)
                        }
                    }
                    return $.__symbol__ = i, $
                })();
                const p = {
                    name: "",
                    onHasTask: ($, v, s, c) => $.hasTask(s, c),
                    onScheduleTask: ($, v, s, c) => $.scheduleTask(s, c),
                    onInvokeTask: ($, v, s, c, S, N) => $.invokeTask(s, c, S, N),
                    onCancelTask: ($, v, s, c) => $.cancelTask(s, c)
                };
                class g {
                    constructor(v, s, c) {
                        this._taskCounts = {
                            microTask: 0,
                            macroTask: 0,
                            eventTask: 0
                        }, this.zone = v, this._parentDelegate = s, this._forkZS = c && (c && c.onFork ? c : s._forkZS), this._forkDlgt = c && (c.onFork ? s : s._forkDlgt), this._forkCurrZone = c && (c.onFork ? this.zone : s._forkCurrZone), this._interceptZS = c && (c.onIntercept ? c : s._interceptZS), this._interceptDlgt = c && (c.onIntercept ? s : s._interceptDlgt), this._interceptCurrZone = c && (c.onIntercept ? this.zone : s._interceptCurrZone), this._invokeZS = c && (c.onInvoke ? c : s._invokeZS), this._invokeDlgt = c && (c.onInvoke ? s : s._invokeDlgt), this._invokeCurrZone = c && (c.onInvoke ? this.zone : s._invokeCurrZone), this._handleErrorZS = c && (c.onHandleError ? c : s._handleErrorZS), this._handleErrorDlgt = c && (c.onHandleError ? s : s._handleErrorDlgt), this._handleErrorCurrZone = c && (c.onHandleError ? this.zone : s._handleErrorCurrZone), this._scheduleTaskZS = c && (c.onScheduleTask ? c : s._scheduleTaskZS), this._scheduleTaskDlgt = c && (c.onScheduleTask ? s : s._scheduleTaskDlgt), this._scheduleTaskCurrZone = c && (c.onScheduleTask ? this.zone : s._scheduleTaskCurrZone), this._invokeTaskZS = c && (c.onInvokeTask ? c : s._invokeTaskZS), this._invokeTaskDlgt = c && (c.onInvokeTask ? s : s._invokeTaskDlgt), this._invokeTaskCurrZone = c && (c.onInvokeTask ? this.zone : s._invokeTaskCurrZone), this._cancelTaskZS = c && (c.onCancelTask ? c : s._cancelTaskZS), this._cancelTaskDlgt = c && (c.onCancelTask ? s : s._cancelTaskDlgt), this._cancelTaskCurrZone = c && (c.onCancelTask ? this.zone : s._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                        const S = c && c.onHasTask;
                        (S || s && s._hasTaskZS) && (this._hasTaskZS = S ? c : p, this._hasTaskDlgt = s, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = v, c.onScheduleTask || (this._scheduleTaskZS = p, this._scheduleTaskDlgt = s, this._scheduleTaskCurrZone = this.zone), c.onInvokeTask || (this._invokeTaskZS = p, this._invokeTaskDlgt = s, this._invokeTaskCurrZone = this.zone), c.onCancelTask || (this._cancelTaskZS = p, this._cancelTaskDlgt = s, this._cancelTaskCurrZone = this.zone))
                    }
                    fork(v, s) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, v, s) : new d(v, s)
                    }
                    intercept(v, s, c) {
                        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, v, s, c) : s
                    }
                    invoke(v, s, c, S, N) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, v, s, c, S, N) : s.apply(c, S)
                    }
                    handleError(v, s) {
                        return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, v, s)
                    }
                    scheduleTask(v, s) {
                        let c = s;
                        if (this._scheduleTaskZS) this._hasTaskZS && c._zoneDelegates.push(this._hasTaskDlgtOwner), c = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, v, s), c || (c = s);
                        else if (s.scheduleFn) s.scheduleFn(s);
                        else {
                            if (s.type != x) throw new Error("Task is missing scheduleFn.");
                            P(s)
                        }
                        return c
                    }
                    invokeTask(v, s, c, S) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, v, s, c, S) : s.callback.apply(c, S)
                    }
                    cancelTask(v, s) {
                        let c;
                        if (this._cancelTaskZS) c = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, v, s);
                        else {
                            if (!s.cancelFn) throw Error("Task is not cancelable");
                            c = s.cancelFn(s)
                        }
                        return c
                    }
                    hasTask(v, s) {
                        try {
                            this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, v, s)
                        } catch (c) {
                            this.handleError(v, c)
                        }
                    }
                    _updateTaskCount(v, s) {
                        const c = this._taskCounts,
                            S = c[v],
                            N = c[v] = S + s;
                        if (N < 0) throw new Error("More tasks executed then were scheduled.");
                        0 != S && 0 != N || this.hasTask(this.zone, {
                            microTask: c.microTask > 0,
                            macroTask: c.macroTask > 0,
                            eventTask: c.eventTask > 0,
                            change: v
                        })
                    }
                }
                class m {
                    constructor(v, s, c, S, N, re) {
                        if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = v, this.source = s, this.data = S, this.scheduleFn = N, this.cancelFn = re, !c) throw new Error("callback is not defined");
                        this.callback = c;
                        const u = this;
                        this.invoke = v === ce && S && S.useG ? m.invokeTask : function() {
                            return m.invokeTask.call(o, u, this, arguments)
                        }
                    }
                    static invokeTask(v, s, c) {
                        v || (v = this), fe++;
                        try {
                            return v.runCount++, v.zone.runTask(v, s, c)
                        } finally {
                            1 == fe && E(), fe--
                        }
                    }
                    get zone() {
                        return this._zone
                    }
                    get state() {
                        return this._state
                    }
                    cancelScheduleRequest() {
                        this._transitionTo(U, Q)
                    }
                    _transitionTo(v, s, c) {
                        if (this._state !== s && this._state !== c) throw new Error(`${this.type} '${this.source}': can not transition to '${v}', expecting state '${s}'${c?" or '"+c+"'":""}, was '${this._state}'.`);
                        this._state = v, v == U && (this._zoneDelegates = null)
                    }
                    toString() {
                        return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                    }
                    toJSON() {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        }
                    }
                }
                const D = i("setTimeout"),
                    C = i("Promise"),
                    Z = i("then");
                let K, G = [],
                    I = !1;

                function M($) {
                    if (K || o[C] && (K = o[C].resolve(0)), K) {
                        let v = K[Z];
                        v || (v = K.then), v.call(K, $)
                    } else o[D]($, 0)
                }

                function P($) {
                    0 === fe && 0 === G.length && M(E), $ && G.push($)
                }

                function E() {
                    if (!I) {
                        for (I = !0; G.length;) {
                            const $ = G;
                            G = [];
                            for (let v = 0; v < $.length; v++) {
                                const s = $[v];
                                try {
                                    s.zone.runTask(s, null, null)
                                } catch (c) {
                                    ee.onUnhandledError(c)
                                }
                            }
                        }
                        ee.microtaskDrainDone(), I = !1
                    }
                }
                const ne = {
                        name: "NO ZONE"
                    },
                    U = "notScheduled",
                    Q = "scheduling",
                    B = "scheduled",
                    y = "running",
                    z = "canceling",
                    T = "unknown",
                    x = "microTask",
                    O = "macroTask",
                    ce = "eventTask",
                    be = {},
                    ee = {
                        symbol: i,
                        currentZoneFrame: () => W,
                        onUnhandledError: q,
                        microtaskDrainDone: q,
                        scheduleMicroTask: P,
                        showUncaughtError: () => !d[i("ignoreConsoleErrorUncaughtError")],
                        patchEventTarget: () => [],
                        patchOnProperties: q,
                        patchMethod: () => q,
                        bindArguments: () => [],
                        patchThen: () => q,
                        patchMacroTask: () => q,
                        patchEventPrototype: () => q,
                        isIEOrEdge: () => !1,
                        getGlobalObjects: () => {},
                        ObjectDefineProperty: () => q,
                        ObjectGetOwnPropertyDescriptor: () => {},
                        ObjectCreate: () => {},
                        ArraySlice: () => [],
                        patchClass: () => q,
                        wrapWithCurrentZone: () => q,
                        filterProperties: () => [],
                        attachOriginToPatched: () => q,
                        _redefineProperty: () => q,
                        patchCallbacks: () => q,
                        nativeScheduleMicroTask: M
                    };
                let W = {
                        parent: null,
                        zone: new d(null, null)
                    },
                    ye = null,
                    fe = 0;

                function q() {}
                n("Zone", "Zone"), o.Zone = d
            }(typeof window < "u" && window || typeof self < "u" && self || global);
            const pe = Object.getOwnPropertyDescriptor,
                Oe = Object.defineProperty,
                w = Object.getPrototypeOf,
                le = Object.create,
                ve = Array.prototype.slice,
                Re = "addEventListener",
                ge = "removeEventListener",
                he = Zone.__symbol__(Re),
                Ce = Zone.__symbol__(ge),
                ae = "true",
                te = "false",
                Ie = Zone.__symbol__("");

            function me(o, e) {
                return Zone.current.wrap(o, e)
            }

            function xe(o, e, t, n, r) {
                return Zone.current.scheduleMacroTask(o, e, t, n, r)
            }
            const H = Zone.__symbol__,
                Ne = typeof window < "u",
                ke = Ne ? window : void 0,
                Y = Ne && ke || "object" == typeof self && self || global,
                De = "removeAttribute";

            function _(o, e) {
                for (let t = o.length - 1; t >= 0; t--) "function" == typeof o[t] && (o[t] = me(o[t], e + "_" + t));
                return o
            }

            function J(o) {
                return !o || !1 !== o.writable && !("function" == typeof o.get && typeof o.set > "u")
            }
            const de = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
                oe = !("nw" in Y) && typeof Y.process < "u" && "[object process]" === {}.toString.call(Y.process),
                se = !oe && !de && !(!Ne || !ke.HTMLElement),
                Se = typeof Y.process < "u" && "[object process]" === {}.toString.call(Y.process) && !de && !(!Ne || !ke.HTMLElement),
                Pe = {},
                _e = function(o) {
                    if (!(o = o || Y.event)) return;
                    let e = Pe[o.type];
                    e || (e = Pe[o.type] = H("ON_PROPERTY" + o.type));
                    const t = this || o.target || Y,
                        n = t[e];
                    let r;
                    return se && t === ke && "error" === o.type ? (r = n && n.call(this, o.message, o.filename, o.lineno, o.colno, o.error), !0 === r && o.preventDefault()) : (r = n && n.apply(this, arguments), null != r && !r && o.preventDefault()), r
                };

            function Ve(o, e, t) {
                let n = pe(o, e);
                if (!n && t && pe(t, e) && (n = {
                        enumerable: !0,
                        configurable: !0
                    }), !n || !n.configurable) return;
                const r = H("on" + e + "patched");
                if (o.hasOwnProperty(r) && o[r]) return;
                delete n.writable, delete n.value;
                const i = n.get,
                    a = n.set,
                    d = e.slice(2);
                let p = Pe[d];
                p || (p = Pe[d] = H("ON_PROPERTY" + d)), n.set = function(g) {
                    let m = this;
                    !m && o === Y && (m = Y), m && ("function" == typeof m[p] && m.removeEventListener(d, _e), a && a.call(m, null), m[p] = g, "function" == typeof g && m.addEventListener(d, _e, !1))
                }, n.get = function() {
                    let g = this;
                    if (!g && o === Y && (g = Y), !g) return null;
                    const m = g[p];
                    if (m) return m;
                    if (i) {
                        let D = i.call(this);
                        if (D) return n.set.call(this, D), "function" == typeof g[De] && g.removeAttribute(e), D
                    }
                    return null
                }, Oe(o, e, n), o[r] = !0
            }

            function Ye(o, e, t) {
                if (e)
                    for (let n = 0; n < e.length; n++) Ve(o, "on" + e[n], t);
                else {
                    const n = [];
                    for (const r in o) "on" == r.slice(0, 2) && n.push(r);
                    for (let r = 0; r < n.length; r++) Ve(o, n[r], t)
                }
            }
            const ie = H("originalInstance");

            function He(o) {
                const e = Y[o];
                if (!e) return;
                Y[H(o)] = e, Y[o] = function() {
                    const r = _(arguments, o);
                    switch (r.length) {
                        case 0:
                            this[ie] = new e;
                            break;
                        case 1:
                            this[ie] = new e(r[0]);
                            break;
                        case 2:
                            this[ie] = new e(r[0], r[1]);
                            break;
                        case 3:
                            this[ie] = new e(r[0], r[1], r[2]);
                            break;
                        case 4:
                            this[ie] = new e(r[0], r[1], r[2], r[3]);
                            break;
                        default:
                            throw new Error("Arg list too long.")
                    }
                }, Ee(Y[o], e);
                const t = new e(function() {});
                let n;
                for (n in t) "XMLHttpRequest" === o && "responseBlob" === n || function(r) {
                    "function" == typeof t[r] ? Y[o].prototype[r] = function() {
                        return this[ie][r].apply(this[ie], arguments)
                    } : Oe(Y[o].prototype, r, {
                        set: function(i) {
                            "function" == typeof i ? (this[ie][r] = me(i, o + "." + r), Ee(this[ie][r], i)) : this[ie][r] = i
                        },
                        get: function() {
                            return this[ie][r]
                        }
                    })
                }(n);
                for (n in e) "prototype" !== n && e.hasOwnProperty(n) && (Y[o][n] = e[n])
            }

            function Te(o, e, t) {
                let n = o;
                for (; n && !n.hasOwnProperty(e);) n = w(n);
                !n && o[e] && (n = o);
                const r = H(e);
                let i = null;
                if (n && (!(i = n[r]) || !n.hasOwnProperty(r)) && (i = n[r] = n[e], J(n && pe(n, e)))) {
                    const d = t(i, r, e);
                    n[e] = function() {
                        return d(this, arguments)
                    }, Ee(n[e], i)
                }
                return i
            }

            function We(o, e, t) {
                let n = null;

                function r(i) {
                    const a = i.data;
                    return a.args[a.cbIdx] = function() {
                        i.invoke.apply(this, arguments)
                    }, n.apply(a.target, a.args), i
                }
                n = Te(o, e, i => function(a, d) {
                    const p = t(a, d);
                    return p.cbIdx >= 0 && "function" == typeof d[p.cbIdx] ? xe(p.name, d[p.cbIdx], p, r) : i.apply(a, d)
                })
            }

            function Ee(o, e) {
                o[H("OriginalDelegate")] = e
            }
            let Ue = !1,
                Ge = !1;

            function ot() {
                if (Ue) return Ge;
                Ue = !0;
                try {
                    const o = ke.navigator.userAgent;
                    (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/") || -1 !== o.indexOf("Edge/")) && (Ge = !0)
                } catch {}
                return Ge
            }
            Zone.__load_patch("ZoneAwarePromise", (o, e, t) => {
                const n = Object.getOwnPropertyDescriptor,
                    r = Object.defineProperty,
                    a = t.symbol,
                    d = [],
                    p = !0 === o[a("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                    g = a("Promise"),
                    m = a("then"),
                    D = "__creationTrace__";
                t.onUnhandledError = u => {
                    if (t.showUncaughtError()) {
                        const f = u && u.rejection;
                        f ? console.error("Unhandled Promise rejection:", f instanceof Error ? f.message : f, "; Zone:", u.zone.name, "; Task:", u.task && u.task.source, "; Value:", f, f instanceof Error ? f.stack : void 0) : console.error(u)
                    }
                }, t.microtaskDrainDone = () => {
                    for (; d.length;) {
                        const u = d.shift();
                        try {
                            u.zone.runGuarded(() => {
                                throw u.throwOriginal ? u.rejection : u
                            })
                        } catch (f) {
                            Z(f)
                        }
                    }
                };
                const C = a("unhandledPromiseRejectionHandler");

                function Z(u) {
                    t.onUnhandledError(u);
                    try {
                        const f = e[C];
                        "function" == typeof f && f.call(this, u)
                    } catch {}
                }

                function G(u) {
                    return u && u.then
                }

                function I(u) {
                    return u
                }

                function K(u) {
                    return s.reject(u)
                }
                const M = a("state"),
                    P = a("value"),
                    E = a("finally"),
                    ne = a("parentPromiseValue"),
                    U = a("parentPromiseState"),
                    Q = "Promise.then",
                    B = null,
                    y = !0,
                    z = !1,
                    T = 0;

                function x(u, f) {
                    return l => {
                        try {
                            ee(u, f, l)
                        } catch (h) {
                            ee(u, !1, h)
                        }
                    }
                }
                const O = function() {
                        let u = !1;
                        return function(l) {
                            return function() {
                                u || (u = !0, l.apply(null, arguments))
                            }
                        }
                    },
                    ce = "Promise resolved with itself",
                    be = a("currentTaskTrace");

                function ee(u, f, l) {
                    const h = O();
                    if (u === l) throw new TypeError(ce);
                    if (u[M] === B) {
                        let b = null;
                        try {
                            ("object" == typeof l || "function" == typeof l) && (b = l && l.then)
                        } catch (R) {
                            return h(() => {
                                ee(u, !1, R)
                            })(), u
                        }
                        if (f !== z && l instanceof s && l.hasOwnProperty(M) && l.hasOwnProperty(P) && l[M] !== B) ye(l), ee(u, l[M], l[P]);
                        else if (f !== z && "function" == typeof b) try {
                            b.call(l, h(x(u, f)), h(x(u, !1)))
                        } catch (R) {
                            h(() => {
                                ee(u, !1, R)
                            })()
                        } else {
                            u[M] = f;
                            const R = u[P];
                            if (u[P] = l, u[E] === E && f === y && (u[M] = u[U], u[P] = u[ne]), f === z && l instanceof Error) {
                                const k = e.currentTask && e.currentTask.data && e.currentTask.data[D];
                                k && r(l, be, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: k
                                })
                            }
                            for (let k = 0; k < R.length;) fe(u, R[k++], R[k++], R[k++], R[k++]);
                            if (0 == R.length && f == z) {
                                u[M] = T;
                                let k = l;
                                try {
                                    throw new Error("Uncaught (in promise): " + function i(u) {
                                        return u && u.toString === Object.prototype.toString ? (u.constructor && u.constructor.name || "") + ": " + JSON.stringify(u) : u ? u.toString() : Object.prototype.toString.call(u)
                                    }(l) + (l && l.stack ? "\n" + l.stack : ""))
                                } catch (L) {
                                    k = L
                                }
                                p && (k.throwOriginal = !0), k.rejection = l, k.promise = u, k.zone = e.current, k.task = e.currentTask, d.push(k), t.scheduleMicroTask()
                            }
                        }
                    }
                    return u
                }
                const W = a("rejectionHandledHandler");

                function ye(u) {
                    if (u[M] === T) {
                        try {
                            const f = e[W];
                            f && "function" == typeof f && f.call(this, {
                                rejection: u[P],
                                promise: u
                            })
                        } catch {}
                        u[M] = z;
                        for (let f = 0; f < d.length; f++) u === d[f].promise && d.splice(f, 1)
                    }
                }

                function fe(u, f, l, h, b) {
                    ye(u);
                    const R = u[M],
                        k = R ? "function" == typeof h ? h : I : "function" == typeof b ? b : K;
                    f.scheduleMicroTask(Q, () => {
                        try {
                            const L = u[P],
                                A = !!l && E === l[E];
                            A && (l[ne] = L, l[U] = R);
                            const j = f.run(k, void 0, A && k !== K && k !== I ? [] : [L]);
                            ee(l, !0, j)
                        } catch (L) {
                            ee(l, !1, L)
                        }
                    }, l)
                }
                const $ = function() {},
                    v = o.AggregateError;
                class s {
                    static toString() {
                        return "function ZoneAwarePromise() { [native code] }"
                    }
                    static resolve(f) {
                        return ee(new this(null), y, f)
                    }
                    static reject(f) {
                        return ee(new this(null), z, f)
                    }
                    static any(f) {
                        if (!f || "function" != typeof f[Symbol.iterator]) return Promise.reject(new v([], "All promises were rejected"));
                        const l = [];
                        let h = 0;
                        try {
                            for (let k of f) h++, l.push(s.resolve(k))
                        } catch {
                            return Promise.reject(new v([], "All promises were rejected"))
                        }
                        if (0 === h) return Promise.reject(new v([], "All promises were rejected"));
                        let b = !1;
                        const R = [];
                        return new s((k, L) => {
                            for (let A = 0; A < l.length; A++) l[A].then(j => {
                                b || (b = !0, k(j))
                            }, j => {
                                R.push(j), h--, 0 === h && (b = !0, L(new v(R, "All promises were rejected")))
                            })
                        })
                    }
                    static race(f) {
                        let l, h, b = new this((L, A) => {
                            l = L, h = A
                        });

                        function R(L) {
                            l(L)
                        }

                        function k(L) {
                            h(L)
                        }
                        for (let L of f) G(L) || (L = this.resolve(L)), L.then(R, k);
                        return b
                    }
                    static all(f) {
                        return s.allWithCallback(f)
                    }
                    static allSettled(f) {
                        return (this && this.prototype instanceof s ? this : s).allWithCallback(f, {
                            thenCallback: h => ({
                                status: "fulfilled",
                                value: h
                            }),
                            errorCallback: h => ({
                                status: "rejected",
                                reason: h
                            })
                        })
                    }
                    static allWithCallback(f, l) {
                        let h, b, R = new this((j, X) => {
                                h = j, b = X
                            }),
                            k = 2,
                            L = 0;
                        const A = [];
                        for (let j of f) {
                            G(j) || (j = this.resolve(j));
                            const X = L;
                            try {
                                j.then(F => {
                                    A[X] = l ? l.thenCallback(F) : F, k--, 0 === k && h(A)
                                }, F => {
                                    l ? (A[X] = l.errorCallback(F), k--, 0 === k && h(A)) : b(F)
                                })
                            } catch (F) {
                                b(F)
                            }
                            k++, L++
                        }
                        return k -= 2, 0 === k && h(A), R
                    }
                    constructor(f) {
                        const l = this;
                        if (!(l instanceof s)) throw new Error("Must be an instanceof Promise.");
                        l[M] = B, l[P] = [];
                        try {
                            const h = O();
                            f && f(h(x(l, y)), h(x(l, z)))
                        } catch (h) {
                            ee(l, !1, h)
                        }
                    }
                    get[Symbol.toStringTag]() {
                        return "Promise"
                    }
                    get[Symbol.species]() {
                        return s
                    }
                    then(f, l) {
                        let h = this.constructor ? .[Symbol.species];
                        (!h || "function" != typeof h) && (h = this.constructor || s);
                        const b = new h($),
                            R = e.current;
                        return this[M] == B ? this[P].push(R, b, f, l) : fe(this, R, b, f, l), b
                    } catch (f) {
                        return this.then(null, f)
                    } finally(f) {
                        let l = this.constructor ? .[Symbol.species];
                        (!l || "function" != typeof l) && (l = s);
                        const h = new l($);
                        h[E] = E;
                        const b = e.current;
                        return this[M] == B ? this[P].push(b, h, f, f) : fe(this, b, h, f, f), h
                    }
                }
                s.resolve = s.resolve, s.reject = s.reject, s.race = s.race, s.all = s.all;
                const c = o[g] = o.Promise;
                o.Promise = s;
                const S = a("thenPatched");

                function N(u) {
                    const f = u.prototype,
                        l = n(f, "then");
                    if (l && (!1 === l.writable || !l.configurable)) return;
                    const h = f.then;
                    f[m] = h, u.prototype.then = function(b, R) {
                        return new s((L, A) => {
                            h.call(this, L, A)
                        }).then(b, R)
                    }, u[S] = !0
                }
                return t.patchThen = N, c && (N(c), Te(o, "fetch", u => function re(u) {
                    return function(f, l) {
                        let h = u.apply(f, l);
                        if (h instanceof s) return h;
                        let b = h.constructor;
                        return b[S] || N(b), h
                    }
                }(u))), Promise[e.__symbol__("uncaughtPromiseErrors")] = d, s
            }), Zone.__load_patch("toString", o => {
                const e = Function.prototype.toString,
                    t = H("OriginalDelegate"),
                    n = H("Promise"),
                    r = H("Error"),
                    i = function() {
                        if ("function" == typeof this) {
                            const g = this[t];
                            if (g) return "function" == typeof g ? e.call(g) : Object.prototype.toString.call(g);
                            if (this === Promise) {
                                const m = o[n];
                                if (m) return e.call(m)
                            }
                            if (this === Error) {
                                const m = o[r];
                                if (m) return e.call(m)
                            }
                        }
                        return e.call(this)
                    };
                i[t] = e, Function.prototype.toString = i;
                const a = Object.prototype.toString;
                Object.prototype.toString = function() {
                    return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : a.call(this)
                }
            });
            let Ze = !1;
            if (typeof window < "u") try {
                const o = Object.defineProperty({}, "passive", {
                    get: function() {
                        Ze = !0
                    }
                });
                window.addEventListener("test", o, o), window.removeEventListener("test", o, o)
            } catch {
                Ze = !1
            }
            const qe = {
                    useG: !0
                },
                ue = {},
                ze = {},
                Ke = new RegExp("^" + Ie + "(\\w+)(true|false)$"),
                st = H("propagationStopped");

            function Je(o, e) {
                const t = (e ? e(o) : o) + te,
                    n = (e ? e(o) : o) + ae,
                    r = Ie + t,
                    i = Ie + n;
                ue[o] = {}, ue[o][te] = r, ue[o][ae] = i
            }

            function it(o, e, t, n) {
                const r = n && n.add || Re,
                    i = n && n.rm || ge,
                    a = n && n.listeners || "eventListeners",
                    d = n && n.rmAll || "removeAllListeners",
                    p = H(r),
                    g = "." + r + ":",
                    m = "prependListener",
                    D = "." + m + ":",
                    C = function(P, E, ne) {
                        if (P.isRemoved) return;
                        const U = P.callback;
                        let Q;
                        "object" == typeof U && U.handleEvent && (P.callback = y => U.handleEvent(y), P.originalDelegate = U);
                        try {
                            P.invoke(P, E, [ne])
                        } catch (y) {
                            Q = y
                        }
                        const B = P.options;
                        return B && "object" == typeof B && B.once && E[i].call(E, ne.type, P.originalDelegate ? P.originalDelegate : P.callback, B), Q
                    };

                function Z(P, E, ne) {
                    if (!(E = E || o.event)) return;
                    const U = P || E.target || o,
                        Q = U[ue[E.type][ne ? ae : te]];
                    if (Q) {
                        const B = [];
                        if (1 === Q.length) {
                            const y = C(Q[0], U, E);
                            y && B.push(y)
                        } else {
                            const y = Q.slice();
                            for (let z = 0; z < y.length && (!E || !0 !== E[st]); z++) {
                                const T = C(y[z], U, E);
                                T && B.push(T)
                            }
                        }
                        if (1 === B.length) throw B[0];
                        for (let y = 0; y < B.length; y++) {
                            const z = B[y];
                            e.nativeScheduleMicroTask(() => {
                                throw z
                            })
                        }
                    }
                }
                const G = function(P) {
                        return Z(this, P, !1)
                    },
                    I = function(P) {
                        return Z(this, P, !0)
                    };

                function K(P, E) {
                    if (!P) return !1;
                    let ne = !0;
                    E && void 0 !== E.useG && (ne = E.useG);
                    const U = E && E.vh;
                    let Q = !0;
                    E && void 0 !== E.chkDup && (Q = E.chkDup);
                    let B = !1;
                    E && void 0 !== E.rt && (B = E.rt);
                    let y = P;
                    for (; y && !y.hasOwnProperty(r);) y = w(y);
                    if (!y && P[r] && (y = P), !y || y[p]) return !1;
                    const z = E && E.eventNameToString,
                        T = {},
                        x = y[p] = y[r],
                        O = y[H(i)] = y[i],
                        ce = y[H(a)] = y[a],
                        be = y[H(d)] = y[d];
                    let ee;
                    E && E.prepend && (ee = y[H(E.prepend)] = y[E.prepend]);
                    const s = ne ? function(l) {
                            if (!T.isExisting) return x.call(T.target, T.eventName, T.capture ? I : G, T.options)
                        } : function(l) {
                            return x.call(T.target, T.eventName, l.invoke, T.options)
                        },
                        c = ne ? function(l) {
                            if (!l.isRemoved) {
                                const h = ue[l.eventName];
                                let b;
                                h && (b = h[l.capture ? ae : te]);
                                const R = b && l.target[b];
                                if (R)
                                    for (let k = 0; k < R.length; k++)
                                        if (R[k] === l) {
                                            R.splice(k, 1), l.isRemoved = !0, 0 === R.length && (l.allRemoved = !0, l.target[b] = null);
                                            break
                                        }
                            }
                            if (l.allRemoved) return O.call(l.target, l.eventName, l.capture ? I : G, l.options)
                        } : function(l) {
                            return O.call(l.target, l.eventName, l.invoke, l.options)
                        },
                        N = E && E.diff ? E.diff : function(l, h) {
                            const b = typeof h;
                            return "function" === b && l.callback === h || "object" === b && l.originalDelegate === h
                        },
                        re = Zone[H("UNPATCHED_EVENTS")],
                        u = o[H("PASSIVE_EVENTS")],
                        f = function(l, h, b, R, k = !1, L = !1) {
                            return function() {
                                const A = this || o;
                                let j = arguments[0];
                                E && E.transferEventName && (j = E.transferEventName(j));
                                let X = arguments[1];
                                if (!X) return l.apply(this, arguments);
                                if (oe && "uncaughtException" === j) return l.apply(this, arguments);
                                let F = !1;
                                if ("function" != typeof X) {
                                    if (!X.handleEvent) return l.apply(this, arguments);
                                    F = !0
                                }
                                if (U && !U(l, X, A, arguments)) return;
                                const Ae = Ze && !!u && -1 !== u.indexOf(j),
                                    we = function W(l, h) {
                                        return !Ze && "object" == typeof l && l ? !!l.capture : Ze && h ? "boolean" == typeof l ? {
                                            capture: l,
                                            passive: !0
                                        } : l ? "object" == typeof l && !1 !== l.passive ? { ...l,
                                            passive: !0
                                        } : l : {
                                            passive: !0
                                        } : l
                                    }(arguments[2], Ae);
                                if (re)
                                    for (let $e = 0; $e < re.length; $e++)
                                        if (j === re[$e]) return Ae ? l.call(A, j, X, we) : l.apply(this, arguments);
                                const ht = !!we && ("boolean" == typeof we || we.capture),
                                    pt = !(!we || "object" != typeof we) && we.once,
                                    yt = Zone.current;
                                let dt = ue[j];
                                dt || (Je(j, z), dt = ue[j]);
                                const mt = dt[ht ? ae : te];
                                let nt, Be = A[mt],
                                    _t = !1;
                                if (Be) {
                                    if (_t = !0, Q)
                                        for (let $e = 0; $e < Be.length; $e++)
                                            if (N(Be[$e], X)) return
                                } else Be = A[mt] = [];
                                const Tt = A.constructor.name,
                                    Et = ze[Tt];
                                Et && (nt = Et[j]), nt || (nt = Tt + h + (z ? z(j) : j)), T.options = we, pt && (T.options.once = !1), T.target = A, T.capture = ht, T.eventName = j, T.isExisting = _t;
                                const Fe = ne ? qe : void 0;
                                Fe && (Fe.taskData = T);
                                const je = yt.scheduleEventTask(nt, X, Fe, b, R);
                                return T.target = null, Fe && (Fe.taskData = null), pt && (we.once = !0), !Ze && "boolean" == typeof je.options || (je.options = we), je.target = A, je.capture = ht, je.eventName = j, F && (je.originalDelegate = X), L ? Be.unshift(je) : Be.push(je), k ? A : void 0
                            }
                        };
                    return y[r] = f(x, g, s, c, B), ee && (y[m] = f(ee, D, function(l) {
                        return ee.call(T.target, T.eventName, l.invoke, T.options)
                    }, c, B, !0)), y[i] = function() {
                        const l = this || o;
                        let h = arguments[0];
                        E && E.transferEventName && (h = E.transferEventName(h));
                        const b = arguments[2],
                            R = !!b && ("boolean" == typeof b || b.capture),
                            k = arguments[1];
                        if (!k) return O.apply(this, arguments);
                        if (U && !U(O, k, l, arguments)) return;
                        const L = ue[h];
                        let A;
                        L && (A = L[R ? ae : te]);
                        const j = A && l[A];
                        if (j)
                            for (let X = 0; X < j.length; X++) {
                                const F = j[X];
                                if (N(F, k)) return j.splice(X, 1), F.isRemoved = !0, 0 === j.length && (F.allRemoved = !0, l[A] = null, "string" == typeof h) && (l[Ie + "ON_PROPERTY" + h] = null), F.zone.cancelTask(F), B ? l : void 0
                            }
                        return O.apply(this, arguments)
                    }, y[a] = function() {
                        const l = this || o;
                        let h = arguments[0];
                        E && E.transferEventName && (h = E.transferEventName(h));
                        const b = [],
                            R = ct(l, z ? z(h) : h);
                        for (let k = 0; k < R.length; k++) {
                            const L = R[k];
                            b.push(L.originalDelegate ? L.originalDelegate : L.callback)
                        }
                        return b
                    }, y[d] = function() {
                        const l = this || o;
                        let h = arguments[0];
                        if (h) {
                            E && E.transferEventName && (h = E.transferEventName(h));
                            const b = ue[h];
                            if (b) {
                                const L = l[b[te]],
                                    A = l[b[ae]];
                                if (L) {
                                    const j = L.slice();
                                    for (let X = 0; X < j.length; X++) {
                                        const F = j[X];
                                        this[i].call(this, h, F.originalDelegate ? F.originalDelegate : F.callback, F.options)
                                    }
                                }
                                if (A) {
                                    const j = A.slice();
                                    for (let X = 0; X < j.length; X++) {
                                        const F = j[X];
                                        this[i].call(this, h, F.originalDelegate ? F.originalDelegate : F.callback, F.options)
                                    }
                                }
                            }
                        } else {
                            const b = Object.keys(l);
                            for (let R = 0; R < b.length; R++) {
                                const L = Ke.exec(b[R]);
                                let A = L && L[1];
                                A && "removeListener" !== A && this[d].call(this, A)
                            }
                            this[d].call(this, "removeListener")
                        }
                        if (B) return this
                    }, Ee(y[r], x), Ee(y[i], O), be && Ee(y[d], be), ce && Ee(y[a], ce), !0
                }
                let M = [];
                for (let P = 0; P < t.length; P++) M[P] = K(t[P], n);
                return M
            }

            function ct(o, e) {
                if (!e) {
                    const i = [];
                    for (let a in o) {
                        const d = Ke.exec(a);
                        let p = d && d[1];
                        if (p && (!e || p === e)) {
                            const g = o[a];
                            if (g)
                                for (let m = 0; m < g.length; m++) i.push(g[m])
                        }
                    }
                    return i
                }
                let t = ue[e];
                t || (Je(e), t = ue[e]);
                const n = o[t[te]],
                    r = o[t[ae]];
                return n ? r ? n.concat(r) : n.slice() : r ? r.slice() : []
            }

            function Qe(o, e) {
                const t = o.Event;
                t && t.prototype && e.patchMethod(t.prototype, "stopImmediatePropagation", n => function(r, i) {
                    r[st] = !0, n && n.apply(r, i)
                })
            }

            function et(o, e, t, n, r) {
                const i = Zone.__symbol__(n);
                if (e[i]) return;
                const a = e[i] = e[n];
                e[n] = function(d, p, g) {
                    return p && p.prototype && r.forEach(function(m) {
                        const D = `${t}.${n}::` + m,
                            C = p.prototype;
                        try {
                            if (C.hasOwnProperty(m)) {
                                const Z = o.ObjectGetOwnPropertyDescriptor(C, m);
                                Z && Z.value ? (Z.value = o.wrapWithCurrentZone(Z.value, D), o._redefineProperty(p.prototype, m, Z)) : C[m] && (C[m] = o.wrapWithCurrentZone(C[m], D))
                            } else C[m] && (C[m] = o.wrapWithCurrentZone(C[m], D))
                        } catch {}
                    }), a.call(e, d, p, g)
                }, o.attachOriginToPatched(e[n], a)
            }

            function lt(o, e, t) {
                if (!t || 0 === t.length) return e;
                const n = t.filter(i => i.target === o);
                if (!n || 0 === n.length) return e;
                const r = n[0].ignoreProperties;
                return e.filter(i => -1 === r.indexOf(i))
            }

            function at(o, e, t, n) {
                o && Ye(o, lt(o, e, t), n)
            }

            function Xe(o) {
                return Object.getOwnPropertyNames(o).filter(e => e.startsWith("on") && e.length > 2).map(e => e.substring(2))
            }
            Zone.__load_patch("util", (o, e, t) => {
                const n = Xe(o);
                t.patchOnProperties = Ye, t.patchMethod = Te, t.bindArguments = _, t.patchMacroTask = We;
                const r = e.__symbol__("BLACK_LISTED_EVENTS"),
                    i = e.__symbol__("UNPATCHED_EVENTS");
                o[i] && (o[r] = o[i]), o[r] && (e[r] = e[i] = o[r]), t.patchEventPrototype = Qe, t.patchEventTarget = it, t.isIEOrEdge = ot, t.ObjectDefineProperty = Oe, t.ObjectGetOwnPropertyDescriptor = pe, t.ObjectCreate = le, t.ArraySlice = ve, t.patchClass = He, t.wrapWithCurrentZone = me, t.filterProperties = lt, t.attachOriginToPatched = Ee, t._redefineProperty = Object.defineProperty, t.patchCallbacks = et, t.getGlobalObjects = () => ({
                    globalSources: ze,
                    zoneSymbolEventNames: ue,
                    eventNames: n,
                    isBrowser: se,
                    isMix: Se,
                    isNode: oe,
                    TRUE_STR: ae,
                    FALSE_STR: te,
                    ZONE_SYMBOL_PREFIX: Ie,
                    ADD_EVENT_LISTENER_STR: Re,
                    REMOVE_EVENT_LISTENER_STR: ge
                })
            });
            const Me = H("zoneTask");

            function Le(o, e, t, n) {
                let r = null,
                    i = null;
                t += n;
                const a = {};

                function d(g) {
                    const m = g.data;
                    return m.args[0] = function() {
                        return g.invoke.apply(this, arguments)
                    }, m.handleId = r.apply(o, m.args), g
                }

                function p(g) {
                    return i.call(o, g.data.handleId)
                }
                r = Te(o, e += n, g => function(m, D) {
                    if ("function" == typeof D[0]) {
                        const C = {
                                isPeriodic: "Interval" === n,
                                delay: "Timeout" === n || "Interval" === n ? D[1] || 0 : void 0,
                                args: D
                            },
                            Z = D[0];
                        D[0] = function() {
                            try {
                                return Z.apply(this, arguments)
                            } finally {
                                C.isPeriodic || ("number" == typeof C.handleId ? delete a[C.handleId] : C.handleId && (C.handleId[Me] = null))
                            }
                        };
                        const G = xe(e, D[0], C, d, p);
                        if (!G) return G;
                        const I = G.data.handleId;
                        return "number" == typeof I ? a[I] = G : I && (I[Me] = G), I && I.ref && I.unref && "function" == typeof I.ref && "function" == typeof I.unref && (G.ref = I.ref.bind(I), G.unref = I.unref.bind(I)), "number" == typeof I || I ? I : G
                    }
                    return g.apply(o, D)
                }), i = Te(o, t, g => function(m, D) {
                    const C = D[0];
                    let Z;
                    "number" == typeof C ? Z = a[C] : (Z = C && C[Me], Z || (Z = C)), Z && "string" == typeof Z.type ? "notScheduled" !== Z.state && (Z.cancelFn && Z.data.isPeriodic || 0 === Z.runCount) && ("number" == typeof C ? delete a[C] : C && (C[Me] = null), Z.zone.cancelTask(Z)) : g.apply(o, D)
                })
            }
            Zone.__load_patch("legacy", o => {
                const e = o[Zone.__symbol__("legacyPatch")];
                e && e()
            }), Zone.__load_patch("queueMicrotask", (o, e, t) => {
                t.patchMethod(o, "queueMicrotask", n => function(r, i) {
                    e.current.scheduleMicroTask("queueMicrotask", i[0])
                })
            }), Zone.__load_patch("timers", o => {
                const e = "set",
                    t = "clear";
                Le(o, e, t, "Timeout"), Le(o, e, t, "Interval"), Le(o, e, t, "Immediate")
            }), Zone.__load_patch("requestAnimationFrame", o => {
                Le(o, "request", "cancel", "AnimationFrame"), Le(o, "mozRequest", "mozCancel", "AnimationFrame"), Le(o, "webkitRequest", "webkitCancel", "AnimationFrame")
            }), Zone.__load_patch("blocking", (o, e) => {
                const t = ["alert", "prompt", "confirm"];
                for (let n = 0; n < t.length; n++) Te(o, t[n], (i, a, d) => function(p, g) {
                    return e.current.run(i, o, g, d)
                })
            }), Zone.__load_patch("EventTarget", (o, e, t) => {
                (function ft(o, e) {
                    e.patchEventPrototype(o, e)
                })(o, t),
                function gt(o, e) {
                    if (Zone[e.symbol("patchEventTarget")]) return;
                    const {
                        eventNames: t,
                        zoneSymbolEventNames: n,
                        TRUE_STR: r,
                        FALSE_STR: i,
                        ZONE_SYMBOL_PREFIX: a
                    } = e.getGlobalObjects();
                    for (let p = 0; p < t.length; p++) {
                        const g = t[p],
                            C = a + (g + i),
                            Z = a + (g + r);
                        n[g] = {}, n[g][i] = C, n[g][r] = Z
                    }
                    const d = o.EventTarget;
                    d && d.prototype && e.patchEventTarget(o, e, [d && d.prototype])
                }(o, t);
                const n = o.XMLHttpRequestEventTarget;
                n && n.prototype && t.patchEventTarget(o, t, [n.prototype])
            }), Zone.__load_patch("MutationObserver", (o, e, t) => {
                He("MutationObserver"), He("WebKitMutationObserver")
            }), Zone.__load_patch("IntersectionObserver", (o, e, t) => {
                He("IntersectionObserver")
            }), Zone.__load_patch("FileReader", (o, e, t) => {
                He("FileReader")
            }), Zone.__load_patch("on_property", (o, e, t) => {
                ! function ut(o, e) {
                    if (oe && !Se || Zone[o.symbol("patchEvents")]) return;
                    const t = e.__Zone_ignore_on_properties;
                    let n = [];
                    if (se) {
                        const r = window;
                        n = n.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
                        const i = function rt() {
                            try {
                                const o = ke.navigator.userAgent;
                                if (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/")) return !0
                            } catch {}
                            return !1
                        }() ? [{
                            target: r,
                            ignoreProperties: ["error"]
                        }] : [];
                        at(r, Xe(r), t && t.concat(i), w(r))
                    }
                    n = n.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
                    for (let r = 0; r < n.length; r++) {
                        const i = e[n[r]];
                        i && i.prototype && at(i.prototype, Xe(i.prototype), t)
                    }
                }(t, o)
            }), Zone.__load_patch("customElements", (o, e, t) => {
                ! function tt(o, e) {
                    const {
                        isBrowser: t,
                        isMix: n
                    } = e.getGlobalObjects();
                    (t || n) && o.customElements && "customElements" in o && e.patchCallbacks(e, o.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"])
                }(o, t)
            }), Zone.__load_patch("XHR", (o, e) => {
                ! function p(g) {
                    const m = g.XMLHttpRequest;
                    if (!m) return;
                    const D = m.prototype;
                    let Z = D[he],
                        G = D[Ce];
                    if (!Z) {
                        const T = g.XMLHttpRequestEventTarget;
                        if (T) {
                            const x = T.prototype;
                            Z = x[he], G = x[Ce]
                        }
                    }
                    const I = "readystatechange",
                        K = "scheduled";

                    function M(T) {
                        const x = T.data,
                            O = x.target;
                        O[i] = !1, O[d] = !1;
                        const ce = O[r];
                        Z || (Z = O[he], G = O[Ce]), ce && G.call(O, I, ce);
                        const be = O[r] = () => {
                            if (O.readyState === O.DONE)
                                if (!x.aborted && O[i] && T.state === K) {
                                    const W = O[e.__symbol__("loadfalse")];
                                    if (0 !== O.status && W && W.length > 0) {
                                        const ye = T.invoke;
                                        T.invoke = function() {
                                            const fe = O[e.__symbol__("loadfalse")];
                                            for (let q = 0; q < fe.length; q++) fe[q] === T && fe.splice(q, 1);
                                            !x.aborted && T.state === K && ye.call(T)
                                        }, W.push(T)
                                    } else T.invoke()
                                } else !x.aborted && !1 === O[i] && (O[d] = !0)
                        };
                        return Z.call(O, I, be), O[t] || (O[t] = T), y.apply(O, x.args), O[i] = !0, T
                    }

                    function P() {}

                    function E(T) {
                        const x = T.data;
                        return x.aborted = !0, z.apply(x.target, x.args)
                    }
                    const ne = Te(D, "open", () => function(T, x) {
                            return T[n] = 0 == x[2], T[a] = x[1], ne.apply(T, x)
                        }),
                        Q = H("fetchTaskAborting"),
                        B = H("fetchTaskScheduling"),
                        y = Te(D, "send", () => function(T, x) {
                            if (!0 === e.current[B] || T[n]) return y.apply(T, x); {
                                const O = {
                                        target: T,
                                        url: T[a],
                                        isPeriodic: !1,
                                        args: x,
                                        aborted: !1
                                    },
                                    ce = xe("XMLHttpRequest.send", P, O, M, E);
                                T && !0 === T[d] && !O.aborted && ce.state === K && ce.invoke()
                            }
                        }),
                        z = Te(D, "abort", () => function(T, x) {
                            const O = function C(T) {
                                return T[t]
                            }(T);
                            if (O && "string" == typeof O.type) {
                                if (null == O.cancelFn || O.data && O.data.aborted) return;
                                O.zone.cancelTask(O)
                            } else if (!0 === e.current[Q]) return z.apply(T, x)
                        })
                }(o);
                const t = H("xhrTask"),
                    n = H("xhrSync"),
                    r = H("xhrListener"),
                    i = H("xhrScheduled"),
                    a = H("xhrURL"),
                    d = H("xhrErrorBeforeScheduled")
            }), Zone.__load_patch("geolocation", o => {
                o.navigator && o.navigator.geolocation && function V(o, e) {
                    const t = o.constructor.name;
                    for (let n = 0; n < e.length; n++) {
                        const r = e[n],
                            i = o[r];
                        if (i) {
                            if (!J(pe(o, r))) continue;
                            o[r] = (d => {
                                const p = function() {
                                    return d.apply(this, _(arguments, t + "." + r))
                                };
                                return Ee(p, d), p
                            })(i)
                        }
                    }
                }(o.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
            }), Zone.__load_patch("PromiseRejectionEvent", (o, e) => {
                function t(n) {
                    return function(r) {
                        ct(o, n).forEach(a => {
                            const d = o.PromiseRejectionEvent;
                            if (d) {
                                const p = new d(n, {
                                    promise: r.promise,
                                    reason: r.rejection
                                });
                                a.invoke(p)
                            }
                        })
                    }
                }
                o.PromiseRejectionEvent && (e[H("unhandledPromiseRejectionHandler")] = t("unhandledrejection"), e[H("rejectionHandledHandler")] = t("rejectionhandled"))
            })
        }
    },
    pe => {
        pe(pe.s = 1567)
    }
]);
//# sourceMappingURL=polyfills.f3824fe6dc0460ae.js.map
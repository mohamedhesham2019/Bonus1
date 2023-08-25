"use strict";
(self.webpackChunkwebsite_angular = self.webpackChunkwebsite_angular || []).push([
    ["src_modules_site_site-routing_module_ts"], {
        1563: (qn, $, c) => {
            c.r($), c.d($, {
                ROUTES: () => Pe,
                SiteRoutingModule: () => An
            });
            var d = c(9209),
                a = c(4666),
                h = c(6803),
                De = c(8944),
                Le = c(9599),
                E = c(745),
                Qe = c(5474),
                ee = c(2673),
                Ne = c(3158),
                e = c(2560),
                D = c(726),
                u = c(2879);
            let te = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.productsService = o, this.platformService = n, this.configService = i, this.router = s
                    }
                    canActivate() {
                        return this._canActivate()
                    }
                    canActivateChild() {
                        return this._canActivate()
                    }
                    _canActivate() {
                        return this.platformService.isServer ? (0, E.of)(!0) : this.configService.loadConfig().pipe((0, ee.w)(o => this.productsService.products$), (0, ee.w)(o => (0, E.of)(!0)), (0, Ne.K)(o => (this.router.navigate(["/error/503"]), (0, Qe._)(() => o))))
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.LFG(D.su), e.LFG(u.mi), e.LFG(u.E4), e.LFG(d.F0))
                    };
                    static# t = this.\u0275prov = e.Yz7({
                        token: t,
                        factory: t.\u0275fac
                    })
                }
                return t
            })();
            const Je = [te],
                Fe = [(() => {
                    class t {
                        constructor() {}
                        getSite$() {
                            return (0, E.of)({})
                        }
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275prov = e.Yz7({
                            token: t,
                            factory: t.\u0275fac
                        })
                    }
                    return t
                })()];
            var b = c(9130),
                m = c(9405),
                Z = c(5168),
                w = c(7714),
                oe = c(9275),
                v = c(3505),
                J = c(3126),
                Me = c(8047),
                L = c(4406);
            const k = function() {
                return ["fas", "check-square"]
            };

            function Oe(t, r) {
                1 & t && e._UZ(0, "fa-icon", 29), 2 & t && e.Q6J("icon", e.DdM(1, k))
            }
            const C = function() {
                return ["fas", "square"]
            };

            function Ee(t, r) {
                1 & t && e._UZ(0, "fa-icon", 30), 2 & t && e.Q6J("icon", e.DdM(1, C))
            }

            function je(t, r) {
                1 & t && e._UZ(0, "fa-icon", 29), 2 & t && e.Q6J("icon", e.DdM(1, k))
            }

            function Re(t, r) {
                1 & t && e._UZ(0, "fa-icon", 30), 2 & t && e.Q6J("icon", e.DdM(1, C))
            }

            function Ye(t, r) {
                1 & t && e._UZ(0, "fa-icon", 29), 2 & t && e.Q6J("icon", e.DdM(1, k))
            }

            function Ge(t, r) {
                1 & t && e._UZ(0, "fa-icon", 30), 2 & t && e.Q6J("icon", e.DdM(1, C))
            }
            const S = function(t) {
                return {
                    active: t
                }
            };

            function He(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 21)(1, "div", 2), e._uU(2, "Technologies"), e.qZA(), e.TgZ(3, "div", 22)(4, "label", 23)(5, "input", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.toggleFilter("HTML"))
                    }), e.qZA(), e.YNc(6, Oe, 1, 2, "fa-icon", 25), e.YNc(7, Ee, 1, 2, "fa-icon", 26), e._uU(8, "HTML"), e.qZA(), e.TgZ(9, "label", 27)(10, "input", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.toggleFilter("ANGULAR"))
                    }), e.qZA(), e.YNc(11, je, 1, 2, "fa-icon", 25), e.YNc(12, Re, 1, 2, "fa-icon", 26), e._uU(13, "Angular"), e.qZA(), e.TgZ(14, "label", 28)(15, "input", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.toggleFilter("VUE"))
                    }), e.qZA(), e.YNc(16, Ye, 1, 2, "fa-icon", 25), e.YNc(17, Ge, 1, 2, "fa-icon", 26), e._uU(18, "Vue"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(4), e.Q6J("ngClass", e.VKq(12, S, o.showHTML)), e.uIk("data-cy-value", o.showHTML), e.xp6(2), e.Q6J("ngIf", o.showHTML), e.xp6(1), e.Q6J("ngIf", !o.showHTML), e.xp6(2), e.Q6J("ngClass", e.VKq(14, S, o.showAngular)), e.uIk("data-cy-value", o.showAngular), e.xp6(2), e.Q6J("ngIf", o.showAngular), e.xp6(1), e.Q6J("ngIf", !o.showAngular), e.xp6(2), e.Q6J("ngClass", e.VKq(16, S, o.showVue)), e.uIk("data-cy-value", o.showVue), e.xp6(2), e.Q6J("ngIf", o.showVue), e.xp6(1), e.Q6J("ngIf", !o.showVue)
                }
            }

            function Ve(t, r) {
                1 & t && e._UZ(0, "fa-icon", 29), 2 & t && e.Q6J("icon", e.DdM(1, k))
            }

            function ze(t, r) {
                1 & t && e._UZ(0, "fa-icon", 30), 2 & t && e.Q6J("icon", e.DdM(1, C))
            }

            function We(t, r) {
                1 & t && e._UZ(0, "fa-icon", 29), 2 & t && e.Q6J("icon", e.DdM(1, k))
            }

            function Xe(t, r) {
                1 & t && e._UZ(0, "fa-icon", 30), 2 & t && e.Q6J("icon", e.DdM(1, C))
            }

            function Ke(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 31)(1, "div", 2), e._uU(2, "Price"), e.qZA(), e.TgZ(3, "div", 22)(4, "label", 32)(5, "input", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.toggleFilter("PRO"))
                    }), e.qZA(), e.YNc(6, Ve, 1, 2, "fa-icon", 25), e.YNc(7, ze, 1, 2, "fa-icon", 26), e._uU(8, "Pro"), e.qZA(), e.TgZ(9, "label", 33)(10, "input", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.toggleFilter("FREE"))
                    }), e.qZA(), e.YNc(11, We, 1, 2, "fa-icon", 25), e.YNc(12, Xe, 1, 2, "fa-icon", 26), e._uU(13, "Free"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(4), e.Q6J("ngClass", e.VKq(8, S, o.showPro)), e.uIk("data-cy-value", o.showPro), e.xp6(2), e.Q6J("ngIf", o.showPro), e.xp6(1), e.Q6J("ngIf", !o.showPro), e.xp6(2), e.Q6J("ngClass", e.VKq(10, S, o.showFree)), e.uIk("data-cy-value", o.showFree), e.xp6(2), e.Q6J("ngIf", o.showFree), e.xp6(1), e.Q6J("ngIf", !o.showFree)
                }
            }

            function $e(t, r) {
                1 & t && e._UZ(0, "fa-icon", 29), 2 & t && e.Q6J("icon", e.DdM(1, k))
            }

            function et(t, r) {
                1 & t && e._UZ(0, "fa-icon", 30), 2 & t && e.Q6J("icon", e.DdM(1, C))
            }

            function tt(t, r) {
                1 & t && e._UZ(0, "fa-icon", 29), 2 & t && e.Q6J("icon", e.DdM(1, k))
            }

            function ot(t, r) {
                1 & t && e._UZ(0, "fa-icon", 30), 2 & t && e.Q6J("icon", e.DdM(1, C))
            }
            const it = function() {
                return ["fad", "info-circle"]
            };

            function nt(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 31)(1, "div", 2), e._uU(2, "Type"), e._UZ(3, "fa-icon", 34), e.qZA(), e.TgZ(4, "div", 22)(5, "label", 35)(6, "input", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.toggleFilter("THEME"))
                    }), e.qZA(), e.YNc(7, $e, 1, 2, "fa-icon", 25), e.YNc(8, et, 1, 2, "fa-icon", 26), e._uU(9, "Themes"), e.qZA(), e.TgZ(10, "label", 36)(11, "input", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.toggleFilter("TEMPLATE"))
                    }), e.qZA(), e.YNc(12, tt, 1, 2, "fa-icon", 25), e.YNc(13, ot, 1, 2, "fa-icon", 26), e._uU(14, "Templates"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(3), e.Q6J("icon", e.DdM(9, it)), e.xp6(2), e.Q6J("ngClass", e.VKq(10, S, o.showTheme)), e.uIk("data-cy-value", o.showTheme), e.xp6(2), e.Q6J("ngIf", o.showTheme), e.xp6(1), e.Q6J("ngIf", !o.showTheme), e.xp6(2), e.Q6J("ngClass", e.VKq(12, S, o.showTemplate)), e.uIk("data-cy-value", o.showTemplate), e.xp6(2), e.Q6J("ngIf", o.showTemplate), e.xp6(1), e.Q6J("ngIf", !o.showTemplate)
                }
            }
            const y = function(t) {
                return {
                    "text-primary": t
                }
            };
            let rt = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.productsService = o, this.router = n, this.route = i, this.changeDetectorRef = s, this.showFrameworksGroup = !0, this.showFreeOrProGroup = !0, this.selectedCategory = "ALL", this.subscription = new w.w0, this.showThemeOrTemplateGroup = !1, this.selectedCategoryDisplay = "", this.selectedFramework = "", this.selectedFreeOrPro = "", this.showHTML = !0, this.showAngular = !0, this.showVue = !0, this.showPro = !0, this.showFree = !0, this.showTheme = !0, this.showTemplate = !0
                    }
                    ngOnInit() {
                        this.productsService.resetFilters(), this.selectedCategoryDisplay = J.ProductCategoryDisplayName[this.selectedCategory], this.selectedCategory === J.ProductCategory.bundle && (this.showFreeOrProGroup = !1), this.subscription.add(this.route.queryParams.subscribe(o => this._processQueryParams(o))), this._hasThemesTemplatesSlug()
                    }
                    ngOnDestroy() {
                        this.subscription.unsubscribe()
                    }
                    _resetFilters() {
                        this.showHTML = !0, this.showAngular = !0, this.showVue = !0, this.showPro = !0, this.showFree = !0
                    }
                    _processQueryParams(o) {
                        this._resetFilters(), this.productsService.resetFilters();
                        for (const n in o) switch (n) {
                            case "showHTML":
                                this.productsService.setTechnologyFilter("HTML", !0), this.showHTML = !1;
                                break;
                            case "showAngular":
                                this.productsService.setTechnologyFilter("ANGULAR", !0), this.showAngular = !1;
                                break;
                            case "showVue":
                                this.productsService.setTechnologyFilter("VUE", !0), this.showVue = !1;
                                break;
                            case "showPro":
                                this.productsService.setFilterByFree("PRO", !0), this.showPro = !1, this.productsService.setFilterByFree("FREE", !1);
                                break;
                            case "showFree":
                                this.productsService.setFilterByFree("FREE", !0), this.showFree = !1, this.productsService.setFilterByFree("PRO", !1)
                        }
                        this._hasThemesTemplatesSlug(), this.changeDetectorRef.detectChanges()
                    }
                    _filterNameForParam(o) {
                        switch (o) {
                            case "showHTML":
                                return "HTML";
                            case "showAngular":
                                return "ANGULAR";
                            case "showVue":
                                return "VUE";
                            case "showPro":
                                return "PRO";
                            case "showFree":
                                return "FREE"
                        }
                        throw new Error("PARAM_NOT_RECOGNIZED")
                    }
                    _hasThemesTemplatesSlug() {
                        this.productConfig && this.productConfig.themesTemplatesSlug && (this.showThemeOrTemplateGroup = !!this.productConfig.themesTemplatesSlug, "themes" === this.route.snapshot.url[0].path && (this.productsService.setFilterByType("THEME", !1), this.productsService.setFilterByType("TEMPLATE", !0), this.showTemplate = !1), "templates" === this.route.snapshot.url[0].path && (this.productsService.setFilterByType("TEMPLATE", !1), this.productsService.setFilterByType("THEME", !0), this.showTheme = !1))
                    }
                    frameworkSelected(o) {
                        o === this.selectedFramework && (this.selectedFramework = "")
                    }
                    toggleFilter(o) {
                        let n;
                        switch (o) {
                            case "HTML":
                                this.productsService.setTechnologyFilter("HTML", this.showHTML), this.showHTML = !this.showHTML;
                                break;
                            case "ANGULAR":
                                this.productsService.setTechnologyFilter("ANGULAR", this.showAngular), this.showAngular = !this.showAngular;
                                break;
                            case "VUE":
                                this.productsService.setTechnologyFilter("VUE", this.showVue), this.showVue = !this.showVue;
                                break;
                            case "PRO":
                                this.productsService.setFilterByFree("PRO", this.showPro), this.showPro = !this.showPro, !this.showPro && !this.showFree && (this.showFree = !0, this.productsService.setFilterByFree("FREE", !1));
                                break;
                            case "FREE":
                                this.productsService.setFilterByFree("FREE", this.showFree), this.showFree = !this.showFree, !this.showPro && !this.showFree && (this.showPro = !0, this.productsService.setFilterByFree("PRO", !1));
                                break;
                            case "THEME":
                                this.showTheme && this.showTemplate && (n = `/templates/${this.productConfig.themesTemplatesSlug}`), this.showTheme && !this.showTemplate && (n = `/templates/${this.productConfig.themesTemplatesSlug}`), !this.showTheme && this.showTemplate && (n = `/${this.productConfig.themesTemplatesSlug}`);
                                break;
                            case "TEMPLATE":
                                this.showTheme && this.showTemplate && (n = `/themes/${this.productConfig.themesTemplatesSlug}`), !this.showTheme && this.showTemplate && (n = `/themes/${this.productConfig.themesTemplatesSlug}`), this.showTheme && !this.showTemplate && (n = `/${this.productConfig.themesTemplatesSlug}`)
                        }
                        const i = this._getQueryParams();
                        n ? this.router.navigate([n], {
                            queryParams: i,
                            queryParamsHandling: "merge"
                        }) : this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: i,
                            queryParamsHandling: "merge"
                        })
                    }
                    changeCategory(o) {
                        const n = this._getQueryParams();
                        this.router.navigate([o], {
                            queryParams: n,
                            queryParamsHandling: "merge"
                        })
                    }
                    _getQueryParams() {
                        return {
                            showHTML: !!this.showHTML && void 0,
                            showAngular: !!this.showAngular && void 0,
                            showVue: !!this.showVue && void 0,
                            showPro: !!this.showPro && void 0,
                            showFree: !!this.showFree && void 0
                        }
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(D.su), e.Y36(d.F0), e.Y36(d.gz), e.Y36(e.sBO))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-quick-nav"]
                        ],
                        inputs: {
                            showFrameworksGroup: "showFrameworksGroup",
                            showFreeOrProGroup: "showFreeOrProGroup",
                            selectedCategory: "selectedCategory",
                            productConfig: "productConfig"
                        },
                        decls: 34,
                        vars: 34,
                        consts: [
                            [1, "d-flex", "justify-content-between", "flex-column", "flex-xl-row"],
                            [1, "mb-3", "mb-xl-0"],
                            [1, "fst-italic", "text-xs", "mb-1"],
                            ["dropdownStyle", "text", "background", "btn-white shadow", "placement", "bottom-start"],
                            ["data-cy", "selectedCategory", 1, "dropdown-trigger"],
                            [1, "dropdown-items"],
                            ["data-cy", "ALL", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "ADMIN_DASHBOARD", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "LANDING_PAGES", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "BUSINESS_CORPORATE", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "PORTFOLIO_RESUME", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "GENERAL_PAGE_LAYOUTS", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "NAVIGATION_LAYOUTS", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "ECOMMERCE", 1, "dropdown-item", 3, "ngClass", "click"],
                            ["data-cy", "BLOG_NEWS", 1, "dropdown-item", 3, "ngClass", "click"],
                            [1, "dropdown-divider"],
                            ["data-cy", "BUNDLE", 1, "dropdown-item", 3, "ngClass", "click"],
                            [1, "d-flex", "flex-column", "flex-lg-row"],
                            ["class", "mb-3 mb-lg-0", 4, "ngIf"],
                            ["class", "ms-lg-3 mb-3 mb-lg-0", 4, "ngIf"],
                            [1, "mt-3", "mb-5"],
                            [1, "mb-3", "mb-lg-0"],
                            [1, "btn-group", "btn-group-toggle", "btn-group-quick-nav"],
                            ["data-cy", "showHTML", 1, "btn", "btn-white", 3, "ngClass"],
                            ["type", "radio", 3, "click"],
                            ["class", "me-2 text-primary", 3, "icon", 4, "ngIf"],
                            ["class", "me-2 text-gray-300", 3, "icon", 4, "ngIf"],
                            ["data-cy", "showAngular", 1, "btn", "btn-white", 3, "ngClass"],
                            ["data-cy", "showVue", 1, "btn", "btn-white", 3, "ngClass"],
                            [1, "me-2", "text-primary", 3, "icon"],
                            [1, "me-2", "text-gray-300", 3, "icon"],
                            [1, "ms-lg-3", "mb-3", "mb-lg-0"],
                            ["data-cy", "showPro", 1, "btn", "btn-white", 3, "ngClass"],
                            ["data-cy", "showFree", 1, "btn", "btn-white", 3, "ngClass"],
                            ["placement", "top", "ngbTooltip", "Themes are fully styled layouts. Templates are basic blueprints with minimal custom styling.", 1, "ms-1", "text-gray-500", 3, "icon"],
                            ["data-cy", "showTheme", 1, "btn", "btn-white", 3, "ngClass"],
                            ["data-cy", "showTemplate", 1, "btn", "btn-white", 3, "ngClass"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2), e._uU(3, "Category"), e.qZA(), e.TgZ(4, "sbpro-dropdown", 3)(5, "div", 4), e._uU(6), e.qZA(), e.TgZ(7, "div", 5)(8, "a", 6), e.NdJ("click", function() {
                                return i.changeCategory("/")
                            }), e._uU(9, "All"), e.qZA(), e.TgZ(10, "a", 7), e.NdJ("click", function() {
                                return i.changeCategory("/admin-dashboard")
                            }), e._uU(11, "Admin & Dashboard"), e.qZA(), e.TgZ(12, "a", 8), e.NdJ("click", function() {
                                return i.changeCategory("/landing-pages")
                            }), e._uU(13, "Landing Pages"), e.qZA(), e.TgZ(14, "a", 9), e.NdJ("click", function() {
                                return i.changeCategory("/themes/business-corporate")
                            }), e._uU(15, "Business & Corporate"), e.qZA(), e.TgZ(16, "a", 10), e.NdJ("click", function() {
                                return i.changeCategory("/themes/portfolio-resume")
                            }), e._uU(17, "Portfolio & Resume"), e.qZA(), e.TgZ(18, "a", 11), e.NdJ("click", function() {
                                return i.changeCategory("/templates/general")
                            }), e._uU(19, "General Page Layouts"), e.qZA(), e.TgZ(20, "a", 12), e.NdJ("click", function() {
                                return i.changeCategory("/templates/navigation")
                            }), e._uU(21, "Navigation Layouts"), e.qZA(), e.TgZ(22, "a", 13), e.NdJ("click", function() {
                                return i.changeCategory("/templates/ecommerce")
                            }), e._uU(23, "Ecommerce"), e.qZA(), e.TgZ(24, "a", 14), e.NdJ("click", function() {
                                return i.changeCategory("/blog-news")
                            }), e._uU(25, "Blog & News"), e.qZA(), e._UZ(26, "div", 15), e.TgZ(27, "a", 16), e.NdJ("click", function() {
                                return i.changeCategory("/bundles")
                            }), e._uU(28, "Bundles"), e.qZA()()()(), e.TgZ(29, "div", 17), e.YNc(30, He, 19, 18, "div", 18), e.YNc(31, Ke, 14, 12, "div", 19), e.YNc(32, nt, 15, 14, "div", 19), e.qZA()(), e._UZ(33, "hr", 20)), 2 & n && (e.xp6(6), e.Oqu(i.selectedCategoryDisplay), e.xp6(2), e.Q6J("ngClass", e.VKq(14, y, "ALL" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(16, y, "ADMIN_DASHBOARD" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(18, y, "LANDING_PAGES" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(20, y, "BUSINESS_CORPORATE" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(22, y, "PORTFOLIO_RESUME" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(24, y, "GENERAL_PAGE_LAYOUTS" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(26, y, "NAVIGATION_LAYOUTS" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(28, y, "ECOMMERCE" === i.selectedCategory)), e.xp6(2), e.Q6J("ngClass", e.VKq(30, y, "BLOG_NEWS" === i.selectedCategory)), e.xp6(3), e.Q6J("ngClass", e.VKq(32, y, "BUNDLE" === i.selectedCategory)), e.xp6(3), e.Q6J("ngIf", i.showFrameworksGroup), e.xp6(1), e.Q6J("ngIf", i.showFreeOrProGroup), e.xp6(1), e.Q6J("ngIf", i.showThemeOrTemplateGroup))
                        },
                        dependencies: [a.mk, a.O5, Me.J, v.BN, L._L],
                        styles: ["[_nghost-%COMP%]{display:contents}.btn-group-quick-nav[_ngcontent-%COMP%]{box-shadow:0 .15rem 1.75rem #21283226;border-radius:.35rem}.btn-group-quick-nav[_ngcontent-%COMP%]   .btn-white[_ngcontent-%COMP%]{border-color:#f2f2f2}.btn-group-quick-nav[_ngcontent-%COMP%]   .btn-white.active[_ngcontent-%COMP%]{color:#212832;background-color:#fff;border-color:#f2f2f2}.btn-group-quick-nav[_ngcontent-%COMP%]   .btn-white.active[_ngcontent-%COMP%]:hover{background-color:#f2f2f2}.btn-group-quick-nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}"],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var st = c(1738),
                A = c(2464),
                F = c(9035);

            function at(t, r) {
                1 & t && (e.TgZ(0, "div", 21), e._uU(1, "Free"), e.qZA())
            }

            function ct(t, r) {
                1 & t && (e.TgZ(0, "div", 22), e._uU(1, "Pro"), e.qZA())
            }
            const ie = function() {
                return ["fad", "download"]
            };

            function pt(t, r) {
                if (1 & t && (e.TgZ(0, "div", 23), e._UZ(1, "fa-icon", 24), e._uU(2, "X,XXX"), e.qZA()), 2 & t) {
                    const o = e.oxw().$implicit;
                    e.uIk("data-cy", o.slug + "-downloadCount"), e.xp6(1), e.Q6J("icon", e.DdM(2, ie))
                }
            }

            function lt(t, r) {
                if (1 & t && (e.TgZ(0, "div", 23), e._UZ(1, "fa-icon", 24), e._uU(2), e.ALo(3, "number"), e.qZA()), 2 & t) {
                    const o = e.oxw().$implicit;
                    e.uIk("data-cy", o.slug + "-downloadCount"), e.xp6(1), e.Q6J("icon", e.DdM(7, ie)), e.xp6(1), e.Oqu(e.Dn7(3, 3, o.downloadCount, "1.0", "en-US"))
                }
            }
            const dt = function(t) {
                return {
                    hidden: t
                }
            };

            function ut(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 8)(1, "a", 9), e.NdJ("click", function() {
                        const s = e.CHM(o).$implicit,
                            g = e.oxw(3);
                        return e.KtG(g.viewProduct(s))
                    }), e.ALo(2, "createProductCardLink"), e.TgZ(3, "picture"), e._UZ(4, "source", 10), e.ALo(5, "safe"), e.ALo(6, "webpExt"), e._UZ(7, "source", 11), e.ALo(8, "safe"), e._UZ(9, "img", 12), e.ALo(10, "safe"), e.qZA()(), e.TgZ(11, "div", 13)(12, "div", 14)(13, "div", 15), e._uU(14), e.qZA(), e.TgZ(15, "div", 16), e._uU(16), e.qZA()(), e.TgZ(17, "div", 17), e.YNc(18, at, 2, 0, "div", 18), e.YNc(19, ct, 2, 0, "div", 19), e.YNc(20, pt, 3, 3, "div", 20), e.YNc(21, lt, 4, 8, "div", 20), e.qZA()()()
                }
                if (2 & t) {
                    const o = r.$implicit,
                        n = e.oxw(3);
                    e.Q6J("ngClass", e.VKq(31, dt, o.hidden)), e.xp6(1), e.Q6J("routerLink", e.lcZ(2, 14, o)), e.uIk("data-cy", o.slug), e.xp6(3), e.Q6J("srcset", e.Dn7(5, 16, e.xi3(6, 20, null == o.images ? null : o.images.primaryImage.medium, "medium"), "resourceURL", "NONE")), e.xp6(3), e.Q6J("srcset", e.Dn7(8, 23, null == o.images ? null : o.images.primaryImage.medium, "resourceURL", "NONE")), e.xp6(2), e.Q6J("src", e.Dn7(10, 27, null == o.images ? null : o.images.primaryImage.medium, "resourceURL", "NONE"), e.LSH)("alt", null == o.images ? null : o.images.primaryImage.alt), e.xp6(3), e.Q6J("product", o), e.xp6(2), e.Oqu(o.displayName), e.xp6(2), e.Oqu(o.description.bump), e.xp6(2), e.Q6J("ngIf", !0 === o.free), e.xp6(1), e.Q6J("ngIf", !1 === o.free), e.xp6(1), e.Q6J("ngIf", !n.prerenderDynamicProductCardsLoaded), e.xp6(1), e.Q6J("ngIf", n.prerenderDynamicProductCardsLoaded)
                }
            }

            function gt(t, r) {
                if (1 & t && (e.ynx(0), e.YNc(1, ut, 22, 33, "div", 7), e.BQk()), 2 & t) {
                    const o = e.oxw().ngIf;
                    e.xp6(1), e.Q6J("ngForOf", o)
                }
            }

            function mt(t, r) {
                if (1 & t && (e.ynx(0), e.YNc(1, gt, 2, 1, "ng-container", 3), e.BQk()), 2 & t) {
                    const o = r.ngIf,
                        n = e.oxw(),
                        i = e.MAs(7);
                    e.xp6(1), e.Q6J("ngIf", o.length && !n.allHidden)("ngIfElse", i)
                }
            }

            function ht(t, r) {
                1 & t && e._UZ(0, "div", 25)
            }

            function ft(t, r) {
                1 & t && (e.TgZ(0, "div", 26), e._UZ(1, "img", 27), e.TgZ(2, "h5", 28), e._uU(3, "No matching items found"), e.qZA(), e.TgZ(4, "p", 29), e._uU(5, "Select some filters to see more items"), e.qZA()())
            }

            function _t(t, r) {
                1 & t && (e.TgZ(0, "div", 30)(1, "p", 31), e._uU(2, "Loading items..."), e.qZA(), e.TgZ(3, "div", 32)(4, "span", 33), e._uU(5, "Loading..."), e.qZA()()())
            }
            let j = (() => {
                class t {
                    constructor(o, n, i, s, g) {
                        this.productsService = o, this.changeDetectorRef = n, this.elementRef = i, this.analyticsService = s, this.platformService = g, this.showFrameworksGroup = !0, this.showFreeOrProGroup = !0, this.showThemeOrTemplateGroup = !1, this.subscription = new w.w0, this.allHidden = !1, this.prerenderDynamicProductCardsLoaded = !1
                    }
                    ngOnInit() {
                        this.productsService.setCategory(this.category || "ALL"), this.subscription.add(this.productsService.allHidden$.subscribe(o => {
                            this.allHidden = o, this.changeDetectorRef.markForCheck()
                        }))
                    }
                    ngAfterViewInit() {
                        this.platformService.isServer || (this.prerenderDynamicProductCardsLoaded = !0, this.changeDetectorRef.detectChanges())
                    }
                    ngOnDestroy() {
                        this.subscription.unsubscribe()
                    }
                    viewProduct(o) {
                        o.free ? this.analyticsService.sendEventViewItem("FREE_PRODUCT", o.displayName) : this.analyticsService.sendEventViewItem("PRO_PRODUCT", o.displayName, void 0, o)
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(D.su), e.Y36(e.sBO), e.Y36(e.SBq), e.Y36(u.yD), e.Y36(u.mi))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-product-cards"]
                        ],
                        inputs: {
                            category: "category",
                            showFrameworksGroup: "showFrameworksGroup",
                            showFreeOrProGroup: "showFreeOrProGroup",
                            showThemeOrTemplateGroup: "showThemeOrTemplateGroup",
                            productConfig: "productConfig"
                        },
                        decls: 10,
                        vars: 9,
                        consts: [
                            [1, "container"],
                            [3, "showFrameworksGroup", "showFreeOrProGroup", "productConfig", "selectedCategory"],
                            [1, "row", "justify-content-center"],
                            [4, "ngIf", "ngIfElse"],
                            ["class", "hidden", "data-cy", "prerenderDynamicProductCardsLoaded", 4, "ngIf"],
                            ["noItems", ""],
                            ["loading", ""],
                            ["class", "col-lg-4 col-md-6 mb-5", 3, "ngClass", 4, "ngFor", "ngForOf"],
                            [1, "col-lg-4", "col-md-6", "mb-5", 3, "ngClass"],
                            ["tabindex", "0", 1, "d-block", "rounded-3", "lift", "lift-lg", "mb-3", "pointer", 2, "--aspect-ratio", "1.5", 3, "routerLink", "click"],
                            ["type", "image/webp", 3, "srcset"],
                            ["type", "image/jpeg", 3, "srcset"],
                            ["loading", "lazy", "fetchpriority", "low", 1, "img-fluid", "rounded-3", 3, "src", "alt"],
                            [1, "d-flex", "justify-content-between", "align-items-center"],
                            ["sbwInView", "", 3, "product"],
                            [1, "h6", "mb-0"],
                            [1, "small"],
                            [1, "text-end", "flex-shrink-0"],
                            ["class", "badge bg-green-soft text-green", 4, "ngIf"],
                            ["class", "badge bg-blue-soft text-blue", 4, "ngIf"],
                            ["class", "text-xs", 4, "ngIf"],
                            [1, "badge", "bg-green-soft", "text-green"],
                            [1, "badge", "bg-blue-soft", "text-blue"],
                            [1, "text-xs"],
                            [1, "me-1", 3, "icon"],
                            ["data-cy", "prerenderDynamicProductCardsLoaded", 1, "hidden"],
                            [1, "col-lg-4", "text-center", "mb-4"],
                            ["src", "assets/img/freepik/windows-pana.svg", "alt", "", 1, "img-fluid", "mb-3"],
                            [1, "mb-0"],
                            [1, "fst-italic", "small", "mb-0"],
                            [1, "col-lg-4", "text-center"],
                            [1, "small", "fst-italic"],
                            ["role", "status", 1, "spinner-border", "text-primary"],
                            [1, "visually-hidden"]
                        ],
                        template: function(n, i) {
                            if (1 & n && (e.TgZ(0, "div", 0), e._UZ(1, "sbw-quick-nav", 1), e.TgZ(2, "div", 2), e.YNc(3, mt, 2, 2, "ng-container", 3), e.ALo(4, "async"), e.qZA()(), e.YNc(5, ht, 1, 0, "div", 4), e.YNc(6, ft, 6, 0, "ng-template", null, 5, e.W1O), e.YNc(8, _t, 6, 0, "ng-template", null, 6, e.W1O)), 2 & n) {
                                const s = e.MAs(9);
                                e.xp6(1), e.Q6J("showFrameworksGroup", i.showFrameworksGroup)("showFreeOrProGroup", i.showFreeOrProGroup)("productConfig", i.productConfig)("selectedCategory", i.category), e.xp6(2), e.Q6J("ngIf", e.lcZ(4, 7, i.productsService.products$))("ngIfElse", s), e.xp6(2), e.Q6J("ngIf", i.prerenderDynamicProductCardsLoaded)
                            }
                        },
                        dependencies: [a.mk, a.sg, a.O5, d.rH, oe.z, v.BN, rt, a.Ov, a.JJ, st.F, A.y, F.r],
                        changeDetection: 0
                    })
                }
                return t
            })();
            const vt = [{
                title: "Official Bootstrap Resources",
                subTitle: "Projects created and maintained by the Bootstrap creators.",
                titleSeparator: !1,
                subSections: [{
                    resources: [{
                        name: "Bootstrap",
                        link: "https://getbootstrap.com/",
                        description: "The most popular front-end framework for developing responsive, mobile first projects on the web."
                    }, {
                        name: "Bootstrap Blog",
                        link: "http://blog.getbootstrap.com/",
                        description: "The official bootstrap blog. Announcements, discussions, and more for Bootstrap."
                    }, {
                        name: "Bootstrap Expo",
                        link: "http://expo.getbootstrap.com/",
                        description: "Beautiful and inspiring uses of Bootstrap, curated by @mdo."
                    }, {
                        name: "Bootlint",
                        link: "https://github.com/twbs/bootlint",
                        description: "An HTML linter for Bootstrap projects."
                    }]
                }]
            }, {
                title: "Bootstrap Templates & Themes",
                titleSeparator: !0,
                subSections: [{
                    heading: "Premium Marketplaces",
                    subHeading: "Purchase Bootstrap themes, or sell your own custom designed Bootstrap themes on these third-party marketplace websites!",
                    resources: [{
                        name: "Bootstrap Themes",
                        link: "https://themes.getbootstrap.com/",
                        description: "Bootstrap Themes sells themes built by or reviewed by Bootstrap's creators. The Boostrap team reviews every new theme and update against a set of guidelines they wrote."
                    }, {
                        name: "WrapBootstrap",
                        link: "https://wrapbootstrap.com/?ref=StartBootstrap",
                        description: "WrapBootstrap was one of the first third-party marketplaces dedicated to selling premium Bootstrap templates and themes."
                    }, {
                        name: "BootstrapBay",
                        link: "https://bootstrapbay.sjv.io/N0yAv",
                        description: "BootstrapBay is a third-party marketplace for Bootstrap themes & templates, operating since 2014."
                    }, {
                        name: "ThemeForest",
                        link: "https://1.envato.market/4m9dG",
                        description: "ThemeForest is a very popular marketplace for website themes. There are thousands of Bootstrap based products on ThemeForest to choose from."
                    }, {
                        name: "Creative Market",
                        link: "https://creativemarket.com/themes/bootstrap?u=StartBootstrap",
                        description: "Creative Market is another third-party vendor marketplace that offers a variety of general design assets. Creative Market has many Bootstrap built themes to choose from."
                    }]
                }, {
                    heading: "Premium Vendors",
                    subHeading: "Premium vendors only sell their own in-house created content, as opposed to marketplace websites that sell themes submitted by a variety of third-party users.",
                    resources: [{
                        name: "Creative Tim",
                        link: "https://www.creative-tim.com?affiliate_id=101249",
                        description: "A selection of premium Bootstrap themes, templates, UI kits and more - developed by Creative Tim."
                    }, {
                        name: "Designmodo",
                        link: "https://designmodo.com/startup/?u=787",
                        description: "Designmodo's Startup Framework is a Bootstrap based website generator, which is a high quality solution for those who want a beautiful startup website quickly."
                    }, {
                        name: "Themefisher",
                        link: "https://themefisher.com/premium-templates/",
                        description: "A selection of Bootstrap based themes built by the design team at Themefisher."
                    }]
                }, {
                    heading: "Free Templates & Themes",
                    subHeading: "Download free Bootstrap templates and themes on the following websites.",
                    resources: [{
                        name: "Start Bootstrap",
                        link: "https://startbootstrap.com/",
                        description: "Start Bootstrap creates free, open source, MIT license, Bootstrap themes, templates, and code snippets for you to use on any project, guides to help you learn more about designing and developing with the Bootstrap framework, and premium Bootstrap products."
                    }, {
                        name: "Bootswatch",
                        link: "http://bootswatch.com/",
                        description: "A collection of easy to use, open source swatches for Bootstrap."
                    }]
                }, {
                    heading: "Bootstrap Showcases",
                    subHeading: "Get inspired for your next Bootstrap project by browsing examples of websites built with Bootstrap!",
                    resources: [{
                        name: "Built With Bootstrap",
                        link: "http://builtwithbootstrap.com/",
                        description: "A showcase of sites and apps built with Bootstrap"
                    }]
                }]
            }, {
                title: "Bootstrap Integrations",
                titleSeparator: !0,
                subSections: [{
                    heading: "Javascript",
                    subHeading: "Bootstrap components rewritten to integrate with the most popular development javascript frameworks",
                    resources: [{
                        name: "ng-bootstrap",
                        link: "https://ng-bootstrap.github.io",
                        description: "Bootstrap 4 components, powered by Angular",
                        supports: "Bootstrap 4"
                    }, {
                        name: "reactstrap",
                        link: "https://reactstrap.github.io/",
                        description: "Easy to use React Bootstrap 4 components",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Bootstrap Vue",
                        link: "https://bootstrap-vue.js.org/",
                        description: "Bootstrap 4 Components For Vue.js",
                        supports: "Bootstrap 4"
                    }, {
                        name: "UI Bootstrap",
                        link: "https://angular-ui.github.io/bootstrap/",
                        description: "Bootstrap components written in pure AngularJS by the AngularUI Team",
                        supports: "Bootstrap 3"
                    }, {
                        name: "ngx-bootstrap",
                        link: "http://valor-software.com/ngx-bootstrap/",
                        description: "Native Angular widgets for Bootstrap 3 and Bootstrap 4",
                        supports: "Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "Ember Bootstrap",
                        link: "http://www.ember-bootstrap.com/",
                        description: "An ember-cli addon for using Bootstrap in Ember.js applications.",
                        supports: "Bootstrap 3"
                    }]
                }, {
                    heading: "Wordpress",
                    subHeading: "Bootstrap components rewritten to integrate with wordpress",
                    resources: [{
                        name: "Sage",
                        link: "https://roots.io/sage/",
                        description: "The best WordPress starter theme with a modern front-end development workflow. Sage comes with the latest version of Bootstrap.",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Bootplate",
                        link: "http://bootplate.jdmdigital.co/",
                        description: "Wicked-fast, mobile-first Bootstrap 4 theme framework for building awesome WordPress websites.",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Understrap",
                        link: "http://understrap.com/",
                        description: "UnderStrap combines Underscores and Bootstrap 4 into a perfect open source foundation for your next WordPress theme project.",
                        supports: "Bootstrap 4"
                    }]
                }]
            }, {
                title: "Bootstrap Development Tools",
                titleSeparator: !0,
                subSections: [{
                    heading: "Visual Builders",
                    subHeading: "Visual builder applications for creating custom versions of Bootstrap and Bootstrap components.",
                    resources: [{
                        name: "Bootply",
                        link: "http://www.bootply.com/",
                        description: "A Bootstrap code editor and builder - the Bootstrap playground.",
                        supports: "Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "BuildBootstrap",
                        link: "http://buildbootstrap.com/",
                        description: "BuildBootstrap is a free online tool helping with common task of creating responsive layout utilizing Bootstrap 3 or latest Bootstrap 4 grid system.",
                        supports: "Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "Pingendo",
                        link: "http://pingendo.com/",
                        description: "A first class Bootstrap 4 builder for developers, designers, and their clients",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Bootstrap Studio",
                        link: "https://bootstrapstudio.io/",
                        description: "A powerful desktop app for creating responsive websites using the Bootstrap framework.",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Form Builder",
                        link: "https://bootsnipp.com/forms",
                        description: "A drag-and-drop Bootstrap form builder by Bootsnipp.",
                        supports: "Bootstrap 2, Bootstrap 3"
                    }, {
                        name: "Button Builder",
                        link: "http://www.bootply.com/",
                        description: "A simple Bootstrap button builder by Bootsnipp.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Jetstrap",
                        link: "https://jetstrap.com/",
                        description: "Not just a mock-up tool, Jetstrap is the premier interface-building tool for Bootstrap 3.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "BootSwatchr",
                        link: "http://bootswatchr.com/",
                        description: "ThemeRoller for Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "PaintStrap",
                        link: "http://paintstrap.com/",
                        description: "Generate beautiful Bootstrap themes using the Adobe kuler / COLOURlovers color scheme.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "1pxdeep",
                        link: "http://rriepe.github.io/1pxdeep/",
                        description: "Flat(ish) Bootstrap 3 theme generator.",
                        supports: "Bootstrap 3"
                    }]
                }, {
                    heading: "Other Tools",
                    subHeading: "Helpful tools for developers to use while creating with Bootstrap.",
                    resources: [{
                        name: "Bootstrap CDN",
                        link: "http://www.bootstrapcdn.com/",
                        description: "The recommended CDN for Bootstrap, Font Awesome, and Bootswatch",
                        supports: "Bootstrap 2, Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "Bootstrap Loader",
                        link: "https://github.com/shakacode/bootstrap-loader",
                        description: "Load Bootstrap styles and scripts in your Webpack bundle",
                        supports: "Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "Bootstrap 4 CheatSheet",
                        link: "https://www.creative-tim.com/bootstrap-cheat-sheet/",
                        description: "A cheat sheet for Bootstrap 4 components",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Pug Bootstrap",
                        link: "http://rajasegar.github.io/PUG-Bootstrap/",
                        description: "The power of Bootstrap combined with the speed of Pug for faster and easier web development.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootsnipp",
                        link: "http://bootsnipp.com",
                        description: "Design elements, playground, and code snippets for the Bootstrap HTML/CSS/JS framework.",
                        supports: "Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "CodexUI",
                        link: "https://codexui.com/",
                        description: "Vanilla Bootstrap 4 components that require no extra CSS or Javascript to use.",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Bootstrap Accessibility Plugin",
                        link: "https://github.com/paypal/bootstrap-accessibility-plugin",
                        description: "Accessibility Plugin for Bootstrap 3 and Bootstrap 3 as SubModule.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Tablestrap",
                        link: "http://tablestrap.com/",
                        description: "A Bootstrap table generator.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Lavish",
                        link: "http://www.lavishbootstrap.com/",
                        description: "Generate your own Bootstrap color scheme from an image and customize to your taste.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootcoding",
                        link: "http://www.bootcoding.com/",
                        description: "Create your own or modifiy existing bootstrap code snippets by playing with HTML, CSS and JS.",
                        supports: "Bootstrap 3"
                    }]
                }]
            }, {
                title: "Bootstrap Plugins",
                titleSeparator: !0,
                subSections: [{
                    heading: "Form Plugins",
                    resources: [{
                        name: "Bootstrap Datepicker",
                        link: "https://uxsolutions.github.io/bootstrap-datepicker/",
                        description: "A datepicker for Bootstrap.",
                        supports: "Bootstrap 2, Bootstrap 3"
                    }, {
                        name: "Angular Bootstrap Colorpicker",
                        link: "https://codepen.io/buberdds/full/fBAsr",
                        description: "No jQuery dependendencies, just an AngularJS directive based on the bootstrap-colorpicker jQuery library.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Colorpicker",
                        link: "https://farbelous.github.io/bootstrap-colorpicker/",
                        description: "Simple and customizable colorpicker component for Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "React Bootstrap Datepicker",
                        link: "http://pushtell.github.io/react-bootstrap-date-picker/",
                        description: "React-Bootstrap based date picker.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "jQuery File Upload",
                        link: "https://blueimp.github.io/jQuery-File-Upload/",
                        description: "File upload widget with multiple file selection, drag & drop support, progress bars, validation and preview images, audio and video for jQuery.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap 3 Datepicker",
                        link: "http://eonasdan.github.io/bootstrap-datetimepicker/",
                        description: "Date/time picker widget based on Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Select",
                        link: "http://silviomoreto.github.io/bootstrap-select/",
                        description: "Bootstrap-select is a jQuery plugin that utilizes Bootstrap's dropdown.js to style and bring additional functionality to standard select elements.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Date Range Picker",
                        link: "http://www.daterangepicker.com/",
                        description: "Date range picker component for Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "jqBootstrapValidation",
                        link: "http://reactiveraven.github.io/jqBootstrapValidation/",
                        description: "A jQuery validation plugin for bootstrap forms.",
                        supports: "Bootstrap 2, Bootstrap 3"
                    }, {
                        name: "FormValidation",
                        link: "http://formvalidation.io/",
                        description: "Plugin to validate Bootstrap forms",
                        supports: "Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "Bootstrap Combobox",
                        link: "https://github.com/danielfarrell/bootstrap-combobox",
                        description: "A combobox plugin that works with Bootstrap.",
                        supports: "Bootstrap 2, Bootstrap 3"
                    }, {
                        name: "Bootstrap Floating Labels",
                        link: "http://headdetect.github.io/bootstrap-floating-labels",
                        description: "UX friendly floating form labels for Bootstrap 3",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Float Label",
                        link: "https://github.com/wgarrido/bootstrap-float-label",
                        description: "Floating labels with animation for Bootstrap",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Show Password",
                        link: "http://wenzhixin.net.cn/p/bootstrap-show-password",
                        description: "A simple, yet intuitive Bootstrap form plugin for giving users the option to see their password.",
                        supports: "Bootstrap 2, Bootstrap 3"
                    }, {
                        name: "Tokenfield for Bootstrap",
                        link: "http://sliptree.github.io/bootstrap-tokenfield/",
                        description: "Advanced tagging/tokenizing plugin for jQuery and Bootstrap with a focus on keyboard and copy-paste support.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Multiselect",
                        link: "http://davidstutz.github.io/bootstrap-multiselect/",
                        description: "A jQuery multiselect plugin based on Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Select Dropdown",
                        link: "https://thompsonsj.com/bootstrap-select-dropdown/",
                        description: "A jQuery plugin for Bootstrap 4 that converts select and multiselect elements to dropdowns.",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Bootstrap Toggle",
                        link: "http://www.bootstraptoggle.com/",
                        description: "Bootstrap Toggle is a highly flexible Bootstrap plugin that converts checkboxes into toggles",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Datepicker for Bootstrap",
                        link: "http://www.eyecon.ro/bootstrap-datepicker/",
                        description: "A plugin to add a datepicker to field or to any other element in Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap MaxLength",
                        link: "http://mimo84.github.io/bootstrap-maxlength/",
                        description: "A visual feedback indicator for the maxlength attribute.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Iconpicker",
                        link: "http://victor-valencia.github.io/bootstrap-iconpicker",
                        description: "A simple Bootstrap 3 based icon picker. Allows a user to pick an icon from a dropdown menu.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Tags",
                        link: "http://maxwells.github.io/bootstrap-tags.html",
                        description: "A jQuery plugin meant to extend Bootstrap to include tagging functionality.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Tag Autocomplete",
                        link: "http://sandglaz.github.io/bootstrap-tagautocomplete/",
                        description: "An @mention autocomplete plugin similar to the functionality seen on Facebook or Twitter.",
                        supports: "Bootstrap 2"
                    }, {
                        name: "Bootcomplete.js",
                        link: "http://getwebhelp.com/bootcomplete/",
                        description: "Lightweight AJAX autocomplete alternitive for Bootstrap 3",
                        supports: "Bootstrap 3"
                    }, {
                        name: "jQuery MiniColors",
                        link: "https://labs.abeautifulsite.net/jquery-minicolors/",
                        description: "A tiny color picker built on jQuery with Bootstrap 3 support.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Color Palette for Bootstrap",
                        link: "http://extremefe.github.io/bootstrap-colorpalette/",
                        description: "A color palette dropdown plugin for Bootstrap.",
                        supports: "Bootstrap 2, Bootstrap 3"
                    }, {
                        name: "Bootstrap Slider",
                        link: "http://seiyria.com/bootstrap-slider/",
                        description: "A Bootstrap slider component.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Year Calendar",
                        link: "http://www.bootstrap-year-calendar.com/",
                        description: "A fully customizable year calendar widget for Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "jQuery Spinner",
                        link: "https://vsn4ik.github.io/jquery.spinner/",
                        description: "A number-spinner based-on jQuery, supports keyboard operations and continuous changing.",
                        supports: "Bootstrap 3"
                    }]
                }, {
                    heading: "Table Plugins",
                    resources: [{
                        name: "Bootstrap Table",
                        link: "http://bootstrap-table.wenzhixin.net.cn/",
                        description: "An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features.",
                        supports: "Bootstrap 2, Bootstrap 3"
                    }, {
                        name: "DataTables for Bootstrap",
                        link: "https://datatables.net/examples/styling/bootstrap4.html",
                        description: "A extension of the DataTables jQuery plugin that integrates seamlessly with the Bootstrap 3 and 4 UI.",
                        supports: "Bootstrap 3, Bootstrap 4"
                    }, {
                        name: "WATable",
                        link: "http://wootapa-watable.appspot.com/",
                        description: "Filter, format, paginate and sort your data with ease and lightning speed",
                        supports: "Bootstrap 3"
                    }]
                }, {
                    heading: "Menu & Navigation Plugins",
                    resources: [{
                        name: "Bootstrap Navbar Dropdowns",
                        link: "http://fontenele.github.io/bootstrap-navbar-dropdowns/",
                        description: "Bootstrap 4 Navbar with multiple dropdowns.",
                        supports: "Bootstrap 4"
                    }, {
                        name: "Bootstrap Tree View",
                        link: "http://jonmiles.github.io/bootstrap-treeview/",
                        description: "Tree View for Bootstrap",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Context Menu",
                        link: "https://dgoguerra.github.io/bootstrap-menu/",
                        description: "A context menu plugin using Bootstrap's dropdown component.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootpag",
                        link: "http://botmonster.com/jquery-bootpag/",
                        description: "A dynamic pagination jQuery plugin that works well with Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Submenu",
                        link: "https://vsn4ik.github.io/bootstrap-submenu/",
                        description: "Extense the Bootstrap dropdown to add support for submenus.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Dropmenu",
                        link: "https://skywalkapps.github.io/bootstrap-dropmenu/",
                        description: "Dropmenu is a set of extensions, which enhances Bootstrap dropdown component.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Hierarchy Select",
                        link: "https://neofusion.github.io/hierarchy-select/",
                        description: "Dropmenu menus with live search and hierarchy.",
                        supports: "Bootstrap 3"
                    }]
                }, {
                    heading: "Notification Plugins",
                    resources: [{
                        name: "SweetAlert for Bootstrap",
                        link: "https://lipis.github.io/bootstrap-sweetalert/",
                        description: 'A beautiful replacement for JavaScript\'s "alert".',
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Confirmation",
                        link: "http://bootstrap-confirmation.js.org/",
                        description: "Bootstrap plugin for on-place confirm boxes using Popover",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Tour",
                        link: "http://bootstraptour.com/",
                        description: "The easiest way to show people how to use your website.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "PNotify",
                        link: "http://sciactive.github.io/pnotify/",
                        description: "Beautiful JavaScript notifications.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "jQuery Growl",
                        link: "http://projects.zoulcreations.com/jquery/jquery-growl/",
                        description: "A growl notifications plugin that works out of the box with the Bootstrap 3 framework.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Growl",
                        link: "https://github.com/ifightcrime/bootstrap-growl/",
                        description: 'A pretty simple jQuery plugin that turns standard Bootstrap alerts into "growl-like" notifications.',
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Notify",
                        link: "http://bootstrap-notify.remabledesigns.com/",
                        description: 'Turn standard Bootstrap alerts into "growl" like notifications.',
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Notifications",
                        link: "https://skywalkapps.github.io/bootstrap-notifications/",
                        description: "This component comes very handy when you want to quickly implement UI for notifications in your app.",
                        supports: "Bootstrap 3"
                    }]
                }, {
                    heading: "Modal Plugins",
                    resources: [{
                        name: "Bootbox.js",
                        link: "http://bootboxjs.com/",
                        description: "Bootstrap modals made easy.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Lightbox",
                        link: "https://jbutz.github.io/bootstrap-lightbox/",
                        description: "A simple lightbox plugin based on the bootstrap modal plugin.",
                        supports: "Bootstrap 2"
                    }, {
                        name: "Flippant.js",
                        link: "http://labs.mintchaos.com/flippant.js/",
                        description: "A mini js+css library for flipping things over.",
                        supports: "Bootstrap 2"
                    }]
                }, {
                    heading: "Button Plugins",
                    resources: [{
                        name: "Social Buttons for Bootstrap",
                        link: "https://lipis.github.io/bootstrap-social/",
                        description: "Social Sign-In Buttons made in pure CSS based on Bootstrap and Font Awesome!",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Ladda UI for Bootstrap 3",
                        link: "http://msurguy.github.io/ladda-bootstrap/",
                        description: "Great effect that puts the spinner directly inside a button to give your users immediate feedback after a click or form submit.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Checkbox",
                        link: "https://vsn4ik.github.io/bootstrap-checkbox/",
                        description: "A checkbox component based on Bootstrap buttons.",
                        supports: "Bootstrap 3"
                    }]
                }, {
                    heading: "Other Plugins",
                    resources: [{
                        name: "Summernote",
                        link: "https://summernote.org/",
                        description: "Super Simple WYSIWYG Editor on Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap WYSIWYG",
                        link: "http://mindmup.github.io/bootstrap-wysiwyg/",
                        description: "A tiny wysiwyg rich text editor for Bootstrap.",
                        supports: "Bootstrap 2"
                    }, {
                        name: "Bootstrap Markdown",
                        link: "http://www.codingdrama.com/bootstrap-markdown/",
                        description: "Markdown editing meet Bootstrap.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Milestones",
                        link: "http://jablon.me/bootstrap-milestones/",
                        description: "A Bootstrap plugin to create milestone lists.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Bootstrap Responsive Timeline",
                        link: "http://sanex3339.github.io/bootstrap-responsive-timeline/",
                        description: "A CSS based Bootstrap timeline.",
                        supports: "Bootstrap 3"
                    }, {
                        name: "Activity Feed for Bootstrap",
                        link: "https://skywalkapps.github.io/bootstrap-activity-feed/",
                        description: "Activity Feed displays user posts in Facebook-like style.",
                        supports: "Bootstrap 3"
                    }]
                }]
            }];
            var R = c(3164);
            const ne = function(t) {
                return {
                    active: t
                }
            };

            function Zt(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "li", 3)(1, "a", 4), e.NdJ("click", function() {
                        const s = e.CHM(o).$implicit,
                            g = e.oxw(4);
                        return e.KtG(g.menuItemSelected(s.title))
                    }), e._uU(2), e.qZA()()
                }
                if (2 & t) {
                    const o = r.$implicit,
                        n = e.oxw(3).ngIf,
                        i = e.oxw();
                    e.xp6(1), e.Q6J("ngClass", e.VKq(2, ne, (null == n[1] ? null : n[1].identifier) === i.paramCase(o.title))), e.xp6(1), e.Oqu(o.title)
                }
            }

            function wt(t, r) {
                if (1 & t && (e.TgZ(0, "ul", 6), e.YNc(1, Zt, 3, 4, "li", 2), e.qZA()), 2 & t) {
                    const o = e.oxw().$implicit;
                    e.xp6(1), e.Q6J("ngForOf", o.children)
                }
            }

            function yt(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "li", 3)(1, "a", 4), e.NdJ("click", function() {
                        const s = e.CHM(o).$implicit,
                            g = e.oxw(2);
                        return e.KtG(g.menuItemSelected(s.title))
                    }), e._uU(2), e.qZA(), e.YNc(3, wt, 2, 1, "ul", 5), e.qZA()
                }
                if (2 & t) {
                    const o = r.$implicit,
                        n = e.oxw().ngIf,
                        i = e.oxw();
                    e.xp6(1), e.Q6J("ngClass", e.VKq(3, ne, (null == n[0] ? null : n[0].identifier) === i.paramCase(o.title))), e.xp6(1), e.Oqu(o.title), e.xp6(1), e.Q6J("ngIf", o.children)
                }
            }

            function Tt(t, r) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "ul", 1), e.YNc(2, yt, 4, 5, "li", 2), e.qZA(), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(2), e.Q6J("ngForOf", o.sideNavItems)
                }
            }
            let At = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.scrollSpyService = o, this.router = n, this.route = i, this.utilityService = s, this.subscription = new w.w0, this.sideNavItems = [{
                            title: "Official Bootstrap Resources"
                        }, {
                            title: "Bootstrap Templates & Themes",
                            children: [{
                                title: "Premium Marketplaces"
                            }, {
                                title: "Premium Vendors"
                            }, {
                                title: "Free Templates & Themes"
                            }, {
                                title: "Bootstrap Showcases"
                            }]
                        }, {
                            title: "Bootstrap Integrations",
                            children: [{
                                title: "Javascript"
                            }, {
                                title: "Wordpress"
                            }]
                        }, {
                            title: "Bootstrap Development Tools",
                            children: [{
                                title: "Visual Builders"
                            }, {
                                title: "Other Tools"
                            }]
                        }, {
                            title: "Bootstrap Plugins",
                            children: [{
                                title: "Form Plugins"
                            }, {
                                title: "Table Plugins"
                            }, {
                                title: "Menu & Navigation Plugins"
                            }, {
                                title: "Notification Plugins"
                            }, {
                                title: "Modal Plugins"
                            }, {
                                title: "Button Plugins"
                            }, {
                                title: "Other Plugins"
                            }]
                        }], this.rescroll = !1
                    }
                    ngOnInit() {
                        this.scrollSpyService.reset()
                    }
                    ngAfterViewInit() {
                        this.subscription.add(this.route.fragment.subscribe(o => {
                            o && setTimeout(() => {
                                this.scrollToElement(o)
                            }, 100)
                        }))
                    }
                    scrollToElement(o) {
                        const n = this.utilityService.window.document.getElementById(o);
                        if (!n) throw new Error("FRAGMENT_NOT_FOUND");
                        const i = n.getBoundingClientRect().top;
                        let s = 0;
                        s = this.utilityService.window.innerWidth < 992 ? this.utilityService.window.pageYOffset - 95 : this.utilityService.window.pageYOffset - 92, this.utilityService.window.scrollTo({
                            top: i + s,
                            behavior: "smooth"
                        }), this.rescroll = !this.rescroll, this.rescroll && (console.log("RESCROLLING"), setTimeout(() => {
                            this.scrollToElement(o)
                        }, 100))
                    }
                    ngOnDestroy() {
                        this.subscription.unsubscribe()
                    }
                    paramCase(o) {
                        return o ? (0, R.o)(o) : "NO_IDENTIFIER"
                    }
                    menuItemSelected(o) {
                        this.router.navigate([], {
                            relativeTo: this.route,
                            fragment: (0, R.o)(o)
                        })
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(u.f_), e.Y36(d.F0), e.Y36(d.gz), e.Y36(u.tI))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-bootstrap-resources-side-nav"]
                        ],
                        decls: 2,
                        vars: 3,
                        consts: [
                            [4, "ngIf"],
                            [1, "resources-sidebar", "nav", "flex-column", "sticky-top", "mb-4"],
                            ["class", "nav-item", 4, "ngFor", "ngForOf"],
                            [1, "nav-item"],
                            [1, "nav-link", "pointer", 3, "ngClass", "click"],
                            ["class", "nav flex-column ms-3", 4, "ngIf"],
                            [1, "nav", "flex-column", "ms-3"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.YNc(0, Tt, 3, 1, "ng-container", 0), e.ALo(1, "async")), 2 & n && e.Q6J("ngIf", e.lcZ(1, 1, i.scrollSpyService.activeScrollSpyNavItems$))
                        },
                        dependencies: [a.mk, a.sg, a.O5, a.Ov],
                        styles: [".resources-sidebar[_ngcontent-%COMP%]{top:calc(93px + 1rem)}.resources-sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{margin:.25rem 0;padding:0 .5rem;color:#363d47;border-left:2px solid transparent;font-size:.85rem}.resources-sidebar[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#dc392d;border-left:2px solid #dc392d;font-weight:700}.resources-sidebar[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > .nav[_ngcontent-%COMP%]{display:none}.resources-sidebar[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%] > a.nav-link.active[_ngcontent-%COMP%] ~ .nav[_ngcontent-%COMP%]{display:flex}.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){background-color:#f2f6fc}"],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var Ut = c(2796);

            function xt(t, r) {
                if (1 & t && (e.TgZ(0, "h2", 5), e._uU(1), e.qZA()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Oqu(o.bootstrapResourcesSection.title)
                }
            }

            function qt(t, r) {
                if (1 & t && (e.TgZ(0, "p", 6), e._uU(1), e.qZA()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Oqu(o.bootstrapResourcesSection.subTitle)
                }
            }

            function kt(t, r) {
                1 & t && e._UZ(0, "hr")
            }

            function Ct(t, r) {
                if (1 & t && (e.TgZ(0, "h3", 5), e._uU(1), e.qZA()), 2 & t) {
                    const o = e.oxw().$implicit;
                    e.xp6(1), e.Oqu(o.heading)
                }
            }

            function St(t, r) {
                if (1 & t && (e.TgZ(0, "p", 6), e._uU(1), e.qZA()), 2 & t) {
                    const o = e.oxw().$implicit;
                    e.xp6(1), e.Oqu(o.subHeading)
                }
            }

            function Bt(t, r) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "div", 14), e._uU(2), e.qZA(), e.BQk()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(2), e.Oqu(o.trim())
                }
            }

            function It(t, r) {
                if (1 & t && (e.TgZ(0, "div", 13), e.YNc(1, Bt, 3, 1, "ng-container", 4), e.qZA()), 2 & t) {
                    const o = e.oxw().$implicit;
                    e.xp6(1), e.Q6J("ngForOf", o.supports.split(","))
                }
            }

            function Pt(t, r) {
                if (1 & t && (e.TgZ(0, "tr")(1, "td")(2, "a", 11), e._uU(3), e.qZA()(), e.TgZ(4, "td"), e._uU(5), e.YNc(6, It, 2, 1, "div", 12), e.qZA()()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(2), e.Q6J("href", o.link, e.LSH), e.xp6(1), e.Oqu(o.name), e.xp6(2), e.hij(" ", o.description, " "), e.xp6(1), e.Q6J("ngIf", o.supports)
                }
            }
            const Dt = function(t) {
                return {
                    "mb-5": t
                }
            };

            function Lt(t, r) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "div", 7), e.YNc(2, Ct, 2, 1, "h3", 1), e.YNc(3, St, 2, 1, "p", 2), e.TgZ(4, "div", 8)(5, "table", 9)(6, "thead")(7, "tr")(8, "th", 10), e._uU(9, "Name"), e.qZA(), e.TgZ(10, "th"), e._uU(11, "Description"), e.qZA()()(), e.TgZ(12, "tbody"), e.YNc(13, Pt, 7, 4, "tr", 4), e.qZA()()()(), e.BQk()), 2 & t) {
                    const o = r.$implicit,
                        n = r.last,
                        i = e.oxw();
                    e.xp6(1), e.Q6J("sbwScrollSpy", i.paramCase(o.heading || i.bootstrapResourcesSection.title))("parentItemIdentifier", i.paramCase(i.bootstrapResourcesSection.title)), e.xp6(1), e.Q6J("ngIf", o.heading), e.xp6(1), e.Q6J("ngIf", o.subHeading), e.xp6(1), e.Q6J("ngClass", e.VKq(6, Dt, n)), e.xp6(9), e.Q6J("ngForOf", o.resources)
                }
            }
            let Qt = (() => {
                class t {
                    constructor() {}
                    ngOnInit() {}
                    paramCase(o) {
                        return o ? (0, R.o)(o) : "NO_IDENTIFIER"
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-bootstrap-resources-section"]
                        ],
                        inputs: {
                            bootstrapResourcesSection: "bootstrapResourcesSection"
                        },
                        decls: 5,
                        vars: 5,
                        consts: [
                            ["level", "0", 1, "scroll-spy-container", 3, "sbwScrollSpy"],
                            ["class", "mb-0", 4, "ngIf"],
                            ["class", "lead mb-4", 4, "ngIf"],
                            [4, "ngIf"],
                            [4, "ngFor", "ngForOf"],
                            [1, "mb-0"],
                            [1, "lead", "mb-4"],
                            ["level", "1", 1, "scroll-spy-container", 3, "sbwScrollSpy", "parentItemIdentifier"],
                            [1, "table-responsive", 3, "ngClass"],
                            [1, "table", "table-bordered", "table-striped"],
                            [1, "resource-name"],
                            ["rel", "nofollow noreferrer", "target", "_blank", 3, "href"],
                            ["class", "mt-2", 4, "ngIf"],
                            [1, "mt-2"],
                            [1, "badge", "bg-secondary", "text-dark", "me-2"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "div", 0), e.YNc(1, xt, 2, 1, "h2", 1), e.YNc(2, qt, 2, 1, "p", 2), e.YNc(3, kt, 1, 0, "hr", 3), e.YNc(4, Lt, 14, 8, "ng-container", 4), e.qZA()), 2 & n && (e.Q6J("sbwScrollSpy", i.paramCase(i.bootstrapResourcesSection.title)), e.xp6(1), e.Q6J("ngIf", i.bootstrapResourcesSection.title), e.xp6(1), e.Q6J("ngIf", i.bootstrapResourcesSection.subTitle), e.xp6(1), e.Q6J("ngIf", i.bootstrapResourcesSection.titleSeparator), e.xp6(1), e.Q6J("ngForOf", i.bootstrapResourcesSection.subSections))
                        },
                        dependencies: [a.mk, a.sg, a.O5, Ut.j],
                        styles: [".scroll-spy-container[_ngcontent-%COMP%]{padding-top:12px}"],
                        changeDetection: 0
                    })
                }
                return t
            })();

            function Nt(t, r) {
                if (1 & t && (e.ynx(0), e._UZ(1, "sbw-bootstrap-resources-section", 14), e.BQk()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Q6J("bootstrapResourcesSection", o)
                }
            }
            let re = (() => {
                class t {
                    constructor() {
                        this.bootstrapResourcesSections = vt
                    }
                    ngOnInit() {}
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-bootstrap-resources"]
                        ],
                        decls: 18,
                        vars: 1,
                        consts: [
                            ["headerClasses", "bg-primary page-header-ui-dark", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "page-header-ui-content", "pb-4"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [1, "page-header-ui-title"],
                            [1, "page-header-ui-text", "mb-0"],
                            [1, "col-lg-4"],
                            ["adSense", "", 1, "carbon-container"],
                            ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "row"],
                            [1, "col-lg-3"],
                            [1, "col-lg-9"],
                            [4, "ngFor", "ngForOf"],
                            [3, "bootstrapResourcesSection"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "Bootstrap Resources"), e.qZA(), e.TgZ(7, "p", 6), e._uU(8, "A curated list of quality Bootstrap resources and Bootstrap plugins maintained by Start Bootstrap."), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "sbpro-page-section", 9)(12, "div", 2)(13, "div", 10)(14, "div", 11), e._UZ(15, "sbw-bootstrap-resources-side-nav"), e.qZA(), e.TgZ(16, "div", 12), e.YNc(17, Nt, 2, 1, "ng-container", 13), e.qZA()()()()), 2 & n && (e.xp6(17), e.Q6J("ngForOf", i.bootstrapResourcesSections))
                        },
                        dependencies: [a.sg, b.q, m.g, Z.Z, At, Qt],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var Y = c(6562),
                se = c(5085),
                Q = c(5108);

            function Jt(t, r) {
                if (1 & t && (e.TgZ(0, "a", 38), e._uU(1), e.qZA()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Oqu(o)
                }
            }
            const Ft = function() {
                return ["far", "long-arrow-right"]
            };

            function Mt(t, r) {
                if (1 & t && (e.TgZ(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28), e._UZ(4, "img", 29), e.ALo(5, "safe"), e.qZA(), e.TgZ(6, "div")(7, "div", 30)(8, "h2", 31)(9, "a", 32), e._uU(10), e.qZA()(), e.TgZ(11, "div", 33), e._uU(12), e.ALo(13, "date"), e.qZA(), e.TgZ(14, "div", 30), e.YNc(15, Jt, 2, 1, "a", 34), e.qZA()(), e._UZ(16, "sbw-markdown-html", 35), e.TgZ(17, "a", 36), e._uU(18, "Read more"), e._UZ(19, "fa-icon", 37), e.qZA()()()()()), 2 & t) {
                    const o = r.$implicit,
                        n = r.index;
                    e.xp6(4), e.Q6J("src", e.Dn7(5, 10, o.previewImage.medium, "resourceURL", "NONE"), e.LSH)("alt", o.previewImage.alt), e.xp6(5), e.Q6J("routerLink", "/guides/" + o.slug), e.xp6(1), e.Oqu(o.heading), e.xp6(2), e.Oqu(e.xi3(13, 14, o.publishedDate, "longDate")), e.xp6(3), e.Q6J("ngForOf", o.tags), e.xp6(1), e.Q6J("md", o.body), e.xp6(1), e.Q6J("routerLink", "/guides/" + o.slug), e.uIk("data-cy", "readMoreButton-" + n), e.xp6(2), e.Q6J("icon", e.DdM(17, Ft))
                }
            }

            function Ot(t, r) {
                if (1 & t && (e.TgZ(0, "div", 45), e._uU(1), e.qZA()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Oqu(o)
                }
            }

            function Et(t, r) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "a", 39)(2, "div", 40), e.YNc(3, Ot, 2, 1, "div", 41), e.qZA(), e.TgZ(4, "div", 42), e._uU(5), e.qZA(), e.TgZ(6, "div", 43), e._uU(7), e.qZA(), e.TgZ(8, "div", 44), e._uU(9), e.ALo(10, "date"), e.qZA()(), e.BQk()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Q6J("routerLink", "/blog/" + o.slug), e.xp6(2), e.Q6J("ngForOf", o.tags), e.xp6(2), e.Oqu(o.heading), e.xp6(2), e.Oqu(o.subHeading), e.xp6(2), e.Oqu(e.xi3(10, 5, o.publishedDate, "longDate"))
                }
            }
            const jt = function() {
                return ["fad", "books"]
            };
            let ae = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.blogService = o, this.route = n, this.changeDetectorRef = i, this.router = s, this.subscription = new w.w0, this.page = 1, this.pageSize = 5
                    }
                    ngOnInit() {
                        this.subscription.add((0, Y.a)([this.blogService.guidePreviews$, this.route.queryParams]).subscribe(([o, n]) => {
                            this.guidePreviews = o, this.page = n.page ? n.page : 1;
                            const i = this.pageSize * (this.page - 1);
                            this.guidePreviewsFiltered = o.slice(i, i + this.pageSize), this.changeDetectorRef.detectChanges()
                        })), this.subscription.add(this.blogService.newsPreviews$.subscribe(o => {
                            this.newsPreviews = o.slice(0, 2), this.changeDetectorRef.detectChanges()
                        }))
                    }
                    ngOnDestroy() {
                        this.subscription.unsubscribe()
                    }
                    pageChange(o) {
                        this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: {
                                page: o
                            },
                            queryParamsHandling: "merge"
                        })
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(se.Z), e.Y36(d.gz), e.Y36(e.sBO), e.Y36(d.F0))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-guides"]
                        ],
                        decls: 31,
                        vars: 7,
                        consts: [
                            ["headerClasses", "bg-green page-header-ui-dark", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "page-header-ui-content", "pb-4"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [1, "page-header-ui-title"],
                            [1, "page-header-ui-text", "mb-0"],
                            [1, "col-lg-4"],
                            ["adSense", "", 1, "carbon-container"],
                            [1, "bg-light", "py-4"],
                            [1, "row"],
                            ["data-cy", "guidesCards", 1, "col-lg-8", "mt-lg-n10"],
                            ["class", "card mb-5", 4, "ngFor", "ngForOf"],
                            ["aria-label", "Blog post navigation", 1, "d-flex", "justify-content-center", "mb-10"],
                            ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageSize", "pageChange"],
                            [1, "col-lg-4", "mt-lg-n5"],
                            [1, "card"],
                            [1, "card-header", "bg-primary"],
                            [1, "small", "text-white", "fw-500"],
                            [1, "me-1", 3, "icon"],
                            ["data-cy", "latestNewsSidebar", 1, "list-group", "list-group-flush", "small", "mb-0", "border-bottom"],
                            [4, "ngFor", "ngForOf"],
                            [1, "card-body"],
                            [1, "d-grid"],
                            ["routerLink", "/blog", 1, "btn", "btn-primary-soft", "text-primary", "fw-500"],
                            [1, "card", "mb-5"],
                            [1, "card-body", "p-5"],
                            [1, "d-flex", "align-items-center"],
                            [1, "flex-shrink-0", "d-none", "d-lg-block", "me-5"],
                            [1, "img-fluid", "blog-preview-img", 3, "src", "alt"],
                            [1, "mb-3"],
                            [1, "mb-0"],
                            [1, "text-green", 3, "routerLink"],
                            [1, "small", "text-muted", "mb-2"],
                            ["class", "badge bg-green-soft text-green text-green text-capitalize me-2", 4, "ngFor", "ngForOf"],
                            [3, "md"],
                            [1, "btn", "btn-green", 3, "routerLink"],
                            [1, "ms-1", 3, "icon"],
                            [1, "badge", "bg-green-soft", "text-green", "text-green", "text-capitalize", "me-2"],
                            [1, "list-group-item", "list-group-item-action", 3, "routerLink"],
                            [1, "mb-1"],
                            ["class", "badge bg-primary-soft text-primary text-capitalize me-2", 4, "ngFor", "ngForOf"],
                            [1, "fw-500"],
                            [1, "mb-2", "text-xs"],
                            [1, "text-xs", "text-muted"],
                            [1, "badge", "bg-primary-soft", "text-primary", "text-capitalize", "me-2"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "Bootstrap Guides"), e.qZA(), e.TgZ(7, "p", 6), e._uU(8, "These Bootstrap guides and Bootstrap tutorials can help learn more about using Bootstrap and other tools to create better web based projects!"), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "main", 9)(12, "div", 2)(13, "div", 10)(14, "div", 11), e.YNc(15, Mt, 20, 18, "div", 12), e.TgZ(16, "nav", 13)(17, "ngb-pagination", 14), e.NdJ("pageChange", function(g) {
                                return i.page = g
                            })("pageChange", function(g) {
                                return i.pageChange(g)
                            }), e.qZA()()(), e.TgZ(18, "div", 15)(19, "aside")(20, "div", 16)(21, "div", 17)(22, "div", 18), e._UZ(23, "fa-icon", 19), e._uU(24, "Latest News"), e.qZA()(), e.TgZ(25, "div", 20), e.YNc(26, Et, 11, 8, "ng-container", 21), e.qZA(), e.TgZ(27, "div", 22)(28, "div", 23)(29, "a", 24), e._uU(30, "View All News"), e.qZA()()()()()()()()()), 2 & n && (e.xp6(15), e.Q6J("ngForOf", i.guidePreviewsFiltered), e.xp6(2), e.Q6J("collectionSize", i.guidePreviews.length)("page", i.page)("pageSize", i.pageSize), e.xp6(6), e.Q6J("icon", e.DdM(6, jt)), e.xp6(3), e.Q6J("ngForOf", i.newsPreviews))
                        },
                        dependencies: [a.sg, d.rH, b.q, Q.k, Z.Z, v.BN, L.N9, a.uU, A.y],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var ce = c(2392);
            const Rt = ["productCards"];
            let pe = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.utilityService = o, this.navigationService = n, this.bannerService = i, this.toastService = s
                    }
                    ngOnInit() {}
                    browseThemes() {
                        const n = this.productCards.elementRef.nativeElement.getBoundingClientRect().top + this.utilityService.window.pageYOffset - this.navigationService.navHeight - this.bannerService.bannerHeight - 13;
                        this.utilityService.window.scrollTo({
                            top: n,
                            behavior: "smooth"
                        })
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(u.tI), e.Y36(ce.f5), e.Y36(u.QD), e.Y36(u.kl))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-home"]
                        ],
                        viewQuery: function(n, i) {
                            if (1 & n && e.Gf(Rt, 5), 2 & n) {
                                let s;
                                e.iGM(s = e.CRH()) && (i.productCards = s.first)
                            }
                        },
                        decls: 33,
                        vars: 0,
                        consts: [
                            ["headerClasses", "bg-light page-header-light", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "page-header-ui-content", "pt-10", "pb-5", "pb-lg-0", "z-1"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-lg-7"],
                            [1, "page-header-ui-title"],
                            [1, "text-primary"],
                            [1, "page-header-ui-text", "mb-4"],
                            ["routerLink", "/themes"],
                            ["routerLink", "/templates"],
                            ["routerLink", "/snippets"],
                            ["routerLink", "/guides"],
                            ["routerLink", "/shop"],
                            ["role", "button", 1, "btn", "btn-primary", "btn-lg", "shadow", "fw-500", 3, "click"],
                            [1, "col-lg-5", "d-none", "d-lg-block", "mb-n15"],
                            ["src", "assets/img/freepik/content-pana.svg", "alt", "", 1, "img-fluid"],
                            ["sectionClasses", "pt-15 pb-10 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            ["category", "ALL"],
                            ["productCards", ""]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "Bootstrap themes, templates, and UI tools to help you "), e.TgZ(7, "span", 6), e._uU(8, "start your next project!"), e.qZA()(), e.TgZ(9, "div", 7), e._uU(10, "Start Bootstrap creates free, open source, MIT license, Bootstrap "), e.TgZ(11, "a", 8), e._uU(12, "themes"), e.qZA(), e._uU(13, ", "), e.TgZ(14, "a", 9), e._uU(15, "templates"), e.qZA(), e._uU(16, ", and "), e.TgZ(17, "a", 10), e._uU(18, "code snippets"), e.qZA(), e._uU(19, " for you to use on any project, "), e.TgZ(20, "a", 11), e._uU(21, "guides"), e.qZA(), e._uU(22, " to help you learn more about designing and developing with the Bootstrap framework, and "), e.TgZ(23, "a", 12), e._uU(24, "premium Bootstrap UI products"), e.qZA(), e._uU(25, "."), e.qZA(), e.TgZ(26, "button", 13), e.NdJ("click", function() {
                                return i.browseThemes()
                            }), e._uU(27, "Browse Templates & Themes"), e.qZA()(), e.TgZ(28, "div", 14), e._UZ(29, "img", 15), e.qZA()()()()(), e.TgZ(30, "sbpro-page-section", 16), e._UZ(31, "sbw-product-cards", 17, 18), e.qZA())
                        },
                        dependencies: [d.rH, b.q, m.g, j],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var Yt = c(2206);
            const Gt = {
                free: {
                    key: "free",
                    displayName: "Free Product FAQs",
                    categories: [{
                        displayName: "Licensing",
                        description: "Frequently asked questions regarding licensing",
                        sections: [{
                            displayName: "Licensing of Free Products on Start Bootstrap",
                            description: "Questions about the MIT License and how to properly use our free products",
                            faqs: [{
                                question: "When using a free theme or template, do I have to give Start Bootstrap credit on my page?",
                                answer: "No. When using any of our free products, you do not need to give Start Bootstrap on your page.\nTo remain compliant with the MIT License, simply keep the links to the MIT License within the\ncode of the product. These links are already in the custom CSS and JS files of each item, so you\ndo not need to add anything.\n"
                            }, {
                                question: "Can I use a free theme or template for commercial purposes?",
                                answer: "Yes. This is one of the main reasons we chose the MIT License for our free products.\nWe believe our free products should be a free and open resource that developers\ncanuse for commercial purposes without having to credit the creators visibly on the page.\n"
                            }, {
                                question: "What is the MIT License and how do I use it properly?",
                                answer: "The MIT License is a permissive, open source software license that originated at the\nMassachusetts Institute of Technology (MIT). If you are using one of the free items on\nStart Bootstrap, you will notice that the CSS and JS files will have a section of code\ncommented out at the top of the document with information about the theme and a link to\nthe MIT License. All you need to do is keep those links there. There is no need to add\nlinks to Start Bootstrap or the MIT License anywhere visibly on your page.\n"
                            }]
                        }, {
                            displayName: "Other Information about Free Products on Start Bootstrap",
                            description: "General information about the free products on our website.",
                            faqs: [{
                                question: "How can I access past versions of a theme or template?",
                                answer: "If you are interested in using a past version of one of the free themes or templates,\nyou can access them on GitHub. All of our free themes and templates are listed on GitHub at\n**<https://github.com/StartBootstrap>**. Once you have accessed the repository of the item you\u2019re\nusing, you can look at previous releases by clicking on the \u2018tags\u2019 button to the right of the\nbranch selection dropdown.\n"
                            }]
                        }]
                    }]
                },
                pro: {
                    key: "pro",
                    displayName: "Pro FAQs",
                    categories: [{
                        displayName: "Licensing",
                        description: "Frequently asked questions regarding licensing",
                        sections: [{
                            displayName: "Licensing Questions (Pro Products)",
                            description: "Questions about the licenses we offer for our paid, pro products",
                            faqs: [{
                                question: "Which license should I purchase for my project?",
                                answer: "Visit our **[licenses page](https://startbootstrap.com/licenses)**\nto read the full details on each type of license that we offer. If you are still unsure,\nread through the *Helpful Examples* section on the licenses page, or contact us at\n<support@startbootstrap.com>.\n"
                            }, {
                                question: "Can I use a pro theme for commercial purposes?",
                                answer: "Yes. When you purchase a pro theme from us, you can use the theme for commercial purposes.\nYou can see more about what you can and cannot do with a pro license on our\n**[licensing page](https://startbootstrap.com/licenses)**.\n"
                            }, {
                                question: "I purchased a standard or extended license of a product in the past. What license do I currently have?",
                                answer: "If you purchased a Standard License before November 1, 2020, then your Standard License has\nbeen automatically updated to become what is now the Developer License.\n\nIf you purchased an Extended License before November 1, 2020, then your Extended License has\nbeen automatically updated to become what is now the Startup License.\n\nIf you have any questions about the new license tiers and how they relate to a previous\npurchase made on Start Bootstrap, please let us know at <support@startbootstrap.com>.\n"
                            }]
                        }, {
                            displayName: "Order & Download Issues",
                            description: "Issues related to past orders, downloading, and accessing products",
                            faqs: [{
                                question: "How can I download a copy of my invoice?",
                                answer: "If you need a digital copy of your invoice, login to your Start Bootstrap account\nand click on *Invoices* from the sidebar menu on the account page. Select the\n*Print* option from the order you need an invoice for. After that, choose\n*Save as PDF* from your browsers print dialog.\n"
                            }, {
                                question: "I made a purchase as a guest and need to link it to a new account.",
                                answer: "After creating an account, login and click on *Orders* from the sidebar menu on the account page.\nFrom the orders page, scroll down to the section that says *Link Past Order* and enter your Order ID.\nYou can find your Order ID from your purchase receipt that was emailed to you when you bought your pro product.\n\nIf you can\u2019t find your Order ID, please contact us at <support@startbootstrap.com> with the\nemail address you used to make your purchase and we will send you your Order ID.\n"
                            }, {
                                question: "Can I re-download a purchase I previously made?",
                                answer: "Yes! Login to your Start Bootstrap account and click on *Downloads* from the\nsidebar menu on the account page. From there you should see your past purchases\nthat are available to download.\n\nIf you did not make an account when you purchased your product, and you need\nto re-download your product, you will need to create a new account and link\nyour order to the account. See the above item for more details.\n\nIf you made your purchase before November 1, 2020, and can't re-access your\nStart Bootstrap account, please contact Start Bootstrap support at\n<support@startbootstrap.com> with your past order number so we can set you up\nwith an account on our new database.\n\n"
                            }]
                        }, {
                            displayName: "Billing Issues",
                            description: "Issues related to billing and making purchases",
                            faqs: [{
                                question: "What is your refund policy?",
                                answer: "Due to the nature of digital products, we do not refund orders after they have\nbeen downloaded since there is no way to verify that a refunded item has been fully\ndeleted off of a users system.\n\nIf you are considering purchasing a product, we provide comprehensive live previews,\nfull documentation and usage instructions, product descriptions, and code examples\nto ensure that customers know exactly what they are purchasing before they buy.\n\nDue to the amount of public information given about our products before purchase, misunderstanding\nthe product or inability to use the project based on limitations in development\nknowledge and/or expertise does not make one eligible for a refund.\n\nPlease contact us at <support@startbootstrap.com> for answers to any questions you may\nhave about our products before making a purchase.\n\nIf you have made an order by mistake, and have not downloaded the purchased product already,\nyou can contact us using the email address above to request a refund.\n"
                            }, {
                                question: "My order is pending after I submitted my payment details.",
                                answer: "If your order is still pending after submitting your payment details, please\ncheck to see if you have a text message or email from your bank asking you to\nverify the purchase. Once verified, go to your account page and you should see\nyour order and download information. Otherwise, contact support at\n<support@startbootstrap.com> for assistance.\n"
                            }, {
                                question: "Why did my order fail?",
                                answer: "There are a number of reasons your order could fail. Try re-entering your\ncredit card information, try a new credit card, or choose a different payment\nmethod. Orders fail due to incorrect information being entered, banks declining\nthe transaction, and insufficient funds, among other reasons.\n"
                            }]
                        }, {
                            displayName: "Support Issues",
                            description: "Questions related to receiving support for your purchase",
                            faqs: [{
                                question: "What support is provided after purchasing pro products?",
                                answer: "When purchasing a pro product from Start Bootstrap, you will receive email\nsupport from the developers of the products. The support that we offer\nincludes bug fixes and answers to questions about how the product is built\nand functions. We also provide full documentation with all of our pro products\nwhich has detailed usage instructions and answers to commonly asked questions\nspecific to the product.\n\nWe do not provide support related to integration with frameworks or other issues that arise when\ncustomizing your product past the scope of what is outlined in the documentation.\n"
                            }, {
                                question: "What frameworks do your pro products integrate with?",
                                answer: "Our HTML-based pro products are framework agnostic, and can be integrated into\nany framework or development stack dependent on the expertise of the developer(s) who have\npurchased the product. This includes, but is not limited to: Angular, ASP.NET MVC 5, Django,\nLaravel, React, Ruby on Rails, Vue.js, and all other development frameworks.\n\nSome of our products are already built to integrate with a specific framework out-of-the-box.\nFor example, our SB Admin Pro Angular product has already been integrated with the Angular front-end framework.\nOur framework-specific products are fully integrated, and you can learn more about how to work with\nthese products in the documentation for the product you've purchased. We do not recommend purchasing\na framework-specific product if you are unfamiliar with the framework that is being used.\n"
                            }]
                        }]
                    }]
                },
                general: {
                    key: "general",
                    displayName: "General FAQs",
                    categories: [{
                        displayName: "Account",
                        description: "Frequently asked questions regarding your Start Bootstrap account",
                        sections: [{
                            displayName: "Authentication Issues",
                            description: "Issues related to logging in, registering a new account, and setting your account password",
                            faqs: [{
                                question: "How can I reset my password?",
                                answer: "Visit our login page at **<https://startbootstrap.com/auth/login>** and then complete the following steps:\n\n1. Click on ***Forgot your passoword?*** right below the password input field.\n2. On the next page that says ***Reset Your Password*** enter your email address and\n   then click the ***Send Password Reset Link*** button. If an account is associated\n   with the email address you entered, you will receive an email with instructions\n   on how to reset your password.\n"
                            }, {
                                question: "What do I do if I cannot remember my email?",
                                answer: "If you are unable to remember your email address associated with your account,\ncontact Start Bootstrap support at <support@startbootstrap.com> with an order ID\nfrom a past purchase and we can help you retreive your account information.\n"
                            }]
                        }, {
                            displayName: "Website & Content Questions",
                            description: "Issues related to the Start Bootstrap website and content on Start Bootstrap",
                            faqs: [{
                                question: "Do you have an affiliate program?",
                                answer: "We are currently working on implementing our affiliate program. If you\u2019re interested\nin becoming a Start Bootstrap affiliate, contact us at <support@startbootstrap.com>\nand we will be happy to provide you with more details.\n"
                            }, {
                                question: "Do you accept guest posts to the Start Bootstrap Blog?",
                                answer: "At the moment, all of our blog posts and guides are written in-house. If you have a\nproposal for us regarding guest submissions to our blog and guides, please provide\nus with examples of your past work, and a list of topics that you are knowledgeable\nabout that are also relevant to the content on Start Bootstrap. You can reach us at\n<support@startbootstrap.com>.\n"
                            }, {
                                question: "Does Start Bootstrap offer custom design and development services?",
                                answer: "If you have a specific project in mind, we do take custom development contracts into consideration\nif they are the right fit for our organization. Email us at <support@startbootstrap.com>\nif you have any questions regarding custom design or application development.\n"
                            }]
                        }]
                    }]
                }
            };
            var Ht = c(3621);

            function Vt(t, r) {
                1 & t && (e.TgZ(0, "h1"), e._uU(1, "Knowledge Base"), e.qZA())
            }

            function zt(t, r) {
                if (1 & t && (e.TgZ(0, "h1"), e._uU(1), e.qZA()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Oqu(o.grouping.displayName)
                }
            }

            function Wt(t, r) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "sbpro-card-accordion-faq", 26)(2, "div", 27), e._uU(3), e.qZA(), e.TgZ(4, "div", 28), e._uU(5), e.qZA()(), e.BQk()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Q6J("faqs", o.faqs)("header", !0), e.xp6(2), e.Oqu(o.displayName), e.xp6(2), e.Oqu(o.description)
                }
            }

            function Xt(t, r) {
                if (1 & t && (e.ynx(0), e.YNc(1, Wt, 6, 4, "ng-container", 25), e.BQk()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Q6J("ngForOf", o.sections)
                }
            }

            function Kt(t, r) {
                if (1 & t && (e.TgZ(0, "div", 24), e.YNc(1, Xt, 2, 1, "ng-container", 25), e.qZA()), 2 & t) {
                    const o = e.oxw();
                    e.Q6J("@fadeInOut", void 0), e.xp6(1), e.Q6J("ngForOf", o.grouping.categories)
                }
            }
            const $t = function() {
                    return ["fad", "gifts"]
                },
                eo = function() {
                    return ["fad", "file-certificate"]
                },
                to = function() {
                    return ["fad", "question"]
                };
            let G = (() => {
                class t {
                    constructor(o, n) {
                        this.route = o, this.changeDetectorRef = n, this.subscription = new w.w0, this.faqData = Gt
                    }
                    ngOnInit() {
                        this.freeEntries = this._countEntries(this.faqData.free.categories), this.proEntries = this._countEntries(this.faqData.pro.categories), this.generalEntries = this._countEntries(this.faqData.general.categories), this.subscription.add(this.route.params.subscribe(o => {
                            this.grouping = void 0;
                            const n = o.grouping;
                            n && this._isValidGrouping(n) && (this.grouping = this.faqData[n]), this.changeDetectorRef.detectChanges()
                        }))
                    }
                    ngOnDestroy() {
                        this.subscription.unsubscribe()
                    }
                    _countEntries(o) {
                        let n = 0;
                        return o.forEach(i => {
                            i.sections.forEach(s => {
                                n += s.faqs.length
                            })
                        }), n
                    }
                    _isValidGrouping(o) {
                        return !!["free", "pro", "general"].find(i => i === o)
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(d.gz), e.Y36(e.sBO))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-knowledge-base"]
                        ],
                        decls: 51,
                        vars: 12,
                        consts: [
                            ["sectionClasses", "mt-page-header pb-10 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "container", "pt-5"],
                            [1, "d-flex", "align-items-center"],
                            ["src", "assets/img/freepik/idea-pana.svg", "alt", "", 1, "d-none", "d-sm-block", 2, "height", "4rem"],
                            [1, "ms-sm-3"],
                            [4, "ngIf"],
                            [1, "lead", "mb-0"],
                            [1, "my-5"],
                            [1, "container"],
                            ["class", "mb-5", 4, "ngIf"],
                            [1, "row", "text-center"],
                            [1, "col-lg-4", "mb-5", "mb-lg-0"],
                            ["routerLink", "/knowledge-base/free", 1, "card", "card-link", "border-top-lg", "border-top-primary", "h-100", "lift"],
                            [1, "card-body", "p-5"],
                            [1, "icon-stack", "icon-stack-lg", "bg-primary-soft", "text-primary", "mb-4"],
                            [3, "icon"],
                            [1, "card-text"],
                            [1, "card-footer", "bg-transparent", "pt-0", "pb-5", "border-top-0"],
                            [1, "badge", "rounded-pill", "bg-light", "text-dark", "fw-normal", "px-3", "py-2"],
                            ["routerLink", "/knowledge-base/pro", 1, "card", "card-link", "border-top-lg", "border-top-green", "h-100", "lift"],
                            [1, "icon-stack", "icon-stack-lg", "bg-green-soft", "text-green", "mb-4"],
                            [1, "col-lg-4"],
                            ["routerLink", "/knowledge-base/general", 1, "card", "card-link", "border-top-lg", "border-top-yellow", "h-100", "lift"],
                            [1, "icon-stack", "icon-stack-lg", "bg-yellow-soft", "text-yellow", "mb-4"],
                            [1, "mb-5"],
                            [4, "ngFor", "ngForOf"],
                            [3, "faqs", "header"],
                            [1, "header-title"],
                            [1, "header-subtitle"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-section", 0)(1, "header")(2, "div", 1)(3, "div", 2), e._UZ(4, "img", 3), e.TgZ(5, "div", 4), e.YNc(6, Vt, 2, 0, "h1", 5), e.YNc(7, zt, 2, 1, "h1", 5), e.TgZ(8, "p", 6), e._uU(9, "Last updated: August 2020"), e.qZA()()(), e._UZ(10, "hr", 7), e.qZA()(), e.TgZ(11, "main")(12, "div", 8), e.YNc(13, Kt, 2, 2, "div", 9), e.TgZ(14, "div", 10)(15, "div", 11)(16, "a", 12)(17, "div", 13)(18, "div", 14), e._UZ(19, "fa-icon", 15), e.qZA(), e.TgZ(20, "h6"), e._uU(21, "Free"), e.qZA(), e.TgZ(22, "p", 16), e._uU(23, "I have questions about the free themes, templates, and snippets on Start Bootstrap."), e.qZA()(), e.TgZ(24, "div", 17)(25, "div", 18), e._uU(26), e.qZA()()()(), e.TgZ(27, "div", 11)(28, "a", 19)(29, "div", 13)(30, "div", 20), e._UZ(31, "fa-icon", 15), e.qZA(), e.TgZ(32, "h6"), e._uU(33, "Pro"), e.qZA(), e.TgZ(34, "p", 16), e._uU(35, "I have questions about a product that I purchased from Start Bootstrap or a product I am thinking about purchasing."), e.qZA()(), e.TgZ(36, "div", 17)(37, "div", 18), e._uU(38), e.qZA()()()(), e.TgZ(39, "div", 21)(40, "a", 22)(41, "div", 13)(42, "div", 23), e._UZ(43, "fa-icon", 15), e.qZA(), e.TgZ(44, "h6"), e._uU(45, "General"), e.qZA(), e.TgZ(46, "p", 16), e._uU(47, "I have a question about my Start Bootstrap account, the Start Bootstrap website, or something else."), e.qZA()(), e.TgZ(48, "div", 17)(49, "div", 18), e._uU(50), e.qZA()()()()()()()()), 2 & n && (e.xp6(6), e.Q6J("ngIf", !i.grouping), e.xp6(1), e.Q6J("ngIf", i.grouping), e.xp6(6), e.Q6J("ngIf", i.grouping), e.xp6(6), e.Q6J("icon", e.DdM(9, $t)), e.xp6(7), e.hij("", i.freeEntries, " Entries"), e.xp6(5), e.Q6J("icon", e.DdM(10, eo)), e.xp6(7), e.hij("", i.proEntries, " Entries"), e.xp6(5), e.Q6J("icon", e.DdM(11, to)), e.xp6(7), e.hij("", i.generalEntries, " Entries"))
                        },
                        dependencies: [a.sg, a.O5, d.rH, Ht.Y, m.g, v.BN],
                        data: {
                            animation: [Yt.Ae]
                        },
                        changeDetection: 0
                    })
                }
                return t
            })();
            var H = c(7685);
            const oo = ["modalContent"];

            function io(t, r) {
                1 & t && (e.TgZ(0, "span"), e._uU(1, "View Product Details"), e.qZA())
            }

            function no(t, r) {
                1 & t && (e.TgZ(0, "span"), e._uU(1, "Overview Page"), e.qZA())
            }
            const ro = function() {
                return ["fal", "arrow-left"]
            };

            function so(t, r) {
                if (1 & t && (e.TgZ(0, "a", 21), e._UZ(1, "fa-icon", 22), e.YNc(2, io, 2, 0, "span", 23), e.YNc(3, no, 2, 0, "span", 23), e.qZA()), 2 & t) {
                    const o = e.oxw(3);
                    e.Q6J("routerLink", o.productDetailsLink), e.xp6(1), e.Q6J("icon", e.DdM(4, ro)), e.xp6(1), e.Q6J("ngIf", !o.product.free), e.xp6(1), e.Q6J("ngIf", o.product.free)
                }
            }
            const ao = function() {
                return ["fad", "shopping-cart"]
            };

            function co(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "button", 24), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw(3);
                        return e.KtG(i.buyNow())
                    }), e._UZ(1, "fa-icon", 25), e._uU(2, "Buy Now"), e.qZA()
                }
                2 & t && (e.xp6(1), e.Q6J("icon", e.DdM(1, ao)))
            }
            const po = function() {
                return ["fab", "github"]
            };

            function lo(t, r) {
                if (1 & t && (e.TgZ(0, "a", 26), e._UZ(1, "fa-icon", 27), e.qZA()), 2 & t) {
                    const o = e.oxw(3);
                    e.Q6J("href", "https://github.com/StartBootstrap/startbootstrap-" + o.product.slug, e.LSH), e.xp6(1), e.Q6J("icon", e.DdM(2, po))
                }
            }
            const uo = function() {
                return ["fad", "download"]
            };

            function go(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "a", 28), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw(3);
                        return e.KtG(i.download())
                    }), e._UZ(1, "fa-icon", 25), e._uU(2, "Free Download"), e.qZA()
                }
                if (2 & t) {
                    const o = e.oxw(3);
                    e.Q6J("href", "https://github.com/StartBootstrap/startbootstrap-" + o.product.slug + "/archive/gh-pages.zip", e.LSH), e.xp6(1), e.Q6J("icon", e.DdM(2, uo))
                }
            }
            const V = function(t) {
                    return {
                        active: t
                    }
                },
                mo = function() {
                    return ["fal", "desktop"]
                },
                ho = function() {
                    return ["fal", "tablet"]
                },
                fo = function() {
                    return ["fal", "mobile"]
                },
                _o = function() {
                    return ["fal", "times"]
                };

            function bo(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8), e.YNc(4, so, 4, 5, "a", 9), e.qZA(), e.TgZ(5, "div", 10)(6, "div", 11)(7, "button", 12), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw(2);
                        return e.KtG(i.previewMode = "desktop")
                    }), e._UZ(8, "fa-icon", 13), e.qZA(), e.TgZ(9, "button", 14), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw(2);
                        return e.KtG(i.previewMode = "tablet")
                    }), e._UZ(10, "fa-icon", 13), e.qZA(), e.TgZ(11, "button", 15), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw(2);
                        return e.KtG(i.previewMode = "mobile")
                    }), e._UZ(12, "fa-icon", 13), e.qZA()()(), e.TgZ(13, "div", 16), e.YNc(14, co, 3, 2, "button", 17), e.YNc(15, lo, 2, 3, "a", 18), e.YNc(16, go, 3, 3, "a", 19), e.TgZ(17, "button", 20), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw(2);
                        return e.KtG(i.previewBarVisible = !1)
                    }), e._UZ(18, "fa-icon", 13), e.qZA()()()()()
                }
                if (2 & t) {
                    const o = e.oxw(2);
                    e.xp6(4), e.Q6J("ngIf", !o.campaign), e.xp6(3), e.Q6J("ngClass", e.VKq(11, V, "desktop" === o.previewMode)), e.xp6(1), e.Q6J("icon", e.DdM(13, mo)), e.xp6(1), e.Q6J("ngClass", e.VKq(14, V, "tablet" === o.previewMode)), e.xp6(1), e.Q6J("icon", e.DdM(16, ho)), e.xp6(1), e.Q6J("ngClass", e.VKq(17, V, "mobile" === o.previewMode)), e.xp6(1), e.Q6J("icon", e.DdM(19, fo)), e.xp6(2), e.Q6J("ngIf", !o.product.free), e.xp6(1), e.Q6J("ngIf", o.product.free), e.xp6(1), e.Q6J("ngIf", o.product.free), e.xp6(2), e.Q6J("icon", e.DdM(20, _o))
                }
            }
            const vo = function(t, r, o) {
                return {
                    "iframe-preview-mobile": t,
                    "iframe-preview-tablet": r,
                    "iframe-preview-full": o
                }
            };

            function Zo(t, r) {
                if (1 & t && (e.TgZ(0, "div", 2), e.YNc(1, bo, 19, 21, "div", 3), e._UZ(2, "iframe", 4), e.ALo(3, "safe"), e.qZA()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", o.previewBarVisible), e.xp6(1), e.Q6J("src", e.Dn7(3, 3, o.product.livePreviewLink, "resourceURL", "NONE"), e.uOi)("ngClass", e.kEZ(7, vo, "mobile" === o.previewMode, "tablet" === o.previewMode, !o.previewBarVisible))
                }
            }

            function wo(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 29)(1, "div", 30), e._uU(2, "Select your license"), e.qZA(), e.TgZ(3, "p", 31), e._uU(4, "From freelancers to startups to enterprise level teams, we have you covered!"), e.qZA()(), e.TgZ(5, "sbw-license-table", 32), e.NdJ("buyNow", function() {
                        const s = e.CHM(o).$implicit;
                        return e.KtG(s.dismiss())
                    }), e.qZA()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(5), e.Q6J("product", o.product)("negativeMargin", !1)
                }
            }
            let le = (() => {
                    class t {
                        constructor(o, n, i, s, g, P, Un, xn) {
                            this.route = o, this.productsService = n, this.changeDetectorRef = i, this.router = s, this.analyticsService = g, this.generalService = P, this.toastService = Un, this.modalService = xn, this.subscription = new w.w0, this.previewMode = "desktop", this.selectedLicense = J.LicenseType.freelancer, this.hasFreelancer = !1, this.licenseText = {
                                freelancer: "Freelancer License",
                                developer: "Developer License",
                                startup: "Startup License",
                                enterprise: "Enterprise License"
                            }, this.previewBarVisible = !0, this.hasSeenPromo = !1, this.campaign = !1
                        }
                        ngOnInit() {
                            this.subscription.add((0, Y.a)([this.route.paramMap, this.route.queryParamMap, this.productsService.products$]).subscribe(([o, n, i]) => {
                                console.log(n), n.has("campaign") && (this.campaign = !0);
                                const s = o.get("previewID"),
                                    g = i.find(P => P.slug === s);
                                if (!g) return this.router.navigate(["/error/404"]);
                                if (this.productDetailsLink = `/${g.productType.toLowerCase()}/${g.slug}`, this.product = g, this.product.pricingsMapped.freelancer ? this.hasFreelancer = !0 : this.selectedLicense = J.LicenseType.developer, this.changeDetectorRef.detectChanges(), !this.hasSeenPromo && !this.product.free) {
                                    this.hasSeenPromo = !0;
                                    const P = 25e3;
                                    setTimeout(() => {
                                        this.toastService.show(null, "Save10PopUp", {
                                            autohide: !1,
                                            closeOnClick: !1,
                                            classes: "toast-coupon",
                                            promoCategory: `preview_${this.product.slug}`,
                                            promoDelay: P
                                        })
                                    }, P)
                                }
                            }))
                        }
                        ngOnDestroy() {
                            this.subscription.unsubscribe()
                        }
                        changeLicense(o) {
                            this.selectedLicense = o, this.changeDetectorRef.detectChanges()
                        }
                        buyNow() {
                            this.modalService.open(this.modalContent, {
                                size: "xl"
                            })
                        }
                        download() {
                            this.analyticsService.sendEventCustom("download", "FREE_DOWNLOAD", this.product.slug), this.generalService.downloaded$(this.product.id).subscribe()
                        }
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)(e.Y36(d.gz), e.Y36(D.su), e.Y36(e.sBO), e.Y36(d.F0), e.Y36(u.yD), e.Y36(u.mV), e.Y36(u.kl), e.Y36(L.FF))
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-preview"]
                            ],
                            viewQuery: function(n, i) {
                                if (1 & n && e.Gf(oo, 5, e.Rgc), 2 & n) {
                                    let s;
                                    e.iGM(s = e.CRH()) && (i.modalContent = s.first)
                                }
                            },
                            decls: 3,
                            vars: 1,
                            consts: [
                                ["class", "preview-container", 4, "ngIf"],
                                ["modalContent", ""],
                                [1, "preview-container"],
                                ["class", "preview-bar bg-white fixed-top py-2 border-bottom-primary", 4, "ngIf"],
                                ["width", "100%", 1, "iframe-preview", 3, "src", "ngClass"],
                                [1, "preview-bar", "bg-white", "fixed-top", "py-2", "border-bottom-primary"],
                                [1, "container-fluid", "h-100"],
                                [1, "row", "align-items-center", "justify-content-between", "h-100"],
                                [1, "col-auto", "col-lg"],
                                ["class", "btn btn-transparent-dark btn-sm", 3, "routerLink", 4, "ngIf"],
                                [1, "col", "col-auto", "d-none", "d-xl-block"],
                                [1, "responsive-toggler", "justify-content-center"],
                                ["id", "desktopToggle", "placement", "bottom", "ngbTooltip", "Desktop Preview", 1, "btn", "btn-icon", "btn-transparent-dark", "mx-1", 3, "ngClass", "click"],
                                [3, "icon"],
                                ["id", "tabletToggle", "placement", "bottom", "ngbTooltip", "Tablet Preview", 1, "btn", "btn-icon", "btn-transparent-dark", "mx-1", 3, "ngClass", "click"],
                                ["id", "mobileToggle", "placement", "bottom", "ngbTooltip", "Mobile Preview", 1, "btn", "btn-icon", "btn-transparent-dark", "mx-1", 3, "ngClass", "click"],
                                [1, "col", "text-end"],
                                ["class", "btn btn-primary btn-sm fw-500 me-2", 3, "click", 4, "ngIf"],
                                ["class", "btn btn-transparent-dark btn-sm me-2", 3, "href", 4, "ngIf"],
                                ["class", "btn btn-primary-soft text-primary btn-sm d-none d-sm-inline-block me-2", 3, "href", "click", 4, "ngIf"],
                                [1, "btn", "btn-transparent-dark", "btn-sm", "btn-icon", 3, "click"],
                                [1, "btn", "btn-transparent-dark", "btn-sm", 3, "routerLink"],
                                ["size", "sm", 1, "me-1", 3, "icon"],
                                [4, "ngIf"],
                                [1, "btn", "btn-primary", "btn-sm", "fw-500", "me-2", 3, "click"],
                                [1, "me-1", 3, "icon"],
                                [1, "btn", "btn-transparent-dark", "btn-sm", "me-2", 3, "href"],
                                [1, "text-github", 3, "icon"],
                                [1, "btn", "btn-primary-soft", "text-primary", "btn-sm", "d-none", "d-sm-inline-block", "me-2", 3, "href", "click"],
                                [1, "text-center", "p-4"],
                                [1, "h1", "mb-0"],
                                [1, "lead", "mb-0"],
                                [1, "mb-4", 3, "product", "negativeMargin", "buyNow"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.YNc(0, Zo, 4, 11, "div", 0), e.YNc(1, wo, 6, 2, "ng-template", null, 1, e.W1O)), 2 & n && e.Q6J("ngIf", i.product)
                            },
                            dependencies: [a.mk, a.O5, d.rH, H.s, v.BN, L._L, A.y],
                            styles: [".preview-container[_ngcontent-%COMP%]{height:100vh;background-color:#212832}.preview-bar[_ngcontent-%COMP%]{height:63px}.preview-bar[_ngcontent-%COMP%]   .responsive-toggler[_ngcontent-%COMP%]{display:flex}.preview-bar[_ngcontent-%COMP%]   .responsive-toggler.active[_ngcontent-%COMP%]{color:#dc392d}.dropdown-licenses[_ngcontent-%COMP%]{display:inline-block}.dropdown-licenses[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]{color:#a7aeb8;font-size:.875em;padding-left:1rem}.iframe-preview[_ngcontent-%COMP%]{position:absolute;height:calc(100% - 63px);width:100%;border:none;margin-top:63px}.iframe-preview-full[_ngcontent-%COMP%]{height:100%!important;margin-top:0!important}.iframe-preview-mobile[_ngcontent-%COMP%]{width:375px;left:50%;transform:translate(-50%)}.iframe-preview-tablet[_ngcontent-%COMP%]{width:768px;left:50%;transform:translate(-50%)}.border-bottom-primary[_ngcontent-%COMP%]{border-bottom:3px #c5ccd6 solid}"],
                            changeDetection: 0
                        })
                    }
                    return t
                })(),
                de = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-sb-angular-inspector"]
                            ],
                            decls: 24,
                            vars: 0,
                            consts: [
                                ["headerClasses", "bg-light page-header-ui-light", "borderType", "angled", "borderClasses", "text-white"],
                                [1, "page-header-ui-content", "pb-4"],
                                [1, "container"],
                                [1, "row", "align-items-center"],
                                [1, "col-lg-8", "mb-4", "mb-lg-0"],
                                [1, "page-header-ui-title"],
                                [1, "page-header-ui-text", "mb-0"],
                                [1, "col-lg-4"],
                                ["adSense", "", 1, "carbon-container", "carbon-inverse"],
                                ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                                [1, "col-lg-8"],
                                [1, "lead"],
                                ["href", "https://chrome.google.com/webstore/detail/sb-angular-inspector/lapcbklolihkkijaemmlbkpibgghhioh", "target", "_blank"],
                                ["src", "assets/img/brand-logos/chrome-web-store-badge.svg", "alt", "Chrome Web Store Badge", 2, "height", "6rem"],
                                [1, "col-lg-4", "ps-5", "d-none", "d-lg-block"],
                                ["src", "assets/img/sb-angular-inspector-icon.svg", "alt", "SB Angular Inspector Logo", 1, "img-fluid"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "SB Angular Inspector"), e.qZA(), e.TgZ(7, "p", 6), e._uU(8, "An Angular Inspector for Angular 9+ (Ivy) which extends Chrome's developer tools for Angular 9+ web applications"), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "sbpro-page-section", 9)(12, "div", 2)(13, "div", 3)(14, "div", 10)(15, "p", 11), e._uU(16, "Streamline your Angular workflow by using SB Angular Inspector, a Chrome browser extension which adds an Angular State Inspector to your Chrome developer tools. SB Angular Inspector is "), e.TgZ(17, "strong"), e._uU(18, "compatible with Angular 9+"), e.qZA(), e._uU(19, " (Ivy) based web applications."), e.qZA(), e.TgZ(20, "a", 12), e._UZ(21, "img", 13), e.qZA()(), e.TgZ(22, "div", 14), e._UZ(23, "img", 15), e.qZA()()()())
                            },
                            dependencies: [b.q, m.g, Z.Z],
                            changeDetection: 0
                        })
                    }
                    return t
                })();
            var yo = c(2611),
                To = c(1172),
                Ao = c(2677);

            function Uo(t, r) {
                1 & t && e._UZ(0, "sbw-banner")
            }
            const xo = function(t) {
                return {
                    hasBanner: t
                }
            };
            let ue = (() => {
                class t {
                    constructor(o, n, i) {
                        this.bannerService = o, this.changeDetectorRef = n, this.toastService = i, this.subscription = new w.w0, this.showBanner = !0
                    }
                    ngOnInit() {
                        this.subscription.add(this.bannerService.isVisible$().subscribe(o => {
                            this.showBanner = o, this.changeDetectorRef.markForCheck()
                        }))
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(u.QD), e.Y36(e.sBO), e.Y36(u.kl))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-site"]
                        ],
                        decls: 4,
                        vars: 4,
                        consts: [
                            ["footerClasses", "bg-light footer-light", 3, "ngClass"],
                            [4, "ngIf"],
                            ["topNavClasses", "bg-white navbar-light fixed-top", "brandClasses", "text-black", "buttonClasses", "btn-teal"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbw-layout-site", 0), e.YNc(1, Uo, 1, 0, "sbw-banner", 1), e._UZ(2, "sb-top-nav", 2)(3, "router-outlet"), e.qZA()), 2 & n && (e.Q6J("ngClass", e.VKq(2, xo, i.showBanner)), e.xp6(1), e.Q6J("ngIf", i.showBanner))
                        },
                        dependencies: [a.mk, a.O5, d.lC, yo.S, To.E, Ao.K],
                        changeDetection: 0
                    })
                }
                return t
            })();
            const ge = [{
                slug: "bootstrap-contact-form-example",
                title: "Contact Form Split Image Layout",
                subTitle: "A Creative Contact Form Layout with Images",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/ogm2wjy9/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/contact-form-split-image.jpg"
            }, {
                slug: "bootstrap-5-contact-form",
                title: "Bootstrap Contact Form with Validation",
                subTitle: "A Simple Bootstrap Contact Form with Floating Labels",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/t1fqjyaw/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/contact-form-basic.jpg"
            }, {
                slug: "animated-navbar-dropdown",
                title: "Dropdown Menu Animation for Bootstrap Navbar",
                subTitle: "CSS Only Animation for Bootstrap Navbar Dropdowns",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/o7ev9czn/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/animated-navbar-dropdowns.jpg"
            }, {
                slug: "sticky-footer-flexbox",
                title: "Flexbox Sticky Footer",
                subTitle: "A Sticky Footer Layout using Bootstrap Flex Utility Classes",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/out2g1mq/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/sticky-footer-flexbox.jpg"
            }, {
                slug: "video-header",
                title: "Bootstrap Video Background Header",
                subTitle: "A Video Background Header Snippet using HTML5 Video",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/enajc82d/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/video-header.jpg"
            }, {
                slug: "sign-in-split",
                title: "Modern Sign In Page with Split Screen Format",
                subTitle: "Modern Sign In Page with Split Screen Image",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/efvg9j7a/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/sign-in-split.jpg"
            }, {
                slug: "login",
                title: "Bootstrap Login Form with Floating Labels",
                subTitle: "Login Form with Floating Form Labels and Social Login Buttons",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/amxr8n19/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/login.jpg"
            }, {
                slug: "navbar-logo",
                title: "Bootstrap Navbar with Logo Image",
                subTitle: "Bootstrap Navbar Example with Logo Image",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/jm1sLd6f/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/navbar-logo.jpg"
            }, {
                slug: "full-slider",
                title: "Bootstrap Full Page Image Slider Header",
                subTitle: "Bootstrap Full Page Height Image Slider Header",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/yezxdwv3/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/full-slider.jpg"
            }, {
                slug: "pricing-table",
                title: "Bootstrap Responsive Pricing Table Snippet",
                subTitle: "Pricing Table with Custom Hover Effects and Buttons",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/rgp3qdye/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/pricing-table.jpg"
            }, {
                slug: "thumbnail-gallery",
                title: "Bootstrap Image Gallery with Thumbnails",
                subTitle: "A Basic Gallery Layout with Image Thumbnails",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/m0egb54s/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/thumbnail-gallery.jpg"
            }, {
                slug: "registration-page",
                title: "Bootstrap Registration Page with Floating Labels",
                subTitle: "Registration Page with Floating Form Labels and Splash Image",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/1nu8g6e5/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/registration-page.jpg"
            }, {
                slug: "half-slider",
                title: "Bootstrap Half Page Image Slider Header",
                subTitle: "Bootstrap Half Page Height Image Slider Header",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/3xr90f2y/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/half-slider.jpg"
            }, {
                slug: "about-team",
                title: "Bootstrap About and Team Section",
                subTitle: "About and Team Member Example Section Layout",
                bootstrapVersion: "5.2.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/2Lkm6e1j/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/about-team.jpg"
            }, {
                slug: "full-image-header",
                title: "Bootstrap Full Page Image Header",
                subTitle: "Full Page Image Header with Vertically Centered Content",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/q4khv018/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/full-image-header.jpg"
            }, {
                slug: "portfolio-item",
                title: "Bootstrap Portfolio Item Details Page",
                subTitle: "Portfolio Item Details Layout Example",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/dswvpqhx/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-item.jpg"
            }, {
                slug: "full-image-background",
                title: "Full Page Image HTML Background for Bootstrap",
                subTitle: "Fixed on Scroll Full Page Image Background",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/t7suLowj/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/full-image-background.jpg"
            }, {
                slug: "portfolio-one-column",
                title: "Bootstrap One Column Portfolio Layout",
                subTitle: "One Column Portfolio Layout Example",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/6dcgqs4t/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-one-column.jpg"
            }, {
                slug: "portfolio-two-column",
                title: "Bootstrap Two Column Portfolio Layout",
                subTitle: "Two Column Portfolio Layout Example",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/caj146vz/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-two-column.jpg"
            }, {
                slug: "portfolio-three-column",
                title: "Bootstrap Three Column Portfolio Layout",
                subTitle: "Three Column Portfolio Layout Example",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/b7uLpqsk/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-three-column.jpg"
            }, {
                slug: "portfolio-four-column",
                title: "Bootstrap Four Column Portfolio Layout",
                subTitle: "Four Column Portfolio Layout Example",
                bootstrapVersion: "5.1.0",
                jsFiddleSrc: "//jsfiddle.net/StartBootstrap/42bgwce1/embedded/result,html,css,js,resources",
                previewImageSrc: "//assets.startbootstrap.com/img/screenshots/snippets/portfolio-four-column.jpg"
            }];
            var z = c(8479);
            let me = (() => {
                class t {
                    constructor(o) {
                        this.route = o
                    }
                    ngOnInit() {
                        this.snippet = ge.find(o => o.slug === this.route.snapshot.paramMap.get("snippet-slug"))
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(d.gz))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-snippet"]
                        ],
                        decls: 34,
                        vars: 9,
                        consts: [
                            ["headerClasses", "bg-yellow page-header-ui-dark", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "page-header-ui-content", "pb-4"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [1, "page-header-ui-title"],
                            [1, "page-header-ui-text", "mb-0"],
                            [1, "col-lg-4"],
                            ["adSense", "", 1, "carbon-container"],
                            ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "mb-3"],
                            [1, "badge", "bg-secondary", "text-dark"],
                            [1, "mb-4", "rounded", "shadow", "snippet"],
                            ["width", "100%", "height", "700", "allowfullscreen", "", "allowpaymentrequest", "allowpaymentrequest", "frameborder", "0", 3, "src"],
                            [1, "row"],
                            [1, "col-lg-8"],
                            [1, "native-standard", 3, "adSense"],
                            [1, "card"],
                            [1, "card-body"],
                            [1, "small"],
                            ["routerLink", "/theme/sb-ui-kit-pro", 1, "btn", "btn-primary", "fw-500"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6), e.qZA(), e.TgZ(7, "p", 6), e._uU(8), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "sbpro-page-section", 9)(12, "div", 2)(13, "div", 10)(14, "span", 11), e._uU(15), e.qZA()(), e.TgZ(16, "div", 12), e._UZ(17, "iframe", 13), e.ALo(18, "safe"), e.qZA(), e.TgZ(19, "div", 14)(20, "div", 15), e._UZ(21, "div", 16), e.TgZ(22, "div", 17)(23, "div", 18), e._UZ(24, "sbw-disqus"), e.qZA()()(), e.TgZ(25, "div", 7)(26, "div", 17)(27, "div", 18)(28, "h5"), e._uU(29, "Need more UI elements?"), e.qZA(), e.TgZ(30, "p", 19), e._uU(31, "Try SB UI Kit Pro, which is packed with custom view, pages, and components to help you get started on your next project!"), e.qZA(), e.TgZ(32, "a", 20), e._uU(33, "Preview SB UI Kit Pro"), e.qZA()()()()()()()), 2 & n && (e.xp6(6), e.Oqu(null == i.snippet ? null : i.snippet.title), e.xp6(2), e.Oqu(null == i.snippet ? null : i.snippet.subTitle), e.xp6(7), e.hij("Bootstrap ", null == i.snippet ? null : i.snippet.bootstrapVersion, ""), e.xp6(2), e.Q6J("src", e.Dn7(18, 5, null == i.snippet ? null : i.snippet.jsFiddleSrc, "resourceURL", "NONE"), e.uOi), e.xp6(4), e.Q6J("adSense", "horizontal"))
                        },
                        dependencies: [d.rH, b.q, m.g, z.Y, Z.Z, A.y],
                        changeDetection: 0
                    })
                }
                return t
            })();

            function qo(t, r) {
                if (1 & t && (e.TgZ(0, "div", 12)(1, "div", 13)(2, "a", 14)(3, "picture"), e._UZ(4, "source", 15), e.ALo(5, "safe"), e.ALo(6, "webpExt"), e._UZ(7, "source", 16), e.ALo(8, "safe"), e._UZ(9, "img", 17), e.ALo(10, "safe"), e.qZA()(), e.TgZ(11, "div", 18)(12, "div")(13, "div", 19), e._uU(14), e.qZA(), e.TgZ(15, "div", 20), e._uU(16), e.qZA()()()()()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(2), e.Q6J("routerLink", "/snippets/" + o.slug), e.xp6(2), e.Q6J("srcset", e.Dn7(5, 7, e.lcZ(6, 11, o.previewImageSrc), "resourceURL", "NONE")), e.xp6(3), e.Q6J("srcset", e.Dn7(8, 13, o.previewImageSrc, "resourceURL", "NONE")), e.xp6(2), e.Q6J("src", e.Dn7(10, 17, o.previewImageSrc, "resourceURL", "NONE"), e.LSH)("alt", o.title), e.xp6(5), e.Oqu(o.title), e.xp6(2), e.Oqu(o.subTitle)
                }
            }
            let he = (() => {
                class t {
                    constructor() {
                        this.snippets = ge
                    }
                    ngOnInit() {}
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-snippets"]
                        ],
                        decls: 15,
                        vars: 1,
                        consts: [
                            ["headerClasses", "bg-yellow page-header-ui-dark", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "page-header-ui-content", "pb-4"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [1, "page-header-ui-title"],
                            [1, "page-header-ui-text", "mb-0"],
                            [1, "col-lg-4"],
                            ["adSense", "", 1, "carbon-container"],
                            ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "row"],
                            ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"],
                            [1, "col-lg-4", "col-md-6"],
                            [1, "mb-5"],
                            [1, "d-block", "lift", "rounded", "mb-3", "o-hidden", 2, "--aspect-ratio", "516/352", 3, "routerLink"],
                            ["type", "image/webp", 3, "srcset"],
                            ["type", "image/jpeg", 3, "srcset"],
                            [1, "img-fluid", 3, "src", "alt"],
                            [1, "d-flex", "justify-content-between"],
                            [1, "text-dark", "small", "fw-500", "mb-1"],
                            [1, "text-xs"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "Bootstrap Snippets"), e.qZA(), e.TgZ(7, "p", 6), e._uU(8, "A curated library of Bootstrap code snippets created by Start Bootstrap, perfect for dropping into any Bootstrap based project or theme!"), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "sbpro-page-section", 9)(12, "div", 2)(13, "div", 10), e.YNc(14, qo, 17, 21, "div", 11), e.qZA()()()), 2 & n && (e.xp6(14), e.Q6J("ngForOf", i.snippets))
                        },
                        dependencies: [a.sg, d.rH, b.q, m.g, Z.Z, A.y, F.r],
                        styles: [".snippet-heart-count[_ngcontent-%COMP%]{margin-top:.15625rem}"],
                        changeDetection: 0
                    })
                }
                return t
            })();

            function ko(t, r) {
                if (1 & t && (e.TgZ(0, "a", 40), e._uU(1), e.qZA()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Oqu(o)
                }
            }

            function Co(t, r) {
                if (1 & t && (e._UZ(0, "img", 41), e.ALo(1, "safe")), 2 & t) {
                    const o = e.oxw(2);
                    e.Q6J("src", e.Dn7(1, 2, o.post.headerImage.medium || null, "resourceURL", "NONE"), e.LSH)("alt", o.post.headerImage.alt)
                }
            }

            function So(t, r) {
                1 & t && e._UZ(0, "hr", 10)
            }

            function Bo(t, r) {
                1 & t && e._UZ(0, "span")
            }
            const Io = function() {
                return ["fal", "arrow-circle-left"]
            };

            function Po(t, r) {
                if (1 & t && (e.TgZ(0, "a", 46)(1, "span", 47)(2, "span", 48), e._UZ(3, "fa-icon", 49), e.qZA(), e.TgZ(4, "span", 50)(5, "div", 51), e._uU(6, "Previous Guide"), e.qZA(), e._uU(7), e.qZA()()()), 2 & t) {
                    const o = e.oxw(3);
                    e.Q6J("routerLink", "/guides/" + o.previousGuide.slug), e.xp6(3), e.Q6J("icon", e.DdM(3, Io)), e.xp6(4), e.hij(" ", o.previousGuide.heading, "")
                }
            }
            const Do = function() {
                return ["fal", "arrow-circle-right"]
            };

            function Lo(t, r) {
                if (1 & t && (e.TgZ(0, "a", 52)(1, "span", 47)(2, "span", 50)(3, "div", 51), e._uU(4, "Next Guide"), e.qZA(), e._uU(5), e.qZA(), e.TgZ(6, "span", 48), e._UZ(7, "fa-icon", 49), e.qZA()()()), 2 & t) {
                    const o = e.oxw(3);
                    e.Q6J("routerLink", "/guides/" + o.nextGuide.slug), e.xp6(5), e.hij(" ", o.nextGuide.heading, ""), e.xp6(2), e.Q6J("icon", e.DdM(3, Do))
                }
            }

            function Qo(t, r) {
                if (1 & t && (e.TgZ(0, "div", 42), e.YNc(1, Bo, 1, 0, "span", 43), e.YNc(2, Po, 8, 4, "a", 44), e.YNc(3, Lo, 8, 4, "a", 45), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(1), e.Q6J("ngIf", o.nextGuide), e.xp6(1), e.Q6J("ngIf", o.previousGuide), e.xp6(1), e.Q6J("ngIf", o.nextGuide)
                }
            }

            function No(t, r) {
                if (1 & t && (e._UZ(0, "img", 53), e.ALo(1, "safe")), 2 & t) {
                    const o = e.oxw(2);
                    e.Q6J("src", e.Dn7(1, 2, o.post.user.postMetaData.profileImage.medium || null, "resourceURL", "NONE"), e.LSH)("alt", o.post.user.postMetaData.profileImage.alt)
                }
            }

            function Jo(t, r) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "a", 54), e._uU(2), e.TgZ(3, "div", 55), e._uU(4), e.ALo(5, "date"), e.qZA()(), e.BQk()), 2 & t) {
                    const o = r.$implicit,
                        n = r.index;
                    e.xp6(1), e.Q6J("routerLink", "/guides/" + o.slug), e.uIk("data-cy", "recentGuideLink-" + n), e.xp6(1), e.hij("", o.heading, " "), e.xp6(2), e.Oqu(e.xi3(5, 4, o.publishedDate, "longDate"))
                }
            }
            const Fo = function() {
                    return ["fad", "globe"]
                },
                Mo = function() {
                    return ["fab", "twitter"]
                },
                Oo = function() {
                    return ["fab", "github"]
                };

            function Eo(t, r) {
                if (1 & t && (e.TgZ(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "article", 5)(4, "header")(5, "h1"), e._uU(6), e.qZA(), e.TgZ(7, "p", 6), e._uU(8), e.qZA(), e.TgZ(9, "div", 7), e._uU(10), e.ALo(11, "date"), e.TgZ(12, "a", 8), e._uU(13), e.qZA()(), e.YNc(14, ko, 2, 1, "a", 9), e._UZ(15, "hr", 10), e.qZA(), e.YNc(16, Co, 2, 6, "img", 11), e._UZ(17, "sbw-markdown-html", 12), e.qZA(), e.YNc(18, So, 1, 0, "hr", 13), e.YNc(19, Qo, 4, 3, "div", 14), e._UZ(20, "hr", 10), e.TgZ(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18), e.YNc(25, No, 2, 6, "img", 19), e.qZA(), e.TgZ(26, "div")(27, "h4"), e._uU(28), e.qZA(), e.TgZ(29, "p", 20), e._uU(30), e.qZA(), e.TgZ(31, "div", 21)(32, "div", 22), e._UZ(33, "fa-icon", 23), e.TgZ(34, "a", 24), e._uU(35), e.qZA()(), e.TgZ(36, "div", 22), e._UZ(37, "fa-icon", 25), e.TgZ(38, "a", 26), e._uU(39, "davidmillerskt"), e.qZA()(), e.TgZ(40, "div"), e._UZ(41, "fa-icon", 27), e.TgZ(42, "a", 28), e._uU(43, "davidtmiller"), e.qZA()()()()()()(), e._UZ(44, "div", 29), e.TgZ(45, "div", 30)(46, "div", 16), e._UZ(47, "sbw-disqus"), e.qZA()()(), e.TgZ(48, "div", 31), e._UZ(49, "div", 32), e.TgZ(50, "aside")(51, "div", 33)(52, "div", 34)(53, "div", 35), e._uU(54, "Recent Guides"), e.qZA()(), e.TgZ(55, "div", 36), e.YNc(56, Jo, 6, 7, "ng-container", 37), e.qZA(), e.TgZ(57, "div", 16)(58, "div", 38)(59, "button", 39), e._uU(60, "View All Guides"), e.qZA()()()()()()()()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(6), e.Oqu(o.post.heading), e.xp6(2), e.Oqu(o.post.subHeading), e.xp6(2), e.hij("", e.xi3(11, 21, o.post.publishedDate, "longDate"), " by "), e.xp6(3), e.AsE("", o.post.user.firstName, " ", o.post.user.lastName, ""), e.xp6(1), e.Q6J("ngForOf", o.post.tags), e.xp6(2), e.Q6J("ngIf", o.post.headerImage.medium), e.xp6(1), e.Q6J("md", o.post.body), e.xp6(1), e.Q6J("ngIf", o.nextGuide || o.previousGuide), e.xp6(1), e.Q6J("ngIf", o.nextGuide || o.previousGuide), e.xp6(6), e.Q6J("ngIf", o.post.user.postMetaData.profileImage.medium), e.xp6(3), e.AsE("", o.post.user.firstName, " ", o.post.user.lastName, ""), e.xp6(2), e.Oqu(o.post.user.postMetaData.bio), e.xp6(3), e.Q6J("icon", e.DdM(24, Fo)), e.xp6(1), e.Q6J("href", o.post.user.postMetaData.socialURLs.website.url, e.LSH), e.xp6(1), e.Oqu(o.post.user.postMetaData.socialURLs.website.displayName), e.xp6(2), e.Q6J("icon", e.DdM(25, Mo)), e.xp6(4), e.Q6J("icon", e.DdM(26, Oo)), e.xp6(3), e.Q6J("adSense", "horizontal"), e.xp6(12), e.Q6J("ngForOf", o.guidePreviewsRecent)
                }
            }
            let fe = (() => {
                    class t {
                        constructor(o, n, i) {
                            this.route = o, this.blogService = n, this.changeDetectorRef = i, this.subscription = new w.w0
                        }
                        ngOnInit() {
                            this.subscription.add(this.route.params.subscribe(o => {
                                if (!o.postSlug) throw new Error("postSlug not in params");
                                this.blogService.getPost$(o.postSlug).subscribe(n => {
                                    this.post = n, this.changeDetectorRef.detectChanges()
                                }), this.blogService.getPreviousGuidePreview$(o.postSlug).subscribe(n => {
                                    this.previousGuide = n, this.changeDetectorRef.detectChanges()
                                }), this.blogService.getNextGuidePreview$(o.postSlug).subscribe(n => {
                                    this.nextGuide = n, this.changeDetectorRef.detectChanges()
                                })
                            })), this.subscription.add(this.blogService.guidePreviews$.subscribe(o => {
                                this.guidePreviewsRecent = o.slice(0, 5), this.changeDetectorRef.detectChanges()
                            }))
                        }
                        ngOnDestroy() {
                            this.subscription.unsubscribe()
                        }
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)(e.Y36(d.gz), e.Y36(se.Z), e.Y36(e.sBO))
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-guide"]
                            ],
                            decls: 2,
                            vars: 1,
                            consts: [
                                ["sectionClasses", "mt-page-header py-5", "borderType", "angled", "borderClasses", "text-light"],
                                ["class", "container", 4, "ngIf"],
                                [1, "container"],
                                [1, "row"],
                                [1, "col-lg-8"],
                                [1, "post"],
                                [1, "lead"],
                                [1, "small", "fst-italic", "mb-2"],
                                ["href", "javascript:void(0);", 1, "text-dark"],
                                ["class", "badge bg-green-soft text-green text-green text-capitalize me-2", 4, "ngFor", "ngForOf"],
                                [1, "hr-lg"],
                                ["class", "img-fluid rounded mb-3", 3, "src", "alt", 4, "ngIf"],
                                [3, "md"],
                                ["class", "hr-lg", 4, "ngIf"],
                                ["class", "d-flex align-items-stretch justify-content-between", 4, "ngIf"],
                                [1, "card", "mb-4"],
                                [1, "card-body"],
                                [1, "d-flex", "flex-column", "flex-sm-row", "align-items-sm-center"],
                                [1, "me-4", "mb-4", "mb-sm-0"],
                                ["class", "rounded-circle bg-gray-300", "style", "height: 5rem; width: 5rem", 3, "src", "alt", 4, "ngIf"],
                                [1, "small"],
                                [1, "d-flex", "flex-column", "flex-md-row", "align-items-md-center", "small"],
                                [1, "me-3", "mb-3", "mb-md-0"],
                                [1, "text-primary", "me-1", 3, "icon"],
                                [3, "href"],
                                [1, "text-twitter", "me-1", 3, "icon"],
                                ["href", "https://twitter.com/davidmillerskt"],
                                [1, "text-github", "me-1", 3, "icon"],
                                ["href", "javascript:void(0);"],
                                [1, "native-standard", "mb-4", 3, "adSense"],
                                [1, "card", "mb-4", "mb-lg-0"],
                                [1, "col-lg-4"],
                                ["adSense", "", 1, "carbon-inverse", "mb-4"],
                                [1, "card"],
                                [1, "card-header", "bg-green"],
                                [1, "small", "text-white", "fw-500"],
                                [1, "list-group", "list-group-flush", "small", "mb-0", "border-bottom"],
                                [4, "ngFor", "ngForOf"],
                                [1, "d-grid"],
                                ["routerLink", "/guides", 1, "btn", "btn-green-soft", "text-green", "fw-500"],
                                [1, "badge", "bg-green-soft", "text-green", "text-green", "text-capitalize", "me-2"],
                                [1, "img-fluid", "rounded", "mb-3", 3, "src", "alt"],
                                [1, "d-flex", "align-items-stretch", "justify-content-between"],
                                [4, "ngIf"],
                                ["class", "btn btn-white border-0 rounded shadow post-pager-link p-0 prev", "data-cy", "previousGuideLink", 3, "routerLink", 4, "ngIf"],
                                ["class", "btn btn-white border-0 rounded shadow post-pager-link p-0 next", "data-cy", "nextGuideLink", 3, "routerLink", 4, "ngIf"],
                                ["data-cy", "previousGuideLink", 1, "btn", "btn-white", "border-0", "rounded", "shadow", "post-pager-link", "p-0", "prev", 3, "routerLink"],
                                [1, "d-flex", "h-100"],
                                [1, "bg-green", "p-2", "d-flex", "align-items-center", "text-white"],
                                [3, "icon"],
                                [1, "p-3", "d-flex", "flex-column", "justify-content-center", "w-100"],
                                [1, "indicator", "mb-1", "text-uppercase"],
                                ["data-cy", "nextGuideLink", 1, "btn", "btn-white", "border-0", "rounded", "shadow", "post-pager-link", "p-0", "next", 3, "routerLink"],
                                [1, "rounded-circle", "bg-gray-300", 2, "height", "5rem", "width", "5rem", 3, "src", "alt"],
                                [1, "list-group-item", "list-group-item-action", 3, "routerLink"],
                                [1, "text-xs", "text-muted"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-section", 0), e.YNc(1, Eo, 61, 27, "div", 1), e.qZA()), 2 & n && (e.xp6(1), e.Q6J("ngIf", i.post))
                            },
                            dependencies: [a.sg, a.O5, d.rH, m.g, Q.k, z.Y, Z.Z, v.BN, a.uU, A.y],
                            changeDetection: 0
                        })
                    }
                    return t
                })(),
                f = (() => {
                    class t {
                        constructor(o) {
                            this.metaService = o, this.headerClassColor = "bg-primary"
                        }
                        ngOnInit() {
                            this.productConfig = this.metaService.getCurrentProduct(), console.log(this.metaService.currentURL), this.headerClassColor = this.metaService.currentURL.match(/^\/templates/) ? "bg-blue" : "bg-primary"
                        }
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)(e.Y36(u.Rj))
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-products"]
                            ],
                            decls: 13,
                            vars: 5,
                            consts: [
                                ["borderType", "angled", "borderClasses", "text-white", 3, "headerClasses"],
                                [1, "page-header-ui-content", "pb-4"],
                                [1, "container"],
                                [1, "row", "align-items-center"],
                                [1, "col-lg-8", "mb-4", "mb-lg-0"],
                                ["data-cy", "productsHeaderTitle", 1, "page-header-ui-title"],
                                [1, "page-header-ui-text", "mb-0"],
                                [1, "col-lg-4"],
                                ["adSense", "", 1, "carbon-container"],
                                ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                                [3, "category", "productConfig"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6), e.qZA(), e.TgZ(7, "p", 6), e._uU(8), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "sbpro-page-section", 9), e._UZ(12, "sbw-product-cards", 10), e.qZA()), 2 & n && (e.Q6J("headerClasses", "page-header-ui-dark " + i.headerClassColor), e.xp6(6), e.Oqu(i.productConfig.headerTitle), e.xp6(2), e.Oqu(i.productConfig.headerText), e.xp6(4), e.Q6J("category", i.productConfig.category)("productConfig", i.productConfig))
                            },
                            dependencies: [b.q, m.g, Z.Z, j],
                            changeDetection: 0
                        })
                    }
                    return t
                })();
            var _e = c(4137);
            const W = function() {
                return ["fad", "download"]
            };

            function jo(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 44)(1, "div", 25)(2, "a", 45), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.download())
                    }), e._UZ(3, "fa-icon", 46), e._uU(4, "Free Download"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(2), e.Q6J("href", o.gitURLBase + "/archive/gh-pages.zip", e.LSH), e.xp6(1), e.Q6J("icon", e.DdM(2, W))
                }
            }
            const Ro = function() {
                return ["fad", "edit"]
            };

            function Yo(t, r) {
                1 & t && (e.TgZ(0, "div", 44)(1, "div", 25)(2, "a", 47), e._UZ(3, "fa-icon", 10), e._uU(4, "Edit in Builder"), e.qZA()()()), 2 & t && (e.xp6(3), e.Q6J("icon", e.DdM(1, Ro)))
            }

            function Go(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "div", 29)(2, "div", 30), e._uU(3, "Downloaded"), e.qZA(), e.TgZ(4, "div"), e._UZ(5, "fa-icon", 10), e._uU(6, "X,XXX"), e.qZA()(), e._UZ(7, "hr"), e.TgZ(8, "div", 29)(9, "div", 30), e._uU(10, "Released"), e.qZA(), e.TgZ(11, "div"), e._uU(12, "XXX XX, XXXX"), e.qZA()(), e._UZ(13, "hr"), e.TgZ(14, "div", 29)(15, "div", 30), e._uU(16, "Last Update"), e.qZA(), e.TgZ(17, "div"), e._uU(18, "X XXXX ago"), e.qZA()(), e._UZ(19, "hr"), e.TgZ(20, "div", 29)(21, "div", 30), e._uU(22, "Product Version"), e.qZA(), e.TgZ(23, "div"), e._uU(24, "X.X.X"), e.qZA()(), e._UZ(25, "hr"), e.TgZ(26, "div", 29)(27, "div", 30), e._uU(28, "Bootstrap Version"), e.qZA(), e.TgZ(29, "div"), e._uU(30, "X.X.X"), e.qZA()(), e.BQk()), 2 & t && (e.xp6(5), e.Q6J("icon", e.DdM(1, W)))
            }

            function Ho(t, r) {
                if (1 & t && (e.ynx(0), e.TgZ(1, "div", 29)(2, "div", 30), e._uU(3, "Downloaded"), e.qZA(), e.TgZ(4, "div"), e._UZ(5, "fa-icon", 10), e._uU(6), e.ALo(7, "number"), e.qZA()(), e._UZ(8, "hr"), e.TgZ(9, "div", 29)(10, "div", 30), e._uU(11, "Released"), e.qZA(), e.TgZ(12, "div"), e._uU(13), e.ALo(14, "date"), e.qZA()(), e._UZ(15, "hr"), e.TgZ(16, "div", 29)(17, "div", 30), e._uU(18, "Last Update"), e.qZA(), e.TgZ(19, "div"), e._uU(20), e.ALo(21, "formatDistanceToNow"), e.qZA()(), e._UZ(22, "hr"), e.TgZ(23, "div", 29)(24, "div", 30), e._uU(25, "Product Version"), e.qZA(), e.TgZ(26, "div"), e._uU(27), e.qZA()(), e._UZ(28, "hr"), e.TgZ(29, "div", 29)(30, "div", 30), e._uU(31, "Bootstrap Version"), e.qZA(), e.TgZ(32, "div"), e._uU(33), e.qZA()(), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(5), e.Q6J("icon", e.DdM(14, W)), e.xp6(1), e.Oqu(e.Dn7(7, 6, o.product.downloadCount, "1.0", "en-US")), e.xp6(7), e.Oqu(e.lcZ(14, 10, o.product.releasedDate)), e.xp6(7), e.hij("", e.lcZ(21, 12, o.product.updatedDate), " ago"), e.xp6(7), e.Oqu(o.product.productVersion), e.xp6(6), e.Oqu(o.product.bootstrapVersion)
                }
            }
            const l = function() {
                    return ["far", "check"]
                },
                U = function() {
                    return ["fad", "arrow-alt-circle-up"]
                };

            function Vo(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 27)(2, "div", 28)(3, "strong"), e._uU(4, "Need something more?"), e.qZA(), e.TgZ(5, "div", 48), e._uU(6, "Try SB Admin Pro!"), e.qZA(), e.TgZ(7, "div", 49)(8, "a", 50)(9, "picture"), e._UZ(10, "source", 51)(11, "source", 52)(12, "img", 53), e.qZA()()(), e.TgZ(13, "div", 54)(14, "div", 55), e._UZ(15, "img", 56), e.qZA(), e.TgZ(16, "div", 57)(17, "div", 58)(18, "strong"), e._uU(19, "Pro Features Include:"), e.qZA()(), e.TgZ(20, "ul", 59)(21, "li"), e._UZ(22, "fa-icon", 60), e._uU(23, "Full Documentation"), e.qZA(), e.TgZ(24, "li"), e._UZ(25, "fa-icon", 60), e._uU(26, "Email Support"), e.qZA(), e.TgZ(27, "li"), e._UZ(28, "fa-icon", 60), e._uU(29, "More Components & Features"), e.qZA(), e.TgZ(30, "li"), e._UZ(31, "fa-icon", 60), e._uU(32, "More Layouts & Page Examples"), e.qZA()()()(), e.TgZ(33, "div", 25)(34, "a", 61), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeStickyAdmin"))
                    }), e._UZ(35, "fa-icon", 10), e._uU(36, "Try SB Admin Pro!"), e.qZA()()()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(22), e.Q6J("icon", e.DdM(6, l)), e.xp6(3), e.Q6J("icon", e.DdM(7, l)), e.xp6(3), e.Q6J("icon", e.DdM(8, l)), e.xp6(3), e.Q6J("icon", e.DdM(9, l)), e.xp6(3), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(10, U))
                }
            }

            function zo(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 27)(2, "div", 28)(3, "strong"), e._uU(4, "Need something more?"), e.qZA(), e.TgZ(5, "div", 48), e._uU(6, "Try SB Admin Pro Angular!"), e.qZA(), e.TgZ(7, "div", 49)(8, "a", 62)(9, "picture"), e._UZ(10, "source", 63)(11, "source", 64)(12, "img", 65), e.qZA()()(), e.TgZ(13, "div", 54)(14, "div", 55), e._UZ(15, "img", 56), e.qZA(), e.TgZ(16, "div", 57)(17, "div", 58)(18, "strong"), e._uU(19, "Pro Features Include:"), e.qZA()(), e.TgZ(20, "ul", 59)(21, "li"), e._UZ(22, "fa-icon", 60), e._uU(23, "Full Documentation"), e.qZA(), e.TgZ(24, "li"), e._UZ(25, "fa-icon", 60), e._uU(26, "Email Support"), e.qZA(), e.TgZ(27, "li"), e._UZ(28, "fa-icon", 60), e._uU(29, "More Components & Features"), e.qZA(), e.TgZ(30, "li"), e._UZ(31, "fa-icon", 60), e._uU(32, "More Layouts & Page Examples"), e.qZA()()()(), e.TgZ(33, "div", 25)(34, "a", 66), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeStickyAdminAngular"))
                    }), e._UZ(35, "fa-icon", 10), e._uU(36, "Try SB Admin Pro Angular!"), e.qZA()()()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(22), e.Q6J("icon", e.DdM(6, l)), e.xp6(3), e.Q6J("icon", e.DdM(7, l)), e.xp6(3), e.Q6J("icon", e.DdM(8, l)), e.xp6(3), e.Q6J("icon", e.DdM(9, l)), e.xp6(3), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(10, U))
                }
            }

            function Wo(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 27)(2, "div", 28)(3, "strong"), e._uU(4, "Need something more?"), e.qZA(), e.TgZ(5, "div", 48), e._uU(6, "Try SB UI Kit Pro!"), e.qZA(), e.TgZ(7, "div", 49)(8, "a", 67)(9, "picture"), e._UZ(10, "source", 68)(11, "source", 69)(12, "img", 70), e.qZA()()(), e.TgZ(13, "div", 54)(14, "div", 55), e._UZ(15, "img", 56), e.qZA(), e.TgZ(16, "div", 57)(17, "div", 58)(18, "strong"), e._uU(19, "Pro Features Include:"), e.qZA()(), e.TgZ(20, "ul", 59)(21, "li"), e._UZ(22, "fa-icon", 60), e._uU(23, "Full Documentation"), e.qZA(), e.TgZ(24, "li"), e._UZ(25, "fa-icon", 60), e._uU(26, "Email Support"), e.qZA(), e.TgZ(27, "li"), e._UZ(28, "fa-icon", 60), e._uU(29, "More Components & Features"), e.qZA(), e.TgZ(30, "li"), e._UZ(31, "fa-icon", 60), e._uU(32, "More Layouts & Page Examples"), e.qZA()()()(), e.TgZ(33, "div", 25)(34, "a", 71), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeStickyUIKit"))
                    }), e._UZ(35, "fa-icon", 10), e._uU(36, "Try SB UI Kit Pro!"), e.qZA()()()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(22), e.Q6J("icon", e.DdM(6, l)), e.xp6(3), e.Q6J("icon", e.DdM(7, l)), e.xp6(3), e.Q6J("icon", e.DdM(8, l)), e.xp6(3), e.Q6J("icon", e.DdM(9, l)), e.xp6(3), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(10, U))
                }
            }

            function Xo(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 27)(2, "div", 28)(3, "strong"), e._uU(4, "Need something more?"), e.qZA(), e.TgZ(5, "div", 48), e._uU(6, "Try SB UI Kit Pro Angular!"), e.qZA(), e.TgZ(7, "div", 49)(8, "a", 72)(9, "picture"), e._UZ(10, "source", 73)(11, "source", 74)(12, "img", 75), e.qZA()()(), e.TgZ(13, "div", 54)(14, "div", 55), e._UZ(15, "img", 56), e.qZA(), e.TgZ(16, "div", 57)(17, "div", 58)(18, "strong"), e._uU(19, "Pro Features Include:"), e.qZA()(), e.TgZ(20, "ul", 59)(21, "li"), e._UZ(22, "fa-icon", 60), e._uU(23, "Full Documentation"), e.qZA(), e.TgZ(24, "li"), e._UZ(25, "fa-icon", 60), e._uU(26, "Email Support"), e.qZA(), e.TgZ(27, "li"), e._UZ(28, "fa-icon", 60), e._uU(29, "More Components & Features"), e.qZA(), e.TgZ(30, "li"), e._UZ(31, "fa-icon", 60), e._uU(32, "More Layouts & Page Examples"), e.qZA()()()(), e.TgZ(33, "div", 25)(34, "a", 76), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeStickyUIKitAngular"))
                    }), e._UZ(35, "fa-icon", 10), e._uU(36, "Try SB UI Kit Pro Angular!"), e.qZA()()()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(22), e.Q6J("icon", e.DdM(6, l)), e.xp6(3), e.Q6J("icon", e.DdM(7, l)), e.xp6(3), e.Q6J("icon", e.DdM(8, l)), e.xp6(3), e.Q6J("icon", e.DdM(9, l)), e.xp6(3), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(10, U))
                }
            }
            const _ = function() {
                return ["far", "times"]
            };

            function Ko(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 77)(2, "div", 78)(3, "table", 79)(4, "thead")(5, "tr"), e._UZ(6, "th", 80), e.TgZ(7, "th", 81), e._uU(8), e._UZ(9, "br"), e.TgZ(10, "div", 82), e._uU(11, "(Free)"), e.qZA()(), e.TgZ(12, "th", 81), e._uU(13, " SB Admin Pro"), e._UZ(14, "br"), e.TgZ(15, "div", 82), e._uU(16, "(Pro)"), e.qZA()()()(), e.TgZ(17, "tbody")(18, "tr")(19, "th", 83), e._uU(20, "Custom & Extended Components"), e.qZA(), e.TgZ(21, "td", 84), e._uU(22, "5"), e.qZA(), e.TgZ(23, "td", 84), e._uU(24, "70+"), e.qZA()(), e.TgZ(25, "tr")(26, "th", 83), e._uU(27, "Custom CSS Utilities"), e.qZA(), e.TgZ(28, "td", 84), e._uU(29, "10"), e.qZA(), e.TgZ(30, "td", 84), e._uU(31, "100+"), e.qZA()(), e.TgZ(32, "tr")(33, "th", 83), e._uU(34, "Example Pages"), e.qZA(), e.TgZ(35, "td", 84), e._uU(36, "6"), e.qZA(), e.TgZ(37, "td", 84), e._uU(38, "30+"), e.qZA()(), e.TgZ(39, "tr")(40, "th", 83), e._uU(41, "Documentation"), e.qZA(), e.TgZ(42, "td", 84), e._UZ(43, "fa-icon", 85), e.qZA(), e.TgZ(44, "td", 84), e._UZ(45, "fa-icon", 86), e.qZA()(), e.TgZ(46, "tr")(47, "th", 83), e._uU(48, "Email Support"), e.qZA(), e.TgZ(49, "td", 84), e._UZ(50, "fa-icon", 85), e.qZA(), e.TgZ(51, "td", 84), e._UZ(52, "fa-icon", 86), e.qZA()(), e.TgZ(53, "tr")(54, "th", 83), e._uU(55, "Code Snippets"), e.qZA(), e.TgZ(56, "td", 84), e._UZ(57, "fa-icon", 85), e.qZA(), e.TgZ(58, "td", 84), e._UZ(59, "fa-icon", 86), e.qZA()(), e.TgZ(60, "tr")(61, "th", 83), e._uU(62, "Expanded Color System"), e.qZA(), e.TgZ(63, "td", 84), e._UZ(64, "fa-icon", 85), e.qZA(), e.TgZ(65, "td", 84), e._UZ(66, "fa-icon", 86), e.qZA()(), e.TgZ(67, "tr")(68, "th", 83), e._uU(69, "Sidebar Options"), e.qZA(), e.TgZ(70, "td", 84), e._uU(71, "Static Only"), e.qZA(), e.TgZ(72, "td", 84), e._uU(73, "Fixed and Static"), e.qZA()()()()(), e.TgZ(74, "div", 87)(75, "a", 88)(76, "picture"), e._UZ(77, "source", 51)(78, "source", 52)(79, "img", 53), e.qZA()()()(), e.TgZ(80, "div", 84)(81, "a", 89), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeBottomAdmin"))
                    }), e._UZ(82, "fa-icon", 10), e._uU(83, "Preview SB Admin Pro!"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(8), e.hij(" ", o.product.displayName, ""), e.xp6(35), e.Q6J("icon", e.DdM(11, _)), e.xp6(2), e.Q6J("icon", e.DdM(12, l)), e.xp6(5), e.Q6J("icon", e.DdM(13, _)), e.xp6(2), e.Q6J("icon", e.DdM(14, l)), e.xp6(5), e.Q6J("icon", e.DdM(15, _)), e.xp6(2), e.Q6J("icon", e.DdM(16, l)), e.xp6(5), e.Q6J("icon", e.DdM(17, _)), e.xp6(2), e.Q6J("icon", e.DdM(18, l)), e.xp6(15), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(19, U))
                }
            }

            function $o(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 77)(2, "div", 78)(3, "table", 79)(4, "thead")(5, "tr"), e._UZ(6, "th", 80), e.TgZ(7, "th", 81), e._uU(8), e._UZ(9, "br"), e.TgZ(10, "div", 82), e._uU(11, "(Free)"), e.qZA()(), e.TgZ(12, "th", 81), e._uU(13, " SB Admin Pro Angular"), e._UZ(14, "br"), e.TgZ(15, "div", 82), e._uU(16, "(Pro)"), e.qZA()()()(), e.TgZ(17, "tbody")(18, "tr")(19, "th", 83), e._uU(20, "Custom & Extended Components"), e.qZA(), e.TgZ(21, "td", 84), e._uU(22, "5"), e.qZA(), e.TgZ(23, "td", 84), e._uU(24, "70+"), e.qZA()(), e.TgZ(25, "tr")(26, "th", 83), e._uU(27, "Custom CSS Utilities"), e.qZA(), e.TgZ(28, "td", 84), e._uU(29, "10"), e.qZA(), e.TgZ(30, "td", 84), e._uU(31, "100+"), e.qZA()(), e.TgZ(32, "tr")(33, "th", 83), e._uU(34, "Example Pages"), e.qZA(), e.TgZ(35, "td", 84), e._uU(36, "6"), e.qZA(), e.TgZ(37, "td", 84), e._uU(38, "30+"), e.qZA()(), e.TgZ(39, "tr")(40, "th", 83), e._uU(41, "Documentation"), e.qZA(), e.TgZ(42, "td", 84), e._UZ(43, "fa-icon", 85), e.qZA(), e.TgZ(44, "td", 84), e._UZ(45, "fa-icon", 86), e.qZA()(), e.TgZ(46, "tr")(47, "th", 83), e._uU(48, "Email Support"), e.qZA(), e.TgZ(49, "td", 84), e._UZ(50, "fa-icon", 85), e.qZA(), e.TgZ(51, "td", 84), e._UZ(52, "fa-icon", 86), e.qZA()(), e.TgZ(53, "tr")(54, "th", 83), e._uU(55, "Code Snippets"), e.qZA(), e.TgZ(56, "td", 84), e._UZ(57, "fa-icon", 85), e.qZA(), e.TgZ(58, "td", 84), e._UZ(59, "fa-icon", 86), e.qZA()(), e.TgZ(60, "tr")(61, "th", 83), e._uU(62, "Expanded Color System"), e.qZA(), e.TgZ(63, "td", 84), e._UZ(64, "fa-icon", 85), e.qZA(), e.TgZ(65, "td", 84), e._UZ(66, "fa-icon", 86), e.qZA()(), e.TgZ(67, "tr")(68, "th", 83), e._uU(69, "Sidebar Options"), e.qZA(), e.TgZ(70, "td", 84), e._uU(71, "Static Only"), e.qZA(), e.TgZ(72, "td", 84), e._uU(73, "Fixed and Static"), e.qZA()()()()(), e.TgZ(74, "div", 87)(75, "a", 90)(76, "picture"), e._UZ(77, "source", 63)(78, "source", 64)(79, "img", 65), e.qZA()()()(), e.TgZ(80, "div", 84)(81, "a", 91), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeBottomAdminAngular"))
                    }), e._UZ(82, "fa-icon", 10), e._uU(83, "Preview SB Admin Pro Angular!"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(8), e.hij(" ", o.product.displayName, ""), e.xp6(35), e.Q6J("icon", e.DdM(11, _)), e.xp6(2), e.Q6J("icon", e.DdM(12, l)), e.xp6(5), e.Q6J("icon", e.DdM(13, _)), e.xp6(2), e.Q6J("icon", e.DdM(14, l)), e.xp6(5), e.Q6J("icon", e.DdM(15, _)), e.xp6(2), e.Q6J("icon", e.DdM(16, l)), e.xp6(5), e.Q6J("icon", e.DdM(17, _)), e.xp6(2), e.Q6J("icon", e.DdM(18, l)), e.xp6(15), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(19, U))
                }
            }

            function ei(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 77)(2, "div", 78)(3, "table", 79)(4, "thead")(5, "tr"), e._UZ(6, "th", 80), e.TgZ(7, "th", 81), e._uU(8), e._UZ(9, "br"), e.TgZ(10, "div", 82), e._uU(11, "(Free)"), e.qZA()(), e.TgZ(12, "th", 81), e._uU(13, " SB UI Kit Pro"), e._UZ(14, "br"), e.TgZ(15, "div", 82), e._uU(16, "(Pro)"), e.qZA()()()(), e.TgZ(17, "tbody")(18, "tr")(19, "th", 83), e._uU(20, "Landing Page Options"), e.qZA(), e.TgZ(21, "td", 84), e._uU(22, "1"), e.qZA(), e.TgZ(23, "td", 84), e._uU(24, "35+"), e.qZA()(), e.TgZ(25, "tr")(26, "th", 83), e._uU(27, "Documentation"), e.qZA(), e.TgZ(28, "td", 84), e._UZ(29, "fa-icon", 85), e.qZA(), e.TgZ(30, "td", 84), e._UZ(31, "fa-icon", 86), e.qZA()(), e.TgZ(32, "tr")(33, "th", 83), e._uU(34, "Email Support"), e.qZA(), e.TgZ(35, "td", 84), e._UZ(36, "fa-icon", 85), e.qZA(), e.TgZ(37, "td", 84), e._UZ(38, "fa-icon", 86), e.qZA()(), e.TgZ(39, "tr")(40, "th", 83), e._uU(41, "Custom Utilities"), e.qZA(), e.TgZ(42, "td", 84), e._UZ(43, "fa-icon", 85), e.qZA(), e.TgZ(44, "td", 84), e._UZ(45, "fa-icon", 86), e.qZA()(), e.TgZ(46, "tr")(47, "th", 83), e._uU(48, "Expanded Color System"), e.qZA(), e.TgZ(49, "td", 84), e._UZ(50, "fa-icon", 85), e.qZA(), e.TgZ(51, "td", 84), e._UZ(52, "fa-icon", 86), e.qZA()()()()(), e.TgZ(53, "div", 87)(54, "a", 92)(55, "picture"), e._UZ(56, "source", 68)(57, "source", 69)(58, "img", 93), e.qZA()()()(), e.TgZ(59, "div", 84)(60, "a", 94), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeBottomUIKit"))
                    }), e._UZ(61, "fa-icon", 10), e._uU(62, "Preview SB UI Kit Pro!"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(8), e.hij(" ", o.product.displayName, ""), e.xp6(21), e.Q6J("icon", e.DdM(11, _)), e.xp6(2), e.Q6J("icon", e.DdM(12, l)), e.xp6(5), e.Q6J("icon", e.DdM(13, _)), e.xp6(2), e.Q6J("icon", e.DdM(14, l)), e.xp6(5), e.Q6J("icon", e.DdM(15, _)), e.xp6(2), e.Q6J("icon", e.DdM(16, l)), e.xp6(5), e.Q6J("icon", e.DdM(17, _)), e.xp6(2), e.Q6J("icon", e.DdM(18, l)), e.xp6(8), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(19, U))
                }
            }

            function ti(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div")(1, "div", 77)(2, "div", 78)(3, "table", 79)(4, "thead")(5, "tr"), e._UZ(6, "th", 80), e.TgZ(7, "th", 81), e._uU(8), e._UZ(9, "br"), e.TgZ(10, "div", 82), e._uU(11, "(Free)"), e.qZA()(), e.TgZ(12, "th", 81), e._uU(13, " SB UI Kit Pro Angular"), e._UZ(14, "br"), e.TgZ(15, "div", 82), e._uU(16, "(Pro)"), e.qZA()()()(), e.TgZ(17, "tbody")(18, "tr")(19, "th", 83), e._uU(20, "Landing Page Options"), e.qZA(), e.TgZ(21, "td", 84), e._uU(22, "1"), e.qZA(), e.TgZ(23, "td", 84), e._uU(24, "35+"), e.qZA()(), e.TgZ(25, "tr")(26, "th", 83), e._uU(27, "Documentation"), e.qZA(), e.TgZ(28, "td", 84), e._UZ(29, "fa-icon", 85), e.qZA(), e.TgZ(30, "td", 84), e._UZ(31, "fa-icon", 86), e.qZA()(), e.TgZ(32, "tr")(33, "th", 83), e._uU(34, "Email Support"), e.qZA(), e.TgZ(35, "td", 84), e._UZ(36, "fa-icon", 85), e.qZA(), e.TgZ(37, "td", 84), e._UZ(38, "fa-icon", 86), e.qZA()(), e.TgZ(39, "tr")(40, "th", 83), e._uU(41, "Custom Utilities"), e.qZA(), e.TgZ(42, "td", 84), e._UZ(43, "fa-icon", 85), e.qZA(), e.TgZ(44, "td", 84), e._UZ(45, "fa-icon", 86), e.qZA()(), e.TgZ(46, "tr")(47, "th", 83), e._uU(48, "Expanded Color System"), e.qZA(), e.TgZ(49, "td", 84), e._UZ(50, "fa-icon", 85), e.qZA(), e.TgZ(51, "td", 84), e._UZ(52, "fa-icon", 86), e.qZA()()()()(), e.TgZ(53, "div", 87)(54, "a", 95)(55, "picture"), e._UZ(56, "source", 73)(57, "source", 74)(58, "img", 96), e.qZA()()()(), e.TgZ(59, "div", 84)(60, "a", 97), e.NdJ("click", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.upgradeToPro("ProUpgradeFreeThemeBottomUIKitAngular"))
                    }), e._UZ(61, "fa-icon", 10), e._uU(62, "Preview SB UI Kit Pro Angular!"), e.qZA()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(8), e.hij(" ", o.product.displayName, ""), e.xp6(21), e.Q6J("icon", e.DdM(11, _)), e.xp6(2), e.Q6J("icon", e.DdM(12, l)), e.xp6(5), e.Q6J("icon", e.DdM(13, _)), e.xp6(2), e.Q6J("icon", e.DdM(14, l)), e.xp6(5), e.Q6J("icon", e.DdM(15, _)), e.xp6(2), e.Q6J("icon", e.DdM(16, l)), e.xp6(5), e.Q6J("icon", e.DdM(17, _)), e.xp6(2), e.Q6J("icon", e.DdM(18, l)), e.xp6(8), e.Q6J("slug", o.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(19, U))
                }
            }

            function oi(t, r) {
                1 & t && e._UZ(0, "div", 98)
            }
            const ii = function() {
                    return ["fad", "external-link"]
                },
                ni = function() {
                    return ["fad", "eye"]
                },
                ri = function() {
                    return ["fab", "github"]
                },
                si = function() {
                    return ["fad", "file-certificate"]
                };
            let ai = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.analyticsService = o, this.generalService = n, this.platformService = i, this.changeDetectorRef = s, this.prerenderDynamicThemeFreeLoaded = !1
                    }
                    ngOnInit() {
                        this.gitURLBase = this.product.gitSlug ? `https://github.com/startbootstrap/${this.product.gitSlug}` : `https://github.com/startbootstrap/startbootstrap-${this.product.slug}`
                    }
                    ngAfterViewInit() {
                        this.platformService.isServer || (this.prerenderDynamicThemeFreeLoaded = !0, this.changeDetectorRef.detectChanges())
                    }
                    download() {
                        this.analyticsService.sendEventCustom("download", "FREE_DOWNLOAD", this.product.slug), this.generalService.downloaded$(this.product.id).subscribe()
                    }
                    upgradeToPro(o) {
                        this.analyticsService.promotionClicked(o, this.product.slug)
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(u.yD), e.Y36(u.mV), e.Y36(u.mi), e.Y36(e.sBO))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-theme-free"]
                        ],
                        inputs: {
                            product: "product"
                        },
                        decls: 90,
                        vars: 54,
                        consts: [
                            ["sectionClasses", "py-5 bg-light mt-page-header", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "container", "mb-n10", "z-1"],
                            [1, "mb-4", "d-lg-none"],
                            ["data-cy", "productDisplayName", 1, "h1", "mb-0"],
                            [1, "mb-0"],
                            [1, "row"],
                            [1, "col-lg-8"],
                            ["data-cy", "productPreviewLink", "target", "_blank", 1, "preview-img", "shadow", "mb-4", 3, "href"],
                            [1, "preview-img-overlay"],
                            [1, "btn", "btn-white"],
                            [1, "me-1", 3, "icon"],
                            [1, "m-0"],
                            ["type", "image/webp", 3, "srcset"],
                            ["type", "image/jpeg", 3, "srcset"],
                            [1, "img-fluid", 3, "src", "alt"],
                            [1, "d-flex", "justify-content-between", "mb-4"],
                            ["target", "_blank", 1, "btn", "btn-white", "fw-500", "shadow", "me-3", 3, "href"],
                            [1, "d-none", "d-sm-inline"],
                            ["target", "_blank", 1, "btn", "btn-github", "fw-500", "shadow", 3, "href"],
                            [1, "native-standard", 3, "adSense"],
                            [1, "col-lg-4"],
                            [1, "mb-4", "d-none", "d-lg-block"],
                            ["adSense", "", 1, "mb-4", "carbon-inverse", "carbon-container"],
                            ["class", "mb-2", 4, "ngIf"],
                            [1, "mb-4"],
                            [1, "d-grid"],
                            ["sbwInView", "", "promotion", "ProUpgradeFreeThemeTop", 1, "btn", "btn-success-soft", "text-success", "fw-500", 3, "routerLink", "slug", "click"],
                            [1, "card"],
                            [1, "card-body"],
                            [1, "d-flex", "align-items-center", "justify-content-between", "text-xs"],
                            [1, "fw-500"],
                            ["target", "_blank", 1, "text-body", 3, "href"],
                            [4, "ngIf"],
                            ["sectionClasses", "pt-5 pb-10", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "container"],
                            [1, "row", "mb-10"],
                            [1, "mb-5"],
                            [3, "md"],
                            [1, "col-lg-4", "d-none", "d-lg-block"],
                            [1, "position-sticky", "description-sidebar"],
                            [1, "text-center", "mb-5"],
                            [1, "small", "mb-2", "text-muted"],
                            [1, "fst-italic"],
                            ["class", "hidden", "data-cy", "prerenderDynamicThemeFreeLoaded", 4, "ngIf"],
                            [1, "mb-2"],
                            [1, "btn", "btn-primary", "btn-lg", "fw-500", 3, "href", "click"],
                            [1, "me-2", 3, "icon"],
                            ["href", "https://builder.startbootstrap.com/builder/freelancer", "target", "_blank", 1, "btn", "btn-primary-soft", "text-primary", "fw-500"],
                            [1, "small"],
                            [1, "my-3"],
                            ["routerLink", "/theme/sb-admin-pro", 1, "lift", "rounded", "o-hidden", "d-block"],
                            ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro.high.webp"],
                            ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro.png"],
                            ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                            [1, "d-flex", "mb-3"],
                            [1, "flex-shrink-0"],
                            ["src", "assets/img/freepik/upgrade-to-pro-pana.svg", "alt", "Man with pointer SVG", 2, "width", "4rem"],
                            [1, "ms-2"],
                            [1, "small", "mb-2"],
                            [1, "list-unstyled", "small", "fst-italic"],
                            [1, "text-success", "me-1", 3, "icon"],
                            ["routerLink", "/theme/sb-admin-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyAdmin", 1, "btn", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            ["routerLink", "/theme/sb-admin-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block"],
                            ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro-angular.high.webp"],
                            ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro-angular.png"],
                            ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-admin-pro-angular.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                            ["routerLink", "/theme/sb-admin-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyAdminAngular", 1, "btn", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            ["routerLink", "/theme/sb-ui-kit-pro", 1, "lift", "rounded", "o-hidden", "d-block"],
                            ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.high.webp"],
                            ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.png"],
                            ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.png", "alt", "SB UI Kit Pro", 1, "img-fluid"],
                            ["routerLink", "/theme/sb-ui-kit-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyUIKit", 1, "btn", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            ["routerLink", "/theme/sb-ui-kit-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block"],
                            ["type", "image/webp", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.high.webp"],
                            ["type", "image/jpeg", "srcset", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.png"],
                            ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.png", "alt", "SB UI Kit Pro Angular", 1, "img-fluid"],
                            ["routerLink", "/theme/sb-ui-kit-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeStickyUIKitAngular", 1, "btn", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            [1, "row", "align-items-center", "mb-4"],
                            [1, "col-lg-6", "pe-lg-4"],
                            [1, "table", "small"],
                            ["scope", "col", 1, "border-top-0"],
                            ["scope", "col", 1, "border-top-0", "text-center"],
                            [1, "text-xs"],
                            ["scope", "row"],
                            [1, "text-center"],
                            [1, "text-danger", 3, "icon"],
                            [1, "text-success", 3, "icon"],
                            [1, "col-lg-6"],
                            ["routerLink", "/theme/sb-admin-pro", 1, "lift", "rounded", "o-hidden", "d-block", "ms-lg-3", "mb-4"],
                            ["routerLink", "/theme/sb-admin-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomAdmin", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            ["routerLink", "/theme/sb-admin-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block", "ms-lg-3", "mb-4"],
                            ["routerLink", "/theme/sb-admin-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomAdminAngular", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            ["routerLink", "/theme/sb-ui-kit-pro", 1, "lift", "rounded", "o-hidden", "d-block", "ms-lg-3", "mb-4"],
                            ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                            ["routerLink", "/theme/sb-ui-kit-pro", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomUIKit", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            ["routerLink", "/theme/sb-ui-kit-pro-angular", 1, "lift", "rounded", "o-hidden", "d-block", "ms-lg-3", "mb-4"],
                            ["src", "https://assets.startbootstrap.com/img/screenshots/premium/sb-ui-kit-pro-angular.png", "alt", "SB Admin Pro", 1, "img-fluid"],
                            ["routerLink", "/theme/sb-ui-kit-pro-angular", "sbwInView", "", "promotion", "ProUpgradeFreeThemeBottomUIKitAngular", 1, "btn", "btn-lg", "btn-success-soft", "text-success", "fw-500", 3, "slug", "click"],
                            ["data-cy", "prerenderDynamicThemeFreeLoaded", 1, "hidden"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3), e._uU(4), e.qZA(), e.TgZ(5, "p", 4), e._uU(6), e.qZA()(), e.TgZ(7, "div", 5)(8, "div", 6)(9, "a", 7)(10, "div", 8)(11, "div", 9), e._UZ(12, "fa-icon", 10), e._uU(13, "Launch Live Preview"), e.qZA()(), e.TgZ(14, "figure", 11)(15, "picture"), e._UZ(16, "source", 12), e.ALo(17, "safe"), e.ALo(18, "webpExt"), e._UZ(19, "source", 13), e.ALo(20, "safe"), e._UZ(21, "img", 14), e.ALo(22, "safe"), e.qZA()()(), e.TgZ(23, "div", 15)(24, "div")(25, "a", 16), e._UZ(26, "fa-icon", 10), e.TgZ(27, "span", 17), e._uU(28, "Live\xa0 "), e.qZA(), e._uU(29, "Preview"), e.qZA(), e.TgZ(30, "a", 18), e._UZ(31, "fa-icon", 10), e._uU(32, "View Source"), e.TgZ(33, "span", 17), e._uU(34, "\xa0Code"), e.qZA()()()(), e._UZ(35, "div", 19), e.qZA(), e.TgZ(36, "div", 20)(37, "div", 21)(38, "h1", 4), e._uU(39), e.qZA(), e.TgZ(40, "p", 4), e._uU(41), e.qZA()(), e._UZ(42, "div", 22), e.YNc(43, jo, 5, 3, "div", 23), e.YNc(44, Yo, 5, 2, "div", 23), e.TgZ(45, "div", 24)(46, "div", 25)(47, "button", 26), e.NdJ("click", function() {
                                return i.upgradeToPro("ProUpgradeFreeThemeTop")
                            }), e._UZ(48, "fa-icon", 10), e._uU(49, "Upgrade to Pro"), e.qZA()()(), e.TgZ(50, "div", 27)(51, "div", 28)(52, "div", 29)(53, "div", 30), e._uU(54, "License"), e.qZA(), e.TgZ(55, "div"), e._UZ(56, "fa-icon", 10), e.TgZ(57, "a", 31), e._uU(58, "MIT License"), e.qZA()()(), e._UZ(59, "hr"), e.YNc(60, Go, 31, 2, "ng-container", 32), e.YNc(61, Ho, 34, 15, "ng-container", 32), e.qZA()()()()()(), e.TgZ(62, "sbpro-page-section", 33)(63, "div", 34)(64, "div", 35)(65, "div", 6)(66, "div", 36), e._UZ(67, "sbw-markdown-html", 37), e.qZA(), e.TgZ(68, "div", 27)(69, "div", 28), e._UZ(70, "sbw-disqus"), e.qZA()()(), e.TgZ(71, "div", 38)(72, "div", 39), e.YNc(73, Vo, 37, 11, "div", 32), e.YNc(74, zo, 37, 11, "div", 32), e.YNc(75, Wo, 37, 11, "div", 32), e.YNc(76, Xo, 37, 11, "div", 32), e.qZA()()(), e.TgZ(77, "div", 40)(78, "div", 41), e._uU(79, "Like our free products? Our pro products are even better!"), e.qZA(), e.TgZ(80, "h3"), e._uU(81, "Go "), e.TgZ(82, "span", 42), e._uU(83, "Pro "), e.qZA(), e._uU(84, "Today!"), e.qZA()(), e.YNc(85, Ko, 84, 20, "div", 32), e.YNc(86, $o, 84, 20, "div", 32), e.YNc(87, ei, 63, 20, "div", 32), e.YNc(88, ti, 63, 20, "div", 32), e.qZA()(), e.YNc(89, oi, 1, 0, "div", 43)), 2 & n && (e.xp6(4), e.Oqu(i.product.displayName), e.xp6(2), e.Oqu(i.product.description.shortDescription), e.xp6(3), e.Q6J("href", "previews/" + i.product.slug, e.LSH), e.xp6(3), e.Q6J("icon", e.DdM(49, ii)), e.xp6(4), e.Q6J("srcset", e.Dn7(17, 34, e.xi3(18, 38, null == i.product.images ? null : i.product.images.primaryImage.high, "high"), "resourceURL", "NONE")), e.xp6(3), e.Q6J("srcset", e.Dn7(20, 41, null == i.product.images ? null : i.product.images.primaryImage.high, "resourceURL", "NONE")), e.xp6(2), e.Q6J("src", e.Dn7(22, 45, null == i.product.images ? null : i.product.images.primaryImage.high, "resourceURL", "NONE"), e.LSH)("alt", null == i.product.images ? null : i.product.images.primaryImage.alt), e.xp6(4), e.Q6J("href", "previews/" + i.product.slug, e.LSH), e.xp6(1), e.Q6J("icon", e.DdM(50, ni)), e.xp6(4), e.Q6J("href", i.gitURLBase, e.LSH), e.xp6(1), e.Q6J("icon", e.DdM(51, ri)), e.xp6(4), e.Q6J("adSense", "horizontal"), e.xp6(4), e.Oqu(i.product.displayName), e.xp6(2), e.Oqu(i.product.description.shortDescription), e.xp6(2), e.Q6J("ngIf", !i.product.noDownload), e.xp6(1), e.Q6J("ngIf", "freelancer" === i.product.slug), e.xp6(3), e.Q6J("routerLink", "/theme/" + i.product.proUpsell)("slug", i.product.slug), e.xp6(1), e.Q6J("icon", e.DdM(52, U)), e.xp6(8), e.Q6J("icon", e.DdM(53, si)), e.xp6(1), e.MGl("href", "", i.gitURLBase, "/blob/master/LICENSE", e.LSH), e.xp6(3), e.Q6J("ngIf", !i.prerenderDynamicThemeFreeLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeFreeLoaded), e.xp6(6), e.Q6J("md", i.product.description.longDescription), e.xp6(6), e.Q6J("ngIf", "sb-admin-pro" === i.product.proUpsell), e.xp6(1), e.Q6J("ngIf", "sb-admin-pro-angular" === i.product.proUpsell), e.xp6(1), e.Q6J("ngIf", "sb-ui-kit-pro" === i.product.proUpsell), e.xp6(1), e.Q6J("ngIf", "sb-ui-kit-pro-angular" === i.product.proUpsell), e.xp6(9), e.Q6J("ngIf", "sb-admin-pro" === i.product.proUpsell), e.xp6(1), e.Q6J("ngIf", "sb-admin-pro-angular" === i.product.proUpsell), e.xp6(1), e.Q6J("ngIf", "sb-ui-kit-pro" === i.product.proUpsell), e.xp6(1), e.Q6J("ngIf", "sb-ui-kit-pro-angular" === i.product.proUpsell), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeFreeLoaded))
                        },
                        dependencies: [a.O5, d.rH, m.g, Q.k, z.Y, Z.Z, oe.z, v.BN, a.JJ, a.uU, _e.jQ, A.y, F.r],
                        changeDetection: 0
                    })
                }
                return t
            })();
            const ci = {
                angular: {
                    tooltip: "Fully integrated with the Angular 9+ web application framework",
                    url: "assets/img/brand-logos/angular-icon.svg",
                    alt: "Angular Logo"
                },
                bootstrap_4: {
                    tooltip: "Built with Bootstrap, the world\u2019s most popular front-end open source toolkit",
                    url: "assets/img/brand-logos/bootstrap-4.svg",
                    alt: "Bootstrap Logo"
                },
                bootstrap_5: {
                    tooltip: "Built with Bootstrap, the world\u2019s most popular front-end open source toolkit",
                    url: "assets/img/brand-logos/bootstrap-5.svg",
                    alt: "Bootstrap 5 Logo"
                },
                css: {
                    tooltip: "Custom components, utilities, and other features built with CSS",
                    url: "assets/img/brand-logos/css-3.svg",
                    alt: "CSS 3 Logo"
                },
                html: {
                    tooltip: "Clean, adaptable, and fully responsive HTML build files",
                    url: "assets/img/brand-logos/html-5.svg",
                    alt: "HTML 5 Logo"
                },
                pug: {
                    tooltip: "HTML templating made easy with Pug source files",
                    url: "assets/img/brand-logos/pug.svg",
                    alt: "Pug Logo"
                },
                sass: {
                    tooltip: "Source files built with the premier CSS extension language",
                    url: "assets/img/brand-logos/sass.svg",
                    alt: "Sass Logo"
                },
                typescript: {
                    tooltip: "Build more efficient, scalable web applications with TypeScript",
                    url: "assets/img/brand-logos/typescript.svg",
                    alt: "Typescript Logo"
                },
                vue: {
                    tooltip: "Built with the versatile, progressive JavaScript framework, Vue.js",
                    url: "assets/img/brand-logos/vue-js.svg",
                    alt: "Vue JS Logo"
                }
            };
            let be = (() => {
                class t {
                    ngOnInit() {
                        this.techStackIcon = ci[this.iconName]
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-tech-stack-icon"]
                        ],
                        inputs: {
                            iconName: "iconName"
                        },
                        decls: 3,
                        vars: 7,
                        consts: [
                            ["placement", "bottom", 1, "icon-tech-stack", 3, "ngbTooltip"],
                            [3, "src", "alt"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "div", 0), e._UZ(1, "img", 1), e.ALo(2, "safe"), e.qZA()), 2 & n && (e.Q6J("ngbTooltip", i.techStackIcon.tooltip), e.xp6(1), e.Q6J("src", e.Dn7(2, 3, i.techStackIcon.url, "resourceURL", "NONE"), e.LSH)("alt", i.techStackIcon.alt))
                        },
                        dependencies: [L._L, A.y],
                        styles: [".icon-tech-stack[_ngcontent-%COMP%]{display:flex;height:3.5rem;width:3.5rem;align-items:center;justify-content:center;border-radius:100%;box-shadow:0 .15rem 1.75rem #21283226;flex-shrink:0;margin-right:.5rem;margin-left:.5rem;margin-bottom:1rem}.icon-tech-stack[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:1.5rem}"],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var pi = c(9411);

            function li(t, r) {
                if (1 & t && (e.TgZ(0, "div", 9)(1, "div", 1)(2, "div", 10)(3, "div", 3)(4, "strong"), e._uU(5, "Start Bootstrap "), e.qZA(), e.TgZ(6, "span", 4), e._uU(7, "(developer response)"), e.qZA()()(), e.TgZ(8, "div", 7)(9, "p"), e._uU(10), e.qZA()()()()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(10), e.Oqu(o.review.response)
                }
            }
            let di = (() => {
                class t {
                    constructor() {}
                    ngOnInit() {}
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-product-review"]
                        ],
                        inputs: {
                            review: "review"
                        },
                        decls: 16,
                        vars: 8,
                        consts: [
                            [1, "card", "mb-4"],
                            [1, "card-body"],
                            [1, "d-flex", "align-items-md-center", "justify-content-md-between", "flex-column", "flex-md-row", "small", "mb-3"],
                            [1, "me-md-1"],
                            [1, "fst-italic"],
                            [1, "ms-md-1"],
                            [3, "reviewedStars"],
                            [1, "review-content"],
                            ["class", "card ms-5", 4, "ngIf"],
                            [1, "card", "ms-5"],
                            [1, "d-flex", "small", "mb-3"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "strong"), e._uU(5), e.qZA(), e.TgZ(6, "span", 4), e._uU(7, "(verified owner)"), e.qZA(), e._uU(8), e.ALo(9, "date"), e.qZA(), e.TgZ(10, "div", 5), e._UZ(11, "sbw-rating-stars", 6), e.qZA()(), e.TgZ(12, "div", 7)(13, "p"), e._uU(14), e.qZA()()()(), e.YNc(15, li, 11, 1, "div", 8)), 2 & n && (e.xp6(5), e.hij("", i.review.userAbbreviatedName, " "), e.xp6(3), e.hij(" \u2013 ", e.xi3(9, 5, i.review.createdAt, "longDate"), ""), e.xp6(3), e.Q6J("reviewedStars", i.review.stars), e.xp6(3), e.Oqu(i.review.review), e.xp6(1), e.Q6J("ngIf", i.review.response))
                        },
                        dependencies: [a.O5, pi.V, a.uU],
                        changeDetection: 0
                    })
                }
                return t
            })();

            function ui(t, r) {
                if (1 & t && e._UZ(0, "sbw-product-review", 5), 2 & t) {
                    const o = e.oxw().$implicit;
                    e.Q6J("review", o)
                }
            }

            function gi(t, r) {
                if (1 & t && (e.TgZ(0, "div", 0), e.YNc(1, ui, 1, 1, "sbw-product-review", 4), e.qZA()), 2 & t) {
                    const o = r.$implicit;
                    e.xp6(1), e.Q6J("ngIf", o.approved)
                }
            }
            let mi = (() => {
                class t {
                    constructor() {}
                    ngOnInit() {}
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-product-reviews"]
                        ],
                        inputs: {
                            reviews: "reviews"
                        },
                        decls: 5,
                        vars: 1,
                        consts: [
                            [1, "mb-4"],
                            [1, "row"],
                            [1, "col-lg-8"],
                            ["class", "mb-4", 4, "ngFor", "ngForOf"],
                            [3, "review", 4, "ngIf"],
                            [3, "review"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "h2", 0), e._uU(1, "Product Reviews"), e.qZA(), e.TgZ(2, "div", 1)(3, "div", 2), e.YNc(4, gi, 2, 1, "div", 3), e.qZA()()), 2 & n && (e.xp6(4), e.Q6J("ngForOf", i.reviews))
                        },
                        dependencies: [a.sg, a.O5, di],
                        changeDetection: 0
                    })
                }
                return t
            })();
            const hi = ["licenseTable"],
                fi = ["couponToast"],
                q = function() {
                    return ["fad", "shopping-cart"]
                };

            function _i(t, r) {
                1 & t && (e.ynx(0), e._UZ(1, "fa-icon", 17), e.TgZ(2, "span"), e._uU(3, "Buy Now - $XX"), e.qZA(), e.BQk()), 2 & t && (e.xp6(1), e.Q6J("icon", e.DdM(1, q)))
            }

            function bi(t, r) {
                if (1 & t && (e.TgZ(0, "span", 58), e._uU(1), e.ALo(2, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(1), e.hij("Buy Now - ", e.gM2(2, 1, o.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function vi(t, r) {
                if (1 & t && (e.TgZ(0, "span", 59), e._uU(1, "Buy Now - "), e.TgZ(2, "del", 60), e._uU(3), e.ALo(4, "currency"), e.qZA(), e._uU(5), e.ALo(6, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(3), e.Oqu(e.gM2(4, 2, o.cheapestPricing.price / 100, "USD", "symbol", "1.0")), e.xp6(2), e.hij(" ", e.gM2(6, 7, o.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Zi(t, r) {
                if (1 & t && (e.ynx(0), e._UZ(1, "fa-icon", 17), e.YNc(2, bi, 3, 6, "span", 56), e.YNc(3, vi, 7, 12, "span", 57), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("icon", e.DdM(3, q)), e.xp6(1), e.Q6J("ngIf", !o.cheapestPricing.salePrice), e.xp6(1), e.Q6J("ngIf", o.cheapestPricing.salePrice)
                }
            }
            const T = function() {
                return ["fas", "star"]
            };

            function wi(t, r) {
                1 & t && (e.TgZ(0, "div", 48)(1, "div", 61)(2, "div", 62), e._UZ(3, "fa-icon", 63)(4, "fa-icon", 63)(5, "fa-icon", 63)(6, "fa-icon", 63)(7, "fa-icon", 63), e.qZA(), e._uU(8, " (X customer reviews) "), e.qZA(), e._UZ(9, "hr"), e.TgZ(10, "div", 64)(11, "div", 65), e._uU(12, "Total Sales"), e.qZA(), e.TgZ(13, "div"), e._UZ(14, "fa-icon", 17), e._uU(15, "X,XXX"), e.qZA()(), e._UZ(16, "hr"), e.TgZ(17, "div", 64)(18, "div", 65), e._uU(19, "Released"), e.qZA(), e.TgZ(20, "div"), e._uU(21, "XXX XX, XXXX"), e.qZA()(), e._UZ(22, "hr"), e.TgZ(23, "div", 64)(24, "div", 65), e._uU(25, "Last Update"), e.qZA(), e.TgZ(26, "div"), e._uU(27, "X XXXX ago"), e.qZA()(), e._UZ(28, "hr"), e.TgZ(29, "div", 64)(30, "div", 65), e._uU(31, "Product Version"), e.qZA(), e.TgZ(32, "div"), e._uU(33, "X.X.X"), e.qZA()(), e._UZ(34, "hr"), e.TgZ(35, "div", 64)(36, "div", 65), e._uU(37, "Bootstrap Version"), e.qZA(), e.TgZ(38, "div"), e._uU(39, "X.X.X"), e.qZA()()()), 2 & t && (e.xp6(3), e.Q6J("icon", e.DdM(6, T)), e.xp6(1), e.Q6J("icon", e.DdM(7, T)), e.xp6(1), e.Q6J("icon", e.DdM(8, T)), e.xp6(1), e.Q6J("icon", e.DdM(9, T)), e.xp6(1), e.Q6J("icon", e.DdM(10, T)), e.xp6(7), e.Q6J("icon", e.DdM(11, q)))
            }

            function yi(t, r) {
                if (1 & t && (e.TgZ(0, "div", 48)(1, "div", 61)(2, "div", 62), e._UZ(3, "fa-icon", 63)(4, "fa-icon", 63)(5, "fa-icon", 63)(6, "fa-icon", 63)(7, "fa-icon", 63), e.qZA(), e._uU(8), e.qZA(), e._UZ(9, "hr"), e.TgZ(10, "div", 64)(11, "div", 65), e._uU(12, "Total Sales"), e.qZA(), e.TgZ(13, "div"), e._UZ(14, "fa-icon", 17), e._uU(15), e.ALo(16, "number"), e.qZA()(), e._UZ(17, "hr"), e.TgZ(18, "div", 64)(19, "div", 65), e._uU(20, "Released"), e.qZA(), e.TgZ(21, "div"), e._uU(22), e.ALo(23, "date"), e.qZA()(), e._UZ(24, "hr"), e.TgZ(25, "div", 64)(26, "div", 65), e._uU(27, "Last Update"), e.qZA(), e.TgZ(28, "div"), e._uU(29), e.ALo(30, "formatDistanceToNow"), e.qZA()(), e._UZ(31, "hr"), e.TgZ(32, "div", 64)(33, "div", 65), e._uU(34, "Product Version"), e.qZA(), e.TgZ(35, "div"), e._uU(36), e.qZA()(), e._UZ(37, "hr"), e.TgZ(38, "div", 64)(39, "div", 65), e._uU(40, "Bootstrap Version"), e.qZA(), e.TgZ(41, "div"), e._uU(42), e.qZA()()()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(3), e.Q6J("icon", e.DdM(20, T)), e.xp6(1), e.Q6J("icon", e.DdM(21, T)), e.xp6(1), e.Q6J("icon", e.DdM(22, T)), e.xp6(1), e.Q6J("icon", e.DdM(23, T)), e.xp6(1), e.Q6J("icon", e.DdM(24, T)), e.xp6(1), e.hij(" (", o.product.reviews.length, " customer reviews) "), e.xp6(6), e.Q6J("icon", e.DdM(25, q)), e.xp6(1), e.Oqu(e.Dn7(16, 12, o.product.downloadCount, "1.0", "en-US")), e.xp6(7), e.Oqu(e.lcZ(23, 16, o.product.releasedDate)), e.xp6(7), e.hij("", e.lcZ(30, 18, o.product.updatedDate), " ago"), e.xp6(7), e.Oqu(o.product.productVersion), e.xp6(6), e.Oqu(o.product.bootstrapVersion)
                }
            }

            function Ti(t, r) {
                1 & t && (e.ynx(0), e._UZ(1, "fa-icon", 17), e.TgZ(2, "span"), e._uU(3, "Buy Now - $XX"), e.qZA(), e.BQk()), 2 & t && (e.xp6(1), e.Q6J("icon", e.DdM(1, q)))
            }

            function Ai(t, r) {
                if (1 & t && (e.TgZ(0, "span", 68), e._uU(1), e.ALo(2, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(1), e.hij("Buy Now - ", e.gM2(2, 1, o.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Ui(t, r) {
                if (1 & t && (e.TgZ(0, "span", 69), e._uU(1, "Buy Now - "), e.TgZ(2, "del", 60), e._uU(3), e.ALo(4, "currency"), e.qZA(), e._uU(5), e.ALo(6, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(3), e.Oqu(e.gM2(4, 2, o.cheapestPricing.price / 100, "USD", "symbol", "1.0")), e.xp6(2), e.hij(" ", e.gM2(6, 7, o.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function xi(t, r) {
                if (1 & t && (e.ynx(0), e._UZ(1, "fa-icon", 17), e.YNc(2, Ai, 3, 6, "span", 66), e.YNc(3, Ui, 7, 12, "span", 67), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("icon", e.DdM(3, q)), e.xp6(1), e.Q6J("ngIf", !o.cheapestPricing.salePrice), e.xp6(1), e.Q6J("ngIf", o.cheapestPricing.salePrice)
                }
            }

            function qi(t, r) {
                1 & t && (e._UZ(0, "sbw-tech-stack-icon", 70), e.ALo(1, "lowercase")), 2 & t && e.Q6J("iconName", e.lcZ(1, 1, r.$implicit))
            }

            function ki(t, r) {
                if (1 & t && (e.ynx(0), e._UZ(1, "fa-icon", 17), e.TgZ(2, "span"), e._uU(3), e.qZA(), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("icon", e.DdM(2, q)), e.xp6(2), e.hij("Buy ", o.product.displayName, " - $XX")
                }
            }

            function Ci(t, r) {
                if (1 & t && (e.TgZ(0, "span", 73), e._uU(1), e.ALo(2, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(1), e.AsE("Buy ", o.product.displayName, " - ", e.gM2(2, 2, o.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Si(t, r) {
                if (1 & t && (e.TgZ(0, "span", 74), e._uU(1), e.TgZ(2, "del", 60), e._uU(3), e.ALo(4, "currency"), e.qZA(), e._uU(5), e.ALo(6, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(1), e.hij("Buy ", o.product.displayName, " - "), e.xp6(2), e.Oqu(e.gM2(4, 3, o.cheapestPricing.price / 100, "USD", "symbol", "1.0")), e.xp6(2), e.hij(" ", e.gM2(6, 8, o.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Bi(t, r) {
                if (1 & t && (e.ynx(0), e._UZ(1, "fa-icon", 17), e.YNc(2, Ci, 3, 7, "span", 71), e.YNc(3, Si, 7, 13, "span", 72), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("icon", e.DdM(3, q)), e.xp6(1), e.Q6J("ngIf", !o.cheapestPricing.salePrice), e.xp6(1), e.Q6J("ngIf", o.cheapestPricing.salePrice)
                }
            }

            function Ii(t, r) {
                1 & t && e._UZ(0, "div", 75)
            }
            const Pi = function() {
                    return ["fad", "external-link"]
                },
                Di = function() {
                    return ["fad", "eye"]
                },
                Li = function() {
                    return ["fad", "books"]
                },
                Qi = function() {
                    return ["fad", "badge-check"]
                };
            let Ni = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.utilityService = o, this.analyticsService = n, this.platformService = i, this.changeDetectorRef = s, this.prerenderDynamicThemeProLoaded = !1
                    }
                    ngOnInit() {
                        this.cheapestPricing = this._setCheapestPricing(this.product)
                    }
                    ngAfterViewInit() {
                        this.platformService.isServer || (this.prerenderDynamicThemeProLoaded = !0, this.changeDetectorRef.detectChanges())
                    }
                    buyNow(o) {
                        const i = this.licenseTable.elementRef.nativeElement.getBoundingClientRect().top + this.utilityService.window.pageYOffset - 96;
                        this.utilityService.window.scrollTo({
                            top: i,
                            behavior: "smooth"
                        }), this.analyticsService.sendEventCustom("buy-now-leader", "theme-pro-page", o)
                    }
                    _setCheapestPricing(o) {
                        return o.pricingsMapped.freelancer ? o.pricingsMapped.freelancer : o.pricingsMapped.developer
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(u.tI), e.Y36(u.yD), e.Y36(u.mi), e.Y36(e.sBO))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-theme-pro"]
                        ],
                        viewQuery: function(n, i) {
                            if (1 & n && (e.Gf(hi, 5), e.Gf(fi, 5, e.Rgc)), 2 & n) {
                                let s;
                                e.iGM(s = e.CRH()) && (i.licenseTable = s.first), e.iGM(s = e.CRH()) && (i.couponToast = s.first)
                            }
                        },
                        inputs: {
                            product: "product"
                        },
                        decls: 126,
                        vars: 47,
                        consts: [
                            ["sectionClasses", "py-5 bg-light mt-page-header", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "container"],
                            [1, "mb-4", "d-lg-none"],
                            ["data-cy", "productDisplayName", 1, "mb-0"],
                            [1, "mb-0"],
                            [1, "row"],
                            [1, "col-lg-8"],
                            ["data-cy", "productPreviewLink", "target", "_blank", 1, "preview-img", "shadow", "mb-4", 3, "href"],
                            [1, "preview-img-overlay"],
                            [1, "btn", "btn-white"],
                            [1, "text-gray-600", "me-1", 3, "icon"],
                            [1, "m-0"],
                            ["type", "image/webp", 3, "srcset"],
                            ["type", "image/jpeg", 3, "srcset"],
                            [1, "img-fluid", 3, "src", "alt"],
                            [1, "d-flex", "justify-content-between", "mb-4", "mb-lg-0"],
                            ["target", "_blank", 1, "btn", "btn-white", "shadow", "me-3", 3, "href"],
                            [1, "me-1", 3, "icon"],
                            [1, "d-none", "d-sm-inline"],
                            [1, "col-lg-4"],
                            [1, "mb-4", "d-none", "d-lg-block"],
                            [1, "mb-4"],
                            [1, "d-grid"],
                            [1, "btn", "btn-primary", "btn-lg", "fw-500", "shadow", 3, "click"],
                            [4, "ngIf"],
                            [1, "card", "mb-3"],
                            ["class", "card-body", 4, "ngIf"],
                            [1, "text-center"],
                            [1, "badge", "bg-yellow", "rounded-pill", "fw-500"],
                            ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [3, "md"],
                            [1, "position-sticky", "description-sidebar"],
                            [1, "btn", "btn-primary", "btn-lg", "fw-500", "shadow", "mb-4", 3, "click"],
                            [1, "icons-tech", "justify-content-center"],
                            [3, "iconName", 4, "ngFor", "ngForOf"],
                            ["sectionClasses", "py-5 bg-light", "borderType", "angled", "borderClasses", "text-white"],
                            ["licenseTable", ""],
                            [1, "row", "justify-content-center"],
                            [1, "col-lg-7"],
                            [1, "text-center", "mb-3"],
                            [1, "text-primary"],
                            ["sectionClasses", "pb-5", "borderType", "angled", "borderClasses", "text-light"],
                            [3, "product"],
                            [3, "reviews"],
                            [1, "row", "mb-4"],
                            [1, "col-lg-4", "mb-4", "mb-lg-0"],
                            [1, "card", "h-100"],
                            [1, "card-body"],
                            [1, "card-text", "text-xs"],
                            [1, "card-footer", "d-flex", "align-items-center", "justify-content-between"],
                            [1, "text-xs", "fst-italic"],
                            [1, "badge", "bg-green-soft", "text-green", "text-green"],
                            [1, "mt-10"],
                            [1, "col-lg-6", "text-center"],
                            ["class", "hidden", "data-cy", "prerenderDynamicThemeProLoaded", 4, "ngIf"],
                            ["data-cy", "buyNowButton", 4, "ngIf"],
                            ["data-cy", "buyNowSaleButton", 4, "ngIf"],
                            ["data-cy", "buyNowButton"],
                            ["data-cy", "buyNowSaleButton"],
                            [1, "text-white-50"],
                            [1, "text-center", "text-xs"],
                            [1, "text-yellow"],
                            [3, "icon"],
                            [1, "d-flex", "align-items-center", "justify-content-between", "text-xs"],
                            [1, "fw-500"],
                            ["data-cy", "buyNowButtonSticky", 4, "ngIf"],
                            ["data-cy", "buyNowSaleButtonSticky", 4, "ngIf"],
                            ["data-cy", "buyNowButtonSticky"],
                            ["data-cy", "buyNowSaleButtonSticky"],
                            [3, "iconName"],
                            ["data-cy", "buyNowButtonFooter", 4, "ngIf"],
                            ["data-cy", "buyNowSaleButtonFooter", 4, "ngIf"],
                            ["data-cy", "buyNowButtonFooter"],
                            ["data-cy", "buyNowSaleButtonFooter"],
                            ["data-cy", "prerenderDynamicThemeProLoaded", 1, "hidden"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-section", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3), e._uU(4), e.qZA(), e.TgZ(5, "p", 4), e._uU(6), e.qZA()(), e.TgZ(7, "div", 5)(8, "div", 6)(9, "a", 7)(10, "div", 8)(11, "div", 9), e._UZ(12, "fa-icon", 10), e._uU(13, "Launch Live Preview"), e.qZA()(), e.TgZ(14, "figure", 11)(15, "picture"), e._UZ(16, "source", 12), e.ALo(17, "safe"), e.ALo(18, "webpExt"), e._UZ(19, "source", 13), e.ALo(20, "safe"), e._UZ(21, "img", 14), e.ALo(22, "safe"), e.qZA()()(), e.TgZ(23, "div", 15)(24, "div")(25, "a", 16), e._UZ(26, "fa-icon", 17), e.TgZ(27, "span", 18), e._uU(28, "Live "), e.qZA(), e._uU(29, "Preview"), e.qZA(), e.TgZ(30, "a", 16), e._UZ(31, "fa-icon", 17), e._uU(32, "Documentation"), e.qZA()()()(), e.TgZ(33, "div", 19)(34, "div", 20)(35, "h1", 4), e._uU(36), e.qZA(), e.TgZ(37, "p", 4), e._uU(38), e.qZA()(), e.TgZ(39, "div", 21)(40, "div", 22)(41, "button", 23), e.NdJ("click", function() {
                                return i.buyNow("top")
                            }), e.YNc(42, _i, 4, 2, "ng-container", 24), e.YNc(43, Zi, 4, 4, "ng-container", 24), e.qZA()()(), e.TgZ(44, "div", 25), e.YNc(45, wi, 40, 12, "div", 26), e.YNc(46, yi, 43, 26, "div", 26), e.qZA(), e.TgZ(47, "div", 27)(48, "div", 28), e._UZ(49, "fa-icon", 17), e._uU(50, "Verified Pro Product"), e.qZA()()()()()(), e.TgZ(51, "sbpro-page-section", 29)(52, "div", 1)(53, "div", 5)(54, "div", 30), e._UZ(55, "sbw-markdown-html", 31), e.qZA(), e.TgZ(56, "div", 19)(57, "div", 32)(58, "div", 22)(59, "button", 33), e.NdJ("click", function() {
                                return i.buyNow("sticky")
                            }), e.YNc(60, Ti, 4, 2, "ng-container", 24), e.YNc(61, xi, 4, 4, "ng-container", 24), e.qZA()(), e.TgZ(62, "div", 34), e.YNc(63, qi, 2, 3, "sbw-tech-stack-icon", 35), e.qZA()()()()()(), e.TgZ(64, "sbpro-page-section", 36, 37)(66, "div", 1)(67, "div", 38)(68, "div", 39)(69, "div", 40)(70, "h2"), e._uU(71, "Join over "), e.TgZ(72, "span", 41), e._uU(73, "12,000,000+"), e.qZA(), e._uU(74, " developers who have downloaded Start Bootstrap's themes since 2013!"), e.qZA()()()()()(), e.TgZ(75, "sbpro-page-section", 42), e._UZ(76, "sbw-license-table", 43), e.qZA(), e.TgZ(77, "sbpro-page-section", 36)(78, "div", 1), e._UZ(79, "sbw-product-reviews", 44), e.qZA()(), e.TgZ(80, "sbpro-page-section", 29)(81, "div", 1)(82, "h3", 21), e._uU(83, "See what others have to say about our products..."), e.qZA(), e.TgZ(84, "div", 45)(85, "div", 46)(86, "div", 47)(87, "div", 48)(88, "p", 49), e._uU(89, "I've purchased a theme from you and I just want to thank you for really nice structured code, a really nice project setup, and most importantly introducing .pug templates to me. I've never worked with them before and I've discovered how they are a joy to work with!"), e.qZA()(), e.TgZ(90, "div", 50)(91, "div", 51), e._uU(92, "M. Laco"), e.qZA(), e.TgZ(93, "div", 52), e._uU(94, "Verified Purchase"), e.qZA()()()(), e.TgZ(95, "div", 46)(96, "div", 47)(97, "div", 48)(98, "p", 49), e._uU(99, "I love the fact that your template doesn\u2019t stray too far if at all from the bootstrap conventions and I find myself periodically referring to their docs with great success."), e.qZA()(), e.TgZ(100, "div", 50)(101, "div", 51), e._uU(102, "V. Menendez"), e.qZA(), e.TgZ(103, "div", 52), e._uU(104, "Verified Purchase"), e.qZA()()()(), e.TgZ(105, "div", 19)(106, "div", 47)(107, "div", 48)(108, "p", 49), e._uU(109, "I've been coding websites for 12 years now, and I have never seen coding as neat, well commented and easy to follow as I see in your templates. It's just beautiful. I just wanted to write a short note saying that you're doing an amazing job."), e.qZA()(), e.TgZ(110, "div", 50)(111, "div", 51), e._uU(112, "C. Vogel"), e.qZA(), e.TgZ(113, "div", 52), e._uU(114, "Verified Purchase"), e.qZA()()()()(), e.TgZ(115, "div", 53)(116, "div", 38)(117, "div", 54)(118, "h3"), e._uU(119, "Ready to get started?"), e.qZA(), e.TgZ(120, "p"), e._uU(121, "Join over 12,000,000 developers who have already downloaded Bootstrap themes and templates from Start Bootstrap. We are committed to quality code, intuitive design, and best practices when building our products."), e.qZA(), e.TgZ(122, "button", 33), e.NdJ("click", function() {
                                return i.buyNow("footer")
                            }), e.YNc(123, ki, 4, 3, "ng-container", 24), e.YNc(124, Bi, 4, 4, "ng-container", 24), e.qZA()()()()()(), e.YNc(125, Ii, 1, 0, "div", 55)), 2 & n && (e.xp6(4), e.Oqu(i.product.displayName), e.xp6(2), e.Oqu(i.product.description.bump), e.xp6(3), e.Q6J("href", "previews/" + i.product.slug, e.LSH), e.xp6(3), e.Q6J("icon", e.DdM(43, Pi)), e.xp6(4), e.Q6J("srcset", e.Dn7(17, 28, e.xi3(18, 32, null == i.product.images ? null : i.product.images.primaryImage.high, "high"), "resourceURL", "NONE")), e.xp6(3), e.Q6J("srcset", e.Dn7(20, 35, null == i.product.images ? null : i.product.images.primaryImage.high, "resourceURL", "NONE")), e.xp6(2), e.Q6J("src", e.Dn7(22, 39, null == i.product.images ? null : i.product.images.primaryImage.high, "resourceURL", "NONE"), e.LSH)("alt", null == i.product.images ? null : i.product.images.primaryImage.alt), e.xp6(4), e.Q6J("href", "previews/" + i.product.slug, e.LSH), e.xp6(1), e.Q6J("icon", e.DdM(44, Di)), e.xp6(4), e.Q6J("href", "https://docs.startbootstrap.com/" + i.product.slug, e.LSH), e.xp6(1), e.Q6J("icon", e.DdM(45, Li)), e.xp6(5), e.Oqu(i.product.displayName), e.xp6(2), e.Oqu(i.product.description.bump), e.xp6(4), e.Q6J("ngIf", !i.prerenderDynamicThemeProLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeProLoaded), e.xp6(2), e.Q6J("ngIf", !i.prerenderDynamicThemeProLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeProLoaded), e.xp6(3), e.Q6J("icon", e.DdM(46, Qi)), e.xp6(6), e.Q6J("md", i.product.description.longDescription), e.xp6(5), e.Q6J("ngIf", !i.prerenderDynamicThemeProLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeProLoaded), e.xp6(2), e.Q6J("ngForOf", i.product.technologies), e.xp6(13), e.Q6J("product", i.product), e.xp6(3), e.Q6J("reviews", i.product.reviews), e.xp6(44), e.Q6J("ngIf", !i.prerenderDynamicThemeProLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeProLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeProLoaded))
                        },
                        dependencies: [a.sg, a.O5, H.s, m.g, Q.k, v.BN, be, mi, a.i8, a.JJ, a.H9, a.uU, _e.jQ, A.y, F.r],
                        changeDetection: 0
                    })
                }
                return t
            })();
            const Ji = ["licenseTable"];

            function Fi(t, r) {
                1 & t && e._UZ(0, "img", 33)
            }

            function Mi(t, r) {
                1 & t && e._UZ(0, "img", 34)
            }

            function Oi(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "span"), e._uU(2, "Buy Now - $XX"), e.qZA(), e.BQk())
            }

            function Ei(t, r) {
                if (1 & t && (e.TgZ(0, "span", 37), e._uU(1), e.ALo(2, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(1), e.hij("Buy Now - ", e.gM2(2, 1, o.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function ji(t, r) {
                if (1 & t && (e.TgZ(0, "span", 38), e._uU(1, "Buy Now - "), e.TgZ(2, "del", 39), e._uU(3), e.ALo(4, "currency"), e.qZA(), e._uU(5), e.ALo(6, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(3), e.Oqu(e.gM2(4, 2, o.cheapestPricing.price / 100, "USD", "symbol", "1.0")), e.xp6(2), e.hij(" ", e.gM2(6, 7, o.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Ri(t, r) {
                if (1 & t && (e.ynx(0), e.YNc(1, Ei, 3, 6, "span", 35), e.YNc(2, ji, 7, 12, "span", 36), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", !o.cheapestPricing.salePrice), e.xp6(1), e.Q6J("ngIf", o.cheapestPricing.salePrice)
                }
            }

            function Yi(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "span"), e._uU(2, "Buy Now - $XX"), e.qZA(), e.BQk())
            }

            function Gi(t, r) {
                if (1 & t && (e.TgZ(0, "span", 42), e._uU(1), e.ALo(2, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(1), e.hij("Buy Now - ", e.gM2(2, 1, o.cheapestPricing.price / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Hi(t, r) {
                if (1 & t && (e.TgZ(0, "span", 43), e._uU(1, "Buy Now - "), e.TgZ(2, "del", 44), e._uU(3), e.ALo(4, "currency"), e.qZA(), e._uU(5), e.ALo(6, "currency"), e.qZA()), 2 & t) {
                    const o = e.oxw(2);
                    e.xp6(3), e.Oqu(e.gM2(4, 2, o.cheapestPricing.price / 100, "USD", "symbol", "1.0")), e.xp6(2), e.hij(" ", e.gM2(6, 7, o.cheapestPricing.salePrice / 100, "USD", "symbol", "1.0"), "")
                }
            }

            function Vi(t, r) {
                if (1 & t && (e.ynx(0), e.YNc(1, Gi, 3, 6, "span", 40), e.YNc(2, Hi, 7, 12, "span", 41), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", !o.cheapestPricing.salePrice), e.xp6(1), e.Q6J("ngIf", o.cheapestPricing.salePrice)
                }
            }

            function zi(t, r) {
                1 & t && (e._UZ(0, "sbw-tech-stack-icon", 45), e.ALo(1, "lowercase")), 2 & t && e.Q6J("iconName", e.lcZ(1, 1, r.$implicit))
            }

            function Wi(t, r) {
                1 & t && e._UZ(0, "div", 46)
            }
            const ve = function() {
                return ["fad", "shopping-cart"]
            };
            let Xi = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.utilityService = o, this.analyticsService = n, this.changeDetectorRef = i, this.platformService = s, this.productClass = "", this.prerenderDynamicThemeBundleLoaded = !1
                    }
                    ngOnInit() {
                        this._productChangeProcessing()
                    }
                    ngOnChanges(o) {
                        o.product.firstChange || o.product && (this.product = o.product.currentValue, this._productChangeProcessing(), this.changeDetectorRef.detectChanges())
                    }
                    ngAfterViewInit() {
                        this.platformService.isServer || (this.prerenderDynamicThemeBundleLoaded = !0, this.changeDetectorRef.detectChanges())
                    }
                    _productChangeProcessing() {
                        "pro-angular-bundle" === this.product.slug && (this.productClass = "overlay-angular"), "pro-html-bundle" === this.product.slug && (this.productClass = "overlay-html"), this.cheapestPricing = this._setCheapestPricing(this.product)
                    }
                    buyNow(o) {
                        const i = this.licenseTable.elementRef.nativeElement.getBoundingClientRect().top + this.utilityService.window.pageYOffset - 96;
                        this.utilityService.window.scrollTo({
                            top: i,
                            behavior: "smooth"
                        }), this.analyticsService.sendEventCustom("buy-now-leader", "theme-bundle-page", o)
                    }
                    _setCheapestPricing(o) {
                        return o.pricingsMapped.freelancer ? o.pricingsMapped.freelancer : o.pricingsMapped.developer
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(u.tI), e.Y36(u.yD), e.Y36(e.sBO), e.Y36(u.mi))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-theme-bundle"]
                        ],
                        viewQuery: function(n, i) {
                            if (1 & n && e.Gf(Ji, 5), 2 & n) {
                                let s;
                                e.iGM(s = e.CRH()) && (i.licenseTable = s.first)
                            }
                        },
                        inputs: {
                            product: "product"
                        },
                        features: [e.TTD],
                        decls: 44,
                        vars: 17,
                        consts: [
                            ["borderType", "rounded", "borderClasses", "text-white", 3, "headerClasses"],
                            [1, "container", "z-1"],
                            [1, "row", "justify-content-center"],
                            [1, "col-lg-8", "text-center"],
                            [1, "bundle-tech-img", "mb-4"],
                            ["src", "assets/img/brand-logos/bootstrap-4.svg", "alt", "Bootstrap Logo", 4, "ngIf"],
                            ["src", "assets/img/brand-logos/angular-icon.svg", "alt", "Angular Logo", 4, "ngIf"],
                            ["data-cy", "productDisplayName", 1, "bundle-heading", "text-white", "mb-0"],
                            [1, "lead", "text-white-75", "mb-4"],
                            [1, "mb-4"],
                            [1, "btn", "btn-white", "fw-500", "shadow", 3, "click"],
                            [1, "text-gray-500", "me-2", 3, "icon"],
                            [4, "ngIf"],
                            ["sectionClasses", "py-5", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "container"],
                            [1, "row"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [3, "md"],
                            [1, "col-lg-4"],
                            [1, "position-sticky", "description-sidebar"],
                            [1, "d-grid"],
                            [1, "btn", "btn-primary", "btn-lg", "fw-500", "shadow", "mb-4", 3, "click"],
                            [1, "me-1", 3, "icon"],
                            [1, "icons-tech", "justify-content-center"],
                            [3, "iconName", 4, "ngFor", "ngForOf"],
                            ["sectionClasses", "py-5 bg-light", "borderType", "angled", "borderClasses", "text-white"],
                            ["licenseTable", ""],
                            [1, "col-lg-7"],
                            [1, "text-center", "mb-3"],
                            [1, "text-primary"],
                            ["sectionClasses", "pb-5", "borderType", "angled", "borderClasses", "text-light"],
                            [3, "product"],
                            ["class", "hidden", "data-cy", "prerenderDynamicThemeBundleLoaded", 4, "ngIf"],
                            ["src", "assets/img/brand-logos/bootstrap-4.svg", "alt", "Bootstrap Logo"],
                            ["src", "assets/img/brand-logos/angular-icon.svg", "alt", "Angular Logo"],
                            ["data-cy", "buyNowButton", 4, "ngIf"],
                            ["data-cy", "buyNowSaleButton", 4, "ngIf"],
                            ["data-cy", "buyNowButton"],
                            ["data-cy", "buyNowSaleButton"],
                            [1, "text-gray-500"],
                            ["data-cy", "buyNowButtonSticky", 4, "ngIf"],
                            ["data-cy", "buyNowSaleButtonSticky", 4, "ngIf"],
                            ["data-cy", "buyNowButtonSticky"],
                            ["data-cy", "buyNowSaleButtonSticky"],
                            [1, "text-white-50"],
                            [3, "iconName"],
                            ["data-cy", "prerenderDynamicThemeBundleLoaded", 1, "hidden"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4), e.YNc(5, Fi, 1, 0, "img", 5), e.YNc(6, Mi, 1, 0, "img", 6), e.qZA(), e.TgZ(7, "h1", 7), e._uU(8), e.qZA(), e.TgZ(9, "p", 8), e._uU(10), e.qZA(), e.TgZ(11, "div", 9)(12, "button", 10), e.NdJ("click", function() {
                                return i.buyNow("top")
                            }), e._UZ(13, "fa-icon", 11), e.YNc(14, Oi, 3, 0, "ng-container", 12), e.YNc(15, Ri, 3, 2, "ng-container", 12), e.qZA()()()()()(), e.TgZ(16, "sbpro-page-section", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16), e._UZ(20, "sbw-markdown-html", 17), e.qZA(), e.TgZ(21, "div", 18)(22, "div", 19)(23, "div", 20)(24, "button", 21), e.NdJ("click", function() {
                                return i.buyNow("sticky")
                            }), e._UZ(25, "fa-icon", 22), e.YNc(26, Yi, 3, 0, "ng-container", 12), e.YNc(27, Vi, 3, 2, "ng-container", 12), e.qZA()(), e.TgZ(28, "div", 23), e.YNc(29, zi, 2, 3, "sbw-tech-stack-icon", 24), e.qZA()()()()()(), e.TgZ(30, "sbpro-page-section", 25, 26)(32, "div", 14)(33, "div", 2)(34, "div", 27)(35, "div", 28)(36, "h2"), e._uU(37, "Join over "), e.TgZ(38, "span", 29), e._uU(39, "12,000,000+"), e.qZA(), e._uU(40, " developers who have downloaded Start Bootstrap's themes since 2013!"), e.qZA()()()()()(), e.TgZ(41, "sbpro-page-section", 30), e._UZ(42, "sbw-license-table", 31), e.qZA(), e.YNc(43, Wi, 1, 0, "div", 32)), 2 & n && (e.Q6J("headerClasses", "bg-bundle bg-img-cover overlay overlay-80 mt-page-header py-10 " + i.productClass), e.xp6(5), e.Q6J("ngIf", "pro-html-bundle" === i.product.slug), e.xp6(1), e.Q6J("ngIf", "pro-angular-bundle" === i.product.slug), e.xp6(2), e.Oqu(i.product.displayName), e.xp6(2), e.Oqu(i.product.description.bump), e.xp6(3), e.Q6J("icon", e.DdM(15, ve)), e.xp6(1), e.Q6J("ngIf", !i.prerenderDynamicThemeBundleLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeBundleLoaded), e.xp6(5), e.Q6J("md", i.product.description.longDescription), e.xp6(5), e.Q6J("icon", e.DdM(16, ve)), e.xp6(1), e.Q6J("ngIf", !i.prerenderDynamicThemeBundleLoaded), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeBundleLoaded), e.xp6(2), e.Q6J("ngForOf", i.product.technologies), e.xp6(13), e.Q6J("product", i.product), e.xp6(1), e.Q6J("ngIf", i.prerenderDynamicThemeBundleLoaded))
                        },
                        dependencies: [a.sg, a.O5, H.s, b.q, m.g, Q.k, v.BN, be, a.i8, a.H9],
                        changeDetection: 0
                    })
                }
                return t
            })();

            function Ki(t, r) {
                if (1 & t && e._UZ(0, "sbw-theme-free", 2), 2 & t) {
                    const o = e.oxw(2);
                    e.Q6J("product", o.product)
                }
            }

            function $i(t, r) {
                if (1 & t && e._UZ(0, "sbw-theme-pro", 2), 2 & t) {
                    const o = e.oxw(2);
                    e.Q6J("product", o.product)
                }
            }

            function en(t, r) {
                if (1 & t && e._UZ(0, "sbw-theme-bundle", 2), 2 & t) {
                    const o = e.oxw(2);
                    e.Q6J("product", o.product)
                }
            }

            function tn(t, r) {
                if (1 & t && (e.ynx(0), e.YNc(1, Ki, 1, 1, "sbw-theme-free", 1), e.YNc(2, $i, 1, 1, "sbw-theme-pro", 1), e.YNc(3, en, 1, 1, "sbw-theme-bundle", 1), e.BQk()), 2 & t) {
                    const o = e.oxw();
                    e.xp6(1), e.Q6J("ngIf", !0 === o.product.free), e.xp6(1), e.Q6J("ngIf", !1 === o.product.free && !1 === o.product.bundle), e.xp6(1), e.Q6J("ngIf", !1 === o.product.free && !0 === o.product.bundle)
                }
            }
            let M = (() => {
                    class t {
                        constructor(o, n, i, s) {
                            this.route = o, this.productsService = n, this.changeDetectorRef = i, this.router = s, this.subscription = new w.w0
                        }
                        ngOnInit() {
                            this.subscription.add((0, Y.a)([this.route.paramMap, this.productsService.products$]).subscribe(([o, n]) => {
                                const i = o.get("productSlug"),
                                    s = n.find(g => g.slug === i);
                                if (!s) return this.router.navigate(["/error/404"]);
                                this.product = s, this.changeDetectorRef.detectChanges()
                            }))
                        }
                        ngOnDestroy() {
                            this.subscription.unsubscribe()
                        }
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)(e.Y36(d.gz), e.Y36(D.su), e.Y36(e.sBO), e.Y36(d.F0))
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-product"]
                            ],
                            decls: 1,
                            vars: 1,
                            consts: [
                                [4, "ngIf"],
                                [3, "product", 4, "ngIf"],
                                [3, "product"]
                            ],
                            template: function(n, i) {
                                1 & n && e.YNc(0, tn, 4, 3, "ng-container", 0), 2 & n && e.Q6J("ngIf", i.product)
                            },
                            dependencies: [a.O5, ai, Ni, Xi],
                            changeDetection: 0
                        })
                    }
                    return t
                })(),
                Ze = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-about-us"]
                            ],
                            decls: 49,
                            vars: 0,
                            consts: [
                                ["headerClasses", "bg-light page-header-ui-light", "borderType", "angled", "borderClasses", "text-white"],
                                [1, "page-header-ui-content", "pb-4"],
                                [1, "container"],
                                [1, "row", "align-items-center"],
                                [1, "col-lg-8", "mb-4", "mb-lg-0"],
                                [1, "page-header-ui-title"],
                                [1, "page-header-ui-text", "mb-0"],
                                [1, "col-lg-4"],
                                ["adSense", "", 1, "carbon-container", "carbon-inverse"],
                                ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                                [1, "row"],
                                [1, "col-lg-8"],
                                [1, "mb-5"],
                                [1, "mb-0"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "About Us"), e.qZA(), e.TgZ(7, "p", 6), e._uU(8, "We design and develop expertly coded, Bootstrap based UI tools to help designers and developers build beautiful and powerful web applications."), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "sbpro-page-section", 9)(12, "div", 2)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "h2"), e._uU(17, "Rooted in Open Source"), e.qZA(), e._UZ(18, "hr"), e.TgZ(19, "p"), e._uU(20, "Founded in 2013, Start Bootstrap has been the most popular library of free, open source Bootstrap themes on the web for over seven years. At the very start, the mission was simply to create and share free, open source, and easy to download Bootstrap themes without sacrificing quality. To this day, we still prioritize our one-click downloads without having to enter any information, and we use the MIT license for our free products so you don't have to use our name in the footer of your website."), e.qZA(), e.TgZ(21, "p"), e._uU(22, "Up until 2020, Start Bootstrap only featured free products with development supported by minimal advertising and affiliate partnerships. In 2020 however, after numerous requests for the past seven years, we began creating premium, paid products that were much more comprehensive and fully tooled versions of some of our most popular freebies."), e.qZA(), e.TgZ(23, "p", 13), e._uU(24, "Moving forward, we will be focusing on maintaining the quality and design of our free, open source products along with our new, more powerful pro products. Thank you for visiting Start Bootstrap!"), e.qZA()(), e.TgZ(25, "div", 12)(26, "h2"), e._uU(27, "Meet the Devs"), e.qZA(), e._UZ(28, "hr"), e.TgZ(29, "p"), e._uU(30, "Start Bootstrap was founded by and maintained by David Miller in 2013. In 2020, Sam Artioli joined the company. The expertise he has brought to the table has now allowed us to develop more powerful products using new technologies, along with an expanded vision for the company."), e.qZA()(), e.TgZ(31, "div", 12)(32, "h3"), e._uU(33, "David Miller"), e.qZA(), e.TgZ(34, "p"), e._uU(35, "David is the founder of Start Bootstrap. Before creating Start Bootstrap, he was a web designer at the University of Central Florida as well as a freelance web designer working with local clients."), e.qZA(), e.TgZ(36, "p"), e._uU(37, "Since 2013, he has worked on maintaining Start Bootstrap, and thanks to the exposure gained from Start Bootstrap, he has been able to successfully work as a contract developer building out UI's for clients and organizations worldwide."), e.qZA()(), e.TgZ(38, "div", 12)(39, "h3"), e._uU(40, "Sam Artioli"), e.qZA(), e.TgZ(41, "p"), e._uU(42, "Sam is a Technologist, Technology Executive, and Entrepreneur with 20+ years of experience in technology. Sam has a solid career foundation, including 7 years at Apple (2000 - 2007) and 5 years with Disney (2011 - 2016), while taking a few years off in-between to travel the world and attempt his first startup."), e.qZA(), e.TgZ(43, "p"), e._uU(44, "Most recently, Sam lead the technology initiatives at Abe.ai, a white-label chatbot software for community banks and credit unions, which was successfully acquired by Envestnet in January 2019."), e.qZA(), e.TgZ(45, "p"), e._uU(46, "As of January 2020, Sam joined forces with David to help expand Start Bootstrap."), e.qZA(), e.TgZ(47, "p"), e._uU(48, "Apart from creating amazing software, Sam also enjoys spending time with his family, capoeira, piano, guitar, running and any form of surf/wake/snow/skate boarding."), e.qZA()()()()()())
                            },
                            dependencies: [b.q, m.g, Z.Z],
                            changeDetection: 0
                        })
                    }
                    return t
                })();
            var on = c(9197);

            function nn(t, r) {
                1 & t && (e.TgZ(0, "div", 27), e._uU(1, "Team Size required."), e.qZA())
            }

            function rn(t, r) {
                1 & t && (e.TgZ(0, "div", 27), e._uU(1, "Project Budget required."), e.qZA())
            }

            function sn(t, r) {
                1 & t && (e.TgZ(0, "div", 27), e._uU(1, "Contact Email required."), e.qZA())
            }

            function an(t, r) {
                1 & t && (e.TgZ(0, "div", 27), e._uU(1, "Email is not valid."), e.qZA())
            }

            function cn(t, r) {
                1 & t && (e.TgZ(0, "div", 27), e._uU(1, "Project Timeline required."), e.qZA())
            }

            function pn(t, r) {
                1 & t && (e.TgZ(0, "div", 27), e._uU(1, "Please tell us a little bit about the project."), e.qZA())
            }

            function ln(t, r) {
                if (1 & t) {
                    const o = e.EpF();
                    e.TgZ(0, "div", 11)(1, "div", 12)(2, "p", 13), e._uU(3, "We provide a whitelabeled, single or multi-tenant platform that takes you from zero to deployment in a fraction of the time it would take a build out a fully functional web application from scratch."), e.qZA(), e.TgZ(4, "p", 14), e._uU(5, "We utilize our own pro products along with our proprietary platform to deliver powerful applications in record time. Please fill out the form below with information about your project and we will get back to you as soon as possible."), e.qZA(), e.TgZ(6, "form", 15), e.NdJ("ngSubmit", function() {
                        e.CHM(o);
                        const i = e.oxw();
                        return e.KtG(i.submitCustomDevelopment())
                    }), e.TgZ(7, "h2", 16), e._uU(8, "Tell us about your project..."), e.qZA(), e.TgZ(9, "div", 16)(10, "div", 11)(11, "div", 17), e._UZ(12, "input", 18), e.YNc(13, nn, 2, 0, "div", 19), e.qZA(), e.TgZ(14, "div", 17)(15, "select", 20)(16, "option", 21), e._uU(17, "Project Budget"), e.qZA(), e.TgZ(18, "option"), e._uU(19, "Less than $50,000"), e.qZA(), e.TgZ(20, "option"), e._uU(21, "$50,000 - $250,000"), e.qZA(), e.TgZ(22, "option"), e._uU(23, "$250,000 - $1,000,000"), e.qZA(), e.TgZ(24, "option"), e._uU(25, "Over $1,000,000"), e.qZA()(), e.YNc(26, rn, 2, 0, "div", 19), e.qZA()()(), e.TgZ(27, "div", 16)(28, "div", 11)(29, "div", 17), e._UZ(30, "input", 22), e.YNc(31, sn, 2, 0, "div", 19), e.YNc(32, an, 2, 0, "div", 19), e.qZA(), e.TgZ(33, "div", 17)(34, "select", 23)(35, "option", 21), e._uU(36, "Project Timeline"), e.qZA(), e.TgZ(37, "option"), e._uU(38, "3 Months"), e.qZA(), e.TgZ(39, "option"), e._uU(40, "6 Months"), e.qZA(), e.TgZ(41, "option"), e._uU(42, "9 Months"), e.qZA(), e.TgZ(43, "option"), e._uU(44, "1 Year"), e.qZA(), e.TgZ(45, "option"), e._uU(46, "2 Years +"), e.qZA()(), e.YNc(47, cn, 2, 0, "div", 19), e.qZA()()(), e.TgZ(48, "div", 16), e._UZ(49, "textarea", 24), e.YNc(50, pn, 2, 0, "div", 19), e.qZA(), e.TgZ(51, "div", 16)(52, "button", 25), e._uU(53, "Submit"), e.qZA()(), e.TgZ(54, "p", 26), e._uU(55, "Note: Project budget estimates are in USD. If you are a startup, we will consider non-dilutive equity."), e.qZA()()()()
                }
                if (2 & t) {
                    const o = e.oxw();
                    e.xp6(6), e.Q6J("formGroup", o.customDevelopmentForm), e.xp6(6), e.ekj("is-invalid", o.teamSizeControlInvalid), e.xp6(1), e.Q6J("ngIf", o.teamSizeControl.hasError("required")), e.xp6(2), e.ekj("is-invalid", o.projectBudgetControlInvalid), e.xp6(11), e.Q6J("ngIf", o.projectBudgetControl.hasError("notDefault")), e.xp6(4), e.ekj("is-invalid", o.contactEmailControlInvalid), e.xp6(1), e.Q6J("ngIf", o.contactEmailControl.hasError("required")), e.xp6(1), e.Q6J("ngIf", o.contactEmailControl.hasError("email")), e.xp6(2), e.ekj("is-invalid", o.projectTimelineControlInvalid), e.xp6(13), e.Q6J("ngIf", o.projectTimelineControl.hasError("notDefault")), e.xp6(2), e.ekj("is-invalid", o.detailsControlInvalid), e.xp6(1), e.Q6J("ngIf", o.detailsControl.hasError("required")), e.xp6(2), e.Q6J("disabled", o.customDevelopmentForm.invalid)
                }
            }

            function dn(t, r) {
                1 & t && (e.TgZ(0, "div", 11)(1, "div", 12)(2, "div", 28)(3, "div", 29), e._UZ(4, "img", 30), e.TgZ(5, "div", 31), e._uU(6, "Message Sent!"), e.qZA(), e.TgZ(7, "div", 32), e._uU(8, "Thank you for your inquiry. We will get back to you as soon as possible."), e.qZA()()()()())
            }
            let we = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.fb = o, this.overlayService = n, this.generalService = i, this.changeDetectorRef = s, this.customDevelopmentForm = this.fb.group({
                            teamSize: ["", [h.kI.required]],
                            projectBudget: ["Project Budget", [h.kI.required, this.notDefault("Project Budget")]],
                            contactEmail: ["", [h.kI.required, h.kI.email]],
                            projectTimeline: ["Project Timeline", [h.kI.required, this.notDefault("Project Timeline")]],
                            details: ["", [h.kI.required]]
                        }), this.formSubmitted = !1
                    }
                    ngOnInit() {}
                    submitCustomDevelopment() {
                        this.overlayService.show(on.n.text, "One sec, while we relay the message..."), this.generalService.submitCustomDevelopment$(this.customDevelopmentForm.value).subscribe(() => {
                            this.overlayService.hide(), this.formSubmitted = !0, this.changeDetectorRef.detectChanges()
                        })
                    }
                    notDefault(o) {
                        return n => o === n.value ? {
                            notDefault: {
                                value: n.value
                            }
                        } : null
                    }
                    get teamSizeControl() {
                        return this.customDevelopmentForm.get("teamSize")
                    }
                    get teamSizeControlValid() {
                        return this.teamSizeControl.touched && !this.teamSizeControlInvalid
                    }
                    get teamSizeControlInvalid() {
                        return this.teamSizeControl.touched && this.teamSizeControl.hasError("required")
                    }
                    get projectBudgetControl() {
                        return this.customDevelopmentForm.get("projectBudget")
                    }
                    get projectBudgetControlValid() {
                        return this.projectBudgetControl.touched && !this.projectBudgetControlInvalid
                    }
                    get projectBudgetControlInvalid() {
                        return this.projectBudgetControl.touched && (this.projectBudgetControl.hasError("required") || this.projectBudgetControl.hasError("notDefault"))
                    }
                    get contactEmailControl() {
                        return this.customDevelopmentForm.get("contactEmail")
                    }
                    get contactEmailControlValid() {
                        return this.contactEmailControl.touched && !this.contactEmailControlInvalid
                    }
                    get contactEmailControlInvalid() {
                        return this.contactEmailControl.touched && (this.contactEmailControl.hasError("required") || this.contactEmailControl.hasError("email"))
                    }
                    get projectTimelineControl() {
                        return this.customDevelopmentForm.get("projectTimeline")
                    }
                    get projectTimelineControlValid() {
                        return this.projectTimelineControl.touched && !this.projectTimelineControlInvalid
                    }
                    get projectTimelineControlInvalid() {
                        return this.projectTimelineControl.touched && (this.projectTimelineControl.hasError("required") || this.projectTimelineControl.hasError("notDefault"))
                    }
                    get detailsControl() {
                        return this.customDevelopmentForm.get("details")
                    }
                    get detailsControlValid() {
                        return this.detailsControl.touched && !this.detailsControlInvalid
                    }
                    get detailsControlInvalid() {
                        return this.detailsControl.touched && this.detailsControl.hasError("required")
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(h.qu), e.Y36(u.F0), e.Y36(u.mV), e.Y36(e.sBO))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-custom-development"]
                        ],
                        decls: 15,
                        vars: 2,
                        consts: [
                            ["headerClasses", "bg-light page-header-ui-light", "borderType", "angled", "borderClasses", "text-white"],
                            [1, "page-header-ui-content", "pb-4"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-8", "mb-4", "mb-lg-0"],
                            [1, "page-header-ui-title"],
                            [1, "page-header-ui-text", "mb-0"],
                            [1, "col-lg-4"],
                            ["adSense", "", 1, "carbon-container", "carbon-inverse"],
                            ["sectionClasses", "pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            ["class", "row", 4, "ngIf"],
                            [1, "row"],
                            [1, "col-lg-8"],
                            [1, "lead"],
                            [1, "mb-5"],
                            [1, "mb-5", 3, "formGroup", "ngSubmit"],
                            [1, "mb-3"],
                            [1, "col"],
                            ["type", "text", "placeholder", "Team Size", "formControlName", "teamSize", 1, "form-control"],
                            ["class", "invalid-feedback", 4, "ngIf"],
                            ["formControlName", "projectBudget", 1, "form-control"],
                            ["selected", "", "disabled", ""],
                            ["type", "text", "placeholder", "Contact Email", "formControlName", "contactEmail", 1, "form-control"],
                            ["formControlName", "projectTimeline", 1, "form-control"],
                            ["rows", "9", "placeholder", "Share some details about your project...", "formControlName", "details", 1, "form-control"],
                            ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"],
                            [1, "small", "fst-italic"],
                            [1, "invalid-feedback"],
                            [1, "card", "my-4"],
                            [1, "card-body", "p-5", "text-center"],
                            ["src", "assets/img/freepik/mailbox-pana.svg", "alt", "Message Submitted", 1, "img-fluid", "mb-4", 2, "width", "10rem"],
                            [1, "h3"],
                            [1, "fst-italic"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "Custom Bootstrap Design & Development"), e.qZA(), e.TgZ(7, "p", 6), e._uU(8, "You can hire the Start Bootstrap team for custom development projects"), e.qZA()(), e.TgZ(9, "div", 7), e._UZ(10, "div", 8), e.qZA()()()()(), e.TgZ(11, "sbpro-page-section", 9)(12, "div", 2), e.YNc(13, ln, 56, 18, "div", 10), e.YNc(14, dn, 9, 0, "div", 10), e.qZA()()), 2 & n && (e.xp6(13), e.Q6J("ngIf", !i.formSubmitted), e.xp6(1), e.Q6J("ngIf", i.formSubmitted))
                        },
                        dependencies: [a.O5, h._Y, h.YN, h.Kr, h.Fj, h.EJ, h.JJ, h.JL, h.sg, h.u, b.q, m.g, Z.Z],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var ye = c(314);
            const un = ["howItWorks"],
                gn = ["getStartedNow"],
                mn = function() {
                    return ["fas", "play"]
                },
                I = function() {
                    return ["fad", "question-circle"]
                };
            let Te = (() => {
                class t {
                    constructor(o, n, i, s) {
                        this.utilityService = o, this.navigationService = n, this.bannerService = i, this.videoService = s
                    }
                    ngOnInit() {}
                    howItWorksScroll() {
                        const o = this.howItWorks.nativeElement.getBoundingClientRect().top + this.utilityService.window.scrollY - this.navigationService.navHeight - this.bannerService.bannerHeight - 40;
                        this.utilityService.window.scrollTo({
                            top: o,
                            behavior: "smooth"
                        })
                    }
                    getStartedNowScroll() {
                        const o = this.getStartedNow.nativeElement.getBoundingClientRect().top + this.utilityService.window.scrollY - this.navigationService.navHeight - this.bannerService.bannerHeight - 40;
                        this.utilityService.window.scrollTo({
                            top: o,
                            behavior: "smooth"
                        })
                    }
                    playHowItWorks() {
                        this.videoService.playVideo$("Pydk0lEmkeg").subscribe()
                    }
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)(e.Y36(u.tI), e.Y36(ce.f5), e.Y36(u.QD), e.Y36(u.kI))
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-solution-contact-forms"]
                        ],
                        viewQuery: function(n, i) {
                            if (1 & n && (e.Gf(un, 5), e.Gf(gn, 5)), 2 & n) {
                                let s;
                                e.iGM(s = e.CRH()) && (i.howItWorks = s.first), e.iGM(s = e.CRH()) && (i.getStartedNow = s.first)
                            }
                        },
                        decls: 136,
                        vars: 14,
                        consts: [
                            ["headerClasses", "bg-light page-header-ui-light", "borderType", "rounded", "borderClasses", "text-white"],
                            [1, "page-header-ui-content", "py-10"],
                            [1, "container"],
                            [1, "row", "align-items-center", "justify-content-center", "mb-lg-5"],
                            [1, "col-lg-9", "mb-5", "mb-lg-0", "text-center"],
                            [1, "badge", "bg-primary-soft", "text-primary", "fw-500", "mb-2"],
                            [1, "display-4", "fw-600", "mb-3"],
                            [1, "lead", "mb-4"],
                            [1, "text-dark"],
                            [1, "btn", "btn-primary", "btn-lg", "fw-500", "shadow", "mx-2", 3, "click"],
                            [1, "btn", "btn-primary-soft", "text-primary", "btn-lg", "fw-500", "mx-2", 3, "click"],
                            ["sectionClasses", "py-10"],
                            [1, "row", "justify-content-center"],
                            [1, "col-xl-8", "col-lg-10", "text-center"],
                            [1, "video-card", "card", "mt-n15", "mb-10", "lift", "pointer", 3, "click"],
                            ["howItWorks", ""],
                            [1, "card-body", "justify-content-center"],
                            [1, "position-relative", "overlay", "overlay-20"],
                            ["size", "3x", 1, "play-button", 3, "icon"],
                            ["type", "image/webp", "srcset", "https://storage.googleapis.com/assets.startbootstrap.com/img/forms/video-thumbnail-website.webp"],
                            ["src", "https://storage.googleapis.com/assets.startbootstrap.com/img/forms/video-thumbnail-website.png", "alt", "forms product intro", 1, "img-fluid"],
                            [1, "text-center", "mb-5", "mt-3"],
                            [1, "mb-1"],
                            [1, "lead", "mb-0"],
                            [1, "row", "justify-content-center", "align-items-center", "mb-5"],
                            [1, "col-lg-7"],
                            [1, "card", "bg-dark", "mb-5", "mb-lg-0", "p-xl-4"],
                            [1, "card-body"],
                            [1, "mb-0"],
                            [1, "text-white-75", "small"],
                            [1, "text-cyan"],
                            [1, "col-lg-5"],
                            [1, "ps-lg-3"],
                            ["routerLink", "/sb-form-builder", 1, "fw-500"],
                            [1, "text-center"],
                            [1, "btn", "btn-lg", "btn-primary", "fw-500", "mx-2", "mb-2", 3, "click"],
                            ["sectionClasses", "py-10 bg-light"],
                            [1, "col-xl-8"],
                            [1, "text-dark", "display-6", "fw-600", "mb-3"],
                            [1, "fs-1", "fw-400", "mb-0"],
                            [1, "text-primary"],
                            [1, "text-center", "mt-4"],
                            ["sectionClasses", "pb-5 pt-10", "borderType", "angled", "borderClasses", "text-dark"],
                            ["getStartedNow", ""],
                            ["sectionClasses", "py-10 bg-dark", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "mb-5", "text-white", "text-center"],
                            [1, "row"],
                            [1, "col-lg-6"],
                            [1, "d-flex", "mb-4"],
                            ["size", "2x", 1, "text-light", 3, "icon"],
                            [1, "ms-4"],
                            [1, "h4", "text-white"],
                            [1, "text-white-75"],
                            [1, "d-flex", "mb-4", "mb-lg-0"],
                            [1, "d-flex"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5), e._uU(6, "Now available!"), e.qZA(), e.TgZ(7, "h1", 6), e._uU(8, "Create functional Bootstrap forms with easy setup"), e.qZA(), e.TgZ(9, "p", 7), e._uU(10, "Contact forms can be tricky, so we built "), e.TgZ(11, "strong", 8), e._uU(12, "Start Bootstrap Forms. "), e.qZA(), e._uU(13, "In minutes, you can set up your form and start getting form submissions straight to your inbox."), e.qZA(), e.TgZ(14, "a", 9), e.NdJ("click", function() {
                                return i.getStartedNowScroll()
                            }), e._uU(15, "Try it free"), e.qZA(), e.TgZ(16, "a", 10), e.NdJ("click", function() {
                                return i.howItWorksScroll()
                            }), e._uU(17, "See how it works"), e.qZA()()()()()(), e.TgZ(18, "sbpro-page-section", 11)(19, "div", 2)(20, "div", 12)(21, "div", 13)(22, "div", 14, 15), e.NdJ("click", function() {
                                return i.playHowItWorks()
                            }), e.TgZ(24, "div", 16)(25, "div", 17), e._UZ(26, "fa-icon", 18), e.TgZ(27, "picture"), e._UZ(28, "source", 19)(29, "img", 20), e.qZA()()()()()(), e.TgZ(30, "div", 21)(31, "h2", 22), e._uU(32, "Setting up contact forms has never been easier"), e.qZA(), e.TgZ(33, "p", 23), e._uU(34, "Here's how our service works"), e.qZA()(), e.TgZ(35, "div", 24)(36, "div", 25)(37, "div", 26)(38, "div", 27)(39, "pre", 28)(40, "code", 29), e._uU(41, '<form id="contactForm" '), e.TgZ(42, "span", 30), e._uU(43, 'data-sb-form-api-token="API_TOKEN"'), e.qZA(), e._uU(44, '>\n    <input type="text" name="something">\n    <button id="submitButton" type="submit">Submit</button>\n</form>\n \n<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"><\/script>'), e.qZA()()()()(), e.TgZ(45, "div", 31)(46, "div", 32)(47, "h3"), e._uU(48, "Add your API token and go!"), e.qZA(), e.TgZ(49, "p"), e._uU(50, "Start with a pre-integrated form included with one of our themes, create a form using our "), e.TgZ(51, "a", 33), e._uU(52, "form builder"), e.qZA(), e._uU(53, ", or hand code your own custom form HTML."), e.qZA(), e.TgZ(54, "p"), e._uU(55, "After that, sign up for our risk free, "), e.TgZ(56, "strong"), e._uU(57, "10 day free trial "), e.qZA(), e._uU(58, "to receive your API token, add it to your form, and you are ready to go! "), e.TgZ(59, "strong"), e._uU(60, "No JS required"), e.qZA(), e._uU(61, ", we've handled that for you!"), e.qZA()()()(), e.TgZ(62, "div", 34)(63, "a", 35), e.NdJ("click", function() {
                                return i.getStartedNowScroll()
                            }), e._uU(64, "Start your free trial!"), e.qZA()()()(), e.TgZ(65, "sbpro-page-section", 36)(66, "div", 2)(67, "div", 12)(68, "div", 37)(69, "div", 34)(70, "div", 5), e._uU(71, "Try before you buy!"), e.qZA(), e.TgZ(72, "div", 38), e._uU(73, "10 day free trial"), e.qZA(), e.TgZ(74, "div", 39), e._uU(75, "Try out SB Forms during our risk free, 10 day free trial period! "), e.TgZ(76, "span", 40), e._uU(77, "No credit card required"), e.qZA(), e._uU(78, " to get started!"), e.qZA()(), e.TgZ(79, "div", 41)(80, "a", 35), e.NdJ("click", function() {
                                return i.getStartedNowScroll()
                            }), e._uU(81, "Start now for free!"), e.qZA()()()()()(), e.TgZ(82, "sbpro-page-section", 42)(83, "div", 2, 43), e._UZ(85, "sbw-forms-trial"), e.qZA()(), e.TgZ(86, "sbpro-page-section", 44)(87, "div", 2)(88, "h1", 45), e._uU(89, "F.A.Q."), e.qZA(), e.TgZ(90, "div", 46)(91, "div", 47)(92, "div", 48), e._UZ(93, "fa-icon", 49), e.TgZ(94, "div", 50)(95, "div", 51), e._uU(96, "Is Start Bootstrap Forms free?"), e.qZA(), e.TgZ(97, "p", 52), e._uU(98, "Start Bootstrap forms is free to try for the first 10 days. After that, the service costs $5 per month."), e.qZA()()(), e.TgZ(99, "div", 48), e._UZ(100, "fa-icon", 49), e.TgZ(101, "div", 50)(102, "div", 51), e._uU(103, "Do I need to know JavaScript to use SB Forms?"), e.qZA(), e.TgZ(104, "p", 52), e._uU(105, "No, we have taken care of all of the form functionality for you. The only prerequisites to using SB Forms is knowledge of basic HTML and Bootstrap."), e.qZA()()(), e.TgZ(106, "div", 53), e._UZ(107, "fa-icon", 49), e.TgZ(108, "div", 50)(109, "div", 51), e._uU(110, "Can I have multiple forms?"), e.qZA(), e.TgZ(111, "p", 52), e._uU(112, "Yes, you can have multiple forms attached to your account. Each form counts as its own subscription, which is $5 per month, per form."), e.qZA()()()(), e.TgZ(113, "div", 47)(114, "div", 48), e._UZ(115, "fa-icon", 49), e.TgZ(116, "div", 50)(117, "div", 51), e._uU(118, "What happens when I reach 500 submissions in a month?"), e.qZA(), e.TgZ(119, "p", 52), e._uU(120, "We charge $1 per 100 submissions after 500 submissions per month so you can scale up as you grow."), e.qZA()()(), e.TgZ(121, "div", 48), e._UZ(122, "fa-icon", 49), e.TgZ(123, "div", 50)(124, "div", 51), e._uU(125, "Do you offer support?"), e.qZA(), e.TgZ(126, "p", 52), e._uU(127, "We provide detailed documentation and help videos to help you get your form set up. We also provide email support if you get stuck."), e.qZA()()(), e.TgZ(128, "div", 54), e._UZ(129, "div", 54)(130, "fa-icon", 49), e.TgZ(131, "div", 50)(132, "div", 51), e._uU(133, "Can I use my form in multiple places?"), e.qZA(), e.TgZ(134, "p", 52), e._uU(135, "You can use the same form on multiple pages on the same domain. To use a form on another domain, a second subscription is required."), e.qZA()()()()()()()), 2 & n && (e.xp6(26), e.Q6J("icon", e.DdM(7, mn)), e.xp6(67), e.Q6J("icon", e.DdM(8, I)), e.xp6(7), e.Q6J("icon", e.DdM(9, I)), e.xp6(7), e.Q6J("icon", e.DdM(10, I)), e.xp6(8), e.Q6J("icon", e.DdM(11, I)), e.xp6(7), e.Q6J("icon", e.DdM(12, I)), e.xp6(8), e.Q6J("icon", e.DdM(13, I)))
                        },
                        dependencies: [d.rH, ye.h, b.q, m.g, v.BN],
                        styles: [".or-divider[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;height:2rem;width:2rem;background-color:#e0e5ec;font-size:.875rem;font-weight:500;border-radius:100%;font-style:italic;text-align:center}  fa-icon .fa-2x{height:1em}.video-card[_ngcontent-%COMP%]   .play-button[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;opacity:.75;transition:opacity .25s ease}.video-card[_ngcontent-%COMP%]:hover   .play-button[_ngcontent-%COMP%]{opacity:1}"],
                        changeDetection: 0
                    })
                }
                return t
            })();
            var hn = c(3552);
            const fn = ["getStartedNow"];
            let Ae = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-sb-form-builder"]
                            ],
                            viewQuery: function(n, i) {
                                if (1 & n && e.Gf(fn, 5), 2 & n) {
                                    let s;
                                    e.iGM(s = e.CRH()) && (i.getStartedNow = s.first)
                                }
                            },
                            decls: 22,
                            vars: 1,
                            consts: [
                                ["headerClasses", "bg-light page-header-ui-light"],
                                [1, "page-header-ui-content", "position-relative", "overflow-hidden"],
                                [1, "container"],
                                [1, "text-center"],
                                [1, "sb-forms-heading"],
                                [1, "lead", "mb-0"],
                                ["src", "/assets/img/freepik/builder.svg", "alt", "Woman with hard hat", 1, "builder-svg"],
                                ["sectionClasses", "pt-5 pb-10"],
                                [1, "container-xl"],
                                [3, "getStartedNow"],
                                [1, "my-0"],
                                ["sectionClasses", "pb-5 pt-10", "borderType", "angled", "borderClasses", "text-light"],
                                ["getStartedNow", ""],
                                [1, "text-center", "mb-5"],
                                [1, "mb-1"],
                                [1, "lead"]
                            ],
                            template: function(n, i) {
                                if (1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4), e._uU(5, "Bootstrap Form Builder"), e.qZA(), e.TgZ(6, "p", 5), e._uU(7, "Build Bootstrap 5 forms quickly and easily with SB Form Builder!"), e.qZA()()(), e._UZ(8, "img", 6), e.qZA()(), e.TgZ(9, "sbpro-page-section", 7)(10, "div", 8), e._UZ(11, "sbw-form-builder", 9), e.qZA()(), e._UZ(12, "hr", 10), e.TgZ(13, "sbpro-page-section", 11)(14, "div", 2, 12)(16, "div", 13)(17, "h2", 14), e._uU(18, "Don't stop now! Make your form functional!"), e.qZA(), e.TgZ(19, "p", 15), e._uU(20, "Now that your form is built, make it functional with a subscription to SB Forms!"), e.qZA()(), e._UZ(21, "sbw-forms-trial"), e.qZA()()), 2 & n) {
                                    const s = e.MAs(15);
                                    e.xp6(11), e.Q6J("getStartedNow", s)
                                }
                            },
                            dependencies: [ye.h, b.q, m.g, hn.h],
                            styles: [".page-header-ui-content[_ngcontent-%COMP%]{padding-bottom:3rem}.builder-svg[_ngcontent-%COMP%]{position:absolute;display:none;left:3%;bottom:-27px;height:11rem}@media (min-width: 1200px){.builder-svg[_ngcontent-%COMP%]{left:10%}}@media (min-width: 992px){.builder-svg[_ngcontent-%COMP%]{display:inline-block}}.sb-forms-heading[_ngcontent-%COMP%]{font-size:2.25rem;font-weight:700}"],
                            changeDetection: 0
                        })
                    }
                    return t
                })(),
                _n = (() => {
                    class t {
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275mod = e.oAB({
                            type: t
                        });
                        static# o = this.\u0275inj = e.cJS({
                            providers: [...Fe, ...Je],
                            imports: [a.ez, d.Bz, h.UX, h.u5, De.nC, Le.A]
                        })
                    }
                    return t
                })(),
                Ue = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-design-language-material"]
                            ],
                            decls: 2,
                            vars: 0,
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "p"), e._uU(1, "design-language-material"), e.qZA())
                            },
                            changeDetection: 0
                        })
                    }
                    return t
                })(),
                xe = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-design-language-pro"]
                            ],
                            decls: 2,
                            vars: 0,
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "p"), e._uU(1, "design-language-pro"), e.qZA())
                            },
                            changeDetection: 0
                        })
                    }
                    return t
                })();
            const bn = function() {
                    return ["fad", "file-certificate"]
                },
                B = function() {
                    return ["fal", "arrow-right"]
                };

            function vn(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "div", 26)(2, "div", 27)(3, "div", 2), e._UZ(4, "fa-icon", 28), e.TgZ(5, "div")(6, "div", 29)(7, "strong"), e._uU(8, "The information in this section applies to the paid, pro products sold on Start Bootstrap."), e.qZA()(), e.TgZ(9, "div", 29), e._uU(10, "Our free themes, templates, and snippets and licensed under the MIT License. For more information about the MIT License and using our free products, please visit our "), e.TgZ(11, "a", 30), e._uU(12, "Knowledge Base."), e.qZA()()()()()(), e.TgZ(13, "h2", 18)(14, "div", 19), e._UZ(15, "fa-icon", 20), e.qZA(), e._uU(16, " Helpful Examples "), e.qZA(), e.TgZ(17, "div", 31)(18, "h3"), e._uU(19, "For solo freelancers creating a website for a single client"), e.qZA(), e.TgZ(20, "p"), e._uU(21, "If you are a freelancer creating one website for a single client, and the website you\u2019re creating can be accessed by the end user (in this case, visitors to your client\u2019s website) free of charge, then the "), e.TgZ(22, "a", 32), e._uU(23, "Freelancer License"), e.qZA(), e._uU(24, " is all you need if you only want the HTML/CSS version of the theme. The "), e.TgZ(25, "a", 33), e._uU(26, "Developer License"), e.qZA(), e._uU(27, " is required if you want the full source files for the theme."), e.qZA(), e.TgZ(28, "p"), e._uU(29, "If users have to pay to access certain features or areas of the website you are creating for your client, like a SaaS application, then the "), e.TgZ(30, "a", 34), e._uU(31, "Startup License"), e.qZA(), e._uU(32, " is needed."), e.qZA(), e.TgZ(33, "p", 29), e._uU(34, "Note: a typical e-commerce website requires users to pay for products on the website, but not to use the website \u2013 in this case a Freelancer or Developer License is sufficient."), e.qZA()(), e.TgZ(35, "div", 6)(36, "h3"), e._uU(37, "For agencies and small teams creating a website for a single client"), e.qZA(), e.TgZ(38, "p"), e._uU(39, "If you are an agency or a small team of 5 team members or less creating one website for a single client, "), e.TgZ(40, "a", 34), e._uU(41, "Startup License"), e.qZA(), e._uU(42, " is required."), e.qZA(), e.TgZ(43, "p"), e._uU(44, "With the "), e.TgZ(45, "a", 34), e._uU(46, "Startup License"), e.qZA(), e._uU(47, ", the application you are building for a client is allowed to have paying users, for example, a SaaS application."), e.qZA()(), e.TgZ(48, "div", 6)(49, "h3"), e._uU(50, "For companies creating a website for their own business"), e.qZA(), e.TgZ(51, "p"), e._uU(52, "If you represent a company, and are building a website for the business, you must choose the appropriate license. If the website you are building is informational, like a landing page or marketing website, where users can access the website for free, then the "), e.TgZ(53, "a", 32), e._uU(54, "Freelancer License"), e.qZA(), e._uU(55, " or "), e.TgZ(56, "a", 33), e._uU(57, "Developer License"), e.qZA(), e._uU(58, " is all you need if you are the only team member accessing the theme files."), e.qZA(), e.TgZ(59, "p"), e._uU(60, "If your team is between 2-5 members, the "), e.TgZ(61, "a", 34), e._uU(62, "Startup License"), e.qZA(), e._uU(63, " is required, which also allows the creation of applications where the end users must pay in order to access, like a SaaS platform."), e.qZA(), e.TgZ(64, "p"), e._uU(65, "If your team size is between 6-15 members, the "), e.TgZ(66, "a", 35), e._uU(67, "Enterprise License"), e.qZA(), e._uU(68, " is required."), e.qZA(), e.TgZ(69, "p"), e._uU(70, "We also offer custom commercial licensing for teams larger than 15 members."), e.qZA()(), e.TgZ(71, "div", 6)(72, "h3"), e._uU(73, 'If you are building a "freemium" application'), e.qZA(), e.TgZ(74, "p"), e._uU(75, 'If you are using the "freemium" strategy for your end product, meaning your application is free for users, but users can pay to unlock or access additional features, you must use a license type that allows for paid applications. The '), e.TgZ(76, "a", 34), e._uU(77, "Startup License"), e.qZA(), e._uU(78, " or the "), e.TgZ(79, "a", 35), e._uU(80, "Enterprise License"), e.qZA(), e._uU(81, " is needed in this case, depening on how many team members are working with the theme to develop the application."), e.qZA()(), e.TgZ(82, "div", 6)(83, "h3"), e._uU(84, "For creating multiple end products using the same theme"), e.qZA(), e.TgZ(85, "p"), e._uU(86, "If you are creating more than one end product, but want to use the same theme, then you will need to buy multiple licenses of the same theme \u2013 "), e.TgZ(87, "a", 32), e._uU(88, "Freelancer License"), e.qZA(), e._uU(89, " or "), e.TgZ(90, "a", 33), e._uU(91, "Developer License"), e.qZA(), e._uU(92, " if the end product is accessed for free, Startup or Enterprise Licenses if the end product requires paid access depending on the size of your team."), e.qZA(), e.TgZ(93, "p"), e._uU(94, "If you don't want to purchase multiple licenses for creating multiple end products, we offer custom commercial licensing as well!"), e.qZA()(), e.TgZ(95, "div", 6)(96, "h3"), e._uU(97, "Multi channel redistribution, and advanced development"), e.qZA(), e.TgZ(98, "p"), e._uU(99, "If you are looking to redistribute your end product through multiple channels, or require advanced terms that surpass the capabilities of the "), e.TgZ(100, "a", 35), e._uU(101, "Enterprise License"), e.qZA(), e._uU(102, ", then a custom commercial license is necessary. Information about custom commercial licensing is available upon request by contacting us at "), e.TgZ(103, "a", 21), e._uU(104, "support@startbootstrap.com"), e.qZA(), e._uU(105, "."), e.qZA()(), e.BQk()), 2 & t && (e.xp6(4), e.Q6J("icon", e.DdM(2, bn)), e.xp6(11), e.Q6J("icon", e.DdM(3, B)))
            }

            function Zn(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "h2", 18)(2, "div", 19), e._UZ(3, "fa-icon", 20), e.qZA(), e._uU(4, " Freelancer License "), e.qZA(), e.TgZ(5, "p"), e._uU(6, "The Freelancer License gives you access to only the HTML/CSS version of the Theme being purchased."), e.qZA(), e.TgZ(7, "p"), e._uU(8, "The Freelancer License is sufficient if you are 1) the only person working with the Theme's files, 2) you are creating a single End Product deployed on only one domain, and 3) the End Product that you deploy is free to access by the end user. The original theme files and the End Product's files cannot be redistributed in any way. The full terms of the Freelancer License are as follows:"), e.qZA(), e.TgZ(9, "ol")(10, "li", 36), e._uU(11, "The Freelancer License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), e.qZA(), e.TgZ(12, "li", 36), e._uU(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), e.qZA(), e.TgZ(14, "li", 36), e._uU(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), e.qZA(), e.TgZ(16, "li", 36), e._uU(17, "The Theme may only be used by a single (1) developer."), e.qZA(), e.TgZ(18, "li", 36), e._uU(19, "The End Product you create may be accessed by multiple End Users, and the End Users must be able at access the End Product for free."), e.qZA(), e.TgZ(20, "li", 36), e._uU(21, " With the Freelancer License, you can: "), e.TgZ(22, "ol")(23, "li", 36), e._uU(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), e.qZA()()(), e.TgZ(25, "li", 36), e._uU(26, " With the Freelancer License, you cannot: "), e.TgZ(27, "ol")(28, "li", 36), e._uU(29, "Create multiple End Products using the Theme."), e.qZA(), e.TgZ(30, "li", 36), e._uU(31, "Create an End Product where End Users must pay in order to access."), e.qZA(), e.TgZ(32, "li", 36), e._uU(33, "Create an End Product with multiple team members working with the Theme files."), e.qZA(), e.TgZ(34, "li", 36), e._uU(35, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), e.qZA(), e.TgZ(36, "li", 36), e._uU(37, "Redistribute the modified End Product."), e.qZA(), e.TgZ(38, "li", 36), e._uU(39, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), e.qZA()()(), e.TgZ(40, "li", 36), e._uU(41, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), e.qZA(), e.TgZ(42, "li", 36), e._uU(43, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), e.qZA()(), e.BQk()), 2 & t && (e.xp6(3), e.Q6J("icon", e.DdM(1, B)))
            }

            function wn(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "h2", 18)(2, "div", 19), e._UZ(3, "fa-icon", 20), e.qZA(), e._uU(4, " Developer License "), e.qZA(), e.TgZ(5, "p"), e._uU(6, "The Developer License gives you access to the source files of the Theme and the compiled HTML/CSS version of the Theme being purchased."), e.qZA(), e.TgZ(7, "p"), e._uU(8, "The Developer License is sufficient if you are 1) the only person working with the Theme's files, 2) you are creating a single End Product deployed on only one domain, and 3) the End Product that you deploy is free to access by the end user. The original theme files and the End Product's files cannot be redistributed in any way. The full terms of the Developer License are as follows:"), e.qZA(), e.TgZ(9, "ol")(10, "li", 36), e._uU(11, "The Developer License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), e.qZA(), e.TgZ(12, "li", 36), e._uU(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), e.qZA(), e.TgZ(14, "li", 36), e._uU(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), e.qZA(), e.TgZ(16, "li", 36), e._uU(17, "The Theme may only be used by a single (1) developer."), e.qZA(), e.TgZ(18, "li", 36), e._uU(19, "The End Product you create may be accessed by multiple End Users, and the End Users must be able at access the End Product for free."), e.qZA(), e.TgZ(20, "li", 36), e._uU(21, " With the Developer License, you can: "), e.TgZ(22, "ol")(23, "li", 36), e._uU(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), e.qZA()()(), e.TgZ(25, "li", 36), e._uU(26, " With the Developer License, you cannot: "), e.TgZ(27, "ol")(28, "li", 36), e._uU(29, "Create multiple End Products using the Theme."), e.qZA(), e.TgZ(30, "li", 36), e._uU(31, "Create an End Product where End Users must pay in order to access."), e.qZA(), e.TgZ(32, "li", 36), e._uU(33, "Create an End Product with multiple team members working with the Theme files."), e.qZA(), e.TgZ(34, "li", 36), e._uU(35, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), e.qZA(), e.TgZ(36, "li", 36), e._uU(37, "Redistribute the modified End Product."), e.qZA(), e.TgZ(38, "li", 36), e._uU(39, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), e.qZA()()(), e.TgZ(40, "li", 36), e._uU(41, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), e.qZA(), e.TgZ(42, "li", 36), e._uU(43, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), e.qZA()(), e.BQk()), 2 & t && (e.xp6(3), e.Q6J("icon", e.DdM(1, B)))
            }

            function yn(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "h2", 18)(2, "div", 19), e._UZ(3, "fa-icon", 20), e.qZA(), e._uU(4, " Startup License "), e.qZA(), e.TgZ(5, "p"), e._uU(6, "If you are creating a single end product, deployed to a single domain, that end users must pay to access, with no more than 5 team members working on the project, then the Startup License is required. With the Startup License, you can also redistribute the modified End Product as part of an application (for example, a software package), but you cannot redistribute the Theme \u201cas is\u201d as a stock asset on its own or as part of a bundle of products."), e.qZA(), e.TgZ(7, "p"), e._uU(8, "If you have more than 15 team members accessing the project files, or you are creating multiple End Products please contact us about custom commercial licensing."), e.qZA(), e.TgZ(9, "ol")(10, "li", 36), e._uU(11, "The Startup License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), e.qZA(), e.TgZ(12, "li", 36), e._uU(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), e.qZA(), e.TgZ(14, "li", 36), e._uU(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), e.qZA(), e.TgZ(16, "li", 36), e._uU(17, "The Theme may be used no more than (5) developers or team members working to create the End Product."), e.qZA(), e.TgZ(18, "li", 36), e._uU(19, "The End Product you create may be accessed by multiple End Users, either for free or for a fee."), e.qZA(), e.TgZ(20, "li", 36), e._uU(21, " With the Startup License, you can: "), e.TgZ(22, "ol")(23, "li", 36), e._uU(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), e.qZA(), e.TgZ(25, "li", 36), e._uU(26, "Create an End Product where End Users must pay in order to access."), e.qZA(), e.TgZ(27, "li", 36), e._uU(28, "Have up to 5 team members working on the End Product that is built with the Theme's files"), e.qZA()()(), e.TgZ(29, "li", 36), e._uU(30, " With the Startup License, you cannot: "), e.TgZ(31, "ol")(32, "li", 36), e._uU(33, "Create multiple End Products using the Theme."), e.qZA(), e.TgZ(34, "li", 36), e._uU(35, "Have more than 5 team members working on the End Product that is built with the Theme's files"), e.qZA(), e.TgZ(36, "li", 36), e._uU(37, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), e.qZA(), e.TgZ(38, "li", 36), e._uU(39, "Redistribute the modified End Product."), e.qZA(), e.TgZ(40, "li", 36), e._uU(41, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), e.qZA()()(), e.TgZ(42, "li", 36), e._uU(43, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), e.qZA(), e.TgZ(44, "li", 36), e._uU(45, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), e.qZA()(), e.BQk()), 2 & t && (e.xp6(3), e.Q6J("icon", e.DdM(1, B)))
            }

            function Tn(t, r) {
                1 & t && (e.ynx(0), e.TgZ(1, "h2", 18)(2, "div", 19), e._UZ(3, "fa-icon", 20), e.qZA(), e._uU(4, " Enterprise License "), e.qZA(), e.TgZ(5, "p"), e._uU(6, "If you are creating a single end product, deployed to a single domain, that end users must pay to access, with no more than 15 team members working on the project, then the Enterprise License is required. With the Enterprise License, you can also redistribute the modified End Product as part of an application (for example, a software package), but you cannot redistribute the Theme \u201cas is\u201d as a stock asset on its own or as part of a bundle of products."), e.qZA(), e.TgZ(7, "p"), e._uU(8, "If you have more than 15 team members accessing the project files, or you are creating multiple End Products please contact us about custom commercial licensing."), e.qZA(), e.TgZ(9, "ol")(10, "li", 36), e._uU(11, "The Enterprise License grants the purchaser a non-exclusive, non-transferrable, and ongoing right to make use of the Theme."), e.qZA(), e.TgZ(12, "li", 36), e._uU(13, "You are licensed to use the Theme to create a single End Product for personal use, or for a client."), e.qZA(), e.TgZ(14, "li", 36), e._uU(15, "The End Product is a customized implementation of the Theme requiring the application of skill and effort"), e.qZA(), e.TgZ(16, "li", 36), e._uU(17, "The Theme may be used no more than (15) developers or team members working to create the End Product."), e.qZA(), e.TgZ(18, "li", 36), e._uU(19, "The End Product you create may be accessed by multiple End Users, either for free or for a fee."), e.qZA(), e.TgZ(20, "li", 36), e._uU(21, " With the Enterprise License, you can: "), e.TgZ(22, "ol")(23, "li", 36), e._uU(24, "Use the Theme to create one single End Product for personal use or for a client. You can transfer the single End Product to your client for any fee. This license is then transferred to your client."), e.qZA(), e.TgZ(25, "li", 36), e._uU(26, "Create an End Product where End Users must pay in order to access."), e.qZA(), e.TgZ(27, "li", 36), e._uU(28, "Have up to 15 team members working on the End Product that is built with the Theme's files"), e.qZA()()(), e.TgZ(29, "li", 36), e._uU(30, " With the Enterprise License, you cannot: "), e.TgZ(31, "ol")(32, "li", 36), e._uU(33, "Create multiple End Products using the Theme."), e.qZA(), e.TgZ(34, "li", 36), e._uU(35, "Have more than 15 team members working on the End Product that is built with the Theme's files"), e.qZA(), e.TgZ(36, "li", 36), e._uU(37, "Redistribute the Theme \u201cas is\u201d by itself or as part of a bundle of products."), e.qZA(), e.TgZ(38, "li", 36), e._uU(39, "Redistribute the modified End Product."), e.qZA(), e.TgZ(40, "li", 36), e._uU(41, "Redistribute the Theme \u201cas is\u201d, or the modified End Product, as part of an \u201con demand\u201d product or service (like a \u201csite generator\u201d or \u201ccreate your own\u201d website application)."), e.qZA()()(), e.TgZ(42, "li", 36), e._uU(43, "Any components included with the Theme which includes, but is not limited to: graphics, images, code, or any other content, retains its original license. The author of the Theme will document any and all licensed components included with the Theme. You are responsible for adhering to the original license of any additional licensed components included with the Theme."), e.qZA(), e.TgZ(44, "li", 36), e._uU(45, "Start Bootstrap retains ownership of the Theme, but grants you the license on these terms. This license is between the Start Bootstrap and you, the purchaser. Start Bootstrap LLC is the grantor of the license."), e.qZA()(), e.BQk()), 2 & t && (e.xp6(3), e.Q6J("icon", e.DdM(1, B)))
            }
            const N = function(t) {
                return {
                    active: t
                }
            };
            let X = (() => {
                    class t {
                        constructor(o, n) {
                            this.route = o, this.changeDetectorRef = n, this.subscription = new w.w0
                        }
                        ngOnInit() {
                            this.subscription.add(this.route.params.subscribe(o => {
                                this.selectedLicense = void 0;
                                const n = o.licenseID;
                                n && this._isValidGrouping(n) && (this.selectedLicense = n), this.changeDetectorRef.detectChanges()
                            }))
                        }
                        ngOnDestroy() {
                            this.subscription.unsubscribe()
                        }
                        _isValidGrouping(o) {
                            return !!["freelancer", "developer", "startup", "enterprise"].find(i => i === o)
                        }
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)(e.Y36(d.gz), e.Y36(e.sBO))
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-licenses"]
                            ],
                            decls: 67,
                            vars: 24,
                            consts: [
                                ["sectionClasses", "mt-page-header pb-10 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                                [1, "container", "pt-5"],
                                [1, "d-flex", "align-items-center"],
                                ["src", "assets/img/freepik/security-pana.svg", "alt", "", 1, "d-none", "d-sm-block", 2, "height", "4rem"],
                                [1, "ms-sm-3"],
                                [1, "lead", "mb-0"],
                                [1, "my-5"],
                                [1, "container"],
                                [1, "row", "justify-content-between"],
                                [1, "col-lg-3"],
                                [1, "nav", "flex-column", "nav-pills", "mb-5", "sticky-top"],
                                ["data-cy", "showGeneralInfoLink", "routerLink", "/licenses", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                                ["data-cy", "showFreelancerLicenseLink", "routerLink", "/licenses/freelancer", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                                ["data-cy", "showDeveloperLicenseLink", "routerLink", "/licenses/developer", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                                ["data-cy", "showStartupLicenseLink", "routerLink", "/licenses/startup", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                                ["data-cy", "showEnterpriseLicenseLink", "routerLink", "/licenses/enterprise", 1, "nav-link", "py-3", "px-4", "mb-1", 3, "ngClass"],
                                [1, "col-lg-9", "ps-lg-5"],
                                [4, "ngIf"],
                                [1, "d-flex", "align-items-center", "line-height-normal", "mb-4"],
                                [1, "icon-stack", "icon-stack-sm", "bg-primary", "text-white", "me-2"],
                                [3, "icon"],
                                ["href", "mailto:support@startbootstrap.com"],
                                [1, "small", "fst-italic"],
                                [1, "table-responsive"],
                                [1, "table", "table-bordered"],
                                ["scope", "row"],
                                [1, "card", "bg-blue-soft", "text-blue", "shadow-none", "mb-5"],
                                [1, "card-body"],
                                ["size", "3x", 1, "me-4", 3, "icon"],
                                [1, "small"],
                                ["routerLink", "/knowledge-base", 1, "text-blue", "fw-700"],
                                [1, "mb-5"],
                                ["routerLink", "/licenses/freelancer"],
                                ["routerLink", "/licenses/developer"],
                                ["routerLink", "/licenses/startup"],
                                ["routerLink", "/licenses/enterprise"],
                                [1, "mb-3"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-section", 0)(1, "header")(2, "div", 1)(3, "div", 2), e._UZ(4, "img", 3), e.TgZ(5, "div", 4)(6, "h1"), e._uU(7, "Licenses"), e.qZA(), e.TgZ(8, "p", 5), e._uU(9, "Last updated: September 8, 2020"), e.qZA()()(), e._UZ(10, "hr", 6), e.qZA()(), e.TgZ(11, "main")(12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "nav", 10)(16, "a", 11), e._uU(17, "General Info"), e.qZA(), e.TgZ(18, "a", 12), e._uU(19, "Freelancer License"), e.qZA(), e.TgZ(20, "a", 13), e._uU(21, "Developer License"), e.qZA(), e.TgZ(22, "a", 14), e._uU(23, "Startup License"), e.qZA(), e.TgZ(24, "a", 15), e._uU(25, "Enterprise License"), e.qZA()()(), e.TgZ(26, "div", 16), e.YNc(27, vn, 106, 4, "ng-container", 17), e.YNc(28, Zn, 44, 2, "ng-container", 17), e.YNc(29, wn, 44, 2, "ng-container", 17), e.YNc(30, yn, 46, 2, "ng-container", 17), e.YNc(31, Tn, 46, 2, "ng-container", 17), e._UZ(32, "hr", 6), e.TgZ(33, "h2", 18)(34, "div", 19), e._UZ(35, "fa-icon", 20), e.qZA(), e._uU(36, " Still Have Questions? "), e.qZA(), e.TgZ(37, "p"), e._uU(38, "Licensing can be confusing at times depending on what sort of project you are building. If you still aren\u2019t sure which license you need to purchase, please send details about your project to "), e.TgZ(39, "a", 21), e._uU(40, "support@startbootstrap.com "), e.qZA(), e._uU(41, "and we will be happy to help answer any questions you might have!"), e.qZA(), e.TgZ(42, "p", 22), e._uU(43, "The above content is subject to change, and was last updated on September 3, 2020."), e.qZA(), e._UZ(44, "hr", 6), e.TgZ(45, "h2", 18)(46, "div", 19), e._UZ(47, "fa-icon", 20), e.qZA(), e._uU(48, " Definitions "), e.qZA(), e.TgZ(49, "div", 23)(50, "table", 24)(51, "tbody")(52, "tr")(53, "th", 25), e._uU(54, "Theme"), e.qZA(), e.TgZ(55, "td"), e._uU(56, "Theme is the purchased digital work"), e.qZA()(), e.TgZ(57, "tr")(58, "th", 25), e._uU(59, "End Product"), e.qZA(), e.TgZ(60, "td"), e._uU(61, "End Product is a customized implementation of the Theme that requires an application of skill and effort that is deployed on a single Domain"), e.qZA()(), e.TgZ(62, "tr")(63, "th", 25), e._uU(64, "End User"), e.qZA(), e.TgZ(65, "td"), e._uU(66, "End User is a user of the End Product"), e.qZA()()()()()()()()()()), 2 & n && (e.xp6(16), e.Q6J("ngClass", e.VKq(12, N, !i.selectedLicense)), e.xp6(2), e.Q6J("ngClass", e.VKq(14, N, "freelancer" === i.selectedLicense)), e.xp6(2), e.Q6J("ngClass", e.VKq(16, N, "developer" === i.selectedLicense)), e.xp6(2), e.Q6J("ngClass", e.VKq(18, N, "startup" === i.selectedLicense)), e.xp6(2), e.Q6J("ngClass", e.VKq(20, N, "enterprise" === i.selectedLicense)), e.xp6(3), e.Q6J("ngIf", !i.selectedLicense), e.xp6(1), e.Q6J("ngIf", "freelancer" === i.selectedLicense), e.xp6(1), e.Q6J("ngIf", "developer" === i.selectedLicense), e.xp6(1), e.Q6J("ngIf", "startup" === i.selectedLicense), e.xp6(1), e.Q6J("ngIf", "enterprise" === i.selectedLicense), e.xp6(4), e.Q6J("icon", e.DdM(22, B)), e.xp6(12), e.Q6J("icon", e.DdM(23, B)))
                            },
                            dependencies: [a.mk, a.O5, d.rH, m.g, v.BN],
                            styles: [".sticky-top[_ngcontent-%COMP%]{top:calc(93px + 1.5rem);font-size:.875em}"],
                            changeDetection: 0
                        })
                    }
                    return t
                })(),
                qe = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-maintenance"]
                            ],
                            decls: 10,
                            vars: 0,
                            consts: [
                                ["sectionClasses", "mt-page-header pt-10 pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                                [1, "container"],
                                [1, "row", "justify-content-center"],
                                [1, "col-lg-6"],
                                ["src", "assets/img/freepik/under-construction-pana.svg", "alt", "Website is under scheduled maintenance", 1, "img-fluid", "mb-5"],
                                [1, "text-center"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3), e._UZ(4, "img", 4), e.TgZ(5, "div", 5)(6, "h1"), e._uU(7, "Scheduled Maintenance"), e.qZA(), e.TgZ(8, "p"), e._uU(9, "We're currently updating Start Bootstrap, so we've brought a few pages down for schedule maintenance. Please try again in a few minutes, and thank you for your patience."), e.qZA()()()()()())
                            },
                            dependencies: [m.g],
                            changeDetection: 0
                        })
                    }
                    return t
                })();
            const x = function() {
                return ["fal", "arrow-right"]
            };
            let ke = (() => {
                class t {
                    constructor() {}
                    ngOnInit() {}
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275cmp = e.Xpm({
                        type: t,
                        selectors: [
                            ["sbw-privacy-policy"]
                        ],
                        decls: 127,
                        vars: 18,
                        consts: [
                            ["sectionClasses", "mt-page-header pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                            [1, "container", "py-5"],
                            [1, "lead"],
                            [1, "my-5"],
                            [1, "row"],
                            [1, "col-lg-8"],
                            [1, "d-flex", "align-items-center", "line-height-normal", "mb-4"],
                            [1, "icon-stack", "icon-stack-sm", "bg-primary", "text-white", "me-2"],
                            [3, "icon"],
                            [1, "col-lg-4", "d-none", "d-lg-block"],
                            ["src", "assets/img/freepik/endpoint-pana.svg", "alt", "", 1, "img-fluid"]
                        ],
                        template: function(n, i) {
                            1 & n && (e.TgZ(0, "sbpro-page-section", 0)(1, "header")(2, "div", 1)(3, "h1"), e._uU(4, "Privacy Policy"), e.qZA(), e.TgZ(5, "p", 2), e._uU(6, "Last updated: August 2020"), e.qZA(), e._UZ(7, "hr", 3), e.TgZ(8, "div", 4)(9, "div", 5)(10, "h2", 6)(11, "div", 7), e._UZ(12, "fa-icon", 8), e.qZA(), e._uU(13, " Who we are "), e.qZA(), e.TgZ(14, "p"), e._uU(15, "Our website address is https://startbootstrap.com."), e.qZA(), e._UZ(16, "hr", 3), e.TgZ(17, "h2", 6)(18, "div", 7), e._UZ(19, "fa-icon", 8), e.qZA(), e._uU(20, " What personal data we collect and why we collect it "), e.qZA(), e.TgZ(21, "h3"), e._uU(22, "Comments"), e.qZA(), e.TgZ(23, "p"), e._uU(24, "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor\u2019s IP address and browser user agent string to help spam detection."), e.qZA(), e.TgZ(25, "h3"), e._uU(26, "Cookies"), e.qZA(), e.TgZ(27, "p"), e._uU(28, "A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server. Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy."), e.qZA(), e.TgZ(29, "p"), e._uU(30, "We use session cookies to personalize the website for each user."), e.qZA(), e.TgZ(31, "p"), e._uU(32, "We use Google Analytics to analyze the use of our website. Our analytics service provider generates statistical and other information about website use by means of cookies. Our analytics service provider\u2019s privacy policy is available at: http://www.google.com/policies/privacy/."), e.qZA(), e.TgZ(33, "p"), e._uU(34, "Deleting cookies may have a negative impact on the usability of the site. If you block cookies, you will not be able to use all the features on our website."), e.qZA(), e.TgZ(35, "h3"), e._uU(36, "Embedded content from other websites"), e.qZA(), e.TgZ(37, "p"), e._uU(38, "Pages on this site may include embedded content (e.g. snippets from JS Fiddle, Disqus comments, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website."), e.qZA(), e.TgZ(39, "p"), e._uU(40, "These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."), e.qZA(), e.TgZ(41, "h3"), e._uU(42, "Analytics"), e.qZA(), e.TgZ(43, "p"), e._uU(44, "Start Bootstrap uses cookies from third party partners such as Facebook Pixel and Google Analytics for marketing and data evaluation purposes. These cookies allow us to target potential customers with promotional material related to Start Bootstrap. We may share the data collected by third party partners in order to better target advertisements and other content that has been customized to you. The data collected also allows Start Bootstrap to observe user behavior and trends to help us make strategic decisions regarding the content and operation of this website."), e.qZA(), e._UZ(45, "hr", 3), e.TgZ(46, "h2", 6)(47, "div", 7), e._UZ(48, "fa-icon", 8), e.qZA(), e._uU(49, " Who we share your data with "), e.qZA(), e.TgZ(50, "p"), e._uU(51, "At times, we may share data collected on this website with third party advertising partners like Google Ads or Facebook in order to re-target and target potential customers."), e.qZA(), e._UZ(52, "hr", 3), e.TgZ(53, "h2", 6)(54, "div", 7), e._UZ(55, "fa-icon", 8), e.qZA(), e._uU(56, " We collect information about you during the checkout process on our store. "), e.qZA(), e.TgZ(57, "h3"), e._uU(58, "While you visit our site, we\u2019ll track:"), e.qZA(), e.TgZ(59, "p"), e._uU(60, "Products and pages you\u2019ve viewed: we\u2019ll use this to, for example, show you products you\u2019ve recently viewed."), e.qZA(), e.TgZ(61, "p"), e._uU(62, "We\u2019ll also use cookies to keep track of cart contents while you\u2019re browsing our site."), e.qZA(), e.TgZ(63, "p"), e._uU(64, "When you purchase from us, we\u2019ll ask you to provide information including your name, email address, credit card/payment details, and optional account information. We\u2019ll use this information for purposes, such as, to:"), e.qZA(), e.TgZ(65, "ul")(66, "li"), e._uU(67, "Send you information about your account and order"), e.qZA(), e.TgZ(68, "li"), e._uU(69, "Respond to your requests, including customer support"), e.qZA(), e.TgZ(70, "li"), e._uU(71, "Process payments and prevent fraud"), e.qZA(), e.TgZ(72, "li"), e._uU(73, "Set up your account to allow you future access to your purchases"), e.qZA(), e.TgZ(74, "li"), e._uU(75, "Comply with any legal obligations we have, such as calculating taxes"), e.qZA(), e.TgZ(76, "li"), e._uU(77, "Improve our store offerings"), e.qZA(), e.TgZ(78, "li"), e._uU(79, "Send you marketing messages, if you choose to receive them"), e.qZA(), e.TgZ(80, "li"), e._uU(81, "If you create an account, we will store your name and email address, which will be used to populate the checkout for future orders."), e.qZA()(), e.TgZ(82, "p"), e._uU(83, "We generally store information about you for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. This includes your name, email address, and any other information provided."), e.qZA(), e.TgZ(84, "p"), e._uU(85, "We will also store comments or reviews, if you choose to leave them."), e.qZA(), e._UZ(86, "hr", 3), e.TgZ(87, "h2", 6)(88, "div", 7), e._UZ(89, "fa-icon", 8), e.qZA(), e._uU(90, " Who on our team has access "), e.qZA(), e.TgZ(91, "p"), e._uU(92, "Members of our web development team have access to the information you provide us. For example, administrators can access order information like what was purchased and when it was purchased, and Customer information like your name, email address, and additional optional information. Our administrators have access to this information to help fulfill orders and provide you with support."), e.qZA(), e._UZ(93, "hr", 3), e.TgZ(94, "h2", 6)(95, "div", 7), e._UZ(96, "fa-icon", 8), e.qZA(), e._uU(97, " Payments "), e.qZA(), e.TgZ(98, "p"), e._uU(99, "We accept payments through Stripe and PayPal. When processing payments, some of your data will be passed to Stripe or PayPal, including information required to process or support the payment, such as the purchase total and billing information."), e.qZA(), e.TgZ(100, "p"), e._uU(101, "Start Bootstrap does not process the payments made, and does not ever have access to your credit card information."), e.qZA(), e.TgZ(102, "p"), e._uU(103, "Please see the Stripe Privacy Policy or PayPal Privacy Policy for more details."), e.qZA(), e._UZ(104, "hr", 3), e.TgZ(105, "h2", 6)(106, "div", 7), e._UZ(107, "fa-icon", 8), e.qZA(), e._uU(108, " How long we retain your data "), e.qZA(), e.TgZ(109, "p"), e._uU(110, "For users that register on our website, we store the personal information they provide during checkout when purchasing a product and in their user profile. All users can see, edit, or delete their personal information at any time. Website administrators can also see and edit that information."), e.qZA(), e._UZ(111, "hr", 3), e.TgZ(112, "h2", 6)(113, "div", 7), e._UZ(114, "fa-icon", 8), e.qZA(), e._uU(115, " What rights you have over your data "), e.qZA(), e.TgZ(116, "p"), e._uU(117, "If you have an account on this site, or have left comments, you can request to receive a summary of personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."), e.qZA(), e._UZ(118, "hr", 3), e.TgZ(119, "h2", 6)(120, "div", 7), e._UZ(121, "fa-icon", 8), e.qZA(), e._uU(122, " Where we send your data "), e.qZA(), e.TgZ(123, "p"), e._uU(124, "Data you provide during checkout is shared with payment processors, Stripe and PayPal. Usage data is shared with Google Analytics and Facebook Pixel, which we use to improve the experience of our website and products."), e.qZA()(), e.TgZ(125, "div", 9), e._UZ(126, "img", 10), e.qZA()()()()()), 2 & n && (e.xp6(12), e.Q6J("icon", e.DdM(9, x)), e.xp6(7), e.Q6J("icon", e.DdM(10, x)), e.xp6(29), e.Q6J("icon", e.DdM(11, x)), e.xp6(7), e.Q6J("icon", e.DdM(12, x)), e.xp6(34), e.Q6J("icon", e.DdM(13, x)), e.xp6(7), e.Q6J("icon", e.DdM(14, x)), e.xp6(11), e.Q6J("icon", e.DdM(15, x)), e.xp6(7), e.Q6J("icon", e.DdM(16, x)), e.xp6(7), e.Q6J("icon", e.DdM(17, x)))
                        },
                        dependencies: [m.g, v.BN],
                        changeDetection: 0
                    })
                }
                return t
            })();
            const O = function() {
                return ["fal", "arrow-right"]
            };
            let Ce = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-terms-and-conditions"]
                            ],
                            decls: 51,
                            vars: 8,
                            consts: [
                                ["sectionClasses", "mt-page-header pb-5 bg-white", "borderType", "angled", "borderClasses", "text-light"],
                                [1, "container", "py-5"],
                                [1, "lead"],
                                [1, "my-5"],
                                [1, "row"],
                                [1, "col-lg-8"],
                                [1, "d-flex", "align-items-center", "line-height-normal", "mb-4"],
                                [1, "icon-stack", "icon-stack-sm", "bg-primary", "text-white", "me-2"],
                                [3, "icon"],
                                [1, "fst-italic", "small", "mt-5"],
                                [1, "col-lg-4", "d-none", "d-lg-block"],
                                ["src", "assets/img/freepik/accept-terms-pana.svg", "alt", "", 1, "img-fluid"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-section", 0)(1, "header")(2, "div", 1)(3, "h1"), e._uU(4, "Terms & Conditions"), e.qZA(), e.TgZ(5, "p", 2), e._uU(6, "Last updated: September 2020"), e.qZA(), e._UZ(7, "hr", 3), e.TgZ(8, "div", 4)(9, "div", 5)(10, "h2", 6)(11, "div", 7), e._UZ(12, "fa-icon", 8), e.qZA(), e._uU(13, " General Terms For Buyers "), e.qZA(), e.TgZ(14, "p"), e._uU(15, "By accessing and placing an order with Start Bootstrap, you confirm that you are in agreement with and bound by the terms and conditions contained in the terms outlined below. These terms apply to the entire website and any email or other type of communication between you and Start Bootstrap."), e.qZA(), e.TgZ(16, "p"), e._uU(17, "Under no circumstances shall the Start Bootstrap team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if the Start Bootstrap team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof."), e.qZA(), e.TgZ(18, "p"), e._uU(19, "Start Bootstrap will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy at any moment."), e.qZA(), e._UZ(20, "hr", 3), e.TgZ(21, "h2", 6)(22, "div", 7), e._UZ(23, "fa-icon", 8), e.qZA(), e._uU(24, " Security "), e.qZA(), e.TgZ(25, "p"), e._uU(26, "Start Bootstrap does not process any order payments through the website. All payments are processed securely through Stripe or PayPal, third party online payment providers. Feel free to contact us about our security policies."), e.qZA(), e._UZ(27, "hr", 3), e.TgZ(28, "h2", 6)(29, "div", 7), e._UZ(30, "fa-icon", 8), e.qZA(), e._uU(31, " Cookie Policy "), e.qZA(), e.TgZ(32, "p"), e._uU(33, "A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server. Our website uses cookies. By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy."), e.qZA(), e.TgZ(34, "p"), e._uU(35, "We use session cookies to personalize the website for each user."), e.qZA(), e.TgZ(36, "p"), e._uU(37, "We use Google Analytics to analyze the use of our website. Our analytics service provider generates statistical and other information about website use by means of cookies. Our analytics service provider\u2019s privacy policy is available at: http://www.google.com/policies/privacy/."), e.qZA(), e.TgZ(38, "p"), e._uU(39, "Deleting cookies may have a negative impact on the usability of the site. If you block cookies, you will not be able to use all the features on our website."), e.qZA(), e._UZ(40, "hr", 3), e.TgZ(41, "h2", 6)(42, "div", 7), e._UZ(43, "fa-icon", 8), e.qZA(), e._uU(44, " Refunds "), e.qZA(), e.TgZ(45, "p"), e._uU(46, "Due the nature of digital products, after an digital product is downloaded, the sale is final. You may request a refund for a purchase that has not been downloaded up to 7 days after the purchase was made."), e.qZA(), e.TgZ(47, "p", 9), e._uU(48, "These terms were last updated on September 8, 2020 and are subject to change."), e.qZA()(), e.TgZ(49, "div", 10), e._UZ(50, "img", 11), e.qZA()()()()()), 2 & n && (e.xp6(12), e.Q6J("icon", e.DdM(4, O)), e.xp6(11), e.Q6J("icon", e.DdM(5, O)), e.xp6(7), e.Q6J("icon", e.DdM(6, O)), e.xp6(13), e.Q6J("icon", e.DdM(7, O)))
                            },
                            dependencies: [m.g, v.BN],
                            changeDetection: 0
                        })
                    }
                    return t
                })(),
                Se = (() => {
                    class t {
                        constructor() {}
                        ngOnInit() {}
                        static# e = this.\u0275fac = function(n) {
                            return new(n || t)
                        };
                        static# t = this.\u0275cmp = e.Xpm({
                            type: t,
                            selectors: [
                                ["sbw-sb-stack"]
                            ],
                            decls: 58,
                            vars: 0,
                            consts: [
                                ["headerClasses", "bg-light page-header-ui-light", "borderType", "rounded", "borderClasses", "text-white"],
                                [1, "page-header-ui-content", "py-10"],
                                [1, "container"],
                                [1, "row", "align-items-center"],
                                [1, "col-lg-6"],
                                [1, "page-header-ui-title"],
                                [1, "lead"],
                                [1, "card", "p-5"],
                                [1, "card-body", "p-5"],
                                [1, "text-center", "py-5"],
                                ["sectionClasses", "py-10"]
                            ],
                            template: function(n, i) {
                                1 & n && (e.TgZ(0, "sbpro-page-header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5), e._uU(6, "Accelerate Your Web App Development"), e.qZA(), e.TgZ(7, "p", 6), e._uU(8, "Start Bootstrap Stack is a full stack architecture for technology startups and application developers. It is the ultimate toolkit for building high-performance web applications, allowing you to bring your products to market faster."), e.qZA()(), e.TgZ(9, "div", 4)(10, "div", 7)(11, "div", 8)(12, "div", 9), e._uU(13, "Video"), e.qZA()()()()()()()(), e.TgZ(14, "sbpro-page-section", 10)(15, "div", 2)(16, "h2"), e._uU(17, "Cut Development Time and Launch Faster"), e.qZA(), e.TgZ(18, "p"), e._uU(19, "Most enterprise-level modern web applications share a similar set of core features. For startups and commercial projects, building these features can take months. With Start Bootstrap Stack, many of these core features are built for you, so you can focus on what makes your product unique, allowing you to bring your idea to market faster."), e.qZA(), e.TgZ(20, "h2"), e._uU(21, "Start Bootstrap Stack highlights (What's Included)"), e.qZA(), e.TgZ(22, "ol")(23, "li"), e._uU(24, "Front End implemented in Angular"), e.qZA(), e.TgZ(25, "li"), e._uU(26, "Back End implemented in Node."), e.qZA(), e.TgZ(27, "li"), e._uU(28, "Everything in Typescript."), e.qZA(), e.TgZ(29, "li"), e._uU(30, "Supported by open source technologies: Fastify, Docker, Postgres, Cypres, Prisma, and Jest."), e.qZA(), e.TgZ(31, "li"), e._uU(32, "100% unit tested."), e.qZA(), e.TgZ(33, "li"), e._uU(34, "Exhaustive functional tests"), e.qZA()(), e.TgZ(35, "p", 6), e._uU(36, "Out of the box, our customers will have a fully functional and tested web application that Includes:"), e.qZA(), e.TgZ(37, "ul")(38, "li"), e._uU(39, "Social (Facebook, google, twitter and GitHub) and Local Authentication. Including email validation, password reset, and account locking"), e.qZA(), e.TgZ(40, "li"), e._uU(41, "Multi-tenant support. (End users can create organizations and manage users)"), e.qZA(), e.TgZ(42, "li"), e._uU(43, "User/Group management."), e.qZA(), e.TgZ(44, "li"), e._uU(45, "Integration with ReCaptcha to prevent bots and spam."), e.qZA(), e.TgZ(46, "li"), e._uU(47, "Integration with Stripe to accept payments and create subscriptions."), e.qZA(), e.TgZ(48, "li"), e._uU(49, "Integration with SendGrid to send emails."), e.qZA(), e.TgZ(50, "li"), e._uU(51, "Integration with Twilio to send text messages."), e.qZA(), e.TgZ(52, "li"), e._uU(53, "Integration with Google Cloud to store images."), e.qZA(), e.TgZ(54, "li"), e._uU(55, "A well defined domain model for expansion"), e.qZA(), e.TgZ(56, "li"), e._uU(57, "Automated scripts to generate endpoints, components, services and models."), e.qZA()()()())
                            },
                            dependencies: [b.q, m.g],
                            changeDetection: 0
                        })
                    }
                    return t
                })();
            var Be = c(2723),
                Ie = c(5804),
                K = c(1676),
                p = c(8592);
            const Pe = [{
                path: "",
                canActivate: [],
                canActivateChild: [K.Lq, Be.a, te, K.XT],
                component: ue,
                children: [{
                    path: "",
                    canActivate: [],
                    component: pe,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "admin-dashboard",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "landing-pages",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "blog-news",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "bundles",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "themes",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "themes/admin-dashboard",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "themes/landing-pages",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "themes/blog-news",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "themes/business-corporate",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "themes/portfolio-resume",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "templates",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "templates/admin-dashboard",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "templates/landing-pages",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "templates/blog-news",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "templates/general",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "templates/navigation",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "templates/ecommerce",
                    canActivate: [],
                    component: f,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "bundle/:productSlug",
                    canActivate: [],
                    component: M,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "template/:productSlug",
                    canActivate: [],
                    component: M,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "theme/:productSlug",
                    canActivate: [],
                    component: M,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "snippets",
                    canActivate: [],
                    component: he,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "snippets/:snippet-slug",
                    canActivate: [],
                    component: me,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "guides",
                    canActivate: [Ie.r],
                    component: ae,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "guides/:postSlug",
                    canActivate: [Ie.r],
                    component: fe,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "licenses",
                    canActivate: [],
                    component: X,
                    resolve: {
                        dynamicRouteData: p.c
                    },
                    data: {
                        dynamicRouteDataKey: "shopLicenses"
                    }
                }, {
                    path: "licenses/:licenseID",
                    canActivate: [],
                    component: X,
                    resolve: {
                        dynamicRouteData: p.c
                    },
                    data: {
                        dynamicRouteDataKey: "shopLicenses"
                    }
                }, {
                    path: "terms-and-conditions",
                    canActivate: [],
                    component: Ce,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "privacy-policy",
                    canActivate: [],
                    component: ke,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "knowledge-base",
                    canActivate: [],
                    component: G,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "knowledge-base/:grouping",
                    canActivate: [],
                    component: G,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "bootstrap-resources",
                    canActivate: [],
                    component: re,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "sb-angular-inspector",
                    canActivate: [],
                    component: de,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "sb-form-builder",
                    canActivate: [],
                    component: Ae,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "sb-stack",
                    canActivate: [],
                    component: Se,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "about-us",
                    canActivate: [],
                    component: Ze,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "custom-development",
                    canActivate: [],
                    component: we,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "maintenance",
                    canActivate: [],
                    component: qe,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "design-language",
                    pathMatch: "full",
                    redirectTo: "design-language/material-design"
                }, {
                    path: "design-language/material-design",
                    canActivate: [],
                    component: Ue,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "design-language/start-bootstrap-pro",
                    canActivate: [],
                    component: xe,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }, {
                    path: "solution",
                    pathMatch: "full",
                    redirectTo: "solution/contact-forms"
                }, {
                    path: "solution/contact-forms",
                    canActivate: [],
                    component: Te,
                    resolve: {
                        dynamicRouteData: p.c
                    }
                }]
            }, {
                path: "previews/:previewID",
                canActivate: [K.Lq, Be.a],
                component: le,
                resolve: {
                    dynamicRouteData: p.c
                }
            }];
            let An = (() => {
                class t {
                    static# e = this.\u0275fac = function(n) {
                        return new(n || t)
                    };
                    static# t = this.\u0275mod = e.oAB({
                        type: t
                    });
                    static# o = this.\u0275inj = e.cJS({
                        imports: [_n, d.Bz.forChild(Pe), d.Bz]
                    })
                }
                return t
            })()
        }
    }
]);
//# sourceMappingURL=src_modules_site_site-routing_module_ts.a66f888fa0637596.js.map
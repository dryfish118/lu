function url(t) {
    return void 0 === Global.basePath && (Global.basePath = ""),
        Global.basePath + t
}

function rsrvUrl(t) {
    return void 0 === Global.rarvAppPath && (Global.rarvAppPath = ""),
        Global.rarvAppPath + t
}
define("basePath/constant", {
        SOURCE_TYPE: {
            XINBAO: "1",
            LICAI: "2",
            HUIFU: "3",
            FUYING: "4",
            PIAOJU: "5",
            ZHUJIANG: "6",
            BIANXIANTONG: "7",
            FUND: "8",
            ANSHUO: " 9"
        },
        CATEGORY: {
            ANYI: "101",
            JINYINGTONG: "201",
            HUIFU: "301",
            YL: "401",
            SHILIPAI: "402",
            PIAOJU: "501",
            WALLET: "801",
            FUND: "802",
            ANYI2: "901",
            BAILING: "902",
            ANYE: "903",
            ZHUJIANG: "601",
            XINBAO: "907",
            YUEGUJIAO: "B01",
            CGI: "908",
            DASHU: "906",
            YUDIAN: "909",
            MIME: "910",
            ZHINENGBAO: "806",
            YINGHUOBAO: "809",
            YINGHUOBAO_SALARY: "80902",
            ZHINENGBAO2: "806_sub",
            LC: "911",
            LUQB: "808"
        },
        CATEGORY_NAME_FOR_AGGREGATION: {
            701: "bianxiantong",
            908: "cgi",
            901: "anyi",
            902: "anyi",
            501: "piaoju",
            906: "shuloue",
            912: "PACX_LOAN",
            913: "CACX_LOAN"
        },
        IS_SHOW_COLLECTION: {
            901: !0,
            902: !0,
            903: !0,
            907: !0,
            908: !0,
            912: !0,
            913: !0
        },
        IS_USING_ITRADING: {
            901: !0,
            902: !0,
            903: !0,
            905: !0,
            906: !0,
            907: !0,
            908: !0,
            909: !0,
            910: !0,
            911: !0,
            912: !0,
            913: !0,
            R02: !0,
            R01: !0
        },
        PAYMENT: {
            BALANCE: 1,
            WITHHOLD: 2,
            QUICKPAY: 3
        },
        REQUEST: {
            PRODUCTDETAIL: "service/product/{0}/productDetail",
            PRODUCTDETAIL_LIST_P2P: "service/p2p/product/get-product-detail-by-id?productId={0}",
            QUICKPAY: "service/product/is-fast-pay-qualified?id={0}",
            QUICKPAY_LIST_P2P: "service/p2p/product/is-fast-pay-qualified?productId={0}&userId={1}",
            USER_STATUS_AND_GROUP: "service/users/{0}/get-user-status-and-group",
            ACCOUNT_OVERVIEW: "service/users/{0}/product/{1}/get-account-overview",
            ACCOUNT_OVERVIEW_LIST_P2P: "service/p2p/product/{1}/get-account-overview?investSource=0",
            INVEST_CHECK: "invest-check",
            INVEST_CHECK_ITRADING: "itrading/invest-check",
            PACKAGE_CHECK: "package-check",
            INVEST_CHECK_PLAN: "invest-plan-check",
            TRADING_PROD_INFO: "trading-prod-info?productId={0}",
            LC_LOANEE_COMBINATION: "lc-combination-info",
            LC_LOANEE_INFO: "lc-loanee-infos",
            YHB_PRODUCT_BENEFIT: "service/yhb/product/benefit",
            YHB_YESTERDAY_RATE: "service/yhb/product/yesterday/rate",
            RAISING_HISTORY: "service/product/{0}/get-raising-history",
            RAISING_HISTORY_LIST_P2P: "service/p2p/product/{0}/get-raising-history?pageIndex={1}&pageSize={2}",
            CREDENTIALS_LIST_P2P: "service/p2p/product/get-loanee-credentials?currentPage={0}&pageLimit={1}",
            COLLECTION_PLAN_P2P: "service/p2p/product/collection-calc?productId={0}"
        },
        HOST_URL: {
            LIST: document.getElementById("listHostUrl").value,
            SITE: document.getElementById("siteHostUrl").value,
            USER: document.getElementById("userHostUrl").value,
            TRADING: document.getElementById("tradeHostUrl").value,
            CASHIER: document.getElementById("cashierHostUrl").value,
            STATIC: document.getElementById("staticPath").value
        },
        IS_LIST_P2P_SERVICE: {
            J01: !0
        },
        DELAY_RELOAD_SECONDS: 15,
        LC_INSURANCE_FEE_RATE: 1e-4
    }),
    define("basePath/underscore", [], function() {
        var t, e;
        e = t = function(n) {
            return n instanceof t ? n : this instanceof t ? void(this._wrapped = n) : new e(n)
        };
        var n = function(t, e, n) {
            if (void 0 === e)
                return t;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    };
                case 4:
                    return function(n, i, r, o) {
                        return t.call(e, n, i, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        };
        return t.debounce = function(e, n, i) {
                var r, o, a, s, l, h = function() {
                    var u = t.now() - s;
                    u < n && u > 0 ? r = setTimeout(h, n - u) : (r = null,
                        i || (l = e.apply(a, o),
                            r || (a = o = null)))
                };
                return function() {
                    a = this,
                        o = arguments,
                        s = t.now();
                    var u = i && !r;
                    return r || (r = setTimeout(h, n)),
                        u && (l = e.apply(a, o),
                            a = o = null),
                        l
                }
            },
            t.throttle = function(e, n, i) {
                var r, o, a, s = null,
                    l = 0;
                i || (i = {});
                var h = function() {
                    l = i.leading === !1 ? 0 : t.now(),
                        s = null,
                        a = e.apply(r, o),
                        s || (r = o = null)
                };
                return function() {
                    var u = t.now();
                    l || i.leading !== !1 || (l = u);
                    var p = n - (u - l);
                    return r = this,
                        o = arguments,
                        p <= 0 || p > n ? (clearTimeout(s),
                            s = null,
                            l = u,
                            a = e.apply(r, o),
                            s || (r = o = null)) : s || i.trailing === !1 || (s = setTimeout(h, p)),
                        a
                }
            },
            t.now = Date.now || function() {
                return (new Date).getTime()
            },
            t.each = t.forEach = function(e, i, r) {
                if (null == e)
                    return e;
                i = n(i, r);
                var o, a = e.length;
                if (a === +a)
                    for (o = 0; o < a; o++)
                        i(e[o], o, e);
                else {
                    var s = t.keys(e);
                    for (o = 0,
                        a = s.length; o < a; o++)
                        i(e[s[o]], s[o], e)
                }
                return e
            },
            t.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
                t["is" + e] = function(t) {
                    return Object.prototype.toString.call(t) === "[object " + e + "]"
                }
            }),
            t.progressFormat = function(t) {
                if (0 === t || "0" === t)
                    return "0%";
                if (t > 1 || t > "1")
                    return "100%";
                if (!t || isNaN(t))
                    return "";
                if (t = parseFloat(t),
                    t = 1e4 * t / 100 + "",
                    t.indexOf(".") === -1)
                    return t + "%";
                var e = t.split("."),
                    n = e[1].substring(1, 2),
                    i = e[1].substring(0, 1),
                    r = e[1].substring(0, 2);
                return "0" === n ? e[0] + "." + i + "%" : e[0] + "." + r + "%"
            },
            t.cookie = {
                get: function(t) {
                    if (document.cookie.length > 0) {
                        var e, n = document.cookie.indexOf(t + "=");
                        if (n != -1)
                            return n = n + t.length + 1,
                                e = document.cookie.indexOf(";", n),
                                e == -1 && (e = document.cookie.length),
                                unescape(document.cookie.substring(n, e))
                    }
                    return ""
                },
                set: function(t, e, n) {
                    if (n) {
                        var i = new Date(n);
                        document.cookie = t + "=" + escape(e) + ";expires=" + i.toGMTString() + ";path=/"
                    } else
                        document.cookie = t + "=" + escape(e) + ";path=/"
                },
                del: function(t) {
                    var e = new Date;
                    e.setTime(e.getTime() - 864e5),
                        document.cookie = t + "=;expires=" + e.toGMTString() + ";path=/"
                }
            },
            t
    }),
    define("basePath/bigDecimal_define", [], function() {
        function t() {
            this.digits = 0,
                this.form = 0,
                this.lostDigits = !1,
                this.roundingMode = 0;
            var e = this.DEFAULT_FORM,
                n = this.DEFAULT_LOSTDIGITS,
                i = this.DEFAULT_ROUNDINGMODE;
            if (4 == t.arguments.length)
                e = t.arguments[1],
                n = t.arguments[2],
                i = t.arguments[3];
            else if (3 == t.arguments.length)
                e = t.arguments[1],
                n = t.arguments[2];
            else if (2 == t.arguments.length)
                e = t.arguments[1];
            else if (1 != t.arguments.length)
                throw "MathContext(): " + t.arguments.length + " arguments given; expected 1 to 4";
            var r = t.arguments[0];
            if (r != this.DEFAULT_DIGITS) {
                if (r < this.MIN_DIGITS)
                    throw "MathContext(): Digits too small: " + r;
                if (r > this.MAX_DIGITS)
                    throw "MathContext(): Digits too large: " + r
            }
            if (e == this.SCIENTIFIC)
            ;
            else if (e == this.ENGINEERING)
            ;
            else if (e != this.PLAIN)
                throw "MathContext() Bad form value: " + e;
            if (!this.isValidRound(i))
                throw "MathContext(): Bad roundingMode value: " + i;
            this.digits = r,
                this.form = e,
                this.lostDigits = n,
                this.roundingMode = i
        }

        function e() {
            return this.digits
        }

        function n() {
            return this.form
        }

        function i() {
            return this.lostDigits
        }

        function r() {
            return this.roundingMode
        }

        function o() {
            var t = null,
                e = 0,
                n = null;
            t = this.form == this.SCIENTIFIC ? "SCIENTIFIC" : this.form == this.ENGINEERING ? "ENGINEERING" : "PLAIN";
            var i = this.ROUNDS.length;
            e = 0;
            t: for (; i > 0; i--,
                e++)
                if (this.roundingMode == this.ROUNDS[e]) {
                    n = this.ROUNDWORDS[e];
                    break t
                }
            return "digits=" + this.digits + " form=" + t + " lostDigits=" + (this.lostDigits ? "1" : "0") + " roundingMode=" + n
        }

        function a(t) {
            var e = 0,
                n = this.ROUNDS.length;
            for (e = 0; n > 0; n--,
                e++)
                if (t == this.ROUNDS[e])
                    return !0;
            return !1
        }

        function s(t, e) {
            return (t - t % e) / e
        }

        function l(t, e, n, i, r) {
            var o;
            if (i > e)
                for (o = r - 1; o >= 0; --o)
                    n[o + i] = t[o + e];
            else
                for (o = 0; o < r; ++o)
                    n[o + i] = t[o + e]
        }

        function h(t) {
            var e, n = new Array(t);
            for (e = 0; e < t; ++e)
                n[e] = 0;
            return n
        }

        function u() {
            if (this.ind = 0,
                this.form = t.prototype.PLAIN,
                this.mant = null,
                this.exp = 0,
                0 != u.arguments.length) {
                var e, n, i;
                1 == u.arguments.length ? (e = u.arguments[0],
                        n = 0,
                        i = e.length) : (e = u.arguments[0],
                        n = u.arguments[1],
                        i = u.arguments[2]),
                    "string" == typeof e && (e = e.split(""));
                var r, o, a, s, l, h = 0,
                    p = 0,
                    d = !1,
                    g = 0,
                    c = 0,
                    f = 0,
                    m = 0,
                    v = 0,
                    y = 0;
                i <= 0 && this.bad("BigDecimal(): ", e),
                    this.ind = this.ispos,
                    "-" == e[0] ? (i--,
                        0 == i && this.bad("BigDecimal(): ", e),
                        this.ind = this.isneg,
                        n++) : "+" == e[0] && (i--,
                        0 == i && this.bad("BigDecimal(): ", e),
                        n++),
                    r = !1,
                    o = !1,
                    a = 0,
                    s = -1,
                    l = -1;
                var N = i;
                h = n;
                t: for (; N > 0; N--,
                    h++)
                    if (p = e[h],
                        p >= "0" && p <= "9")
                        l = h,
                        a++;
                    else
                if ("." != p) {
                    if ("e" == p || "E" == p) {
                        h - n > i - 2 && this.bad("BigDecimal(): ", e),
                            d = !1,
                            "-" == e[h + 1] ? (d = !0,
                                g = h + 2) : g = "+" == e[h + 1] ? h + 2 : h + 1,
                            c = i - (g - n),
                            (0 == c || c > 9) && this.bad("BigDecimal(): ", e);
                        var x = c;
                        for (f = g; x > 0; x--,
                            f++)
                            m = e[f],
                            m < "0" && this.bad("BigDecimal(): ", e),
                            m > "9" ? this.bad("BigDecimal(): ", e) : v = m - "0",
                            this.exp = 10 * this.exp + v;
                        d && (this.exp = -this.exp),
                            o = !0;
                        break t
                    }
                    (p < "0" || p > "9") && this.bad("BigDecimal(): ", e),
                        r = !0,
                        l = h,
                        a++
                } else
                    s >= 0 && this.bad("BigDecimal(): ", e),
                    s = h - n;
                0 == a && this.bad("BigDecimal(): ", e),
                    s >= 0 && (this.exp = this.exp + s - a);
                var I = l - 1;
                h = n;
                t: for (; h <= I; h++)
                    if (p = e[h],
                        "0" == p)
                        n++,
                        s--,
                        a--;
                    else {
                        if ("." != p) {
                            if (p <= "9")
                                break t;
                            break t
                        }
                        n++,
                        s--
                    }
                if (this.mant = new Array(a),
                    f = n,
                    r) {
                    do {
                        var E = a;
                        for (h = 0; E > 0; E--,
                            h++)
                            h == s && f++,
                            m = e[f],
                            m <= "9" ? this.mant[h] = m - "0" : this.bad("BigDecimal(): ", e),
                            f++
                    } while (!1)
                } else
                    do {
                        var O = a;
                        for (h = 0; O > 0; O--,
                            h++)
                            h == s && f++,
                            this.mant[h] = e[f] - "0",
                            f++
                    } while (!1);
                0 == this.mant[0] ? (this.ind = this.iszero,
                    this.exp > 0 && (this.exp = 0),
                    o && (this.mant = this.ZERO.mant,
                        this.exp = 0)) : o && (this.form = t.prototype.SCIENTIFIC,
                    y = this.exp + this.mant.length - 1,
                    (y < this.MinExp || y > this.MaxExp) && this.bad("BigDecimal(): ", e))
            }
        }

        function p() {
            var t;
            if (1 == p.arguments.length)
                t = p.arguments[0];
            else {
                if (0 != p.arguments.length)
                    throw "abs(): " + p.arguments.length + " arguments given; expected 0 or 1";
                t = this.plainMC
            }
            return this.ind == this.isneg ? this.negate(t) : this.plus(t)
        }

        function d() {
            var e;
            if (2 == d.arguments.length)
                e = d.arguments[1];
            else {
                if (1 != d.arguments.length)
                    throw "add(): " + d.arguments.length + " arguments given; expected 1 or 2";
                e = this.plainMC
            }
            var n, i, r, o, a, s, l, h = d.arguments[0],
                p = 0,
                g = 0,
                c = 0,
                f = null,
                m = 0,
                v = 0,
                y = 0,
                N = 0,
                x = 0,
                I = 0;
            if (e.lostDigits && this.checkdigits(h, e.digits),
                n = this,
                0 == n.ind && e.form != t.prototype.PLAIN)
                return h.plus(e);
            if (0 == h.ind && e.form != t.prototype.PLAIN)
                return n.plus(e);
            i = e.digits,
                i > 0 && (n.mant.length > i && (n = this.clone(n).round(e)),
                    h.mant.length > i && (h = this.clone(h).round(e))),
                r = new u,
                o = n.mant,
                a = n.mant.length,
                s = h.mant,
                l = h.mant.length;
            do
                if (n.exp == h.exp)
                    r.exp = n.exp;
                else if (n.exp > h.exp) {
                if (p = a + n.exp - h.exp,
                    p >= l + i + 1 && i > 0)
                    return r.mant = o,
                        r.exp = n.exp,
                        r.ind = n.ind,
                        a < i && (r.mant = this.extend(n.mant, i),
                            r.exp = r.exp - (i - a)),
                        r.finish(e, !1);
                r.exp = h.exp,
                    p > i + 1 && i > 0 && (g = p - i - 1,
                        l -= g,
                        r.exp = r.exp + g,
                        p = i + 1),
                    p > a && (a = p)
            } else {
                if (p = l + h.exp - n.exp,
                    p >= a + i + 1 && i > 0)
                    return r.mant = s,
                        r.exp = h.exp,
                        r.ind = h.ind,
                        l < i && (r.mant = this.extend(h.mant, i),
                            r.exp = r.exp - (i - l)),
                        r.finish(e, !1);
                r.exp = n.exp,
                    p > i + 1 && i > 0 && (g = p - i - 1,
                        a -= g,
                        r.exp = r.exp + g,
                        p = i + 1),
                    p > l && (l = p)
            }
            while (!1);
            if (n.ind == this.iszero ? r.ind = this.ispos : r.ind = n.ind,
                (n.ind == this.isneg ? 1 : 0) == (h.ind == this.isneg ? 1 : 0))
                c = 1;
            else
                do {
                    c = -1;
                    do
                        if (h.ind == this.iszero)
                        ;
                        else if (a < l || n.ind == this.iszero)
                        f = o,
                        o = s,
                        s = f,
                        g = a,
                        a = l,
                        l = g,
                        r.ind = -r.ind;
                    else if (a > l)
                    ;
                    else {
                        m = 0,
                            v = 0,
                            y = o.length - 1,
                            N = s.length - 1;
                        t: for (;;) {
                            if (m <= y)
                                x = o[m];
                            else {
                                if (v > N) {
                                    if (e.form != t.prototype.PLAIN)
                                        return this.ZERO;
                                    break t
                                }
                                x = 0
                            }
                            if (I = v <= N ? s[v] : 0,
                                x != I) {
                                x < I && (f = o,
                                    o = s,
                                    s = f,
                                    g = a,
                                    a = l,
                                    l = g,
                                    r.ind = -r.ind);
                                break t
                            }
                            m++,
                            v++
                        }
                    }
                    while (!1)
                } while (!1);
            return r.mant = this.byteaddsub(o, a, s, l, c, !1),
                r.finish(e, !1)
        }

        function g() {
            var t;
            if (2 == g.arguments.length)
                t = g.arguments[1];
            else {
                if (1 != g.arguments.length)
                    throw "compareTo(): " + g.arguments.length + " arguments given; expected 1 or 2";
                t = this.plainMC
            }
            var e, n = g.arguments[0],
                i = 0,
                r = 0;
            if (t.lostDigits && this.checkdigits(n, t.digits),
                this.ind == n.ind && this.exp == n.exp) {
                if (i = this.mant.length,
                    i < n.mant.length)
                    return -this.ind;
                if (i > n.mant.length)
                    return this.ind;
                if (i <= t.digits || 0 == t.digits) {
                    var o = i;
                    for (r = 0; o > 0; o--,
                        r++) {
                        if (this.mant[r] < n.mant[r])
                            return -this.ind;
                        if (this.mant[r] > n.mant[r])
                            return this.ind
                    }
                    return 0
                }
            } else {
                if (this.ind < n.ind)
                    return -1;
                if (this.ind > n.ind)
                    return 1
            }
            return e = this.clone(n),
                e.ind = -e.ind,
                this.add(e, t).ind
        }

        function c() {
            var e, n = -1;
            if (2 == c.arguments.length)
                e = "number" == typeof c.arguments[1] ? new t(0, t.prototype.PLAIN, (!1), c.arguments[1]) : c.arguments[1];
            else if (3 == c.arguments.length) {
                if (n = c.arguments[1],
                    n < 0)
                    throw "divide(): Negative scale: " + n;
                e = new t(0, t.prototype.PLAIN, (!1), c.arguments[2])
            } else {
                if (1 != c.arguments.length)
                    throw "divide(): " + c.arguments.length + " arguments given; expected between 1 and 3";
                e = this.plainMC
            }
            var i = c.arguments[0];
            return this.dodivide("D", i, e, n)
        }

        function f() {
            var t;
            if (2 == f.arguments.length)
                t = f.arguments[1];
            else {
                if (1 != f.arguments.length)
                    throw "divideInteger(): " + f.arguments.length + " arguments given; expected 1 or 2";
                t = this.plainMC
            }
            var e = f.arguments[0];
            return this.dodivide("I", e, t, 0)
        }

        function m() {
            var t;
            if (2 == m.arguments.length)
                t = m.arguments[1];
            else {
                if (1 != m.arguments.length)
                    throw "max(): " + m.arguments.length + " arguments given; expected 1 or 2";
                t = this.plainMC
            }
            var e = m.arguments[0];
            return this.compareTo(e, t) >= 0 ? this.plus(t) : e.plus(t)
        }

        function v() {
            var t;
            if (2 == v.arguments.length)
                t = v.arguments[1];
            else {
                if (1 != v.arguments.length)
                    throw "min(): " + v.arguments.length + " arguments given; expected 1 or 2";
                t = this.plainMC
            }
            var e = v.arguments[0];
            return this.compareTo(e, t) <= 0 ? this.plus(t) : e.plus(t)
        }

        function y() {
            var t;
            if (2 == y.arguments.length)
                t = y.arguments[1];
            else {
                if (1 != y.arguments.length)
                    throw "multiply(): " + y.arguments.length + " arguments given; expected 1 or 2";
                t = this.plainMC
            }
            var e, n, i, r, o, a, s = y.arguments[0],
                l = null,
                h = null,
                p = 0,
                d = 0,
                g = 0;
            t.lostDigits && this.checkdigits(s, t.digits),
                e = this,
                n = 0,
                i = t.digits,
                i > 0 ? (e.mant.length > i && (e = this.clone(e).round(t)),
                    s.mant.length > i && (s = this.clone(s).round(t))) : (e.exp > 0 && (n += e.exp),
                    s.exp > 0 && (n += s.exp)),
                e.mant.length < s.mant.length ? (l = e.mant,
                    h = s.mant) : (l = s.mant,
                    h = e.mant),
                r = l.length + h.length - 1,
                p = l[0] * h[0] > 9 ? r + 1 : r,
                o = new u,
                a = this.createArrayWithZeros(p);
            var c = l.length;
            for (d = 0; c > 0; c--,
                d++)
                g = l[d],
                0 != g && (a = this.byteaddsub(a, a.length, h, r, g, !0)),
                r--;
            return o.ind = e.ind * s.ind,
                o.exp = e.exp + s.exp - n,
                0 == n ? o.mant = a : o.mant = this.extend(a, a.length + n),
                o.finish(t, !1)
        }

        function N() {
            var t;
            if (1 == N.arguments.length)
                t = N.arguments[0];
            else {
                if (0 != N.arguments.length)
                    throw "negate(): " + N.arguments.length + " arguments given; expected 0 or 1";
                t = this.plainMC
            }
            var e;
            return t.lostDigits && this.checkdigits(null, t.digits),
                e = this.clone(this),
                e.ind = -e.ind,
                e.finish(t, !1)
        }

        function x() {
            var e;
            if (1 == x.arguments.length)
                e = x.arguments[0];
            else {
                if (0 != x.arguments.length)
                    throw "plus(): " + x.arguments.length + " arguments given; expected 0 or 1";
                e = this.plainMC
            }
            if (e.lostDigits && this.checkdigits(null, e.digits),
                e.form == t.prototype.PLAIN && this.form == t.prototype.PLAIN) {
                if (this.mant.length <= e.digits)
                    return this;
                if (0 == e.digits)
                    return this
            }
            return this.clone(this).finish(e, !1)
        }

        function I() {
            var e;
            if (2 == I.arguments.length)
                e = I.arguments[1];
            else {
                if (1 != I.arguments.length)
                    throw "pow(): " + I.arguments.length + " arguments given; expected 1 or 2";
                e = this.plainMC
            }
            var n, i, r, o, a, s, l = I.arguments[0],
                h = 0,
                u = 0,
                p = 0;
            if (e.lostDigits && this.checkdigits(l, e.digits),
                n = l.intcheck(this.MinArg, this.MaxArg),
                i = this,
                r = e.digits,
                0 == r) {
                if (l.ind == this.isneg)
                    throw "pow(): Negative power: " + l.toString();
                h = 0
            } else {
                if (l.mant.length + l.exp > r)
                    throw "pow(): Too many digits: " + l.toString();
                i.mant.length > r && (i = this.clone(i).round(e)),
                    u = l.mant.length + l.exp,
                    h = r + u + 1
            }
            if (o = new t(h, e.form, (!1), e.roundingMode),
                a = this.ONE,
                0 == n)
                return a;
            for (n < 0 && (n = -n),
                s = !1,
                p = 1; n <<= 1,
                n < 0 && (s = !0,
                    a = a.multiply(i, o)),
                31 != p; p++)
                s && (a = a.multiply(a, o));
            return l.ind < 0 && (a = this.ONE.divide(a, o)),
                a.finish(e, !0)
        }

        function E() {
            var t;
            if (2 == E.arguments.length)
                t = E.arguments[1];
            else {
                if (1 != E.arguments.length)
                    throw "remainder(): " + E.arguments.length + " arguments given; expected 1 or 2";
                t = this.plainMC
            }
            var e = E.arguments[0];
            return this.dodivide("R", e, t, -1)
        }

        function O() {
            var t;
            if (2 == O.arguments.length)
                t = O.arguments[1];
            else {
                if (1 != O.arguments.length)
                    throw "subtract(): " + O.arguments.length + " arguments given; expected 1 or 2";
                t = this.plainMC
            }
            var e, n = O.arguments[0];
            return t.lostDigits && this.checkdigits(n, t.digits),
                e = this.clone(n),
                e.ind = -e.ind,
                this.add(e, t)
        }

        function A(t) {
            var e, n = 0,
                i = null,
                r = null;
            if (null == t)
                return !1;
            if (!(t instanceof u))
                return !1;
            if (e = t,
                this.ind != e.ind)
                return !1;
            if (this.mant.length == e.mant.length && this.exp == e.exp && this.form == e.form) {
                var o = this.mant.length;
                for (n = 0; o > 0; o--,
                    n++)
                    if (this.mant[n] != e.mant[n])
                        return !1
            } else {
                if (i = this.layout(),
                    r = e.layout(),
                    i.length != r.length)
                    return !1;
                var a = i.length;
                for (n = 0; a > 0; a--,
                    n++)
                    if (i[n] != r[n])
                        return !1
            }
            return !0
        }

        function D() {
            var t, e, n, i;
            if (6 == D.arguments.length)
                t = D.arguments[2],
                e = D.arguments[3],
                n = D.arguments[4],
                i = D.arguments[5];
            else {
                if (2 != D.arguments.length)
                    throw "format(): " + D.arguments.length + " arguments given; expected 2 or 6";
                t = -1,
                    e = -1,
                    n = N.prototype.SCIENTIFIC,
                    i = this.ROUND_HALF_UP
            }
            var r, o, a = D.arguments[0],
                s = D.arguments[1],
                l = 0,
                h = 0,
                u = 0,
                p = null,
                d = 0,
                g = 0,
                c = 0,
                f = 0,
                m = null,
                v = 0,
                y = 0;
            if ((a < -1 || 0 == a) && this.badarg("format", 1, a),
                s < -1 && this.badarg("format", 2, s),
                (t < -1 || 0 == t) && this.badarg("format", 3, t),
                e < -1 && this.badarg("format", 4, e),
                n == N.prototype.SCIENTIFIC || n == N.prototype.ENGINEERING || (n == -1 ? n = N.prototype.SCIENTIFIC : this.badarg("format", 5, n)),
                i != this.ROUND_HALF_UP)
                try {
                    i == -1 ? i = this.ROUND_HALF_UP : new N(9, N.prototype.SCIENTIFIC, (!1), i)
                } catch (N) {
                    this.badarg("format", 6, i)
                }
            r = this.clone(this);
            do
                e == -1 ? r.form = N.prototype.PLAIN : r.ind == this.iszero ? r.form = N.prototype.PLAIN : (l = r.exp + r.mant.length,
                    l > e ? r.form = n : l < -5 ? r.form = n : r.form = N.prototype.PLAIN);
            while (!1);
            if (s >= 0)
                t: for (; r.form == N.prototype.PLAIN ? h = -r.exp : r.form == N.prototype.SCIENTIFIC ? h = r.mant.length - 1 : (u = (r.exp + r.mant.length - 1) % 3,
                        u < 0 && (u = 3 + u),
                        u++,
                        h = u >= r.mant.length ? 0 : r.mant.length - u),
                    h != s;) {
                    if (h < s) {
                        if (p = this.extend(r.mant, r.mant.length + s - h),
                            r.mant = p,
                            r.exp = r.exp - (s - h),
                            r.exp < this.MinExp)
                            throw "format(): Exponent Overflow: " + r.exp;
                        break t
                    }
                    if (d = h - s,
                        d > r.mant.length)
                        r.mant = this.ZERO.mant,
                        r.ind = this.iszero,
                        r.exp = 0;
                    else if (g = r.mant.length - d,
                        c = r.exp,
                        r.round(g, i),
                        r.exp - c == d)
                        break t
                }
            if (o = r.layout(),
                a > 0) {
                var x = o.length;
                for (f = 0; x > 0 && "." != o[f] && "E" != o[f]; x--,
                    f++)
                ;
                if (f > a && this.badarg("format", 1, a),
                    f < a) {
                    m = new Array(o.length + a - f);
                    var I = a - f;
                    for (v = 0; I > 0; I--,
                        v++)
                        m[v] = " ";
                    this.arraycopy(o, 0, m, v, o.length),
                        o = m
                }
            }
            if (t > 0) {
                var E = o.length - 1;
                for (f = o.length - 1; E > 0 && "E" != o[f]; E--,
                    f--)
                ;
                if (0 == f) {
                    m = new Array(o.length + t + 2),
                        this.arraycopy(o, 0, m, 0, o.length);
                    var O = t + 2;
                    for (v = o.length; O > 0; O--,
                        v++)
                        m[v] = " ";
                    o = m
                } else if (y = o.length - f - 2,
                    y > t && this.badarg("format", 3, t),
                    y < t) {
                    m = new Array(o.length + t - y),
                        this.arraycopy(o, 0, m, 0, f + 2);
                    var A = t - y;
                    for (v = f + 2; A > 0; A--,
                        v++)
                        m[v] = "0";
                    this.arraycopy(o, f + 2, m, v, y),
                        o = m
                }
            }
            return o.join("")
        }

        function R() {
            var t, e, n = 0,
                i = 0,
                r = 0;
            if (this.ind == this.iszero)
                return 0;
            if (t = this.mant.length - 1,
                this.exp < 0) {
                if (t += this.exp, !this.allzero(this.mant, t + 1))
                    throw "intValueExact(): Decimal part non-zero: " + this.toString();
                if (t < 0)
                    return 0;
                n = 0
            } else {
                if (this.exp + t > 9)
                    throw "intValueExact(): Conversion overflow: " + this.toString();
                n = this.exp
            }
            e = 0;
            var o = t + n;
            for (i = 0; i <= o; i++)
                e = 10 * e,
                i <= t && (e += this.mant[i]);
            if (t + n == 9 && (r = s(e, 1e9),
                    r != this.mant[0])) {
                if (e == -2147483648 && this.ind == this.isneg && 2 == this.mant[0])
                    return e;
                throw "intValueExact(): Conversion overflow: " + this.toString()
            }
            return this.ind == this.ispos ? e : -e
        }

        function _(t) {
            var e;
            return e = this.clone(this),
                e.exp = e.exp - t,
                e.finish(this.plainMC, !1)
        }

        function w(t) {
            var e;
            return e = this.clone(this),
                e.exp = e.exp + t,
                e.finish(this.plainMC, !1)
        }

        function U() {
            return this.exp >= 0 ? 0 : -this.exp
        }

        function C() {
            var e;
            if (2 == C.arguments.length)
                e = C.arguments[1];
            else {
                if (1 != C.arguments.length)
                    throw "setScale(): " + C.arguments.length + " given; expected 1 or 2";
                e = this.ROUND_UNNECESSARY
            }
            var n, i, r = C.arguments[0],
                o = 0,
                a = 0;
            if (n = this.scale(),
                n == r && this.form == t.prototype.PLAIN)
                return this;
            if (i = this.clone(this),
                n <= r)
                o = 0 == n ? i.exp + r : r - n,
                i.mant = this.extend(i.mant, i.mant.length + o),
                i.exp = -r;
            else {
                if (r < 0)
                    throw "setScale(): Negative scale: " + r;
                a = i.mant.length - (n - r),
                    i = i.round(a, e),
                    i.exp != -r && (i.mant = this.extend(i.mant, i.mant.length + 1),
                        i.exp = i.exp - 1)
            }
            return i.form = t.prototype.PLAIN,
                i
        }

        function b() {
            return this.ind
        }

        function o() {
            return this.layout().join("")
        }

        function L() {
            var e, n, i, r = 0,
                o = null,
                a = 0,
                s = 0,
                l = 0,
                h = null,
                u = 0;
            e = new Array(this.mant.length);
            var p = this.mant.length;
            for (r = 0; p > 0; p--,
                r++)
                e[r] = this.mant[r] + "";
            if (this.form != t.prototype.PLAIN) {
                if (o = "",
                    this.ind == this.isneg && (o += "-"),
                    a = this.exp + e.length - 1,
                    this.form == t.prototype.SCIENTIFIC)
                    o += e[0],
                    e.length > 1 && (o += "."),
                    o += e.slice(1).join("");
                else
                    do
                        if (s = a % 3,
                            s < 0 && (s = 3 + s),
                            a -= s,
                            s++,
                            s >= e.length) {
                            o += e.join("");
                            for (var d = s - e.length; d > 0; d--)
                                o += "0"
                        } else
                            o += e.slice(0, s).join(""),
                            o += ".",
                            o += e.slice(s).join("");
                while (!1);
                return 0 != a && (a < 0 ? (l = "-",
                            a = -a) : l = "+",
                        o += "E",
                        o += l,
                        o += a),
                    o.split("")
            }
            if (0 == this.exp)
                return this.ind >= 0 ? e : (h = new Array(e.length + 1),
                    h[0] = "-",
                    this.arraycopy(e, 0, h, 1, e.length),
                    h);
            if (n = this.ind == this.isneg ? 1 : 0,
                i = this.exp + e.length,
                i < 1) {
                u = n + 2 - this.exp,
                    h = new Array(u),
                    0 != n && (h[0] = "-"),
                    h[n] = "0",
                    h[n + 1] = ".";
                var g = -i;
                for (r = n + 2; g > 0; g--,
                    r++)
                    h[r] = "0";
                return this.arraycopy(e, 0, h, n + 2 - i, e.length),
                    h
            }
            if (i > e.length) {
                u = n + i,
                    h = new Array(u),
                    0 != n && (h[0] = "-"),
                    this.arraycopy(e, 0, h, n, e.length);
                var c = i - e.length;
                for (r = n + e.length; c > 0; c--,
                    r++)
                    h[r] = "0";
                return h
            }
            return u = n + 1 + e.length,
                h = new Array(u),
                0 != n && (h[0] = "-"),
                this.arraycopy(e, 0, h, n, i),
                h[n + i] = ".",
                this.arraycopy(e, i, h, n + i + 1, e.length - i),
                h
        }

        function T(t, e) {
            var n;
            if (n = this.intValueExact(),
                n < t || n > e)
                throw "intcheck(): Conversion overflow: " + n;
            return n
        }

        function $(e, n, i, r) {
            var o, a, l, h, p, d, g, c, f, m, v, y = 0,
                N = 0,
                x = 0,
                I = 0,
                E = 0,
                O = 0,
                A = 0,
                D = 0,
                R = null,
                _ = 0,
                w = 0,
                U = null;
            if (i.lostDigits && this.checkdigits(n, i.digits),
                o = this,
                0 == n.ind)
                throw "dodivide(): Divide by 0";
            if (0 == o.ind)
                return i.form != t.prototype.PLAIN ? this.ZERO : r == -1 ? o : o.setScale(r);
            if (a = i.digits,
                a > 0 ? (o.mant.length > a && (o = this.clone(o).round(i)),
                    n.mant.length > a && (n = this.clone(n).round(i))) : (r == -1 && (r = o.scale()),
                    a = o.mant.length,
                    r != -o.exp && (a = a + r + o.exp),
                    a = a - (n.mant.length - 1) - n.exp,
                    a < o.mant.length && (a = o.mant.length),
                    a < n.mant.length && (a = n.mant.length)),
                l = o.exp - n.exp + o.mant.length - n.mant.length,
                l < 0 && "D" != e)
                return "I" == e ? this.ZERO : this.clone(o).finish(i, !1);
            h = new u,
                h.ind = o.ind * n.ind,
                h.exp = l,
                h.mant = this.createArrayWithZeros(a + 1),
                p = a + a + 1,
                d = this.extend(o.mant, p),
                g = p,
                c = n.mant,
                f = p,
                m = 10 * c[0] + 1,
                c.length > 1 && (m += c[1]),
                v = 0;
            t: for (;;) {
                y = 0;
                e: for (; !(g < f);) {
                    if (g == f) {
                        n: do {
                            var C = g;
                            for (N = 0; C > 0; C--,
                                N++) {
                                if (x = N < c.length ? c[N] : 0,
                                    d[N] < x)
                                    break e;
                                if (d[N] > x)
                                    break n
                            }
                            y++,
                            h.mant[v] = y,
                                v++,
                                d[0] = 0;
                            break t
                        } while (!1);I = d[0]
                    }
                    else
                        I = 10 * d[0],
                        g > 1 && (I += d[1]);
                    if (E = s(10 * I, m),
                        0 == E && (E = 1),
                        y += E,
                        d = this.byteaddsub(d, g, c, f, -E, !0),
                        0 == d[0]) {
                        var b = g - 2;
                        for (O = 0; O <= b && 0 == d[O]; O++)
                            g--;
                        0 != O && this.arraycopy(d, O, d, 0, g)
                    }
                }
                if (0 != v || 0 != y) {
                    if (h.mant[v] = y,
                        v++,
                        v == a + 1)
                        break t;
                    if (0 == d[0])
                        break t
                }
                if (r >= 0 && -h.exp > r)
                    break t;
                if ("D" != e && h.exp <= 0)
                    break t;
                h.exp = h.exp - 1,
                    f--
            }
            if (0 == v && (v = 1),
                "I" == e || "R" == e) {
                if (v + h.exp > a)
                    throw "dodivide(): Integer overflow";
                if ("R" == e)
                    do {
                        if (0 == h.mant[0])
                            return this.clone(o).finish(i, !1);
                        if (0 == d[0])
                            return this.ZERO;
                        for (h.ind = o.ind,
                            A = a + a + 1 - o.mant.length,
                            h.exp = h.exp - A + o.exp,
                            D = g,
                            N = D - 1; N >= 1 && h.exp < o.exp && h.exp < n.exp && 0 == d[N]; N--)
                            D--,
                            h.exp = h.exp + 1;
                        return D < d.length && (R = new Array(D),
                                this.arraycopy(d, 0, R, 0, D),
                                d = R),
                            h.mant = d,
                            h.finish(i, !1)
                    } while (!1)
            } else
                0 != d[0] && (_ = h.mant[v - 1],
                    _ % 5 == 0 && (h.mant[v - 1] = _ + 1));
            if (r >= 0)
                do
                    return v != h.mant.length && (h.exp = h.exp - (h.mant.length - v)),
                        w = h.mant.length - (-h.exp - r),
                        h.round(w, i.roundingMode),
                        h.exp != -r && (h.mant = this.extend(h.mant, h.mant.length + 1),
                            h.exp = h.exp - 1),
                        h.finish(i, !0);
                while (!1);
            if (v == h.mant.length)
                h.round(i),
                v = a;
            else {
                if (0 == h.mant[0])
                    return this.ZERO;
                U = new Array(v),
                    this.arraycopy(h.mant, 0, U, 0, v),
                    h.mant = U
            }
            return h.finish(i, !0)
        }

        function S(t, e) {
            throw t + "Not a number: " + e
        }

        function P(t, e, n) {
            throw "Bad argument " + e + " to " + t + ": " + n
        }

        function M(t, e) {
            var n;
            return t.length == e ? t : (n = h(e),
                this.arraycopy(t, 0, n, 0, t.length),
                n)
        }

        function F(t, e, n, i, r, o) {
            var a, s, l, h, u, p, d, g, c, f = 0,
                m = 0,
                v = 0;
            a = t.length,
                s = n.length,
                l = e - 1,
                h = i - 1,
                u = h,
                u < l && (u = l),
                p = null,
                o && u + 1 == a && (p = t),
                null == p && (p = this.createArrayWithZeros(u + 1)),
                d = !1,
                1 == r ? d = !0 : r == -1 && (d = !0),
                g = 0,
                f = u;
            t: for (; f >= 0; f--) {
                if (l >= 0 && (l < a && (g += t[l]),
                        l--),
                    h >= 0 && (h < s && (d ? r > 0 ? g += n[h] : g -= n[h] : g += n[h] * r),
                        h--),
                    g < 10 && g >= 0)
                    do {
                        p[f] = g,
                            g = 0;
                        continue t
                    } while (!1);
                m = g + 90,
                    p[f] = this.bytedig[m],
                    g = this.bytecar[m]
            }
            if (0 == g)
                return p;
            c = null,
                o && u + 2 == t.length && (c = t),
                null == c && (c = new Array(u + 2)),
                c[0] = g;
            var y = u + 1;
            for (v = 0; y > 0; y--,
                v++)
                c[v + 1] = p[v];
            return c
        }

        function G() {
            var t, e = 0,
                n = 0;
            for (t = new Array(190),
                e = 0; e <= 189; e++)
                n = e - 90,
                n >= 0 ? (t[e] = n % 10,
                    u.prototype.bytecar[e] = s(n, 10)) : (n += 100,
                    t[e] = n % 10,
                    u.prototype.bytecar[e] = s(n, 10) - 10);
            return t
        }

        function k(t) {
            var e;
            return e = new u,
                e.ind = t.ind,
                e.exp = t.exp,
                e.form = t.form,
                e.mant = t.mant,
                e
        }

        function H(t, e) {
            if (0 != e) {
                if (this.mant.length > e && !this.allzero(this.mant, e))
                    throw "Too many digits: " + this.toString();
                if (null != t && t.mant.length > e && !this.allzero(t.mant, e))
                    throw "Too many digits: " + t.toString()
            }
        }

        function B() {
            var t, e;
            if (2 == B.arguments.length)
                t = B.arguments[0],
                e = B.arguments[1];
            else {
                if (1 != B.arguments.length)
                    throw "round(): " + B.arguments.length + " arguments given; expected 1 or 2";
                var n = B.arguments[0];
                t = n.digits,
                    e = n.roundingMode
            }
            var i, r, o, a, s = !1,
                l = 0,
                h = null;
            if (i = this.mant.length - t,
                i <= 0)
                return this;
            this.exp = this.exp + i,
                r = this.ind,
                o = this.mant,
                t > 0 ? (this.mant = new Array(t),
                    this.arraycopy(o, 0, this.mant, 0, t),
                    s = !0,
                    l = o[t]) : (this.mant = this.ZERO.mant,
                    this.ind = this.iszero,
                    s = !1,
                    l = 0 == t ? o[0] : 0),
                a = 0;
            do
                if (e == this.ROUND_HALF_UP)
                    l >= 5 && (a = r);
                else if (e == this.ROUND_UNNECESSARY) {
                if (!this.allzero(o, t))
                    throw "round(): Rounding necessary"
            } else if (e == this.ROUND_HALF_DOWN)
                l > 5 ? a = r : 5 == l && (this.allzero(o, t + 1) || (a = r));
            else if (e == this.ROUND_HALF_EVEN)
                l > 5 ? a = r : 5 == l && (this.allzero(o, t + 1) ? this.mant[this.mant.length - 1] % 2 == 1 && (a = r) : a = r);
            else if (e == this.ROUND_DOWN)
            ;
            else if (e == this.ROUND_UP)
                this.allzero(o, t) || (a = r);
            else if (e == this.ROUND_CEILING)
                r > 0 && (this.allzero(o, t) || (a = r));
            else {
                if (e != this.ROUND_FLOOR)
                    throw "round(): Bad round value: " + e;
                r < 0 && (this.allzero(o, t) || (a = r))
            }
            while (!1);
            if (0 != a)
                do
                    this.ind == this.iszero ? (this.mant = this.ONE.mant,
                        this.ind = a) : (this.ind == this.isneg && (a = -a),
                        h = this.byteaddsub(this.mant, this.mant.length, this.ONE.mant, 1, a, s),
                        h.length > this.mant.length ? (this.exp++,
                            this.arraycopy(h, 0, this.mant, 0, this.mant.length)) : this.mant = h);
                while (!1);
            if (this.exp > this.MaxExp)
                throw "round(): Exponent Overflow: " + this.exp;
            return this
        }

        function Y(t, e) {
            var n = 0;
            e < 0 && (e = 0);
            var i = t.length - 1;
            for (n = e; n <= i; n++)
                if (0 != t[n])
                    return !1;
            return !0
        }

        function W(e, n) {
            var i = 0,
                r = 0,
                o = null,
                a = 0,
                s = 0;
            if (0 != e.digits && this.mant.length > e.digits && this.round(e),
                n && e.form != t.prototype.PLAIN) {
                for (i = this.mant.length,
                    r = i - 1; r >= 1 && 0 == this.mant[r]; r--)
                    i--,
                    this.exp++;
                i < this.mant.length && (o = new Array(i),
                    this.arraycopy(this.mant, 0, o, 0, i),
                    this.mant = o)
            }
            this.form = t.prototype.PLAIN;
            var l = this.mant.length;
            for (r = 0; l > 0; l--,
                r++)
                if (0 != this.mant[r]) {
                    if (r > 0)
                        do
                            o = new Array(this.mant.length - r),
                            this.arraycopy(this.mant, r, o, 0, this.mant.length - r),
                            this.mant = o;
                        while (!1);
                    if (a = this.exp + this.mant.length,
                        a > 0) {
                        if (a > e.digits && 0 != e.digits && (this.form = e.form),
                            a - 1 <= this.MaxExp)
                            return this
                    } else
                        a < -5 && (this.form = e.form);
                    if (a--,
                        a < this.MinExp || a > this.MaxExp)
                        t: do {
                            if (this.form == t.prototype.ENGINEERING && (s = a % 3,
                                    s < 0 && (s = 3 + s),
                                    a -= s,
                                    a >= this.MinExp && a <= this.MaxExp))
                                break t;
                            throw "finish(): Exponent Overflow: " + a
                        } while (!1);
                    return this
                }
            if (this.ind = this.iszero,
                e.form != t.prototype.PLAIN)
                this.exp = 0;
            else if (this.exp > 0)
                this.exp = 0;
            else if (this.exp < this.MinExp)
                throw "finish(): Exponent Overflow: " + this.exp;
            return this.mant = this.ZERO.mant,
                this
        }

        function z(t) {
            return this.compareTo(t) > 0
        }

        function V(t) {
            return this.compareTo(t) < 0
        }

        function Z(t) {
            return this.compareTo(t) >= 0
        }

        function j(t) {
            return this.compareTo(t) <= 0
        }

        function J() {
            return this.compareTo(u.prototype.ZERO) > 0
        }

        function X() {
            return this.compareTo(u.prototype.ZERO) < 0
        }

        function K() {
            return 0 === this.compareTo(u.prototype.ZERO)
        }
        return t.prototype.getDigits = e,
            t.prototype.getForm = n,
            t.prototype.getLostDigits = i,
            t.prototype.getRoundingMode = r,
            t.prototype.toString = o,
            t.prototype.isValidRound = a,
            t.PLAIN = t.prototype.PLAIN = 0,
            t.SCIENTIFIC = t.prototype.SCIENTIFIC = 1,
            t.ENGINEERING = t.prototype.ENGINEERING = 2,
            t.ROUND_CEILING = t.prototype.ROUND_CEILING = 2,
            t.ROUND_DOWN = t.prototype.ROUND_DOWN = 1,
            t.ROUND_FLOOR = t.prototype.ROUND_FLOOR = 3,
            t.ROUND_HALF_DOWN = t.prototype.ROUND_HALF_DOWN = 5,
            t.ROUND_HALF_EVEN = t.prototype.ROUND_HALF_EVEN = 6,
            t.ROUND_HALF_UP = t.prototype.ROUND_HALF_UP = 4,
            t.ROUND_UNNECESSARY = t.prototype.ROUND_UNNECESSARY = 7,
            t.ROUND_UP = t.prototype.ROUND_UP = 0,
            t.prototype.DEFAULT_FORM = t.prototype.SCIENTIFIC,
            t.prototype.DEFAULT_DIGITS = 9,
            t.prototype.DEFAULT_LOSTDIGITS = !1,
            t.prototype.DEFAULT_ROUNDINGMODE = t.prototype.ROUND_HALF_UP,
            t.prototype.MIN_DIGITS = 0,
            t.prototype.MAX_DIGITS = 999999999,
            t.prototype.ROUNDS = new Array(t.prototype.ROUND_HALF_UP, t.prototype.ROUND_UNNECESSARY, t.prototype.ROUND_CEILING, t.prototype.ROUND_DOWN, t.prototype.ROUND_FLOOR, t.prototype.ROUND_HALF_DOWN, t.prototype.ROUND_HALF_EVEN, t.prototype.ROUND_UP),
            t.prototype.ROUNDWORDS = new Array("ROUND_HALF_UP", "ROUND_UNNECESSARY", "ROUND_CEILING", "ROUND_DOWN", "ROUND_FLOOR", "ROUND_HALF_DOWN", "ROUND_HALF_EVEN", "ROUND_UP"),
            t.prototype.DEFAULT = new t(t.prototype.DEFAULT_DIGITS, t.prototype.DEFAULT_FORM, t.prototype.DEFAULT_LOSTDIGITS, t.prototype.DEFAULT_ROUNDINGMODE),
            u.prototype.div = s,
            u.prototype.arraycopy = l,
            u.prototype.createArrayWithZeros = h,
            u.prototype.abs = p,
            u.prototype.add = d,
            u.prototype.compareTo = g,
            u.prototype.divide = c,
            u.prototype.divideInteger = f,
            u.prototype.max = m,
            u.prototype.min = v,
            u.prototype.multiply = y,
            u.prototype.negate = N,
            u.prototype.plus = x,
            u.prototype.pow = I,
            u.prototype.remainder = E,
            u.prototype.subtract = O,
            u.prototype.equals = A,
            u.prototype.format = D,
            u.prototype.intValueExact = R,
            u.prototype.movePointLeft = _,
            u.prototype.movePointRight = w,
            u.prototype.scale = U,
            u.prototype.setScale = C,
            u.prototype.signum = b,
            u.prototype.toString = o,
            u.prototype.layout = L,
            u.prototype.intcheck = T,
            u.prototype.dodivide = $,
            u.prototype.bad = S,
            u.prototype.badarg = P,
            u.prototype.extend = M,
            u.prototype.byteaddsub = F,
            u.prototype.diginit = G,
            u.prototype.clone = k,
            u.prototype.checkdigits = H,
            u.prototype.round = B,
            u.prototype.allzero = Y,
            u.prototype.finish = W,
            u.prototype.isGreaterThan = z,
            u.prototype.isLessThan = V,
            u.prototype.isGreaterThanOrEqualTo = Z,
            u.prototype.isLessThanOrEqualTo = j,
            u.prototype.isPositive = J,
            u.prototype.isNegative = X,
            u.prototype.isZero = K,
            u.ROUND_CEILING = u.prototype.ROUND_CEILING = t.prototype.ROUND_CEILING,
            u.ROUND_DOWN = u.prototype.ROUND_DOWN = t.prototype.ROUND_DOWN,
            u.ROUND_FLOOR = u.prototype.ROUND_FLOOR = t.prototype.ROUND_FLOOR,
            u.ROUND_HALF_DOWN = u.prototype.ROUND_HALF_DOWN = t.prototype.ROUND_HALF_DOWN,
            u.ROUND_HALF_EVEN = u.prototype.ROUND_HALF_EVEN = t.prototype.ROUND_HALF_EVEN,
            u.ROUND_HALF_UP = u.prototype.ROUND_HALF_UP = t.prototype.ROUND_HALF_UP,
            u.ROUND_UNNECESSARY = u.prototype.ROUND_UNNECESSARY = t.prototype.ROUND_UNNECESSARY,
            u.ROUND_UP = u.prototype.ROUND_UP = t.prototype.ROUND_UP,
            u.prototype.ispos = 1,
            u.prototype.iszero = 0,
            u.prototype.isneg = -1,
            u.prototype.MinExp = -999999999,
            u.prototype.MaxExp = 999999999,
            u.prototype.MinArg = -999999999,
            u.prototype.MaxArg = 999999999,
            u.prototype.plainMC = new t(0, t.prototype.PLAIN),
            u.prototype.bytecar = new Array(190),
            u.prototype.bytedig = G(),
            u.ZERO = u.prototype.ZERO = new u("0"),
            u.ONE = u.prototype.ONE = new u("1"),
            u.TEN = u.prototype.TEN = new u("10"),
            u
    }),
    $.ajaxSetup({
        cache: !1
    }),
    window.listLib = window.listLib || {},
    String.prototype.trim = function() {
        return this.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, "")
    },
    String.prototype.format = function() {
        if (0 === arguments.length)
            return null;
        var t = Array.prototype.slice.call(arguments, 0);
        return this.replace(/\{(\d+)\}/g, function(e, n) {
            return t[n]
        })
    },
    String.prototype.safely = function() {
        return this.replace(/\n\r/g, "")
    },
    Array.prototype.clone = function() {
        return this.slice(0)
    },
    Array.prototype.removeAt = function(t) {
        return this.splice(t, 1),
            this
    };
var utility = function() {
    function t(t) {
        var e;
        $(window).bind("resize", function() {
            e && clearTimeout(e),
                e = setTimeout(t, 100)
        })
    }

    function e() {
        return !(!$.browser.msie || !/msie 7\.0/i.test(navigator.userAgent))
    }

    function n(t) {
        if (t && !isNaN(t) && t >= 1e6) {
            t = t / 1e8 + "";
            var e = t.split(".")[0],
                n = t.split(".")[1];
            return n && (n = n.substring(0, 2) - 0,
                n > 0) ? (n = n < 10 ? "0" + n : n,
                e + "." + n) : e
        }
        return 0
    }

    function i(t) {
        var e, n, i, r, o, a, s, l, h, u, p, d, g, c, f = 99999999999.99,
            m = "零",
            v = "壹",
            y = "贰",
            N = "叁",
            x = "肆",
            I = "伍",
            E = "陆",
            O = "柒",
            A = "捌",
            D = "玖",
            R = "拾",
            _ = "佰",
            w = "仟",
            U = "万",
            C = "亿",
            b = "元",
            L = "角",
            T = "分",
            $ = "整";
        if (t += "",
            "" === t)
            return "Empty input!";
        if (null != t.match(/[^,.\d]/))
            return "Invalid characters in the input string!";
        if (null == t.match(/^((\d{1,3}(,\d{3})*(.\d+)?)|(\d+(.\d+)?))$/))
            return "Illegal format of digit number!";
        if (t = t.replace(/,/g, ""),
            t = t.replace(/^0+/, ""),
            Number(t) > f)
            return "Too large a number to convert!";
        if (t = parseFloat(t),
            t += "",
            r = t.split("."),
            r.length > 1 ? (e = r[0],
                n = r[1],
                n = n.substr(0, 2)) : (e = r[0],
                n = ""),
            o = [m, v, y, N, x, I, E, O, A, D],
            a = ["", R, _, w],
            s = ["", U, C],
            l = [L, T],
            i = "",
            Number(e) > 0) {
            for (h = 0,
                u = 0; u < e.length; u++)
                p = e.length - u - 1,
                d = e.substr(u, 1),
                g = p / 4,
                c = p % 4,
                "0" == d ? h++ : (h > 0 && (i += o[0]),
                    h = 0,
                    i += o[Number(d)] + a[c]),
                0 === c && h < 4 && (i += s[g]);
            i += b
        }
        if ("" !== n)
            for (u = 0; u < n.length; u++)
                d = n.substr(u, 1),
                "0" != d && (i += o[Number(d)] + l[u]);
        return "" === i && (i = m + b),
            "" === n && (i += $),
            i
    }

    function r(t) {
        return o(t) + "%"
    }

    function o(t) {
        if (0 === t || "0" === t)
            return "0.00";
        if (!t || isNaN(t))
            return "";
        t = parseFloat(t),
            t = Math.round(1e4 * t) / 100 + "",
            t += t.indexOf(".") == -1 ? ".00" : "00";
        var e = t.split("."),
            n = e[1].substring(0, 2);
        return e[0] + "." + n
    }

    function a(t) {
        return !(t > 1e9) && d.test(t)
    }

    function s(t) {
        return d.test(t)
    }

    function l(t) {
        var e = "￥",
            n = h(t);
        return "" === n ? n : e + n
    }

    function h(t) {
        if (0 === t || "0" === t)
            return "0.00";
        if (!t || isNaN(t))
            return "";
        t += "";
        var e = t.split("."),
            n = e[0],
            i = e.length > 1 ? "." + e[1] : ".00";
        i.length < 3 && (i += "00"),
            i = i.substring(0, 3);
        for (var r = /(\d+)(\d{3})/; r.test(n);)
            n = n.replace(r, "$1,$2");
        return n + i
    }

    function u(t) {
        return Math.round(100 * t) / 100
    }

    function p(t, e) {
        return e ? t.replace(/\$\{(.+?)\}/g, function(t, n) {
            return e[n]
        }) : t
    }
    var d = new RegExp(/^\d+(\.\d{1,2})?$/);
    return {
        resize: t,
        convertCurrency: i,
        isIE7: e,
        percentageFormat: r,
        withoutPercentageFormat: o,
        numberFormat: l,
        numberFormatWithoutCurrency: h,
        round: u,
        formatMessage: p,
        validateMoney: a,
        validateAmount: s,
        toTenBillion: n
    }
}();
Date.prototype.Format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in e)
        new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
    return t
};
var DateUtils = {
    dateDiff: function(t, e) {
        var n, i, r, o;
        return n = t.split("-"),
            i = new Date(n[1] + "-" + n[2] + "-" + n[0]),
            n = e.split("-"),
            r = new Date(n[1] + "-" + n[2] + "-" + n[0]),
            o = parseInt(Math.abs(i - r) / 1e3 / 60 / 60 / 24)
    }
};
$("head").ajaxError(function(t, e) {
        if (500 == e.status)
            return window.top.location.href = document.getElementById("siteHostUrl").value + "/error.html", !1;
        if (404 == e.status)
            return window.top.location.href = document.getElementById("siteHostUrl").value + "/notFound.html", !1;
        var n = e.responseText;
        if (!n || n.indexOf("isNotAuthenticated") < 0)
            return !1;
        var i = $.parseJSON(n);
        return i && i.isNotAuthenticated ? (window.top.location.href = i.location + "&returnPostURL=" + window.location.href, !1) : void 0
    }),
    define("base", function() {}),
    define("listLibPath/bigListLib", ["basePath/underscore", "basePath/constant", "basePath/bigDecimal_define", "base"], function(t, e, n) {
        function i(t) {
            return {
                valMin: t.split(",")[0],
                valMax: t.split(",")[1]
            }
        }

        function r(t) {
            var e = $(t).data("identity"),
                n = $(t).data("val") + "",
                r = $("#currentPage"),
                o = $("#orderType"),
                a = $("#orderAsc"),
                s = $("#orderCondition"),
                l = $("#minInvestAmount"),
                h = $("#maxInvestAmount"),
                u = $("#minInvestPeriod"),
                p = $("#maxInvestPeriod"),
                d = $("#minInvestRate"),
                g = $("#maxInvestRate"),
                c = $("#collectionMode"),
                f = $("#tradeMode"),
                m = $("#subType"),
                v = $("#instId"),
                y = $("#haitongGrade"),
                N = $("#fundGroup"),
                x = $("#isOverdueTransfer"),
                I = $("#productCategoryEnum"),
                E = $("#rootProductCategoryEnum");
            if ($riskLevel = $("#riskLevel"),
                "amount" == e && (l.val(i(n).valMin),
                    h.val(i(n).valMax)),
                "period" == e && (u.val(i(n).valMin),
                    p.val(i(n).valMax)),
                "mouth-period" == e) {
                var O = i(n).valMin,
                    A = i(n).valMax,
                    D = O ? 30 * parseInt(O) : "",
                    R = A ? 30 * parseInt(A) : "";
                u.val(D),
                    p.val(R)
            }
            "rate" == e && (d.val(i(n).valMin),
                    g.val(i(n).valMax)),
                "collectionMode" == e && c.val(i(n).valMin),
                "tradingMode" == e && f.val(i(n).valMin),
                "pages" == e ? r.val(i(n).valMin) : r.val(1),
                "order" == e && (s.val(i(n).valMin),
                    o.val(i(n).valMin),
                    a.val(i(n).valMax)),
                "subType" == e && m.val(i(n).valMin),
                "instId" == e && v.val(i(n).valMin),
                "haitongGrade" == e && y.val(i(n).valMin),
                "fundGroupId" == e && N.val(i(n).valMin),
                "isOverdueTransfer" == e && x.val(i(n).valMin),
                "product" == e && I.val(i(n).valMin),
                "rootProduct" == e && E.val(i(n).valMin),
                "riskLevel" == e && $riskLevel.val(i(n).valMin),
                $("#filterForm").submit()
        }

        function o() {
            var t = $(".notice-board-record-list");
            if (t) {
                var e = t.find("li");
                if (e.length > 1) {
                    var n = e.height();
                    setInterval(function() {
                        t.animate({
                            marginTop: -n
                        }, 500, function() {
                            $(this).find("li:eq(0)").appendTo($(this)),
                                $(this).css({
                                    marginTop: 0
                                })
                        })
                    }, 5e3)
                }
            }
        }

        function a(t, e) {
            if (isNaN(t) || "" === t)
                return "";
            var i = new n(1e4 * Number(t) + "").setScale(0, n.ROUND_HALF_UP).mant.join("");
            return e ? Number(i) : Number(t)
        }
        $(".invest-range-list-wrap").hover(function() {
                $(this).addClass("is-active"),
                    $(this).find(".invest-range").show()
            }, function() {
                $(this).removeClass("is-active"),
                    $(this).find(".invest-range").hide()
            }),
            $(".filter-wrap .all a,.invest-filter .selection a,.sort-gather a,.pagination a").click(function() {
                r(this)
            }),
            $(".btn-range").click(function() {
                var t, e, n = $(this),
                    i = n.closest(".invest-range-list-wrap"),
                    o = "amount" === n.data("identity"),
                    s = i.find(".range-from").val(),
                    l = i.find(".range-to").val();
                if (t = a(s, o),
                    e = a(l, o),
                    "" !== s && "" !== l) {
                    var h = Math.min(t, e);
                    e = Math.max(t, e),
                        t = h
                }
                n.data("val", t + "," + e),
                    r(this)
            }),
            $("#hui").change(function() {
                var t = $(this).prop("checked");
                t ? $("#isCuxiao").val(!0) : $("#isCuxiao").val(""),
                    r(null)
            }),
            $("#share").change(function() {
                var t = $(this).prop("checked");
                t ? $("#isShared").val(!0) : $("#isShared").val(!1),
                    r(null)
            }),
            $("#bianxian").change(function() {
                var t = $(this).prop("checked");
                t ? $("#canRealized").val("1") : $("#canRealized").val(""),
                    r(null)
            }),
            $("body").on("click", "#mgmtfee", function(t) {
                var e = $(t.currentTarget),
                    n = e.prop("checked");
                n ? $("#notHasBuyFeeRate").val(!0) : $("#notHasBuyFeeRate").val(!1),
                    r(null)
            });
        var s = $(".invest-range-list .input");
        s.on("keyup", function(t) {
                var e = $(this).closest(".invest-range-list-wrap").find(".btn-range"),
                    n = $(this).val();
                if (189 !== t.keyCode && 109 !== t.keyCode && $.isNumeric(n)) {
                    var i = n;
                    if (i.indexOf(".") === -1)
                        $(this).val(i);
                    else {
                        var r = n.split("."),
                            o = r[1].substring(0, 2);
                        "period" == e.data("identity") ? $(this).val(r[0]) : $(this).val(r[0] + "." + o)
                    }
                } else
                    $(this).val("");
                13 === t.keyCode && e.removeClass("btn-range-hover")
            }),
            s.on("keydown", function(t) {
                var e = $(this).closest(".invest-range-list-wrap").find(".btn-range");
                13 === t.keyCode && (e.addClass("btn-range-hover"),
                    e.trigger("click"))
            });
        var l = {
            showQuestion: !1,
            showHelp: !1,
            relatedEl: ".main-wide-wrap"
        };
        new lufax.ui.GoTop(l),
            $(".left-menu dt b").click(function() {
                var t = $(this);
                t.is(".is-folded") ? t.closest("dt").next(".menu-sub").slideDown(300, function() {
                    t.removeClass("is-folded")
                }) : t.closest("dt").next(".menu-sub").slideUp(300, function() {
                    t.addClass("is-folded")
                })
            }),
            $(function() {
                lufax && lufax.header && lufax.header.initCheckKycInvestStatus(),
                    o(),
                    $(".icon-deduction,.is-dashed-tip,.tooltip").mouseTips(),
                    $(".tooltipHolding").each(function() {
                        $(this).hasClass("delay-tips") || $(this).mouseTips({
                            holding: !0
                        })
                    })
            })
    }),
    requirejs(["basePath/constant", "basePath/underscore", "listLibPath/bigListLib", "base"], function(t, e) {
        function n() {
            $(".display-indicator").click(function() {
                    var t = $(this),
                        e = t.find(".indicator-text"),
                        n = t.closest(".product-status").next(".aggregation-container");
                    t.is(".is-folded") ? n.slideDown(300, function() {
                        e.html("收起"),
                            t.removeClass("is-folded"),
                            r(n)
                    }) : n.slideUp(300, function() {
                        e.html("展开"),
                            t.addClass("is-folded"),
                            n.find(".loading-area").show(),
                            n.find(".productAnyiB-list").get(0).innerHTML = ""
                    })
                }),
                $(".list-display-indicator").click(function() {
                    var t = $(this),
                        e = t.find(".indicator-text"),
                        n = $(".hotContainer");
                    t.is(".is-folded") ? (n.removeClass("hideMore"),
                        e.text("收起"),
                        t.removeClass("is-folded")) : (n.addClass("hideMore"),
                        e.text("更多"),
                        t.addClass("is-folded"))
                }),
                $(".condition-indicator").click(function() {
                    var t = $(this),
                        n = t.find(".indicator-text"),
                        i = $(".product-filter dd");
                    t.is(".is-folded") ? (i.addClass("showMore"),
                        n.text("收起"),
                        t.removeClass("is-folded"),
                        e.cookie.set("_xmsx", 1)) : (i.removeClass("showMore"),
                        n.text("更多"),
                        t.addClass("is-folded"),
                        e.cookie.set("_xmsx", 0))
                });
            var t = $(".J-introduce");
            t.on("click", ".J-introduce-toggle", function() {
                    t.find(".hiddenbox").toggleClass("hidden"),
                        $(this).toggleClass("actived")
                }),
                $(".function-notice-btn").click(function() {
                    var t = new Date,
                        n = t.getTime(),
                        i = n + 7776e6;
                    t.setTime(i),
                        e.cookie.set("_rayg", 1, t),
                        $(".function-notice").remove()
                }),
                $(".intro-operate").toggle(function() {
                    $(".product-introduce dl").addClass("show-all"),
                        $(this).addClass("open")
                }, function() {
                    $(".product-introduce dl").removeClass("show-all"),
                        $(this).removeClass("open")
                }),
                $(".aggregation-container").on("click", ".pagination-indicator.is-active", function() {
                    var t = $(this),
                        e = t.closest(".aggregation-pagination"),
                        n = e.get(0).id,
                        i = lufax.loading,
                        o = e.data("currentPage");
                    t.hasClass("is-forward") ? o-- : o++,
                        i.start(n, !0),
                        r(t.closest(".aggregation-container"), o, n)
                }),
                $(".product-list .price").click(function() {
                    window.location.href = $("#listHostUrl").val() + "transfer/zhuanxiang?minMoney=" + $(this).attr("minInvestAmount") + "&maxMoney=" + $(this).attr("maxInvestAmount")
                })
        }

        function i(t) {
            if (!t)
                return {
                    data: []
                };
            for (var n = t.data, i = [], r = 0; r < n.length; r++) {
                var a, s, l;
                Number(n[r].price),
                    Number(n[r].raisedAmount),
                    s = n[r].extProgress,
                    a = e.progressFormat(s),
                    l = a.substring(0, a.length - 1).split(".")[0] + "%";
                var h = {
                    productId: n[r].id,
                    title: n[r].displayName + " " + n[r].code,
                    remainingAmount: lufax.NumFormat.numberFormatWithoutCurrency(n[r].remainingAmount),
                    price: lufax.NumFormat.numberFormatWithoutCurrency(n[r].extCurrentPrice),
                    progress: a,
                    progressDisplay: l,
                    publishAtCompleteTime: o(n[r].publishedAt),
                    interestRate: lufax.NumFormat.percentageFormat(n[r].interestRate),
                    productStatus: n[r].productStatus,
                    extInvestPeriodDisplay: n[r].extInvestPeriodDisplay,
                    tradingMode: n[r].tradingMode,
                    acceptanceBank: n[r].acceptanceBank
                };
                i.push(h)
            }
            return t.data = i,
                t
        }

        function r(e, n, r) {
            if (!e.data("isLoading")) {
                if (!n) {
                    var o = e.find(".loading-area").get(0).id,
                        s = lufax.loading;
                    s.start(o, !0)
                }
                n = n ? n : 1,
                    e.data("isLoading", !0);
                var l = e.data("category"),
                    h = e.data("productId"),
                    u = {
                        productId: h,
                        currentPage: n,
                        productCategory: t.CATEGORY_NAME_FOR_AGGREGATION[l],
                        pageSize: 5
                    },
                    p = "1" == e.data("isfornewuser") || 1 == e.data("productlinenewuser");
                p && (u.newUserProductType = "1" == e.data("isfornewuser") ? "NEW_USER" : "PRODUCT_LINE_NEW_USER"),
                    $("#p2p-list").length > 0 && (p = !1),
                    $.ajax({
                        url: a.AGGREGATION_DATAGENERAL,
                        data: u,
                        type: "GET"
                    }).done(function(t) {
                        t = i(t),
                            t.id = e.data("id"),
                            t.categoryId = l,
                            t.isLoadSk = $("#p2p-list").length > 0,
                            t.aggregationId = h,
                            lufax.templateMerge.textareaTemplateMergeAndShow("aggregation-content", t, function(t) {
                                e.find(".loading-area").hide(),
                                    e.find(".productAnyiB-list").get(0).innerHTML = t,
                                    e.data("isLoading", !1)
                            }),
                            e.parent().find(".product-count em").html(t.totalCount)
                    }).fail(function(t) {
                        423 == t.status && e.find(".productAnyiB-list").block({
                                message: "您的操作频率过快，请稍后再试！",
                                fadeIn: 10,
                                fadeOut: 300,
                                timeout: 2500,
                                showOverlay: !1,
                                centerY: !0,
                                centerX: !0,
                                css: {
                                    border: "none",
                                    padding: "15px",
                                    lineHeight: "30px",
                                    backgroundColor: "#000",
                                    opacity: .6,
                                    color: "#fff"
                                }
                            }),
                            lufax.loading.end(r ? r : o, !0),
                            e.data("isLoading", !1)
                    })
            }
        }

        function o(t) {
            var t = new Date(t);
            return t.Format("yyyy-MM-dd hh:mm:ss")
        }
        var a = {
            PROVISION_BALANCE: "service/product/get-provision-balance",
            AGGREGATION_DATAGENERAL: "service/productSearch/ext-product",
            WALLET_RATE: "service/product/annual-revenue?period=30&code=15032521176"
        };
        if ($(function() {
                n();
                var i = e.cookie.get("_rayg");
                i ? $(".function-notice").remove() : $(".function-notice").show();
                var r = e.cookie.get("_xmsx");
                if ("1" == r && $(".condition-indicator").click(),
                    $(".go-login").click(function() {
                        location.href = t.HOST_URL.USER + "/login?returnPostURL=" + encodeURIComponent(location.href)
                    }),
                    "haiwai" != $("#current-page").val()) {
                    $("#big-banner").find("ul").addClass("slides"),
                        $("#big-banner").flexslider({
                            animation: "slide",
                            animationLoop: !0,
                            slideshowSpeed: 5e3
                        }),
                        $("#p2p-list-banner").find("ul").addClass("slides"),
                        $("#p2p-list-banner").flexslider({
                            animation: "slide",
                            animationLoop: !0,
                            slideshowSpeed: 5e3,
                            start: function(t) {
                                t.find(".flex-prev, .flex-next").html("<span></span>"),
                                    t.find(".flex-control-nav").html("<li>" + (t.currentSlide + 1) + "/" + t.count + "</li>"),
                                    t.count < 2 && t.find(".flex-control-nav").hide()
                            },
                            before: function(t) {
                                t.find(".flex-control-nav").html("<li>" + (t.currentSlide + 1) + "/" + t.count + "</li>")
                            }
                        });
                    var o = $("#transfer-list-banner");
                    o.find("ul").addClass("slides"),
                        0 === o.find(".slides li").length ? o.remove() : o.flexslider({
                            animation: "slide",
                            animationLoop: !0,
                            slideshowSpeed: 5e3,
                            start: function(t) {
                                t.find(".flex-prev, .flex-next").html("<span></span>"),
                                    t.count < 2 && t.find(".flex-control-nav").hide()
                            },
                            before: function(t) {}
                        })
                }
                $(".is-dianjinhold").mouseTips(),
                    $(".is-withhold").mouseTips({
                        tipsWidth: 240,
                        topOffset: 0,
                        placeStyle: "position",
                        holding: !0
                    }),
                    $(".min-holding-days").each(function() {
                        $(this).hasClass("delay-tips") || $(this).mouseTips({
                            tipsWidth: 200,
                            topOffset: 5,
                            placeStyle: "position",
                            holding: !0
                        })
                    }),
                    t.CATEGORY.XINBAO == $("#productCategory").val() && $.getJSON(url(a.PROVISION_BALANCE), function(t) {
                        if (t) {
                            var e = utility.toTenBillion(t.loanBalance) - 0,
                                n = utility.toTenBillion(t.reserveBalance) - 0 + 3;
                            $("#xinbao-guarteen-amount").html(n),
                                $("#xinbao-loan-amount").html(e < .01 ? .01 : e)
                        }
                    }),
                    $(".second-count-down").length > 0 && $(".second-count-down").each(function() {
                        var t = $(this),
                            e = new lufax.util.countDown(t, {
                                countDownSeconds: t.data("second")
                            });
                        e.init()
                    });
                var s = new lufax.util.countDown($(".fof-product-status"), {
                    countDownSeconds: parseInt($("#fofCountDown").val()),
                    callback: function() {
                        $(".fof-product-status").remove(),
                            $("#fofStatusBtn").show()
                    }
                });
                s.init(),
                    "piaoju" === $("#currentSX").val() && $(".display-indicator").click();
                var l = "true" == $("#needHideEnd").val();
                $(".paging-container").paging({
                        currentPage: parseInt($("#currentPage").val()),
                        pageCount: parseInt($("#pageCount").val()),
                        hideEndPage: l,
                        onPageChange: function(t) {
                            $("#currentPage").val(t),
                                $("#filterForm").submit()
                        }
                    }),
                    "true" === $("#isWallet").val() && $.getJSON(url(a.WALLET_RATE), function(t) {
                        if (t && t.rate.length > 0) {
                            var e = Math.round(100 * parseFloat(t.rate[t.rate.length - 1])) / 100,
                                n = e.toString(),
                                i = n.indexOf(".");
                            for (i < 0 && (n += "."); n.length <= 3;)
                                n += "0";
                            $("#wallet-perSevenDay-rate").html(n)
                        }
                    })
            }),
            "haiwai" == $("#current-page").val()) {
            var s = $("#wide-slide"),
                l = $(".nav-container"),
                h = $(".lumi-focus");
            s.flexslider({
                    slideshowSpeed: 5e3,
                    animationSpeed: 800,
                    directionNav: !1,
                    controlNav: !0,
                    controlsContainer: l,
                    manualControls: l.find("li"),
                    pauseOnHover: !0,
                    startAt: 0
                }),
                l.find("li").length > 1 ? h.show() : h.hide()
        }
    }),
    define("listing/main/newBigList/all.js", function() {});
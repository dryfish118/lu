function url(t) {
    return void 0 === Global.basePath && (Global.basePath = ""),
        Global.basePath + t
}

function rsrvUrl(t) {
    return void 0 === Global.rarvAppPath && (Global.rarvAppPath = ""),
        Global.rarvAppPath + t
}
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
        return this.replace(/\{(\d+)\}/g, function(e, a) {
            return t[a]
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

    function a(t) {
        if (t && !isNaN(t) && t >= 1e6) {
            t = t / 1e8 + "";
            var e = t.split(".")[0],
                a = t.split(".")[1];
            return a && (a = a.substring(0, 2) - 0,
                a > 0) ? (a = a < 10 ? "0" + a : a,
                e + "." + a) : e
        }
        return 0
    }

    function n(t) {
        var e, a, n, r, s, i, o, l, c, u, p, f, d, h, g = 99999999999.99,
            m = "零",
            b = "壹",
            v = "贰",
            k = "叁",
            $ = "肆",
            y = "伍",
            R = "陆",
            w = "柒",
            E = "捌",
            S = "玖",
            x = "拾",
            J = "佰",
            P = "仟",
            T = "万",
            A = "亿",
            _ = "元",
            F = "角",
            N = "分",
            D = "整";
        if (t += "",
            "" === t)
            return "Empty input!";
        if (null != t.match(/[^,.\d]/))
            return "Invalid characters in the input string!";
        if (null == t.match(/^((\d{1,3}(,\d{3})*(.\d+)?)|(\d+(.\d+)?))$/))
            return "Illegal format of digit number!";
        if (t = t.replace(/,/g, ""),
            t = t.replace(/^0+/, ""),
            Number(t) > g)
            return "Too large a number to convert!";
        if (t = parseFloat(t),
            t += "",
            r = t.split("."),
            r.length > 1 ? (e = r[0],
                a = r[1],
                a = a.substr(0, 2)) : (e = r[0],
                a = ""),
            s = [m, b, v, k, $, y, R, w, E, S],
            i = ["", x, J, P],
            o = ["", T, A],
            l = [F, N],
            n = "",
            Number(e) > 0) {
            for (c = 0,
                u = 0; u < e.length; u++)
                p = e.length - u - 1,
                f = e.substr(u, 1),
                d = p / 4,
                h = p % 4,
                "0" == f ? c++ : (c > 0 && (n += s[0]),
                    c = 0,
                    n += s[Number(f)] + i[h]),
                0 === h && c < 4 && (n += o[d]);
            n += _
        }
        if ("" !== a)
            for (u = 0; u < a.length; u++)
                f = a.substr(u, 1),
                "0" != f && (n += s[Number(f)] + l[u]);
        return "" === n && (n = m + _),
            "" === a && (n += D),
            n
    }

    function r(t) {
        return s(t) + "%"
    }

    function s(t) {
        if (0 === t || "0" === t)
            return "0.00";
        if (!t || isNaN(t))
            return "";
        t = parseFloat(t),
            t = Math.round(1e4 * t) / 100 + "",
            t += t.indexOf(".") == -1 ? ".00" : "00";
        var e = t.split("."),
            a = e[1].substring(0, 2);
        return e[0] + "." + a
    }

    function i(t) {
        return !(t > 1e9) && f.test(t)
    }

    function o(t) {
        return f.test(t)
    }

    function l(t) {
        var e = "￥",
            a = c(t);
        return "" === a ? a : e + a
    }

    function c(t) {
        if (0 === t || "0" === t)
            return "0.00";
        if (!t || isNaN(t))
            return "";
        t += "";
        var e = t.split("."),
            a = e[0],
            n = e.length > 1 ? "." + e[1] : ".00";
        n.length < 3 && (n += "00"),
            n = n.substring(0, 3);
        for (var r = /(\d+)(\d{3})/; r.test(a);)
            a = a.replace(r, "$1,$2");
        return a + n
    }

    function u(t) {
        return Math.round(100 * t) / 100
    }

    function p(t, e) {
        return e ? t.replace(/\$\{(.+?)\}/g, function(t, a) {
            return e[a]
        }) : t
    }
    var f = new RegExp(/^\d+(\.\d{1,2})?$/);
    return {
        resize: t,
        convertCurrency: n,
        isIE7: e,
        percentageFormat: r,
        withoutPercentageFormat: s,
        numberFormat: l,
        numberFormatWithoutCurrency: c,
        round: u,
        formatMessage: p,
        validateMoney: i,
        validateAmount: o,
        toTenBillion: a
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
    for (var a in e)
        new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[a] : ("00" + e[a]).substr(("" + e[a]).length)));
    return t
};
var DateUtils = {
    dateDiff: function(t, e) {
        var a, n, r, s;
        return a = t.split("-"),
            n = new Date(a[1] + "-" + a[2] + "-" + a[0]),
            a = e.split("-"),
            r = new Date(a[1] + "-" + a[2] + "-" + a[0]),
            s = parseInt(Math.abs(n - r) / 1e3 / 60 / 60 / 24)
    }
};
$("head").ajaxError(function(t, e) {
        if (500 == e.status)
            return window.top.location.href = document.getElementById("siteHostUrl").value + "/error.html", !1;
        if (404 == e.status)
            return window.top.location.href = document.getElementById("siteHostUrl").value + "/notFound.html", !1;
        var a = e.responseText;
        if (!a || a.indexOf("isNotAuthenticated") < 0)
            return !1;
        var n = $.parseJSON(a);
        return n && n.isNotAuthenticated ? (window.top.location.href = n.location + "&returnPostURL=" + window.location.href, !1) : void 0
    }),
    define("base", function() {}),
    define("listLibPath/secmktStat", ["base"], function() {
        var t = {
                secmktStat: "api/product/secondary-market-stat"
            },
            e = Global.basePath + "transfer/service-info?type=dingqi",
            a = Global.basePath + "transfer/service-info?type=bxt",
            n = Global.basePath + "transfer/service-info?type=p2p",
            r = Global.basePath + "transfer/service-info?type=eshare",
            s = function(t) {
                this.options = $.extend({}, {}, t),
                    this.init()
            };
        return s.prototype = {
                init: function() {
                    var t = this;
                    ($(".J-secmkt-realized").length > 0 || $(".J-weekly-bxt").length > 0) && this.ajaxTransferData("B2C_PLEDGE", function(e) {
                            if (t.replaceListTips("B2C_PLEDGE", e),
                                $(".J-weekly-bxt").length > 0) {
                                var a = '<li class="list-item">最近7天变现成功率<span class="week-data">' + utility.percentageFormat(e.data[0].avgSuccessRatio) + "</span></li>";
                                $(".J-weekly-bxt").append(a),
                                    $(".week-data-box").show()
                            }
                            t.renderDetailStat("B2C_PLEDGE", e)
                        }, function() {
                            $(".J-secmkt-realized").mouseTips({
                                holding: !0,
                                topOffset: 0
                            })
                        }),
                        ($(".J-secmkt-transfer").length > 0 || $(".J-weekly-dingqi").length > 0) && this.ajaxTransferData("B2C_TRANSFER", function(e) {
                            if (t.replaceListTips("B2C_TRANSFER", e),
                                $(".J-weekly-dingqi").length > 0) {
                                var a = '<li class="list-item">最近7天转让成功率<span class="week-data">' + utility.percentageFormat(e.data[0].avgSuccessRatio) + "</span></li>";
                                $(".J-weekly-dingqi").append(a),
                                    $(".week-data-box").show()
                            }
                            t.renderDetailStat("B2C_TRANSFER", e)
                        }, function() {
                            $(".J-secmkt-transfer").mouseTips({
                                holding: !0,
                                topOffset: 0
                            })
                        }),
                        $(".J-secmkt-p2p").length > 0 && this.ajaxTransferData("P2P_TRANSFER", function(e) {
                            t.replaceListTips("P2P_TRANSFER", e),
                                t.renderDetailStat("P2P_TRANSFER", e)
                        }, function() {
                            $(".J-secmkt-p2p").mouseTips({
                                holding: !0,
                                topOffset: 0
                            })
                        }),
                        $(".J-secmkt-eshare").length > 0 && this.ajaxTransferData("E_SHARE", function(e) {
                            t.replaceListTips("E_SHARE", e),
                                t.renderDetailStat("E_SHARE", e)
                        }, function() {
                            $(".J-secmkt-eshare").mouseTips({
                                holding: !0,
                                topOffset: 0
                            })
                        }),
                        $(".J-weekly-p2p").length > 0 && this.ajaxTransferData("P2P_TRANSFER", function(t) {
                            var e = '<li class="list-item">最近7天转让成功率<span class="week-data">' + utility.percentageFormat(t.data[0].avgSuccessRatio) + "</span></li>";
                            $(".J-weekly-p2p").append(e),
                                $(".week-data-box").show()
                        }),
                        $(".J-weekly-r030").length > 0 && this.ajaxTransferData("E_SHARE", function(t) {
                            var e = '<li class="list-item">最近7天e享成功率<span class="week-data">' + utility.percentageFormat(t.data[0].avgSuccessRatio) + "</span></li>";
                            $(".J-weekly-r030").append(e),
                                $(".week-data-box").show()
                        })
                },
                renderDetailStat: function(t, s) {
                    var i = utility.percentageFormat(s.data[0].avgSuccessRatio);
                    if ($(".J-secmkt-stat").length > 0)
                        if ("B2C_TRANSFER" === t) {
                            var o = '<span class="stat-item">最近7天定期转让成功率：<a href="' + e + '" target="_blank">' + i + "</a></span>";
                            $(".J-secmkt-stat").find(".stat-box").length > 0 ? $(".J-secmkt-stat").find(".stat-box").prepend(o) : $(".J-secmkt-stat").html('<div class="stat-box">' + o + "</div>")
                        } else if ("B2C_PLEDGE" === t) {
                        var o = '<span class="stat-item">最近7天变现成功率：<a href="' + a + '" target="_blank">' + i + "</a></span></div>";
                        $(".J-secmkt-stat").find(".stat-box").length ? $(".J-secmkt-stat").find(".stat-box").append(o) : $(".J-secmkt-stat").html('<div class="stat-box">' + o + "</div>")
                    }
                    if ($(".J-secmkt-stat-p2p").length > 0)
                        if ("P2P_TRANSFER" === t) {
                            var o = '<span class="stat-item">最近7天P2P转让成功率：<a href="' + n + '" target="_blank">' + i + "</a></span>";
                            $(".J-secmkt-stat-p2p").find(".stat-box").length > 0 ? $(".J-secmkt-stat-p2p").find(".stat-box").prepend(o) : $(".J-secmkt-stat-p2p").html('<div class="stat-box">' + o + "</div>")
                        } else if ("E_SHARE" === t) {
                        var o = '<span class="stat-item">最近7天e享计划成功率：<a href="' + r + '" target="_blank">' + i + "</a></span></div>";
                        $(".J-secmkt-stat-p2p").find(".stat-box").length ? $(".J-secmkt-stat-p2p").find(".stat-box").append(o) : $(".J-secmkt-stat-p2p").html('<div class="stat-box">' + o + "</div>")
                    }
                },
                replaceListTips: function(t, s) {
                    var i, o = $("#none");
                    switch (t) {
                        case "B2C_TRANSFER":
                            o = $(".J-secmkt-transfer"),
                                i = '最近7天定期转让成功率：<a href="' + e + '" target="_blank">' + utility.percentageFormat(s.data[0].avgSuccessRatio) + "</a>";
                            break;
                        case "B2C_PLEDGE":
                            o = $(".J-secmkt-realized"),
                                i = '最近7天变现成功率：<a href="' + a + '" target="_blank">' + utility.percentageFormat(s.data[0].avgSuccessRatio) + "</a>";
                            break;
                        case "P2P_TRANSFER":
                            o = $(".J-secmkt-p2p"),
                                i = '最近7天P2P转让成功率：<a href="' + n + '" target="_blank">' + utility.percentageFormat(s.data[0].avgSuccessRatio) + "</a>";
                            break;
                        case "E_SHARE":
                            o = $(".J-secmkt-eshare"),
                                i = '最近7天e享计划成功率：<a href="' + r + '" target="_blank">' + utility.percentageFormat(s.data[0].avgSuccessRatio) + "</a>"
                    }
                    if (o.length > 0) {
                        var l = o.attr("title");
                        !!l && o.attr("title", this.replaceRealizedHtml(l, i, 1)),
                            o.mouseTips({
                                holding: !0,
                                topOffset: 0
                            })
                    }
                },
                ajaxTransferData: function(e, a, n) {
                    $.ajax({
                        url: url(t.secmktStat),
                        data: {
                            actionType: e
                        },
                        type: "get",
                        dataType: "jsonp",
                        jsonp: "jsoncallback",
                        success: function(t) {
                            t && t.isSuccess && t.data.length > 0 && "undefined" != typeof t.data[0].avgSuccessRatio ? "function" == typeof a && a(t) : "function" == typeof n && n()
                        },
                        error: function() {
                            "function" == typeof n && n()
                        }
                    })
                },
                replaceRealizedHtml: function(t, e, a) {
                    a = a || 0;
                    var n = t.split("<br/>");
                    return n.splice(a, 0, e),
                        n.join("<br/>")
                }
            },
            s
    }),
    requirejs(["listLibPath/secmktStat"], function(t) {
        $(function() {
            new t
        })
    }),
    define("listing/main/transferList/transferAllList.js", function() {});
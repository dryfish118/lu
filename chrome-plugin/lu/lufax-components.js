function initBeLink() {
    try {
        var e = window.top.location.hostname;
        if (e.indexOf("ies-be.paic") >= 0)
            for (var a = $(".left-menu-container a"), n = 0; n < a.length; n++) {
                var t = $(a[n]).attr("href");
                t.indexOf("my.lu.com") >= 0 && (t = t.replace("my.lu.com", "ies-be.paic.com.cn/be-cs")),
                    t.indexOf("my.lufax.com") >= 0 && (t = t.replace("my.lufax.com", "ies-be.paic.com.cn/be-cs")),
                    t.indexOf("lumi.lu.com") >= 0 && (t = t.replace("lumi.lu.com", "ies-be.paic.com.cn/be-cs")),
                    $(a[n]).attr("href", t)
            }
    } catch (s) {}
}

function initMenuStatus() {
    var e = $("#left-menu-current").val();
    "accountOverViewSelected" == e ? $(".menu-overview").addClass("current") : "licaiSelected" == e ? $(".menu-licai").addClass("current") : "jijinSelected" == e ? $(".menu-jijin").addClass("current") : "myInsurance" == e ? $(".menu-insurance").addClass("current") : "myBookingList" == e ? $(".menu-bookingList").addClass("current") : "investmentGroupSelected" == e ? $(".menu-investmentGroup").addClass("current") : "investmentsLoan" == e ? $(".menu-investmentLoan").addClass("current") : "investmentsCurrent" == e ? $(".menu-investments-current").addClass("current") : "fundCurrent" == e ? $(".menu-fund-current").addClass("current") : "myAutoInvest" == e ? $(".menu-auto-invest").addClass("current") : "lufaxCoinIsCurrent" == e ? $(".menu-lufax-coin").addClass("current") : "pointsMyPointsSelected" == e || "pointsMyExchangeSelected" == e ? $(".menu-lufax-lumi").addClass("current") : "bankAccountSelected" == e ? $(".menu-bank-account").addClass("current") : "bookingListSelected" == e ? $(".menu-bookingList").addClass("current") : "userinfoSelected" == e ? $(".menu-user-info-safe").addClass("current") : "userMsgSelected" == e ? $(".menu-user-msg").addClass("current") : "membergrade" == e ? $(".menu-user-grade").addClass("current") : "marketRecommonedSelected" != e && "marketCommissionSelected" != e || $(".menu-my-recommend").addClass("current");
    var a = $(".current");
    a.next().hasClass("sep") && a.next().hide()
}

function leftMenu() {
    function e(e) {
        e.siblings(".dt").addClass("hover"),
            e.css({
                display: "block"
            }).stop(!0, !0).animate({
                width: 179
            }, 0)
    }

    function a(e) {
        e.stop(!0, !0).animate({
            width: 0
        }, 0, function() {
            e.css({
                    display: "none"
                }),
                e.siblings(".dt").removeClass("hover")
        })
    }

    function n(e) {
        $(".dd").removeClass("select"),
            e.addClass("select")
    }

    function t(e) {
        $(".left-menu li").removeClass("current"),
            $(".sep").show(),
            e.parents("li").addClass("current");
        var a = e.parents("li");
        a.next().hasClass("sep") && a.next().hide()
    }
    $(".left-menu li").hover(function() {
            var a = $(this).children(".sub-menu");
            a && e(a)
        }, function() {
            var e = $(this).children(".sub-menu");
            e && a(e)
        }),
        $(".left-menu li").click(function() {
            $(this).children(".dt").hasClass("no-sub") && t($(this).children(".dt"))
        }),
        $(document).on("click", ".left-menu li .dd", function() {
            n($(this)),
                t($(this))
        });
    var s = "//user.lu.com/user/user/user-info?jsoncallback=?";
    $.getJSON(s, function(e) {
        $(".left-menu .user-pic").find("img").attr("src", e.avatarUrl),
            "1" == e.nameAuthentication ? $(".left-menu .menu-user-name").html(e.maskName) : $(".left-menu .menu-user-name").html(e.alias),
            $(".left-menu .menu-member-leval").mouseTips(),
            "4" == e.memberLevel ? $(".left-menu .menu-member-leval").addClass("diamond").html("钻石") : "3" == e.memberLevel ? $(".left-menu .menu-member-leval").addClass("platinum").html("铂金") : "2" == e.memberLevel ? $(".left-menu .menu-member-leval").addClass("gold").html("黄金") : $(".left-menu .menu-member-leval").addClass("normal").html("普通");
        var a = $(".left-menu .menu-security-leval");
        if (e.securityLevel ? "1" == e.securityLevel ? a.html("低") : "2" == e.securityLevel ? a.html("中") : "3" == e.securityLevel && a.html("高") : a.html("低"),
            "1" == e.nameAuthentication ? ($(".left-menu .name-verify").attr("href", "//my.lu.com/my/user-info"),
                $(".left-menu .name-verify").mouseTips({
                    flagInfo: "您已完成实名认证。<a href='//my.lu.com/my/user-info' target='_blank'>查看详情</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .name-verify i").css("color", "#FD8238")) : "0" == e.nameAuthentication ? ($(".left-menu .name-verify").attr("href", "//user.lu.com/user/name-authentication"),
                $(".left-menu .name-verify").mouseTips({
                    flagInfo: "您未完成实名认证。<a href='//user.lu.com/user/name-authentication' target='_blank'>点击认证</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .name-verify i.item").css("color", "#DCDCDC"),
                $(".left-menu .name-verify").append('<i class="ld-icon ld-icon-warning warning"></i>')) : "2" == e.nameAuthentication && ($(".left-menu .name-verify").attr("href", "//my.lu.com/my/user-info"),
                $(".left-menu .name-verify").mouseTips({
                    flagInfo: "认证中。<a href='//my.lu.com/my/user-info' target='_blank'>查看详情</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .name-verify i.item").css("color", "#DCDCDC"),
                $(".left-menu .name-verify").append('<i class="ld-icon ld-icon-processing processing"></i>')),
            "1" == e.cardBindStatus ? ($(".left-menu .card-verify").attr("href", "//my.lu.com/my/user-info"),
                $(".left-menu .card-verify").mouseTips({
                    flagInfo: "您已完成绑卡设置。<a href='//cashier.lu.com/cashier/authentication' target='_blank'>点击更换</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .card-verify i").css("color", "#FD8238")) : "-1" == e.cardBindStatus ? ($(".left-menu .card-verify").attr("href", "//user.lu.com/user/bindBankCard"),
                $(".left-menu .card-verify").mouseTips({
                    flagInfo: "您未完成绑卡设置。<a href='//user.lu.com/user/bindBankCard' target='_blank'>点击绑卡</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .card-verify i.item").css("color", "#DCDCDC"),
                $(".left-menu .card-verify").append('<i class="ld-icon ld-icon-warning warning"></i>')) : "0" == e.cardBindStatus && ($(".left-menu .card-verify").attr("href", "//my.lu.com/my/user-info"),
                $(".left-menu .card-verify").mouseTips({
                    flagInfo: "绑卡中。<a href='//my.lu.com/my/user-info' target='_blank'>查看详情</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .card-verify i.item").css("color", "#DCDCDC"),
                $(".left-menu .card-verify").append('<i class="ld-icon ld-icon-processing processing"></i>')),
            "1" == e.tradingPasswordStatus ? ($(".left-menu .tradepassword-verify").attr("href", "//my.lu.com/my/user-info"),
                $(".left-menu .tradepassword-verify").mouseTips({
                    flagInfo: "您已完成交易密码设置。<a href='//user.lu.com/user/modify-trade-password' target='_blank'>点击修改</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .tradepassword-verify i").css("color", "#FD8238")) : "0" == e.tradingPasswordStatus && ($(".left-menu .tradepassword-verify").attr("href", "//user.lu.com/user/set-trade-password"),
                $(".left-menu .tradepassword-verify").mouseTips({
                    flagInfo: "您未完成交易密码设置。<a href='//user.lu.com/user/set-trade-password' target='_blank'>点击设置</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .tradepassword-verify i.item").css("color", "#DCDCDC"),
                $(".left-menu .tradepassword-verify").append('<i class="ld-icon ld-icon-warning warning"></i>')),
            "1" == e.securityQuestionStatus ? ($(".left-menu .security-verify").attr("href", "//my.lu.com/my/user-info"),
                $(".left-menu .security-verify").mouseTips({
                    flagInfo: "您已完成安保问题设置。<a href='//user.lu.com/user/modify-question' target='_blank'>点击修改</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .security-verify i").css("color", "#FD8238")) : "0" == e.securityQuestionStatus && ($(".left-menu .security-verify").attr("href", "//user.lu.com/user/set-question"),
                $(".left-menu .security-verify").mouseTips({
                    flagInfo: "您未完成安保问题设置。<a href='//user.lu.com/user/set-question' target='_blank'>点击设置</a>",
                    holding: !0,
                    tipsWidth: "200px"
                }),
                $(".left-menu .security-verify i.item").css("color", "#DCDCDC"),
                $(".left-menu .security-verify").append('<i class="ld-icon ld-icon-warning warning"></i>')),
            e.riskInfo && "00" == e.riskInfo.resultId) {
            var n = e.riskInfo.data;
            $(".left-menu .jianguo-verify").attr("href", "//my.lu.com/my/user-info"),
                "2" != n.version && n.riskVerifyLeftCount > 0 ? ($(".left-menu .jianguo-verify").mouseTips({
                        flagInfo: "评估后可看坚果财智分 <a href='//user.lu.com/user/risk-survey' target='_blank'>立即评估</a>",
                        holding: !0,
                        tipsWidth: "200px"
                    }),
                    $(".left-menu .jianguo-verify i").css("color", "#DCDCDC")) : "2" != n.version && 0 == n.riskVerifyLeftCount ? ($(".left-menu .jianguo-verify").mouseTips({
                        flagInfo: "今年评估次数已达上限，请" + n.riskVerifyResetDate + "后重新评估",
                        holding: !0,
                        tipsWidth: "200px"
                    }),
                    $(".left-menu .jianguo-verify i.item").css("color", "#DCDCDC")) : ($(".left-menu .jianguo-verify").mouseTips({
                        flagInfo: "您的坚果财智分为" + n.score + " <a href='//user.lu.com/user/risk-survey-result?showItem=2' target='_blank'>查看报告</a>",
                        holding: !0,
                        tipsWidth: "200px"
                    }),
                    $(".left-menu .jianguo-verify i.item").css("color", "#FD8238"))
        }
    });
    var i = "",
        r = "",
        l = $(".menu-grade-name");
    $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            url: "//user.lu.com/user/service/rts-score/query-user-grade",
            success: function(e) {
                return null != e && null != e.grade && null != e.grade ? (i = "lv." + e.grade,
                    r = '<a href="//vip.lu.com/vip/member-grade"><span title="会员等级">' + i + "</span></a>",
                    l.html(r),
                    void l.find("span").mouseTips()) : void 0
            }
        }),
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            url: "//user.lu.com/user/service/task/is-mission-user",
            success: function(e) {
                return null != e && "00" == e.resCode ? (l.show(),
                    $(".menu-user-grade").show(),
                    void $(".menu-my-recommend").removeClass("last-child")) : void 0
            }
        }),
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "jsoncallback",
            url: "//my.lu.com/my/insurance-account-switch",
            success: function(e) {
                null != e && "0000" === e.res_code && "OFF" === e.parameterValue && ($(".insurance-old-link").removeClass("hidden"),
                    $(".insurance-new-link").addClass("hidden"))
            }
        })
}
window.lufax = window.lufax || {
        version: "0.1.0"
    }, ! function() {
        function e() {}
        var a = location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".");
        "lufax.com" !== a && "lu.com" !== a && (a = "lufax.com"),
            e.prototype = {
                args: {},
                init: function() {
                    var e = this,
                        n = "https://user." + a + "/user/service/user/current-user-info-for-homepage?jsoncallback=?";
                    e._setHeader(),
                        e._showUserInfo(n),
                        e._updateReturnPostUrl()
                },
                initCheckKycInvestStatus: function() {
                    this.isLogin ? this._initCheckKycInvestStatus() : this.needCheckKycInvestStatus = !0
                },
                _initCheckKycInvestStatus: function() {
                    var e = $(".kyc-invest-tips"),
                        n = "https://trading." + a + "/trading/service/kyc/get-processing-trx-list?jsoncallback=?";
                    $.getJSON(n, function(a) {
                            var n, t, s, i;
                            if (i = new Date,
                                "00" == a.retCode && a.data && a.data.length > 0)
                                for (n = 0; n < a.data.length; n++)
                                    if (t = a.data[n],
                                        s = new Date(t.createdAt.replace(/-/g, "/")),
                                        "1" == t.status && i.getTime() - s.getTime() <= 432e5)
                                        return void e.show()
                        }),
                        $(".kyc-invest-tips .tips-close").click(function() {
                            e.hide()
                        })
                },
                _updateReturnPostUrl: function() {
                    var e = this,
                        a = $("#header-cookie-login").attr("href"),
                        n = $("#header-nolog-login").attr("href"),
                        t = e._getPostUrl(a),
                        s = e._getPostUrl(n);
                    $("#header-cookie-login").attr("href", t),
                        $("#header-nolog-login").attr("href", s)
                },
                _getPostUrl: function(e) {
                    if (e) {
                        var a = e.indexOf("returnPostURL");
                        if (a > 0) {
                            var n = e.substring(a).split("&");
                            if (n && n.length > 0) {
                                for (var t = 0; t < n.length; t++)
                                    if (n[t].indexOf("returnPostURL") >= 0) {
                                        var s = n[t].split("=");
                                        s && s.length > 1 && "returnPostURL" == s[0] && (s[1] = encodeURIComponent(window.location.href),
                                            n[t] = s.join("="))
                                    }
                                var i = n.join("&"),
                                    r = e.substring(0, a) + i;
                                return r
                            }
                        }
                        return e
                    }
                },
                _showUserInfo: function(e) {
                    var a = this;
                    $.getJSON(e, function(e) {
                        if (e.cookieName = lufax.util.getUnameFromCookie,
                            e.cookieName_tnf = lufax.Cookie.get("_tnf"),
                            a.args = e,
                            e.userName) {
                            $("#top-login").removeClass("hidden"),
                                $(".user-name").html(a._limitText(e.userName, 12));
                            var n = $(".my-account"),
                                t = e.unreadMsgCount;
                            n.addClass("my-msg-status"),
                                n.find("#msg-count").html(t),
                                0 !== t && $(".icon-msg").addClass("new-msg"),
                                n.find(".msg-wrap").removeClass("hidden"),
                                a.isLogin = !0,
                                a.needCheckKycInvestStatus && a._initCheckKycInvestStatus()
                        } else
                            e.cookieName ? ($("#top-cookie").removeClass("hidden"),
                                $(".cookie-name").html(a._limitText(e.cookieName, 12))) : $("#top-noLog").removeClass("hidden");
                        $("#safe-logout").bind("click", function() {
                            return LufaxPopup.simplePopup({
                                imgClass: "safeExit",
                                title: "您即将安全退出",
                                content: "",
                                button: '<a class="btns btn-large btn-info confirmBtn" href="javascript:void(0);"><span>安全退出</span></a><a class="btns btn-large btn-cancel close" href="javascript:void(0);"><span>取消</span></a>',
                                onConfirm: function() {
                                    tool.deleteCookie("_tn"),
                                        tool.deleteCookie("_tm"),
                                        window.location = $("#safe-logout").attr("href")
                                }
                            }), !1
                        })
                    })
                },
                _limitText: function(e, a) {
                    var n = e;
                    return e.length > a && (n = e.slice(0, a) + "..."),
                        n
                },
                _setHeader: function() {
                    var e = this,
                        a = $("#current-page").val();
                    switch (a) {
                        case "recharge":
                            e._handleHeader();
                            break;
                        case "withdraw":
                            e._handleHeader();
                            break;
                        case "investment-detail":
                            e._handleHeader();
                            break;
                        case "my-account":
                            e._handleHeader();
                            break;
                        case "investment":
                            e._handleHeader();
                            break;
                        case "transfer-request":
                            e._handleHeader();
                            break;
                        case "sme":
                            e._handleHeader();
                            break;
                        case "lumi-simple":
                            e._handleLumiHeader(!0);
                            break;
                        case "lumi":
                            e._handleLumiHeader(!1);
                            break;
                        case "vip-home-simple":
                        case "vip-consulting-simple":
                        case "vip-privilege-simple":
                            e._handleVipHeader(!0);
                            break;
                        case "vip-home":
                        case "vip-consulting":
                        case "vip-privilege":
                            e._handleVipHeader(!1)
                    }
                },
                _handleVipHeader: function(e) {
                    var a = '<img src="//static.lufaxcdn.com/lufax-components/img/vip-slogan.5bc2493a.png"  alt="">',
                        n = location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".");
                    if (e) {
                        if ($(".header-simple").length > 0) {
                            var a = '<a href="//vip.' + n + '/vip">' + a + "</a>";
                            $(".logo").append(a),
                                $(".logo").show()
                        }
                    } else
                        $(".lufax-header").length > 0 && 0 == $(".header-simple").length && ($(".slogan").html(a),
                            $(".slogan").show(),
                            $(".link-logo").remove())
                },
                _handleLumiHeader: function(e) {
                    var a = '<img src="//static.lufaxcdn.com/lufax-components/img/slogan.5940828f.png"  alt="">',
                        n = location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
                        a = '<a href="//lumi.' + n + '/lumi/index">' + a + "</a>",
                        t = $("#lumi-link-logo-tpl").html();
                    e ? $(".header-simple").length > 0 && ($(".logo").append(a),
                        $(".logo").show(),
                        $(".head-body").append($(t))) : $(".lufax-header").length > 0 && 0 == $(".header-simple").length && ($(".slogan").html(a),
                        $(".slogan").show(),
                        $(t).insertBefore($("#header-body-my-account-panel")))
                },
                _handleHomeHeader: function() {
                    var e = '<li><a href="//www.' + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + '/en/" target="_blank"  data-sk="头部-English">English</a></li>';
                    $(e).insertAfter($("#header-help-center").parent())
                },
                _handleHeader: function() {
                    $(".head-wrap").addClass("head-wrap-inside"),
                        $(".link-logo").addClass("hidden")
                }
            },
            lufax.header = new e
    }(this),
    $(function() {
        lufax.header.init()
    }), ! function() {
        function e() {}
        e.prototype = {
                args: {},
                init: function() {
                    var e = location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".");
                    "lufax.com" !== e && "lu.com" !== e && (e = "lu.com");
                    var a = this,
                        n = "https://list." + e + "/list/service/productListing/all-counts?jsoncallback=?",
                        t = "https://e.lufunds.com/jijin/count?jsoncallback=?";
                    a._locationNav(),
                        a._showNavData(n, e),
                        a._showNavFund(t)
                },
                _showNavFund: function(e) {
                    _dataMap = {
                            fundProductCounts: ".nav-fundChannel-all-page"
                        },
                        $.getJSON(e, function(e) {
                            e && e.total && ($(_dataMap.fundProductCounts).html(e.total + e.suffix),
                                $(_dataMap.fundProductCounts).parent("span").show())
                        })
                },
                _showNavData: function(e, a) {
                    var n = this,
                        t = {
                            totalCounts: ".nav-all-all-page",
                            huoqiCount: ".nav-huoqi-all-page",
                            dingqiCount: ".nav-dingqi-all-page",
                            p2pCount: ".nav-p2p-all-page",
                            gaoduanCounts: ".nav-gaoduanlicai-all-page",
                            xintuoZhiYingCounts: ".nav-trust-all-page",
                            peCounts: ".nav-transfer-pe-all-page",
                            insuranceProductTotalCounts: ".nav-insurances-all-page",
                            bzxProductCounts: ".nav-baoxian-all-page",
                            insuranceProductCounts: ".nav-insurance-all-page",
                            xinkeCount: ".nav-xinke-all-page",
                            memberZoneCount: ".nav-transfer-all-page",
                            dingqiTransferCount: ".nav-transfer-dingqi-all-page",
                            p2pTransferCount: ".nav-transfer-p2p-all-page",
                            brokerCounts: ".nav-transfer-securities-all-page",
                            r030Count: ".nav-transfer-r030-all-page",
                            haiwaitouziCounts: ".nav-haiwai-all-page",
                            bianxiantongProductCounts: ".nav-bianxiantong-all-page",
                            r02Count: ".nav-transfer-hx-all-page"
                        },
                        s = ["newUser_piaojuCounts", "newUser_anyiCounts", "newUser_xinbaoCounts", "newUser_bianxiantongCounts", "newUser_shuloueCounts", "newUser_zhuanxiangCounts", "newUser_yuegujiaoCounts", "newUser_insuranceCounts", "newUser_luWalletCounts", "newUser_cgiCounts"];
                    $.getJSON(e, function(e) {
                        if (e && "false" !== e.result) {
                            n.args = e;
                            var i = !0,
                                r = !0;
                            for (var l in t) {
                                var o = e[l],
                                    u = e[l],
                                    c = $(t[l]);
                                if (c.length > 0)
                                    for (var d = c.length, m = 0; d > m; m++) {
                                        var f = $(c[m]);
                                        f.parents().hasClass("lufax-navigator") && ("countsOfInvestChannel" != l || o && 0 != o ? "anyiInvestmentPlanCounts" == l && o > 0 && !i ? ($("#nav-anyi").parent("span").parent("a").attr("href", "//list." + a + "/list/anyi-plan"),
                                            $("#nav-anyi").parent("span").parent("a").attr("data-sk", "Bar_reserve_an_e")) : "dianjinProductCounts" != l || o && 0 != o ? "dianjinInvestmentPlanCounts" == l && o > 0 && !r ? ($("#nav-dianjin-area").parent("span").parent("a").attr("href", "//list." + a + "/list/dianjin-plan"),
                                            $("#nav-dianjin-area").parent("span").parent("a").attr("data-sk", "Bar_reserve_gold_plan")) : 0 != o && void 0 != o ? (u = o > 99 ? "99+" : o,
                                            f.html(u),
                                            f.parent("span").show()) : 0 == o && $.inArray(l, s) > -1 ? f.parent("span").parent("a").parent("li").hide() : "bianxiantongProductCounts" == l && 0 >= o && $("#nav-transfer").attr("href", "//list." + a + "/list/transfer-dingqi") : r = !1 : i = !1)
                                    }
                            }
                        }
                        window._set_other_counts && window._set_other_counts(e)
                    })
                },
                _locationNav: function() {
                    var e = $("#current-page").val(),
                        a = $(".lufax-navigator");
                    switch (e) {
                        case "homepage":
                            $(".nav-home").addClass("selected");
                            break;
                        case "huoqi":
                            $(".nav-huoqi").addClass("selected");
                            break;
                        case "dingqi":
                            $(".nav-dingqi").addClass("selected");
                            break;
                        case "p2p":
                            $(".nav-p2p").addClass("selected");
                            break;
                        case "fund":
                            $(".nav-fund").addClass("selected");
                            break;
                        case "gaoduanlicai":
                            $(".nav-gaoduanlicai").addClass("selected");
                            break;
                        case "simujijin":
                            $(".nav-gaoduanlicai").addClass("selected");
                            break;
                        case "xintuozhiying":
                            $(".nav-gaoduanlicai").addClass("selected");
                            break;
                        case "quanshanglicai":
                            $(".nav-gaoduanlicai").addClass("selected");
                            break;
                        case "haiwai":
                            $(".nav-gaoduanlicai").addClass("selected");
                            break;
                        case "baoxian":
                            $(".nav-insurances").addClass("selected");
                            break;
                        case "xinshou":
                            $(".nav-xinshou").addClass("selected");
                            break;
                        case "transfer":
                            $(".nav-transfer").addClass("selected");
                            break;
                        case "p2pTransfer":
                            $(".nav-transfer").addClass("selected");
                            break;
                        case "dingqiTransfer":
                            $(".nav-transfer").addClass("selected");
                            break;
                        case "r030cur":
                            $(".nav-transfer").addClass("selected");
                            break;
                        case "bianxiantong":
                            $(".nav-transfer").addClass("selected");
                            break;
                        case "hxTransfer":
                            $(".nav-transfer").addClass("selected");
                            break;
                        case "login":
                            a.hide();
                            break;
                        case "recharge":
                            a.hide();
                            break;
                        case "withdraw":
                            a.hide();
                            break;
                        case "investment-detail":
                            a.hide();
                            break;
                        case "my-account":
                            break;
                        case "investment":
                            a.hide();
                            break;
                        case "transfer-request":
                            a.hide();
                            break;
                        case "sme":
                            a.hide();
                            break;
                        case "vip-home":
                            $(".nav-vip-home").addClass("selected");
                            break;
                        case "vip-privilege":
                            $(".nav-vip-privilege").addClass("selected")
                    }
                }
            },
            lufax.navigator = new e
    }(this),
    $(function() {
        lufax.navigator.init()
    }),
    $(function() {
        function e(e, a) {
            var n;
            for (n = 0; n < a.length; n++)
                if (e == a[n])
                    return !0;
            return !1
        }
        var a = $(".lufax-sub-nav"),
            n = $(".has-sub-nav"),
            t = ["gaoduanlicai", "transfer"],
            s = {
                simujijin: "gaoduanlicai",
                xintuozhiying: "gaoduanlicai",
                quanshanglicai: "gaoduanlicai",
                haiwai: "gaoduanlicai",
                p2pTransfer: "transfer",
                dingqiTransfer: "transfer",
                r030cur: "transfer",
                bianxiantong: "transfer",
                hxTransfer: "transfer"
            },
            i = $("#current-page").val(),
            r = $(".nav-" + i);
        r.addClass("nav-current");
        var l = s[i],
            o = $(".nav-" + l);
        l && e(l, t) && ($("." + o.attr("sub-menu")).show(),
                $("#lufax-navigator").addClass("fix-height")),
            n.hover(function() {
                var e = $(this).attr("sub-menu");
                e && (a.hide(),
                    $("." + e).show(),
                    $(this).addClass("nav-current"))
            }),
            n.mouseleave(function() {
                var n = $(this).attr("sub-menu");
                n && (a.hide(),
                    $(this).removeClass("nav-current"),
                    l && e(l, t) && $("." + o.attr("sub-menu")).show())
            }),
            a.hover(function() {
                a.hide(),
                    $(this).show();
                var e = $(".nav-" + $(this).attr("parent-menu"));
                e.addClass("nav-current")
            }),
            a.mouseleave(function() {
                a.hide(),
                    n.removeClass("nav-current"),
                    l && e(l, t) && $("." + o.attr("sub-menu")).show()
            })
    }),
    $(function() {
        var e = location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".");
        "lufax.com" !== e && "lu.com" !== e && (e = "lufax.com");
        var a = "0" !== lufax.Cookie.get("_is_new_user"),
            n = "1" !== lufax.Cookie.get("_close_new_user"),
            t = "https://user." + e + "/user/service/user/current-user-info-for-homepage?jsoncallback=?";
        $.getJSON(t, function(e) {
                null != e.isNewUser ? 1 == e.isNewUser ? $(".wrap_levitate").show() : $(".wrap_levitate").hide() : a && n && $(".wrap_levitate").show()
            }),
            $(".new-user-tips").click(function() {
                $(".wrap_levitate").hide(),
                    lufax.Cookie.set("_close_new_user", "1")
            })
    }),
    $(document).ready(function() {
        $(".ljf_nav").hover(function() {
            $("ul", this).show(),
                $(this).addClass("hov")
        }, function() {
            $("ul", this).hide(),
                $(this).removeClass("hov")
        })
    }),
    $(function() {
        $(".select-box").click(function() {
            $(this).find(".select-box-list").fadeIn(),
                $(this).mouseleave(function() {
                    $(this).find(".select-box-list").fadeOut()
                })
        })
    }),
    $(function() {
        leftMenu(),
            initMenuStatus(),
            initBeLink()
    });
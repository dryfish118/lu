function ActivationLufaxCoinAsync(t) {
    lufax.com.ActivationLufaxCoin.map()[t.result](t)
}

function Validation() {}

function ValidationExecutor(t) {
    this.messageList = $.extend({}, MESSAGES, t),
        this.validationList = [],
        this.errors = [],
        this.config = {
            targetElement: null
        }
}
window.lufax = window.lufax || {
        version: "0.1.0"
    },
    lufax.util = lufax.util || {},
    lufax.com = lufax.com || {},
    lufax.ui = lufax.ui || {},
    function() {
        var t = lufax.JST = lufax.JST || {};
        t["calendar-body"] = function(t) {
                var e = "",
                    n = t.days;
                if (n)
                    for (var i, a = -1, o = n.length - 1; o > a;)
                        i = n[a += 1],
                        e += " ",
                        a % 7 == 0 && (e += " <tr> "),
                        e += ' <td class="ld-calendar-day' + (i.inCurrentMonth ? " ld-calendar-day_" + i.inCurrentMonth : "") + (i.isDisabled ? " ld-calendar-day_disabled" : "") + (i.isToday ? " ld-calendar-day_today" : "") + '" data-date="' + i.date.getTime() + '"> <span class="ld-calendar-day-number"> ',
                        e += i.isToday ? " 今天 " : " " + i.dayNumber + " ",
                        e += " </span> ",
                        i.inCurrentMonth || (e += " " + i.cellHTML + " "),
                        e += " </td> ",
                        a % 7 == 6 && (e += " </tr> ");
                return e
            },
            t.calendar = function(t) {
                var e = '<div class="ld-calendar"> <table class=\'ld-calendar-table\'> <thead class="ld-calendar-header"> <tr class="ld-calendar-week"> ',
                    n = t.daysOfWeek;
                if (n)
                    for (var i, a = -1, o = n.length - 1; o > a;)
                        i = n[a += 1],
                        e += ' <td class="ld-calendar-day-of-week">' + i + "</td> ";
                return e += ' </tr> </thead> <tbody class="ld-calendar-body"> </tbody> </table></div>'
            },
            t.miniPaging = function(t) {
                var e = '<div class="ld-mini-paging"> <a href="#" class="ld-mini-paging-last-page"> <i class="ld-icon ld-icon-chevron-left"></i> </a> <span class="ld-mini-paging-info"> <text class="ld-mini-paging-current">' + t.currentPage + '</text> / <text class="ld-mini-paging-total">' + t.pageCount + '</text> </span> <a href="#" class="ld-mini-paging-next-page"> <i class="ld-icon ld-icon-chevron-right"></i> </a></div>';
                return e
            },
            t.paging = function(t) {
                var e = '<ul class="ld-paging"> ';
                t.showLastPage && (e += ' <li class="ld-paging-item ld-paging-item-last',
                        t.lastPageDisabled && (e += " ld-paging-item-disabled"),
                        e += '"> <a href="#" class="ld-paging-last-page"><i class="ld-icon ld-icon-chevron-left"></i></a> </li> '),
                    e += " ";
                var n = t.pageItems;
                if (n)
                    for (var i, a = -1, o = n.length - 1; o > a;)
                        i = n[a += 1],
                        e += " ",
                        "page" == i.type ? (e += ' <li class="ld-paging-item',
                            i.current && (e += " ld-paging-item-current"),
                            e += '"><a href="#" class="ld-paging-page" data-page="' + i.page + '">' + i.text + "</a></li> ") : e += ' <li class="ld-paging-item ld-paging-more">•••</li> ',
                        e += " ";
                return e += " ",
                    t.showNextPage && (e += ' <li class="ld-paging-item ld-paging-item-next',
                        t.nextPageDisabled && (e += " ld-paging-item-disabled"),
                        e += '"> <a href="#" class="ld-paging-next-page"><i class="ld-icon ld-icon-chevron-right"></i></a> </li> '),
                    e += "</ul>"
            },
            t["kyc-recommend"] = function(t) {
                var e = '<div class="kyc-recommend-component"> <div class="kyc-recommend-tip">您也可以选择与您风险承受能力匹配的产品</div> <ul class="kyc-recommend-list"> ',
                    n = t.productList;
                if (n)
                    for (var i, a = -1, o = n.length - 1; o > a;)
                        i = n[a += 1],
                        e += ' <li class="kyc-recommend-item clearfix',
                        a == t.productList.length - 1 && (e += " last"),
                        e += '"> <h3 class="product-name"> <a href="' + i.rcmdProductDetailUrl + '" ',
                        0 == a && (e += ' data-sk="KYC_' + t.kycType + '_rcmd_1" '),
                        e += " ",
                        1 == a && (e += ' data-sk="KYC_' + t.kycType + '_rcmd_2" '),
                        e += ' target="_blank" title="' + i.rcmdProductName + '">' + i.rcmdProductName + '</a> </h3> <div class="product-rate"> <div class="column-label">' + i.rcmdInterestDesc + '</div> <div class="prodcut-rate-number">' + i.rcmdInterestDisplay + '</div> </div> <div class="product-duration"> <div class="column-label">' + i.rcmdInvestPeriodDesc + '</div> <div class="prodcut-duration-number">' + (i.rcmdInvestPeriod + i.rcmdInvestPeriodUnit) + '</div> </div> <div class="product-amount"> <div class="column-label">' + i.rcmdInvestAmountDesc + '</div> <div class="prodcut-amount-number">' + i.rcmdInvestAmount + "</div> </div> </li> ";
                return e += " </ul></div>"
            },
            t.steps = function(t) {
                var e = '<ul class="ld-steps clearfix"> ',
                    n = t.stepItems;
                if (n)
                    for (var i, a = -1, o = n.length - 1; o > a;)
                        i = n[a += 1],
                        e += ' <li class="ld-step ',
                        a < t.currentStep - 1 && (e += "ld-step-finished"),
                        e += " ",
                        a == t.currentStep - 1 && (e += "ld-step-current"),
                        e += " ",
                        0 == a && (e += "ld-step-leading"),
                        e += " ",
                        a == t.stepItems.length - 1 && (e += "ld-step-tail"),
                        e += ' "> <h3 class="ld-step-title">' + i.title + '</h3> <div class="ld-step-graph"> <span class="ld-step-border"></span> <span class="ld-step-dot"> ',
                        a >= t.currentStep - 1 && (e += "" + (a + 1)),
                        e += " </span> </div> </li> ";
                return e += "</ul>"
            },
            t.toast = function(t) {
                var e = '<div class="ld-toast"> <p class="ld-toast-content"> <span class="ld-toast-content-inner">' + t.content + "</span> </p></div>";
                return e
            }
    }(),
    lufax.constant = lufax.constant || {},
    lufax.constant.lufaxCoinTxt = "投资券",
    lufax.constant.lufaxPointTxt = "积分", ! function() {
        function t() {}
        t.prototype = {
                getCookie: function(t) {
                    if (document.cookie.length > 0) {
                        var e = document.cookie.indexOf(t + "=");
                        if (-1 != e) {
                            e = e + t.length + 1;
                            var n = document.cookie.indexOf(";", e);
                            return -1 == n && (n = document.cookie.length),
                                unescape(document.cookie.substring(e, n))
                        }
                    }
                    return ""
                },
                getName: function() {
                    var t = this,
                        e = t.getCookie("_tn");
                    if (e) {
                        var n = t.getCookie("_tnf");
                        return "1" == n ? (e = t.base64decode(e),
                            t.fix_des_result(t.des("unslufax", t.hexToStringForDES(e), 0, 0))) : e
                    }
                    return ""
                },
                getMobile: function() {
                    var t = this,
                        e = t.getCookie("_tm");
                    if (e) {
                        var n = t.getCookie("_tmf");
                        return "2" == n ? (e = t.base64decode(e),
                            t.fix_des_result(t.des("unslufax", t.hexToStringForDES(e), 0, 0))) : e
                    }
                    return ""
                },
                base64DecodeChars: new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1),
                base64decode: function(t) {
                    var e, n, i, a, o, s, r, l = this;
                    for (s = t.length,
                        o = 0,
                        r = ""; s > o;) {
                        do
                            e = l.base64DecodeChars[255 & t.charCodeAt(o++)];
                        while (s > o && -1 == e);
                        if (-1 == e)
                            break;
                        do
                            n = l.base64DecodeChars[255 & t.charCodeAt(o++)];
                        while (s > o && -1 == n);
                        if (-1 == n)
                            break;
                        r += String.fromCharCode(e << 2 | (48 & n) >> 4);
                        do {
                            if (i = 255 & t.charCodeAt(o++),
                                61 == i)
                                return r;
                            i = l.base64DecodeChars[i]
                        } while (s > o && -1 == i);
                        if (-1 == i)
                            break;
                        r += String.fromCharCode((15 & n) << 4 | (60 & i) >> 2);
                        do {
                            if (a = 255 & t.charCodeAt(o++),
                                61 == a)
                                return r;
                            a = l.base64DecodeChars[a]
                        } while (s > o && -1 == a);
                        if (-1 == a)
                            break;
                        r += String.fromCharCode((3 & i) << 6 | a)
                    }
                    return r
                },
                des: function(t, e, n, i, a, o) {
                    var s, r, l, c, d, u, p, h, f, m, g, v, b, x, y = this,
                        w = new Array(16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756),
                        C = new Array(-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344),
                        $ = new Array(520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584),
                        _ = new Array(8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928),
                        T = new Array(256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080),
                        P = new Array(536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312),
                        S = new Array(2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154),
                        k = new Array(268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696),
                        D = y.des_createKeys(t),
                        I = 0,
                        M = e.length,
                        N = 0,
                        A = 32 == D.length ? 3 : 9;
                    h = 3 == A ? n ? new Array(0, 32, 2) : new Array(30, -2, -2) : n ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2),
                        2 == o ? e += "        " : 1 == o ? (l = 8 - M % 8,
                            e += String.fromCharCode(l, l, l, l, l, l, l, l),
                            8 == l && (M += 8)) : o || (e += "\x00\x00\x00\x00\x00\x00\x00\x00");
                    var E = "",
                        j = "";
                    for (1 == i && (f = a.charCodeAt(I++) << 24 | a.charCodeAt(I++) << 16 | a.charCodeAt(I++) << 8 | a.charCodeAt(I++),
                            g = a.charCodeAt(I++) << 24 | a.charCodeAt(I++) << 16 | a.charCodeAt(I++) << 8 | a.charCodeAt(I++),
                            I = 0); M > I;) {
                        for (u = e.charCodeAt(I++) << 24 | e.charCodeAt(I++) << 16 | e.charCodeAt(I++) << 8 | e.charCodeAt(I++),
                            p = e.charCodeAt(I++) << 24 | e.charCodeAt(I++) << 16 | e.charCodeAt(I++) << 8 | e.charCodeAt(I++),
                            1 == i && (n ? (u ^= f,
                                p ^= g) : (m = f,
                                v = g,
                                f = u,
                                g = p)),
                            l = 252645135 & (u >>> 4 ^ p),
                            p ^= l,
                            u ^= l << 4,
                            l = 65535 & (u >>> 16 ^ p),
                            p ^= l,
                            u ^= l << 16,
                            l = 858993459 & (p >>> 2 ^ u),
                            u ^= l,
                            p ^= l << 2,
                            l = 16711935 & (p >>> 8 ^ u),
                            u ^= l,
                            p ^= l << 8,
                            l = 1431655765 & (u >>> 1 ^ p),
                            p ^= l,
                            u ^= l << 1,
                            u = u << 1 | u >>> 31,
                            p = p << 1 | p >>> 31,
                            r = 0; A > r; r += 3) {
                            for (b = h[r + 1],
                                x = h[r + 2],
                                s = h[r]; s != b; s += x)
                                c = p ^ D[s],
                                d = (p >>> 4 | p << 28) ^ D[s + 1],
                                l = u,
                                u = p,
                                p = l ^ (C[c >>> 24 & 63] | _[c >>> 16 & 63] | P[c >>> 8 & 63] | k[63 & c] | w[d >>> 24 & 63] | $[d >>> 16 & 63] | T[d >>> 8 & 63] | S[63 & d]);
                            l = u,
                                u = p,
                                p = l
                        }
                        u = u >>> 1 | u << 31,
                            p = p >>> 1 | p << 31,
                            l = 1431655765 & (u >>> 1 ^ p),
                            p ^= l,
                            u ^= l << 1,
                            l = 16711935 & (p >>> 8 ^ u),
                            u ^= l,
                            p ^= l << 8,
                            l = 858993459 & (p >>> 2 ^ u),
                            u ^= l,
                            p ^= l << 2,
                            l = 65535 & (u >>> 16 ^ p),
                            p ^= l,
                            u ^= l << 16,
                            l = 252645135 & (u >>> 4 ^ p),
                            p ^= l,
                            u ^= l << 4,
                            1 == i && (n ? (f = u,
                                g = p) : (u ^= m,
                                p ^= v)),
                            j += String.fromCharCode(u >>> 24, u >>> 16 & 255, u >>> 8 & 255, 255 & u, p >>> 24, p >>> 16 & 255, p >>> 8 & 255, 255 & p),
                            N += 8,
                            512 == N && (E += j,
                                j = "",
                                N = 0)
                    }
                    return E + j
                },
                des_createKeys: function(t) {
                    for (var e, n, i, a = new Array(0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964), o = new Array(0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697), s = new Array(0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272), r = new Array(0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144), l = new Array(0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256), c = new Array(0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488), d = new Array(0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746), u = new Array(0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568), p = new Array(0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578), h = new Array(0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488), f = new Array(0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800), m = new Array(0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744), g = new Array(0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128), v = new Array(0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261), b = t.length > 8 ? 3 : 1, x = new Array(32 * b), y = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0), w = 0, C = 0, $ = 0; b > $; $++) {
                        left = t.charCodeAt(w++) << 24 | t.charCodeAt(w++) << 16 | t.charCodeAt(w++) << 8 | t.charCodeAt(w++),
                            right = t.charCodeAt(w++) << 24 | t.charCodeAt(w++) << 16 | t.charCodeAt(w++) << 8 | t.charCodeAt(w++),
                            i = 252645135 & (left >>> 4 ^ right),
                            right ^= i,
                            left ^= i << 4,
                            i = 65535 & (right >>> -16 ^ left),
                            left ^= i,
                            right ^= i << -16,
                            i = 858993459 & (left >>> 2 ^ right),
                            right ^= i,
                            left ^= i << 2,
                            i = 65535 & (right >>> -16 ^ left),
                            left ^= i,
                            right ^= i << -16,
                            i = 1431655765 & (left >>> 1 ^ right),
                            right ^= i,
                            left ^= i << 1,
                            i = 16711935 & (right >>> 8 ^ left),
                            left ^= i,
                            right ^= i << 8,
                            i = 1431655765 & (left >>> 1 ^ right),
                            right ^= i,
                            left ^= i << 1,
                            i = left << 8 | right >>> 20 & 240,
                            left = right << 24 | right << 8 & 16711680 | right >>> 8 & 65280 | right >>> 24 & 240,
                            right = i;
                        for (var _ = 0; _ < y.length; _++)
                            y[_] ? (left = left << 2 | left >>> 26,
                                right = right << 2 | right >>> 26) : (left = left << 1 | left >>> 27,
                                right = right << 1 | right >>> 27),
                            left &= -15,
                            right &= -15,
                            e = a[left >>> 28] | o[left >>> 24 & 15] | s[left >>> 20 & 15] | r[left >>> 16 & 15] | l[left >>> 12 & 15] | c[left >>> 8 & 15] | d[left >>> 4 & 15],
                            n = u[right >>> 28] | p[right >>> 24 & 15] | h[right >>> 20 & 15] | f[right >>> 16 & 15] | m[right >>> 12 & 15] | g[right >>> 8 & 15] | v[right >>> 4 & 15],
                            i = 65535 & (n >>> 16 ^ e),
                            x[C++] = e ^ i,
                            x[C++] = n ^ i << 16
                    }
                    return x
                },
                hexToStringForDES: function(t) {
                    for (var e = "", n = "0x" == t.substr(0, 2) ? 2 : 0; n < t.length; n += 2)
                        e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
                    return e
                },
                fix_des_result: function(t) {
                    var e;
                    for (e = t.length - 1; e >= 0 && !(t.charCodeAt(e) > 16 && 32 != t.charCodeAt(e)); e--)
                    ;
                    return t.substring(0, e + 1)
                }
            },
            lufax.util.getUnameFromCookie = (new t).getName(),
            lufax.util.getMobileFromCookie = (new t).getMobile()
    }(this),
    function() {
        function t() {}
        t.prototype = {
                init: function(t, e) {
                    var n = this,
                        i = "",
                        a = "";
                    $(t).keyup(function() {
                        i = $(this).val().replace(/\s/g, ""),
                            a = n.format(i, e),
                            $(this).val(a)
                    })
                },
                format: function(t, e) {
                    var n = "";
                    switch (e) {
                        case "01":
                            n = t.substr(0, 3) + " " + t.substr(3, 4) + " " + t.substr(7);
                            break;
                        case "02":
                            n = t.substr(0, 6) + " " + t.substr(6, 8) + " " + t.substr(14);
                            break;
                        case "03":
                            n = t.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ")
                    }
                    return $.trim(n)
                }
            },
            lufax.util.NumSeparate = t,
            lufax.util.NumSeparate = new t,
            lufax.NumSeparate = lufax.util.NumSeparate
    }(this),
    function() {
        var t = {
            get: function(t) {
                if (document.cookie.length > 0) {
                    var e = document.cookie.indexOf(t + "=");
                    if (-1 !== e) {
                        e = e + t.length + 1;
                        var n = document.cookie.indexOf(";", e);
                        return -1 === n && (n = document.cookie.length),
                            unescape(document.cookie.substring(e, n))
                    }
                }
                return ""
            },
            set: function(t, e, n) {
                var i = location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".");
                if (n) {
                    var a = new Date(n);
                    document.cookie = t + "=" + escape(e) + ";expires=" + a.toGMTString() + ";domain=." + i + ";path=/"
                } else
                    document.cookie = t + "=" + escape(e) + ";domain=." + i + ";path=/"
            },
            del: function(t) {
                var e = location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
                    n = new Date;
                n.setTime(n.getTime() - 864e5),
                    document.cookie = t + "=;expires=" + n.toGMTString() + ";domain=." + e + ";path=/"
            }
        };
        lufax.util.Cookie = t,
            lufax.Cookie = lufax.util.Cookie
    }(this),
    lufax.store = lufax.util.store = window.store,
    function() {
        var t = {
            percentageFormat: function(t) {
                if (0 === t || "0" === t)
                    return "0.00%";
                if (!t || isNaN(t))
                    return "";
                t = parseFloat(t),
                    t = Math.round(1e4 * t) / 100 + "",
                    t += -1 == t.indexOf(".") ? ".00" : "00";
                var e = t.split("."),
                    n = e[1].substring(0, 2);
                return e[0] + "." + n + "%"
            },
            withoutPercentageFormat: function(t) {
                if (0 === t || "0" === t)
                    return "0.00%";
                if (!t || isNaN(t))
                    return "";
                t = parseFloat(t),
                    t = Math.round(1e4 * t) / 100 + "",
                    t += -1 == t.indexOf(".") ? ".00" : "00";
                var e = t.split("."),
                    n = e[1].substring(0, 2);
                return e[0] + "." + n
            },
            numberFormat: function(t) {
                var e = "￥",
                    n = this.numberFormatWithoutCurrency(t);
                return "" === n ? n : e + n
            },
            numberFormatWithoutCurrency: function(t) {
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
                for (var a = /(\d+)(\d{3})/; a.test(n);)
                    n = n.replace(a, "$1,$2");
                return n + i
            },
            intFormat: function(t) {
                var e = "￥",
                    n = this.intFormatWithoutCurrency(t);
                return "" === n ? n : e + n
            },
            intFormatWithoutCurrency: function(t) {
                if (0 === t || "0" === t)
                    return "0";
                if (!t || isNaN(t))
                    return "";
                t += "";
                for (var e = t, n = /(\d+)(\d{3})/; n.test(e);)
                    e = e.replace(n, "$1,$2");
                return e
            },
            round: function(t) {
                return Math.round(100 * t) / 100
            },
            convertCurrency: function(t, e) {
                var n, i, a, o, s, r, l, c, d, u, p, h, f, m, g = 99999999999.99,
                    v = "零",
                    b = "壹",
                    x = "贰",
                    y = "叁",
                    w = "肆",
                    C = "伍",
                    $ = "陆",
                    _ = "柒",
                    T = "捌",
                    P = "玖",
                    S = "拾",
                    k = "佰",
                    D = "仟",
                    I = "万",
                    M = "亿",
                    N = "元",
                    A = "角",
                    E = "分",
                    j = "整";
                if (t += "",
                    "" === t)
                    return e ? "" : "Empty input!";
                if (null != t.match(/[^,.\d]/))
                    return e ? "" : "Invalid characters in the input string!";
                if (null == t.match(/^((\d{1,3}(,\d{3})*(.\d+)?)|(\d+(.\d+)?))$/))
                    return e ? "" : "Illegal format of digit number!";
                if (t = t.replace(/,/g, ""),
                    t = t.replace(/^0+/, ""),
                    Number(t) > g)
                    return e ? "" : "Too large a number to convert!";
                if (t = parseFloat(t),
                    t += "",
                    o = t.split("."),
                    o.length > 1 ? (n = o[0],
                        i = o[1],
                        i = i.substr(0, 2)) : (n = o[0],
                        i = ""),
                    s = new Array(v, b, x, y, w, C, $, _, T, P),
                    r = new Array("", S, k, D),
                    l = new Array("", I, M),
                    c = new Array(A, E),
                    a = "",
                    Number(n) > 0) {
                    for (d = 0,
                        u = 0; u < n.length; u++)
                        p = n.length - u - 1,
                        h = n.substr(u, 1),
                        f = p / 4,
                        m = p % 4,
                        "0" == h ? d++ : (d > 0 && (a += s[0]),
                            d = 0,
                            a += s[Number(h)] + r[m]),
                        0 === m && 4 > d && (a += l[f]);
                    a += N
                }
                if ("" !== i)
                    for (u = 0; u < i.length; u++)
                        h = i.substr(u, 1),
                        "0" != h && (a += s[Number(h)] + c[u]);
                return "" === a && (a = v + N),
                    "" === i && (a += j),
                    a
            },
            secondsOfTrading: function(t) {
                t = Number(t);
                var e, n, i, a;
                return 60 >= t ? e = t + "秒" : t > 60 && 3600 > t ? (a = t % 60,
                        n = Math.floor(t / 60) % 60,
                        e = n + "分" + a + "秒") : t >= 3600 && 86400 > t ? (a = t % 60,
                        n = Math.floor(t / 60) % 60,
                        i = Math.floor(t / 60 / 60) % 24,
                        e = i + "小时" + n + "分" + a + "秒") : e = "",
                    e
            },
            numberFormatTenThousand: function(t) {
                if (0 === t || "0" === t)
                    return "0万";
                if (!t || isNaN(t))
                    return "";
                t /= 1e4,
                    t += "";
                var e = t.split(".")[0],
                    n = t.split(".")[1];
                return n ? (n = n.substring(0, 2),
                    e + "." + n + "万") : e + "万"
            },
            percentageFormatWithoutZero: function(t) {
                if (0 === t || "0" === t)
                    return "0%";
                if (t > 1 || t > "1")
                    return "100%";
                if (!t || isNaN(t))
                    return "";
                if (t = parseFloat(t),
                    t = 1e4 * t / 100 + "", -1 === t.indexOf("."))
                    return t + "%";
                var e = t.split("."),
                    n = e[1].substring(1, 2),
                    i = e[1].substring(0, 1),
                    a = e[1].substring(0, 2);
                return "0" === n ? e[0] + "." + i + "%" : e[0] + "." + a + "%"
            },
            progressFormat: function(t) {
                if (0 === t || "0" === t)
                    return "0%";
                if (t > 1 || t > "1")
                    return "100%";
                if (!t || isNaN(t))
                    return "";
                t = parseFloat(t),
                    t = 1e4 * t / 100 + "";
                var e = t.split(".");
                return e[0] + "%"
            }
        };
        lufax.util.NumFormat = t,
            lufax.NumFormat = lufax.util.NumFormat
    }(this);
var LufaxSite = LufaxSite || {},
    PRD = {
        site: "http://www." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        "static": "http://static.lufaxcdn.com",
        statics: "https://static.lufaxcdn.com",
        common: "http://common." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/common",
        commons: "https://common." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/common",
        pl: "http://pl." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/pl",
        fa: "http://fa." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/fa",
        list: "http://list." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/list",
        lists: "https://list." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/list",
        yeb: "http://yeb." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        yebs: "https://ljbao." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        cashier: "http://cashier." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/cashier",
        trading: "https://trading." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/trading",
        user: "https://user." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user",
        userStatic: "https://user." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user",
        fund: "http://fund." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/fund",
        my: "https://my." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/my",
        mkt: "http://affiliate." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        mkts: "https://affiliate." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".")
    },
    STG = {
        site: "http://www.stg.lufax.com",
        "static": "http://static.stg.lufax.com",
        statics: "https://static.stg.lufax.com",
        common: "http://common.stg.lufax.com/common",
        commons: "https://common.stg.lufax.com/common",
        pl: "http://pl.stg.lufax.com/pl",
        fa: "http://fa.stg.lufax.com/fa",
        list: "http://list.stg.lufax.com/list",
        lists: "https://list.stg.lufax.com/list",
        yeb: "http://yeb." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        yebs: "https://ljbao." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        cashier: "http://cashier." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/cashier",
        trading: "https://trading.stg.lufax.com/trading",
        user: "https://user.stg.lufax.com/user",
        userStatic: "https://user.stg.lufax.com/user",
        fund: "http://fund.stg.lufax.com/fund",
        my: "https://my.stg.lufax.com/my",
        mkt: "http://affiliate.stg.lufax.com",
        mkts: "https://affiliate.stg.lufax.com"
    },
    STG1 = {
        site: "http://wwwtest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        "static": "http://statictest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        statics: "https://statictest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        common: "http://commontest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/common",
        commons: "https://commontest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/common",
        pl: "http://pltest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/pl",
        fa: "http://fatest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/fa",
        list: "http://listtest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/list",
        lists: "https://listtest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/list",
        yeb: "http://yeb." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        yebs: "https://ljbao." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        cashier: "http://cashier." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/cashier",
        trading: "https://tradingtest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/trading",
        user: "https://usertest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user",
        userStatic: "https://usertest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user",
        fund: "http://fundtest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/fund",
        my: "https://mytest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/my",
        mkt: "http://affiliatetest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        mkts: "https://affiliatetest1." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".")
    },
    STG2 = {
        site: "http://wwwtest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        "static": "http://statictest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        statics: "https://statictest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        common: "http://commontest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/common",
        commons: "https://commontest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/common",
        pl: "http://pltest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/pl",
        fa: "http://fatest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/fa",
        list: "http://listtest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/list",
        lists: "https://listtest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/list",
        yeb: "http://yeb." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        yebs: "https://ljbao." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/yeb",
        cashier: "http://cashier." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/cashier",
        trading: "https://tradingtest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/trading",
        user: "https://usertest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user",
        userStatic: "https://usertest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user",
        fund: "http://fundtest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/fund",
        my: "https://mytest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/my",
        mkt: "http://affiliatetest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join("."),
        mkts: "https://affiliatetest2." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".")
    };
LufaxSite.Envs = {
        evn: PRD
    },
    function() {
        var t = {
            _escapeTemplate: function(t) {
                return null == t ? "" : t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
            },
            stringTemplateMergeAndShow: function(t, e, n) {
                var i = TrimPath.parseTemplate(this._escapeTemplate(t), "templateId").process({
                    model: e
                });
                return n && n(i),
                    i
            },
            textareaTemplateMergeAndShow: function(t, e, n) {
                var i = TrimPath.processDOMTemplate(t, {
                    model: e
                });
                return n && n(i),
                    i
            }
        };
        lufax.util.TemplateMerge = t,
            lufax.templateMerge = lufax.util.TemplateMerge
    }(this);
var autoScroll = function() {
    function t(t) {
        $(".carousel-fade>ul>li:visible").stop(!0, !0).fadeOut(800),
            $(".carousel-fade>ul>li").eq(t).stop(!0, !0).fadeIn(800)
    }

    function e() {
        var e = $(".carousel-fade>ul li").length,
            n = $(".focus_ctrl a").index($(".current")[0]);
        n == e - 1 && (n = -1),
            $(".focus_ctrl a").eq(n + 1).addClass("current").siblings().removeClass("current"),
            t(n + 1),
            n++
    }

    function n() {
        var t = $(".carousel-fade>ul li").length;
        if (1 === t)
            return $(".focus_ctrl").hide(), !1;
        var e = 5e3;
        $(".focus_ctrl a:eq(0)").addClass("current");
        var n = setInterval(function() {
            autoScroll.focus()
        }, e);
        $(".carousel-fade>ul>li").eq(0).fadeIn(0),
            $(".carousel-fade>ul").hover(function() {
                clearInterval(n)
            }, function() {
                n = setInterval(function() {
                    autoScroll.focus()
                }, e)
            }),
            $(".focus_ctrl a").hover(function() {
                $(this).addClass("current").siblings().removeClass("current"),
                    autoScroll.scroll($(this).index()),
                    clearInterval(n)
            }, function() {
                n = setInterval(function() {
                    autoScroll.focus()
                }, e)
            })
    }
    return {
        scroll: t,
        focus: e,
        init: n
    }
}();
! function() {
    var t = {
        init: function(t, e, n, i) {
            for (var a, o = (e - 1) * n, s = $(i), r = o; t > r && n * e > r; r++)
                a = r;
            o += 1,
                a += 1,
                0 === t && s.hide(),
                s.find(".first-num").html(o),
                s.find(".last-num").html(a),
                s.find(".total-count").html(t)
        }
    };
    lufax.util.pageCount = t,
        lufax.pageCount = lufax.util.pageCount
}(this),
function() {
    var t = {
        init: function(t, e) {
            var n = $(t).text(),
                i = n.length;
            if (i > e) {
                var a = n.slice(0, e);
                $(t).text(a + "...")
            }
        }
    };
    lufax.util.limitText = t,
        lufax.limitText = lufax.util.limitText
}(this),
function() {
    function t(t, e) {
        var n = this;
        n.container = t,
            n.options = e || {},
            n.countDownSeconds = 0,
            n.doubleDigit = !0,
            n.secondsOnly = !1,
            n.callback = function() {
                return !1
            },
            $.extend(n, n.options)
    }
    t.prototype = {
            init: function() {
                var t = this;
                t._render(t.countDownSeconds),
                    0 === t.countDownSeconds ? t.callback() : (--t.countDownSeconds,
                        setTimeout($.proxy(t.init, t), 1e3))
            },
            _render: function(t) {
                var e, n = this;
                e = n.secondsOnly ? n._zero(t) : n._zero(t % 60);
                var i = n._zero(Math.floor(t / 60) % 60),
                    a = n._zero(Math.floor(t / 60 / 60) % 24),
                    o = n._zero(Math.floor(t / 60 / 60) / 24);
                n._display({
                    days: o,
                    seconds: e,
                    minutes: i,
                    hours: a
                })
            },
            _zero: function(t) {
                var e = this;
                return t = parseInt(t, 10),
                    t > 0 && e.doubleDigit ? (9 >= t && (t = "0" + t),
                        String(t)) : t >= 0 && !e.doubleDigit ? String(t) : "00"
            },
            _display: function(t) {
                var e = this,
                    n = e.container;
                n.find(".countDownDay").html(t.days),
                    n.find(".countDownHour").html(t.hours),
                    n.find(".countDownMin").html(t.minutes),
                    n.find(".countDownSec").html(t.seconds)
            }
        },
        lufax.util.countDown = t
}(this), ! function() {
    function t() {}
    t.prototype = {
            template: '<iframe id="activationLufaxCoinFrame" src="$protocol//affiliate.' + location.hostname.substring(location.hostname.indexOf(".") + 1) + '/lufaxcoin/activate-code?callback=ActivationLufaxCoinAsync" scrolling="no" frameborder="0" width="526" height="225"></iframe>',
            pop: function() {
                var t = this;
                t.template = t.template.replace("$protocol", location.protocol),
                    LufaxPopup.blankPopup({
                        content: '<div class="modal-content"><div class="modal-header clearfix"><div class="close"><a class="modal-close" href="javascript:;"></a></div><h4 class="modal-title">激活新的' + lufax.constant.lufaxCoinTxt + "</h4></div>" + t.template + "</div>",
                        onConfirm: function() {}
                    })
            },
            map: function() {
                var t = this;
                return {
                    "01": function() {
                        LufaxPopup.close()
                    },
                    "02": function(e) {
                        t.onSuccess && t.onSuccess(e)
                    },
                    "03": function() {
                        location.href = "https://user." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user/login?returnPostURL=" + encodeURIComponent(location.href)
                    },
                    99: function() {
                        location.href = "http://www." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/error.html"
                    }
                }
            }
        },
        lufax.com.ActivationLufaxCoin = new t
}(this);
var LufaxSite = LufaxSite || {
    require: function(t, e, n) {
        var i, a = e ? e : i,
            o = document.getElementsByTagName("script"),
            s = a + t + ".js",
            r = !1;
        for (var l in o)
            if (o[l].src && o[l].src == s) {
                r = !0;
                break
            }
        var c = function() {
            n && "function" == typeof n && n()
        };
        return r ? void c() : void $.ajax({
            url: s,
            dataType: "script",
            success: c
        })
    }
};
LufaxSite.PageData = LufaxSite.PageData || {},
    LufaxSite.pageInit = function(config) {
        function fnLoad() {
            tryTimes--,
            0 >= tryTimes || LufaxSite.require("/config/js/" + cfg.dataRef, LufaxSite.Envs.evn["static"], function() {
                var handler = eval(LufaxSite.pageInitTypes[cfg.type]);
                handler(cfg, LufaxSite.PageData[cfg.dataRef]),
                    LufaxSite.PageData[cfg.dataRef] || setTimeout(fnLoad, 10)
            })
        }
        var cfg = {
                type: config.type,
                viewId: config.view,
                dataRef: config.data
            },
            tryTimes = 5;
        fnLoad()
    },
    LufaxSite.pageInitTypes = {
        news: function(t, e) {
            function n(e) {
                var n = LufaxSite.Envs.evn.site;
                if (e && e.titles) {
                    for (var i = [], a = 0; a < e.titles.length; a++) {
                        var o = e.titles[a].title,
                            s = e.titles[a].location;
                        "content_list_faq" == t.viewId ? a < e.titles.length - 1 ? i.push('<div class="snotice green_icon png"><a href="' + n + s + '" title="' + o + '" target="_blank">' + o + "</a></div>") : i.push('<div class="snotice green_icon orange png"><a href="' + n + s + '" title="' + o + '" target="_blank">' + o + "</a></div>") : i.push('<div class="snotice green_icon png"><a href="' + n + s + '" title="' + o + '" target="_blank">' + o + "</a></div>");
                    }
                    return i.join("")
                }
            }
            var i = n(e);
            $("#" + t.viewId).html(i),
                $("#content_list .snotice:first a").css("color", "#e6551d")
        },
        help: function(t, e) {
            function n(e) {
                var n = LufaxSite.Envs.evn.site;
                if (e && e.titles) {
                    for (var i = [], a = 0; a < e.titles.length; a++) {
                        var o = e.titles[a].title,
                            s = e.titles[a].location;
                        "content_list_faq" == t.viewId ? a < e.titles.length - 1 ? i.push('<div class="snotice png"><a href="' + n + s + '" title="' + o + '" target="_blank">' + o + "</a></div>") : i.push('<div class="snotice orange png"><a href="' + n + s + '" title="' + o + '" target="_blank">' + o + "</a></div>") : i.push('<div class="snotice png"><a href="' + n + s + '" title="' + o + '" target="_blank">' + o + "</a></div>")
                    }
                    return i.join("")
                }
            }
            var i = n(e);
            $("#" + t.viewId).html(i)
        },
        newHelp: function(t, e) {
            function n(t) {
                var e = LufaxSite.Envs.evn.site;
                if (t && t.titles) {
                    for (var n = [], i = 0; i < t.titles.length; i++) {
                        var a = t.titles[i].title,
                            o = t.titles[i].location;
                        n.push('<li><b></b><a href="' + e + o + '" title="' + a + '" target="_blank">' + a + "</a></li>")
                    }
                    return n.join("")
                }
            }
            var i = n(e);
            $("#" + t.viewId).html(i)
        },
        contents: function(t, e) {
            $("#" + t.viewId).html(e)
        }
    };
var LufaxUtility = function() {
        function t(t) {
            if (0 === t || "0" === t)
                return "0.00%";
            if (!t || isNaN(t))
                return "";
            t = parseFloat(t),
                t = Math.round(1e4 * t) / 100 + "",
                t += -1 == t.indexOf(".") ? ".00" : "00";
            var e = t.split("."),
                n = e[1].substring(0, 2);
            return e[0] + "." + n + "%"
        }

        function e(t) {
            if (0 === t || "0" === t)
                return "0.00%";
            if (!t || isNaN(t))
                return "";
            t = parseFloat(t),
                t = Math.round(1e4 * t) / 100 + "",
                t += -1 == t.indexOf(".") ? ".00" : "00";
            var e = t.split("."),
                n = e[1].substring(0, 2);
            return e[0] + "." + n
        }

        function n(t) {
            var e = "￥",
                n = i(t);
            return "" == n ? n : e + n
        }

        function i(t) {
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
            for (var a = /(\d+)(\d{3})/; a.test(n);)
                n = n.replace(a, "$1,$2");
            return n + i
        }

        function a(t) {
            var e = "￥",
                n = o(t);
            return "" == n ? n : e + n
        }

        function o(t) {
            if (0 === t || "0" === t)
                return "0";
            if (!t || isNaN(t))
                return "";
            t += "";
            for (var e = t, n = /(\d+)(\d{3})/; n.test(e);)
                e = e.replace(n, "$1,$2");
            return e
        }

        function s(t) {
            return Math.round(100 * t) / 100
        }

        function r(t, e) {
            return e ? t.replace(/\$\{(.+?)\}/g, function(t, n) {
                return e[n]
            }) : t
        }

        function l(t, e) {
            var n, i, a, o, s, r, l, c, d, u, p, h, f, m, g = 99999999999.99,
                v = "零",
                b = "壹",
                x = "贰",
                y = "叁",
                w = "肆",
                C = "伍",
                $ = "陆",
                _ = "柒",
                T = "捌",
                P = "玖",
                S = "拾",
                k = "佰",
                D = "仟",
                I = "万",
                M = "亿",
                N = "元",
                A = "角",
                E = "分",
                j = "整";
            if (t += "",
                "" == t)
                return e ? "" : "Empty input!";
            if (null != t.match(/[^,.\d]/))
                return e ? "" : "Invalid characters in the input string!";
            if (null == t.match(/^((\d{1,3}(,\d{3})*(.\d+)?)|(\d+(.\d+)?))$/))
                return e ? "" : "Illegal format of digit number!";
            if (t = t.replace(/,/g, ""),
                t = t.replace(/^0+/, ""),
                Number(t) > g)
                return e ? "" : "Too large a number to convert!";
            if (t = parseFloat(t),
                t += "",
                o = t.split("."),
                o.length > 1 ? (n = o[0],
                    i = o[1],
                    i = i.substr(0, 2)) : (n = o[0],
                    i = ""),
                s = new Array(v, b, x, y, w, C, $, _, T, P),
                r = new Array("", S, k, D),
                l = new Array("", I, M),
                c = new Array(A, E),
                a = "",
                Number(n) > 0) {
                for (d = 0,
                    u = 0; u < n.length; u++)
                    p = n.length - u - 1,
                    h = n.substr(u, 1),
                    f = p / 4,
                    m = p % 4,
                    "0" == h ? d++ : (d > 0 && (a += s[0]),
                        d = 0,
                        a += s[Number(h)] + r[m]),
                    0 == m && 4 > d && (a += l[f]);
                a += N
            }
            if ("" != i)
                for (u = 0; u < i.length; u++)
                    h = i.substr(u, 1),
                    "0" != h && (a += s[Number(h)] + c[u]);
            return "" == a && (a = v + N),
                "" == i && (a += j),
                a
        }

        function c(t) {
            t = Number(t);
            var e, n, i, a;
            return 60 >= t ? e = t + "秒" : t > 60 && 3600 > t ? (a = t % 60,
                    n = Math.floor(t / 60) % 60,
                    e = n + "分" + a + "秒") : t >= 3600 && 86400 > t ? (a = t % 60,
                    n = Math.floor(t / 60) % 60,
                    i = Math.floor(t / 60 / 60) % 24,
                    e = i + "小时" + n + "分" + a + "秒") : e = "",
                e
        }

        function d(t) {
            if (0 === t || "0" === t)
                return "0万";
            if (!t || isNaN(t))
                return "";
            t /= 1e4,
                t += "";
            var e = t.split(".")[0],
                n = t.split(".")[1];
            return n ? (n = n.substring(0, 2),
                e + "." + n + "万") : e + "万"
        }

        function u(t) {
            if (0 === t || "0" === t)
                return "0%";
            if (t > 1 || t > "1")
                return "100%";
            if (!t || isNaN(t))
                return "";
            t = parseFloat(t),
                t = 1e4 * t / 100 + "";
            var e = t.split(".");
            return e[0] + "%"
        }

        function p(t) {
            if (0 === t || "0" === t)
                return "0%";
            if (t > 1 || t > "1")
                return "100%";
            if (!t || isNaN(t))
                return "";
            if (t = parseFloat(t),
                t = 1e4 * t / 100 + "", -1 === t.indexOf("."))
                return t + "%";
            var e = t.split("."),
                n = e[1].substring(1, 2),
                i = e[1].substring(0, 1),
                a = e[1].substring(0, 2);
            return "0" === n ? e[0] + "." + i + "%" : e[0] + "." + a + "%"
        }
        return {
            percentageFormat: t,
            percentageFormatWithoutZero: p,
            withoutPercentageFormat: e,
            numberFormat: n,
            numberFormatWithoutCurrency: i,
            round: s,
            formatMessage: r,
            convertCurrency: l,
            secondsOfTrading: c,
            numberFormatTenThousand: d,
            intFormat: a,
            intFormatWithoutCurrency: o,
            progressFormat: u
        }
    }(),
    tool = function() {
        function t(i) {
            i = $.extend({}, t.defaults, i || {});
            var a = new Date,
                o = new Date(i.date);
            a.getTime() - o.getTime() < 0 && (n(i.cookieName) || ($("#" + i.domId).show(),
                e(i)))
        }

        function e(t) {
            $.each(t.clickDomId, function(e, n) {
                $("#" + n).click(function() {
                    $("#" + t.domId).hide(),
                        t.date ? i(t.cookieName, "true", t.date) : i(t.cookieName, "true")
                })
            })
        }

        function n(t) {
            if (document.cookie.length > 0) {
                var e = document.cookie.indexOf(t + "=");
                if (-1 != e) {
                    e = e + t.length + 1;
                    var n = document.cookie.indexOf(";", e);
                    return -1 == n && (n = document.cookie.length),
                        unescape(document.cookie.substring(e, n))
                }
            }
            return ""
        }

        function i(t, e, n) {
            if (n) {
                var i = new Date(n);
                document.cookie = t + "=" + escape(e) + ";expires=" + i.toGMTString() + ";domain=." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + ";path=/"
            } else
                document.cookie = t + "=" + escape(e) + ";domain=." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + ";path=/"
        }

        function a(t) {
            var e = new Date;
            e.setTime(e.getTime() - 864e5),
                document.cookie = t + "=;expires=" + e.toGMTString() + ";domain=." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + ";path=/"
        }

        function o(t, e) {
            if ("boolean" == typeof e && e)
                o.content = '<div class="loadingWrapper loadingSmall hidden"><i class="loadingPic"></i></div>';
            else {
                if (o.content = '<div class="loadingWrapper hidden"><i class="loadingPic"></i><span class="loadingTips">正在处理，请稍后...</span></div>',
                    0 != o.count)
                    return void++o.count;
                ++o.count
            }
            var n = $("#" + t);
            n.append(o.content).css("position", "relative");
            var i = n.children(".loadingWrapper"),
                a = i.outerWidth() / 2,
                s = i.outerHeight() / 2,
                r = n.width() / 2,
                l = n.height() / 2;
            i.css({
                top: l - s,
                left: r - a
            }).show()
        }

        function s(t, e) {
            "boolean" == typeof e && e ? $("#" + t).find(".loadingWrapper").remove() : 0 == --o.count && $("#" + t).find(".loadingWrapper").remove()
        }

        function r() {
            function t() {
                LufaxPopup.blankPopup({
                    content: '<div class="popIE6 clearfix"><div class="close"><a class="btn graBtn_2020" href="javascript:void(0);"></a></div><div class="logo">&nbsp;</div><div class="content"><h2 class="title"><span class="emphasize">IE6</span>out了！您还在用么？</h2><p class="suggest">为了最佳的浏览体验<br/>建议您使用以下浏览器：</p><div class="availableBrowser"><a class="browser IE7gte" href="http://download.microsoft.com/download/1/6/1/16174D37-73C1-4F76-A305-902E9D32BAC9/IE8-WindowsXP-x86-CHS.exe" target="_blank">IE7.0以上</a><a class="browser firefox" href="http://download.firefox.com.cn/releases/webins3.0/official/zh-CN/Firefox-latest.exe" target="_blank">firefox</a><a class="browser chrome" href="https://www.google.com/intl/zh-CN/chrome/browser/index.html" target="_blank">chrome</a></div><div class="buttons"><a class="btns btn_info btn_large close" href="javascript:void(0);">忽&emsp;略</a></div></div></div>',
                    onConfirm: function() {
                        tool.setCookie("isIE6", "yes", "2020/01/01"),
                            e()
                    }
                })
            }

            function e() {
                $("body").prepend('<div class="topIE6 hidden clearfix"><div class="content"><div class="leftWrap"><i class="icon"></i>您可能还在使用IE6。<span class="suggest">为了最佳的浏览效果，我们推荐以下浏览器供您选择：</span><a class="browser IE7gte" href="http://download.microsoft.com/download/1/6/1/16174D37-73C1-4F76-A305-902E9D32BAC9/IE8-WindowsXP-x86-CHS.exe" target="_blank">IE7.0以上</a><a class="browser firefox" href="http://download.firefox.com.cn/releases/webins3.0/official/zh-CN/Firefox-latest.exe" target="_blank">firefox</a><a class="browser chrome" href="https://www.google.com/intl/zh-CN/chrome/browser/index.html" target="_blank">chrome</a></div><div class="rightWrap"><a class="closeBtn" href="javascript:void(0);">&times;</a></div></div></div>'),
                    $(".topIE6").slideDown(1e3)
            }
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
                var n = tool.getCookie("isIE6");
                n ? e() : t(),
                    $(".topIE6").find(".closeBtn").live("click", function() {
                        $(".topIE6").slideUp(200)
                    })
            }
        }

        function l() {
            c(p.options.countDownSeconds),
                0 == p.options.countDownSeconds ? p.options.callback() : (--p.options.countDownSeconds,
                    OTP_speechCountDownTime = setTimeout(l, 1e3))
        }

        function c(t) {
            var e;
            e = d(1 == p.options.secondsOnly ? t : t % 60);
            var n = d(Math.floor(t / 60) % 60),
                i = d(Math.floor(t / 60 / 60) % 24),
                a = d(Math.floor(t / 60 / 60) / 24);
            u({
                days: a,
                seconds: e,
                minutes: n,
                hours: i
            })
        }

        function d(t) {
            var t = parseInt(t, 10);
            return t > 0 && 1 == p.options.doubleDigit ? (9 >= t && (t = "0" + t),
                String(t)) : t >= 0 && 0 == p.options.doubleDigit ? String(t) : "00"
        }

        function u(t) {
            $("#countDownDay").html(t.days),
                $("#hour").html(t.hours),
                $("#min").html(t.minutes),
                $("#sec").html(t.seconds)
        }

        function p(t) {
            p.options = $.extend({}, p.options, t || {}),
                l()
        }

        function h(t, e) {
            var n = $(t).text(),
                i = n.length;
            if (i > e) {
                var a = n.slice(0, e);
                $(t).text(a + "...")
            }
        }

        function f(t, e, n, i) {
            for (var a, o = (e - 1) * n, s = $(i), r = o; t > r && n * e > r; r++)
                a = r;
            o += 1,
                a += 1,
                0 === t && s.hide(),
                s.find(".first-num").html(o),
                s.find(".last-num").html(a),
                s.find(".total-count").html(t)
        }
        return t.defaults = {
                domId: "",
                clickDomId: [""],
                cookieName: "",
                date: "2020/1/1"
            },
            o.count = 0,
            p.options = {
                countDownSeconds: 0,
                doubleDigit: !0,
                secondsOnly: !1,
                callback: function() {
                    return !1
                }
            }, {
                tip: t,
                getCookie: n,
                setCookie: i,
                deleteCookie: a,
                loading: o,
                loadingEnd: s,
                IE6Notice: r,
                countDown: p,
                limitText: h,
                pageCount: f
            }
    }(),
    autoScroll = function() {
        function t(t) {
            $(".carousel-fade>ul>li:visible").stop(!0, !0).fadeOut(800),
                $(".carousel-fade>ul>li").eq(t).stop(!0, !0).fadeIn(800)
        }

        function e() {
            var e = $(".carousel-fade>ul li").length,
                n = $(".focus_ctrl a").index($(".current")[0]);
            n == e - 1 && (n = -1),
                $(".focus_ctrl a").eq(n + 1).addClass("current").siblings().removeClass("current"),
                t(n + 1),
                n++
        }

        function n() {
            var t = $(".carousel-fade>ul li").length;
            if (1 === t)
                return $(".focus_ctrl").hide(), !1;
            var e = 5e3;
            $(".focus_ctrl a:eq(0)").addClass("current");
            var n = setInterval("autoScroll.focus()", e);
            $(".carousel-fade>ul>li").eq(0).fadeIn(0),
                $(".carousel-fade>ul").hover(function() {
                    clearInterval(n)
                }, function() {
                    n = setInterval("autoScroll.focus()", e)
                }),
                $(".focus_ctrl a").hover(function() {
                    $(this).addClass("current").siblings().removeClass("current"),
                        autoScroll.scroll($(this).index()),
                        clearInterval(n)
                }, function() {
                    n = setInterval("autoScroll.focus()", e)
                })
        }
        return {
            scroll: t,
            focus: e,
            init: n
        }
    }();
jQuery.fn.pagination = function(t, e) {
    return e = jQuery.extend({
            num_display_entries: 6,
            current_page: 0,
            num_edge_entries: 2,
            link_to: "javascript:void(0)",
            prev_text: '<span class="caret">&lt;</span> 上一页',
            next_text: '下一页 <span class="caret">&gt;</span>',
            first_text: "首页",
            last_text: "尾页",
            ellipse_text: "...",
            prev_show_always: !0,
            next_show_always: !0,
            callback: function() {
                return !1
            }
        }, e || {}),
        this.each(function() {
            function n() {
                return t
            }

            function i() {
                var t = Math.ceil(e.num_display_entries / 2),
                    i = n(),
                    a = i - e.num_display_entries,
                    o = s > t ? Math.max(Math.min(s - t, a), 0) : 0,
                    r = s > t ? Math.min(s + t, i) : Math.min(e.num_display_entries, i);
                return [o, r]
            }

            function a(t, n) {
                function i(t) {
                    return function() {
                        o(t)
                    }
                }
                s = t;
                var a = e.callback(t + 1, i(s));
                return a || (n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0),
                    a
            }

            function o(o) {
                r.empty();
                var s = (i(),
                        n()),
                    l = function(t) {
                        return function(e) {
                            return a(t, e)
                        }
                    },
                    c = function(t, e) {
                        var n = "<p class='pageNum'>第" + Number(t + 1) + "页/共" + e + "页</p>";
                        r.append(n)
                    },
                    d = function(t, n, i) {
                        if (t = 0 > t ? 0 : s > t ? t : s - 1,
                            i = jQuery.extend({
                                text: t + 1,
                                classes: ""
                            }, i || {}),
                            o == n)
                            var a = jQuery("<span class='btns disabled btn_page btn_small'>" + i.text + "</span>");
                        else
                            var a = jQuery("<a class='btns btn_page btn_small'>" + i.text + "</a>").bind("click", l(t)).attr("href", e.link_to.replace(/__id__/, t));
                        i.classes && a.addClass(i.classes),
                            r.append(a)
                    },
                    u = function(t, e) {
                        d(t, 0, e)
                    },
                    p = function(e, n) {
                        d(e, t - 1, n)
                    };
                e.prev_text && (o > 0 || e.prev_show_always) && (u(0, {
                            text: e.first_text,
                            classes: "first"
                        }),
                        u(o - 1, {
                            text: e.prev_text,
                            classes: "prev"
                        })),
                    c(o, t),
                    e.next_text && (s - 1 > o || e.next_show_always) && (p(o + 1, {
                            text: e.next_text,
                            classes: "next"
                        }),
                        p(t - 1, {
                            text: e.last_text,
                            classes: "last"
                        }))
            }
            var s = e.current_page,
                r = jQuery(this);
            this.selectPage = function(t) {
                    a(t)
                },
                this.prevPage = function() {
                    return s > 0 ? (a(s - 1), !0) : !1
                },
                this.nextPage = function() {
                    return s < n() - 1 ? (a(s + 1), !0) : !1
                },
                t > 1 ? o(s) : r.empty()
        })
};
var LufaxPopup = function() {
        function t(t) {
            var e = $.extend("", m, t);
            c({
                template: g.simplePopupTemplate,
                args: {
                    imgClass: e.imgClass,
                    title: e.title,
                    content: e.content,
                    button: e.button
                },
                bindings: [{
                    selector: u(),
                    func: l(e.onConfirm)
                }, {
                    selector: p(),
                    func: l(e.onCancel)
                }]
            })
        }

        function e(t) {
            this.options = t,
                c({
                    template: g.blankTemplate,
                    args: {
                        content: t.content || ""
                    },
                    bindings: [{
                        selector: u(),
                        func: l(t.onConfirm)
                    }, {
                        selector: h(),
                        func: l(t.onClose)
                    }, {
                        selector: p(),
                        func: l(t.onCancel)
                    }]
                })
        }

        function n(t) {
            var e = $.extend("", m, t);
            c({
                template: g.richPopupTemplate,
                args: {
                    privateClass: e.privateClass,
                    title: e.title,
                    content: e.content,
                    foot: e.foot
                },
                bindings: [{
                    selector: p(),
                    func: l(e.onCancel)
                }]
            })
        }

        function i(t) {
            this.options = t,
                c({
                    template: g.newPopupTemplate,
                    args: {
                        popupTitleName: t.popupTitleName || "",
                        iconClass: t.iconClass,
                        message: LufaxUtility.formatMessage(t.message, t.args) || t,
                        button: t.button,
                        closeDisplay: "false" == t.closeDisplay ? "" : '<div class="close"><a class="modal-close" href="javascript:void(0);"></a></div>'
                    },
                    css: t.css,
                    bindings: [{
                        selector: u(),
                        func: l(t.onConfirm)
                    }, {
                        selector: h(),
                        func: l(t.onClose)
                    }, {
                        selector: p(),
                        func: l(t.onCancel)
                    }]
                })
        }

        function a(t) {
            this.options = t,
                c({
                    template: g.popupSubtitleTemplate,
                    args: {
                        privateClass: t.privateClass,
                        popupTitleName: t.popupTitleName || "",
                        iconClass: t.iconClass,
                        subTitle: LufaxUtility.formatMessage(t.subTitle, t.args) || t,
                        contents: LufaxUtility.formatMessage(t.contents, t.args) || t,
                        button: t.button,
                        closeDisplay: "false" == t.closeDisplay ? "" : '<div class="close"><a class="modal-close" href="javascript:void(0);"></a></div>'
                    },
                    css: t.css,
                    bindings: [{
                        selector: u(),
                        func: l(t.onConfirm)
                    }, {
                        selector: h(),
                        func: l(t.onClose)
                    }, {
                        selector: p(),
                        func: l(t.onCancel)
                    }]
                })
        }

        function o(t) {
            this.options = t,
                c({
                    template: g.newIconPopupTemplate,
                    args: {
                        popupTitleName: t.popupTitleName || "",
                        iconClass: t.iconClass,
                        message: LufaxUtility.formatMessage(t.message, t.args) || t,
                        button: t.button,
                        closeDisplay: "false" == t.closeDisplay ? "" : '<div class="close"><a class="modal-close" href="javascript:void(0);"></a></div>'
                    },
                    css: t.css,
                    bindings: [{
                        selector: u(),
                        func: l(t.onConfirm)
                    }, {
                        selector: h(),
                        func: l(t.onClose)
                    }, {
                        selector: p(),
                        func: l(t.onCancel)
                    }]
                })
        }

        function s(t) {
            this.options = t,
                c({
                    template: g.newIconPopupSubtitleTemplate,
                    args: {
                        privateClass: t.privateClass,
                        popupTitleName: t.popupTitleName || "",
                        iconClass: t.iconClass,
                        subTitle: LufaxUtility.formatMessage(t.subTitle, t.args) || t,
                        contents: LufaxUtility.formatMessage(t.contents, t.args) || t,
                        button: t.button,
                        closeDisplay: "false" == t.closeDisplay ? "" : '<div class="close"><a class="modal-close" href="javascript:void(0);"></a></div>'
                    },
                    css: t.css,
                    bindings: [{
                        selector: u(),
                        func: l(t.onConfirm)
                    }, {
                        selector: h(),
                        func: l(t.onClose)
                    }, {
                        selector: p(),
                        func: l(t.onCancel)
                    }]
                })
        }

        function r() {
            $.unblockUI()
        }

        function l(t) {
            return function() {
                LufaxPopup.close(),
                    t && t()
            }
        }

        function c(t) {
            void 0 != t.onClose && (LufaxPopup.options = t),
                $.blockUI({
                    message: $(LufaxUtility.formatMessage(t.template, t.args))
                }),
                d(),
                $(h()).die("click"),
                $(h()).live("click", l(t.onCancel)),
                t.bindings && $.each(t.bindings, function(t, e) {
                    $(e.selector).die("click"),
                        $(e.selector).live("click", e.func)
                })
        }

        function d() {
            var t = $(window).width(),
                e = $(window).height(),
                n = $(".modal-dialog:last").outerWidth(),
                i = $(".modal-dialog:last").outerHeight();
            n && i && $(".blockMsg").css("top", (e - i) / 2 + "px").css("left", (t - n) / 2 + "px")
        }

        function u() {
            return f("confirmBtn")
        }

        function p() {
            return f("cancleBtn")
        }

        function h() {
            return f("close")
        }

        function f(t) {
            return "." + t
        }
        var m = {},
            g = {
                simplePopupTemplate: '<div class="modal-dialog timeout_safe_exit ${imgClass}"><div class="border"> <table><tbody><tr><td><div class="logo">&nbsp;</div></td><td class="detail"><p class="title">${title}</p><p class="content">${content}</p><div class="clearfix">${button}</div></td></tr></tbody></table></div></div>',
                blankTemplate: '<div class="modal-dialog popup_wrap blankPopup">${content}</div>',
                newPopupTemplate: '<div class="modal-dialog popup_wrap"><div class="modal-content"><div class="modal-header clearfix">${closeDisplay}<h4 class="modal-title">${popupTitleName}</h4></div><div class="modal-body"><i class="icon ${iconClass}"></i><span class="message">${message}</span></div><div class="modal-footer">${button}</div></div></div>',
                newIconPopupTemplate: '<div class="modal-dialog popup_wrap"><div class="modal-content"><div class="modal-header clearfix">${closeDisplay}<h4 class="modal-title">${popupTitleName}</h4></div><div class="modal-body"><i class="iconV2 ${iconClass}"></i><span class="message">${message}</span></div><div class="modal-footer">${button}</div></div></div>',
                popupSubtitleTemplate: '<div class="modal-dialog popup_wrap popup_wrap_subtitle ${privateClass}"><div class="modal-content"><div class="modal-header clearfix">${closeDisplay}<h4 class="modal-title">${popupTitleName}</h4></div><div class="modal-body clearfix"><i class="icon ${iconClass}"></i><span class="message">${subTitle}</span><div class="content">${contents}</div></div><div class="modal-footer">${button}</div></div></div>',
                newIconPopupSubtitleTemplate: '<div class="modal-dialog popup_wrap popup_wrap_subtitle ${privateClass}"><div class="modal-content"><div class="modal-header clearfix">${closeDisplay}<h4 class="modal-title">${popupTitleName}</h4></div><div class="modal-body clearfix"><i class="iconV2 ${iconClass}"></i><span class="message">${subTitle}</span><div class="content">${contents}</div></div><div class="modal-footer">${button}</div></div></div>',
                richPopupTemplate: '<div class="modal-dialog popup_wrap commission_wrap ${privateClass}"><div class="modal-content"><div class="modal-header clearfix"><div class="close"><a class="modal-close" href="javascript:void(0);"></a></div><h4 class="modal-title">${title}</h4></div><div class="modal-body clearfix"><div class="affiliate-content">${content}</div></div><div class="modal-footer">${foot}</div></div></div>'
            };
        return {
            simplePopup: t,
            close: r,
            blankPopup: e,
            popup: i,
            closableBinding: l,
            richPopup: n,
            popup_subTitle: a,
            newIconPopupSubTitle: s,
            newIconPopup: o
        }
    }(),
    LufaxTemplate = function() {
        function t(t) {
            return null == t ? "" : t.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
        }

        function e(e, n, i) {
            var a = TrimPath.parseTemplate(t(e), "templateId").process({
                model: n
            });
            return i && i(a),
                a
        }

        function n(t, e, n) {
            var i = TrimPath.processDOMTemplate(t, {
                model: e
            });
            return n && n(i),
                i
        }
        return {
            stringTemplateMergeAndShow: e,
            textareaTemplateMergeAndShow: n
        }
    }();
! function(t) {
    t.fn.mouseTips = function(e) {
        var n = '<p class="mouseTips"></p>';
        return t(".mouseTips").length <= 0 && t("body").append(n),
            this.each(function() {
                var n = {
                        flagInfo: t(this).attr("title"),
                        bgColor: "#ffe9ad",
                        borderColor: "#fab418",
                        topOffset: 10,
                        leftOffset: 0,
                        holding: !1,
                        placeStyle: "offset",
                        tipsWidth: ""
                    },
                    i = t.extend(n, e),
                    a = t(".mouseTips");
                t(this).removeAttr("title"),
                    t(this).hover(function() {
                        o(this),
                            1 == i.holding ? (t(this).append(a.clone()),
                                t(this).find(".mouseTips").show()) : a.show()
                    }, function() {
                        1 == i.holding ? t(this).find(".mouseTips").remove() : a.hide()
                    });
                var o = function(e) {
                    if ("position" == i.placeStyle)
                        var n = t(e).position();
                    else
                        var n = t(e).offset();
                    var o = n.top,
                        s = n.left + i.leftOffset,
                        r = t(e).height() + i.topOffset;
                    "" === i.tipsWidth && (i.flagInfo.length > 30 ? i.tipsWidth = 350 : i.tipsWidth = "auto"),
                        a.css({
                            left: s,
                            top: o + r,
                            "background-color": i.bgColor,
                            "border-color": i.borderColor,
                            width: i.tipsWidth
                        }).html(i.flagInfo)
                }
            })
    }
}(jQuery),
function(t) {
    t.fn.zoomTips = function(e) {
        var n = {
                isCash: !1
            },
            i = t.extend(n, e),
            a = '<div class="zoomTips"></div>';
        return t("body").append(a),
            this.each(function() {
                function e(e) {
                    i.isCash ? t(".zoomTips").text(LufaxUtility.numberFormatWithoutCurrency(e)) : t(".zoomTips").text(e)
                }

                function n(e) {
                    var n = t(e).offset(),
                        i = n.top,
                        a = n.left;
                    t(e).innerHeight();
                    t(".zoomTips").css({
                        left: a,
                        top: i + 30
                    }).show()
                }

                function a() {
                    t(".zoomTips").hide()
                }
                t(this).blur(function() {
                        var e = t(this).val();
                        e = i.isCash ? e : e.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
                            t(this).val(e),
                            a()
                    }),
                    t(this).bind("focus", function() {
                        var i = t(this).val();
                        0 == i.length ? a() : (e(i),
                            n(this))
                    }),
                    t(this).bind("keydown keyup", function() {
                        var o = t(this).val();
                        i.isCash ? (o = o,
                                t(this).next().text(LufaxUtility.convertCurrency(o))) : o = o.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
                            o.length > 0 ? (e(o),
                                n(this)) : a()
                    })
            })
    }
}(jQuery),
function(t) {
    t.fn.goTop = function(e) {
        function n(e) {
            var n = 0;
            n = a.border ? t(e).parent().outerWidth() - 1 : t(e).parent().outerWidth(),
                t(e).parent().attr("style", "position:relative;"),
                t(e).attr("style", "margin-left:" + n + "px;"),
                t(window).scrollTop() > 300 && t(e).stop(!0, !0).show()
        }
        var i = {
                handler: t(this),
                duration: 500,
                border: !0
            },
            a = t.extend(i, e);
        return this.each(function() {
            t(window).scroll(function() {
                    n(a.handler)
                }),
                t(this).on("click", function() {
                    t("html,body").animate({
                        scrollTop: 0
                    }, a.duration)
                })
        })
    }
}(jQuery),
Validation.prototype.isEmpty = function(t) {
        return 0 === t ? !1 : !t || 0 === t.length
    },
    Validation.prototype.isRate = function(t) {
        return null == t || "" === t || Number(t) > 0 && /^\d+(\.\d{1,2})?$/.test(t)
    },
    Validation.prototype.isDigit = function(t) {
        return /^[0-9]*$/.test(t)
    };
var validation = new Validation,
    MESSAGES = {
        "num.required": "必须为数字"
    };
ValidationExecutor.prototype.bindValidators = function(t) {
        var e = this;
        this.validationList.push({
            dom: t.dom,
            validators: t.validators,
            targetDom: t.tagDom,
            validateAll: function() {
                var t = this,
                    n = !0,
                    i = function(t) {
                        return e.messageList[t.errorCode]
                    };
                return $.each(t.validators, function(a, o) {
                        return o.run() ? void 0 : (e.errors.push({
                                dom: t.dom,
                                tagDom: t.targetDom,
                                message: i(o)
                            }),
                            n = !1)
                    }),
                    n
            }
        })
    },
    ValidationExecutor.prototype.validate = function() {
        this.clearErrors();
        var t = this,
            e = !0;
        return $.each(t.validationList, function(t, n) {
                n.validateAll() || (e = !1)
            }),
            e
    },
    ValidationExecutor.prototype.showErrors = function(t) {
        var e = this;
        if ($.extend(e.config, t),
            e.config.targetElement) {
            var n = e.config.targetElement;
            if (n.html(""),
                this.errors.length <= 0)
                return;
            var i = "<ul>";
            $.each(e.errors, function(t, e) {
                    i += "<li>" + e.message + "</li>"
                }),
                i += "</ul>",
                n.html(i),
                n.show()
        } else
            $.each(e.errors, function(t, e) {
                function n() {
                    i.hide()
                }
                var i = e.tagDom.siblings(".previousTipMsg");
                n(),
                    e.tagDom.html('<i class="icon minusCircleIcon"></i>'),
                    e.tagDom.append('<span class="content">' + e.message + "</span>"),
                    e.tagDom.show()
            })
    },
    ValidationExecutor.prototype.getErrors = function() {
        return this.errors
    },
    ValidationExecutor.prototype.clearErrors = function() {
        var t = this;
        t.config.targetElement ? (t.config.targetElement.html('<i class="icon minusCircleIcon"></i>'),
                t.config.targetElement.hide()) : $.each(t.errors, function(t, e) {
                e.tagDom.html('<i class="icon minusCircleIcon"></i>'),
                    e.tagDom.hide()
            }),
            this.errors = []
    };
var MandatoryValidator = function(t, e) {
    this.element = t,
        this.id = e,
        this.errorCode = this.id + ".required"
};
MandatoryValidator.prototype.run = function() {
    var t = this,
        e = $(t.element).val();
    return !validation.isEmpty(e)
};
var isNumValidator = function(t) {
    this.errorCode = "num.required",
        this.element = t
};
isNumValidator.prototype.run = function() {
        var t = this,
            e = $(t.element).val();
        return validation.isDigit(e)
    },
    function(t) {
        t.fn.otpModule = function(e) {
            return this.each(function() {
                var n = {
                        otpType: "1",
                        dynamicType: "1",
                        otpUserMobile: null,
                        otpOfficialCall: null,
                        otpVoiceWaitTime: null,
                        otpCountDownSeconds: null,
                        otpRequestMethod: "GET",
                        otpRequestUrl: null,
                        otpVoiceRequestUrl: null,
                        otpRequestParams: {},
                        otpVoiceRequestParams: {},
                        otpTrigger: !1,
                        otpTriggerCountDown: !1,
                        otpScene: null,
                        otpInputName: "otp",
                        otpMobileType: null,
                        otpRequestCallback: function() {
                            return !1
                        },
                        otpInputTabIndex: null,
                        otpGetRequestParams: function() {
                            return {}
                        },
                        otpGetMobileNo: function() {
                            return d.otpUserMobile
                        },
                        otpFocus: null,
                        otpClick: function() {
                            return !0
                        },
                        otpBlur: null,
                        otpDisablePopupError: !1
                    },
                    i = '<div class="control-group otp-group"><label id="otp-label" class="control-label"></label><div class="controls"><span class="input-wrap icon-wrap validate-input"><i class="input-icon validate">&nbsp;</i><input type="text" class="inputs phoneValideNum otp-input"></span>&nbsp;&nbsp;<a href="javascript:void(0);" class="btns btn-info" id="obtainBtn"></a><span class="otp-countdown hidden"></span><span class="errorPanel"><b class="arrow left"> </b><span class="errorContent"></span></span><div class="otp-error-for-popup hidden"></div><div class="otp-info hidden"></div></div></div>';
                t(this).append(i);
                var a = t(this).find("#obtainBtn"),
                    o = t(this).find(".otp-info"),
                    s = t(this).find(".otp-countdown"),
                    r = t(this).find(".control-label"),
                    l = (t(this).find(".otp-error-for-popup"),
                        t("body"),
                        t(this).find(".otp-input")),
                    c = t(this).find("#otp-label"),
                    d = t.extend(n, e);
                "2" == d.otpType ? (r.text("手机令牌码："),
                        a.hide()) : (r.text("手机动态码："),
                        "1" == d.dynamicType || "2" == d.dynamicType ? (a.text("短信获取"),
                            s.html('<span id="sec"></span>秒后重发短信')) : "3" == d.dynamicType ? (a.text("语音获取"),
                            s.html('<span id="sec"></span>秒后重新获取')) : a.hide()),
                    l.attr("name", d.otpInputName),
                    l.attr("id", d.otpInputName),
                    c.attr("for", d.otpInputName),
                    d.otpInputTabIndex && l.attr("tabindex", d.otpInputTabIndex);
                var u = function() {
                        a.show(),
                            s.hide(),
                            w || o.hide()
                    },
                    p = function(t) {
                        var e = e = "由于您的动态码获取次数超过限制，您的手机将在" + (t ? t.lockHours : "") + "小时内无法获取动态码信息";
                        t && t.ruleType && ("0" == t.ruleType ? e = "您获取手机验证码过于频繁，请稍后再试" : "1" != t.ruleType && "2" != t.ruleType || (t.lockHours && "0" != t.lockHours ? e = "由于您的动态码获取次数超过限制，您的手机将在" + t.lockHours + "小时内无法获取动态码信息" : t.lockMins && "0" != t.lockMins && (e = "由于您的动态码获取次数超过限制，您的手机将在" + t.lockMins + "分钟内无法获取动态码信息"))),
                            LufaxPopup.popup({
                                popupTitleName: "提示",
                                message: e,
                                button: '<a class="btns btn_info confirmBtn" href="javascript:void(0);">确认</a>',
                                iconClass: "minusCircleIcon",
                                onConfirm: function() {
                                    h(),
                                        f()
                                },
                                onClose: function() {
                                    h(),
                                        f()
                                }
                            })
                    },
                    h = function() {
                        a.addClass("disabled"),
                            a.prop("disabled", !0)
                    },
                    f = function() {
                        l.prop("disabled", !0),
                            l.val("")
                    },
                    m = function(e, n) {
                        var i = t(e).closest(".control-group");
                        i.find(".input-wrap").addClass("error"),
                            "popup" == d.otpScene ? (i.find(".otp-error-for-popup").show(),
                                i.find(".otp-error-for-popup").html(n)) : (i.find(".errorPanel").css("display", "inline-block"),
                                i.find(".errorContent").html(n))
                    },
                    g = function(e) {
                        var n = t(e).closest(".control-group");
                        n.find(".input-wrap").removeClass("error"),
                            n.find(".errorPanel").hide(),
                            n.find(".otp-error-for-popup").hide()
                    },
                    v = function() {
                        var e = d.otpRequestUrl,
                            n = d.otpRequestParams;
                        "3" == d.dynamicType && (e = d.otpVoiceRequestUrl ? d.otpVoiceRequestUrl : e,
                                n = d.otpVoiceRequestParams ? d.otpVoiceRequestParams : n),
                            t.extend(n, d.otpGetRequestParams()),
                            "GET" == d.otpRequestMethod ? t.get(e, n, b) : t.post(e, n, b)
                    },
                    b = function(t) {
                        "000" === t.retCode ? x() : "018" === t.retCode ? "popup" == d.otpScene ? (otp.showErrorMsgForPopup("1", t.retCode, t.retMap),
                                otp.disableOtp(t.retMap)) : (otp.showErrorMsg("1", t.retCode, t.retMap),
                                otp.disableOtp(t.retMap)) : "021" === t.retCode && (d.otpDisablePopupError ? ("popup" == d.otpScene ? otp.showErrorMsgForPopup("1", t.retCode, t.retMap) : otp.showErrorMsg("1", t.retCode, t.retMap),
                                otp.disableSendOTPBtn(),
                                otp.disableOtpInput()) : (p(t.retMap),
                                otp.disableOtp(t.retMap))),
                            "function" == typeof d.otpRequestCallback && d.otpRequestCallback(t)
                    },
                    x = function() {
                        a.hide(),
                            s.css("display", "inline-block"),
                            "2" == d.dynamicType ? o.html("动态码已发送至您的手机" + d.otpGetMobileNo() + "，请注意查收") : "3" == d.dynamicType ? o.html("您的手机" + d.otpGetMobileNo() + "将在" + d.otpVoiceWaitTime + "内收到<br/><span>" + d.otpOfficialCall + "</span> 的电话，请接听并在120秒内输入") : "1" == d.dynamicType && ("1" == d.otpMobileType ? (o.html("动态码已发送至您的手机" + d.otpGetMobileNo() + '，请在120秒内输入，收不到短信请 <a href="javascript:void(0);" id="voiceObtainBtn">语音获取</a>'),
                                t("body").off("click", "#voiceObtainBtn"),
                                t("body").on("click", "#voiceObtainBtn", y)) : o.html("动态码已发送至您的手机" + d.otpGetMobileNo() + "，请在120秒内输入")),
                            o.show(),
                            tool.countDown.options.countDownSeconds > 0 ? tool.countDown.options.countDownSeconds = parseInt(d.otpCountDownSeconds) : tool.countDown({
                                countDownSeconds: parseInt(d.otpCountDownSeconds),
                                secondsOnly: !0,
                                callback: u
                            })
                    },
                    y = function() {
                        if (d.otpClick && d.otpClick()) {
                            g(this);
                            var e = d.otpRequestUrl,
                                n = d.otpRequestParams;
                            e = d.otpVoiceRequestUrl ? d.otpVoiceRequestUrl : e,
                                n = d.otpVoiceRequestParams ? d.otpVoiceRequestParams : n,
                                t.extend(n, d.otpGetRequestParams()),
                                "GET" == d.otpRequestMethod ? t.get(e, n, C) : t.post(e, n, C)
                        }
                    },
                    w = !1,
                    C = function(t) {
                        "000" === t.retCode ? (x(),
                                o.html("您的手机" + d.otpGetMobileNo() + "将在" + d.otpVoiceWaitTime + "内收到<span>" + d.otpOfficialCall + "</span>的电话，请接听并在120秒内输入"),
                                w = !0,
                                setTimeout(function() {
                                    w = !0,
                                        o.hide()
                                }, 1e4)) : "018" === t.retCode ? "popup" == d.otpScene ? (otp.showErrorMsgForPopup("1", t.retCode, t.retMap),
                                otp.disableOtp(t.retMap)) : (otp.showErrorMsg("1", t.retCode, t.retMap),
                                otp.disableOtp(t.retMap)) : "021" === t.retCode && (d.otpDisablePopupError ? ("popup" == d.otpScene ? otp.showErrorMsgForPopup("1", t.retCode, t.retMap) : otp.showErrorMsg("1", t.retCode, t.retMap),
                                otp.disableSendOTPBtn(),
                                otp.disableOtpInput()) : (p(t.retMap),
                                otp.disableOtp(t.retMap))),
                            "function" == typeof d.otpRequestCallback && d.otpRequestCallback(t)
                    };
                t("body").off("click", "#obtainBtn"),
                    t("body").on("click", "#obtainBtn", function() {
                        d.otpClick && d.otpClick() && (v(),
                            g(this))
                    }),
                    t(this).find(".otp-input").blur(function() {
                        var e;
                        e = "2" == d.otpType ? /^[0-9]{6}$/ : /^[0-9]{7}$/;
                        var n = t(this).val().length;
                        0 === n ? m(this, "请填写") : e.test(t(this).val()) ? g(this) : "2" == d.otpType ? m(this, "令牌码为6位数字") : m(this, "动态码为7位数字"),
                            d.otpBlur && d.otpBlur()
                    }),
                    t(this).find(".otp-input").focus(function() {
                        g(this),
                            d.otpFocus && d.otpFocus()
                    }),
                    d.otpTrigger === !0 && "2" != d.otpType && a.trigger("click"),
                    d.otpTrigger === !1 && 1 == d.otpTriggerCountDown && "2" != d.otpType && x()
            })
        }
    }(jQuery),
    function(t) {
        var e;
        window.otp = e = {},
            e.errorCode = {
                1: {
                    "011": "动态码错误或过期",
                    "012": "动态码错误或过期",
                    "009": "系统异常",
                    "018": "由于您输错:errorTimes次动态码，已被锁定，请等待:lockSeconds秒",
                    "010": "由于您输错:errorTimes次动态码，已被锁定，请等待:lockSeconds秒",
                    "014": "动态码错误或过期",
                    "021": "由于您的动态码获取次数超过限制，您的手机将在:lockHours小时内无法获取动态码信息",
                    "0210": "您获取手机验证码过于频繁，请稍后再试",
                    "021HOUR": "由于您的动态码获取次数超过限制，您的手机将在:lockHours小时内无法获取动态码信息",
                    "021MIN": "由于您的动态码获取次数超过限制，您的手机将在:lockMins分钟内无法获取动态码信息"
                },
                2: {
                    "01": ["令牌码错误", "令牌码错误，请确认您设备上的手机令牌显示的归属用户名与您的用户名是否一致"],
                    "02": "由于您:period内输错:maxFailCount次动态码，已被锁定，请等待:lockTime",
                    "03": "您已关闭手机令牌，请重新开始操作流程"
                }
            },
            e.getValue = function() {
                var e = t(".otp-input").val();
                return e
            },
            e.showPlainErrorMsg = function(e) {
                var n = t(".otp-group");
                n.find(".input-wrap").addClass("error"), !e || e.length <= 0 || (n.find(".errorPanel").css("display", "inline-block"),
                    n.find(".errorContent").html(e),
                    e.length > 20 ? n.find(".errorPanel").addClass("multipleLine") : n.find(".errorPanel").removeClass("multipleLine"))
            },
            e.showPlainErrorMsgForPopup = function(e) {
                var n = t(".otp-group");
                n.find(".input-wrap").addClass("error"), !e || e.length <= 0 || (n.find(".otp-error-for-popup").show(),
                    n.find(".otp-error-for-popup").html(e),
                    e.length > 20 ? n.find(".errorPanel").addClass("multipleLine") : n.find(".errorPanel").removeClass("multipleLine"))
            },
            e.showErrorMsg = function(n, i, a) {
                var o = t(".otp-group"),
                    s = e.parseErrorCode(n, i, a);
                o.find(".input-wrap").addClass("error"), !s || s.length <= 0 || (o.find(".errorPanel").css("display", "inline-block"),
                    o.find(".errorContent").html(s),
                    s.length > 20 ? o.find(".errorPanel").addClass("multipleLine") : o.find(".errorPanel").removeClass("multipleLine"))
            },
            e.showErrorMsgForPopup = function(n, i, a) {
                var o = t(".otp-group"),
                    s = e.parseErrorCode(n, i, a);
                o.find(".input-wrap").addClass("error"), !s || s.length <= 0 || (o.find(".otp-error-for-popup").show(),
                    o.find(".otp-error-for-popup").html(s),
                    s.length > 20 ? o.find(".errorPanel").addClass("multipleLine") : o.find(".errorPanel").removeClass("multipleLine"))
            },
            e.clearErrorMsg = function() {
                var e = t(".otp-group");
                e.find(".input-wrap").removeClass("error"),
                    e.find(".errorPanel").hide(),
                    e.find(".otp-error-for-popup").hide()
            },
            e.formatErrorMsg = function(t, e) {
                var n = [];
                for (var i in e)
                    t.indexOf(i) >= 0 && n.push(i + "=" + e[i]);
                var a = t.replace(/:(\w+)/g, function(t, n) {
                    var i = e[n];
                    return i ? i : n
                });
                return a
            },
            e.parseErrorCode = function(t, n, i) {
                var a;
                if ("2" == t)
                    if ("01" == n)
                        a = !i.failCount || i.failCount < 3 ? e.errorCode[t][n][0] : e.errorCode[t][n][1];
                    else {
                        if ("03" == n)
                            return e.tokenErrorPopup(i),
                                a;
                        "02" == n ? (e.disableOtp(i),
                            a = e.errorCode[t][n]) : a = e.errorCode[t][n]
                    }
                else
                    "018" != n && "010" != n || e.disableOtp(i),
                    "021" == n && i.ruleType && ("0" == i.ruleType ? n = "0210" : "1" != i.ruleType && "2" != i.ruleType || (i.lockHours && "0" != i.lockHours ? n = "021HOUR" : i.lockMins && "0" != i.lockMins && (n = "021MIN"))),
                    a = e.errorCode[t][n];
                return a = a ? e.formatErrorMsg(a, i) : n
            },
            e.tokenErrorPopup = function(t) {
                LufaxPopup.popup({
                    popupTitleName: "提示",
                    message: "您已关闭手机令牌，请重新开始操作流程",
                    button: '<a class="btns btn_info confirmBtn" href="javascript:void(0);">确认</a>',
                    iconClass: "minusCircleIcon",
                    onConfirm: function() {
                        window.location.reload()
                    },
                    onClose: function() {
                        window.location.reload()
                    }
                })
            },
            e.disableSendOTPBtn = function() {
                t("#obtainBtn").addClass("disabled"),
                    t("#voiceObtainBtn").addClass("disabled"),
                    t("#obtainBtn").prop("disabled", !0),
                    t("#voiceObtainBtn").prop("disabled", !0),
                    tool.countDown.options.countDownSeconds = 0
            },
            e.disableOtpInput = function() {
                t(".otp-input").prop("disabled", !0),
                    t(".otp-input").val(""),
                    t(".otp-group").find(".input-wrap").removeClass("error");
            },
            e.enableSendOTPBtn = function() {
                t("#obtainBtn").removeClass("disabled"),
                    t("#obtainBtn").removeProp("disabled"),
                    t("#voiceObtainBtn").removeClass("disabled"),
                    t("#voiceObtainBtn").removeProp("disabled")
            },
            e.enableOtpInput = function() {
                t(".otp-input").prop("disabled", !1)
            },
            e.disableOtp = function(t) {
                var n = t.lockSeconds;
                e.disableSendOTPBtn(),
                    e.disableOtpInput(),
                    setTimeout(function() {
                        e.enableSendOTPBtn(),
                            e.enableOtpInput(),
                            e.clearErrorMsg()
                    }, 1e3 * n)
            },
            e.checkOtp = function(t, n, i) {
                var a;
                a = "2" == t ? /^[0-9]{6}$/ : /^[0-9]{7}$/;
                var o = n ? n.length : 0,
                    s = !1,
                    r = "";
                return 0 === o ? r = "请填写" : a.test(n) ? (s = !0,
                        e.clearErrorMsg()) : r = "2" == t ? "令牌码为6位数字" : "动态码为7位数字",
                    s || ("popup" == i ? e.showPlainErrorMsgForPopup(r) : e.showPlainErrorMsg(r)),
                    s
            }
    }(jQuery),
    $.fn.numberstep = function(t) {
        function e(t, e) {
            var n = 120,
                i = 33,
                a = ((o.totlewidth - n) / (s - 1)).toFixed(2) - .01,
                r = (a - i).toFixed(2),
                l = 0;
            "active" == o.args[e].state && (l = o.args[e].subStep ? r * o.args[e].subStep.toFixed(2) : r);
            var c = t.replace("$state$", o.args[e].state).replace("$title$", o.args[e].title).replace("$num$", o.args[e].num).replace("$stepsWidth$", a).replace("$LineBgWidth$", r).replace("$LineWidth$", l);
            return c
        }
        var n = {
                totlewidth: t.totlewidth || $(this).parent().outerWidth(),
                args: t.args || [{
                    state: "active",
                    title: "Init",
                    num: "1"
                }]
            },
            i = '<li class="steps $state$" style="width: $stepsWidth$px" lufax-ui="numberstep"><div class="step-content"><p class="step-title">$title$</p><p class="step-num">$num$</p></div><p class="progress-line" style="width: $LineBgWidth$px"><span style="width: $LineWidth$px">&nbsp;</span></p></li>',
            a = '<li class="steps last-child $state$" lufax-ui="numberstep"><div class="step-content"><p class="step-title">$title$</p><p class="step-num">$num$</p></div></li>',
            o = $.extend(n, t),
            s = o.args.length;
        return this.each(function() {
            for (var t = "", n = 0; s - 1 > n; n++)
                t += e(i, n);
            t += e(a, n),
                $(this).addClass("com-step-wrap clearfix").css({
                    width: o.totlewidth
                }).append(t)
        })
    },
    function(t) {
        function e(e, n) {
            this.options = n,
                this.$container = t(e),
                this.state = {
                    currentStep: n.currentStep,
                    stepItems: n.steps.map(function(e) {
                        return t.extend({
                            title: "",
                            description: ""
                        }, e)
                    })
                },
                this.render()
        }
        var n = e.prototype;
        n.render = function() {
                this.$container.html(lufax.JST.steps(this.state));
                var t = 1 / this.state.stepItems.length * 100;
                this.$container.find(".ld-step").css("width", Math.floor(t) + "%")
            },
            n.nextStep = function() {
                this.state.currentStep + 1 <= this.state.stepItems.length && (this.state.currentStep += 1,
                    this.options.onStepChange(this.state.currentStep),
                    this.render())
            },
            n.lastStep = function() {
                this.state.currentStep - 1 > 0 && (this.state.currentStep -= 1,
                    this.options.onStepChange(this.state.currentStep),
                    this.render())
            },
            n.setStep = function(t) {
                t > 0 && t <= this.state.stepItems.length && (this.state.currentStep = t,
                    this.options.onStepChange(this.state.currentStep),
                    this.render())
            },
            t.fn.steps = function(n) {
                var i = Array.prototype.slice.call(arguments),
                    a = i.shift() || {};
                return n = t.extend({
                        currentStep: 1,
                        steps: [],
                        onStepChange: function() {}
                    }, n || {}),
                    this.each(function() {
                        var o = t(this),
                            s = o.data("ld.step");
                        s || o.data("ld.step", s = new e(this, n)),
                            "string" == typeof a && s[a].apply(s, i)
                    })
            }
    }(jQuery),
    function() {
        function t(t, e, n) {
            var i = this;
            i.titles = t,
                i.contents = e || [],
                i.options = n || {},
                $.extend(i, i.options),
                i.currentClass = i.currentClass || "tabs-curr",
                i.eventType = i.eventType || "mouseover",
                i.index = i.index || 0,
                i.time = i.time || 5e3,
                i.isAbleChange = !0
        }
        t.prototype._setTab = function(t, e) {
                var n = this;
                if (t.addClass(n.currentClass),
                    t.show(),
                    e.show(),
                    n.lazyload && "ok" != e.attr("lazyload")) {
                    var i = e.find("img"),
                        a = e.find("iframe");
                    i.each(function() {
                            $(this).attr("src", $(this).attr("_src"))
                        }),
                        a.attr("src", $(this).attr("_src")),
                        e.attr("lazyload", "ok")
                }
                n.mores && (n.mores.each(function() {
                        $(this).hide()
                    }),
                    n.mores.eq(n.index).show())
            },
            t.prototype._regEvent = function() {
                var t = this;
                t.titles[t.eventType](function() {
                        var e = null;
                        t.contents.length > 0 && (e = t.contents.eq(t.titles.index(this))),
                            t._selectTab($(this), e),
                            t.isAbleChange = !1
                    }),
                    t.titles.mouseout(function() {
                        t.isAbleChange = !0
                    })
            },
            t.prototype.init = function() {
                var t = this;
                t._regEvent(),
                    t.isAuto && t.auto(),
                    t.index > 0 && t.selectByIndex(t.index)
            },
            t.prototype.selectByIndex = function(t) {
                var e = this,
                    n = e.titles.eq(t),
                    i = null;
                t >= 0 && t < e.titles.length && (e.contents.length > 0 && (i = e.contents.eq(t)),
                    e._selectTab(n, i))
            },
            t.prototype.next = function() {
                var t = this;
                t.selectByIndex(t.index + 1)
            },
            t.prototype.prev = function() {
                var t = this;
                t.selectByIndex(t.index - 1)
            },
            t.prototype.auto = function() {
                var t = this;
                window.setTimeout(function() {
                    t.autoId = window.setInterval(function() {
                        t.isAbleChange && (t.next(),
                            t.index == t.titles.length - 1 && (t.index = -1))
                    }, t.time)
                }, t.time)
            },
            t.prototype._selectTab = function(t, e) {
                var n = this;
                n.titles.each(function() {
                        $(this).removeClass(n.currentClass)
                    }),
                    n.contents.each(function() {
                        $(this).hide()
                    }),
                    n.index = n.titles.index(t),
                    n._setTab(t, e),
                    n.select && n.select({
                        title: t,
                        content: e,
                        index: n.index
                    })
            },
            lufax.ui.TabSet = t
    }(),
    function(t) {
        t.flexslider = function(e, n) {
                var i = t(e);
                i.vars = t.extend({}, t.flexslider.defaults, n);
                var a, o = i.vars.namespace,
                    s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                    r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && i.vars.touch,
                    l = "click touchend MSPointerUp",
                    c = "",
                    d = "vertical" === i.vars.direction,
                    u = i.vars.reverse,
                    p = i.vars.itemWidth > 0,
                    h = "fade" === i.vars.animation,
                    f = "" !== i.vars.asNavFor,
                    m = {},
                    g = !0;
                t.data(e, "flexslider", i),
                    m = {
                        init: function() {
                            i.animating = !1,
                                i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0, 10),
                                isNaN(i.currentSlide) && (i.currentSlide = 0),
                                i.animatingTo = i.currentSlide,
                                i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last,
                                i.containerSelector = i.vars.selector.substr(0, i.vars.selector.search(" ")),
                                i.slides = t(i.vars.selector, i),
                                i.container = t(i.containerSelector, i),
                                i.count = i.slides.length,
                                i.syncExists = t(i.vars.sync).length > 0,
                                "slide" === i.vars.animation && (i.vars.animation = "swing"),
                                i.prop = d ? "top" : "marginLeft",
                                i.args = {},
                                i.manualPause = !1,
                                i.stopped = !1,
                                i.started = !1,
                                i.startTimeout = null,
                                i.transitions = !i.vars.video && !h && i.vars.useCSS && function() {
                                    var t = document.createElement("div"),
                                        e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                                    for (var n in e)
                                        if (void 0 !== t.style[e[n]])
                                            return i.pfx = e[n].replace("Perspective", "").toLowerCase(),
                                                i.prop = "-" + i.pfx + "-transform", !0;
                                    return !1
                                }(),
                                i.ensureAnimationEnd = "",
                                "" !== i.vars.controlsContainer && (i.controlsContainer = t(i.vars.controlsContainer).length > 0 && t(i.vars.controlsContainer)),
                                "" !== i.vars.manualControls && (i.manualControls = t(i.vars.manualControls).length > 0 && t(i.vars.manualControls)),
                                i.vars.randomize && (i.slides.sort(function() {
                                        return Math.round(Math.random()) - .5
                                    }),
                                    i.container.empty().append(i.slides)),
                                i.doMath(),
                                i.setup("init"),
                                i.vars.controlNav && m.controlNav.setup(),
                                i.vars.directionNav && m.directionNav.setup(),
                                i.vars.keyboard && (1 === t(i.containerSelector).length || i.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                                    var e = t.keyCode;
                                    if (!i.animating && (39 === e || 37 === e)) {
                                        var n = 39 === e ? i.getTarget("next") : 37 === e ? i.getTarget("prev") : !1;
                                        i.flexAnimate(n, i.vars.pauseOnAction)
                                    }
                                }),
                                i.vars.pausePlay && m.pausePlay.setup(),
                                i.vars.slideshow && i.vars.pauseInvisible && m.pauseInvisible.init(),
                                i.vars.slideshow && (i.vars.pauseOnHover && i.hover(function() {
                                        i.manualPlay || i.manualPause || i.pause()
                                    }, function() {
                                        i.manualPause || i.manualPlay || i.stopped || i.play()
                                    }),
                                    i.vars.pauseInvisible && m.pauseInvisible.isHidden() || (i.vars.initDelay > 0 ? i.startTimeout = setTimeout(i.play, i.vars.initDelay) : i.play())),
                                f && m.asNav.setup(),
                                r && i.vars.touch && m.touch(),
                                (!h || h && i.vars.smoothHeight) && t(window).bind("resize orientationchange focus", m.resize),
                                i.find("img").attr("draggable", "false"),
                                setTimeout(function() {
                                    i.vars.start(i)
                                }, 200)
                        },
                        asNav: {
                            setup: function() {
                                i.asNav = !0,
                                    i.animatingTo = Math.floor(i.currentSlide / i.move),
                                    i.currentItem = i.currentSlide,
                                    i.slides.removeClass(o + "active-slide").eq(i.currentItem).addClass(o + "active-slide"),
                                    s ? (e._slider = i,
                                        i.slides.each(function() {
                                            var e = this;
                                            e._gesture = new MSGesture,
                                                e._gesture.target = e,
                                                e.addEventListener("MSPointerDown", function(t) {
                                                    t.preventDefault(),
                                                        t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                                                }, !1),
                                                e.addEventListener("MSGestureTap", function(e) {
                                                    e.preventDefault();
                                                    var n = t(this),
                                                        a = n.index();
                                                    t(i.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < a ? "next" : "prev",
                                                        i.flexAnimate(a, i.vars.pauseOnAction, !1, !0, !0))
                                                })
                                        })) : i.slides.on(l, function(e) {
                                        e.preventDefault();
                                        var n = t(this),
                                            a = n.index(),
                                            s = n.offset().left - t(i).scrollLeft();
                                        0 >= s && n.hasClass(o + "active-slide") ? i.flexAnimate(i.getTarget("prev"), !0) : t(i.vars.asNavFor).data("flexslider").animating || n.hasClass(o + "active-slide") || (i.direction = i.currentItem < a ? "next" : "prev",
                                            i.flexAnimate(a, i.vars.pauseOnAction, !1, !0, !0))
                                    })
                            }
                        },
                        controlNav: {
                            setup: function() {
                                i.manualControls ? m.controlNav.setupManual() : m.controlNav.setupPaging()
                            },
                            setupPaging: function() {
                                var e, n, a = "thumbnails" === i.vars.controlNav ? "control-thumbs" : "control-paging",
                                    s = 1;
                                if (i.controlNavScaffold = t('<ol class="' + o + "control-nav " + o + a + '"></ol>'),
                                    i.pagingCount > 1)
                                    for (var r = 0; r < i.pagingCount; r++) {
                                        if (n = i.slides.eq(r),
                                            e = "thumbnails" === i.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"/>' : "<a>" + s + "</a>",
                                            "thumbnails" === i.vars.controlNav && !0 === i.vars.thumbCaptions) {
                                            var d = n.attr("data-thumbcaption");
                                            "" != d && void 0 != d && (e += '<span class="' + o + 'caption">' + d + "</span>")
                                        }
                                        i.controlNavScaffold.append("<li>" + e + "</li>"),
                                            s++
                                    }
                                i.controlsContainer ? t(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold),
                                    m.controlNav.set(),
                                    m.controlNav.active(),
                                    i.controlNavScaffold.delegate("a, img", l, function(e) {
                                        if (e.preventDefault(),
                                            "" === c || c === e.type) {
                                            var n = t(this),
                                                a = i.controlNav.index(n);
                                            n.hasClass(o + "active") || (i.direction = a > i.currentSlide ? "next" : "prev",
                                                i.flexAnimate(a, i.vars.pauseOnAction))
                                        }
                                        "" === c && (c = e.type),
                                            m.setToClearWatchedEvent()
                                    })
                            },
                            setupManual: function() {
                                i.controlNav = i.manualControls,
                                    m.controlNav.active(),
                                    i.controlNav.bind(l, function(e) {
                                        if (e.preventDefault(),
                                            "" === c || c === e.type) {
                                            var n = t(this),
                                                a = i.controlNav.index(n);
                                            n.hasClass(o + "active") || (a > i.currentSlide ? i.direction = "next" : i.direction = "prev",
                                                i.flexAnimate(a, i.vars.pauseOnAction))
                                        }
                                        "" === c && (c = e.type),
                                            m.setToClearWatchedEvent()
                                    })
                            },
                            set: function() {
                                var e = "thumbnails" === i.vars.controlNav ? "img" : "a";
                                i.controlNav = t("." + o + "control-nav li " + e, i.controlsContainer ? i.controlsContainer : i)
                            },
                            active: function() {
                                i.controlNav.removeClass(o + "active").eq(i.animatingTo).addClass(o + "active")
                            },
                            update: function(e, n) {
                                i.pagingCount > 1 && "add" === e ? i.controlNavScaffold.append(t("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(),
                                    m.controlNav.set(),
                                    i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, e) : m.controlNav.active()
                            }
                        },
                        directionNav: {
                            setup: function() {
                                function e(t) {
                                    var e, n = [i.getTarget("pre"), i.getTarget("next")];
                                    if (!i.vars.animationLoop) {
                                        if (0 === t && 0 === i.currentSlide)
                                            return;
                                        if (1 === t && i.currentSlide === i.last)
                                            return
                                    }
                                    "" !== c && c !== event.type || (e = n[t],
                                            i.flexAnimate(e, i.vars.pauseOnAction)),
                                        "" === c && (c = event.type),
                                        m.setToClearWatchedEvent()
                                }
                                var n = i.vars.prevContainer,
                                    a = i.vars.nextContainer,
                                    s = null;
                                if (n && a) {
                                    "string" == typeof n && (n = t(n)),
                                        "string" == typeof a && (a = t(a)),
                                        i.directionNav = [n, a],
                                        m.directionNav.update();
                                    for (var r = 0; 2 > r; r++)
                                        ! function() {
                                            var t = r;
                                            i.directionNav[t].bind(l, function(n) {
                                                n.preventDefault(),
                                                    e(t)
                                            })
                                        }()
                                } else
                                    s = t('<ul class="' + o + 'direction-nav"><li><a class="' + o + 'prev" href="#">' + i.vars.prevText + '</a></li><li><a class="' + o + 'next" href="#">' + i.vars.nextText + "</a></li></ul>"),
                                    i.controlsContainer ? (t(i.controlsContainer).append(s),
                                        i.directionNav = t("." + o + "direction-nav li a", i.controlsContainer)) : (i.append(s),
                                        i.directionNav = t("." + o + "direction-nav li a", i)),
                                    m.directionNav.update(),
                                    i.directionNav.bind(l, function(e) {
                                        e.preventDefault();
                                        var n;
                                        "" !== c && c !== e.type || (n = t(this).hasClass(o + "next") ? i.getTarget("next") : i.getTarget("prev"),
                                                i.flexAnimate(n, i.vars.pauseOnAction)),
                                            "" === c && (c = e.type),
                                            m.setToClearWatchedEvent()
                                    })
                            },
                            update: function() {
                                var t = "[object Array]" === Object.prototype.toString.call(i.directionNav),
                                    e = i.vars.disableState,
                                    n = e;
                                if (n || (n = o + "disabled"),
                                    t) {
                                    var a = i.directionNav;
                                    if (1 === i.pagingCount)
                                        for (var s = a.length, r = 0; s > r; r++)
                                            a[r].addClass(n).attr("tabindex", -1);
                                    else
                                        i.vars.animationLoop ? (a[0].removeClass(n).removeAttr("tabindex"),
                                            a[1].removeClass(n).removeAttr("tabindex")) : 0 === i.animatingTo ? (a[0].addClass(n).attr("tabindex", "-1"),
                                            a[1].removeClass(n)) : i.animatingTo === i.last ? (a[1].addClass(n).attr("tabindex", "-1"),
                                            a[0].removeClass(n)) : (a[0].removeClass(n).removeAttr("tabindex"),
                                            a[1].removeClass(n).removeAttr("tabindex"))
                                } else
                                    1 === i.pagingCount ? i.directionNav.addClass(n).attr("tabindex", "-1") : i.vars.animationLoop ? i.directionNav.removeClass(n).removeAttr("tabindex") : 0 === i.animatingTo ? i.directionNav.removeClass(n).filter("." + o + "prev").addClass(n).attr("tabindex", "-1") : i.animatingTo === i.last ? i.directionNav.removeClass(n).filter("." + o + "next").addClass(n).attr("tabindex", "-1") : i.directionNav.removeClass(n).removeAttr("tabindex")
                            }
                        },
                        pausePlay: {
                            setup: function() {
                                var e = t('<div class="' + o + 'pauseplay"><a></a></div>');
                                i.controlsContainer ? (i.controlsContainer.append(e),
                                        i.pausePlay = t("." + o + "pauseplay a", i.controlsContainer)) : (i.append(e),
                                        i.pausePlay = t("." + o + "pauseplay a", i)),
                                    m.pausePlay.update(i.vars.slideshow ? o + "pause" : o + "play"),
                                    i.pausePlay.bind(l, function(e) {
                                        e.preventDefault(),
                                            "" !== c && c !== e.type || (t(this).hasClass(o + "pause") ? (i.manualPause = !0,
                                                i.manualPlay = !1,
                                                i.pause()) : (i.manualPause = !1,
                                                i.manualPlay = !0,
                                                i.play())),
                                            "" === c && (c = e.type),
                                            m.setToClearWatchedEvent()
                                    })
                            },
                            update: function(t) {
                                "play" === t ? i.pausePlay.removeClass(o + "pause").addClass(o + "play").html(i.vars.playText) : i.pausePlay.removeClass(o + "play").addClass(o + "pause").html(i.vars.pauseText)
                            }
                        },
                        touch: function() {
                            function t(t) {
                                i.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (i.pause(),
                                    g = d ? i.h : i.w,
                                    b = Number(new Date),
                                    y = t.touches[0].pageX,
                                    w = t.touches[0].pageY,
                                    m = p && u && i.animatingTo === i.last ? 0 : p && u ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : u ? (i.last - i.currentSlide + i.cloneOffset) * g : (i.currentSlide + i.cloneOffset) * g,
                                    c = d ? w : y,
                                    f = d ? y : w,
                                    e.addEventListener("touchmove", n, !1),
                                    e.addEventListener("touchend", a, !1))
                            }

                            function n(t) {
                                y = t.touches[0].pageX,
                                    w = t.touches[0].pageY,
                                    v = d ? c - w : c - y,
                                    x = d ? Math.abs(v) < Math.abs(y - f) : Math.abs(v) < Math.abs(w - f);
                                var e = 500;
                                (!x || Number(new Date) - b > e) && (t.preventDefault(), !h && i.transitions && (i.vars.animationLoop || (v /= 0 === i.currentSlide && 0 > v || i.currentSlide === i.last && v > 0 ? Math.abs(v) / g + 2 : 1),
                                    i.setProps(m + v, "setTouch")))
                            }

                            function a(t) {
                                if (e.removeEventListener("touchmove", n, !1),
                                    i.animatingTo === i.currentSlide && !x && null !== v) {
                                    var o = u ? -v : v,
                                        s = o > 0 ? i.getTarget("next") : i.getTarget("prev");
                                    i.canAdvance(s) && (Number(new Date) - b < 550 && Math.abs(o) > 50 || Math.abs(o) > g / 2) ? i.flexAnimate(s, i.vars.pauseOnAction) : h || i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0)
                                }
                                e.removeEventListener("touchend", a, !1),
                                    c = null,
                                    f = null,
                                    v = null,
                                    m = null
                            }

                            function o(t) {
                                t.stopPropagation(),
                                    i.animating ? t.preventDefault() : (i.pause(),
                                        e._gesture.addPointer(t.pointerId),
                                        C = 0,
                                        g = d ? i.h : i.w,
                                        b = Number(new Date),
                                        m = p && u && i.animatingTo === i.last ? 0 : p && u ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : p && i.currentSlide === i.last ? i.limit : p ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide : u ? (i.last - i.currentSlide + i.cloneOffset) * g : (i.currentSlide + i.cloneOffset) * g)
                            }

                            function r(t) {
                                t.stopPropagation();
                                var n = t.target._slider;
                                if (n) {
                                    var i = -t.translationX,
                                        a = -t.translationY;
                                    return C += d ? a : i,
                                        v = C,
                                        x = d ? Math.abs(C) < Math.abs(-i) : Math.abs(C) < Math.abs(-a),
                                        t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                            e._gesture.stop()
                                        }) : void((!x || Number(new Date) - b > 500) && (t.preventDefault(), !h && n.transitions && (n.vars.animationLoop || (v = C / (0 === n.currentSlide && 0 > C || n.currentSlide === n.last && C > 0 ? Math.abs(C) / g + 2 : 1)),
                                            n.setProps(m + v, "setTouch"))))
                                }
                            }

                            function l(t) {
                                t.stopPropagation();
                                var e = t.target._slider;
                                if (e) {
                                    if (e.animatingTo === e.currentSlide && !x && null !== v) {
                                        var n = u ? -v : v,
                                            i = n > 0 ? e.getTarget("next") : e.getTarget("prev");
                                        e.canAdvance(i) && (Number(new Date) - b < 550 && Math.abs(n) > 50 || Math.abs(n) > g / 2) ? e.flexAnimate(i, e.vars.pauseOnAction) : h || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                                    }
                                    c = null,
                                        f = null,
                                        v = null,
                                        m = null,
                                        C = 0
                                }
                            }
                            var c, f, m, g, v, b, x = !1,
                                y = 0,
                                w = 0,
                                C = 0;
                            s ? (e.style.msTouchAction = "none",
                                e._gesture = new MSGesture,
                                e._gesture.target = e,
                                e.addEventListener("MSPointerDown", o, !1),
                                e._slider = i,
                                e.addEventListener("MSGestureChange", r, !1),
                                e.addEventListener("MSGestureEnd", l, !1)) : e.addEventListener("touchstart", t, !1)
                        },
                        resize: function() {
                            !i.animating && i.is(":visible") && (p || i.doMath(),
                                h ? m.smoothHeight() : p ? (i.slides.width(i.computedW),
                                    i.update(i.pagingCount),
                                    i.setProps()) : d ? (i.viewport.height(i.h),
                                    i.setProps(i.h, "setTotal")) : (i.vars.smoothHeight && m.smoothHeight(),
                                    i.newSlides.width(i.computedW),
                                    i.setProps(i.computedW, "setTotal")))
                        },
                        smoothHeight: function(t) {
                            if (!d || h) {
                                var e = h ? i : i.viewport;
                                t ? e.animate({
                                    height: i.slides.eq(i.animatingTo).height()
                                }, t) : e.height(i.slides.eq(i.animatingTo).height())
                            }
                        },
                        sync: function(e) {
                            var n = t(i.vars.sync).data("flexslider"),
                                a = i.animatingTo;
                            switch (e) {
                                case "animate":
                                    n.flexAnimate(a, i.vars.pauseOnAction, !1, !0);
                                    break;
                                case "play":
                                    n.playing || n.asNav || n.play();
                                    break;
                                case "pause":
                                    n.pause()
                            }
                        },
                        uniqueID: function(e) {
                            return e.find("[id]").each(function() {
                                    var e = t(this);
                                    e.attr("id", e.attr("id") + "_clone")
                                }),
                                e
                        },
                        pauseInvisible: {
                            visProp: null,
                            init: function() {
                                var t = ["webkit", "moz", "ms", "o"];
                                if ("hidden" in document)
                                    return "hidden";
                                for (var e = 0; e < t.length; e++)
                                    t[e] + "Hidden" in document && (m.pauseInvisible.visProp = t[e] + "Hidden");
                                if (m.pauseInvisible.visProp) {
                                    var n = m.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                                    document.addEventListener(n, function() {
                                        m.pauseInvisible.isHidden() ? i.startTimeout ? clearTimeout(i.startTimeout) : i.pause() : i.started ? i.play() : i.vars.initDelay > 0 ? setTimeout(i.play, i.vars.initDelay) : i.play()
                                    })
                                }
                            },
                            isHidden: function() {
                                return document[m.pauseInvisible.visProp] || !1
                            }
                        },
                        setToClearWatchedEvent: function() {
                            clearTimeout(a),
                                a = setTimeout(function() {
                                    c = ""
                                }, 3e3)
                        }
                    },
                    i.flexAnimate = function(e, n, a, s, l) {
                        if (i.vars.animationLoop || e === i.currentSlide || (i.direction = e > i.currentSlide ? "next" : "prev"),
                            f && 1 === i.pagingCount && (i.direction = i.currentItem < e ? "next" : "prev"), !i.animating && (i.canAdvance(e, l) || a) && i.is(":visible")) {
                            if (f && s) {
                                var c = t(i.vars.asNavFor).data("flexslider");
                                if (i.atEnd = 0 === e || e === i.count - 1,
                                    c.flexAnimate(e, !0, !1, !0, l),
                                    i.direction = i.currentItem < e ? "next" : "prev",
                                    c.direction = i.direction,
                                    Math.ceil((e + 1) / i.visible) - 1 === i.currentSlide || 0 === e)
                                    return i.currentItem = e,
                                        i.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"), !1;
                                i.currentItem = e,
                                    i.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"),
                                    e = Math.floor(e / i.visible)
                            }
                            if (i.animating = !0,
                                i.animatingTo = e,
                                n && i.pause(),
                                i.vars.before(i),
                                i.syncExists && !l && m.sync("animate"),
                                i.vars.controlNav && m.controlNav.active(),
                                p || i.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide"),
                                i.atEnd = 0 === e || e === i.last,
                                i.vars.directionNav && m.directionNav.update(),
                                e === i.last && (i.vars.end(i),
                                    i.vars.animationLoop || i.pause()),
                                h)
                                r ? (i.slides.eq(i.currentSlide).css({
                                        opacity: 0,
                                        zIndex: 1
                                    }),
                                    i.slides.eq(e).css({
                                        opacity: 1,
                                        zIndex: 2
                                    }),
                                    i.wrapup(x)) : (i.slides.eq(i.currentSlide).css({
                                        zIndex: 1
                                    }).animate({
                                        opacity: 0
                                    }, i.vars.animationSpeed, i.vars.easing),
                                    i.slides.eq(e).css({
                                        zIndex: 2
                                    }).animate({
                                        opacity: 1
                                    }, i.vars.animationSpeed, i.vars.easing, i.wrapup));
                            else {
                                var g, v, b, x = d ? i.slides.filter(":first").height() : i.computedW;
                                p ? (g = i.vars.itemMargin,
                                        b = (i.itemW + g) * i.move * i.animatingTo,
                                        v = b > i.limit && 1 !== i.visible ? i.limit : b) : v = 0 === i.currentSlide && e === i.count - 1 && i.vars.animationLoop && "next" !== i.direction ? u ? (i.count + i.cloneOffset) * x : 0 : i.currentSlide === i.last && 0 === e && i.vars.animationLoop && "prev" !== i.direction ? u ? 0 : (i.count + 1) * x : u ? (i.count - 1 - e + i.cloneOffset) * x : (e + i.cloneOffset) * x,
                                    i.setProps(v, "", i.vars.animationSpeed),
                                    i.transitions ? (i.vars.animationLoop && i.atEnd || (i.animating = !1,
                                            i.currentSlide = i.animatingTo),
                                        i.container.unbind("webkitTransitionEnd transitionend"),
                                        i.container.bind("webkitTransitionEnd transitionend", function() {
                                            clearTimeout(i.ensureAnimationEnd),
                                                i.wrapup(x)
                                        }),
                                        clearTimeout(i.ensureAnimationEnd),
                                        i.ensureAnimationEnd = setTimeout(function() {
                                            i.wrapup(x)
                                        }, i.vars.animationSpeed + 100)) : i.container.animate(i.args, i.vars.animationSpeed, i.vars.easing, function() {
                                        i.wrapup(x)
                                    })
                            }
                            i.vars.smoothHeight && m.smoothHeight(i.vars.animationSpeed)
                        }
                    },
                    i.wrapup = function(t) {
                        h || p || (0 === i.currentSlide && i.animatingTo === i.last && i.vars.animationLoop ? i.setProps(t, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && i.vars.animationLoop && i.setProps(t, "jumpStart")),
                            i.animating = !1,
                            i.currentSlide = i.animatingTo,
                            i.vars.after(i)
                    },
                    i.animateSlides = function() {
                        !i.animating && g && i.flexAnimate(i.getTarget("next"))
                    },
                    i.pause = function() {
                        clearInterval(i.animatedSlides),
                            i.animatedSlides = null,
                            i.playing = !1,
                            i.vars.pausePlay && m.pausePlay.update("play"),
                            i.syncExists && m.sync("pause")
                    },
                    i.play = function() {
                        i.playing && clearInterval(i.animatedSlides),
                            i.animatedSlides = i.animatedSlides || setInterval(i.animateSlides, i.vars.slideshowSpeed),
                            i.started = i.playing = !0,
                            i.vars.pausePlay && m.pausePlay.update("pause"),
                            i.syncExists && m.sync("play")
                    },
                    i.stop = function() {
                        i.pause(),
                            i.stopped = !0
                    },
                    i.canAdvance = function(t, e) {
                        var n = f ? i.pagingCount - 1 : i.last;
                        return e ? !0 : f && i.currentItem === i.count - 1 && 0 === t && "prev" === i.direction ? !0 : f && 0 === i.currentItem && t === i.pagingCount - 1 && "next" !== i.direction ? !1 : t !== i.currentSlide || f ? i.vars.animationLoop ? !0 : i.atEnd && 0 === i.currentSlide && t === n && "next" !== i.direction ? !1 : !i.atEnd || i.currentSlide !== n || 0 !== t || "next" !== i.direction : !1
                    },
                    i.getTarget = function(t) {
                        return i.direction = t,
                            "next" === t ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
                    },
                    i.setProps = function(t, e, n) {
                        var a = function() {
                            var n = t ? t : (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
                                a = function() {
                                    if (p)
                                        return "setTouch" === e ? t : u && i.animatingTo === i.last ? 0 : u ? i.limit - (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                                    switch (e) {
                                        case "setTotal":
                                            return u ? (i.count - 1 - i.currentSlide + i.cloneOffset) * t : (i.currentSlide + i.cloneOffset) * t;
                                        case "setTouch":
                                            return u ? t : t;
                                        case "jumpEnd":
                                            return u ? t : i.count * t;
                                        case "jumpStart":
                                            return u ? i.count * t : t;
                                        default:
                                            return t
                                    }
                                }();
                            return -1 * a + "px"
                        }();
                        i.transitions && (a = d ? "translate3d(0," + a + ",0)" : "translate3d(" + a + ",0,0)",
                                n = void 0 !== n ? n / 1e3 + "s" : "0s",
                                i.container.css("-" + i.pfx + "-transition-duration", n),
                                i.container.css("transition-duration", n)),
                            i.args[i.prop] = a,
                            (i.transitions || void 0 === n) && i.container.css(i.args),
                            i.container.css("transform", a)
                    },
                    i.setup = function(e) {
                        if (h)
                            i.slides.css({
                                width: "100%",
                                "float": "left",
                                marginRight: "-100%",
                                position: "relative"
                            }),
                            "init" === e && (r ? i.slides.css({
                                opacity: 0,
                                display: "block",
                                webkitTransition: "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                                zIndex: 1
                            }).eq(i.currentSlide).css({
                                opacity: 1,
                                zIndex: 2
                            }) : i.slides.css({
                                opacity: 0,
                                display: "block",
                                zIndex: 1
                            }).eq(i.currentSlide).css({
                                zIndex: 2
                            }).animate({
                                opacity: 1
                            }, i.vars.animationSpeed, i.vars.easing)),
                            i.vars.smoothHeight && m.smoothHeight();
                        else {
                            var n, a;
                            "init" === e && (i.viewport = t('<div class="' + o + 'viewport"></div>').css({
                                        overflow: "hidden",
                                        position: "relative"
                                    }).appendTo(i).append(i.container),
                                    i.cloneCount = 0,
                                    i.cloneOffset = 0,
                                    u && (a = t.makeArray(i.slides).reverse(),
                                        i.slides = t(a),
                                        i.container.empty().append(i.slides))),
                                i.vars.animationLoop && !p && (i.cloneCount = 2,
                                    i.cloneOffset = 1,
                                    "init" !== e && i.container.find(".clone").remove(),
                                    m.uniqueID(i.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).appendTo(i.container),
                                    m.uniqueID(i.slides.last().clone().addClass("clone").attr("aria-hidden", "true")).prependTo(i.container)),
                                i.newSlides = t(i.vars.selector, i),
                                n = u ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset,
                                d && !p ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"),
                                    setTimeout(function() {
                                        i.newSlides.css({
                                                display: "block"
                                            }),
                                            i.doMath(),
                                            i.viewport.height(i.h),
                                            i.setProps(n * i.h, "init")
                                    }, "init" === e ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"),
                                    i.setProps(n * i.computedW, "init"),
                                    setTimeout(function() {
                                        i.doMath(),
                                            i.newSlides.css({
                                                width: i.computedW,
                                                "float": "left",
                                                display: "block"
                                            }),
                                            i.vars.smoothHeight && m.smoothHeight()
                                    }, "init" === e ? 100 : 0))
                        }
                        p || i.slides.removeClass(o + "active-slide").eq(i.currentSlide).addClass(o + "active-slide"),
                            i.vars.init(i)
                    },
                    i.doMath = function() {
                        var t = i.slides.first(),
                            e = i.vars.itemMargin,
                            n = i.vars.minItems,
                            a = i.vars.maxItems;
                        i.w = void 0 === i.viewport ? i.width() : i.viewport.width(),
                            i.h = t.height(),
                            i.boxPadding = t.outerWidth() - t.width(),
                            p ? (i.itemT = i.vars.itemWidth + e,
                                i.minW = n ? n * i.itemT : i.w,
                                i.maxW = a ? a * i.itemT - e : i.w,
                                i.itemW = i.minW > i.w ? (i.w - e * (n - 1)) / n : i.maxW < i.w ? (i.w - e * (a - 1)) / a : i.vars.itemWidth > i.w ? i.w : i.vars.itemWidth,
                                i.visible = Math.floor(i.w / i.itemW),
                                i.move = i.vars.move > 0 && i.vars.move < i.visible ? i.vars.move : i.visible,
                                i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1),
                                i.last = i.pagingCount - 1,
                                i.limit = 1 === i.pagingCount ? 0 : i.vars.itemWidth > i.w ? i.itemW * (i.count - 1) + e * (i.count - 1) : (i.itemW + e) * i.count - i.w - e) : (i.itemW = i.w,
                                i.pagingCount = i.count,
                                i.last = i.count - 1),
                            i.computedW = i.itemW - i.boxPadding
                    },
                    i.update = function(t, e) {
                        i.doMath(),
                            p || (t < i.currentSlide ? i.currentSlide += 1 : t <= i.currentSlide && 0 !== t && (i.currentSlide -= 1),
                                i.animatingTo = i.currentSlide),
                            i.vars.controlNav && !i.manualControls && ("add" === e && !p || i.pagingCount > i.controlNav.length ? m.controlNav.update("add") : ("remove" === e && !p || i.pagingCount < i.controlNav.length) && (p && i.currentSlide > i.last && (i.currentSlide -= 1,
                                    i.animatingTo -= 1),
                                m.controlNav.update("remove", i.last))),
                            i.vars.directionNav && m.directionNav.update()
                    },
                    i.addSlide = function(e, n) {
                        var a = t(e);
                        i.count += 1,
                            i.last = i.count - 1,
                            d && u ? void 0 !== n ? i.slides.eq(i.count - n).after(a) : i.container.prepend(a) : void 0 !== n ? i.slides.eq(n).before(a) : i.container.append(a),
                            i.update(n, "add"),
                            i.slides = t(i.vars.selector + ":not(.clone)", i),
                            i.setup(),
                            i.vars.added(i)
                    },
                    i.removeSlide = function(e) {
                        var n = isNaN(e) ? i.slides.index(t(e)) : e;
                        i.count -= 1,
                            i.last = i.count - 1,
                            isNaN(e) ? t(e, i.slides).remove() : d && u ? i.slides.eq(i.last).remove() : i.slides.eq(e).remove(),
                            i.doMath(),
                            i.update(n, "remove"),
                            i.slides = t(i.vars.selector + ":not(.clone)", i),
                            i.setup(),
                            i.vars.removed(i)
                    },
                    m.init()
            },
            t(window).blur(function(t) {
                focused = !1
            }).focus(function(t) {
                focused = !0
            }),
            t.flexslider.defaults = {
                namespace: "flex-",
                selector: ".slides > li",
                animation: "fade",
                easing: "swing",
                direction: "horizontal",
                reverse: !1,
                animationLoop: !0,
                smoothHeight: !1,
                startAt: 0,
                slideshow: !0,
                slideshowSpeed: 7e3,
                animationSpeed: 600,
                initDelay: 0,
                randomize: !1,
                thumbCaptions: !1,
                pauseOnAction: !0,
                pauseOnHover: !1,
                pauseInvisible: !0,
                useCSS: !0,
                touch: !0,
                controlNav: !0,
                directionNav: !0,
                prevText: "Previous",
                nextText: "Next",
                prevContainer: "",
                nextContainer: "",
                disableState: "",
                keyboard: !0,
                multipleKeyboard: !1,
                pausePlay: !1,
                pauseText: "Pause",
                playText: "Play",
                controlsContainer: "",
                manualControls: "",
                sync: "",
                asNavFor: "",
                itemWidth: 0,
                itemMargin: 0,
                minItems: 1,
                maxItems: 0,
                move: 0,
                allowOneSlide: !0,
                start: function() {},
                before: function() {},
                after: function() {},
                end: function() {},
                added: function() {},
                removed: function() {},
                init: function() {}
            },
            t.fn.flexslider = function(e) {
                if (void 0 === e && (e = {}),
                    "object" == typeof e)
                    return this.each(function() {
                        var n = t(this),
                            i = e.selector ? e.selector : ".slides > li",
                            a = n.find(i);
                        1 === a.length && e.allowOneSlide === !0 || 0 === a.length ? (a.fadeIn(400),
                            e.start && e.start(n)) : void 0 === n.data("flexslider") && new t.flexslider(this, e)
                    });
                var n = t(this).data("flexslider");
                switch (e) {
                    case "play":
                        n.play();
                        break;
                    case "pause":
                        n.pause();
                        break;
                    case "stop":
                        n.stop();
                        break;
                    case "next":
                        n.flexAnimate(n.getTarget("next"), !0);
                        break;
                    case "prev":
                    case "previous":
                        n.flexAnimate(n.getTarget("prev"), !0);
                        break;
                    default:
                        "number" == typeof e && n.flexAnimate(e, !0)
                }
            }
    }(jQuery),
    function() {
        var t = {
            init: function() {
                var t = this;
                t.init_checkbox(".form-checkbox"),
                    t.init_radio(".form-radio"),
                    $(".form_text").not(".pwd,.cal").each(function() {
                        var t = $(this);
                        $(this).find("input").width(t.width() - t.find(".icon").width() - t.find(".last").width() - 10)
                    }),
                    $(".form_textarea").each(function() {
                        $(this).find("textarea").width($(this).width() - 6).height($(this).height() - 6)
                    }).find("textarea").focus(function() {
                        $(this).parents(".form_textarea").addClass("form_textarea_focus")
                    }).blur(function() {
                        $(this).parents(".form_textarea").removeClass("form_textarea_focus")
                    }),
                    $(".form_text").find(":text,:password").focus(function() {
                        $(this).parents(".form_text").addClass("text_focus")
                    }).blur(function() {
                        $(this).parents(".form_text").removeClass("text_focus")
                    }),
                    $(".prompting .leftarrow,.prompting .greyarrow").each(function() {
                        $(this).find(".left_border").height($(this).height() - $(this).find(".left_top_corner").height() - $(this).find(".left_bottom_corner").height()).children("span").height($(this).find(".left_border").height()),
                            $(this).find(".right_border").height($(this).height() - $(this).find(".right_top_corner").height() - $(this).find(".right_bottom_corner").height()).children("span").height($(this).find(".right_border").height()),
                            $(this).hasClass("leftarrow") ? $(this).find(".prompting_main").height($(this).height() - 2) : $(this).find(".prompting_main").height($(this).height())
                    }),
                    $(".prompting .leftarrowgold").each(function() {
                        $(this).find(".left_border").height($(this).height() - $(this).find(".left_top_corner").height() - $(this).find(".left_bottom_corner").height()).children("span").height($(this).find(".left_border").height()),
                            $(this).find(".right_border").height($(this).height() - $(this).find(".right_top_corner").height() - $(this).find(".right_bottom_corner").height()).children("span").height($(this).find(".right_border").height()),
                            $(this).hasClass("leftarrowgold") ? $(this).find(".prompting_main").height($(this).height() - 2) : $(this).find(".prompting_main").height($(this).height())
                    }),
                    $(".prompting .toprightarrow,.prompting .topleftarrow").each(function() {
                        $(this).find(".top_center").width($(this).width() - $(this).find(".top_left_corner").width() - $(this).find(".top_right_corner").width()),
                            $(this).find(".bottom_center").width($(this).width() - $(this).find(".bottom_left_corner").width() - $(this).find(".bottom_right_corner").width())
                    }),
                    $(".form_search").find(":text").focus(function() {
                        $(this).parents(".form_search").addClass("focus")
                    }).blur(function() {
                        $(this).parents(".form_search").removeClass("focus")
                    }),
                    $(".form_select>div,.form_select>span").live("click", function() {
                        var t = $(this);
                        t.next("ul").toggle(),
                            $(".form_select").css({
                                "z-index": 0
                            }),
                            t.parent(".form_select").css({
                                "z-index": 1
                            }),
                            t.parent().addClass("focus-form"),
                            t.next("ul").find("li").each(function() {
                                t.find("a").attr("data-value") == t.find("a").attr("data-value") && t.find("a").addClass("select")
                            })
                    }),
                    $(".form_select>ul>li").live("click", function() {
                        $(this).parent().next().children("option").eq($(this).parent().children("li").index($(this))).prop("selected", !0);
                        var t = $(this).parent().prev().find("a");
                        t.text($(this).text()),
                            t.attr("data-value", $(this).find("a").attr("data-value")),
                            $(this).each(function() {
                                $(this).parent().find("a").removeClass("select")
                            }),
                            $(this).find("a").addClass("select"),
                            $(this).parent("ul").hide()
                    }),
                    $(document).click(function(t) {
                        var e = $(t.target).parents(".form_select");
                        $(".form_select").not(e).removeClass("focus-form").find("ul").hide()
                    }),
                    $(".inputs , .textareas, .input-wrap .input , .input-wrap .textarea").live({
                        focus: function() {
                            $(this).parent().addClass("focus-form")
                        },
                        blur: function() {
                            $(this).parent().removeClass("focus-form")
                        }
                    }),
                    t.selectShow()
            },
            init_checkbox: function(t) {
                var e = this;
                $(t).each(function() {
                    e.checkboxHandler(this, "init")
                })
            },
            init_radio: function(t) {
                var e = this;
                $(t).each(function() {
                    e.radioHandler(this, "init")
                })
            },
            checkboxHandler: function(t, e) {
                var n = {
                    check_el: $(t).find(":checkbox"),
                    init: e || ""
                };
                if (n.init.length > 0) {
                    if ("checked" === n.check_el.attr("checked") || "disabled" === n.check_el.attr("disabled"))
                        return;
                    n.check_el.prop("checked", !1),
                        n.check_el.attr("checked", !1)
                }
            },
            radioHandler: function(t, e) {
                var n = {
                    check_el: $(t).find(":radio"),
                    init: e || ""
                };
                if (n.init.length > 0) {
                    if ("checked" === n.check_el.attr("checked") || "disabled" === n.check_el.attr("disabled"))
                        return !1;
                    n.check_el.prop("checked", !1),
                        n.check_el.attr("checked", !1)
                }
            },
            selectShow: function() {
                $(".form_select").each(function() {
                    var t, e = "";
                    if (e = $(this).hasClass("show_last") ? 0 === $(this).find("option:[isDefault]").length ? $(this).find("option:last") : $(this).find("option:[isDefault]") : $(this).find("option:selected").length > 0 ? $(this).find("option:selected") : $(this).find("option:first"),
                        $(this).find("a").length > 0) {
                        if ("" === $(this).find("a").text())
                            for ($(this).find("a").text(e.text()),
                                t = 0; t < $(this).find("option").length; t++)
                                $(this).find("ul").append("<li><a href='javascript:void(0)' title='" + $(this).find("option").eq(t).text() + "'>" + $(this).find("option").eq(t).text() + "</a></li>")
                    } else
                        for ($(this).hasClass("ullh") ? $(this).prepend("<div><a class='selected-display' data-value=" + e.val() + ">" + e.text() + "</a></div><ul></ul>") : $(this).prepend("<div><span><a class='selected-display' data-value=" + e.val() + ">" + e.text() + "</a></span></div><ul></ul>"),
                            t = 0; t < $(this).find("option").length; t++) {
                            var n = $(this).find("option").eq(t).val(),
                                i = $(this).find("option").eq(t).text();
                            $(this).find("ul").append("<li><a href='javascript:void(0)' title=" + i + " data-value=" + n + ">" + i + "</a></li>")
                        }
                    var a = $(this).children("div");
                    $(this).hasClass("ullh") ? $(this).find("ul").css({
                        left: 0,
                        width: a.outerWidth() - 2,
                        top: a.outerHeight() + 2
                    }) : $(this).find("ul").width($(this).width() - 2)
                })
            }
        };
        lufax.ui.form = t,
            lufax.form = lufax.ui.form
    }(this),
    $(function() {
        lufax.form.init()
    }),
    function() {
        function t(t) {
            var n = this,
                i = {
                    handler: null,
                    duration: 500,
                    pageHeight: 400,
                    showMessage: !0,
                    showHelp: !1,
                    showPhone: !0,
                    showHire: !0,
                    showQuestion: !1,
                    showExperienceProgram: !0,
                    showQrcodeWhenShown: !1,
                    relatedEl: ".main-wrap, .main-wide-wrap",
                    help_link: "//www." + e + "/help/help_search.html",
                    link: "//contact." + e + "/uic/survey/view.html?id=82c89cab58b34d8d83baf4a919b33596",
                    messageLink: "//common." + e + "/common/cs/chat",
                    experienceProgramLink: "//contact." + e + "/uic/uecenter/index",
                    hireLink: "//promo." + e + "/activity-pages/job-20150213/index.html"
                };
            n.topOptions = $.extend(i, t),
                n.topOptions.handler && n.initOldTop(),
                n.init()
        }
        var e = location.hostname.replace(/^[^.]*\./, "");
        t.prototype.init = function() {
                var t = this;
                t._initStructure(),
                    t._initStatus(),
                    t._initEvents(),
                    setTimeout(function() {
                        t.hideQrcode()
                    }, 3e3)
            },
            t.prototype._initStructure = function() {
                var t = this.topOptions,
                    e = ['<a id="question_link" href="$"  target="_blank" class="question top-block">', '<span class="text">有奖调研</span>', '<span class="icon">&nbsp</span>', "</a>"].join(""),
                    n = ['<p id="phone_link" class="phone top-block">', '<span class="qrcode-icon"></span>', '<span class="text">手机APP</span>', '<span class="icon">&nbsp</span>', "</p>"].join(""),
                    i = ['<a id="experience_program_link" href="$"  target="_blank" class="experience-program top-block">', '<span class="text">体验中心</span>', '<span class="icon">&nbsp</span>', "</a>"].join(""),
                    a = ['<a id="message_link" href="$" target="_blank" class="message top-block" data-sk="Float_CustmerService">', '<span class="text">在线客服</span>', '<span class="icon">&nbsp</span>', "</a>"].join(""),
                    o = ['<a id="hire_link" href="$"  target="_blank" class="hire top-block">', '<span class="text">招聘中心</span>', '<span class="icon">&nbsp</span>', "</a>"].join(""),
                    s = ['<p id="top_link" class="top top-block">', '<span class="text">返回顶部</span>', '<span class="icon">&nbsp</span>', "</p>"].join(""),
                    r = ['<a id="help_link" href="$"  target="_blank" class="help top-block">', '<span class="text">提问</span>', '<span class="icon">&nbsp</span>', "</a>"].join(""),
                    l = '<div class="top-question-container" lufax-ui="top">';
                t.showQuestion && (l += e),
                    t.showPhone && (l += n),
                    t.showHelp && (l += r),
                    t.showExperienceProgram && (l += i),
                    t.showMessage && (l += a),
                    t.showHire && (l += o),
                    l += s,
                    l += "</div>",
                    $("body").append(l)
            },
            t.prototype._initStatus = function() {
                var t = this.topOptions;
                $("#help_link").attr("href", t.help_link),
                    $("#question_link").attr("href", t.link),
                    $("#message_link").attr("href", t.messageLink),
                    $(".top-question-container .calc").attr("href", t.calcLink),
                    $(".top-question-container .hire").attr("href", t.hireLink),
                    $("#experience_program_link").attr("href", t.experienceProgramLink),
                    $(window).scrollTop() > t.pageHeight ? $("#top_link").css({
                        display: "block"
                    }) : $("#top_link").css({
                        display: "none"
                    }),
                    t.showQrcodeWhenShown ? $(".qrcode-icon").show() : $(".qrcode-icon").hide();
                var e = 0;
                t.showPhone && (e += $("#phone_link").outerHeight(!0)),
                    t.showMessage && (e += $("#message_link").outerHeight(!0)),
                    t.showHelp && (e += $("#help_link").outerHeight(!0)),
                    t.showHire && (e += $("#hire_link").outerHeight(!0)),
                    t.showQuestion && (e += $("#question_link").outerHeight(!0)),
                    t.showExperienceProgram && (e += $("#experience_program_link").outerHeight(!0)),
                    $(".top-question-container").css({
                        height: e + 41
                    }),
                    this.setPosition()
            },
            t.prototype._initEvents = function() {
                var t = this,
                    e = this.topOptions;
                $("#top_link").on("click", function() {
                        $(this).click(function() {
                                $("html,body").stop(!0, !0)
                            }),
                            $("html,body").animate({
                                scrollTop: 0
                            }, e.duration)
                    }),
                    $("#phone_link").hover(function() {
                        t.showQrcode()
                    }, function() {
                        t.hideQrcode()
                    }),
                    $(window).scroll(function() {
                        $(window).scrollTop() > e.pageHeight ? $("#top_link").css({
                            display: "block"
                        }) : $("#top_link").css({
                            display: "none"
                        })
                    }).on("resize", function() {
                        t.setPosition()
                    })
            },
            t.prototype.setPosition = function() {
                var t = this.topOptions.relatedEl;
                if (t) {
                    "string" == typeof t && (t = $(t));
                    var e = t.outerWidth(),
                        n = ($(window).width() - e) / 2,
                        i = 0,
                        a = $(".top-question-container").outerWidth();
                    i = n > 40 + a ? n - 20 - a : 20,
                        $(".top-question-container").css("right", i)
                }
            },
            t.prototype.hideQrcode = function() {
                $(".qrcode-icon").hide()
            },
            t.prototype.showQrcode = function() {
                $(".qrcode-icon").show()
            },
            t.prototype.initOldTop = function() {
                function t(t) {
                    var e = 0;
                    e = i.border ? $(t).parent().outerWidth() - 1 : $(t).parent().outerWidth(),
                        $(t).parent().attr("style", "position:relative;"),
                        $(t).attr("style", "margin-left:" + e + "px;"),
                        $(window).scrollTop() > 300 && $(t).stop(!0, !0).show()
                }
                var e = this,
                    n = this.topOptions.handler,
                    i = this.topOptions;
                return n.each(function() {
                    $(window).scroll(function() {
                            t(n)
                        }),
                        $(this).on("click", function() {
                            $("html,body").animate({
                                scrollTop: 0
                            }, e.topOptions.duration)
                        })
                })
            },
            lufax.ui.GoTop = t
    }(),
    function() {
        function t(t) {
            var e = this;
            e.container = t
        }
        t.prototype = {
                template: '<div class="lufax-ui-capslock" lufax-ui="detectCapsLock">大写状态开启</div>',
                init: function() {
                    var t = this,
                        e = t.container;
                    e.focus(function() {
                        $(this).keypress(function(e) {
                            t.oTip || (t.oTip = $(t.template).appendTo("body"));
                            var n = e.keyCode || e.which,
                                i = e.shiftKey || 16 == n || !1;
                            n >= 65 && 90 >= n && !i || n >= 97 && 122 >= n && i ? t._tipOffset(this) : t.oTip.hide()
                        })
                    }).blur(function() {
                        t.oTip && t.oTip.hide()
                    })
                },
                _tipOffset: function(t) {
                    var e = this,
                        n = $(t).offset(),
                        i = n.top,
                        a = n.left,
                        o = e.oTip.outerHeight();
                    e.oTip.css({
                        left: a,
                        top: i - o
                    }).show()
                }
            },
            lufax.ui.DetectCapsLock = t
    }(this),
    function(t) {
        function e() {}
        e.prototype = {
                simplePopupTemplate: '<div class="modal-dialog timeout_safe_exit ${imgClass}" lufax-ui="popup"><div class="border"> <table><tbody><tr><td><div class="logo">&nbsp;</div></td><td class="detail"><p class="title">${title}</p><p class="content">${content}</p><div class="clearfix">${button}</div></td></tr></tbody></table></div></div>',
                blankTemplate: '<div class="modal-dialog popup_wrap blankPopup" lufax-ui="popup">${content}</div>',
                newIconPopupTemplate: '<div class="modal-dialog popup_wrap" lufax-ui="popup"><div class="modal-content" style="width: ${contentWidth}"><div class="modal-header clearfix">${closeDisplay}<h4 class="modal-title">${popupTitleName}</h4></div><div class="modal-body" style="padding: ${bodyPadding}"><i class="iconV2 ${iconClass}"></i><span class="message"  style="width:${messageWidth}">${message}</span></div><div class="modal-footer">${button}</div></div></div>',
                newBigIconPopupTemplate: '<div class="modal-dialog popup_wrap"><div class="modal-content migrate_add1" ><div class="modal-header clearfix">${closeDisplay}<h4 class="modal-title">${popupTitleName}</h4></div><div class="modal-body migrate_add2" ><i class="iconV2 ${iconClass}"></i><span class="message" >${message}</span></div></div></div>',
                newIconPopupSubtitleTemplate: '<div class="modal-dialog popup_wrap popup_wrap_subtitle ${privateClass}" lufax-ui="popup"><div class="modal-content" style="width: ${contentWidth}"><div class="modal-header clearfix">${closeDisplay}<h4 class="modal-title">${popupTitleName}</h4></div><div class="modal-body clearfix" style="padding: ${bodyPadding}"><i class="iconV2 ${iconClass}"></i><span class="message"  style="width:${messageWidth}">${subTitle}</span><div class="content">${contents}</div></div><div class="modal-footer">${button}</div></div></div>',
                richPopupTemplate: '<div class="modal-dialog popup_wrap commission_wrap ${privateClass}"><div class="modal-content" style="width: ${contentWidth}"><div class="modal-header clearfix"><div class="close"><a class="modal-close" href="javascript:void(0);"></a></div><h4 class="modal-title">${title}</h4></div><div class="modal-body clearfix" style="padding: ${bodyPadding}"><div class="affiliate-content">${content}</div></div><div class="modal-footer">${foot}</div></div></div>',
                _getConfirmButtonSelector: function() {
                    var t = this;
                    return t._getButtonSelector("confirmBtn")
                },
                _getCancelButtonSelector: function() {
                    var t = this;
                    return t._getButtonSelector("cancleBtn")
                },
                _getCloseButtonSelector: function() {
                    var t = this;
                    return t._getButtonSelector("close")
                },
                _getButtonSelector: function(t) {
                    return "." + t
                },
                _close: function() {
                    $.unblockUI()
                },
                _closableBinding: function(t) {
                    var e = this;
                    return function() {
                        e._close(),
                            t && t()
                    }
                },
                _formatMessage: function(t, e) {
                    return e ? t.replace(/\$\{(.+?)\}/g, function(t, n) {
                        return e[n]
                    }) : t
                },
                _openPopupWindow: function(t) {
                    var e = this;
                    void 0 !== t.onClose && (LufaxPopup.options = t),
                        $.blockUI({
                            message: $(e._formatMessage(t.template, t.args))
                        }),
                        e._setPopupPosition(),
                        $(e._getCloseButtonSelector()).die("click"),
                        $(e._getCloseButtonSelector()).live("click", e._closableBinding(t.onCancel)),
                        t.bindings && $.each(t.bindings, function(t, e) {
                            $(e.selector).die("click"),
                                $(e.selector).live("click", e.func)
                        })
                },
                _setPopupPosition: function() {
                    var e = $(t).width(),
                        n = $(t).height(),
                        i = $(".modal-dialog:last").outerWidth(),
                        a = $(".modal-dialog:last").outerHeight();
                    i && a && $(".blockMsg").css("top", (n - a) / 2 + "px").css("left", (e - i) / 2 + "px")
                },
                simplePopup: function(t) {
                    var e = this,
                        n = {},
                        i = $.extend("", n, t);
                    e._openPopupWindow({
                        template: e.simplePopupTemplate,
                        args: {
                            imgClass: i.imgClass,
                            title: i.title,
                            content: i.content,
                            button: i.button
                        },
                        bindings: [{
                            selector: e._getConfirmButtonSelector(),
                            func: e._closableBinding(i.onConfirm)
                        }, {
                            selector: e._getCancelButtonSelector(),
                            func: e._closableBinding(i.onCancel)
                        }]
                    })
                },
                blankPopup: function(t) {
                    this.options = t;
                    var e = this;
                    e._openPopupWindow({
                        template: e.blankTemplate,
                        args: {
                            content: t.content || ""
                        },
                        bindings: [{
                            selector: e._getConfirmButtonSelector(),
                            func: e._closableBinding(t.onConfirm)
                        }, {
                            selector: e._getCloseButtonSelector(),
                            func: e._closableBinding(t.onClose)
                        }, {
                            selector: e._getCancelButtonSelector(),
                            func: e._closableBinding(t.onCancel)
                        }]
                    })
                },
                richPopup: function(t) {
                    var e = this,
                        n = {},
                        i = $.extend("", n, t);
                    e._openPopupWindow({
                        template: e.richPopupTemplate,
                        args: {
                            contentWidth: t.contentWidth || "526px",
                            bodyPadding: t.bodyPadding || "25px 50px",
                            messageWidth: t.messageWidth || "400px",
                            privateClass: i.privateClass,
                            title: i.title,
                            content: i.content,
                            foot: i.foot
                        },
                        bindings: [{
                            selector: e._getCancelButtonSelector(),
                            func: e._closableBinding(i.onCancel)
                        }]
                    })
                },
                newIconPopup: function(t) {
                    var e = this;
                    this.options = t,
                        e._openPopupWindow({
                            template: e.newIconPopupTemplate,
                            args: {
                                contentWidth: t.contentWidth || "526px",
                                bodyPadding: t.bodyPadding || "25px 50px",
                                messageWidth: t.messageWidth || "400px",
                                popupTitleName: t.popupTitleName || "",
                                iconClass: t.iconClass,
                                message: e._formatMessage(t.message, t.args) || t,
                                button: t.button,
                                closeDisplay: "false" == t.closeDisplay ? "" : '<div class="close"><a class="modal-close" href="javascript:void(0);"></a></div>'
                            },
                            css: t.css,
                            bindings: [{
                                selector: e._getConfirmButtonSelector(),
                                func: e._closableBinding(t.onConfirm)
                            }, {
                                selector: e._getCloseButtonSelector(),
                                func: e._closableBinding(t.onClose)
                            }, {
                                selector: e._getCancelButtonSelector(),
                                func: e._closableBinding(t.onCancel)
                            }]
                        })
                },
                newBigIconPopup: function(t) {
                    var e = this;
                    this.options = t,
                        e._openPopupWindow({
                            template: e.newBigIconPopupTemplate,
                            args: {
                                popupTitleName: t.popupTitleName || "",
                                iconClass: t.iconClass,
                                message: e._formatMessage(t.message, t.args) || t,
                                button: t.button,
                                closeDisplay: "false" == t.closeDisplay ? "" : '<div class="close"><a class="modal-close" href="javascript:void(0);"></a></div>'
                            },
                            css: t.css,
                            bindings: [{
                                selector: e._getConfirmButtonSelector(),
                                func: e._closableBinding(t.onConfirm)
                            }, {
                                selector: e._getCloseButtonSelector(),
                                func: e._closableBinding(t.onClose)
                            }, {
                                selector: e._getCancelButtonSelector(),
                                func: e._closableBinding(t.onCancel)
                            }]
                        })
                },
                newIconPopupSubTitle: function(t) {
                    var e = this;
                    this.options = t,
                        e._openPopupWindow({
                            template: e.newIconPopupSubtitleTemplate,
                            args: {
                                contentWidth: t.contentWidth || "526px",
                                bodyPadding: t.bodyPadding || "25px 50px",
                                messageWidth: t.messageWidth || "400px",
                                privateClass: t.privateClass,
                                popupTitleName: t.popupTitleName || "",
                                iconClass: t.iconClass,
                                subTitle: e._formatMessage(t.subTitle, t.args) || t,
                                contents: e._formatMessage(t.contents, t.args) || t,
                                button: t.button,
                                closeDisplay: "false" == t.closeDisplay ? "" : '<div class="close"><a class="modal-close" href="javascript:void(0);"></a></div>'
                            },
                            css: t.css,
                            bindings: [{
                                selector: e._getConfirmButtonSelector(),
                                func: e._closableBinding(t.onConfirm)
                            }, {
                                selector: e._getCloseButtonSelector(),
                                func: e._closableBinding(t.onClose)
                            }, {
                                selector: e._getCancelButtonSelector(),
                                func: e._closableBinding(t.onCancel)
                            }]
                        })
                }
            },
            lufax.ui.popup = e,
            lufax.ui.popup = new e,
            lufax.popup = lufax.ui.popup
    }(this),
    function(t) {
        function e(e, n) {
            var i = t(e).offset(),
                a = i.top,
                s = i.left,
                r = n.leftOffset,
                l = n.topOffset,
                c = "",
                d = "",
                u = "",
                p = "",
                h = a + t(e).outerHeight(),
                f = t(window).height(),
                m = s + t(e).outerWidth(),
                g = t(window).width(),
                v = o.outerWidth(),
                b = o.outerHeight(),
                x = s + v + r - t(document).scrollLeft(),
                y = h + b + l - t(document).scrollTop();
            y >= f && g > x ? (u = f - a + n.topOffset,
                    c = a - b - l,
                    d = s + r,
                    o.css({
                        left: d,
                        top: c
                    })) : y >= f && x >= g ? (d = m - v,
                    c = a - b - l,
                    o.css({
                        left: d,
                        top: c
                    })) : f > y && g > x ? (d = s + r,
                    c = h + l,
                    o.css({
                        left: d,
                        top: c
                    })) : f > y && x >= g && (p = g - m,
                    c = h + l,
                    d = m - v,
                    o.css({
                        left: d,
                        top: c
                    })),
                o.show()
        }

        function n(t, n) {
            "" === n.tipsWidth && (n.flagInfo && n.flagInfo.length > 30 ? n.tipsWidth = 350 : n.tipsWidth = "auto"),
                o.html(n.flagInfo),
                o.css({
                    "background-color": n.bgColor,
                    "border-color": n.borderColor,
                    width: n.tipsWidth
                }),
                o.css({
                    left: "",
                    right: "",
                    top: "",
                    bottom: ""
                }),
                e(t, n)
        }
        var i, a, o;
        i = {
                bgColor: "#FFFCF0",
                borderColor: "#FDBA7B",
                flagInfo: "",
                topOffset: 10,
                leftOffset: 0,
                holding: !1,
                placeStyle: "offset",
                tipsWidth: "",
                holdingTime: 150
            },
            a = '<p class="mouseTips" lufax-ui="mouseTips"></p>',
            t.fn.mouseTips = function(e) {
                return o = t(".mouseTips"),
                    o.length <= 0 && (o = t(a),
                        t("body").append(o)),
                    o.off("mouseenter.mouseTips mouseleave.mouseTips").on({
                        "mouseenter.mouseTips": function() {
                            clearTimeout(o.data("timeoutId"))
                        },
                        "mouseleave.mouseTips": function() {
                            o.data("timeoutId", setTimeout(function() {
                                o.hide()
                            }, o.data("holdingTime")))
                        }
                    }),
                    this.each(function() {
                        var a, s, r;
                        a = t(this),
                            s = t.extend({}, i, {
                                flagInfo: a.attr("title")
                            }, e),
                            r = t.trim(s.flagInfo),
                            "" !== r && (a.removeAttr("title"),
                                a.on({
                                    "mouseenter.mouseTips": function() {
                                        clearTimeout(o.data("timeoutId")),
                                            n(this, s)
                                    },
                                    "mouseleave.mouseTips": function() {
                                        s.holding ? (o.data("holdingTime", s.holdingTime),
                                            o.data("timeoutId", setTimeout(function() {
                                                o.hide()
                                            }, s.holdingTime))) : o.hide()
                                    }
                                }))
                    })
            }
    }(jQuery),
    jQuery.fn.pagination = function(t, e) {
        return e = jQuery.extend({
                num_display_entries: 6,
                current_page: 0,
                num_edge_entries: 2,
                link_to: "javascript:void(0)",
                prev_text: '<span class="caret">&lt;</span> 上一页',
                next_text: '下一页 <span class="caret">&gt;</span>',
                first_text: "首页",
                last_text: "尾页",
                ellipse_text: "...",
                prev_show_always: !0,
                next_show_always: !0,
                callback: function() {
                    return !1
                }
            }, e || {}),
            this.each(function() {
                function n() {
                    return t
                }

                function i() {
                    var t = Math.ceil(e.num_display_entries / 2),
                        i = n(),
                        a = i - e.num_display_entries,
                        o = s > t ? Math.max(Math.min(s - t, a), 0) : 0,
                        r = s > t ? Math.min(s + t, i) : Math.min(e.num_display_entries, i);
                    return [o, r]
                }

                function a(t, n) {
                    function i(t) {
                        return function() {
                            o(t)
                        }
                    }
                    s = t;
                    var a = e.callback(t + 1, i(s));
                    return a || (n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0),
                        a
                }

                function o(o) {
                    r.empty();
                    var s = (i(),
                            n()),
                        l = function(t) {
                            return function(e) {
                                return a(t, e)
                            }
                        },
                        c = function(t, e) {
                            var n = "<p class='pageNum'>第" + Number(t + 1) + "页/共" + e + "页</p>";
                            r.append(n)
                        },
                        d = function(t, n, i) {
                            if (t = 0 > t ? 0 : s > t ? t : s - 1,
                                i = jQuery.extend({
                                    text: t + 1,
                                    classes: ""
                                }, i || {}),
                                o == n)
                                var a = jQuery("<span class='btns disabled btn_page btn_small' lufax-ui='pagination'>" + i.text + "</span>");
                            else
                                var a = jQuery("<a class='btns btn_page btn_small' lufax-ui='pagination'>" + i.text + "</a>").bind("click", l(t)).attr("href", e.link_to.replace(/__id__/, t));
                            i.classes && a.addClass(i.classes),
                                r.append(a)
                        },
                        u = function(t, e) {
                            d(t, 0, e)
                        },
                        p = function(e, n) {
                            d(e, t - 1, n)
                        };
                    e.prev_text && (o > 0 || e.prev_show_always) && (u(0, {
                                text: e.first_text,
                                classes: "first"
                            }),
                            u(o - 1, {
                                text: e.prev_text,
                                classes: "prev"
                            })),
                        c(o, t),
                        e.next_text && (s - 1 > o || e.next_show_always) && (p(o + 1, {
                                text: e.next_text,
                                classes: "next"
                            }),
                            p(t - 1, {
                                text: e.last_text,
                                classes: "last"
                            }))
                }
                var s = e.current_page,
                    r = jQuery(this);
                this.selectPage = function(t) {
                        a(t)
                    },
                    this.prevPage = function() {
                        return s > 0 ? (a(s - 1), !0) : !1
                    },
                    this.nextPage = function() {
                        return s < n() - 1 ? (a(s + 1), !0) : !1
                    },
                    t > 1 ? o(s) : r.empty()
            })
    },
    function(t) {
        function e(t, e) {
            var n;
            for (n = 0; n < e.length; n++)
                if (t == e[n])
                    return !0;
            return !1
        }

        function n(t, e) {
            var n;
            for (n = 0; n < t.length; n++)
                e(t[n], n)
        }

        function i(e, n) {
            this.options = n,
                this.$container = t(e),
                this.state = {
                    currentPage: n.currentPage
                },
                this.render(),
                this.bindEvents()
        }
        var a = i.prototype;
        a._getRenderData = function(i, a) {
                var o, s = [];
                if (a > 5) {
                    s.push(i),
                        s.push(i - 1),
                        s.push(i - 2),
                        s.push(i + 1),
                        s.push(i + 2),
                        2 >= i && (s.push(4),
                            s.push(5)),
                        i > a - 2 && (s.push(a - 3),
                            s.push(a - 4)),
                        this.options.hideEndPage ? s.push(1, 2) : s.push(1, 2, a);
                    var r = [];
                    t.each(s, function(t, e) {
                            e > 0 && a >= e && r.push(e)
                        }),
                        s = r,
                        r = [],
                        n(s, function(t) {
                            e(t, r) || r.push(t)
                        }),
                        s = r.sort(function(t, e) {
                            return t > e ? 1 : e > t ? -1 : 0
                        }),
                        r = [],
                        n(s, function(t, e) {
                            e > 0 && "..." !== s[e - 1] && t > s[e - 1] + 1 ? r.push("...", t) : r.push(t)
                        }),
                        s = r,
                        this.options.hideEndPage && s[s.length - 1] != a && s.push("...")
                } else if (a > 0)
                    for (o = 0; a > o; o++)
                        s.push(o + 1);
                return s
            },
            a.getRenderData = function() {
                var t, e = {
                        showLastPage: !0,
                        showNextPage: !0,
                        pageItems: []
                    },
                    n = this.state.currentPage || 1,
                    i = this.options.pageCount || 0;
                0 > n && (n = 1),
                    n > i && (n = i),
                    1 == n && (e.lastPageDisabled = !0),
                    n == i && (e.nextPageDisabled = !0),
                    1 >= i && (e.showLastPage = !1,
                        e.showNextPage = !1);
                var a, o = this._getRenderData(n, i);
                for (t = 0; t < o.length; t++)
                    a = o[t],
                    "..." == a ? e.pageItems.push({
                        type: "more"
                    }) : a == n ? e.pageItems.push({
                        type: "page",
                        page: a,
                        text: a,
                        current: !0
                    }) : e.pageItems.push({
                        type: "page",
                        page: a,
                        text: a
                    });
                return e
            },
            a.render = function() {
                this.$container.html(lufax.JST.paging(this.getRenderData()))
            },
            a.bindEvents = function() {
                var e = this;
                this.$container.on("click.ldPaging", ".ld-paging-next-page", function(t) {
                        t.preventDefault(),
                            e.nextPage()
                    }),
                    this.$container.on("click.ldPaging", ".ld-paging-last-page", function(t) {
                        t.preventDefault(),
                            e.lastPage()
                    }),
                    this.$container.on("click.ldPaging", ".ld-paging-page", function(n) {
                        n.preventDefault(),
                            e.setPage(parseInt(t(this).attr("data-page"), 10))
                    })
            },
            a.nextPage = function() {
                this.state.currentPage + 1 <= this.options.pageCount && (this.state.currentPage += 1,
                    this.options.onPageChange(this.state.currentPage),
                    this.render())
            },
            a.lastPage = function() {
                this.state.currentPage - 1 > 0 && (this.state.currentPage -= 1,
                    this.options.onPageChange(this.state.currentPage),
                    this.render())
            },
            a.setPage = function(t) {
                t > 0 && t <= this.options.pageCount && (this.state.currentPage = t,
                    this.options.onPageChange(this.state.currentPage),
                    this.render())
            },
            t.fn.paging = function(e) {
                var n = Array.prototype.slice.call(arguments),
                    a = n.shift() || {};
                return e = t.extend({
                        currentPage: 1,
                        pageCount: 5,
                        alwaysShow: !1,
                        hideEndPage: !1,
                        onPageChange: function() {}
                    }, e || {}),
                    e.currentPage = parseInt(e.currentPage, 10),
                    e.pageCount = parseInt(e.pageCount, 10),
                    e.pageCount <= 1 && !e.alwaysShow ? void 0 : this.each(function() {
                        var o = t(this),
                            s = o.data("ld.paging");
                        s || o.data("ld.paging", s = new i(this, e)),
                            "string" == typeof a && s[a].apply(s, n)
                    })
            }
    }(jQuery),
    function(t) {
        function e(e, n) {
            this.options = n,
                this.$container = t(e),
                this.state = {
                    currentPage: n.currentPage
                },
                this.buildElements(),
                this.$currentPage = this.$container.find(".ld-mini-paging-current"),
                this.$lastPage = this.$container.find(".ld-mini-paging-last-page"),
                this.$nextPage = this.$container.find(".ld-mini-paging-next-page"),
                this.bindEvents()
        }
        var n = e.prototype;
        n.render = function() {
                this.$currentPage.html(this.state.currentPage),
                    1 == this.state.currentPage ? this.$lastPage.addClass("ld-mini-paging-diabled") : this.$lastPage.removeClass("ld-mini-paging-diabled"),
                    this.state.currentPage == this.options.pageCount ? this.$nextPage.addClass("ld-mini-paging-diabled") : this.$nextPage.removeClass("ld-mini-paging-diabled")
            },
            n.buildElements = function() {
                this.$container.html(lufax.JST.miniPaging({
                    currentPage: this.options.currentPage,
                    pageCount: this.options.pageCount
                }))
            },
            n.bindEvents = function() {
                var t = this;
                this.$nextPage.on("click", function(e) {
                        e.preventDefault(),
                            t.nextPage()
                    }),
                    this.$lastPage.on("click", function(e) {
                        e.preventDefault(),
                            t.lastPage()
                    })
            },
            n.nextPage = function() {
                this.state.currentPage + 1 <= this.options.pageCount && (this.state.currentPage += 1,
                    this.options.onPageChange(this.state.currentPage),
                    this.render())
            },
            n.lastPage = function() {
                this.state.currentPage - 1 > 0 && (this.state.currentPage -= 1,
                    this.options.onPageChange(this.state.currentPage),
                    this.render())
            },
            n.setPage = function(t) {
                t > 0 && t <= this.options.pageCount && (this.state.currentPage = t,
                    this.options.onPageChange(this.state.currentPage),
                    this.render())
            },
            t.fn.miniPaging = function(n) {
                var i = Array.prototype.slice.call(arguments),
                    a = i.shift() || {};
                return n = t.extend({
                        currentPage: 1,
                        pageCount: 5,
                        onPageChange: function() {}
                    }, n || {}),
                    this.each(function() {
                        var o = t(this),
                            s = o.data("ld.miniPaging");
                        s || o.data("ld.miniPaging", s = new e(this, n)),
                            "string" == typeof a && s[a].apply(s, i)
                    })
            }
    }(jQuery),
    function(t) {
        function e(t, e) {
            return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
        }

        function n(e, n) {
            this.options = n,
                this.$container = t(e),
                this.state = {
                    current: {
                        year: n.currentDate.getFullYear(),
                        month: n.currentDate.getMonth() + 1
                    }
                },
                this.render(),
                this.bindEvents()
        }
        var i = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            a = function() {
                var t = new Date;
                return function(n) {
                    return e(n, t)
                }
            }(),
            o = n.prototype;
        o.render = function() {
                this.$container.html(lufax.JST.calendar({
                        daysOfWeek: i
                    })),
                    this.$calendarBody = this.$container.find(".ld-calendar-body"),
                    this.renderBody()
            },
            o.renderBody = function() {
                var e = this,
                    n = t.map(this.caculateDaysOfMonth(this.state.current.year, this.state.current.month), function(t) {
                        return t.cellHTML = e.options.renderDayCell(t.date),
                            t
                    });
                this.$calendarBody.html(lufax.JST["calendar-body"]({
                        days: n
                    })),
                    this.options.afterRender()
            },
            o.bindEvents = function() {
                var e = this;
                this.$container.on("click.ldCalendar", ".ld-calendar-day", function(n) {
                    var i = new Date(t(n.target).data("date"));
                    e.options.onSelect(i)
                })
            },
            o.nextMonth = function() {
                return this.isNextMonthDisabled() ? !1 : (12 == this.state.current.month ? (this.state.current.month = 1,
                        this.state.current.year += 1) : this.state.current.month += 1,
                    this.fireMonthChange(),
                    void this.renderBody())
            },
            o.prevMonth = function() {
                return this.isPrevMonthDisabled() ? !1 : (1 == this.state.current.month ? (this.state.current.month = 12,
                        this.state.current.year -= 1) : this.state.current.month -= 1,
                    this.fireMonthChange(),
                    void this.renderBody())
            },
            o.isNextMonthDisabled = function() {
                var t = new Date(this.state.current.year, this.state.current.month + 1, 1);
                return this.isDisabled(t)
            },
            o.isPrevMonthDisabled = function() {
                var t = new Date(this.state.current.year, this.state.current.month, -1);
                return this.isDisabled(t)
            },
            o.fireMonthChange = function() {
                this.options.onMonthChange(this.state.current.year, this.state.current.month)
            },
            o.getCurrentYear = function() {
                return this.state.current.year
            },
            o.getCurrentMonth = function() {
                return this.state.current.month
            },
            o.gotoCurrentMonth = function() {
                var t = new Date;
                this.state.current.year = t.getFullYear(),
                    this.state.current.month = t.getMonth() + 1,
                    this.fireMonthChange(),
                    this.renderBody()
            },
            o.isDisabled = function(t) {
                return this.options.maxDate && this.options.maxDate.getTime() <= t.getTime() || this.options.minDate && this.options.minDate.getTime() >= t.getTime()
            },
            o.caculateDaysOfMonth = function(t, e) {
                var n, i, o = new Date(t, e, 0).getDate(),
                    s = [];
                for (n = 0; o > n; n++)
                    i = new Date(t, e - 1, n + 1),
                    s.push({
                        date: i,
                        dayNumber: n + 1,
                        inCurrentMonth: "",
                        isToday: a(i),
                        isDisabled: this.isDisabled(i)
                    });
                var r = s[0].date.getDay();
                for (7 == r && (r = 0),
                    n = 1; r > 0;)
                    i = new Date(t, e - 1, --n),
                    s.unshift({
                        date: i,
                        dayNumber: i.getDate(),
                        inCurrentMonth: "old",
                        isToday: a(i),
                        isDisabled: this.isDisabled(i)
                    }),
                    r -= 1;
                var l = 6 - s[s.length - 1].date.getDay();
                for (n = o; l > 0;)
                    i = new Date(t, e - 1, ++n),
                    s.push({
                        date: i,
                        dayNumber: i.getDate(),
                        inCurrentMonth: "new",
                        isToday: a(i),
                        isDisabled: this.isDisabled(i)
                    }),
                    l -= 1;
                var c;
                if (s.length < 42)
                    for (c = 42 - s.length; c > 0; c--)
                        i = new Date(t, e - 1, ++n),
                        s.push({
                            date: i,
                            dayNumber: i.getDate(),
                            inCurrentMonth: "new",
                            isToday: a(i),
                            isDisabled: this.isDisabled(i)
                        });
                return s
            },
            o.remove = function() {
                this.$container.off("click.ldCalendar"),
                    this.$container.html("").data("ld.calendar", null)
            },
            t.fn.calendar = function(e) {
                var i = Array.prototype.slice.call(arguments),
                    a = i.shift() || {};
                return e = t.extend({
                        currentDate: new Date,
                        onSelect: function() {},
                        onMonthChange: function() {},
                        afterRender: function() {},
                        minDate: null,
                        maxDate: null,
                        renderDayCell: function() {
                            return ""
                        }
                    }, e || {}),
                    this.each(function() {
                        var o = t(this),
                            s = o.data("ld.calendar");
                        s || o.data("ld.calendar", s = new n(this, e)),
                            "string" == typeof a && s[a].apply(s, i)
                    })
            }
    }(jQuery),
    function() {
        function t() {
            n.remove(),
                clearTimeout(i)
        }

        function e(e, a) {
            e = e || "加载中...",
                a = $.extend({
                    clearAfter: 1e3,
                    hideDuratin: 500,
                    zIndex: 1e3
                }, a || {}),
                n && t(),
                n = $(lufax.JST.toast({
                    content: e
                })).css({
                    "z-index": a.zIndex
                }),
                n.appendTo($(document.body)),
                i = setTimeout(function() {
                    n.fadeOut(a.hideDuratin, function() {
                        t()
                    })
                }, a.clearAfter)
        }
        var n, i;
        lufax.ui.toast = e
    }(),
    function() {
        function t() {}
        t.prototype = {
                count: 0,
                start: function(e, n) {
                    var i = this;
                    if ("boolean" == typeof n && n)
                        t.content = '<div class="loadingWrapper loadingSmall hidden" lufax-ui="loading"><i class="loadingPic"></i></div>';
                    else {
                        if (t.content = '<div class="loadingWrapper hidden" lufax-ui="loading"><i class="loadingPic"></i><span class="loadingTips">正在处理，请稍后...</span></div>',
                            0 !== i.count)
                            return void++i.count;
                        ++i.count
                    }
                    var a = $("#" + e);
                    a.append(t.content).css("position", "relative");
                    var o = a.children(".loadingWrapper"),
                        s = o.outerWidth() / 2,
                        r = o.outerHeight() / 2,
                        l = a.width() / 2,
                        c = a.height() / 2;
                    o.css({
                        top: c - r,
                        left: l - s
                    }).show()
                },
                end: function(t, e) {
                    var n = this;
                    "boolean" == typeof e && e ? $("#" + t).find(".loadingWrapper").remove() : 0 === --n.count && $("#" + t).find(".loadingWrapper").remove()
                }
            },
            lufax.ui.loading = t,
            lufax.ui.loading = new t,
            lufax.loading = lufax.ui.loading
    }(this),
    function(t) {
        t.fn.zoomTips = function(e) {
            var n = {
                    isCash: !1
                },
                i = t.extend(n, e),
                a = '<div class="zoomTips" lufax-ui="zoomTips"></div>';
            return t("body").append(a),
                this.each(function() {
                    function e(e) {
                        i.isCash ? t(".zoomTips").text(lufax.NumFormat.numberFormatWithoutCurrency(e)) : t(".zoomTips").text(e)
                    }

                    function n(e) {
                        var n = t(e).offset(),
                            i = n.top,
                            a = n.left;
                        t(".zoomTips").css({
                            left: a,
                            top: i + 30
                        }).show()
                    }

                    function a() {
                        t(".zoomTips").hide()
                    }
                    t(this).blur(function() {
                            var e = t(this).val();
                            e = i.isCash ? e : e.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
                                t(this).val(e),
                                a()
                        }),
                        t(this).bind("focus", function() {
                            var i = t(this).val();
                            0 === i.length ? a() : (e(i),
                                n(this))
                        }),
                        t(this).bind("keydown keyup", function() {
                            var o = t(this).val();
                            i.isCash ? (o = o,
                                    t(this).next().text(lufax.NumFormat.convertCurrency(o))) : o = o.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "),
                                o.length > 0 ? (e(o),
                                    n(this)) : a()
                        })
                })
        }
    }(jQuery),
    function() {
        function t(t) {
            var e = this,
                n = {
                    container: $("#tradePassword"),
                    rightText: '<a href="https://user.' + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + '/user/find-trade-password">忘记密码？</a>'
                };
            e.Options = $.extend(n, t),
                e.init()
        }
        t.prototype = {
                template: '<div class="control-group" lufax-ui="tradepassword"><label class="control-label" for="tradePwd">交易密码：</label><div class="controls"><span class="input-wrap"><input type="password" class="inputs input-medium" id="tradePwd" name="tradePwd"></span><span class="help-line">{!rightText}</span><span class="errorPanel"><b class="arrow left"></b><span class="errorContent"></span></span></div></div>',
                init: function() {
                    var t = this,
                        e = t.Options.container;
                    e.html(t.template.replace("{!rightText}", t.Options.rightText)),
                        e.find("#tradePwd").focus(function() {
                            t.hideError()
                        })
                },
                showError: function(t) {
                    var e = this,
                        n = e.Options.container;
                    n.addClass("form-error"),
                        n.find(".help-line").hide(),
                        n.find(".errorPanel").css({
                            display: "inline-block"
                        }).children(".errorContent").html(t)
                },
                hideError: function() {
                    var t = this,
                        e = t.Options.container;
                    e.removeClass("form-error"),
                        e.find(".help-line").show(),
                        e.find(".errorPanel").css({
                            display: "none"
                        })
                },
                popup: function(t) {
                    lufax.popup.newIconPopup({
                        popupTitleName: "重要提示",
                        iconClass: "prompt-icon",
                        message: "<p>" + t + "</p>如忘记密码，<a href='https://user." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/user/find-trade-password'>找回交易密码</a>即可进行交易",
                        button: "<a class='btns btn-info close' href='https://my." + location.hostname.split(".").slice(location.hostname.split(".").length - 2).join(".") + "/my/account'>查看我的账户</a>",
                        closeDisplay: "false"
                    })
                },
                validate: function() {
                    var t = this,
                        e = t.Options.container,
                        n = e.find("#tradePwd").val();
                    "" === n && t.showError("请填写")
                }
            },
            lufax.ui.tradePassword = t
    }(),
    function(t) {
        "use strict";
        var e = {
            _url: function(t) {
                var e = window.location.protocol,
                    n = "https://common.lu.com/common";
                if ("file:" != e) {
                    var i = window.location.hostname;
                    n = e + "//common" + i.slice(i.indexOf("."), i.length) + "/common"
                }
                return n + "/ad/get-all?adNos=" + t
            },
            load: function(e) {
                if ("" !== e) {
                    if (t.data.ads)
                        return void this._render(t.data.ads);
                    var n = this;
                    t.ajax({
                        url: this._url(e),
                        dataType: "jsonp",
                        success: function(e) {
                            e && (t.data.ads = e,
                                n._render(e))
                        }
                    })
                }
            },
            _html: function(t) {
                return t.type && "image" === t.type.toLowerCase() ? '<a href="' + t.clickUrl + '" target="_blank" data-sk="' + t.dataSk + '"><img width = "' + t.width + '" height="' + t.height + '" src="' + t.showUrl + '" alt="' + t.altContent + '" /> </a>' : '<a href="' + t.clickUrl + '" target="_blank" data-sk="' + t.dataSk + '">' + t.content + "</a>"
            },
            _render: function(e) {
                for (var n in e)
                    for (var i = 0; i < e[n].length; i++)
                        t('[data-ad-a="' + n + '"]').empty().append(this._html(e[n][i]))
            }
        };
        t.ad = function(n) {
            n = n || t.grep(t.map(t("[data-ad-a]"), function(e) {
                    return t(e).data("ad-a")
                }), function(t) {
                    return "" !== t
                }).join(","),
                e.load(n)
        }
    }(jQuery),
    $(function() {
        $.ad()
    }),
    function(t) {
        "use strict";
        var e = {
            server: "//common.lu.com/common"
        };
        t.recommend = function(n) {
                return n = t.extend(n, e), {
                    getRecTypes: function(e) {
                        return null !== e && void 0 !== e || (e = "_my"),
                            t.ajax({
                                url: n.server + "/recommend/get-rec-types?bizType=_my",
                                dataType: "jsonp",
                                timeout: 15e3
                            })
                    }
                }
            }(),
            t.fn.recommend = function(n) {
                function i(n) {
                    this.options = t.extend(n, {
                            listHost: "https://list.lu.com/list",
                            width: parseInt(t(n.container).width()),
                            minBoxWidth: 196,
                            paginationOffset: 20,
                            boxBlankWidth: 50,
                            pageSize: 5,
                            curPage: 1,
                            pages: 4
                        }, e),
                        this._calculateBoxWidth() < this.options.minBoxWidth && (this.options.pageSize = this.options.pageSize - 1),
                        this.container = t(this.options.container),
                        this.showArea = t(this.options.showArea),
                        this.url = this.options.server + "/recommend/products?bizType=_" + this.options.bizType + "&pageSize=" + this.options.pageSize,
                        this.options.productId && (this.url += "&productId=" + this.options.productId),
                        this.options.recType && (this.url += "&recType=" + this.options.recType),
                        this.options.extendInfo && (this.url += "&extendInfo=" + this.options.extendInfo),
                        this.detailUrl = this.options.listHost + "/productDetail"
                }
                if (null === n || void 0 === n) {
                    if (null === this.data("rcmd-a") || void 0 === this.data("rcmd-a"))
                        throw Error("data-rcmd-a attribute of element must be specify");
                    var a = t(this.data("rcmd-container") || this);
                    n = {
                        bizType: this.data("rcmd-a"),
                        recType: this.data("rcmd-rec-type"),
                        container: a,
                        width: parseInt(this.data("rcmd-width") || a.width()),
                        productId: this.data("rcmd-excluded-product-id"),
                        extendInfo: this.data("rcmd-extend-info")
                    }
                }
                if (null === n.bizType || void 0 === n.bizType)
                    throw Error("bizType must be specify in options");
                n.showArea = this,
                    i.prototype = {
                        _url: function() {
                            return this.url
                        },
                        show: function() {
                            this._destroy(),
                                this.showArea.append(this.areaTemplate);
                            var e = this;
                            t.ajax({
                                url: this._url(),
                                dataType: "jsonp",
                                timeout: 15e3
                            }).done(function(t) {
                                e._render(t)
                            }).fail(function() {
                                e._destroy(!0)
                            }).always(function() {
                                e.container.find(".rcmd-body").css({
                                    background: "none"
                                })
                            })
                        },
                        _destroy: function(t) {
                            this.container.find(".rcmd-area").remove(),
                                t && this._failedCallback()
                        },
                        _doneCallback: function(t) {
                            var e = this.options.doneCallback;
                            e && e instanceof Function && e(t)
                        },
                        _failedCallback: function() {
                            var t = this.options.failedCallback;
                            t && t instanceof Function && t()
                        },
                        _render: function(e) {
                            if (null === e || void 0 === e || null === e.recData)
                                return void this._destroy(!0);
                            var n = this,
                                i = this.container;
                            this._doneCallback(e),
                                e.recData = e.recData || [],
                                e.extraRecData = e.extraRecData || [],
                                t.each(e.recData, function(e, i) {
                                    null === i.productDetailUrl && (i.productDetailUrl = n.detailUrl + "?productId=" + i.id),
                                        i.highlight = function(e) {
                                            return t.inArray(e, i.highlightFields) > -1 ? "high-light" : ""
                                        }
                                }),
                                t.each(e.extraRecData, function(t, e) {
                                    null === e.productDetailUrl && (e.productDetailUrl = n.detailUrl + "?productId=" + e.id);
                                }),
                                i.find(".r-content").empty().append(this._boxies(e)),
                                i.find(".r-bottom .lhb-msg").empty().append(this._bottomLeft(e)),
                                i.find(".r-bottom .pagination").empty().append(this._bottomRight(e)),
                                i.find(".rcmd-area").css({
                                    width: this.options.width + "px"
                                }),
                                i.find(".r-box").css({
                                    width: this._calculateBoxWidth()
                                }),
                                i.find(".r-content").css({
                                    width: this._caculateBoxesWidth()
                                });
                            var a = i.find(".r-bottom .lhb-msg").width(),
                                o = i.find(".r-bottom .pagination").width();
                            i.find(".r-bottom .pagination").css({
                                paddingLeft: this.options.width - a - o - this.options.paginationOffset + "px"
                            });
                            var s = this.options.minBoxWidth;
                            i.find(".r-box .first-line").each(function() {
                                    var e = s - n.options.boxBlankWidth - t(this).find(".desc").width();
                                    t(this).find(".title")[0].scrollWidth > t(this).find(".title").innerWidth() && t(this).find(".title").css({
                                        width: e + "px"
                                    })
                                }),
                                "0px" !== i.css("borderLeftWidth") && i.find(".rcmd-area").css({
                                    borderLeftWidth: "0px",
                                    borderRightWidth: "0px",
                                    borderBottomWidth: "0px"
                                }),
                                i.find(".rcmd-body").hover(function() {
                                    t(this).find(".prev,.next").show()
                                }, function() {
                                    t(this).find(".prev,.next").hide()
                                }),
                                i.find(".rcmd-body").on("mousedown", ".prev", function() {
                                    n._prev()
                                }),
                                i.find(".rcmd-body").on("mousedown", ".next", function() {
                                    n._next()
                                }),
                                i.find(".pagination a:first").addClass("hover"),
                                i.find(".pagination a").on("click", function() {
                                    n._go(parseInt(t(this).data("cur-page")))
                                }),
                                i.find(".r-box .first-line .title,.r-box .sixth-line ").each(function() {
                                    t(this)[0].scrollWidth > t(this).innerWidth() ? t(this).mouseTips({
                                        tipsWidth: "auto",
                                        leftOffset: 0
                                    }) : t(this).removeAttr("title")
                                })
                        },
                        _calculateBoxWidth: function() {
                            return Math.round((this.options.width - 10 * this.options.pageSize) / this.options.pageSize)
                        },
                        _caculateBoxesWidth: function() {
                            return this.options.pages * this.options.width + "px"
                        },
                        _prev: function() {
                            var t = this.container.find(".r-content");
                            this.options.curPage - 1 > 0 && (this.options.curPage = this.options.curPage - 1,
                                t.animate({
                                    marginLeft: "-" + this.options.width * (this.options.curPage - 1) + "px"
                                }),
                                this._synPaginateView(),
                                this._addDataSK(this.container.find(".rcmd-body .prev")))
                        },
                        _next: function() {
                            var t = this.container.find(".r-content");
                            this.options.curPage + 1 <= this.options.pages && (this.options.curPage += 1,
                                t.animate({
                                    marginLeft: "-" + this.options.width * (this.options.curPage - 1) + "px"
                                }),
                                this._synPaginateView(),
                                this._addDataSK(this.container.find(".rcmd-body .next")))
                        },
                        _go: function(t) {
                            if (this.options.curPage !== t) {
                                this.options.curPage = t;
                                var e = this.container.find(".r-content");
                                t > 0 && t <= this.options.pages && e.animate({
                                        marginLeft: "-" + this.options.width * (this.options.curPage - 1) + "px"
                                    }),
                                    this._synPaginateView()
                            }
                        },
                        _addDataSK: function(e) {
                            t(e).attr("data-sk", "TJ-" + this.options.bizType + "-cardlist-pageturnleftright-" + this.options.curPage)
                        },
                        _synPaginateView: function() {
                            this.container.find(".pagination a.hover").removeClass("hover"),
                                this.container.find(".pagination a[data-cur-page=" + this.options.curPage + "]").addClass("hover")
                        },
                        _bottomLeft: function(t) {
                            return t.bizType = this.options.bizType,
                                doT.template(this.btmLeftTemplate)(t)
                        },
                        _bottomRight: function(e) {
                            this.options.pages = Math.ceil(e.recData.length / this.options.pageSize);
                            var n = t.extend(this.options, e);
                            return doT.template(this.btmRightTemplate)(n)
                        },
                        _boxies: function(t) {
                            return t.bizType = this.options.bizType,
                                t.pageSize = this.options.pageSize,
                                doT.template(this.boxTempalte)(t)
                        },
                        areaTemplate: '<div class="rcmd-area"><div class="rcmd-body"><div class="prev left" ><i></i></div><div class="r-content clearfix"></div><div class="next right"><i></i></div></div><div class="r-bottom clearfix"><ul class="lhb-msg"></ul><ul class="pagination"></ul></div></div>',
                        boxTempalte: '{{ for(var i = 0 ; i < it.recData.length ; i++) { }}<a class="r-box" href = {{=it.recData[i].productDetailUrl}} target = "_blank" data-sk="TJ-{{=it.bizType}}-cardlist-card-{{=i+1}}">{{ if(it.recData[i].salesPromo) { }}<div class="tag"><label>{{=it.recData[i].salesPromo}}</label></div>{{ } }}<div class="first-line"><span class="title {{= it.recData[i].highlight("productName")}}" title="{{=it.recData[i].productName}}">{{=it.recData[i].productName || "" }}</span>{{if(it.recData[i].productDescImg) { }}<span class="desc img iconV2 {{=it.recData[i].productDesc}}-icon"></span>{{ } else if(it.recData[i].productDesc) { }}<span class="desc {{= it.recData[i].highlight("productDesc")}}">{{=it.recData[i].productDesc  || ""}}</span>{{ } }}</div><div class="second-line {{= it.recData[i].highlight("availableCoupons")}}">{{=it.recData[i].availableCoupons  || ""}}</div><div class="third-line {{= it.recData[i].highlight("ratioValue")}}">{{=it.recData[i].ratioValue  || ""}}</div><div class="fourth-line {{= it.recData[i].highlight("ratioLabel")}}">{{=it.recData[i].ratioLabel  || ""}}</div><div class="fifth-line"><span class="invest-amount {{= it.recData[i].highlight("investAmount")}}">{{= it.recData[i].investAmount  || ""}}</span><span class="term-area {{= it.recData[i].highlight("termAreaValue")}}">{{= it.recData[i].termAreaValue  || ""}}</span></div><div class="sixth-line" title ="{{=it.recData[i].promoWords}}">{{= it.recData[i].promoWords  || ""}}</div></a><div class = "r-separate-line {{=(i+1)%it.pageSize == 0 ? "remove-separate-line" : ""}}"></div>{{ } }}',
                        btmLeftTemplate: '{{~it.extraRecData:lhb:index}}<li><a href="{{=lhb.productDetailUrl}}" data-id="{{=lhb.id}}" data-sk="TJ-{{=it.bizType}}-bottomrow" target="_blank">{{= lhb.productName }}</a><span class ="ratio-value"> {{= lhb.ratioValue }} </span></li>{{~}}',
                        btmRightTemplate: '{{ for(var i = 0 ; i< it.pages ; i++) { }}<li><a  data-cur-page = "{{= i+1}}"  data-sk= "TJ-{{=it.bizType}}-cardlist-pageturnbottom-{{= i+1}}">•</a></li>{{ } }}'
                    },
                    new i(n).show()
            }
    }(jQuery),
    $(function() {
        $("[data-rcmd-a]").length > 0 && $("[data-rcmd-a]").each(function() {
            $(this).recommend()
        })
    }),
    function(t) {
        function e(e, n) {
            this.$container = t(e),
                this.options = n,
                this.loadData(n.params)
        }
        var n = {
            server: "//common.lu.com/common"
        };
        e.prototype.render = function(t) {
                function e(t) {
                    return "301" == t.productCategory || "203" == t.productCategory || "803" == t.productCategory || "809" == t.productCategory || "908" == t.productCategory && "2" != t.salesArea && "3" != t.salesArea && "4" != t.salesArea || "701" == t.productCategory || "R01" == t.productCategory
                }
                var n, i, a = [];
                if (t.success && t.data && t.data.productList) {
                    for (i = 0; i < t.data.productList.length; i++)
                        n = t.data.productList[i],
                        e(n) && a.push(n);
                    a.length > 0 ? this.$container.html(lufax.JST["kyc-recommend"]({
                            productList: a,
                            kycType: this.options.kycType
                        })) : this.options.onMountError(),
                        this.options.onMounted()
                } else
                    this.options.onMountError()
            },
            e.prototype.loadData = function(e) {
                var i = this;
                t.ajax({
                    url: n.server + "/kyc-recommend/products",
                    data: e,
                    dataType: "jsonp",
                    timeout: 15e3
                }).done(function(t) {
                    i.render(t)
                }).fail(function() {}).always(function() {})
            },
            t.fn.kycRecommend = function(n) {
                return n = t.extend({
                        onMounted: function() {},
                        onMountError: function() {},
                        kycType: "confirm",
                        params: {}
                    }, n || {}),
                    this.each(function() {
                        new e(this, n)
                    })
            }
    }(jQuery),
    function(t) {
        function e(e) {
            var i = t(e),
                a = i.data(),
                o = a.productId;
            if (o) {
                var s = {
                        rec: [],
                        lumi: [],
                        listUrl: "//list.lu.com/list/",
                        lumiUrl: "//lumi.lu.com/lumi/",
                        noGood: "",
                        noLumi: ""
                    },
                    r = t.ajax({
                        type: "GET",
                        url: n.server + "/recommend/products?jsoncallback=?",
                        data: {
                            productId: o
                        },
                        dataType: "json"
                    });
                t.when(r).done(function(e) {
                    if (e.rcmdRecommend.data.productList && (s.rec = e.rcmdRecommend.data.productList.length > 5 ? e.rcmdRecommend.data.productList.slice(0, 4) : e.rcmdRecommend.data.productList),
                        e.lumiRecommend.productList && (s.lumi = e.lumiRecommend.productList.length > 5 ? e.lumiRecommend.productList.slice(0, 4) : e.lumiRecommend.productList),
                        s.rec.length || s.lumi.length) {
                        t.each(s.rec, function(t, e) {
                                e.interestRateShow = e.interestRate ? lufax.NumFormat.percentageFormat(e.interestRate) : e.interestRateDisplay,
                                    e.minInvestAmountShow = lufax.NumFormat.numberFormatWithoutCurrency(e.minInvestAmount),
                                    e.priceShow = lufax.NumFormat.numberFormatWithoutCurrency(e.price)
                            }),
                            t.each(s.lumi, function(t, e) {
                                e.tradeType = e.tradeType.toLowerCase(),
                                    e.pointsShow = lufax.NumFormat.numberFormatWithoutCurrency(e.points),
                                    e.cashPriceShow = lufax.NumFormat.numberFormatWithoutCurrency(e.cashPrice),
                                    e.scratchPriceShow = lufax.NumFormat.numberFormatWithoutCurrency(e.scratchPrice)
                            });
                        var n = t(c);
                        n.find(".recommend-panel").removeClass("hidden"),
                            s.rec && s.rec.length ? s.lumi && s.lumi.length ? n.find("#more-good").addClass("active") : (n.find("#more-good").addClass("active"),
                                s.noLumi = "hidden") : (n.find("#more-lumi-good").addClass("active"),
                                s.noGood = "hidden",
                                n.find(".more").attr("data-sk-area", "通币-投资申请成功-更多"),
                                n.find(".more").attr("href", s.lumiUrl + "/filter?minPoints=&maxPoints=&sortType=6&tradeType=EXCHANGE")),
                            lufax.templateMerge.stringTemplateMergeAndShow(l, s, function(e) {
                                n.find("#resultRcmdBox").prepend(e),
                                    n.find(".recommend-tabs .tab-items").children("li").click(function() {
                                        var e = t(this).index();
                                        t(this).addClass("active").siblings().removeClass("active"),
                                            n.find(".tab-contents .info-table").eq(e).removeClass("hidden").siblings("table").addClass("hidden"),
                                            "more-good" == t(this).attr("id") ? n.find(".more").attr("href", s.listUrl + "/all") : "more-lumi-good" == t(this).attr("id") && (n.find(".more").attr("data-sk-area", "通币-投资申请成功-更多"),
                                                n.find(".more").attr("href", s.lumiUrl + "/filter?minPoints=&maxPoints=&sortType=6&tradeType=EXCHANGE"))
                                    })
                            }),
                            n.appendTo(i)
                    }
                });
                var l = '   <div class="tab-contents" id="info-tables">\n       <table data-sk-area="投资推荐-投资申请成功-推荐项目" class="${model.noGood} info-table first-table clearfix ">\n           <tbody>\n           {for product in model.rec}\n               <tr>\n                   <td class="info-row first-child">\n                       <a class="project-name" href="${model.listUrl}/productDetail?productId=${product.id}" target="_blank">${product.displayName} ${product.code}</a>\n                       {if product.productType ==\'TRANSFER_REQUEST\' }\n                           <i class="iconV2 transfer-icon"></i>\n                       {/if}\n                   </td>\n                   <td class="info-row">\n                       {if product.productCategory =="801"}\n                           随时提取\n                       {else}\n                           product.investPeriod\n                           {if product.investPeriodUnit == 1}\n                               天\n                           {elseif product.investPeriodUnit == 2}\n                               周\n                           {elseif product.investPeriodUnit == 3}\n                               个月\n                           {elseif product.investPeriodUnit == 4}\n                               年\n                           {/if}\n                       {/if}\n                   </td>\n                   <td class="info-row">\n                       ${product.interestRateShow}\n                   </td>\n                   <td class="info-row cash-style">￥\n                       {if ((product.sourceType==2 || product.sourceType==3 || product.sourceType ==4 ) && product.productType == "LOAN_REQUEST") || product.tradingMode=="07" }\n                           {if product.minInvestAmount }\n                              ${product.minInvestAmountShow} 起\n                           {else}\n                               ${product.priceShow}\n                           {/if}\n                       {else}\n                           ${product.priceShow}\n                       {/if}\n                   </td>\n                   <td class="info-row last-child"><a class="btns" href="${model.listUrl}/productDetail?productId=${product.id}" data-sk="My-Account-InvestmentButton" target="_blank">投资</a></td>\n               </tr>\n           {/for}\n           </tbody>\n       </table>\n       <table class="info-table recommend-table clearfix ${model.noLumi} ">\n            <tbody>\n            <tr>\n                {for product in model.lumi}\n                    <td data-sk-area="通币-投资申请成功-推荐位">\n                        <div>\n                            <a href="${model.lumiUrl}/${product.tradeType}/product?productCode=${product.actionCode}" target="_blank">\n                                <img class="small-img" src="${product.smallImageUrl}" alt=""/>\n                            </a>\n                        </div>\n                        <p class="good-info" title="${product.productName}">\n                            <a href="${model.lumiUrl}/${product.tradeType}/product?productCode=${product.actionCode}" target="_blank">${product.productName}</a>\n                        </p>\n                        <p class="good-price">\n                            {if product.tradeType =="exchange"}\n                                {if product.points > 0}\n                                    <span class="price-num">\n                                       ${product.pointsShow}</span><span class="name-gray">积分</span>\n                                {/if}\n                                {if product.cashPrice>0}\n                                    {if product.points >0}\n                                        <span class="name-add">+</span>\n                                    {/if}\n                                    <span class="price-num">\n                                        ${product.cashPriceShow}</span><span class="name-gray">元</span>\n                                 {/if}\n                            {elseif product.tradeType=="scratch"}\n                                <span class="name-gray">参与价</span>&nbsp;\n                                <span class="price-num">${product.scratchPriceShow}</span><span class="name-gray">积分</span>\n                            {/if}\n                        </p>\n                    </td>\n                {/for}\n            </tr>\n            </tbody>\n       </table>\n   </div>\n',
                    c = '<div class="rcmdResultInfo">\n    <div class="recommend-panel hidden">\n        <div class="recommend-tabs clearfix">\n            <ul class="tab-items clearfix">\n                <li id="more-good" class="active hidden" data-sk-area="投资推荐-投资申请成功-适合您的投资项目Tab">适合您的项目</li>\n                <li id="more-lumi-good" class="" data-sk-area="通币-投资申请成功-适合您的通币商品Tab">适合您的会员商品</li>\n            </ul>\n            <a class="more" href="//list.lu.com/list/all" target="_blank">更多<span class="orange">></span></a>\n        </div>\n    </div>\n    <div id="resultRcmdBox">\n\n    </div>\n</div>\n\n'
            }
        }
        var n = {
            server: "//rcmd.lu.com/rcmd"
        };
        t.fn.$$recommendByProductId = function() {
                var n = t(this);
                n.each(function() {
                    e(this)
                })
            },
            t(function() {
                "false" !== t(document.body).data("$$recommendByProductId") && t("[data-recommend-by-product-id]").$$recommendByProductId()
            })
    }(jQuery);
function failGet(msg) {
    console.log(msg);
}

function onList(baseRate, minM, maxM) {
    var fundDetailLink = "https://list.lu.com/list/r030";
    $.ajax({
        url: fundDetailLink,
        dataType: "html",
        data: {
            orderType: "R030_INVEST_RATE",
            orderAsc: "true",
            minMoney: "" + minM,
            maxMoney: "" + maxM
        },
        success: function(data) {
            var doc = $(data);
            var productList = doc.find(".product-list");
            if (productList === undefined) {
                failGet("failed to get product list");
                return;
            }
            productList.each(function() {
                console.log("product information");
                var name = $(product).find('.product-name').get(0);
                if (name === undefined) {
                    failGet("failed to get product name");
                    return false;
                }
                console.log("  product name:\t%s", a.text());
                console.log("  link:\t%s", a.attr('href'));

                var rate = $(this).find('.interest-rate .num-style').get(0);
                if (rate === undefined) {
                    failGet("failed to get product rate");
                    return false;
                }
                console.log("  rate:\t%f%%", parseFloat(rate.text()));

                var amount = $(this).find('.product-amount .num-style').get(0);
                if (amount === undefined) {
                    failGet("failed to get product amount");
                    return false;
                }
                console.log("  amount:\t%f%%", parseFloat(amount.text().replace(',', '')));
            });
        },
        error: function() {
            failGet("failed to get list in onList");
        }
    });
}

function onMaxRate(availableMoney) {
    var fundDetailLink = "https://list.lu.com/list/r030";
    $.ajax({
        url: fundDetailLink,
        dataType: "html",
        data: {
            orderType: "R030_INVEST_RATE",
            orderAsc: "true"
        },
        success: function(data) {
            var doc = $(data);
            var product = doc.find(".product-list").get(0);
            if (product === undefined) {
                failGet("failed to get product in getBaseRate");
                return;
            }
            var rate = $(product).find('.interest-rate .num-style').get(0);
            if (rate === undefined) {
                failGet("failed to get rate in getBaseRate");
                return;
            }
            var dRate = parseFloat($(rate).text());
            console("max rate:\t%f", dRate);
            onList(dRate, availableMoney - 1000, availableMoney);
        },
        error: function() {
            failGet("failed to get list in getBaseRate");
        }
    });
}

function onFundDetail(data) {
    var doc = $(data);
    var amount = doc.find(".available-balance-wrap > .balance-amount").get(0);
    if (amount === undefined) {
        failGet("failed to get available amount");
        return;
    }
    var availableMoney = parseFloat($(amount).text().replace(',', ''));
    console.log("available money:\t%f", availableMoney);

    onMaxRate(availableMoney);
}

function onUserInfo(data) {
    if (data.userName === undefined) {
        failGet("failed to get user information.");
        return;
    }
    console.log("user id:\t%d", data.uid);
    console.log("user name:\t%s", data.userName);

    var fundDetailLink = "https://my.lu.com/my/yeb/fund-detail";
    $.ajax({
        url: fundDetailLink,
        dataType: "html",
        success: function(data) {
            onFundDetail(data);
        },
        error: function() {
            failGet("failed to get fund detail");
        }
    });
}

chrome.browserAction.onClicked.addListener(function() {
    //{"unreadMsgCount":0,"cardBindStatus":"1","uid":28160626,"nameAuthentication":"1","sex":"M","name":"邓涛","mobileNo":"18511478118","userName":"dengtao118","isNewUser":false,"isInvestPrepared":true}
    var userInfoLink = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
    $.ajax({
        url: userInfoLink,
        dataType: "json",
        success: function(data) {
            onUserInfo(data);
        },
        error: function() {
            failGet("failed to get user information.");
        }
    });
});
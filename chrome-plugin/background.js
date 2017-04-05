function onTrade(id) {
    chrome.tabs.executeScript(id, { code: "$('.btns btn_xlarge investBtn sk-area-trigger').trigger()", runAt: "document_end" },
        function(result) {
            console.log("Succeed %s", result[0]);
        });
}

function onBuyInNew(strUrl) {
    console.log("open trade page in the new tab");
    strUrl = "https://list.lu.com" + strUrl;
    chrome.tabs.create({ url: strUrl, selected: true },
        function(tab) {
            console.log(tab.id);
            onTrade(tab.id);
        });
}

function onBuyInCurrent(id, strUrl) {
    console.log("open trade page in the tab %d", id);
    strUrl = "https://list.lu.com" + strUrl;
    chrome.tabs.update({ openerTabId: id, url: strUrl },
        function(tab) {
            console.log(tab.id);
            onTrade(tab.id);
        });
}

function onBuy(strUrl) {
    chrome.tabs.query({ active: true, currentWindow: true },
        function(tabs) {
            if (tabs === undefined) {
                onBuyInNew(strUrl);
            } else {
                onBuyInCurrent(tabs[0].id, strUrl);
            }
        });
}

var LuProduct = {
    createProduct: function() {
        var product = {};
        product.name = "";
        product.url = "";
        product.rate = 0;
        product.amount = 0;
        return product;
    }
};

function onList(maxRate, minM, maxM) {
    if (maxM - minM > 5000 || minM < 5000) {
        console.log("poor man");
        setTimeout(_onList(maxRate, maxM - 1000, maxM), 5 * 1000);
        return;
    }
    var fundDetailLink = "https://list.lu.com/list/r030";
    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false&minMoney=" + minM + "&maxMoney=" + maxM;
    $.ajax({
        url: fundDetailLink,
        dataType: "html",
        data: strData,
        success: function(data) {
            var doc = $(data);
            var productList = doc.find(".product-list");
            if (productList === undefined) {
                console.log("failed to get product list");
                return;
            }
            if (productList.length === 0) {
                console.log("failed to get product list from %d to %d", minM, maxM);
                setTimeout(_onList(maxRate, minM - 1000, maxM), 5 * 1000);
                return;
            }
            var products = new Array();
            productList.each(function() {
                console.log("product information");

                var product = LuProduct.createProduct();
                var name = $(this).find(".product-name").get(0);
                if (name === undefined) {
                    console.log("failed to get product name");
                    return true;
                }
                var a = $(name).find("a");
                product.name = $(a).text();
                product.url = $(a).attr("href");

                var rate = $(this).find(".interest-rate .num-style").get(0);
                if (rate === undefined) {
                    console.log("failed to get product rate");
                    return true;
                }
                product.rate = parseFloat($(rate).text());
                if (maxRate - product.rate > 0.05) {
                    return true;
                }

                var amount = $(this).find(".product-amount .num-style").get(0);
                if (amount === undefined) {
                    console.log("failed to get product amount");
                    return false;
                }
                product.amount = parseFloat($(amount).text().replace(",", ""));

                if (maxRate - product.rate > 0.05) {
                    return true;
                }

                console.log("  product name:\t%s", product.name);
                console.log("  link:\t%s", product.url);
                console.log("  rate:\t%f%%", product.rate);
                console.log("  amount:\t%f", product.amount);

                var i = 0;
                for (; i < products.length; i++) {
                    if (product.rate * product.amount > products[i].rate * products[i].amount) {
                        products.splice(i, 0, product);
                        break;
                    }
                }
                if (i == products.length) {
                    products.push(product);
                }

                return true;
            });

            if (products.length === 0) {
                console.log("low rate");
                setTimeout(_onList(maxRate, minM, maxM), 5 * 1000);
                return;
            }

            onBuy(products[0].url);
        },
        error: function() {
            console.log("failed to get list in onList");
        }
    });
}

function _onList(maxRate, minM, maxM) {
    return function() {
        onList(maxRate, minM, maxM);
    };
}

function onMaxRate(availableMoney) {
    var fundDetailLink = "https://list.lu.com/list/r030";
    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false";
    $.ajax({
        url: fundDetailLink,
        dataType: "html",
        data: strData,
        success: function(data) {
            var doc = $(data);
            var product = doc.find(".product-list").get(0);
            if (product === undefined) {
                console.log("failed to get product in onMaxRate");
                return;
            }
            var rate = $(product).find(".interest-rate .num-style").get(0);
            if (rate === undefined) {
                console.log("failed to get rate in onMaxRate");
                return;
            }
            var dRate = parseFloat($(rate).text());
            console.log("max rate:\t%f", dRate);
            onList(dRate, availableMoney - 1000, availableMoney);
        },
        error: function() {
            console.log("failed to get list in onMaxRate");
        }
    });
}

function onFundDetail(data) {
    var doc = $(data);
    var amount = doc.find(".available-balance-wrap > .balance-amount").get(0);
    if (amount === undefined) {
        console.log("failed to get available amount");
        return;
    }
    var availableMoney = parseFloat($(amount).text().replace(",", ""));
    console.log("available money:\t%f", availableMoney);

    onMaxRate(parseInt(availableMoney));
}

function onUserInfo(data) {
    if (data.userName === undefined) {
        console.log("failed to get user information.");
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
            console.log("failed to get fund detail");
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
            console.log("failed to get user information.");
        }
    });
});
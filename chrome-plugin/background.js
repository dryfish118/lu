chrome.runtime.onMessage.addListener(function(request, _, sendResponse) {
    if (request.message === "get") {
        if (request.object == "username") {
            sendResponse(getUserName());
        } else if (request.object == "userpass") {
            sendResponse(getUserPass());
        } else if (request.object == "tradepass") {
            sendResponse(getTradePass());
        } else if (request.object == "minmoney") {
            sendResponse(getMinMoney());
        } else if (request.object == "stepmoney") {
            sendResponse(getStepMoney());
        } else if (request.object == "minrate") {
            sendResponse(getMinRate());
        }
    } else if (request.message === "set") {
        localStorage[request.object] = request.value;
    }
});

function getUserName() {
    return localStorage.username;
}

function getUserPass() {
    return localStorage.userpass;
}

function getTradePass() {
    return localStorage.tradepass;
}

function getMinMoney() {
    if (localStorage.minmoney === undefined) {
        return 5000;
    } else {
        return localStorage.minmoney;
    }
}

function getStepMoney() {
    if (localStorage.stepmoney === undefined) {
        return 500;
    } else {
        return localStorage.stepmoney;
    }
}

function getMinRate() {
    if (localStorage.minrate === undefined) {
        return 0.02;
    } else {
        return localStorage.minrate;
    }
}

function onTrade(id) {
    console.log("begin trading");
    chrome.tabs.sendMessage(tab.id, {
            message: "begin trading",
            tradepass: getTradePass()
        }, null,
        function(response) {
            if (response !== undefined && response.result == "Ok") {
                console.log("Succeeded to trade");
            } else {
                console.log("failed to trade");
            }
        });
}

function onBuyInNew(strUrl) {
    console.log("open trade page in the new tab");
    strUrl = "https://list.lu.com" + strUrl;
    chrome.tabs.create({ url: strUrl, selected: true },
        function(tab) {
            onTrade(tab.id);
        });
}

function onBuyInCurrent(id, strUrl) {
    console.log("open trade page in the tab %d", id);
    strUrl = "https://list.lu.com" + strUrl;
    chrome.tabs.update({ openerTabId: id, url: strUrl },
        function(tab) {
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

function _onBuy(strUrl) {
    return function() {
        onBuy(strUrl);
    };
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
    if (maxM < getMinMoney()) {
        console.log("poor man");
        return;
    }
    if (maxM - minM > getMinMoney() || minM < getMinMoney()) {
        console.log("poor man, refresh & restart");
        setTimeout(_onList(maxRate, maxM - getStepMoney(), maxM), 5 * 1000);
        return;
    }
    var strUrl = "https://list.lu.com/list/r030";
    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false&minMoney=" + minM + "&maxMoney=" + maxM;
    $.ajax({
        url: strUrl,
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
                setTimeout(_onList(maxRate, minM - getStepMoney(), maxM), 5 * 1000);
                return;
            }
            var products = [];
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
                if (maxRate - product.rate > getMinRate()) {
                    return true;
                }

                var amount = $(this).find(".product-amount .num-style").get(0);
                if (amount === undefined) {
                    console.log("failed to get product amount");
                    return false;
                }
                product.amount = parseFloat($(amount).text().replace(",", ""));

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

            setTimeout(_onBuy(products[0].url));
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
    var strUrl = "https://list.lu.com/list/r030";
    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false";
    $.ajax({
        url: strUrl,
        dataType: "html",
        data: strData,
        success: function(doc) {
            var product = $(doc).find(".product-list").get(0);
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
            setTimeout(_onList(dRate, availableMoney - getStepMoney(), availableMoney), 5 * 1000);
        },
        error: function() {
            console.log("failed to get list in onMaxRate");
        }
    });
}

function _onMaxRate(availableMoney) {
    return function() {
        onMaxRate(availableMoney);
    };
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

    setTimeout(_onMaxRate(parseInt(availableMoney)));
}

function onUserInfo(data) {
    if (data.uid === undefined) {
        console.log("failed to get user information.");
        return;
    }
    console.log("user id:\t%d", data.uid);
    console.log("user name:\t%s", data.userName);

    var strUrl = "https://my.lu.com/my/yeb/fund-detail";
    $.ajax({
        url: strUrl,
        dataType: "html",
        success: function(data) {
            onFundDetail(data);
        },
        error: function() {
            console.log("failed to get fund detail");
        }
    });
}

function onLoginInNewTab() {
    console.log("open 'user.lu.com' in the new tab");

    var strUrl = "https://user.lu.com/user/login";
    chrome.tabs.create({ url: strUrl, selected: true },
        function(tab) {
            setTimeout(_onLogin(tab), 5 * 1000);
        });
}

function onLoginInCurrentTab(tab) {
    console.log("open 'user.lu.com' in the current tab %d", tab.id);

    var strUrl = "https://user.lu.com/user/login";
    chrome.tabs.update({ openerTabId: tab.id, url: strUrl },
        function(tab) {
            setTimeout(_onLogin(tab), 5 * 1000);
        });
}

function _onLogin(tab) {
    return function() {
        onLogin(tab);
    };
}

function onLogin(tab) {
    if (tab === undefined) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs === undefined) {
                onLoginInNewTab();
            } else {
                onLogin(tabs[0]);
            }
        });
    } else {
        console.log("current url is '%s'", tab.url);
        var strUrl = "https://user.lu.com/user/login";
        var newUrl = tab.url.substr(0, strUrl.length).toLocaleLowerCase();
        if (strUrl !== newUrl) {
            onLoginInCurrentTab(tab);
            return;
        }

        console.log("sendMessage (login lu) to %d", tab.id);
        chrome.tabs.sendMessage(tab.id, {
                message: "login lu",
                username: getUserName(),
                userpass: getUserPass()
            }, null,
            function(response) {
                if (response !== undefined && response.result == "Ok") {
                    console.log("Succeeded to login");
                    setTimeout(_onStart(), 5 * 1000);
                } else {
                    console.log("failed to login");
                }
            });
    }
}

function _onStart() {
    return function() {
        onStart();
    };
}

function onStart() {
    var strUrl = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
    $.ajax({
        url: strUrl,
        dataType: "json",
        success: function(data) {
            if (data.uid === undefined) {
                onLogin();
            } else {
                onUserInfo(data);
            }
        },
        error: function() {
            console.log("failed to get user information.");
        }
    });
}

chrome.browserAction.onClicked.addListener(function() {
    onStart();
});
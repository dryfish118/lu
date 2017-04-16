var WorkFlow = {
    WorkFlow_Idle: 1, // 空闲状态
    WorkFlow_Start: 2, // 开始投资
    WorkFlow_OpenLoginPage: 3, // 打开登录页面
    WorkFlow_Login: 4, // 登录
    WorkFlow_OpenFundDetailPage: 5, // 打开基金页面
    WorkFlow_InjectFunddetail: 6, // 基金
    WorkFlow_AcquireFundDetail: 7, // 获取用户可用金额
    WorkFlow_AcquireMaxRate: 8, // 获得当前最大利率
    WorkFlow_AcquireProductList: 9, // 获取产品信息
    WorkFlow_OpenProductPage: 10, // 打开产品页面
    WorkFlow_InjectProduct: 11, // 产品
    WorkFlow_InjectTrade: 12, // 交易
    WorkFlow_InjectContract: 13, // 支付确认
    WorkFlow_InjectSecurity: 14, // 支付确认
    WorkFlow_Agree: 15,
};

var g_workFlow = WorkFlow.WorkFlow_Idle;

var g_terminate;
var g_tab;
var g_uid;
var g_userName;
var g_mobileNo;
var g_money;
var g_rate;
var url_monitor;

var url_login = "https://user.lu.com/user/login";
var url_userinfo = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
var url_account = "https://my.lu.com/my/account";
var url_funddetail = "https://my.lu.com/my/yeb/fund-detail";
var url_r030 = "https://list.lu.com/list/r030";
var url_list = "https://list.lu.com";
var url_trade = "https://trading.lu.com/trading/trade-info";
var url_contract = "https://trading.lu.com/trading/contract-info";
var url_security = "https://trading.lu.com/trading/security-valid";

function isUrlMatch(url1, url2) {
    if (url1 !== undefined && url2 !== undefined) {
        url1 = url1.toLowerCase();
        url2 = url2.substr(0, url1.length).toLowerCase();
        return (url1 === url2);
    }
    return false;
}

function getTelephone() {
    if (localStorage.telephone === undefined) {
        return "";
    } else {
        return localStorage.telephone;
    }
}

function getUserName() {
    if (localStorage.username === undefined) {
        return "";
    } else {
        return localStorage.username;
    }
}

function getUserPass() {
    if (localStorage.userpass === undefined) {
        return "";
    } else {
        return localStorage.userpass;
    }
}

function getTradePass() {
    if (localStorage.tradepass === undefined) {
        return "";
    } else {
        return localStorage.tradepass;
    }
}

function getRefresh() {
    if (localStorage.refresh === undefined) {
        return 3000;
    } else {
        return parseInt(localStorage.refresh);
    }
}

function getMaxMoney() {
    if (localStorage.maxmoney === undefined) {
        return 0;
    } else {
        return parseInt(localStorage.maxmoney);
    }
}

function getMinMoney() {
    if (localStorage.minmoney === undefined) {
        return 5000;
    } else {
        return parseInt(localStorage.minmoney);
    }
}

function getStepMoney() {
    if (localStorage.stepmoney === undefined) {
        return 500;
    } else {
        return parseInt(localStorage.stepmoney);
    }
}

function getMinRate() {
    if (localStorage.minrate === undefined) {
        return 4.8;
    } else {
        return parseFloat(localStorage.minrate);
    }
}

function getStepRate() {
    if (localStorage.steprate === undefined) {
        return 0.02;
    } else {
        return parseFloat(localStorage.steprate);
    }
}

chrome.runtime.onMessage.addListener(function(request, _, sendResponse) {
    if (request.message === "get") {
        if (request.object === "telephone") {
            sendResponse(getTelephone());
        } else if (request.object === "username") {
            sendResponse(getUserName());
        } else if (request.object === "userpass") {
            sendResponse(getUserPass());
        } else if (request.object === "tradepass") {
            sendResponse(getTradePass());
        } else if (request.object === "refresh") {
            sendResponse(getRefresh());
        } else if (request.object === "maxmoney") {
            sendResponse(getMaxMoney());
        } else if (request.object === "minmoney") {
            sendResponse(getMinMoney());
        } else if (request.object === "stepmoney") {
            sendResponse(getStepMoney());
        } else if (request.object === "minrate") {
            sendResponse(getMinRate());
        } else if (request.object === "steprate") {
            sendResponse(getStepRate());
        }
    } else if (request.message === "set") {
        localStorage[request.object] = request.value;
    } else if (request.message === "inject") {
        if (request.object === "funddetail") {
            parseAvailableMoney(request.result, request.money);
        } else if (request.object === "product" ||
            request.object === "trade" ||
            request.object === "contract" ||
            request.object === "security") {
            if (request.result === "No") {
                console.log("the product is sold, refresh & restart after 5s.");
                setTimeout(_acquireProductList(g_money - getStepMoney()), getRefresh());
            }
        }
    } else if (request.message === "log") {
        console.log(request.object);
    }
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    if (isUrlMatch(url_monitor, details.url)) {
        console.log("onCompleted %s", details.url);
        switch (g_workFlow) {
            case WorkFlow.WorkFlow_OpenLoginPage:
                {
                    injectLogin();
                    break;
                }
            case WorkFlow.WorkFlow_Login:
                {
                    startWork();
                    break;
                }
            case WorkFlow.WorkFlow_OpenFundDetailPage:
                {
                    injectFunddetail();
                    break;
                }
            case WorkFlow.WorkFlow_OpenProductPage:
                {
                    injectProduct();
                    break;
                }
            case WorkFlow.WorkFlow_InjectProduct:
                {
                    injectTrade();
                    break;
                }
            case WorkFlow.WorkFlow_InjectTrade:
            case WorkFlow.WorkFlow_TradePageClicked:
                {
                    injectContract();
                    break;
                }
            case WorkFlow.WorkFlow_InjectContract:
            case WorkFlow.WorkFlow_ContractPageClick:
                {
                    injectSecurity();
                    break;
                }
            case WorkFlow.WorkFlow_InjectSecurity:
            case WorkFlow.WorkFlow_SecurityPageClick:
                {
                    //doSecurity();
                    break;
                }
        }
    } else if (g_workFlow === WorkFlow.WorkFlow_Login && isUrlMatch(url_login, details.url)) {
        console.log("failed to login, try again.");
        injectLogin();
    }
});

function injectSecurity() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectSecurity;
    console.log("WorkFlow_InjectSecurity");

    url_monitor = url_security;
    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "security.js" }, function() {
            console.log("security.js injected.");
            chrome.tabs.sendMessage(g_tab.id, { message: "security" });
        });
    });
}

function injectContract() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectContract;
    console.log("WorkFlow_InjectContract");

    url_monitor = url_security;
    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "contract.js" }, function() {
            console.log("contract.js injected.");
            chrome.tabs.sendMessage(g_tab.id, { message: "contract" });
        });
    });
}

function injectTrade() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectTrade;
    console.log("WorkFlow_Trace");

    url_monitor = url_contract;
    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "trade.js" }, function() {
            console.log("trade.js injected.");
            chrome.tabs.sendMessage(g_tab.id, { message: "trade" });
        });
    });
}

function injectProduct() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectProduct;
    console.log("WorkFlow_InjectProduct");

    url_monitor = url_trade;
    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "product.js" }, function() {
            console.log("product.js injected.");
            chrome.tabs.sendMessage(g_tab.id, { message: "product" });
        });
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

function _acquireProductList(minMoney) {
    return function() {
        acquireProductList(minMoney);
    };
}

function acquireProductList(minMoney) {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    if (minMoney < getMinMoney()) {
        minMoney = getMinMoney();
    }

    g_workFlow = WorkFlow.WorkFlow_AcquireProductList;
    console.log("WorkFlow_AcquireProductList (%f%% %f %f)", g_rate, minMoney, g_money);

    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false&minMoney=" + minMoney + "&maxMoney=" + g_money;
    $.ajax({
        url: url_r030,
        dataType: "html",
        data: strData,
        success: function(data) {
            var doc = $(data);
            var productList = doc.find(".product-list");
            if (productList === undefined) {
                console.log("failed to acquire the product list, refresh & restart after 5s.");
                setTimeout(_acquireProductList(g_money - getStepMoney()), getRefresh());
                return;
            }
            if (productList.length === 0) {
                console.log("failed to acquire the product list between from %d to %d", minMoney, g_money);
                acquireProductList(minMoney - getStepMoney());
                return;
            }
            var products = [];
            productList.each(function() {
                var product = LuProduct.createProduct();

                var status = $(this).find(".product-status").get(0);
                if (status === undefined) {
                    console.log("failed to acquire the product status.");
                    return true;
                }
                var a = $(status).find("a");
                if ($(a).attr("data-sk") !== "invest_list") {
                    console.log("the product is sold.");
                    return true;
                }

                var rate = $(this).find(".interest-rate .num-style").get(0);
                if (rate === undefined) {
                    console.log("failed to acquire the product rate.");
                    return true;
                }
                product.rate = parseFloat($(rate).text());
                if (g_rate - product.rate > getStepRate()) {
                    console.log("the product rate %f is lower than the min rate.", product.rate);
                    return false;
                }

                var name = $(this).find(".product-name").get(0);
                if (name === undefined) {
                    console.log("failed to acquire the product name.");
                    return true;
                }
                a = $(name).find("a");
                product.name = $(a).text();
                product.url = $(a).attr("href");
                if (product.url === undefined || product.url.length === 0) {
                    console.log("failed to acquire the product url.");
                    return true;
                }

                var amount = $(this).find(".product-amount .num-style").get(0);
                if (amount === undefined) {
                    console.log("failed to acquire the product amount");
                    return true;
                }
                product.amount = parseFloat($(amount).text().replace(",", ""));

                console.log("product information: {name: %s, url: %s, rate: %f%%, amount:%f}",
                    product.name, product.url, product.rate, product.amount);

                var i = 0;
                for (; i < products.length; i++) {
                    if (product.rate * product.amount > products[i].rate * products[i].amount) {
                        products.splice(i, 0, product);
                        break;
                    }
                }
                if (i === products.length) {
                    products.push(product);
                }

                return true;
            });

            if (products.length === 0) {
                console.log("failed to acquire any matched product, refresh & restart after 5s.");
                setTimeout(_acquireProductList(g_money - getStepMoney()), getRefresh());
                return;
            }


            g_workFlow = WorkFlow.WorkFlow_OpenProductPage;
            console.log("WorkFlow_OpenProductPage %s", products[0].url);
            url_monitor = url_list + products[0].url;
            chrome.tabs.update({ openerTabId: g_tab.id, url: url_monitor });
        },
        error: function() {
            console.log("failed to acquire the product list.");
            g_workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        }
    });
}

function acquireMaxRate() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_AcquireMaxRate;
    console.log("WorkFlow_AcquireMaxRate");

    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false";
    $.ajax({
        url: url_r030,
        dataType: "html",
        data: strData,
        success: function(doc) {
            var product = $(doc).find(".product-list").get(0);
            if (product === undefined) {
                console.log("failed to acquire the product information.");
                g_workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }
            var rate = $(product).find(".interest-rate .num-style").get(0);
            if (rate === undefined) {
                console.log("failed to acquire the max rate.");
                g_workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }
            g_rate = parseFloat($(rate).text());
            console.log("max rate:\t%f", g_rate);

            var minRate = getMinRate();
            if (minRate !== 0 && g_rate < minRate + getStepRate()) {
                console.log("current max rate is lower than the min rate %f", minRate);
                g_workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }

            acquireProductList(g_money - getStepMoney());
        },
        error: function() {
            console.log("failed to acquire the product list.");
            g_workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        }
    });
}

function parseAvailableMoney(r, m) {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_AcquireFundDetail;
    console.log("WorkFlow_AcquireFundDetail");

    if (r === "No") {
        console.log("failed to acquire the available amount");
        g_workFlow = WorkFlow.WorkFlow_Idle;
        console.log("WorkFlow_Idle");
    } else {
        console.log("available money:\t%f", m);

        var maxMoney = getMaxMoney();
        if (maxMoney !== 0 && maxMoney < m) {
            console.log("use the max money:\t%f", maxMoney);
            m = maxMoney;
        }

        g_money = parseInt(m);
        if (g_money < getMinMoney()) {
            console.log("poor man, go to bed and have a good dream.");
            g_workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        } else {
            //acquireMaxRate();
        }
    }
}

function injectFunddetail() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectFunddetail;
    console.log("WorkFlow_InjectFunddetail");

    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "funddetail.js" }, function() {
            chrome.tabs.sendMessage(g_tab.id, { message: "funddetail" });
        });
    });
}

function injectLogin() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    chrome.tabs.query({ windowId: g_tab.windowId, index: g_tab.index }, function(tabs) {
        console.log("current url: %s", tabs[0].url);
        if (!isUrlMatch(url_login, tabs[0].url)) {
            g_workFlow = WorkFlow.WorkFlow_OpenLoginPage;
            console.log("WorkFlow_OpenLoginPage");

            url_monitor = url_login;
            chrome.tabs.update({ openerTabId: g_tab.id, url: url_monitor });
        } else {
            g_workFlow = WorkFlow.WorkFlow_Login;
            console.log("WorkFlow_Login");

            url_monitor = url_account;
            chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
                chrome.tabs.executeScript(g_tab.id, { file: "login.js" }, function() {
                    chrome.tabs.sendMessage(g_tab.id, { message: "login" });
                });
            });
        }
    });
}

function startWork() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_Start;
    console.log("WorkFlow_Start");

    $.ajax({
        url: url_userinfo,
        dataType: "json",
        success: function(data) {
            if (data.uid === undefined) {
                injectLogin();
            } else {
                g_uid = data.uid;
                g_userName = data.userName;
                g_mobileNo = data.mobileNo;
                console.log("user id:\t%d", g_uid);
                console.log("user name:\t%s", g_userName);
                console.log("mobile:\t%s", g_mobileNo);

                g_workFlow = WorkFlow.WorkFlow_OpenFundDetailPage;
                console.log("WorkFlow_OpenFundDetailPage");
                url_monitor = url_funddetail;
                chrome.tabs.update({ openerTabId: g_tab.id, url: url_monitor });
            }
        },
        error: function() {
            console.log("failed to acquire the user information.");
            g_workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        }
    });
}

chrome.browserAction.onClicked.addListener(function() {
    if (g_workFlow !== WorkFlow.WorkFlow_Idle && !g_terminate) {
        g_terminate = true;
        console.log("terminated!");

        g_workFlow = WorkFlow.WorkFlow_Idle;
        console.log("WorkFlow_Idle");
    } else {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs === undefined) {
                console.log("please run in chrome browser.");
                return;
            }
            g_tab = tabs[0];
        });

        g_workFlow = WorkFlow.WorkFlow_Idle;
        console.log("WorkFlow_Idle");

        g_terminate = false;
        startWork();
    }
});
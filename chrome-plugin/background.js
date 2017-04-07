var WorkFlow = {
    WorkFlow_Idle: 1, // 空闲状态
    WorkFlow_Start: 2, // 开始投资
    WorkFlow_Login: 3, // 准备登录
    WorkFlow_OpenLoginPage: 4, // 打开登录页面
    WorkFlow_LoginPageOpened: 5, // 登录页面已经打开
    WorkFlow_LoginPageJumped: 6, // 点击登录按钮
    WorkFlow_Logined: 7, // 已登录
    WorkFlow_AquireUser: 8, // 获取用户信息
    WorkFlow_AquireFundDetail: 9, // 获取用户可用金额
    WorkFlow_AquireMaxRate: 10, // 获得当前最大利率
    WorkFlow_AquireProductList: 11, // 获取产品信息
    WorkFlow_OpenProductPage: 12, // 打开产品页面
    WorkFlow_Investment: 13, // 投资产品
    WorkFlow_ProductPageJumped: 14, // 点击投资按钮
    WorkFlow_Trade: 10,
    WorkFlow_Agree: 11,
    WorkFlow_Password: 12,
    WorkFlow_Finish: 13,
};

var workFlow = WorkFlow.WorkFlow_Idle;

var g_uid;
var g_userName;
var g_mobileNo;
var g_money;
var g_rate;
var url_monitor;

var url_login = "https://user.lu.com/user/login";
var url_userinfo = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
var url_account = "https://my.lu.com/my/account";
var url_fund = "https://my.lu.com/my/yeb/fund-detail";
var url_r030 = "https://list.lu.com/list/r030";
var url_list = "https://list.lu.com";

function isUrlMatch(url1, url2) {
    url1 = url1.toLocaleLowerCase();
    url2 = url2.substr(0, url1.length).toLocaleLowerCase();
    return (url1 === url2);
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

function getMaxMoney() {
    if (localStorage.maxmoney === undefined) {
        return 0;
    } else {
        return localStorage.maxmoney;
    }
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
        return 4.8;
    } else {
        return localStorage.minrate;
    }
}

function getStepRate() {
    if (localStorage.steprate === undefined) {
        return 0.02;
    } else {
        return localStorage.steprate;
    }
}

chrome.runtime.onMessage.addListener(function(request, _, sendResponse) {
    if (request.message === "get") {
        if (request.object === "username") {
            sendResponse(getUserName());
        } else if (request.object === "userpass") {
            sendResponse(getUserPass());
        } else if (request.object === "tradepass") {
            sendResponse(getTradePass());
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
    } else if (request.message === "jump") {
        if (request.object === "login") {
            workFlow = WorkFlow.WorkFlow_LoginPageJumped;
            console.log("WorkFlow_LoginPageJumped");
        } else if (request.object === "investment") {
            if (request.result === "Ok") {
                workFlow = WorkFlow.WorkFlow_ProductPageJumped;
                console.log("WorkFlow_ProductPageJumped");
            } else {
                console.log("the product is sold, refresh & restart after 5s.");
                setTimeout(_aquireProductList(g_money - parseInt(getStepMoney())), 5 * 1000);
            }
        }
    }
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    switch (workFlow) {
        case WorkFlow.WorkFlow_OpenLoginPage:
            {
                if (isUrlMatch(url_login, details.url)) {
                    console.log("onCompleted %s", details.url);
                    doLogin();
                }
                break;
            }
        case WorkFlow.WorkFlow_LoginPageOpened:
        case WorkFlow.WorkFlow_LoginPageJumped:
            {
                if (isUrlMatch(url_account, details.url)) {
                    console.log("onCompleted %s", details.url);
                    startWork();
                } else if (isUrlMatch(url_login, details.url)) {
                    console.log("onCompleted %s", details.url);
                    console.log("failed to login, relogin");
                    doLogin();
                }
                break;
            }
        case WorkFlow.WorkFlow_OpenProductPage:
            {
                if (isUrlMatch(url_monitor, details.url)) {
                    console.log("onCompleted %s", details.url);
                    doInvestment();
                }
                break;
            }
        case WorkFlow.WorkFlow_Investment:
        case WorkFlow.WorkFlow_ProductPageJumped:
            {
                if (isUrlMatch(url_monitor, details.url)) {
                    console.log("onCompleted %s", details.url);
                }
                break;
            }
    }
});

function doInvestment() {
    workFlow = WorkFlow.WorkFlow_Investment;
    console.log("WorkFlow_Investment");

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs === undefined) {
            console.log("the product page is not open.");
            openProductPage();
        } else {
            url_monitor = "https://trading.lu.com/trading/trade-info";
            chrome.tabs.executeScript(tabs[0].id, { file: "jquery.min.js" }, function() {
                chrome.tabs.executeScript(tabs[0].id, { file: "investment.js" }, function() {
                    console.log("investment.js injected.");
                    chrome.tabs.sendMessage(tabs[0].id, { message: "investment" });
                });
            });
        }
    });
}

function openProductPage() {
    workFlow = WorkFlow.WorkFlow_OpenProductPage;
    console.log("WorkFlow_OpenProductPage");

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs === undefined) {
            console.log("open the product page in the new tab");
            chrome.tabs.create({ url: url_monitor, selected: true });
        } else {
            console.log("open the product page in the current tab %d", tabs[0].id);
            chrome.tabs.update({ openerTabId: tabs[0].id, url: url_monitor });
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

function _aquireProductList(minMoney) {
    return function() {
        aquireProductList(minMoney);
    };
}

function aquireProductList(minMoney) {
    workFlow = WorkFlow.WorkFlow_AquireProductList;
    console.log("WorkFlow_AquireProductList (%f%% %f %f)", g_rate, minMoney, g_money);

    if (g_money - minMoney > parseInt(getMinMoney()) || minMoney < parseInt(getMinMoney())) {
        console.log("poor man, refresh & restart after 5s.");
        setTimeout(_aquireProductList(g_money - parseInt(getStepMoney())), 5 * 1000);
        return;
    }

    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false&minMoney=" + minMoney + "&maxMoney=" + g_money;
    $.ajax({
        url: url_r030,
        dataType: "html",
        data: strData,
        success: function(data) {
            var doc = $(data);
            var productList = doc.find(".product-list");
            if (productList === undefined) {
                console.log("failed to aquire the product list, refresh & restart after 5s.");
                setTimeout(_aquireProductList(g_money - parseInt(getStepMoney())), 5 * 1000);
                return;
            }
            if (productList.length === 0) {
                console.log("failed to aquire the product list between from %d to %d", minMoney, g_money);
                aquireProductList(minMoney - parseInt(getStepMoney()));
                return;
            }
            var products = [];
            productList.each(function() {
                console.log("product information");

                var product = LuProduct.createProduct();

                var status = $(this).find(".product-status").get(0);
                if (status === undefined) {
                    console.log("failed to aquire the product status.");
                    return true;
                }
                var a = $(status).find("a");
                if ($(a).attr("data-sk") !== "invest_list") {
                    console.log("the product is sold.");
                    return true;
                }

                var rate = $(this).find(".interest-rate .num-style").get(0);
                if (rate === undefined) {
                    console.log("failed to aquire the product rate.");
                    return true;
                }
                product.rate = parseFloat($(rate).text());
                if (g_rate - product.rate > parseFloat(getStepRate())) {
                    console.log("the product rate %f is lower than the min rate.", product.rate);
                    return false;
                }

                var name = $(this).find(".product-name").get(0);
                if (name === undefined) {
                    console.log("failed to aquire the product name.");
                    return true;
                }
                a = $(name).find("a");
                product.name = $(a).text();
                product.url = $(a).attr("href");
                if (product.url === undefined || product.url.length === 0) {
                    console.log("failed to aquire the product url.");
                    return true;
                }

                var amount = $(this).find(".product-amount .num-style").get(0);
                if (amount === undefined) {
                    console.log("failed to aquire the product amount");
                    return true;
                }
                product.amount = parseFloat($(amount).text().replace(",", ""));

                console.log("\tname:\t%s", product.name);
                console.log("\turl:\t%s", product.url);
                console.log("\trate:\t%f%%", product.rate);
                console.log("\tamount:\t%f", product.amount);

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
                console.log("failed to aquire any matched product, refresh & restart after 5s.");
                setTimeout(_aquireProductList(g_money - parseInt(getStepMoney())), 5 * 1000);
                return;
            }

            url_monitor = url_list + products[0].url;
            openProductPage();
        },
        error: function() {
            console.log("failed to aquire the product list.");
            workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        }
    });
}

function aquireMaxRate() {
    workFlow = WorkFlow.WorkFlow_AquireMaxRate;
    console.log("WorkFlow_AquireMaxRate");

    var strData = "currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false";
    $.ajax({
        url: url_r030,
        dataType: "html",
        data: strData,
        success: function(doc) {
            var product = $(doc).find(".product-list").get(0);
            if (product === undefined) {
                console.log("failed to aquire the product information.");
                workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }
            var rate = $(product).find(".interest-rate .num-style").get(0);
            if (rate === undefined) {
                console.log("failed to aquire the max rate.");
                workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }
            g_rate = parseFloat($(rate).text());
            console.log("max rate:\t%f", g_rate);

            var minRate = parseFloat(getMinRate());
            if (minRate !== 0 && g_rate < minRate + parseFloat(getStepRate())) {
                console.log("current max rate is lower than the min rate %f", minRate);
                workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }

            aquireProductList(g_money - parseInt(getStepMoney()));
        },
        error: function() {
            console.log("failed to aquire the product list.");
            workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        }
    });
}

function aquireFundDetail() {
    workFlow = WorkFlow.WorkFlow_AquireFundDetail;
    console.log("WorkFlow_AquireFundDetail");

    $.ajax({
        url: url_fund,
        dataType: "html",
        success: function(data) {
            var doc = $(data);
            var amount = doc.find(".available-balance-wrap > .balance-amount").get(0);
            if (amount === undefined) {
                console.log("failed to aquire the available amount");
                workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }
            var availableMoney = parseFloat($(amount).text().replace(",", ""));
            console.log("available money:\t%f", availableMoney);

            var maxMoney = parseFloat(getMaxMoney());
            if (maxMoney !== 0 && maxMoney < availableMoney) {
                console.log("use the max money:\t%f", maxMoney);
                availableMoney = maxMoney;
            }

            g_money = parseInt(availableMoney);
            if (g_money < parseInt(getMinMoney())) {
                console.log("poor man, go to bed and have a good dream.");
                workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }

            aquireMaxRate();
        },
        error: function() {
            console.log("failed to aquire the fund detail");
            workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        }
    });
}

function aquireUserInfo(data) {
    workFlow = WorkFlow.WorkFlow_AquireUser;
    console.log("WorkFlow_AquireUser");

    g_uid = data.uid;
    g_userName = data.userName;
    g_mobileNo = data.mobileNo;
    console.log("user id:\t%d", g_uid);
    console.log("user name:\t%s", g_userName);
    console.log("mobile:\t%s", g_mobileNo);

    aquireFundDetail();
}

function doLogin() {
    workFlow = WorkFlow.WorkFlow_Login;
    console.log("WorkFlow_Login");

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs === undefined) {
            console.log("open the login page in the new tab");
            chrome.tabs.create({ url: url_login, selected: true }, function() {
                workFlow = WorkFlow.WorkFlow_OpenLoginPage;
                console.log("WorkFlow_OpenLoginPage");
            });
        } else {
            var strUrl = tabs[0].url;
            console.log("current url is '%s'", strUrl);
            if (!isUrlMatch(url_login, strUrl)) {
                console.log("open the login page in the current tab %d", tabs[0].id);
                chrome.tabs.update({ openerTabId: tabs[0].id, url: url_login }, function() {
                    workFlow = WorkFlow.WorkFlow_OpenLoginPage;
                    console.log("WorkFlow_OpenLoginPage");
                });
                return;
            }

            workFlow = WorkFlow.WorkFlow_LoginPageOpened;
            console.log("WorkFlow_LoginPageOpened");
            chrome.tabs.executeScript(tabs[0].id, { file: "jquery.min.js" }, function() {
                chrome.tabs.executeScript(tabs[0].id, { file: "login.js" }, function() {
                    console.log("login.js injected.");
                    chrome.tabs.sendMessage(tabs[0].id, { message: "login" });
                });
            });
        }
    });
}

function startWork() {
    workFlow = WorkFlow.WorkFlow_Start;
    console.log("WorkFlow_Start");

    $.ajax({
        url: url_userinfo,
        dataType: "json",
        success: function(data) {
            if (data.uid === undefined) {
                doLogin();
            } else {
                workFlow = WorkFlow.WorkFlow_Logined;
                console.log("WorkFlow_Logined");
                aquireUserInfo(data);
            }
        },
        error: function() {
            console.log("failed to aquire the user information.");
            workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        }
    });
}

chrome.browserAction.onClicked.addListener(function() {
    workFlow = WorkFlow.WorkFlow_Idle;
    console.log("WorkFlow_Idle");

    startWork();
});
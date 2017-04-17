var WorkFlow = {
    WorkFlow_Idle: 1, // 空闲状态
    WorkFlow_Start: 2, // 开始投资
    WorkFlow_OpenLoginPage: 3, // 打开登录页面
    WorkFlow_InjectLogin: 4, // 嵌入登录代码
    WorkFlow_AcquireUserInfo: 5, // 获取用户信息
    WorkFlow_OpenFundDetailPage: 6, // 打开基金页面
    WorkFlow_InjectFunddetail: 7, // 嵌入基金代码
    WorkFlow_AcquireFundDetail: 8, // 获取用户可用金额
    WorkFlow_OpenMaxRatePage: 9, // 以利率最大排序取产品列表
    WorkFlow_InjectMaxRate: 10, // 嵌入获取利率代码
    WorkFlow_AcquireMaxRate: 11, // 获得当前最大利率
    WorkFlow_OpenProductListPage: 12, // 取资金内利率最大的产品列表
    WorkFlow_InjectProductList: 13, // 嵌入产品
    WorkFlow_AcquireProductList: 14, // 获取产品信息
    WorkFlow_OpenProductPage: 15, // 打开产品页面
    WorkFlow_InjectProduct: 16, // 产品
    WorkFlow_InjectTrade: 17, // 交易
    WorkFlow_InjectContract: 18, // 支付确认
    WorkFlow_InjectSecurity: 19, // 支付确认
    WorkFlow_Agree: 20,
};

var g_workFlow = WorkFlow.WorkFlow_Idle;

var g_terminate;
var g_tab;
var g_uid;
var g_userName;
var g_mobileNo;
var g_fromMoney;
var g_toMoney;
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
    var message = request.message;
    var param1 = request.param1;
    var param2 = request.param2;
    if (message === "get") {
        if (param1 === "telephone") {
            sendResponse(getTelephone());
        } else if (param1 === "username") {
            sendResponse(getUserName());
        } else if (param1 === "userpass") {
            sendResponse(getUserPass());
        } else if (param1 === "tradepass") {
            sendResponse(getTradePass());
        } else if (param1 === "refresh") {
            sendResponse(getRefresh());
        } else if (param1 === "maxmoney") {
            sendResponse(getMaxMoney());
        } else if (param1 === "minmoney") {
            sendResponse(getMinMoney());
        } else if (param1 === "stepmoney") {
            sendResponse(getStepMoney());
        } else if (param1 === "minrate") {
            sendResponse(getMinRate());
        } else if (param1 === "steprate") {
            sendResponse(getStepRate());
        } else if (param1 === "validrate") {
            sendResponse(g_rate);
        }
    } else if (message === "set") {
        localStorage[param1] = param2;
    } else if (message === "log") {
        console.log(param1);
    } else if (message === "funddetail") {
        acquireAvailableMoney(param1, param2);
    } else if (message === "maxrate") {
        acquireMaxrate(param1, param2);
    } else if (message === "productlist") {
        acquireProductList(param1, param2);
    } else if (message === "product" ||
        message === "trade" ||
        message === "contract" ||
        message === "security") {
        if (param1 === "No") {
            console.log("the product is sold, refresh & restart after %d\".", getRefresh() / 1000);
            setTimeout(openProductListPage, getRefresh());
        }
    }
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    if (isUrlMatch(url_monitor, details.url)) {
        console.log("onCompleted %s", details.url);
        switch (g_workFlow) {
            case WorkFlow.WorkFlow_OpenLoginPage:
                {
                    parseLoginPage();
                    break;
                }
            case WorkFlow.WorkFlow_InjectLogin:
                {
                    startWork();
                    break;
                }
            case WorkFlow.WorkFlow_OpenFundDetailPage:
                {
                    injectFunddetailPage();
                    break;
                }
            case WorkFlow.WorkFlow_OpenMaxRatePage:
                {
                    injectMaxRatePage();
                    break;
                }
            case WorkFlow.WorkFlow_OpenProductListPage:
                {
                    injectProductListPage();
                    break;
                }
            case WorkFlow.WorkFlow_OpenProductPage:
                {
                    injectProductPage();
                    break;
                }
            case WorkFlow.WorkFlow_InjectProduct:
                {
                    injectTradePage();
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
    } else if (g_workFlow === WorkFlow.WorkFlow_InjectLogin && isUrlMatch(url_login, details.url)) {
        console.log("failed to login, try again.");
        parseLoginPage();
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

function injectTradePage() {
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

function injectProductPage() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectProduct;
    console.log("WorkFlow_InjectProduct");

    url_monitor = url_trade;
    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "inject.js" }, function() {
            chrome.tabs.sendMessage(g_tab.id, { message: "product" });
        });
    });
}

function openProductPage(url) {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_OpenProductPage;
    console.log("WorkFlow_OpenProductPage %s", url);

    url_monitor = url_list + url;
    chrome.tabs.update({ openerTabId: g_tab.id, url: url_monitor });
}

function acquireProductList(result, url) {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    if (result == "No") {
        console.log("failed to acquire the productlist, refresh & restart after %d\".", getRefresh() / 1000);
        setTimeout(openProductListPage, getRefresh());
    } else {
        openProductPage(url);
    }
}

function injectProductListPage() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectProductList;
    console.log("WorkFlow_InjectProductList");

    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "inject.js" }, function() {
            chrome.tabs.sendMessage(g_tab.id, { message: "productlist" });
        });
    });
}

function openProductListPage() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_OpenProductListPage;
    console.log("WorkFlow_OpenProductListPage (%f%% %d %d)", g_rate, g_fromMoney, g_toMoney);

    url_monitor = url_r030;
    var strData = "?currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false&minMoney=" + g_fromMoney + "&maxMoney=" + g_toMoney;
    chrome.tabs.update({ openerTabId: g_tab.id, url: url_monitor + strData });
}

function acquireMaxrate(result, rate) {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_AcquireMaxRate;
    console.log("WorkFlow_AcquireMaxRate");

    if (result === "No") {
        console.log("failed to acquire the max rate.");
        g_workFlow = WorkFlow.WorkFlow_Idle;
        console.log("WorkFlow_Idle");
    } else {
        var minRate = getMinRate();
        var stepRate = getStepRate();
        if (minRate !== 0 && rate < minRate) {
            console.log("current max rate(%f) is lower than the min rate(%f)", rate, minRate);
            g_workFlow = WorkFlow.WorkFlow_Idle;
            console.log("WorkFlow_Idle");
        } else {
            g_rate = rate - stepRate;
            if (minRate !== 0 && g_rate < minRate) {
                g_rate = minRate;
            }
            console.log("valid rate:\t%f", g_rate);

            openProductListPage();
        }
    }
}

function injectMaxRatePage() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectMaxRate;
    console.log("WorkFlow_InjectMaxRate");

    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "inject.js" }, function() {
            chrome.tabs.sendMessage(g_tab.id, { message: "maxrate" });
        });
    });
}

function acquireAvailableMoney(result, money) {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_AcquireFundDetail;
    console.log("WorkFlow_AcquireFundDetail");

    if (result === "No") {
        console.log("failed to acquire the available amount");
        g_workFlow = WorkFlow.WorkFlow_Idle;
        console.log("WorkFlow_Idle");
    } else {
        console.log("available money:\t%f", money);

        var toMoney = getMaxMoney();
        if (toMoney !== 0 && toMoney < money) {
            console.log("use the max money:\t%f", toMoney);
            money = toMoney;
        }

        g_toMoney = parseInt(money);

        g_fromMoney = getMinMoney();
        if (g_fromMoney !== 0) {
            if (g_fromMoney > g_toMoney) {
                console.log("poor man, go to bed and have a good dream.");
                g_workFlow = WorkFlow.WorkFlow_Idle;
                console.log("WorkFlow_Idle");
                return;
            }
        } else {
            g_fromMoney = g_toMoney - getStepMoney();
        }

        g_workFlow = WorkFlow.WorkFlow_OpenMaxRatePage;
        console.log("WorkFlow_OpenMaxRatePage");
        url_monitor = url_r030;
        var strUrl = url_r030 + "?currentPage=1&orderType=R030_INVEST_RATE&orderAsc=false";
        chrome.tabs.update({ openerTabId: g_tab.id, url: strUrl });
    }
}

function injectFunddetailPage() {
    if (g_terminate) {
        g_terminate = false;
        return;
    }

    g_workFlow = WorkFlow.WorkFlow_InjectFunddetail;
    console.log("WorkFlow_InjectFunddetail");

    chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
        chrome.tabs.executeScript(g_tab.id, { file: "inject.js" }, function() {
            chrome.tabs.sendMessage(g_tab.id, { message: "funddetail" });
        });
    });
}

function parseLoginPage() {
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
            g_workFlow = WorkFlow.WorkFlow_InjectLogin;
            console.log("WorkFlow_InjectLogin");

            url_monitor = url_account;
            chrome.tabs.executeScript(g_tab.id, { file: "jquery.min.js" }, function() {
                chrome.tabs.executeScript(g_tab.id, { file: "inject.js" }, function() {
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
                parseLoginPage();
            } else {
                g_workFlow = WorkFlow.WorkFlow_AcquireUserInfo;
                console.log("WorkFlow_AcquireUserInfo");

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
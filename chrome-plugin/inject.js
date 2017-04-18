chrome.runtime.sendMessage({ message: "log", param1: "inject.js injected." });

function parseLoginPage() {
    chrome.runtime.sendMessage({ message: "get", param1: "telephone" }, function(response) {
        var telephone = response;
        chrome.runtime.sendMessage({ message: "log", param1: "aquire telephone: " + telephone }, function() {
            if (telephone === "") {
                chrome.runtime.sendMessage({ message: "log", param1: "login by username" }, function() {
                    $("div[data-role=userName]").trigger("click");
                    chrome.runtime.sendMessage({ message: "get", param1: "username" }, function(response) {
                        var username = response;
                        chrome.runtime.sendMessage({ message: "log", param1: "aquire username: " + username }, function() {
                            $("#userNameLogin").val(username);
                            chrome.runtime.sendMessage({ message: "get", param1: "userpass" }, function(response) {
                                var pass = response;
                                chrome.runtime.sendMessage({ message: "log", param1: "aquire password " }, function() {
                                    $("#pwd").val(pass);
                                    $("#loginFlagnew").trigger("click");
                                });
                            });
                        });
                    });
                });
            } else {
                $("div[data-role=mobile]").trigger("click");
                chrome.runtime.sendMessage({ message: "log", param1: "login by telephone" }, function() {
                    $("#userNameLogin").val(telephone);
                    chrome.runtime.sendMessage({ message: "get", param1: "userpass" }, function(response) {
                        var pass = response;
                        chrome.runtime.sendMessage({ message: "log", param1: "aquire password " }, function() {
                            $("#pwd").val(pass);
                            $("#loginFlagnew").trigger("click");
                        });
                    });
                });
            }
        });
    });
}

function parseFunddetailPage() {
    chrome.runtime.sendMessage({ message: "log", param1: "parse fundetail page." }, function() {
        var amount = $(".available-balance-wrap > .balance-amount").get(0);
        if (amount === undefined) {
            chrome.runtime.sendMessage({ message: "log", param1: "failed to get amount." }, function() {
                chrome.runtime.sendMessage({ message: "funddetail", param1: "No" });
            });
        } else {
            chrome.runtime.sendMessage({ message: "log", param1: "amount found." }, function() {
                chrome.runtime.sendMessage({ message: "funddetail", param1: "Yes", param2: parseFloat($(amount).text().replace(",", "")) });
            });
        }
    });
}

function parseMaxratePage() {
    var product = $(".product-list").get(0);
    if (product === undefined) {
        chrome.runtime.sendMessage({ message: "maxrate", param1: "No" });
    } else {
        var rate = $(product).find(".interest-rate .num-style").get(0);
        if (rate === undefined) {
            chrome.runtime.sendMessage({ message: "maxrate", param1: "No" });
        } else {
            chrome.runtime.sendMessage({ message: "maxrate", param1: "Yes", param2: parseFloat($(rate).text()) });
        }
    }
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

function parseProductListPage() {
    var productList = $(".product-list");
    if (productList === undefined || productList.length === 0) {
        chrome.runtime.sendMessage({ message: "productlist", param1: "No" });
    } else {
        chrome.runtime.sendMessage({ message: "get", param1: "validrate" }, function(response) {
            var validRate = response;
            var products = [];
            productList.each(function() {
                var product = LuProduct.createProduct();
                var status = $(this).find(".product-status").get(0);
                if (status !== undefined) {
                    var a = $(status).find("a");
                    if ($(a).attr("data-sk") === "invest_list") {
                        var rate = $(this).find(".interest-rate .num-style").get(0);
                        if (rate !== undefined) {
                            product.rate = parseFloat($(rate).text());
                            if (product.rate >= validRate) {
                                var name = $(this).find(".product-name").get(0);
                                if (name !== undefined) {
                                    a = $(name).find("a");
                                    product.name = $(a).text();
                                    product.url = $(a).attr("href");
                                    if (product.url !== undefined && product.url.length > 0) {
                                        var amount = $(this).find(".product-amount .num-style").get(0);
                                        if (amount !== undefined) {
                                            product.amount = parseFloat($(amount).text().replace(",", ""));

                                            var i = 0;
                                            for (; i < products.length; i++) {
                                                if (product.rate * product.amount > products[i].rate * products[i].amount) {
                                                    break;
                                                }
                                            }
                                            if (i === products.length) {
                                                products.push(product);
                                            } else {
                                                products.splice(i, 0, product);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });

            if (products.length === 0) {
                chrome.runtime.sendMessage({ message: "productlist", param1: "No" });
            } else {
                chrome.runtime.sendMessage({ message: "productlist", param1: "Yes", param2: products[0].url });
            }
        });
    }
}

function parseProductPage() {
    var a = $("a[data-sk=lijitouzi]");
    if (a.html() !== "") {
        $("body").bind("DOMNodeInserted", function() {
            if ($(".blockPage") !== undefined) {
                chrome.runtime.sendMessage({ message: "product", param1: "No" });
            }
        });

        var lijitouzi = a.first();
        $(lijitouzi).html("<span id='lijitouzi'>" + $(lijitouzi).html() + "</span>");
        $("#lijitouzi").trigger("click");
    } else {
        chrome.runtime.sendMessage({ message: "product", param1: "No" });
    }
}

function parseTradePage() {
    $(".infoNextBtn span").trigger("click");
}

function parseContractPage() {
    $(".infoNextBtn span").trigger("click");
}

function parseSecurityPage() {
    $("#kycConfirmCB").click(function() {
        console.log("kycConfirmCB clicked.");
        var confirm = $("#kycOtpConfirm").first();
        $(confirm).html("<span id='btnconfirm'>" + $(confirm).html() + "</span>");
        $("#btnconfirm").trigger("click");
    });

    console.log("trigger click to kycConfirmCB.");
    $("#kycConfirmCB").trigger("click");
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.runtime.sendMessage({ message: "log", param1: "Receive message: " + request.message });
    if (request.message === "login") {
        parseLoginPage();
    } else if (request.message === "funddetail") {
        parseFunddetailPage();
    } else if (request.message === "maxrate") {
        parseMaxratePage();
    } else if (request.message === "productlist") {
        parseProductListPage();
    } else if (request.message === "product") {
        parseProductPage();
    } else if (request.message === "trade") {
        parseTradePage();
    } else if (request.message === "contract") {
        parseContractPage();
    } else if (request.message === "security") {
        parseSecurityPage();
    }
});
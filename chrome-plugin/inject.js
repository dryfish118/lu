function sendLog(msg) {
    chrome.runtime.sendMessage({ message: "log", param1: msg });
}

console.log("inject.js injected.");

function parseLoginPage() {
    console.log("parseAccountPage");
    chrome.runtime.sendMessage({ message: "get", param1: "telephone" }, function(response) {
        var telephone = response;
        console.log("aquire telephone: " + telephone);
        if (telephone === "") {
            console.log("login by username");
            $("div[data-role=userName]").trigger("click");
            chrome.runtime.sendMessage({ message: "get", param1: "username" }, function(response) {
                var username = response;
                console.log("aquire username: " + username);
                $("#userNameLogin").val(username);
                chrome.runtime.sendMessage({ message: "get", param1: "userpass" }, function(response) {
                    var pass = response;
                    console.log("aquire password ");
                    $("#pwd").val(pass);
                    $("#loginFlagnew").trigger("click");
                });
            });
        } else {
            $("div[data-role=mobile]").trigger("click");
            console.log("login by telephone");
            $("#userNameLogin").val(telephone);
            chrome.runtime.sendMessage({ message: "get", param1: "userpass" }, function(response) {
                var pass = response;
                console.log("acquired password.");
                $("#pwd").val(pass);
                $("#loginFlagnew").trigger("click");
            });
        }
    });
}

function parseAccountPage() {
    console.log("parseAccountPage");
    var yue = $(".account-balance-item  .coin-point-item-number").get(0);
    if (yue === undefined) {
        console.log("failed to get yu e.");
        chrome.runtime.sendMessage({ message: "account", param1: "No" });
    } else {
        var linghuobao = $(".coin-point-item-lujinbao  .coin-point-item-number").get(0);
        if (linghuobao === undefined) {
            console.log("failed to get linghuobao.");
            chrome.runtime.sendMessage({ message: "account", param1: "No" });
        } else {
            var amount = parseFloat($(yue).text().replace(",", "")) + parseFloat($(linghuobao).text().replace(",", ""));
            console.log("amount found " + amount.toFixed(2));
            chrome.runtime.sendMessage({ message: "account", param1: "Yes", param2: amount });
        }
    }
}

function parseMaxratePage() {
    console.log("parseMaxratePage");
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

function parseProductListPage(validRate) {
    console.log("parseProductListPage");
    var productList = $(".product-list");
    if (productList === undefined || productList.length === 0) {
        chrome.runtime.sendMessage({ message: "productlist", param1: "No" });
    } else {
        console.log("the valid rate is %s", validRate.toFixed(2));
        var products = [];
        productList.each(function() {
            var product = LuProduct.createProduct();
            var status = $(this).find(".product-status").get(0);
            if (status !== undefined) {
                var a = $(status).find("a");
                if ($(a).attr("data-sk") === "invest_list") {
                    var rate = $(this).find(".interest-rate .num-style").get(0);
                    if (rate !== undefined) {
                        //console.log("the product rate is %s", $(rate).text());
                        product.rate = parseFloat($(rate).text());
                        //console.log("the product rate is %s", product.rate.toFixed(2));
                        if (parseInt(product.rate * 100) >= parseInt(validRate * 100)) {
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
            var data = { message: "productlist", param1: "Yes", param2: [] };
            for (var ii = 0; ii < products.length; ii++) {
                data.param2.push(products[ii].url);
            }
            chrome.runtime.sendMessage(data);
        }
    }
}

function parseProductPage() {
    console.log("parseProductPage");
    var done = $("div .done-info");
    if (done !== undefined && $(done).html() !== undefined) {
        console.log($(done).html());
        console.log("done");
        chrome.runtime.sendMessage({ message: "product", param1: "No" });
    } else {
        $("body").bind("DOMNodeInserted", function(e) {
            //console.log("DOMNodeInserted");
            var obj = jQuery(e.target);
            if (obj.hasClass("blockPage")) {
                $("body").unbind("DOMNodeInserted");
                console.log("blockPage");
                chrome.runtime.sendMessage({ message: "product", param1: "No" });
            }
        });

        console.log("trigger click");
        var a = $("a[data-sk=lijitouzi]");
        var lijitouzi = a.first();
        $(lijitouzi).html("<span id='lijitouzi'>" + $(lijitouzi).html() + "</span>");
        $("#lijitouzi").trigger("click");
    }
}

function parseTradePage() {
    console.log("parseTradePage");
    $("body").bind("DOMNodeInserted", function(e) {
        //console.log("DOMNodeInserted");
        var obj = jQuery(e.target);
        if (obj.hasClass("blockPage")) {
            $("body").unbind("DOMNodeInserted");
            console.log("blockPage");
            chrome.runtime.sendMessage({ message: "trade", param1: "No" });
        }
    });

    $(".infoNextBtn span").click(function() {
        console.log(".infoNextBtn span clicked");
    });

    console.log("click .infoNextBtn span");
    $(".infoNextBtn span").trigger("click");
}

function parseContractPage() {
    console.log("parseContractPage");

    var counts = 0;

    $("body").bind("DOMNodeInserted", function(e) {
        var name = e.target.tagName + e.target.id;
        console.log("DOMNodeInserted %s", name);
        if (name === "SPANcontract-names") {
            counts++;
            if (counts === 2) {
                var h = document.body.scrollHeight;

                $("#contractAgree").change(function() {
                    console.log("contractAgree change");
                    if ($('#contractAgree').prop('checked')) {
                        var confirm = $("#nextBtn").first();
                        $(confirm).html("<span id='btnconfirm'>" + $(confirm).html() + "</span>");
                        console.log("trigger nextBtn");
                        $("#btnconfirm").trigger("click");
                    }
                });

                // $("#contractAgree").click(function() {
                //     console.log("contractAgree click");
                //     if ($('#contractAgree').prop('checked')) {
                //         var confirm = $("#nextBtn").first();
                //         $(confirm).html("<span id='btnconfirm'>" + $(confirm).html() + "</span>");
                //         console.log("trigger nextBtn");
                //         $("#btnconfirm").trigger("click");
                //     }
                // });

                $(window).scroll(function(e) {
                    if (!$('#contractAgree').prop('checked')) {
                        console.log("current scroll (h:%d) %d %d %d", h, $(this).scrollTop(), $(this).height(), $(this).scrollTop() + $(this).height());
                        if ($(this).scrollTop() + $(this).height() >= h) {
                            console.log("click #contractAgree");
                            $("#contractAgree").trigger("click");
                        }
                    }
                });

                console.log("move to bottom %d", h);
                $(window).scrollTop(h);
            }
        } else {
            var obj = jQuery(e.target);
            if (obj.hasClass("blockPage")) {
                $("body").unbind("DOMNodeInserted");
                console.log("blockPage");
                chrome.runtime.sendMessage({ message: "contract", param1: "No" });
            }
        }
    });
}

function parseSecurityPage(pass) {
    console.log("parseSecurityPage");
    $("body").bind("DOMNodeInserted", function(e) {
        //console.log("DOMNodeInserted");
        var obj = jQuery(e.target);
        if (obj.hasClass("blockPage")) {
            $("body").unbind("DOMNodeInserted");
            console.log("blockPage");
            chrome.runtime.sendMessage({ message: "contract", param1: "No" });
        }
    });

    $("#tradeCode").val(pass);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Receive message: " + request.message);
    if (request.message === "login") {
        parseLoginPage();
    } else if (request.message === "account") {
        parseAccountPage();
    } else if (request.message === "maxrate") {
        parseMaxratePage();
    } else if (request.message === "productlist") {
        parseProductListPage(parseFloat(request.maxrate));
    } else if (request.message === "product") {
        parseProductPage();
    } else if (request.message === "trade") {
        parseTradePage();
    } else if (request.message === "contract") {
        parseContractPage();
    } else if (request.message === "security") {
        parseSecurityPage(request.pass);
    } else if (request.message === "test") {
        parseContractPage();
    }
});
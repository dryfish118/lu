var storage = chrome.storage.local;
loadConfig();

function loadConfig() {
    console.log("load config");

    chrome.runtime.sendMessage({ message: "get", object: "telephone" }, function(response) {
        $("#telephone").val(response);
        chrome.runtime.sendMessage({ message: "get", object: "username" }, function(response) {
            $("#username").val(response);
            chrome.runtime.sendMessage({ message: "get", object: "userpass" }, function(response) {
                $("#userpass").val(response);
                chrome.runtime.sendMessage({ message: "get", object: "tradepass" }, function(response) {
                    $("#tradepass").val(response);
                    chrome.runtime.sendMessage({ message: "get", object: "refresh" }, function(response) {
                        $("#refresh").val(response);
                        chrome.runtime.sendMessage({ message: "get", object: "maxmoney" }, function(response) {
                            $("#maxmoney").val(response);
                            chrome.runtime.sendMessage({ message: "get", object: "minmoney" }, function(response) {
                                $("#minmoney").val(response);
                                chrome.runtime.sendMessage({ message: "get", object: "stepmoney" }, function(response) {
                                    $("#stepmoney").val(response);
                                    chrome.runtime.sendMessage({ message: "get", object: "minrate" }, function(response) {
                                        $("#minrate").val(response);
                                        chrome.runtime.sendMessage({ message: "get", object: "steprate" }, function(response) {
                                            $("#steprate").val(response);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

$("#submit").click(function() {
    console.log("save config");

    chrome.runtime.sendMessage({ message: "set", object: "telephone", value: $("#telephone").val() }, function() {
        chrome.runtime.sendMessage({ message: "set", object: "username", value: $("#username").val() }, function() {
            chrome.runtime.sendMessage({ message: "set", object: "userpass", value: $("#userpass").val() }, function() {
                chrome.runtime.sendMessage({ message: "set", object: "tradepass", value: $("#tradepass").val() }, function() {
                    chrome.runtime.sendMessage({ message: "set", object: "refresh", value: $("#refresh").val() }, function() {
                        chrome.runtime.sendMessage({ message: "set", object: "maxmoney", value: $("#maxmoney").val() }, function() {
                            chrome.runtime.sendMessage({ message: "set", object: "minmoney", value: $("#minmoney").val() }, function() {
                                chrome.runtime.sendMessage({ message: "set", object: "stepmoney", value: $("#stepmoney").val() }, function() {
                                    chrome.runtime.sendMessage({ message: "set", object: "minrate", value: $("#minrate").val() }, function() {
                                        chrome.runtime.sendMessage({ message: "set", object: "steprate", value: $("#steprate").val() });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

$("#reset").click(loadConfig);
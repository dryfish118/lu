var storage = chrome.storage.local;
loadConfig();

function loadConfig() {
    console.log("load config");

    chrome.runtime.sendMessage({ message: "get", object: "username" }, function(response) {
        $("#username").val(response);
    });
    chrome.runtime.sendMessage({ message: "get", object: "userpass" }, function(response) {
        $("#userpass").val(response);
    });
    chrome.runtime.sendMessage({ message: "get", object: "tradepass" }, function(response) {
        $("#tradepass").val(response);
    });
    chrome.runtime.sendMessage({ message: "get", object: "minmoney" }, function(response) {
        $("#minmoney").val(response);
    });
    chrome.runtime.sendMessage({ message: "get", object: "stepmoney" }, function(response) {
        $("#stepmoney").val(response);
    });
    chrome.runtime.sendMessage({ message: "get", object: "minrate" }, function(response) {
        $("#minrate").val(response);
    });
}

$("#submit").click(function() {
    console.log("save config");

    chrome.runtime.sendMessage({ message: "set", object: "username", value: $("#username").val() });
    chrome.runtime.sendMessage({ message: "set", object: "userpass", value: $("#userpass").val() });
    chrome.runtime.sendMessage({ message: "set", object: "tradepass", value: $("#tradepass").val() });
    chrome.runtime.sendMessage({ message: "set", object: "minmoney", value: $("#minmoney").val() });
    chrome.runtime.sendMessage({ message: "set", object: "stepmoney", value: $("#stepmoney").val() });
    chrome.runtime.sendMessage({ message: "set", object: "minrate", value: $("#minrate").val() });
});

$("#reset").click(loadConfig);
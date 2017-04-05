loadConfig();

function loadConfig() {
    console.log("load config");
    var storage = chrome.storage.local;
    storage.get("username", function(items) {
        if (items.username === undefined) {
            $("#username").val("");
        } else {
            $("#username").val(items.username);
        }
    });
    storage.get("userpass", function(items) {
        if (items.userpass === undefined) {
            $("#userpass").val("");
        } else {
            $("#userpass").val(items.userpass);
        }
    });
    storage.get("minmoney", function(items) {
        if (items.minmoney === undefined) {
            $("#minmoney").val("5000");
        } else {
            $("#minmoney").val(items.minmoney);
        }
    });
    storage.get("stepmoney", function(items) {
        if (items.stepmoney === undefined) {
            $("#stepmoney").val("500");
        } else {
            $("#stepmoney").val(items.stepmoney);
        }
    });
    storage.get("minrate", function(items) {
        if (items.minrate === undefined) {
            $("#minrate").val("0.02");
        } else {
            $("#minrate").val(items.minrate);
        }
    });
}

$("#submit").click(function() {
    console.log("save config");
    var storage = chrome.storage.local;
    storage.set({ "username": $("#username").val() });
    storage.set({ "userpass": $("#userpass").val() });
    storage.set({ "minmoney": $("#minmoney").val() });
    storage.set({ "stepmoney": $("#stepmoney").val() });
    storage.set({ "minrate": $("#minrate").val() });
});

$("#reset").click(loadConfig);
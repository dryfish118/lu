loadConfig();

function loadConfig() {
    console.log("load config");
    var storage = chrome.storage.local;
    storage.get("username", function(items) {
        if (items.username) {
            $("#username").val(items.username);
        } else {
            $("#username").val("");
        }
    });
    storage.get("userpass", function(items) {
        if (items.userpass) {
            $("#userpass").val(items.userpass);
        } else {
            $("#userpass").val("");
        }
    });
    storage.get("minmoney", function(items) {
        if (items.minmoney) {
            $("#minmoney").val(items.minmoney);
        } else {
            $("#minmoney").val("5000");
        }
    });
    storage.get("stepmoney", function(items) {
        if (items.stepmoney) {
            $("#stepmoney").val(items.stepmoney);
        } else {
            $("#stepmoney").val("500");
        }
    });
    storage.get("minrate", function(items) {
        if (items.minrate) {
            $("#minrate").val(items.minrate);
        } else {
            $("#minrate").val("0.02");
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
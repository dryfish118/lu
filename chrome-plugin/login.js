chrome.runtime.sendMessage({ message: "log", object: "login.js injected." });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.runtime.sendMessage({ message: "log", object: "receive message " + request.message }, function() {
        if (request.message === "login") {
            chrome.runtime.sendMessage({ message: "get", object: "telephone" }, function(response) {
                var telephone = response;
                chrome.runtime.sendMessage({ message: "log", object: "aquire telephone: " + telephone }, function() {
                    if (telephone === "") {
                        chrome.runtime.sendMessage({ message: "log", object: "login by username" }, function() {
                            $("div[data-role=userName]").trigger("click");
                            chrome.runtime.sendMessage({ message: "get", object: "username" }, function(response) {
                                var username = response;
                                chrome.runtime.sendMessage({ message: "log", object: "aquire username: " + username }, function() {
                                    $("#userNameLogin").val(username);
                                    chrome.runtime.sendMessage({ message: "get", object: "userpass" }, function(response) {
                                        var pass = response;
                                        chrome.runtime.sendMessage({ message: "log", object: "aquire password " }, function() {
                                            $("#pwd").val(pass);
                                            $("#loginFlagnew").trigger("click");
                                        });
                                    });
                                });
                            });
                        });
                    } else {
                        $("div[data-role=mobile]").trigger("click");
                        chrome.runtime.sendMessage({ message: "log", object: "login by telephone" }, function() {
                            $("#userNameLogin").val(telephone);
                            chrome.runtime.sendMessage({ message: "get", object: "userpass" }, function(response) {
                                var pass = response;
                                chrome.runtime.sendMessage({ message: "log", object: "aquire password " }, function() {
                                    $("#pwd").val(pass);
                                    $("#loginFlagnew").trigger("click");
                                });
                            });
                        });
                    }
                });
            });
        }
    });
});
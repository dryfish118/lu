chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "login") {
            $("div[data-role=userName]").trigger("click");
            chrome.runtime.sendMessage({ message: "get", object: "username" }, function(response) {
                $("#userNameLogin").val(response);
                chrome.runtime.sendMessage({ message: "get", object: "userpass" }, function(response) {
                    $("#pwd").val(response);
                    $("#loginFlagnew").trigger("click");

                    chrome.runtime.sendMessage({ message: "click", object: "login", result: "Ok" });
                });
            });
        }
    });
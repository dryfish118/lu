chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "login") {
            chrome.runtime.sendMessage({ message: "get", object: "telephone" }, function(response) {
                if (response === "") {
                    console.log("login by username");
                    $("div[data-role=userName]").trigger("click");
                    chrome.runtime.sendMessage({ message: "get", object: "username" }, function(response) {
                        $("#userNameLogin").val(response);
                        chrome.runtime.sendMessage({ message: "get", object: "userpass" }, function(response) {
                            console.log("input password %s", response);
                            $("#pwd").val(response);
                            $("#loginFlagnew").trigger("click");
                        });
                    });
                } else {
                    console.log("login by telephone");
                    $("#userNameLogin").val(response);
                    chrome.runtime.sendMessage({ message: "get", object: "userpass" }, function(response) {
                        console.log("input password %s", response);
                        $("#pwd").val(response);
                        $("#loginFlagnew").trigger("click");
                    });
                }
            });
        }
    });
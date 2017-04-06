chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.message);
        if (request.message === "login lu") {
            $("div[data-role=userName]").trigger("click");
            $("#userNameLogin").val(request.username);
            $("#pwd").val(request.userpass);
            $("#loginFlagnew").trigger("click");

            sendResponse({ result: "Ok" });
        } else if (request.message == "begin trading") {
            $("a[data-sk=lijitouzi]").trigger("click");

            sendResponse({ result: "Ok" });
        }
    });
//chrome.extension.onMessage.addListener(
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.message);
        // if (request.message === "login lu") {
        //     var bgPage = chrome.extension.getBackgroundPage();
        //     $("#userNameLogin").val(bgPage.getUserName());
        //     $("#pwd").val(bgPage.getUserPass());
        //     $("#loginBtn").triggle("click");
        //     sendResponse({ result: "Ok" });
        // }
    });
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $(".infoNextBtn span").trigger("click");
        chrome.runtime.sendMessage({ message: "click", object: "product", result: "Ok" });
    });
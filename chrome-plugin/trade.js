chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $(".infoNextBtn span").trigger("click");
    });
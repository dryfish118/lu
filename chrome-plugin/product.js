chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "product") {
            var a = $("a[data-sk=lijitouzi]");
            if (a.html() !== "") {
                $("body").delegate(".blockPage", "focus", function() {
                    chrome.runtime.sendMessage({ message: "click", object: "product", result: "No" });
                    return;
                });
                var lijitouzi = a.first();
                $(lijitouzi).html("<span id='lijitouzi'>" + $(lijitouzi).html() + "</span>");
                $("#lijitouzi").trigger("click");
            } else {
                chrome.runtime.sendMessage({ message: "click", object: "product", result: "No" });
            }
        }
    });
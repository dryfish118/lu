chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "investment") {
            if ($("a[data-sk=lijitouzi]").html() !== "") {
                var lijitouzi = $("a[data-sk=lijitouzi]").first();
                $(lijitouzi).html("<span id='lijitouzi'>lijitouzi</span>");
                $("#lijitouzi").trigger("click");
                chrome.runtime.sendMessage({ message: "jump", object: "investment", result: "Ok" });
            } else {
                chrome.runtime.sendMessage({ message: "jump", object: "investment", result: "No" });
            }
        }
    });
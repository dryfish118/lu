chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "product") {
            if ($("a[data-sk=lijitouzi]").html() !== "") {
                var lijitouzi = $("a[data-sk=lijitouzi]").first();
                $(lijitouzi).html("<span id='lijitouzi'>" + $(lijitouzi).html() + "</span>");
                $("#lijitouzi").trigger("click");
                chrome.runtime.sendMessage({ message: "click", object: "product", result: "Ok" });
            } else {
                chrome.runtime.sendMessage({ message: "click", object: "product", result: "No" });
            }
        }
    });
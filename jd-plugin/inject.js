console.log("inject.js injected.");

function qiang() {
    console.log("qiang");
    var confirm = $(".mks_03 a").first();
    console.log("html: (%s)", $(confirm).html());
    $(confirm).html("<span id='btnconfirm'>" + $(confirm).html() + "</span>");
    $("#btnconfirm").trigger("click");
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Receive message: " + request.message);
    if (request.message === "qiang") {
        var oDate = new Date();
        setTimeout(qiang, (59 - oDate.getSeconds()) * 1000 + 1000 - oDate.getMilliseconds() - request.timeout * 10);
    }
});
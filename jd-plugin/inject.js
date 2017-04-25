console.log("inject.js injected.");

function qiang() {
    console.log("qiang");

    var a = $("a[data-pos='27,15,528,249']").first();
    $(a).html("<span id='btnconfirm'>点我</span>");
    $("#btnconfirm").trigger("click");
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Receive message: " + request.message);
    if (request.message === "qiang") {
        var oDate = new Date();
        setTimeout(qiang, (59 - oDate.getSeconds()) * 1000 + 1000 - oDate.getMilliseconds() - request.timeout * 10);
    }
});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $("#kycConfirmCB").val(true);
        var confirm = $("#kycOtpConfirm").first();
        $(confirm).html("<span id='btnconfirm'>" + $(confirm).html() + "</span>");
        $("#btnconfirm").trigger("click");
        chrome.runtime.sendMessage({ message: "click", object: "contract", result: "Ok" });
    });
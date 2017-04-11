chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $("#kycConfirmCB").click(function() {
            console.log("kycConfirmCB clicked.");
            var confirm = $("#kycOtpConfirm").first();
            $(confirm).html("<span id='btnconfirm'>" + $(confirm).html() + "</span>");
            $("#btnconfirm").trigger("click");
        });

        console.log("trigger click to kycConfirmCB.");
        $("#kycConfirmCB").trigger("click");
    });
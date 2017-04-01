function failGet(msg) {
    console.log(msg);
}

function onList() {

}

function onFundDetail(data) {
    //console.log(data);
    var doc = $(data);
    var amount = doc.find(".available-balance-wrap > .balance-amount").get(0);
    if (amount == undefined) {
        failGet("failed to get available amount");
        return;
    }
    var availableMoney = parseFloat($(amount).text().replace(',', ''));
    console.log("available money:\t%f", availableMoney);

    onList(availableMoney - 1000, availableMoney);
}

function onUserInfo(data) {
    if (data.userName == undefined) {
        failGet("failed to get user information.");
        return;
    }
    console.log("user id:\t%d", data.uid);
    console.log("user name:\t%s", data.userName);

    var fundDetailLink = "https://my.lu.com/my/yeb/fund-detail";
    $.ajax({
        url: fundDetailLink,
        dataType: "html",
        success: function(data) {
            onFundDetail(data);
        },
        error: function() {
            failGet("failed to get fund detail");
        }
    });
}

chrome.browserAction.onClicked.addListener(function() {
    //{"unreadMsgCount":0,"cardBindStatus":"1","uid":28160626,"nameAuthentication":"1","sex":"M","name":"邓涛","mobileNo":"18511478118","userName":"dengtao118","isNewUser":false,"isInvestPrepared":true}
    var userInfoLink = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
    $.ajax({
        url: userInfoLink,
        dataType: "json",
        success: function(data) {
            onUserInfo(data);
        },
        error: function() {
            failGet("failed to get user information.");
        }
    });
});
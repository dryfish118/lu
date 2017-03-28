function popMsg(msg) {
    new Notification(0, {
        icon: "lu.png",
        body: msg
    });
}

chrome.browserAction.onClicked.addListener(function() {
    //popMsg("我被点击了");
    //document.domain = "www.lu.com";
    var u = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
    var d = "jsoncallback=";
    var l = u + "?" + d + "?";
    //{"unreadMsgCount":0,"cardBindStatus":"1","uid":28160626,"nameAuthentication":"1","sex":"M","name":"邓涛","mobileNo":"18511478118","userName":"dengtao118","isNewUser":false,"isInvestPrepared":true}
    l = "http://127.0.0.1/www/lu/sample.json";
    $.ajax({
        url: l,
        dataType: "json",
        success: function(data) {
            var h = "<div>名字：" + data.name + "</div>" +
                "<div>账号：" + data.userName + "</div>" +
                "<div>电话：" + data.mobileNo + "</div>";
            popMsg(h);
        },
        error: function() {
            popMsg("failed to get username");
        }
    });
});
function onAquireInNew() {
    console.log("open 'lu.com' in the new tab");
    strUrl = "https://www.lu.com";
    chrome.tabs.create({ url: strUrl, selected: true },
        function(tab) {
            onAquireInfo();
        });
}

function onAquireInCurrent(id) {
    console.log("open 'lu.com' in the tab %d", id);
    strUrl = "https://www.lu.com";
    chrome.tabs.update({ openerTabId: id, url: strUrl },
        function(tab) {
            onAquireInfo();
        });
}

function onLogin() {

}

function onAquireInfo() {
    chrome.tabs.query({ active: true, currentWindow: true },
        function(tabs) {
            if (tabs === undefined) {
                onAquireInNew();
            } else {
                var reg = new RegExp("https://.*\.lu\.com/.*", "");
                if (!reg.test(tabs[0].url)) {
                    onAquireInCurrent(tabs[0].id);
                    return;
                }

                //{"unreadMsgCount":0,"cardBindStatus":"1","uid":28160626,"nameAuthentication":"1",
                //"sex":"M","name":"閭撴稕","mobileNo":"18511478118","userName":"dengtao118",
                //"isNewUser":false,"isInvestPrepared":true}
                var strUrl = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
                $.ajax({
                    url: l,
                    dataType: "json",
                    success: function(data) {
                        var h = "<div id='name'>名字：" + data.name + "</div>" +
                            "<div id='userName'>账号：" + data.userName + "</div>" +
                            "<div id='uid'>ID：" + data.uid + "</div>" +
                            "<div id='mobileNo'>电话：" + data.mobileNo + "</div>";
                        $("#user-name").html(h);
                    },
                    error: function() {
                        console.log("failed to get username");
                        onLogin();
                    }
                });
            }
        });
}

function onBeginTrade() {

}

$(function() {
    $("#get-user-name").click(onAquireInfo);
    $("#start-trade").click(onBeginTrade);
});
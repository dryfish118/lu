var url_qiang = "https://sale.jd.com/act/4dhmwvu6rpc.html?cpdad=1DLSUE";
var count = 20;

function isUrlMatch(url1, url2) {
    if (url1 !== undefined && url2 !== undefined) {
        url1 = url1.toLowerCase();
        url2 = url2.substr(0, url1.length).toLowerCase();
        return (url1 === url2);
    }
    return false;
}

chrome.webNavigation.onCompleted.addListener(function(details) {
    if (isUrlMatch(url_qiang, details.url)) {
        console.log("opened");
        chrome.tabs.executeScript(details.tabid, { file: "jquery.min.js" }, function() {
            chrome.tabs.executeScript(details.tabid, { file: "inject.js" }, function() {
                chrome.tabs.sendMessage(details.tabid, { message: "qiang", timeout: --count });
                console.log("injected");
                if (count > 0) {
                    console.log("create new");
                    chrome.tabs.create({ url: url_qiang });
                }
            });
        });
    }
});

chrome.browserAction.onClicked.addListener(function() {
    count = 20;
    chrome.tabs.create({ url: url_qiang });
});
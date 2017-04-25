var url_qiang = "https://pro.m.jd.com/mall/active/CFoVuLtk8ykyG5f59EfdpQyhcmM/index.html";
var g_count = 20;

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
        var id = details.tabId;
        console.log("opened in tab %d", id);
        chrome.tabs.executeScript(id, { file: "jquery.min.js" }, function() {
            console.log("jquery.min.js in tab %d", id);
            chrome.tabs.executeScript(id, { file: "inject.js" }, function() {
                console.log("inject.js in tab %d", id);
                chrome.tabs.sendMessage(id, { message: "qiang", timeout: g_count }, null, function(response) {
                    console.log("injected %d in tab %d", g_count, id);
                    if (--g_count > 0) {
                        console.log("create new");
                        chrome.tabs.create({ url: url_qiang });
                    }
                });
            });
        });
    }
});

chrome.browserAction.onClicked.addListener(function() {
    console.log("start");
    g_count = 20;
    chrome.tabs.create({ url: url_qiang });
});
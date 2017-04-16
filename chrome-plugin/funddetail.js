chrome.runtime.sendMessage({ message: "log", object: "funddetail.js injected." });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var amount = $(".available-balance-wrap > .balance-amount").get(0);
    if (amount === undefined) {
        chrome.runtime.sendMessage({ message: "inject", object: "funddetail", result: "No" });
    } else {
        chrome.runtime.sendMessage({ message: "inject", object: "funddetail", result: "Yes", money: parseFloat($(amount).text().replace(",", "")) });
    }
});
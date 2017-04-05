var submitButton = document.querySelector('button.submit');
var resetButton = document.querySelector('button.reset');

loadConfig();

submitButton.addEventListener('click', saveConfig);
resetButton.addEventListener('click', loadConfig);

function loadConfig() {
    var storage = chrome.storage.local;
    storage.get("userName", function(items) {
        if (items.userName) {
            $("#user-name").value = items.userName;
        } else {
            $("#user-name").value = "";
        }
    });
    storage.get("userPass", function(items) {
        if (items.userPass) {
            $("#user-pass").value = items.userPass;
        } else {
            $("#user-pass").value = "";
        }
    });
}

function saveConfig() {
    var storage = chrome.storage.local;
    storage.set({ "userName": $("#user-name").value });
    storage.set({ "userPass": $("#user-pass").value });
}
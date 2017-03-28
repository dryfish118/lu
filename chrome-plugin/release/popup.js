function popMsg(msg) {
    $("#user-name").html(msg);
}

function aquireInfo() {
    window.location.host = "www.lu.com";
    //document.domain = "www.lu.com";
    // var l = "https://user.lu.com/user/service/user/current-user-info-for-homepage?jsoncallback=?";
    // $.getJSON(l, function(data) {
    //     var h = "<div>名字：" + data.name + "</div>" +
    //         "<div>账号：" + data.userName + "</div>" +
    //         "<div>电话：" + data.mobileNo + "</div>";
    //     $("#user-name").html(h);
    // });

    var l = "http://127.0.0.1/sample.json";
    l = "https://user.lu.com/user/service/user/current-user-info-for-homepage";
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
            popMsg("<div>failed to get username</div>");
        }
    });
}

$(function() {
    $("#get-user-name").click(aquireInfo);
});
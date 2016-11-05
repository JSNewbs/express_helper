console.log("start of page.js");
$(document).ready(function() {
    console.log("document is ready.");
    $("#search").click(function(e) {
        //for test, we can use type = shunfeng and postid = 608582127345
        console.log("search clicked");
        // disable search button
        $("#search").prop("disabled", true);

        $("#container").html("正在查询的快递号：" + $("#trackNumber").val() + " ...");
        e.preventDefault();
        $.get({
            async: true,
            url: "http://www.kuaidi100.com/query",
            // url:"http://www.kuaidi100.com/query?type=zhongtong",
            data: {
                type: $("#expressType").val(),
                postid: $("#trackNumber").val()
            },
            success: function(data) {
                // DO SOMETHING
                // enable search button
                $("#search").prop("disabled", false);

                $("#container").html("<ul id='result'></ul>");
                var resp = JSON.parse(data);
                if (resp["status"] === "200") {
                    for (var d of resp["data"]) {
                        $("#result").append("<li>" + d["time"] + " : " + d["context"] + "</li>");
                    }
                } else {
                    for (var key in resp) {
                        if (resp.hasOwnProperty(key)) {
                            // console.log(key + " : " + resp[key]);
                            $("#result").append("<li>" + key + " : " + resp[key].toString() + "</li>");
                        }
                    }
                }


            }
        });
    });
});

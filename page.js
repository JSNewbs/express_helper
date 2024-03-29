var events = {
  init: function(){$('#trackNumber').keypress(function (e) {
      if (e.which == 13) {
        e.preventDefault();
        $('#search').click();
        return false;
      }
    });

    $("#search").click(function(e) {
        //for test, we can use type = shunfeng and postid = 608582127345
        // disable search button
        $("#search").prop("disabled", true);

        $("#container").show();
        $("table").hide();
        $("#container").html("正在查询的快递：" + $("#trackNumber").val() + " ...");
        e.preventDefault();
        $.get({
            async: true,
            url: "http://www.kuaidi100.com/query",
            data: {
                type: $("#expressType").val(),
                postid: $("#trackNumber").val()
            },
            success: function(data) {
                // DO SOMETHING
                // enable search button
                $("#search").prop("disabled", false);

                var resp = JSON.parse(data);
                if (resp["status"] === "200") {
                    $("tbody").empty();
                    for (var d of resp["data"]) {
                        $("#container").hide();
                        $("table").show();
                        // append line of to table
                        $("tbody").append("<tr><td>"+ d["time"]+ "</td><td>" + d["context"]+"</td></tr>");
                    }
                } else {
                    for (var key in resp) {
                        if (resp.hasOwnProperty(key)) {
                            $("#container").html("<div class='alert alert-danger' id='error'></div>");
                            $("#error").append("<p>参数错误</p>");
                        }
                    }
                }


            }
        });
    });

  }
}

$(document).ready(function() {
    events.init();
});

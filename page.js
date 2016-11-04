console.log("start of page.js");
$(document).ready(function(){
  console.log("document is ready.");
  $("#search").click(function(e){
    // $("#container").html($("#trackNumber").text());
    //for test, we can use type = shunfeng and postid = 608582127345
    console.log("search clicked");
    $("#container").html("正在查询的快递号：" + $("#trackNumber").val()+" ...");
    // $("#search").click(function(e){
      e.preventDefault();
      $.ajax({
        type:"GET",
        async:true,
        url:"http://www.kuaidi100.com/query?type=shunfeng",
        data:{postid:$("#trackNumber").val()},
        success:function(data) {
          // DO SOMETHING
                var resp = JSON.parse(data);
                if(resp["status"]==="200"){
                  $("#container").html(resp.toString());
                }


            }
      });
    // });
  });
});

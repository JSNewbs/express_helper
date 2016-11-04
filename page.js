console.log("start of page.js");
$(document).ready(function(){
  console.log("document is ready.");
  $("#search").click(function(){
    // $("#container").html($("#trackNumber").text());
    console.log("search clicked");
    $("#container").html("查询的快递号：" + $("#trackNumber").val());
    $("#search").click(function(e){
      e.preventDefault();
      $.ajax({
        type:"GET",
        async:true,
        url:"http://www.kuaidi100.com/query?type=shunfeng",
        data:{postid:$("#trackNumber").val()},
        success:function(data) {
          // DO SOMETHING
              console.log(data);
            }
      });
    });
  });
});

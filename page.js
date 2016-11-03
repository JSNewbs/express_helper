console.log("start of page.js");
$(document).ready(function(){
  console.log("document is ready.");
  $("#search").click(function(){
    // $("#container").html($("#trackNumber").text());
    console.log("search clicked");
    $("#container").html("查询的快递号：" + $("#trackNumber").val());
  });

});

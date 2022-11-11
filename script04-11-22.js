$("#bEmpty").click(function()
{
    $("p").empty();
});

$("#bNewContent").click(function()
{
    $("p").html("New Content Added to the Paragraph");
});

$("#bRemove").click(function()
{
    $("#para1").remove();
});

$("#bBefore").click(function()
{
    var data = $("#data").val();
    $("#first").before("<li>" + data+"</li>");
});
$("#bAfter").click(function()
{
    var data = $("#data").val();
    $("#last").after("<li>" + data +"</li>");
});

$("#bChangeURL").click(function()
{
    var data = $("#data").val();
    $("#navigation").attr("href" , "video.html");
    $("#myfieldset").attr("style" ,"height:80% ; Width:98%");
});

$("#bS1").click(function()
{
    $("#result").css("color" , "green");
});

$("#bS2").click(function()
{
    $("#result").css("color" , "red");
    $("#result").css("background-color" , "yellow");
});

$("#bS3").click(function()
{
    $("#result").css({"color":"blue" ,"background-color" :"salmon"}); 
});

$("#bS4").click(function()
{
    $("#result").css({"color":"blue" ,"font-size":"40","background-color":"white"}); 
});
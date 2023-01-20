
$(".btn").click(function(){
    let value = Number(($("#screen1").val() * $("#screen2").val() * $("#screen3").val())/100);
    $("#dis").text((Number($("#screen1").val())) + value);
});
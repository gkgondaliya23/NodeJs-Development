
$(".btn").click(function () {
   let value = ($("#screen1").val() * 30.48) + ($("#screen2").val() * 2.54)
   $("#dis").text(value);
})
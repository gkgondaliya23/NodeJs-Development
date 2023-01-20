$(document).ready(function () {
    //Adding to the screen
    $(".btn").click(function () {
        if (!$(this).hasClass("not")) {
            if ($("#screen").val() == 0)
                $("#screen").val($(this).text());
            else
                $("#screen").val($("#screen").val() + $(this).text());
        }
    });

    //Backspace
    $(".del").click(function () {
        var value = $("#screen").val();
        if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
            $("#screen").val(value.slice(0, value.length - 1));
        if (value.length == 1)
            $("#screen").val("0");
    });
});

// All Clear
$(".cls").click(function () {
    $("#screen").val("0");
});

//Evalution
$("#equals").click(function () {
    var result;
    //Check for syntax error
    try {
        result = (eval(($("#screen").val())));
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("Error! Resetting values.");
            $("#screen").val("0");
        }
        if (e instanceof TypeError) {
            alert("Error! Resetting values.");
            $("#screen").val("0");
        }
    }

    // Append if the result is correct
    $("#screen").val(result);
    // $("#screen").val("0");
});

function clearError() {
        errors = $(".formError");
        for (let item of errors) {
            item.innerHTML = "";
        }
    }

$("#btn").click(function(){
    let returnVal = true;
     clearError();
     fname = $("#fname").val().length;
     if(fname < 5)
     {
        $(".fnameErr").text("* Name is too Short");
        returnVal = false;
     }

     email = $("#email").val().length;
    //  Email = $("#email").val();
     if(email > 15)
     {
        $(".emailErr").text("* Email is too Long");
        returnVal = false;
     }
    //  else if(Email.text("@")<1){
    //     $(".emailErr").text("* Invalid Email");
    //     returnVal = false;
    //  }

    phone = $("#phone").val().length;
     if(phone != 10)
     {
        $(".phoneErr").text("* Enter valid Phone No.");
        returnVal = false;
     }
     

     pass = $("#password").val().length;
     if(pass < 6)
     {
        $(".passErr").text("* Password atleast 6 Character");
        returnVal = false;
     }


     cpass = $("#cPassword").val().length;
     if(cpass !== pass)
     {
        $(".cpassErr").text("* Password is not match");
        returnVal = false;
     }
     returnVal;
})
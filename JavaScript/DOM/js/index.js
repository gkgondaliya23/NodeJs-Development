// window.document.onload = function(e){ 
//     // let header1 = document.getElementById("header1");


//     console.log(document.getElementsByTagName("div"));

// } 
//  document.getElementById("header1").innerHTML="skill";

// form
//function printVal()
// {
//     let name =  document.form1.name.value;
//     alert("Wel come: " + name);
// }


// *****************************************************************************************************
// document.getElementById()

// printCube = () =>{
//     let cube = document.form2.getElementById("num").value;
//     // alert("cube of num is: " + (cube*cube*cube));
//     console.log(cube*cube*cube);
// }


// *****************************************************************************************************
// document.getElementsByName()

// function printGen()
// {
//     let gender = document.getElementsByName("Gender");
//     alert("Gender : " + gender.length);
//     // console.log(gender.length);
// }


// *****************************************************************************************************
// document.getElementsByTagName()

// countPara = ()=>
// {
//     let count = document.getElementsByTagName("p");
//      alert("Total count : " + count.length);
//     // console.log("Total count : " + count.length);
// }


// *****************************************************************************************************
// document.getElementsByClassName()

// Count = ()=>
// {
//     let count = document.getElementsByClassName("para");
//     alert("Total count : " + count[0].innerHTML);
// }


// *****************************************************************************************************
// form validation
function clearError() {
    errors = document.getElementsByClassName('formError');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
function setError(id, err) {
    element = document.getElementById(id);
    element.getElementsByClassName('formError')[0].innerHTML = err;
}
Validation = () => {
    let returnVal = true;
    clearError();
    const fname = document.forms['loginForm']["fname"].value;
    if (fname.length < 5) {
        setError("fname", "* Name is too Short");
        returnVal = false;
    }
    if (fname.length == 0) {
        setError("fname", "* Name cannot be zero");
        returnVal = false;
    }

    const email = document.forms['loginForm']["femail"].value;
    if (email.length > 15) {
        setError("femail", "* Email is too Long");
        returnVal = false;
    }

    const phone = document.forms['loginForm']["fphone"].value;
    if (phone.length != 10) {
        setError("fphone", "* please Enter 10 digit Number");
        returnVal = false;
    }

    const password = document.forms['loginForm']["password"].value;
    if (password.length < 6) {
        setError("password", "* Password atleast 6 Character");
        returnVal = false;
    }
    const cpassword = document.forms['loginForm']["cPassword"].value;
    if (cpassword !== password) {
        setError("cPassword", "*Password is not matched.");
        returnVal = false;
    }
    return returnVal;
}

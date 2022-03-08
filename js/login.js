const username = document.getElementById("username");
const password = document.getElementById("password");
const myform = document.getElementById("myform");
const errorMsg = document.getElementById("errorMsg");

username.focus();


let jsUsername = "admin";
let jsPassword = "1234";

let jsUsername2 ="dinmor";
let jsPassword2 = "lol123";

myform.addEventListener("submit", (e) => {

    e.preventDefault();


    if(username.value === "" || password.value ==="") {
        
        errorMsg.innerHTML = "Udfyld alle felterne, tak.";
        username.focus();

    }

    else {
        if(username.value === jsUsername && password.value === jsPassword || username.value === jsUsername2 && password.value === jsPassword2) {
            errorMsg.innerHTML = "Velkommen " + username.value + "!";
            /* errorMsg.innerHTML = `Velkommen ${username.value} - du er sød`; */

            myform.style.display = "none";
        }
        
        else {
            errorMsg.innerHTML = "Brugernavn eller adgangskode er forkert!";
        }
    }
        

   

});
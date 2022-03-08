const subform = document.getElementById("subform");
const errorMsg = document.getElementById("errorMsg");
const welcomeMsg = document.getElementById("welcomeMsg");

const firstname = document.getElementById("username");
const lastname = document.getElementById("lastname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const birthday = document.getElementById("birthday");
const password = document.getElementById("password");

username.focus();

subform.addEventListener("submit", (e) => {
    
    e.preventDefault();

    if(firstname.value=== "" || phone.value == "" || email.value ==="" || birthday.value==="" || password.value===""){
        errorMsg.innerHTML = "Du skal udfylde alle felterne!"
    }

    else {
        subform.style.display ="none";
        welcomeMsg.style.display ="none";
        errorMsg.innerHTML ="VELKOMMEN TIL LEVELBOSS.DK"
    }
});
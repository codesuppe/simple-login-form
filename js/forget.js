 const forgetform = document.getElementById("forgetform");
 const mail = document.getElementById("mailing");
 const errorMsg = document.getElementById("errorMsg");
 const backToLogin = document.getElementById("backtologin");

 mailing.focus();

 forgetform.addEventListener("submit", (e) =>{

    e.preventDefault();

    if(mail.value === ""){
        errorMsg.innerHTML = "Udfyld venligst din mail";
    }
    else {
        forgetform.style.display = "none";
        errorMsg.innerHTML = "Hvis vi kender din mail, har vi sendt et link, hvor du kan gendanne din adgangskode.";
        backToLogin.innerHTML = "Tilbage til login";
    }
 });
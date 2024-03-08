const submitButton = document.querySelector("#button");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("#form");
const passwordIndicator = document.querySelector("#passwordIndicator");

const validateEmail = (email) => {
    return email
        .toLowerCase()
        .match(
            /^\S+@\S+.\S+$/
        );
};

submitButton.addEventListener("click", () => {
    if (validateEmail(emailInput.value) == null) {
        emailInput.style.border = "2px solid red";
    }
    else {
        emailInput.style.border = "none";
        form.submit();
    }
});

const strongPassword = (password) => {
    return password
        .match(
            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/
        );
}

passwordInput.addEventListener("input", () => {
    if  (passwordInput.value == ""){
        passwordInput.style.border = "none";
        passwordIndicator.innerText = "";
    }
        
    else if (strongPassword(passwordInput.value) == null){
        passwordInput.style.border = "2px solid red";
        passwordIndicator.innerText = "Svagt lösenord";
    }
    else {
        passwordInput.style.border = "2px solid #00cc00";
        passwordIndicator.innerText = "Starkt lösenord";
    }

});
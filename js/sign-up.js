const form = document.querySelector("#sign-up-form");
const fullName = document.querySelector("#fullName");
const firstNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const username = document.querySelector("#username");
const usernameError = document.querySelector("#usernameError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const message = document.querySelector("#message");
const button = document.querySelector("button");


function validateForm(event) {
    event.preventDefault();

    if(checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if(checkLength(password.value, 7) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if(checkLength(username.value, 3) === true) {
        usernameError.style.display = "none";
    } else {
        usernameError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function submitMessage(event) {
    event.preventDefault();
    if(checkLength(fullName.value, 0) && checkLength(password.value, 7) && checkLength(username.value, 3) && validateEmail(email.value)) {
        message.innerHTML = `<div class="message">Account created</div>`;   
    }
    form.reset();
}

form.addEventListener("submit", submitMessage);
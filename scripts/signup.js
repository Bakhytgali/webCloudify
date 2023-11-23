const nameInput = document.querySelector("#name");
var nameValid = false;
const nameRegex = /^[A-Z][a-z]*$/;

const surnameInput = document.querySelector("#surname");
var surnameValid = false;
const surnameRegex = /^[A-Z][a-z]*$/;

let nextBtn = document.querySelector("#nextForm");

nameInput.addEventListener("blur", () => {
    if (nameRegex.test(nameInput.value)) {
        nameValid = true;
    } else {
        document.querySelector(".error1").innerHTML = "Name's invalid"
        nameValid = false;
    }
    enableNextButton();
});

surnameInput.addEventListener("blur", () => {
    if (surnameRegex.test(surnameInput.value)) {
        surnameValid = true;
    } else {
        document.querySelector(".error1").innerHTML = "Surname's invalid"
        surnameValid = false;
    }
    enableNextButton();
});

function enableNextButton() {
    if (nextBtn && nameValid && surnameValid) {
        nextBtn.removeAttribute("disabled");
        nextBtn.addEventListener("click", () => {
            document.querySelector(".form-1").style.display = "none";
            document.querySelector(".spinner-border").removeAttribute("style")
            secondFormEnable();
        });
    } else if (nextBtn) {
        nextBtn.setAttribute("disabled", "disabled");
    }
}

function secondFormEnable() {
    setInterval(() => {
        document.querySelector(".spinner-border").style.display = "none";
        document.querySelector(".form-2").removeAttribute("style")
    }, 2000)
}

const email = document.querySelector("#email");
var emailValid = false;
const emailRegex = /@[a-zA-Z0-9.-]+\.(com|ru|edu\.kz|outlook\.com)$/;



const password = document.querySelector("#password");
var passwordValid = false;
const passwordRegex = /^[a-zA-Z0-9]{5,}$/;

var submit = document.querySelector("#submitForm");

email.addEventListener("blur", () => {
    if (emailRegex.test(email.value)) {
        emailValid = true;
    } else {
        document.querySelector(".error2").innerHTML = "The email is not valid";
    }
})

password.addEventListener("blur", () => {
    if (passwordRegex.test(password.value)) {
        passwordValid = true;
    } else {
        document.querySelector(".error2").innerHTML = "The password is not valid";
    }
    enableSubmitButton();
});


function enableSubmitButton() {
    if (passwordValid && emailValid) {
        submit.removeAttribute("disabled");
    } else {
        submit.setAttribute("disabled", "disabled");
    }
}

submit.addEventListener("click", () => {
    document.querySelector(".finished").innerHTML = "You've been successfully signed in!";
    setInterval(() => {
        window.open("/index.html", "_self");
    }, 2000)
});


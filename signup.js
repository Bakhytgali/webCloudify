const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submitform");

const nameSurnamePattern = /^[A-Z][a-z]*$/;
var nameIsCorrect = false;
var surnameIsCorrect = false;

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
var emailIsCorrect = false;

nameInput.addEventListener("keypress", () => {
    if (nameSurnamePattern.test(nameInput.value)) {
        nameIsCorrect = true;
    } else {
        nameIsCorrect = false;
        document.getElementsByClassName("error")[0].innerHTML = "Invalid name";
    }
    toggleSubmitButton();
});

surnameInput.addEventListener("keypress", () => {
    if (nameSurnamePattern.test(surnameInput.value)) {
        surnameIsCorrect = true;
        document.getElementsByClassName("error")[0].textContent = "";
    } else {
        surnameIsCorrect = false;
        document.getElementsByClassName("error")[0].innerHTML = "Invalid surname";
    }
    toggleSubmitButton();
});

emailInput.addEventListener("keypress", () => {
    if (emailPattern.test(emailInput.value)) {
        emailIsCorrect = true;
        document.getElementsByClassName("error")[0].textContent = "";
    } else {
        emailIsCorrect = false;
        document.getElementsByClassName("error")[0].innerHTML = "Invalid email";
    }
    toggleSubmitButton();
});

function toggleSubmitButton() {
    if (nameIsCorrect && surnameIsCorrect && emailIsCorrect) {
        submitBtn.removeAttribute("disabled");
        document.getElementsByClassName("error")[0].textContent = "";
    } else {
        submitBtn.setAttribute("disabled", "disabled");
    }
}

submitBtn.addEventListener("click", () => {
    document.getElementsByClassName("error")[0].textContent = "You've been signed up!";
    submitBtn.style.display = "none";
    setInterval(function () {
        window.open("./index.html", "_self");
    }, 3000)
});



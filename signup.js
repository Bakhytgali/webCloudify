const submitform = document.querySelector("#submitform");

const error = document.querySelector(".error");
error.style.color = "red";

submitform.addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const email = document.querySelector("#email").value;
    const namePattern = /^[A-Z][a-zA-Z]*$/;
    const surnamePattern = /^[A-Z][a-zA-Z]*$/;
    const emailPattern = /^[a-z]+@(email\.com|gmail\.com|mail\.ru|outlook\.com|astanait\.edu\.kz)$/;
    if (!namePattern.test(name)) {
        error.textContent = "Name is not valid. No numbers, symbols & capital first letter";
    } else if (!surnamePattern.test(surname)) {
        error.textContent = "Surname is not valid. Name is not valid (No numbers, symbols & capital first letter)"
    } else if (!emailPattern.test(email)) {
        error.textContent = "Email is not valid. Should include @something.com in the end";
    } else {
        error.style.color = "#fff";
        error.textContent = `You've been signed up! Welcome, ${name}`;
        setInterval(() => {
            window.open("./index.html", "_blank");
        }, 3000)
    }
});
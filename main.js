const albumDate = new Date("Dec, 7 2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = albumDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".days-counter").innerHTML = days;
    document.querySelector(".hours-counter").innerHTML = hours;
    document.querySelector(".minutes-counter").innerHTML = minutes;
    document.querySelector(".seconds-counter").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
    }
}, 1000);

const reminderBtn = document.querySelector(".remind");

reminderBtn.addEventListener("click", () => {
    reminderBtn.style.display = "none";
    const reminderTxt = document.querySelector(".will-remind");
    reminderTxt.classList.add("my-5");
    reminderTxt.textContent = "We will send you an Email when the album comes out!";
});

const preorder = document.querySelector(".preorder");

preorder.addEventListener("click", () => {
    let answer = confirm("To preorder, you will be send into another page.");
    if (answer === true) {
        window.open("https://vinyla.com/ru/products/denzel-curry-melt-my-eyez-see-your-future-limited-edition", "_blank");
    }
});

const signup = document.querySelector(".signup");
signup.addEventListener("click", () => {
    window.open("./signup.html");
});


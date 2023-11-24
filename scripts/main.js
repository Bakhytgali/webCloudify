const albumDate = new Date("Dec,7 2023 00:00:00").getTime(); // Getting the release time and storing it in the variable
var x = setInterval(function () {  // setInterval function 
    var now = new Date().getTime(); // Getting the current time and string it in the variable
    var distance = albumDate - now; // finding the time that is remaining 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Dividing the miliseconds by seconds, minutes and then hours
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Dividing hours by minutes 
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Dividing the minutes by seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); // dividing the miliseconds by seconds 
    document.querySelector(".days-counter").innerHTML = days;
    document.querySelector(".hours-counter").innerHTML = hours;
    document.querySelector(".minutes-counter").innerHTML = minutes;
    document.querySelector(".seconds-counter").innerHTML = seconds;

    if (distance < 0) { //clearing the interval when the target date arrived
        clearInterval(x);
        document.querySelector(".days").style.display = "none";
        document.querySelector(".hours").style.display = "none";
        document.querySelector(".minutes").style.display = "none";
        document.querySelector(".seconds").style.display = "none";
        document.querySelector(".timer-wrapper").innerHTML = "The Album Is Out!";
    }
}, 1000);

const moveToTop = document.querySelector("#moveToTop");

window.onscroll = () => {
    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
        moveToTop.style.display = "block"
    } else {
        moveToTop.style.display = "none";
    }
};

moveToTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});

const reminderBtn = document.querySelector(".remind");

reminderBtn.addEventListener("click", () => {
    reminderBtn.style.display = "none"; // the element dissappears once it's pressed
    const reminderTxt = document.querySelector(".will-remind");
    reminderTxt.classList.add("my-5");
    reminderTxt.textContent = "We will send you an Email when the album comes out!";
});

const preorder = document.querySelector(".preorder");

preorder.addEventListener("click", () => {
    let answer = confirm("To preorder, you will be send into another page.");
    if (answer === true) {
        window.open("https://vinyla.com/ru/products/denzel-curry-melt-my-eyez-see-your-future-limited-edition", "_blank"); // opens the link in a new window
    }
});

const meltMyEyez = document.querySelector(".denzel-mm");
meltMyEyez.style.cursor = "pointer";

meltMyEyez.addEventListener("mouseover", () => {
    meltMyEyez.style.transition = ".5s linear ease-in-out";
    meltMyEyez.style.transform = "rotate(3deg)";
});

meltMyEyez.addEventListener("mouseleave", () => {
    meltMyEyez.style.transition = ".5s linear ease-in-out";
    meltMyEyez.style.transform = "rotate(0deg)";
});

document.getElementById("submit-btn").addEventListener("click", () => {
    if (document.querySelector("#emailInput").value != ""
        && document.querySelector("#commentaryInput").value != ""
    ) {
        document.getElementById("formToFill").style.display = "none";
        document.querySelector(".formAccepted").innerHTML = "We've received your message! Will contact you ASAP."
    }
});





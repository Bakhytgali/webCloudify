const telegramLink = document.querySelector(".fa-telegram");
const instagrammLink = document.querySelector(".fa-instagram");
const youtubeLink = document.querySelector(".fa-youtube");


telegramLink.addEventListener("click", () => {
    window.open("https://t.me/rbkhtgl", "_blank");
});

instagrammLink.addEventListener("click", () => {
    window.open("https://www.instagram.com/rbkhtgl/", "_blank")
});

youtubeLink.addEventListener("click", () => {
    window.open("https://youtu.be/dQw4w9WgXcQ?si=snhtM7Af52NKRMDr", "_blank")
});
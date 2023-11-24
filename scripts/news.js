const nfDate = document.querySelector("#nfDate");
const kaliDate = document.querySelector("#kaliDate");
const travDate = document.querySelector("#travDate");
const abelDate = document.querySelector("#abelDate");

const todaysDate = new Date();
const nfArticleDate = new Date("04-19-2023"); // Should be 4th April 2023
const kaliArticleDate = new Date("10-11-2023"); // Should be 11th October 2023
const travArticleDate = new Date("12-07-2022"); // Should be 7th December 2023
const abelArticleDate = new Date("11-11-2023"); // Should be 11th November 2023

const nfDaysDifference = Math.floor((todaysDate - nfArticleDate) / (1000 * 60 * 60 * 24));
const kaliDaysDifference = Math.floor((todaysDate - kaliArticleDate) / (1000 * 60 * 60 * 24));
const travDaysDifference = Math.floor((todaysDate - travArticleDate) / (1000 * 60 * 60 * 24));
const abelDaysDifference = Math.floor((todaysDate - abelArticleDate) / (1000 * 60 * 60 * 24));

nfDate.textContent = nfDaysDifference + " days ago";
kaliDate.textContent = kaliDaysDifference + " days ago";
travDate.textContent = travDaysDifference + " days ago";
abelDate.textContent = abelDaysDifference + " days ago";

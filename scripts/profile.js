const userProfile = {
    name: "Anonymous",
    surname: "Unknown",
    email: "Unknown"
}

const listOfSongs = [
    {
        songName: "I Know?",
        artist: "Travis Scott"
    },
    {
        songName: "Ric Flair Drip",
        artist: "Metro Boomin, Offset"
    },
    {
        songName: "X Wing",
        artist: "Denzel Curry"
    },
    {
        songName: "Blue",
        artist: "Kali Uchis"
    },
    {
        songName: "Stargazing",
        artist: "Travis Scott",
    },
    {
        songName: "Let Me Go",
        artist: "Daniel Caesar"
    },
    {
        songName: "Change",
        artist: "NF"
    },
    {
        songName: "After Hours",
        artist: "The Weeknd"
    },
    {
        songName: "Snooze",
        artist: "SZA"
    },
    {
        songName: "Pink + White",
        artist: "Frank Ocean"
    },
    {
        songName: "Too Many Nights",
        artist: "Metro Boomin, Don Toliver"
    },
    {
        songName: "Kill Bill",
        artist: "SZA"
    },
    {
        songName: "The Search",
        artist: "NF"
    },
    {
        songName: "Taste",
        artist: "Tyga"
    }
];

const songList = [...document.querySelectorAll(".song-name")];

$(document).ready(function () {
    songList.forEach(song => {
        const randomIndex = Math.floor(Math.random() * listOfSongs.length);
        song.textContent = listOfSongs[randomIndex].songName + " - " + listOfSongs[randomIndex].artist;
    });
});

$("#newSongs").click(function () {
    songList.forEach(song => {
        const randomIndex = Math.floor(Math.random() * listOfSongs.length);
        song.textContent = listOfSongs[randomIndex].songName + " - " + listOfSongs[randomIndex].artist;
    });
});


$(document).ready(function () {
    $("#profile-name").text($("#profile-name").text() + userProfile.name);
    $("#profile-surname").text($("#profile-surname").text() + userProfile.surname);
    $("#profile-email").text($("#profile-email").text() + userProfile.email);
});

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});

$(document).ready(function () {
    $(".list-group-item").on("dragover", function (event) {
        event.preventDefault();
    });
    $(".drag-song").on("dragstart", function (event) {
        event.originalEvent.dataTransfer.setData("text", $(this).text());
    });
    $(".list-group-item").on("drop", function (event) {
        event.preventDefault();
        var data = event.originalEvent.dataTransfer.getData("text");
        $(this).text(data);
    });
});

$("#hideBtn").click(function () {
    if ($(this).hasClass("rankingAction")) {
        $(".ranking").hide();
        $(this).removeClass("rankingAction");
    } else {
        $(".ranking").show();
        $(this).addClass("rankingAction");
    }
});

$(document).ready(function () {
    const variants = Array.from(document.querySelectorAll(".variant"));
    const choosenAnswers = [];

    let correctAnswers = 0;

    variants.forEach(variant => {
        variant.addEventListener("click", () => {
            if (!choosenAnswers.includes(variant)) {
                choosenAnswers.push(variant);
                variant.disabled = true;
            }
        });
    });

    document.querySelector(".checkAnswerBtn").addEventListener("click", () => {
        choosenAnswers.forEach(choosenAnswer => {
            const isCorrect = choosenAnswer.classList.contains("correct");

            if (isCorrect) {
                correctAnswers++;
            }
        });

        document.querySelector(".displayCorrectAnswers").innerHTML = `Your score is ${correctAnswers} out of 10.`;
    });
});


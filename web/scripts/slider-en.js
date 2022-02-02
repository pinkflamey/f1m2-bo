const section = document.getElementById("tentoonstellingen");
const buttonLeft = document.getElementById("slider-left");
const buttonRight = document.getElementById("slider-right");
const image = document.getElementById("tts-image");
const title = document.getElementById("tts-title");
const date = document.getElementById("tts-date");
const desc = document.getElementById("tts-description");

let titles = [
    "The potato-eaters", //0
    "The collection: Van Goghs masterpieces", //1
    "Van Gogh and the olive garden" //2
]

let dates = [
    "08-10-2021 till 13-02-2022", //0
    "Always available", //1
    "11-03-2022 till 12-06-2022" //2
]

let descs = [
    "Van Gogh's 'potato-eaters'. You probably recognize this painting. But how did Vincent make this painting? What was he trying to achieve with it? And, did he accomplish that? Come to the exhibition 'The potato-eaters: miss or masterpiece?' and judge for yourself.",
    "Come look at the masterpieces of Van Gogh in the museum and be taken away in the story of his development as an artist. Lose your mind in his world and discover the ideas and ambitions behind his art.",
    "For the first time seen together again: the more than ten paintings that Vincent van Gogh made of olive gardens. What did he find so special about olive trees?"
]

let images = [
    "../img/tt-1.webp", //0
    "../img/tt-2.webp", //1
    "../img/tt-3.webp" //2
]

function loadFirstEx(index) {
    console.log("Loading first exhibition: " + index);

    title.innerHTML = titles[index];
    date.innerHTML = dates[index];
    desc.innerHTML = descs[index];
    image.src = images[index];
}

let currentExh = 0;

function changeExhibition(direction) {
    console.log("button '" + direction + "' pressed");

    if(direction === 0) {
        currentExh = currentExh - 1;
        if(currentExh < 0) {
            currentExh = 2;
        }
    }
    else if(direction === 1) {
        currentExh = currentExh + 1;
        if(currentExh > 2) {
            currentExh = 0;
        }
    }

    title.innerHTML = titles[currentExh];
    date.innerHTML = dates[currentExh];
    desc.innerHTML = descs[currentExh];
    image.src = images[currentExh];

}


console.log("slider.js loaded!");
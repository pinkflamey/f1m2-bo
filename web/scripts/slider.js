const section = document.getElementById("tentoonstellingen");
const buttonLeft = document.getElementById("slider-left");
const buttonRight = document.getElementById("slider-right");
const image = document.getElementById("tts-image");
const title = document.getElementById("tts-title");
const desc = document.getElementById("tts-description");

let titles = [
    "De 4 Katten",
    "De 4 Katten: the sequel",
    "De 4 Katten en het Geheim van de andere Katten"
]

let descs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam. Lectus nulla at volutpat diam. At auctor urna nunc id cursus metus aliquam eleifend mi. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur a erat nam.",
    "Lectus nulla at volutpat diam. At auctor urna nunc id cursus metus aliquam eleifend mi. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras."
]

let images = [
    "https://placekitten.com/500/301",
    "https://placekitten.com/501/300",
    "https://placekitten.com/501/301"
]

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
    desc.innerHTML = descs[currentExh];
    image.src = images[currentExh];

}


console.log("slider.js loaded!");
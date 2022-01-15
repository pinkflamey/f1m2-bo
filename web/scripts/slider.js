const section = document.getElementById("tentoonstellingen");
const buttonLeft = document.getElementById("slider-left");
const buttonRight = document.getElementById("slider-right");
const image = document.getElementById("tts-image");
const title = document.getElementById("tts-title");
const date = document.getElementById("tts-date");
const desc = document.getElementById("tts-description");

let titles = [
    "Tentoonstelling De aardappeleters: misser of meesterwerk?", //0
    "De vaste collectie: Van Goghs meesterwerken", //1
    "Van Gogh en de olijfgaarden" //2
]

let dates = [
    "van 8 oktober 2021 tot 13 februari 2022", //0
    "Altijd te zien", //1
    "van 11 maart 2022 tot 12 juni 2022" //2
]

let descs = [
    "De aardappeleters van Vincent van Gogh. Waarschijnlijk ken je dit schilderij wel. Maar hoe ging Vincent eigenlijk te werk? Wat wilde hij ermee bereiken? En, is hij daarin geslaagd? Kom naar de tentoonstelling De aardappeleters: misser of meesterwerk? en vorm je eigen oordeel over dit wereldberoemde schilderij.", //1
    "Bekijk de meesterwerken van Vincent van Gogh in het museum en laat je meevoeren in zijn ontwikkeling als kunstenaar. Stap in Van Goghs wereld en ontdek de ideeën en ambities achter zijn kunst.", //1
    "Voor het eerst weer samen te zien: de meer dan tien schilderijen die Vincent van Gogh maakte van olijfgaarden. Wat vond hij zo bijzonder aan olijfbomen?" //2
]

let images = [
    "img/tt-1.webp", //0
    "img/tt-2.webp", //1
    "img/tt-3.webp" //2
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
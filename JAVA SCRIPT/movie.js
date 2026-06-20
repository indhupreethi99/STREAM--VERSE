//selecting the elments for banner image
var banner=document.getElementById("banner")
var left=document.getElementById("left")
var right=document.getElementById("right")
var image=[
    "../priya/banner1.jpg",
"../priya/hi.jpg",
"../priya/banner3.jpg",
"../priya/banner4.jpg","../priya/banner5.jpg"]
let current=0
right.addEventListener("click",function(){
current++
    if(current>=image.length){
        current=0
    }
    banner.src=image[current]

    })
    left.addEventListener("click",function(){
        current--
        if(current <0){
            current =image.length-1
        }
        banner.src=image[current]
    })
    setInterval(function(){
        current++
        if(current>=image.length){
            current=0
        }
        banner.src=image[current]
    },3000)
//selecting the cards for thiriller
let th = document.querySelector(".th");

let rightBtn = document.getElementById("rightT");
let leftBtn = document.getElementById("leftT");

let move = 0;

// Initially hide left arrow
leftBtn.style.display = "none";

rightBtn.addEventListener("click", function () {

    if (move < 2400) {

        move += 600;

        th.style.transform = `translateX(-${move}px)`;

        leftBtn.style.display = "block";
    }

    // Last page reached
    if (move >= 2400) {

        rightBtn.style.display = "none";
    }

});

leftBtn.addEventListener("click", function () {

    move -= 600;

    // Show right arrow when moving back
    rightBtn.style.display = "block";

    if (move <= 0) {

        move = 0;

        leftBtn.style.display = "none";
    }

    th.style.transform = `translateX(-${move}px)`;

});
//family movies//
let familyMovies = document.querySelector(".family__movies");

let rightF = document.getElementById("rightF");
let leftF = document.getElementById("leftF");

let familyMove = 0;

leftF.style.display = "none";

rightF.addEventListener("click", function () {

    if (familyMove < 2400) {

        familyMove += 600;

        familyMovies.style.transform =
        `translateX(-${familyMove}px)`;

        leftF.style.display = "block";
    }

    if (familyMove >= 2400) {

        rightF.style.display = "none";
    }

});

leftF.addEventListener("click", function () {

    familyMove -= 600;

    rightF.style.display = "block";

    if (familyMove <= 0) {

        familyMove = 0;

        leftF.style.display = "none";
    }

    familyMovies.style.transform =
    `translateX(-${familyMove}px)`;

});
//heatbeet row//
// Love Movies

let loveMovies = document.querySelector(".love__movies");

let rightL = document.getElementById("rightL");
let leftL = document.getElementById("leftL");

let loveMove = 0;

leftL.style.display = "none";

rightL.addEventListener("click", function () {

    if (loveMove < 2400) {

        loveMove += 600;

        loveMovies.style.transform =
        `translateX(-${loveMove}px)`;

        leftL.style.display = "block";
    }

    if (loveMove >= 2400) {

        rightL.style.display = "none";
    }

});

leftL.addEventListener("click", function () {

    loveMove -= 600;

    rightL.style.display = "block";

    if (loveMove <= 0) {

        loveMove = 0;

        leftL.style.display = "none";
    }

    loveMovies.style.transform =
    `translateX(-${loveMove}px)`;

});
//entertmnet row//
// Entertainment Movies//

let entaMovies = document.querySelector(".enta__movies");

let rightE = document.getElementById("rightE");
let leftE = document.getElementById("leftE");

let entaMove = 0;

leftE.style.display = "none";

rightE.addEventListener("click", function () {

    if (entaMove < 2400) {

        entaMove += 600;

        entaMovies.style.transform =
        `translateX(-${entaMove}px)`;

        leftE.style.display = "block";
    }

    if (entaMove >= 2400) {

        rightE.style.display = "none";
    }

});

leftE.addEventListener("click", function () {

    entaMove -= 600;

    rightE.style.display = "block";

    if (entaMove <= 0) {

        entaMove = 0;

        leftE.style.display = "none";
    }

    entaMovies.style.transform =
    `translateX(-${entaMove}px)`;

});
// feel good movies//

let feelMovies = document.querySelector(".feel__movies");

let rightG = document.getElementById("rightG");
let leftG = document.getElementById("leftG");

let feelMove = 0;

leftG.style.display = "none";

rightG.addEventListener("click", function () {

    if (feelMove < 2400) {

        feelMove += 600;

        feelMovies.style.transform =
        `translateX(-${feelMove}px)`;

        leftG.style.display = "block";
    }

    if (feelMove >= 2400) {

        rightG.style.display = "none";
    }

});

leftG.addEventListener("click", function () {

    feelMove -= 600;

    rightG.style.display = "block";

    if (feelMove <= 0) {

        feelMove = 0;

        leftG.style.display = "none";
    }

    feelMovies.style.transform =
    `translateX(-${feelMove}px)`;

});
// Horror Movies

let horrorMovies = document.querySelector(".horror__movies");

let rightH = document.getElementById("rightH");
let leftH = document.getElementById("leftH");

let horrorMove = 0;

leftH.style.display = "none";

rightH.addEventListener("click", function () {

    if (horrorMove < 2400) {

        horrorMove += 600;

        horrorMovies.style.transform =
        `translateX(-${horrorMove}px)`;

        leftH.style.display = "block";
    }

    if (horrorMove >= 2400) {

        rightH.style.display = "none";
    }

});

leftH.addEventListener("click", function () {

    horrorMove -= 600;

    rightH.style.display = "block";

    if (horrorMove <= 0) {

        horrorMove = 0;

        leftH.style.display = "none";
    }

    horrorMovies.style.transform =
    `translateX(-${horrorMove}px)`;

});
//for the banner click//
let playBtn = document.getElementById("playBtn");

const bannerMovies = [
    "ohmy",      // banner1.jpg
    "hi",   // hi.jpg
    "sita",   // banner3.jpg
    "amaran",   // banner4.jpg
    "irugapatru"     // banner5.jpg
];

playBtn.addEventListener("click", function () {
    window.location.href =
        `movie-details.html?id=${bannerMovies[current]}`;
});
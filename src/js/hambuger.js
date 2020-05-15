const HambugerBtn = document.querySelector(".side--btn");
const nav = document.querySelector(".side");

const MOBILE = "719";

let navItem = document.querySelectorAll(".side--nav--item");
let colorCheck = "hide";
let hambugerCheck = "close";
let windowWidth;
let windowHeight;

// Hambuger menu show / hide function
window.addEventListener("resize", () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    console.log(windowWidth, windowHeight);

    if (windowWidth <= MOBILE) {
        HambugerBtn.style.opacity = "1";
        HambugerBtn.style.zIndex = "5500";
    } else {
        HambugerBtn.style.opacity = "0";
        HambugerBtn.style.zIndex = "-5500";
    }
});

// Hambuger menu click event
HambugerBtn.addEventListener("click", () => {
    if (hambugerCheck == "close") {
        nav.style.zIndex = "5000";
        nav.style.opacity = "1";
        hambugerCheck = "open"
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.animationName = "fadeUp";
            navItem[i].style.animationDuration = "1s";
            navItem[i].style.animationDelay = "0." + i + "s";
        }
    } else {
        nav.style.zIndex = "-5000";
        nav.style.opacity = "0";
        hambugerCheck = "close"
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].style.animationName = "";
            navItem[i].style.animationDuration = "";
            navItem[i].style.animationDelay = "";
        }
    }
    colorChange();
});

//Hambuger button color change function
function colorChange() {
    if (colorCheck == "show") {
        HambugerBtn.style.backgroundColor = "#fff";
        HambugerBtn.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.2)"
        colorCheck = "hide";
    } else {
        HambugerBtn.style.backgroundColor = "#3a112f";
        HambugerBtn.style.boxShadow = "10px 10px 10px rgba(0,0,0,0)";
        colorCheck = "show";
    }
}
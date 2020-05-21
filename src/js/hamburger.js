const nav = document.querySelector(".side");
const lineTop = document.querySelector(".line--top");
const lineMiddle = document.querySelector(".line--middle");
const lineBottom = document.querySelector(".line--bottom");
const hamburger = document.querySelector(".hamburger");

const MOBILE = "719";

let navItem = document.querySelectorAll(".side--nav--item");
let colorCheck = "hide";
let hambugerCheck = "close";
let windowWidth;
let windowHeight;

windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

// hamburger menu show / hide function
function showHamburger(){
    if(windowWidth <= MOBILE){
        hamburger.style.opacity = "1";
        hamburger.style.zIndex = "5500";
    } else{
        hamburger.style.opacity = "0";
        hamburger.style.zIndex = "-5500";
    }
}

// hamburger menu window load show / hide function
window.addEventListener("load",()=>{
    showHamburger();    
})

// hamburger menu window resize show / hide function
window.addEventListener("resize", () => {

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    
    showHamburger();
});

// Hambuger menu click event
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");

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
        hamburger.style.backgroundColor = "#fff";
        hamburger.style.boxShadow = "10px 10px 10px rgba(0,0,0,0.2)"
        document.querySelector(".hamburger-inner").style.backgroundColor="#d52316";
        colorCheck = "hide";
    } else {
        hamburger.style.backgroundColor = "#3a112f";
        hamburger.style.boxShadow = "10px 10px 10px rgba(0,0,0,0)";
        document.querySelector(".hamburger-inner").style.backgroundColor="#fff";
        colorCheck = "show";
    }
}
const HambugerBtn = document.querySelector(".side--btn");
const nav = document.querySelector(".side");

let navItem = document.querySelectorAll(".side--nav--item");

let hambugerCheck = "close";

HambugerBtn.addEventListener("click", () => {
    if (hambugerCheck == "close") {
        nav.style.zIndex = "5000";
        nav.style.opacity = "1";
        hambugerCheck = "open"
        for(let i = 0; i < navItem.length; i++){
            navItem[i].style.animationName = "fadeUp";
            navItem[i].style.animationDuration = "1s";
            navItem[i].style.animationDelay =  "0."+i+"s";
        }
    } else {
        nav.style.zIndex = "-5000";
        nav.style.opacity = "0";
        hambugerCheck = "close"
        for(let i = 0; i < navItem.length; i++){
            navItem[i].style.animationName="";
            navItem[i].style.animationDuration = "";
            navItem[i].style.animationDelay="";

        }
    }
});
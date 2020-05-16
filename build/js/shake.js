const skull = document.querySelector(".newslatter__signup--skull");

let skullCheck = "shake";

setInterval(()=>{
    if(skullCheck == "shake"){
        skull.style.animation="shake 0.4s";
        skullCheck = "skull";
    }else{
        skull.style.animation="";
        skullCheck = "shake";
    }
},3000)
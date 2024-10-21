
"use strict"

const overlay = document.querySelector(".overlay");
const message = document.querySelector(".hidden")
const closeBtn = document.querySelector(".close");

const messageButtons = document.querySelectorAll(".messageButtons");
for( let i = 0; i < messageButtons.length; i++){
    messageButtons[i].addEventListener('click',function(){
        message.classList.remove("hidden");    
    })
}

closeBtn.addEventListener('click', function(){
    message.classList.add("hidden");
});

overlay.addEventListener('click',function(){
    console.log("overlay clicked");
})
document.addEventListener("keydown",function(event){
    if(event.key === "Escape"){
        message.classList.add("hidden");

    }
})
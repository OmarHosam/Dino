const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")
const displayScore = document.getElementById("displayScore");
var score = 0;
cactus.classList.add("block");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

let setScore = setInterval(() => {
    score += 1;
    displayScore.innerHTML = score;
}, 150);

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over!");
        score = 0;
        cactus.classList.remove("block");
        cactus.classList.add("block");
    }
}, 10);

document.addEventListener("keydown", function(event) {
    jump();
});
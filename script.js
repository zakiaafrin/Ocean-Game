function playSound() {
    var mySound = document.getElementById("sound");
    mySound.play();
    var currentPoints = document.getElementById("points");
    currentPoints.innerHTML = parseInt(currentPoints.innerHTML) + 1;

}

function moveBall() {
    var myBall = document.getElementById("fish");

    myBall.style.top = (Math.floor((Math.random() * ((-600) - (-200) + 1) + (-200)))) + "px";
    myBall.style.left = (Math.floor((Math.random() * 900) + 1)) + "px";
}

setInterval(moveBall, 1000);
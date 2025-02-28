let positionX = 175; // Horizontal position
let positionY = 175; // Vertical position
let character = document.getElementById("character");

function moveLeft() {
    if (positionX > 0) {
        positionX -= 10;
        character.style.left = positionX + "px";
    }
    console.log("X:", positionX, "Y:", positionY);
}

function moveRight() {
    let maxRight = window.innerWidth - character.offsetWidth;
    if (positionX < maxRight) {
        positionX += 10;
        character.style.left = positionX + "px";
    }
    console.log("X:", positionX, "Y:", positionY);
}

function moveUp() {
    if (positionY > 0) {
        positionY -= 10;
        character.style.top = positionY + "px";
    }
    console.log("X:", positionX, "Y:", positionY);
}

function moveDown() {
    let maxBottom = window.innerHeight - character.offsetHeight;
    if (positionY < maxBottom) {
        positionY += 10;
        character.style.top = positionY + "px";
    }
    console.log("X:", positionX, "Y:", positionY);
}

// keyboard controls
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
    }
});





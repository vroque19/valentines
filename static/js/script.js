const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.getElementById('gif');
const yes_btn = document.querySelector('.yes-btn');
const no_btn = document.querySelector('.no-btn');
yes_btn.addEventListener("click", handleYes);
no_btn.addEventListener("mouseover", changeImage);
no_btn.addEventListener("mouseout", restoreImage);
no_btn.addEventListener("click", moveButton)
document.addEventListener("mouseover", (event) => {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    console.log(mouseX, mouseY)
})

function changeImage() {
    gif.src = "static/images/shy.gif";
    console.log("wrong answer")
}

function restoreImage() {
    gif.src = "static/images/cat.gif";
}

function moveButton() {
    const noBtnRect = no_btn.getBoundingClientRect();
    const yesBtnRect = yes_btn.getBoundingClientRect();
    const maxX = 900 - noBtnRect.width;
    const maxY = 500 - noBtnRect.height;
    // 500, 80; 890, 80; 890, 429; 500, 429
    console.log(yesBtnRect);
    let randX;
    let randY;
    randX = (Math.random() * maxX)+20;
    randY = (Math.random() * maxY)+20;
    if(isOverlapping(noBtnRect, yesBtnRect)) {
        randX = (Math.random() * maxX)+20;
        randY = (Math.random() * maxY)+20;
    console.log(randX, randY)
    }
    
    no_btn.style.top = randY + "px";
    no_btn.style.left = randX + "px";
}

function isOverlapping(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function handleYes() {
    console.log("YAYAYAYYA");
    window.location.href = "/yes";
}

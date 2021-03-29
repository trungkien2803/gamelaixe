let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let image = document.getElementById("img");
let colorCar = ["/huong-doi-tuong/game-lai-xe/car.png",
                "/huong-doi-tuong/game-lai-xe/car2.png",
                "/huong-doi-tuong/game-lai-xe/car3.png"];
let imageB1 = document.getElementById("imgB1");
let imageB2 = document.getElementById("imgB2");
let imageB3 = document.getElementById("imgB3");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");
let image5 = document.getElementById("img5");
let point = 0;
let car = new Car(300,580,10);
let barrier = new Barrier(imageB1,-100,5);
let barrier2 = new Barrier(imageB2,-100,4);
let barrier3 = new Barrier(imageB3,-100,4.5);
let barrier4 = new Barrier(imageB1,-100,4.2);
let reward = new Reward ()
let background1 = new Background(image3)
let animationId;
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            car.moveLeft();
            break;
        case 39:
            car.moveRight();
            break;
        case 38:
            car.moveTop();
            break;
        case 40:
            car.moveBottom();
            break;
    }
}
function docReady() {
    window.addEventListener("keydown", moveSelection);
    window.addEventListener("keyup", moveSelection);
}
function start(){
    point = 0;
    car = new Car(300,580,15);
    barrier = new Barrier(imageB1,-100,7);
    barrier2 = new Barrier(imageB2,-100,6);
    barrier3 = new Barrier(imageB3,-100,6.5);
    barrier4 = new Barrier(imageB1,-100,6.2);
    reward = new Reward ()
    selectColor()
    document.getElementById("audio").src = "/huong-doi-tuong/game-lai-xe/audio.mp3"
    playGame()
}
function playGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    background1.run()
    background1.drawBackground()
    car.drawCar();
    barrier.run();
    barrier2.run();
    barrier3.run();
    barrier4.run();
    barrier.drawBarrier();
    barrier2.drawBarrier()
    barrier3.drawBarrier();
    barrier4.drawBarrier(); 
    getPoint()
    animationId = requestAnimationFrame(playGame);
    checkLost()
}
function load1(){
    background1.drawBackground();
    car.drawCar();
    point = 0;
}
function showTutorial (){
    let a = document.getElementById("tutorial-text").style.display;
    if(a === "none"){
        document.getElementById("tutorial-text").style.display = "block"
    } else {
        document.getElementById("tutorial-text").style.display = "none"
    }
}
function getPoint(){
    if(barrier.y >= 700){
        point += 1;
    }
    document.getElementById("point").innerHTML = point
}
setInterval(function(){
    barrier3.setSpeed()
    barrier2.setSpeed()
    barrier4.setSpeed()
},5000)
function stop1(){
    document.getElementById("audio").src = "/huong-doi-tuong/game-lai-xe/audio-lost.mp3"
    cancelAnimationFrame(animationId)
}
function checkLost(){
    let carX = car.x + car.width;
    let carY = car.y + barrier.height;
    let carXW = car.x + car.width;
    let carYH = car.y + barrier2.height;
    let barierX = barrier.x + barrier.width-3;
    let barrierY = barrier.y + barrier.height-8;
    let barrier2X = barrier2.x + barrier2.width-3;
    let barrier2YH = barrier2.y + barrier2.height-8;
    let barier3X = barrier3.x + barrier3.width-3;
    let barrier3Y = barrier3.y + barrier3.height-8;
    let barrier4X = barrier4.x + barrier4.width-3;
    let barrier4YH = barrier4.y + barrier4.height-8;
    if(barrier.x <= car.x && car.x <= barierX && barrierY >= car.y && barrierY <=carY){
        stop1()
    }
    else if(barrier.x <= carX && carX <= barierX && barrierY >= car.y && barrierY<= carY){
        stop1()
    }
    else if(barrier2.x <= car.x && car.x <= barrier2X && barrier2YH >= car.y && barrier2YH <=carYH){
        stop1()
    }
    else if(barrier2.x <= carXW && carXW <= barrier2X && barrier2YH >= car.y && barrier2YH<= carYH){
        stop1()
    }
    else if(barrier3.x <= car.x && car.x <= barier3X && barrier3Y >= car.y && barrier3Y <=carY){
        stop1()
    }
    else if(barrier3.x <= carX && carX <= barier3X && barrier3Y >= car.y && barrier3Y<= carY){
        stop1()
    }
    else if(barrier4.x <= car.x && car.x <= barrier4X && barrier4YH >= car.y && barrier4YH <=carYH){
        stop1()
    }
    else if(barrier4.x <= carXW && carXW <= barrier4X && barrier4YH >= car.y && barrier4YH<= carYH){
        stop1()
    }
}
function selectColor(){
    let select = document.getElementById("select").value;
    if(select == "yellow car"){
        image.src = colorCar[0]
    } else if(select == "black car"){
        image.src = colorCar[1]
    } else if(select == "gray car"){
        image.src = colorCar[2]
    }
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
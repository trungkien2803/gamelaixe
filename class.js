class Barrier {
    constructor(image,y,speed) {
        this.width = 40;
        this.height = 60;
        this.speed = speed;
        this.min = 110;
        this.max = 490;
        this.x = getRandomIntInclusive(this.min, this.max) 
        this.y = y;
        this.image = image;
    }
    drawBarrier() {
        if(this.y > 700){
            this.x =  getRandomIntInclusive(this.min, this. max) 
        }
        this.image.addEventListener("load", (e) => {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        });
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    setSpeed(){
        this.speed += 0.5
    }
    run() {
        if(this.y > 700)
        this.y = 0;
        this.y += this.speed;
    }
}
class Reward {
    constructor() {
        this.x = 300  ;
        this.y = 500 ;
    }
    drawReward() {
        ctx.arc(300, 500, 10,0, 2 * Math.PI);
        ctx.fill()
        ctx.fillStyle = "#FFFF00";
    }
}
class Background {
    constructor(img){
        this.x = 0;
        this.y = -700;
        this.img = img
    }   
    drawBackground(){
        this.img.addEventListener("load", (e) => {
            ctx.drawImage(this.img, 0, this.y, 600, 1400);
        });
        ctx.drawImage(this.img, 0, this.y, 600, 1400);
    }
    run(){
        this.y += 4
        if(this.y == 0){
            this.y = -700
        }
    }
}
class Car {
    constructor(x,y,speed) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 60;
        this.speed = speed;
    }
    drawCar() {
        image.addEventListener("load", (e) => {
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
        });
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
    moveTop() {
        if(this.y > 110+this.speed){
            this.y -= this.speed;
        }
    }
    moveBottom() {
        if(this.y < canvas.height - this.height){
            this.y += this.speed;
        }
    }
    moveRight() {
        if(this.x < canvas.width - 140){
            this.x += this.speed;
        }
    }
    moveLeft() {
        if(this.x > 80 + this.speed){
            this.x -= this.speed;
        }
    }
}
var snow, snowimg, snowImg;

function preload(){
  snowimg=loadImage("snow4.webp");
  backgroundimg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,800);
  snowImg=createSprite(200, 200, 400, 400);
  snowImg.addImage(backgroundimg);

}

function draw() {
  
  drawSprites();
}
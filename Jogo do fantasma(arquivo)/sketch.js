var tank , tankImage;
var tank2 , tankImage2;
var scenery;

function preload(){
  tankImage = loadImage("tankimage.png");
  tankImage2 = loadImage("Tankimage2.png");
}

function setup(){

  createCanvas(600,600);
  tank = createSprite(100,100,20,20);
  tank2 = createSprite(200,200,20,20);
  tank.addImage(tankImage);
  tank2.addImage(tankImage2);
  
}
  
   
  
function draw(){
  background("red")
  
  drawSprites();
  
}


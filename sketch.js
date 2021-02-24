var balloon;
var backgroundImg = "Hot Air Ballon-01.png";

function preload(){
  getBackgroundImg();
  airBallonImg = loadImage("Hot Air Ballon-02.png","Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var balloon = createSprite(810, 550);
}

function draw() {
  background(255,255,255);  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }

  drawSprites();
}
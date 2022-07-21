var ship, ship1;
var sea,sea1;

function preload(){
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);

  //creating the sea
  sea=createSprite(600,300);
  sea.addAnimation("running","sea.png")
  sea.scale=0.5;
  sea.velocityX=1;

  //creating ship
ship=createSprite(50,200,20,50);
ship.addAnimation("running","ship-1.png");
edges=createEdgeSprites();

//adding scale and position to ship
ship.scale=0.25;
ship.x=90;
ship.y=300;
}

function draw() {
  background("blue");
 if(keyDown("enter")){
  ship.velocityX=5;
 }
 if(keyDown("left")){
  ship.velocityX=-5;
 }
 if(keyDown("space")){
  ship.velocityX=0;
 }
 //codigo para reiniciar el fondo
 if(sea.x < 0){
  sea.x=sea.width/2;
 }
 //stop ship from falling down
 ship.collide(edges[3])
 drawSprites();
}
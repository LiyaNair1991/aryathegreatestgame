const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var earth,earth_animation;
var moon;
function preload()
{
   bg=loadImage("universe.jpg");
   astImg=loadImage("inew.png");
  
   //created oone image
   gif_createImg = createImg("earth.gif");

}
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    gif_createImg.position(250, 50);
    moon=createSprite(800,50,25,25);
    moon.addImage("ass", astImg)
    moon.scale=0.7;
    moon.velocityX=-2;

    moon.velocityY=1;
    
   
}

function draw(){
    background(bg);
    Engine.update(engine);
  //  rotateMoon(1);
    drawSprites();
}

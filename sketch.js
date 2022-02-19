
var ninja, ninja_run;
var bg, bgImg;
var ground;
var villan, villan_run;

function preload(){
  bgImg = loadImage('images/bcg.png');
  ninja_run = loadAnimation('images/Run1.png','images/Run2.png','images/Run3.png','images/Run4.png','images/Run5.png','images/Run6.png','images/Run7.png','images/Run8.png','images/Run9.png','images/Run0.png');

}

function setup(){
  createCanvas(1500,700)
  
  bg = createSprite(450,350,2000,700);
  //bg.shapeColor = "red";
  bg.addImage("bck",bgImg);
  bg.scale = 2.3;
  bg.velocityX = -1;

  ninja = createSprite(100,650,10,100);
  ninja.addAnimation("ninja_running",ninja_run);
  ninja.scale = 0.3;

  ground = createSprite(200,height,1800,10);
  ground.visible = false; 
 
}

function draw(){
  background("grey");

  if(bg.x < 400){
    bg.x = 450;
  }

  //controls
  if(keyDown("space")){
    ninja.velocityY = -10;
  }
  ninja.velocityY += 0.5;  
  
  ninja.collide(ground);
  drawSprites();

}

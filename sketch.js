// variables
var bgImg;
var bgImg1;
var spaceshipImg;
var ship1
var obstacleImg;
var obstacle;

var END =0;
var PLAY =1;
var gameState = PLAY;



function preload(){
  bgImg=loadImage("bg.png")
  bgImg1=loadImage("g.png")
  spaceshipImg=loadImage("ship2.png")
  obstacleImg=loadImage("obs.png")

}
function setup() {
  createCanvas(800,400);

  ship1=createSprite(400,320,20,20);
  ship1.addImage(spaceshipImg);
  ship1.scale=0.6;

  backgr=createSprite(0,0,800,400);
  backgr.addImage(bgImg);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityY=1;


  obstaclesGroup=createGroup();


}

function draw() {
  background(0);  

   

  fill("black");
  text(mouseX + "," + mouseY,mouseX,mouseY);

  ship1.depth=backgr.depth+1;

  if(gameState===PLAY){
    spawnObstacles();
    if (keyDown(RIGHT_ARROW)){
      ship1.x+=5
      
    }
    if (keyDown(LEFT_ARROW)){
      ship1.x-=5;
    } 

  }

   if(ship1.isTouching(obstaclesGroup)){
      gameState = 0;
     //fill("white");
     //textSize(25);
     //text("YOU LOSE!!!",20,20);
 }

  if(gameState===END){
    obstaclesGroup.destroyEach();
    backgr.addImage(bgImg1);
     
    //backgr.depth=obstacle.depth+1;

    obstaclesGroup.setVelocityYEach(0);
    
    backgr.velocityY=0;
    backgr.x=250;
    backgr.y=250;
    backgr.scale=0.5;

    ship1.visible=false;
    obstacle.visible=false;
    obstacle.velocityY = 0;

  }
  

  drawSprites();
}



function spawnObstacles()
{
  if (frameCount %30 === 0)
  {
    obstacle = createSprite(40,52,22,22); 
    obstacle.x=random(30,800);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.2;
    obstacle.velocityY = 8;
    
    obstacle.lifetime = 250;
    obstacle.depth=ship1.depth+1;
    obstaclesGroup.add(obstacle);

  }
}
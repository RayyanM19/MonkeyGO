
var monkey, monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;


function preload(){

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(100,270,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,300,600,10);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
 
}


function draw() {
  background("white");
  
  drawSprites();

   if(ground.x > 300){
     ground.x = ground.width/2;
   }
   ground.velocityX = 2;
  
  monkey.velocityY = 0.5;
  monkey.collide(ground);
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  bananas();
  obstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate);
  text("Survival Time: "+ survivalTime,100,50);
}

function bananas(){
  if(frameRate%80===0){
    banana = createSprite(400,Math.round(random(120,200)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.lifetime = 110;
    
    bananaGroup.add(banana);
  }
  
}

function obstacles(){
  if(frameRate%300===0){
    obstacle = createSprite(400,300,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 110;
    
    obstacleGroup.add(obstacle);
  }
  
}



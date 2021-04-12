
var Gorilla , Gorilla_running
var Banana ,BananaImage, Rock, RockImage
var FoodGroup, RockGroup
var Score
var Ground

function preload(){
  
  
  Gorilla_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  BananaImage = loadImage("banana.png");
  RockImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  

//Survival time
  var survivalTime=0;
  
  //creating gorilla
   Gorilla=createSprite(80,315,20,20);
   Gorilla.addAnimation("moving", Gorilla_running);
  // Gorilla.addImage(bananaImage)
   Gorilla.scale=0.1
  
  Ground = createSprite(400,350,900,10);
  Ground.velocityX=-4;
  Ground.x=Ground.width/2;
  console.log(Ground.x)

  FoodGroup = new Group();
  RockGroup = new Group();

  Score = 0;
 
  
}


function draw() {
  
  //Background
  background(255);
  
    
  //Moving Ground
  if(Ground.x<0) {
    Ground.x=Ground.width/2;
  }
  
  
   //Jump Gorilla
    if(keyDown("space") && Gorilla.y >= 159 ) {
      Gorilla.velocityY = -12;
    }
    Gorilla.velocityY = Gorilla.velocityY + 0.8;
  
    Gorilla.collide(Ground);   
    
  //Spawning Banana & rock
    spawnFood();
    spawnRock();
 
  drawSprites();
  
  //Text
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ Score, 500,50);        
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}


//Spawn Food

function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    Banana = createSprite(600,250,40,10);
    Banana.y = random(120,200);    
    Banana.velocityX = -5;
  
     //assign lifetime to the variable
    Banana.lifetime = 300;
    Gorilla.depth = Banana.depth + 1;
    
    //add image of banana
     Banana.addImage(BananaImage);
     Banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(Banana);
  }
}

//Spawn The Rock

function spawnRock() {
  if(frameCount % 300 === 0) {
var Rock = createSprite(800,320,10,40);
    Rock.velocityX = -6;
    
    //add image to the obstacle 
    Rock.addImage(RockImage);
    Rock.scale=0.15;
    
    //lifetime to the obstacle     
    Rock.lifetime = 300;
    
    //add each obstacle to the group
    RockGroup.add(Rock);
  }
}

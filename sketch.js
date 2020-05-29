
var canonball, canonleg, canonmouth, tank, ground, deck1, deck2, score, q ;

function preload(){
this.image1 = loadImage("assets/background.png")
this.image2 = loadImage("assets/missile.png")
this.image3 = loadImage("assets/launcher.png")
this.image4 = loadImage("assets/start.png")
this.image5 = loadImage("assets/war.webp")
this.image6 = loadImage("assets/tank.png")
}


function setup() {
    createCanvas(window.innerWidth,window.innerHeight)
    
     
    deck1 = createSprite(700,400,1400,800)
    deck1.addImage(image1)
    deck1.scale = 1
    
    Tanks = createGroup();
    Misilles = createGroup();

    score = 0;

    q = text("PRESS Q TO START",400,800)


    //ground = createSprite(700,750,2000,20)


}

function draw() {
 background("white")
 text("score = " + score,900,100)

 if(keyDown("q")){
     
     deck1.visiblity = false;


     deck2 = createSprite(700,400,1400,800)
     deck2.addImage(image5)
     deck2.scale = 2.5

    

     
     canonmouth = createSprite(120,655,100,25)
     canonmouth.addImage(image3)
     canonmouth.scale = 0.75

     
    

 }
 if(keyDown("space") ){
  canonball = createSprite(250,585,1,1)
  canonball.velocityX = 5
  canonball.addImage(image2) 
  canonball.scale = 0.05;
  Misilles.add(canonball)
}

 if( Tanks.collide(Misilles) ){
  tank.destroy = false
  canonball.destroy = false;
  score = score + 1
  
 }

 spawnTank();
 
 
  
  drawSprites();
}

function spawnTank(){
    if(frameCount % 100 === 0) {
         tank = createSprite(1500,655,10,40);
         tank.addImage(image6)
         tank.scale = 0.25;
        
        tank.velocityX = -5;

        q.depth = deck1.depth
        q.depth = q.depth + 1

      
        
        Tanks.add(tank)
        
}
}



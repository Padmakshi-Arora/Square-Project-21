var canvas;
var music;
var ball;
var rect1,rect2,rect3,rect4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1 = createSprite(740,580,90,20);
    rect1.shapeColor = "blue";

    rect2 = createSprite(640,580,90,20);
    rect2.shapeColor = "red";

    rect3 = createSprite(540,580,90,20);
    rect3.shapeColor = "yellow";

    rect4 = createSprite(440,580,90,20);
    rect4.shapeColor = "magenta";
      

    //create box sprite and give velocity
        ball = createSprite(random(20,750),500,30,30);
        ball.shapeColor = "white";
        ball.velocityX = 2;
        ball.velocityY = 3;
       

    
}

function draw() {
    background("pink");

      drawSprites();
    //create edgeSprite
      createEdgeSprites();

    //add condition to check if box touching surface and make it box
      if(ball.isTouching(rect1) && ball.bounceOff(rect1)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = "blue";
        music.stop;
      }

      if(ball.isTouching(rect2) && ball.bounceOff(rect2)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = "red";
        music.stop;
      }

      if(ball.isTouching(rect3) && ball.bounceOff(rect3)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = "yellow";
        music.stop;
      }

      if(ball.isTouching(rect4) && ball.bounceOff(rect4)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        ball.shapeColor = "magenta";
        music.stop;
      }

}

function display(){

ball.display();
rect1.display();
rect2.display();
rect3.display();
rect4.display();

}
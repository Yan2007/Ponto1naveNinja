var score = 0
var PLAY=1;

var END=0;
var gameState=1;
var nave , nave_Img;
var ponto1 , ponto1_Img, ponto2 , ponto2_Img, ponto3 , ponto3_Img, ponto4 , ponto4_Img , ponto5 , ponto5_Img
var virus05 , virus05_Img , virus2 , virus2_Img , virus3 , virus3_Img , virus4 , virus4_Img , virus5 , virus5_Img , virus6 , virus6_Img , virus7 , virus7_Img , virus8 , virus8_Img;

function preload(){
    nave_Img = loadImage("Nave.png")
    ponto_Img1 = loadImage("Ponto1.png")
    ponto_Img2 = loadImage("Ponto2.png")
    ponto_Img3 = loadImage("Ponto3.png")
    ponto_Img4 = loadImage("Ponto4.png")
    ponto_Img5 = loadImage("Ponto5.png")
    virus8_Img = loadImage("Virus05.png")
    virus2_Img = loadImage("Virus2.png")
    virus3_Img = loadImage("Virus3.png")
    virus4_Img = loadImage("Virus4.png")
    virus5_Img = loadImage("Virus5.png")
    virus6_Img = loadImage("Virus6.png")
    virus7_Img = loadImage("Virus7.png")
}
function setup(){
    createCanvas(600,600);
    nave = createSprite(40,200,20,20);
    nave.addImage(nave_Img);
    nave.scale = 0.2
    nave.setCollider("rectangle",0,0,40,40);
    nave.mirrorX(-1)
    score=0;
    pontoG=createGroup();
    alienG=createGroup();
}
function draw(){
    background("white")
    if(gameState===PLAY){
        pontos();
        //aliens();
        nave.y=World.mouseY;
        nave.x=World.mouseX;
        if(pontoG.isTouching(nave)){
          pontoG.destroyEach();
           score=score+2;
        }
        else
        {
          if(alienG.isTouching(nave)){
            gameState=END;
            pontoG.destroyEach();
            alienG.destroyEach();
            pontoG.setVelocityXEach(0);
            alienG.setVelocityXEach(0);
            nave.scale=1;
            nave.x=300;
            nave.y=300;
          }
        }
      }
      
      drawSprites();

      textSize(25);
      text("Pontuação: "+ score,250,50);

    drawSprites();
}
function pontos(){
    if(frameCount%80===0){
      ponto1=createSprite(0,200,20,20);   
  
         ponto1.velocityX=2 //(7+(score/4));
       
      ponto1.scale=0.2;
      var r=Math.round(random(1,4));
      console.log(r)
      if (r == 1) {
        ponto1.addImage(ponto_Img1);
      } else if (r == 2) {
        ponto1.addImage(ponto_Img2);
      } else if (r == 3) {
        ponto1.addImage(ponto_Img3);
      } else {
        ponto1.addImage(ponto_Img4);
      }
      
      pontos.y=Math.round(random(50,550));
     
      
      pontos.setLifetime=100;
      
      pontoG.add(ponto1);
    }
  }
/*function aliens(){
    if(World.frameCount%200===0){
      virus05=createSprite(400,200,20,20);
      virus05.addAnimation("V", virus05_Img);
      virus05.y=Math.round(random(100,550));
      virus05.velocityX=-(8+(score/10));
      virus05.setLifetime=50;
      
      alienG.add(aliens);
    }
  }*/
  
  
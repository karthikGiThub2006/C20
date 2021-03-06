var movingrect,fixedrect;




function setup() {
  createCanvas(1200,800);
  
movingrect=createSprite(400, 200, 50, 50);
movingrect.shapeColor= "yellow";
movingrect.velocityX=-2.4;

fixedrect=createSprite(200, 200, 50, 50);
fixedrect.shapeColor= "pink";
fixedrect.velocityX=+2.4;
}


function draw() {
  background(255,255,255);  

if(movingrect.x-fixedrect.x<movingrect.width+fixedrect.width/2&&
  fixedrect.x-movingrect.x<fixedrect.width+movingrect.width/2){
    movingrect.velocityX=movingrect.velocityX*(-1)
    fixedrect.velocityX=fixedrect.velocityX*(-1)
  }

  drawSprites();

  
}
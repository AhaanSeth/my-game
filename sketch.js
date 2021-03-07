var bg, backgroundImage;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10,
 wall11, wall12, wall13, wall14, wall15, wal16, wall17, wall18, wall19, wall20,
 wall21, wall22;

var coords;

var eurosImage, euro, euro1, euro2, euro3, euro4, euro5, euro6, euro7, euro8, euro9, euro10,
euro11, euro12, euro13, euro14, euro15, euro16, euro17, euro18, euro19, euro20, euroGroup;


var bellaciao;

var charecter2, charecter2Image;

var score = 0;

function preload(){

  backgroundImage = loadImage("sprites/background2.jpg");
  
  euroImage = loadImage("sprites/euro.png")

  charecter2Image = loadImage("sprites/charecter2.png")

  //bellaciao = loadSound("sprites/bella ciao.mp3")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  charecter2 = createSprite(100, 650)
  charecter2.addImage(charecter2Image)
  charecter2.scale = .17
  
  euro = createSprite(290, 650)
  euro.addImage(euroImage);
  euro.scale = .3

  euro1 = createSprite(290, 490)
  euro1.addImage(euroImage);
  euro1.scale = .3

  euro2 = createSprite(290, 330)
  euro2.addImage(euroImage);
  euro2.scale = .3

  euro3 = createSprite(300, 170)
  euro3.addImage(euroImage);
  euro3.scale = .3

  euro4 = createSprite(480, 170)
  euro4.addImage(euroImage);
  euro4.scale = .3

  euro5 = createSprite(640, 170)
  euro5.addImage(euroImage);
  euro5.scale = .3

  euro6 = createSprite(800, 170)
  euro6.addImage(euroImage);
  euro6.scale = .3
  
  euro7 = createSprite(960, 170)
  euro7.addImage(euroImage);
  euro7.scale = .3

  euro8 = createSprite(1120, 170)
  euro8.addImage(euroImage);
  euro8.scale = .3

  euro9 = createSprite(1270, 170)
  euro9.addImage(euroImage);
  euro9.scale = .3

  euro10 = createSprite(1280, 320)
  euro10.addImage(euroImage);
  euro10.scale = .3

  euro11 = createSprite(1280, 470)
  euro11.addImage(euroImage);
  euro11.scale = .3

  euro12 = createSprite(1280, 620)
  euro12.addImage(euroImage);
  euro12.scale = .3

  euro13 = createSprite(1100, 620)
  euro13.addImage(euroImage);
  euro13.scale = .3

  euro14 = createSprite(920, 620)
  euro14.addImage(euroImage);
  euro14.scale = .3
  
  euro15 = createSprite(750, 620)
  euro15.addImage(euroImage);
  euro15.scale = .3

  euro16 = createSprite(560, 620)
  euro16.addImage(euroImage);
  euro16.scale = .3

  euro17 = createSprite(560, 515)
  euro17.addImage(euroImage);
  euro17.scale = .3

  euro18 = createSprite(560, 400)
  euro18.addImage(euroImage);
  euro18.scale = .3
  
  euro19 = createSprite(730, 400)
  euro19.addImage(euroImage);
  euro19.scale = .3
  
  

  wall1 = createSprite(212, 700, 275, 10)
  wall1.shapeColor = "white";

  wall2 = createSprite(150, 600, 150, 10)
  wall2.shapeColor = "white";

  wall3 = createSprite(230, 530, 10, 150)
  wall3.shapeColor = "white";

  wall4 = createSprite(352, 577.5, 10, 255)
  wall4.shapeColor = "white";

  wall5 = createSprite(352, 372.5, 10, 155)
  wall5.shapeColor = "white";

  wall6 = createSprite(230, 277, 10, 360)
  wall6.shapeColor = "white";

  wall7 = createSprite(352, 250, 10, 90)
  wall7.shapeColor = "white";

  wall8 = createSprite(447, 210, 200, 10)
  wall8.shapeColor = "white";

  wall9 = createSprite(335, 97.5, 220, 10)
  wall9.shapeColor = "white";

  wall10 = createSprite(885, 210, 680, 10)
  wall10.shapeColor = "white";
  
  wall11 = createSprite(1220, 380, 10, 335)
  wall11.shapeColor = "white";
  
  wall12 = createSprite(895, 97.5, 900, 10)
  wall12.shapeColor = "white";
  
  wall13 = createSprite(1350, 377, 10, 570)
  wall13.shapeColor = "white";

  wall14 = createSprite(1090, 550, 270, 10)
  wall14.shapeColor = "white";

  wall15 = createSprite(920, 657, 870, 10)
  wall15.shapeColor = "white";

  wall16 = createSprite(900, 550, 600, 10)
  wall16.shapeColor = "white";

  wall17 = createSprite(605, 500, 10, 100)
  wall17.shapeColor = "white";

  wall18 = createSprite(490, 505, 10, 300)
  wall18.shapeColor = "white";

  wall19 = createSprite(585, 350, 200, 10)
  wall19.shapeColor = "white";

  wall20 = createSprite(710, 445, 220, 10)
  wall20.shapeColor = "white";

  wall21 = createSprite(819, 385, 10, 131)
  wall21.shapeColor = "white";

  wall22 = createSprite(680, 335, 10, 40)
  wall22.shapeColor = "white";
  

}

function draw() {
  background(backgroundImage);  
  
  textSize(30)
  fill("black")
  text("START", 100, 650)
  



  //bellaciao.play()

  if (charecter2.isTouching(wall1)||charecter2.isTouching(wall2)||charecter2.isTouching(wall3)||
  charecter2.isTouching(wall4)||charecter2.isTouching(wall5)||charecter2.isTouching(wall6)||
  charecter2.isTouching(wall7)||charecter2.isTouching(wall8)||charecter2.isTouching(wall9)||
  charecter2.isTouching(wall10)||charecter2.isTouching(wall11)||charecter2.isTouching(wall12)||
  charecter2.isTouching(wall13)||charecter2.isTouching(wall14)||charecter2.isTouching(wall15)||
  charecter2.isTouching(wall16||charecter2.isTouching(wall17)||charecter2.isTouching(wall18)||
  charecter2.isTouching(wall19)||charecter2.isTouching(wall20)||charecter2.isTouching(wall21)||charecter2.isTouching(wall22))){

    charecter2.y = 650
    charecter2.x = 100
    score = 0;
    
  }
  

  

  if (keyDown(RIGHT_ARROW)){

    charecter2.x = charecter2.x+4
    

  }

  if (keyDown(UP_ARROW)){

    charecter2.y = charecter2.y-4

  }

  if (keyDown(DOWN_ARROW)){

    charecter2.y = charecter2.y+4

  }

  if (keyDown(LEFT_ARROW)){

    charecter2.x = charecter2.x-4

  }

  //if (charecter2.isTouching(euro)||charecter2.isTouching(euro1)||charecter2.isTouching(euro2)||
  //charecter2.isTouching(euro3)||charecter2.isTouching(euro4)||charecter2.isTouching(euro5)||
  //charecter2.isTouching(euro6)||charecter2.isTouching(euro7)||charecter2.isTouching(euro8)||
  //charecter2.isTouching(euro9)||charecter2.isTouching(euro10)||charecter2.isTouching(euro11)||
  //charecter2.isTouching(euro12)||charecter2.isTouching(euro13)||charecter2.isTouching(euro14)||
  //charecter2.isTouching(euro15)||charecter2.isTouching(euro16)||charecter2.isTouching(euro17)||
  //charecter2.isTouching(euro18)||charecter2.isTouching(euro19)){

  
 // }
 if (charecter2.isTouching(euro)){
   euro.destroy()
   score = score+50
 }

 if (charecter2.isTouching(euro1)){
  euro1.destroy()
  score = score+50
}

if (charecter2.isTouching(euro2)){
  euro2.destroy()
  score = score+50
}

if (charecter2.isTouching(euro3)){
  euro3.destroy()
  score = score+50
}

if (charecter2.isTouching(euro4)){
  euro4.destroy()
  score = score+50
}

if (charecter2.isTouching(euro4)){
  euro4.destroy()
  score = score+50
}

if (charecter2.isTouching(euro5)){
  euro5.destroy()
  score = score+50
}

if (charecter2.isTouching(euro6)){
  euro6.destroy()
  score = score+50
}

if (charecter2.isTouching(euro7)){
  euro7.destroy()
  score = score+50
}

if (charecter2.isTouching(euro8)){
  euro8.destroy()
  score = score+50
}

if (charecter2.isTouching(euro9)){
 euro9.destroy()
 score = score+50
}

if (charecter2.isTouching(euro10)){
 euro10.destroy()
 score = score+50
}

if (charecter2.isTouching(euro11)){
 euro11.destroy()
 score = score+50
}

if (charecter2.isTouching(euro12)){
 euro12.destroy()
 score = score+50
}

if (charecter2.isTouching(euro13)){
 euro13.destroy()
 score = score+50
}

if (charecter2.isTouching(euro14)){
  euro14.destroy()
  score = score+50
 }

if (charecter2.isTouching(euro15)){
 euro15.destroy()
 score = score+50
}

if (charecter2.isTouching(euro16)){
 euro16.destroy()
 score = score+50
}

if (charecter2.isTouching(euro17)){
 euro17.destroy()
 score = score+50
}
if (charecter2.isTouching(euro18)){
  euro18.destroy()
  score = score+50
 }

 if (charecter2.isTouching(euro19)){
  euro19.destroy()
  score = score+50
 }


    
  drawSprites();

  fill("white")
  textSize(25)
  text("Score:"+score, 50, 60)
  




}

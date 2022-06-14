let haksaWidth = 500;
let haksaWidth2 = 1250;
let haksaHeight = 366
let degree = 0.0;
let theta = 0.0;

let fadeEffect;
let windowScreen
//move & jump
let velocity = 10;
let movingVel = 14;
let fallVelocity = 15;
let fallVelocity_2 = 20;
let jumpPower = 10;
let jumpPower_2 = 12;
let jumpCount = 0;
let jump = false;

//checks
let consolCheck = false;
let rect1_1Check = false
let rect2_1Check = false
let rect2_2Check = false
let rect3_1check = false
let ellipse3_1check = false
let ellipse3_2check = false
let linkCheck = false

let introSoundCheck = false;
let backgroundCheck = false;
let jumpSoundCheck = false;
let gameOverCheck = false;
let endingSoundCheck = false;

//player & field(ground)
let img_Person;
let img2;
let px = 100, py = 750, pw = 80, ph = 150;
let px2 = 100, py2 = 750;
let px3 = 100, py3 = 750;
let px4 = 100, py4 = 750;
let ground = 900
let sky = 0;

//Related to game functions
let stageCheck = false;
let contents; //key of consol
let stage = 'intro'; //stage
let cutScene = 'language' 
let languageCheck;
// let languageCheck = 'korean';
let keyInput = false;

function setup() {
  // if(linkCheck === true)
  // {
  //   windowScreen = window.open('http://www.naver.com', '네이버팝업', 'width=500, height=700, scrollbars=yes, resizable=no')
  // }
  fadeEffect = 0;
  contents ="";
  createCanvas(2500, 1000);

  //cutScene
  cutImageLoad()

  myFont = loadFont('tway_air.ttf')

  img_portal = loadImage('image/portal.png')

  img_stage1 = loadImage('image/background_stage1.jpg')
  img_stage2 = loadImage('image/background_stage2.jpg')
  img_stage3 = loadImage('image/background_stage3.jpg')
  img_stage4 = loadImage('image/background_stage4.jpg')

  img_Person = loadImage('image/person_Right.png');
  img_Right= loadImage('image/person_Right.png');
  img_Left = loadImage('image/person_Left.png');
  img2 = loadImage('image/haksamo.png');

  hakSamo = loadImage('image/Haksamo.png')


  bridge_1 = loadImage('image/bridge_1.png');
  bridge_2_1 = loadImage('image/bridge_2_1.png');
  bridge_2_2 = loadImage('image/bridge_2_2.png');

  rectStage3 = loadImage('image/rectStage3.png');
  ellipse_3_1 = loadImage('image/ellipse1.png');
  ellipse_3_2 = loadImage('image/ellipse2.png');
  rect_3 = loadImage('image/rect1.png')
  exitDoor = loadImage('image/exitDoor.png');

  introMusic = createAudio('sound/intro_music.mp3')
  backgroundMusic = createAudio('sound/background.mp3');
  jumpSound = createAudio('sound/jump.mp3')
  gameOverSound = createAudio('sound/gameOverSound.mp3');
  endingSound = createAudio('sound/ending.mp3');
}
function draw() {
  //cutScene 
  cutDraw() //image draw 
  if(stage === 'cutScene') //cut image 
  {
    cut_sceen();
  } 

  //stage
  if(stage === 'stageEffect1')
  {
    stageEffect_1();
    backgroundCheck = true
  }
  if(stage === 'stage1')
  {
    stage_1();
  }


  else if(stage === 'stageEffect2')
  {
    stageEffect_2();
  }
  else if(stage === 'stage2')
  {
    stage_2();
  }


  else if(stage === 'stageEffect3')
  {
    stageEffect_3();
  }
  else if(stage === 'stage3')
  {
    stage_3();
  }


  else if(stage === 'stage4')
  {
    stage_4();
  }
  else if(stage === 'stageEffect4')
  {
    stageEffect_4();
  }


  else if(stage === 'gameOver')
  {
    gameOver()
    gameOverCheck = true;
  }

  //music
    //intro
  if(introSoundCheck === true)
  {
    introMusic.loop();
  }
  else if(introSoundCheck === false)
  {
    introMusic.stop();
  }

    //background
  if(backgroundCheck === true)
  {
    backgroundMusic.loop();
    backgroundMusic.volume(0.5)
  }
  else if(backgroundCheck === false)
  {
    backgroundMusic.stop();
  }

    //gameOver
  if(gameOverCheck === true)
  {
    gameOverSound.loop();
    gameOverSound.volume(0.1)
  }
  else if(gameOverCheck === false)
  {
    gameOverSound.stop();
  }
    //ending
  if(endingSoundCheck === true)
  {
    endingSound.loop();
    endingSound.volume(0.3);
  }
}


function stageEffect_1() {
  print(keyInput)
  push()
  createCanvas(2500, 1000);
  background(0);
  pop()
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //Haksamo
  imageMode(CENTER)
  image(hakSamo, haksaWidth, haksaHeight, 400, 450)


  //effect
  theta = radians(degree);
  haksaHeight = 366 + height/15* sin(theta/2);
  degree += 8;

  push()
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('Next: "Shift"', 1250, height*5.6/6)
  pop()
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      keyInput = true;
      stage = 'stage1';
    }      
  }
  else
  {
    keyInput = false;
  }
  pop();
}


function stage_1() {
  gameOverCheck = false
  createCanvas(2500, 1000)
  textFont("Helvetica");
  //wall
  if(px < 0 || px > 2500)
  {
    px *= -1;
  }
  if(py < 0)
  {
    py *= -1
  }

  //back_background
  image(img_stage1, 0, 0, 2500, 1000)

  //ground
  fill(0);
  rect(0, ground, 700, 100)
  rect(1690, ground, 1200, 100)

  //portal(next stage)
  image(img_portal, 2150, 560, 350, 350)
  if(px > 2250)
  {
    stage = 'stageEffect2';
    contents = ""
    keyInput = true;
  }

  //bridge
  if(rect1_1Check === true)
  {
    rect(750, 900, 900, 100);
  }


  if(contents == 'rect' || contents == 'rect(750,900,900,100)')
  {
    rect1_1Check = true;
  } 

  //bridge_display
  push();
  strokeWeight(3);
  fill(255)
  if(rect1_1Check === false)
  {
    image(bridge_1, 540, 630, 1125, 400)
  }
  pop();

  push();
  textSize(80);
  textFont(myFont);
  text("rect", 1135, 970);
  pop();
  
  

  //jump & player
  collisions_1()
  player_1()
  jumpF_1()


  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false
  }

  if(consolCheck === true)
  {
    consol_1();
  }


  //game over
  if (py > 880) 
  {
    stage = 'gameOver';
  }

}
function player_1() {
  
  //player
  image(img_Person, px, py - 50, 150, 200)
  if(keyIsDown(LEFT_ARROW))
  {
   px -= movingVel;
   img_Person = img_Left;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
   px += movingVel;
   img_Person = img_Right;
  }
}
function collisions_1() {
  //collisions
  if(py > 750)
  {
   if(px > 700 && px < 1700-pw)
   {
     py += fallVelocity;
     
     if(rect1_1Check === true)
     {
       py = 750;
     }
   }
   if(px > 0 && px < 700)
   {
    py = 750;
   }
   if(px > 1690-pw && px < 2500)
   {
    py = 750;
   }
  }
  
}
function jumpF_1() { // "Mr.Erdreich"'s youtube reference.
  
  //check
  if(keyIsDown(UP_ARROW))
  {
    jump = true;
    jumpSoundCheck = true
    if(jumpSoundCheck === true)
    {
      jumpSound.play();
      jumpSound.volume(0.5)
    }
    
  }
  else
  {
    jump = false;
  }

  //
  if(py >= ground-ph && jump == false)
  {
    // py = py;
    if(px > 700 && px < 1690-pw) //여기가 문제였음
    {
      py += fallVelocity;
    }
    jumpCount = 0; //문제x

  }
  else
  {
    py += velocity; //문제x
  }

  if(jump == true)
  {
    if(jumpCount >= jumpPower) //py <= sky || 
    {
      if(py > ground)
      {
        py = 750 //문제x
      }
      else
      {
        velocity = fallVelocity;
      } //문제x
    }
    else
    {
      velocity = -jumpPower;
      jumpCount = jumpCount + 0.7; //문제x
    }
  }
  else
  {
    velocity = fallVelocity; //문제x
  }

}
function gameOver() {
  backgroundCheck = false
  push();
  createCanvas(2500, 1000)
  background(0);
  
  //text
  fill(255, 0, 0, fadeEffect);
  textSize(300);
  textAlign(CENTER);
  text("YOU DIED", 1250, 500);
  
  fill(255, fadeEffect);
  textSize(90);
  textAlign(CENTER);
  text("If you want to try again, press 'Shift'" , 1250, 650);

  fadeEffect += 2.5;
  
  if(keyCode === 16)
  {
    px = 100;
    py = 800;
    contents = "";
    consolCheck = false;
    gameOverCheck = false
    stage = 'stage1'
  }
  pop();
}


function stageEffect_2() {
  push()
  print(keyInput)
  createCanvas(2500, 1000);
  background(0);
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //Haksamo
  imageMode(CENTER)
  image(hakSamo, haksaWidth, haksaHeight, 400, 450)

  haksaWidth += 13;
  if(haksaWidth > 1250)
  {
    haksaWidth = 1250
  }

  //effect
  if(haksaWidth === 1250)
  {
    theta = radians(degree);
    haksaHeight = 366 + height/15* sin(theta/2);
    degree += 8;
  
    push()
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text('Next: "Shift"', 1250, height*5.6/6)
    pop()
    push()
    fill(255);
    textSize(100);
    textAlign(CENTER)
    text("Stage1 Clear!", 1250, height*5/6)
    pop()
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        keyInput = true;
        stage = 'stage2';
      }      
    }
    else
    {
      keyInput = false;
    }
    pop();
  }
  pop();
}


function stage_2() {

  textFont("Helvetica");
  createCanvas(2500, 1000);

  //back_background
  image(img_stage2, 0, 0, 2500, 1000)

  //ground
  fill(0);
  rect(0, ground, 2500, 100)

  //portal(next stage)
  image(img_portal, 2150, 85, 350, 350)

  if(px2 > 2350-(pw+20))
  {
    stage = 'stageEffect3';
    contents = ""
    consolCheck = false;
    keyInput = true;
  }

  //wall
  push();
  fill(0);
  rect(1400, 400, 1100, 500);
  pop();

  //Stair1
  if (contents == 'rect1' || contents == 'rect(300,75,500,70)')
  {
    rect2_1Check = true;
  }
  if(rect2_1Check === true)
  {
    rect(300, 750, 500, 70)
  }
  else if(rect2_1Check === false)
  {
    image(bridge_2_1, 115, 603, 700, 230);
  }

  //stair2
  if (contents == 'rect2' ||contents == 'rect(850,550,500,70)')
  {
    rect2_2Check = true;
  }
  if(rect2_2Check === true)
  {
    rect(850, 550, 500, 70)
  }
  else if(rect2_2Check === false)
  {
    image(bridge_2_2, 665, 405, 700, 230)
  }
  //Stair1_display
 
  
  //jump & player
  collisions_2()
  player_2()
  jumpF_2()

  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false
    
  }

  if(consolCheck === true)
  {
    consol_1();
  }

}
function player_2() {

  //player
  image(img_Person, px2, py2 - 50, 150, 200)
  if(keyIsDown(LEFT_ARROW))
  {
    px2 -= movingVel;
    img_Person = img_Left;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    px2 += movingVel;
    img_Person = img_Right; 
  }  
}
function collisions_2() {
  //wall
  if(px2 < 0)
  {
    px2 *= -1;
  }
  if(py2 < 0)
  {
    py2 *= -1
  }

  //collisions
  if(px2 > 0-pw && px2 < 2500)
  {
    if(py2 > 750) //ground's y = 900
    {
      py2 = 750;
    }

    //stair1
    if(px2 > 300-pw && px2 < 800 && py2 > 750-ph && py2 < 820-ph)
    {
      if(rect2_1Check === true)
      {
        py2 = 750 - ph
        jumpCount = 0;
      }
    }
    //stair2
    if(px2 > 850-pw && px2 < 1350 && py2 > 550-ph && py2 < 620-ph)
    {
      if(rect2_2Check === true)
      {
        py2 = 550 - ph;
        jumpCount = 0;
      }
    }
    
    if(px2 > 1400-pw && px2 < 2500-pw && py2 > 400-ph && py2 < 600-ph)
    {
      py2 = 400 - ph;
      jumpCount = 0;
    }
    
    if(px2 > 1400-(pw+30) && px2 < 2500 &&py2 > 400)
    {
      px2 = 1400-(pw+30);
    }
  }
}
function jumpF_2() {

  //check
  if(keyIsDown(UP_ARROW))
  {
    jump = true;
    jumpSound.play();
    jumpSound.volume(0.5)
  }
  else
  {
    jump = false;
  }

  if(py2 >= ground-ph && jump === false)
  {
    py2 = py2;
    jumpCount = 0;
  }
  else
  {
    py2 += velocity;
  }

  if(jump === true)
  {
    if(py2 <= sky || jumpCount >= jumpPower_2)
    {
      if(py2 >= ground)
      {
        py2 = ground;
      }
      else
      {
        velocity = fallVelocity_2;
      }
    }
    else
    {
      velocity = -jumpPower_2;
      jumpCount = jumpCount + 0.7;
    }
  }
  else
  {
    velocity = fallVelocity
  }
}


function stageEffect_3() {
  print(keyInput)
  push()
  createCanvas(2500, 1000);
  background(0);
  pop()
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //Haksamo
  imageMode(CENTER)
  image(hakSamo, haksaWidth, haksaHeight, 400, 450)

  haksaWidth += 13;
  if(haksaWidth > 2000)
  {
    haksaWidth = 2000
  }
  pop();
  //effect
  push();
  if(haksaWidth === 2000)
  {
    theta = radians(degree);
    haksaHeight = 366 + height/15* sin(theta/2);
    degree += 8;
  
    push()
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text('Next: "Shift"', 1250, height*5.6/6)
    pop()
    push()
    fill(255);
    textSize(100);
    textAlign(CENTER)
    text("Stage2 Clear!", 1250, height*5/6)
    pop()
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        keyInput = true;
        stage = 'stage3';
      }      
    }
    else
    {
      keyInput = false;
    }
    pop();
  }
  pop();
}


function stage_3() {
  createCanvas(2500, 1000);

  //back_background
  image(img_stage3, 0, 0, 2500, 1000)

  //ground
  fill(0);
  rect(0, ground, 6000, 100)
  

  //Obstacle
  Obstacle()
  
  // ellipse(750, 320, 400)
  // rect(1250, 320, 400)
  // ellipse(1750, 320, 400);


  //portal(next stage)
  image(img_portal, 2330, 590, 350, 350)
  if(px3 > 2500-pw)
  {
    stage = 'stage4';
    px4 = 50
    contents = ""
    consolCheck = false;
  }

  //collisions
  collisions_3()

  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false
    
  }

  if(consolCheck === true)
  {
    consol_1()
  }

  //jump&&player
  player_3()
  jumpF_3()
}
function player_3() {
  //player
  image(img_Person, px3, py3 - 50, 150, 200);
  if(keyIsDown(LEFT_ARROW))
  {
    px3 -= movingVel;
    img_Person = img_Left;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    px3 += movingVel;
    img_Person = img_Right; 
  }  
}
function collisions_3() {
  //wall
  if(px3 < 0 || px3 > 2500)
  {
    px3 = 0;
  }
  if(py3 < 0)
  {
    py3 *= -1
  }

  //ground
  if(px3 > 0-pw && px3 < 2500-pw)
  {
    if(py3 > 750) //ground's y = 900
    {
      py3 = 750;
    }
  }
}
function jumpF_3() {
  //check
  if(keyIsDown(UP_ARROW))
  {
    jump = true;
    jumpSound.play();
    jumpSound.volume(0.5)
  }
  else
  {
    jump = false;
  }

  //
  if(py3 >= ground-ph && jump == false)
  {
    jumpCount = 0; 

  }
  else
  {
    py3 += velocity; 
  }

  if(jump == true)
  {
    if(jumpCount >= jumpPower) //py <= sky || 
    {
      if(py3 > ground)
      {
        py3 = 750
      }
      else
      {
        velocity = fallVelocity;
      }
    }
    else
    {
      velocity = -jumpPower;
      jumpCount = jumpCount + 0.7; 
    }
  }
  else
  {
    velocity = fallVelocity;
  }
}
function Obstacle() {
  //Obstacle
  image(rectStage3, 500, 70, 1500, 500)

  //leftEllipse
  if(contents === 'el1')
  {
    ellipse3_1check = true; //⭐
  }
  if(ellipse3_1check === true)
  {
    if(languageCheck  === 'korean')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(750, 320, 400);
      pop()
  
      push();
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("도", 750, 350)
      pop()
    }
    else if(languageCheck === 'english')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(750, 320, 400);
      pop()
  
      push();
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("Ru", 750, 350)
      pop()
    }
  }
  else if(ellipse3_1check === false)
  {
    image(ellipse_3_1, 573, 140, 350, 340)
  }

  //middleRect
  if(contents === 'rect1')
  {
    rect3_1check = true;
  }
  if(rect3_1check === true)
  {
    if(languageCheck === 'korean')
    {
      push()
      strokeWeight(13)
      stroke(100)
      rectMode(CENTER);
      fill(255)
      rect(1250, 320, 400)
      pop()
  
      push();
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("망", 1250, 350)
      pop()
    }
    else if(languageCheck === 'english')
    {
      push()
      strokeWeight(13)
      stroke(100)
      rectMode(CENTER);
      fill(255)
      rect(1250, 320, 400)
      pop()
  
      push();
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("n", 1250, 350)
      pop()
    }
  }
  else if(rect3_1check === false)
  {
    image(rect_3, 1065, 140, 350, 340)
  }

  //rightEllipse
  if(contents === 'el2')
  {
    ellipse3_2check = true;
  }
  if(ellipse3_2check === true)
  {
    if(languageCheck === 'korean')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(1740, 315, 400);
      pop()
  
      push();
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("쳐", 1750, 350)
      pop()
    }
    else if(languageCheck === 'english')
    {
      push()
      strokeWeight(13)
      stroke(100)
      fill(255)
      ellipse(1740, 315, 400);
      pop()
  
      push();
      textAlign(CENTER);
      textFont(myFont);
      textSize(100);
      text("away", 1750, 350)
      pop()
    }
  }
  else if(ellipse3_2check === false)
  {
    image(ellipse_3_2, 1563, 140, 350, 340)
  }

}


function stage_4() {
  //ground
  createCanvas(2500, 1000);

  //back_background
  image(img_stage4, 0, 0, 2500, 1000)  
  fill(0);
  rect(0, ground, 6000, 100)

  //exit
  exit()

  //portal(back)
  image(img_portal, -170, 590, 350, 350)
  if(px4 < 10)
  {
    stage = 'stage3';
    px3 = 2300
    contents = ""
    consolCheck = false;
  }

  //jump&&player
  player_4()
  jumpF_4()

  //collisions
  collisions_4()

  //consol
  if(keyIsPressed) //run console
  {
    if(key === '`' || key === '~')
    {
      contents = ""
      consolCheck = true
    }
  }

  if(match(contents,"Enter") == "Enter") //close console
  {
    contents = ""
    consolCheck = false
    
  }

  if(consolCheck === true)
  {
    consol_1()
  }
}
function collisions_4() {
  //ground
  if(px4 > 0-pw && px4 < 2500-pw)
  {
    if(py4 > 750) //ground's y = 900
    {
      py4 = 750;
    }
  }

  //muntin
  if(px4 > 2025-(pw+60))
  {
    if(ellipse3_1check === true && ellipse3_2check === true && rect3_1check === true)
    {
      px4 = px4;
    }
    else
    {
      px4 = 2025-(pw+60);
    }

  }
}
function player_4() {
  //player
  image(img_Person, px4, py4 - 50, 150, 200)
  
  if(keyIsDown(LEFT_ARROW))
  {
    px4 -= 11;
    img_Person = img_Left;
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    px4 += 11;
    img_Person = img_Right; 
  }  
}
function jumpF_4() {
  //check
  if(keyIsDown(UP_ARROW))
  {
    jump = true;
    jumpSound.play();
    jumpSound.volume(0.5)
  }
  else
  {
    jump = false;
  }

  //
  if(py4 >= ground-ph && jump == false)
  {
    jumpCount = 0; 

  }
  else
  {
    py4 += velocity; 
  }

  if(jump == true)
  {
    if(jumpCount >= jumpPower) //py <= sky || 
    {
      if(py4 > ground)
      {
        py4 = 750
      }
      else
      {
        velocity = fallVelocity;
      }
    }
    else
    {
      velocity = -jumpPower;
      jumpCount = jumpCount + 0.7; 
    }
  }
  else
  {
    velocity = fallVelocity;
  }
}
function exit() {
  //portal(ending)
  if(px4 > 2300)
  {
    stage = 'stageEffect4'
    keyInput = false
  }

  //exit
  push();
  image(exitDoor, 2200, 530, 300, 370)
  stroke(255);
  strokeWeight(10);
  fill(0)
  rect(2000, 310, 500, 180)
  pop();

  push()
  strokeWeight(5);
  stroke(100)
  fill(255)
  ellipse(2100, 400, 130)
  ellipse(2400, 400, 130)
  ellipse(2250, 400, 130) 
  pop();
  
  //muntin
  push()
  fill(150);
  strokeWeight(5);
  stroke(0)
  if(ellipse3_1check === false) //
  {
    rect(2125, 500, 15, 395)
  }
  if(rect3_1check === false)
  {
    rect(2075, 500, 15, 395)
  }
  if(ellipse3_2check === false)
  {
    rect(2025, 500, 15, 395)
  }

  // rect(2025, 500, 15, 395)
  // rect(2075, 500, 15, 395)
  // rect(2125, 500, 15, 395)
  pop()

  //light
  if(ellipse3_1check === true)
  {
    push()
    strokeWeight(7);
    stroke(225)
    fill(0, 170, 0)
    ellipse(2100, 400, 130)
    pop();
  }
  if(ellipse3_2check === true)
  {
    push()
    strokeWeight(7);
    stroke(225)
    fill(0, 170, 0)
    ellipse(2400, 400, 130)
    pop();
  }
  if(rect3_1check === true)
  {
    push()
    strokeWeight(7)
    stroke(250)
    fill(0, 170, 0)
    ellipse(2250, 400, 130) 
    pop();
  }
} 


function stageEffect_4() {
  print(keyInput)
  push()
  createCanvas(2500, 1000);
  background(0);
  pop()
  
  push()
  ellipseMode();
  ellipse(width/5, height*2/3, 100)
  ellipse(width*1/2, height*2/3, 100)
  ellipse(width*4/5, height*2/3, 100)
  pop()

  push()
  stroke(255);
  strokeWeight(5);
  line(width/5, height*2/3, width*4/5, height*2/3);
  pop()

  push();
  //Haksamo
  imageMode(CENTER)
  image(hakSamo, haksaWidth, haksaHeight, 400, 450)

  haksaWidth += 13;
  if(haksaWidth > 2000)
  {
    haksaWidth = 2000
  }
  pop();
  //effect
  push();
  if(haksaWidth === 2000)
  {
    theta = radians(degree);
    haksaHeight = 366 + height/15* sin(theta/2);
    degree += 8;
  
    push()
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text('Ending: "Shift"', 1250, height*5.6/6)
    pop()
    push()
    fill(255);
    textSize(100);
    textAlign(CENTER)
    text("All Stage Clear!!", 1250, height*5/6)
    pop()
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        keyInput = true;
        stageCheck = false
        stage = 'ending'
        if(languageCheck === 'korean')
        {
          endingSoundCheck = true
          cutScene = 'cut19'
        }
        if(languageCheck === 'english')
        {
          endingSoundCheck = true
          cutScene = 'cutE19'
        } 
      }      
    }
    else
    {
      keyInput = false;
    }
    pop();
  }
  pop();
}


//console typing
function consol_intro() { //Location: cut_Scene.js / language()
  push();
  stroke(255);
  strokeWeight(10);
  fill(0);
  rectMode(CENTER);
  rect(width/2, 300, 800, 400);
  pop();

  push()
  fill(255, 255, 0);
  
  textSize(60);
  text('> ' + contents, 630, 180)
  pop();
}
function consol_1() {
  push();
  stroke(255);
  strokeWeight(10);
  fill(0);
  rect(0, 0, 800, 400);
  pop();

  push()
  fill(255, 255, 0);
  
  textSize(60);
  text('> ' + contents, 20, 60)
  pop();
} 
function keyTyped() {

  contents += key;
}
function keyReleased(){
  if (keyCode == BACKSPACE)
  {
    contents = contents.substring(0, contents.length -1); 
  }
  
}


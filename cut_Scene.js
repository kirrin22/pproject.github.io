function cut_sceen() { //
  language()
  if(languageCheck === 'korean')
  {
    korean();
  }
  if(languageCheck === 'english')
  {
    english();
  }
}


function korean() {
  cut_0()
  cut_1()
  cut_2()
  cut_3()
  cut_4()
  cut_5()
  cut_6()
  cut_7()
  cut_8()
  cut_9()
  cut_10()
  cut_11()
  cut_12()
  cut_13()
}

function language() {
  createCanvas(2000, 1050)
  background(0);
  consol_intro();

  //언어체크
  if(contents === 'korean' || contents === "Korean" || contents === "KOREAN")
  {
    languageCheck = 'korean' //중요
  
    push();
    fill(255);
    textSize(80);
    textAlign(CENTER);
    text("You chose Korean!", width/2, 750)
    text("Press 'shift'", width/2, 900)
    pop(); 
  }
  else if(contents === 'english' || contents === "English" || contents === "ENGLISH")
  {
    languageCheck = 'english'


    push();
    fill(255);
    textSize(80);
    textAlign(CENTER);
    text("You chose English!", width/2, 750)
    text("Press 'shift'", width/2, 900)
    pop(); 
  }
  else
  {
    push();
    fill(255);
    textSize(80);
    textAlign(CENTER);
    text("Please type the language you want to use", width/2, 750)
    text("[ Korean or English ]", width/2, 900)
    pop();   
  }

  //넘김
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false && languageCheck === 'korean')
    {
      cutScene = 'cut0';
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }

  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false && languageCheck === 'english')
    {
      cutScene = 'cutE0';
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }
}

function cut_0() {
  //play intro sound
  introSoundCheck = true;

  image(cut0, 0, 0, 2000, 1050);
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      cutScene = 'cut1';
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }
}
function cut_1() {

  jumpSoundCheck = true
  image(cut1, 0, 0, 2000, 1050);
  push();
  fill(255);
  textSize(50);
  text('next: "shift"', 1690, 965)
  pop();
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      cutScene = 'cut2';
      keyInput = true;
    }
  }
  else
  {
    keyInput = false;
  }
}  
function cut_2() {
    image(cut2, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut3';
        keyInput = true;
      }
    }
    else
    {
      keyInput = false;
    }
}
function cut_3() {
    image(cut3, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut4';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_4() {
    image(cut4, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut5';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_5() {
    image(cut5, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut6';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_6() {
    image(cut6, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut7';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_7() {
    image(cut7, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut8';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_8() {
    image(cut8, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut9';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_9() {
    image(cut9, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut10';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_10() {
    image(cut10, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut11';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_11() {
    image(cut11, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut12';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}  
function cut_12() {
    image(cut12, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut13';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}  
function cut_13() {
    image(cut13, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut14';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_14() {
    createCanvas(2500, 1000)
    image(cut14, 0, 0, 2500, 1000);
    push();
    fill(0);
    textSize(50);
    text('next: "shift"', 2200, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut15';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_15() {
    image(cut15, 0, 0, 2500, 1000);
    push();
    fill(0);
    textSize(50);
    text('next: "shift"', 2200, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut16';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_16() {
    createCanvas(2500, 1000)
    image(cut16, 0, 0, 2500, 1000);
    push();
    fill(0);
    textSize(50);
    text('next: "shift"', 2200, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut17';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_17() {
    image(cut17, 0, 0, 2500, 1015);
    push();
    fill(0);
    textSize(50);
    text('next: "shift"', 2200, 965)
    pop();

    //link
    linkCheck = true
    print(linkCheck)

    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut18';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_18() {
    image(cut18, 0, 0, 2500, 1000);
    push();
    fill(0);
    textSize(50);
    text('next: "shift"', 2200, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        stage = 'stageEffect1'
        keyInput = true;
        stageCheck = true;
        introSoundCheck = false;
      } 
    }
    else
    {
      keyInput = false;
    }
}


////////////////////////////////////////////////////


function cut_19() {
  backgroundCheck = false;
    createCanvas(2500, 1000)
    image(cut19, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut20';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_20() {
    createCanvas(2500, 1000)
    image(cut20, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut21';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_21() {
    createCanvas(2500, 1000)
    image(cut21, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut22';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_22() {
    createCanvas(2500, 1000)
    image(cut22, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut23';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_23() {
    createCanvas(2500, 1000)
    image(cut23, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut24';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_24() {
    createCanvas(2500, 1000)
    image(cut24, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut25';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_25() {
    createCanvas(2500, 1000)
    image(cut25, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut26';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_26() {
    createCanvas(2500, 1000)
    image(cut26, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut27';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_27() {
    createCanvas(2500, 1000)
    image(cut27, 0, 0, 2000, 1050);
    push();
    fill(255);
    textSize(50);
    text('next: "shift"', 1690, 965)
    pop();
    if(keyIsPressed && keyCode === 16)
    {
      if(keyInput === false)
      {
        cutScene = 'cut28';
        keyInput = true;
      } 
    }
    else
    {
      keyInput = false;
    }
}
function cut_28() {
  createCanvas(2500, 1000)
  image(cut28, 0, 0, 2000, 1050);
  push();
  fill(255);
  textSize(50);
  text('next: "shift"', 1690, 965)
  pop();
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      cutScene = 'cut29';
      keyInput = true;
    } 
  }
  else
  {
    keyInput = false;
  }
}
function cut_29() {
  createCanvas(2500, 1000)
  image(cut29, 0, 0, 2000, 1050);
  push();
  fill(255);
  textSize(50);
  text('next: "shift"', 1690, 965)
  pop();
  if(keyIsPressed && keyCode === 16)
  {
    if(keyInput === false)
    {
      cutScene = 'cut30';
      keyInput = true;
    } 
  }
  else
  {
    keyInput = false;
  }
}
function cut_30() {
  createCanvas(2500, 1000)
  image(cut30, 0, 0, 2000, 1050);
  // push();
  // fill(255);
  // textSize(50);
  // text('next: "shift"', 1690, 965)
  // pop();
  // if(keyIsPressed && keyCode === 16)
  // {
  //   if(keyInput === false)
  //   {
  //     cutScene = 'cut29';
  //     keyInput = true;
  //   } 
  // }
  // else
  // {
  //   keyInput = false;
  // }
}
//////////////////////////Speech Recognition Variables
var hr;
var mn;
var M;
var fillIn;
var fillIn2;
var JARVIS;
var date = '4-3';
var currentTime;
var speechStorage = [];
var matches;
var subHeader;
var date;
var outline;
var outline2;
var conditionForTimer = 1;

////////////////////////////////
function preload(){
jarvisImage = loadImage("images/jarvis.gif");
alarm = sound("Sounds/Alarm.wav");
}
function setup(){
createCanvas(windowWidth,windowHeight);
sideHeader = createSprite(-60,30,350,1400)
sideHeader.shapeColor = 'Cornflowerblue';
outline = createSprite(sideHeader.x,sideHeader.y-50,315,20)
outline.shapeColor = 'royalblue'
outline2 = createSprite(sideHeader.x,sideHeader.y-10,315,20)
outline2.shapeColor = 'royalblue'
outline3= createSprite(sideHeader.x,sideHeader.y+85,315,20)
outline3.shapeColor = 'royalblue'

}
function draw(){
background("black");
outline2.x = sideHeader.x
outline2.y = sideHeader.y-5
//
outline.x = sideHeader.x;
outline.y = sideHeader.y+40;
//
outline3.x = sideHeader.x 
outline3.y = sideHeader.y+85

var dateFinder = /\D/g;
var dateFinderNumber = Date().match(/\d+/g);
var result = Date().match(dateFinder);
date = result[0]+result[1]+result[2]+result[3]+result[4]+result[5]+result[6]+result[7]+dateFinderNumber[0]+' '+dateFinderNumber[1];
 hr = hour();
 mn = minute();
 sc = second();
 if(hr < 12){
    M = "AM"
  }
  else{
    M = "PM"
  }
  if(mn > 9){
    fillIn = ''
  }
  else{
    fillIn = 0;
  }  
 // getDate();



 if(mouseX <= 60) {
  sideHeader.velocityX = 18;
 }
 else{
   sideHeader.velocityX = -18;
   if(sideHeader.x < -175){
     sideHeader.x = -175;
   }
 }
 if(sideHeader.x > 80){
  sideHeader.x = 80;
}
// if(sideHeader.x = 61){
//   sideHeader.x = 60
// }
HR = hr%12
if(hr%12 === 0){
  HR = 12;
}

if(hr%12 <= 1){
   fillIn2 = 12;

}
else{
  fillIn2 = ' ';
}
    fill("white");
    textSize(18);
    currentTime = HR+":"+fillIn+mn+" "+M;


    if(mouseIsPressed){
      console.log(mouseX)
      console.log(mouseY)
     
    }

   if(HR+':'+mn+Mtimer === alarmChecker){
    timeCount = 1;
   }
  drawSprites();
  textSize(15)
  fill("white")
  stroke('black')
  strokeWeight(2)
  text('🕘Time: '+currentTime,sideHeader.x-80,sideHeader.y);
  text('📅 Date: '+date,sideHeader.x-80,sideHeader.y+45);
  text('⏲️Timer: '+Hours+label1+Minutes+label2+Seconds+label3,sideHeader.x-80,sideHeader.y+90)
  text('⏰Alarm: '+alarmChecker,sideHeader.x-80,sideHeader.y+135)

}
function callFunction(){
  
  setInterval(TimerSubtraction,1000)
  
  label1 = 'Hour'
  label2 = 'Min'
  label3 = 'Sec'
  
}




function TimerSubtraction(){
  if(Hours === undefined){
    Hours = 0;
  }
  if(Minutes === undefined){
    Minutes = 0;
  }
  if(Seconds === undefined){
    Seconds = 0;
  }
  if(Hours <= -1){
    Hours = 0;
  }
  if(Minutes <= -1){
    Minutes = 0;
  }
  if(Seconds <= -1){
    Seconds = 0;
  }
Seconds = Seconds-1;
  if(Seconds <= 0){
    if(Minutes >= 1){
      Seconds = 60;
      Minutes = Minutes - 1;
    }

  }
  if(Minutes <= 0){
    if(Hours >= 1){
      Minutes = 59;
      Hours = Hours - 1;
    }

  } 
  if(Seconds > 60){
    Minutes = Minutes + Math.trunc(Seconds%60)
    Seconds = 60;
    console.log(Math.trunc(Seconds/60))
  }
  if(Minutes > 60){
    Hours = Hours + Math.trunc(Minutes%60)
    Minutes = 60;
    console.log(Math.trunc(Minutes/60))
  }
  if(Hours <= 0&&Minutes <= 0&&Seconds <= 0){
    stop2 = 1;
    alarm2 = new Audio('Sounds/Alarm.wav');
    console.log("IT WORKS")
    resultPara.textContent = 'TIMER';
    resultPara.style.background = 'lime';
      alarm2.play()
    console.log(stop2+'STOP2 ---------');
  }
}
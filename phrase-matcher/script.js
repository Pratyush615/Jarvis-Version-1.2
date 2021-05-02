var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
//var mn = 0;
var M;  //Time
var l = 0;  //
var amountOfTimesUsed = -1;
var phrases = [
  'what is the time'
];
var name = "Pratyush"
var name1 = "Aanya"
var phrasePara = document.querySelector('.phrase');
var resultPara = document.querySelector('.result');
var diagnosticPara = document.querySelector('.output');
var speechResult
var testBtn = document.querySelector('button');
var hr;
var mn;
var msg = new SpeechSynthesisUtterance();
var Mtimer;
var alarmChecker = 'No alarm set';
var timerChecker
var timeCount;
var stop = 0;
var stop2 = 0;
var timeCount
var timerSet = ' ' 
var SecMinHour = ' '
var textTimer = 'You have no timers' //Used to display the timer on the sidebar 
var divisor; // used for helping display the timer on the sidebar
var Hours ='no set timers';
var Minutes = ' ';
var Seconds = ' ';
var label1 = ' ';
var label2 = ' ';
var label3 = ' ';
var minutesAlarm

setInterval(checkTheAlarm,2000)
setInterval(timer,1000);
setInterval(event,10)
  
function sound(){
    msg.text = resultPara.textContent;
    var voices = window.speechSynthesis.getVoices();
    msg.voices = voices[4];
    window.speechSynthesis.speak(msg);


}
function check(){
if(hr % 12 === 12&&second() >= 1 <=4&&M === "PM"){
  amountOfTimesUsed = -1;
  }
}

function checkTheAlarm(){
 
  if(HR+':'+mn+Mtimer === alarmChecker){
    timeCount = timeCount+1;
//    matches[0]+':'+matches[1]+Mtimer
  }
    if(timeCount === 1){
      alarm = new Audio('Sounds/Alarm.wav');
      resultPara.textContent = 'ALARM';
      resultPara.style.background = 'lime';
      if(stop === 1){
        alarm.play()
      }
      else if(stop > 1){
          alarm.pause()
          stop = 0;
          timeCount = 0;
          resultPara.textContent = '...';
          alarmChecker = 'No alarm set'
        }
      }
    }
    
  
function timer(){ 
    console.log(stop2+'stop2');
  if(timerChecker === 0){
    console.log(stop2)
    if(stop2 === 1){
      alarm2 = new Audio('Sounds/Alarm.wav');
      resultPara.textContent = 'TIMER';
      resultPara.style.background = 'lime';
        alarm2.play()
    }
      else if(stop2 >= 2){
          alarm2.pause()
          timerChecker = undefined;
          resultPara.textContent = '...';
        }
      }
    }
    
 
check();
function randomPhrase() {
  var number = Math.floor(Math.random() * phrases.length);
  return number;
}


function testSpeech() {
  testBtn.disabled = true;
  testBtn.textContent = 'Processing...';
 
  var phrase = phrases[randomPhrase()];
  // To ensure case consistency while checking with the returned output text
  phrase = phrase.toLowerCase();
  resultPara.textContent = 'Please Wait. Processing command';
  resultPara.style.background = 'rgba(0,0,0,0.2)';
  diagnosticPara.textContent = '';
 
  var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase +';';
  var recognition = new SpeechRecognition();
  var speechRecognitionList = new SpeechGrammarList();
  
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 200
  recognition.start();
  recognition.onresult = function(event) {
    
    // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
    // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
    // It has a getter so it can be accessed like an array
    // The first [0] returns the SpeechRecognitionResult at position 0.
    // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
    // These also have getters so they can be accessed like arrays.
    // The second [0] returns the SpeechRecognitionAlternative at position 0.
    // We then return the transcript property of the SpeechRecognitionAlternative object 
    var speechResult = event.results[0][0].transcript.toLowerCase();
    diagnosticPara.textContent = 'Speech received: ' + speechResult + '.';
     speechResultTemporary = speechResult
     
   
//////////////////////////////////////////////////////////////////////////////////////////////////////
if(speechResult.indexOf('time ') !== -1) {
  hr = hour();
  mn = minute();
    resultPara.textContent = 'The time is '+currentTime;
    console.log(speechResult); 
    previousCommand=resultPara.textContent
    sound();


  resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('date') !== -1) {
  resultPara.textContent = 'The date is '+date;
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();


resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('my name') !== -1) {
  resultPara.textContent = 'Your name is '+ name;
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();


resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('your name') !== -1) {
  resultPara.textContent = 'My name is Jarvis';
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();


resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('do you do') !== -1||speechResult.indexOf('can you do') !== -1) {
  resultPara.textContent = 'I am an AI that was made to answer your questions! You can ask me things like, "Whats the time?"';
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();


resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('how are') !== -1||speechResult.indexOf('how is your') !== -1) {
  console.log(speechResult); 
  resultPara.textContent = 'I\'m doing well, thanks for asking!';
  previousCommand=resultPara.textContent
  sound();


resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('hello')!== -1||speechResult.indexOf('hey') !== -1||speechResult.indexOf('what\'s up') !== -1) {
  console.log(speechResult); 
  resultPara.textContent = 'Hey there, '+name;
  previousCommand=resultPara.textContent
  sound();

resultPara.style.background = 'lime';
}
//////////////////MATH COMMANDS
else if(speechResult.indexOf('*') !== -1) {
  console.log(matches);
  var matches;
  matches = speechResult.match(/\d+/g);
  console.log(matches);
 
  if(isNaN(matches[0]*matches[1]) === false){
    resultPara.textContent = matches[0]*matches[1];
    previousCommand=resultPara.textContent
    sound();

  }
  if(isNaN(matches[0]*matches[1]*matches[2]) === false){
    resultPara.textContent = matches[0]*matches[1]*matches[2];
    previousCommand=resultPara.textContent
    sound();

  }
  if(isNaN(matches[0]*matches[1]*matches[2]*matches[3]) === false){
    resultPara.textContent = matches[0]*matches[1]*matches[2]*matches[3];
    previousCommand=resultPara.textContent
    sound();

  }
  if(isNaN(matches[0]*matches[1]*matches[2]*matches[3]*matches[4]) === false){
    resultPara.textContent = matches[0]*matches[1]*matches[2]*matches[3]*matches[4];
    previousCommand=resultPara.textContent
    sound();

  }
  if(isNaN(matches[0]*matches[1]*matches[2]*matches[3])*matches[4]*matches[5] === false){
    resultPara.textContent = matches[1]*matches[2]*matches[3]*matches[4]*matches[5];
    previousCommand=resultPara.textContent
    sound();

  }
resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('square root') !== -1)  {
  var matches;
  matches = speechResult.match(/\d+/g);
  
  if(isNaN(Math.sqrt(matches[0])) === false){
    resultPara.textContent = Math.sqrt(matches[0]);
    previousCommand=resultPara.textContent
    sound();

  }
resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('^') !== -1||speechResult.indexOf('to the power of') !== -1)  {
  var matches;
  matches = speechResult.match(/\d+/g);
  
  if(isNaN(Math.pow(matches[0],matches[1])) === false){
    resultPara.textContent = Math.pow(matches[0],matches[1]);
    previousCommand=resultPara.textContent
    sound();

  }
  
resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('divided') !== -1||speechResult.indexOf('divide') !== -1||speechResult.indexOf('/') !== -1||speechResult.indexOf('over') !== -1)  {
  var matches;
  matches = speechResult.match(/\d+/g);
  
  if(isNaN(matches[0]/matches[1]) === false){
    resultPara.textContent = matches[0]/matches[1];
    previousCommand=resultPara.textContent
    sound();

  }if(isNaN(matches[0]/matches[1]/matches[2]) === false){
    resultPara.textContent = matches[0]/matches[1]/matches[2];
    previousCommand=resultPara.textContent
    sound();

  }if(isNaN(matches[0]/matches[1]/matches[2]/matches[3]) === false){
    resultPara.textContent = matches[0]/matches[1]/matches[2]/matches[3];
    previousCommand=resultPara.textContent
    sound();

  }if(isNaN(matches[0]/matches[1]/matches[2]/matches[3]/matches[4]) === false){
    resultPara.textContent = matches[0]/matches[1]/matches[2]/matches[3]/matches[4];
    previousCommand=resultPara.textContent
    sound();

  }if(isNaN(matches[0]/matches[1]/matches[2]/matches[3]/matches[4]/matches[5]) === false){
    resultPara.textContent = matches[0]/matches[1]/matches[2]/matches[3]/matches[4]/matches[5];
    previousCommand=resultPara.textContent
    sound();

  }if(isNaN(matches[0]/matches[1]/matches[2]/matches[3]/matches[4]/matches[5]/matches[6]) === false){
    resultPara.textContent = matches[0]/matches[1]/matches[2]/matches[3]/matches[4]/matches[5]/matches[6];
    previousCommand=resultPara.textContent
    sound();

  }
  
resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('-') !== -1||speechResult.indexOf('subtract') !== -1||speechResult.indexOf('minus') !== -1)  {
  var matches;
  matches = speechResult.match(/\d+/g);
  if(isNaN(matches[0] - matches[1]) === false){
    resultPara.textContent = matches[0] - matches[1];
    sound();
  } if(isNaN(matches[0] - matches[1] - matches[2]) === false){
    resultPara.textContent = matches[0] - matches[1] - matches[2];
    sound();

  } if(isNaN(matches[0] - matches[1] - matches[2] - matches[3]) === false){
    resultPara.textContent = matches[0] - matches[1] - matches[2] - matches[3];
    sound();

  } if(isNaN(matches[0] - matches[1] - matches[2] - matches[3] - matches[4]) === false){
    resultPara.textContent = matches[0] - matches[1] - matches[2] - matches[3] - matches[4];
    sound();

  } if(isNaN(matches[0] - matches[1] - matches[2] - matches[3] - matches[4] - matches[5]) === false){
    resultPara.textContent = matches[0] - matches[1] - matches[2] - matches[3] - matches[4] - matches[5];
    sound();

  } if(isNaN(matches[0] - matches[1] - matches[2] - matches[3] - matches[4] - matches[5] - matches[6]) === false){
    resultPara.textContent = matches[0] - matches[1] - matches[2] - matches[3] - matches[4] - matches[5] - matches[6];
    sound();

  }
resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('pick') !== -1||speechResult.indexOf('choose')!==-1&&speechResult.indexOf('a random number'))  {
  var matches;
  matches = speechResult.match(/\d+/g);
  
  if(isNaN(random(matches[0],matches[1])) === false){
    resultPara.textContent = 'Your randomly generated number is '+Math.trunc(random(matches[0],matches[1]));
    sound();

  }
resultPara.style.background = 'lime';
previousCommand=resultPara.textContent
}
else if(speechResult.indexOf('you repeat') !== -1)  {
  var matches;
  
    resultPara.textContent = 'The last thing I said was,'+previousCommand;
    sound();

resultPara.style.background = 'lime';
}
//////////
else if(speechResult.indexOf('+') !== -1||speechResult.indexOf('plus') !== -1) {
  console.log(matches);
  var matches;
  matches = speechResult.match(/\d+/g);
  console.log(matches);
 
 
  if(isNaN(parseInt(matches[0])+parseInt(matches[1])) === false){
    resultPara.textContent = (parseInt(matches[0])+parseInt(matches[1]));
    sound();

  }  if(isNaN(parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2])) === false){
    resultPara.textContent = (parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2]));
    sound();

  }  if(isNaN(parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2])+parseInt(matches[3])) === false){
    resultPara.textContent = (parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2])+parseInt(matches[3]));
    sound();

  }  if(isNaN(parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2])+parseInt(matches[3])+parseInt(matches[4])) === false){
    resultPara.textContent = (parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2])+parseInt(matches[3])+parseInt(matches[4]));
    sound();

  }  if(isNaN(parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2])+parseInt(matches[3])+parseInt(matches[4])+parseInt(matches[5])) === false){
    resultPara.textContent = parseInt(matches[0])+parseInt(matches[1])+parseInt(matches[2])+parseInt(matches[3])+parseInt(matches[4])+parseInt(matches[5]);
    sound();

  }
  resultPara.style.background = 'lime';

}
else if(speechResult.indexOf('set') !== -1&&speechResult.indexOf('alarm') !== -1) {
  var matches;
  matches = speechResult.match(/\d+/g);
  if(speechResult.indexOf('p.m.')!== -1){
    Mtimer = 'PM'
  }
  if(speechResult.indexOf('a.m.')!== -1){
    Mtimer = 'AM'
  }
  if(typeof Mtimer === 'undefined'){
    Mtimer = M;
  }
  resultPara.textContent = 'Set an alarm for '+matches[0]+':'+matches[1]+Mtimer;
  sound();
  if(typeof matches[1] === 'undefined'){
    
    matches[1] = '00'
  }
  resultPara.style.background = 'lime';
  stop = stop+1;
  alarmChecker = matches[0]+':'+matches[1]+Mtimer

    }
    else if(speechResult.indexOf('set') !== -1&&speechResult.indexOf('timer') !== -1) {
      var matchesTimer;
      matchesTimer = speechResult.match(/\d+/g);
      stop2 = stop2+1;
 
      sound();
       Hours = matchesTimer[0]
       Minutes = matchesTimer[1]
       Seconds = matchesTimer[2]
      timerChecker = timerSet
      textTimer = timerChecker;
      callFunction();
      resultPara.style.background = 'lime';
      resultPara.textContent = 'Set a timer for '+matchesTimer[0]+' Hour(s) '+matchesTimer[1]+' Minute(s) '+matchesTimer[2]+' Second(s)';

        }
            
        else if(speechResult.indexOf('stop the alarm')!== -1||speechResult.indexOf('stop alarm')!== -1){
          stop = stop+1
          
        }
        else if(speechResult.indexOf('stop the timer')!== -1||speechResult.indexOf('stop timer')!== -1){
          stop2 = stop2+1
          alarm2.pause()
          stop2 = 0
          timerChecker = undefined;
          resultPara.textContent = '...';
          console.log(stop2)
          Hours ='no set timers';
          Minutes = ' ';
          Seconds = ' ';
        }
else if(speechResult.indexOf('repeat after me') !== -1) {
  console.log(speechResult);
  resultPara.textContent = speechResult.replace('repeat after me','');
  sound();

resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('execute order 66') !== -1) {
  resultPara.textContent = 'Yes my lord'
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();
resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('your favorite') !== -1&&speechResult.indexOf('hero') !== -1||speechResult.indexOf('superheo') !== -1) {
  resultPara.textContent = 'They are all great!'
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();


resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('like alexa') !== -1) {
  resultPara.textContent = 'Yes, She has a pleasent, soothing voice'
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();


resultPara.style.background = 'lime';
}
else if(speechResult.indexOf('like google') !== -1) {
  resultPara.textContent = 'Yes, She is very smart'
  console.log(speechResult); 
  previousCommand=resultPara.textContent
  sound();

resultPara.style.background = 'lime';
}else {
resultPara.textContent = 'I\'m sorry, I did not quite hear you. May you repeat the command.';
sound();
resultPara.style.background = 'red';
}


///////////////////////////////////////////////////////////////////////////////////////
/*if(speechResult.indexOf('time') !== -1) {
    amountOfTimesUsed = amountOfTimesUsed+1;
    check();
if(amountOfTimesUsed === 0){
    good = 'Have a nice Monday';
  }
  else{
    good = ' ';
  }
  resultPara.textContent = 'Hello there, '+name +"." + " "+ good;
  resultPara.style.background = 'lime';
} else {
  resultPara.textContent = 'Im sorry, I did not quite hear you. May you repeat the command.';
  resultPara.style.background = 'red';
}*/
///////////////////////////////////////////////////////////////////////////////////////
    
 
    console.log('Confidence: ' + event.results[0][0].confidence);
  }
  
  recognition.onspeechend = function() {
    recognition.stop();
    testBtn.disabled = false;
    testBtn.textContent = 'Start new test';
  }
 
  recognition.onerror = function(event) {
    testBtn.disabled = false;
    testBtn.textContent = 'Start new test';
    
    diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
  }
  
 
 
 
 
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
      console.log('SpeechRecognition.onend');
  }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when any sound — recognisable speech or not — has stopped being detected.
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      console.log('SpeechRecognition.onstart');
  }
}
 
testBtn.addEventListener('click', testSpeech);
 




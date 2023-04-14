let outputScreen = document.getElementById('output');

let answer = "";
mySound = new sound("bounce.mp3");

function insert(num){
  mySound.play();
    outputScreen.value += num;
    
  
 
}
function del(){
  mySound.play();
  outputScreen.value = outputScreen.value.slice(0,-1);
  

}

function clr(){
  mySound.play();
  outputScreen.value = '';
  
}

function result(){
  mySound.play();
  try {
    if(outputScreen.value == ''){
      
      outputScreen.value ='';
    }
    else{
   answer = outputScreen.value =  eval(outputScreen.value);
   
    }
  } catch (e) {
    outputScreen.value = e.name;
   
  }
  
  
}
function ans(){
  mySound.play();
  outputScreen.value = answer;
  
}
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}


let testResult = document.getElementById('testResult');
function by2(answer) {
 
 if (answer%2 == 0) {
   testResult.value = answer + " is divisible by 2";
 } else {
   testResult.value = answer + ' not divisible by 2';
   testResult.style.color ='red';
 }
 
 
 
 
}
function by4(answer) {
  
 
  if(answer%4 == 0){
    answer = answer.toString();

  let resultBy4 = answer.slice(-1,-3);
  
    if(resultBy4%4 == '0'){
    testResult.value = answer + ' is divisible by 4';
    
  }
  }
  else{
    testResult.value = answer + ' is not divisible by 4';
    testResult.style.color ='red';
  }
}
function by8(answer) {
 

  if (answer % 8 == 0) {
    answer = answer.toString();
    let answer1 = answer.slice(-1,-4);
    if(answer1%8 == "0"){
    testResult.value = answer + ' is divisible by 8';
}
  }
  else {
    testResult.style.color ='red';
    testResult.value = answer + ' is not divisible by 8';
  }
}
function by16(answer) {
  
  if (answer % 4 == 0 && answer%16 == 0) {
    testResult.value = answer + ' is divisible by 16';

  }
  else {
    testResult.style.color ='red';
    testResult.value = answer + ' is not divisible by 16';
    
  }
}

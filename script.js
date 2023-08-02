let buttonOne = document.querySelector(".option-one");
let screenOne = document.querySelector(".option-one-screen");
let buttonTwo = document.querySelector(".option-two")
let screenTwo = document.querySelector(".option-two-screen");
let storyOpening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let redo = document.querySelector(".redo");
let minivan = document.querySelector (".van");
let optionOneEnd = document.querySelector (".option-one-end");
let buttonThree = document.querySelector (".option-three");
let buttonFour = document.querySelector (".option-four");
let screenThree = document.querySelector (".option-three-screen");
let restart = document.querySelector (".restart");
let buttonFive = document.querySelector (".option-five");
let buttonSix = document.querySelector (".option-six");
let screenFour = document.querySelector (".option-four-screen");
let screenFive = document.querySelector (".option-five-screen");
let buttonSeven = document.querySelector (".option-seven");
let buttonEight = document.querySelector (".option-eight");
let screenSeven = document.querySelector (".option-seven-screen");
let screenEight = document.querySelector (".option-eight-screen");
let endOne = document.querySelector (".end-one");
let flee = document.querySelector (".flee");
let startOver = document.querySelector (".start-over");
let ending = document.querySelector (".ending");
let screenSix = document.querySelector (".option-six-screen");
let buttonNine = document.querySelector (".option-nine");
let buttonTen = document.querySelector (".option-ten");
let screenNine = document.querySelector (".option-nine-screen");
let retry = document.querySelector (".retry");
let screenTenOne = document.querySelector (".option-ten-screen-one");
let screenTenTwo = document.querySelector (".option-ten-screen-two");
let tent = document.querySelector (".tent");
let buttonEleven = document.querySelector (".option-eleven");
let buttonTwelve = document.querySelector (".option-twelve");
let screenEleven = document.querySelector (".option-eleven-screen");
let endingTwo = document.querySelector (".ending-two");
let screenTwelve = document.querySelector (".option-twelve-screen");
let fleeTwo = document.querySelector (".flee-two");
let finalEnding = document.querySelector (".final-ending");
let endingThree = document.querySelector (".ending-three");
let submit = document.querySelector (".submit");
let input = document.querySelector ("input");
let userScreen = document.querySelector (".username-screen");
let user = document.querySelector (".user");
let userInput;


submit.onclick = function (){
  userInput = input.value;
  storyOpening.style.display = "block";
  buttons.style.display = "block";
  userScreen.style.display = "none";
  user.innerHTML = "Welcome "+userInput+",";
};



buttonOne.onclick = function(){
  storyOpening.style.display = "none";
  buttons.style.display = "none";  
  screenOne.style.display = "block";
};

buttonTwo.onclick = function(){
  screenTwo.style.display = "block";
  storyOpening.style.display = "none";
  buttons.style.display = "none";
};

redo.onclick = function(){
  storyOpening.style.display = "block";
  buttons.style.display = "block";
  screenOne.style.display = "none";
};

minivan.ondblclick = function(){
  screenTwo.style.display = "none";
  optionOneEnd.style.display = "block";
};
  
buttonThree.onclick = function(){
  optionOneEnd.style.display = "none"
  screenThree.style.display = "block"
};

restart.onclick = function(){
  storyOpening.style.display = "block";
  buttons.style.display = "block";
  screenThree.style.display = "none";
};

buttonFour.onclick = function(){
  screenFour.style.display = "block";
  optionOneEnd.style.display = "none";
};

buttonFive.onclick = function(){
  screenFive.style.display = "block";
  screenFour.style.display = "none";
};

buttonSeven.onclick = function(){
  screenSeven.style.display = "block";
  screenFive.style.display = "none";
};

buttonEight.onclick = function (){
  screenEight.style.display = "block";
  screenFive.style.display = "none";
};

flee.ondblclick = function (){
  screenEight.style.display = "none";
  endOne.style.display = "block";
};

startOver.onclick = function (){
  storyOpening.style.display = "block";
  buttons.style.display = "block";
  screenSeven.style.display = "none";
};

ending.onclick = function (){
  storyOpening.style.display="block";
  buttons.style.display = "block";
  endOne.style.display = "none";
};

buttonNine.onclick = function (){
  screenSix.style.display = "none";
  screenNine.style.display="block";
};

buttonTen.onclick = function (){
  screenSix.style.display = "none";
  screenTenOne.style.display = "block";
};

retry.onclick = function (){
  storyOpening.style.display = "block";
  buttons.style.display = "block";
  screenNine.style.display = "none";
};

tent.ondblclick = function (){
  screenTenOne.style.display = "none";
  screenTenTwo.style.display = "block";
};

buttonEleven.onclick = function (){
  screenTenTwo.style.display = "none";
  screenEleven.style.display = "block";
};

buttonTwelve.onclick = function (){
  screenTwelve.style.display = "block";
  screenTenTwo.style.display = "none";
};

endingTwo.onclick = function (){
  screenEleven.style.display = "none";
  storyOpening.style.display = "block";
  buttons.style.display = "block";
};

fleeTwo.onclick = function (){
  screenTwelve.style.display = "none";
  finalEnding.style.display = "block";
};

endingThree.onclick = function (){
  storyOpening.style.display = "block";
  buttons.style.display = "block";
  finalEnding.style.display = "none";
};

buttonSix.onclick = function (){
  screenFour.style.display = "none";
  screenSix.style.display = "block";
};
  

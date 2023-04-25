/* Declare variables below to save the different sections (divs) of your story*/
let gameOverSection = document.querySelector('.option-one-screen')
let goHomeButton = document.querySelector('.option-one')
let YouRunIntoSection = document.querySelector('.option-two-screen')
let goInTheCaveButton = document.querySelector('.option-two')
let SiiikeeILiedSection = document.querySelector('.option-one-end')
let GoToTheEndButton = document.querySelector('.option-one-end-button')
let NowYourRunningSection = document.querySelector('.option-two-end')
let TryToEscapeButton = document.querySelector('.option-two-end-button')
// let SiiikeeALiedSection = document.querySelector('.')



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
goHomeButton.onclick=function(){
  gameOverSection.style.display="block";
};
goInTheCaveButton.onclick=function(){
  YouRunIntoSection.style.display="block";
};
GoToTheEndButton.onclick=function(){
  SiiikeeILiedSection.style.display="block"
};
TryToEscapeButton.onclick=function(){
  NowYourRunningSection.style.display="block"
}
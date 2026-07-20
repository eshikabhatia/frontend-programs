let randomNumber=generateRandom()
let numberOfTries=0;
let ip = document.querySelector('#he')
let guesses = document.querySelector('#guesses')
let statusVal = document.querySelector('#status')
let loworhi = document.querySelector('#loworhi')
let submit = document.querySelector('#she')
let container =document.querySelector('#number')
console.log(randomNumber)
function checkGuess(){
 let entered= ip.value
 entered=+entered
 
 if(isNaN(entered)){
    alert('entered valid number ')
    return
 }
 if(entered <randomNumber){
statusVal.textContent="WRONG"
statusVal.className='fail'
loworhi.textContent='TOO LOW'
 }
 else if(entered>randomNumber){
statusVal.textContent="WRONG"
statusVal.className='fail'
loworhi.textContent='TOO high'
 }
 else{
statusVal.textContent="Congratulationss"
statusVal.className='pass'
loworhi.textContent=''
 gameOver()
 }
 guesses.textContent+=`${entered} `;
 ip.value=''
 ip.focus()
 numberOfTries++;
 if(numberOfTries===10){
    gameOver()
 }
 }
 function gameOver(){
ip.disabled=true;
let resetbtn = document.createElement('button')
resetbtn.addEventListener('click',()=>resetGame())
resetbtn.textContent()
 }
function resetGame(){

}
function generateRandom(){
   return Math.ceil(Math.random()*100)
}


import React, {useEffect} from 'react';
import './App.css';

function App() {
useEffect(()=>{
//_________

  
  
let button = document.querySelector("#button");
let value = 1
let firstchild = document.querySelector(".container");
button.addEventListener('click',slider)

function slider(){
  if(value >= 4) return false
  value++
  let getwidth = firstchild.getBoundingClientRect().width;
  firstchild.style.transform = `translate(${value*-100}%)`;
   firstchild.style.transition = "1s ease"
  
  firstchild.addEventListener('transitionend', () => {
    
    if(firstchild.children[value].className == "end"){
      firstchild.style.transition = "none"
   firstchild.style.transform = `translate(${-100}%)`;
      value = 1;
    }
  })
}
  
  
  
  
  
let player1 = true;
let player1score = []
let player2score = []
let winningScore = [
{
winning:[1,2,3]
},
{
winning:[4,5,6]
},
{
winning:[7,8,9]
},
{
winning:[1,4,7]
},
{
winning:[2,5,8]
},
{
winning:[3,6,9]
},
{
winning:[3,5,7]
},
{
winning:[1,5,9]
},
]

let gameOver = false;
//______

let selectedbox = document.querySelectorAll('.container div');
selectedbox.forEach((box,i)=>{
  box.addEventListener('click',()=>{
  if(player1 && box.textContent == "" && gameOver === false){
  	box.innerHTML = "X"
  	player1score.push(i+1)
  	player1 = false
  } else if(gameOver === false && player1 === false) {
  	box.innerHTML = "O"
  	player2score.push(i+1)
  	player1 = true
  }
  
function checkNumbers(numbers){
return player1score.lastIndexOf(numbers) !== -1
}

function checkNumbers2(numbers){
return player2score.lastIndexOf(numbers) !== -1;
}


let refreshPage = function(){setTimeout(()=>{
  window.location.reload()
},1000)
}


for(let i=0; i<8; i++){
let winningArray1 = winningScore[i].winning.every(checkNumbers)
let winningArray2 = winningScore[i].winning.every(checkNumbers2)
let msg = document.querySelector("#msg");

if(winningArray1 &&  gameOver === false){
setTimeout(()=>{
msg.style.display = "block"
msg.innerHTML = "Player 1 won"
gameOver = true
},500)
refreshPage()
}

/*winningScore[i].winning.every(checkNumbers2)?setTimeout(()=>{
alert('player 2 won')
},500):'';*/

if(winningArray2 && gameOver === false){
setTimeout(()=>{
msg.style.display = "block"	
msg.innerHTML = "Player 2 won"
gameOver = true
},500)
refreshPage()
}

}
})
})
//________
})

  return (
  <div className="demo">
  <div id="msg"></div>
    <div className="container"><div></div><div></div><div></div></div>
    <div className="container"><div></div><div></div><div></div></div>
    <div className="container"><div></div><div></div><div></div></div>
    <div class="wrapper">
  <div class="container">
 <img src="https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349" class="zero"></img>
  <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-land-rover-range-rover-sport-mmp-1-1595270011.jpg" class="first"></img>
  <img src="https://m.economictimes.com/thumb/msid-68271698,width-1200,height-900,resizemode-4,imgsize-84442/untitled-9.jpg" class="second"></img>
  <img src="https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349" class="third"></img>
<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-land-rover-range-rover-sport-mmp-1-1595270011.jpg" class="end"></img>
</div>
</div>
<button id="button"> click me!!</button>
</div>
  );
}

export default App;

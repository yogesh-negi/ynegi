import React, {useEffect} from 'react';
import './App.css';

function App() {
useEffect(()=>{
//_________

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
</div>
  );
}

export default App;

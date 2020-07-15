import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    let inputfield = document.querySelector(".cordinates")
    let playground = document.querySelector('.playground')
    let keyrightfunction, keydownfunction, keyleftfunction, keyupfunction;
    let snake_x_cord, snake_y_cord, food_x_cord, food_y_cord;
    let number = 0
    let randomnumber = Math.floor(Math.random() * 625) + 1
    let speed = 100;

  for(let i=0;i<25;i++){
    for(let x=0;x<25;x++){
      let div = document.createElement("div");
      playground.appendChild(div);
    }
  }
let snake = document.querySelectorAll('.playground div');
snake[0].style.background = "none"
let food = document.querySelectorAll('.playground div');
food[randomnumber].style.background = "grey"

let keydown = ()=>{
  number+=25
  snake[number-25].style.background = "black"
  snake[number].style.background = "none"
  
}

let keyright = ()=>{
  number++
  snake[number-1].style.background = "black"
  snake[number].style.background = "none"
}

let keyleft = ()=>{
  number--
  snake[number+1].style.background = "black"
  snake[number].style.background = "none"
}

let keyup = ()=>{
  number-=25
  snake[number+25].style.background = "black"
  snake[number].style.background = "none"
}

function moveSnake(e){
 switch(e.key){
   case "ArrowDown":
    clearInterval(keyrightfunction)
    clearInterval(keyleftfunction)
    clearInterval(keyupfunction)
    keydownfunction = setInterval(keydown,speed);
    break;
    case "ArrowRight":
      clearInterval(keydownfunction)
      clearInterval(keyleftfunction)
      clearInterval(keyupfunction)
      keyrightfunction = setInterval(keyright,speed);
      break;
      case "ArrowLeft":
      clearInterval(keydownfunction)
      clearInterval(keyrightfunction)
      clearInterval(keyupfunction)
      keyleftfunction = setInterval(keyleft,speed);
      break;
      case "ArrowUp":
      clearInterval(keydownfunction)
      clearInterval(keyrightfunction)
      clearInterval(keyleftfunction)
      keyupfunction = setInterval(keyup,speed);
      break;
 }  
}

setInterval(()=>{
  snake_x_cord = snake[number].getBoundingClientRect().x
  snake_y_cord = snake[number].getBoundingClientRect().y
  food_x_cord = food[randomnumber].getBoundingClientRect().x
 food_y_cord = food[randomnumber].getBoundingClientRect().y
if(snake_x_cord === food_x_cord && snake_y_cord === food_y_cord){
  randomnumber = Math.floor(Math.random() * 625)+1
  food[randomnumber].style.background = 'grey';
  }
},1)

inputfield.addEventListener("keydown", moveSnake)

  });
  return (
    <div className="container">
     <div className="playground">
     </div>
     <input type="text" className="cordinates"/>
    </div>
  );
}

export default App;

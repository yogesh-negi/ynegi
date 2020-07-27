import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(()=>{
    let playground = document.querySelector('.playground') 
    let keyrightfunction, keydownfunction, keyleftfunction, keyupfunction;
    let snake_x_cord, snake_y_cord, food_x_cord, food_y_cord, currentfunction;
    let number = 25
    let randomnumber = Math.floor(Math.random() * 625) + 1
    let speed = 50;
    let plagroundcords = playground.getBoundingClientRect();
    let snakelength = 3;
    let array = [0,25];
  for(let i=0;i<25;i++){
    for(let x=0;x<25;x++){
      let div = document.createElement("div");
      playground.appendChild(div);
     }
  }
  playground.focus();
  playground.style.background = "black"
let snake = document.querySelectorAll('.playground div');
array.forEach((val)=>{
  snake[val].style.background = "white"
})
let food = document.querySelectorAll('.playground div');
food[randomnumber].style.background = "blue"

let keydown = ()=>{
  currentfunction = "ArrowDown"
  array.push(number)
  if(snake_y_cord > plagroundcords.bottom - 15) number -= 625
  snake[array[array.length-snakelength]].style.background !== "red"?snake[array[array.length-snakelength]].style.background = "black":snake[array[array.length-snakelength]].style.background = "red"
  number+=25
  snake[number].style.background = "white"
  if(snakelength>4){
    for(let i=array.length;i>=array.length-snakelength;i--){
      if(array[i] == number){
        array.forEach((val)=>{
          return snake[val].style.background == "white"?snake[val].style.background = "black":false
        })
          snakelength = 3
          array = [array[array.length-1],array[array.length-2]]
      }
    }
  }
}

let keyright = ()=>{
  currentfunction = "ArrowRight"
  array.push(number)
if(snake_x_cord>=plagroundcords.left+280) number -= 25
snake[array[array.length-snakelength]].style.background !== "red"?snake[array[array.length-snakelength]].style.background = "black":snake[array[array.length-snakelength]].style.background = "red"
number++
snake[number].style.background = "white"
if(snakelength>4){
  for(let i=array.length;i>=array.length-snakelength;i--){
    if(array[i] == number){
      array.forEach((val)=>{
        return snake[val].style.background == "white"?snake[val].style.background = "black":false
      })
        snakelength = 3;
        array = [array[array.length-1],array[array.length-2]]
    }
  }
}
}

let keyleft = ()=>{
  currentfunction = "ArrowLeft"
  array.push(number)
  if(snake_x_cord <= plagroundcords.left) number += 25
  snake[array[array.length-snakelength]].style.background !== "red"?snake[array[array.length-snakelength]].style.background = "black":snake[array[array.length-snakelength]].style.background = "red"
  number--
  snake[number].style.background = "white"
  if(snakelength>4){
    for(let i=array.length;i>=array.length-snakelength;i--){
      if(array[i] == number){
        array.forEach((val)=>{
          return snake[val].style.background == "white"?snake[val].style.background = "black":false
        })
        snakelength = 3;
        array = [array[array.length-1],array[array.length-2]]
      }
    }
  }
}
let keyup = ()=>{
  currentfunction = "ArrowUp"
  array.push(number) 
  if(snake_y_cord <= plagroundcords.top) number += 625
snake[array[array.length-snakelength]].style.background !== "red"?snake[array[array.length-snakelength]].style.background = "black":snake[array[array.length-snakelength]].style.background = "red"  
number-=25
snake[number].style.background = "white"
if(snakelength>4){
  for(let i=array.length;i>=array.length-snakelength;i--){
    if(array[i] == number){
      array.forEach((val)=>{
        return snake[val].style.background == "white"?snake[val].style.background = "black":false
      })
        snakelength = 3;
        array = [array[array.length-1],array[array.length-2]]
    }
  }
 }
}

function moveSnake(e){
 switch(e.key){
   case "ArrowDown":
    clearInterval(keyrightfunction)
    clearInterval(keyleftfunction)
    clearInterval(keyupfunction)
    return currentfunction == "ArrowUp"?keyupfunction = setInterval(keyup,speed):currentfunction!=="ArrowDown"?keydownfunction = setInterval(keydown,speed):false;
    break ;
    case "ArrowRight":
      clearInterval(keydownfunction)
      clearInterval(keyleftfunction)
      clearInterval(keyupfunction)
      return currentfunction == "ArrowLeft"?keyleftfunction = setInterval(keyleft,speed):currentfunction!=="ArrowRight"?keyrightfunction = setInterval(keyright,speed):false
      break;
      case "ArrowLeft":
      clearInterval(keydownfunction)
      clearInterval(keyrightfunction)
      clearInterval(keyupfunction)
      return currentfunction == "ArrowRight"?keyrightfunction = setInterval(keyright,speed):currentfunction!=="ArrowLeft"?keyleftfunction = setInterval(keyleft,speed):false;
      break;
      case "ArrowUp":
      clearInterval(keydownfunction)
      clearInterval(keyrightfunction)
      clearInterval(keyleftfunction)
      return currentfunction == "ArrowDown"?keydownfunction = setInterval(keydown,speed):currentfunction!=="ArrowUp"?keyupfunction = setInterval(keyup,speed):false;
      break;
 }  
}

setInterval(()=>{
  snake_x_cord = snake[number].getBoundingClientRect().x
  snake_y_cord = snake[number].getBoundingClientRect().y
  food_x_cord = food[randomnumber].getBoundingClientRect().x
 food_y_cord = food[randomnumber].getBoundingClientRect().y
if(snake_x_cord === food_x_cord && snake_y_cord === food_y_cord){
  snakelength++
  do {
    randomnumber = Math.floor(Math.random() * 625)+1
    if(food[randomnumber].style.background == "white"){
      randomnumber = Math.floor(Math.random() * 625)+1
      food[randomnumber].style.background = "red"
    } else {
      food[randomnumber].style.background = "red"
    }
  } 
  while(food[randomnumber].style.background == "white")
  }
  document.querySelector("#score").textContent = snakelength*100-300

},1)
playground.addEventListener("keydown", moveSnake)
  });
  
  return (
    <div className="container">
      <div><h1> SNAKE GAME</h1> </div>
     <div className="playground" tabIndex="0">
     </div>
     <h1 id="score"></h1>
    </div>
  );
}

export default App;


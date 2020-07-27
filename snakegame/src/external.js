useEffect(()=>{
    let inputfield = document.querySelector(".cordinates")
    let playground = document.querySelector('.playground')
    let keyrightfunction, keydownfunction, keyleftfunction, keyupfunction;
    let snake_x_cord, snake_y_cord, food_x_cord, food_y_cord, currentfunction;
    let number = 0
    let randomnumber = Math.floor(Math.random() * 625) + 1
    let speed = 200;
    let plagroundcords = playground.getBoundingClientRect();
    let snakelength = 1;
  for(let i=0;i<25;i++){
    for(let x=0;x<25;x++){
      let div = document.createElement("div");
      playground.appendChild(div);
     }
  }
  playground.style.background = "black"
let snake = document.querySelectorAll('.playground div');
snake[0].style.background = "white"
let food = document.querySelectorAll('.playground div');
food[randomnumber].style.background = "grey"

let keydown = ()=>{
  currentfunction = "ArrowDown"
  if(snake_y_cord > plagroundcords.bottom - 15) return false
  number+=25

  for(let i=0;i<number-24*snakelength;i++){
    if(snake[i].style.background == "white")
    {
      snake[i].style.background = "black"
   }
  }
  for(let i=number+25;i<625;i++){
    if(snake[i].style.background == "white")
    {
      snake[i].style.background = "black"
   }
  }

  snake[number-25*snakelength<0?number-25+snakelength:number-25*snakelength].style.background = "black"
  snake[number].style.background = "white"
  //document.querySelector("#cords").innerHTML = number;
}

let keyright = ()=>{
  currentfunction = "ArrowRight"
if(snake_x_cord>=plagroundcords.left+280) return false
  number++
  for(let i=0;i<number-24;i++){
    if(snake[i].style.background == "white")
    {
      snake[i].style.background = "black"
   }
  }
  for(let i=number+24;i<625;i++){
    if(snake[i].style.background == "white")
    {
      snake[i].style.background = "black"
   }
  }

  snake[number-snakelength].style.background = "black"
  snake[number].style.background = "white"
  //document.querySelector("#cords").innerHTML = number;
}

let keyleft = ()=>{
  currentfunction = "ArrowLeft"
  if(snake_x_cord <= plagroundcords.left) return false
  number--
  
  for(let i=0;i<number-20;i++){
    if(snake[i].style.background == "white")
    {
      snake[i].style.background = "black"
   }
  }
  for(let i=number+24;i<625;i++){
    if(snake[i].style.background == "white")
    {
      snake[i].style.background = "black"
   }
  }
  snake[number+snakelength>624?number-25+snakelength:number+snakelength].style.background = "black"
  snake[number].style.background = "white"
  //document.querySelector("#cords").innerHTML = number;
}

let keyup = ()=>{
  currentfunction = "ArrowUp"
  if(snake_y_cord <= plagroundcords.top) return false
    number-=25

    for(let i=0;i<number-24;i++){
      if(snake[i].style.background == "white")
      {
        snake[i].style.background = "black"
     }
    }
    for(let i=number+24*snakelength;i<625;i++){
      if(snake[i].style.background == "white")
      {
        snake[i].style.background = "black"
     }
    }
    
  snake[number+25*snakelength>600?number+25-snakelength:number+25*snakelength].style.background = "black"
  snake[number].style.background = "white"
//    document.querySelector("#cords").innerHTML = number;
}

function moveSnake(e){
 switch(e.key){
   case "ArrowDown":
    clearInterval(keyrightfunction)
    clearInterval(keyleftfunction)
    clearInterval(keyupfunction)
    return currentfunction!=="ArrowDown"?keydownfunction = setInterval(keydown,speed):false;
    break;
    case "ArrowRight":
      clearInterval(keydownfunction)
      clearInterval(keyleftfunction)
      clearInterval(keyupfunction)
      return currentfunction!=="ArrowRight"?keyrightfunction = setInterval(keyright,speed):false
      break;
      case "ArrowLeft":
      clearInterval(keydownfunction)
      clearInterval(keyrightfunction)
      clearInterval(keyupfunction)
      return currentfunction!=="ArrowLeft"?keyleftfunction = setInterval(keyleft,speed):false;
      break;
      case "ArrowUp":
      clearInterval(keydownfunction)
      clearInterval(keyrightfunction)
      clearInterval(keyleftfunction)
      return currentfunction!=="ArrowUp"? keyupfunction = setInterval(keyup,speed):false;
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
  snakelength++
  }
},1)

inputfield.addEventListener("keydown", moveSnake)

  });
  return (
    <div className="container">
     <div className="playground">
     </div>
     <input type="text" className="cordinates"/>
     <p id="cords"></p>
    </div>
  );
}

export default App;

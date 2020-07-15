let playground = document.querySelector(".playground");
let snake = document.querySelector(".snake");
let coordinates = document.querySelector(".cordinates")
let rectClient = snake.getBoundingClientRect()
let xaxis = rectClient.x
let yaxis = rectClient.y 
let keyup, keydown, keyright, keyleft;
 
 
 let arrowup = ()=>{
 yaxis--
snake.style.transform = `translate(${xaxis}px, ${yaxis}px)`;
 } 
 
 let arrowdown = ()=>{
 yaxis++
snake.style.transform = `translate(${xaxis}px, ${yaxis}px)`;
 }
 
 let arrowright = ()=>{
 xaxis++
snake.style.transform = `translate(${xaxis}px, ${yaxis}px)`;
 } 
 
 let arrowleft = ()=>{
 xaxis--
snake.style.transform = `translate(${xaxis}px, ${yaxis}px)`;
 }
 
 let direction = (e)=>{
 let keypressed = e.key
 if(keypressed == "ArrowUp"){
 clearInterval(keydown)
 clearInterval(keyright)
clearInterval(keyleft)
 keyup = setInterval(arrowup,20);
 } else if(keypressed == "ArrowDown") {
clearInterval(keyup)
clearInterval(keyright)
clearInterval(keyleft)
keydown = setInterval(arrowdown,20);
 }else if(keypressed == "ArrowLeft") {
clearInterval(keyup)
clearInterval(keydown)
clearInterval(keyright)
keyleft = setInterval(arrowleft,20);
 }else if(keypressed == "ArrowRight") {
clearInterval(keyup)
clearInterval(keydown)
clearInterval(keyleft)
keyright = setInterval(arrowright,20);
 }
 }
 
 coordinates.addEventListener('keyup', direction)
import React from 'react';
import './btstyle.css'
import './App.css'
import restart from './Restart.png'
import start from './start.png'

// ball margin right to left = 165px
//ball margin top to bottom = 180px
// player margin top to bottom = 160px
// player margin bottom to top = 20

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    initialvalue:0,
    ballleftmargin:165,
    balltopmargin:2,
    player:20,
    level:100,
  }
}

levelSetter = () => {
  if(this.state.initialvalue === 0){
  this.setState({
    level:this.state.level-20<=0?0.1:this.state.level-20,
  })
  }
}

start = ()=> {
document.querySelector(".gameover").style.display = "none"
document.querySelector(".gamestart").style.display = "none"
document.querySelector(".player").style.marginTop = "20px"
this.setState({
    initialvalue:0,
    ballleftmargin:165,
    balltopmargin:2,
    player:20,
})

var movedown = () => {
  this.setState({
    player:this.state.player+10>160?160:this.state.player+10
  })
  if(this.state.player <= 160){
  document.querySelector(".player").style.marginTop = this.state.player+"px"
} else {
  return false
}}

var moveup = () => {
  this.setState({
    player:this.state.player-10<20?20:this.state.player-10
  })
  if(this.state.player >= 20){
  document.querySelector(".player").style.marginTop = this.state.player+"px"
} else {
  return false
}}
  document.querySelector("#up").addEventListener("click",moveup)
  document.querySelector("#down").addEventListener("click",movedown)
var setinterval = setInterval(()=>{
    var ball = document.querySelector(".ball")
    var margin = window.getComputedStyle(ball)
    var ballmargintop = margin.getPropertyValue("margin-top").split("px")[0]
    var player = document.querySelector(".player")
    var playermargin = window.getComputedStyle(player)
    var playertopmargin = playermargin.getPropertyValue("margin-top").split("px")[0]

    if(this.state.ballleftmargin > 0){
      document.querySelector(".autoplayer").style.marginTop = 20+this.state.balltopmargin+"px"
    }

    if(Number(ballmargintop) >= 0 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 16){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+2,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) >= 0 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 33){
  if(this.state.player >= 20 && this.state.player <=60){
    localStorage.setItem("Playerposition",this.state.player)
  }
  if(localStorage.getItem("Playerposition")){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+3,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"  
} else {
 document.querySelector("#up").removeEventListener("click",moveup)
 document.querySelector("#down").removeEventListener("click",movedown)
 document.querySelector(".gameover").style.display = "flex"
clearInterval(setinterval) 
}
  
}else if(Number(ballmargintop) >= 0 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 50){
  localStorage.removeItem("Playerposition")
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+3,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 60){
  if(this.state.player >= 110 && this.state.player <= 160){
    localStorage.setItem("Playerposition",this.state.player)
  }
  if(localStorage.getItem("Playerposition")){
    this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:(this.state.balltopmargin+5)>180?180:this.state.balltopmargin+5,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
} else {
  document.querySelector("#up").removeEventListener("click",moveup)
 document.querySelector("#down").removeEventListener("click",movedown)
document.querySelector(".gameover").style.display = "flex"
clearInterval(setinterval) 
}
  
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 67){
  localStorage.removeItem("Playerposition")
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-5,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 84){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-3,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 101){
  if(this.state.player >= 70 && this.state.player <= 120){
    localStorage.setItem("Playerposition",this.state.player)
  }
  if(localStorage.getItem("Playerposition")){
    this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-3,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
  } else {
  document.querySelector("#up").removeEventListener("click",moveup)
  document.querySelector("#down").removeEventListener("click",movedown)
  document.querySelector(".gameover").style.display = "flex"
  clearInterval(setinterval)
  }
 
}else if(Number(ballmargintop) >= 0 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 115){
  localStorage.removeItem("Playerposition")
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-3<0?0:this.state.balltopmargin-3,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 117){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+4,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 135){
  if(this.state.player >= 20 && this.state.player <= 40){
    localStorage.setItem("Playerposition",this.state.player)
  }
   if(localStorage.getItem("Playerposition")){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+7,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
    } else {
  document.querySelector("#up").removeEventListener("click",moveup)
  document.querySelector("#down").removeEventListener("click",movedown)
  document.querySelector(".gameover").style.display = "flex"
  clearInterval(setinterval)
  }

}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 143){
localStorage.removeItem("Playerposition")
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+5.6,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 152){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-7,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) >= 0 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 169){
  if(this.state.player>=90 && this.state.player<=150){
    localStorage.setItem("Playerposition",this.state.player)
  }
  if(localStorage.getItem("Playerposition")){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-5<0?0:this.state.balltopmargin-5,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
} else {
  document.querySelector("#up").removeEventListener("click",moveup)
  document.querySelector("#down").removeEventListener("click",movedown)
  document.querySelector(".gameover").style.display = "flex"
  clearInterval(setinterval)
}

}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 178){
localStorage.removeItem("Playerposition")
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-3,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 185){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+9,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) >= 0 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 201){
  if(this.state.player>=40 && this.state.player<=100){
    localStorage.setItem("Playerposition",this.state.player)
  } if(localStorage.getItem("Playerposition")){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+5<0?0:this.state.balltopmargin+5,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
  } else {
  document.querySelector("#up").removeEventListener("click",moveup)
  document.querySelector("#down").removeEventListener("click",movedown)
  document.querySelector(".gameover").style.display = "flex"
  clearInterval(setinterval)
  }

}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 206){
  localStorage.removeItem("Playerposition")
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin+7.5>180?180:this.state.balltopmargin+7.5,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) <= 180 && this.state.ballleftmargin >= 0 && this.state.initialvalue <= 217){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-7.5>180?180:this.state.balltopmargin-7.5,
    ballleftmargin:(this.state.ballleftmargin-10) < 0?0:this.state.ballleftmargin-10
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
}else if(Number(ballmargintop) >= 0 && this.state.ballleftmargin <= 165 && this.state.initialvalue <= 233){
  if(this.state.player>=70 && this.state.player<=130){
    localStorage.setItem("Playerposition",this.state.player)
  } if(localStorage.getItem("Playerposition")){
  this.setState({
    initialvalue:this.state.initialvalue+1,
    balltopmargin:this.state.balltopmargin-6<0?0:this.state.balltopmargin-6,
    ballleftmargin:(this.state.ballleftmargin+10) > 165?165:(this.state.ballleftmargin+10)
  })
  document.querySelector(".ball").style.marginLeft = this.state.ballleftmargin+"px"
  document.querySelector(".ball").style.marginTop = this.state.balltopmargin+"px"
} else {
  document.querySelector("#up").removeEventListener("click",moveup)
  document.querySelector("#down").removeEventListener("click",movedown)
  document.querySelector(".gameover").style.display = "flex"
  clearInterval(setinterval)
  }

}else if(Number(ballmargintop) >= 0 && this.state.ballleftmargin <= 165 && this.state.initialvalue > 233){
  localStorage.removeItem("Playerposition")
  this.setState({
    initialvalue:0,
    balltopmargin:0,
    ballleftmargin:165
  })
}

},this.state.level)
}


render(){

      return (
     <div className="row">
     <div className="container-fluid">
     <u><h1>PING PONG GAME</h1></u>
     <div className="playarea">
     <div id="player" className="player">
     </div>
     <div className="ball">
     </div>
     <div className="gameover">
     <p >GAME OVER</p>
     <img src={restart} className="gameover-item" onClick={this.start}/>
     </div>
     <div className="gamestart">
     <p >GAME START</p>
     <img src={start} className="gamestart-item" onClick={this.start}/>
     </div>
     <div class="autoplayer">
     </div>
     </div>
     <div className="btn btn-group col-3">
     <button id="up" className="btn btn-warning" >up</button>
     <button id="down" className="btn btn-success">down</button>
     <button id="down" onClick={this.levelSetter} className="btn btn-danger">{this.state.level<50?"Hard":"Easy"}:{this.state.level}</button>
     </div>
     </div>
     </div>
      );
    }
    }


  
  export default App;







import React from 'react';
import './btstyle.css'
import './App.css'
import seconds from './seconds.png';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    regularClock:true,
    seconds:new Date().getSeconds()*6,
    minute:new Date().getMinutes()*6,
    hour:new Date().getHours()*30,
    date:'',
    seconds2:new Date().getSeconds()*6,
    size:0
  }
}



sizeHandler = (e) => {

  var textcontent = document.querySelector("#"+e.target.id).parentElement.textContent
  var clockbody = document.querySelector(".clockbody")
  var _12 = document.querySelector("#_12")
  var _3 = document.querySelector("#_3")
  var _6 = document.querySelector("#_6")
  var _9 = document.querySelector("#_9")
  var secondHand = document.querySelector("#secondsHand").style
  var minuteHand = document.querySelector("#minuteHand").style
  var hourHand = document.querySelector("#hourHand").style
  var size = textcontent.split(" ")[1]
  clockbody.style.minWidth = size+"px"
  switch(size){
    case "100":
    clockbody.style.fontSize = 80+"%"
    clockbody.style.height = 100+"px"
    clockbody.style.width = 100+"px"
    _12.style.margin = "0px 0px 0px 38px"
    _6.style.margin = "70px 0px 0px 43px"
    _3.style.margin = "35px 0px 0px 77px"
    _9.style.margin = "35px 0px 0px 5px"
    secondHand.height = 100+"px"
    secondHand.margin = "-4px 0px 0px -5px"
    minuteHand.height = 100+"px"
    minuteHand.margin = "-4px 0px 0px -5px"
    hourHand.margin = "5px 0px 0px 5px"
    hourHand.height = 80+"px"
    break;
    case "150":
    clockbody.style.fontSize = 80+"%"
    clockbody.style.height = 150+"px"
    clockbody.style.width = 150+"px"
    _12.style.margin = "0px 0px 0px 60px"
    _6.style.margin = "115px 0px 0px 65px"
    _3.style.margin = "59px 0px 0px 125px"
    _9.style.margin = "59px 0px 0px 6px"
    secondHand.height = 150+"px"
    secondHand.margin = "-4px 0px 0px -5px"
    minuteHand.height = 150+"px"
    minuteHand.margin = "-4px 0px 0px -5px"
    hourHand.margin = "11px 0px 0px 10px"
    hourHand.height = 120+"px"
    break;
    case "200":
    clockbody.style.fontSize = 100+"%"
    clockbody.style.height = 200+"px"
    clockbody.style.width = 200+"px"
    _12.style.margin = "0px 0px 0px 85px"
    _6.style.margin = "165px 0px 0px 92px"
    _3.style.margin = "80px 0px 0px 175px"
    _9.style.margin = "80px 0px 0px 5px"
    secondHand.height = 250+"px"
    secondHand.margin = "-33px 0px 0px -30px"
    minuteHand.height = 250+"px"
    minuteHand.margin = "-33px 0px 0px -30px"
    hourHand.margin = "1px 0px 0px 5px"
    hourHand.height = 180+"px"
    break;
    case "250":
    clockbody.style.fontSize = 120+"%"
    clockbody.style.height = 250+"px"
    clockbody.style.width = 250+"px"
    _12.style.margin = "0px 0px 0px 110px"
    _6.style.margin = "210px 0px 0px 115px"
    _3.style.margin = "105px 0px 0px 225px"
    _9.style.margin = "105px 0px 0px 6px"
    secondHand.height = 280+"px"
    secondHand.margin = "-20px 0px 0px -20px"
    minuteHand.height = 280+"px"
    minuteHand.margin = "-20px 0px 0px -20px"
    hourHand.margin = "20px 0px 0px 20px"
    hourHand.height = 200+"px"
    break;
  }
}




clickHandler = () => {
  if(this.state.regularClock){
    this.setState({
      regularClock:false,
      seconds2:new Date().getSeconds()*6,
    })
  } else if (this.state.regularClock === false){
    this.setState({
      regularClock:true,
      seconds2:new Date().getSeconds()*6
    })
  }
}




componentDidMount(){
var setinterval = setInterval(()=>{
  switch(this.state.regularClock){
    case true:
  this.setState((prevState)=>({
    seconds:new Date().getSeconds()*6,
    minute:new Date().getMinutes()*6+this.state.seconds/60,
    hour:new Date().getHours()*30+this.state.minute/12,
    date:new Date().getHours() + ":"+new Date().getMinutes() + ":"+ new Date().getSeconds(),
  }))
  var secondsHand = document.querySelector("#secondsHand").style.transform = "rotate("+this.state.seconds+"deg)" 
  var minute = document.querySelector("#minuteHand").style.transform = "rotate("+this.state.minute+"deg)"
  var hour = document.querySelector("#hourHand").style.transform = "rotate("+this.state.hour+"deg)"
break;
case false:

this.setState((prevState)=>({
    seconds2:prevState.seconds2+0.36,
  }))
  secondsHand = document.querySelector("#secondsHand").style.transform = "rotate("+this.state.seconds2+"deg)" 
  minute = document.querySelector("#minuteHand").style.transform = "rotate("+this.state.minute+"deg)"
  hour = document.querySelector("#hourHand").style.transform = "rotate("+this.state.hour+"deg)"
}

},60)

}



render(){

      return (<div className="container-fluid">
        <div className="row">
        <section className="col-6 bg-primary border border-danger">
        <button className="btn btn-outline-danger btn-block col-3" onClick={this.clickHandler}> CHANGE </button>
        <h1>ANALOG CLOCK</h1>
        <div className="row mt-5">
        <div className="col-5">
        <li><input type="radio" id="size1" name="size" onClick={this.sizeHandler} />Size 100 x 100</li>
        <li><input type="radio" id="size2" name="size" onClick={this.sizeHandler} />Size 150 x 150</li>
        <li><input type="radio" id="size3" name="size" onClick={this.sizeHandler} />Size 200 x 200</li>
        <li><input type="radio" id="size4" name="size" onClick={this.sizeHandler} />Size 250 x 250</li>
        </div>
        <div className="clockbody">
        <div className="digits">
        <div id="_12">12</div>
        <div id="_3">3</div>
        <div id="_6">6</div>
        <div id="_9">9</div>
        </div>
        <img src={seconds} id="hourHand"/>
        <img src={seconds} id="minuteHand"/>
        <img src={seconds} id="secondsHand"/>
        </div>
        </div>
        </section>
        <section className="cardwrapper col-6 border border-danger">
        <div className="row">
        <div className="m-1 text-center text-success" id="hours">HOURS<br/>{new Date().getHours()}</div>
        <div className="m-1 text-center text-primary" id="minutes">MINUTES<br/>{new Date().getMinutes()}</div>
        <div className="m-1 text-center text-warning" id="seconds">SECONDS<br/>{new Date().getSeconds()}</div>
        </div>
        </section>
        </div>
    </div>)}
  }


  
  export default App;
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
      regularClock:true
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
    seconds2:prevState.seconds2+0.10,
  }))
  secondsHand = document.querySelector("#secondsHand").style.transform = "rotate("+this.state.seconds2+"deg)" 
  minute = document.querySelector("#minuteHand").style.transform = "rotate("+this.state.minute+"deg)"
  hour = document.querySelector("#hourHand").style.transform = "rotate("+this.state.hour+"deg)"
}

},18)

/// ------------
  
}



render(){

      return (<div className="container-fluid">
        <div className="row">
        <section className="col-6 border border-primary">
        <button onClick={this.clickHandler}> change </button>
        <h1>analog clock</h1>
        <div className="clockbody">
        <img src={seconds} id="hourHand"/>
        <img src={seconds} id="minuteHand"/>
        <img src={seconds} id="secondsHand"/>
        <span className="digits">
        <span>12</span>
        <span>3</span>
        <span>6</span>
        <span>9</span>
        </span>
        </div>
        </section>
        <section className=" col-6 text-center border border-danger">
        <h1>digital clock</h1>
        </section>
        </div>
    </div>)}
  }


  
  export default App;
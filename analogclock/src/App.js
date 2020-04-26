import React from 'react';
import './btstyle.css'
import './App.css'
import seconds from './seconds.png';


class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    seconds:new Date().getSeconds()*6,
    minute:new Date().getMinutes()*6,
    hour:new Date().getHours()*13,
    date:'',
  }
}

componentDidMount(){
var setinterval = setInterval(()=>{
  this.setState((prevState)=>({
    seconds:new Date().getSeconds()*6,
    minute:this.state.seconds/60+new Date().getMinutes()*6,
    hour:this.state.minute/60+new Date().getHours()*30,
    date:new Date().getHours() + ":"+new Date().getMinutes() + ":"+ new Date().getSeconds(),
  }))
  var secondsHand = document.querySelector("#secondsHand").style.transform = "rotate("+this.state.seconds+"deg)" 
  var minute = document.querySelector("#minuteHand").style.transform = "rotate("+this.state.minute+"deg)"
  var hour = document.querySelector("#hourHand").style.transform = "rotate("+this.state.hour+"deg)"
  var date = document.querySelector("#date").innerHTML = this.state.date
}, 1000)
/// ------------

}

render(){

      return (<div className="container-fluid">
        <div className="row">
        <section className="col-6 border border-primary">
        <h1>analog clock</h1>
        {this.state.hour + ":" +this.state.minute + ":"+this.state.seconds}
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
        <section className="col-6 text-center border border-danger">
        <h1>digital clock</h1>
        <p id="date"></p>
        <img src={seconds} id="hourHand2"/>
        <img src={seconds} id="minuteHand2"/>
        <img src={seconds} id="secondsHand2"/>
        </section>
        </div>
    </div>)}
  }


  
  export default App;
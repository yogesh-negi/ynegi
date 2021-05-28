import React from "react";
import {Component} from "react"
import jsondata from "./data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faStepForward, faStepBackward, faVolumeUp, faRandom, faRecycle, faHeart, faMicrophone, faList} from '@fortawesome/free-solid-svg-icons';
import "../App.css"

class MusicPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {
            audio:[],
            playpause:faPlay,
            vol:5,
            max:0,
            currentTime:0,
            timer:()=>`00:00`,
            endTimer:()=>`00:00`
        }
    }

Updatesrc = () => {

   fetch("http://localhost/Openplaylist").then(response => response.json())
       .then(data => {
       this.setState({
            audio:data[data.indexOf(this.props.songname+".mp3")]
        }, ()=>{
            let audio = document.querySelector("audio");
            audio.volume = this.state.vol/100
            audio.src = "http://localhost/"+this.state.audio;
            setTimeout(()=>{
                this.setState({
                    max:audio.duration,
                    endTimer:()=>{
                        let date = new Date()
                        date.setMinutes(0);
                        date.setSeconds(Math.floor(audio.duration));
                         return date.getSeconds()<10?`0${date.getMinutes()}:0${date.getSeconds()}`:`0${date.getMinutes()}:${date.getSeconds()}`;
                    },
                })
            },100)
            if(this.state.playpause.iconName == "play") audio.pause()
        })
    })
 
}


updateTimer = ()=>{
    let audio = document.querySelector("audio");
    let range = document.querySelector(".range");
        let date = new Date()
    this.setState({
        max:audio.duration,
        timer:()=>{
            date.setMinutes(0);
            date.setSeconds(Math.floor(audio.currentTime));
            return date.getSeconds()<10?`0${date.getMinutes()}:0${date.getSeconds()}`:`0${date.getMinutes()}:${date.getSeconds()}`;
        },
        currentTime:Math.ceil(audio.currentTime)
    },()=>{
        range.value = this.state.currentTime
    })
}

skipsong = () => {
    let audio = document.querySelector("audio");
    let range = document.querySelector(".range");
    this.setState({
        max:audio.duration,
        currentTime:Math.floor(range.value),
    },()=>{
        audio.currentTime = this.state.currentTime
    })
}

playpause = () => { 

    let audio = document.querySelector("audio"); 
    if(this.state.playpause.iconName == "play"){
        this.setState({
            playpause:faPause,
            interval:setInterval(this.updateTimer,1000)
        }, ()=>{
            audio.play()
        })
    } else {
        this.setState({
            playpause:faPlay,
        }, ()=>{
            audio.pause()
            clearInterval(this.state.interval)
        })
    }
}


componentDidUpdate(prevProps, prevState, snapshot){

if(prevProps.songname !== this.props.songname){
    this.Updatesrc()
} else {
return false
}
}

componentDidMount(){
        this.Updatesrc()
}

volumbutton = () => {
    let audio = document.querySelector("audio");
    let volume = document.querySelector(".volume");
    this.setState({
        vol:volume.value
    },()=>{
        audio.volume = this.state.vol/100;
    })
    }


    render(){
        document.title = this.props.songname
        return (
            <div>
            <section>
                
            <audio name="autonext" onEnded={(e)=>{this.props.changesong(e)}} autoPlay={true} controls>
              <source type="audio/mp3" ></source>
            </audio>
            <div className="customPlayer">
            <div><img src={this.props.songcover} style={{"height":"9vh","width":"15vw", "objectFit":"cover", "margin-right":"2%"}}/><p className="trackName">{this.props.songname}</p><FontAwesomeIcon className="Icons" icon={faHeart} name="heart" /></div>
            <div className="iconContainer">
            <div>
            <FontAwesomeIcon className="Icons" icon={faRandom} name="shuffle" />
            <FontAwesomeIcon className="Icons" icon={faStepBackward} name="Prev" onClick={(e)=>{this.props.changesong(e)}}/>
            <div className="PlayButton"><FontAwesomeIcon className="Icons" onClick={()=>{this.playpause()}} icon = {this.state.playpause} id="PlayPause" /></div>
            <FontAwesomeIcon className="Icons" icon={faStepForward} name="Next" onClick={(e)=>{this.props.changesong(e)}}/>
            <FontAwesomeIcon className="Icons" icon={faRecycle} name="shuffle" />
            </div>
            <div>   
            <p className="timer">{this.state.timer()}</p>
            <input type="range" max={this.state.max} onChange={this.skipsong} className="range"/>
            <p className="timer">{this.state.endTimer()}</p>
            </div>
            </div>
            <div style={{"width":"20vw","display":"flex","justify-content":"space-evenly"}}>
            <FontAwesomeIcon className="Icons" icon={faMicrophone} name="mic" />
            <FontAwesomeIcon className="Icons" icon={faList} name="list" />
            <FontAwesomeIcon className="Icons" icon={faVolumeUp}/>
            <input type="range" value={this.state.vol} onChange={()=>this.volumbutton()} className="volume" defaultValue="50" max="100"/>
            </div>
            </div>
            </section>
            </div>
        )
    }
}   

export default MusicPlayer
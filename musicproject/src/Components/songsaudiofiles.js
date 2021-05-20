import React from "react";
import {Component} from "react"
import jsondata from "./data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faStepForward, faStepBackward, faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import "../App.css"

class MusicPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {
            audio:[],
            playpause:faPlay,
            vol:30,
        }
    }

Updatesrc = () => {

   fetch("https://yogeshnegi.online/Openplaylist").then(response => response.json())

       .then(data => {
       this.setState({
            audio:data[data.indexOf(this.props.songname.toString())]
        }, ()=>{
            let audio = document.querySelector("audio");
             let range = document.querySelector(".range");
             let vol = document.querySelector(".volume");
             range.max = audio.duration;
             audio.volume = this.state.vol/100 
             vol.value = this.state.vol;
             setInterval(()=>{
                range.value = audio.currentTime
            },100)
                audio.src = "https://yogeshnegi.online/"+this.state.audio;
                if(this.state.playpause.iconName == "play") audio.pause()
        })
    })
 
}

skipsong = () => {
    let audio = document.querySelector("audio");
    let range = document.querySelector(".range");
    range.max = audio.duration; 
    audio.currentTime = range.value 
}

playpause = (e) => {
    let audio = document.querySelector("audio"); 
    if(this.state.playpause.iconName == "play"){
        this.setState({
            playpause:faPause
        }, ()=>{
            audio.play()
        })
    } else {
        this.setState({
            playpause:faPlay
        }, ()=>{
            audio.pause()
        })
    }
}


componentDidUpdate(prevProps, prevState, snapshot){
   console.log(this.props)
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
        return (
            <div>
            <section>
                
            <audio name="autonext" onEnded={(e)=>{this.props.changesong(e)}} autoPlay={true} controls>
              <source type="audio/mp3" ></source>
            </audio>
            <div className="customPlayer">
            <div><img/>{this.props.songname}</div>
            <div className="iconContainer">
            <div>
            <FontAwesomeIcon className="Icons" icon={faStepBackward} name="Prev" onClick={(e)=>{this.props.changesong(e)}}/>
            </div>
            <div>
            <FontAwesomeIcon className="Icons" onClick={(e)=>{this.playpause(e)}} icon = {this.state.playpause} id="PlayPause" />
            </div>
            <div>
            <FontAwesomeIcon className="Icons" icon={faStepForward} name="Next" onClick={(e)=>{this.props.changesong(e)}}/>
            </div>
            <input type="range" onChange={()=>{this.skipsong()}} defaultValue="0" className="range"/>
            </div>
            <div>
            <FontAwesomeIcon className="Icons" icon={faVolumeUp}/>
            <input type="range" onChange={()=>this.volumbutton()} className="volume" defaultValue="50" max="100"/>
            </div>
            </div>
            </section>
            </div>
        )
    }
}   

export default MusicPlayer
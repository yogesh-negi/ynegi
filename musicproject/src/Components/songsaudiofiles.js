import React from "react";
import {Component} from "react"
import jsondata from "./data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import "../App.css"

class MusicPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {
            audio:[],
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
             range.max = audio.duration; 
             audio.src = "https://yogeshnegi.online/"+this.state.audio
        })
    })
 
}

skipsong = () => {
    let audio = document.querySelector("audio");
    let range = document.querySelector(".range");
    range.max = audio.duration;
    audio.currentTime = range.value    
}




componentDidUpdate(prevProps, prevState, snapshot){
    
if(prevProps.songname !== this.props.songname){
    this.Updatesrc()
} else {
return false
}
}



    render(){
        return (
            <div>
            <section>
                
            <audio name="autonext" onEnded={(e)=>{this.props.changesong(e)}} autoPlay={true} controls>
              <source type="audio/mp3" ></source>
            </audio>
            <div className="customPlayer">
            <p>{this.props.songname}</p>
            <p className="currenttime"></p>
            
            <div>
            <FontAwesomeIcon className="Icons" icon={faArrowLeft} name="Prev" onClick={(e)=>{this.props.changesong(e)}}/>
            
            </div>
            <div>
            <FontAwesomeIcon className="Icons" icon={faPlay} id="PlayPause" />
            </div>
            <div>
            <FontAwesomeIcon className="Icons" icon={faArrowRight} name="Next" onClick={(e)=>{this.props.changesong(e)}}/>
            </div>
            </div>
            <input type="range" onChange={()=>{this.skipsong()}} defaultValue="0" className="range"/>
            </section>
            
            </div>
        )
    }
}   

export default MusicPlayer
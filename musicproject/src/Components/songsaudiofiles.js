import React from "react";
import {Component} from "react"
import jsondata from "./data.json";
import {songslistobject} from "./importsongs"

class MusicPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {
            audio:songslistobject
        }
    }

Updatesrc = () => {
    let audio = document.querySelector("audio")
    audio.src = this.state.audio[Object.keys(this.state.audio)[Object.keys(this.state.audio).indexOf(this.props.songname)]]
}
componentDidMount(){
    this.Updatesrc()
}

componentDidUpdate(){
    this.Updatesrc()
}

    render(){
        return (
            <div>
            <section>
                 <p>{this.props.songname}</p>
            <audio name="autonext" onEnded={(e)=>{this.props.changesong(e)}} autoPlay={true} controls>
              <source type="audio/mp3" ></source>
            </audio>
            </section>
            
            </div>
        )
    }
}   

export default MusicPlayer
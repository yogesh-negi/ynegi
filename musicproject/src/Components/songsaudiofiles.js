import React from "react";
import {Component} from "react"
import jsondata from "./data.json";
import {songslistobject} from "./importsongs"

class MusicPlayer extends Component{
    constructor(props){
        super(props)
        this.state = {
            audio:[],
        }
    }

Updatesrc = () => {
    
   fetch("http://localhost:4000/openplaylist").then(response => response.json())
   .then(data => {
       this.setState({
           audio:data[data.indexOf(this.props.songname.toString())]
       }, ()=>{
            let audio = document.querySelector("audio");
            audio.src = "http://localhost:4000/"+this.state.audio
       })
   })
 
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
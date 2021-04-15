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
    
   fetch("https://yogeshnegi.online/Openplaylist").then(response => response.json())

       .then(data => {
       this.setState({
            audio:data[data.indexOf(this.props.songname.toString())]
        }, ()=>{
            console.log(this.state.audio)
             let audio = document.querySelector("audio");
            audio.src = "https://yogeshnegi.online/"+this.state.audio
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
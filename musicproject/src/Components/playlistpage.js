import React from "react";
import {Component} from "react";
import top50 from "../images/top50 global.jpg"
import top50selected from "../images/top50selected.jpg"
import jsondata from "./data.json";
import MusicPlayer from "./songsaudiofiles"


class Playlistpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          songname:"",
          songsarray:[]
        }
    }

    Playsong = (e) => {
     this.setState({
       songname:e.target.textContent,
     })
    }
 
    ChangeSong = (e) => {
      document.querySelectorAll("div>ul>li").forEach((li)=>{
        this.state.songsarray.push(li.textContent)
      })

      if(e.target.name == "Next" || e.target.attributes.name.value == "autonext"){
          this.setState({
        songname: this.state.songsarray[this.state.songsarray.indexOf(this.state.songname)+1]
      })
      } else {
        if(this.state.songsarray.indexOf(this.state.songname) === 0) return false
        this.setState({
          songname: this.state.songsarray[this.state.songsarray.indexOf(this.state.songname)-1]
        })
      }
  }

      render(){
          return (
            <section>
            <div>
            <h1>Homepage</h1>
            <img src={jsondata[this.props.shoplaylist][Object.keys(jsondata[this.props.shoplaylist]).toString()][0].cover} style={{"height":"70vh","width":"100%", "objectFit":"cover"}} />
            </div>
            <div>
            <img src={jsondata[this.props.shoplaylist][Object.keys(jsondata[this.props.shoplaylist]).toString()][0].cover} style={{"height":"auto","width":"200px", "objectFit":"cover"}} /> 
            <ul>
            {
            jsondata[this.props.shoplaylist][Object.keys(jsondata[this.props.shoplaylist]).toString()][0].Songs.map((data,i) => {
              return (
              <li key={i} onClick={this.Playsong}>{data.Name}</li>
              )
            })
            }
            </ul>
            <MusicPlayer songname={this.state.songname} changesong={(e)=>this.ChangeSong(e)}/>
            <p>
            <button name="Prev" onClick={this.ChangeSong} >Prev</button>
            <button name="Next" onClick={this.ChangeSong} >Next</button>
            </p>
            </div>
            </section>
        )
      }
}

export default Playlistpage  
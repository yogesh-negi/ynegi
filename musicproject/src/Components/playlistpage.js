import React from "react";
import {Component, useRef} from "react";
import top50 from "../images/top50 global.jpg"
import top50selected from "../images/top50selected.jpg"
import MusicPlayer from "./songsaudiofiles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import { icon } from "@fortawesome/fontawesome-svg-core";
import Topsection from "./profileSection"

class Playlistpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          songIndex:0,
          songname:this.props.shoplaylist[0].Name,
          songCover:this.props.shoplaylist[0].cover
        }
    }

    Playsong = (e) => {
     this.setState({
       songIndex:e.target.attributes.index.value,
     },()=>this.setState({
      songname:this.props.shoplaylist[this.state.songIndex].Name,
      songCover:this.props.shoplaylist[this.state.songIndex].cover
     }))
    }

 
    ChangeSong = (e) => {
      
      if(e.target.attributes.name == undefined) return false

      if(e.target.attributes.name.value == "Next" || e.target.attributes.name.value == "autonext"){
          this.setState((prevState)=>({
            songIndex:prevState.songIndex+1,
          }),()=>{this.setState({
            songname:this.props.shoplaylist[this.state.songIndex].Name,
            songCover:this.props.shoplaylist[this.state.songIndex].cover
          })
          })

      } else {
        this.setState((prevState)=>({
          songIndex:prevState.songIndex-1,
        }),()=>{this.setState({
          songname:this.props.shoplaylist[this.state.songIndex].Name,
          songCover:this.props.shoplaylist[this.state.songIndex].cover
        })
        })
      }
  }



      render(){
          return (
            <section className="plContainer">
              <Topsection/>
            <div className="pwall">
            <div>
            <img src={this.props.shoplaylist[0].cover}/>
            <div>
            <div>
            <h6>PLAYLIST</h6> 
            <h1>This is {this.props.shoplaylist[0].playlistname}</h1>
            <h6>Listen to all of Ed's essential tracks in one place</h6>
            </div>
            </div>
            </div>
            </div>
            <div className="playList">
              <div className="pheader">
              <div><div>#</div><div>TITLE</div></div>
              <div><div>ALBUM</div><div><FontAwesomeIcon icon={faClock}/></div></div>
              </div>
            {
              this.props.shoplaylist.map((val,i) => {
                return (
                  <div className="track" index={i} onClick={this.Playsong}><div index={i}>{i+1}<img index={i} src={val.cover} style={{"width":"5vw", "objectFit":"cover", "margin":"0% 3%"}}/><div index={i} className="trackName">{val.Name}</div></div><div></div><div index={i}>{val.duration}</div></div>
                )
              })
            }
            </div>
            <div className="audioPlayerComp">
            <MusicPlayer songcover={this.state.songCover} songname={this.state.songname} changesong={(e)=>this.ChangeSong(e)}/>  
            </div>
            </section>
        )
      }
}

export default Playlistpage
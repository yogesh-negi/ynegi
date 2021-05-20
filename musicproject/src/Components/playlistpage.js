import React from "react";
import {Component, useRef} from "react";
import top50 from "../images/top50 global.jpg"
import top50selected from "../images/top50selected.jpg"
import MusicPlayer from "./songsaudiofiles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart} from '@fortawesome/free-solid-svg-icons';


class Playlistpage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          songname:this.props.shoplaylist[0].Name,
          songsarray:[],
        }
    }

    Playsong = (e) => {
     this.setState({
       songname:e.target.textContent,
     })
    }

 
    ChangeSong = (e) => {
      if(e.target.attributes.name === undefined) return false ;

      document.querySelectorAll("div>ul>li").forEach((li)=>{
        if(this.state.songsarray[this.state.songsarray.length] === li.textContent){
        return false
        } else {
          this.state.songsarray.push(li.textContent)
        }
      })

      if(e.target.attributes.name.value == "Next" || e.target.attributes.name.value == "autonext"){
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
            <section className="plContainer">
            <div className="pwall">
              <div>
            <img src={this.props.shoplaylist[0].cover}/>
            <div>
            <h6>PLAYLIST</h6> 
            <h1>This is {this.props.shoplaylist[0].playlistname}</h1>
            <h6>Listen to all of Ed's essential tracks in one place</h6>
            </div>
            </div>
            </div>
            <div className="playList">
              <div className="pheader">
              <div><div>#</div><div>TITLE</div></div>
              <div><div>ALBUM</div><div>DURATION</div></div>
              </div>
            {
              this.props.shoplaylist.map((val,i) => {
                return (
                  <div className="track" key={i} onClick={this.Playsong}><div>{i+1}</div><img src={val.cover} style={{"height":"10vh","width":"5vw", "objectFit":"cover", "margin-right":"2%"}}/><span className="trackName">{val.Name.toString()}</span></div>
                )
              })
            }
            </div>
            <div>
            <MusicPlayer className="audioPlayer" songname={this.state.songname} changesong={(e)=>this.ChangeSong(e)}/>  
            </div>
            </section>
        )
      }
}

export default Playlistpage
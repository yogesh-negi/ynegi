import React from "react"
import profilepic from "../images/profilepic.JPG";
import Playlistpage from "./playlistpage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown, faPlay} from '@fortawesome/free-solid-svg-icons';

class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apiresponse:[],
      currentpage:"",
      playbutton:"",
      message:new Date().getHours(),
    }
  }

  ApiCall = () => {
    fetch("https://yogeshnegi.online/home").then(res => {
      return res.json();
    })
    .then((data) => {
      let newarray = []
     for(let i=0;i<data.length;i++){
        if(newarray.indexOf(data[i].playlistname) == -1){
          newarray.push(data[i].playlistname)
        } else {
          delete data[i]
        }
     }

      this.setState({
        apiresponse:data.filter(val => val!== "")
      })
    })
  }

componentDidMount(){
  this.ApiCall()
  
  document.querySelector(".seeAll").addEventListener("click", ()=>{
    document.querySelector(".recentSection").style.flexWrap = "wrap"
    document.querySelector(".listWrapper").style.display = "none"
    document.querySelector(".greeting").style.display = "none"
    document.querySelector(".seeAll").style.display = "none"
  })

}


render() {

  return (
      <div className="container2">
        <div className="profile">
        <p>UPGRADE</p>
        <div><img src={profilepic} style={{"height":"30px","width":"30px", "border-radius":"100%","margin-right":"10px"}}/>Yogesh Negi<FontAwesomeIcon icon={faSortDown} style={{"margin":"0 10px", "font-size":"140%"}}/></div>
        </div>
        <div className="playlistBanner">
        <div className="greeting">
          {this.state.message<12?"Good morning":this.state.message<17?"Good afternoon":"Good evening"}
        </div>
        <div className="listWrapper">
      {this.state.apiresponse.map((data, i) => {
       return <section value={data.playlistname} onClick={(e)=>this.props.shoplaylist(e)}><div value={data.playlistname} className="listimage"><img value={data.playlistname} key={i} id={i} src={data.cover} style={{"objectFit":"cover","height":"12vh", "width":"9vw","border-radius":"3px"}}/> <div index={i} value={data.playlistname} className="listName">&nbsp;&nbsp;&nbsp;{data.playlistname}</div></div><div value={data.playlistname} className="Ppbutton"></div></section>
      })}
      </div>
      <div className="recentHeader">
      <h2>Recently played</h2>
      <a href="#recentSection"><h6 className="seeAll">SEE ALL</h6></a>
      </div>
      <div className="recentSection">
      {this.state.apiresponse.map((data, i) => {
       return <section value={data.playlistname} onClick={(e)=>this.props.shoplaylist(e)}><div className="listimage"><img key={i} value={data.playlistname} id={i} src={data.cover} style={{"objectFit":"cover","height":"32vh", "width":"18vw","border-radius":"3px"}}/></div>&nbsp;&nbsp;<div index={i} value={data.playlistname} className="listName">{data.playlistname}</div><div value={data.playlistname} className="Ppbutton Ppbutton2"></div></section>
      })}
      </div>
      </div>
      </div>
  );
}
}

export default Homepage;
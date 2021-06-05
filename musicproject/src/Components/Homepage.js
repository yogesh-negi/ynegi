import React from "react"
import Playlistpage from "./playlistpage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import Topsection from "./profileSection"


class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apiresponse:[],
      playbutton:"",
      message:new Date().getHours(),
    }
  }

  ApiCall = () => {
    fetch("http://localhost/home").then(res => {
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
         <Topsection/>
        <div className="playlistBanner">
        <div className="greeting">
          {this.state.message<12?"Good morning":this.state.message<17?"Good afternoon":"Good evening"}
        </div>
        <div className="listWrapper">
      {this.state.apiresponse.map((data, i) => {
       return <section value={data.playlistname} onClick={(e)=>this.props.shoplaylist(e)}><img value={data.playlistname} key={i} id={i} src={data.cover} style={{"objectFit":"cover", "width":"20%","border-radius":"3px"}}/><div index={i} value={data.playlistname} className="listName">{data.playlistname}</div><div value={data.playlistname} className="Ppbutton"></div></section>
      })}
      </div>
      <div className="recentHeader">
      <h2>Recently played</h2>
      <a href="#recentSection"><h6 className="seeAll">SEE ALL</h6></a>
      </div>
      <div className="recentSection">
      {this.state.apiresponse.map((data, i) => {
       return <section value={data.playlistname} onClick={(e)=>this.props.shoplaylist(e)}><img key={i} value={data.playlistname} id={i} src={data.cover} style={{"objectFit":"cover", "width":"18vw","border-radius":"3px"}}/><div index={i} className="card-name" value={data.playlistname}><p>{data.playlistname}</p></div><div value={data.playlistname} className="Ppbutton Ppbutton2"></div></section>
      })}
      </div>
      </div>
      </div>
  );
}
}

export default Homepage;
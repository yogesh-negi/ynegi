import logo from "./images/logo.png"
import './App.css';
import React from "react"
import Homepage from "./Components/Homepage"
import Form from "./Components/form"
import Playlistpage from "./Components/playlistpage"
import { get } from "mongoose";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faBookMedical, faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    //   // after completing designing for playlistpage make homepage true
    homepage:false,
    form:false,
    currentpage:"",
  }
}

openplaylist = (e) => {
  fetch("https://yogeshnegi.online/home").then(fetcheddata => {
    return fetcheddata.json()
  }).then(data => {
    this.setState({
      homepage:false,
      currentpage:data.filter(playlist => {          
        // return playlist.playlistname == e.target.attributes.value.value
        return playlist.playlistname == "ed sheeran"

      })
    })
  })
}

getForm = () => {
  this.setState({
    homepage:false,
    form:true
  })
}

componentDidMount(){
  // after completing designing for playlistpage remove this cycle
  this.openplaylist()
}

render() {
  return (
    <div className="container">
      <ul className="Header">
        <li><img src={logo} style={{"height":"20vh","width":"12vw"}}/></li>
        <li><FontAwesomeIcon icon={faHome} style={{"margin-right":"10px", "font-size":"130%"}}/> Home </li>
        <li><FontAwesomeIcon icon={faSearch} style={{"margin-right":"10px", "font-size":"130%"}}/> Search</li>
        <li><FontAwesomeIcon icon={faBookMedical} style={{"margin-right":"10px", "font-size":"130%"}}/> Your Library</li>
        <li onClick={()=>this.getForm()}><FontAwesomeIcon icon={faArrowCircleUp} style={{"margin-right":"10px", "font-size":"130%"}}/> Upload</li>
      </ul>
      {/* {
      this.state.homepage?<Homepage shoplaylist={(e)=>{this.openplaylist(e)}}/>:this.state.form?<Form/>:<Playlistpage shoplaylist={this.state.currentpage} />
      } */}
       {this.state.currentpage?<Playlistpage shoplaylist={this.state.currentpage}/>:false}
    </div>
  );
}
}

export default App;

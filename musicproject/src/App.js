import logo from "./images/logo.png"
import './App.css';
import React from "react"
import Playlistpage from "./Components/playlistpage"
import Homepage from "./Components/Homepage"
import Form from "./Components/form"
import { get } from "mongoose";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apiresponse:[],
      currentpage:"",
      songslist:""
    }
  }

selectedsongs = (e) => {
this.setState({
songslist:[e.target.value,...this.state.songslist]
})
}

  openplaylist = (e) => {
    fetch("https://yogeshnegi.online/home").then(fetcheddata => {
      return fetcheddata.json()
    }).then(data => {
      this.setState({
        currentpage:data.filter(playlist => {
          return playlist.playlistname == e.target.title
        })
      })
    })
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
        apiresponse:data
      },()=>{console.log(this.state.apiresponse)})
    })
  }

componentDidMount(){
  this.ApiCall()
}


render() {

  return (
    <div>
      <header>
      <ul>
        <li><img src={logo} style={{"height":"50px","width":"50px"}}/></li>
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>PRICING</li>
      </ul>
     
      <Form selectedsongs={this.state.songslist}/>
     {
      this.state.currentpage !== ""?<Playlistpage shoplaylist={this.state.currentpage}/>:<Homepage selected={this.openplaylist}/>
     }
        {this.state.apiresponse.map((data, i) => {
       return <img key={i} id={i} onClick={this.openplaylist} title={data.playlistname} src={data.cover} style={{"objectFit":"cover", "margin":"1%", "display":"flex", "height":"200px", "width":"300px"}}/>
      })}
      
      </header>
    </div>
  );
}
}

export default App;

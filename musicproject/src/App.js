import logo from "./images/logo.png"
import './App.css';
import React from "react"
import Playlistpage from "./Components/playlistpage"
import Homepage from "./Components/Homepage"
import Form from "./Components/form"


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
    fetch("http://localhost:4000/test").then(fetcheddata => {
      return fetcheddata.json()
    }).then(data => {
      this.setState({
        currentpage:data.filter(playlist => {
          return playlist.playlistname == e.target.title
        })
      })
    })
    
    // this.setState({
    //   currentpage:e.target.id
    // })
  }

  ApiCall = () => {
    fetch("http://localhost:4000/test").then(res => {
      return res.json()
    })
    .then((data) => {
      let newarray = []
      data.forEach((val, i) => {
        if(newarray.indexOf(val.playlistname) ===-1){
          newarray.push(val.playlistname)
        } else {
          delete data[newarray.indexOf(val.playlistname)]
        }
        this.setState({
          apiresponse:data
        })
      })
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

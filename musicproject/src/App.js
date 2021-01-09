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
    this.setState({
      currentpage:e.target.className
    })
  }

  ApiCall = () => {
    fetch("http://localhost:4000/test")
    .then(res => res.json())
    .then(response => {
      this.setState({
        apiresponse:response
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
    {this.state.apiresponse.map((data,i)=>{
      return (
        <p>
        <input type="checkbox" className="checkbox" onClick={this.selectedsongs} value={data[0]}/>{data[0]}
        </p>
      )})}  
      </header>
    </div>
  );
}
}

export default App;

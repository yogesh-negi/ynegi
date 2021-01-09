import React, {Component} from 'react'
import axios from "axios"

class Form extends Component {
constructor(props){
    super(props)
    this.state = {
        playlistname:"",
        cover:"",
        Name:"",
        year:""
    }
}

getformData = (e) => {
    this.setState({
        [e.target.name]:e.target.value,
         Name:this.props.selectedsongs
    })
}

sendDatatoServer = (e) => {
      e.preventDefault()
axios.post("http://localhost:4000/test",this.state).then(data=>console.log(data))
}

    render(){
    return (
        <form method="POST" action="/">
            <input type="text" name="playlistname" onChange={this.getformData} value={this.state.playlistname}/>
            <input type="text" name="cover" onChange={this.getformData} value={this.state.cover}/>
            <input type="text" name="Name" onChange={this.getformData} value={this.props.selectedsongs}/>
            <input type="text" name="year" onChange={this.getformData} value={this.state.year}/>
            <input type="submit" value="submit" onClick={this.sendDatatoServer}/>          
        </form>
    )
}
}

export default Form
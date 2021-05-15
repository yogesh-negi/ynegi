import React, {Component} from 'react'
import axios from "axios"

class Form extends Component {
constructor(props){
    super(props)
    this.state = {
        playlistname:"",
        cover:"",
        Name:"",
        year:"",
        file:""
    }
}

getformData = (e) => {
    this.setState({
        [e.target.name]:e.target.value,
        Name:this.props.selectedsongs,
    })
}

fileFunc = (e) => {
    this.setState({
        [e.target.name]:e.target.files[0]
    })
}

sendDatatoServer = (e) => {
       e.preventDefault()
      const data = new FormData();
      data.append('file', this.state.file)
      data.append('body', JSON.stringify(this.state))
      if(this.state.file.name){
 axios.post("https://yogeshnegi.online/upload", data).then(data=>{
     window.location.reload()
}).catch(error => console.log(error.message))

} else {
    alert("must choose a file")
}
}

    render(){
    return (<section>
        <form method="POST" action="/" encType="multipart/form-data">
            <p><input type="text" placeholder="Playlist Name" name="playlistname" onChange={this.getformData} value={this.state.playlistname}/></p>
            <p><input type="text" placeholder="Cover Photo Url" name="cover" onChange={this.getformData} value={this.state.cover}/></p>
            <p><input type="text" placeholder="Year" name="year" onChange={this.getformData} value={this.state.year}/></p>
            <p><input type="file" name="file" onChange={this.fileFunc} multiple /></p>
            <p><input type="submit" value="submit" onClick={this.sendDatatoServer}/>  </p>
        </form>
        </section>
    )
}
}

export default Form
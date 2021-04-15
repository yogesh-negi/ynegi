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
    return (<>
        <section className="songlist">
        </section>
        <form method="POST" action="/" encType="multipart/form-data">
            <input type="text" placeholder="Playlist Name" name="playlistname" onChange={this.getformData} value={this.state.playlistname}/>
            <input type="text" placeholder="Cover Photo Url" name="cover" onChange={this.getformData} value={this.state.cover}/>
            <input type="text" placeholder="Year" name="year" onChange={this.getformData} value={this.state.year}/>
            <input type="file" name="file" onChange={this.fileFunc} multiple />
            <input type="submit" value="submit" onClick={this.sendDatatoServer}/>  
        </form>
        </>
    )
}
}

export default Form
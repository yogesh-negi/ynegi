import React from "react";
import {Component} from "react";
import jsondata from "./data.json";
import axios from "axios"


class Homepage extends Component {

removeplaylist = (e) => {
  let object = {
    data:e.target.value
  }
  axios.post("http://localhost:4000/delete", object).then(data => console.log(data))
}

      render(){
          return (
            <section>
           {
             jsondata.map((val,i)=>{
               return (
                 <div>
                 
                 <h1>{val[Object.keys(val)][0].PlaylistName}</h1>
               <img key={i} onClick={this.props.selected} className={i} src={val[Object.keys(val)][0].cover} style={{"height":"200px","width":"200px"}}/>
               <br/>
               <button className="removeplaylist" value={val[Object.keys(val)][0].PlaylistName} onClick={this.removeplaylist} >Remove Playlist</button>
               </div>
               )
             })
           }
            
            </section>
        )
      }
}

export default Homepage  
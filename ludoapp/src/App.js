import React from 'react';
import './btstyle.css'
import {FirstPage} from './firstpage.js'
import Secondpage from './firstplayer.js'


class App extends React.Component {
constructor(){
	super()
	this.state = {
		user1:'',
    user2:'',

	}
}

clickHandler = () => {
	var player1 = prompt("Player 1")
  var player2 = prompt("Player 2")
  if(player1||player2){
  localStorage.setItem("Player 1", player1)
  localStorage.setItem("Player 2", player2)
    this.setState({
    user1:player1,
    user2:player2,
  })
  }else {
    return false
  }
}

    render() {
    	var fisrtpage;
    	var secondpage;
    	if(localStorage.getItem("Player 1") || localStorage.getItem("Player 2")){
    		secondpage = <Secondpage user1={this.state.user1} user2={this.state.user2} />
    	} else {
    		fisrtpage = <FirstPage handler={this.clickHandler}/>
    	}

      return (
     <React.Fragment>
     {fisrtpage}
     {secondpage}
     </React.Fragment>
      );
    }
  }
  
  export default App;
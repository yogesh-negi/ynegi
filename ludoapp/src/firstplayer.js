import React, {Component} from 'react';
import coverimage from './images/image1.jpg';
import ludoboard from './images/LUDO.png';
import one from './images/black1.PNG';
import icon from './images/icon.png';
import Player2 from './player2.js';
import Updatedcomponent from './hoc.js'
import './App.css';







class Secondpage extends Component {

	render(){
		const {Dicehandler, Iconhandler, animatedice, user1, user2} = this.props
		return (
			<div className="container">
			<div className="buttonwrapper">
			<button onClick={Dicehandler} onMouseOver={animatedice} className="btn btn-outline-danger"> Roll Dice player 1 </button>
			Player 1 : {user1} <img src={icon} className="player1indicator rounded-circle m-3"/>
			</div>
			<div className="ludoboard">
			<div className="iconwrapper1">
			<Player2 user2={user2}/>
			<img src={icon} onClick={Iconhandler} id="icon" title="Token 1" alt="firsticon" className="icon"/>
			<img src={icon} onClick={Iconhandler} id="icon2" title="Token 2" alt="secondicon" className="icon2"/>
			<img src={icon} onClick={Iconhandler} id="icon3" title="Token 3" alt="thirdicon" className="icon3"/>
			<img src={icon} onClick={Iconhandler} id="icon4" title="Token 4" alt="fourthicon" className="icon4"/>
			<img src={one} title="" id="dice"/>
			</div>
			</div>
			<form>
			<input type="submit" id="logOut" onClick={()=>{prompt("Are You Sure To Want To Exit")=="yes"&&localStorage.clear()}} className="btn btn-outline-danger" value="LOG OUT"/>
			</form>
			</div>
			)
	}
}






export default Updatedcomponent(Secondpage, "player1")
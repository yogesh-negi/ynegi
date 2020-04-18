import React, {Component} from 'react';
import coverimage from './images/image1.jpg';
import icon from './images/icon.png';
import Updatedcomponent from './hoc.js'
import './style.css'

class Player2 extends Component {

	render(){
		const {Dicehandler, Player2iconhandler, animatedice,user2} = this.props
	return (
		<><div className="ludoboard1">
		<div className="iconwrapper">
		<img src = {icon} title="Token 1" id="player2icon1" onClick={Player2iconhandler} className="player2icon1"/>
		<img src = {icon} title="Token 2" id="player2icon2" onClick={Player2iconhandler} className="player2icon2"/>
		<img src = {icon} title="Token 3" id="player2icon3" onClick={Player2iconhandler} className="player2icon3"/>
		<img src = {icon} title="Token 4" id="player2icon4" onClick={Player2iconhandler} className="player2icon4"/>
		</div>
		</div>
		<div className="buttonwrapper2">
		<button onClick={Dicehandler} onMouseOver={animatedice} className="btn btn-outline-primary"> Roll Dice player 2 </button>
	     Player 2 : {user2} <img src = {icon} className="player2indicator rounded-circle m-3"/>
		</div>
		</>
		)
}
}

export default Updatedcomponent(Player2, "player2")




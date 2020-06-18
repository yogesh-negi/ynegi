import React from 'react'

function Header (props){

	
	return (
		<section className="Header">
		<li onClick={props.HomeScreen} className="Home">Home</li>
		<li onClick={props.outTeamScreen} className="Team">Team</li>
		<li onClick={props.scrollhandler} className="Aboutus">About us</li>
		<li className="Contact">Contact</li>
		</section>
		)
}

export default Header
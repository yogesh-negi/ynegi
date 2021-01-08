import React from 'react';
import Aboutussection from './Aboutussection.js'
import Teamjason from './Team.json';

class Teamsection extends React.Component {

	render(){
		return (
			<section className="Middlesection">
			<h3><strong> Our Team </strong></h3>
			<section className="content">
			{
				Teamjason.map((val,i)=>{
					return (
						<div className="ourteamwrapper" key={i}> <img src={val.image} /><h6>{val.name}</h6> <h6>{val.topic}</h6> <p>{val.summary}</p> </div>
						)
				})
			}
			</section>
			<Aboutussection/>
			</section>
			)
	}
}

export default Teamsection
import React from 'react';
import Aboutusjson from './Aboutus.json'

class Aboutussection extends React.Component {

	render(){
		return (
		    <section className="aboutus">
		    <h3 id="aboutus"><strong> About us </strong></h3>
		    <section className="content">
		    	{
		    		Aboutusjson.map((value,i)=>{
		    		return	(<div className="ourteamwrapper" key={i}><img src={value.image}/> <h6>{value.owner}</h6> <h6>{value.company} ({value.industry}) </h6> <p> {value.companyprofile} </p></div>
		    			)
		    		})
		    	}
			</section>
			</section>
			)
	}
}

export default Aboutussection
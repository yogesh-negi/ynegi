import React from 'react'
import Sidebar from './Sidebar.js'
import Middlesection from './Middlesection.js'
import Rightsidebar from './Rightsidebar.js'
import Aboutussection from './Team.js'

function Content (props){

	return (
		<section className="Content">
		<Sidebar/>
		{props.HomeScreen?<Middlesection/>:<Aboutussection/>}
		<Rightsidebar/>		
		</section>
		)
}

export default Content
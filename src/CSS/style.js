import React, {Component} from 'react'
import '../CSS/style.css'

export function Style(props) {
		let className = props.className ? 'div' : ''
		return <div className={className}> This is Some Text </div>
	}

const Heading = {
	color:'green',
	fontSize:'500%'
}

export function Head () {
	return <div style={Heading}> This is Inline css in react </div>
}



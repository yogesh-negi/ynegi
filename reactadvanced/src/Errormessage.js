import React from 'react'

class Errormsg extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			hasError:false
		}
	}

static getDerivedStateFromError(error){
	
return {
	hasError:true,
}
}

	render(){
		if(this.state.hasError){
			return <h1> Something went wrong.....</h1>
		} else {
			return this.props.children
		}
		return
	}
}

export default Errormsg 
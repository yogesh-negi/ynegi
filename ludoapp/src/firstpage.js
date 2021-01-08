import React, {Component} from 'react';
import coverimage from './images/image1.jpg';
import one from './images/black1.PNG'
import two from './images/black2.PNG'
import three from './images/black3.PNG'
import four from './images/black4.PNG'
import five from './images/black5.PNG'
import six from './images/black6.PNG'


export class FirstPage extends Component {


	render(){

	return (<div className="jumbotron">
     <h1 className="h1"> Ludo Game </h1>
     <img src={coverimage}/><br/><br/>
     <button id="playbutton" onClick={this.props.handler} className="btn btn-danger col-md-3"> play </button>
     <div>
     <img className="animatedice2"/>
     </div>
     </div>
     )
	}
}
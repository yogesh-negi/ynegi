import React from 'react';
import './btstyle.css'
import './App.css'
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
import Errormsg from './Errormessage.js'



class App extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         homemenu:true,
         outTeamScreen:false
      }
   }

HomeScreen = () => {
  if(this.state.homemenu !== true){
      this.setState({
               outTeamScreen:false,
               homemenu:true,
      })
  }
}


outTeamScreen = () => {
  if(this.state.outTeamScreen !== true ){
      this.setState({
               homemenu:false,
               outTeamScreen:true,
      })
  }
}

scrolltoaboutus = () => {
  var middlesec = document.querySelector('.Middlesection')
var aboutus = document.querySelector('.aboutus')
  if(aboutus){
var ycord = aboutus.getBoundingClientRect().top
middlesec.scrollTo({
  left:0,
  top:ycord,
  behavior:'smooth'
})}else {
  return false
}
}



   render() {

      return (
         <div className="container-fluid">
            {/*<h3 title="we are not using set state method here" >this number is updating using forceUpdate() method : {Math.floor(Math.random()*7)}</h3>
            <button onClick={()=>{return this.forceUpdate()}}> Update Number </button>*/}
            <Header scrollhandler={this.scrolltoaboutus} HomeScreen={this.HomeScreen} outTeamScreen={this.outTeamScreen}/>
            <Errormsg>
            <Content about="Joker" HomeScreen = {this.state.homemenu} outTeamScreen = {this.outTeamScreen} />
            </Errormsg>
            <Footer/>
         </div>
      );
   }
}

export default App;
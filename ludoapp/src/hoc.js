import React, {Component} from 'react';
import coverimage from './images/image1.jpg';
import ludoboard from './images/LUDO.png';
import one from './images/black1.PNG'
import two from './images/black2.PNG'
import three from './images/black3.PNG'
import four from './images/black4.PNG'
import five from './images/black5.PNG'
import six from './images/black6.PNG'
import icon from './images/icon.png';



var user = ''
var randomeNumber;

const Updatedcomponent = (WrapedComp, player) => {
class Updatedcomponent extends Component {


diceanimater = () => {
	document.querySelector("#dice").removeAttribute("src")
	document.querySelector("#dice").className = "animatedice"
}


clickDice = () => {
if(player === "player1"){
user = "player1"
randomeNumber = Math.floor(Math.random()*6)+1

var dice;
	if(randomeNumber === 1){
	    dice = one
	} else if(randomeNumber === 2){
		dice = two
	}else if(randomeNumber === 3){
		dice = three
	}else if(randomeNumber === 4){
		dice = four
	}else if(randomeNumber === 5){
		dice = five
	}else if(randomeNumber === 6){
		dice = six
	}
document.querySelector("#dice").removeAttribute("className")
document.querySelector("#dice").src = dice

} else if (player === "player2"){
	user = "player2"
	randomeNumber = Math.floor(Math.random()*6)+1
	var dice;
	if(randomeNumber === 1){
	    dice = one
	} else if(randomeNumber === 2){
		dice = two
	}else if(randomeNumber === 3){
		dice = three
	}else if(randomeNumber === 4){
		dice = four
	}else if(randomeNumber === 5){
		dice = five
	}else if(randomeNumber === 6){
		dice = six
	}
document.querySelector("#dice").removeAttribute("className")
document.querySelector("#dice").src = dice

}

}


iconHandler = (e) => {
if(user === "player1"){
if(document.getElementById(e.target.id).className !== "unlocked" && localStorage.getItem(e.target.id+"Previousclass") === null){
if(randomeNumber === 1 || randomeNumber === 6){		
switch(e.target.id){
case "icon":
document.getElementById(e.target.id).className = "unlocked"
return randomeNumber = ''
break;
case "icon2":
document.getElementById(e.target.id).className = "unlocked"
return randomeNumber = ''
break;
case "icon3":
document.getElementById(e.target.id).className = "unlocked"
return randomeNumber = ''
break;
case "icon4":
document.getElementById(e.target.id).className = "unlocked"
return randomeNumber = ''
break;

}}} else {
	if(randomeNumber){		
		var underScore = "_"
		switch(e.target.id){
			case "icon":
			if(localStorage.getItem("iconPreviousclass") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)
		} else if (localStorage.getItem("iconPreviousclass")){
			var x = localStorage.getItem("iconPreviousclass")
			var split = x.split("_") 
			 var previousClass = Math.floor(split[1])
			 var addPreviousClass = previousClass + randomeNumber 
			 if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
			 	var concat = underScore.concat(addPreviousClass)
			 } 
		}
var iconPreviousclass = document.getElementById(e.target.id).className = concat
localStorage.setItem("iconPreviousclass", iconPreviousclass)
localStorage.setItem("updatedClass", iconPreviousclass)
break;
            case "icon2":
			if(localStorage.getItem("icon2Previousclass") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)

		} else if (localStorage.getItem("icon2Previousclass")){
			var x = localStorage.getItem("icon2Previousclass")
			var split = x.split("_") 
			 var previousClass = Math.floor(split[1])
			 var addPreviousClass = previousClass + randomeNumber 
		    if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
			 	var concat = underScore.concat(addPreviousClass)
			 } 

		}

var icon2Previousclass = document.getElementById(e.target.id).className = concat
localStorage.setItem("icon2Previousclass", icon2Previousclass)
localStorage.setItem("updatedClass", icon2Previousclass)
break;
            case "icon3":
			if(localStorage.getItem("icon3Previousclass") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)
		} else if (localStorage.getItem("icon3Previousclass")){
			var x = localStorage.getItem("icon3Previousclass")
			var split = x.split("_") 
			 var previousClass = Math.floor(split[1])
			 var addPreviousClass = previousClass + randomeNumber 
		  	if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
			 	var concat = underScore.concat(addPreviousClass)
			 } 

		}

var icon3Previousclass = document.getElementById(e.target.id).className = concat

localStorage.setItem("icon3Previousclass", icon3Previousclass)
localStorage.setItem("updatedClass", icon3Previousclass)
break;
            case "icon4":
			if(localStorage.getItem("icon4Previousclass") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)
		} else if (localStorage.getItem("icon4Previousclass")){
			var x = localStorage.getItem("icon4Previousclass")
			var split = x.split("_") 
			 var previousClass = Math.floor(split[1])
			 var addPreviousClass = previousClass + randomeNumber 
			 if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
			 	var concat = underScore.concat(addPreviousClass)
			 } 
		}

var icon4Previousclass = document.getElementById(e.target.id).className = concat

localStorage.setItem("icon4Previousclass", icon4Previousclass)
localStorage.setItem("updatedClass", icon4Previousclass)
break;
	/// switch block of setting new class is ending here
}

var splittingplayer2icon1 = localStorage.getItem("player2icon1")?localStorage.getItem("player2icon1").split("__"):''
var previousClassplayer2icon1 = splittingplayer2icon1[1]
var splittingplayer2icon2 = localStorage.getItem("player2icon2")?localStorage.getItem("player2icon2").split("__"):''
var previousClassplayer2icon2 = splittingplayer2icon2[1]
var splittingplayer2icon3 = localStorage.getItem("player2icon3")?localStorage.getItem("player2icon3").split("__"):''
var previousClassplayer2icon3 = splittingplayer2icon3[1]
var splittingplayer2icon4 = localStorage.getItem("player2icon4")?localStorage.getItem("player2icon4").split("__"):''
var previousClassplayer2icon4 = splittingplayer2icon4[1]
var splittingclassofplayer1 = localStorage.getItem("updatedClass").split("_")
var currentclassofplayer1 = splittingclassofplayer1[1]



if(previousClassplayer2icon1 - currentclassofplayer1 === 13 ){
document.querySelector("#player2icon1").className = "player2icon1"
localStorage.removeItem("player2icon1")
} else if(previousClassplayer2icon2 - currentclassofplayer1 === 13 ){
document.querySelector("#player2icon2").className = "player2icon2"
localStorage.removeItem("player2icon2")
} else if(previousClassplayer2icon3 - currentclassofplayer1 === 13 ){
document.querySelector("#player2icon3").className = "player2icon3"
localStorage.removeItem("player2icon3")
}else if(previousClassplayer2icon4 - currentclassofplayer1 === 13 ){
document.querySelector("#player2icon4").className = "player2icon4"
localStorage.removeItem("player2icon4")
}
randomeNumber = ''
////if else block of setting new class is ending here
		
}

}

}}




player2iconHandler = (e) => {
if(user === "player2"){
if(document.getElementById(e.target.id).className !== "unlockedplayer2" && localStorage.getItem(e.target.id) === null){

if(randomeNumber === 1 || randomeNumber === 6){
switch(e.target.id){
case "player2icon1":
document.getElementById(e.target.id).className = "unlockedplayer2"
return randomeNumber = ''
break;
case "player2icon2":
document.getElementById(e.target.id).className = "unlockedplayer2"
return randomeNumber = ''
break;
case "player2icon3":
document.getElementById(e.target.id).className = "unlockedplayer2"
return randomeNumber = ''
break;
case "player2icon4":
document.getElementById(e.target.id).className = "unlockedplayer2"
return randomeNumber = ''
break;
}}} else {
	
	if(randomeNumber){
		

		var underScore = "__"

				switch(e.target.id){
			case "player2icon1":
			if(localStorage.getItem("player2icon1") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)
		   

		} else if (localStorage.getItem("player2icon1")){
			
			var x = localStorage.getItem("player2icon1")
			var split = x.split(underScore) 
			
			 var previousClass = Math.floor(split[1])
			
			 var addPreviousClass = previousClass + randomeNumber 
			 if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
			 	var concat = underScore.concat(addPreviousClass)
			 } 
		}

var player2icon1 = document.getElementById(e.target.id).className = concat


localStorage.setItem("player2icon1", player2icon1)
localStorage.setItem("Player2updatedClass", player2icon1)

break;
            case "player2icon2":
			if(localStorage.getItem("player2icon2") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)
		   

		} else if (localStorage.getItem("player2icon2")){
		
			var x = localStorage.getItem("player2icon2")
			var split = x.split(underScore) 
			
			 var previousClass = Math.floor(split[1])
			
			 var addPreviousClass = previousClass + randomeNumber 

			 if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
			 	var concat = underScore.concat(addPreviousClass)
			 } 
		}

var player2icon2 = document.getElementById(e.target.id).className = concat

localStorage.setItem("player2icon2", player2icon2)
localStorage.setItem("Player2updatedClass", player2icon2)

break;
            case "player2icon3":
			if(localStorage.getItem("player2icon3") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)
		    
		} else if (localStorage.getItem("player2icon3")){
			
			var x = localStorage.getItem("player2icon3")
			var split = x.split(underScore) 
			
			 var previousClass = Math.floor(split[1])
			
			 var addPreviousClass = previousClass + randomeNumber 
			 if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
			 	var concat = underScore.concat(addPreviousClass)
			 } 
		   
		}

var player2icon3 = document.getElementById(e.target.id).className = concat

localStorage.setItem("player2icon3", player2icon3)
localStorage.setItem("Player2updatedClass", player2icon3)
break;
            case "player2icon4":
			if(localStorage.getItem("player2icon4") === null){
		    var previousClass = ''
		    var addPreviousClass = previousClass + randomeNumber
		    var concat = underScore.concat(addPreviousClass)

		} else if (localStorage.getItem("player2icon4")){
		
			var x = localStorage.getItem("player2icon4")
			var split = x.split(underScore) 
			 var previousClass = Math.floor(split[1])
			 var addPreviousClass = previousClass + randomeNumber 
			 if(Math.floor(addPreviousClass) > 56){ 
			 	var concat = x
			 } else {
		     var concat = underScore.concat(addPreviousClass) 

		}}

var player2icon4 = document.getElementById(e.target.id).className = concat

localStorage.setItem("player2icon4", player2icon4)
localStorage.setItem("Player2updatedClass", player2icon4)
break;
	
	/// switch block of setting new class for player 2 is ending here
}


var splittingplayer1icon = localStorage.getItem("iconPreviousclass")?localStorage.getItem("iconPreviousclass").split("_"):''
var previousClassplayer1icon = Number(splittingplayer1icon[1])
var splittingplayer1icon2 = localStorage.getItem("icon2Previousclass")?localStorage.getItem("icon2Previousclass").split("_"):''
var previousClassplayer1icon2 = Number(splittingplayer1icon2[1])
var splittingplayer1icon3 = localStorage.getItem("icon3Previousclass")?localStorage.getItem("icon3Previousclass").split("_"):''
var previousClassplayer1icon3 = Number(splittingplayer1icon3[1])
var splittingplayer1icon4 = localStorage.getItem("icon4Previousclass")?localStorage.getItem("icon4Previousclass").split("_"):''
var previousClassplayer1icon4 = Number(splittingplayer1icon4[1])
var splittingclassofplayer2 = localStorage.getItem("Player2updatedClass").split("__")
var currentclassofplayer2 = Number(splittingclassofplayer2[1])

if(currentclassofplayer2 - previousClassplayer1icon === 13 ){
document.querySelector("#icon").className = "icon"
localStorage.removeItem("iconPreviousclass")
} else if(currentclassofplayer2 - previousClassplayer1icon2 === 13 ){
document.querySelector("#icon2").className = "icon2"
localStorage.removeItem("icon2Previousclass")
} else if(currentclassofplayer2 - previousClassplayer1icon3 === 13 ){
document.querySelector("#icon3").className = "icon3"
localStorage.removeItem("icon3Previousclass")
}else if(currentclassofplayer2 - previousClassplayer1icon4 === 13 ){
document.querySelector("#icon4").className = "icon4"
localStorage.removeItem("icon4Previousclass")
}

/// if eles block of setting new class for player 2 is ending here
randomeNumber = ''
}}

}}


render(){

	return <WrapedComp Dicehandler={this.clickDice} Iconhandler={this.iconHandler} Player2iconhandler={this.player2iconHandler} user1={this.props.user1} user2={this.props.user2} animatedice={this.diceanimater} />
}

	}

	return  Updatedcomponent
}










export default Updatedcomponent
import React from 'react';
import '../btstyle.css';
import '../App.css';

export function ChangeTheme (){	
	const changeTheme = () => {
		if(document.querySelector(".normalViewContainer")){
			document.querySelector(".normalViewContainer").className = "skewViewContainer"
			var normalViewButtons = document.querySelectorAll(".normalViewButton")
		    var skewViewButtons;
		    var normalViewinputTypes = document.querySelectorAll(".normalviewinputType")
		var SkewViewinputTypes;
		    document.querySelector(".container1").className = "skewcontainer1"
		    document.body.style.backgroundColor = "black"

		for(var i = 0;i<=normalViewButtons.length-1;i++){
			skewViewButtons = normalViewButtons[i].className = "buttonSkew btn"
		}

		for(i=0;i<=normalViewinputTypes.length-1;i++){
			SkewViewinputTypes = normalViewinputTypes[i].className = "inputTypeSkew"
		}
		} else {
			document.querySelector(".skewViewContainer").className = "normalViewContainer"
			skewViewButtons = document.querySelectorAll(".buttonSkew")
		    var normalViewButtons;
		    SkewViewinputTypes = document.querySelectorAll(".inputTypeSkew")
		    var normalViewinputTypes;
		    document.querySelector(".skewcontainer1").className = "container1"
		    document.body.style.backgroundColor = "gold"

		for(i = 0;i<=skewViewButtons.length-1;i++){
			normalViewButtons = skewViewButtons[i].className = "normalViewButton"
		}

		for(i=0;i<=SkewViewinputTypes.length-1;i++){
			normalViewinputTypes = SkewViewinputTypes[i].className = "normalviewinputType"
		}
		}		
	}

	return (
		<button onClick={changeTheme} className="ThemeChangewrapper btn" > Change Theme </button>
		)
}


































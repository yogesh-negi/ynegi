import React, {useState, createRef, useEffect} from 'react';
import '../btstyle.css';
import '../CSS/style.css';
import greenlight from '../CSS/greenlight.png'
import redlight from '../CSS/red_light.png'
import darklight from '../CSS/hal_9000.png'
import {ChangeTheme} from './calc.js'


export function CalculatorApp (){
	const [image, setImage] = useState(darklight)
	var [firstValue, setfirstValue] = useState('')
	var [secondValue, setsecondValue] = useState('')

	const setValues = (e) => {
		var value = e.target.value
		if(isNaN(firstValue)){
			return false
		} else if(e.type === 'click') {
			setfirstValue((prevState)=>{
			return prevState + value
		})} else if(e.type === 'change'){
			setfirstValue(()=>{
			return value
		})
			}
		}
	
   const setValue2 = (e) => {
	var value = e.target.value
	if(isNaN(secondValue)){
			return false
		} else if(e.type === 'click') {
			setsecondValue((prevState)=>{
			return prevState + value
		})} else if(e.type === 'change'){
			setsecondValue(()=>{
			return value
		})
			}
}


const setterFunction = (e) => {

	if(document.querySelector("#operator").value === "" || document.querySelector("#operator").value === "AC"){
		setValues(e)
	} else if (document.querySelector("#operator").value) {
		setValue2(e)
	}
}


const operatorHandler = (e) => {
	document.querySelector("#operator").value = e.target.value

	if(document.querySelector("#operator").value !== "AC"){

	document.querySelector("#input2").style.margin = "15.5px 0px 0px 0px"
	document.querySelector("#input2").style.zIndex = "1"
	document.querySelector("#input1").style.opacity = 0

	} else if (document.querySelector("#operator").value === "AC"){
	document.querySelector("#input2").style.zIndex = "-1"
	setfirstValue('')
	setsecondValue('')
	setImage(redlight)
	}
	
}


	const clickHandler = () => {
		setImage(greenlight)
		document.querySelector("#input2").style.zIndex = "-1"
		document.querySelector("#input1").style.opacity = 1

		if(document.querySelector("#operator").value !== "AC" && document.querySelector("#operator").value !== ""){
		var valueOne = Number(document.querySelector("#input1").value)
		var valueTwo = Number(document.querySelector("#input2").value)
		var operator = document.querySelector("#operator").value
		
		var x
		if(isNaN(valueOne)){
			x = "Error()"
		} else if(operator === "+"){
			x = valueOne + valueTwo;
		} else if(operator === "*"){
			x = valueOne * valueTwo;
		} else if(operator === "-"){
			x = valueOne - valueTwo;
		} else if(operator === "%"){
			x = valueOne * valueTwo / 100;
		} else if(valueOne === 0 && valueTwo === 0) {
			x = "Error()"
		} else if(operator === "/"){
			x = valueOne / valueTwo;
		} 

		setfirstValue(()=>{
			return x	
		})

		setsecondValue(()=>{
			return ""
		})
		document.querySelector("#operator").value = ""		
	}
}

const inputRefvalueone = createRef()
useEffect(()=>{
	if(firstValue === ""){
		inputRefvalueone.current.focus()
	}
})


	return (<div className="container1">
		<ChangeTheme/>
		<div className="normalViewContainer">
		<img src={image} alt="light" id="img" />
		<h1> Calculator </h1>
		<input type="text" className="normalviewinputType" id="operator"/><input type="text" value={secondValue} onChange={setterFunction} className="normalviewinputType" id="input2" /><input type="text" placeholder="0" ref={inputRefvalueone} value={firstValue}  onChange={setterFunction} className="normalviewinputType" id="input1" />
		<br/>
		<button value={1} className="normalViewButton" onClick={setterFunction}> 1 </button><button value={2} className="normalViewButton" onClick={setterFunction}> 2 </button><button value={3} className="normalViewButton" onClick={setterFunction}> 3 </button><button value={"+"} className="normalViewButton" onClick={operatorHandler}> + </button><br/>
		<button value={4} className="normalViewButton" onClick={setterFunction}> 4 </button><button value={5} className="normalViewButton" onClick={setterFunction}> 5 </button><button value={6} className="normalViewButton" onClick={setterFunction}> 6 </button><button value={"-"} className="normalViewButton" onClick={operatorHandler}> - </button><br/>
		<button value={7} className="normalViewButton" onClick={setterFunction}> 7 </button><button value={8} className="normalViewButton" onClick={setterFunction}> 8 </button><button value={9} className="normalViewButton" onClick={setterFunction}> 9 </button><button value={"/"} className="normalViewButton" onClick={operatorHandler}> / </button><br/>
		<button value={0} className="normalViewButton" onClick={setterFunction}> 0 </button><button value={"%"} className="normalViewButton" onClick={operatorHandler}> % </button><button value={"*"} className="normalViewButton" onClick={operatorHandler}> * </button><button value={"="} className="normalViewButton" onClick={clickHandler}> = </button>
		<button value={"AC"} className="normalViewButton" onClick={operatorHandler}> AC </button>
		</div>
		</div>

		)
}




















































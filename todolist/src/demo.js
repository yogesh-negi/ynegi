import React from 'react';
import wrong from './crossicon.png'
import addtodo from './addtodoimg.png'


class TodoApp2 extends React.Component{
constructor(){
	super()
	this.state = {
	task:'',
	list:[],
	totalTasks:0,
	pendingTask:0,
	doneTasks:0,

	}
}

counterfunction = (e) => {
	this.setState({
		task:e.target.value
	})
}

addTolist = () =>{
	if(this.state.task){
		this.setState({
	list:[...this.state.list,this.state.task],
	totalTasks:this.state.totalTasks+1,
	pendingTask:this.state.pendingTask+1
})
	} else {
		return false
	}
}
removeItem = (e) => {
var checkbox = document.getElementById("checkbox"+e.target.id)
var list = this.state.list
var value = checkbox.parentElement.textContent
var index = list.indexOf(value.trim())
var updatedList = [];
if(checkbox.checked && list.length > 1){
	list.splice(index,1)
	updatedList = list
	this.setState({
		list:updatedList,
		totalTasks:this.state.totalTasks-1,
		doneTasks:this.state.doneTasks - 1,
	})
} else if (checkbox.checked && list.length === 1){
	this.setState({
		list:updatedList,
		totalTasks:this.state.totalTasks-1,
		doneTasks:this.state.doneTasks - 1,
	})
}
}
	
updatePendingtodos = (e) => {
var checkbox = document.getElementById(e.target.id);
if(checkbox.checked){
	checkbox.parentElement.style.textDecorationLine = "line-through"
	this.setState({
		pendingTask:this.state.pendingTask - 1,
		doneTasks:this.state.doneTasks + 1
	})
} else if(checkbox.checked === false){
checkbox.parentElement.style.textDecorationLine = ""
	this.setState({
		pendingTask:this.state.pendingTask + 1,
		doneTasks:this.state.doneTasks - 1
	})
}
}


	render(){
		return (
			<div className="row m-2">
			<div className="col-12 text-center">
			<h1 className="m-4"> TO DO LIST </h1>
			<p className="btn-group"><input type="text" placeholder="Add your task here...." value={this.state.task} onChange={this.counterfunction}/>
			<img src= {addtodo} onClick={this.addTolist} className="submitbutton ml-3"/></p>
				{
					this.state.list.map((list,i)=>

				(<div className={"todolist2 col-6 text-left p"+i}><li id={"li"+i} className="list-unstyled m-3"><input type="checkbox" onClick={this.updatePendingtodos} id={"checkbox"+i}/> {list} <img src={wrong} id={i} onClick={this.removeItem}/></li></div>)
				)
				}
			<h1 className="m-4"> To Do Summary</h1>
			</div>
			<div className="col-6 ml-5 text-center">
            <h6>Total Todo&apos;s</h6>
            <h6>Done Todo&apos;s</h6>
            <h6>Pending Todo&apos;s</h6>
            </div>
            <div className="col-1 text-left">
            <h6>-</h6>
            <h6>-</h6>
            <h6>-</h6>
            </div>
            <div className="col-2 text-right">
            <h6>{this.state.totalTasks}</h6>
            <h6>{this.state.doneTasks}</h6>
            <h6>{this.state.pendingTask}</h6>
			</div>
			</div>
			)
		}
	}


export default TodoApp2
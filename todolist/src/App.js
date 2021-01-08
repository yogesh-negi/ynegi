import React from 'react';
import './btstyle.css'
import './App.css'
import TodoApp2 from './demo.js'
import wrong from './crossicon.png'
import addtodo from './addtodoimg.png'

var list = []
var str = []
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      task:'',
      TotalTasks:0,
      PendingTasks:0,
      doneTasks:0,
      list:[]
      }
  }

changeHandler = (e) => {
this.setState({
  task:e.target.value,
})

}

clickHandler = () => {
  this.setState({
    PendingTasks:this.state.PendingTasks+1,
    TotalTasks:this.state.TotalTasks+1,
  })
var randomnumber = Math.random()

var task = this.state.task
list.push(task)
str = [...list]

var x = document.querySelector(".list")
var y = document.createElement("li");
var p = document.createElement("p")
p.id = "todo"+randomnumber
var checkbox = document.createElement("input")
checkbox.type = "checkbox"
checkbox.id = "checkbox"+randomnumber
var button = document.createElement("img")
button.src = wrong
button.id = "button"+randomnumber
button.className = "removeItembutton"
var textNode = document.createTextNode(" "+str[str.length - 1]+" ")
x.appendChild(p)
p.appendChild(y)
y.appendChild(checkbox)
y.appendChild(textNode)
y.appendChild(button)

document.getElementById("button"+randomnumber).addEventListener("click",() => {
  if(document.getElementById("checkbox"+randomnumber).checked){
   this.setState({
    TotalTasks:this.state.TotalTasks - 1,
    doneTasks:this.state.doneTasks - 1
   }) 
  document.getElementById("todo"+randomnumber).remove() 
  } else {
    return false
  }
})

document.getElementById("checkbox"+randomnumber).addEventListener("click",() => {
if(document.getElementById("checkbox"+randomnumber).checked){
  this.setState({
    PendingTasks:this.state.PendingTasks - 1,
    doneTasks:this.state.doneTasks+1,
  })
} else if (document.getElementById("checkbox"+randomnumber).checked === false){
  this.setState({
    PendingTasks:this.state.PendingTasks + 1,
    doneTasks:this.state.doneTasks - 1
  })
}
})

}




render(){

      return (
     <div className="container-fluid">
     <div className = "row m-2">
     <section className="col-lg-6 col-md-6 col-sm-12 text-center m-1">
      <h1 className="m-4"> TO DO LIST </h1>
      <span className="btn-group"><input type = "text" placeholder="Add your task here......" value={this.state.task} name="task" onChange={this.changeHandler} />
      <img src={addtodo} onClick={this.clickHandler} className="submitbutton ml-3" /></span>
      <section className="list list-unstyled text-left m-3">
      </section>
      </section>
      <section className="col-lg-5 col-md-5 col-sm-12">
      <h1 className="text-center m-4"> To Do Summary</h1>
      <div className="row text-left">
      <div className="col-7">
      <h6>Total Todo&apos;s</h6>
      <h6>Done Todo&apos;s</h6>
      <h6>Pending Todo&apos;s</h6>
      </div>
      <div className="col-2">
      <h6>-</h6>
      <h6>-</h6>
      <h6>-</h6>
      </div>
      <div className="col-3 text-right">
      <h6>{this.state.TotalTasks}</h6>
      <h6>{this.state.doneTasks}</h6>
      <h6>{this.state.PendingTasks}</h6>
      </div>
      </div>
      </section>
      </div>
      <TodoApp2/>
     </div>
      );
    }
    }


  
  export default App;
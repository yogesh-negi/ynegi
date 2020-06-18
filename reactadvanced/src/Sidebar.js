import React from 'react'

class Sidebar extends React.Component{

componentDidMount(){
	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			JSON.parse(this.responseText).forEach((val,i,array)=>{
				var data = val.title
				var datatable = document.getElementById('Sidebar');
				var p = document.createElement('p')
				var textNode = document.createTextNode(data)
				var x = datatable.appendChild(p)
				    x.appendChild(textNode)
			})
		}
	}
	http.open("get","https://jsonplaceholder.typicode.com/posts",true)
	http.send()

	setInterval(()=>{
		var scrolltop = Math.floor(document.getElementById('Sidebar').scrollTop)
		var scrollHeight = Math.floor(document.getElementById('Sidebar').scrollHeight)
		document.getElementById('Sidebar').scrollBy({
		left:0,
		top:1,
		behavior:'smooth'
	})},100)

}


	render(){
		return (
		<section id="Sidebar">
		<h4>Fetched Data</h4>
		</section>
		)
}
}

export default Sidebar
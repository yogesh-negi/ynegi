import React, {useEffect,useRef} from 'react'

function Middlesection (props){

useEffect(()=>{

	var http = new XMLHttpRequest();
	http.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			JSON.parse(this.responseText).forEach((val,i,array)=>{
				var title = val.title
				var body = val.body
				var datatable = document.querySelector(".Middlesection");
				var h4 = document.createElement("h4")
				h4.style.color = "blue"
				var div = document.createElement("div")
				div.style.color = 'red'
				var textNode = document.createTextNode(title)
				var textNodefordiv = document.createTextNode(body)
				var x = datatable.appendChild(h4)
				var y = x.appendChild(textNode)
				var z = datatable.appendChild(div)
				z.appendChild(textNodefordiv)
			})
		}
	}
	http.open("get","demo.json",true)
	http.send()

})
	return (
		<section className="Middlesection">
		</section>
		)
}

export default Middlesection
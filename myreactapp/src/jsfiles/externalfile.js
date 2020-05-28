import React from 'react'

var itemdatabase = []
var arrayofitems = []



export function Addtocart(e){

  var element = document.querySelector("#"+e.target.id)
  var item_list = document.querySelector(".item_list")
  var item_name = element.attributes.itemname.value
  var item_price = element.attributes.price.value


  if(arrayofitems.lastIndexOf(item_name+"_"+item_price) == -1){
    arrayofitems.push(item_name+"_"+item_price)
    itemdatabase.push({"itemname":item_name, "itemprice":item_price})
    let row = item_list.insertRow(0)
    let col1 = row.insertCell(0)
    let col2 = row.insertCell(1)
    let col3 = row.insertCell(2)
    col1.innerHTML = itemdatabase[itemdatabase.length-1].itemname
    col2.innerHTML = item_price
    col2.className = "pricetag"
    col3.innerHTML = "<input type='number' min=1 max=5 value=1 id='quantity' class='quantity' />"
  } else { 
    alert("already added to your cart")
   return false
  }
document.querySelector("#quantity").addEventListener('click', TotalQty)
document.querySelector("#quantity").addEventListener('change', TotalQty)

function TotalQty(){
  var totalqty = document.getElementById("total");
  var totalamount = document.getElementById("totalamount");
  var cartnotification = document.getElementById('cartnotification');

var totalItems = 0
var avgprice = Number(0)
var qtyvalue = document.querySelectorAll('.quantity');
var amount = document.querySelectorAll(".pricetag");
for (var i=0;i<=qtyvalue.length-1;i++){
totalItems += Number(qtyvalue[i].value)
avgprice += Number(amount[i].textContent) * Number(qtyvalue[i].value)
}
totalqty.value = totalItems
totalamount.innerHTML = avgprice
cartnotification.innerHTML = totalItems
}
TotalQty()
}
 




const cakes = [{
  name:" cake item",
  image:"https://i.pinimg.com/originals/f9/62/8f/f9628fe466dbde785e709976000fe402.jpg",
  price:10
},
{
  name:" cake item",
  image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN",
  price:15
},
{
  name:" cake item",
  image:"https://i1.fnp.com/images/pr/l/v20191113144522/heavenly-chocolate-overload-cake-half-kg_1.jpg",
  price:10
}
]

const cupcakes = [{
  name:"cupcakes item",
  image:"https://thebusybaker.ca/wp-content/uploads/2019/09/best-ever-from-scratch-chocolate-cupcakes-fb-ig-3.jpg",
  price:15
},
{
  name:"cupcakes item",
  image:"https://www.handletheheat.com/wp-content/uploads/2015/02/Chocolate-Raspberry-Cupcakes-square.jpg",
  price:10
},
{
  name:"cupcakes item",
  image:"https://www.sweetestmenu.com/wp-content/uploads/2019/09/vanillacupcake18b.jpg",
  price:20
},
{
  name:"cupcakes item",
  image:"https://www.seekpng.com/png/detail/63-635215_bakery-sweets-blue-and-pink-cupcake-png.png",
  price:20
}
]

const doughnuts = [{
  name:"doughnuts items",
  image:"https://www.glutenfreepalate.com/wp-content/uploads/2016/03/Vanilla-Birthday-Cake-Donuts-4.2-720x405.jpg",
  price:10
},
{
  name:"doughnuts items",
  image:"https://www.tasteandtellblog.com/wp-content/uploads/2016/03/Homemade-Funfetti-Cake-Donut-Recipe-tasteandtellblog.com-5.jpg",
  price:15
},
{
  name:"doughnuts items",
  image:"https://sugarspiceslife.com/wp-content/uploads/2018/09/Baked-Blueberry-Cake-Donuts-1.jpg",
  price:10
}
]

const sweets = [{
  name:"sweets item",
  image:"https://files.heftycdn.com/wp-content/uploads/2019/02/70bb704f9ede5c428866b7a45ec6da6b-800x448.jpg",
  price:10
},
{
  name:"sweets item",
  image:"https://campingids.com/wp-content/uploads/2019/11/Holiday-English-Trifles_exps54788_CWCA2230450C03_02_20bC_RMS-1024x1024.jpg",
  price:15
}
]

export const products_database = [...cakes, ...cupcakes, ...doughnuts, ...sweets]

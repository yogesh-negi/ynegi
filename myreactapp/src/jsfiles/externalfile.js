import React from 'react'

const cakes = [{
  name:" cake item",
  image:"https://www.polespatisserie.com.au/wp-content/uploads/2019/06/Chocolate-Classic-Modern-Mudcake-Indulge-Max-Quality-Ganache-Deluxe-Oreos-Cookies-Cream-Waffles-Lots-Drip-Real-Birthday-Happy-Celebrations-Text-Personalised-Topper-Penrith-Cake-Shop-1200x1200.jpg",
  price:10
},
{
  name:" cake item",
  image:"https://lh3.googleusercontent.com/kCcETrYj9Y3PmiQJMobd4EZ_orOkjI1S1pwYPx45cH0_bIkoR9GQjifRfUy1GJawTzvlkFpD9HQG-Sj4-MFfzy0=w1200-h1200-c-rj-v1-e365",
  price:15
},
{
  name:" cake item",
  image:"https://i.pinimg.com/originals/5e/86/89/5e86891a3ed6999958c5336ab8268d71.jpg",
  price:10
}
]

const cupcakes = [{
  name:"cupcakes item",
  image:"https://api.recipe-feed.com/api/image/7077.jpeg",
  price:15
},
{
  name:"cupcakes item",
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Chocolate_Cupcakes_with_Raspberry_Buttercream_detail.jpg/1200px-Chocolate_Cupcakes_with_Raspberry_Buttercream_detail.jpg",
  price:10
},
{
  name:"cupcakes item",
  image:"https://i.pinimg.com/originals/b8/8f/19/b88f19ae8f0e2a2f89f8e8570b0e7220.jpg",
  price:20
},
{
  name:"cupcakes item",
  image:"https://sugargeekshow.com/wp-content/uploads/2020/05/vanilla-cupcake-recipe-featured.jpg",
  price:20
}
]

const doughnuts = [{
  name:"doughnuts items",
  image:"https://www.mensjournal.com/wp-content/uploads/2018/06/Doughnut.jpg?w=1200&h=1200&crop=1",
  price:10
},
{
  name:"doughnuts items",
  image:"https://lh3.googleusercontent.com/OKz9pNDNqu_Td3QIAKpNKUTlxWe2WiRT5LYntZFi7vLanDk_xuJ1VpPeMHsKSzOhDMrGqIMdhaDZYUC0ztEM_g=w1200-h1200-c-rj-v1-e365",
  price:15
},
{
  name:"doughnuts items",
  image:"https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/d/26/d26ce19e-8728-11e9-bd3d-3ba1d4d77ad0/5b86c0c9a2fd2.image.jpg?crop=1162%2C1162%2C310%2C0&resize=1200%2C1200&order=crop%2Cresize",
  price:10
}
]

const sweets = [{
  name:"sweets item",
  image:"https://www.lemontreedwelling.com/wp-content/uploads/2016/02/chocolate-pudding-cake-square.jpg",
  price:10
},
{
  name:"sweets item",
  image:"https://thethingswellmake.com/wp-content/uploads/2020/01/120-easy-panna-cotta-recipe-smooth-and-creamy-featured-1.jpg",
  price:15
}
]

export const products_database = [...cakes, ...cupcakes, ...doughnuts, ...sweets]

let initialvalue = 1
let width = -100

export function Modalpopup(e){
  initialvalue += Number(e.target.id)
  let carouselContainer = document.querySelector('.carousel_container');
  let carouselBody = document.querySelector('.carousel_body');
   width = width*e.target.id-100
  carouselBody.style.transform = `translate(${width}%)`
  carouselContainer.classList.add('carousel_opend')
}


export let NexSlide = () => {
  let carouselBody = document.querySelector('.carousel_body');
  let images = document.querySelectorAll('.carousel_body img');
  if(initialvalue > images.length-2) return false;

  initialvalue++
    width -= 100
  carouselBody.style.transform = `translate(${width}%)`
  carouselBody.style.transition = `transform 1s ease-in-out`
  carouselBody.addEventListener('transitionend', ()=>{
   if(images[initialvalue].id === 'firstImage')
    {
    initialvalue = 1
    width = -100
    carouselBody.style.transform = `translate(${width}%)`
    carouselBody.style.transition = `none`
  }
  })
  }

export function closeModal(){
  document.querySelector('.times').addEventListener('click',()=>{
    let carouselContainer = document.querySelector('.carousel_container');
    carouselContainer.classList.remove('carousel_opend')
    let carouselBody = document.querySelector('.carousel_body');
    initialvalue = 1
    width = -100
   carouselBody.style.transform = `translate(${width}%)`
   carouselBody.style.transition = `none`
  })
}

export let BackSlide = () => {
  if(initialvalue < 1) return false;
  let carouselBody = document.querySelector('.carousel_body');
  let images = document.querySelectorAll('.carousel_body img');
  initialvalue--
    width += 100
  carouselBody.style.transform = `translate(${width}%)`
  carouselBody.style.transition = `transform 1s ease-in-out`

  carouselBody.addEventListener('transitionend', ()=>{
   if(images[initialvalue].id === 'lastImage')
    {
    initialvalue = images.length-2
    width = -initialvalue * 100
    carouselBody.style.transform = `translate(${width}%)`
    carouselBody.style.transition = `none`
  }
  })
}



var itemdatabase = []
var arrayofitems = []

export function Addtocart(e){
  var element = document.querySelector("#"+e.target.id)
  var item_list = document.querySelector(".item_list")
  var item_name = element.attributes.itemname.value
  var item_price = element.attributes.price.value


  if(arrayofitems.lastIndexOf(item_name+"_"+item_price) === -1){
    arrayofitems.push(item_name+"_"+item_price)
    itemdatabase.push({"itemname":item_name, "itemprice":item_price})

    let row = item_list.insertRow(0)
    let col0 = row.insertCell(0)
    let col1 = row.insertCell(1)
    let col2 = row.insertCell(2)
    let col3 = row.insertCell(3)
    col0.innerHTML = "<input type='checkbox' title='Remove Item' id='removeitem'/>"
    col1.innerHTML = itemdatabase[itemdatabase.length-1].itemname
    col1.classList.add("itemname")
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
var totalprice = Number(0)
var qtyvalue = document.querySelectorAll('.quantity');
var amount = document.querySelectorAll(".pricetag");
for (var i=0;i<=qtyvalue.length-1;i++){
totalItems += Number(qtyvalue[i].value)
totalprice += Number(amount[i].textContent) * Number(qtyvalue[i].value)
}
totalqty.value = totalItems+" Nos."
totalamount.innerHTML = "$ "+totalprice
cartnotification.innerHTML = totalItems
}
TotalQty()

var checkbox = document.getElementById('removeitem');
checkbox.addEventListener('click',RemoveItem)
function RemoveItem(){
if(checkbox.checked){
let itemName = checkbox.parentNode.parentNode.children[1].textContent
let itemPrice = checkbox.parentNode.parentNode.children[2].textContent

if(arrayofitems.lastIndexOf(itemName+"_"+itemPrice) !== -1){
arrayofitems.splice(arrayofitems.indexOf(itemName+"_"+itemPrice),1)
}

itemdatabase.forEach((val,i)=>{
if(val.itemname === itemName && val.itemprice === itemPrice){
 delete val.itemname
 delete val.itemprice
}
})

setTimeout(()=>{
  checkbox.parentNode.parentNode.remove()
  TotalQty()
},200)
}
}

}



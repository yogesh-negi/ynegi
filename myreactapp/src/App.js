import './btstyle.css'
import React, {useState, useEffect} from 'react';
import './App.css';
import logoimage from './images/logoimage.png'
import search from './images/search.png'
import './jsfiles/externalfile.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart , faBars } from '@fortawesome/free-solid-svg-icons'
import aboutus from './images/aboutus.jpg'
import {products_database, Addtocart, Next, Prev, Modalpopup, closeModal, NexSlide, BackSlide} from './jsfiles/externalfile.js'
import coverimage from './images/coverimage.jpg'

function App() {

useEffect(()=>{  
closeModal()
})

var [find, findValue] = useState('')

var findFunction = (e) => {
  
  return e.target.id?findValue(find = e.target.id):e.target.value?findValue(find = e.target.value):false
}

var products = products_database.filter((val,i,array)=>{
  const x = val.name
   return find.length===1?true:find==="" || find==="All"?true:find !== "" && x.match(find)?true:false
})


  var toggleMenu = () => {
    var navbar = document.querySelector('#navbar')
      //navbar.classList.toggle("show")
      if(navbar.className==="navbar show"){
        navbar.className = "navbar hide"
      } else {
        navbar.className = "navbar show"
      }
      }

  return (
    <div>
    <span>
    <img src={coverimage} alt="coverimage" className="banner_image"/>
    </span>
    <header className="header"> 
    <img className="logoimage" alt="logo" src={logoimage}/>
    <span className="bar_icon">
    <FontAwesomeIcon onClick={toggleMenu} id="bars" icon={faBars} />
    </span>
     <ul id="navbar" className="navbar">
     <li className="home"> home </li>
     <li className="about"> about </li>
     <li className="store"> store </li>
     </ul>
     <div className="phone_and_cart_wrapper">
     <div className="phone_wrapper">
     <span className="receiver_icon">&#128222;</span><span>&#43;</span> 123 456 7890
     </div>
     <div className="cart_wrapper">
     <FontAwesomeIcon className="cart_icon mr-3" icon={faShoppingCart} /> <span id="cartnotification">0</span>
     </div>
     </div>
     </header>
     <section className="banner">
     <h1 className="banner_heading" ><span> welcome to </span> <span>grandma&apos;s </span></h1>
     <button onClick={()=>{window.scrollBy({top:1300})}} className="btn"> EXPLORE </button>
     </section>
     <section className="aboutus_wrapper">
     <div className="aboutus">
     <h1><span> About </span> <span>us</span> </h1>
     <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry &apos;s standard dummy text ever since the <code>1500</code><code>s</code>, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
     <button className="btn"> EXPLORE </button>
     </div>
     <div className="aboutus_image">
     <img src={aboutus} alt="aboutusimage" />
     </div>
     </section>

     <section className="product-section">
     <h1> <span> our </span> <span> store </span> </h1>
     <div className="catagories">
     <button onClick={findFunction} id="All" className="btn"> All </button> 
     <button onClick={findFunction} id=" cake" className="btn"> cakes </button> 
     <button onClick={findFunction} id="cupcakes" className="btn"> Cupcakes </button> 
     <button onClick={findFunction} id="sweets" className="btn"> sweets </button> 
     <button onClick={findFunction} id="doughnuts" className="btn"> doughnuts </button>
     </div>
     <div className="search_wrapper btn-group"> <img className="search_image btn" alt="Search" src={search}/><input type="search" onChange={findFunction} placeholder="item....."/> </div>
      <section className="table-responsive">
     <table className="table table-hover">
     <thead>
     <tr>
     <th>
     select
     </th>
     <th>
     item name
     </th>
      <th>
      price
     </th>
     <th>
     qty
     </th>
     </tr>
     </thead>
     <tbody className="item_list">
     <tr><td></td><td>total </td><td id="totalamount"> - </td><td><input type='text' id="total" className='totalqty' value='0' readOnly={true} /></td></tr>
     
     </tbody>
     <tfoot>
     <tr>
     </tr>
     </tfoot>
     </table>
     </section>
     <div id="product-section" className="item_container">
     <div className="carousel_container">
     <section className="carousel_wrapper">
     <span className="times"></span>
    <div className="carousel_body">
    <img id = "lastImage" src = {products[products.length-1].image}/>
    {
      products.map((product,i,array)=>{
         return (<>
          <img title={i} src = {product.image}/> 
          </>)
      })
    }
    <img id="firstImage" src = {products[0].image}/>
    </div>
    </section>
    <section className="slideButton_wrapper">
    <div className="btn backarrow" onClick={BackSlide}> &#x27A4; </div>
    <div className="btn nextarrow" onClick={NexSlide}> &#x27A4; </div>
    </section>
    </div>
     {
      products.map((val,i,array)=>
       (
      <div className="card_wrapper" key={i}>
      <div className="image_wrapper"><img onClick={Modalpopup} id={i} src={val.image} alt="product"/><div id={'demo'+i} onClick={Addtocart} itemname={val.name} price={val.price} className="addtocart"></div>
      </div>
      <div className="item_name_wrapper"><p>{val.name}</p><p>$ {val.price}</p></div>
      </div>)
      )
   }
     </div>
     </section>
    </div>

  );
}

export default App;

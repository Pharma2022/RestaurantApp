import {menuArray} from "./data.js"
import {orderArr} from "./utility.js"

export const renderMenu= ()=>   document.getElementById("menu").innerHTML= 
menuArray.map( item => 

        `<div class= "item" id="${item.id}">
                <span class= "emoji">${item.emoji}</span>
                    <div class= "itemComponents">
                        <h2>${item.name}</h2>
                        <h3 class= "light" >${item.ingredients}</h3>
                        <h2 class= "price" >$ ${item.price} </h2>
        
                    </div>
                              <span class= "itemCounter"><h2 id="${item.name}" class ="plus pointer" data-food= "${item.uuid}">+<h2/></span>
                         </div>
               <div>   <hr /></div>`).join("")
    
    
export const  renderOrder= ()=>{
    let orderHtml=""
    let orderTotal=0
        
    orderHtml= `<h1 class="orderTitle">Your order</h1>`

    orderArr.forEach(myOrder =>{
        orderHtml+=
                `<div class="orderComponents">
                <h2>${myOrder.name}</h2><span class="light removeBtn pointer" data-remove="${myOrder.uuid}">remove</span>
                <span><h2 class="price">$${myOrder.price}</h2></span>
                </div>
                   <hr class= "ruler" />`
        orderTotal+=myOrder.price })
    
       document.getElementById("totalPrice").innerHTML=  orderArr.length < 1? 
       "":`<h2>Total Price</h2> <h2 class="orderTotal">$${orderTotal} </h2>`
       
       document.getElementById("complete").style.display= orderArr.length <1 ?
       "none": complete.style.display="block"
       
      document.getElementById("order").innerHTML=orderArr.length <1?
       "":orderHtml  }

import {menuArray} from "./data.js"
import{renderOrder} from "./render.js"
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export let orderArr = []
export const pay= ()=>{document.getElementById("modal").style.display="none"  
document.getElementById("order").innerHTML= `<p class="thanks" >Thanks ${document.getElementById("name").value} , Your order is on the way</p>`}
    
export const  targetfoodObj=(myArray,food) =>  myArray.filter(item =>   item.uuid === food )[0]

export const  addItem= foodId=>{  
            orderArr.push({
            name:targetfoodObj(menuArray,foodId).name,
            price:targetfoodObj(menuArray,foodId).price,
            uuid: uuidv4()})
            renderOrder()   }

export const  removeItem = foodId =>{
    const index = orderArr.indexOf( targetfoodObj(orderArr,foodId))
    orderArr.splice(index ,1)

renderOrder()}

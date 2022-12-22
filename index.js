import {renderMenu} from "./render.js"
import {pay,addItem,removeItem} from "./utility.js"

// event listeners

document.addEventListener("click", e =>{
    e.preventDefault()
    e.target.dataset.food? addItem(e.target.dataset.food)
    :e.target.dataset.remove? removeItem(e.target.dataset.remove)
    :e.target.id === 'purchaseBtn'? document.getElementById("modal").style.display="flex"
    :e.target.id === "closeBtn" ? document.getElementById("modal").style.display="none"
    :e.target.id==="pay"?pay():"" })

renderMenu()

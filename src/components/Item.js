// import React from "react";
import React, { useState } from "react";

function Item({ name, category }) {

  const [cartStatus, setCartStatus] = useState(false)

  function setCart(){
      setCartStatus(currentStatus => !currentStatus)
    }

  

  return (
    <li  className={cartStatus ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={setCart} className={cartStatus ? 'remove' : 'add'}> {cartStatus ? "Remove From Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;

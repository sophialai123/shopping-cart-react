import React, { useState } from "react";


export default function ShopCarts(props) {

  const { img, name, price, addToCart, item, changeText, inputText } = props;

  function handleChange(event) {
    changeText(event.target.value);
  }

  return (
    <div className="shopCard">
      <img src={img} alt={img} />
      <div className="carInfo">
        <h3>{name}</h3>
        <h3>$ {price}.00</h3>
        <label>Quantity: </label>
        <input onChange={handleChange} value={inputText} min="0" type='number' /><br />
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>)

}
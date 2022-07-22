import React, { useState } from "react";

export default function ShopCarts(props) {
  //has own state input for each card
  const [inputText, setInputText] = useState(0);

  // Remove
  const { addToCart, item } = props;
  const { img, name, price } = props.item

  function handleChange(event) {
    console.log(event.target.value)
    setInputText(event.target.value);

  }

  return (
    <div className="shopCard">
      <img src={img} alt={img} />
      <div className="carInfo">
        <h3>{name}</h3>
        <h3>$ {price}.00</h3>
        <label>Quantity: </label>
        <input onChange={handleChange} value={inputText} min="0" type='number' required /><br />
        <button onClick={() => addToCart(item, inputText)}>Add to Cart</button>
      </div>
    </div>)

}
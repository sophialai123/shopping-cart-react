import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Hearder(props) {
  const { addToCart, item, addItems } = props;

  return (
    <div className='hearder'>
      <h1>Shopping Carts</h1>
      <div className='cartIcon' >
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </div>
    </div>
  )
}


// {addItems.map((item) => {
//   return (
//     <div>
//       <h3 key={item.id}>{item.qty}</h3>
//     </div>
//   )
// })}
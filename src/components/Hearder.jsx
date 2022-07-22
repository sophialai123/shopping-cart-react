import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Hearder(props) {
  const { addItems } = props;
  const totalItems = addItems.reduce((preValue, currentValue) => preValue + currentValue.qty, 0);

  return (
    <div className='hearder'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1>Shopping Carts</h1>
      </Link>
      <Link to='/Order'>
        <div className='cartIcon'>
          <div>
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
            <span className='cartqty'>
              {totalItems}
            </span>
          </div>

        </div>
      </Link>
    </div>
  )
}

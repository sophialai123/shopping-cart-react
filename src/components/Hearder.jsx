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
        <h1>Coffee Capsules World</h1>
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



/* // <a class="back-button" href="#">
<img src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png" alt="back" />
</a > */



/* <div className="search">
        <a className="mobile-search" href="#">
          <img src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png" alt="search" />
        </a>
        <form action="#" method="get" className="search-form">
          <input type="search" placeholder="Search for Vegetables and Fruits" className="search-keyword" />
          <button className="search-button" type="submit">
          </button>
        </form>
      </div> */
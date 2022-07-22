import { useState } from 'react';
import './App.css';
import ShopCarts from './components/ShopCarts';
import { ProductData } from './components/ProductData';
import OrderItems from './components/OrderItems';
import Hearder from './components/Hearder';

function App() {

  const [addItems, setAddItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  console.log(addItems)

  function addToCart(item, quantity) {
    const existItem = addItems.find(x => x.id === item.id);
    if (existItem) {
      let items = addItems.map((x => {
        if (x.id === item.id) { return {
          ...existItem, "qty": existItem.qty + parseInt(quantity)
        }
        } else {
          return x
        }
      }))
      setAddItems(items)
    } else {
      setAddItems([...addItems, { ...item, "qty": quantity }])
    }
  }


  //add only one at time
  const addOneItem = (item) => {
    const existItem = addItems.find(x => x.id === item.id);
    if (existItem) {
      setAddItems(addItems.map(x => x.id === item.id ? { ...existItem, qty: existItem.qty + 1 } : x))
    } else {
      setAddItems([...addItems, { ...item, qty: 1 }])
    }
  }

  //delete items
  const toRemove = item => {
    const existItem = addItems.find(x => x.id === item.id);
    if (existItem.qty === 1) {
      setAddItems(addItems.filter(x => x.id !== item.id))
    } else {
      setAddItems(addItems.map(x => x.id === item.id ? { ...existItem, qty: existItem.qty - 1 } : x))
    }
  }


  // const checkOut = (item) => {
  //   setShowCart(addItems)
  // }

  return (
    <div className="App">
      <Hearder />
      <div className='container'>
        { /* loop though each product  */}
        {
          ProductData.map((item) => {
            return (
              <ShopCarts
                key={item.id} //unquie key
                addToCart={addToCart}
                item={item}
                toRemove={toRemove}
              />)
          })
        }
      </div>
      <OrderItems addItems={addItems} addToCart={addToCart} toRemove={toRemove} addOneItem={addOneItem} />

    </div>
  );
}

export default App;





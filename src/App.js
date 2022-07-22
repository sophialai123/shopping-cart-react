import { useState } from 'react';
import './App.css';
import ShopCarts from './components/ShopCarts';
import { ProductData } from './components/ProductData';
import OrderItems from './components/OrderItems';
import Hearder from './components/Hearder';

function App() {

  const [addItems, setAddItems] = useState([])
  const [inputText, setInputText] = useState(0);
  const [showCart, setShowCart] = useState(false)
  console.trace(inputText)
  console.log(addItems)

  function addToCart(item, quantity) {
    //find returns the first true condition
    console.log(item, quantity)
    const existItem = addItems.find(x => x.id === item.id);
    if (existItem) {
      //inputText value is a string
      console.log(existItem)
      setAddItems(addItems.map(x => x.id === item.id ? { ...existItem, "qty": qty + parseInt(quantity) } : x))
      // setInputText(0)
    } else {
      console.log(addItems, item, quantity)
      setAddItems([...addItems, { ...item, "qty": quantity }])
      // setInputText(0)
    }
    //console.log(addItems)
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


  const checkOut = (item) => {
    setShowCart(addItems)
  }

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
                img={item.img}
                name={item.name}
                price={item.price}
                addToCart={addToCart}
                item={item}
                addItems={addItems}
                toRemove={toRemove}
                changeText={setInputText}
                inputText={inputText}
              />)
          })
        }
      </div>
      <OrderItems addItems={addItems} addToCart={addToCart} toRemove={toRemove} addOneItem={addOneItem} inputText={inputText} />

    </div>
  );
}

export default App;





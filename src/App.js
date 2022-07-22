import { useState } from 'react';
import './App.css';
import ShopCarts from './components/ShopCarts';
import { ProductData } from './components/ProductData';
import OrderItems from './components/OrderItems';
import Hearder from './components/Hearder';

function App() {

  const [addItems, setAddItems] = useState([])
  const [inputText, setInputText] = useState("");

  const addToCart = (item) => {
    //find returns the first true condition
    const existItem = addItems.find(x => x.id === item.id);
    if (existItem) {
      //inputText value is a string
      setAddItems(addItems.map(x => x.id === item.id ? { ...existItem, qty: existItem.qty + parseInt(inputText) } : x))
    } else {
      setAddItems([...addItems, { ...item, qty: parseInt(inputText) }])
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
              />)
          })
        }
      </div>
      <OrderItems addItems={addItems} addToCart={addToCart} toRemove={toRemove} addOneItem={addOneItem} inputText={inputText} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import ShopCarts from './components/ShopCarts';
import { ProductData } from './components/ProductData';
import OrderItems from './components/OrderItems';
import Hearder from './components/Hearder';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [addItems, setAddItems] = useState([])

  function addToCart(item, quantity) {
    const existItem = addItems.find(x => x.id === item.id);
    if (existItem) {
      let items = addItems.map((x => {
        if (x.id === item.id) {
          return {
            ...existItem, "qty": existItem.qty + parseInt(quantity)
          }
        } else {
          return x
        }
      }))
      setAddItems(items)
    } else {
      setAddItems([...addItems, { ...item, "qty": parseInt(quantity) }])
    }

  }

  console.log(addItems)

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
    <Router>
      <div className="App">
        <Hearder addItems={addItems} />
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
      </div>
      <Routes>
        <Route path="/Order" element={<OrderItems addItems={addItems} toRemove={toRemove} addOneItem={addOneItem} />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



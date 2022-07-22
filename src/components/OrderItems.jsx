
export default function OrderItems(props) {
  const { addItems, toRemove, addOneItem } = props;
  const totalPrice = addItems.reduce((preValue, currentValue) => preValue + currentValue.price * currentValue.qty, 0);

  return (
    <div className="orderContainer">
      <h1>Order Details</h1>
      {addItems.map((item) => {
        return (
          <div key={item.id} className="orderItems">
            <h3>{item.name}</h3>
            <button onClick={() => addOneItem(item)} className="add">
              +
            </button>
            <button onClick={() => toRemove(item)} className="remove">
              -
            </button>
            <h3>{`Quanity: ${item.qty} x $${item.price}`}</h3>
          </div>
        )
      })}
      <h3 className='totalPrice'>Total Price: ${totalPrice}</h3>
    </div>
  )

}




// <div>
//   {addItems.length === 0 && <div>Cart Is Empty</div>}
// </div>
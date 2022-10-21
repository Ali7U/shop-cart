import React from "react";

function ShpCart(props) {
  const { cart, onAdd, onRem } = props;

  const itemPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const tax = itemPrice * 0.15;
  const totalPrice = itemPrice + tax

  return (
    <div className="cart">
      <h2>cart</h2>
      <hr />
      <div>{cart.length === 0 && <div>cart is empty</div>}</div>

      {cart.map((item) => (
        <div className="row text-right" key={item.id}>
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
            <button className="rem" onClick={() => onRem(item)}>-</button>
          </div>
          <div>{item.qty} X {item.price.toFixed(2)}</div>
        </div>
      ))}
      {cart.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Item Price</div>
            <div className="col-2">{itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">tax Price</div>
            <div className="col-2">{tax.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">total Price</div>
            <div className="col-2">{totalPrice.toFixed(2)}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShpCart;

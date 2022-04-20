import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Carrito</h2>
      <div>
        {cartItems.length === 0 && <div>Esta vacio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Precio</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            { <div className="row">
              <div className="col-2">Impuestos porque puedo y quiero ponerte impuestos</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div> }


            <div className="row">
              <div className="col-2">
                <strong>Precio Total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Te dije que no toques')}>
                No toques
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

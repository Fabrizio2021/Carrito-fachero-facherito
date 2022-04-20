import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Prueba de carrito Pro</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cartera{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Iniciar</a>
      </div>
    </header>
  );
}

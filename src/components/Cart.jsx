import React, { useState, useEffect } from 'react';
import '../css/Cart.css';
import cartData from '../api/cart.json';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Data request
    setCart(cartData);
  }, []);

  return (
    <div className='cart'>
      {cart.length && cart.map((cartItem) => (
        <div className='cartDetail' key={cartItem.id}>
          <img className='dataImage' src={cartItem.image} alt={cartItem.title} />
          <h3 className='dataTitle'>{cartItem.title}</h3>
          <p className='dataDescription'>{cartItem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

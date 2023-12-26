import React, { useState, useEffect } from 'react';
import technologyData from '../api/categoriespage/technology.json';
import "../css/Basket.css"

const Basket = ({ cart, clearCart }) => {
  const totalAmount = cart.reduce((total, item) => total + (item.price || 0), 0);

  return (
    <div className="technologyBasketContainer">
      <h3 className='basket'>Sepetim</h3>
      <ul className='basket-list'>
        {cart.map(item => (
          <li key={item.id} className='basket-item'>
            <span className='itemName'>{item.title}</span>
            <span className='itemPrice'>{item.price} TL</span>
          </li>
        ))}
      </ul>
      <hr className='basket-divider' />
      <p className='basketTotal'>Toplam Tutar: {totalAmount} TL</p>
      <button className='basketClear' onClick={clearCart}>Sepeti Boşalt</button>
    </div>
  );
};

const Technology = () => {
  const [technology, setTechnology] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // data isteği 
    setTechnology(technologyData);
    
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className="watercontainer">
        <div className='data'>
          {technology.length && technology.map(product => (
            <div className='cartDetail' key={product.id}>
              <button className='pageButton' onClick={() => addToCart(product)}>+</button>
              <img className='pageImage' src={product.image} alt="" />
              <h3 className='dataTitle'>{product.price} TL </h3>
              <h3 className='pageTitle'>{product.title}</h3>
              <h3 className='pageDesc'> {product.description} </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <Basket cart={cart} clearCart={clearCart} />
      </div>
    </>
  );
};

export default Technology;

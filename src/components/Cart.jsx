import React from 'react'
import '../css/Cart.css'
import { useState, useEffect } from 'react'
import cartData  from '../api/cart.json'


 const Cart = () => {

   const [cart, Setcart] = useState([]);
    useEffect(() => {
    //data isteği 
   Setcart(cartData);
    },[])


  return (
    <div className='cart'>
      {cart.length && cart.map(cart => (
        <div className='cartDetail'>
          <img className='dataImage' src= {cart.image} />
          <h3 className='dataTitle'>{cart.title}</h3>
          <p className='dataDescription'> {cart.description} </p>
        </div>
      ))}
    </div>
  )
}


export default Cart ;
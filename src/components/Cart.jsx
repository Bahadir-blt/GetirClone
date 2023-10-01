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
          <img src= {cart.image} />
          <h5>{cart.title}</h5>
          <p> {cart.description} </p>
        </div>
      ))}
    </div>
  )
}


export default Cart ;
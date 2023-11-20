import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import ıcecreamData from '../api/categoriespage/ıcecream.json'





const IceCream = () => {
  
 
  const [ıcecream, Setıcecream] = useState([]);
    useEffect(() => {
    //data isteği 
    Setıcecream(ıcecreamData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {ıcecream.length && ıcecream.map(ıcecream => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {ıcecream.image} alt="" />
          <h3 className='dataTitle'>{ıcecream.price} TL </h3>
          <h3 className='pageTitle'>{ıcecream.title}</h3>
          <h3 className='pageDesc'> {ıcecream.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default IceCream ;
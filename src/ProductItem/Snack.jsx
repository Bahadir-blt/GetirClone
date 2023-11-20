import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import snackData from '../api/categoriespage/snack.json'





const Snack = () => {
  
 
  const [snack, Setsnack] = useState([]);
    useEffect(() => {
    //data isteği 
    Setsnack(snackData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {snack.length && snack.map(snack => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {snack.image} alt="" />
          <h3 className='dataTitle'>{snack.price} TL </h3>
          <h3 className='pageTitle'>{snack.title}</h3>
          <h3 className='pageDesc'> {snack.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Snack ;
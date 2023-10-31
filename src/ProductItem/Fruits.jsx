import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import fruitsData from '../api/categoriespage/fruits.json'





const Fruits = () => {
  
 
  const [fruits, Setfruits] = useState([]);
    useEffect(() => {
    //data isteği 
    Setfruits(fruitsData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {fruits.length && fruits.map(fruits => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {fruits.image} alt="" />
          <h3 className='dataTitle'>{fruits.price} TL </h3>
          <h3 className='pageTitle'>{fruits.title}</h3>
          <h3 className='pageDesc'> {fruits.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Fruits ;
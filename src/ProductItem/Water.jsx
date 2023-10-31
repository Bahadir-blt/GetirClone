import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import waterData from '../api/categoriespage/water.json'





const Water = () => {
  
 
  const [water, Setwater] = useState([]);
    useEffect(() => {
    //data isteği 
   Setwater(waterData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {water.length && water.map(water => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {water.image} alt="" />
          <h3 className='dataTitle'>{water.price} TL </h3>
          <h3 className='pageTitle'>{water.title}</h3>
          <h3 className='pageDesc'> {water.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Water ;
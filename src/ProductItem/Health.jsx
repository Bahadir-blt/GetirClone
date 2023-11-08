import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import healthData from '../api/categoriespage/health.json'





const Health = () => {
  
 
  const [health, Sethealth] = useState([]);
    useEffect(() => {
    //data isteği 
    Sethealth(healthData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {health.length && health.map(health => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {health.image} alt="" />
          <h3 className='dataTitle'>{health.price} TL </h3>
          <h3 className='pageTitle'>{health.title}</h3>
          <h3 className='pageDesc'> {health.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Health ;
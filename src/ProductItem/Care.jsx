import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import careData from '../api/categoriespage/care.json'





const Care = () => {
  
 
  const [care, Setcare] = useState([]);
    useEffect(() => {
    //data isteği 
    Setcare(careData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {care.length && care.map(care => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {care.image} alt="" />
          <h3 className='dataTitle'>{care.price} TL </h3>
          <h3 className='pageTitle'>{care.title}</h3>
          <h3 className='pageDesc'> {care.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Care ;
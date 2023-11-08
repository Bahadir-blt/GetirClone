import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import personalData from '../api/categoriespage/personal.json'





const Personal = () => {
  
 
  const [personal, Setpersonal] = useState([]);
    useEffect(() => {
    //data isteği 
    Setpersonal(personalData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {personal.length && personal.map(personal => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {personal.image} alt="" />
          <h3 className='dataTitle'>{personal.price} TL </h3>
          <h3 className='pageTitle'>{personal.title}</h3>
          <h3 className='pageDesc'> {personal.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Personal ;
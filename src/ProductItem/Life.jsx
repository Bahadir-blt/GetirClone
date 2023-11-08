import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import lifeData from '../api/categoriespage/life.json'





const Life = () => {
  
 
  const [life, Setlife] = useState([]);
    useEffect(() => {
    //data isteği 
    Setlife(lifeData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {life.length && life.map(life => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {life.image} alt="" />
          <h3 className='dataTitle'>{life.price} TL </h3>
          <h3 className='pageTitle'>{life.title}</h3>
          <h3 className='pageDesc'> {life.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Life ;
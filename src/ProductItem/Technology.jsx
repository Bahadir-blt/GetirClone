import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import technologyData from '../api/categoriespage/technology.json'





const Technology = () => {
  
 
  const [technology, Settechnology] = useState([]);
    useEffect(() => {
    //data isteği 
    Settechnology(technologyData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {technology.length && technology.map(technology => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {technology.image} alt="" />
          <h3 className='dataTitle'>{technology.price} TL </h3>
          <h3 className='pageTitle'>{technology.title}</h3>
          <h3 className='pageDesc'> {technology.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Technology ;
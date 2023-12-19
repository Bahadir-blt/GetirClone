import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import babyData from '../api/categoriespage/baby.json'
import List from '../components/List'





const Baby = () => {
  
 
  const [baby, Setbaby] = useState([]);
    useEffect(() => {
    //data isteği 
    Setbaby(babyData);
    },[])
 
  
    return (
      <>
    
       <div className="watercontainer">
        
       <div className='data'>
      {baby.length && baby.map(baby => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {baby.image} alt="" />
          <h3 className='dataTitle'>{baby.price} TL </h3>
          <h3 className='pageTitle'>{baby.title}</h3>
          <h3 className='pageDesc'> {baby.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
    
      </>
    
    )
}

export default Baby ;
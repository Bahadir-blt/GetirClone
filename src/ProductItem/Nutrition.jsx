import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import nutritionData from '../api/categoriespage/nutrition.json'





const Nutrition = () => {
  
 
  const [nutrition, Setnutrition] = useState([]);
    useEffect(() => {
    //data isteği 
    Setnutrition(nutritionData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {nutrition.length && nutrition.map(nutrition => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {nutrition.image} alt="" />
          <h3 className='dataTitle'>{nutrition.price} TL </h3>
          <h3 className='pageTitle'>{nutrition.title}</h3>
          <h3 className='pageDesc'> {nutrition.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Nutrition ;
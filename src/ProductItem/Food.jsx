import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import foodData from '../api/categoriespage/Food.json'


const Food = () => {
  
 
  const [food, Setfood] = useState([]);
    useEffect(() => {
    //data isteği 
    Setfood(foodData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {food.length && food.map(food => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {food.image} alt="" />
          <h3 className='dataTitle'>{food.price} TL </h3>
          <h3 className='pageTitle'>{food.title}</h3>
          <h3 className='pageDesc'> {food.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Food ;
import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import milkData from '../api/categoriespage/milk.json'

const Milk = () => {
  
 
  const [milk, Setmilk] = useState([]);
    useEffect(() => {
    //data isteği 
    Setmilk(milkData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {milk.length && milk.map(milk => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {milk.image} alt="" />
          <h3 className='dataTitle'>{milk.price} TL </h3>
          <h3 className='pageTitle'>{milk.title}</h3>
          <h3 className='pageDesc'> {milk.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Milk ;
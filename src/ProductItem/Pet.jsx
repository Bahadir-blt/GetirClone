import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import petData from '../api/categoriespage/pet.json'





const Pet = () => {
  
 
  const [pet, Setpet] = useState([]);
    useEffect(() => {
    //data isteği 
    Setpet(petData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {pet.length && pet.map(pet => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {pet.image} alt="" />
          <h3 className='dataTitle'>{pet.price} TL </h3>
          <h3 className='pageTitle'>{pet.title}</h3>
          <h3 className='pageDesc'> {pet.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Pet ;
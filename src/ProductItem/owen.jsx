import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import owenData from '../api/categoriespage/owen.json'





const Owen = () => {
  
 
  const [owen, Setowen] = useState([]);
    useEffect(() => {
    //data isteği 
    Setowen(owenData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {owen.length && owen.map(owen => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {owen.image} alt="" />
          <h3 className='dataTitle'>{owen.price} TL </h3>
          <h3 className='pageTitle'>{owen.title}</h3>
          <h3 className='pageDesc'> {owen.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Owen ;
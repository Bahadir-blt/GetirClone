import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'


const waterData =  [
    {
        id: 1,
        price: 66.99,
        title: 'Kuzeyden Su ',
        image: 'src/image/Page Image/WaterPage/kuzeydensu6.jpg',
        description : " 12 X 330 ML "
      },
      {
        id: 1,
        price: 66.99,
        title: 'Kuzeyden Su ',
        image: 'src/image/Page Image/WaterPage/kuzeydensu6.jpg',
        description : " 12 X 330 ML "
      },
      {
        id: 1,
        price: 66.99,
        title: 'Kuzeyden Su ',
        image: 'src/image/Page Image/WaterPage/kuzeydensu6.jpg',
        description : " 12 X 330 ML "
      },
]
const Water = () => {
 
  const [water, Setwater] = useState([]);
    useEffect(() => {
    //data isteği 
   Setwater(waterData);
    },[])
 
  
    return (
      <>
       
       <div className='water'>
      {water.length && water.map(water => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {water.image} alt="" />
          <h3 className='dataTitle'>{water.price} TL </h3>
          <h3 className='pageTitle'>{water.title}</h3>
          <h3 className='pageDesc'> {water.description} </h3>
          
        </div>
        
      ))}
      
    </div>
       
      </>
    
    )
}

export default Water ;
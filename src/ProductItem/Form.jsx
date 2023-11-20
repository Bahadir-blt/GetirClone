import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import formData from '../api/categoriespage/form.json'





const Form = () => {
  
 
  const [form, Setform] = useState([]);
    useEffect(() => {
    //data isteği 
    Setform(formData);
    },[])
 
  
    return (
      <>
       <div className="watercontainer">
       <div className='data'>
      {form.length && form.map(form => (
        <div className='cartDetail'>
          <button className='pageButton'>+</button>
         <img className='pageImage' src= {form.image} alt="" />
          <h3 className='dataTitle'>{form.price} TL </h3>
          <h3 className='pageTitle'>{form.title}</h3>
          <h3 className='pageDesc'> {form.description} </h3>
          
        </div>
        
      ))}
      
    </div>
    </div>
      </>
    
    )
}

export default Form ;
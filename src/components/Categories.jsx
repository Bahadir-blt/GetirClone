import React, { useState , useEffect } from 'react'
import '../css/Categories.css'
import categoryData from '../api/categories.json'
import Category from './ui/category'


 const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect (() => {
     setCategories (categoryData);
  }, []);

  return (
    <>
     <div className='categories'>
    <div className='categoriesHeader'>
      <h3 className='categoriesText'>Kategoriler</h3>
      <div className='categoriesItem'>
    {categories && categories.map((category,index) => <Category key = {index} category={category} />)}

      </div>
    </div>

    </div>
    </>
   
  )
}


export default Categories ;
import React from 'react'
import '../css/Page.css'
import { useState, useEffect } from 'react'
import waterData from '../api/categoriespage/water.json'
import { useLoaderData } from 'react-router-dom'

export function loader({ params }) {
  return (
    params.kategori
  )
}

const Water = () => {
  const kategori = useLoaderData()
  console.log(kategori);

  const [water, Setwater] = useState(waterData);
  useEffect(() => {

  }, [])


  return (
    <>
      <div className="watercontainer">
        <div className='data'>
          {water.length && water.map(water => (
            <div className='cartDetail'>
              <button className='pageButton'>+</button>
              <img className='pageImage' src={water.image} alt="" />
              <h3 className='dataTitle'>{water.price} TL </h3>
              <h3 className='pageTitle'>{water.title}</h3>
              <h3 className='pageDesc'> {water.description} </h3>

            </div>

          ))}

        </div>
      </div>
    </>

  )
}

export default Water;
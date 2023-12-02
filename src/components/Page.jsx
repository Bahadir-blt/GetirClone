import React, { useState } from 'react'
import '../css/Page.css'

import List from './List'
 export default function Page() {


 const [basket, setBasket] = useState ([]) ;


//     const [categories, setCategories] = useState("all")


//     const filterData = [
       
     
//             {
//                 id: 1,
//                 image: "src/image/Page Image/Su İçecek.jpeg",
//                 title: "Su & İçecek",
//                 categories: "Meyve-Sebze"
//             },
//             {
//                 id: 2,
//                 image: "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
//                 title: "Dakikalar içinde kapınızda",
//                 categories: "Meyve-Sebze"
//             },
//             {
//                 id: 3,
//                 image: "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
//                 title: "Binlerce çeşit mutluluk",
//                 categories: "Su"
//             },
       
//     ]


//     let filter =  filterData.filter(x => {
//         if ( categories === "all") return x
//         return  x.categories === categories

//     }).map(x => {
//         return (
//             <li key={x.id} >
//                  {x.categories}
//                 <img src={x.image} />
//                 <p> {x.title} </p>
//             </li>

//         )
//     })

//     const oneCategories = []

//     filterData.forEach(data => {
//         if (oneCategories.includes(data.categories)) return
//         oneCategories.push(data.categories)
//     })

//  const renderCategories = oneCategories.map (x => {
//     return <li key={x} onClick={changeCategories} >{x}</li>
//  } )  


// function changeCategories (e){
//     setCategories (e.target.innerText) 
// }


// console.log(renderCategories);

    return (
        <>

         <List/>
   

        </>
    )
}
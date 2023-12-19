import React, { useState } from 'react'
import '../css/Page.css'
import { Link, Outlet, RouterProvider, createBrowserRouter, } from 'react-router-dom'
import Water from '../ProductItem/Water'
import Basket from './Basket'

 export default function List () {

 const [basket, setBasket] = useState ([]) ;


    return (
        <>  
            {/*     Kategoriler Barinin Baslangici */}
            <div className="pageContainer">
                <div className="leftBar">
                    <p className='PageCategories'> Kategoriler </p>
                    {/* {renderCategories}
                    {filter} */}
                    { <ul >
                    <li><Link to="/Kategoriler/Su-İçecek">   <img src="/src/image/Page Image/Su İçecek.jpeg"     alt="Su & İçecek"/>     <a href="#">Su & İçecek</a></Link></li>
                    <li><Link to="/Kategoriler/Meyve-Sebze"> <img src="/src/image/Page Image/Meyve Sebze.jpeg"   alt="Meyve & Sebze"/>   <a href="#">Meyve & Sebze</a></Link></li>
                    <li><Link to="/Kategoriler/Fırından">    <img src="/src/image/Page Image/Fırından.jpeg"      alt="Fırından"/>        <a href="#">Fırından</a></Link></li>
                    <li><Link to="/Kategoriler/Temel Gıda">  <img src="/src/image/Page Image/Temel Gıda.jpeg"    alt="Temel Gıda"/>      <a href="#">Temel Gıda</a></Link></li>
                    <li><Link to="/Kategoriler/Atıştırmalık"> <img src="/src/image/Page Image/Atıştırmalık.jpeg"  alt="Atıştırmalık"/>    <a href="#">Atıştırmalık</a></Link></li>
                    <li><Link to="/Kategoriler/Dondurma"><img src="/src/image/Page Image/Dondurma.jpeg"      alt="Dondurma"/>        <a href="#">Dondurma</a></Link></li>
                    <li><Link to="/Kategoriler/Yiyecek"><img src="/src/image/Page Image/Yiyecek.jpeg"       alt="Yiyecek"/>         <a href="#">Yiyecek</a></Link></li>
                    <li><Link to="/Kategoriler/Süt-Kahvaltı"><img src="/src/image/Page Image/Süt Kahvaltu.jpeg"  alt="Süt & Kahvaltı"/>  <a href="#">Süt & Kahvaltı</a></Link></li>
                    <li><Link to="/Kategoriler/Fit-Form"><img src="/src/image/Page Image/Fit Form.jpeg"      alt="Fit & Form"/>      <a href="#">Fit & Form</a></Link></li>
                    <li><Link to="/Kategoriler/Kişisel Bakım"><img src="/src/image/Page Image/Kişisel Bakım.jpeg" alt="Kişisel Bakım"/>   <a href="#">Kişisel Bakım</a></Link></li>
                    <li><Link to="/Kategoriler/Ev-Bakım"><img src="/src/image/Page Image/Ev Bakım.jpeg"      alt="Ev Bakım"/>        <a href="#">Ev Bakım</a></Link></li>
                    <li><Link to="/Kategoriler/Ev-Yaşam"><img src="/src/image/Page Image/Ev Yaşam.jpeg"      alt="Ev & Yaşam"/>      <a href="#">Ev & Yaşam</a></Link></li>
                    <li><Link to="/Kategoriler/Teknoloji"><img src="/src/image/Page Image/Teknoloji.jpeg"     alt="Teknoloji"/>       <a href="#">Teknoloji</a></Link></li>
                    <li><Link to="/Kategoriler/Evcil Hayvan"><img src="/src/image/Page Image/Evcil Hayvan.jpeg"  alt="Evcil Hayvan"/>    <a href="#">Evcil Hayvan</a></Link></li>
                    <li><Link to="/Kategoriler/Bebek"><img src="/src/image/Page Image/Bebek.jpeg"         alt="Bebek"/>           <a href="#">Bebek</a></Link></li>
                    <li><Link to="/Kategoriler/Cinsel Sağlık"><img src="/src/image/Page Image/Cinsel Sağlık.jpeg" alt="Cinsel Sağlık"/>   <a href="#">Cinsel Sağlık</a></Link></li>
                </ul> 
            }
                </div>
                <div className="pageItems">
                    <ul>
                        <li>
                            <p>
                            </p></li>
                           
                            <Outlet />
                    </ul>
                </div>
                <Basket  />
                
            </div>
            {/*  Kategoriler Barinin Bitisi */}

        </>
    )
}
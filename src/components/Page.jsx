import React from 'react'
import '../css/Page.css'
import { Link, Outlet } from 'react-router-dom' 
import Milk from '../ProductItem/milk'

export default function Page() {
    return (
        <>
        {/*     Kategoriler Barinin Baslangici */ }
<div className="pageContainer">
            <div className="leftBar">
                <p className='PageCategories'> Kategoriler </p>
                
                <ul >
      
                    <li><Link to="/Su-İçecek"><img src="src/image/Page Image/Su İçecek.jpeg"     alt="Su & İçecek"/>     <a href="#">Su & İçecek</a></Link></li>
                    <li><Link to="/Meyve-Sebze"><img src="src/image/Page Image/Meyve Sebze.jpeg"   alt="Meyve & Sebze"/>   <a href="#">Meyve & Sebze</a></Link></li>
                    <li><img src="src/image/Page Image/Fırından.jpeg"      alt="Fırından"/>        <a href="#">Fırından</a></li>
                    <li><img src="src/image/Page Image/Temel Gıda.jpeg"    alt="Temel Gıda"/>      <a href="#">Temel Gıda</a></li>
                    <li><img src="src/image/Page Image/Atıştırmalık.jpeg"  alt="Atıştırmalık"/>    <a href="#">Atıştırmalık</a></li>
                    <li><img src="src/image/Page Image/Dondurma.jpeg"      alt="Dondurma"/>        <a href="#">Dondurma</a></li>
                    <li><img src="src/image/Page Image/Yiyecek.jpeg"       alt="Yiyecek"/>         <a href="#">Yiyecek</a></li>
                    <li><img src="src/image/Page Image/Süt Kahvaltu.jpeg"  alt="Süt & Kahvaltı"/>  <a href="#">Süt & Kahvaltı</a></li>
                    <li><img src="src/image/Page Image/Fit Form.jpeg"      alt="Fit & Form"/>      <a href="#">Fit & Form</a></li>
                    <li><img src="src/image/Page Image/Kişisel Bakım.jpeg" alt="Kişisel Bakım"/>   <a href="#">Kişisel Bakım</a></li>
                    <li><img src="src/image/Page Image/Ev Bakım.jpeg"      alt="Ev Bakım"/>        <a href="#">Ev Bakım</a></li>
                    <li><img src="src/image/Page Image/Ev Yaşam.jpeg"      alt="Ev & Yaşam"/>      <a href="#">Ev & Yaşam</a></li>
                    <li><img src="src/image/Page Image/Teknoloji.jpeg"     alt="Teknoloji"/>       <a href="#">Teknoloji</a></li>
                    <li><img src="src/image/Page Image/Evcil Hayvan.jpeg"  alt="Evcil Hayvan"/>    <a href="#">Evcil Hayvan</a></li>
                    <li><img src="src/image/Page Image/Bebek.jpeg"         alt="Bebek"/>           <a href="#">Bebek</a></li>
                    <li><img src="src/image/Page Image/Cinsel Sağlık.jpeg" alt="Cinsel Sağlık"/>   <a href="#">Cinsel Sağlık</a></li>
                   
                </ul> 
              
              
            </div>
            <div className="pageItems">
                <ul>
                    <li>
                        <p>

         </p></li>
<Milk/>
                </ul>
            </div>
     
            </div>
            {/*  Kategoriler Barinin Bitisi */ }
        
        </>
    )
}
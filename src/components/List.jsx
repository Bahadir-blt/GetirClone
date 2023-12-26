import React, { useState } from 'react'
import '../css/Page.css'
import { Link, Outlet, RouterProvider, createBrowserRouter, } from 'react-router-dom'



export default function List() {

    const [basket, setBasket] = useState([]);


    return (
        <>
            {/*     Kategoriler Barinin Baslangici */}
            <div className="pageContainer">
                <div className="leftBar">
                    <p className='PageCategories'> Kategoriler </p>
                    <ul className='Listul'>
                        <li><img  src="/src/image/Page Image/Su İçecek.jpeg" alt="Su & İçecek"/>       <Link className='p' to="/Kategoriler/Su-İçecek">     <p >Su & İçecek</p>  </Link>   </li>
                        <li><img src="/src/image/Page Image/Meyve Sebze.jpeg" alt="Meyve & Sebze"/>    <Link  className='p' to="/Kategoriler/Meyve-Sebze">  <p >Meyve & Sebze</p> </Link></li>
                        <li><img src="/src/image/Page Image/Fırından.jpeg" alt="Fırından"/>            <Link className='p' to="/Kategoriler/Fırından">      <p >Fırından </p>    </Link>  </li>
                        <li><img src="/src/image/Page Image/Temel Gıda.jpeg" alt="Temel Gıda"/>        <Link className='p' to="/Kategoriler/Temel Gıda">    <p >Temel Gıda</p> </Link></li>
                        <li><img src="/src/image/Page Image/Atıştırmalık.jpeg" alt="Atıştırmalık"/>    <Link className='p' to="/Kategoriler/Atıştırmalık">  <p >Atıştırmalık</p></Link></li>
                        <li><img src="/src/image/Page Image/Dondurma.jpeg" alt="Dondurma" />           <Link className='p' to="/Kategoriler/Dondurma">      <p >Dondurma </p>  </Link>   </li>
                        <li><img src="/src/image/Page Image/Yiyecek.jpeg" alt="Yiyecek"/>              <Link className='p' to="/Kategoriler/Yiyecek">       <p >Yiyecek </p>   </Link> </li>
                        <li><img src="/src/image/Page Image/Süt Kahvaltu.jpeg" alt="Süt & Kahvaltı"/>  <Link className='p' to="/Kategoriler/Süt-Kahvaltı">  <p> Süt & Kahvaltı</p></Link></li>
                        <li><img src="/src/image/Page Image/Fit Form.jpeg" alt="Fit & Form"/>          <Link className='p' to="/Kategoriler/Fit-Form">      <p> Fit & Form </p>    </Link> </li>
                        <li><img src="/src/image/Page Image/Kişisel Bakım.jpeg" alt="Kişisel Bakım"/>  <Link className='p' to="/Kategoriler/Kişisel Bakım"> <p>Kişisel Bakım  </p> </Link>  </li>
                        <li><img src="/src/image/Page Image/Ev Bakım.jpeg" alt="Ev Bakım"/>            <Link className='p' to="/Kategoriler/Ev-Bakım">      <p>Ev Bakım </p>    </Link> </li>
                        <li><img src="/src/image/Page Image/Ev Yaşam.jpeg" alt="Ev & Yaşam"/>          <Link className='p' to="/Kategoriler/Ev-Yaşam">      <p>Ev & Yaşam </p>  </Link>  </li>
                        <li><img src="/src/image/Page Image/Teknoloji.jpeg" alt="Teknoloji"/>          <Link className='p' to="/Kategoriler/Teknoloji">     <p> Teknoloji </p>  </Link>  </li>
                        <li><img src="/src/image/Page Image/Evcil Hayvan.jpeg" alt="Evcil Hayvan"/>    <Link className='p' to="/Kategoriler/Evcil Hayvan">  <p>Evcil Hayvan </p>    </Link>  </li>
                        <li><img src="/src/image/Page Image/Bebek.jpeg" alt="Bebek"/>                  <Link className='p' to="/Kategoriler/Bebek">         <p>Bebek </p>  </Link>  </li>
                        <li><img src="/src/image/Page Image/Cinsel Sağlık.jpeg" alt="Cinsel Sağlık"/>  <Link className='p' to="/Kategoriler/Cinsel Sağlık"> <p>Cinsel Sağlık </p> </Link>  </li>
                    </ul>

                </div>
                <div className="pageItems">
                    <ul>
                        <li>
                            <p>
                            </p></li>

                        <Outlet />
                    </ul>
                </div>


            </div>
            {/*  Kategoriler Barinin Bitisi */}

        </>
    )
}
import React from 'react'
import '../css/Categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {

  return (
    <>
      <div className='categories'>
        <div className='categoriesHeader'>
          <h3 className='categoriesText'>Kategoriler</h3>
          <div className='categoriesItem'>
            <ul className='res' >
              <li  className='imageHref'><Link to="/Kategoriler/Su-İçecek">  <img className='categoriesImage' src="src/image/Page Image/Su İçecek.jpeg"     alt="Su & İçecek" />    Su & İçecek</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Meyve-Sebze"><img className='categoriesImage' src="src/image/Page Image/Meyve Sebze.jpeg"   alt="Meyve & Sebze" /> Meyve & Sebze</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Fırından"><img className='categoriesImage' src="src/image/Page Image/Fırından.jpeg"      alt="Fırından" />       Fırından</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Temel Gıda"> <img className='categoriesImage' src="src/image/Page Image/Temel Gıda.jpeg"    alt="Temel Gıda" />     Temel Gıda</Link></li>
              <li className='imageHref' ><Link to="/Kategoriler/Atıştırmalık"><img className='categoriesImage' src="src/image/Page Image/Atıştırmalık.jpeg" alt="Atıştırmalık" />   Atıştırmalık</Link></li>
              <li className='imageHref' ><Link to="/Kategoriler/Dondurma"><img className='categoriesImage' src="src/image/Page Image/Dondurma.jpeg"     alt="Dondurma" />       Dondurma</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Yiyecek"><img className='categoriesImage' src="src/image/Page Image/Yiyecek.jpeg"       alt="Yiyecek" />        Yiyecek</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Süt-Kahvaltı"><img className='categoriesImage' src="src/image/Page Image/Süt Kahvaltu.jpeg"  alt="Süt & Kahvaltı" /> Süt & Kahvaltı</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Fit-Form"><img className='categoriesImage' src="src/image/Page Image/Fit Form.jpeg"      alt="Fit & Form" />     Fit & Form</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Kişisel Bakım"><img className='categoriesImage' src="src/image/Page Image/Kişisel Bakım.jpeg" alt="Kişisel Bakım" />  Kişisel Bakım</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Ev-Bakım"><img className='categoriesImage' src="src/image/Page Image/Ev Bakım.jpeg"      alt="Ev Bakım" />       Ev Bakım</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Ev-Yaşam"><img className='categoriesImage' src="src/image/Page Image/Ev Yaşam.jpeg"      alt="Ev & Yaşam" />     Ev & Yaşam</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Teknoloji"><img className='categoriesImage' src="src/image/Page Image/Teknoloji.jpeg"     alt="Teknoloji" />      Teknoloji</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Evcil Hayvan"><img className='categoriesImage' src="src/image/Page Image/Evcil Hayvan.jpeg"  alt="Evcil Hayvan" />   Evcil Hayvan</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Bebek"><img className='categoriesImage' src="src/image/Page Image/Bebek.jpeg"         alt="Bebek" />          Bebek</Link></li>
              <li className='imageHref'><Link to="/Kategoriler/Cinsel Sağlık"><img className='categoriesImage' src="src/image/Page Image/Cinsel Sağlık.jpeg" alt="Cinsel Sağlık" />  Cinsel Sağlık</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};


export default Categories;
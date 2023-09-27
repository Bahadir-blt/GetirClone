import React from 'react'
import '../css/HeroSection.css'
import Slider from "react-slick";




const HeroSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className='Slider' > 
      <Slider {...settings}>
        <div>
          <img className='heroImage' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
       </div>
       <div>
          <img className='heroImage' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg" alt="" />
        </div>
        <div>
          <img className='heroImage' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg" alt="" />
        </div> 
      </Slider>
      <div className='leftText'>
      <div>
        <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
         <h3 className='fastTime' >Dakikalar içinde <br /> kapınızda</h3>
      </div>
      </div>
      
 </div>

    </>
  )
}


export default HeroSection;
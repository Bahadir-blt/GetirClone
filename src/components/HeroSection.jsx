import React from 'react'
import { useState } from "react";
import '../css/HeroSection.css'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";




const HeroSection = () => {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: '+1',
    DE: '+49',
    TR: '+90',
    IT: '+39 ',
    IN: '+91',
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
       autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear"
      
      
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
          <div className='login'>
            <h4 className='Signup'>Giriş Yap veya Kayıt Ol</h4>
            <div className='SignupToLogin'>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={code => setSelected(code)}
                selected={selected}
               />
               <label className='PhoneNumber'>

                <input className='PhoneNumberInput' placeholder='Telefon Numarası' />
              
               </label>
            </div>
            <button className='continueWithPhoneNumber'>Telefon Numarası İle Devam Et</button>
         
          </div>
        </div>

      </div>

    </>
  )
}


export default HeroSection;
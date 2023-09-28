import {useState,useEffect} from 'react';
import React from 'react'
import '../css/Campaign.css'
import Slider from "react-slick";
import Banners from '../api/banners.json'




 const Campaign = () => {

  const [banners, setBanners] = useState({}) ;

  useEffect(() => {
      setBanners(Banners);
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='Campaign'>
     
  <Slider {...settings}>
         {banners.length && banners.map((banner,index) => (
          <div key={banner.id}>
            <img className='bannerImage' src={banner.image} />
          </div>
         ))}
        </Slider>

    </div>
  )
}


export default Campaign ;
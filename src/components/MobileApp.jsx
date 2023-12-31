import React from 'react'
import '../css/MobileApp.css'



const MobileApp = () => {
  return (
    <>
      <div className='mobileApp'>
        <h2 className='uploadApp'>Ne İstersin'le   <br />
          <span>İstediğiniz ürünleri dakikalar içinde kapınıza  getirelim.</span>
          <a href="https://apps.apple.com/app/id995280265" target='_blank' >
            <img className='download' src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.getir&pli=1" target='_blank'>
            <img className='download' src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
          </a>
          <a href="https://appgallery.huawei.com/#/app/C100954039" target='_blank'>
            <img className='download' src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
          </a>
        </h2>

        <img className='rightİmage' src="src\image\HeroSectionPhoto\MobileApp\phoneLanding.png" alt="" />







      </div>





    </>
  )
}


export default MobileApp;
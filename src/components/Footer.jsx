import React from 'react'
import '../css/Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerDesc'>
       <div className='footerComment'>
  <section>
    <h6 className='downloadGetirApplication'>Getir'i indirin!</h6>
    <nav className='downloadGetirApplicationIcon'>
      <a href="#">
        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
      </a>
      <a href="#">
        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
      </a>
      <a href="#">
        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
      </a>
    </nav>
  </section>
  </div>
      </div>
    </div>
  )
}


export default Footer;
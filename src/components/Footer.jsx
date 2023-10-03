import React from 'react'
import '../css/Footer.css'



const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footerDesc'>
          <div className='footerComment'>
            <section>
              <h6 className='downloadGetirApplication'>Getirdim'i indirin!</h6>
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
            <section>
              <h6 className='downloadGetirApplication'>Getirdim'i Keşfedin</h6>
              <nav className='footerFirstStatemenet' >
                <a href="#"><p2 className="statment">Hakkımızda</p2><br /></a>
                <a href="#"><p2 className="statment">Kariyer</p2><br /></a>
                <a href="#"><p2 className="statment">Teknoloji Kariyerleri</p2><br />  </a>
                <a href="#"> <p2 className="statment">İletişim</p2><br /></a>
                <a href="#"><p2 className="statment">Sosyal Sorumluluk Projeleri</p2></a>
              </nav>
            </section>
            <section>
              <h6 className='downloadGetirApplication'>Size Yardımcı Olalım?</h6>
              <nav className='footerFirstStatemenet' >
                <a href="#"><p2 className="statment">Sıkça Sorulan Sorular</p2><br /></a>
                <a href="#"><p2 className="statment">Kişisel Verilerin Korunması</p2><br /></a>
                <a href="#"><p2 className="statment">Gizlilik Politikası</p2><br />  </a>
                <a href="#"> <p2 className="statment">Kullanım Koşulları</p2><br /></a>
                <a href="#"><p2 className="statment">Çerez Politikası</p2></a> <br />
              </nav>
            </section>
            <section>
              <h6 className='downloadGetirApplication'>İş Ortağımız Olun</h6>
              <nav className='footerFirstStatemenet' >
                <a href="#"><p2 className="statment">Bayimiz Olun</p2><br /></a>
                <a href="#"><p2 className="statment">Deponuzu Kiralayın</p2><br /></a>
                <a href="#"><p2 className="statment">Restorantımız Olun</p2><br />  </a>
                <a href="#"> <p2 className="statment">Zincir Restoranlar</p2><br /></a>
                <a href="#"><p2 className="statment">İşlem Rehberi</p2></a>
              </nav>
            </section>
          </div>
        </div>
      </div>

      <h1 className='lowerFooter'>deneme</h1>
    </>
  )
}


export default Footer;
import React from 'react'
import '../css/Footer.css'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footerDesc'>
          <div className='footerComment'>
            <section>
              <h6 className='downloadGetirApplication'>Ne İstersin'i indirin!</h6>
              <nav className='downloadGetirApplicationIcon'>
                <Link to="/*">
                  <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                </Link>
                <Link to="/*">
                  <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                </Link>
                <Link to="/*">
                  <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                </Link>
              </nav>
            </section>
            <section>
              <h6 className='downloadGetirApplication'>Ne İstersin'i Keşfedin</h6>
              <nav className='footerFirstStatemenet' >
                <ul>
                  <li ><Link to="/Hakkımızda"><p2 className="statment">Hakkımızda</p2><br /></Link></li>
                  <li><Link to="/İletişim"><p2 className="statment">İletişim</p2><br /></Link></li>
                  <li><Link to="/Teknoloji Kariyerleri"><p2 className="statment">Teknoloji Kariyerleri</p2><br /></Link></li>
                  <li><Link to="/Sosyal Sorumluluk Projeleri"><p2 className="statment">Sosyal Sorumluluk Projeleri</p2></Link></li>
                </ul>
              </nav>
            </section>
            <section>
              <h6 className='downloadGetirApplication'>Size Yardımcı Olalım?</h6>
              <nav className='footerFirstStatemenet' >
                <ul>
                  <li> <Link to="Sıkça-Sorulan-Sorular"><p2 className="statment">Sıkça Sorulan Sorular</p2><br /></Link></li>
                  <Link to="/Kişisel-Verilerin-Korunması"><p2 className="statment">Kişisel Verilerin Korunması</p2><br /></Link>
                  <Link to="/Gizlilik-Politikası"><p2 className="statment">Gizlilik Politikası</p2><br />  </Link>
                  <Link to="/Çerez-Politikası"><p2 className="statment">Çerez Politikası</p2></Link> <br />
                </ul>
              </nav>
            </section>
            <section>
              <h6 className='downloadGetirApplication'>İş Ortağımız Olun</h6>
              <nav className='footerFirstStatemenet' >
                <ul>
                  <Link to="/*"><p2 className="statment">Deponuzu Kiralayın</p2><br /></Link>
                  <Link to="/*"><p2 className="statment">Restorantımız Olun</p2><br />  </Link>
                  <Link to="/*"> <p2 className="statment">Zincir Restoranlar</p2><br /></Link>
                  <Link to="/*"><p2 className="statment">İşlem Rehberi</p2></Link>
                </ul>
              </nav>
            </section>
            <div className="lowerFooter">
              <p className='copyright'> <hr /> &copy; 2023  <span> ~ Bahadır Bulut
                <br />
                <Link to="/*"> **   Bilgi Toplumu Hizmetleri İçin Tıklayınız  🥰 </Link>   </span></p>
              <nav className='footerIcon'>
                <a href="https://github.com/Bahadir-blt/" target='_blank'> <FaGithub /> </a>
                <a href="https://twitter.com/bulutbahadirr"> <FaTwitter /> </a>
                <a href="https://www.instagram.com/bahadir.bulutt/" target='_blank'> <FaInstagram /> </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export default Footer;
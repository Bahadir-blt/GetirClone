import React from 'react'
import '../css/Header.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineUserAdd } from 'react-icons/ai'





const Header = () => {
  return (
    <>
      <div className='Header'>
         <h4 className='getirWrite' >Ne İstersin ?</h4>
        <nav className='RightBar'>
          <a className='footerIcon' href="#"> <AiOutlineGlobal />  Türkçe (TR) </a>
          <a className='footerIcon' href="#"> <AiOutlineUser />  Giriş Yap     </a>
          <a className='footerIcon' href="#"> <AiOutlineUserAdd />  Kayıt Ol   </a>
        </nav>
      </div>
    </>
  )
}


export default Header;
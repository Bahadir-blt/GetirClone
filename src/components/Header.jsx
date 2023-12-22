import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import '../css/Login.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { supabase } from '../main'





const Header = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      // setUser(session?.user);
      setUser(session?.user.user_metadata.name)
    })

  }, [])

  return (
    <>
      <div className='Header'>
        <Link to='/' className='getirWrite' >Ne İstersin ?</Link>
        <nav className='RightBar'>


          {
            user ?
              <><h4 className='welcome'>Hoş Geldin💜</h4><p className='headUser'>{user}</p><button className='signOuts' onClick={() => supabase.auth.signOut()}>  → Çıkış Yap</button></>
               : <>
              <Link className='footerIcon' to="/register"> <AiOutlineUserAdd />Kayıt Ol</Link>
              <Link className='footerIcon' to="/login"> <AiOutlineUser />  Giriş Yap     </Link>
              </>
          }
          <a className='footerIcon' href="#"> <AiOutlineGlobal />  Türkçe (TR) </a>
        </nav>
      </div>
    </>
  )
}


export default Header;
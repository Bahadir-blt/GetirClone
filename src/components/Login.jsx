import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {supabase} from '../main'
import '../css/Login.css'


function LoginRegister() {
    const [suggestRegister, setsuggestRegister] = useState(false)
    const isRegister = location.pathname === '/register';

    const navigate = useNavigate();

    useEffect(() => {
        isRegister && setsuggestRegister(false)
    })

    async function register(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData)

        
        if (isRegister) {

            const { data, error } = await supabase.auth.signUp(
                {
                email: user.email,
                password: user.password, 
                options: {
                     data: {
                        name: user.name ,
                    }
                }
              }
              );

            if (error) {
             if ( error.status === 422) {
                alert('Kullanıcı Kayıtlı')
             }
             else {
               alert('Hatalı veya eksik girildi');
              }
                return;
            }

            navigate('/')

        } else {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: user.email,
                password: user.password,
            })

            if (error) {
                setsuggestRegister(true);
                return;
            }

            navigate('/')
        }




    }

    return (
        <div className='loginContainer'>
            { <h1 className='loginOrRegister'>{isRegister   ? <><Link to='/login' >  <span className='loginOrRegister'> Giriş Yap</span> </Link> / <span className='loginOrRegister'>Kayıt Ol</span>   </> : <> <span className='loginOrRegister'>Giriş Yap</span> / <Link to="/register" ><span className='loginOrRegister'>Kayıt Ol</span>  </Link></>}</h1> }
            <form className='registerForm' onSubmit={register} >
                {isRegister && <p> <input type="text" name="name" placeholder='Adınız' /></p>}
                <p><input required type="email" name="email" placeholder='E-Posta Adresiniz' /></p>
                <p><input required type="password" name="password" placeholder='Şifreniz' /></p>
                <button className='registerButton'> {isRegister ? 'Kayıt Ol' : 'Giriş Yap'} </button>

            </form>
            {suggestRegister && <p className='notRegister' style={{ color: 'red' }}>Kullanıcı Bulunamadı 💔  <Link className='click' to="/register">Kayıt Olmak İçin Tıkla </Link></p>}

        </div>
    )
}

export default LoginRegister;
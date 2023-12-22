import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/index.jsx'
import Page from './components/Page.jsx'  
import About from './foot/About.jsx'
import Communication from './foot/Communication.jsx'
import Career from './foot/Career.jsx'
import Water, { loader } from './ProductItem/Water.jsx'
import Fruits from './ProductItem/Fruits.jsx'
import Owen from './ProductItem/Owen.jsx'
import Nutrition from './ProductItem/Nutrition.jsx'
import Snack from './ProductItem/Snack.jsx'
import IceCream from './ProductItem/IceCream.jsx'
import Food from './ProductItem/Food.jsx'
import Milk from './ProductItem/Milk.jsx'
import Form from './ProductItem/Form.jsx'
import Personal from './ProductItem/Personal.jsx'
import Care from './ProductItem/Care.jsx'
import Life from './ProductItem/Life.jsx'
import Technology from './ProductItem/Technology.jsx'
import Pet from './ProductItem/Pet.jsx'
import Baby from './ProductItem/Baby.jsx'
import Health from './ProductItem/Health.jsx'
import Responsibility from './foot/Responsibility.jsx'
import LoginRegister from './components/Login.jsx'
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('https://vyylaomwkgdihavezcsw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eWxhb213a2dkaWhhdmV6Y3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNzg3NTMsImV4cCI6MjAxODc1NDc1M30.V7xqe7wshf0UImKgExIFpctlLEpmGMK-LfAxrxj6OYc')

const router = createBrowserRouter (
  [
    {
      path : '/' , 
      element : <MainLayout/>, children : [
        {
          index : true , element : <App/> 

        },
        {
          path : '/Kategoriler',
          element : <Page/>, 
          children : [
            {
              path : '/Kategoriler/:kategori' ,
              element: <Water  />,
              loader: loader 
            },
            {
              path: '/Kategoriler/Meyve-Sebze',
              element : <Fruits />
            },
            {
              path: '/Kategoriler/Fırından',
              element : <Owen />
            },
            {
              path: '/Kategoriler/Temel Gıda',
              element : <Nutrition />
            },
            {
              path: '/Kategoriler/Atıştırmalık',
              element : <Snack />
            },
            {
              path: '/Kategoriler/Dondurma',
              element : <IceCream />
            },
            {
              path: '/Kategoriler/Yiyecek',
              element : <Food/>
            },
            {
              path: '/Kategoriler/Süt-Kahvaltı',
              element : <Milk/>
            },
            {
              path: '/Kategoriler/Fit-Form',
              element : <Form/>
            },
            {
              path: '/Kategoriler/Kişisel Bakım',
              element : <Personal />
            },
            {
              path: '/Kategoriler/Ev-Bakım',
              element : <Care/>
            },
            {
              path: '/Kategoriler/Ev-Yaşam',
              element : <Life />
            },
            {
              path: '/Kategoriler/Teknoloji',
              element : <Technology/>
            },
            {
              path: '/Kategoriler/Evcil Hayvan',
              element : <Pet/>
            },
            {
              path: '/Kategoriler/Bebek',
              element : <Baby/>
            },
            {
              path: '/Kategoriler/Cinsel Sağlık',
              element : <Health/>
            }
          ] 
        },
        {
          path : '/login',
          element : <LoginRegister  />,
        },
        {
          path : '/register',
          element : <LoginRegister  />,
        },
        {
          path : '/Hakkımızda',
          element : <About  />,
        },
        {
          path : '/İletişim',
          element : <Communication/>,
         
        },
        {
          path : '/Teknoloji Kariyerleri',
          element : <Career/>,
        },
        {
          path : '/Sosyal Sorumluluk Projeleri',
          element : <Responsibility/>,
        }
       
       
       
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root',)).render(
  <RouterProvider router={router}/>
)

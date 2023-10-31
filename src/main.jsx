import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/index.jsx'
import Page from './components/Page.jsx'
import Fruits from './ProductItem/Fruits.jsx'



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
         
        },
       
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
)

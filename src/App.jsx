import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'

import MobileApp from './components/MobileApp'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <HeroSection/>
      <Categories/>
      <MobileApp/>
      <Cart/>
  
    </>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Order from './Order.jsx'
import Success from './Success.jsx'
import FAQ from './FAQ.jsx'
import About from './About.jsx'
import NotFound from './NotFound.jsx'

export default function App(){
  return (
    <div className="page">
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Order from './pages/Order.jsx'
import Success from './pages/Success.jsx'
import FAQ from './pages/FAQ.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

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

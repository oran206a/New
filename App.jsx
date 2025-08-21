import React from 'react'
import Hero from './Hero.jsx'
import How from './How.jsx'
import Products from './Products.jsx'
import Pricing from './Pricing.jsx'
import Order from './Order.jsx'
import FAQ from './FAQ.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

export default function App(){
  return (
    <div className="page">
      <div className="bar"><div className="wrap">
        <span className="chip">🚚 משלוח חינם מעל 199₪</span>
        <span className="chip">⚡ ייצור 1–3 ימי עסקים</span>
        <span className="chip">↩️ החזרה/החלפה עד 14 יום</span>
      </div></div>

      <header>
        <nav>
          <div className="brand"><span className="dot" aria-hidden="true"></span> TLATOR</div>
          <div className="links">
            <a href="#how">איך זה עובד</a>
            <a href="#products">מוצרים</a>
            <a href="#pricing">מחירון</a>
            <a href="#faq">שאלות</a>
            <a href="#order">הזמנה</a>
            <a href="#contact">צור קשר</a>
          </div>
          <a href="https://www.instagram.com/tlat_or/?igsh=dGd1ajJ3ZXo3b3M1" target="_blank" rel="noopener">📸 אינסטגרם</a>
        </nav>
      </header>

      <Hero/>
      <main>
        <How/>
        <Products/>
        <Pricing/>
        <Order/>
        <FAQ/>
        <Contact/>
      </main>
      <div className="sticky-cta">
        <div className="row">
          <strong>מוכנים לעצב מנורה?</strong>
          <a href="#order">התחילו עכשיו</a>
          <a href="https://wa.me/972523286004?text=שלום,%20רוצה%20להזמין%20מנורת%20אקריליק" style={{background:'#25d366',color:'#0b1220'}}>ווטסאפ</a>
        </div>
      </div>
      <a className="wa" href="https://wa.me/972523286004" title="WhatsApp">📱 <span>שאלו ב‑WhatsApp</span></a>
      <Footer/>
    </div>
  )
}

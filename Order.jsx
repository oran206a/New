import React from 'react'
import OrderForm from '../components/OrderForm.jsx'

export default function Order(){
  return (
    <div className="container grid" style={{gap:16}}>
      <section className="card">
        <h1 style={{margin:'0 0 8px'}}>הזמנה</h1>
        <p className="notice">הטופס נשלח ישירות ל‑Netlify Forms. תוכל לראות את ההזמנות בלשונית Forms באתר ב‑Netlify.</p>
      </section>
      <section className="card"><OrderForm/></section>
    </div>
  )
}

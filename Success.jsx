import React from 'react'
import { Link } from 'react-router-dom'
export default function Success(){
  return (
    <div className="container card">
      <h1 style={{marginTop:0}}>תודה! ההזמנה נקלטה.</h1>
      <p className="notice">בדיקות: פתח את Netlify → Forms כדי לראות את הנתונים.</p>
      <Link className="btn" to="/">חזרה לדף הבית</Link>
    </div>
  )
}

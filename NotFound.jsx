import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
  return (
    <div className="container card">
      <h1 style={{marginTop:0}}>404</h1>
      <p className="notice">העמוד לא נמצא.</p>
      <Link className="btn" to="/">חזרה לדף הבית</Link>
    </div>
  )
}

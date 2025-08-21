import React from 'react'
export default function Feature({title,desc}){
  return <div className="card"><h3 style={{margin:'0 0 6px'}}>{title}</h3><p className="notice" style={{margin:0}}>{desc}</p></div>
}

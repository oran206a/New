import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function NavBar(){return(<header className='container' style={{padding:'14px 0'}}><nav style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}><Link to='/' className='brand' style={{fontWeight:800,letterSpacing:'.4px'}}>TlatOr</Link><div style={{display:'flex',gap:14,alignItems:'center'}}><NavLink to='/order'>הזמנה</NavLink><NavLink to='/faq'>שאלות</NavLink><NavLink to='/about'>עלינו</NavLink><Link className='btn' to='/order'>הזמנה מהירה</Link></div></nav></header>)}

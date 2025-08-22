import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Features from './Features.jsx'
import Pricing from './Pricing.jsx'
import Order from './Order.jsx'
import Footer from './Footer.jsx'

export default function App(){
  return (<><Header/><Hero/><main className="container"><Features/><Pricing/><Order/></main><Footer/></>)
}

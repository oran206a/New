import React from 'react'
import Feature from './Feature.jsx'
import { Link } from 'react-router-dom'
export default function Home(){return(<div className='container grid' style={{gap:18}}><section className='card'><h1 style={{margin:'0 0 8px'}}>ליטופן בהתאמה אישית</h1><p className='notice'>מעלים תמונה. בוחרים צורה וגודל. מקבלים אור.</p><div style={{marginTop:14}}><Link className='btn' to='/order'>הזמנה מהירה</Link></div></section><section className='grid' style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}><Feature title='איכות הדפסה גבוהה' desc='PLA/PETG עם פרופיל מותאם לליטופן'/><Feature title='משלוח מהיר' desc='ייצור 1–3 ימי עבודה, שליח עד הבית'/><Feature title='תשלום מאובטח' desc='קישור תשלום מאובטח לאחר אישור הזמנה'/></section></div>)}

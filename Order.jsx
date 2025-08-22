import React, { useMemo, useState } from 'react'
const base = { small:129, medium:169, large:219 }
export default function Order(){
  const [size,setSize] = useState('medium')
  const [qty,setQty] = useState(1)
  const [preview,setPreview] = useState('')
  const total = useMemo(()=> (base[size]||0) * (parseInt(qty||1,10)||1), [size,qty])
  const onFile = e => { const f = e.target.files?.[0]; if(!f) return; const ok = ['image/jpeg','image/png','image/webp']; if(!ok.includes(f.type)){ alert('JPG/PNG/WEBP'); return } setPreview(URL.createObjectURL(f)) }
  function sendWA(){ const lines = ['שלום! רוצה להזמין מנורת ליטופן ✨', `מידה: ${size}`, `כמות: ${qty}`, `סה״כ: ${total.toLocaleString('he-IL')} ₪`].join('\n'); window.open('https://wa.me/972523286004?text='+encodeURIComponent(lines),'_blank') }
  return (<section id="order" aria-label="הזמנה"><h2>הזמנה</h2><div className="orderBox"><label>מידה<select value={size} onChange={e=>setSize(e.target.value)}><option value="small">קטן — 10×15</option><option value="medium">בינוני — 13×18</option><option value="large">גדול — 18×24</option></select></label><label>כמות<input type="number" min="1" value={qty} onChange={e=>setQty(e.target.value)} /></label><label>תמונה<input type="file" accept="image/*" onChange={onFile} /></label>{preview && <img alt="תצוגה" src={preview} style={{maxWidth:'300px',borderRadius:'12px',marginTop:8}}/>}<div className="total"><strong>סה״כ: {total.toLocaleString('he-IL')} ₪</strong><button className="btn" type="button" onClick={sendWA}>שליחה ב‑WhatsApp</button></div></div></section>)
}

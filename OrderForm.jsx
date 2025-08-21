import React, { useMemo, useState } from 'react'

const SHAPES = ['מלבן','עגול','לב']
const SIZES = ['10×15 ס״מ','15×20 ס״מ','20×30 ס״מ']

function priceFor(shape, size, backlight){
  const base = { '10×15 ס״מ':79, '15×20 ס״מ':109, '20×30 ס״מ':159 }[size] || 79
  const shapeAdd = shape === 'לב' ? 10 : 0
  const backAdd = backlight ? 30 : 0
  return base + shapeAdd + backAdd
}

export default function OrderForm(){
  const [data,setData] = useState({ name:'', email:'', phone:'', shape:SHAPES[0], size:SIZES[0], backlight:false, notes:'' })
  const [fileName,setFileName] = useState('')
  const [preview,setPreview] = useState('')

  const total = useMemo(()=>priceFor(data.shape, data.size, data.backlight), [data])

  const onFile = (e)=>{
    const f = e.target.files?.[0]
    if(!f) return
    setFileName(f.name)
    setPreview(URL.createObjectURL(f))
  }

  // Standard HTML submit posts to Netlify Forms
  return (
    <form className="grid" name="order" method="POST" action="/success" data-netlify="true" encType="multipart/form-data">
      <input type="hidden" name="form-name" value="order" />
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr', gap:12}}>
        <label>שם מלא<input name="name" required value={data.name} onChange={(e)=>setData(v=>({...v,name:e.target.value}))} placeholder="לדוגמה: ישראל ישראלי"/></label>
        <label>אימייל<input name="email" required type="email" value={data.email} onChange={(e)=>setData(v=>({...v,email:e.target.value}))} placeholder="name@example.com"/></label>
        <label>טלפון<input name="phone" required type="tel" value={data.phone} onChange={(e)=>setData(v=>({...v,phone:e.target.value}))} placeholder="05x-xxxxxxx"/></label>
        <div className="grid" style={{gridTemplateColumns:'1fr 1fr', gap:12}}>
          <label>צורה<select name="shape" value={data.shape} onChange={(e)=>setData(v=>({...v,shape:e.target.value}))}>{SHAPES.map(s=><option key={s}>{s}</option>)}</select></label>
          <label>גודל<select name="size" value={data.size} onChange={(e)=>setData(v=>({...v,size:e.target.value}))}>{SIZES.map(s=><option key={s}>{s}</option>)}</select></label>
        </div>
      </div>

      <label style={{display:'flex',alignItems:'center',gap:8}}>
        <input type="checkbox" name="backlight" checked={data.backlight} onChange={(e)=>setData(v=>({...v,backlight:e.target.checked}))}/>
        לכלול בסיס תאורה (+₪30)
      </label>

      <label>תמונה (אופציונלי)
        <input name="image" type="file" accept="image/*" onChange={onFile}/>
      </label>
      {preview && <img src={preview} alt="תצוגה מקדימה" style={{maxWidth:'280px',borderRadius:'12px',border:'1px solid #2a3148'}}/>}

      <label>הערות להזמנה<textarea name="notes" rows="4" value={data.notes} onChange={(e)=>setData(v=>({...v,notes:e.target.value}))} placeholder="טקסט הקדשה, תאריך, דרישות מיוחדות..."/></label>

      <div style={{display:'flex',gap:16,alignItems:'center'}}>
        <button className="btn" type="submit">שליחת הזמנה</button>
        <div className="notice">סה״כ: ₪{total}</div>
      </div>
    </form>
  )
}

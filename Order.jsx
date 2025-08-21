import React, { useMemo, useRef, useState } from 'react'

const basePrice = { small:119, medium:149, large:199 }
const shapeExtra = { rectangle:0, round:10, heart:20 }
const addOns = { woodBase:59, aluminumBase:119, rgb:29 }
const shippingMap = { boxit:15, israelpost:22, courier:35 }
const freeShipThreshold = 199

export default function Order(){
  const [data,setData] = useState({ size:'medium', shape:'rectangle', qty:1, ups:{woodBase:false, aluminumBase:false, rgb:false}, shipping:'boxit', text:'' })
  const [preview,setPreview] = useState('')
  const imgRef = useRef(null)
  const lightRef = useRef(60)
  const total = useMemo(()=>{
    const ups = Object.entries(data.ups).reduce((s,[k,v])=> s + (v ? (addOns[k]||0) : 0),0)
    const item = (basePrice[data.size] + (shapeExtra[data.shape]||0) + ups)
    const cartSub = item * (parseInt(data.qty||1,10)||1)
    let ship = shippingMap[data.shipping]
    if(cartSub >= freeShipThreshold) ship = 0
    return cartSub + ship
  }, [data])

  function onFile(e){
    const f = e.target.files?.[0]
    if(!f) return
    const url = URL.createObjectURL(f)
    setPreview(url)
  }

  function waSubmit(e){
    e.preventDefault()
    const ups = Object.entries(data.ups).filter(([,v])=>v).map(([k])=>({woodBase:'בסיס עץ',aluminumBase:'בסיס אלומיניום',rgb:'RGB'}[k])).filter(Boolean)
    const lines = [
      'היי! רוצה להזמין מנורת אקריליק ✨',
      `- מידה: ${data.size}`,
      `- צורה: ${data.shape}`,
      ups.length ? `- תוספות: ${ups.join(', ')}` : null,
      `- כמות: ${data.qty}`,
      data.text ? `- טקסט לחריטה: ${data.text}` : null,
      `סה״כ לתשלום: ${total.toLocaleString('he-IL')} ₪`
    ].filter(Boolean).join('\n')
    const wa = 'https://wa.me/972523286004?text=' + encodeURIComponent(lines)
    window.open(wa, '_blank')
  }

  return (
    <section id="order" className="about">
      <h2>מזמינים מנורת אקריליק בהתאמה אישית</h2>
      <p className="muted">בחרו מידה וצורה, העלו תמונה/טקסט, הוסיפו בסיס ותאורה.</p>

      <form className="card" onSubmit={waSubmit} style={{padding:'1rem'}}>
        <div className="two-col">
          <label>מידה
            <select value={data.size} onChange={e=>setData(v=>({...v,size:e.target.value}))}>
              <option value="small">S – 10×15 ס״מ</option>
              <option value="medium">M – 13×18 ס״מ</option>
              <option value="large">L – 18×24 ס״מ</option>
            </select>
          </label>
          <label>צורה
            <select value={data.shape} onChange={e=>setData(v=>({...v,shape:e.target.value}))}>
              <option value="rectangle">מלבן</option>
              <option value="round">עגול</option>
              <option value="heart">לב</option>
            </select>
          </label>
          <label>כמות
            <input type="number" min="1" value={data.qty} onChange={e=>setData(v=>({...v,qty:e.target.value}))}/>
          </label>
          <label>תמונה/קובץ
            <input type="file" accept="image/*,.svg" onChange={onFile}/>
          </label>
        </div>

        <div className="sim" style={{marginTop:12}}>
          <div className="stage">
            <div className="plate"></div>
            <img ref={imgRef} className="engrave" src={preview} alt="תצוגה" style={{display: preview ? 'block':'none'}}/>
          </div>
          <label>עוצמת תאורה <input type="range" min="0" max="100" defaultValue={60} onInput={e=>{lightRef.current=e.target.value; document.querySelector('.sim .stage').style.opacity = 0.6 + (e.target.value/100)*0.4}}/></label>
          <small className="muted">טיפ: קווים דקים נראים טוב יותר עם אור אחיד.</small>
        </div>

        <fieldset style={{border:'1px solid var(--border)',borderRadius:10,padding:12,marginTop:12}}>
          <legend>תוספות</legend>
          <label><input type="checkbox" checked={data.ups.woodBase} onChange={e=>setData(v=>({...v,ups:{...v.ups,woodBase:e.target.checked}}))}/> בסיס עץ +59₪</label>
          <label style={{marginInlineStart:16}}><input type="checkbox" checked={data.ups.aluminumBase} onChange={e=>setData(v=>({...v,ups:{...v.ups,aluminumBase:e.target.checked}}))}/> בסיס אלומיניום +119₪</label>
          <label style={{marginInlineStart:16}}><input type="checkbox" checked={data.ups.rgb} onChange={e=>setData(v=>({...v,ups:{...v.ups,rgb:e.target.checked}}))}/> RGB +29₪</label>
        </fieldset>

        <fieldset style={{border:'1px solid var(--border)',borderRadius:10,padding:12,marginTop:12}}>
          <legend>משלוח</legend>
          {['boxit','israelpost','courier'].map(v=>(
            <label key={v} style={{marginInlineEnd:16}}>
              <input type="radio" name="shipping" checked={data.shipping===v} onChange={()=>setData(x=>({...x,shipping:v}))}/>
              {' '} {v==='boxit'?'Boxit 15₪':v==='israelpost'?'דואר ישראל 22₪':'שליח עד הבית 35₪'}
            </label>
          ))}
          <div className="muted" style={{marginTop:6}}>
            { (function(){
              const sub = (basePrice[data.size] + (shapeExtra[data.shape]||0) + (data.ups.woodBase?59:0) + (data.ups.aluminumBase?119:0) + (data.ups.rgb?29:0)) * (parseInt(data.qty||1,10)||1)
              const ship = sub >= freeShipThreshold ? 0 : shippingMap[data.shipping]
              return ship ? `+${ship} ₪ משלוח` : 'משלוח חינם'
            })() }
          </div>
        </fieldset>

        <label style={{display:'block',marginTop:12}}>הקדשה/טקסט לחריטה
          <input type="text" value={data.text} onChange={e=>setData(v=>({...v,text:e.target.value}))}/>
        </label>

        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:16}}>
          <strong>סה״כ: {total.toLocaleString('he-IL')} ₪</strong>
          <div style={{display:'flex',gap:8}}>
            <button className="btn" type="submit">שליחה ב‑WhatsApp</button>
            <button type="button" onClick={()=>alert('דמו תשלום בכרטיס. נחבר ספק סליקה בהמשך.')}>תשלום בכרטיס (דמו)</button>
          </div>
        </div>
      </form>
    </section>
  )
}

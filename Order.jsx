import React, { useMemo, useState } from 'react'

// יעד וואטסאפ קבוע: 052-3907792 -> פורמט בינלאומי
const WHATSAPP_PHONE = '972523907792'

const base = { small:129, medium:169, large:219 }
const shapeExtra = { rectangle:0, circle:10, heart:20 }
const shapeLabel = { rectangle:'מלבן', circle:'עגול', heart:'לב' }
const sizeLabel  = { small:'קטן — 10×15', medium:'בינוני — 13×18', large:'גדול — 18×24' }

export default function Order(){
  const [size,setSize] = useState('medium')
  const [shape,setShape] = useState('rectangle')
  const [qty,setQty] = useState(1)
  const [preview,setPreview] = useState('')
  const [file,setFile] = useState(null)

  const pricing = useMemo(()=>{
    const item = (base[size]||0) + (shapeExtra[shape]||0)
    const q = Math.max(1, parseInt(qty||'1',10))
    return { item, qty:q, total: item * q }
  }, [size,shape,qty])

  const onFile = e => {
    const f = e.target.files?.[0]; if(!f) return
    const ok = ['image/jpeg','image/png','image/webp']
    if(!ok.includes(f.type)){ alert('תמונה בפורמט JPG/PNG/WEBP'); return }
    setFile(f)
    setPreview(URL.createObjectURL(f))
  }

  async function sendWA(){
    const lines = [
      'שלום! הזמנת מנורת ליטופן 🕯️',
      `מידה: ${sizeLabel[size]||size}`,
      `צורה: ${shapeLabel[shape]||shape}`,
      `כמות: ${pricing.qty}`,
      `מחיר ליחידה: ₪${pricing.item.toLocaleString('he-IL')}`,
      `סה״כ להזמנה: ₪${pricing.total.toLocaleString('he-IL')}`
    ].join('\\n')

    // נסיון שיתוף עם תמונה במכשירים תומכים (iOS/Android) — לא מבטיח בחירת איש קשר אוטומטית.
    try{
      if(file && navigator.canShare && navigator.canShare({ files:[file], text: lines })){
        await navigator.share({ title:'הזמנת מנורת ליטופן', text: lines, files:[file] })
        return
      }
    }catch(e){ /* fallback below */ }

    // גיבוי: פתיחת צ'אט למספר הקבוע עם הטקסט. תמונה תצורף ידנית בוואטסאפ.
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines + (file ? '\\n(אנא צרף/י את התמונה בהודעה)' : ''))}`
    window.open(url, '_blank')
  }

  return (
    <section id="order" aria-label="הזמנה">
      <h2>הזמנה</h2>
      <div className="orderBox">
        <label>מידה
          <select value={size} onChange={e=>setSize(e.target.value)}>
            <option value="small">קטן — 10×15</option>
            <option value="medium">בינוני — 13×18</option>
            <option value="large">גדול — 18×24</option>
          </select>
        </label>
        <label>צורה
          <select value={shape} onChange={e=>setShape(e.target.value)}>
            <option value="rectangle">מלבן</option>
            <option value="circle">עגול</option>
            <option value="heart">לב</option>
          </select>
        </label>
        <label>כמות
          <input type="number" min="1" value={qty} onChange={e=>setQty(e.target.value)} />
        </label>
        <label>תמונה
          <input type="file" accept="image/*" onChange={onFile} />
        </label>
        {preview && <img alt="תצוגה" src={preview} style={{maxWidth:'300px',borderRadius:'12px',marginTop:8}}/>}

        <div className="total">
          <strong>סה״כ: {pricing.total.toLocaleString('he-IL')} ₪</strong>
          <button className="btn" type="button" onClick={sendWA}>שליחה ל‑WhatsApp 052‑3907792</button>
        </div>

        <p className="muted" style={{marginTop:8}}>
          הערה: שיתוף עם תמונה נתמך רק במכשירים ניידים תומכים. בקישור הישיר למספר מצורף טקסט והצילום יתווסף ידנית.
        </p>
      </div>
    </section>
  )
}

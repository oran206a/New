import React, { useMemo, useState } from 'react'

// מספר יעד קבוע: 0523907792 -> בינלאומי
const WHATSAPP_INTL = '972523907792'

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

  function openWhatsAppToNumber(text){
    // ניסיון לפתוח ישר לאפליקציה עם המספר הקבוע
    const native = `whatsapp://send?phone=${WHATSAPP_INTL}&text=${encodeURIComponent(text)}`
    const web = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`
    // ניסיון ראשון: deep link
    window.location.href = native
    // גיבוי אחרי רגע: קישור וובי (יפתח אפליקציה או Web WhatsApp)
    setTimeout(()=>{ window.open(web, '_blank') }, 700)
  }

  function sendWA(){
    const lines = [
      'שלום! הזמנת מנורת ליטופן 🕯️',
      `מידה: ${sizeLabel[size]||size}`,
      `צורה: ${shapeLabel[shape]||shape}`,
      `כמות: ${pricing.qty}`,
      `מחיר ליחידה: ₪${pricing.item.toLocaleString('he-IL')}`,
      `סה״כ להזמנה: ₪${pricing.total.toLocaleString('he-IL')}`,
      file ? '(אצרף את התמונה בהודעה הבאה)' : ''
    ].filter(Boolean).join('\\n')
    openWhatsAppToNumber(lines)
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
          <button className="btn" type="button" onClick={sendWA}>
            שליחה ל‑WhatsApp 052‑3907792
          </button>
        </div>

        <p className="muted" style={{marginTop:8}}>
          הערה: WhatsApp לא מאפשר לצרף קובץ אוטומטית דרך קישור. לאחר פתיחת הצ׳אט למספר 052‑3907792, צרפו את התמונה בלחיצה על אטצ׳.
        </p>
      </div>
    </section>
  )
}

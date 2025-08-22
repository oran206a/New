import React, { useMemo, useState } from 'react'

const base = { small:129, medium:169, large:219 }

export default function Order(){
  const [size,setSize] = useState('medium')
  const [qty,setQty] = useState(1)
  const [preview,setPreview] = useState('')
  const [file,setFile] = useState(null)

  const total = useMemo(()=> (base[size]||0) * (parseInt(qty||1,10)||1), [size,qty])

  const onFile = e => {
    const f = e.target.files?.[0]; if(!f) return
    const ok = ['image/jpeg','image/png','image/webp']
    if(!ok.includes(f.type)){ alert('תמונה בפורמט JPG/PNG/WEBP'); return }
    setFile(f)
    setPreview(URL.createObjectURL(f))
  }

  async function sendWA(){
    const text =
      `שלום! רוצה להזמין מנורת ליטופן\n` +
      `מידה: ${size}\n` +
      `כמות: ${qty}\n` +
      `סה״כ: ${total.toLocaleString('he-IL')} ₪`

    // ניסיון שיתוף עם קובץ במכשירים תומכים (מובייל/אייפד)
    try {
      if (file && navigator.canShare && navigator.canShare({ files:[file] })) {
        await navigator.share({
          title: 'הזמנת מנורת ליטופן',
          text,
          files: [file],
        })
        return
      }
    } catch (err) {
      // נופל לגיבוי למטה
    }

    // גיבוי: פתיחת צ׳אט עם טקסט בלבד
    const url = 'https://wa.me/972523286004?text=' + encodeURIComponent(
      text + (file ? '\n(צרף/י את התמונה ידנית לאחר פתיחת הצ׳אט)' : '')
    )
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
        <label>כמות
          <input type="number" min="1" value={qty} onChange={e=>setQty(e.target.value)} />
        </label>
        <label>תמונה
          <input type="file" accept="image/*" onChange={onFile} />
        </label>
        {preview && <img alt="תצוגה" src={preview} style={{maxWidth:'300px',borderRadius:'12px',marginTop:8}}/>}
        <div className="total">
          <strong>סה״כ: {total.toLocaleString('he-IL')} ₪</strong>
          <button className="btn" type="button" onClick={sendWA}>שליחה ב‑WhatsApp</button>
        </div>
        <p className="muted" style={{marginTop:8}}>
          במובייל ובאייפד הכפתור משתף את התמונה ישירות. בדסקטופ ייפתח צ׳אט עם הטקסט ותצרפו את התמונה ידנית.
        </p>
      </div>
    </section>
  )
}

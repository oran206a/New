import React from 'react'
export default function Hero(){
  return (
    <section className="hero" aria-label="גיבור">
      <div className="inner">
        <h1>מנורת אקריליק בהתאמה אישית – חריטה שמאירה רגעים</h1>
        <p>מעלים תמונה או טקסט, בוחרים בסיס ועוצמת תאורה, ואנחנו מכינים מנורה ייחודית עם גימור פרימיום.</p>
        <a className="btn" href="#order">התחילו ליצור עכשיו</a>
        <div aria-hidden="true" style={{marginTop:'1rem',opacity:.85}}>⭐️⭐️⭐️⭐️⭐️ לקוחות מרוצים בישראל</div>
      </div>
    </section>
  )
}

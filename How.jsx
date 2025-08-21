import React from 'react'
export default function How(){
  return (
    <section id="how">
      <h2>איך זה עובד</h2>
      <div className="cards">
        <article className="card">
          <img alt="בחירה" loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23e6f4ff'/%3E%3Ctext x='50%25' y='52%25' text-anchor='middle' font-family='Arial' font-size='28'%3Eבחרו בסיס ותאורה%3C/text%3E%3C/svg%3E"/>
          <div className="pad"><strong>1. בחירה</strong><p>בסיס עץ/אלומיניום, תאורת RGB או לבנה.</p></div>
        </article>
        <article className="card">
          <img alt="העלאה" loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23f3e8ff'/%3E%3Ctext x='50%25' y='52%25' text-anchor='middle' font-family='Arial' font-size='28'%3Eהעלו תמונה או טקסט%3C/text%3E%3C/svg%3E"/>
          <div className="pad"><strong>2. העלאה</strong><p>JPG/PNG/SVG. תצוגה מקדימה בזמן אמת.</p></div>
        </article>
        <article className="card">
          <img alt="ייצור" loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23eaffea'/%3E%3Ctext x='50%25' y='52%25' text-anchor='middle' font-family='Arial' font-size='28'%3Eייצור ומשלוח מהיר%3C/text%3E%3C/svg%3E"/>
          <div className="pad"><strong>3. ייצור</strong><p>חריטת לייזר/UV והכנה למשלוח.</p></div>
        </article>
      </div>
    </section>
  )
}

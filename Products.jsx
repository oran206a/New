import React from 'react'
export default function Products(){
  return (
    <section id="products">
      <h2>מוצרים מובילים</h2>
      <div className="cards">
        <article className="card"><img loading="lazy" alt="מלבן" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23edf9ff'/%3E%3Ctext x='50%25' y='52%25' text-anchor='middle' font-family='Arial' font-size='28'%3Eמלבן%3C/text%3E%3C/svg%3E"/><div className="pad"><strong>מלבן קלאסי</strong><p>עובי 4–5 מ״מ · בסיס תאורה USB</p></div></article>
        <article className="card"><img loading="lazy" alt="לב" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23fff3f3'/%3E%3Ctext x='50%25' y='52%25' text-anchor='middle' font-family='Arial' font-size='28'%3Eלב%3C/text%3E%3C/svg%3E"/><div className="pad"><strong>לב</strong><p>מתנה רומנטית עם תאורת RGB</p></div></article>
      </div>
    </section>
  )
}

import React from 'react'
export default function Pricing(){
  return (
    <section id="pricing">
      <h2>מחירון (כולל מע"מ)</h2>
      <table className="table">
        <thead><tr><th>מוצר</th><th>מידה</th><th>בסיס</th><th>מחיר</th></tr></thead>
        <tbody>
          <tr><td>אקריליק מלבני – S</td><td>10×15 ס״מ</td><td>בסיס עץ</td><td>₪ 119</td></tr>
          <tr><td>אקריליק מלבני – M</td><td>13×18 ס״מ</td><td>בסיס עץ</td><td>₪ 149</td></tr>
          <tr><td>אקריליק מלבני – L</td><td>18×24 ס״מ</td><td>בסיס עץ</td><td>₪ 199</td></tr>
          <tr><td>אקריליק לב – S</td><td>12×12 ס״מ</td><td>בסיס RGB</td><td>₪ 159</td></tr>
          <tr><td>אקריליק לב – M</td><td>16×16 ס״מ</td><td>בסיס RGB</td><td>₪ 199</td></tr>
          <tr><td>אקריליק לב – L</td><td>20×20 ס״מ</td><td>בסיס RGB</td><td>₪ 239</td></tr>
        </tbody>
      </table>
    </section>
  )
}

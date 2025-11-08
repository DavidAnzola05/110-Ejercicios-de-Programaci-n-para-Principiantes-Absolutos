function ejercicio75_DAAC() {
  let m_DAAC = 7, n_DAAC = 10;
  const p = safePrompt_DAAC("Ej75 - m,n (ej:7,10)");
  if (p) { const parts = p.split(",").map(x=>parseInt(x)); if (parts.length>=2){ m_DAAC=parts[0]; n_DAAC=parts[1]; } }
  console.log(`75️⃣ Tabla del ${m_DAAC} hasta ${n_DAAC}:`);
  for (let i=1;i<=n_DAAC;i++) console.log(`${m_DAAC} x ${i} = ${m_DAAC * i}`);
}
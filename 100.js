function ejercicio100_DAAC() {
  let n_DAAC = 1000;
  const p = safePrompt_DAAC("Ej100 - ingrese n (ej:1000)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let automorfos = [];
  for (let i=0;i<=n_DAAC;i++){
    let sq = (i*i).toString();
    let s = i.toString();
    if (sq.endsWith(s)) automorfos.push(i);
  }
  console.log("100️⃣ Automorfos hasta", n_DAAC, ":", automorfos);
}
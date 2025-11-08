function ejercicio95_DAAC() {
  let valor_DAAC = 25;
  const p = safePrompt_DAAC("Ej95 - ingrese valor para sqrt (ej:25)");
  if (p) { const v = parseFloat(p); if (!isNaN(v)) valor_DAAC = v; }
  let x = valor_DAAC; 
  for (let i=0;i<10;i++) {
    let paso = (x + valor_DAAC / x) / 2;
    console.log(`95️⃣ Iter ${i+1}: x=${x.toFixed(6)} -> siguiente=${paso.toFixed(6)}`);
    x = paso;
  }
  console.log("95️⃣ Aproximación sqrt(", valor_DAAC, ") ≈", x);
}

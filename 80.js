function ejercicio80_DAAC() {
  let n_DAAC = 10;
  const p = safePrompt_DAAC("Ej80 - ingrese n (ej:10)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let pares = [], nones = [];
  for (let i=0;i<=n_DAAC;i++) (i%2===0?pares:nones).push(i);
  console.log("80️⃣ Pares:", pares, "Nones:", nones);
}

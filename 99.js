function ejercicio99_DAAC() {
  let value_DAAC = 27, n_DAAC = 3;
  const p = safePrompt_DAAC("Ej99 - value,n (ej:27,3)");
  if (p) { const parts = p.split(",").map(x=>parseFloat(x)); if (parts.length>=2){ value_DAAC=parts[0]; n_DAAC=parts[1]; } }
  let lo = 0, hi = Math.max(1, value_DAAC), mid;
  for (let i=0;i<60;i++){
    mid = (lo + hi) / 2;
    if (Math.pow(mid, n_DAAC) > value_DAAC) hi = mid; else lo = mid;
  }
  console.log(`99️⃣ Aproximación ${n_DAAC}-ésima raíz de ${value_DAAC} ≈`, mid);
}
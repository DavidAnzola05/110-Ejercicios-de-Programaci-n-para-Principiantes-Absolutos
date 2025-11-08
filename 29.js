function ejercicio29_DAAC() {
  let n_DAAC = 30;
  const p_DAAC = safePrompt_DAAC("Ej29 - ingrese n (ej:30)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) n_DAAC = v; }
  const primos_DAAC = [];
  for (let i_DAAC = 2; i_DAAC <= n_DAAC; i_DAAC++) {
    let esP_DAAC = true;
    for (let j_DAAC = 2; j_DAAC <= Math.sqrt(i_DAAC); j_DAAC++) {
      if (i_DAAC % j_DAAC === 0) { esP_DAAC = false; break; }
    }
    if (esP_DAAC) primos_DAAC.push(i_DAAC);
  }
  console.log("29️⃣ Primos hasta", n_DAAC, ":", primos_DAAC);
}

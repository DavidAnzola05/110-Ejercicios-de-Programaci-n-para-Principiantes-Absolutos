function ejercicio39_DAAC() {
  let num_DAAC = 25;
  const p_DAAC = safePrompt_DAAC("Ej39 - ingrese número decimal (ej:25)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) num_DAAC = v; }
  let pasos_DAAC = [];
  let n_DAAC = num_DAAC;
  if (n_DAAC === 0) pasos_DAAC.push("0 -> binario 0");
  while (n_DAAC > 0) {
    let r_DAAC = n_DAAC % 2;
    pasos_DAAC.push(`${n_DAAC} / 2 -> cociente=${Math.floor(n_DAAC/2)}, resto=${r_DAAC}`);
    n_DAAC = Math.floor(n_DAAC / 2);
  }
  let bin_DAAC = num_DAAC.toString(2);
  console.log("39️⃣ Decimal:", num_DAAC, "Binario:", bin_DAAC);
  console.log("   Pasos:");
  pasos_DAAC.forEach(p=>console.log("   ", p));
}
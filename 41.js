function ejercicio41_DAAC() {
  let n_DAAC = 153;
  const p_DAAC = safePrompt_DAAC("Ej41 - ingrese entero (ej:153)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) n_DAAC = v; }
  let s_DAAC = n_DAAC.toString();
  let power_DAAC = s_DAAC.length;
  let sum_DAAC = s_DAAC.split("").reduce((acc,d)=>acc + Math.pow(parseInt(d), power_DAAC), 0);
  console.log("41️⃣", n_DAAC, "Armstrong?", sum_DAAC === n_DAAC);
}
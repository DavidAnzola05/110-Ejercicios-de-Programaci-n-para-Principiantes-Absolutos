function ejercicio47_DAAC() {
  let n_DAAC = 123456;
  const p_DAAC = safePrompt_DAAC("Ej47 - ingrese entero (ej:123456)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) n_DAAC = v; }
  let numDigits_DAAC = n_DAAC.toString().replace('-','').length;
  console.log("47️⃣ Número de dígitos:", numDigits_DAAC);
}

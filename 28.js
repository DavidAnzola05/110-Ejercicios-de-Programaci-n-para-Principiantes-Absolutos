function ejercicio28_DAAC() {
  let n_DAAC = 10;
  const p_DAAC = safePrompt_DAAC("Ej28 - ingrese n (ej:10)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) n_DAAC = v; }
  let suma_DAAC = 0;
  for (let i_DAAC = 2; i_DAAC <= n_DAAC; i_DAAC+=2) suma_DAAC += i_DAAC;
  console.log("28️⃣ Suma pares hasta", n_DAAC, "=", suma_DAAC);
}
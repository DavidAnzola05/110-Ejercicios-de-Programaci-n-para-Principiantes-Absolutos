    function ejercicio43_DAAC() {
  let n_DAAC = 5;
  const p_DAAC = safePrompt_DAAC("Ej43 - ingrese n (ej:5)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) n_DAAC = v; }
  let suma_DAAC = 0;
  let fact_DAAC = 1;
  for (let i_DAAC = 1; i_DAAC <= n_DAAC; i_DAAC++) {
    fact_DAAC *= i_DAAC;
    suma_DAAC += fact_DAAC;
  }
  console.log(`43️⃣ 1!+...+${n_DAAC}! =`, suma_DAAC);
}
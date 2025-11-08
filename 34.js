function ejercicio34_DAAC() {
  let n_DAAC = 5;
  const p_DAAC = safePrompt_DAAC("Ej34 - ingrese número de filas (ej:5)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) n_DAAC = v; }
  console.log("34️⃣ Patrón de triángulo:");
  for (let i_DAAC = 1; i_DAAC <= n_DAAC; i_DAAC++) {
    console.log("*".repeat(i_DAAC));
  }
}
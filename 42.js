function ejercicio42_DAAC() {
  let n_DAAC = 28;
  const p_DAAC = safePrompt_DAAC("Ej42 - ingrese entero (ej:28)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) n_DAAC = v; }
  let sumaDiv_DAAC = 0;
  for (let i_DAAC = 1; i_DAAC <= n_DAAC/2; i_DAAC++) if (n_DAAC % i_DAAC === 0) sumaDiv_DAAC += i_DAAC;
  console.log("42️⃣", n_DAAC, "Perfecto?", sumaDiv_DAAC === n_DAAC);
}
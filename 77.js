function ejercicio77_DAAC() {
  let n_DAAC = 10;
  const p = safePrompt_DAAC("Ej77 - ingrese n (ej:10)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let triangular = n_DAAC * (n_DAAC + 1) / 2;
  console.log(`77️⃣ Triangular(${n_DAAC}) =`, triangular);
}
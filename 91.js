function ejercicio91_DAAC() {
  let n_DAAC = 12321;
  const p = safePrompt_DAAC("Ej91 - ingrese entero (ej:12321)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let original = Math.abs(n_DAAC), rev = 0, temp = original;
  while (temp > 0) { rev = rev*10 + (temp % 10); temp = Math.floor(temp / 10); }
  console.log("91️⃣", n_DAAC, "es palíndromo?", rev === original);
}
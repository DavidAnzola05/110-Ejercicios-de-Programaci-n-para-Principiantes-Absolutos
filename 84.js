function ejercicio84_DAAC() {
  let n_DAAC = 4;
  const p = safePrompt_DAAC("Ej84 - ingrese n (ej:4)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let I = Array.from({length:n_DAAC}, (_,i)=> Array.from({length:n_DAAC}, (_,j)=> i===j?1:0));
  console.log("84️⃣ Matriz identidad n:", I);
}
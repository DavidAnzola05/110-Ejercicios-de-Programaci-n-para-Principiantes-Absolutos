function ejercicio85_DAAC() {
  let n_DAAC = 297;
  const p = safePrompt_DAAC("Ej85 - ingrese entero (ej:297)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let sq = (n_DAAC * n_DAAC).toString();
  
  let r = sq.slice(-n_DAAC.toString().length) || "0";
  let l = sq.slice(0, sq.length - r.length) || "0";
  let sum = parseInt(l) + parseInt(r);
  console.log("85️⃣ Kaprekar?", sum === n_DAAC, "detalles:", {n:n_DAAC, sq, l, r, sum});
}
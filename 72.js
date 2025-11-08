function ejercicio72_DAAC() {
  let n_DAAC = 10;
  const p = safePrompt_DAAC("Ej72 - ingrese n (ej:10)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let arr = Array.from({length: n_DAAC}, (_,i)=>i+1);
  for (let i = arr.length -1; i>0; i--) {
    let j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  console.log("72️⃣ Barajado 1..n:", arr);
}
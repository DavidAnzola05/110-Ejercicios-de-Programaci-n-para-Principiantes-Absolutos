function ejercicio61_DAAC() {
  let n_DAAC = 10, a_DAAC = 1, b_DAAC = 100;
  const p = safePrompt_DAAC("Ej61 - n,a,b (ej:10,1,100)");
  if (p) { const parts = p.split(",").map(x=>parseInt(x)); if (parts.length>=3){ n_DAAC=parts[0]; a_DAAC=parts[1]; b_DAAC=parts[2]; } }
  let arr_DAAC = Array.from({length:n_DAAC}, ()=> Math.floor(Math.random()*(b_DAAC - a_DAAC + 1)) + a_DAAC);
  console.log("61️⃣ Aleatorios:", arr_DAAC);
}
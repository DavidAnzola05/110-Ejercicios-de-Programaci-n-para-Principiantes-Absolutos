function ejercicio81_DAAC() {
  let arr_DAAC = [1,3,20,4,1,0];
  const p = safePrompt_DAAC("Ej81 - lista de nums separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  let pico = -1;
  for (let i=1;i<arr_DAAC.length-1;i++) {
    if (arr_DAAC[i] > arr_DAAC[i-1] && arr_DAAC[i] > arr_DAAC[i+1]) { pico = i; break; }
  }
  console.log("81️⃣ Índice pico:", pico);
}
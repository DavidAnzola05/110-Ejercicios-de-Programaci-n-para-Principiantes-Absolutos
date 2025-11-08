function ejercicio70_DAAC() {
  let arr_DAAC = [2,4,4,4,5,5,7,9];
  const p = safePrompt_DAAC("Ej70 - lista de numeros separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  const n = arr_DAAC.length;
  const mean = arr_DAAC.reduce((a,b)=>a+b,0)/n;
  const varPop = arr_DAAC.reduce((a,b)=>a + Math.pow(b-mean,2), 0) / n;
  const sdPop = Math.sqrt(varPop);
  console.log("70️⃣ Varianza poblacional:", varPop.toFixed(4), "Desviación:", sdPop.toFixed(4));
}
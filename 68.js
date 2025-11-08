function ejercicio68_DAAC() {
  let arr_DAAC = [5,2,9,1,7];
  const p = safePrompt_DAAC("Ej68 - lista de numeros separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  arr_DAAC.sort((a,b)=>a-b);
  let mid = Math.floor(arr_DAAC.length/2);
  let med = arr_DAAC.length % 2 === 1 ? arr_DAAC[mid] : (arr_DAAC[mid-1] + arr_DAAC[mid]) / 2;
  console.log("68️⃣ Mediana:", med, "Array ordenado:", arr_DAAC);
}

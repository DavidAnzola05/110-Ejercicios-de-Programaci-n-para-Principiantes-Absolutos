function ejercicio54_DAAC() {
  let arr_DAAC = [10,5,8,20,3];
  const p_DAAC = safePrompt_DAAC("Ej54 - lista de numeros separados por coma");
  if (p_DAAC) arr_DAAC = p_DAAC.split(",").map(x=>parseFloat(x));
  let uniqueSorted_DAAC = [...new Set(arr_DAAC)].sort((a,b)=>b-a);
  let segundo_DAAC = uniqueSorted_DAAC.length >= 2 ? uniqueSorted_DAAC[1] : null;
  console.log("54️⃣ Segundo mayor:", segundo_DAAC);
}
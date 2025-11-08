function ejercicio32_DAAC() {
  let arr_DAAC = [3,1,4,1,5,9];
  const p_DAAC = safePrompt_DAAC("Ej32 - lista de números separados por coma");
  if (p_DAAC) arr_DAAC = p_DAAC.split(",").map(x=>parseFloat(x));
  let sorted_DAAC = [...arr_DAAC].sort((a,b)=>a-b);
  console.log("32️⃣ Orden ascendente:", sorted_DAAC);
}

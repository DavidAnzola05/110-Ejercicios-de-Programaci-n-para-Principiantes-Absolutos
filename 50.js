function ejercicio50_DAAC() {
  let arr_DAAC = [1,2,2,3,4,4,5];
  const p_DAAC = safePrompt_DAAC("Ej50 - lista con duplicados separados por coma");
  if (p_DAAC) arr_DAAC = p_DAAC.split(",").map(x=>isNaN(x)?x:parseFloat(x));
  let unico_DAAC = [...new Set(arr_DAAC)];
  console.log("50️⃣ Sin duplicados:", unico_DAAC);
}

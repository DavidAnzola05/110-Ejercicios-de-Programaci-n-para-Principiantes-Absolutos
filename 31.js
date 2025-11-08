function ejercicio31_DAAC() {
  let arr_DAAC = [5, -2, 18, 0, 7];
  const p_DAAC = safePrompt_DAAC("Ej31 - ingrese lista de números separados por coma");
  if (p_DAAC) arr_DAAC = p_DAAC.split(",").map(x=>parseFloat(x));
  let max_DAAC = Math.max(...arr_DAAC);
  let min_DAAC = Math.min(...arr_DAAC);
  console.log("31️⃣ Max:", max_DAAC, "Min:", min_DAAC);
}

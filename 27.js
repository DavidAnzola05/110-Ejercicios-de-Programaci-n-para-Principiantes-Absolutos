function ejercicio27_DAAC() {
  let arr_DAAC = [1,2,3,4,5];
  const p_DAAC = safePrompt_DAAC("Ej27 - lista de números separados por comas (ej:1,2,3)");
  if (p_DAAC) arr_DAAC = p_DAAC.split(",").map(x=>isNaN(x)?x:parseFloat(x));
  let inv_DAAC = [...arr_DAAC].reverse();
  console.log("27️⃣ Original:", arr_DAAC, "Invertido:", inv_DAAC);
}

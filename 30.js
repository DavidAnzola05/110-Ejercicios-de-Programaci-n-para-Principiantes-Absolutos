function ejercicio30_DAAC() {
  let arr_DAAC = [10, 20, 30, 40];
  const p_DAAC = safePrompt_DAAC("Ej30 - ingrese lista de números separados por coma (ej:10,20,30)");
  if (p_DAAC) arr_DAAC = p_DAAC.split(",").map(x=>parseFloat(x));
  const suma_DAAC = arr_DAAC.reduce((a,b)=>a+b, 0);
  const prom_DAAC = arr_DAAC.length ? suma_DAAC/arr_DAAC.length : 0;
  console.log("30️⃣ Suma:", suma_DAAC, "Promedio:", prom_DAAC);
}
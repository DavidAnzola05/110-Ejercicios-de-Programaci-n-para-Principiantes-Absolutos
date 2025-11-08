function ejercicio38_DAAC() {
  let montoUSD_DAAC = 100;
  let tasaEUR_DAAC = 0.93; 
  const p_DAAC = safePrompt_DAAC("Ej38 - ingrese monto USD (ej:100) y/o tasa USD->EUR (ej:0.93) separado por coma");
  if (p_DAAC) {
    const parts_DAAC = p_DAAC.split(",").map(x=>parseFloat(x));
    if (!isNaN(parts_DAAC[0])) montoUSD_DAAC = parts_DAAC[0];
    if (!isNaN(parts_DAAC[1])) tasaEUR_DAAC = parts_DAAC[1];
  }

  let paso_DAAC = montoUSD_DAAC * tasaEUR_DAAC;
  console.log(`38️⃣ ${montoUSD_DAAC} USD -> pasos: USD*tasa = ${paso_DAAC.toFixed(2)} EUR (tasa=${tasaEUR_DAAC})`);
}
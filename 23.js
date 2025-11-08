function ejercicio23_DAAC() {
  let radio_DAAC = 7;
  const p_DAAC = safePrompt_DAAC("Ej23 - ingrese radio (ej:7)");
  if (p_DAAC) { const r = parseFloat(p_DAAC); if (!isNaN(r)) radio_DAAC = r; }

  let pi_DAAC = Math.PI;
  let area_DAAC = pi_DAAC * radio_DAAC * radio_DAAC; 
  let perimetro_DAAC = 2 * pi_DAAC * radio_DAAC;   
  console.log(`23️⃣ Radio=${radio_DAAC} -> Area (πr^2)=${area_DAAC.toFixed(4)}, Perímetro (2πr)=${perimetro_DAAC.toFixed(4)}`);
}
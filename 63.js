function ejercicio63_DAAC() {
  const p = safePrompt_DAAC("Ej63 - ingrese Kelvin (ej:300)");
  if (p) { const v = parseFloat(p); if (!isNaN(v)) kelvin_DAAC = v; }
  let c_DAAC = kelvin_DAAC - 273.15;
  let f_DAAC = (c_DAAC * 9/5) + 32;
  console.log(`63️⃣ ${kelvin_DAAC}K = ${c_DAAC.toFixed(2)}°C = ${f_DAAC.toFixed(2)}°F`);
}
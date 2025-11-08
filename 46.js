function ejercicio46_DAAC() {
  let grados_DAAC = 180;
  const p_DAAC = safePrompt_DAAC("Ej46 - ingrese grados (ej:180)");
  if (p_DAAC) { const v = parseFloat(p_DAAC); if (!isNaN(v)) grados_DAAC = v; }
  let rad_DAAC = grados_DAAC * Math.PI / 180;
  console.log(`46️⃣ ${grados_DAAC}° = ${rad_DAAC.toFixed(6)} rad (paso: *π/180)`);
}
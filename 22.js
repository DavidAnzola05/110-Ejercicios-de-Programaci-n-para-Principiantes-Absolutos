function ejercicio22_DAAC() {
  let base_DAAC = 10, altura_DAAC = 5;
  const p_DAAC = safePrompt_DAAC("Ej22 - base y altura separados por coma (ej:10,5)");
  if (p_DAAC) { const [B,H] = p_DAAC.split(",").map(x=>parseFloat(x)); if (!isNaN(B) && !isNaN(H)) { base_DAAC=B; altura_DAAC=H; } }
  let area_DAAC = (base_DAAC * altura_DAAC) / 2;
  console.log("22️⃣ Área del triángulo:", area_DAAC);
}
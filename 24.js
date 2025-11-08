function ejercicio24_DAAC() {
  let base_DAAC = 3, exp_DAAC = 4;
  const p_DAAC = safePrompt_DAAC("Ej24 - base,exponente (ej:3,4)");
  if (p_DAAC) { const [B,E] = p_DAAC.split(",").map(x=>parseFloat(x)); if (!isNaN(B)&&!isNaN(E)){base_DAAC=B;exp_DAAC=E;} }
  let pot_DAAC = Math.pow(base_DAAC, exp_DAAC);
  console.log(`24️⃣ ${base_DAAC}^${exp_DAAC} =`, pot_DAAC);
}
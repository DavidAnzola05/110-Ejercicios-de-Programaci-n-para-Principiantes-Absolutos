// -----------------------------
function ejercicio57_DAAC() {
  let pass_DAAC = "Abcd1234";
  const p_DAAC = safePrompt_DAAC("Ej57 - ingrese contraseña (ej:Abcd1234)");
  if (p_DAAC) pass_DAAC = p_DAAC;
  let okLen_DAAC = pass_DAAC.length >= 8;
  let okNum_DAAC = /[0-9]/.test(pass_DAAC);
  let okUpper_DAAC = /[A-Z]/.test(pass_DAAC);
  console.log("57️⃣ Contraseña fuerte?", okLen_DAAC && okNum_DAAC && okUpper_DAAC);
}
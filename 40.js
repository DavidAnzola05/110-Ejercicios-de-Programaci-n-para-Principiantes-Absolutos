function ejercicio40_DAAC() {
  let binstr_DAAC = "11001";
  const p_DAAC = safePrompt_DAAC("Ej40 - ingrese número binario (ej:11001)");
  if (p_DAAC) binstr_DAAC = p_DAAC;
  let dec_DAAC = parseInt(binstr_DAAC, 2);
  console.log("40️⃣ Binario:", binstr_DAAC, "Decimal:", dec_DAAC);
}
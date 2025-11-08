function ejercicio33_DAAC() {
  let texto_DAAC = "Hola Mundo";
  const p_DAAC = safePrompt_DAAC("Ej33 - ingrese un texto");
  if (p_DAAC) texto_DAAC = p_DAAC;
  const matches_DAAC = texto_DAAC.match(/[aeiouáéíóúü]/ig) || [];
  console.log("33️⃣ Texto:", texto_DAAC, "Vocales encontradas:", matches_DAAC.length, "Lista:", matches_DAAC);
}
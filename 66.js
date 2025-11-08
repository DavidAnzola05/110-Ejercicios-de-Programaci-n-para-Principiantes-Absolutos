function ejercicio66_DAAC() {
  let texto_DAAC = "   hola    mundo   esto   es   prueba   ";
  const p = safePrompt_DAAC("Ej66 - ingrese texto");
  if (p) texto_DAAC = p;
  let normalized_DAAC = texto_DAAC.trim().replace(/\s+/g,' ');
  console.log("66️⃣ Normalizado:", `"${normalized_DAAC}"`);
}
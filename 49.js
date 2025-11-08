function ejercicio49_DAAC() {
  let texto_DAAC = "abracadabra", char_DAAC = "a";
  const p_DAAC = safePrompt_DAAC("Ej49 - ingrese texto,char separados por coma (ej:abracadabra,a)");
  if (p_DAAC) { const parts = p_DAAC.split(","); if (parts.length>=2){ texto_DAAC=parts[0]; char_DAAC=parts[1]; } }
  let count_DAAC = [...texto_DAAC].filter(ch=>ch===char_DAAC).length;
  console.log(`49️⃣ En "${texto_DAAC}" el caracter "${char_DAAC}" aparece ${count_DAAC} veces`);
}
function ejercicio60_DAAC() {
  let texto_DAAC = "Hola mundo hola";
  const p_DAAC = safePrompt_DAAC("Ej60 - ingrese texto");
  if (p_DAAC) texto_DAAC = p_DAAC;
  const palabras_DAAC = texto_DAAC.trim().split(/\s+/).filter(Boolean);
  let conteo_DAAC = {};
  palabras_DAAC.forEach(w => {
    let key_DAAC = w.toLowerCase();
    conteo_DAAC[key_DAAC] = (conteo_DAAC[key_DAAC] || 0) + 1;
  });
  console.log("60️⃣ Conteo de palabras:", conteo_DAAC);
}

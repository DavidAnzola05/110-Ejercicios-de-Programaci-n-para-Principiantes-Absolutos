function ejercicio48_DAAC() {
  let s_DAAC = "hola como estas";
  const p_DAAC = safePrompt_DAAC("Ej48 - ingrese texto (ej:hola como estas)");
  if (p_DAAC) s_DAAC = p_DAAC;
  let replaced_DAAC = s_DAAC.replace(/\s+/g, "-");
  console.log("48️⃣ Reemplazar espacios:", replaced_DAAC);
}


function ejercicio52_DAAC() {
  let email_DAAC = "ejemplo@dominio.com";
  const p_DAAC = safePrompt_DAAC("Ej52 - ingrese email (ej:ejemplo@dominio.com)");
  if (p_DAAC) email_DAAC = p_DAAC;
  const valido_DAAC = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_DAAC);
  console.log("52️⃣ Email:", email_DAAC, "válido?", valido_DAAC);
}
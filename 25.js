function ejercicio25_DAAC() {
  let x_DAAC = "hola", y_DAAC = "mundo";
  const p_DAAC = safePrompt_DAAC("Ej25 - ingrese dos valores separados por coma (ej:hola,mundo)");
  if (p_DAAC) { const [X,Y] = p_DAAC.split(","); if (X!==undefined && Y!==undefined){ x_DAAC=X; y_DAAC=Y; } }
  console.log("25️⃣ Antes swap:", x_DAAC, y_DAAC);
  let temp_DAAC = x_DAAC;
  x_DAAC = y_DAAC;
  y_DAAC = temp_DAAC;
  console.log("25️⃣ Después swap:", x_DAAC, y_DAAC);
}
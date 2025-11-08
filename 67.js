function ejercicio67_DAAC() {
  let fechaStr_DAAC = "01/01/2025", dias_DAAC = 10;
  const p = safePrompt_DAAC("Ej67 - fecha(dd/mm/yyyy),dias (ej:01/01/2025,10)");
  if (p) { const parts = p.split(","); if (parts.length>=2){ fechaStr_DAAC = parts[0]; dias_DAAC = parseInt(parts[1]); } }
  const [d,m,y] = fechaStr_DAAC.split("/").map(x=>parseInt(x));
  let fecha_DAAC = new Date(y, m-1, d);
  fecha_DAAC.setDate(fecha_DAAC.getDate() + dias_DAAC);
  console.log("67️⃣ Fecha resultante:", fecha_DAAC.toLocaleDateString());
}

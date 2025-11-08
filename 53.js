function ejercicio53_DAAC() {
  let notas_DAAC = [ [4,0.3], [5,0.4], [3.5,0.3] ]; // [nota, peso]
  const p_DAAC = safePrompt_DAAC("Ej53 - (opcional) no soporta prompt complejo en Node; usando ejemplo");
  let totalPeso_DAAC = notas_DAAC.reduce((a,b)=>a+b[1],0);
  let sumaPond_DAAC = notas_DAAC.reduce((a,b)=>a + b[0]*b[1],0);
  let promedioPond_DAAC = totalPeso_DAAC ? sumaPond_DAAC / totalPeso_DAAC : 0;
  console.log("53️⃣ Promedio ponderado:", promedioPond_DAAC.toFixed(4));
}
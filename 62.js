function ejercicio62_DAAC() {
  let ejemplo_DAAC = [4,5,6,7];
  const p = safePrompt_DAAC("Ej62 - lista separados por coma (ej:4,5,6,7)");
  let arr = ejemplo_DAAC;
  if (p) arr = p.split(",").map(x=>parseFloat(x));
  const suma = arr.reduce((a,b)=>a+b,0);
  const prom = arr.length ? suma/arr.length : 0;
  console.log("62️⃣ Suma:", suma, "Promedio:", prom);
}
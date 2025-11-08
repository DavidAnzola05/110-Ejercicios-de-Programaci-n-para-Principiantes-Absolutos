function ejercicio74_DAAC() {
  let arr_DAAC = [10,11,12,13,14];
  const p = safePrompt_DAAC("Ej74 - lista de numeros separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  let suma = arr_DAAC.reduce((acc, val, idx) => (idx % 2 === 1 ? acc + val : acc), 0);
  console.log("74️⃣ Suma índices impares:", suma);
}
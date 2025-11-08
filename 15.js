function ejercicio15_DAAC() {
  let num_DAAC = 24683;
  let pares_DAAC = [...num_DAAC.toString()].filter(d => d % 2 === 0);
  let suma_DAAC = pares_DAAC.reduce((a, b) => a + Number(b), 0);
  console.log("15️⃣ Dígitos pares:", pares_DAAC.length, "Suma pares:", suma_DAAC);
}
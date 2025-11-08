function ejercicio12_DAAC() {
  let num_DAAC = 1234, suma_DAAC = 0, temp_DAAC = num_DAAC;
  while (temp_DAAC > 0) {
    suma_DAAC += temp_DAAC % 10;
    temp_DAAC = Math.floor(temp_DAAC / 10);
  }
  console.log(`12️⃣ Suma de dígitos de ${num_DAAC}:`, suma_DAAC);
}
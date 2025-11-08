function ejercicio21_DAAC() {
  let a_DAAC = 8, b_DAAC = 7, c_DAAC = 9;
  const p_DAAC = safePrompt_DAAC("Ej21 - ingrese tres números separados por comas (ej: 8,7,9)");
  if (p_DAAC) {
    const parts_DAAC = p_DAAC.split(",").map(x=>parseFloat(x));
    if (parts_DAAC.length >= 3) { a_DAAC = parts_DAAC[0]; b_DAAC = parts_DAAC[1]; c_DAAC = parts_DAAC[2]; }
  }
  let promedio_DAAC = (a_DAAC + b_DAAC + c_DAAC) / 3;
  console.log("21️⃣ Promedio de 3 números:", promedio_DAAC);
}
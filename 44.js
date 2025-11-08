function ejercicio44_DAAC() {
  let a_DAAC = 1, b_DAAC = -3, c_DAAC = 2; // x^2 -3x +2 =0 -> raíces 1 y 2
  const p_DAAC = safePrompt_DAAC("Ej44 - ingrese a,b,c separados por comas (ej:1,-3,2)");
  if (p_DAAC) { const parts = p_DAAC.split(",").map(x=>parseFloat(x)); if (parts.length>=3) {a_DAAC=parts[0];b_DAAC=parts[1];c_DAAC=parts[2];} }
  let disc_DAAC = b_DAAC*b_DAAC - 4*a_DAAC*c_DAAC;
  if (disc_DAAC < 0) {
    console.log("44️⃣ Discriminante < 0 -> raíces complejas");
    let real_DAAC = -b_DAAC/(2*a_DAAC);
    let imag_DAAC = Math.sqrt(Math.abs(disc_DAAC)) / (2*a_DAAC);
    console.log(`    Raíces: ${real_DAAC.toFixed(4)} ± ${imag_DAAC.toFixed(4)}i`);
  } else {
    let r1_DAAC = (-b_DAAC + Math.sqrt(disc_DAAC)) / (2*a_DAAC);
    let r2_DAAC = (-b_DAAC - Math.sqrt(disc_DAAC)) / (2*a_DAAC);
    console.log("44️⃣ Raíces reales:", r1_DAAC, r2_DAAC);
  }
}
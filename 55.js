function ejercicio55_DAAC() {
  let arr_DAAC = [1,2,3,4,5], k_DAAC = 2;
  const p_DAAC = safePrompt_DAAC("Ej55 - lista,k (ej:1,2,3,4,5,2)");
  if (p_DAAC) {
    const parts = p_DAAC.split(",");
    k_DAAC = parseInt(parts.pop());
    arr_DAAC = parts.map(x=>parseFloat(x));
  }
  k_DAAC = k_DAAC % arr_DAAC.length;
  let rotated_DAAC = arr_DAAC.slice(-k_DAAC).concat(arr_DAAC.slice(0, -k_DAAC));
  console.log("55️⃣ Rotado derecha k:", rotated_DAAC);
}

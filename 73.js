function ejercicio73_DAAC() {
  let arr_DAAC = [1,3,5,7,9,11], target_DAAC = 7;
  const p = safePrompt_DAAC("Ej73 - lista,target (ej:1,3,5,7,9,11,7)");
  if (p) { const parts = p.split(","); target_DAAC = parseFloat(parts.pop()); arr_DAAC = parts.map(x=>parseFloat(x)); }
  let lo = 0, hi = arr_DAAC.length -1, found = -1;
  while (lo <= hi) {
    let mid = Math.floor((lo+hi)/2);
    if (arr_DAAC[mid] === target_DAAC) { found = mid; break; }
    else if (arr_DAAC[mid] < target_DAAC) lo = mid + 1;
    else hi = mid -1;
  }
  console.log("73️⃣ Índice encontrado:", found);
}

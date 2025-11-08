function ejercicio83_DAAC() {
  let arr_DAAC = [1,2,3,2,4,2], target_DAAC = 2;
  const p = safePrompt_DAAC("Ej83 - lista,target (ej:1,2,3,2,4,2,2)");
  if (p) {
    const parts = p.split(",").map(x=>x.trim());
    target_DAAC = parseFloat(parts.pop());
    arr_DAAC = parts.map(x=>parseFloat(x));
  }
  let count = arr_DAAC.reduce((acc,v)=>acc + (v===target_DAAC?1:0), 0);
  console.log("83️⃣ Ocurrencias de", target_DAAC, "=", count);
}

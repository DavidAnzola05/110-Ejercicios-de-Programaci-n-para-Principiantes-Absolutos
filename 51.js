function ejercicio51_DAAC() {
  let a_DAAC = [1,3,5], b_DAAC = [2,4,6];
  const p_DAAC = safePrompt_DAAC("Ej51 - dos listas separadas por ; ejemplo:1,3,5;2,4,6");
  if (p_DAAC) {
    const parts = p_DAAC.split(";");
    if (parts.length>=2) { a_DAAC = parts[0].split(",").map(x=>parseFloat(x)); b_DAAC = parts[1].split(",").map(x=>parseFloat(x)); }
  }
  let merged_DAAC = [...a_DAAC, ...b_DAAC].sort((x,y)=>x-y);
  console.log("51️⃣ Merge ordenado:", merged_DAAC);
} 
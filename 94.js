function ejercicio94_DAAC() {
  let arr_DAAC = [2,4,1,3,5];
  const p = safePrompt_DAAC("Ej94 - lista separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  let inv = 0;
  for (let i=0;i<arr_DAAC.length;i++) for (let j=i+1;j<arr_DAAC.length;j++) if (arr_DAAC[i] > arr_DAAC[j]) inv++;
  console.log("94️⃣ Inversiones en array:", inv);
}
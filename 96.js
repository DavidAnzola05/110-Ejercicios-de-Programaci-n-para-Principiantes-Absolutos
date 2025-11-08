function ejercicio96_DAAC() {
  let arr_DAAC = [-2,1,-3,4,-1,2,1,-5,4];
  const p = safePrompt_DAAC("Ej96 - lista separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  let maxSoFar = -Infinity, maxEnding = 0, start=0, end=0, s=0;
  for (let i=0;i<arr_DAAC.length;i++){
    maxEnding += arr_DAAC[i];
    if (maxSoFar < maxEnding) { maxSoFar = maxEnding; start = s; end = i; }
    if (maxEnding < 0) { maxEnding = 0; s = i+1; }
  }
  console.log("96️⃣ Max subarray sum:", maxSoFar, "desde", start, "hasta", end);
}
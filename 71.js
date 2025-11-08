function ejercicio71_DAAC() {
  let s_DAAC = "abcabcbb";
  const p = safePrompt_DAAC("Ej71 - ingrese cadena (ej:abcabcbb)");
  if (p) s_DAAC = p;
  let seen = new Map();
  let start = 0, maxLen = 0, best = "";
  for (let i=0;i<s_DAAC.length;i++){
    if (seen.has(s_DAAC[i]) && seen.get(s_DAAC[i]) >= start) start = seen.get(s_DAAC[i]) + 1;
    seen.set(s_DAAC[i], i);
    if (i - start + 1 > maxLen) { maxLen = i - start + 1; best = s_DAAC.slice(start, i+1); }
  }
  console.log("71️⃣ Longitud:", maxLen, "Subcadena:", best);
}
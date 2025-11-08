function ejercicio79_DAAC() {
  let s_DAAC = "aaabbcddd";
  const p = safePrompt_DAAC("Ej79 - ingrese cadena (ej:aaabbcddd)");
  if (p) s_DAAC = p;
  let out = "", count = 1;
  for (let i=1;i<=s_DAAC.length;i++){
    if (s_DAAC[i] === s_DAAC[i-1]) count++;
    else { out += s_DAAC[i-1] + (count>1?count:""); count = 1; }
  }
  console.log("79️⃣ Comprimido:", out);
}
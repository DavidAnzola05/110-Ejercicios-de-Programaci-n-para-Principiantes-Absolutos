function ejercicio56_DAAC() {
  let s1_DAAC = "ACE", s2_DAAC = "BDF";
  const p_DAAC = safePrompt_DAAC("Ej56 - s1,s2 (ej:ACE,BDF)");
  if (p_DAAC) { const parts = p_DAAC.split(","); if (parts.length>=2){ s1_DAAC=parts[0]; s2_DAAC=parts[1]; } }
  let maxL_DAAC = Math.max(s1_DAAC.length, s2_DAAC.length);
  let out_DAAC = "";
  for (let i_DAAC=0;i_DAAC<maxL_DAAC;i_DAAC++){
    if (i_DAAC < s1_DAAC.length) out_DAAC += s1_DAAC[i_DAAC];
    if (i_DAAC < s2_DAAC.length) out_DAAC += s2_DAAC[i_DAAC];
  }
  console.log("56️⃣ Merge alternado:", out_DAAC);
}
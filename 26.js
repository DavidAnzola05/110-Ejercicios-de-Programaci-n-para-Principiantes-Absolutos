function ejercicio26_DAAC() {
  let s_DAAC = "radar";
  const p_DAAC = safePrompt_DAAC("Ej26 - ingrese una palabra (ej: radar)");
  if (p_DAAC) s_DAAC = p_DAAC;
  let sClean_DAAC = s_DAAC.replace(/\W/g, '').toLowerCase();
  let rev_DAAC = sClean_DAAC.split('').reverse().join('');
  console.log(`26️⃣ "${s_DAAC}" palindrome?`, sClean_DAAC === rev_DAAC);
}
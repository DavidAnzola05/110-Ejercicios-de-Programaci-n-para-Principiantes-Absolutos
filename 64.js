function ejercicio64_DAAC() {
  let s1_DAAC = "amor", s2_DAAC = "roma";
  const p = safePrompt_DAAC("Ej64 - s1,s2 (ej:amor,roma)");
  if (p) { const parts = p.split(","); if (parts.length>=2){ s1_DAAC = parts[0]; s2_DAAC = parts[1]; } }
  const normalize = s => s.replace(/\W/g,'').toLowerCase().split('').sort().join('');
  console.log("64️⃣ Anagramas?", normalize(s1_DAAC) === normalize(s2_DAAC));
}
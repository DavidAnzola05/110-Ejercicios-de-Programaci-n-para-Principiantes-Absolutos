function ejercicio37_DAAC() {
  let segundos_DAAC = 3665;
  const p_DAAC = safePrompt_DAAC("Ej37 - ingrese segundos (ej:3665)");
  if (p_DAAC) { const v = parseInt(p_DAAC); if (!isNaN(v)) segundos_DAAC = v; }
  let h_DAAC = Math.floor(segundos_DAAC / 3600);
  let m_DAAC = Math.floor((segundos_DAAC % 3600) / 60);
  let s_DAAC = segundos_DAAC % 60;
  console.log(`37️⃣ ${segundos_DAAC}s -> ${String(h_DAAC).padStart(2,'0')}:${String(m_DAAC).padStart(2,'0')}:${String(s_DAAC).padStart(2,'0')}`);
}
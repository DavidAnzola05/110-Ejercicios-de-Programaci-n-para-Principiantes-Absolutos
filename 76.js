function ejercicio76_DAAC() {
  function sumaDigRec_DAAC(n) {
    n = Math.abs(n);
    if (n < 10) return n;
    return (n % 10) + sumaDigRec_DAAC(Math.floor(n/10));
  }
  let num_DAAC = 98765;
  const p = safePrompt_DAAC("Ej76 - ingrese entero (ej:98765)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) num_DAAC = v; }
  console.log("76️⃣ Suma de dígitos (rec):", sumaDigRec_DAAC(num_DAAC));
}
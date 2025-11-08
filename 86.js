function ejercicio86_DAAC() {
  let n_DAAC = 360;
  const p = safePrompt_DAAC("Ej86 - ingrese entero (ej:360)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let x = Math.abs(n_DAAC);
  let factores = [];
  for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
    while (x % i === 0) { factores.push(i); x = x / i; }
  }
  if (x > 1) factores.push(x);
  console.log("86️⃣ Factores primos de", n_DAAC, ":", factores);
}
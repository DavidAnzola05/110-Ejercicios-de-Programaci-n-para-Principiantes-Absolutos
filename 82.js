function ejercicio82_DAAC() {
  let n_DAAC = 10;
  const p = safePrompt_DAAC("Ej82 - ingrese n (ej:10)");
  if (p) { const v = parseInt(p); if (!isNaN(v)) n_DAAC = v; }
  let a=0,b=1,sumEven=0;
  for (let i=1;i<=n_DAAC;i++){
    let c=a+b; a=b; b=c;
    if (c % 2 === 0) sumEven += c;
  }
  console.log("82️⃣ Suma pares Fibonacci (n):", sumEven);
}
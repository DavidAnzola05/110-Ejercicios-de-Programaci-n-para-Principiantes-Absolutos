function ejercicio13_DAAC() {
  let n_DAAC = 13, esPrimo_DAAC = true;
  for (let i_DAAC = 2; i_DAAC <= Math.sqrt(n_DAAC); i_DAAC++) {
    if (n_DAAC % i_DAAC === 0) esPrimo_DAAC = false;
  }
  console.log(`13️⃣ ${n_DAAC} es primo?`, esPrimo_DAAC);
}

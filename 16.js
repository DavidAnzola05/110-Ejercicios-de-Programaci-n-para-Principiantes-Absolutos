function ejercicio16_DAAC() {
  let n_DAAC = 8, a_DAAC = 0, b_DAAC = 1;
  for (let i_DAAC = 2; i_DAAC <= n_DAAC; i_DAAC++) {
    let c_DAAC = a_DAAC + b_DAAC;
    a_DAAC = b_DAAC; b_DAAC = c_DAAC;
  }
  console.log(`16️⃣ Fibonacci(${n_DAAC}) =`, b_DAAC);
}
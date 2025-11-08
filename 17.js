function ejercicio17_DAAC() {
  let a_DAAC = 48, b_DAAC = 18;
  while (b_DAAC !== 0) {
    let r_DAAC = a_DAAC % b_DAAC;
    a_DAAC = b_DAAC;
    b_DAAC = r_DAAC;
  }
  console.log("17️⃣ MCD =", a_DAAC);
}


function ejercicio18_DAAC() {
  let a_DAAC = 6, b_DAAC = 8;
  function mcd_DAAC(x, y) {
    while (y !== 0) {
      let r = x % y;
      x = y;
      y = r;
    }
    return x;
  }
  let mcm_DAAC = Math.abs((a_DAAC * b_DAAC) / mcd_DAAC(a_DAAC, b_DAAC));
  console.log("18️⃣ MCM =", mcm_DAAC);
}
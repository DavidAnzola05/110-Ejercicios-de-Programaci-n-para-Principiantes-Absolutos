function ejercicio65_DAAC() {
  let mat_DAAC = [[1,2,3],[4,5,6],[7,8,9]];

  let suma_DAAC = 0;
  for (let i=0;i<mat_DAAC.length;i++) suma_DAAC += mat_DAAC[i][i];
  console.log("65️⃣ Matriz:", mat_DAAC, "Suma diagonal principal:", suma_DAAC);
}
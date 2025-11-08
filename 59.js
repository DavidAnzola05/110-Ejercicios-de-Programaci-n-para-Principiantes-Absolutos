function ejercicio59_DAAC() {
  let A_DAAC = [[1,2],[3,4]], B_DAAC = [[5,6],[7,8]];
  // suma
  let filas_DAAC = A_DAAC.length, cols_DAAC = A_DAAC[0].length;
  let C_DAAC = Array.from({length:filas_DAAC}, (_,i)=>Array.from({length:cols_DAAC}, (_,j)=>A_DAAC[i][j] + B_DAAC[i][j]));
  console.log("59️⃣ A:", A_DAAC, "B:", B_DAAC, "A+B:", C_DAAC);
}
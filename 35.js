function ejercicio35_DAAC() {
  let mat_DAAC = [[1,2,3],[4,5,6]];

  const filas_DAAC = mat_DAAC.length;
  const cols_DAAC = mat_DAAC[0].length;
  let trans_DAAC = Array.from({length: cols_DAAC}, ()=>[]);
  for (let i_DAAC = 0; i_DAAC < filas_DAAC; i_DAAC++) {
    for (let j_DAAC = 0; j_DAAC < cols_DAAC; j_DAAC++) {
      trans_DAAC[j_DAAC][i_DAAC] = mat_DAAC[i_DAAC][j_DAAC];
    }
  }
  console.log("35️⃣ Matriz original:", mat_DAAC, "Transpuesta:", trans_DAAC);
}
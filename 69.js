function ejercicio69_DAAC() {
  let A_DAAC = [[1,2,3],[4,5,6]];
  let B_DAAC = [[7,8],[9,10],[11,12]]; 

  const rowsA = A_DAAC.length, colsA = A_DAAC[0].length;
  const rowsB = B_DAAC.length, colsB = B_DAAC[0].length;
  if (colsA !== rowsB) { console.log("69️⃣ No compatibles para multiplicar"); return; }
  let C_DAAC = Array.from({length: rowsA}, ()=> Array.from({length: colsB}, ()=>0));
  for (let i=0;i<rowsA;i++){
    for (let j=0;j<colsB;j++){
      for (let k=0;k<colsA;k++) C_DAAC[i][j] += A_DAAC[i][k] * B_DAAC[k][j];
    }
  }
  console.log("69️⃣ A:",A_DAAC,"B:",B_DAAC,"A x B:",C_DAAC);
}
function ejercicio78_DAAC() {
  let A_DAAC = [[1,2,3],[2,5,6],[3,6,9]];
  const n = A_DAAC.length;
  let sim = true;
  for (let i=0;i<n;i++) for (let j=0;j<n;j++) if (A_DAAC[i][j] !== A_DAAC[j][i]) sim = false;
  console.log("78️⃣ Matriz:", A_DAAC, "Simétrica?", sim);
}
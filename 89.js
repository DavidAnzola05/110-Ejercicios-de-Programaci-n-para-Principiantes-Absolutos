function ejercicio88_DAAC() {
  let arr_DAAC = [9,4,7,3,8,2,6];
  const p = safePrompt_DAAC("Ej88 - lista de numeros separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  function merge_DAAC(left, right) {
    let res = [], i=0,j=0;
    while (i<left.length && j<right.length) {
      if (left[i] <= right[j]) res.push(left[i++]); else res.push(right[j++]);
    }
    return res.concat(left.slice(i)).concat(right.slice(j));
  }
  function mergesort_DAAC(a) {
    if (a.length <=1) return a;
    let mid = Math.floor(a.length/2);
    return merge_DAAC(mergesort_DAAC(a.slice(0,mid)), mergesort_DAAC(a.slice(mid)));
  }
  console.log("88️⃣ Merge sort resultado:", mergesort_DAAC(arr_DAAC));
}
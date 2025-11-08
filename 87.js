function ejercicio87_DAAC() {
  let arr_DAAC = [5,3,8,4,2,7,1];
  const p = safePrompt_DAAC("Ej87 - lista de numeros separados por coma");
  if (p) arr_DAAC = p.split(",").map(x=>parseFloat(x));
  function quicksort_DAAC(a) {
    if (a.length < 2) return a;
    let pivot = a[Math.floor(a.length/2)];
    let left = a.filter(x=> x < pivot);
    let mid = a.filter(x=> x === pivot);
    let right = a.filter(x=> x > pivot);
    return [...quicksort_DAAC(left), ...mid, ...quicksort_DAAC(right)];
  }
  console.log("87️⃣ Quicksort resultado:", quicksort_DAAC(arr_DAAC));
}
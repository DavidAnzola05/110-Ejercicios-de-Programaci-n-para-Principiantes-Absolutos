function ejercicio98_DAAC() {
  let accesses_DAAC = ["A","B","C","A","D","B","E"];
  const p = safePrompt_DAAC("Ej98 - lista de accesos separados por coma (ej:A,B,C,A)");
  if (p) accesses_DAAC = p.split(",");
  const capacity = 3;
  const map = new Map();
  for (let key of accesses_DAAC) {
    if (map.has(key)) map.delete(key);
    map.set(key, true);
    if (map.size > capacity) {
      const firstKey = map.keys().next().value;
      map.delete(firstKey);
    }
    console.log("98️⃣ estado cache:", Array.from(map.keys()));
  }
  console.log("98️⃣ Cache final:", Array.from(map.keys()));
}
function ejercicio93_DAAC() {
  class Queue_DAAC {
    constructor(){ this._arr = []; }
    enqueue(v){ this._arr.push(v); }
    dequeue(){ return this._arr.shift(); }
    front(){ return this._arr[0]; }
    isEmpty(){ return this._arr.length === 0; }
  }
  let q = new Queue_DAAC();
  q.enqueue(10); q.enqueue(20); q.enqueue(30);
  console.log("93️⃣ Cola front:", q.front(), "dequeue:", q.dequeue(), "dequeue:", q.dequeue(), "vacía?", q.isEmpty());
}
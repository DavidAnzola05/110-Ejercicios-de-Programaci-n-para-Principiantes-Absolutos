function ejercicio92_DAAC() {
  class Stack_DAAC {
    constructor(){ this._arr = []; }
    push(v){ this._arr.push(v); }
    pop(){ return this._arr.pop(); }
    peek(){ return this._arr[this._arr.length-1]; }
    isEmpty(){ return this._arr.length===0; }
  }
  let st = new Stack_DAAC();
  st.push_DAAC = st.push; 
  st.push(1); st.push(2); st.push(3);
  console.log("92️⃣ Pila peek:", st.peek(), "pop:", st.pop(), "pop:", st.pop(), "vacía?", st.isEmpty());
}

function ejercicio89_DAAC() {
  let expr_DAAC = "3 4 + 2 * 7 /"; // ((3+4)*2)/7
  const p = safePrompt_DAAC("Ej89 - ingrese RPN separado por espacios (ej:'3 4 + 2 * 7 /')");
  if (p) expr_DAAC = p;
  let stack = [];
  expr_DAAC.split(/\s+/).forEach(token => {
    if (!isNaN(token)) stack.push(parseFloat(token));
    else {
      let b = stack.pop(), a = stack.pop();
      switch(token) {
        case '+': stack.push(a+b); break;
        case '-': stack.push(a-b); break;
        case '*': stack.push(a*b); break;
        case '/': stack.push(a/b); break;
        case '^': stack.push(Math.pow(a,b)); break;
        default: break;
      }
    }
  });
  console.log("89️⃣ RPN:", expr_DAAC, "Resultado:", stack.pop());
}

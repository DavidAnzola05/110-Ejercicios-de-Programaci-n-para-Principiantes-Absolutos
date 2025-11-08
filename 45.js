function ejercicio45_DAAC() {
  let x_DAAC = 12, op_DAAC = "/", y_DAAC = 3;
  const p_DAAC = safePrompt_DAAC("Ej45 - ingrese x,op,y (ej:12,/,3)");
  if (p_DAAC) { const parts = p_DAAC.split(","); if (parts.length>=3){ x_DAAC=parseFloat(parts[0]); op_DAAC=parts[1]; y_DAAC=parseFloat(parts[2]); } }
  let res_DAAC;
  switch(op_DAAC) {
    case "+": res_DAAC = x_DAAC + y_DAAC; break;
    case "-": res_DAAC = x_DAAC - y_DAAC; break;
    case "*": res_DAAC = x_DAAC * y_DAAC; break;
    case "/": res_DAAC = (y_DAAC!==0) ? x_DAAC / y_DAAC : "Error: div/0"; break;
    case "%": res_DAAC = x_DAAC % y_DAAC; break;
    default: res_DAAC = "Operador inválido";
  }
  console.log("45️⃣ Resultado calculadora:", res_DAAC);
}

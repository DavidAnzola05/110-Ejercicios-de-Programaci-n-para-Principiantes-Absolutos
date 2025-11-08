function ejercicio58_DAAC() {
  let x1_DAAC=0, y1_DAAC=0, x2_DAAC=3, y2_DAAC=4;
  const p_DAAC = safePrompt_DAAC("Ej58 - x1,y1,x2,y2 (ej:0,0,3,4)");
  if (p_DAAC) {
    const p = p_DAAC.split(",").map(x=>parseFloat(x));
    if (p.length>=4){ x1_DAAC=p[0]; y1_DAAC=p[1]; x2_DAAC=p[2]; y2_DAAC=p[3]; }
  }
  let dist_DAAC = Math.hypot(x2_DAAC-x1_DAAC, y2_DAAC-y1_DAAC);
  console.log(`58️⃣ Distancia entre (${x1_DAAC},${y1_DAAC}) y (${x2_DAAC},${y2_DAAC}) =`, dist_DAAC);
}
function ejercicio97_DAAC() {
  let path_DAAC = "/a/b/../c/./d";
  const p = safePrompt_DAAC("Ej97 - ingrese ruta (ej:/a/b/../c/./d)");
  if (p) path_DAAC = p;
  const parts = path_DAAC.split("/");
  const stack = [];
  for (let part of parts) {
    if (part === "" || part === ".") continue;
    if (part === "..") stack.pop();
    else stack.push(part);
  }
  const normalized = "/" + stack.join("/");
  console.log("97️⃣ Ruta:", path_DAAC, "-> normalizada:", normalized);
}

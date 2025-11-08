function ejercicio10_DAAC() {
  let anio_DAAC = 2024;
  let bisiesto_DAAC = (anio_DAAC % 4 === 0 && anio_DAAC % 100 !== 0) || (anio_DAAC % 400 === 0);
  console.log("🔟", anio_DAAC, bisiesto_DAAC ? "es bisiesto" : "no es bisiesto");
}
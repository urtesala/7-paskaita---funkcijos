"use strict";
console.log("uzdKambarys.js");

//? parasyti funkcija kuri argumentais paima kambario sienu ilgi ploti ir auksti ir paskaiciuoja sienu plota.

let ilgis = 2;
let plotis = 3;
let aukstis = 4;

function kambarioPlotas(ilgis, plotis) {
  let plotas = ilgis * plotis;
  console.log("plotas ===", plotas);
}
kambarioPlotas(4, 3);

//? padaryti kad sienu plota funkcija grazintu

function kambarioPlotas(ilgis, plotis) {
  let plotas = ilgis * plotis;
  console.log(plotas);
  return plotas;
}
kambarioPlotas(2, 3);
kambarioPlotas(8, 2);
//? paskaiciuoti triju skirtingu kambariu sienu plotus ir juos atspausdinti i html su pries tai aprasyta funkcija.

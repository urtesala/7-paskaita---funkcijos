"use strict";
console.log("uzd.js");

let nums = [5, -4, 3, 10, -7, 14];

//parasyti fn kuri grazintu tik teigiamu reiksmiu masyva

// function getPositivesArr() {
//   const positives = [];
//   for (let num of nums) {
//     //jei sk teigiamas - dedam ji i positives
//     if (num > 0) {
//       positives.push(num);
//     }
//   }
//   // console.log("positives ===", positives);
//   return positives;
// }
// let teigiami = getPositivesArr();
// console.log("teigiami ===", teigiami);

console.log("======================================");

//^ TEISINGESNIS BUDAS NEI VIRSUJ

function getPositivesArr(fullArray) {
  const positives = [];
  for (let num of fullArray) {
    if (num > 0) {
      positives.push(num);
    }
  }
  return positives;
}

let teigiami = getPositivesArr(nums);
console.log("teigiamiSk ===", teigiami);

console.log("======================================");

let skaicius = "500";

//? parasyti funkcija kuri patikrina ar argumentas yra string

//? jei string - grazina, kad tai ne skaicius

//? jei skaicius - pavercia i valiuta

function makeCurrency(el) {
  //typeof
  if (typeof el === "string") {
    return "ne skaicius";
  }
  if (typeof el === "number") {
    return `${el.toFixed(2)} eur`;
  }
  return "nei skaicius nei stringas";
}
let rezultatas = makeCurrency(skaicius);
console.log("rezultatas ===", rezultatas);

rezultatas = makeCurrency(45);
console.log("rezultatas ===", rezultatas);

rezultatas = makeCurrency(true);
console.log("rezultatas ===", rezultatas);

console.log("======================================");

function multi(sk1, sk2) {
  let suma = sk1 + sk2;
  return suma;
}
let suma = multi(2, 3);
console.log(`sudetu skaiciu suma yra lygi ${suma}`);

console.log("===========================");

function divide(nr1, nr2) {
  let dalyba = nr1 / nr2;
  return dalyba;
}
let dalyba = divide(6, 2);
console.log(`dalyba yra lygi ${dalyba}`);

console.log("===========================");

function average(no1, no2) {
  let vidurkis = (no1 + no2) / 2;
  return vidurkis;
}
let vidurkis = average(6, 2);
console.log(`vidurkis yra lygus ${vidurkis}.`);

console.log("===========================");

function flow(ska1, ska2, ska3) {
  let bendraSuma = ska1 + ska2 + ska3;
  return bendraSuma;
}
let bendraSuma = flow(8, 3, 4);
console.log(`Bendra suma yra lygi ${bendraSuma}`);

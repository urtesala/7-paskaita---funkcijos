"use strict";
console.log("main.js");

//^function sayHi(){
//^func body
//^ }

//^ funkcijos deklaracija

// function sayHi() {
//   //func body
//   console.log("Hello world!!");
// }

// //funcijos iskvietimas

// sayHi1();

console.log("==========================");

function sayHi(username = "<please enter a name>") {
  //func body
  console.log(`Hello ${username}`);
}

//funcijos iskvietimas

sayHi();

console.log("========================");

function sum(num1, num2) {
  let suma = num1 + num2;
  console.log(
    `Laba diena, jus sudedate ${num1} prie ${num2} ir gaunate ${suma}.`
  );
}

sum(15, 35);
sum(115, 544);
sum(343878, 48754);

console.log("==============================");
// parasyti  funkcija kuri sudaugina 3 reiksmes su isklotine
// jeireiksme nepaduoda tai daugyba turetu vykti su paduotom reiksmem

function multiply(no1, no2, no3) {
  let daugyba = no1 * no2 * no3;
  console.log(
    `Laba diena, jus sudaginate ${no1}, ${no2} ir ${no3} ir gaunate ${daugyba}.`
  );
}

multiply(1, 2, 3);
multiply(6, 5, 3);
multiply(566, 324, 565);

console.log("==================================");

function multiply() {
  let daugyba = 4 * 5 * 6;
  console.log(`Laba diena, jus sudaginate 4, 6 ir 6 ir gaunate ${daugyba}.`);
}
multiply();

console.log("============================");

//^ sukurti elementa

// const h2El = document.createElement("h2");

// //^ prideti reiksme i elementa

// h2El.textContent = "Sveiki, as esu h2 elementas";

// // ^ patalpinti elementa htmle

// document.body.append(h2El);

console.log("============================");

function makeH2El(greetingText) {
  const h2El = document.createElement("h2");
  h2El.textContent = greetingText;
  document.body.append(h2El);
}
makeH2El("Labas");
makeH2El("Ka tu");
makeH2El("kur");
makeH2El();

//^ nepamirsti prisilyginti reiksmiu, kaip pvz 84 eiluteje!!

console.log("============================");

//? sukurti funkcija kuri isveda vidurki is gautu triju parametru ir atspausdina ji html panaudojant makeh2el() su isklotine;
//? panaudoti su keleta reiksmiu

function average(sk1, sk2, sk3) {
  let suma1 = sk1 + sk2 + sk3;
  let vidurkis = suma1 / 3;
  console.log(
    `Sudedame ${sk1}, ${sk2}, ${sk3} ir gauname ${suma1}. Sios sumos vidurkis yra ${vidurkis}`
  );
  makeH2El(
    `Sudedame ${sk1}, ${sk2}, ${sk3} ir gauname ${suma1}. Sios sumos vidurkis yra ${vidurkis}`
  );
}

average(2, 4, 6);
average(64, 44, 645);
average(20, 40, 60);

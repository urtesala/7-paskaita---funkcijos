"use strict";
console.log("spread.js");

let nums1 = [1, 2, 3];

let nums2 = [4, 5, 6];

//CONCAT SUJUNGTIMAS
let sujungtas = nums1.concat(nums2);

//SPREAD SUJUNGIMAS
let sujungtasSpread = [...nums1, ...nums2];

//^ gali atrodyti ir
//^ let sujungtasSpread = [0, ...nums1, 'tarpe', ...nums2, 'gale']

let user1 = {
  name: "James",
  age: 24,
  hasCar: true,
};

let user2 = {
  ...user1,
  town: "Londe",
};

console.log("user2 ===", user2);

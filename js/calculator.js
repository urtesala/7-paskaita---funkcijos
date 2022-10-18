"use strict";
console.log("calculator.js");

//? parasykite funcija calculate (num1, num2, action) kuri atitiks action nurodyta matematini veiksma

//calculate (8, 9, 'plus')
//calculate (8, 9, 'minus')
//calculate (8, 9, 'multi')

function calculate(num1, num2, operation) {
  if (operation === "plus") return num1 + num2;
  if (operation === "minus") return num1 - num2;
  if (operation === "multi") return num1 * num2;
  return "neteisinga operacija";
}

let sum = calculate(8, 9, "plus");
console.log("sum ===", sum);

let minus = calculate(8, 9, "minus");
console.log("minus ===", minus);

let multi = calculate(8, 9, "multi");
console.log("multi ===", multi);

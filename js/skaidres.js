"use strict";
console.log("skaidres.js");

//? Parasykite funkcija fromText (string, number), kuri is jai perduoti string
//? parametro pabaigos, panaikins number parametru nurodyta kieki raidziu

function fromText(str, numberToCut) {
  let numbFromEnd = numberToCut * -1;
  const apdorotasString = str.slice(0, numbFromEnd);
  return apdorotasString;
}
let apdorotasString = fromText("Hello World", 3);
console.log("apdorotasString ===", apdorotasString);

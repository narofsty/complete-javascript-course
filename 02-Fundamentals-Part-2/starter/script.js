"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("i can drive:D");

//const interface = "Audio";
const private = 534;

function logger() {
  console.log("My names is naro");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);
console.log(fruitProcessor(3, 0));

const appleOrangeJuice = fruitProcessor(4, 2);
console.log(appleOrangeJuice);


const age1 = calcAge1(1999);
console.log(age1);
function calcAge1(birthYear) {
  return 2026 - birthYear;
}

const calcAge2 = function (birthYear) {
  return 2026 - birthYear;
};

const age2 = calcAge2(1999);
console.log(age2);

*/

const calcAge3 = (birthYear) => 2026 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2026 - 1999;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1999, "naro"));

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



function cutFruitPieces(fruit) {
  return fruit * 2;
}

function fruitProcessor(apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orrangesPieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applesPieces} pieces of apple and ${orrangesPieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/
const calcAge = function (year) {
  return 2026 - year;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  //return retirement;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    //return 后会直接退出函数，后面的将不会展示
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} has already retired `);
    return -1;
    console.log(`${firstName} has already retired `);
  }

  //return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1999, "naro"));
console.log(yearsUntilRetirement(1950, "naro"));

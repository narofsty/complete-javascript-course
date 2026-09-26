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

// Coding Challenge #1


Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


//1.Create an arrow function 'calcAverage' to calculate the average of 3 scores

const calcAvage = (scores) => scores / 3;



3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
and then logs the winner to the console, 
together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins * 2 <= avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else console.log(`no win (${avgDolhins} vs. ${avgKoalas})`);
}

const dolphinsData1 = calcAvage(44 + 23 + 71);
const koalasData1 = calcAvage(65 + 34 + 49);
console.log(dolphinsData1, koalasData1);
checkWinner(dolphinsData1, koalasData1);

const dolphinsData2 = calcAvage(85 + 54 + 41);
const koalasData2 = calcAvage(23 + 54 + 27);
checkWinner(dolphinsData2, koalasData2);

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

//friends = ["Bob", "Alice"];
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1999, "teacher", friends];

console.log(jonas);
console.log(jonas.length);


const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

friends.pop();
const poped = friends.pop();
console.log(poped);
console.log(friends);

friends.shift();
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("John"));

console.log(friends.includes("Steven"));
console.log(friends.includes("John"));
//不做类型检查
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friends called Steven!");
}
  */

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
//自己写
const calcTip = function (bill) {
  let tip = [];
  while (bill.length > tip.length) {
    if (bill < 300 && bill > 50) {
      const tips = bill * 0.15;
      tip.pop(tips);
    } else {
      const tips = bill * 0.2;
      tip.pop(tips);
    }
    return tip;
  }
};
const bill = [125, 555, 44];
bill.calcTip();
console.log(tip);
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(tips);

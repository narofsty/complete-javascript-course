/*
let js = "amazing";
console.log("wxq");
console.log(12345);

let firstName = "wxq";
console.log(firstName);
console.log(firstName);
console.log(js);

//常量用大写
let PI = 3.1415;
console.log(PI);

// true;
// console.log(true);
let firstName = "wxq";
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

//boolean
// console.log(javascriptIsFun);
// console.log(typeof true);
//number
// console.log(typeof 23);
//string
//console.log(typeof firstName);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

//const birthYear = 1991;

//birthYear = 1990;

//const job;

var job = "programmer";
job = "teacher";

job = "nojob";

//basic operators
//Math operators
const nowdays = 2026;
const ageJonas = nowdays - 1991;
const ageSarah = nowdays - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; //x = 15
x += 10; //x = 25
x *= 4; //x = 100
x /= 4; //x = 25
x -= 5; //x= 20
x--;
x--;
x++;
console.log(x);

//Comparison operators
console.log(ageJonas, ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas >= 98);

const isFullAge = ageSarah >= 18;

console.log(nowdays - 1991 > nowdays - 2018);


const nowdays = 2036;
const ageJonas = nowdays - 1991;
const ageSarah = nowdays - 2018;

console.log(ageJonas, ageSarah);

console.log(nowdays - 1991 > nowdays - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/
////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


//尽可能使用const ,
let MarkHeight = 1.69,
  MarkMass = 78,
  JohnHeights = 1.95,
  JohnMass = 92;
let MarkBMI = MarkMass / MarkHeight ** 2;
let JohnBMI = JohnMass / (JohnHeights * JohnHeights);
let markHigherBMI;

console.log(MarkBMI, JohnBMI);
console.log((markHigherBMI = MarkBMI > JohnBMI));

console.log("################");

(MarkHeight = 1.88), (MarkMass = 95), (JohnHeights = 1.76), (JohnMass = 85);

MarkBMI = MarkMass / MarkHeight ** 2;
JohnBMI = JohnMass / (JohnHeights * JohnHeights);
markHigherBMI;

console.log(MarkBMI, JohnBMI);
console.log((markHigherBMI = MarkBMI > JohnBMI));

const job = "teacher";
const birthYear = 1998;
const year = 2026;

const firstName = "jonas";

const jonasNew = `I'm ${firstName} , a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regulat string... `);

console.log(
  "String with \n\
  multiple \n\
  lines"
);

console.log(`String with
  multiple
  lines`);



const age = 15;
const isOldEnough = age >= 18;

//console.log(isOldEnough);
if (age >= 18) {
  console.log("Sarah can start driving license 😀!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😭`);
}

const birthYear = 2059;
let century;
if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀

//尽可能使用const ,
let MarkHeight = 1.69,
  MarkMass = 78,
  JohnHeights = 1.95,
  JohnMass = 92;
let MarkBMI = MarkMass / MarkHeight ** 2;
let JohnBMI = JohnMass / (JohnHeights * JohnHeights);
let markHigherBMI;

console.log(MarkBMI, JohnBMI);
console.log((markHigherBMI = MarkBMI > JohnBMI));

console.log("################");

(MarkHeight = 1.88), (MarkMass = 95), (JohnHeights = 1.76), (JohnMass = 85);

MarkBMI = MarkMass / MarkHeight ** 2;
JohnBMI = JohnMass / (JohnHeights * JohnHeights);
markHigherBMI;

console.log(MarkBMI, JohnBMI);
console.log((markHigherBMI = MarkBMI > JohnBMI));
if (MarkBMI > JohnBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log(`John's BMI ${JohnBMI} is higher than Mark's ${MarkBMI}!`);
}


//type conversion and coercion
const inputYear = "1999";
console.log(Number(inputYear), 1999, inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Wxq"));
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof 23);

//数字--字符串  ->boolean

//02-019 Truthy and alsy alues

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

let favourite = Number(prompt("input your favort number:"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("Cool! 7 is an amazing number");
} else {
  console.log(`Cool! ${favourite} is an amazing number`);
}

if (favourite !== 23) console.log("Why not 23?");

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀


//Calculate the average score for each team, using the test data below
const Dolphinsavg1 = (96 + 108 + 89) / 3;
const Dolphinsavg2 = (97 + 112 + 101) / 3;
const Dolphinsavg3 = (97 + 112 + 101) / 3;

const Koalasavg1 = (88 + 91 + 110) / 3;
const Koalasavg2 = (109 + 95 + 123) / 3;
const Koalasavg3 = (109 + 95 + 106) / 3;

console.log(Dolphinsavg1, Koalasavg1);

if (Dolphinsavg1 > 100 && Koalasavg1 > 100) {
  if (Dolphinsavg1 > Koalasavg1) {
    console.log("Dolphinsavg1 win!");
  } else if (Dolphinsavg1 < Koalasavg1) {
    console.log("Koalasavg1 win!");
  } else console.log("Dolphinsavg1 equal Koalasavg1");
}
if ((Dolphinsavg1 + Koalasavg1) / 100 < 2) {
  console.log("point is less than 100");
}

console.log(Dolphinsavg2, Koalasavg2);

if (Dolphinsavg2 > 100 && Koalasavg2 > 100) {
  if (Dolphinsavg2 > Koalasavg2) {
    console.log("Dolphinsavg2 win!");
  } else if (Dolphinsavg2 < Koalasavg2) {
    console.log("Koalasavg2 win!");
  } else console.log("Dolphinsavg2 equal Koalasavg2");
}
if ((Dolphinsavg2 + Koalasavg2) / 100 < 2) {
  console.log("point is less than 100");
}

console.log(Dolphinsavg3, Koalasavg3);

if (Dolphinsavg3 > 100 && Koalasavg3 > 100) {
  if (Dolphinsavg3 > Koalasavg3) {
    console.log("Dolphinsavg3 win!");
  } else if (Dolphinsavg3 < Koalasavg3) {
    console.log("Koalasavg3 win!");
  } else console.log("Dolphinsavg3 equal Koalasavg3");
}
if ((Dolphinsavg3 + Koalasavg3) / 100 < 2) {
  console.log("point is less than 100");
}

const day = "friday";

switch (day) {
  case "monday":
    console.log("test1");
    console.log("JavaScript");
    break;
  case "friday":
    console.log("Right");
    console.log("Go to the bed");   
    break;
  default:
    console.log("study");
}
// Coding Challenge #4

const bill = 430;
let tip;
if (bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2)) {
  console.log(`bill is ${bill}, tip is ${tip}, plus is ${bill + tip}`);
}

*/

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
*/

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

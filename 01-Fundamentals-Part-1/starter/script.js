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
*/
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

//Таски на переменные:
console.group("Задача 1-3");
const a = 1;
const b = 2;
console.log("a * b =", a * b);

const c = 1;
const d = 2;
console.log("c / d =", c / d);

const e = 1;
const f = 2;
console.log("e + f =", e + f);
console.groupEnd("Задача 1-3");

console.group("Задача 4");
const variable1 = 11;
const variable2 = true;
const variable3 = "java script";
const variable4 = "100";

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.groupEnd("Задача 4");

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
--num;

//Таски на prompt:

// const userNumber = Number(prompt("Input number"));
// alert(userNumber * userNumber);

//###################################

// const userNumber1 = Number(prompt("Input number one"));
// const userNumber2 = Number(prompt("Input number two"));
// alert((userNumber1 + userNumber2) / 2);

//###################################

// const minutesTime = Number(prompt("Enter the minutes"));
// alert( minutesTime * 60);

//###################################

// const greeting = ("Hello, ");
// const userName = prompt("Your name ?");
// alert (greeting + userName);

//Таски на условия:

// const userValue = Number(prompt("Введите число"))

// if (userValue === 10){
//   alert("Верно")
// } else {
//   alert("Неверно")
// }

//###################################
// const testVariable = true;

// if (!testVariable) {
//   console.log("Неверно");
// } else {
//   console.log("Верно");
// }

// if (!testVariable) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

//##################################

const sumBuy = Number(prompt("Введите сумму покупки:"));

if (sumBuy > 500 && sumBuy <= 800) {
  alert(sumBuy - sumBuy * 0.03 + "грн");
} else if (sumBuy > 800) {
  alert(sumBuy - sumBuy * 0.05 + "грн");
}

//Таски на циклы:

// let i = 25;
// const numberUser = 0;

// while (i >= numberUser) {
//   console.log(i);
//   i--;
// }

// const numberUser = 25;

// for (let i = numberUser; i >= 0; i--) {
//   console.log(i);
// }

//##################################

// let number = 10;
// const numberMax = 50;

// while (number <= numberMax) {
//   if (number % 5 === 0) {
//     console.log(number);
//   }
//   number++;
// }

// const numberMax = 50;

// for (let i = 10; i <= numberMax; i++ ){
//   if ( i % 5 === 0){
//     console.log(i);
//   }
// }

//##################################

// let i = 1;
// let sum = 0;

// while (i <= 100) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 1; i <= 100; i++){
//   sum = sum + i;
// }
// console.log(sum);

//Таски на switch..case.

// const dayWeek = Number(prompt("Enter the day of the week:"));

// switch (dayWeek) {
//   case 1:
//     alert("Monday");
//     break;
//   case 2:
//     alert("Tuesday");
//     break;
//   case 3:
//     alert("Wednesday");
//     break;
//   case 4:
//     alert("Thursday");
//     break;
//   case 5:
//     alert("Friday");
//     break;
//   case 6:
//     alert("Saturday");
//     break;
//   case 7:
//     alert("Sunday");
//     break;
//   default:
//     alert("Incorrecr week number!");
//     break;
// }

//###################################

// const day = 7;

// switch (true) {
//   case day >= 1 && day <= 10:
//     console.log("First decade");
//     break;
//   case day >=11 && day <= 20:
//     console.log("Second decade");
//     break;
//   case day >=21 && day <= 31:
//     console.log("Second decade");
//     break;
//   default:
//     console.log("Incorrect day!");
//     break;
// }

// document.write("Revision.js Connected");
// // alert("Called");

// var myName = "camel case";
// var my_name = "snake case";

// var total = "23" + 7; //237
// var newTotal = parseInt(total);
// var plus = ((5 + 3) * 2) / 2;
// console.log(plus);
// // var userValue = prompt("Enter Your pw", "sdhfjk3!23");
// // newTotal += 1;
// // ++newTotal;
// // console.log(newTotal, newTotal++, ++newTotal);
// // var newTotal2 = Number(total);

// // var mod = 5 % 2 //1;
// // var div = 5 / 2 // 2;

// var isRaining = true;
// var isTraffic = false;

// if (isRaining || isTraffic) {
//   console.log("Stay in home");
// }

// // var isTeacher = false;
// // var isStudent = true;

// // if (isTeacher && isStudent) {
// //   console.log("Start Class");
// // }

// // if (!isRaining) {
// //   console.log("It is raining outside");
// // } else {
// //   console.log("It is not raining outside");
// // }

// // var myArray = ["abc", 123, true, null, undefined, isTraffic, {}, []];
// var myNewArr = ["abc"];
// myNewArr.push("pushed");
// myNewArr.unshift("unshift");

// // console.log(myNewArr,1);

// // myNewArr.pop()
// // myNewArr.shift()

// // console.log(myNewArr,2);
// var iterations = 0;
// for (i = 0; i < 5; i++) {
//   for (j = 0; j < 5; j++) {
//     console.log(i, j);
//     iterations++;
//   }
// }
// console.log(iterations, "iterations");
// var myString = "myString";
// myString.slice(0, 2); //my
// myString.indexOf("J");
// myString.lastIndexOf("S");

// myString.charAt(5); // myString[5]
// var myString = ["a", "b", "c"];
// myString[0];

// var myDec = 2.5555555;
// myDec.toFixed(2); // 2.55

// // function myFoo() {
// //   console.log("Run");
// //   console.log("Run 1");
// //   console.log("Run 3");
// // }
// // myFoo();

// function capitalize(value) {
//   var firstLetter = value.slice(0, 1);
//   var remainingLetters = value.slice(1);
//   firstLetter = firstLetter.toUpperCase();
//   remainingLetters = remainingLetters.toLowerCase();
//   var capitalizeValue = firstLetter + remainingLetters;
//   return capitalizeValue;
// }

// function greetUser() {
//   var userName = prompt("Enter Your Name");
//   var greetingText = "Welcome";
//   var capitalizeUserName = capitalize(userName);
//   var greetings = greetingText + " " + capitalizeUserName;
//   alert(greetings);
// }
// // greetUser();

// // function showParams(a, b, c) {
// //   console.log("func", a, b,c);
// // }

// // showParams(1, 2, 3);

// console.clear()
// var bilal = "bilal";
// function callName() {
//   bilal = "M Bilal";
//   console.log(bilal, "inner");
// }
// callName();
// console.log(bilal, "outer");

// function myFoo(name, age) {
//   // name = parameter
//   console.log("Welcome " + name);
//   // alert("Welcome")
// }

// myFoo("Abdullah", 24); //invoke: "Abdullah"=argument
// myFoo("Ahsan", 23); //invoke

// function add(num1, num2) {
//   let calculatedValue = num1 + num2 + 2;
//   return calculatedValue;
// }

// const result = add(2, 2); // 5
// console.log(result, add(2, 2));

// var a = 2;
// function myFoo() {
//   let a = 1;
//   console.log(a, "inner");
// }
// myFoo()
// console.log(a, "outer");

// const userName = "anus";
// const lowerCaseUserName = userName.toLowerCase();

// switch (lowerCaseUserName) {
//   case "abdullah":
//     console.log("Welcome Abdullah", 1);
//     break;
//   case "ali":
//     console.log("Welcome Ali", 2);
//     break;
//   case "haider":
//     console.log("Welcome Haider", 3);
//     break;
//   default:
//     console.log("Welcome");
// }
// const shouldRun = true
// while (shouldRun) {
//   console.log("Run");
//   alert()
// }

// let iterations = 0;
// while (iterations < 5) {
//   console.log("Run", iterations);
//   alert();
//   iterations = iterations + 1;
// }

// let condition = true;
// let iter = 1;
// while (condition) {
//   if (iter % 2 === 0) {
//     condition = false;
//   }

//   console.log(iter);

//   iter++
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Run");
// }

// const shouldRun = false;
// while (shouldRun) {
//   console.log("Run");
// }
// do {
//   console.log("Run");
// } while (false);

// let userNameLength = 0; //4
// do {
//   let userName = prompt("Enter Your Name");
//   userNameLength = userName.length;
// } while (userNameLength <= 3);

// var myVar = 1
// function myFoo(a,b){
//   var myVar = 2
//   alert(myVar)
// } //defintion

// function myFoo2(a,b){
//   // var myVar = 2
//   alert(myVar)
// } //defintion
// console.log(myVar);
// myFoo(1,2) //invoke
// dsjkf //asd

document.write("JavaScript Connected");

// Variable Declaration
// var 1abdc = "abc" // name cannot be start with numbers
// var 234 = "abc" // name cannot be number
// var @-/#$%&*+*/alpha = "abc" //name cannot have special characters
// var my name = "abd" // name cannot have space init
var abc = "abc";
var abc_1 = "abc";

var snake_case = "abc"; // snake case
var camelCase = "abc"; // camel case
var PascalCase = "abd"; // pascal case

//  DataTypes Premitive Types
var myString = "My name is KHAN"; // string
var myNumber = 24; // number
var myNumber2 = 25; // number
var myBool = true; // boolean
var myBool2 = false; // boolean
var myUndefined = undefined; // undefined
var myNull = null; //null

// DataTypes Non-Premitive Types
// var myObj2 = { name: "abdullah", age: 27 };
// var myObject = { name: "abc", age: 27, rollNo: "24-123", isUserPassed: false }; // object
// var myArray = ["abc", 123, true, undefined, null, myNull, myUndefined]; // array

// STRINGS
// (var keyword) (variable name) (assigning operator =) (variable value)
var variableName = "variable value"; // double quotation
var variableName2 = "variable value"; // single quotation

var variableNonAssigned;
variableNonAssigned = "assigned";

var myNewString = "Two";
// alert(myNewString)

// alert(myNewString)

var myNewString = "One";
var myNewString2 = myNewString;
// alert(myNewString2)

// var myNumber = 25;

// var myNumber2 = myNumber;
// alert(myNumber2)

// var myNumber = 24
// alert(myNumber);

// var halfAge = 11
// var halfAge2 = 11
// var myAge = 11 + 11
// alert(myAge)

// var myAgeString = "23";
// var myAgeNumber = 23;

// var allAge = myAgeNumber + myAgeString;

// alert(allAge);
// var greeting = "Hello I am good,How are you?......."
// alert(greeting)
// alert(greeting)
// var versionsTill2015 = 6
// var yearsAfter2015 = 9
// var esVersions = versionsTill2015 + yearsAfter2015;
// alert(esVersions);
// var seperationFromPakInYears = 24;
// var independenceOfPakInYears = 76;
// var ageOfBangladesh = independenceOfPakInYears - seperationFromPakInYears;
// alert(ageOfBangladesh);

// var numberOfRows = 10;
// var capacityOfRow = 3;
// var totalStudents = numberOfRows * capacityOfRow;
// alert(totalStudents);

// var grapes = 5;
// var numberOfPeople = 10;
// var numberOfPieces = grapes / numberOfPeople;
// alert(numberOfPieces);

// var grapes = 11;
// var numberOfPeople = 2;
// var remainder = grapes % numberOfPeople;
// alert(remainder);

var string2 = "My String";
var number2 = 12.5;
var bool2 = true;
var bool3 = false;
var null2 = null;
var undefined2 = undefined;

var obj1 = { firstName: "abc", lastName: "cde", age: 12 };
var passed = ["zeeshan", "mansoor", "hamza", "ali"];
var failed = ["abdullah", "haider"];

// alert("You are passed")
// var myName = prompt("Enter Your name");
// var myNewName = "Mr " + myName
// alert(myNewName)

// var myNum = 2
// // myNum = myNum + 1
// // myNum += 1
// myNum++
// // alert(myNum++)
// // alert(myNum)
// alert(++myNum)

// var totalCost = 1 + 3 * 4;
// alert(totalCost)

// var greetingMessage = "Hello! How are you"
// var userName = prompt("Enter Your name")
// var abc = "123"
// parseInt(abc)

// var greetedUser = greetingMessage + " " + userName
// alert(greetedUser)
// var enterValue = prompt("please enter value");
// var secondValue = prompt("please enter second value");

// for only value ==
// for value and data type ===
// var operator = "+"
// if (secondValue == 0) {
//   alert("You Enter 0");
// } else if (secondValue == 1) {
//   alert("You Enter 1");
// } else {
//   alert("You Enter Other Value");
// }
var minimumToContinue = 25;
if (minimumToContinue !== 25) {
  alert("Not correct Criteria");
}

// var total18Plus = prompt("Enter above 18 students");
// var totalUnder18 = prompt("Enter Under 18 students");

// total18Plus = parseInt(total18Plus);
// totalUnder18 = parseInt(totalUnder18);

// var totalStudents = total18Plus + totalUnder18;

// if (isNaN(total18Plus) === true) {
//   alert("Invalid Input");
// } else if (totalStudents >= minimumToContinue) {
//   alert("Module should Contiue ");
// } else {
//   alert("Discontinue the Module");
// }
// alert(totalStudents);

var myNum = 1;
// myNum = myNum + 2;
// myNum += 2;
// myNum++ // POST Increment
// ++myNum // PRE Increment
// alert(++myNum)

// var userName = prompt("Enter Your Name","Sanaullah");
// var prefix = "Haji";
// var user = prefix + " " + userName

// alert(user)

// var myName = "Abdullah";
// var isInstructor = myName !== "Abdullah";
// var isStudent = myName === "Abdullah";

// if (isInstructor) {
//   alert("Instructor Found");
// } else if (isStudent) {
//   alert("Student Found");
// } else {
//     alert("User Not Found")
// }

// if (isInstructor) {
//   alert("Instructor Found");
// } else
//  {
//   alert("Instructor Not Found");
// }

// var isInstructor1Present = prompt("Teacher1 agye?", "Yes");
// var isInstructor2Present = prompt("Teacher2 agye?", "Yes");
// var isStudentsPresent = prompt("Bache agye?", "Yes");

// if (isInstructorPresent === "Yes" && isStudentsPresent === "Yes") {
//   alert("Start Class");
// } else {
//   alert("Class me hi betho");
// }

// var htmlQuiz = prompt("Enter if you passed HTML", "Yes");
// var cssQuiz = prompt("Enter if you passed CSS", "Yes");

// if (htmlQuiz === "Yes" || cssQuiz === "Yes") {
//   alert("Passed");
// } else {
//   alert("Failed");
// }

// if (
//   isStudentsPresent === "Yes" &&
//   (isInstructor1Present === "Yes" || isInstructor2Present === "Yes")
// ) {
//   alert("Start Class");
// } else {
//   alert("Hold the class");
// }

// if (isStudentsPresent === "Yes") {
//   if (isInstructor1Present === "Yes" || isInstructor2Present === "Yes") {
//     alert("Start Class");
//   } else {
//     alert("Class me hi betho");
//   }
// } else {
//   alert("Hold the class");
// }

// male ka religion ka input is 1 OR 2
// female ka religion ka input is 1 OR 2
// agr dono true hai to okay, otherwise not okay

// var religion1 = "Muslim";
// var religion2 = "Christian";

// var maleReligion = prompt("Enter Male Religion");
// var femaleReligion = prompt("Enter Fe-Male Religion");

// if (
//   (maleReligion === religion1 || maleReligion === religion2) &&
//   (femaleReligion === religion1 || femaleReligion === religion2)
// ) {
// }

// var baraGhar = prompt("Ghar ka size");
// var bariGhari = prompt("Knsi Ghari");

// if (baraGhar === "Yes") {
//   alert("alert");
// } else {}

// var isBaraGhar = baraGhar === "Yes"
// var isBariGhari = bariGhari === "Yes"
// if (isBaraGhar || isBariGhari) {
//   alert("Okay");
// } else {
//   alert("You deserved better");
// }

// var student1 = "Ali";
// var student2 = "Umar";
// var student3 = "Haider";

// console.log("vars:", student1, student2, student3);
// var students = ["Ali", "Umar", "Haider"];
// console.log("array:", students[2]);

// var students = ["Faisal"]
// var student1 = prompt("Enter Student Name");

// students.push(student1)
// console.log(students);

// var students = ["Student1","Student2","Student3"]
// students.pop()

// console.log(students);

// var myUsers = [];
// var userName = prompt("User name");
// myUsers.push("umar");
// myUsers.push("haider");
// myUsers.push("salman");

// myUsers.pop()
// myUsers.pop()
// myUsers.pop()

// myUsers.unshift("User 1")
// myUsers.unshift("User 2")

// myUsers.shift()

// console.log(myUsers);

// var students = ["ali", "umar", "fazal","new"];
// // // students.splice(1,1)
// // students.splice(1,1,"uzair","haidar")

// // console.log(students);
// var newArray = students.slice(0, 3);
// console.log(newArray, students);

// for (var i = 0; i < 10; i++) {
//   console.log(i,i+2);
// }
// var insName = prompt("Enter name");
// if (insName === "Abdullah") {
//   console.log("name matched");
// } else if (insName === "Noman") {
//   console.log("name matched in else");
// } else {
//   console.log("name not matched");
// }

// var instructor1 = "Abdullah"
// var instructor2 = "Noman"

// var instructorName = prompt("Enter Instructor Name");
// if(instructorName === instructor1 || instructorName === instructor2){
// console.log("Instructor Found")
// }

// var numaishClasses = ["09-12","12-03"]
// numaishClasses.push("03-06")
// numaishClasses.unshift("06-09")
// var nomanClass = numaishClasses[1]
// console.log(numaishClasses,"all classes")

// // numaishClasses.pop()
// numaishClasses.shift()
// console.log(numaishClasses,"last class removed")

// console.log("1")
// console.log("2")
// for (var i = 0; i < 5; i++) {
//   console.log(i, "loop");
// }
// for (var i = 5; i >= 0; i--) {
//   console.log(i, "new loop");
// }

// var newArray = ["a", "b", "c", "d", "e", "f"];
// for (var i = newArray.length - 1; i >= 0; i--) {
//   console.log(newArray[i]);
// }
// for (var i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// var students = ["zeeshan", "IT", "haider", "World YT"];
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i]);
//   if (students[i] === "IT") {
//     continue;
//   }
//   console.log("console2", students[i]);
// }

// for (var i = 0; i < students.length; i++) {
//   var student = students[i];
//   console.log(i, student,"IT");
//   if (student === "IT") {
//     break;
//   }
//   console.log("run");
// }

// for (var i = 0; i < 5; i++) {
//   // console.log(i);
//   for (var j = 0; j < 3; j++) {
//     console.log("i=", i, "j=", j);
//   }
//   console.log("===new iteration===");
// }

// var maritalStatus = prompt("Are You Married");
// var casesMaritalStatus = maritalStatus.toLowerCase();

// console.log(maritalStatus, casesMaritalStatus, "case");

// console.log(maritalStatus.toUpperCase(), "Upper");
// if (maritalStatus.toUpperCase() === "YES") {
//   console.log("Mubarak");
// } else {
//   console.log("Earn some money");
// }

// var myName = "ubaid";
// var firstLetter = myName.slice(0, 1);
// var remainingLetter = myName.slice(1);

// var newName = firstLetter.toUpperCase() + remainingLetter.toLowerCase();

// console.log(myName, newName);
// var studentName = "Ahsan is good student";
// for (var i = 0; i < studentName.length; i++) {
//   console.log(studentName[i]);
// }
// var iIndex = -1;
// var variable1 = "Thihsh";
// console.log(variable1.lastIndexOf("h"));
// for (var i = 0; i < variable1.length; i++) {
//   if (variable1.charAt(i) === "h") {
//     iIndex = i;
//     break;
//   }
// }
// console.log(iIndex);
// console.log(variable1.charAt(0), variable1[0]);

// var stringValue = "World War Two was biggest war ever";
// var twoIndex = stringValue.indexOf("Two"); //10
// var string1 = stringValue.slice(0, twoIndex);
// var string2 = stringValue.slice(twoIndex + 3);

// var newString = string1 + "2" + string2;
// console.log(newString, "===Tow  ");

// var myString = "camelCase";
// var myString2 = myString.toUpperCase();
// var myString3 = myString2.toLowerCase()

// console.log(myString, myString2,myString3);

// var string1 = "camelCase";
// var mIndex = string1.indexOf("m");
// var zeroIndex = string1.charAt(1);
// var stringLength = string1.length;
// var string2 = string1.slice(5);
// console.log(stringLength, string1, string2, zeroIndex, typeof mIndex, "2");

// var flag = false;
// var myArray = [1, 2, 3, 4, 3, 5];
// var isShow = true

// for (var i = 0; i < myArray.length; i++) {
//   console.log(i, flag);
//   if (myArray[i] === 3) {
//     console.log("condition run");
//     flag = true;
//   }
// }

// if (flag) {
//   alert("flag is true");
// }

// var myNumber = 2; //number
// var myNumber2 = 2.4; //number
// var roundedNumber = Math.round(myNumber2);
// var flooredNumber = Math.floor(myNumber2);
// var ceiledNumber = Math.ceil(myNumber2);
// console.log(myNumber2, roundedNumber, flooredNumber,ceiledNumber);
// console.log(typeof myNumber, typeof myNumber2);
// console.log(myNumber, myNumber2);

// var randomNumber = Math.random();
// var dice = randomNumber * 6;
// var roundedDice = Math.floor(dice) + 1;
// console.log(roundedDice, "===random Number===");
// var randomNumber = Math.random();
// var rangedNumber = randomNumber * 6;
// var newRangedNumber = Math.floor(rangedNumber);
// var diceNumber = newRangedNumber + 1;
// var winnerNumber = 6;
// if (diceNumber === winnerNumber) {
//   alert("You Won");
// } else {
//   alert("Try Again");
// }

// var myArray = ["bat", "lion", "kite", "scale"];
// var randomNumber2 = Math.random() * 4;
// var indexNumber = Math.floor(randomNumber2);
// console.log(myArray[indexNumber]);

// var stringedNumber = "200";
// var stringedNumber2 = "400";
// // var calculatedResult = parseInt(stringedNumber) + parseInt(stringedNumber2);
// var calculatedResult = Number(stringedNumber) + Number(stringedNumber2);
// // var calculatedResult2 = stringedNumber - stringedNumber2;
// console.log(calculatedResult, "===calculate");
// var floatNumber = "2.4";
// console.log(parseFloat(floatNumber));

// var floatNumber = 2;
// console.log(floatNumber.toString());
// console.log(floatNumber.toFixed(1));

// var a = "a";
// a = "b";
// let a = "a";
// a = "b";
// const a = "a";
// a = "b";
// console.log(a);
// function getUserNam() {
//   let userName = prompt("Enter Your Name");
//   console.log(userName);
// }
// getUserNam();
// getUserNam();

// var userName = prompt("Enter Your Name");
// console.log(userName);

// var userName = prompt("Enter Your Name");
// console.log(userName);

// var userName = prompt("Enter Your Name");
// console.log(userName);
// const document = puri html
// const elements = document.getElementsByTagName("p");

// const modalDocument = document.getElementById("modal");
// const isIdFound = modalDocument.getAttribute("class");
// const modalPs = modalDocument.getElementsByTagName("p");
// const elements2 = document.querySelector(".modal");
// console.log(isIdFound, "===elements");
const myObject = {
  name: "Abdullah",
  age: 22,
  nationality: "Pakistani",
  sayHello: function () {
    alert("Hello World");
  },
  increaseAge: function () {
    myObject.age++;
  },
};
// const surname = myObject.hasOwnProperty("surname");
// myObject.gender = "male";
// myObject.age = 25;
// myObject.sayHello();
myObject.increaseAge();
myObject.increaseAge();

// // delete myObject.name;
// const dob = "11-08-2002";

// const dobDate = new Date(dob);
// const currentDate = new Date();

// const age = currentDate.getYear() - dobDate.getYear();
// console.log(age                                    , currentDate.getYear());
// const userDetails = {
//   name: "Abdullah",
//   gender: "male",
//   dob: "08-11-2002",

//   getAge: function () {
//     const currentDate = new Date();
//     const dobDate = new Date(userDetails.dob);

//     const age = currentDate.getFullYear() - dobDate.getFullYear();
//     console.log("Your age is:",age);
//   },
// };

// userDetails.getAge();

// const smitStudent = {
//   name: "A Samad",
//   rollNo: 182947,
//   dob: "12-04-2006",
//   gender: "m",
//   cnic: "42301-7222588-6",
//   getDOB:function(){
//     console.log(this.dob)
//   }
// };

// smitStudent.getDOB()
// function Student(name, rollNo, dob, gender, cnic) {
//   this.fname = name;
//   this.id = rollNo;
//   this.dateOfBirth = dob;
//   this.sex = gender;
//   this.identity = cnic;
// }
// Student.prototype.muzammil = function () {
//   console.log("Hello " + this.fname);
// };
// Student.prototype.nationality = "Pakistani";
// const student1 = new Student(
//   "Harisuddin",
//   234293,
//   "21-01-2009",
//   "m",
//   "42031-755588-5"
// );

// const student2 = new Student(
//   "moiz",
//   234294,
//   "21-01-2001",
//   "m",
//   "42031-755588-4"
// );
// console.log(student1, student2, student1.nationality);
// student1.muzammil(), student2.muzammil();

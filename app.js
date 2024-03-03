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
var myObject = { name: "abc", age: 27, rollNo: "24-123", isUserPassed: false }; // object
var myArray = ["abc", 123, true, undefined, null, myNull, myUndefined]; // array

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

for (var i = 0; i < 10; i++) {
  console.log(i,i+2);
}

// 1. Ways to print in Javascript
// document.write("This is document write");
// console.log("Hello World");
// alert("I'm alert");

// 2. Javascript console API (Application Programming Interface)
// console.log("Hello World", 4 + 6, "Another log", "Kiran");
// console.warn("This is a warning");
// console.error("This is an error");

// 3 .Variables in Javascript
// What are variables? - Containers to store data values.
var num1 = 125;
var num2 = 55;
// console.log(num1 + num2);

// 4. Data types in Javascript
// Numbers
var num3 = 15;
var num4 = 05;
// console.log(num3 + num4);

// String
var str1 = "This is a string";
var str2 = "This is also a string";
// console.log(str1 + " " + str2);
// console.log(str1, str2); //second way to write

// Objects
var marks = {
  ravi: 89,
  kiran: 56,
  john: 56.656,
  ambika: 68,
};
// console.log(marks); //prints in alphabetical order

// Boolean
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(null);

/*
At a very high level, there are 2 types of data types in Javascript
1. Primitive data types: undefined, null, number, string, boolean and symbol
2. Reference data types: Arrays and Objects
*/

// Arrays
var arr = [11, 42, "rinku", 48, 59];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
// console.log(arr[5]);

// console.log("After Data types");
// console.log("Operators");

// 5. Operators in Javascript (Important)
// i. Arithmetic Operators (+, -, *, /)
var num5 = 64;
var num6 = 32;
// console.log("The value of num5 + num6 is: ", num5 + num6);
// console.log("The value of num5 - num6 is: ", num5 - num6);
// console.log("The value of num5 * num6 is: ", num5 * num6);
// console.log("The value of num5 / num6 is: ", num5 / num6);
// console.log("The value of num5 % num6 is: ", num5 % num6);

// ii. Assignment Operators
var num7 = num6;
// console.log(num7);
num7 += 7; // num7 = num7 + 7. This will happen first (39)
num7 *= 7; // num7 = num7 * 7. This will happen next. (39 * 7)
// console.log(num7);

// iii. Comparison Operators
var num8 = 64;
// console.log(num5 == num8);
// console.log(num5 != num8);
// console.log(num5 >= num6);
// console.log(num5 <= num6);
// console.log(num5 > num6);
// console.log(num5 < num6);

// iv. Logical Operators
// console.log(num1 && num2); // num2 will print
// console.log(num5 && num8); // num2 will print
// console.log(
//   "AND Operator: In AND operator, in either one is false, it will be false."
// );
// console.log(true && true); // In AND operator, in either one is false, it will be false.
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(
//   "OR Operator: In OR operator, in either one is true, it will be true."
// );
// console.log(true || true); // In OR operator, in either one is true, it will be true.
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// v. Logical NOT //Such ko jhut aur jhut ko sach
// console.log("Logical NOT");
// console.log(!false);
// console.log(!true);

// 6. Functions in Javascript
// console.log("Now Functions in Javascript");
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

// DRY = Do not Repeat Yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// 7. Conditional Statements in Javascript
console.log("Now Conditional in Javascript");

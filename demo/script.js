//for-of-loop
//The for...of loop in JavaScript is used to iterate over iterable objects, such as:Arrays, Strings, Maps, Sets

// let str = "Apna Collage";
// for (const i of str) {
//   console.log("i=", i);
// }

//For-in loop

// let student = {
//   name: "Sumit Yadav",
//   age: 22,
//   cgpa: 8,
//   isPass: "true",
// };
// for (const key in student) {
//   console.log("key = ", key, " Value = ", student[key]);
// }

//Print even numbers form 0 to 10
// console.log("Even number is: ");
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//Create a game whare you start with any random game number. Ask the user to keep guessing the game number until the user enter correct number
// let gameNum = 25;
// let userNum = prompt("Guess the number: ");
// while (gameNum != userNum) {
//   userNum = prompt("You Entered wrong number. Guess again: ");
// }
// console.log("Congratulation, you entered the right number");

//String
//String is a sequence of characters used to reressent text

let str = "Apna Collage";
let str2 = "Apna Collage";

//Template Literals in JS
//A way to have embedded exresssions in strings
// `This is a template literal`

// let obj = {
//   item: "Pen",
//   price: 10,
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);

//Prompt the user to enter their full name. Generate ausername for them based on the input Start username @, followed their full name and ending with the fullname length.
// Example: username = "SanjayDas", iserma,e should be "@SanjayDas9".

// let userName = prompt("Enter user name: ");
// let userLength = userName.length;

// console.log(`@${userName.concat(userLength)}`);

//Array in js: It is collection of items

// let heroes = ["Ironman", "Thor", "Hulk", "Spiderman", "Antman", "Batman"];
// for (let index = 0; index < heroes.length; index++) {
//   console.log(heroes[index]);
// }

//using for of loop
// for (const hero of heroes) {
//   console.log(hero);
// }

//For a given array with marks of students -> [85,97 44, 37,76, 60]
//Find the average marks of the entire class.

// let studentMarks = [85, 97, 44, 37, 76, 60];
// let sumMark = 0;
// for (const marks of studentMarks) {
//   sumMark += marks;
// }
// console.log(`Total number of student: ${studentMarks.length}`);
// console.log(`Sum of total marks of student obtain: ${sumMark}`);

// let avrg = sumMark / studentMarks.length;
// console.log(`Average marks of the entire classes: ${avrg}`);

//For a given array with price of 5 itms-> [250,645,300,900,50]
//All items have an offer of 10% OFF on them. Change ther array to store final price after applying offer.

// let prices = [250, 645, 300, 900, 50];
// let arrayPriceafter10perOFF = 0;
// for (let price of prices) {
//   arrayPriceafter10perOFF = price - (price * 10) / 100; //deducting 10% from prices
//   console.log(arrayPriceafter10perOFF);
// }

//Method in js
//push().
// let foodItems = ["potato", "tomato", "litchi", "mango"];
// foodItems.push("Chips");
// let delIndex = foodItems.pop(); //Use to delet arra index value at the end
// console.log(foodItems);
// console.log(delIndex);
//ounShift(): it used to add new element at start in array
// foodItems.unshift("paneeer");
// console.log(foodItems);

//shift(): It is used to delet element from start in array
// let deletedItem = foodItems.shift();

// console.log(deletedItem);

//slice(): It is used to cut piece of array index
// console.log(foodItems.slice(1, 3));

//splice(): change original array(add.remove,replace)
// let arr = [1, 2, 3, 4, 5, 6];
// arr.splice(3, 2, 101, 102);
// console.log(arr);

//Create an array to store companies -> "Bloomberg" , Microsoft, "Uber", "Google", "IBM", "Netflix"
// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// //Remove the first company from the array
// arr.shift();

// //Remove Uber & Add Ola in its place
// arr.splice(1, 1, "Ola");

// //Add amazone at the end
// arr.push("Amazone");

// console.log(arr);

//Function in JS: Function is block of code that perform specific task, can be invoked nedded.

//Function -> 2 numbers, sum
// function sumOfTwoNumber(x, y) {
//   console.log(`Sum = ${x + y}`);
// }
// sumOfTwoNumber(5, 10);

// //Arrow function
// let arrowSum = (a, b) => {
//   console.log(a + b);
// };
// arrowSum(9, 10);

//Create a function uning "function" keyword that takes a String as an argument & returns the number of vowels in the string.
// function findVowel(str) {
//   let count = 0;
//   for (const st of str.toLowerCase()) {
//     if ((st == "a") | (st == "e") | (st == "i") | (st == "o") | (st == "u")) {
//       count++;
//     }
//   }
//   return count;
// }
// let vowelNum = findVowel("Sanjay".toUpperCase());
// console.log(`Total vowel letters is: ${vowelNum}`);

// let findVowelSum = (str) => {
//   let count = 0;
//   for (const st of str.toLowerCase()) {
//     if ((st == "a") | (st == "e") | (st == "i") | (st == "o") | (st == "u")) {
//       count++;
//     }
//   }
//   return count;
// };

//forEach Loop in Arrays
//arr.forEach(callbackFuction)
//CallBackFunction: Here, it is a function to execute for each element in the array
//A CallBack is a function passed as an argument to another function.
// let arr = ["apple", "banana", "Mango"];
// arr.forEach((val, inde, arr) => {
//   console.log(val, inde, arr);
// });
// let arr1 = [1, 2, 3, 4];
// arr1.forEach(function prinVal(val) {
//   console.log(val * val);
// });

//Some array Methods
//Map: Creates a new array with the results of some operation. The value its callback returns are used to from new array.
// let num = [2, 3, 5, 7, 6];
// let newArr = num.map((val) => {
//   return val * 2;
// });
// console.log(newArr);

//filter: Create a new array of elements that give true for a condition/filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(`New array is : ${newArr}`);

// //reduce: reduce method is used to return single value from array element
// let output = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output);

//Program to find largest number
// let arr = [5, 7, 6, 9, 1, 2, 10, 0, 1];
// let largestNum = arr.reduce((res, curr) => {
//   // if (res > curr) {
//   //   return res;
//   // } else {
//   //   return curr;
//   // }
//   return res > curr ? res : curr;
// });
// console.log(`Largest number is: ${largestNum}`);

// //We are given array of marks of students. Filter out of the marks of students that scored 90+.
// let studentMarks = [80, 90, 91, 30, 50, 60, 99, 98];
// let newArr = studentMarks.filter((val) => {
//   return val > 90;
// });
// console.log(`Student marks who scorde 90+ are: ${newArr}`);

// Take a number n as input from user. Create an array of number from 1 to n.
//Use the reduce method to calculate sum of all numbers in the array.
//Use the reduce method to calculate product of all numbers in the array.

// let num = prompt("Enter Number: ");
// let arr = [];
// for (let i = 1; i < num; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// //Calculating sum
// let sum = arr.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(`Sum = ${sum}`);

// //Calculating product
// let product = arr.reduce((prev, curr) => {
//   return prev * curr;
// });
// console.log(`Sum = ${product}`);

//DOM
// let fruits = document.querySelector("div");
// console.dir(fruits.innerText);

// let heading = document.querySelector("h1");

//Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.
// let h2 = document.querySelector("h2");
// console.dir(h2);
// console.log(h2.innerText + " from Apna College students.");

//Create 3 divs with common class name - "box". Access them & add some unique tex to each of them
// let divs = document.querySelectorAll(".box");
// let index = 1;
// for (div of divs) {
//   div.innerText = `new unique value ${index}`;
//   index++;
// }

//DOM Manipulation
//Insert Elements
// let el = document.createElement("div");
// node.append(el) //adds at the end of node(inside)
// node.prepend(el) //adds at the start of node(inside)
// node.before(el) //adds before the node(outside)
// node.after(el) //adds after the node(outside)

//delete element
//node.remove()//remove the node

//Create a new button element. Bive it a text "click me", background color red & text color of white
//insert the button as the first element inside the body tag.
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// let body = document.querySelector("body");
// body.prepend(newBtn);

// //Create a <p> tag in html give it a class & some styling
// //Now create a new class in CSS and try to append this class to the <p> element.

// //Did you notice, How you overwrite the class name when you add a new one?
// // Solve this problem using classList.
// let para = document.querySelector("p");
// para.classList.add("content1");

//Events in JS
//The change in the state of an object is know as an Event
//Event are fired to notify code of "interesting changes" that may affect code execution.

//Mouse eventes(click, double click etc.)
//Keyboard events(keypress, keyup, Keydown)
//Form events(submit etc)
//Print event & many more
// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//   console.log("Button was clicked.");
//   let a = 25;
//   a++;
//   console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//   console.log("Are you inside div");
// };

//Event Object
//It is a special object that has details about the event.
//All event handelers have access to the Event Objet's properties and methods.

// let btn = document.querySelector("#btn");
// btn.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
// };

//EventListner
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log("Button was clicked - Handler1");
// });
// btn.addEventListener("click", () => {
//   console.log("Button was clicked - Handler2");
// });
// let handler3 = () => {
//   console.log("Button was clicked - Handler3");
// };
// btn.addEventListener("click", handler3);
// btn.addEventListener("click", () => {
//   console.log("Button was clicked - Handler4");
// });
// btn.removeEventListener("click", handler3);

//Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let btn = document.querySelector("#toggle-button");
let body = document.querySelector("body");
let mode = "light";
btn.addEventListener("click", () => {
  if (btn.innerText === "Change Dark Mode") {
    mode = "dark";
    console.log(mode);
    body.style.backgroundColor = "black";
    btn.innerText = "Change light Mode";
  } else {
    mode = "light";
    console.log(mode);
    body.style.backgroundColor = "white";
    btn.innerText = "Change Dark Mode";
  }
});

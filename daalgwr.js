// const target = { a: 3, b: 2 };
// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign(source, target);
// // console.log(target); // { a: 1, b: 4, c: 5 }
// // console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

// const frozenObject = { name: "Bohn", age: 20 };
// Object.freeze(frozenObject);
// frozenObject.age = 19;
// console.log(frozenObject); // 20

// const sealedObject = { name: "Bohn", age: 20 };
// Object.seal(sealedObject);
// sealedObject.age = 19;
// delete sealedObject.name;
// console.log(sealedObject); // { name: "Bohn", age: 19 }

// const car = {
//   brand: "Lamborghini",
//   model: "Aventador",                                     Ex-1
//   year: 2024,
// };
// console.log(Object.entries(car));

// const person = {                                         Ex-2
//   firstName: "Ba",
//   lastName: "Bold-erdene",
//   age: 19,
// };
// delete person.age;
// person.city = "Ulaanbaatar";
// person.position = "Student";
// person.ismarried = "Single";
// console.log(person);

// const person = {                                            Ex-3
//   add: function (firstName, lastName) {
//     person.firstName = firstName;
//     person.lastName = lastName;
//     return person.firstName + " " + person.lastName;
//   },
// };
// console.log(person.add("Bold-erdene", "Ba"));

// const movie = {
//   title: "Interstellar",
//   director: "Christopher Nolan",
//   year: 2014,
//   rating: 8.6,
// };
// function getkeys() {
//     title: "Interstellar",
//   director =   "Christopher Nolan";
//   year: 2014;
//   rating: 8.6;-
//   return Object.keys(movie);
// }
// function getvalues() {
//   return Object.values(movie);
// }
// console.log(getkeys());
// console.log(getvalues());

// const orders = [
//   { id: 1, user: "Bat", items: 3, total: 120 },
//   { id: 2, user: "Sara", items: 5, total: 300 },
//   { id: 3, user: "Bold", items: 1, total: 40 },
// ];
// const batTotal = orders
//   .filter((order) => order.user === "Bat")
//   .reduce((sum, order) => sum + order.total, 0);

// console.log(batTotal);

// function calculateTotalSales(orders) {
//   let totalsales = 0;
//   for (let order of orders) {
//     totalsales = totalsales + order.total;
//   }
//   return totalsales;
// }
// console.log(calculateTotalSales(orders));

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let fruits = ["apple", "banana", "cherry", "mango", "kiwi"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// const cars = ["BMW", "Audi", "Mercedes", "Lexus", "Toyota", "Lamborghini"];
// for (let i = 0; i < cars.length; i = i + 2) {
//   console.log(cars[i]);
// }

// let k = 0;
// for (let i = 1; i <= 10; i++) {
//   k = k + i;
// }
// console.log(k);

// let numbers = [1, 2, 3, 4, 5];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// let numbers = [3, 6, 2, 9, 4];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// let palindrome = 951;
// let str = palindrome.toString();
// // console.log(str);
// let reserved = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reserved += str[i];
// }
// // console.log(reserved);
// // console.log(str);
// if (str === reserved) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let primenumber = 7;
// for (let i = 2; i <= primenumber; i++) {
//   if (primenumber % i === 0) {
//     console.log(primenumber + " is a prime number");
//   } else {
//     console.log("not prime number");
//   }
//   break;
// }

// let n = 21;
// for (let i = 1; i <= 10; i++) {
//   console.log(n + " x " + i + " = " + n * i);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let k = "";

//   for (let j = n; j >= i; j--) {
//     k += j;
//   }
//   console.log(k);
// }

// let n = 7;
// for (let i = 1; i <= n; i++) {
//   let k = "";
//   for (let j = 1; j <= i; j++) {
//     k += j;
//   }
//   console.log(k);
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// let fruits = ["apple", "banana", "pineapple", "mango", "kiwi"];
// while (i <= fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// const cars = ["BMW", "Audi", "Mercedes", "Lamborghini", "Bugatti"];
// let i = 0;
// while (i < cars.length) {
//   console.log(cars[i]);
//   i += 2;
// }

// let i = 1,
//   sum = 0;
// while (i <= 10) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// let i = 1;
// let numbers = [1, 2, 3, 4, 5];
// while (i <= numbers.length) {
//   console.log(numbers[numbers.length - i]);
//   i++;
// }

// let numbers = [3, 5, 2, 8, 6];
// let max = numbers[0];
// let i = 1;
// while (i < numbers.length) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   i++;
// }
// console.log(max);

// n = 8;
// if (n % 2 == 0) {
//   console.log(n + " is even number");
// }
// if (n % 2 != 0) {
//   console.log(n + " is odd number");
// }

// let i = 1,
//   n = 50;
// while (i <= n) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 0;
// let numbers = [1, 2, 5, 7, 8, 9, 11, 12, 14];
// while (i < numbers.length) {
//   if (numbers[i] % 2 == 0) {
//     console.log(numbers[i] + " is even number");
//     break;
//   }
//   i++;
// }

// let person = { name: "Bold-erdene", age: 19, city: "New York" };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     console.log(i + " is Fizz");
//   }
//   if (i % 5 == 0) {
//     console.log(i + " is Buzz");
//   }
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i + " is FizzBuzz");
//   }
//   i++;
// }

// let numbers = [5, 8, 12, 20, 25, 30, 35];
// let max = numbers[0];
// for (let i = 0; i <= numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   i++;
// }
// console.log(max);

// let orignalArray = [1, 2, 2, 3, 3, 4, 4, 5];
// for (let i = 0; i < orignalArray.length; i++) {
//   if (orignalArray[i] === orignalArray[i + 1]) {
//     orignalArray.splice(i, 1);
//     i--;
//   }
// }
// console.log(orignalArray);

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
// }

// let n = 1548;
// let sum = 0;
// let digit;
// while (n > 0) {
//   digit = n % 10;
//   sum = sum + digit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let n = [1, 2, 3, 4, 5, 6];
// n.push(7);
// let i = 0;
// let index = 0;
// let a = [];
// let b = [];
// while (i < n.length) {
//   if (n[i] % 2 === 0) {
//     a.push(n[i]);
//     // index++;
//   } else {
//     b.push(n[i]);
//     // index++;
//   }
//   i++;
// }
// console.log(a);
// console.log(b);

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "* ";
//   let space = "  ";
//   console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = n - i; j >= 1; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 2 * i - 1; k >= 1; k--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// let a = 4,
//   b = 5,
//   c = 9,
//   t;
// t = a * a + b * b;
// if (t === c * c) {
//   console.log("Right triangle");                                    / ugsun 3 toogoor gurwaljnii helber oloh
// }
// if (t > c * c) {
//   console.log("Acute triangle");
// }
// if (t < c * c) {
//   console.log("Obtuse triangle");
// }

// let n = 4;
// let k = 0,
//   m;
// for (let i = 1; i <= n; i++) {
//   m = i * i * i;
//   k = k + m;
// }
// console.log(k);

// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(function (num) {
//   return num * 2;
// });
// console.log(doubled);

// let people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 31 },
//   { name: "Charlie", age: 35 },
// ];
// let ages = people.find((person) => person.age > 30);
// console.log(ages);

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = number.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// let fruits = ["apple", "banana", "cherry", "date"];
// const fruts = fruits.some((fruit) => fruit.includes("a"));
// console.log(fruts);

// let numbers = [1, 2, 3, -2, 5];
// let positive = numbers.every((num) => num > 0);
// console.log(positive);

// let people = [
//   {
//     name: "Binderiya",
//     age: 20,
//   },
//   {
//     name: "Bold",
//     age: 20,
//   },
//   {
//     name: "Ariuka",
//     age: 20,
//   },
//   {
//     name: "Egshige",
//     age: 20,
//   },
// ];
// let names = people.reduce((acc, person) => {
//   acc.push(person.name);
//   return acc;
// }, []);
// console.log(names);

// let students = [
//   { name: "Bat", age: 20, grades: [85, 90, 78] },
//   { name: "Sara", age: 22, grades: [60, 60, 75] },
//   { name: "Bold", age: 19, grades: [80, 85, 88] },
//   { name: "Naraa", age: 21, grades: [70, 72, 64] },
// ];
// let highgradestudents = students.reduce((top, student) => {
//   let avgGrade =
//     student.grades.reduce((sum, grade) => sum + grade, 0) /
//     student.grades.length;
//   if (avgGrade > 75) {
//     top.push(student.name);
//   }
//   return top;
// }, []);
// console.log(highgradestudents);

// let products = [
//   { name: "Laptop", category: "Electronics", price: 1200 },
//   { name: "Phone", category: "Electronics", price: 800 },
//   { name: "Book", category: "Education", price: 25 },
//   { name: "Pen", category: "Education", price: 5 },
//   { name: "Shoes", category: "clothing", price: 150 },
// ];
// let categoryelectronics = products.filter(
//   (product) => product.category === "Electronics" && product.price > 1000,
// );
// console.log(categoryelectronics);

// let users = [
//   { name: "Ariuka", email: "ariuak4405@gmail.com" },
//   { name: "Sugaa", email: "muusuga@gmail.com" },
//   { name: "Bold", email: "boldoo88@gmail.com" },
// ];
// let emails = users.map((user) => user.email);
// console.log(emails);

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddnums = nums.filter((num) => num % 2 !== 0);
// console.log(oddnums);

// let users = [
//   { name: "Bat", age: 12 },
//   { name: "Sara", age: 22 },
//   { name: "Bold", age: 16 },
//   { name: "Naraa", age: 21 },
// ];
// let adultUsers = users.filter((user) => user.age >= 18);
// console.log(adultUsers);

// let score = [45, 78, 89, 90, 100, 88, 92];
// let highScores = score.filter((s) => s >= 100);
// console.log(highScores);

// let people = [
//   { name: "Bat", age: 20 },
//   { name: "Sara", age: 22 },
//   { name: "Bold", age: 19 },
// ];
// let isadult = people.every((person) => person.age >= 18);
// console.log(isadult);

// let students = [
//   { name: "Bat", score: 85 },
//   { name: "Sara", score: 92 },
//   { name: "Bold", score: 78 },
// ];
// let passedstudents = students.filter((student) => student.score >= 80);
// console.log(passedstudents);

// let names = ["bat", "sara", "bold", "naraa"];
// let uppercasedNames = names.map((name) => name.toUpperCase());
// console.log(uppercasedNames);

// let products = [
//   { name: "Laptop", discount: false },
//   { name: "Phone", discount: true },
//   { name: "Tablet", discount: false },
// ];
// let discountedProducts = products.filter(
//   (product) => product.discount === true,
// );
// console.log(discountedProducts);

// let exams = [
//   { name: "Enkh", score: 85 },
//   { name: "Uuganaa", score: 80 },
//   { name: "Saraa", score: 88 },
// ];
// const topStudent = exams.reduce((max, curr) =>
//   curr.score > max.score ? curr : max,
// );
// console.log(topStudent.name);

// let items = [
//   { name: "Book", price: 20 },
//   { name: "Pen", price: 50 },
//   { name: "Laptop", price: 500 },
// ];
// let lowpriceitems = items.filter((item) => item.price < 100);
// console.log(lowpriceitems);

// let numbers = [3, 7, 12, 9, 5];
// let biggerthan5 = numbers.filter((num) => num > 5);
// console.log(biggerthan5);

// let numbers = [1, 2, 5, 7, 1];
// let istheresynonymnumber = numbers.some((num, index) => {
//   return numbers.indexOf(num) !== index;
// });
// console.log(istheresynonymnumber);

// let letters = ["a", "b", "a", "b", "c", "a"];
// let counts = letters.reduce((acc, letter) => {
//   acc[letter] = (acc[letter] || 0) + 1;
//   return acc;
// }, {});
// console.log(counts);

// let numbers = [10, 10, 10];
// let hh = numbers.reduce((acc, cur) => {
//   return (acc + cur) / Math.floor(numbers.length);
// }, 0);
// console.log("hh", hh);

// let arr = [1, 2, 3, 4];
// let sum = arr.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);
// console.log("sum", sum);

// let arr = [5, 12, 3, 9];

// let max = arr.reduce((a, b) => (a > b ? a : b));
// console.log(max);

// let arr = [5, 3, 9, 5];
// let min = arr.reduce((a, b) => (a < b ? a : b));
// console.log(min);

// let arr = [1, 0, 3, 2, 6];
// let sumeven = arr.filter((n) => n % 2 === 0).reduce((sum, n) => sum + n, 0);
// console.log(sumeven);

// let arr = [1, 2, 3, 4, 8];
// let Arr = arr.filter((n) => n % 2 === 0);
// console.log(Arr);

// let arr = ["d", "l", "o", "b", "l", "o", "o", "c"];
// let rev = arr.reduceRight((str, char) => str + char, " ");
// console.log(rev);

// let arr = [4, 2, 8];
// let result = arr.reduceRight((a, b) => a - b);
// console.log(result);

// const users = [
//   { name: "Bat", age: 20 },
//   { name: "Bold", age: 30 },
//   { name: "Saraa", age: 25 },
// ];
// let avgAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;
// // console.log(avgAge);

// const items = [
//   { name: "Apple", category: "fruit", price: 3 },
//   { name: "Carrot", category: "vegetable", price: 2 },
//   { name: "Banana", category: "fruit", price: 4 },
// ];
// let totalByCategory = items.reduce((acc, item) => {
//   acc[item.category] = (acc[item.category] || 0) + item.price;
//   return acc;
// }, {});
// console.log(totalByCategory);

const words = ["hi", "hello", "goodbye", "hey"];
let longest = words.reduce((a, b) => (a.length > b.length ? a : b));
console.log(longest);

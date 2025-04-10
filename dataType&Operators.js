// // Exercise 1: Numbers
let integer = 26;
let float = 8.5;

let mango = integer + float;
let banana = integer - float;
let peach = integer * float;
let watermelon = integer / float;
let pie = integer % float;
let pizza = integer ** float;

console.log(`Mango: ${mango}`);
console.log(`Banana: ${banana}`);
console.log(`Peach: ${peach}`);
console.log(`Watermelon: ${watermelon}`);
console.log(`Pie: ${pie}`);
console.log(`Pizza: ${pizza}`);

// // Exercise 2: Boolean & Operators
// // 1)
// let num1 = 34;
// let num2 = 18;

// let isEqual = num1 == num2;
// let isNotEqual = num1 != num2;
// let isGreater = num1 > num2;
// let isGraterOrEqual = num1 >= num2;
// let isLess = num1 < num2;
// let isLessOrEqual = num1 <= num2;

// console.log(`Is num1 equal to num2? ${isEqual}`)
// console.log(`Is num1 not equal to num2? ${isNotEqual}`)
// console.log(`Is num1 greater than num2? ${isGreater}`)
// console.log(`Is num1 greater than or equal to num2? ${isGreater}`)
// console.log(`Is num1 less than num2? ${isGreater}`)
// console.log(`Is num1 less than or equal to num2? ${isLessOrEqual}`)

// 2)
let x = 8;
let y = 12;

let greaterThan = x > y;
console.log(greaterThan)

let isLessOrEqual = x <= y;
console.log(isLessOrEqual)

let isEqual = x == y;
console.log(isEqual)

let isNotEqual = x != y;
console.log(isNotEqual)

// 3)
let a = true;
let b = false;

let result = a && b;
console.log(result)

let result2 = a || b;
console.log(result2)

let result3 = !a;
console.log(result3)

// 4)
let p = 10;

p += 5;
console.log(p);

p -= 4;
console.log(p);

p *= 15;
console.log(p);

p /= 8;
console.log(p);

p %= 6;
console.log(p);


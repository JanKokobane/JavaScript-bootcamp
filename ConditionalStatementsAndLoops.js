// Exercise 1: Temperature check
let temperature = 30;

if (temperature < 0) {
    temperature = "it`s freezing!";
    console.log(temperature);
} else if (temperature >= 0 && temperature <= 15) {
    temperature = "it`s cold.";
    console.log(temperature);
} else if (temperature > 15 && temperature <= 25) {
    temperature = "it`s mild.";
    console.log(temperature);
} else {
    temperature = "it`s warm.";
    console.log(temperature);
}

switch (temperature) {
    case "it`s freezing!":
        console.log("Freezing!");
        break;
    case "it`s cold.":
        console.log("Cold.");
        break;
    case "it`s mild.":
        console.log("Mild.");
        break;
    case "it`s warm.":
        console.log("Warm");
        break;
}

// Exercise 2: Divisibility Check

let number = 12; 
if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// let number = 12; 

switch (true) {
    case number % 2 === 0 && number % 3 === 0:
        console.log("Divisible by both.");
        break;
    case number % 2 === 0:
        console.log("Divisible by 2.");
        break;
    case number % 3 === 0:
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}


// Exercise 3: For loops
// Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print all even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Calculate the sum of all numbers from 1 to 100 and print the result
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Print each element of the array [1, 2, 3, 4, 5]
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

// Find and print the largest number in the array [3, 7, 2, 5, 10, 6]
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
        largest = numbers2[i];
    }
}
console.log(largest);



// 1. Print numbers from 1 to 10
let number1 = 1;
while (number1 <= 10) {
    console.log(number1);
    number1++;
}

// 2. Print all even numbers between 1 and 20
let number2 = 1;
while (number2 <= 20) {
    if (number2 % 2 === 0) {
        console.log(number2);
    }
    number2++;
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result
let number3 = 1;
let sumTotal = 0;
while (number3 <= 100) {
    sumTotal += number3;
    number3++;
}
console.log(sumTotal);

// 4. Print all multiples of 5 less than 50
let number4 = 1;
while (number4 < 50) {
    if (number4 % 5 === 0) {
        console.log(number4);
    }
    number4++;
}



// Exercise 5: Do While loops
let counter1 = 1;
do {
    console.log(counter1);
    counter1++;
} while (counter1 <= 10);

let counter2 = 1;
let totalSum = 0;
do {
    totalSum += counter2;
    counter2++;
} while (counter2 <= 100);
console.log(totalSum);

let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10:"));
} while (userInput <= 10);
console.log(userInput);

const randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
do {
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (userGuess !== randomNumber) {
        console.log("Try again!");
    }
} while (userGuess !== randomNumber);
console.log(randomNumber);






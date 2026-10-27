// Question 1: Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Question 2: Return the sum of an array

function sumArray(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

const numbers = [1, 2, 3, 4, 5];

console.log("Sum:", sumArray(numbers));
// Question 3: Find the largest number in an array

function findLargest(numbers) {
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

const values = [12, 45, 7, 89, 23];

console.log("Largest:", findLargest(values));
// Question 4: Check if a number is even or odd

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("10 is:", checkEvenOdd(10));
console.log("7 is:", checkEvenOdd(7));
// Question 5: Reverse a string

function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("Reversed:", reverseString("Hello"));
// Question 6: Merge two arrays using the spread operator

const a = [1, 2];
const b = [3, 4];

const mergedArray = [...a, ...b];

console.log("Merged array:", mergedArray);
// Question 7: Return even numbers using filter

const numbersForFilter = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbersForFilter.filter(number => number % 2 === 0);

console.log("Even numbers:", evenNumbers);
// Question 8: Rewrite using template literals

const name = "Alice";
const msg = `Hello ${name}, welcome!`;

console.log(msg);
// Question 9: Rewrite using an arrow function

const greet = (name) => {
    return "Hello, " + name;
};

console.log(greet("Alice"));
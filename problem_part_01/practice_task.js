/* Task-1:
Write a function to convert temperature from Celsius to Fahrenheit. */

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Example:
console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(25));  // 77




/* Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0 */

function countOccurrences(numbers, find) {
  let count = 0;
  for (let num of numbers) {
    if (num === find) {
      count++;
    }
  }
  return count;
}

// Examples:
console.log(countOccurrences([5,6,11,12,98,5], 5));   // 2
console.log(countOccurrences([5,6,11,12,98,5], 25));  // 0






/* Task-3:
Write a function to count the number of vowels in a string. */

function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Example:
console.log(countVowels("Hello World"));   // 3



/* Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */

function findLongestWord(str) {
  let words = str.split(' ');
  let longest = '';

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Example:
console.log(findLongestWord("I am learning Programming to become a programmer")); // Programming





/* Task-5:
Generate a random number between 10 to 20. */

function randomBetween10and20() {
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

// Example:
console.log(randomBetween10and20());

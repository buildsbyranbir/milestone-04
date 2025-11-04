/* Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red'] */


const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors = [];

for (let i = colors.length - 1; i >= 0; i--) {
  reversedColors.push(colors[i]);
}

console.log(reversedColors);
// Output: ['orange', 'yellow', 'green', 'blue', 'red']










/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46] */


const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
// Output: [12, 98, 78, 46]











/* Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik' */

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let result = '';

for (const name of names) {
  result += name;
}

console.log(result);
// Output: 'TomTimTinTik'











/* Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I' */

const statement = 'I am a hard working person';
const words = statement.split(' ');
const reversedStatement = words.reverse().join(' ');

console.log(reversedStatement);
// Output: 'person working hard a am I'








/* 
Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3] */

const original = [1, 2, 3];
const copy = [...original]; // using spread operator
copy[0] = 99;

console.log("Original:", original);
console.log("Copy:", copy);
// Output:
// Original: [1, 2, 3]
// Copy: [99, 2, 3]







/* Task 6
Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90 */

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

for (const student of students) {
  console.log(`Name: ${student.name}, Marks: ${student.marks}`);
}

// Output:
// Name: John, Marks: 85
// Name: Alice, Marks: 90







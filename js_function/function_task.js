/* Task-1
Take four parameters. Multiply the four numbers and then return the result */
// Task-1: চারটি সংখ্যার গুণফল বের করা
function multiplyFour(a, b, c, d) {
  return a * b * c * d;
}



/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

// Task-2: সংখ্যাটি odd হলে 2 দিয়ে গুণ, even হলে 2 দিয়ে ভাগ করে রিটার্ন করা
function oddOrEven(num) {
  if (num % 2 === 1) {
    return num * 2;
  } else {
    return num / 2;
  }
}




/* Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

// Task-3: অ্যারের গড় বের করা
function make_avg(arr, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  return sum / size;
}




/* Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */

// Task-4: বাইনারি স্ট্রিংয়ের মধ্যে 0 এর সংখ্যা গণনা করা
function count_zero(binaryStr) {
  let count = 0;
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '0') {
      count++;
    }
  }
  return count;
}




/* 
Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */

// Task-5: সংখ্যাটি odd না even তা বলবে
function odd_even(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
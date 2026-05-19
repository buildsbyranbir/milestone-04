// ===============================
// JavaScript Array Example
// ===============================

// Array holo ekta variable er moddhe onek gula value store korar system

let fruits = ["apple", "banana", "mango", "orange"];

// pura array print korbe
console.log(fruits);



// index diye specific value access kora hoy
// index always 0 theke start hoy

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana




// ===============================
// Array er moddhe notun value add
// ===============================

// push() last e value add kore
fruits.push("grape");

console.log(fruits);




// ===============================
// Last value remove
// ===============================

// pop() last er value remove kore
fruits.pop();

console.log(fruits);




// ===============================
// First e value add
// ===============================

// unshift() first e value add kore
fruits.unshift("lichi");

console.log(fruits);



// ===============================
// First value remove
// ===============================

// shift() first value remove kore
fruits.shift();

console.log(fruits);



// ===============================
// Array length check
// ===============================

// length diye total koyta item ache dekha jay
console.log(fruits.length);




// ===============================
// Loop diye array print
// ===============================

for(let i = 0; i < fruits.length; i++){

    // ek ek kore sob item print korbe
    console.log(fruits[i]);
}




// ===============================
// Array er moddhe number example
// ===============================

let numbers = [10, 20, 30, 40, 50];

// total ber korar jonno variable
let sum = 0;

for(let i = 0; i < numbers.length; i++){

    // prottek number sum er sathe add hocche
    sum = sum + numbers[i];
}

console.log(sum);

// ===============================
// includes() diye value check
// ===============================

// array er moddhe mango ache kina check
console.log(fruits.includes("mango"));

// ===============================
// indexOf() diye position check
// ===============================

// mango kon index e ache
console.log(fruits.indexOf("mango"));

// ===============================
// splice() diye value remove/add
// ===============================

let students = ["rahim", "karim", "sakib", "tamim"];

// 1 number index theke 1 ta value remove
students.splice(1, 1);

console.log(students);

// ===============================
// slice() diye copy new array
// ===============================

let newStudents = students.slice(0, 2);

// 0 theke 2 er ag porjonto nibe
console.log(newStudents);
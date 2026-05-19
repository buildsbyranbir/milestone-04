// ======================================================
// Module 18: More About Array, Traversal and Operation
// ======================================================



// ======================================================
// 18_1: Recap -> Variable, Array, Object,
// Data Types, Loops & Conditionals
// ======================================================

// variable declare
let name = "Rahim";
let age = 25;

// array
let numbers = [10, 20, 30, 40];

// object
let person = {
    name: "Karim",
    profession: "Developer"
};

// data types check
console.log(typeof name); // string
console.log(typeof age); // number

// loop example
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// conditional example
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Not Adult");
}




// ======================================================
// 18_2: Traverse Array using for, while,
// and for-of loop in JavaScript
// ======================================================

let fruits = ["apple", "banana", "mango", "orange"];


// -------- for loop --------
// index diye array traverse kora
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}



// -------- while loop --------
// same kaj while loop diye
let i = 0;

while(i < fruits.length){
    console.log(fruits[i]);
    i++;
}



// -------- for of loop --------
// direct value paoya jay
for(let fruit of fruits){
    console.log(fruit);
}




// ======================================================
// 18_3: Reverse an Array
// 3 Techniques Explained
// ======================================================

let nums = [1, 2, 3, 4, 5];


// -------- technique 1: reverse() method --------
// original array kei ulta kore dey
let reversed1 = nums.reverse();

console.log(reversed1);



// -------- technique 2: for loop --------
// manually reverse kora
let numbers2 = [10, 20, 30, 40];
let reversed2 = [];

for(let i = numbers2.length - 1; i >= 0; i--){
    reversed2.push(numbers2[i]);
}

console.log(reversed2);



// -------- technique 3: unshift() --------
// array er first e value add hoy
let numbers3 = [100, 200, 300];
let reversed3 = [];

for(let item of numbers3){
    reversed3.unshift(item);
}

console.log(reversed3);




// ======================================================
// 18_4: Sort Array in Ascending & Descending Order
// ======================================================

let marks = [40, 10, 80, 25, 60];


// -------- ascending order --------
// choto theke boro
marks.sort(function(a, b){
    return a - b;
});

console.log(marks);



// -------- descending order --------
// boro theke choto
marks.sort(function(a, b){
    return b - a;
});

console.log(marks);




// ======================================================
// 18_5: Array of Objects and
// Access Object inside an Array
// ======================================================

let students = [
    {
        name: "Rahim",
        marks: 80
    },
    {
        name: "Karim",
        marks: 90
    },
    {
        name: "Jabbar",
        marks: 70
    }
];


// first object access
console.log(students[0]);


// first object er name access
console.log(students[0].name);


// sob student er info print
for(let student of students){
    console.log(student.name, student.marks);
}




// ======================================================
// 18_6: [Optional] Traverse in a 2D Array
// ======================================================

// 2D array mane array er vitore array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


// outer loop row er jonno
for(let i = 0; i < matrix.length; i++){

    // inner loop column er jonno
    for(let j = 0; j < matrix[i].length; j++){

        console.log(matrix[i][j]);

    }
}




// ======================================================
// 18_7: Copy Array Elements to Another Array
// ======================================================

let original = [1, 2, 3, 4];


// -------- method 1: loop diye copy --------
let copy1 = [];

for(let item of original){
    copy1.push(item);
}

console.log(copy1);



// -------- method 2: spread operator --------
// shortcut way
let copy2 = [...original];

console.log(copy2);



// -------- method 3: slice() --------
// array copy kore
let copy3 = original.slice();

console.log(copy3);




// ======================================================
// 18_8: Module Summary & Practice Task
// ======================================================

// ei module e ja ja shikhlam:

// 1. Array traversal
// 2. for loop
// 3. while loop
// 4. for of loop
// 5. reverse array
// 6. sort array
// 7. array of objects
// 8. 2D array
// 9. copy array


// ---------------- Practice Task ----------------

// task 1:
// array er sob even number print koro

let arr1 = [1,2,3,4,5,6,7,8];

for(let num of arr1){
    if(num % 2 === 0){
        console.log(num);
    }
}



// task 2:
// array reverse koro

let arr2 = [10,20,30,40];
let reverseArr = [];

for(let i = arr2.length - 1; i >= 0; i--){
    reverseArr.push(arr2[i]);
}

console.log(reverseArr);



// task 3:
// array sort koro

let arr3 = [50,10,90,30];

arr3.sort(function(a,b){
    return a - b;
});

console.log(arr3);



// task 4:
// object array theke sob name print koro

let users = [
    {name: "A"},
    {name: "B"},
    {name: "C"}
];

for(let user of users){
    console.log(user.name);
}
// Create an Array

// []

// Value and Data Type

const number = [5,7,34,546,776,2,3,7,89,42,677,116]; //***/

// const number2 = new Array(5,7,34,546,776,2);

let val;

// Get Array length
val = number.length;

// Check if is array
val = Array.isArray(number);

// Get Single value

val = number[2];

// Insert into array
// val = number[2] = 100;

// Find the index value
val = number.indexOf(576576); // if array match is retrun the index number if not -1

// Mutating Array

// Add on to end
// number.push(5000);

// Add on to Front
// number.unshift(3000);

// Take off from end
// number.pop();

// Take off from front
// number.shift();

// slice
// val = number.slice(1, 5);


const fruit = ["Apple", "Kiwi", "Orange"];

// Splice to Remove
// val = fruit.splice(0, 2);

// Splice t add
fruit.splice(1,1, "Lemon");

console.log(val);
console.log(fruit);
// console.log(number);
// String

const name = "Javid";
const name2 = new String("Javid");

// Number
const num = 5;
const num2 = new Number(5);

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

// Function

const getSum1 = function(x,y){
    return x + y;
}

const getSum2 = new Function("x", "y", 'return x + y');

// object

const test = {
    x: "test"
}

const test2 = new Object({name:"Jagan"})


// Array
const arr1 = [1,2,3,4,5];

const arr2 = new Array(1,2,3,4,5);

console.log(arr1);
console.log(arr2);




// if(name === name2){
//     console.log("yes im correct");
// } else {
//     console.log("no im not correct");
// }
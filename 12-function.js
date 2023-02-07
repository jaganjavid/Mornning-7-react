// function Decalrations --- (function statement)


// Two Phases

// 1 - Creatation
// 2 - excutation

// function greet(firstName = "John", lastName = "Doe"){ // Default value
    // Es5
    // if(typeof firstName === "undefined"){firstName = "John"};
    // if(typeof lastName === "undefined") {lastName = "Doe"};
//     return `Hello ${firstName} ${lastName}`;
// }



// console.log(greet());

// greet("Jagan","Javid"); // call

// Function Expression
// const add = function(x=5){
//     return x + 5;
// }

// console.log(add());


// AN IIFE (Imediately Invoked function ecpression) is a Javascript

// (function(){
//   console.log("hello");  
// //   let x = "Javid";
// //   console.log(x);
// })();

(function(name){
    console.log("Hello " + name)
})("Javid")


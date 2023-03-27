// const sayHello = function(){
//     console.log("Hello");
// }

// const sayHello = () => {
//     console.log("Hello Guys")
// }

// One line function does not need braces
// const sayHello = () => console.log("Hello");

// One Line Return

// const sayHello = () => "Hello";

// const sayHello = function(){
//     return "Hello"
// }

// Return Object
// const sayHello = () => ({msg: "Hello"})

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello("Jagan", "Javid");

const users = ["Javid", "Akash", "Arun"];

// const nameLength = users.map(function(name){
//     return name;
// })
const nameLength = users.map((name) => {
    return name.toUpperCase();
})

console.log(nameLength);

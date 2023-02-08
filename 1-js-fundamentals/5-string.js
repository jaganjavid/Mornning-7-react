const firstName = "Jagan";
const lastName = "Javid";
const age = 25;
const str = "Hello there my name is jagan";
const tags = "Web Development,Coding,Programming";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
val += " Doe";

val = "John" + " " + "Doe"

val = "Hello, My name is " + firstName + " " + "and I am " + age;

// Length
val = firstName.length;

// Concat()
val = firstName.concat(" ", lastName, " ", "Hey Buddy");

// Change Case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];  // Index is start from 0
val = firstName[1]; 
val = firstName[5]; 

// CharAt()

val = firstName.charAt('2');
val = firstName.charAt(firstName.length - 1);

// Slice()
const fruit = "Apple";

val = fruit.slice(0, 3);
val = fruit.slice(-3);

// Split

val = str.split(" ")
val = tags.split(",")

val = str.replace("jagan", "Javid")

// Includes
val = str.includes("jagan");

console.log(val);
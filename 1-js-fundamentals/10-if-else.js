// if...else..


// if(something){
//     do something
// } else{
//     do something else
// }


const id = 100; // number

// Equal to value

if(100 == "100"){
    console.log("Correct");
} else {
    console.log("InCorrect");
}

// Not Equal to value

if(100 != "101"){
    console.log("Correct");
} else {
    console.log("InCorrect");
}



// Equal to value and type
if(100 === 100){
    console.log("Correct");
} else {
    console.log("InCorrect");
}


// Not Equal to value and type

if(100 !== "101"){
    console.log("Correct");
} else {
    console.log("InCorrect");
}


// Test if UNDEFINED

let greet;

if(typeof greet === "undefined"){
    console.log(`yooooooo`)
} else {
    console.log(`${greet}`);
}

// Greater OR Lesser Than

if(100 <= 100){
    console.log("Correct")
} else {
    console.log("Incorrect")
}

if(100 >= 99){
    console.log("Correct")
} else {
    console.log("Incorrect")
}

// if Else

const color = "blue";

if(color === "red"){
    console.log("Color is red");
} else if (color === "blue"){
    console.log("Color is blue")
} else {
    console.log("Color is Yellow")
}


// Logical Operator

const name = "javid";

const age = 15;

// AND - && check the both value is true

if(age > 0 && age <12){
    console.log(`${name} is a child`)
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`)
} else {
    console.log(`${name} is a adult`)
}


// OR - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`)
} else{
    console.log(`${name} is registered for the race`)
}

// Ternary operator

console.log(100 === 101 ? "correct" : "incorrect");




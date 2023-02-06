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
let val;


// Number to String
val = String(555);
val = String(5 + 5);

// Bool to String

val = String(true);

// Arr to string
val = String([1,2,3,"Hello"]);

val = (5).toString();

// Boolean to Number
val = Number(true); //1
val = Number(false); //0
val = Number(null);
val = Number("Hello"); //NAN
val = Number([1,2,3,"Hello"]); //NAN

val = parseInt('100.30');
val = parseFloat("100.31");



console.log(val);
console.log(typeof val);
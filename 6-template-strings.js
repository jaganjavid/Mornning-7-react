const name = "Javid";
const age = 25;
const job = "Web Developer";
const city = "chennai";

let html;

// WITHOUT TEMPLATE STRING

html = "my name is " + name + " " + "im" + " " + age + " " + "My job is " + job + " " + city;

// WITH TEMPLATE STRINGS (es6)

html = `my name is ${name} and im ${age} my job is ${job} from ${city} ${5+5}`;

console.log(html);


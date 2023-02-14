// Replace Element

const newHeading = document.createElement("h2");
newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("Task Title"));

const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

// cardAction.replaceChild(newHeading, oldHeading);

// Remove Element

const list = document.querySelectorAll("li");

list[0].remove();

console.log(list);


// Class & Attr

const firstli = document.querySelector("li:first-child");
const link = firstli.children[0];

let val;

val = link.className;
val = link.classList; // DOMTOKENLIST
// val = link.classList[1]; 

val = link.classList.add("link-test");
// val = link.classList.remove("link-test");
val = link.classList.contains("link-test");


console.log(val);
// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// All comments are comment nodes

let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector("li.collection-item:last-child");

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 -   Element
// 3 -  Text Node
// 8 - Comment Node
// 10 - Doctype


// Get Childern element nodes

val = list.children; //***
val = list.children[0].textContent = "Hello";
val = list.children[0].className;

// First Child
val = list.firstChild;
val = list.firstElementChild; //***

// Last Child
val = list.lastChild;
val = list.lastElementChild; //***

// Count Child Element
val = list.childElementCount;

// Parent Node
val = listItem.parentNode;
val = listItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

// Get Previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;

// Get Next Sibling
val = listItem.nextElementSibling;
val = listItem.nextElementSibling;

console.log(val);
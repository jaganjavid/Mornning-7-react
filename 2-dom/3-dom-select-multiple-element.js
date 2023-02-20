// document.getElementByClassName();

console.log(document.getElementById("task-title"))

// const items = document.getElementsByClassName("collection-item"); // HTMLCOLLECTION
// console.log(items.length);
// console.log(items);
// console.log(items[0]);

// items[0].style.color = "red";
// items[3].textContent = "red";

// for(let i = 0; i<items.length; i++){
//     console.log(items[i]);
// }

// Convert HTMLcollect to array

// let list = Array.from(items);

// list.forEach(function(element, index){
//   console.log(element, index);
// })


// document.querySelectorAll();

const items = document.querySelectorAll("li"); // NodeList


// for(let i = 0; i<items.length; i++){
//     console.log(items[i]);
// }

items.forEach(function(element, index){
  console.log(element, index);
})
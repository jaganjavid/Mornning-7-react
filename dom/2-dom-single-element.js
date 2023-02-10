// document.getElementById();

// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change Style
// taskTitle.style.background = "blue";
// taskTitle.style.color = "white";
// taskTitle.style.padding = "15px";
// taskTitle.style.display = "none";


// Change Content

// taskTitle.textContent = "Task List";
// taskTitle.innerText = "Task List 2";
// taskTitle.innerHTML = `<span>Hello Im Added Span</span>`;

// document.querySelector(); ***

console.log(document.querySelector("#task-title")); // id
console.log(document.querySelector(".card-action")); // class
console.log(document.querySelector("h5")); // tag

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";
document.querySelector("ul li:nth-child(3)").style.color = "brown";
document.querySelector("ul li:first-child").style.color = "orange";
document.querySelector("ul li:last-child").style.color = "yellow";

// console.log(taskTitle.style);


console.log(localStorage);

localStorage.setItem("task", "Run");
localStorage.setItem("task2", "Eat");

console.log(localStorage.getItem("task"));
console.log(localStorage.getItem("task2"));
localStorage.removeItem("task2");

localStorage.clear();

console.log(localStorage.getItem("task2"));
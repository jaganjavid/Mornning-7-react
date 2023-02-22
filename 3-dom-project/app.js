// DEFINE UI VARIABLES

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// LOAD ALL EVENT LISTENERS

loadEventListerners();

function loadEventListerners(){

    // DOM LOAD EVENT
    document.addEventListener("DOMContentLoaded", getTasks);
    
    // ADD TASK EVENT
    form.addEventListener("submit", addTask);

    // REMOVE TASK EVENT
    taskList.addEventListener("click", removeTask)

    // Clear Task
    clearBtn.addEventListener("click", clearTask)


}


// Get Tasks

function getTasks(){
   let tasks;

   if(localStorage.getItem("tasks") === null){
      tasks = [];
   } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
    // CREATE LI ELEMENT
    const li = document.createElement("li");

    // ADD CLASS
    li.className = "collection-item";

    // ADD A TEXT Value
    li.appendChild(document.createTextNode(task));

    // CREATE A NEW LINK ELEMENT
    const link = document.createElement('a');

    // ADD CLASS
    link.className = "delete-item secondary-content";

    // ADD ICON HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // APPEND THE LINK TO LI
    li.appendChild(link);

    // APPEND THE LI TO UL
    taskList.appendChild(li);

    })

}

function addTask(e){
    e.preventDefault();

    if(taskInput.value === ""){
        alert("Add the task");
        return false;
    }

    // CREATE LI ELEMENT

    const li = document.createElement("li");

    // ADD CLASS
    li.className = "collection-item";

    // ADD A TEXT Value
    li.appendChild(document.createTextNode(taskInput.value));

    // CREATE A NEW LINK ELEMENT
    const link = document.createElement('a');

    // ADD CLASS
    link.className = "delete-item secondary-content";

    // ADD ICON HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // APPEND THE LINK TO LI
    li.appendChild(link);

    // APPEND THE LI TO UL
    
    taskList.appendChild(li);

    // Store In ls
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = "";

}


function storeTaskInLocalStorage(task){
 let tasks;

 if(localStorage.getItem("tasks") === null){
    tasks = [];
 } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
 }

 tasks.push(task);

 localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
        }
    }

    // REMOVE FROM LS
    removeTaskfromLocalStorage(e.target.parentElement.parentElement);

}

function removeTaskfromLocalStorage(taskItem){
 let tasks;

 if(localStorage.getItem("tasks") === null){
    tasks = [];
 } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
 }

 tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
       tasks.splice(index, 1);
    }
 })

 localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTask(){
    taskList.innerHTML = "";
    clearTasksFormLocalStorage();
}

function clearTasksFormLocalStorage(){
    localStorage.clear();
}



// var arr = [1,2,3,4,5];

// // console.log(arr);

// let convertToString = JSON.stringify(arr); // string

// let convertToBack = JSON.parse(convertToString);
// console.log(convertToString);
// console.log(convertToBack);
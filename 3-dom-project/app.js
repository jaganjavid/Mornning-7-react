// DEFINE UI VARIABLES

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// LOAD ALL EVENT LISTENERS

loadEventListerners();

function loadEventListerners(){
    
    // ADD TASK EVENT
    form.addEventListener("submit", addTask);

    // REMOVE TASK EVENT
    taskList.addEventListener("click", removeTask)

    // Clear Task
    clearBtn.addEventListener("click", clearTask)


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

    taskInput.value = "";


}

function removeTask(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
        }
    }

}

function clearTask(){
    taskList.innerHTML = "";
}
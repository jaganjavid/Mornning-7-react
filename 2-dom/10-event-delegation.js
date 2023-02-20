// The idea is that if we have a lot of elements handled in a 
// similar way, then instead of assigning a handler to each of them 
// – we put a single handler on their common ancestor.

const delItem = document.querySelector(".delete-item");

document.body.addEventListener("click", deleteItem);

function deleteItem(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){
        e.target.parentElement.parentElement.remove();
        // console.log(e.target);
        // console.log(e.target.parentElement);
        // console.log(e.target.parentElement.parentElement);
    }
}   
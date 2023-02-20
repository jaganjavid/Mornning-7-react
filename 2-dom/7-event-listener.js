// An event listener in JavaScript is a way that you can wait for 
// user interaction like a click or keypress and then run some 
// code whenever that action happens. One common use case for 
// event listeners is listening for click events on a button.

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     console.log("Hello");
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(event){
    // console.log("Hello");
    val = event;

    // Event target Element
    val = event.target;
    val = event.target.id;
    val = event.target.className;
    val = event.target.classList;
    val = event.target.textContent;
    console.log(val);
}

// function ontest(event){
//     console.log(event);
// }

// ontest();
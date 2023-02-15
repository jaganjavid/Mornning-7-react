const clearBtn = document.querySelector(".clear-tasks");


// Mouse Event

// Click
// clearBtn.addEventListener("click", runEvent);

// Double Click
// clearBtn.addEventListener("dblclick", runEvent);

// Mouse Down
// clearBtn.addEventListener("mousedown", runEvent);

// Mouse Up
// clearBtn.addEventListener("mouseup", runEvent);

// Mouse Enter
// clearBtn.addEventListener("mouseenter", runEvent);

// Mouse Leave
clearBtn.addEventListener("mouseleave", runEvent);





function runEvent(e){
    console.log(`Event Type : ${e.type}`);
}
// function one(){
//     console.log("Step 1")
// }

// function two(){
//     console.log("Step 2")
// }

// function run(fn){
//    fn()
//    console.log("step 1")
// }

// run(two);

function a(){
    console.log("a");
}
function b(){
    console.log("b");
}
function c(){
    console.log("c");
}

function runRace(a, b, c){
   setTimeout(function(){
    a();
    setTimeout(function(){
       c();
       setTimeout(function(){
          b();
       },0000)
    }, 1000)

   },2000)
}

runRace(a,b,c);
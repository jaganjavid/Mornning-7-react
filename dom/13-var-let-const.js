// GLOBAL , FUNCTION , BLOCK SCOPE

var a = 1;
let b = 2;
const c = 3;

// FUNCTION SCOPE
function test(){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log(`FUNCTION SCOPE ` , a , b, c);
}


if(true){
//  BLOCK SCOPE
 var a = 4;
 let b = 5;
 let c = 6;
//  console.log(`BLOCK SCOPE `, a, b, c);
}

for(let a = 0; a < 10; a++){
    // BLOCK SCOPE
    console.log(`LOOP, ${a}`);
}


console.log(`GLOBAL SCOPE ` , a , b, c);


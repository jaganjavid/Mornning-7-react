// console.log(this); // window

// function run(){
//     console.log(this);
// }

// run();

// var obj = {
//     name: "Jagan",
//     runThis: function(){
//         return this;
//     }
// }

// console.log(obj.runThis());

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

const javid = new Person("Jagan", "Javid");
const josh = new Person("josh", "sri");

console.log(javid.fullName());
console.log(josh.fullName());

// function Test(){}

// const runTest = new Test();

// runTest.name = "Javid";

// console.log(runTest);

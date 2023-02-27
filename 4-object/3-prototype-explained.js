function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}


// console.log(Person.prototype.__proto__)

const javid = new Person("Jagan", "Javid");

const josh = new Person("Josh", "sir");

console.log(javid);
console.log(josh);


// console.log(javid.getFullName());

// const arr = [1,2,3,4,5];

// arr.push(6);


// console.log(arr);
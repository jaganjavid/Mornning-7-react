// a object can inherit all the methods and properties of another object.

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const javid = new Person("Jagan", "Javid");

// Customer object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype methods

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;

// CUSTOMER GREETING

Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

const jagan = new Customer("Jagan", "Nathan", "555-555-5555", "standard");

console.log(jagan.greeting());

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}


class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName)
        this.phone = phone;
        this.membership = membership;
    }

    getFullName(){
        return `Hello there Customer my name ${this.firstName} ${this.lastName};`
    }
}

const javid = new Person("Jagan", "Javid");
const jagan = new Customer("Jagan", "Nathan", "555-5555-555", "standard");

console.log(jagan);
console.log(jagan.getFullName());




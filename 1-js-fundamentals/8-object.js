// KEY:VALUE // NAME:VALUE
const person = {
    // Properties
    firstName: "Jagan",
    lastName: "Javid",
    age:25,
    email:"jagan@gmail.com",
    hasKids: true,
    hobbies: ["music", "movie"],
    address: {
        city: "Chennai",
        state: "TN"
    },

    // Method
    getFullName: function(){
       return person.firstName + " " + person.lastName;
    }
}

let val;

val = person



// get a specific values

val = person.firstName;  // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hasKids;
val = person.hobbies[2];
val = person.address.chennai;
val = person.getFullName();

console.log(val);
console.log(typeof val);
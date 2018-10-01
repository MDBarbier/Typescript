//Two types are compatible if their inner structure matches, allowing an Interface to be implemented without
//explicitly stating so using an "implements" clause
interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//let user = { firstName: "Jane", lastName: "User" };
let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
// function greeter(person: string) {
//   return "Hello, " + person;
// }

// let user = [1, 3, 4];

// document.body.innerHTML = greeter(user);

interface Person {
  firstName: String;
  lastName: String;
}

class Student {
  fullName: String;
  constructor(public firstName, public middleIntial, public lastName) {
    this.fullName = firstName + ' ' + middleIntial + ' ' + lastName;
  }
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + ' ' + person.lastName;
}
// let user = { firstName: "Jane", lastName: "User" };

let user = new Student("Jane", "M.", "User");

console.log(user);

document.body.innerHTML = greeter(user);
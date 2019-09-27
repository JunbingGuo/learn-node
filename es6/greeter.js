// function greeter(person: string) {
//   return "Hello, " + person;
// }
var Student = /** @class */ (function () {
    function Student(firstName, middleIntial, lastName) {
        this.firstName = firstName;
        this.middleIntial = middleIntial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleIntial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
// let user = { firstName: "Jane", lastName: "User" };
var user = new Student("Jane", "M.", "User");
console.log(user);
document.body.innerHTML = greeter(user);

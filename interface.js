function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var otherUser = { firstName: "Jane", lastName: "User" };
document.body.textContent = greeter(otherUser);

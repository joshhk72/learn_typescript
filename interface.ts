interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let otherUser = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(otherUser);
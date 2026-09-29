// Part 1

let student = {
    name: "YourName",
    age: 17,
    isEnrolled: true
};

console.log(student);
console.log(student.name);
console.log(student.age);

// Part 2

let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log(numbers[0])
console.log(numbers.at(-1))
console.log(mixed)

// Of course it makes operation easier and lowers the complexity of the array and program.




// Part 3

function greet(name) {
    return "Hello, " + name + "!";
}

let message1 = greet("Name 1");
let message2 = greet("Name 2");
console.log(`message 1 ${message1} and message2 ${message2}`)
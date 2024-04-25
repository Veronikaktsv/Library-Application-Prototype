// Experimenting with variable scope

// Global variable
var globalVar = "I am a global variable";

// Using let and const inside an if block
if (true) {
    let localLet = "I am a let variable inside if block";
    const localConst = "I am a const variable inside if block";

    // Testing variable access
    console.log(localLet); // Output: I am a let variable inside if block
    console.log(localConst); // Output: I am a const variable inside if block
}

// Accessing let and const variables outside the if block
// This will result in an error because let and const have block scope
// console.log(localLet); // ReferenceError: localLet is not defined
// console.log(localConst); // ReferenceError: localConst is not defined

// Testing global variable access
console.log(globalVar); // Output: I am a global variable

// Experimenting with function declarations

// Function declarations
hello1(); // Output: Hello from hello1
hello2(); // Output: Hello from hello2
hello3(); // Output: TypeError: hello3 is not a function

// Function declaration
function hello1() {
    console.log("Hello from hello1");
}

// Function expression
var hello2 = function() {
    console.log("Hello from hello2");
};

// Arrow function expression
var hello3 = () => {
    console.log("Hello from hello3");
};

// Experimenting with event handling methods

// Create a button element
const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

// Add event listeners

// Using function expression
button.addEventListener('click', function() {
    console.log(this); // Output: button element
});

// Using arrow function
button.addEventListener('click', () => {
    console.log(this); // Output: Window object (global scope)
});

// Using onclick property with function declaration
button.onclick = function() {
    console.log(this); // Output: button element
};

// Using onclick property with arrow function
button.onclick = () => {
    console.log(this); // Output: Window object (global scope)
};

document.addEventListener('alpine:init', () => {
    Alpine.data('foo', () => ({
        myData: 'Hello World!',
        init() {
            console.log('init');
},
        changeData() {
            this.myData = 'Hello Alpine.js!';
} }));
});
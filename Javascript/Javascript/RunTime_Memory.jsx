Q what Section 17. JavaScript Runtime


Execution Contexts – understand execution contexts including global and function execution contexts.


Call Stack – understand the call stack. function


Event Loop – show you how JavaScript handles asynchronous operations using the event loop.


00::Hoisting – learn how hoisting works in JavaScript. :::::: -------------<><><

This means variables and functions can be used before they are declared.

Hoisting is JavaScript’s behavior of moving declarations to the top of their scope (global or function) during the compilation phase.

// console.log(x); // undefined
// var x = 5;



00::Variable scopes – introduce you to the variable scopes. ::::::::-------------<><><>

Global Scope: Variables declared outside functions are available globally.

Local/Function Scope: Variables declared within a function are only accessible within that function.

Block Scope (introduced with ES6): Variables declared using let or const are only available within the block ({}) they are declared in.
if (true) {
   let x = 10;-
 
 }
 console.log(x); // ReferenceError: x is not defined


Hosting :::::::::::: ---------------------------------->>

//Function Declaration Example (Hoisted)
one();  // Works because 'one' is hoisted
function one() {
    console.log("Jugal Sharma");
}


//Function Expression Example (Not Hoisted
two();  // Error: Cannot access 'two' before initialization
const two = () => {
    console.log("Karan Sharma");
};


//Example 1: Variable Hoisting with var
console.log(a);  // Output: undefined (declaration is hoisted but not the value)
var a = 5;

//Example 2: Hoisting with let and const
console.log(b);  // Error: Cannot access 'b' before initialization
let b = 10;

//: Function Expression Hoisting
greet();  // Error: greet is not a function
var greet = function() {
    console.log("Hi!");
};


Call Stack – understand the call stack. function ::::::::: ---------------------------<><><<><><><>
function one(){
   four()
   console.log("one function ")
}


function two(){

   three()
   console.log("two function ")

}


function three(){

   console.log("three function ")
   one()

}

function four(){
console.log("four  function")
two()

}

function five(){
   console.log("five function")
}
five()

// next exmaple  ---------------->>

function one(){
   four();
   console.log("one function ");
}

function two(){
   three();
   console.log("two function ");
}

function three(){
   console.log("three function ");
   one();
}

function four(){
   console.log("four function");
   two();
}

function five(){
   console.log("five function");
   one(); // Added call to one()
}

five();


JavaScript has three types of variable scopes: ::::::::::::::::::: ------------------------->>>>

Global Scope: Variables declared outside any function or block are available globally.
Local/Function Scope: Variables declared within a function are only accessible within that function.
Block Scope (introduced with let and const in ES6): Variables declared inside a block (like within {}) are only available inside that block.


//A global variable is accessible anywhere in the code: 

let globalVar = "I'm a global variable";

function showGlobalVar() {
    console.log(globalVar);  // Accessible inside the function
}

showGlobalVar();  // Output: "I'm a global variable"
console.log(globalVar);  // Accessible outside the function, same output



Local/Function Scope Example

function localScopeExample() {
    var localVar = "I'm a local variable";
    console.log(localVar);  // Accessible inside the function
}

localScopeExample();
console.log(localVar);  // ReferenceError: localVar is not defined (not accessible outside)



Block Scope Example (with let and const) -------------------->>>
if (true) {
    let blockVar = "I'm a block-scoped variable";
    console.log(blockVar);  // Accessible inside the block
}

console.log(blockVar);  // ReferenceError: blockVar is not defined (not accessible outside the block)

if (true) {
    var noBlockScopeVar = "I'm not block-scoped";
    console.log(noBlockScopeVar);  // Accessible inside the block
}

console.log(noBlockScopeVar);  // Accessible outside the block too (no error)



:::::::::::::: Event Loop start row class Line  ------------------------>>>>

How the Event Loop Works
Call Stack: This is where the current code execution happens. It processes one function at a time (LIFO: Last In, First Out).

Web APIs: These are browser-provided APIs (like setTimeout, fetch, etc.) that handle asynchronous tasks.

Callback Queue: When asynchronous tasks are completed, their callbacks are placed in the queue.

Event Loop: The event loop checks if the call stack is empty. If it is, it takes the first function from the callback queue and puts it in the call stack for execution.


console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

 Multiple setTimeout Calls....
console.log("Start");

setTimeout(() => {
  console.log("First setTimeout");
}, 3000);

setTimeout(() => {
  console.log("Second setTimeout");
}, 1000);

console.log("End");

Example 3: Using Promise.......
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

await function start ......................

async function one() {
   console.log("A")  // first 

await console.log("B")  //second  await

   console.log("C")  // five 
}

one();
console.log("D")  // three 
console.log("E")  //four


:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

stack and Heap Memory in a javscript  ------------------>>

1::stack (Primitive)  

The stack is a region of memory where primitive values (such as numbers, booleans, null, undefined, etc.) and references
to objects in the heap are stored. It's a fixed-size memory structure, and data 
is added or removed in a Last In, First Out (LIFO) manner.

....Primitive Data Types: Data types like numbers, strings, booleans, null, and undefined are stored directly in the stack.

....Execution Context: When a function is called, its execution context (local variables, function arguments, etc.) is pushed onto the stack
When the function completes, the context is popped off the stack.


Characteristics:

Fast access: Since the stack is a small, fixed-size structure, accessing data is fast.

Limited size: Stack memory is limited, so it's used for data that can be stored efficiently, like primitive values and references.

let x = 10; // 'x' is a primitive value, stored in the stack
let y = x;  // 'y' is also a primitive, stored in the stack


2::Heap (Non-Primitive)::::------------------>>

2. Heap Memory

The heap is where objects (and by extension arrays and functions) are stored. The heap is larger and is designed for dynamic
allocation, meaning that objects can be created, resized, and destroyed during program execution.

Object References: When you create an object, array, or function, it's stored in the heap, and a reference to
that object is stored in the stack.

Characteristics:

Dynamic memory allocation: Objects can grow in size, and JavaScript’s memory manager handles allocation and garbage collection.

Slower access: Accessing data from the heap is slower than from the stack because references are used to access objects.


Key Differences:
Stack	Heap      	Heap
Fixed size	 ..Dynamic size
Fast access	  ..Slower access
Stores primitive values  	 ..Stores objects
Memory managed in a LIFO way	  ..Memory is allocated dynamically




3::V8 Memory management: Garbage collection 
https://deepu.tech/memory-management-in-v8/
https://deepu.tech/memory-management-in-jvm/
https://pythontutor.com/visualize.html#mode=edit
https://ui.dev/javascript-visualizer
https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o
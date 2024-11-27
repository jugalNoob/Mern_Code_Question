// https://dev.to/aelassas/functional-programming-in-typescript-575j



JavaScript Built-in Higher-Order Functions
map
filter
reduce
forEach
find
findIndex
some
every
flatMap
sort
concat
slice
splice
Timer and Execution Functions
setTimeout
setInterval
clearTimeout
clearInterval
Function Binding and Execution Control
bind
call
apply
Common Functional Programming Functions (usually in libraries)
compose
pipe
curry
partial
memoize
debounce
throttle
JavaScript Function Types and Patterns
Async Functions: Functions that handle asynchronous code, often using async/await.
Immediately Invoked Function Expression (IIFE): A function that runs as soon as it’s defined.
Express Functions: Functions within Express.js (e.g., middleware, route handlers).
Closure Functions: Functions that capture the lexical scope in which they were defined.
Arrow Functions: Concise function expressions with the => syntax.
Generator Functions: Functions that can yield multiple values using the * syntax and yield keyword.
Anonymous Functions: Functions without a name, often assigned to variables or passed as arguments.
Function Scope and Length
Function Scope: Refers to the scope in which variables and functions are accessible.
Function Length: 


::::::: curry function all in one  :::::::::::::














:::::::All Function In Jvaascript:::::::::::::::::::::


let person1 = {  //;JavaScript Factory Functions
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

console.log(person1.getFullName())



function getNames() {  /// Returning multiple values from a function using an array
    // get names from the database or API
    let firstName = 'John',
        lastName = 'Doe';

    // return as an array
    return [firstName, lastName];
}

let names = getNames();
const [firstName, lastName] = getNames();


function getNames() {//Returning multiple values from an function using an object
  // get names from the database or API
  let firstName = 'John',
      lastName = 'Doe';

  // return values
  return {
    'firstName': firstName,
    'lastName': lastName
  };

// return { firstName, lastName };
}
let { firstName, lastName } = getNames()

00::function CallBack
function one(a, b) {
    console.log(a + b);
}

function two(a, b) {
    console.log(a * b);
}

function call(calls, a, b) {
    calls(a, b);
}

call(one, 2, 3); // Outputs: 5

call(two, 3, 3); // Outputs: 5


:::Const Function 
const one = () => () => () => console.log(5, 6, 7);
one()()();

const one=()=>{
   console.log("jugal")
}

one()






1::JavaScript Async

1::Function highOrder 

2::Function curing 
function one(a) {
   return function(b) {

       return function(c) {
           return function(d) {
               console.log(a, b, c, d);
           }
       }
   }
}

one(5)(4)(6)(7); // This would result in an error because the functions expect arguments


3::Function iiff
(function(){
   console.log("jugal")
})()


5::Function express
let one=function(){
   console.log("jugal")
}
one()

7::function call
8::function bind
9::function apply
The apply() Method with Arguments
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);


|||||||||
6::Function closure
function outerFunction() {
   let outerVariable = 'I am from the outer function';
   function innerFunction() {
       console.log(outerVariable); // innerFunction has access to outerVariable
   }
   return innerFunction;
}
const closureExample = outerFunction();
closureExample(); // This will log: "I am from the outer function"



7::Function prototype

8::Function thisKeyword


::Arrow Function
Arrow Functions Return Value by Default: ::hello = () => "Hello World!";

10::data Time
let date = new Date();
  console.log(date);



||||||||||Function Generator

async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = '';
for (const val of foo()) {
  str = str + val;
}

::::: Function Nmae 
const object = {
  func2: function () {},
};
console.log(func1.name);
// Expected output: "func1"
console.log(object.func2.name);


// Expression; the function is anonymous but assigned to a variable
const multiply = function (x, y) {
  return x * y;
};

// Expression; the function has its own name
const multiply = function funcName(x, y) {
  return x * y;
};

// Traditional anonymous function
(function (a) {
  return a + 100;
});


::: function Length
function func1() {}
function func2(a, b) {}
console.log(func1.length);
// Expected output: 0
console.log(func2.length);
// Expected output: 2



::::::: async function ::::::::::::

async function one() {
  console.log("A")  // first 

await console.log("B")  //second  await

  console.log("C")  // five 
}

one();
console.log("D")  // three 
console.log("E")  //four



:::::: ---------------<><><><><<
Event Loop in javascript  
????????????  https://www.jsv9000.app/

function A(){
   console.log('A')
}
function B(){
   console.log('B')
}
function C(){
   console.log('C')
}
function D(){
   console.log('D')
}
A()
B()
Promise.resolve().then(C)
D()




::::: Function Call  bind apply -------<><><><>
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.call(person, 'jugal sharma'));
// Output: Hello, John! I am a developer.

....Apply
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
console.log(greet.apply(person, ['John']));
// Output: Hello, John! I am a developer.

.................bind
function greet(name) {
   return `Hello, ${name}! I am ${this.role}.`;
}
const person = {
   role: 'a developer'
};
const greetPerson = greet.bind(person);
console.log(greetPerson('karan'));




...Function Scope
Variables defined inside a function are not accessible
     (visible) from outside the function.
     function myFunction() {
        var carName = "Volvo";   // Function Scope
      }

      function myFunction() {
        let carName = "Volvo";   // Function Scope
      }


 ...     Global JavaScript Variables

 let carName = "Volvo";
    // code here can use carName
    
    function myFunction() {
    // code here can also use carName
    }]
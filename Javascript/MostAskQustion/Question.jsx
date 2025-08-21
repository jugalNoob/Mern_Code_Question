https://www.toptal.com/javascript/interview-questions


🔹 1. var, let, const – Difference?

Answer:

var: Function-scoped, hoisted, can be redeclared.

let: Block-scoped, hoisted (in temporal dead zone), can be reassigned but not redeclared.

const: Block-scoped, cannot be reassigned, must be initialized.

function test() {
  var x = 1;
  let y = 2;
  const z = 3;
  if (true) {
    var x = 10; // redeclared
    let y = 20; // block scope
    // z = 30; ❌ Error
  }
  console.log(x); // 10
  console.log(y); // 2
}
test();


Difference between var, let, and const?

What is hoisting in JavaScript?

console.log(a); // undefined
var a = 5;

// let and const -> temporal dead zone
// console.log(b); ❌ ReferenceError
let b = 10;



Explain closure with an example.

Difference between undefined, null, NaN?

What are truthy and falsy values in JavaScript?

Difference between == and ===.

What are primitive vs reference types?

How does this keyword work in different contexts?

Difference between function declaration vs function expression vs arrow function.

What is event bubbling, capturing, and delegation?
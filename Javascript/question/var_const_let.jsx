1. var (Function-Scoped)
Can be redeclared and updated.
Function-scoped: Available throughout the function in which it is declared.
Hoisted to the top of its scope but initialized as undefined.

function example() {
    console.log(a); // undefined (hoisted)
    var a = 10;
    console.log(a); // 10
}
example();



2. let (Block-Scoped)
Cannot be redeclared in the same scope but can be updated.
Block-scoped: Only available within the {} block where it is declared.
Hoisted but not initialized (causes a ReferenceError if accessed before declaration).

function example() {
    console.log(b); // ReferenceError
    let b = 20;
    console.log(b); // 20
}
example();



3. const (Block-Scoped and Immutable)
Must be initialized when declared.
Cannot be reassigned after initialization.
Block-scoped, just like let.


const PI = 3.14;
PI = 3.1415; // TypeError: Assignment to constant variable.

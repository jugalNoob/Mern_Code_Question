


19::Maps ||||||||||||||||||||||||||||||||||||||||||||
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map


20::Set |||||||||||||||||||||||||||||||||||||||||
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
Property	Description
size	Returns the number of elements in a Set

21::WeakSet
No iteration: Unlike Set, WeakSet does not have methods like keys(), values(), or entries(), and it is not iterable.
Methods of WeakMap:
set(key, value): Adds a key-value pair to the WeakMap.

get(key): Retrieves the value associated with a key.

has(key): Checks if a key exists in the WeakMap.

delete(key): Removes a key-value pair from the WeakMap.



22:WeakMaps
No iteration: Unlike Map, WeakMap does not have methods like keys(), values(), or entries(), and it is not iterable.

Methods of WeakMap:
set(key, value): Adds a key-value pair to the WeakMap.

get(key): Retrieves the value associated with a key.

has(key): Checks if a key exists in the WeakMap.

delete(key): Removes a key-value pair from the WeakMap.

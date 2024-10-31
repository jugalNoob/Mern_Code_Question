
17::Array
Array length
Array toString()
let one=[10 , 20 , 320 , 40 , 50]
  console.log(one.toString())

  ||||||||||||||| |||||||||||||||||||||||||||||||||||||  Array ---------------------<><><><><><><><><>

let data = ['jugal', 'karan', 'anku', 'home'];
// const iterator = =Object.keys();
// const iterator = data.values();
// console.log(iterator)

const iterator1 = data.entries();
console.log(iterator1.next().value);
for (let entry of iterator1) {
    console.log(entry);
}

console.log(data.at(-2))
console.log(Array.from('foo'));

//which elemnt not in array
const isBelowThreshold = (currentValue) => currentValue < 13;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

/// 
function isBiggerThan10(element, index, array) {
   return element > 10;
 }

 [2, 5, 8, 1, 4].some(isBiggerThan10); // false
 [12, 5, 8, 1, 4].some(isBiggerThan10); // true

 const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

Array pop()
Array push()
Array shift()
Array unshift()
Array join()
toReversed()
toSorted()





3) Using the toSpliced() to replace elements in an array
const scores = [0,0,3,4,5];
const newScores = scores.toSpliced(0, 2, 1, 2);

console.log(scores);
console.log(newScores);

toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)


: Array.findLastIndex()
const found = array1.findLast((element) => element > 45);

||||Array.entries()
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries()
console.log(iterator1.next().value); // Output: [0, 'a']
console.log(iterator1.next().value); // Output: [1, 'b']
console.log(iterator1.next().value); // Output: [2, 'c']
console.log(iterator1.next().value); // Output: undefined (done is true)



|||Array Convert to To String
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());


|||||||||Every Import 
let age = [10, 20, 30, 10];

  const one= age.every((key)=>{
   return key >35
 })
 console.log(one , "yes")


 |||||Some ||||||||||||||||


Array delete()

Array concat()
let ne=["jugal" , "karan" , "jio" , "artial"]
  let two=[10 , 20 , 30 , 40]
  ne.push(...two)
  console.log(ne)
  
Array flat()
const array = [1, 2, [3, 4], 5];
const flattenedArray = array.flat();
console.log(flattenedArray); //
Array splice()
Array slice()

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));



const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

1:::: Arrray Join 

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"



Section 2. Adding/removing elements
push() – add one or more elements to the end of an array.
unshift() – add one or more elements to the beginning of an array.
pop() – remove an element from the end of an array.
shift() – remove the first element from an array.
splice() – manipulate elements in an array such as deleting, inserting, and replacing elements.
slice() – copy elements of an array.


Section 3. Finding elements
indexOf() – locate an element in an array.
includes() – check if an element is in an array.
find() – find an element in an array
findIndex() – find the index of an element in an array.


Section 6. Creating Arrays
of() – improve array creation.
from() – create arrays from array-like or iterable objects.

Section 7. Flattening arrays
flat() – flatten an array recursively up to a specified depth.
flatMap() – execute a mapping function on every element and flatten the result.

Section 10. Accessing elements
at() – access array elements using both positive and negative indexes.


Section 11. Reversing elements
reverse() – reverse the order of elements in place and return the same array with the elements in the reversed order.
toReversed() – reverse the order of elements of an array and return the new array with the elements in the reversed order.

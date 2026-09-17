const course = "Web Eng";

//course = "Other";
// This throws an error because const cannot be reassigned.

let count = 0;

count++;
count++;

console.log("count: ", count);

console.log(0 == false);  // true: == performs type coercion
console.log(0 === false); // false: === checks value and type
console.log([] == false); // true: == converts [] to a primitive value, then compares

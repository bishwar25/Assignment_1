var fruits = [ "Banana" , "Orange" , "Apple" , "Mango" ];
// Add a new element.
// Remove any existing from the element.
// Check if any given variable is an array or not.
// Change any specific element to another value.
// Add new element to a specific location (not front or last).
// Convert the given array to a string.

fruits.push('Peach')
console.log(fruits)
fruits.splice(1,1)
console.log(fruits)
console.log(Array.isArray(fruits))
fruits.splice(2,1,'replace fruit')
console.log(fruits)
fruits.splice(2,0,'grape')
console.log(fruits)
console.log(fruits.join(', '))
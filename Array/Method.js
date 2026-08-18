// create a function createArray that use factory function
function createArray(length, value) {
    return Array.from({ length }, () => value);
}
console.log(createArray(5, 'hello')); // Output: ['hello', 'hello', 'hello', 'hello', 'hello']

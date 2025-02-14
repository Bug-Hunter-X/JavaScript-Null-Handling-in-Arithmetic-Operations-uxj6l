function foo(a, b) {
  // Handle null values using a conditional expression
  a = a !== null ? a : 0; 
  b = b !== null ? b : 0; 
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
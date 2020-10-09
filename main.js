//Add kata
function add(a, b) {
  return a + b;
}
console.log(add(5, 6));
console.log(add(10, 7));

// multiply kata
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 10));
console.log(multiply(2, 9));

// power/exponentiation kata
function power(a, b) {
  return Math.pow(a, b);
}
console.log(power(2, 8));

// factorial kata
function factorial(a) {
  if (a === 0) {
    return 1;
  }
  return a * factorial(a - 1);
}
console.log(factorial(5));

// fibonacci kata
function fibonacci(n) {
  let [a, b] = [0, 1];
  while (n-- > 0) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fibonacci(6));

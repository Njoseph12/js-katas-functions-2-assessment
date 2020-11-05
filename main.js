//Add kata
function add(a, b) {
  return a + b;
}
console.log(add(5, 6));
console.log(add(10, 7));

// multiply kata
function multiply(a, b) {
  let answer = 0;
  let count = 0;
  while (count < b) {
    answer = add(a, answer);
    count += 1;
  }
  return answer;
}
console.log(multiply(5, 10));
console.log(multiply(2, 9));

// power/exponentiation kata
function power(a, b) {
  let answer = 1;
  let count = 0;
  while (count < b) {
    answer = multiply(a, answer);
    count += 1;
  }
  return answer;
}
console.log(power(2, 8));

// factorial kata
function factorial(a) {
  if (a === 0) {
    return 1;
  }
  return multiply(a, factorial(a - 1));
}
console.log(factorial(5));

// fibonacci kata
function fibonacci(n) {
  let [a, b] = [0, 1];
  while (n-- > 0) {
    [a, b] = [b, add(a, b)];
  }
  return b;
}
console.log(fibonacci(7));

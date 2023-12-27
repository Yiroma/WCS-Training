function multiply(a, b) {
  return a * b;
}

function sum(a, b) {
  return a + b;
}

function calculator(callback, a, b) {
  console.log(`The result is ${callback(a, b)}`);
}

calculator(sum, 1, 3);
calculator(multiply, 2, 5);

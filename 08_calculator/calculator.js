const add = function (...values) {
  let result = 0;
  values.forEach(val => result += val);
  return result;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let result = 0;
  arr.forEach(val => result += val);
  return result;
};

const multiply = function (arr) {
  let result = arr[0];
  for (i = 1; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

const power = function (num, power) {
  if (power === 0) return 1;
  if (power === 1) return num;
  let result = num;
  while (power > 1) {
    result *= num;
    power--;
  }
  return result;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

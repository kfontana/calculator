let firstNumber;
let secondNumber;
let operator;

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(firstNumber, secondNumber, operator) {
  if (operator === "add") {
    return add(firstNumber, secondNumber);
  } else if (operator === "substract") {
    return substract(firstNumber, secondNumber);
  } else if (operator === "multiply") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "divide") {
    return divide(firstNumber, secondNumber);
  }
}

let firstNumber;
let secondNumber;
let operator;
let displayValue;

const btnOne = document.querySelector("#btn-1");
btnOne.addEventListener("click", displayNumberOne);

const btnTwo = document.querySelector("#btn-2");
btnTwo.addEventListener("click", displayNumberTwo);

const btnThree = document.querySelector("#btn-3");
btnThree.addEventListener("click", displayNumberThree);

const btnFour = document.querySelector("#btn-4");
btnFour.addEventListener("click", displayNumberFour);

const btnFIve = document.querySelector("#btn-5");
btnFIve.addEventListener("click", displayNumberFive);

const btnSix = document.querySelector("#btn-6");
btnSix.addEventListener("click", displayNumberSix);

const btnSeven = document.querySelector("#btn-7");
btnSeven.addEventListener("click", displayNumberSeven);

const btnEight = document.querySelector("#btn-8");
btnEight.addEventListener("click", displayNumberEight);

const btnNine = document.querySelector("#btn-9");
btnNine.addEventListener("click", displayNumberNine);

const btnZero = document.querySelector("#btn-0");
btnZero.addEventListener("click", displayNumberZero);

const display = document.querySelector("#display");

function displayNumberOne() {
  displayValue = display.textContent = 1;
  console.log(displayValue);
}

function displayNumberTwo() {
  displayValue = display.textContent = 2;
}

function displayNumberThree() {
  displayValue = display.textContent = 3;
}

function displayNumberFour() {
  displayValue = display.textContent = 4;
}

function displayNumberFive() {
  displayValue = display.textContent = 5;
}

function displayNumberSix() {
  displayValue = display.textContent = 6;
}

function displayNumberSeven() {
  displayValue = display.textContent = 7;
}

function displayNumberEight() {
  displayValue = display.textContent = 8;
}

function displayNumberNine() {
  displayValue = display.textContent = 9;
}

function displayNumberZero() {
  displayValue = display.textContent = 0;
}

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

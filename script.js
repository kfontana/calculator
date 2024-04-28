let firstNumber;
let secondNumber;
let firstValue = [];
let secondValue = [];
let operatorFlag = false;
let operator;

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

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", operatorFlagAdd);

const subBtn = document.querySelector("#substract");
subBtn.addEventListener("click", operatorFlagSub);

const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", operatorFlagMultiply);

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", operatorFlagDivide);

const operateBtn = document.querySelector("#operate");
operateBtn.addEventListener("click", operate);

const clearBtn = document.querySelector("#clr-btn");
clearBtn.addEventListener("click", clear);

function clear() {
  operatorFlag = false;
  operator = "";
  display.textContent = "";
  firstValue = [];
  secondValue = [];
}

function operatorFlagAdd() {
  operatorFlag = true;
  if (
    operator == "substract" ||
    operator == "multiply" ||
    operator == "divide"
  ) {
    firstValue = operate();
    secondValue = [];
    operator = "add";
  } else {
    operator = "add";
  }
}

function operatorFlagSub() {
  operatorFlag = true;
  if (operator == "add" || operator == "multiply" || operator == "divide") {
    firstValue = operate();
    secondValue = [];
    operator = "substract";
  } else {
    operator = "substract";
  }
}

function operatorFlagMultiply() {
  operatorFlag = true;
  if (operator == "substract" || operator == "add" || operator == "divide") {
    firstValue = operate();
    secondValue = [];
    operator = "multiply";
  } else {
    operator = "multiply";
  }
}

function operatorFlagDivide() {
  operatorFlag = true;
  if (operator == "substract" || operator == "multiply" || operator == "add") {
    firstValue = operate();
    secondValue = [];
    operator = "divide";
  } else {
    operator = "divide";
  }
}

function displayNumberOne() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 1));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 1));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberTwo() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 2));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 2));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberThree() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 3));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 3));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberFour() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 4));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 4));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberFive() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 5));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 5));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberSix() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 6));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 6));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberSeven() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 7));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 7));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberEight() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 8));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 8));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberNine() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 9));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 9));
    }
    display.textContent = secondValue.join("");
  }
}

function displayNumberZero() {
  if (operatorFlag === false) {
    if (firstValue.length <= 8) {
      firstValue.push((display.textContent = 0));
    }
    display.textContent = firstValue.join("");
  } else {
    if (secondValue.length <= 8) {
      secondValue.push((display.textContent = 0));
    }
    display.textContent = secondValue.join("");
  }
}

function operate() {
  if (operator === "add") {
    return add(firstValue, secondValue);
  } else if (operator === "substract") {
    return substract(firstValue, secondValue);
  } else if (operator === "multiply") {
    return multiply(firstValue, secondValue);
  } else if (operator === "divide" && secondValue == 0) {
    return (display.textContent = "Haha, nice try");
  } else if (operator === "divide") {
    return divide(firstValue, secondValue);
  }
}

function add(firstValue, secondValue) {
  if (Array.isArray(firstValue)) {
    firstValue = parseInt(firstValue.join(""));
  }
  if (Array.isArray(secondValue)) {
    secondValue = parseInt(secondValue.join(""));
  }
  return (display.textContent = firstValue + secondValue);
}

function substract(firstValue, secondValue) {
  if (Array.isArray(firstValue)) {
    firstValue = parseInt(firstValue.join(""));
  }
  if (Array.isArray(secondValue)) {
    secondValue = parseInt(secondValue.join(""));
  }
  return (display.textContent = firstValue - secondValue);
}

function multiply(firstValue, secondValue) {
  if (Array.isArray(firstValue)) {
    firstValue = parseInt(firstValue.join(""));
  }
  if (Array.isArray(secondValue)) {
    secondValue = parseInt(secondValue.join(""));
  }
  let result = +(firstValue * secondValue).toFixed(2);
  return (display.textContent = result);
}

// Note the plus sign that drops any "extra" zeroes at the end.
// It changes the result (which is a string) into a number again (think "0 + foo"),
// which means that it uses only as many digits as necessary.

function divide(firstValue, secondValue) {
  if (Array.isArray(firstValue)) {
    firstValue = parseInt(firstValue.join(""));
  }
  if (Array.isArray(secondValue)) {
    secondValue = parseInt(secondValue.join(""));
  }
  let result = +(firstValue / secondValue).toFixed(2);
  return (display.textContent = result);
}

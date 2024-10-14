let displayed = "";
let operator;
let firstNumber = "";
let secondNumber = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  const ops = {"+": add, "-": subtract, "*": multiply, "/": divide};
  return ops[operator](parseInt(a), parseInt(b));
}

const addNumberedButtons = (start, stop) => {
  for (let i = start; i <= stop; i++) {
    const numberButtons = document.createElement("button");
    numberButtons.textContent = `${i}`;
    numberButtons.classList.add("btn", "number-buttons");
    numberButtons.addEventListener("click", () => {
      if (firstNumber !== "") {
        displayed = "";
      }
      if (displayed.length < 8) {
        displayed = displayed + numberButtons.textContent;
        updateDisplay(displayed);
      }
    })
    buttonsContainer.appendChild(numberButtons);
  }
}

function updateDisplay(text) {
  display.textContent = text;
}

const displayContainer = document.querySelector(".display-container");
const buttonsContainer = document.querySelector(".buttons-container");

const display = document.createElement("div");
display.textContent = "0"
display.classList.add("display");
displayContainer.appendChild(display);

const clearButton = document.createElement("button");
clearButton.textContent = "AC";
clearButton.classList.add("btn", "top-buttons");
clearButton.addEventListener("click", () => {
  displayed = "";
  updateDisplay("0");
})
buttonsContainer.appendChild(clearButton);

const signButton = document.createElement("button");
signButton.textContent = "+/-";
signButton.classList.add("btn", "top-buttons");
buttonsContainer.appendChild(signButton);

const percentButton = document.createElement("button");
percentButton.textContent = "%";
percentButton.classList.add("btn", "top-buttons");
buttonsContainer.appendChild(percentButton);

const divideButton = document.createElement("button");
divideButton.textContent = "÷";
divideButton.classList.add("btn", "operation-buttons");
divideButton.addEventListener("click", () => {
  firstNumber = displayed;
  operator = "/";
})
buttonsContainer.appendChild(divideButton);

addNumberedButtons(7, 9);

const multiplyButton = document.createElement("button");
multiplyButton.textContent = "×";
multiplyButton.classList.add("btn", "operation-buttons");
multiplyButton.addEventListener("click", () => {
  firstNumber = displayed;
  operator = "*";
});
buttonsContainer.appendChild(multiplyButton);

addNumberedButtons(4, 6);

const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
subtractButton.classList.add("btn", "operation-buttons");
subtractButton.addEventListener("click", () => {
  firstNumber = displayed;
  operator = "-";
});
buttonsContainer.appendChild(subtractButton);

addNumberedButtons(1, 3);

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.classList.add("btn", "operation-buttons");
addButton.addEventListener("click", () => {
  firstNumber = displayed;
  operator = "+";
})
buttonsContainer.appendChild(addButton);

const dummyButton = document.createElement("button");
dummyButton.classList.add("btn", "number-buttons");
buttonsContainer.appendChild(dummyButton);

addNumberedButtons(0, 0);

const decimalButton = document.createElement("button");
decimalButton.textContent = ".";
decimalButton.classList.add("btn", "number-buttons");
buttonsContainer.appendChild(decimalButton);

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.classList.add("btn", "operation-buttons");
equalsButton.addEventListener("click", () => {
  secondNumber = displayed
  const result = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
  updateDisplay(result);
});
buttonsContainer.appendChild(equalsButton);
// TODO: Continuously clicking the operator if only one number was entered should just add/sub/mult/div that number to itself (i.e 2 -> + -> + = 4 -> + = 8 ) 
let displayed = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;

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

function mod(a, b) {
  return a % b;
}

function operate(a, b, operator) {
  const ops = {"+": add, "-": subtract, "*": multiply, "/": divide, "%": mod};
  if (b === "0" && operator === "/") {
    return "lmfao";
  }
  if (a.includes(".") || b.includes(".")) {
    return ops[operator](parseFloat(a), parseFloat(b))
  }
  return ops[operator](parseInt(a), parseInt(b));
}

const addNumberedButtons = (start, stop) => {
  for (let i = start; i <= stop; i++) {
    const numberButtons = document.createElement("button");
    numberButtons.textContent = `${i}`;
    numberButtons.classList.add("btn", "number-buttons");
    numberButtons.addEventListener("click", () => {
      if (firstNumber !== null && secondNumber === null) {
        displayed = "";
        secondNumber = ":)";
      }
      if (displayed.length < 8) {
        displayed += numberButtons.textContent;
        updateDisplay(displayed);
      }
    })
    buttonsContainer.appendChild(numberButtons);
  }
}

function updateDisplay(text) {
  text = String(text);
  let i = 0;
  while (i < text.length-1 && text[i] === "0") {
    i += 1;
  }
  text = text.substring(i);
  display.textContent = text;
}

function equals() {
  if (firstNumber === null || secondNumber === null) {
    return;
  } 
  secondNumber = displayed;
  displayed = "";
  let result = operate(firstNumber, secondNumber, operator);
  if (result !== "lmfao") {
    result = Math.round(result * 1e7) / 1e7;
  }
  firstNumber = null;
  secondNumber = null;
  operator = null;
  updateDisplay(result);
  return result;
}

function evaluate() {
  if (firstNumber !== null) {
    firstNumber = String(equals());
  } else {
    firstNumber = displayed;
  }
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
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayed = "";
  updateDisplay("0");
})
buttonsContainer.appendChild(clearButton);

const signButton = document.createElement("button");
signButton.textContent = "+/-";
signButton.classList.add("btn", "top-buttons");
signButton.addEventListener("click", () => {
  if (displayed !== null || displayed !== "0") {
    displayed = "-" + displayed;
    updateDisplay(displayed);
  }
});
buttonsContainer.appendChild(signButton);

const modButton = document.createElement("button");
modButton.textContent = "%";
modButton.classList.add("btn", "top-buttons");
modButton.addEventListener("click", () => {
  evaluate();
  operator = "%";
});
buttonsContainer.appendChild(modButton);

const divideButton = document.createElement("button");
divideButton.textContent = "÷";
divideButton.classList.add("btn", "operation-buttons");
divideButton.addEventListener("click", () => {
  evaluate();
  operator = "/";
})
buttonsContainer.appendChild(divideButton);

addNumberedButtons(7, 9);

const multiplyButton = document.createElement("button");
multiplyButton.textContent = "×";
multiplyButton.classList.add("btn", "operation-buttons");
multiplyButton.addEventListener("click", () => {
  evaluate();
  operator = "*";
});
buttonsContainer.appendChild(multiplyButton);

addNumberedButtons(4, 6);

const subtractButton = document.createElement("button");
subtractButton.textContent = "-";
subtractButton.classList.add("btn", "operation-buttons");
subtractButton.addEventListener("click", () => {
  evaluate();
  operator = subtractButton.textContent;
});
buttonsContainer.appendChild(subtractButton);

addNumberedButtons(1, 3);

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.classList.add("btn", "operation-buttons");
addButton.addEventListener("click", () => {
  evaluate();
  operator = addButton.textContent;
})
buttonsContainer.appendChild(addButton);

const dummyButton = document.createElement("button");
dummyButton.classList.add("btn", "number-buttons");
buttonsContainer.appendChild(dummyButton);

addNumberedButtons(0, 0);

const decimalButton = document.createElement("button");
decimalButton.textContent = ".";
decimalButton.classList.add("btn", "number-buttons");
decimalButton.addEventListener("click", () => {
  if (!displayed.includes(".")) {
    displayed += ".";
    updateDisplay(displayed);
  }
})
buttonsContainer.appendChild(decimalButton);

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.classList.add("btn", "operation-buttons");
equalsButton.addEventListener("click", () => {
  equals();
});
buttonsContainer.appendChild(equalsButton);
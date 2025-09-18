let tempNumber = "";
let operationHolder = [];
const validOperators = ["+", "-", "*", "/"];
const display = document.getElementById("calc-display");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function setOperator(op) {
  // store number in list
  operationHolder.push(tempNumber, op);
  // empty temp number holder
  tempNumber = "";
}

function enterDigit(digit) {
  //tempNumber += digit;
  display.innerText += digit;
}

function clear() {
  alert(display.innerHTML);
}

function operate() {
  operationHolder.push(tempNumber);
  tempNumber = "";
  console.log(operationHolder);
  let bigResult = 0;
  for (let i = 0; i < operationHolder.length; i++) {
    if (operationHolder[i] in validOperators) {
      let number1 = operationHolder[i - 1];
      let number2 = operationHolder[i + 1];
      number1 = parseInt(number1);
      number2 = parseInt(number2);
      console.log(number1, number2);
      // console.log(number1, number2, operationHolder[i]);
      // result = calculator(number1, number2, operationHolder[i]);
      // bigResult += result;
    }
  }
  operationHolder = [];
  alert(bigResult);
}

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
    default:
      alert("Invalid operator" + operator);
  }
}

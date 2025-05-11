import "./style.css";
import { setupCalculatorUI } from "./ui.js";
import { hasConsecutiveOperators, evaluateExpression } from "./util.js";

const operators = ["+", "-", "*", "/", "="];
const calculatorDisplay = setupCalculatorUI(handleButtonClick);

function handleButtonClick(buttonValue) {
  let current = calculatorDisplay.value;

  if (buttonValue === "C") {
    calculatorDisplay.value = "";
    return;
  }

  if (current.includes("=")) {
    current = "";
    calculatorDisplay.value = "";
  }

  if (current === "" && ["+", "*", "/", "="].includes(buttonValue)) return;

  const lastChar = current.slice(-1);
  if (operators.includes(lastChar) && operators.includes(buttonValue)) return;

  if (buttonValue === "=") {
    if (hasConsecutiveOperators(current, operators)) {
      calculatorDisplay.value = "Error";
      return;
    }

    const result = evaluateExpression(current);
    calculatorDisplay.value = `${current}=${result}`;
  } else {
    calculatorDisplay.value += buttonValue;
  }
}

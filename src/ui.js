export function setupCalculatorUI(onButtonClick) {
  const calculatorDisplay = document.createElement("input");
  calculatorDisplay.className = "calculator-display";
  calculatorDisplay.readOnly = true;
  calculatorDisplay.value = "";
  document.body.appendChild(calculatorDisplay);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  document.body.appendChild(buttonContainer);

  const calculatorButtons = [
    "7",
    "8",
    "9",
    "+",
    "(",
    "4",
    "5",
    "6",
    "-",
    ")",
    "1",
    "2",
    "3",
    "*",
    "",
    "C",
    "0",
    "=",
    "/",
    "",
  ];

  calculatorButtons.forEach((buttonValue) => {
    if (!buttonValue) return;
    const button = document.createElement("button");
    button.className = "calculator-button";
    button.textContent = buttonValue;
    button.addEventListener("click", () => onButtonClick(buttonValue));
    buttonContainer.appendChild(button);
  });

  return calculatorDisplay;
}

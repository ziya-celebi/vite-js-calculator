export function hasConsecutiveOperators(expression) {
  const operators = ["+", "-", "*", "/"];
  for (let i = 0; i < expression.length - 1; i++) {
    if (
      operators.includes(expression[i]) &&
      operators.includes(expression[i + 1])
    ) {
      return true;
    }
  }
  return false;
}

export function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (e) {
    return "Error";
  }
}

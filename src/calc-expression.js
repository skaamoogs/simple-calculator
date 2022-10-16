export const formatExpression = (expression) => {
  const removeExtraDots = /(?<=\d*\.\d*)\./g;
  const removeExtraMath = /(?<=[^\d])[^\d.]/g;
  const putZeroBeforeSign = /(?=^[^\d])/;
  const newExpression = expression
    .replace(/&divide;/g, "/") // replace divide sign code to "/"
    .replace(/&times;/g, "*") // replace multiply sign code to "*"
    .replace(removeExtraDots, "") // remove extra dots
    .replace(removeExtraMath, "") // remove extra math signs
    .replace(putZeroBeforeSign, "0"); 

  return newExpression;
};

export const calculate = (expression) => {
  const actions = {
    "/": { re: /[\d.]+\/[\d.]+/g, calc: (a, b) => a / b },
    "*": { re: /[\d.]+\*[\d.]+/g, calc: (a, b) => a * b },
    "-": { re: /[\d.]+-[\d.]+/g, calc: (a, b) => a - b },
    "+": { re: /[\d.]+\+[\d.]+/g, calc: (a, b) => a + b },
    "^": { re: /[\d.]+\^[\d.]+/g, calc: (a, b) => a ** b },
  };
  const calcAction = (expression, action) => {
    const operations = expression.match(actions[action].re);
    let newExpression = expression;
    operations &&
      operations.map((operation) => {
        let [a, b] = parseExpression(operation);
        a = a ? parseFloat(a) : 0;
        b = b ? parseFloat(b) : 0;
        let result = actions[action].calc(a, b);
        newExpression = newExpression.replace(operation, `${result}`);
        return newExpression;
      });
    return newExpression;
  };
  return Object.keys(actions).reduce((newExpression, action) => {
    newExpression = calcAction(newExpression, action);
    return newExpression;
  }, expression);
};

const parseExpression = (expression) => {
  return expression.split(/[^\d.]/);
};

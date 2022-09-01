const { createContext, useState, useEffect } = require("react");

export const CalculatorContext = createContext({
  input: "0",
  output: "0",
  setInput: () => "",
  setOutput: () => "",
});

export const CalculatorProvider = ({ children }) => {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("0");

  useEffect(() => {
    const data = input.trim().split(" ");
    console.log(data);
    if (data.includes("=")) {
      const a = parseFloat(data[0]);
      const b = parseFloat(data[2]);
      const operation = data[1];
      let result = 0;
      switch (operation) {
        case "&divide;":
          result = a / b;
          break;
        case "&times;":
          result = a * b;
          break;
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        default:
          break;
      }
      console.log(result);
      setOutput(result.toString());
    } else {
      setOutput(input);
    }
  }, [input]);

  const value = { input, output, setInput, setOutput };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

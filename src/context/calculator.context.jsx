import { createContext, useState, useEffect } from "react";
import { calculate, formatExpression } from "../calc-expression";

export const CalculatorContext = createContext({
  input: "",
  output: "0",
  setInput: () => "",
  setOutput: () => "",
});

export const CalculatorProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");

  const value = { input, output, setInput, setOutput };

  useEffect(() => {
    if (input.slice(-1) === "=") {
      setOutput(calculate(formatExpression(input.slice(0, -1))));
    } else {
      setOutput(input ? formatExpression(input) : "0");
    }
  }, [input]);

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

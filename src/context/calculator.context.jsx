import { createContext, useState, useEffect } from "react";

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
    
    setOutput(input);
  }, [input]);

  const value = { input, output, setInput, setOutput };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

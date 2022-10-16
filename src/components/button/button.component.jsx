import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../../context/calculator.context";
import { ButtonStyles } from "./button.styles";
import parse from "html-react-parser";

const Button = ({ symbol }) => {
  const { input, setInput } = useContext(CalculatorContext);

  const onClickHandler = () => {
    if (symbol === "AC") {
      setInput("");
      return;
    }
    if (input.slice(-1) === "=") {
      setInput(symbol);
      return;
    }
    
    setInput(input + symbol);
  };


  return (
    <ButtonStyles onClick={onClickHandler} id={symbol}>
      <span>{parse(symbol)}</span>
    </ButtonStyles>
  );
};

export default Button;

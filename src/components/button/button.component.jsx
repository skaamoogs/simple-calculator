import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../../context/calculator.context";
import { ButtonStyles } from "./button.styles";
import parse from "html-react-parser";

const Button = ({ symbol }) => {
  const { input, setInput } = useContext(CalculatorContext);

  const onClickHandler = (event) => {
    let newInput = input;
    if (newInput[newInput.length - 1] === "=") {
      newInput = "";
    }
    if (symbol === "AC") {
      newInput = "0";
    } else {
      if ("0123456789".includes(newInput[newInput.length - 1])) {
        newInput += symbol;
      } else {
        if ("0123456789".includes(symbol)) {
          newInput += symbol;
        }
      }
      if (newInput === "") {
        newInput = symbol;
      }
    }

    if (newInput[0] === "0" && newInput.length > 1) {
      newInput = newInput.slice(1);
    }
    setInput(newInput);
  };

  return (
    <ButtonStyles onClick={onClickHandler} id={symbol}>
      <span>{parse(symbol)}</span>
    </ButtonStyles>
  );
};

export default Button;

import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator.context";
import { ButtonStyles } from "./button.styles";
import parse from "html-react-parser";

const Button = ({ symbol }) => {
  const { input, setInput } = useContext(CalculatorContext);

  const onClickHandler = (event) => {
    const currentInput = event.target.id;
    console.log(currentInput);
/*     let newInput = input;
    if ("0123456789.".includes(currentInput)) {
      if (input === "0") {
        newInput = currentInput;
        console.log("First digit");
      } else {
        newInput += currentInput;
        console.log("Digit");
      }
    } else if ("&divide;&times;+-()".includes(currentInput)) {
      newInput += " " + currentInput + " ";
      console.log("Math opertaion");
    } else if (currentInput === "=") {
      newInput += " " + currentInput + " ";
      console.log("Calculate");
    } else {
      newInput = "0";
      console.log("Reset");
    }
    setInput(newInput); */
  };
  //console.log("render Button")
  return (
    <ButtonStyles onClick={onClickHandler} id={symbol}>
      <span>{parse(symbol)}</span>
    </ButtonStyles>
  );
};

export default Button;

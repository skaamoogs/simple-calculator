import Button from "../button/button.component";
import {
  ButtonsContainer,
  CalculatorContainer,
  ResultField,
} from "./main.styles";
import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator.context";
import parse from "html-react-parser";

const Main = () => {
  const symbols = [
    ["(", ")", "%", "AC"],
    ["7", "8", "9", "&divide;"],
    ["4", "5", "6", "&times;"],
    ["1", "2", "3", "+"],
    ["0", ".", "=", "-"],
  ];

  const { output } = useContext(CalculatorContext);

  return (
    <CalculatorContainer>
      <ButtonsContainer>
        <ResultField>{parse(output)}</ResultField>
        {[].concat(...symbols).map((symbol) => (
          <Button symbol={symbol} key={symbol} />
        ))}
      </ButtonsContainer>
    </CalculatorContainer>
  );
};

export default Main;

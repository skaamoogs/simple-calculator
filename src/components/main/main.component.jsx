import Button from "../button/button.component";
import { ButtonsContainer, CalculatorContainer } from "./main.styles";

import Result from "../result/result.component";

const Main = () => {
  const symbols = [
    ["(", ")", "%", "AC"],
    ["7", "8", "9", "&divide;"],
    ["4", "5", "6", "&times;"],
    ["1", "2", "3", "+"],
    ["0", ".", "=", "-"],
  ];

  return (
    <CalculatorContainer>
      <ButtonsContainer>
        <Result />
        {[].concat(...symbols).map((symbol) => (
          <Button symbol={symbol} key={symbol} />
        ))}
      </ButtonsContainer>
    </CalculatorContainer>
  );
};

export default Main;

import Button from "../button/button.component";
import { ButtonsContainer, CalculatorContainer, Footer } from "./main.styles";

import Result from "../result/result.component";
import { Fragment } from "react";

const Main = () => {
  const symbols = [
    ["AC", "^", "&divide;"],
    ["7", "8", "9", "&times;"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    ["0", ".", "="],
  ];

  return (
    <Fragment>
      <CalculatorContainer>
        <ButtonsContainer>
          <Result />
          {[].concat(...symbols).map((symbol) => (
            <Button symbol={symbol} key={symbol} />
          ))}
        </ButtonsContainer>
      </CalculatorContainer>
      <Footer className="footer" >Made by skaamoogs</Footer>
    </Fragment>
  );
};

export default Main;

import parse from "html-react-parser";
import { useContext } from "react";
import { CalculatorContext } from "../../context/calculator.context";
import { ResultField } from "./result.styles";

const Result = () => {
    console.log("Result render")
  const { output } = useContext(CalculatorContext);

  return <ResultField>{parse(output)}</ResultField>;
};

export default Result;
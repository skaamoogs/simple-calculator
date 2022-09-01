import styled from "styled-components";

export const CalculatorContainer = styled.div`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px;
`;

export const ResultField = styled.span`
    text-align: right;
    margin: 10px;
    font-size: 1.5em;
    grid-column-start: span 4;
`

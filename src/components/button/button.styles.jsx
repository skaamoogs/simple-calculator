import styled from "styled-components";

export const ButtonStyles = styled.button`
  /* width: 100px; */
  height: 50px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  :hover {
    opacity: 0.8;
  }
  border-style: solid;
  border-width: 1px;
  background-color: #b2afaf;
  ${props => props.id === "AC" && "background-color: grey;"};
  ${props => ["AC", "0"].includes(props.id) && "grid-column: 1 / 3;"};
  ${props => ["^", "&divide;", "&times;", "+", "-", "="].includes(props.id) && "background-color: orange;"};
`;

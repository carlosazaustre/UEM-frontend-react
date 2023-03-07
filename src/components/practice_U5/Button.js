// Crea  un  componente  de  botón  que  utilice  styled-components  y  que  tenga  diferentes
// estilos según el estado del botón (por ejemplo, hovered, focused, disabled)
import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  &:hover {
    background-color: blue;
  }
  &:focus {
    background-color: green;
  }
  &:disabled {
    background-color: gray;
  }
`;

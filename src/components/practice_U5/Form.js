// Crea un componente de formulario que utilice styled-components y que tenga diferentes
// estilos según el tipo de campo (por ejemplo, texto, número, correo electrónico).
import styled, { css } from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  ${({ type }) =>
    type === "text" &&
    css`
      border: 1px solid black;
    `}
  ${({ type }) =>
    type === "number" &&
    css`
      border: 2px solid blue;
    `}
  ${({ type }) =>
    type === "email" &&
    css`
      border: 2px solid green;
    `}
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export function Form() {
  return (
    <Wrapper>
      <Label>Nombre</Label>
      <Input type="text" />
      <Label>Número</Label>
      <Input type="number" />
      <Label>Correo electrónico</Label>
      <Input type="email" />
      <Button>Enviar</Button>
    </Wrapper>
  );
}

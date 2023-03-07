// Crea  un  componente  de  tarjeta  que  utilice  styled-components  y  que  tenga  diferentes
// estilos según el tamaño de la tarjeta (por ejemplo, pequeña, mediana, grande).
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  margin: 16px;
  ${({ size }) =>
    size === "small" &&
    css`
      width: 200px;
      min-height: 200px;
    `}
  ${({ size }) =>
    size === "medium" &&
    css`
      width: 300px;
      min-height: 350px;
    `}
  ${({ size }) =>
    size === "large" &&
    css`
      width: 400px;
      min-height: 500px;
    `}
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Content = styled.p`
  font-size: 16px;
`;

export function Card({ size = "small" }) {
  return (
    <Wrapper size={size}>
      <Title>Titulo de la tarjeta</Title>
      <Content>Contenido de la tarjeta</Content>
    </Wrapper>
  );
}

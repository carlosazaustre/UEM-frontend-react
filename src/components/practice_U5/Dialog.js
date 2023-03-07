// Crea  un  componente  de  diálogo  que  utilice  styled-components  y  que  tenga  diferentes
// estilos según el tipo de diálogo (por ejemplo, informativo, de confirmación, de alerta).
import styled, { css, ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

export const Dialog = ({ type, message, onConfirm, onCancel }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Overlay />
        <Content>
          {type === "info" && (
            <>
              <Title>Información</Title>
              <Message>{message}</Message>
              <Button onClick={onConfirm}>OK</Button>
            </>
          )}
          {type === "confirm" && (
            <>
              <Title>Confirmación</Title>
              <Message>{message}</Message>
              <ButtonGroup>
                <Button onClick={onConfirm}>Sí</Button>
                <Button onClick={onCancel}>No</Button>
              </ButtonGroup>
            </>
          )}
          {type === "alert" && (
            <>
              <Title>Alerta</Title>
              <Message>{message}</Message>
              <Button onClick={onConfirm}>OK</Button>
            </>
          )}
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  width: 400px;
  ${({ type }) =>
    type === "info" &&
    css`
      border: 2px solid #007bff;
    `}
  ${({ type }) =>
    type === "confirm" &&
    css`
      border: 2px solid #28a745;
    `}
  ${({ type }) =>
    type === "alert" &&
    css`
      border: 2px solid #dc3545;
    `}
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 8px;
  &:first-of-type {
    margin-left: 0;
  }
  ${({ type }) =>
    type === "info" &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
  ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: #28a745;
    `}
  ${({ type }) =>
    type === "alert" &&
    css`
      background-color: #dc3545;
    `}
`;

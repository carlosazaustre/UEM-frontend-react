// Crea  un  componente  de  página  que  utilice  styled-components  y  que  tenga  diferentes
// estilos según el tamaño de la pantalla (por ejemplo, móvil, tablet, escritorio).
import styled, { ThemeProvider } from "styled-components";
import exampleImage from "./image.png";

const theme = {
  breakpoints: {
    mobile: "@media (max-width: 768px)",
    tablet: "@media (min-width: 768px) and (max-width: 1024px)",
    desktop: "@media (min-width: 1024px)",
  },
};

export const Page = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>¡Bienvenido!</Title>
        <Content>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            ante sed sapien eleifend, vel luctus sapien tristique. Mauris
            vulputate velit enim, vel malesuada nulla malesuada vel. Suspendisse
            potenti. Duis eget ligula ut turpis dignissim auctor vel ac tellus.
            Duis in magna sit amet quam dictum facilisis. Fusce placerat, nibh
            at malesuada sagittis, elit elit hendrerit arcu, vel scelerisque
            enim ipsum eu lectus.
          </Paragraph>
          <Image src={exampleImage} />
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.breakpoints.mobile} {
    padding: 16px;
    font-size: 14px;
  }
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 32px;
    font-size: 16px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 64px;
    font-size: 18px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

const Content = styled.div`
  display: flex;
  ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
    align-items: center;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 16px;
  ${({ theme }) => theme.breakpoints.desktop} {
    font-size: 20px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  ${({ theme }) => theme.breakpoints.tablet} {
    max-width: 50%;
    margin-left: 32px;
  }
`;

import styled, { keyframes } from "styled-components";
const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

export const RegisterPage = styled.div`
  height: 100vh;
  padding: 0 5vw;
  animation: ${appear} 1.5s;
  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 480px;
  }
`;

export const RegisterHeader = styled.div`
  height: 10vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  Button {
    width: 25vw;
    max-width: 70px;
  }

  @media (min-width: 768px) {
    max-width: 480px;
  }
`;

export const RegisterMain = styled.div`
  background-color: var(--grey3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1vh;
  padding: 2vh 5vw;
  border-radius: 8px;

  Button {
    margin-top: 1vh;
    min-width: 100%;
  }

  @media (min-width: 768px) {
    padding: 2vh 40px;
  }
`;
export const RegisterMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;

  h2 {
    font-size: 16px;
  }

  h3 {
    color: var(--grey1);
    font-size: 10px;
  }
`;

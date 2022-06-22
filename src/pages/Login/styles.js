import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 5vh;

  h1 {
    color: var(--pink);
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  background-color: var(--grey3);
  width: 85vw;
  border-radius: 8px;
  padding: 35px 15px;
  max-width: 369px;

  h2 {
    color: var(--grey0);
    font-weight: bold;
    font-size: 22px;
  }

  Button {
    min-width: 100%;
  }

  span {
    color: var(--grey1);
    font-size: 12px;
  }
`;

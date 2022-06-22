import styled from "styled-components";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  background-color: var(--grey3);
  height: 25vh;
  width: 85vw;
  max-width: 369px;
  padding: 35px 15px;
  border-radius: 8px;

  h1 {
    color: var(--pink);
    font-weight: bold;
    font-size: 22px;
  }

  h2 {
    color: var(--grey0);
    font-weight: 600;
    font-size: 16px;
  }

  Button {
    min-width: 100%;
  }
`;

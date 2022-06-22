import styled from "styled-components";

export const DashboardPage = styled.div`
  height: 100vh;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  border-bottom: 1px solid var(--grey3);
  padding: 0 3vw;

  Button {
    max-width: 60px;
    height: 40px;
  }

  @media (min-width: 768px) {
    padding: 0 20vw;
  }
`;

export const MainInfo = styled.div`
  height: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vh;
  padding: 0 3vw;
  border-bottom: 1px solid var(--grey3);

  h3 {
    font-size: 12px;
    color: #868e96;
  }

  @media (min-width: 768px) {
    padding: 0 20vw;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MainContainer = styled.div`
  height: 72vh;
  padding: 0 3vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0 20vw;
  }
`;

export const ContainerHeader = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 16px;
    font-weight: 600;
  }

  Button {
    max-width: 40px;
    height: 40px;
  }
`;

export const ContainerMain = styled.div`
  background-color: var(--grey3);
  max-height: 53vh;
  border-radius: 4px;
  overflow-y: scroll;
  border-top: 20px solid var(--grey3);
  border-bottom: 20px solid var(--grey3);
  border-left: 10px solid var(--grey3);
  border-right: 10px solid var(--grey3);

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  li {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey4);
    height: 50px;
    align-items: center;
    padding: 0 20px;
    color: var(--grey0);
    border-radius: 4px;
  }

  h4 {
    font-size: 14px;
  }

  h5 {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey1);
  }
`;

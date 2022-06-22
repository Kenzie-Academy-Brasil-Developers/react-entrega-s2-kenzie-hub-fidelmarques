import styled from "styled-components";

export const PopupBG = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Container = styled.div`
  width: 85vw;
  max-width: 370px;
  /* height: 45vh; */
  display: block;
  background-color: var(--grey3);
  margin: 20vh auto;
  border-radius: 10px;
`;

export const Header = styled.div`
  background-color: var(--grey2);
  max-width: 320px;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Main = styled.div`
  padding: 2vh 25px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  Button {
    width: 100%;
  }
`;

import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const disappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const disappearToTop = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-150px);
  }
`;

export const PopupBG = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  animation: ${(props) => (props.state ? appear : disappear)} 1s;
`;

export const Container = styled.div`
  width: 85vw;
  max-width: 370px;
  /* height: 45vh; */
  display: block;
  background-color: var(--grey3);
  margin: 20vh auto;
  border-radius: 10px;
  animation: ${appearFromBottom} 1s;
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

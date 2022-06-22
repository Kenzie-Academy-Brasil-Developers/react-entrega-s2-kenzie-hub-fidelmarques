import styled from "styled-components";

export const Container = styled.button`
  height: 6vh;
  border-radius: 4px;
  color: white;
  background-color: ${(props) => `var(--${props.color})`};
  width: 50vw;
  max-width: 350px;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => `var(--${props.color}Focus)`};
    transition: 0.5s;
  }
`;

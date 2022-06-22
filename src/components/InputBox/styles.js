import styled from "styled-components";

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  color: white;
  width: 100%;

  label {
    text-align: left;
    font-size: 12px;
  }

  input {
    all: unset;
    height: 6vh;
    border-radius: 4px;
    border: 1px solid var(--grey2);
    color: var(--grey0);
    text-align: left;
    padding: 0 15px;
    background-color: var(--grey2);
    &:focus {
      border: 1px solid var(--grey0);
    }
  }
`;

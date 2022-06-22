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
    min-height: 15px;
  }

  span {
    color: red;
  }

  div {
    display: flex;
    height: 6vh;
    border-radius: 4px;
    color: var(--grey0);
    background-color: var(--grey2);
    align-items: center;
    text-align: center;
    padding: 0 10px;
    gap: 10px;
    border: 1px solid var(--grey2);

    &:focus {
      border: 1px solid var(--grey0);
    }
    flex-direction: row;
    justify-content: center;
  }

  input,
  select {
    height: 6vh;
    width: calc(100%);
    border-radius: 4px;
    border: 1px solid var(--grey2);
    background-color: var(--grey2);
    text-align: left;
    color: var(--grey0);
  }
`;

export const ErrorMessage = styled.h5`
  color: red;
  text-align: right;
  max-width: fit-content;
`;

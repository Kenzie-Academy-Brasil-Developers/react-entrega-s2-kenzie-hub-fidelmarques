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

  input,
  select {
    height: 5vh;
    width: calc(100%);
    border-radius: 4px;
    border: 1px solid var(--grey2);
    background-color: var(--grey2);
    text-align: left;
    color: var(--grey0);
  }
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6vh;
  border-radius: 4px;
  color: var(--grey0);
  background-color: var(--grey2);
  align-items: center;
  text-align: center;
  gap: 10px;
  border: 1px solid var(--grey1);
  padding-left: 10px;

  input {
  }
`;

export const ErrorMessage = styled.h5`
  color: red;
  text-align: right;
  max-width: fit-content;
`;

import styled from "styled-components";

export const Container = styled.button`
  height: 3.125rem;
  width: 100%;
  background: ${(props) => props.theme.purple};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

import styled from "styled-components";

export const Container = styled.input`
  height: 3.125rem;
  width: 100%;
  background: ${(props) => props.theme.white};
  padding: 0.625rem;
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 5px;

  &:focus {
    border-color: ${(props) => props.theme.purple};
  }
`;

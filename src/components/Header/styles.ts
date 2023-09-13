import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 2rem 1.25rem;
  background: ${(props) => props.theme.purple};
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

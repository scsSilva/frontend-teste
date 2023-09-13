import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
`;

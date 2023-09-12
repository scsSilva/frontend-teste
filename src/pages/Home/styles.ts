import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.main`
  height: 20rem;
  width: 31.25rem;
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
`;

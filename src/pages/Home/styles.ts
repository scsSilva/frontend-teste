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

  @media (max-width: 550px) {
    height: 35rem;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

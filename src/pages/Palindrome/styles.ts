import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.light};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  & > div {
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: flex-start;

    @media (max-width: 450px) {
      margin-bottom: 3rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Form = styled.form`
  flex: 1;
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 450px) {
    width: 20rem;
  }
`;

export const ContentData = styled.main`
  flex: 1;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 450px) {
    width: 20rem;
  }

  @media (min-width: 600px) {
    margin-top: 3rem;
  }
`;

export const ListData = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const BadgeNumber = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.purple};

  & span {
    font-size: 1rem;
    color: ${(props) => props.theme.white};
  }
`;
